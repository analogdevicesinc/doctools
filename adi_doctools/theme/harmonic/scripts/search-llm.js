"use strict";

/**
 * LLM / vector search backend.
 *
 * Loads TurboQuant WASM + all-MiniLM-L6-v2 embedder and performs
 * cosine-similarity search over compressed passage vectors.
 */

const POOL_SIZE     = 30
const HEADING_BOOST = 0.02
const TERM_BOOST    = 0.05
const TITLE_BOOST   = 0.04

let _tqClassPromise = null
let _embedder = null
let _embedderLoading = false
let _pendingQuery = null

/**
 * Lazy load TurboQuant WASM class.
 */
export function getTurboQuantClass (contentRoot) {
  if (!_tqClassPromise) {
    const url = new URL(
      `${contentRoot}_static/turboquant-wasm.js`,
      location
    ).href
    const imp = new Function('u', 'return import(u)')
    _tqClassPromise = imp(url).then(m => m.TurboQuant)
  }
  return _tqClassPromise
}

/**
 * Lazily load @xenova/transformers and initialise all-MiniLM-L6-v2.
 * When ready, calls `onReady(pendingQuery)` if a query was deferred.
 */
export async function initEmbedder (invPrefix, onReady) {
  if (_embedder || _embedderLoading) return
  _embedderLoading = true
  console.log('search-llm: loading transformer')
  try {
    const imp = new Function('u', 'return import(u)')
    const { pipeline, env } = await imp(`${invPrefix}node_modules/@xenova/transformers/dist/transformers.js`)
    env.allowLocalModels = false
    env.backends.onnx.wasm.wasmPaths = `${invPrefix}node_modules/@xenova/transformers/dist/`
    _embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2')
    console.log('search-llm: transformer ready')
    if (_pendingQuery && onReady) {
      const q = _pendingQuery
      _pendingQuery = null
      onReady(q)
    }
  } catch (err) {
    console.error('Vector search: failed to load embedding model:', err)
  } finally {
    _embedderLoading = false
  }
}

export function isEmbedderReady ()  { return !!_embedder }
export function isEmbedderLoading () { return _embedderLoading }

export function setPendingQuery (q) { _pendingQuery = q }
export function getPendingQuery ()  { return _pendingQuery }

export async function embedQuery (text) {
  const out = await _embedder([text], { pooling: 'mean', normalize: true })
  return new Float32Array(out.data)
}

export function parseTqvHeader (buffer) {
  const view = new DataView(buffer)
  const magic = new Uint8Array(buffer, 0, 4)
  if (magic[0] !== 0x54 || magic[1] !== 0x51 || magic[2] !== 0x56 || magic[3] !== 0x00)
    throw new Error('Invalid vector db magic')
  return {
    numVectors:     view.getUint32(5, true),
    dim:            view.getUint16(9, true),
    seed:           view.getUint32(11, true),
    bytesPerVector: view.getUint16(15, true),
  }
}

/**
 * Load compressed.tqv + passages.json, init TurboQuant instance.
 * Returns { tq, passages, compressedConcat, bytesPerVector, dim } on success.
 */
export async function loadVectorIndex (url, contentRoot) {
  const url_passages = `${url}passages.json`
  const url_vec      = `${url}embeddings-minilml6-dim384.bin`

  let TurboQuant, response_passages, response_vec
  try {
    ;[TurboQuant, response_passages, response_vec] = await Promise.all([
      getTurboQuantClass(contentRoot),
      fetch(new Request(url_passages)),
      fetch(new Request(url_vec)),
    ])
  } catch (err) {
    if (err instanceof TypeError) return null  // network failure
    throw err
  }

  if (!response_passages.ok || !response_vec.ok) return null

  const passages = await response_passages.json()
  const tqvBuf   = await response_vec.arrayBuffer()
  const hdr      = parseTqvHeader(tqvBuf)
  const compressedConcat = new Uint8Array(tqvBuf, 17, hdr.numVectors * hdr.bytesPerVector)
  const tq = await TurboQuant.init({ dim: hdr.dim, seed: hdr.seed })

  return { tq, passages, compressedConcat, bytesPerVector: hdr.bytesPerVector, dim: hdr.dim }
}

function _heading_match_score (queryTerms, hierarchy) {
  const hierarchy_str = (hierarchy || []).join(' ').toLowerCase()
  const heading = (hierarchy[hierarchy.length - 1] || '').toLowerCase()

  let score = 0
  for (const t of queryTerms) {
    if (hierarchy_str.includes(t)) {
      score += TERM_BOOST
      if (heading.includes(t)) score += TITLE_BOOST
    }
  }
  return score
}

/**
 * Perform vector similarity search.
 * Returns { pool: number[], scores: Float64Array }
 */
export function vector_search (queryVec, queryText, data) {
  const scores = data.tq.dotBatch(queryVec, data.compressedConcat, data.bytesPerVector)
  const queryTerms = queryText.toLowerCase().split(/\s+/).filter(t => t.length > 1)

  for (let i = 0; i < scores.length; i++) {
    const hierarchy = data.passages.hierarchy[i]
    const bDepth = hierarchy ? hierarchy.length : 0
    scores[i] += HEADING_BOOST / (1 + bDepth)
    if (queryTerms.length > 0)
      scores[i] += _heading_match_score(queryTerms, hierarchy)
  }

  const indices = Array.from({ length: scores.length }, (_, i) => i)
  indices.sort((a, b) => scores[b] - scores[a])
  return { pool: indices.slice(0, POOL_SIZE), scores }
}

/**
 * Group vector results into the common format.
 * Returns array of { name, entries: [{idx, score}], rank }.
 */
export function group_results (pool, scores, passages) {
  const groups = pool.reduce((acc, idx) => {
    const hierarchy = passages.hierarchy[idx]
    const key = `${hierarchy[0]} / ${hierarchy[1]}` || hierarchy[0] || 'General'

    if (!acc[key])
      acc[key] = []

    acc[key].push({ idx: idx, score: scores[idx] })

    return acc
  }, {})

  const sorted_groups = Object.entries(groups)
    .map(([name, entries]) => {
      const rank = entries
        .filter(m => m.score > 0.4)
        .reduce((sum, m) => sum + m.score, 0);

      return { name, entries, rank }
    })
    .sort((a, b) => b.rank - a.rank)

  return sorted_groups
}
