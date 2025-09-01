"use strict";
export {DOM, Animate}

/** Make DOM element */
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
  /* Make DOM element, without wrapper class */
  static new (dom, tags){
    let elem = document.createElement(dom);
    if (typeof tags == 'object') for (const tag in tags) {
      if (tag in elem)
        elem[tag] = tags[tag]
      else
        elem.dataset[tag] = tags[tag]
    }
    return elem
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
   * Append a ``onauxclick`` event.
   * @param {function} ev - Function to be executed on click.
   */
  onauxclick (self, ev, args){
    this.$.onauxclick = (e) => {
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
   * Append a ``mouseup`` event.
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
   * Append a ``onmiddleclick`` event.
   * @param {function} ev - Function to be executed on up.
   */
  onmiddleclick (self, ev, args){
    this.$.addEventListener('mouseup', (e) => {
      if ( e.which !== 2 )
        return

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
   * Append a ``mousedown`` event.
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
  static removeChilds (a){
    let child = a.lastElementChild
    while (child) {
      a.removeChild(child)
      child = a.lastElementChild
    }
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
