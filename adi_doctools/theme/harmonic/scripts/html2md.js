"use strict";

import {DOM} from './dom.js'

/**
 * JS version of aux_html2md.py SphinxHTMLToMarkdown
 */
export class HTMLToMarkdown {
  constructor (baseUrl) {
    this.baseUrl = baseUrl || window.location.href
    this.output = []
  }

  /**
   * Convert HTML content to Markdown.
   * @param {HTMLElement} element - The HTML element to convert
   * @returns {string} Markdown string
   */
  convert (element) {
    this.output = []

    this.processElement(element)

    return this.output.join('\n').trim() + '\n'
  }

  /**
   * Recursively process HTML elements.
   * @param {HTMLElement} elem - Element to process
   * @param {number} listDepth - Current list nesting depth
   */
  processElement (elem, listDepth = 0) {
    if (!elem || elem.nodeType !== Node.ELEMENT_NODE) {
      return
    }

    const tag = elem.tagName.toLowerCase()
    const classes = elem.className || ''

    if (tag.match(/^h[1-6]$/)) {
      this.handleHeading(elem)
    } else if (tag === 'p') {
      this.handleParagraph(elem)
    } else if (tag === 'pre') {
      this.handlePre(elem)
    } else if (tag === 'figure') {
      this.handleFigure(elem)
    } else if (tag === 'img' && elem.parentElement.tagName.toLowerCase() !== 'figure') {
      this.handleStandaloneImage(elem)
    } else if (tag === 'ul') {
      this.handleList(elem, false, listDepth)
    } else if (tag === 'ol') {
      this.handleList(elem, true, listDepth)
    } else if (tag === 'table') {
      this.handleTable(elem)
    } else if (tag === 'a') {
      this.processChildren(elem, listDepth)
    } else if (tag === 'section') {
      this.processChildren(elem, listDepth)
    } else if (classes.includes('admonition') ||
               ['note', 'warning', 'attention', 'important', 'tip', 'caution'].some(
                 adm => classes.includes(adm))) {
      this.handleAdmonition(elem)
    } else if (tag === 'div') {
      if (classes.includes('highlight') || classes.includes('literal-block')) {
        const pre = elem.querySelector('pre')
        if (pre) {
          this.handlePre(pre)
        } else {
          this.processChildren(elem, listDepth)
        }
      } else if (classes.includes('code-shell')) {
        this.handleShell(elem)
      } else {
        this.processChildren(elem, listDepth)
      }
    } else if (tag === 'dl') {
      this.handleDefinitionList(elem)
    } else if (tag === 'dt' || tag === 'dd') {
      // Skip - handled by handleDefinitionList
    } else {
      this.processChildren(elem, listDepth)
    }
  }

  /**
   * Process all children of an element.
   * @param {HTMLElement} elem - Parent element
   * @param {number} listDepth - Current list nesting depth
   */
  processChildren (elem, listDepth = 0) {
    Array.from(elem.children).forEach(child => {
      this.processElement(child, listDepth)
    })
  }

  /**
   * Convert heading to Markdown.
   * @param {HTMLElement} elem - Heading element
   */
  handleHeading (elem) {
    const level = parseInt(elem.tagName[1])
    const text = this.getText(elem).trim()

    if (text) {
      this.output.push('')
      this.output.push('#'.repeat(level) + ' ' + text)
      this.output.push('')
    }
  }

  /**
   * Convert paragraph to Markdown.
   * @param {HTMLElement} elem - Paragraph element
   */
  handleParagraph (elem) {
    const text = this.getText(elem).trim()
    if (text) {
      this.output.push('')
      this.output.push(text)
    }
  }

  /**
   * Process code-shell blocks.
   * @param {HTMLElement} elem - Code-shell div element
   */
  handleShell (elem) {
    const output = []
    let language = ''

    const pres = elem.querySelectorAll('pre')
    pres.forEach(pre => {
      const result = this.handlePre(pre, true)
      if (result.language === 'default') {
        output.push(result.code + ' ')
      } else if (result.language === 'text') {
        output.push(result.code)
      } else { // bash
        language = result.language
        output[output.length - 1] += result.code
      }
    })

    this.output.push('')
    this.output.push('```' + language)
    this.output.push(...output)
    this.output.push('```')
    this.output.push('')
  }

