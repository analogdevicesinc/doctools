"use strict";

/**
 * Sphinx keyword search backend.
 *
 * Loads the classic Sphinx searchindex.js and optionally passages.json
 * (for richer result text).  Produces results in the same grouped format
 * that the shared Search renderer expects.
 */

const _escapeRegExp = (string) =>
  string.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");

if (typeof Scorer === "undefined") {
  var Scorer = {
    objNameMatch: 11,
    objPartialMatch: 6,
    objPrio: { 0: 15, 1: 5, 2: -5 },
    objPrioDefault: 0,
    title: 15,
    partialTitle: 7,
    term: 5,
    partialTerm: 2,
  };
}

/**
 * Split query into terms (mirrors Sphinx's split behaviour).
 */
function split_query (query) {
  return query
    .split(/[^\p{Letter}\p{Number}_\p{Emoji_Presentation}]+/gu)
    .filter(term => term)
}

/**
 * Parse a raw query string into search / excluded / highlight / object term sets.
 * Requires the global `Stemmer` and `stopwords` provided by Sphinx language_data.js.
 */
export function parse_query (query) {
  const stemmer = new Stemmer();
  const searchTerms = new Set();
  const excludedTerms = new Set();
  const highlightTerms = new Set();
  const objectTerms = new Set(split_query(query.toLowerCase().trim()));

  split_query(query.trim()).forEach((queryTerm) => {
    const queryTermLower = queryTerm.toLowerCase();

    if (stopwords instanceof Set) {
      if (stopwords.has(queryTermLower) || queryTerm.match(/^\d+$/))
        return;
    } else {
      if (stopwords.indexOf(queryTermLower) !== -1 || queryTerm.match(/^\d+$/))
        return;
    }

    let word = stemmer.stemWord(queryTermLower);
    if (word[0] === "-") excludedTerms.add(word.substr(1));
    else {
      searchTerms.add(word);
      highlightTerms.add(queryTermLower);
    }
  });

  localStorage.setItem("sphinx_highlight_terms", [...highlightTerms].join(" "))
  return [query, searchTerms, excludedTerms, highlightTerms, objectTerms];
}

function perform_object_search (object, objectTerms, index) {
  const filenames = index.filenames;
  const docNames  = index.docnames;
  const objects   = index.objects;
  const objNames  = index.objnames;
  const titles    = index.titles;
  const results   = [];

  const cb = (prefix, match) => {
    const name = match[4]
    const fullname = (prefix ? prefix + "." : "") + name;
    const fullnameLower = fullname.toLowerCase();
    if (fullnameLower.indexOf(object) < 0) return;

    let score = 0;
    const parts = fullnameLower.split(".");

    if (fullnameLower === object || parts.slice(-1)[0] === object)
      score += Scorer.objNameMatch;
    else if (parts.slice(-1)[0].indexOf(object) > -1)
      score += Scorer.objPartialMatch;

    const objName = objNames[match[1]][2];
    const title = titles[match[0]];

    const otherTerms = new Set(objectTerms);
    otherTerms.delete(object);
    if (otherTerms.size > 0) {
      const haystack = `${prefix} ${name} ${objName} ${title}`.toLowerCase();
      if ([...otherTerms].some((t) => haystack.indexOf(t) < 0))
        return;
    }

    let anchor = match[3];
    if (anchor === "") anchor = fullname;
    else if (anchor === "-") anchor = objNames[match[1]][1] + "-" + fullname;

    const descr = objName + ", in " + title;

    if (Scorer.objPrio.hasOwnProperty(match[2]))
      score += Scorer.objPrio[match[2]];
    else score += Scorer.objPrioDefault;

    results.push([
      docNames[match[0]], fullname, "#" + anchor, descr, score,
      filenames[match[0]], "object",
    ]);
  };

  Object.keys(objects).forEach((prefix) =>
    objects[prefix].forEach((array) => cb(prefix, array))
  );
  return results;
}

function perform_terms_search (searchTerms, excludedTerms, index) {
  const terms      = index.terms;
  const titleTerms = index.titleterms;
  const filenames  = index.filenames;
  const docNames   = index.docnames;
  const titles     = index.titles;

  const scoreMap = new Map();
  const fileMap  = new Map();

  searchTerms.forEach((word) => {
    const files = [];
    const arr = [
      { files: terms.hasOwnProperty(word) ? terms[word] : undefined, score: Scorer.term },
      { files: titleTerms.hasOwnProperty(word) ? titleTerms[word] : undefined, score: Scorer.title },
    ];
    if (word.length > 2) {
      const escapedWord = _escapeRegExp(word);
      if (!terms.hasOwnProperty(word)) {
        Object.keys(terms).forEach((term) => {
          if (term.match(escapedWord))
            arr.push({ files: terms[term], score: Scorer.partialTerm });
        });
      }
      if (!titleTerms.hasOwnProperty(word)) {
        Object.keys(titleTerms).forEach((term) => {
          if (term.match(escapedWord))
            arr.push({ files: titleTerms[term], score: Scorer.partialTitle });
        });
      }
    }

    if (arr.every((r) => r.files === undefined)) return;

    arr.forEach((record) => {
      if (record.files === undefined) return;
      let recordFiles = record.files;
      if (recordFiles.length === undefined) recordFiles = [recordFiles];
      files.push(...recordFiles);
      recordFiles.forEach((file) => {
        if (!scoreMap.has(file)) scoreMap.set(file, new Map());
        scoreMap.get(file).set(word, record.score);
      });
    });

    files.forEach((file) => {
      if (!fileMap.has(file)) fileMap.set(file, [word]);
      else if (fileMap.get(file).indexOf(word) === -1) fileMap.get(file).push(word);
    });
  });

  const results = [];
  for (const [file, wordList] of fileMap) {
    const filteredTermCount = [...searchTerms].filter((t) => t.length > 2).length;
    if (wordList.length !== searchTerms.size && wordList.length !== filteredTermCount)
      continue;

    if (
      [...excludedTerms].some(
        (term) =>
          terms[term] === file || titleTerms[term] === file ||
          (terms[term] || []).includes(file) || (titleTerms[term] || []).includes(file)
      )
    )
      break;

    const score = Math.max(...wordList.map((w) => scoreMap.get(file).get(w)));
    results.push([
      docNames[file], titles[file], "", null, score, filenames[file], "text",
    ]);
  }
  return results;
}

