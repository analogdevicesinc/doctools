"use strict";
export {DOM, Animate}

/** Make DOM element*/
class DOM {
  constructor (dom, tags){
    this.$
    if (typeof dom != 'string'){
      this.$ = dom
      return
    }
    this.$ = document.createElement(dom);
    if (typeof tags == 'object') for (const tag in tags) {
      if (tag in this.$)
        this.$[tag] = tags[tag]
      else
        this.$.dataset[tag] = tags[tag]
    }
  }
  /**
   * Clone node
   * @param {bool} deep - If true, then the node and its whole subtree,
   * including text that may be in child Text nodes, is also copied.
   */
  cloneNode (deep){
    let node = new DOM(this.$.cloneNode(deep))
    return node
  }
  /**
   * Set DOM innerText.
   * @param {string} str - Text to apply.
   */
  set innerText(str){
    this.$.innerText = str
  }
  /**
   * Get DOM innerText.
   */
  get innerText(){
    return this.$.innerText
  }
  /** Get DOM offset height */
  get height (){
    return this.$.offsetHeight
  }
  /** Get DOM offset width */
  get width (){
    return this.$.offsetWidth
  }
  /** Get DOM id */
  get id (){
    return this.$.id
  }
  /** Set DOM id */
  set id (str){
    this.$.id= str
  }
  /** Get DOM value */
  get value (){
    return this.$.value
  }
  /** Set DOM value */
  set value (str){
    this.$.value = str
  }
  /** Get DOM src */
  get src (){
    return this.$.src
  }
  /** Set DOM src */
  set src (str){
    this.$.src = str
  }
  /**
   * Focus on DOM.
   */
  focus (){
    this.$.focus()
  }
  /** Get DOM classList object. */
  get classList(){
    return this.$.classList
  }
  /** Get DOM style object. */
  get style(){
    return this.$.style
  }
  /**
   * Append a ``onchange`` event.
   * @param {function} ev - Function to be executed on click.
   */
  onchange (self, ev, args){
    this.$.onchange = (e) => {
      if (typeof args == 'undefined')
        ev.apply(self, [e])
      else if (args.constructor == Array) {
        args.push(e)
        ev.apply(self, args)
      }
    }
    return this
  }
  /**
   * Append a ``onclick`` event.
   * @param {function} ev - Function to be executed on click.
   */
  onclick (self, ev, args){
    this.$.onclick = (e) => {
      if (typeof args == 'undefined')
        ev.apply(self, [e])
      else if (args.constructor == Array) {
        args.push(e)
        ev.apply(self, args)
      }
    }
    return this
  }
  /**
   * Append a ``mouseup`` and ``touchup`` event.
   * @param {function} ev - Function to be executed on up.
   */
  onup (self, ev, args){
    this.$.addEventListener('mouseup', (e) => {
      if (typeof args == 'undefined')
        ev.apply(self, [e])
      else if (args.constructor == Array) {
        args.push(e)
        ev.apply(self, args)
      }
    })
    return this
  }
  /**
   * Append a ``mousedown`` and ``touchdown`` event.
   * @param {function} ev - Function to be executed on down.
   */
  ondown (self, ev, args){
    this.$.addEventListener('mousedown', (e) => {
      if (typeof args == 'undefined')
        ev.apply(self, [e])
      else if (args.constructor == Array) {
        args.push(e)
        ev.apply(self, args)
      }
    })
    return this
  }
  /**
   * Append a ``mousemove`` and ``touchmove`` event.
   * @param {function} ev - Function to be executed on move.
   */
  onmove (self, ev, args){
    this.$.addEventListener('mousemove', (e) => {
      if (typeof args == 'undefined')
        ev.apply(self, [e])
      else if (args.constructor == Array) {
        args.push(e)
        ev.apply(self, args)
      }
    })
    return this
  }
  /**
   * Append a event listener.
   * @param {string} event - Event listener name.
   * @param {function} fun - Function to be executed on move.
   * @param {function} args - Arguments to be applied to the function.
   */
  onevent (event, self, fun, args){
    this.$.addEventListener(event, (e) => {
      if (typeof args == 'undefined')
        fun.apply(self, [e])
      else if (args.constructor == Array) {
        args.push(e)
        fun.apply(self, args)
      }
    })
    return this
  }
  /**
   * Appends others :js:func:`DOM`.
   * @param {Object[]} DOMS - Array of :js:func:`DOM` or/and direct DOM Nodes.
   */
  append (DOMS){
    if (DOMS.constructor != Array)
      DOMS = [DOMS]

    DOMS.forEach ((item) => {
      if (/HTML(.*)Element/.test(item.constructor.name))
        this.$.appendChild(item)
      else if (typeof item == 'object' &&
               /HTML(.*)Element/.test(item.$.constructor.name))
        this.$.appendChild(item.$)
    })

    return this
  }
  /**
   * Delete object.
   */
  delete (){
    this.$.remove()
    delete this
  }
  /**
   * Remove childs from :js:func:`DOM` object.
   */
  removeChilds (){
    let child = this.$.lastElementChild
    while (child) {
      this.$.removeChild(child)
      child = this.$.lastElementChild
    }
    return this
  }
  /**
   * Get DOM Node element.
   * @param {string} a - Target object query selector.
   * @param {Object} b - Optional parent DOM.
   */
  static get (a, b){
    b = b instanceof DOM ? b.$ : b
    return (typeof b == 'undefined') ? document.querySelector (a) : b.querySelector(a)
  }
  /**
   * Get all DOM Node elements.
   * @param {string} a - Target object query selector.
   * @param {Object} b - Parent DOM.
   */
  static getAll(a, b){
    b = b instanceof DOM ? b.$ : b
    return (typeof b == 'object') ? b.querySelectorAll(a) : get(b).querySelectorAll(a)
  }
  /**
   * Include or remove a class to a DOM.
   * @param {Object} b - Target DOM.
   * @param {string} _class - Optional class, defaults to `on`.
   */
  static switchState (b, _class){
    b = b instanceof DOM ? b.$ : b
    let cn = _class != undefined ? _class : `on`
    if (b.classList.contains(cn))
      b.classList.remove(cn)
    else
      b.classList.add(cn)
  }
  /**
  * Generate a unique identifier.
  */
  static UID (){
    return (+new Date).toString(36) + Math.random().toString(36).substr(2)
  }
  /**
   * Prototype a DOM composed by details, sumamary and a h2 title with optional
   * onclick event.
   * @param {Object} str - id, title and onclick function of the DOM element.
   * @param {string} str.id - Id of the DOM element.
   * @param {string} str.title - Title of the DOM element.
   * @param {Object} str.onclick - Onclick function of the DOM element.
   */
  static prototypeDetails (str){
    let summary = new DOM('summary', {innerText:str.innerText})
    let details = new DOM('details', {id:str.id, name:str.id})
      .append(summary)

    if (str.onevent != undefined) {
      str.onevent.forEach(event => {
        event.args.push(details.$)
        summary.onevent(
          event.event,
          event.self,
          event.fun,
          event.args
        )
      })
    }
    return details
  }
  /**
   * Prototype a DOM composed by input(file type) and label.
   * @param {Object} str - id, className and innerText of the DOM element.
   * @param {string} str.id - Id of the DOM element.
   * @param {string} str.className - ClassName of the DOM element.
   * @param {string} str.innerText - Inner text of the DOM element.
   */
  static prototypeInputFile (str){
    return new DOM('label', {
      htmlFor:`${str.id}_input`,
      id:str.id,
      className:str.className,
      innerText:str.innerText
      }).append(
        new DOM('input', {id:`${str.id}_input`, type:'file'})
      )
  }
  /**
   * Prototype a DOM composed by input(checkbox) and label styled as as switch.
   * @param {Object} str - id, className and innerText of the DOM element.
   * @param {string} str.id - Id of the DOM element.
   * @param {string} str.className - ClassName of the DOM element.
   * @param {string} str.innerText - Inner text of the DOM element.
   * @returns Array with input and container.
   */
  static prototypeCheckSwitch (str){
    let input = new DOM('input', {
      id:str.id,
      name:str.id,
      className:'checkswitch',
      type:'checkbox',
      value:false
    })

    let container = new DOM('div', {className:str.className})
      .append([
        new DOM('div')
          .append([
            new DOM('label', {
                className:'checkswitch',
                htmlFor:str.id,
                innerText:str.innerText
              }).append([
                input,
                new DOM('span')
              ])
          ])
      ])

    return [input, container]
  }
  /**
   * Prototype a DOM that allows data to be downloded on its creation.
   * @param {string} filename - name of the file.
   * @param {string} file - file content.
   */
  static prototypeDownload (filename, file){
    let data,
        reg = /.*\.(py|xml|csv|json|svg|png)$/
    if (!reg.test(filename))
      return

    let format = filename.match(reg)[1]
    filename = filename
      .replaceAll('/','-')
      .replaceAll(' ','_')
      .toLowerCase()

    switch (format) {
      case 'xml':
        data = "data:x-application/xml;charset=utf-8," + encodeURIComponent(file);
        break
      case 'py':
        data = "data:text/python;charset=utf-8," + encodeURIComponent(file);
        break
      case 'json':
        data = "data:text/json;charset=utf-8," + encodeURIComponent(file);
        break
      case 'csv':
        data = "data:text/csv;charset=utf-8," + encodeURIComponent(file);
        break
      case 'svg':
        data = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(file);
        break
      case 'png':
        data = file; // Expect already in blob
        break
    }
    let element = document.createElement('a')
    element.setAttribute('href', data)
    element.setAttribute('download', filename)
    element.style.display = 'none'

    document.body.appendChild(element)
    element.click ()
    document.body.removeChild(element)
  }
  /**
   * Set a option of a select list by its innerText.
   * @param {Object} dom - Node of the select list.
   * @param {string} value - Inner text of the target option.
   */
  static setSelected (dom, value){
    for (var i = 0; i < dom.$.options.length; i++){
      if (dom.$.options[i].text == value){
        dom.$.options[i].selected = true
        return
      }
    }
  }
  /**
   * Updates parameter of children of a DOM.
   * Lazy because doesn't care is successful or not.
   * Useful for generic lists, like in searches.
   * @param {Object} dom - Container of the list.
   * @param {string} uid - Item to search for.
   * @param {Object} props - Properties to update, where the key is also the DOM id.
   * @param {string} param - Parameter to update.
   */
  static lazyUpdate (dom, uid, props, param){
    param = param == undefined ? 'innerText' : param
    let element = DOM.get(`[data-uid='${uid}']`, dom)
    for (const key in props){
      DOM.get(`#${key}`, element)[param] = props[key]
    }
  }
}