  /**
   * Convert code block to Markdown.
   * @param {HTMLElement} elem - Pre element
   * @param {boolean} codeShell - If processing code-shell
   * @returns {Object|undefined} Language and code if codeShell, undefined otherwise
   */
  handlePre (elem, codeShell = false) {
    let language = ''
    const parent = elem.parentElement?.parentElement

    const getLanguage = (elem) => {
      const classes = elem.className || ''
      const langMatch = classes.match(/highlight-(\w+)|language-(\w+)/)
      if (langMatch) {
        return langMatch[1] || langMatch[2]
      }
      return ''
    }

    if (parent) {
      language = getLanguage(parent)
    }

    const code = elem.textContent.trimEnd()

    if (!codeShell) {
      this.output.push('')
      this.output.push('```' + language)
      this.output.push(code)
      this.output.push('```')
      this.output.push('')
      return
    }

    return {language, code}
  }

  /**
   * Convert figure with caption to Markdown.
   * @param {HTMLElement} elem - Figure element
   */
  handleFigure (elem) {
    const img = elem.querySelector('img')
    const figcaption = elem.querySelector('figcaption')

    if (img) {
      let src = img.getAttribute('src') || ''
      let alt = img.getAttribute('alt') || ''

      if (src) {
        src = this.resolveUrl(src)
      }

      // Clear alt if it equals the url
      if (alt === src || alt === img.getAttribute('src')) {
        alt = ''
      }

      this.output.push('')
      this.output.push(`![${alt}](${src})`)

      if (figcaption) {
        const caption = this.getText(figcaption).trim()
        if (caption) {
          this.output.push('')
          this.output.push(`*${caption}*`)
        }
      }

      this.output.push('')
    }
  }

  /**
   * Convert standalone image to Markdown.
   * @param {HTMLElement} elem - Image element
   */
  handleStandaloneImage (elem) {
    let src = elem.getAttribute('src') || ''
    let alt = elem.getAttribute('alt') || ''
    const originalSrc = elem.getAttribute('src') || ''

    if (src) {
      src = this.resolveUrl(src)
    }

    // Clear alt if it equals the url
    if (alt === src || alt === originalSrc) {
      alt = ''
    }

    this.output.push('')
    this.output.push(`![${alt}](${src})`)
    this.output.push('')
  }

  /**
   * Convert list to Markdown.
   * @param {HTMLElement} elem - List element (ul/ol)
   * @param {boolean} ordered - Whether the list is ordered
   * @param {number} depth - Current nesting depth
   */
  handleList (elem, ordered = false, depth = 0) {
    this.output.push('')

    const items = Array.from(elem.children).filter(
      child => child.tagName.toLowerCase() === 'li'
    )

    items.forEach((li, i) => {
      const indent = '  '.repeat(depth)
      const prefix = ordered ? `${indent}${i + 1}. ` : `${indent}- `

      const text = this.getText(li, true).trim()

      if (text) {
        const lines = text.split('\n')
        this.output.push(prefix + lines[0])

        lines.slice(1).forEach(line => {
          if (line.trim()) {
            this.output.push('  '.repeat(depth + 1) + line)
          }
        })
      }

      // Handle nested lists
      const nestedUl = li.querySelectorAll(':scope > ul')
      nestedUl.forEach(nested => {
        this.handleList(nested, false, depth + 1)
      })

      const nestedOl = li.querySelectorAll(':scope > ol')
      nestedOl.forEach(nested => {
        this.handleList(nested, true, depth + 1)
      })
    })

    if (depth === 0) {
      this.output.push('')
    }
  }

  /**
   * Convert table to Markdown.
   * @param {HTMLElement} elem - Table element
   */
  handleTable (elem) {
    const rows = []

    elem.querySelectorAll('tr').forEach(row => {
      const cells = []
      row.querySelectorAll('th, td').forEach(cell => {
        let text = this.getText(cell, true).trim()
        text = text.replace(/\n/g, ' ')
        cells.push(text)
      })
      if (cells.length > 0) {
        rows.push(cells)
      }
    })

    if (rows.length === 0) {
      return
    }

    const maxCols = Math.max(...rows.map(row => row.length))

    // Pad rows to have same number of columns
    rows.forEach(row => {
      while (row.length < maxCols) {
        row.push('')
      }
    })

    // Calculate column widths
    const colWidths = new Array(maxCols).fill(0)
    rows.forEach(row => {
      row.forEach((cell, i) => {
        colWidths[i] = Math.max(colWidths[i], cell.length)
      })
    })

    // Ensure minimum width of 3
    colWidths.forEach((w, i) => {
      colWidths[i] = Math.max(w, 3)
    })

    this.output.push('')

    if (rows.length > 0) {
      // Header row
      const headerCells = rows[0].map((cell, i) => cell.padEnd(colWidths[i]))
      this.output.push('| ' + headerCells.join(' | ') + ' |')

      // Separator
      const separators = colWidths.map(w => '-'.repeat(w))
      this.output.push('| ' + separators.join(' | ') + ' |')

      // Data rows
      rows.slice(1).forEach(row => {
        const dataCells = row.map((cell, i) => cell.padEnd(colWidths[i]))
        this.output.push('| ' + dataCells.join(' | ') + ' |')
      })
    }

    this.output.push('')
  }