const _orderResultsByScoreThenName = (a, b) => {
  const leftScore  = a[4];
  const rightScore = b[4];
  if (leftScore === rightScore) {
    const leftTitle  = a[1].toLowerCase();
    const rightTitle = b[1].toLowerCase();
    if (leftTitle === rightTitle) return 0;
    return leftTitle > rightTitle ? -1 : 1;
  }
  return leftScore > rightScore ? 1 : -1;
};

/**
 * Full Sphinx search across all index types.
 * Returns an array of [docname, title, anchor, descr, score, filename, kind].
 */
export function perform_search (query, searchTerms, excludedTerms, highlightTerms, objectTerms, index) {
  const filenames    = index.filenames;
  const docNames     = index.docnames;
  const titles       = index.titles;
  const allTitles    = index.alltitles;
  const indexEntries = index.indexentries;

  const normalResults        = [];
  const nonMainIndexResults  = [];

  const queryLower = query.toLowerCase().trim();
  for (const [title, foundTitles] of Object.entries(allTitles)) {
    if (title.toLowerCase().trim().includes(queryLower) && (queryLower.length >= title.length / 2)) {
      for (const [file, id] of foundTitles) {
        const score = Math.round(Scorer.title * queryLower.length / title.length)
        const boost = titles[file] === title ? 1 : 0
        normalResults.push([
          docNames[file],
          titles[file] !== title ? `${titles[file]} > ${title}` : title,
          id !== null ? "#" + id : "",
          null, score + boost, filenames[file], "title",
        ]);
      }
    }
  }

  for (const [entry, foundEntries] of Object.entries(indexEntries)) {
    if (entry.includes(queryLower) && (queryLower.length >= entry.length / 2)) {
      for (const [file, id, isMain] of foundEntries) {
        const score = Math.round(100 * queryLower.length / entry.length)
        const result = [
          docNames[file], titles[file], id ? "#" + id : "",
          null, score, filenames[file], "index",
        ];
        if (isMain) normalResults.push(result);
        else nonMainIndexResults.push(result);
      }
    }
  }

  objectTerms.forEach((term) =>
    normalResults.push(...perform_object_search(term, objectTerms, index))
  );

  normalResults.push(...perform_terms_search(searchTerms, excludedTerms, index))

  if (Scorer.score) {
    normalResults.forEach((item) => (item[4] = Scorer.score(item)))
    nonMainIndexResults.forEach((item) => (item[4] = Scorer.score(item)))
  }

  normalResults.sort(_orderResultsByScoreThenName)
  nonMainIndexResults.sort(_orderResultsByScoreThenName)

  let results = [...nonMainIndexResults, ...normalResults]

  let seen = new Set();
  results = results.reverse().reduce((acc, result) => {
    let resultStr = result.slice(0, 4).concat([result[5]]).map(v => String(v)).join(',')
    if (!seen.has(resultStr)) {
      acc.push(result);
      seen.add(resultStr);
    }
    return acc;
  }, []);

  return results.reverse();
}

/**
 * Load the Sphinx searchindex.js for a given key.
 * Returns a Promise that resolves to the parsed index object.
 */
export function load_sphinx_index (url) {
  return fetch(new Request(url))
    .then((response) => response.text())
    .then((text) => {
      if (text.substring(0, 16) !== "Search.setIndex(" || text.substring(text.length - 1) !== ")")
        throw new Error(`Search index is improperly formatted`)
      return JSON.parse(text.substring(16, text.length - 1))
    })
}

/**
 * Convert Sphinx flat results into the grouped format used by the shared renderer.
 *
 * Each Sphinx result is [docname, title, anchor, descr, score, filename, kind].
 * Sphinx results are rendered as a flat list (one entry per group) since they
 * lack the rich breadcrumb hierarchy that makes LLM grouping useful.
 * Text snippets are pulled from passages.json when available.
 */
export function sphinx_results_to_groups (results, passages) {
  const passages_url = new Map()
  if (passages) {
    for (let i = 0; i < passages.url.length; i++)
      passages_url.set(passages.url[i], i)
  }

  const items = []
  const groups = []

  for (const result of results.reverse()) {
    const [docName, title, anchor, descr, score] = result
    const url_page = `${docName}.html`
    const url_full = anchor ? `${url_page}${anchor}` : url_page

    let text = descr || ''
    const passage = passages_url.get(url_full)
    if (passage !== undefined)
      text = passages.text[passage] || text

    const idx = items.length
    items.push({ url: url_full, hierarchy: [title], text })
    groups.push({ name: title, entries: [{ idx, score }], rank: score })
  }

  return { groups, items }
}

function _url_page (url) {
  const i = url.indexOf('#')
  return i === -1 ? url : url.slice(0, i)
}