  /**
   * Convert admonition to Markdown.
   * @param {HTMLElement} elem - Admonition element
   */
  handleAdmonition (elem) {
    const classes = elem.className || ''

    let admType = 'Note'
    const types = ['note', 'warning', 'attention', 'important', 'tip', 'caution']
    for (const type of types) {
      if (classes.toLowerCase().includes(type)) {
        admType = type.charAt(0).toUpperCase() + type.slice(1)
        break
      }
    }

    const titleElem = elem.querySelector('.admonition-title')
    if (titleElem) {
      admType = this.getText(titleElem).trim()
    }

    const contentParts = []
    Array.from(elem.children).forEach(child => {
      if (child.className === 'admonition-title') {
        return
      }
      const text = this.getText(child).trim()
      if (text) {
        contentParts.push(text)
      }
    })

    const content = contentParts.join('\n')

    this.output.push('')
    this.output.push(`> **${admType}**`)
    this.output.push('>')
    content.split('\n').forEach(line => {
      this.output.push(`> ${line}`)
    })
    this.output.push('')
  }

  /**
   * Convert definition list to Markdown.
   * @param {HTMLElement} elem - Definition list element
   */
  handleDefinitionList (elem) {
    this.output.push('')

    Array.from(elem.children).forEach(child => {
      const tag = child.tagName.toLowerCase()
      if (tag === 'dt') {
        const term = this.getText(child, true).trim()
        this.output.push(`**${term}**`)
      } else if (tag === 'dd') {
        const definition = this.getText(child, true).trim()
        definition.split('\n').forEach(line => {
          if (line.trim()) {
            this.output.push(`:   ${line}`)
          }
        })
        this.output.push('')
      }
    })

    this.output.push('')
  }

  /**
   * Extract text from element, handling inline formatting.
   * @param {HTMLElement} elem - Element to extract text from
   * @param {boolean} inline - Whether to process inline formatting
   * @returns {string} Formatted text
   */
  getText (elem, inline = false) {
    const parts = []

    // Process child nodes
    Array.from(elem.childNodes).forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        parts.push(node.textContent)
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const classes = node.className || ''
        if (classes.includes('headerlink')) {
          return
        }

        const tag = node.tagName.toLowerCase()
        let childText = ''

        if (tag === 'a') {
          const href = node.getAttribute('href') || ''
          const linkText = this.getText(node, true).trim()

          if (href) {
            const resolvedHref = this.resolveUrl(href)
            childText = `[${linkText}](${resolvedHref})`
          } else {
            childText = linkText
          }
        } else if (tag === 'code') {
          const codeText = node.textContent.trim()
          childText = `\`${codeText}\``
        } else if (tag === 'strong' || tag === 'b') {
          const boldText = this.getText(node, true).trim()
          childText = `**${boldText}**`
        } else if (tag === 'em' || tag === 'i') {
          const italicText = this.getText(node, true).trim()
          childText = `*${italicText}*`
        } else if (tag === 'br') {
          childText = '\n'
        } else if ((tag === 'span' || tag === 'div' || tag === 'p') && inline) {
          childText = this.getText(node, true)
        } else {
          childText = this.getText(node, true)
        }

        parts.push(childText)
      }
    })

    return parts.join('')
  }

  /**
   * Resolve relative URLs to absolute.
   * @param {string} url - URL to resolve
   * @returns {string} Resolved URL
   */
  resolveUrl (url) {
    try {
      return new URL(url, this.baseUrl).href
    } catch (e) {
      return url
    }
  }
}
