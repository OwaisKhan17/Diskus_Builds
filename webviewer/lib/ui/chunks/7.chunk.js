(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    1455: function (t, e, n) {
      "use strict";
      var r = n(47),
        o = n(428);
      r(
        { target: "String", proto: !0, forced: n(429)("link") },
        {
          link: function (t) {
            return o(this, "a", "href", t);
          },
        }
      );
    },
    1456: function (t, e, n) {
      "use strict";
      var r,
        o =
          (this && this.__extends) ||
          ((r = function (t, e) {
            return (r =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              })(t, e);
          }),
          function (t, e) {
            function n() {
              this.constructor = t;
            }
            r(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n()));
          }),
        i =
          (this && this.__assign) ||
          function () {
            return (i =
              Object.assign ||
              function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                  for (var o in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t;
              }).apply(this, arguments);
          },
        a =
          (this && this.__spreadArrays) ||
          function () {
            for (var t = 0, e = 0, n = arguments.length; e < n; e++)
              t += arguments[e].length;
            var r = Array(t),
              o = 0;
            for (e = 0; e < n; e++)
              for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++)
                r[o] = i[a];
            return r;
          },
        s =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          },
        l = s(n(0)),
        u = s(n(87)),
        c = s(n(1531)),
        f = s(n(1461)),
        h = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            (n.dirtyProps = [
              "modules",
              "formats",
              "bounds",
              "theme",
              "children",
            ]),
              (n.cleanProps = [
                "id",
                "className",
                "style",
                "placeholder",
                "tabIndex",
                "onChange",
                "onChangeSelection",
                "onFocus",
                "onBlur",
                "onKeyPress",
                "onKeyDown",
                "onKeyUp",
              ]),
              (n.state = { generation: 0 }),
              (n.selection = null),
              (n.onEditorChange = function (t, e, r, o) {
                var i, a, s, l;
                "text-change" === t
                  ? null === (a = (i = n).onEditorChangeText) ||
                    void 0 === a ||
                    a.call(
                      i,
                      n.editor.root.innerHTML,
                      e,
                      o,
                      n.unprivilegedEditor
                    )
                  : "selection-change" === t &&
                    (null === (l = (s = n).onEditorChangeSelection) ||
                      void 0 === l ||
                      l.call(s, e, o, n.unprivilegedEditor));
              });
            var r = n.isControlled() ? e.value : e.defaultValue;
            return (n.value = null != r ? r : ""), n;
          }
          return (
            o(e, t),
            (e.prototype.validateProps = function (t) {
              var e;
              if (l.default.Children.count(t.children) > 1)
                throw new Error(
                  "The Quill editing area can only be composed of a single React element."
                );
              if (
                l.default.Children.count(t.children) &&
                "textarea" ===
                  (null === (e = l.default.Children.only(t.children)) ||
                  void 0 === e
                    ? void 0
                    : e.type)
              )
                throw new Error(
                  "Quill does not support editing on a <textarea>. Use a <div> instead."
                );
              if (
                this.lastDeltaChangeSet &&
                t.value === this.lastDeltaChangeSet
              )
                throw new Error(
                  "You are passing the `delta` object from the `onChange` event back as `value`. You most probably want `editor.getContents()` instead. See: https://github.com/zenoamaro/react-quill#using-deltas"
                );
            }),
            (e.prototype.shouldComponentUpdate = function (t, e) {
              var n,
                r = this;
              if (
                (this.validateProps(t),
                !this.editor || this.state.generation !== e.generation)
              )
                return !0;
              if ("value" in t) {
                var o = this.getEditorContents(),
                  i = null != (n = t.value) ? n : "";
                this.isEqualValue(i, o) ||
                  this.setEditorContents(this.editor, i);
              }
              return (
                t.readOnly !== this.props.readOnly &&
                  this.setEditorReadOnly(this.editor, t.readOnly),
                a(this.cleanProps, this.dirtyProps).some(function (e) {
                  return !c.default(t[e], r.props[e]);
                })
              );
            }),
            (e.prototype.shouldComponentRegenerate = function (t) {
              var e = this;
              return this.dirtyProps.some(function (n) {
                return !c.default(t[n], e.props[n]);
              });
            }),
            (e.prototype.componentDidMount = function () {
              this.instantiateEditor(),
                this.setEditorContents(this.editor, this.getEditorContents());
            }),
            (e.prototype.componentWillUnmount = function () {
              this.destroyEditor();
            }),
            (e.prototype.componentDidUpdate = function (t, e) {
              var n = this;
              if (this.editor && this.shouldComponentRegenerate(t)) {
                var r = this.editor.getContents(),
                  o = this.editor.getSelection();
                (this.regenerationSnapshot = { delta: r, selection: o }),
                  this.setState({ generation: this.state.generation + 1 }),
                  this.destroyEditor();
              }
              if (this.state.generation !== e.generation) {
                var i = this.regenerationSnapshot,
                  a = ((r = i.delta), i.selection);
                delete this.regenerationSnapshot, this.instantiateEditor();
                var s = this.editor;
                s.setContents(r),
                  p(function () {
                    return n.setEditorSelection(s, a);
                  });
              }
            }),
            (e.prototype.instantiateEditor = function () {
              this.editor ||
                (this.editor = this.createEditor(
                  this.getEditingArea(),
                  this.getEditorConfig()
                ));
            }),
            (e.prototype.destroyEditor = function () {
              this.editor &&
                (this.unhookEditor(this.editor), delete this.editor);
            }),
            (e.prototype.isControlled = function () {
              return "value" in this.props;
            }),
            (e.prototype.getEditorConfig = function () {
              return {
                bounds: this.props.bounds,
                formats: this.props.formats,
                modules: this.props.modules,
                placeholder: this.props.placeholder,
                readOnly: this.props.readOnly,
                scrollingContainer: this.props.scrollingContainer,
                tabIndex: this.props.tabIndex,
                theme: this.props.theme,
              };
            }),
            (e.prototype.getEditor = function () {
              if (!this.editor)
                throw new Error("Accessing non-instantiated editor");
              return this.editor;
            }),
            (e.prototype.createEditor = function (t, e) {
              var n = new f.default(t, e);
              return (
                null != e.tabIndex && this.setEditorTabIndex(n, e.tabIndex),
                this.hookEditor(n),
                n
              );
            }),
            (e.prototype.hookEditor = function (t) {
              (this.unprivilegedEditor = this.makeUnprivilegedEditor(t)),
                t.on("editor-change", this.onEditorChange);
            }),
            (e.prototype.unhookEditor = function (t) {
              t.off("editor-change", this.onEditorChange);
            }),
            (e.prototype.getEditorContents = function () {
              return this.value;
            }),
            (e.prototype.getEditorSelection = function () {
              return this.selection;
            }),
            (e.prototype.isDelta = function (t) {
              return t && t.ops;
            }),
            (e.prototype.isEqualValue = function (t, e) {
              return this.isDelta(t) && this.isDelta(e)
                ? c.default(t.ops, e.ops)
                : c.default(t, e);
            }),
            (e.prototype.setEditorContents = function (t, e) {
              var n = this;
              this.value = e;
              var r = this.getEditorSelection();
              "string" == typeof e
                ? t.setContents(t.clipboard.convert(e))
                : t.setContents(e),
                p(function () {
                  return n.setEditorSelection(t, r);
                });
            }),
            (e.prototype.setEditorSelection = function (t, e) {
              if (((this.selection = e), e)) {
                var n = t.getLength();
                (e.index = Math.max(0, Math.min(e.index, n - 1))),
                  (e.length = Math.max(0, Math.min(e.length, n - 1 - e.index))),
                  t.setSelection(e);
              }
            }),
            (e.prototype.setEditorTabIndex = function (t, e) {
              var n, r;
              (null ===
                (r = null === (n = t) || void 0 === n ? void 0 : n.scroll) ||
              void 0 === r
                ? void 0
                : r.domNode) && (t.scroll.domNode.tabIndex = e);
            }),
            (e.prototype.setEditorReadOnly = function (t, e) {
              e ? t.disable() : t.enable();
            }),
            (e.prototype.makeUnprivilegedEditor = function (t) {
              var e = t;
              return {
                getHTML: function () {
                  return e.root.innerHTML;
                },
                getLength: e.getLength.bind(e),
                getText: e.getText.bind(e),
                getContents: e.getContents.bind(e),
                getSelection: e.getSelection.bind(e),
                getBounds: e.getBounds.bind(e),
              };
            }),
            (e.prototype.getEditingArea = function () {
              if (!this.editingArea)
                throw new Error("Instantiating on missing editing area");
              var t = u.default.findDOMNode(this.editingArea);
              if (!t) throw new Error("Cannot find element for editing area");
              if (3 === t.nodeType)
                throw new Error("Editing area cannot be a text node");
              return t;
            }),
            (e.prototype.renderEditingArea = function () {
              var t = this,
                e = this.props,
                n = e.children,
                r = e.preserveWhitespace,
                o = {
                  key: this.state.generation,
                  ref: function (e) {
                    t.editingArea = e;
                  },
                };
              return l.default.Children.count(n)
                ? l.default.cloneElement(l.default.Children.only(n), o)
                : r
                ? l.default.createElement("pre", i({}, o))
                : l.default.createElement("div", i({}, o));
            }),
            (e.prototype.render = function () {
              var t;
              return l.default.createElement(
                "div",
                {
                  id: this.props.id,
                  style: this.props.style,
                  key: this.state.generation,
                  className:
                    "quill " + ((t = this.props.className), null != t ? t : ""),
                  onKeyPress: this.props.onKeyPress,
                  onKeyDown: this.props.onKeyDown,
                  onKeyUp: this.props.onKeyUp,
                },
                this.renderEditingArea()
              );
            }),
            (e.prototype.onEditorChangeText = function (t, e, n, r) {
              var o, i;
              if (this.editor) {
                var a = this.isDelta(this.value)
                  ? r.getContents()
                  : r.getHTML();
                a !== this.getEditorContents() &&
                  ((this.lastDeltaChangeSet = e),
                  (this.value = a),
                  null === (i = (o = this.props).onChange) ||
                    void 0 === i ||
                    i.call(o, t, e, n, r));
              }
            }),
            (e.prototype.onEditorChangeSelection = function (t, e, n) {
              var r, o, i, a, s, l;
              if (this.editor) {
                var u = this.getEditorSelection(),
                  f = !u && t,
                  h = u && !t;
                c.default(t, u) ||
                  ((this.selection = t),
                  null === (o = (r = this.props).onChangeSelection) ||
                    void 0 === o ||
                    o.call(r, t, e, n),
                  f
                    ? null === (a = (i = this.props).onFocus) ||
                      void 0 === a ||
                      a.call(i, t, e, n)
                    : h &&
                      (null === (l = (s = this.props).onBlur) ||
                        void 0 === l ||
                        l.call(s, u, e, n)));
              }
            }),
            (e.prototype.focus = function () {
              this.editor && this.editor.focus();
            }),
            (e.prototype.blur = function () {
              this.editor && ((this.selection = null), this.editor.blur());
            }),
            (e.displayName = "React Quill"),
            (e.Quill = f.default),
            (e.defaultProps = { theme: "snow", modules: {}, readOnly: !1 }),
            e
          );
        })(l.default.Component);
      function p(t) {
        Promise.resolve().then(t);
      }
      t.exports = h;
    },
    1461: function (t, e, n) {
      (function (e) {
        /*!
         * Quill Editor v1.3.7
         * https://quilljs.com/
         * Copyright (c) 2014, Jason Chen
         * Copyright (c) 2013, salesforce.com
         */
        var n;
        "undefined" != typeof self && self,
          (n = function () {
            return (function (t) {
              var e = {};
              function n(r) {
                if (e[r]) return e[r].exports;
                var o = (e[r] = { i: r, l: !1, exports: {} });
                return (
                  t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
                );
              }
              return (
                (n.m = t),
                (n.c = e),
                (n.d = function (t, e, r) {
                  n.o(t, e) ||
                    Object.defineProperty(t, e, {
                      configurable: !1,
                      enumerable: !0,
                      get: r,
                    });
                }),
                (n.n = function (t) {
                  var e =
                    t && t.__esModule
                      ? function () {
                          return t.default;
                        }
                      : function () {
                          return t;
                        };
                  return n.d(e, "a", e), e;
                }),
                (n.o = function (t, e) {
                  return Object.prototype.hasOwnProperty.call(t, e);
                }),
                (n.p = ""),
                n((n.s = 109))
              );
            })([
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = n(17),
                  o = n(18),
                  i = n(19),
                  a = n(45),
                  s = n(46),
                  l = n(47),
                  u = n(48),
                  c = n(49),
                  f = n(12),
                  h = n(32),
                  p = n(33),
                  d = n(31),
                  y = n(1),
                  g = {
                    Scope: y.Scope,
                    create: y.create,
                    find: y.find,
                    query: y.query,
                    register: y.register,
                    Container: r.default,
                    Format: o.default,
                    Leaf: i.default,
                    Embed: u.default,
                    Scroll: a.default,
                    Block: l.default,
                    Inline: s.default,
                    Text: c.default,
                    Attributor: {
                      Attribute: f.default,
                      Class: h.default,
                      Style: p.default,
                      Store: d.default,
                    },
                  };
                e.default = g;
              },
              function (t, e, n) {
                "use strict";
                var r,
                  o =
                    (this && this.__extends) ||
                    ((r =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      }),
                    function (t, e) {
                      function n() {
                        this.constructor = t;
                      }
                      r(t, e),
                        (t.prototype =
                          null === e
                            ? Object.create(e)
                            : ((n.prototype = e.prototype), new n()));
                    });
                Object.defineProperty(e, "__esModule", { value: !0 });
                var i = (function (t) {
                  function e(e) {
                    var n = this;
                    return (
                      (e = "[Parchment] " + e),
                      ((n = t.call(this, e) || this).message = e),
                      (n.name = n.constructor.name),
                      n
                    );
                  }
                  return o(e, t), e;
                })(Error);
                e.ParchmentError = i;
                var a,
                  s = {},
                  l = {},
                  u = {},
                  c = {};
                function f(t, e) {
                  var n;
                  if ((void 0 === e && (e = a.ANY), "string" == typeof t))
                    n = c[t] || s[t];
                  else if (t instanceof Text || t.nodeType === Node.TEXT_NODE)
                    n = c.text;
                  else if ("number" == typeof t)
                    t & a.LEVEL & a.BLOCK
                      ? (n = c.block)
                      : t & a.LEVEL & a.INLINE && (n = c.inline);
                  else if (t instanceof HTMLElement) {
                    var r = (t.getAttribute("class") || "").split(/\s+/);
                    for (var o in r) if ((n = l[r[o]])) break;
                    n = n || u[t.tagName];
                  }
                  return null == n
                    ? null
                    : e & a.LEVEL & n.scope && e & a.TYPE & n.scope
                    ? n
                    : null;
                }
                (e.DATA_KEY = "__blot"),
                  (function (t) {
                    (t[(t.TYPE = 3)] = "TYPE"),
                      (t[(t.LEVEL = 12)] = "LEVEL"),
                      (t[(t.ATTRIBUTE = 13)] = "ATTRIBUTE"),
                      (t[(t.BLOT = 14)] = "BLOT"),
                      (t[(t.INLINE = 7)] = "INLINE"),
                      (t[(t.BLOCK = 11)] = "BLOCK"),
                      (t[(t.BLOCK_BLOT = 10)] = "BLOCK_BLOT"),
                      (t[(t.INLINE_BLOT = 6)] = "INLINE_BLOT"),
                      (t[(t.BLOCK_ATTRIBUTE = 9)] = "BLOCK_ATTRIBUTE"),
                      (t[(t.INLINE_ATTRIBUTE = 5)] = "INLINE_ATTRIBUTE"),
                      (t[(t.ANY = 15)] = "ANY");
                  })((a = e.Scope || (e.Scope = {}))),
                  (e.create = function (t, e) {
                    var n = f(t);
                    if (null == n)
                      throw new i("Unable to create " + t + " blot");
                    var r = n,
                      o =
                        t instanceof Node || t.nodeType === Node.TEXT_NODE
                          ? t
                          : r.create(e);
                    return new r(o, e);
                  }),
                  (e.find = function t(n, r) {
                    return (
                      void 0 === r && (r = !1),
                      null == n
                        ? null
                        : null != n[e.DATA_KEY]
                        ? n[e.DATA_KEY].blot
                        : r
                        ? t(n.parentNode, r)
                        : null
                    );
                  }),
                  (e.query = f),
                  (e.register = function t() {
                    for (var e = [], n = 0; n < arguments.length; n++)
                      e[n] = arguments[n];
                    if (e.length > 1)
                      return e.map(function (e) {
                        return t(e);
                      });
                    var r = e[0];
                    if (
                      "string" != typeof r.blotName &&
                      "string" != typeof r.attrName
                    )
                      throw new i("Invalid definition");
                    if ("abstract" === r.blotName)
                      throw new i("Cannot register abstract class");
                    if (
                      ((c[r.blotName || r.attrName] = r),
                      "string" == typeof r.keyName)
                    )
                      s[r.keyName] = r;
                    else if (
                      (null != r.className && (l[r.className] = r),
                      null != r.tagName)
                    ) {
                      Array.isArray(r.tagName)
                        ? (r.tagName = r.tagName.map(function (t) {
                            return t.toUpperCase();
                          }))
                        : (r.tagName = r.tagName.toUpperCase());
                      var o = Array.isArray(r.tagName)
                        ? r.tagName
                        : [r.tagName];
                      o.forEach(function (t) {
                        (null != u[t] && null != r.className) || (u[t] = r);
                      });
                    }
                    return r;
                  });
              },
              function (t, e, n) {
                var r = n(51),
                  o = n(11),
                  i = n(3),
                  a = n(20),
                  s = String.fromCharCode(0),
                  l = function (t) {
                    Array.isArray(t)
                      ? (this.ops = t)
                      : null != t && Array.isArray(t.ops)
                      ? (this.ops = t.ops)
                      : (this.ops = []);
                  };
                (l.prototype.insert = function (t, e) {
                  var n = {};
                  return 0 === t.length
                    ? this
                    : ((n.insert = t),
                      null != e &&
                        "object" == typeof e &&
                        Object.keys(e).length > 0 &&
                        (n.attributes = e),
                      this.push(n));
                }),
                  (l.prototype.delete = function (t) {
                    return t <= 0 ? this : this.push({ delete: t });
                  }),
                  (l.prototype.retain = function (t, e) {
                    if (t <= 0) return this;
                    var n = { retain: t };
                    return (
                      null != e &&
                        "object" == typeof e &&
                        Object.keys(e).length > 0 &&
                        (n.attributes = e),
                      this.push(n)
                    );
                  }),
                  (l.prototype.push = function (t) {
                    var e = this.ops.length,
                      n = this.ops[e - 1];
                    if (((t = i(!0, {}, t)), "object" == typeof n)) {
                      if (
                        "number" == typeof t.delete &&
                        "number" == typeof n.delete
                      )
                        return (
                          (this.ops[e - 1] = { delete: n.delete + t.delete }),
                          this
                        );
                      if (
                        "number" == typeof n.delete &&
                        null != t.insert &&
                        ((e -= 1), "object" != typeof (n = this.ops[e - 1]))
                      )
                        return this.ops.unshift(t), this;
                      if (o(t.attributes, n.attributes)) {
                        if (
                          "string" == typeof t.insert &&
                          "string" == typeof n.insert
                        )
                          return (
                            (this.ops[e - 1] = { insert: n.insert + t.insert }),
                            "object" == typeof t.attributes &&
                              (this.ops[e - 1].attributes = t.attributes),
                            this
                          );
                        if (
                          "number" == typeof t.retain &&
                          "number" == typeof n.retain
                        )
                          return (
                            (this.ops[e - 1] = { retain: n.retain + t.retain }),
                            "object" == typeof t.attributes &&
                              (this.ops[e - 1].attributes = t.attributes),
                            this
                          );
                      }
                    }
                    return (
                      e === this.ops.length
                        ? this.ops.push(t)
                        : this.ops.splice(e, 0, t),
                      this
                    );
                  }),
                  (l.prototype.chop = function () {
                    var t = this.ops[this.ops.length - 1];
                    return (
                      t && t.retain && !t.attributes && this.ops.pop(), this
                    );
                  }),
                  (l.prototype.filter = function (t) {
                    return this.ops.filter(t);
                  }),
                  (l.prototype.forEach = function (t) {
                    this.ops.forEach(t);
                  }),
                  (l.prototype.map = function (t) {
                    return this.ops.map(t);
                  }),
                  (l.prototype.partition = function (t) {
                    var e = [],
                      n = [];
                    return (
                      this.forEach(function (r) {
                        (t(r) ? e : n).push(r);
                      }),
                      [e, n]
                    );
                  }),
                  (l.prototype.reduce = function (t, e) {
                    return this.ops.reduce(t, e);
                  }),
                  (l.prototype.changeLength = function () {
                    return this.reduce(function (t, e) {
                      return e.insert
                        ? t + a.length(e)
                        : e.delete
                        ? t - e.delete
                        : t;
                    }, 0);
                  }),
                  (l.prototype.length = function () {
                    return this.reduce(function (t, e) {
                      return t + a.length(e);
                    }, 0);
                  }),
                  (l.prototype.slice = function (t, e) {
                    (t = t || 0), "number" != typeof e && (e = 1 / 0);
                    for (
                      var n = [], r = a.iterator(this.ops), o = 0;
                      o < e && r.hasNext();

                    ) {
                      var i;
                      o < t
                        ? (i = r.next(t - o))
                        : ((i = r.next(e - o)), n.push(i)),
                        (o += a.length(i));
                    }
                    return new l(n);
                  }),
                  (l.prototype.compose = function (t) {
                    var e = a.iterator(this.ops),
                      n = a.iterator(t.ops),
                      r = [],
                      i = n.peek();
                    if (
                      null != i &&
                      "number" == typeof i.retain &&
                      null == i.attributes
                    ) {
                      for (
                        var s = i.retain;
                        "insert" === e.peekType() && e.peekLength() <= s;

                      )
                        (s -= e.peekLength()), r.push(e.next());
                      i.retain - s > 0 && n.next(i.retain - s);
                    }
                    for (var u = new l(r); e.hasNext() || n.hasNext(); )
                      if ("insert" === n.peekType()) u.push(n.next());
                      else if ("delete" === e.peekType()) u.push(e.next());
                      else {
                        var c = Math.min(e.peekLength(), n.peekLength()),
                          f = e.next(c),
                          h = n.next(c);
                        if ("number" == typeof h.retain) {
                          var p = {};
                          "number" == typeof f.retain
                            ? (p.retain = c)
                            : (p.insert = f.insert);
                          var d = a.attributes.compose(
                            f.attributes,
                            h.attributes,
                            "number" == typeof f.retain
                          );
                          if (
                            (d && (p.attributes = d),
                            u.push(p),
                            !n.hasNext() && o(u.ops[u.ops.length - 1], p))
                          ) {
                            var y = new l(e.rest());
                            return u.concat(y).chop();
                          }
                        } else
                          "number" == typeof h.delete &&
                            "number" == typeof f.retain &&
                            u.push(h);
                      }
                    return u.chop();
                  }),
                  (l.prototype.concat = function (t) {
                    var e = new l(this.ops.slice());
                    return (
                      t.ops.length > 0 &&
                        (e.push(t.ops[0]),
                        (e.ops = e.ops.concat(t.ops.slice(1)))),
                      e
                    );
                  }),
                  (l.prototype.diff = function (t, e) {
                    if (this.ops === t.ops) return new l();
                    var n = [this, t].map(function (e) {
                        return e
                          .map(function (n) {
                            if (null != n.insert)
                              return "string" == typeof n.insert ? n.insert : s;
                            throw new Error(
                              "diff() called " +
                                (e === t ? "on" : "with") +
                                " non-document"
                            );
                          })
                          .join("");
                      }),
                      i = new l(),
                      u = r(n[0], n[1], e),
                      c = a.iterator(this.ops),
                      f = a.iterator(t.ops);
                    return (
                      u.forEach(function (t) {
                        for (var e = t[1].length; e > 0; ) {
                          var n = 0;
                          switch (t[0]) {
                            case r.INSERT:
                              (n = Math.min(f.peekLength(), e)),
                                i.push(f.next(n));
                              break;
                            case r.DELETE:
                              (n = Math.min(e, c.peekLength())),
                                c.next(n),
                                i.delete(n);
                              break;
                            case r.EQUAL:
                              n = Math.min(c.peekLength(), f.peekLength(), e);
                              var s = c.next(n),
                                l = f.next(n);
                              o(s.insert, l.insert)
                                ? i.retain(
                                    n,
                                    a.attributes.diff(
                                      s.attributes,
                                      l.attributes
                                    )
                                  )
                                : i.push(l).delete(n);
                          }
                          e -= n;
                        }
                      }),
                      i.chop()
                    );
                  }),
                  (l.prototype.eachLine = function (t, e) {
                    e = e || "\n";
                    for (
                      var n = a.iterator(this.ops), r = new l(), o = 0;
                      n.hasNext();

                    ) {
                      if ("insert" !== n.peekType()) return;
                      var i = n.peek(),
                        s = a.length(i) - n.peekLength(),
                        u =
                          "string" == typeof i.insert
                            ? i.insert.indexOf(e, s) - s
                            : -1;
                      if (u < 0) r.push(n.next());
                      else if (u > 0) r.push(n.next(u));
                      else {
                        if (!1 === t(r, n.next(1).attributes || {}, o)) return;
                        (o += 1), (r = new l());
                      }
                    }
                    r.length() > 0 && t(r, {}, o);
                  }),
                  (l.prototype.transform = function (t, e) {
                    if (((e = !!e), "number" == typeof t))
                      return this.transformPosition(t, e);
                    for (
                      var n = a.iterator(this.ops),
                        r = a.iterator(t.ops),
                        o = new l();
                      n.hasNext() || r.hasNext();

                    )
                      if (
                        "insert" !== n.peekType() ||
                        (!e && "insert" === r.peekType())
                      )
                        if ("insert" === r.peekType()) o.push(r.next());
                        else {
                          var i = Math.min(n.peekLength(), r.peekLength()),
                            s = n.next(i),
                            u = r.next(i);
                          if (s.delete) continue;
                          u.delete
                            ? o.push(u)
                            : o.retain(
                                i,
                                a.attributes.transform(
                                  s.attributes,
                                  u.attributes,
                                  e
                                )
                              );
                        }
                      else o.retain(a.length(n.next()));
                    return o.chop();
                  }),
                  (l.prototype.transformPosition = function (t, e) {
                    e = !!e;
                    for (
                      var n = a.iterator(this.ops), r = 0;
                      n.hasNext() && r <= t;

                    ) {
                      var o = n.peekLength(),
                        i = n.peekType();
                      n.next(),
                        "delete" !== i
                          ? ("insert" === i && (r < t || !e) && (t += o),
                            (r += o))
                          : (t -= Math.min(o, t - r));
                    }
                    return t;
                  }),
                  (t.exports = l);
              },
              function (t, e) {
                "use strict";
                var n = Object.prototype.hasOwnProperty,
                  r = Object.prototype.toString,
                  o = Object.defineProperty,
                  i = Object.getOwnPropertyDescriptor,
                  a = function (t) {
                    return "function" == typeof Array.isArray
                      ? Array.isArray(t)
                      : "[object Array]" === r.call(t);
                  },
                  s = function (t) {
                    if (!t || "[object Object]" !== r.call(t)) return !1;
                    var e,
                      o = n.call(t, "constructor"),
                      i =
                        t.constructor &&
                        t.constructor.prototype &&
                        n.call(t.constructor.prototype, "isPrototypeOf");
                    if (t.constructor && !o && !i) return !1;
                    for (e in t);
                    return void 0 === e || n.call(t, e);
                  },
                  l = function (t, e) {
                    o && "__proto__" === e.name
                      ? o(t, e.name, {
                          enumerable: !0,
                          configurable: !0,
                          value: e.newValue,
                          writable: !0,
                        })
                      : (t[e.name] = e.newValue);
                  },
                  u = function (t, e) {
                    if ("__proto__" === e) {
                      if (!n.call(t, e)) return;
                      if (i) return i(t, e).value;
                    }
                    return t[e];
                  };
                t.exports = function t() {
                  var e,
                    n,
                    r,
                    o,
                    i,
                    c,
                    f = arguments[0],
                    h = 1,
                    p = arguments.length,
                    d = !1;
                  for (
                    "boolean" == typeof f &&
                      ((d = f), (f = arguments[1] || {}), (h = 2)),
                      (null == f ||
                        ("object" != typeof f && "function" != typeof f)) &&
                        (f = {});
                    h < p;
                    ++h
                  )
                    if (null != (e = arguments[h]))
                      for (n in e)
                        (r = u(f, n)),
                          f !== (o = u(e, n)) &&
                            (d && o && (s(o) || (i = a(o)))
                              ? (i
                                  ? ((i = !1), (c = r && a(r) ? r : []))
                                  : (c = r && s(r) ? r : {}),
                                l(f, { name: n, newValue: t(d, c, o) }))
                              : void 0 !== o && l(f, { name: n, newValue: o }));
                  return f;
                };
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.default = e.BlockEmbed = e.bubbleFormats = void 0);
                var r = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  o = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                      var i = Object.getPrototypeOf(e);
                      return null === i ? void 0 : t(i, n, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                  },
                  i = f(n(3)),
                  a = f(n(2)),
                  s = f(n(0)),
                  l = f(n(16)),
                  u = f(n(6)),
                  c = f(n(7));
                function f(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function h(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function p(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                }
                function d(t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                }
                var y = (function (t) {
                  function e() {
                    return (
                      h(this, e),
                      p(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    d(e, t),
                    r(e, [
                      {
                        key: "attach",
                        value: function () {
                          o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "attach",
                            this
                          ).call(this),
                            (this.attributes = new s.default.Attributor.Store(
                              this.domNode
                            ));
                        },
                      },
                      {
                        key: "delta",
                        value: function () {
                          return new a.default().insert(
                            this.value(),
                            (0, i.default)(
                              this.formats(),
                              this.attributes.values()
                            )
                          );
                        },
                      },
                      {
                        key: "format",
                        value: function (t, e) {
                          var n = s.default.query(
                            t,
                            s.default.Scope.BLOCK_ATTRIBUTE
                          );
                          null != n && this.attributes.attribute(n, e);
                        },
                      },
                      {
                        key: "formatAt",
                        value: function (t, e, n, r) {
                          this.format(n, r);
                        },
                      },
                      {
                        key: "insertAt",
                        value: function (t, n, r) {
                          if ("string" == typeof n && n.endsWith("\n")) {
                            var i = s.default.create(g.blotName);
                            this.parent.insertBefore(
                              i,
                              0 === t ? this : this.next
                            ),
                              i.insertAt(0, n.slice(0, -1));
                          } else
                            o(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "insertAt",
                              this
                            ).call(this, t, n, r);
                        },
                      },
                    ]),
                    e
                  );
                })(s.default.Embed);
                y.scope = s.default.Scope.BLOCK_BLOT;
                var g = (function (t) {
                  function e(t) {
                    h(this, e);
                    var n = p(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)
                    );
                    return (n.cache = {}), n;
                  }
                  return (
                    d(e, t),
                    r(e, [
                      {
                        key: "delta",
                        value: function () {
                          return (
                            null == this.cache.delta &&
                              (this.cache.delta = this.descendants(
                                s.default.Leaf
                              )
                                .reduce(function (t, e) {
                                  return 0 === e.length()
                                    ? t
                                    : t.insert(e.value(), m(e));
                                }, new a.default())
                                .insert("\n", m(this))),
                            this.cache.delta
                          );
                        },
                      },
                      {
                        key: "deleteAt",
                        value: function (t, n) {
                          o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "deleteAt",
                            this
                          ).call(this, t, n),
                            (this.cache = {});
                        },
                      },
                      {
                        key: "formatAt",
                        value: function (t, n, r, i) {
                          n <= 0 ||
                            (s.default.query(r, s.default.Scope.BLOCK)
                              ? t + n === this.length() && this.format(r, i)
                              : o(
                                  e.prototype.__proto__ ||
                                    Object.getPrototypeOf(e.prototype),
                                  "formatAt",
                                  this
                                ).call(
                                  this,
                                  t,
                                  Math.min(n, this.length() - t - 1),
                                  r,
                                  i
                                ),
                            (this.cache = {}));
                        },
                      },
                      {
                        key: "insertAt",
                        value: function (t, n, r) {
                          if (null != r)
                            return o(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "insertAt",
                              this
                            ).call(this, t, n, r);
                          if (0 !== n.length) {
                            var i = n.split("\n"),
                              a = i.shift();
                            a.length > 0 &&
                              (t < this.length() - 1 ||
                              null == this.children.tail
                                ? o(
                                    e.prototype.__proto__ ||
                                      Object.getPrototypeOf(e.prototype),
                                    "insertAt",
                                    this
                                  ).call(
                                    this,
                                    Math.min(t, this.length() - 1),
                                    a
                                  )
                                : this.children.tail.insertAt(
                                    this.children.tail.length(),
                                    a
                                  ),
                              (this.cache = {}));
                            var s = this;
                            i.reduce(function (t, e) {
                              return (
                                (s = s.split(t, !0)).insertAt(0, e), e.length
                              );
                            }, t + a.length);
                          }
                        },
                      },
                      {
                        key: "insertBefore",
                        value: function (t, n) {
                          var r = this.children.head;
                          o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "insertBefore",
                            this
                          ).call(this, t, n),
                            r instanceof l.default && r.remove(),
                            (this.cache = {});
                        },
                      },
                      {
                        key: "length",
                        value: function () {
                          return (
                            null == this.cache.length &&
                              (this.cache.length =
                                o(
                                  e.prototype.__proto__ ||
                                    Object.getPrototypeOf(e.prototype),
                                  "length",
                                  this
                                ).call(this) + 1),
                            this.cache.length
                          );
                        },
                      },
                      {
                        key: "moveChildren",
                        value: function (t, n) {
                          o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "moveChildren",
                            this
                          ).call(this, t, n),
                            (this.cache = {});
                        },
                      },
                      {
                        key: "optimize",
                        value: function (t) {
                          o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "optimize",
                            this
                          ).call(this, t),
                            (this.cache = {});
                        },
                      },
                      {
                        key: "path",
                        value: function (t) {
                          return o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "path",
                            this
                          ).call(this, t, !0);
                        },
                      },
                      {
                        key: "removeChild",
                        value: function (t) {
                          o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "removeChild",
                            this
                          ).call(this, t),
                            (this.cache = {});
                        },
                      },
                      {
                        key: "split",
                        value: function (t) {
                          var n =
                            arguments.length > 1 &&
                            void 0 !== arguments[1] &&
                            arguments[1];
                          if (n && (0 === t || t >= this.length() - 1)) {
                            var r = this.clone();
                            return 0 === t
                              ? (this.parent.insertBefore(r, this), this)
                              : (this.parent.insertBefore(r, this.next), r);
                          }
                          var i = o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "split",
                            this
                          ).call(this, t, n);
                          return (this.cache = {}), i;
                        },
                      },
                    ]),
                    e
                  );
                })(s.default.Block);
                function m(t) {
                  var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  return null == t
                    ? e
                    : ("function" == typeof t.formats &&
                        (e = (0, i.default)(e, t.formats())),
                      null == t.parent ||
                      "scroll" == t.parent.blotName ||
                      t.parent.statics.scope !== t.statics.scope
                        ? e
                        : m(t.parent, e));
                }
                (g.blotName = "block"),
                  (g.tagName = "P"),
                  (g.defaultChild = "break"),
                  (g.allowedChildren = [u.default, s.default.Embed, c.default]),
                  (e.bubbleFormats = m),
                  (e.BlockEmbed = y),
                  (e.default = g);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.default = e.overload = e.expandConfig = void 0);
                var r =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (t) {
                          return typeof t;
                        }
                      : function (t) {
                          return t &&
                            "function" == typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                        },
                  o = function (t, e) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t))
                      return (function (t, e) {
                        var n = [],
                          r = !0,
                          o = !1,
                          i = void 0;
                        try {
                          for (
                            var a, s = t[Symbol.iterator]();
                            !(r = (a = s.next()).done) &&
                            (n.push(a.value), !e || n.length !== e);
                            r = !0
                          );
                        } catch (t) {
                          (o = !0), (i = t);
                        } finally {
                          try {
                            !r && s.return && s.return();
                          } finally {
                            if (o) throw i;
                          }
                        }
                        return n;
                      })(t, e);
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  },
                  i = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })();
                n(50);
                var a = g(n(2)),
                  s = g(n(14)),
                  l = g(n(8)),
                  u = g(n(9)),
                  c = g(n(0)),
                  f = n(15),
                  h = g(f),
                  p = g(n(3)),
                  d = g(n(10)),
                  y = g(n(34));
                function g(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function m(t, e, n) {
                  return (
                    e in t
                      ? Object.defineProperty(t, e, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (t[e] = n),
                    t
                  );
                }
                function v(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                var b = (0, d.default)("quill"),
                  x = (function () {
                    function t(e) {
                      var n = this,
                        r =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                      if (
                        (v(this, t),
                        (this.options = _(e, r)),
                        (this.container = this.options.container),
                        null == this.container)
                      )
                        return b.error("Invalid Quill container", e);
                      this.options.debug && t.debug(this.options.debug);
                      var o = this.container.innerHTML.trim();
                      this.container.classList.add("ql-container"),
                        (this.container.innerHTML = ""),
                        (this.container.__quill = this),
                        (this.root = this.addContainer("ql-editor")),
                        this.root.classList.add("ql-blank"),
                        this.root.setAttribute("data-gramm", !1),
                        (this.scrollingContainer =
                          this.options.scrollingContainer || this.root),
                        (this.emitter = new l.default()),
                        (this.scroll = c.default.create(this.root, {
                          emitter: this.emitter,
                          whitelist: this.options.formats,
                        })),
                        (this.editor = new s.default(this.scroll)),
                        (this.selection = new h.default(
                          this.scroll,
                          this.emitter
                        )),
                        (this.theme = new this.options.theme(
                          this,
                          this.options
                        )),
                        (this.keyboard = this.theme.addModule("keyboard")),
                        (this.clipboard = this.theme.addModule("clipboard")),
                        (this.history = this.theme.addModule("history")),
                        this.theme.init(),
                        this.emitter.on(
                          l.default.events.EDITOR_CHANGE,
                          function (t) {
                            t === l.default.events.TEXT_CHANGE &&
                              n.root.classList.toggle(
                                "ql-blank",
                                n.editor.isBlank()
                              );
                          }
                        ),
                        this.emitter.on(
                          l.default.events.SCROLL_UPDATE,
                          function (t, e) {
                            var r = n.selection.lastRange,
                              o = r && 0 === r.length ? r.index : void 0;
                            w.call(
                              n,
                              function () {
                                return n.editor.update(null, e, o);
                              },
                              t
                            );
                          }
                        );
                      var i = this.clipboard.convert(
                        "<div class='ql-editor' style=\"white-space: normal;\">" +
                          o +
                          "<p><br></p></div>"
                      );
                      this.setContents(i),
                        this.history.clear(),
                        this.options.placeholder &&
                          this.root.setAttribute(
                            "data-placeholder",
                            this.options.placeholder
                          ),
                        this.options.readOnly && this.disable();
                    }
                    return (
                      i(t, null, [
                        {
                          key: "debug",
                          value: function (t) {
                            !0 === t && (t = "log"), d.default.level(t);
                          },
                        },
                        {
                          key: "find",
                          value: function (t) {
                            return t.__quill || c.default.find(t);
                          },
                        },
                        {
                          key: "import",
                          value: function (t) {
                            return (
                              null == this.imports[t] &&
                                b.error(
                                  "Cannot import " +
                                    t +
                                    ". Are you sure it was registered?"
                                ),
                              this.imports[t]
                            );
                          },
                        },
                        {
                          key: "register",
                          value: function (t, e) {
                            var n = this,
                              r =
                                arguments.length > 2 &&
                                void 0 !== arguments[2] &&
                                arguments[2];
                            if ("string" != typeof t) {
                              var o = t.attrName || t.blotName;
                              "string" == typeof o
                                ? this.register("formats/" + o, t, e)
                                : Object.keys(t).forEach(function (r) {
                                    n.register(r, t[r], e);
                                  });
                            } else
                              null == this.imports[t] ||
                                r ||
                                b.warn("Overwriting " + t + " with", e),
                                (this.imports[t] = e),
                                (t.startsWith("blots/") ||
                                  t.startsWith("formats/")) &&
                                "abstract" !== e.blotName
                                  ? c.default.register(e)
                                  : t.startsWith("modules") &&
                                    "function" == typeof e.register &&
                                    e.register();
                          },
                        },
                      ]),
                      i(t, [
                        {
                          key: "addContainer",
                          value: function (t) {
                            var e =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : null;
                            if ("string" == typeof t) {
                              var n = t;
                              (t = document.createElement("div")).classList.add(
                                n
                              );
                            }
                            return this.container.insertBefore(t, e), t;
                          },
                        },
                        {
                          key: "blur",
                          value: function () {
                            this.selection.setRange(null);
                          },
                        },
                        {
                          key: "deleteText",
                          value: function (t, e, n) {
                            var r = this,
                              i = A(t, e, n),
                              a = o(i, 4);
                            return (
                              (t = a[0]),
                              (e = a[1]),
                              (n = a[3]),
                              w.call(
                                this,
                                function () {
                                  return r.editor.deleteText(t, e);
                                },
                                n,
                                t,
                                -1 * e
                              )
                            );
                          },
                        },
                        {
                          key: "disable",
                          value: function () {
                            this.enable(!1);
                          },
                        },
                        {
                          key: "enable",
                          value: function () {
                            var t =
                              !(
                                arguments.length > 0 && void 0 !== arguments[0]
                              ) || arguments[0];
                            this.scroll.enable(t),
                              this.container.classList.toggle(
                                "ql-disabled",
                                !t
                              );
                          },
                        },
                        {
                          key: "focus",
                          value: function () {
                            var t = this.scrollingContainer.scrollTop;
                            this.selection.focus(),
                              (this.scrollingContainer.scrollTop = t),
                              this.scrollIntoView();
                          },
                        },
                        {
                          key: "format",
                          value: function (t, e) {
                            var n = this,
                              r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : l.default.sources.API;
                            return w.call(
                              this,
                              function () {
                                var r = n.getSelection(!0),
                                  o = new a.default();
                                if (null == r) return o;
                                if (c.default.query(t, c.default.Scope.BLOCK))
                                  o = n.editor.formatLine(
                                    r.index,
                                    r.length,
                                    m({}, t, e)
                                  );
                                else {
                                  if (0 === r.length)
                                    return n.selection.format(t, e), o;
                                  o = n.editor.formatText(
                                    r.index,
                                    r.length,
                                    m({}, t, e)
                                  );
                                }
                                return (
                                  n.setSelection(r, l.default.sources.SILENT), o
                                );
                              },
                              r
                            );
                          },
                        },
                        {
                          key: "formatLine",
                          value: function (t, e, n, r, i) {
                            var a,
                              s = this,
                              l = A(t, e, n, r, i),
                              u = o(l, 4);
                            return (
                              (t = u[0]),
                              (e = u[1]),
                              (a = u[2]),
                              (i = u[3]),
                              w.call(
                                this,
                                function () {
                                  return s.editor.formatLine(t, e, a);
                                },
                                i,
                                t,
                                0
                              )
                            );
                          },
                        },
                        {
                          key: "formatText",
                          value: function (t, e, n, r, i) {
                            var a,
                              s = this,
                              l = A(t, e, n, r, i),
                              u = o(l, 4);
                            return (
                              (t = u[0]),
                              (e = u[1]),
                              (a = u[2]),
                              (i = u[3]),
                              w.call(
                                this,
                                function () {
                                  return s.editor.formatText(t, e, a);
                                },
                                i,
                                t,
                                0
                              )
                            );
                          },
                        },
                        {
                          key: "getBounds",
                          value: function (t) {
                            var e =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : 0,
                              n = void 0;
                            n =
                              "number" == typeof t
                                ? this.selection.getBounds(t, e)
                                : this.selection.getBounds(t.index, t.length);
                            var r = this.container.getBoundingClientRect();
                            return {
                              bottom: n.bottom - r.top,
                              height: n.height,
                              left: n.left - r.left,
                              right: n.right - r.left,
                              top: n.top - r.top,
                              width: n.width,
                            };
                          },
                        },
                        {
                          key: "getContents",
                          value: function () {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : 0,
                              e =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : this.getLength() - t,
                              n = A(t, e),
                              r = o(n, 2);
                            return (
                              (t = r[0]),
                              (e = r[1]),
                              this.editor.getContents(t, e)
                            );
                          },
                        },
                        {
                          key: "getFormat",
                          value: function () {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : this.getSelection(!0),
                              e =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : 0;
                            return "number" == typeof t
                              ? this.editor.getFormat(t, e)
                              : this.editor.getFormat(t.index, t.length);
                          },
                        },
                        {
                          key: "getIndex",
                          value: function (t) {
                            return t.offset(this.scroll);
                          },
                        },
                        {
                          key: "getLength",
                          value: function () {
                            return this.scroll.length();
                          },
                        },
                        {
                          key: "getLeaf",
                          value: function (t) {
                            return this.scroll.leaf(t);
                          },
                        },
                        {
                          key: "getLine",
                          value: function (t) {
                            return this.scroll.line(t);
                          },
                        },
                        {
                          key: "getLines",
                          value: function () {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : 0,
                              e =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : Number.MAX_VALUE;
                            return "number" != typeof t
                              ? this.scroll.lines(t.index, t.length)
                              : this.scroll.lines(t, e);
                          },
                        },
                        {
                          key: "getModule",
                          value: function (t) {
                            return this.theme.modules[t];
                          },
                        },
                        {
                          key: "getSelection",
                          value: function () {
                            var t =
                              arguments.length > 0 &&
                              void 0 !== arguments[0] &&
                              arguments[0];
                            return (
                              t && this.focus(),
                              this.update(),
                              this.selection.getRange()[0]
                            );
                          },
                        },
                        {
                          key: "getText",
                          value: function () {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : 0,
                              e =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : this.getLength() - t,
                              n = A(t, e),
                              r = o(n, 2);
                            return (
                              (t = r[0]), (e = r[1]), this.editor.getText(t, e)
                            );
                          },
                        },
                        {
                          key: "hasFocus",
                          value: function () {
                            return this.selection.hasFocus();
                          },
                        },
                        {
                          key: "insertEmbed",
                          value: function (e, n, r) {
                            var o = this,
                              i =
                                arguments.length > 3 && void 0 !== arguments[3]
                                  ? arguments[3]
                                  : t.sources.API;
                            return w.call(
                              this,
                              function () {
                                return o.editor.insertEmbed(e, n, r);
                              },
                              i,
                              e
                            );
                          },
                        },
                        {
                          key: "insertText",
                          value: function (t, e, n, r, i) {
                            var a,
                              s = this,
                              l = A(t, 0, n, r, i),
                              u = o(l, 4);
                            return (
                              (t = u[0]),
                              (a = u[2]),
                              (i = u[3]),
                              w.call(
                                this,
                                function () {
                                  return s.editor.insertText(t, e, a);
                                },
                                i,
                                t,
                                e.length
                              )
                            );
                          },
                        },
                        {
                          key: "isEnabled",
                          value: function () {
                            return !this.container.classList.contains(
                              "ql-disabled"
                            );
                          },
                        },
                        {
                          key: "off",
                          value: function () {
                            return this.emitter.off.apply(
                              this.emitter,
                              arguments
                            );
                          },
                        },
                        {
                          key: "on",
                          value: function () {
                            return this.emitter.on.apply(
                              this.emitter,
                              arguments
                            );
                          },
                        },
                        {
                          key: "once",
                          value: function () {
                            return this.emitter.once.apply(
                              this.emitter,
                              arguments
                            );
                          },
                        },
                        {
                          key: "pasteHTML",
                          value: function (t, e, n) {
                            this.clipboard.dangerouslyPasteHTML(t, e, n);
                          },
                        },
                        {
                          key: "removeFormat",
                          value: function (t, e, n) {
                            var r = this,
                              i = A(t, e, n),
                              a = o(i, 4);
                            return (
                              (t = a[0]),
                              (e = a[1]),
                              (n = a[3]),
                              w.call(
                                this,
                                function () {
                                  return r.editor.removeFormat(t, e);
                                },
                                n,
                                t
                              )
                            );
                          },
                        },
                        {
                          key: "scrollIntoView",
                          value: function () {
                            this.selection.scrollIntoView(
                              this.scrollingContainer
                            );
                          },
                        },
                        {
                          key: "setContents",
                          value: function (t) {
                            var e = this,
                              n =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : l.default.sources.API;
                            return w.call(
                              this,
                              function () {
                                t = new a.default(t);
                                var n = e.getLength(),
                                  r = e.editor.deleteText(0, n),
                                  o = e.editor.applyDelta(t),
                                  i = o.ops[o.ops.length - 1];
                                return (
                                  null != i &&
                                    "string" == typeof i.insert &&
                                    "\n" === i.insert[i.insert.length - 1] &&
                                    (e.editor.deleteText(e.getLength() - 1, 1),
                                    o.delete(1)),
                                  r.compose(o)
                                );
                              },
                              n
                            );
                          },
                        },
                        {
                          key: "setSelection",
                          value: function (e, n, r) {
                            if (null == e)
                              this.selection.setRange(null, n || t.sources.API);
                            else {
                              var i = A(e, n, r),
                                a = o(i, 4);
                              (e = a[0]),
                                (n = a[1]),
                                (r = a[3]),
                                this.selection.setRange(new f.Range(e, n), r),
                                r !== l.default.sources.SILENT &&
                                  this.selection.scrollIntoView(
                                    this.scrollingContainer
                                  );
                            }
                          },
                        },
                        {
                          key: "setText",
                          value: function (t) {
                            var e =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : l.default.sources.API,
                              n = new a.default().insert(t);
                            return this.setContents(n, e);
                          },
                        },
                        {
                          key: "update",
                          value: function () {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : l.default.sources.USER,
                              e = this.scroll.update(t);
                            return this.selection.update(t), e;
                          },
                        },
                        {
                          key: "updateContents",
                          value: function (t) {
                            var e = this,
                              n =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : l.default.sources.API;
                            return w.call(
                              this,
                              function () {
                                return (
                                  (t = new a.default(t)),
                                  e.editor.applyDelta(t, n)
                                );
                              },
                              n,
                              !0
                            );
                          },
                        },
                      ]),
                      t
                    );
                  })();
                function _(t, e) {
                  if (
                    (e = (0, p.default)(
                      !0,
                      {
                        container: t,
                        modules: { clipboard: !0, keyboard: !0, history: !0 },
                      },
                      e
                    )).theme &&
                    e.theme !== x.DEFAULTS.theme
                  ) {
                    if (
                      ((e.theme = x.import("themes/" + e.theme)),
                      null == e.theme)
                    )
                      throw new Error(
                        "Invalid theme " + e.theme + ". Did you register it?"
                      );
                  } else e.theme = y.default;
                  var n = (0, p.default)(!0, {}, e.theme.DEFAULTS);
                  [n, e].forEach(function (t) {
                    (t.modules = t.modules || {}),
                      Object.keys(t.modules).forEach(function (e) {
                        !0 === t.modules[e] && (t.modules[e] = {});
                      });
                  });
                  var r = Object.keys(n.modules)
                    .concat(Object.keys(e.modules))
                    .reduce(function (t, e) {
                      var n = x.import("modules/" + e);
                      return (
                        null == n
                          ? b.error(
                              "Cannot load " +
                                e +
                                " module. Are you sure you registered it?"
                            )
                          : (t[e] = n.DEFAULTS || {}),
                        t
                      );
                    }, {});
                  return (
                    null != e.modules &&
                      e.modules.toolbar &&
                      e.modules.toolbar.constructor !== Object &&
                      (e.modules.toolbar = { container: e.modules.toolbar }),
                    (e = (0, p.default)(
                      !0,
                      {},
                      x.DEFAULTS,
                      { modules: r },
                      n,
                      e
                    )),
                    ["bounds", "container", "scrollingContainer"].forEach(
                      function (t) {
                        "string" == typeof e[t] &&
                          (e[t] = document.querySelector(e[t]));
                      }
                    ),
                    (e.modules = Object.keys(e.modules).reduce(function (t, n) {
                      return e.modules[n] && (t[n] = e.modules[n]), t;
                    }, {})),
                    e
                  );
                }
                function w(t, e, n, r) {
                  if (
                    this.options.strict &&
                    !this.isEnabled() &&
                    e === l.default.sources.USER
                  )
                    return new a.default();
                  var o = null == n ? null : this.getSelection(),
                    i = this.editor.delta,
                    s = t();
                  if (
                    (null != o &&
                      (!0 === n && (n = o.index),
                      null == r
                        ? (o = E(o, s, e))
                        : 0 !== r && (o = E(o, n, r, e)),
                      this.setSelection(o, l.default.sources.SILENT)),
                    s.length() > 0)
                  ) {
                    var u,
                      c,
                      f = [l.default.events.TEXT_CHANGE, s, i, e];
                    (u = this.emitter).emit.apply(
                      u,
                      [l.default.events.EDITOR_CHANGE].concat(f)
                    ),
                      e !== l.default.sources.SILENT &&
                        (c = this.emitter).emit.apply(c, f);
                  }
                  return s;
                }
                function A(t, e, n, o, i) {
                  var a = {};
                  return (
                    "number" == typeof t.index && "number" == typeof t.length
                      ? "number" != typeof e
                        ? ((i = o),
                          (o = n),
                          (n = e),
                          (e = t.length),
                          (t = t.index))
                        : ((e = t.length), (t = t.index))
                      : "number" != typeof e &&
                        ((i = o), (o = n), (n = e), (e = 0)),
                    "object" === (void 0 === n ? "undefined" : r(n))
                      ? ((a = n), (i = o))
                      : "string" == typeof n &&
                        (null != o ? (a[n] = o) : (i = n)),
                    [t, e, a, (i = i || l.default.sources.API)]
                  );
                }
                function E(t, e, n, r) {
                  if (null == t) return null;
                  var i = void 0,
                    s = void 0;
                  if (e instanceof a.default) {
                    var u = [t.index, t.index + t.length].map(function (t) {
                        return e.transformPosition(
                          t,
                          r !== l.default.sources.USER
                        );
                      }),
                      c = o(u, 2);
                    (i = c[0]), (s = c[1]);
                  } else {
                    var h = [t.index, t.index + t.length].map(function (t) {
                        return t < e ||
                          (t === e && r === l.default.sources.USER)
                          ? t
                          : n >= 0
                          ? t + n
                          : Math.max(e, t + n);
                      }),
                      p = o(h, 2);
                    (i = p[0]), (s = p[1]);
                  }
                  return new f.Range(i, s - i);
                }
                (x.DEFAULTS = {
                  bounds: null,
                  formats: null,
                  modules: {},
                  placeholder: "",
                  readOnly: !1,
                  scrollingContainer: null,
                  strict: !0,
                  theme: "default",
                }),
                  (x.events = l.default.events),
                  (x.sources = l.default.sources),
                  (x.version = "1.3.7"),
                  (x.imports = {
                    delta: a.default,
                    parchment: c.default,
                    "core/module": u.default,
                    "core/theme": y.default,
                  }),
                  (e.expandConfig = _),
                  (e.overload = A),
                  (e.default = x);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  o = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                      var i = Object.getPrototypeOf(e);
                      return null === i ? void 0 : t(i, n, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                  },
                  i = s(n(7)),
                  a = s(n(0));
                function s(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function l(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function u(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                }
                var c = (function (t) {
                  function e() {
                    return (
                      l(this, e),
                      u(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function (t, e) {
                      if ("function" != typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, t),
                    r(
                      e,
                      [
                        {
                          key: "formatAt",
                          value: function (t, n, r, i) {
                            if (
                              e.compare(this.statics.blotName, r) < 0 &&
                              a.default.query(r, a.default.Scope.BLOT)
                            ) {
                              var s = this.isolate(t, n);
                              i && s.wrap(r, i);
                            } else
                              o(
                                e.prototype.__proto__ ||
                                  Object.getPrototypeOf(e.prototype),
                                "formatAt",
                                this
                              ).call(this, t, n, r, i);
                          },
                        },
                        {
                          key: "optimize",
                          value: function (t) {
                            if (
                              (o(
                                e.prototype.__proto__ ||
                                  Object.getPrototypeOf(e.prototype),
                                "optimize",
                                this
                              ).call(this, t),
                              this.parent instanceof e &&
                                e.compare(
                                  this.statics.blotName,
                                  this.parent.statics.blotName
                                ) > 0)
                            ) {
                              var n = this.parent.isolate(
                                this.offset(),
                                this.length()
                              );
                              this.moveChildren(n), n.wrap(this);
                            }
                          },
                        },
                      ],
                      [
                        {
                          key: "compare",
                          value: function (t, n) {
                            var r = e.order.indexOf(t),
                              o = e.order.indexOf(n);
                            return r >= 0 || o >= 0
                              ? r - o
                              : t === n
                              ? 0
                              : t < n
                              ? -1
                              : 1;
                          },
                        },
                      ]
                    ),
                    e
                  );
                })(a.default.Inline);
                (c.allowedChildren = [c, a.default.Embed, i.default]),
                  (c.order = [
                    "cursor",
                    "inline",
                    "underline",
                    "strike",
                    "italic",
                    "bold",
                    "script",
                    "link",
                    "code",
                  ]),
                  (e.default = c);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r,
                  o = n(0);
                function i(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function a(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                }
                var s = (function (t) {
                  function e() {
                    return (
                      i(this, e),
                      a(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function (t, e) {
                      if ("function" != typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, t),
                    e
                  );
                })(((r = o) && r.__esModule ? r : { default: r }).default.Text);
                e.default = s;
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  o = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                      var i = Object.getPrototypeOf(e);
                      return null === i ? void 0 : t(i, n, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                  },
                  i = a(n(54));
                function a(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                var s = (0, a(n(10)).default)("quill:events");
                ["selectionchange", "mousedown", "mouseup", "click"].forEach(
                  function (t) {
                    document.addEventListener(t, function () {
                      for (
                        var t = arguments.length, e = Array(t), n = 0;
                        n < t;
                        n++
                      )
                        e[n] = arguments[n];
                      [].slice
                        .call(document.querySelectorAll(".ql-container"))
                        .forEach(function (t) {
                          var n;
                          t.__quill &&
                            t.__quill.emitter &&
                            (n = t.__quill.emitter).handleDOM.apply(n, e);
                        });
                    });
                  }
                );
                var l = (function (t) {
                  function e() {
                    !(function (t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e);
                    var t = (function (t, e) {
                      if (!t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return !e ||
                        ("object" != typeof e && "function" != typeof e)
                        ? t
                        : e;
                    })(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).call(this)
                    );
                    return (t.listeners = {}), t.on("error", s.error), t;
                  }
                  return (
                    (function (t, e) {
                      if ("function" != typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, t),
                    r(e, [
                      {
                        key: "emit",
                        value: function () {
                          s.log.apply(s, arguments),
                            o(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "emit",
                              this
                            ).apply(this, arguments);
                        },
                      },
                      {
                        key: "handleDOM",
                        value: function (t) {
                          for (
                            var e = arguments.length,
                              n = Array(e > 1 ? e - 1 : 0),
                              r = 1;
                            r < e;
                            r++
                          )
                            n[r - 1] = arguments[r];
                          (this.listeners[t.type] || []).forEach(function (e) {
                            var r = e.node,
                              o = e.handler;
                            (t.target === r || r.contains(t.target)) &&
                              o.apply(void 0, [t].concat(n));
                          });
                        },
                      },
                      {
                        key: "listenDOM",
                        value: function (t, e, n) {
                          this.listeners[t] || (this.listeners[t] = []),
                            this.listeners[t].push({ node: e, handler: n });
                        },
                      },
                    ]),
                    e
                  );
                })(i.default);
                (l.events = {
                  EDITOR_CHANGE: "editor-change",
                  SCROLL_BEFORE_UPDATE: "scroll-before-update",
                  SCROLL_OPTIMIZE: "scroll-optimize",
                  SCROLL_UPDATE: "scroll-update",
                  SELECTION_CHANGE: "selection-change",
                  TEXT_CHANGE: "text-change",
                }),
                  (l.sources = { API: "api", SILENT: "silent", USER: "user" }),
                  (e.default = l);
              },
              function (t, e, n) {
                "use strict";
                function r(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                Object.defineProperty(e, "__esModule", { value: !0 });
                var o = function t(e) {
                  var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  r(this, t), (this.quill = e), (this.options = n);
                };
                (o.DEFAULTS = {}), (e.default = o);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = ["error", "warn", "log", "info"],
                  o = "warn";
                function i(t) {
                  if (r.indexOf(t) <= r.indexOf(o)) {
                    for (
                      var e,
                        n = arguments.length,
                        i = Array(n > 1 ? n - 1 : 0),
                        a = 1;
                      a < n;
                      a++
                    )
                      i[a - 1] = arguments[a];
                    (e = console)[t].apply(e, i);
                  }
                }
                function a(t) {
                  return r.reduce(function (e, n) {
                    return (e[n] = i.bind(console, n, t)), e;
                  }, {});
                }
                (i.level = a.level =
                  function (t) {
                    o = t;
                  }),
                  (e.default = a);
              },
              function (t, e, n) {
                var r = Array.prototype.slice,
                  o = n(52),
                  i = n(53),
                  a = (t.exports = function (t, e, n) {
                    return (
                      n || (n = {}),
                      t === e ||
                        (t instanceof Date && e instanceof Date
                          ? t.getTime() === e.getTime()
                          : !t ||
                            !e ||
                            ("object" != typeof t && "object" != typeof e)
                          ? n.strict
                            ? t === e
                            : t == e
                          : (function (t, e, n) {
                              var u, c;
                              if (s(t) || s(e)) return !1;
                              if (t.prototype !== e.prototype) return !1;
                              if (i(t))
                                return (
                                  !!i(e) &&
                                  ((t = r.call(t)), (e = r.call(e)), a(t, e, n))
                                );
                              if (l(t)) {
                                if (!l(e)) return !1;
                                if (t.length !== e.length) return !1;
                                for (u = 0; u < t.length; u++)
                                  if (t[u] !== e[u]) return !1;
                                return !0;
                              }
                              try {
                                var f = o(t),
                                  h = o(e);
                              } catch (t) {
                                return !1;
                              }
                              if (f.length != h.length) return !1;
                              for (
                                f.sort(), h.sort(), u = f.length - 1;
                                u >= 0;
                                u--
                              )
                                if (f[u] != h[u]) return !1;
                              for (u = f.length - 1; u >= 0; u--)
                                if (((c = f[u]), !a(t[c], e[c], n))) return !1;
                              return typeof t == typeof e;
                            })(t, e, n))
                    );
                  });
                function s(t) {
                  return null == t;
                }
                function l(t) {
                  return !(
                    !t ||
                    "object" != typeof t ||
                    "number" != typeof t.length ||
                    "function" != typeof t.copy ||
                    "function" != typeof t.slice ||
                    (t.length > 0 && "number" != typeof t[0])
                  );
                }
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = n(1),
                  o = (function () {
                    function t(t, e, n) {
                      void 0 === n && (n = {}),
                        (this.attrName = t),
                        (this.keyName = e);
                      var o = r.Scope.TYPE & r.Scope.ATTRIBUTE;
                      null != n.scope
                        ? (this.scope = (n.scope & r.Scope.LEVEL) | o)
                        : (this.scope = r.Scope.ATTRIBUTE),
                        null != n.whitelist && (this.whitelist = n.whitelist);
                    }
                    return (
                      (t.keys = function (t) {
                        return [].map.call(t.attributes, function (t) {
                          return t.name;
                        });
                      }),
                      (t.prototype.add = function (t, e) {
                        return (
                          !!this.canAdd(t, e) &&
                          (t.setAttribute(this.keyName, e), !0)
                        );
                      }),
                      (t.prototype.canAdd = function (t, e) {
                        return (
                          null !=
                            r.query(
                              t,
                              r.Scope.BLOT & (this.scope | r.Scope.TYPE)
                            ) &&
                          (null == this.whitelist ||
                            ("string" == typeof e
                              ? this.whitelist.indexOf(e.replace(/["']/g, "")) >
                                -1
                              : this.whitelist.indexOf(e) > -1))
                        );
                      }),
                      (t.prototype.remove = function (t) {
                        t.removeAttribute(this.keyName);
                      }),
                      (t.prototype.value = function (t) {
                        var e = t.getAttribute(this.keyName);
                        return this.canAdd(t, e) && e ? e : "";
                      }),
                      t
                    );
                  })();
                e.default = o;
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.default = e.Code = void 0);
                var r = function (t, e) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t))
                      return (function (t, e) {
                        var n = [],
                          r = !0,
                          o = !1,
                          i = void 0;
                        try {
                          for (
                            var a, s = t[Symbol.iterator]();
                            !(r = (a = s.next()).done) &&
                            (n.push(a.value), !e || n.length !== e);
                            r = !0
                          );
                        } catch (t) {
                          (o = !0), (i = t);
                        } finally {
                          try {
                            !r && s.return && s.return();
                          } finally {
                            if (o) throw i;
                          }
                        }
                        return n;
                      })(t, e);
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  },
                  o = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                      var i = Object.getPrototypeOf(e);
                      return null === i ? void 0 : t(i, n, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                  },
                  a = f(n(2)),
                  s = f(n(0)),
                  l = f(n(4)),
                  u = f(n(6)),
                  c = f(n(7));
                function f(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function h(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function p(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                }
                function d(t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                }
                var y = (function (t) {
                  function e() {
                    return (
                      h(this, e),
                      p(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return d(e, t), e;
                })(u.default);
                (y.blotName = "code"), (y.tagName = "CODE");
                var g = (function (t) {
                  function e() {
                    return (
                      h(this, e),
                      p(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    d(e, t),
                    o(
                      e,
                      [
                        {
                          key: "delta",
                          value: function () {
                            var t = this,
                              e = this.domNode.textContent;
                            return (
                              e.endsWith("\n") && (e = e.slice(0, -1)),
                              e.split("\n").reduce(function (e, n) {
                                return e.insert(n).insert("\n", t.formats());
                              }, new a.default())
                            );
                          },
                        },
                        {
                          key: "format",
                          value: function (t, n) {
                            if (t !== this.statics.blotName || !n) {
                              var o = this.descendant(
                                  c.default,
                                  this.length() - 1
                                ),
                                a = r(o, 1)[0];
                              null != a && a.deleteAt(a.length() - 1, 1),
                                i(
                                  e.prototype.__proto__ ||
                                    Object.getPrototypeOf(e.prototype),
                                  "format",
                                  this
                                ).call(this, t, n);
                            }
                          },
                        },
                        {
                          key: "formatAt",
                          value: function (t, n, r, o) {
                            if (
                              0 !== n &&
                              null !=
                                s.default.query(r, s.default.Scope.BLOCK) &&
                              (r !== this.statics.blotName ||
                                o !== this.statics.formats(this.domNode))
                            ) {
                              var i = this.newlineIndex(t);
                              if (!(i < 0 || i >= t + n)) {
                                var a = this.newlineIndex(t, !0) + 1,
                                  l = i - a + 1,
                                  u = this.isolate(a, l),
                                  c = u.next;
                                u.format(r, o),
                                  c instanceof e &&
                                    c.formatAt(0, t - a + n - l, r, o);
                              }
                            }
                          },
                        },
                        {
                          key: "insertAt",
                          value: function (t, e, n) {
                            if (null == n) {
                              var o = this.descendant(c.default, t),
                                i = r(o, 2),
                                a = i[0],
                                s = i[1];
                              a.insertAt(s, e);
                            }
                          },
                        },
                        {
                          key: "length",
                          value: function () {
                            var t = this.domNode.textContent.length;
                            return this.domNode.textContent.endsWith("\n")
                              ? t
                              : t + 1;
                          },
                        },
                        {
                          key: "newlineIndex",
                          value: function (t) {
                            var e =
                              arguments.length > 1 &&
                              void 0 !== arguments[1] &&
                              arguments[1];
                            if (e)
                              return this.domNode.textContent
                                .slice(0, t)
                                .lastIndexOf("\n");
                            var n = this.domNode.textContent
                              .slice(t)
                              .indexOf("\n");
                            return n > -1 ? t + n : -1;
                          },
                        },
                        {
                          key: "optimize",
                          value: function (t) {
                            this.domNode.textContent.endsWith("\n") ||
                              this.appendChild(s.default.create("text", "\n")),
                              i(
                                e.prototype.__proto__ ||
                                  Object.getPrototypeOf(e.prototype),
                                "optimize",
                                this
                              ).call(this, t);
                            var n = this.next;
                            null != n &&
                              n.prev === this &&
                              n.statics.blotName === this.statics.blotName &&
                              this.statics.formats(this.domNode) ===
                                n.statics.formats(n.domNode) &&
                              (n.optimize(t), n.moveChildren(this), n.remove());
                          },
                        },
                        {
                          key: "replace",
                          value: function (t) {
                            i(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "replace",
                              this
                            ).call(this, t),
                              [].slice
                                .call(this.domNode.querySelectorAll("*"))
                                .forEach(function (t) {
                                  var e = s.default.find(t);
                                  null == e
                                    ? t.parentNode.removeChild(t)
                                    : e instanceof s.default.Embed
                                    ? e.remove()
                                    : e.unwrap();
                                });
                          },
                        },
                      ],
                      [
                        {
                          key: "create",
                          value: function (t) {
                            var n = i(
                              e.__proto__ || Object.getPrototypeOf(e),
                              "create",
                              this
                            ).call(this, t);
                            return n.setAttribute("spellcheck", !1), n;
                          },
                        },
                        {
                          key: "formats",
                          value: function () {
                            return !0;
                          },
                        },
                      ]
                    ),
                    e
                  );
                })(l.default);
                (g.blotName = "code-block"),
                  (g.tagName = "PRE"),
                  (g.TAB = "  "),
                  (e.Code = y),
                  (e.default = g);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (t) {
                          return typeof t;
                        }
                      : function (t) {
                          return t &&
                            "function" == typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                        },
                  o = function (t, e) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t))
                      return (function (t, e) {
                        var n = [],
                          r = !0,
                          o = !1,
                          i = void 0;
                        try {
                          for (
                            var a, s = t[Symbol.iterator]();
                            !(r = (a = s.next()).done) &&
                            (n.push(a.value), !e || n.length !== e);
                            r = !0
                          );
                        } catch (t) {
                          (o = !0), (i = t);
                        } finally {
                          try {
                            !r && s.return && s.return();
                          } finally {
                            if (o) throw i;
                          }
                        }
                        return n;
                      })(t, e);
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  },
                  i = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  a = m(n(2)),
                  s = m(n(20)),
                  l = m(n(0)),
                  u = m(n(13)),
                  c = m(n(24)),
                  f = n(4),
                  h = m(f),
                  p = m(n(16)),
                  d = m(n(21)),
                  y = m(n(11)),
                  g = m(n(3));
                function m(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                var v = /^[ -~]*$/,
                  b = (function () {
                    function t(e) {
                      !(function (t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, t),
                        (this.scroll = e),
                        (this.delta = this.getDelta());
                    }
                    return (
                      i(t, [
                        {
                          key: "applyDelta",
                          value: function (t) {
                            var e = this,
                              n = !1;
                            this.scroll.update();
                            var i = this.scroll.length();
                            return (
                              this.scroll.batchStart(),
                              (t = (function (t) {
                                return t.reduce(function (t, e) {
                                  if (1 === e.insert) {
                                    var n = (0, d.default)(e.attributes);
                                    return (
                                      delete n.image,
                                      t.insert({ image: e.attributes.image }, n)
                                    );
                                  }
                                  if (
                                    (null == e.attributes ||
                                      (!0 !== e.attributes.list &&
                                        !0 !== e.attributes.bullet) ||
                                      ((e = (0, d.default)(e)).attributes.list
                                        ? (e.attributes.list = "ordered")
                                        : ((e.attributes.list = "bullet"),
                                          delete e.attributes.bullet)),
                                    "string" == typeof e.insert)
                                  ) {
                                    var r = e.insert
                                      .replace(/\r\n/g, "\n")
                                      .replace(/\r/g, "\n");
                                    return t.insert(r, e.attributes);
                                  }
                                  return t.push(e);
                                }, new a.default());
                              })(t)).reduce(function (t, a) {
                                var u =
                                    a.retain ||
                                    a.delete ||
                                    a.insert.length ||
                                    1,
                                  c = a.attributes || {};
                                if (null != a.insert) {
                                  if ("string" == typeof a.insert) {
                                    var p = a.insert;
                                    p.endsWith("\n") &&
                                      n &&
                                      ((n = !1), (p = p.slice(0, -1))),
                                      t >= i && !p.endsWith("\n") && (n = !0),
                                      e.scroll.insertAt(t, p);
                                    var d = e.scroll.line(t),
                                      y = o(d, 2),
                                      m = y[0],
                                      v = y[1],
                                      b = (0, g.default)(
                                        {},
                                        (0, f.bubbleFormats)(m)
                                      );
                                    if (m instanceof h.default) {
                                      var x = m.descendant(l.default.Leaf, v),
                                        _ = o(x, 1)[0];
                                      b = (0, g.default)(
                                        b,
                                        (0, f.bubbleFormats)(_)
                                      );
                                    }
                                    c = s.default.attributes.diff(b, c) || {};
                                  } else if ("object" === r(a.insert)) {
                                    var w = Object.keys(a.insert)[0];
                                    if (null == w) return t;
                                    e.scroll.insertAt(t, w, a.insert[w]);
                                  }
                                  i += u;
                                }
                                return (
                                  Object.keys(c).forEach(function (n) {
                                    e.scroll.formatAt(t, u, n, c[n]);
                                  }),
                                  t + u
                                );
                              }, 0),
                              t.reduce(function (t, n) {
                                return "number" == typeof n.delete
                                  ? (e.scroll.deleteAt(t, n.delete), t)
                                  : t + (n.retain || n.insert.length || 1);
                              }, 0),
                              this.scroll.batchEnd(),
                              this.update(t)
                            );
                          },
                        },
                        {
                          key: "deleteText",
                          value: function (t, e) {
                            return (
                              this.scroll.deleteAt(t, e),
                              this.update(new a.default().retain(t).delete(e))
                            );
                          },
                        },
                        {
                          key: "formatLine",
                          value: function (t, e) {
                            var n = this,
                              r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : {};
                            return (
                              this.scroll.update(),
                              Object.keys(r).forEach(function (o) {
                                if (
                                  null == n.scroll.whitelist ||
                                  n.scroll.whitelist[o]
                                ) {
                                  var i = n.scroll.lines(t, Math.max(e, 1)),
                                    a = e;
                                  i.forEach(function (e) {
                                    var i = e.length();
                                    if (e instanceof u.default) {
                                      var s = t - e.offset(n.scroll),
                                        l = e.newlineIndex(s + a) - s + 1;
                                      e.formatAt(s, l, o, r[o]);
                                    } else e.format(o, r[o]);
                                    a -= i;
                                  });
                                }
                              }),
                              this.scroll.optimize(),
                              this.update(
                                new a.default()
                                  .retain(t)
                                  .retain(e, (0, d.default)(r))
                              )
                            );
                          },
                        },
                        {
                          key: "formatText",
                          value: function (t, e) {
                            var n = this,
                              r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : {};
                            return (
                              Object.keys(r).forEach(function (o) {
                                n.scroll.formatAt(t, e, o, r[o]);
                              }),
                              this.update(
                                new a.default()
                                  .retain(t)
                                  .retain(e, (0, d.default)(r))
                              )
                            );
                          },
                        },
                        {
                          key: "getContents",
                          value: function (t, e) {
                            return this.delta.slice(t, t + e);
                          },
                        },
                        {
                          key: "getDelta",
                          value: function () {
                            return this.scroll.lines().reduce(function (t, e) {
                              return t.concat(e.delta());
                            }, new a.default());
                          },
                        },
                        {
                          key: "getFormat",
                          value: function (t) {
                            var e =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : 0,
                              n = [],
                              r = [];
                            0 === e
                              ? this.scroll.path(t).forEach(function (t) {
                                  var e = o(t, 1)[0];
                                  e instanceof h.default
                                    ? n.push(e)
                                    : e instanceof l.default.Leaf && r.push(e);
                                })
                              : ((n = this.scroll.lines(t, e)),
                                (r = this.scroll.descendants(
                                  l.default.Leaf,
                                  t,
                                  e
                                )));
                            var i = [n, r].map(function (t) {
                              if (0 === t.length) return {};
                              for (
                                var e = (0, f.bubbleFormats)(t.shift());
                                Object.keys(e).length > 0;

                              ) {
                                var n = t.shift();
                                if (null == n) return e;
                                e = x((0, f.bubbleFormats)(n), e);
                              }
                              return e;
                            });
                            return g.default.apply(g.default, i);
                          },
                        },
                        {
                          key: "getText",
                          value: function (t, e) {
                            return this.getContents(t, e)
                              .filter(function (t) {
                                return "string" == typeof t.insert;
                              })
                              .map(function (t) {
                                return t.insert;
                              })
                              .join("");
                          },
                        },
                        {
                          key: "insertEmbed",
                          value: function (t, e, n) {
                            return (
                              this.scroll.insertAt(t, e, n),
                              this.update(
                                new a.default().retain(t).insert(
                                  (function (t, e, n) {
                                    return (
                                      e in t
                                        ? Object.defineProperty(t, e, {
                                            value: n,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                          })
                                        : (t[e] = n),
                                      t
                                    );
                                  })({}, e, n)
                                )
                              )
                            );
                          },
                        },
                        {
                          key: "insertText",
                          value: function (t, e) {
                            var n = this,
                              r =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : {};
                            return (
                              (e = e
                                .replace(/\r\n/g, "\n")
                                .replace(/\r/g, "\n")),
                              this.scroll.insertAt(t, e),
                              Object.keys(r).forEach(function (o) {
                                n.scroll.formatAt(t, e.length, o, r[o]);
                              }),
                              this.update(
                                new a.default()
                                  .retain(t)
                                  .insert(e, (0, d.default)(r))
                              )
                            );
                          },
                        },
                        {
                          key: "isBlank",
                          value: function () {
                            if (0 == this.scroll.children.length) return !0;
                            if (this.scroll.children.length > 1) return !1;
                            var t = this.scroll.children.head;
                            return (
                              t.statics.blotName === h.default.blotName &&
                              !(t.children.length > 1) &&
                              t.children.head instanceof p.default
                            );
                          },
                        },
                        {
                          key: "removeFormat",
                          value: function (t, e) {
                            var n = this.getText(t, e),
                              r = this.scroll.line(t + e),
                              i = o(r, 2),
                              s = i[0],
                              l = i[1],
                              c = 0,
                              f = new a.default();
                            null != s &&
                              ((c =
                                s instanceof u.default
                                  ? s.newlineIndex(l) - l + 1
                                  : s.length() - l),
                              (f = s
                                .delta()
                                .slice(l, l + c - 1)
                                .insert("\n")));
                            var h = this.getContents(t, e + c).diff(
                                new a.default().insert(n).concat(f)
                              ),
                              p = new a.default().retain(t).concat(h);
                            return this.applyDelta(p);
                          },
                        },
                        {
                          key: "update",
                          value: function (t) {
                            var e =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : [],
                              n =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : void 0,
                              r = this.delta;
                            if (
                              1 === e.length &&
                              "characterData" === e[0].type &&
                              e[0].target.data.match(v) &&
                              l.default.find(e[0].target)
                            ) {
                              var o = l.default.find(e[0].target),
                                i = (0, f.bubbleFormats)(o),
                                s = o.offset(this.scroll),
                                u = e[0].oldValue.replace(
                                  c.default.CONTENTS,
                                  ""
                                ),
                                h = new a.default().insert(u),
                                p = new a.default().insert(o.value()),
                                d = new a.default()
                                  .retain(s)
                                  .concat(h.diff(p, n));
                              (t = d.reduce(function (t, e) {
                                return e.insert
                                  ? t.insert(e.insert, i)
                                  : t.push(e);
                              }, new a.default())),
                                (this.delta = r.compose(t));
                            } else
                              (this.delta = this.getDelta()),
                                (t &&
                                  (0, y.default)(r.compose(t), this.delta)) ||
                                  (t = r.diff(this.delta, n));
                            return t;
                          },
                        },
                      ]),
                      t
                    );
                  })();
                function x(t, e) {
                  return Object.keys(e).reduce(function (n, r) {
                    return (
                      null == t[r] ||
                        (e[r] === t[r]
                          ? (n[r] = e[r])
                          : Array.isArray(e[r])
                          ? e[r].indexOf(t[r]) < 0 &&
                            (n[r] = e[r].concat([t[r]]))
                          : (n[r] = [e[r], t[r]])),
                      n
                    );
                  }, {});
                }
                e.default = b;
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.default = e.Range = void 0);
                var r = function (t, e) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t))
                      return (function (t, e) {
                        var n = [],
                          r = !0,
                          o = !1,
                          i = void 0;
                        try {
                          for (
                            var a, s = t[Symbol.iterator]();
                            !(r = (a = s.next()).done) &&
                            (n.push(a.value), !e || n.length !== e);
                            r = !0
                          );
                        } catch (t) {
                          (o = !0), (i = t);
                        } finally {
                          try {
                            !r && s.return && s.return();
                          } finally {
                            if (o) throw i;
                          }
                        }
                        return n;
                      })(t, e);
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  },
                  o = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = u(n(0)),
                  a = u(n(21)),
                  s = u(n(11)),
                  l = u(n(8));
                function u(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function c(t) {
                  if (Array.isArray(t)) {
                    for (var e = 0, n = Array(t.length); e < t.length; e++)
                      n[e] = t[e];
                    return n;
                  }
                  return Array.from(t);
                }
                function f(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                var h = (0, u(n(10)).default)("quill:selection"),
                  p = function t(e) {
                    var n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0;
                    f(this, t), (this.index = e), (this.length = n);
                  },
                  d = (function () {
                    function t(e, n) {
                      var r = this;
                      f(this, t),
                        (this.emitter = n),
                        (this.scroll = e),
                        (this.composing = !1),
                        (this.mouseDown = !1),
                        (this.root = this.scroll.domNode),
                        (this.cursor = i.default.create("cursor", this)),
                        (this.lastRange = this.savedRange = new p(0, 0)),
                        this.handleComposition(),
                        this.handleDragging(),
                        this.emitter.listenDOM(
                          "selectionchange",
                          document,
                          function () {
                            r.mouseDown ||
                              setTimeout(
                                r.update.bind(r, l.default.sources.USER),
                                1
                              );
                          }
                        ),
                        this.emitter.on(
                          l.default.events.EDITOR_CHANGE,
                          function (t, e) {
                            t === l.default.events.TEXT_CHANGE &&
                              e.length() > 0 &&
                              r.update(l.default.sources.SILENT);
                          }
                        ),
                        this.emitter.on(
                          l.default.events.SCROLL_BEFORE_UPDATE,
                          function () {
                            if (r.hasFocus()) {
                              var t = r.getNativeRange();
                              null != t &&
                                t.start.node !== r.cursor.textNode &&
                                r.emitter.once(
                                  l.default.events.SCROLL_UPDATE,
                                  function () {
                                    try {
                                      r.setNativeRange(
                                        t.start.node,
                                        t.start.offset,
                                        t.end.node,
                                        t.end.offset
                                      );
                                    } catch (t) {}
                                  }
                                );
                            }
                          }
                        ),
                        this.emitter.on(
                          l.default.events.SCROLL_OPTIMIZE,
                          function (t, e) {
                            if (e.range) {
                              var n = e.range,
                                o = n.startNode,
                                i = n.startOffset,
                                a = n.endNode,
                                s = n.endOffset;
                              r.setNativeRange(o, i, a, s);
                            }
                          }
                        ),
                        this.update(l.default.sources.SILENT);
                    }
                    return (
                      o(t, [
                        {
                          key: "handleComposition",
                          value: function () {
                            var t = this;
                            this.root.addEventListener(
                              "compositionstart",
                              function () {
                                t.composing = !0;
                              }
                            ),
                              this.root.addEventListener(
                                "compositionend",
                                function () {
                                  if (((t.composing = !1), t.cursor.parent)) {
                                    var e = t.cursor.restore();
                                    if (!e) return;
                                    setTimeout(function () {
                                      t.setNativeRange(
                                        e.startNode,
                                        e.startOffset,
                                        e.endNode,
                                        e.endOffset
                                      );
                                    }, 1);
                                  }
                                }
                              );
                          },
                        },
                        {
                          key: "handleDragging",
                          value: function () {
                            var t = this;
                            this.emitter.listenDOM(
                              "mousedown",
                              document.body,
                              function () {
                                t.mouseDown = !0;
                              }
                            ),
                              this.emitter.listenDOM(
                                "mouseup",
                                document.body,
                                function () {
                                  (t.mouseDown = !1),
                                    t.update(l.default.sources.USER);
                                }
                              );
                          },
                        },
                        {
                          key: "focus",
                          value: function () {
                            this.hasFocus() ||
                              (this.root.focus(),
                              this.setRange(this.savedRange));
                          },
                        },
                        {
                          key: "format",
                          value: function (t, e) {
                            if (
                              null == this.scroll.whitelist ||
                              this.scroll.whitelist[t]
                            ) {
                              this.scroll.update();
                              var n = this.getNativeRange();
                              if (
                                null != n &&
                                n.native.collapsed &&
                                !i.default.query(t, i.default.Scope.BLOCK)
                              ) {
                                if (n.start.node !== this.cursor.textNode) {
                                  var r = i.default.find(n.start.node, !1);
                                  if (null == r) return;
                                  if (r instanceof i.default.Leaf) {
                                    var o = r.split(n.start.offset);
                                    r.parent.insertBefore(this.cursor, o);
                                  } else
                                    r.insertBefore(this.cursor, n.start.node);
                                  this.cursor.attach();
                                }
                                this.cursor.format(t, e),
                                  this.scroll.optimize(),
                                  this.setNativeRange(
                                    this.cursor.textNode,
                                    this.cursor.textNode.data.length
                                  ),
                                  this.update();
                              }
                            }
                          },
                        },
                        {
                          key: "getBounds",
                          value: function (t) {
                            var e =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : 0,
                              n = this.scroll.length();
                            (t = Math.min(t, n - 1)),
                              (e = Math.min(t + e, n - 1) - t);
                            var o = void 0,
                              i = this.scroll.leaf(t),
                              a = r(i, 2),
                              s = a[0],
                              l = a[1];
                            if (null == s) return null;
                            var u = s.position(l, !0),
                              c = r(u, 2);
                            (o = c[0]), (l = c[1]);
                            var f = document.createRange();
                            if (e > 0) {
                              f.setStart(o, l);
                              var h = this.scroll.leaf(t + e),
                                p = r(h, 2);
                              if (((s = p[0]), (l = p[1]), null == s))
                                return null;
                              var d = s.position(l, !0),
                                y = r(d, 2);
                              return (
                                (o = y[0]),
                                (l = y[1]),
                                f.setEnd(o, l),
                                f.getBoundingClientRect()
                              );
                            }
                            var g = "left",
                              m = void 0;
                            return (
                              o instanceof Text
                                ? (l < o.data.length
                                    ? (f.setStart(o, l), f.setEnd(o, l + 1))
                                    : (f.setStart(o, l - 1),
                                      f.setEnd(o, l),
                                      (g = "right")),
                                  (m = f.getBoundingClientRect()))
                                : ((m = s.domNode.getBoundingClientRect()),
                                  l > 0 && (g = "right")),
                              {
                                bottom: m.top + m.height,
                                height: m.height,
                                left: m[g],
                                right: m[g],
                                top: m.top,
                                width: 0,
                              }
                            );
                          },
                        },
                        {
                          key: "getNativeRange",
                          value: function () {
                            var t = document.getSelection();
                            if (null == t || t.rangeCount <= 0) return null;
                            var e = t.getRangeAt(0);
                            if (null == e) return null;
                            var n = this.normalizeNative(e);
                            return h.info("getNativeRange", n), n;
                          },
                        },
                        {
                          key: "getRange",
                          value: function () {
                            var t = this.getNativeRange();
                            return null == t
                              ? [null, null]
                              : [this.normalizedToRange(t), t];
                          },
                        },
                        {
                          key: "hasFocus",
                          value: function () {
                            return document.activeElement === this.root;
                          },
                        },
                        {
                          key: "normalizedToRange",
                          value: function (t) {
                            var e = this,
                              n = [[t.start.node, t.start.offset]];
                            t.native.collapsed ||
                              n.push([t.end.node, t.end.offset]);
                            var o = n.map(function (t) {
                                var n = r(t, 2),
                                  o = n[0],
                                  a = n[1],
                                  s = i.default.find(o, !0),
                                  l = s.offset(e.scroll);
                                return 0 === a
                                  ? l
                                  : s instanceof i.default.Container
                                  ? l + s.length()
                                  : l + s.index(o, a);
                              }),
                              a = Math.min(
                                Math.max.apply(Math, c(o)),
                                this.scroll.length() - 1
                              ),
                              s = Math.min.apply(Math, [a].concat(c(o)));
                            return new p(s, a - s);
                          },
                        },
                        {
                          key: "normalizeNative",
                          value: function (t) {
                            if (
                              !y(this.root, t.startContainer) ||
                              (!t.collapsed && !y(this.root, t.endContainer))
                            )
                              return null;
                            var e = {
                              start: {
                                node: t.startContainer,
                                offset: t.startOffset,
                              },
                              end: {
                                node: t.endContainer,
                                offset: t.endOffset,
                              },
                              native: t,
                            };
                            return (
                              [e.start, e.end].forEach(function (t) {
                                for (
                                  var e = t.node, n = t.offset;
                                  !(e instanceof Text) &&
                                  e.childNodes.length > 0;

                                )
                                  if (e.childNodes.length > n)
                                    (e = e.childNodes[n]), (n = 0);
                                  else {
                                    if (e.childNodes.length !== n) break;
                                    n =
                                      (e = e.lastChild) instanceof Text
                                        ? e.data.length
                                        : e.childNodes.length + 1;
                                  }
                                (t.node = e), (t.offset = n);
                              }),
                              e
                            );
                          },
                        },
                        {
                          key: "rangeToNative",
                          value: function (t) {
                            var e = this,
                              n = t.collapsed
                                ? [t.index]
                                : [t.index, t.index + t.length],
                              o = [],
                              i = this.scroll.length();
                            return (
                              n.forEach(function (t, n) {
                                t = Math.min(i - 1, t);
                                var a,
                                  s = e.scroll.leaf(t),
                                  l = r(s, 2),
                                  u = l[0],
                                  c = l[1],
                                  f = u.position(c, 0 !== n),
                                  h = r(f, 2);
                                (a = h[0]), (c = h[1]), o.push(a, c);
                              }),
                              o.length < 2 && (o = o.concat(o)),
                              o
                            );
                          },
                        },
                        {
                          key: "scrollIntoView",
                          value: function (t) {
                            var e = this.lastRange;
                            if (null != e) {
                              var n = this.getBounds(e.index, e.length);
                              if (null != n) {
                                var o = this.scroll.length() - 1,
                                  i = this.scroll.line(Math.min(e.index, o)),
                                  a = r(i, 1)[0],
                                  s = a;
                                if (e.length > 0) {
                                  var l = this.scroll.line(
                                    Math.min(e.index + e.length, o)
                                  );
                                  s = r(l, 1)[0];
                                }
                                if (null != a && null != s) {
                                  var u = t.getBoundingClientRect();
                                  n.top < u.top
                                    ? (t.scrollTop -= u.top - n.top)
                                    : n.bottom > u.bottom &&
                                      (t.scrollTop += n.bottom - u.bottom);
                                }
                              }
                            }
                          },
                        },
                        {
                          key: "setNativeRange",
                          value: function (t, e) {
                            var n =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : t,
                              r =
                                arguments.length > 3 && void 0 !== arguments[3]
                                  ? arguments[3]
                                  : e,
                              o =
                                arguments.length > 4 &&
                                void 0 !== arguments[4] &&
                                arguments[4];
                            if (
                              (h.info("setNativeRange", t, e, n, r),
                              null == t ||
                                (null != this.root.parentNode &&
                                  null != t.parentNode &&
                                  null != n.parentNode))
                            ) {
                              var i = document.getSelection();
                              if (null != i)
                                if (null != t) {
                                  this.hasFocus() || this.root.focus();
                                  var a = (this.getNativeRange() || {}).native;
                                  if (
                                    null == a ||
                                    o ||
                                    t !== a.startContainer ||
                                    e !== a.startOffset ||
                                    n !== a.endContainer ||
                                    r !== a.endOffset
                                  ) {
                                    "BR" == t.tagName &&
                                      ((e = [].indexOf.call(
                                        t.parentNode.childNodes,
                                        t
                                      )),
                                      (t = t.parentNode)),
                                      "BR" == n.tagName &&
                                        ((r = [].indexOf.call(
                                          n.parentNode.childNodes,
                                          n
                                        )),
                                        (n = n.parentNode));
                                    var s = document.createRange();
                                    s.setStart(t, e),
                                      s.setEnd(n, r),
                                      i.removeAllRanges(),
                                      i.addRange(s);
                                  }
                                } else
                                  i.removeAllRanges(),
                                    this.root.blur(),
                                    document.body.focus();
                            }
                          },
                        },
                        {
                          key: "setRange",
                          value: function (t) {
                            var e =
                                arguments.length > 1 &&
                                void 0 !== arguments[1] &&
                                arguments[1],
                              n =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : l.default.sources.API;
                            if (
                              ("string" == typeof e && ((n = e), (e = !1)),
                              h.info("setRange", t),
                              null != t)
                            ) {
                              var r = this.rangeToNative(t);
                              this.setNativeRange.apply(this, c(r).concat([e]));
                            } else this.setNativeRange(null);
                            this.update(n);
                          },
                        },
                        {
                          key: "update",
                          value: function () {
                            var t =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : l.default.sources.USER,
                              e = this.lastRange,
                              n = this.getRange(),
                              o = r(n, 2),
                              i = o[0],
                              u = o[1];
                            if (
                              ((this.lastRange = i),
                              null != this.lastRange &&
                                (this.savedRange = this.lastRange),
                              !(0, s.default)(e, this.lastRange))
                            ) {
                              var c;
                              !this.composing &&
                                null != u &&
                                u.native.collapsed &&
                                u.start.node !== this.cursor.textNode &&
                                this.cursor.restore();
                              var f,
                                h = [
                                  l.default.events.SELECTION_CHANGE,
                                  (0, a.default)(this.lastRange),
                                  (0, a.default)(e),
                                  t,
                                ];
                              (c = this.emitter).emit.apply(
                                c,
                                [l.default.events.EDITOR_CHANGE].concat(h)
                              ),
                                t !== l.default.sources.SILENT &&
                                  (f = this.emitter).emit.apply(f, h);
                            }
                          },
                        },
                      ]),
                      t
                    );
                  })();
                function y(t, e) {
                  try {
                    e.parentNode;
                  } catch (t) {
                    return !1;
                  }
                  return e instanceof Text && (e = e.parentNode), t.contains(e);
                }
                (e.Range = p), (e.default = d);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r,
                  o = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = n(0);
                function a(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function s(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                }
                var l = (function (t) {
                  function e() {
                    return (
                      a(this, e),
                      s(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function (t, e) {
                      if ("function" != typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, t),
                    o(
                      e,
                      [
                        {
                          key: "insertInto",
                          value: function (t, n) {
                            0 === t.children.length
                              ? (function t(e, n, r) {
                                  null === e && (e = Function.prototype);
                                  var o = Object.getOwnPropertyDescriptor(e, n);
                                  if (void 0 === o) {
                                    var i = Object.getPrototypeOf(e);
                                    return null === i ? void 0 : t(i, n, r);
                                  }
                                  if ("value" in o) return o.value;
                                  var a = o.get;
                                  return void 0 !== a ? a.call(r) : void 0;
                                })(
                                  e.prototype.__proto__ ||
                                    Object.getPrototypeOf(e.prototype),
                                  "insertInto",
                                  this
                                ).call(this, t, n)
                              : this.remove();
                          },
                        },
                        {
                          key: "length",
                          value: function () {
                            return 0;
                          },
                        },
                        {
                          key: "value",
                          value: function () {
                            return "";
                          },
                        },
                      ],
                      [{ key: "value", value: function () {} }]
                    ),
                    e
                  );
                })(
                  ((r = i) && r.__esModule ? r : { default: r }).default.Embed
                );
                (l.blotName = "break"), (l.tagName = "BR"), (e.default = l);
              },
              function (t, e, n) {
                "use strict";
                var r,
                  o =
                    (this && this.__extends) ||
                    ((r =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      }),
                    function (t, e) {
                      function n() {
                        this.constructor = t;
                      }
                      r(t, e),
                        (t.prototype =
                          null === e
                            ? Object.create(e)
                            : ((n.prototype = e.prototype), new n()));
                    });
                Object.defineProperty(e, "__esModule", { value: !0 });
                var i = n(44),
                  a = n(30),
                  s = n(1),
                  l = (function (t) {
                    function e(e) {
                      var n = t.call(this, e) || this;
                      return n.build(), n;
                    }
                    return (
                      o(e, t),
                      (e.prototype.appendChild = function (t) {
                        this.insertBefore(t);
                      }),
                      (e.prototype.attach = function () {
                        t.prototype.attach.call(this),
                          this.children.forEach(function (t) {
                            t.attach();
                          });
                      }),
                      (e.prototype.build = function () {
                        var t = this;
                        (this.children = new i.default()),
                          [].slice
                            .call(this.domNode.childNodes)
                            .reverse()
                            .forEach(function (e) {
                              try {
                                var n = u(e);
                                t.insertBefore(n, t.children.head || void 0);
                              } catch (t) {
                                if (t instanceof s.ParchmentError) return;
                                throw t;
                              }
                            });
                      }),
                      (e.prototype.deleteAt = function (t, e) {
                        if (0 === t && e === this.length())
                          return this.remove();
                        this.children.forEachAt(t, e, function (t, e, n) {
                          t.deleteAt(e, n);
                        });
                      }),
                      (e.prototype.descendant = function (t, n) {
                        var r = this.children.find(n),
                          o = r[0],
                          i = r[1];
                        return (null == t.blotName && t(o)) ||
                          (null != t.blotName && o instanceof t)
                          ? [o, i]
                          : o instanceof e
                          ? o.descendant(t, i)
                          : [null, -1];
                      }),
                      (e.prototype.descendants = function (t, n, r) {
                        void 0 === n && (n = 0),
                          void 0 === r && (r = Number.MAX_VALUE);
                        var o = [],
                          i = r;
                        return (
                          this.children.forEachAt(n, r, function (n, r, a) {
                            ((null == t.blotName && t(n)) ||
                              (null != t.blotName && n instanceof t)) &&
                              o.push(n),
                              n instanceof e &&
                                (o = o.concat(n.descendants(t, r, i))),
                              (i -= a);
                          }),
                          o
                        );
                      }),
                      (e.prototype.detach = function () {
                        this.children.forEach(function (t) {
                          t.detach();
                        }),
                          t.prototype.detach.call(this);
                      }),
                      (e.prototype.formatAt = function (t, e, n, r) {
                        this.children.forEachAt(t, e, function (t, e, o) {
                          t.formatAt(e, o, n, r);
                        });
                      }),
                      (e.prototype.insertAt = function (t, e, n) {
                        var r = this.children.find(t),
                          o = r[0],
                          i = r[1];
                        if (o) o.insertAt(i, e, n);
                        else {
                          var a =
                            null == n ? s.create("text", e) : s.create(e, n);
                          this.appendChild(a);
                        }
                      }),
                      (e.prototype.insertBefore = function (t, e) {
                        if (
                          null != this.statics.allowedChildren &&
                          !this.statics.allowedChildren.some(function (e) {
                            return t instanceof e;
                          })
                        )
                          throw new s.ParchmentError(
                            "Cannot insert " +
                              t.statics.blotName +
                              " into " +
                              this.statics.blotName
                          );
                        t.insertInto(this, e);
                      }),
                      (e.prototype.length = function () {
                        return this.children.reduce(function (t, e) {
                          return t + e.length();
                        }, 0);
                      }),
                      (e.prototype.moveChildren = function (t, e) {
                        this.children.forEach(function (n) {
                          t.insertBefore(n, e);
                        });
                      }),
                      (e.prototype.optimize = function (e) {
                        if (
                          (t.prototype.optimize.call(this, e),
                          0 === this.children.length)
                        )
                          if (null != this.statics.defaultChild) {
                            var n = s.create(this.statics.defaultChild);
                            this.appendChild(n), n.optimize(e);
                          } else this.remove();
                      }),
                      (e.prototype.path = function (t, n) {
                        void 0 === n && (n = !1);
                        var r = this.children.find(t, n),
                          o = r[0],
                          i = r[1],
                          a = [[this, t]];
                        return o instanceof e
                          ? a.concat(o.path(i, n))
                          : (null != o && a.push([o, i]), a);
                      }),
                      (e.prototype.removeChild = function (t) {
                        this.children.remove(t);
                      }),
                      (e.prototype.replace = function (n) {
                        n instanceof e && n.moveChildren(this),
                          t.prototype.replace.call(this, n);
                      }),
                      (e.prototype.split = function (t, e) {
                        if ((void 0 === e && (e = !1), !e)) {
                          if (0 === t) return this;
                          if (t === this.length()) return this.next;
                        }
                        var n = this.clone();
                        return (
                          this.parent.insertBefore(n, this.next),
                          this.children.forEachAt(
                            t,
                            this.length(),
                            function (t, r, o) {
                              (t = t.split(r, e)), n.appendChild(t);
                            }
                          ),
                          n
                        );
                      }),
                      (e.prototype.unwrap = function () {
                        this.moveChildren(this.parent, this.next),
                          this.remove();
                      }),
                      (e.prototype.update = function (t, e) {
                        var n = this,
                          r = [],
                          o = [];
                        t.forEach(function (t) {
                          t.target === n.domNode &&
                            "childList" === t.type &&
                            (r.push.apply(r, t.addedNodes),
                            o.push.apply(o, t.removedNodes));
                        }),
                          o.forEach(function (t) {
                            if (
                              !(
                                null != t.parentNode &&
                                "IFRAME" !== t.tagName &&
                                document.body.compareDocumentPosition(t) &
                                  Node.DOCUMENT_POSITION_CONTAINED_BY
                              )
                            ) {
                              var e = s.find(t);
                              null != e &&
                                ((null != e.domNode.parentNode &&
                                  e.domNode.parentNode !== n.domNode) ||
                                  e.detach());
                            }
                          }),
                          r
                            .filter(function (t) {
                              return t.parentNode == n.domNode;
                            })
                            .sort(function (t, e) {
                              return t === e
                                ? 0
                                : t.compareDocumentPosition(e) &
                                  Node.DOCUMENT_POSITION_FOLLOWING
                                ? 1
                                : -1;
                            })
                            .forEach(function (t) {
                              var e = null;
                              null != t.nextSibling &&
                                (e = s.find(t.nextSibling));
                              var r = u(t);
                              (r.next == e && null != r.next) ||
                                (null != r.parent && r.parent.removeChild(n),
                                n.insertBefore(r, e || void 0));
                            });
                      }),
                      e
                    );
                  })(a.default);
                function u(t) {
                  var e = s.find(t);
                  if (null == e)
                    try {
                      e = s.create(t);
                    } catch (n) {
                      (e = s.create(s.Scope.INLINE)),
                        [].slice.call(t.childNodes).forEach(function (t) {
                          e.domNode.appendChild(t);
                        }),
                        t.parentNode && t.parentNode.replaceChild(e.domNode, t),
                        e.attach();
                    }
                  return e;
                }
                e.default = l;
              },
              function (t, e, n) {
                "use strict";
                var r,
                  o =
                    (this && this.__extends) ||
                    ((r =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      }),
                    function (t, e) {
                      function n() {
                        this.constructor = t;
                      }
                      r(t, e),
                        (t.prototype =
                          null === e
                            ? Object.create(e)
                            : ((n.prototype = e.prototype), new n()));
                    });
                Object.defineProperty(e, "__esModule", { value: !0 });
                var i = n(12),
                  a = n(31),
                  s = n(17),
                  l = n(1),
                  u = (function (t) {
                    function e(e) {
                      var n = t.call(this, e) || this;
                      return (n.attributes = new a.default(n.domNode)), n;
                    }
                    return (
                      o(e, t),
                      (e.formats = function (t) {
                        return (
                          "string" == typeof this.tagName ||
                          (Array.isArray(this.tagName)
                            ? t.tagName.toLowerCase()
                            : void 0)
                        );
                      }),
                      (e.prototype.format = function (t, e) {
                        var n = l.query(t);
                        n instanceof i.default
                          ? this.attributes.attribute(n, e)
                          : e &&
                            (null == n ||
                              (t === this.statics.blotName &&
                                this.formats()[t] === e) ||
                              this.replaceWith(t, e));
                      }),
                      (e.prototype.formats = function () {
                        var t = this.attributes.values(),
                          e = this.statics.formats(this.domNode);
                        return null != e && (t[this.statics.blotName] = e), t;
                      }),
                      (e.prototype.replaceWith = function (e, n) {
                        var r = t.prototype.replaceWith.call(this, e, n);
                        return this.attributes.copy(r), r;
                      }),
                      (e.prototype.update = function (e, n) {
                        var r = this;
                        t.prototype.update.call(this, e, n),
                          e.some(function (t) {
                            return (
                              t.target === r.domNode && "attributes" === t.type
                            );
                          }) && this.attributes.build();
                      }),
                      (e.prototype.wrap = function (n, r) {
                        var o = t.prototype.wrap.call(this, n, r);
                        return (
                          o instanceof e &&
                            o.statics.scope === this.statics.scope &&
                            this.attributes.move(o),
                          o
                        );
                      }),
                      e
                    );
                  })(s.default);
                e.default = u;
              },
              function (t, e, n) {
                "use strict";
                var r,
                  o =
                    (this && this.__extends) ||
                    ((r =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      }),
                    function (t, e) {
                      function n() {
                        this.constructor = t;
                      }
                      r(t, e),
                        (t.prototype =
                          null === e
                            ? Object.create(e)
                            : ((n.prototype = e.prototype), new n()));
                    });
                Object.defineProperty(e, "__esModule", { value: !0 });
                var i = n(30),
                  a = n(1),
                  s = (function (t) {
                    function e() {
                      return (null !== t && t.apply(this, arguments)) || this;
                    }
                    return (
                      o(e, t),
                      (e.value = function (t) {
                        return !0;
                      }),
                      (e.prototype.index = function (t, e) {
                        return this.domNode === t ||
                          this.domNode.compareDocumentPosition(t) &
                            Node.DOCUMENT_POSITION_CONTAINED_BY
                          ? Math.min(e, 1)
                          : -1;
                      }),
                      (e.prototype.position = function (t, e) {
                        var n = [].indexOf.call(
                          this.parent.domNode.childNodes,
                          this.domNode
                        );
                        return t > 0 && (n += 1), [this.parent.domNode, n];
                      }),
                      (e.prototype.value = function () {
                        var t;
                        return (
                          ((t = {})[this.statics.blotName] =
                            this.statics.value(this.domNode) || !0),
                          t
                        );
                      }),
                      (e.scope = a.Scope.INLINE_BLOT),
                      e
                    );
                  })(i.default);
                e.default = s;
              },
              function (t, e, n) {
                var r = n(11),
                  o = n(3),
                  i = {
                    attributes: {
                      compose: function (t, e, n) {
                        "object" != typeof t && (t = {}),
                          "object" != typeof e && (e = {});
                        var r = o(!0, {}, e);
                        for (var i in (n ||
                          (r = Object.keys(r).reduce(function (t, e) {
                            return null != r[e] && (t[e] = r[e]), t;
                          }, {})),
                        t))
                          void 0 !== t[i] && void 0 === e[i] && (r[i] = t[i]);
                        return Object.keys(r).length > 0 ? r : void 0;
                      },
                      diff: function (t, e) {
                        "object" != typeof t && (t = {}),
                          "object" != typeof e && (e = {});
                        var n = Object.keys(t)
                          .concat(Object.keys(e))
                          .reduce(function (n, o) {
                            return (
                              r(t[o], e[o]) ||
                                (n[o] = void 0 === e[o] ? null : e[o]),
                              n
                            );
                          }, {});
                        return Object.keys(n).length > 0 ? n : void 0;
                      },
                      transform: function (t, e, n) {
                        if ("object" != typeof t) return e;
                        if ("object" == typeof e) {
                          if (!n) return e;
                          var r = Object.keys(e).reduce(function (n, r) {
                            return void 0 === t[r] && (n[r] = e[r]), n;
                          }, {});
                          return Object.keys(r).length > 0 ? r : void 0;
                        }
                      },
                    },
                    iterator: function (t) {
                      return new a(t);
                    },
                    length: function (t) {
                      return "number" == typeof t.delete
                        ? t.delete
                        : "number" == typeof t.retain
                        ? t.retain
                        : "string" == typeof t.insert
                        ? t.insert.length
                        : 1;
                    },
                  };
                function a(t) {
                  (this.ops = t), (this.index = 0), (this.offset = 0);
                }
                (a.prototype.hasNext = function () {
                  return this.peekLength() < 1 / 0;
                }),
                  (a.prototype.next = function (t) {
                    t || (t = 1 / 0);
                    var e = this.ops[this.index];
                    if (e) {
                      var n = this.offset,
                        r = i.length(e);
                      if (
                        (t >= r - n
                          ? ((t = r - n), (this.index += 1), (this.offset = 0))
                          : (this.offset += t),
                        "number" == typeof e.delete)
                      )
                        return { delete: t };
                      var o = {};
                      return (
                        e.attributes && (o.attributes = e.attributes),
                        "number" == typeof e.retain
                          ? (o.retain = t)
                          : "string" == typeof e.insert
                          ? (o.insert = e.insert.substr(n, t))
                          : (o.insert = e.insert),
                        o
                      );
                    }
                    return { retain: 1 / 0 };
                  }),
                  (a.prototype.peek = function () {
                    return this.ops[this.index];
                  }),
                  (a.prototype.peekLength = function () {
                    return this.ops[this.index]
                      ? i.length(this.ops[this.index]) - this.offset
                      : 1 / 0;
                  }),
                  (a.prototype.peekType = function () {
                    return this.ops[this.index]
                      ? "number" == typeof this.ops[this.index].delete
                        ? "delete"
                        : "number" == typeof this.ops[this.index].retain
                        ? "retain"
                        : "insert"
                      : "retain";
                  }),
                  (a.prototype.rest = function () {
                    if (this.hasNext()) {
                      if (0 === this.offset) return this.ops.slice(this.index);
                      var t = this.offset,
                        e = this.index,
                        n = this.next(),
                        r = this.ops.slice(this.index);
                      return (this.offset = t), (this.index = e), [n].concat(r);
                    }
                    return [];
                  }),
                  (t.exports = i);
              },
              function (t, n) {
                var r = (function () {
                  "use strict";
                  function t(t, e) {
                    return null != e && t instanceof e;
                  }
                  var n, r, o;
                  try {
                    n = Map;
                  } catch (t) {
                    n = function () {};
                  }
                  try {
                    r = Set;
                  } catch (t) {
                    r = function () {};
                  }
                  try {
                    o = Promise;
                  } catch (t) {
                    o = function () {};
                  }
                  function i(a, l, u, c, f) {
                    "object" == typeof l &&
                      ((u = l.depth),
                      (c = l.prototype),
                      (f = l.includeNonEnumerable),
                      (l = l.circular));
                    var h = [],
                      p = [],
                      d = void 0 !== e;
                    return (
                      void 0 === l && (l = !0),
                      void 0 === u && (u = 1 / 0),
                      (function a(u, y) {
                        if (null === u) return null;
                        if (0 === y) return u;
                        var g, m;
                        if ("object" != typeof u) return u;
                        if (t(u, n)) g = new n();
                        else if (t(u, r)) g = new r();
                        else if (t(u, o))
                          g = new o(function (t, e) {
                            u.then(
                              function (e) {
                                t(a(e, y - 1));
                              },
                              function (t) {
                                e(a(t, y - 1));
                              }
                            );
                          });
                        else if (i.__isArray(u)) g = [];
                        else if (i.__isRegExp(u))
                          (g = new RegExp(u.source, s(u))),
                            u.lastIndex && (g.lastIndex = u.lastIndex);
                        else if (i.__isDate(u)) g = new Date(u.getTime());
                        else {
                          if (d && e.isBuffer(u))
                            return (
                              (g = e.allocUnsafe
                                ? e.allocUnsafe(u.length)
                                : new e(u.length)),
                              u.copy(g),
                              g
                            );
                          t(u, Error)
                            ? (g = Object.create(u))
                            : void 0 === c
                            ? ((m = Object.getPrototypeOf(u)),
                              (g = Object.create(m)))
                            : ((g = Object.create(c)), (m = c));
                        }
                        if (l) {
                          var v = h.indexOf(u);
                          if (-1 != v) return p[v];
                          h.push(u), p.push(g);
                        }
                        for (var b in (t(u, n) &&
                          u.forEach(function (t, e) {
                            var n = a(e, y - 1),
                              r = a(t, y - 1);
                            g.set(n, r);
                          }),
                        t(u, r) &&
                          u.forEach(function (t) {
                            var e = a(t, y - 1);
                            g.add(e);
                          }),
                        u)) {
                          var x;
                          m && (x = Object.getOwnPropertyDescriptor(m, b)),
                            (x && null == x.set) || (g[b] = a(u[b], y - 1));
                        }
                        if (Object.getOwnPropertySymbols) {
                          var _ = Object.getOwnPropertySymbols(u);
                          for (b = 0; b < _.length; b++) {
                            var w = _[b];
                            (!(E = Object.getOwnPropertyDescriptor(u, w)) ||
                              E.enumerable ||
                              f) &&
                              ((g[w] = a(u[w], y - 1)),
                              E.enumerable ||
                                Object.defineProperty(g, w, {
                                  enumerable: !1,
                                }));
                          }
                        }
                        if (f) {
                          var A = Object.getOwnPropertyNames(u);
                          for (b = 0; b < A.length; b++) {
                            var E,
                              k = A[b];
                            ((E = Object.getOwnPropertyDescriptor(u, k)) &&
                              E.enumerable) ||
                              ((g[k] = a(u[k], y - 1)),
                              Object.defineProperty(g, k, { enumerable: !1 }));
                          }
                        }
                        return g;
                      })(a, u)
                    );
                  }
                  function a(t) {
                    return Object.prototype.toString.call(t);
                  }
                  function s(t) {
                    var e = "";
                    return (
                      t.global && (e += "g"),
                      t.ignoreCase && (e += "i"),
                      t.multiline && (e += "m"),
                      e
                    );
                  }
                  return (
                    (i.clonePrototype = function (t) {
                      if (null === t) return null;
                      var e = function () {};
                      return (e.prototype = t), new e();
                    }),
                    (i.__objToStr = a),
                    (i.__isDate = function (t) {
                      return "object" == typeof t && "[object Date]" === a(t);
                    }),
                    (i.__isArray = function (t) {
                      return "object" == typeof t && "[object Array]" === a(t);
                    }),
                    (i.__isRegExp = function (t) {
                      return "object" == typeof t && "[object RegExp]" === a(t);
                    }),
                    (i.__getRegExpFlags = s),
                    i
                  );
                })();
                "object" == typeof t && t.exports && (t.exports = r);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = function (t, e) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t))
                      return (function (t, e) {
                        var n = [],
                          r = !0,
                          o = !1,
                          i = void 0;
                        try {
                          for (
                            var a, s = t[Symbol.iterator]();
                            !(r = (a = s.next()).done) &&
                            (n.push(a.value), !e || n.length !== e);
                            r = !0
                          );
                        } catch (t) {
                          (o = !0), (i = t);
                        } finally {
                          try {
                            !r && s.return && s.return();
                          } finally {
                            if (o) throw i;
                          }
                        }
                        return n;
                      })(t, e);
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  },
                  o = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                      var i = Object.getPrototypeOf(e);
                      return null === i ? void 0 : t(i, n, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                  },
                  a = p(n(0)),
                  s = p(n(8)),
                  l = n(4),
                  u = p(l),
                  c = p(n(16)),
                  f = p(n(13)),
                  h = p(n(25));
                function p(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function d(t) {
                  return t instanceof u.default || t instanceof l.BlockEmbed;
                }
                var y = (function (t) {
                  function e(t, n) {
                    !(function (t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e);
                    var r = (function (t, e) {
                      if (!t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return !e ||
                        ("object" != typeof e && "function" != typeof e)
                        ? t
                        : e;
                    })(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)
                    );
                    return (
                      (r.emitter = n.emitter),
                      Array.isArray(n.whitelist) &&
                        (r.whitelist = n.whitelist.reduce(function (t, e) {
                          return (t[e] = !0), t;
                        }, {})),
                      r.domNode.addEventListener(
                        "DOMNodeInserted",
                        function () {}
                      ),
                      r.optimize(),
                      r.enable(),
                      r
                    );
                  }
                  return (
                    (function (t, e) {
                      if ("function" != typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, t),
                    o(e, [
                      {
                        key: "batchStart",
                        value: function () {
                          this.batch = !0;
                        },
                      },
                      {
                        key: "batchEnd",
                        value: function () {
                          (this.batch = !1), this.optimize();
                        },
                      },
                      {
                        key: "deleteAt",
                        value: function (t, n) {
                          var o = this.line(t),
                            a = r(o, 2),
                            s = a[0],
                            u = a[1],
                            h = this.line(t + n),
                            p = r(h, 1)[0];
                          if (
                            (i(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "deleteAt",
                              this
                            ).call(this, t, n),
                            null != p && s !== p && u > 0)
                          ) {
                            if (
                              s instanceof l.BlockEmbed ||
                              p instanceof l.BlockEmbed
                            )
                              return void this.optimize();
                            if (s instanceof f.default) {
                              var d = s.newlineIndex(s.length(), !0);
                              if (d > -1 && (s = s.split(d + 1)) === p)
                                return void this.optimize();
                            } else if (p instanceof f.default) {
                              var y = p.newlineIndex(0);
                              y > -1 && p.split(y + 1);
                            }
                            var g =
                              p.children.head instanceof c.default
                                ? null
                                : p.children.head;
                            s.moveChildren(p, g), s.remove();
                          }
                          this.optimize();
                        },
                      },
                      {
                        key: "enable",
                        value: function () {
                          var t =
                            !(
                              arguments.length > 0 && void 0 !== arguments[0]
                            ) || arguments[0];
                          this.domNode.setAttribute("contenteditable", t);
                        },
                      },
                      {
                        key: "formatAt",
                        value: function (t, n, r, o) {
                          (null == this.whitelist || this.whitelist[r]) &&
                            (i(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "formatAt",
                              this
                            ).call(this, t, n, r, o),
                            this.optimize());
                        },
                      },
                      {
                        key: "insertAt",
                        value: function (t, n, r) {
                          if (
                            null == r ||
                            null == this.whitelist ||
                            this.whitelist[n]
                          ) {
                            if (t >= this.length())
                              if (
                                null == r ||
                                null ==
                                  a.default.query(n, a.default.Scope.BLOCK)
                              ) {
                                var o = a.default.create(
                                  this.statics.defaultChild
                                );
                                this.appendChild(o),
                                  null == r &&
                                    n.endsWith("\n") &&
                                    (n = n.slice(0, -1)),
                                  o.insertAt(0, n, r);
                              } else {
                                var s = a.default.create(n, r);
                                this.appendChild(s);
                              }
                            else
                              i(
                                e.prototype.__proto__ ||
                                  Object.getPrototypeOf(e.prototype),
                                "insertAt",
                                this
                              ).call(this, t, n, r);
                            this.optimize();
                          }
                        },
                      },
                      {
                        key: "insertBefore",
                        value: function (t, n) {
                          if (t.statics.scope === a.default.Scope.INLINE_BLOT) {
                            var r = a.default.create(this.statics.defaultChild);
                            r.appendChild(t), (t = r);
                          }
                          i(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "insertBefore",
                            this
                          ).call(this, t, n);
                        },
                      },
                      {
                        key: "leaf",
                        value: function (t) {
                          return this.path(t).pop() || [null, -1];
                        },
                      },
                      {
                        key: "line",
                        value: function (t) {
                          return t === this.length()
                            ? this.line(t - 1)
                            : this.descendant(d, t);
                        },
                      },
                      {
                        key: "lines",
                        value: function () {
                          var t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : 0,
                            e =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : Number.MAX_VALUE,
                            n = function t(e, n, r) {
                              var o = [],
                                i = r;
                              return (
                                e.children.forEachAt(n, r, function (e, n, r) {
                                  d(e)
                                    ? o.push(e)
                                    : e instanceof a.default.Container &&
                                      (o = o.concat(t(e, n, i))),
                                    (i -= r);
                                }),
                                o
                              );
                            };
                          return n(this, t, e);
                        },
                      },
                      {
                        key: "optimize",
                        value: function () {
                          var t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : [],
                            n =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                          !0 !== this.batch &&
                            (i(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "optimize",
                              this
                            ).call(this, t, n),
                            t.length > 0 &&
                              this.emitter.emit(
                                s.default.events.SCROLL_OPTIMIZE,
                                t,
                                n
                              ));
                        },
                      },
                      {
                        key: "path",
                        value: function (t) {
                          return i(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "path",
                            this
                          )
                            .call(this, t)
                            .slice(1);
                        },
                      },
                      {
                        key: "update",
                        value: function (t) {
                          if (!0 !== this.batch) {
                            var n = s.default.sources.USER;
                            "string" == typeof t && (n = t),
                              Array.isArray(t) ||
                                (t = this.observer.takeRecords()),
                              t.length > 0 &&
                                this.emitter.emit(
                                  s.default.events.SCROLL_BEFORE_UPDATE,
                                  n,
                                  t
                                ),
                              i(
                                e.prototype.__proto__ ||
                                  Object.getPrototypeOf(e.prototype),
                                "update",
                                this
                              ).call(this, t.concat([])),
                              t.length > 0 &&
                                this.emitter.emit(
                                  s.default.events.SCROLL_UPDATE,
                                  n,
                                  t
                                );
                          }
                        },
                      },
                    ]),
                    e
                  );
                })(a.default.Scroll);
                (y.blotName = "scroll"),
                  (y.className = "ql-editor"),
                  (y.tagName = "DIV"),
                  (y.defaultChild = "block"),
                  (y.allowedChildren = [u.default, l.BlockEmbed, h.default]),
                  (e.default = y);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.SHORTKEY = e.default = void 0);
                var r =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (t) {
                          return typeof t;
                        }
                      : function (t) {
                          return t &&
                            "function" == typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                        },
                  o = function (t, e) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t))
                      return (function (t, e) {
                        var n = [],
                          r = !0,
                          o = !1,
                          i = void 0;
                        try {
                          for (
                            var a, s = t[Symbol.iterator]();
                            !(r = (a = s.next()).done) &&
                            (n.push(a.value), !e || n.length !== e);
                            r = !0
                          );
                        } catch (t) {
                          (o = !0), (i = t);
                        } finally {
                          try {
                            !r && s.return && s.return();
                          } finally {
                            if (o) throw i;
                          }
                        }
                        return n;
                      })(t, e);
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  },
                  i = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  a = y(n(21)),
                  s = y(n(11)),
                  l = y(n(3)),
                  u = y(n(2)),
                  c = y(n(20)),
                  f = y(n(0)),
                  h = y(n(5)),
                  p = y(n(10)),
                  d = y(n(9));
                function y(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function g(t, e, n) {
                  return (
                    e in t
                      ? Object.defineProperty(t, e, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (t[e] = n),
                    t
                  );
                }
                var m = (0, p.default)("quill:keyboard"),
                  v = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey",
                  b = (function (t) {
                    function e(t, n) {
                      !(function (t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e);
                      var r = (function (t, e) {
                        if (!t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return !e ||
                          ("object" != typeof e && "function" != typeof e)
                          ? t
                          : e;
                      })(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).call(
                          this,
                          t,
                          n
                        )
                      );
                      return (
                        (r.bindings = {}),
                        Object.keys(r.options.bindings).forEach(function (e) {
                          ("list autofill" !== e ||
                            null == t.scroll.whitelist ||
                            t.scroll.whitelist.list) &&
                            r.options.bindings[e] &&
                            r.addBinding(r.options.bindings[e]);
                        }),
                        r.addBinding({ key: e.keys.ENTER, shiftKey: null }, E),
                        r.addBinding(
                          {
                            key: e.keys.ENTER,
                            metaKey: null,
                            ctrlKey: null,
                            altKey: null,
                          },
                          function () {}
                        ),
                        /Firefox/i.test(navigator.userAgent)
                          ? (r.addBinding(
                              { key: e.keys.BACKSPACE },
                              { collapsed: !0 },
                              _
                            ),
                            r.addBinding(
                              { key: e.keys.DELETE },
                              { collapsed: !0 },
                              w
                            ))
                          : (r.addBinding(
                              { key: e.keys.BACKSPACE },
                              { collapsed: !0, prefix: /^.?$/ },
                              _
                            ),
                            r.addBinding(
                              { key: e.keys.DELETE },
                              { collapsed: !0, suffix: /^.?$/ },
                              w
                            )),
                        r.addBinding(
                          { key: e.keys.BACKSPACE },
                          { collapsed: !1 },
                          A
                        ),
                        r.addBinding(
                          { key: e.keys.DELETE },
                          { collapsed: !1 },
                          A
                        ),
                        r.addBinding(
                          {
                            key: e.keys.BACKSPACE,
                            altKey: null,
                            ctrlKey: null,
                            metaKey: null,
                            shiftKey: null,
                          },
                          { collapsed: !0, offset: 0 },
                          _
                        ),
                        r.listen(),
                        r
                      );
                    }
                    return (
                      (function (t, e) {
                        if ("function" != typeof e && null !== e)
                          throw new TypeError(
                            "Super expression must either be null or a function, not " +
                              typeof e
                          );
                        (t.prototype = Object.create(e && e.prototype, {
                          constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0,
                          },
                        })),
                          e &&
                            (Object.setPrototypeOf
                              ? Object.setPrototypeOf(t, e)
                              : (t.__proto__ = e));
                      })(e, t),
                      i(e, null, [
                        {
                          key: "match",
                          value: function (t, e) {
                            return (
                              (e = C(e)),
                              ![
                                "altKey",
                                "ctrlKey",
                                "metaKey",
                                "shiftKey",
                              ].some(function (n) {
                                return !!e[n] !== t[n] && null !== e[n];
                              }) && e.key === (t.which || t.keyCode)
                            );
                          },
                        },
                      ]),
                      i(e, [
                        {
                          key: "addBinding",
                          value: function (t) {
                            var e =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : {},
                              n =
                                arguments.length > 2 && void 0 !== arguments[2]
                                  ? arguments[2]
                                  : {},
                              r = C(t);
                            if (null == r || null == r.key)
                              return m.warn(
                                "Attempted to add invalid keyboard binding",
                                r
                              );
                            "function" == typeof e && (e = { handler: e }),
                              "function" == typeof n && (n = { handler: n }),
                              (r = (0, l.default)(r, e, n)),
                              (this.bindings[r.key] =
                                this.bindings[r.key] || []),
                              this.bindings[r.key].push(r);
                          },
                        },
                        {
                          key: "listen",
                          value: function () {
                            var t = this;
                            this.quill.root.addEventListener(
                              "keydown",
                              function (n) {
                                if (!n.defaultPrevented) {
                                  var i = n.which || n.keyCode,
                                    a = (t.bindings[i] || []).filter(function (
                                      t
                                    ) {
                                      return e.match(n, t);
                                    });
                                  if (0 !== a.length) {
                                    var l = t.quill.getSelection();
                                    if (null != l && t.quill.hasFocus()) {
                                      var u = t.quill.getLine(l.index),
                                        c = o(u, 2),
                                        h = c[0],
                                        p = c[1],
                                        d = t.quill.getLeaf(l.index),
                                        y = o(d, 2),
                                        g = y[0],
                                        m = y[1],
                                        v =
                                          0 === l.length
                                            ? [g, m]
                                            : t.quill.getLeaf(
                                                l.index + l.length
                                              ),
                                        b = o(v, 2),
                                        x = b[0],
                                        _ = b[1],
                                        w =
                                          g instanceof f.default.Text
                                            ? g.value().slice(0, m)
                                            : "",
                                        A =
                                          x instanceof f.default.Text
                                            ? x.value().slice(_)
                                            : "",
                                        E = {
                                          collapsed: 0 === l.length,
                                          empty:
                                            0 === l.length && h.length() <= 1,
                                          format: t.quill.getFormat(l),
                                          offset: p,
                                          prefix: w,
                                          suffix: A,
                                        };
                                      a.some(function (e) {
                                        if (
                                          null != e.collapsed &&
                                          e.collapsed !== E.collapsed
                                        )
                                          return !1;
                                        if (
                                          null != e.empty &&
                                          e.empty !== E.empty
                                        )
                                          return !1;
                                        if (
                                          null != e.offset &&
                                          e.offset !== E.offset
                                        )
                                          return !1;
                                        if (Array.isArray(e.format)) {
                                          if (
                                            e.format.every(function (t) {
                                              return null == E.format[t];
                                            })
                                          )
                                            return !1;
                                        } else if (
                                          "object" === r(e.format) &&
                                          !Object.keys(e.format).every(
                                            function (t) {
                                              return !0 === e.format[t]
                                                ? null != E.format[t]
                                                : !1 === e.format[t]
                                                ? null == E.format[t]
                                                : (0, s.default)(
                                                    e.format[t],
                                                    E.format[t]
                                                  );
                                            }
                                          )
                                        )
                                          return !1;
                                        return !(
                                          (null != e.prefix &&
                                            !e.prefix.test(E.prefix)) ||
                                          (null != e.suffix &&
                                            !e.suffix.test(E.suffix)) ||
                                          !0 === e.handler.call(t, l, E)
                                        );
                                      }) && n.preventDefault();
                                    }
                                  }
                                }
                              }
                            );
                          },
                        },
                      ]),
                      e
                    );
                  })(d.default);
                function x(t, e) {
                  var n,
                    r = t === b.keys.LEFT ? "prefix" : "suffix";
                  return (
                    g((n = { key: t, shiftKey: e, altKey: null }), r, /^$/),
                    g(n, "handler", function (n) {
                      var r = n.index;
                      t === b.keys.RIGHT && (r += n.length + 1);
                      var i = this.quill.getLeaf(r);
                      return !(
                        o(i, 1)[0] instanceof f.default.Embed &&
                        (t === b.keys.LEFT
                          ? e
                            ? this.quill.setSelection(
                                n.index - 1,
                                n.length + 1,
                                h.default.sources.USER
                              )
                            : this.quill.setSelection(
                                n.index - 1,
                                h.default.sources.USER
                              )
                          : e
                          ? this.quill.setSelection(
                              n.index,
                              n.length + 1,
                              h.default.sources.USER
                            )
                          : this.quill.setSelection(
                              n.index + n.length + 1,
                              h.default.sources.USER
                            ),
                        1)
                      );
                    }),
                    n
                  );
                }
                function _(t, e) {
                  if (!(0 === t.index || this.quill.getLength() <= 1)) {
                    var n = this.quill.getLine(t.index),
                      r = o(n, 1)[0],
                      i = {};
                    if (0 === e.offset) {
                      var a = this.quill.getLine(t.index - 1),
                        s = o(a, 1)[0];
                      if (null != s && s.length() > 1) {
                        var l = r.formats(),
                          u = this.quill.getFormat(t.index - 1, 1);
                        i = c.default.attributes.diff(l, u) || {};
                      }
                    }
                    var f = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix)
                      ? 2
                      : 1;
                    this.quill.deleteText(
                      t.index - f,
                      f,
                      h.default.sources.USER
                    ),
                      Object.keys(i).length > 0 &&
                        this.quill.formatLine(
                          t.index - f,
                          f,
                          i,
                          h.default.sources.USER
                        ),
                      this.quill.focus();
                  }
                }
                function w(t, e) {
                  var n = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix)
                    ? 2
                    : 1;
                  if (!(t.index >= this.quill.getLength() - n)) {
                    var r = {},
                      i = 0,
                      a = this.quill.getLine(t.index),
                      s = o(a, 1)[0];
                    if (e.offset >= s.length() - 1) {
                      var l = this.quill.getLine(t.index + 1),
                        u = o(l, 1)[0];
                      if (u) {
                        var f = s.formats(),
                          p = this.quill.getFormat(t.index, 1);
                        (r = c.default.attributes.diff(f, p) || {}),
                          (i = u.length());
                      }
                    }
                    this.quill.deleteText(t.index, n, h.default.sources.USER),
                      Object.keys(r).length > 0 &&
                        this.quill.formatLine(
                          t.index + i - 1,
                          n,
                          r,
                          h.default.sources.USER
                        );
                  }
                }
                function A(t) {
                  var e = this.quill.getLines(t),
                    n = {};
                  if (e.length > 1) {
                    var r = e[0].formats(),
                      o = e[e.length - 1].formats();
                    n = c.default.attributes.diff(o, r) || {};
                  }
                  this.quill.deleteText(t, h.default.sources.USER),
                    Object.keys(n).length > 0 &&
                      this.quill.formatLine(
                        t.index,
                        1,
                        n,
                        h.default.sources.USER
                      ),
                    this.quill.setSelection(t.index, h.default.sources.SILENT),
                    this.quill.focus();
                }
                function E(t, e) {
                  var n = this;
                  t.length > 0 && this.quill.scroll.deleteAt(t.index, t.length);
                  var r = Object.keys(e.format).reduce(function (t, n) {
                    return (
                      f.default.query(n, f.default.Scope.BLOCK) &&
                        !Array.isArray(e.format[n]) &&
                        (t[n] = e.format[n]),
                      t
                    );
                  }, {});
                  this.quill.insertText(
                    t.index,
                    "\n",
                    r,
                    h.default.sources.USER
                  ),
                    this.quill.setSelection(
                      t.index + 1,
                      h.default.sources.SILENT
                    ),
                    this.quill.focus(),
                    Object.keys(e.format).forEach(function (t) {
                      null == r[t] &&
                        (Array.isArray(e.format[t]) ||
                          ("link" !== t &&
                            n.quill.format(
                              t,
                              e.format[t],
                              h.default.sources.USER
                            )));
                    });
                }
                function k(t) {
                  return {
                    key: b.keys.TAB,
                    shiftKey: !t,
                    format: { "code-block": !0 },
                    handler: function (e) {
                      var n = f.default.query("code-block"),
                        r = e.index,
                        i = e.length,
                        a = this.quill.scroll.descendant(n, r),
                        s = o(a, 2),
                        l = s[0],
                        u = s[1];
                      if (null != l) {
                        var c = this.quill.getIndex(l),
                          p = l.newlineIndex(u, !0) + 1,
                          d = l.newlineIndex(c + u + i),
                          y = l.domNode.textContent.slice(p, d).split("\n");
                        (u = 0),
                          y.forEach(function (e, o) {
                            t
                              ? (l.insertAt(p + u, n.TAB),
                                (u += n.TAB.length),
                                0 === o
                                  ? (r += n.TAB.length)
                                  : (i += n.TAB.length))
                              : e.startsWith(n.TAB) &&
                                (l.deleteAt(p + u, n.TAB.length),
                                (u -= n.TAB.length),
                                0 === o
                                  ? (r -= n.TAB.length)
                                  : (i -= n.TAB.length)),
                              (u += e.length + 1);
                          }),
                          this.quill.update(h.default.sources.USER),
                          this.quill.setSelection(
                            r,
                            i,
                            h.default.sources.SILENT
                          );
                      }
                    },
                  };
                }
                function O(t) {
                  return {
                    key: t[0].toUpperCase(),
                    shortKey: !0,
                    handler: function (e, n) {
                      this.quill.format(
                        t,
                        !n.format[t],
                        h.default.sources.USER
                      );
                    },
                  };
                }
                function C(t) {
                  if ("string" == typeof t || "number" == typeof t)
                    return C({ key: t });
                  if (
                    ("object" === (void 0 === t ? "undefined" : r(t)) &&
                      (t = (0, a.default)(t, !1)),
                    "string" == typeof t.key)
                  )
                    if (null != b.keys[t.key.toUpperCase()])
                      t.key = b.keys[t.key.toUpperCase()];
                    else {
                      if (1 !== t.key.length) return null;
                      t.key = t.key.toUpperCase().charCodeAt(0);
                    }
                  return (
                    t.shortKey && ((t[v] = t.shortKey), delete t.shortKey), t
                  );
                }
                (b.keys = {
                  BACKSPACE: 8,
                  TAB: 9,
                  ENTER: 13,
                  ESCAPE: 27,
                  LEFT: 37,
                  UP: 38,
                  RIGHT: 39,
                  DOWN: 40,
                  DELETE: 46,
                }),
                  (b.DEFAULTS = {
                    bindings: {
                      bold: O("bold"),
                      italic: O("italic"),
                      underline: O("underline"),
                      indent: {
                        key: b.keys.TAB,
                        format: ["blockquote", "indent", "list"],
                        handler: function (t, e) {
                          if (e.collapsed && 0 !== e.offset) return !0;
                          this.quill.format(
                            "indent",
                            "+1",
                            h.default.sources.USER
                          );
                        },
                      },
                      outdent: {
                        key: b.keys.TAB,
                        shiftKey: !0,
                        format: ["blockquote", "indent", "list"],
                        handler: function (t, e) {
                          if (e.collapsed && 0 !== e.offset) return !0;
                          this.quill.format(
                            "indent",
                            "-1",
                            h.default.sources.USER
                          );
                        },
                      },
                      "outdent backspace": {
                        key: b.keys.BACKSPACE,
                        collapsed: !0,
                        shiftKey: null,
                        metaKey: null,
                        ctrlKey: null,
                        altKey: null,
                        format: ["indent", "list"],
                        offset: 0,
                        handler: function (t, e) {
                          null != e.format.indent
                            ? this.quill.format(
                                "indent",
                                "-1",
                                h.default.sources.USER
                              )
                            : null != e.format.list &&
                              this.quill.format(
                                "list",
                                !1,
                                h.default.sources.USER
                              );
                        },
                      },
                      "indent code-block": k(!0),
                      "outdent code-block": k(!1),
                      "remove tab": {
                        key: b.keys.TAB,
                        shiftKey: !0,
                        collapsed: !0,
                        prefix: /\t$/,
                        handler: function (t) {
                          this.quill.deleteText(
                            t.index - 1,
                            1,
                            h.default.sources.USER
                          );
                        },
                      },
                      tab: {
                        key: b.keys.TAB,
                        handler: function (t) {
                          this.quill.history.cutoff();
                          var e = new u.default()
                            .retain(t.index)
                            .delete(t.length)
                            .insert("\t");
                          this.quill.updateContents(e, h.default.sources.USER),
                            this.quill.history.cutoff(),
                            this.quill.setSelection(
                              t.index + 1,
                              h.default.sources.SILENT
                            );
                        },
                      },
                      "list empty enter": {
                        key: b.keys.ENTER,
                        collapsed: !0,
                        format: ["list"],
                        empty: !0,
                        handler: function (t, e) {
                          this.quill.format("list", !1, h.default.sources.USER),
                            e.format.indent &&
                              this.quill.format(
                                "indent",
                                !1,
                                h.default.sources.USER
                              );
                        },
                      },
                      "checklist enter": {
                        key: b.keys.ENTER,
                        collapsed: !0,
                        format: { list: "checked" },
                        handler: function (t) {
                          var e = this.quill.getLine(t.index),
                            n = o(e, 2),
                            r = n[0],
                            i = n[1],
                            a = (0, l.default)({}, r.formats(), {
                              list: "checked",
                            }),
                            s = new u.default()
                              .retain(t.index)
                              .insert("\n", a)
                              .retain(r.length() - i - 1)
                              .retain(1, { list: "unchecked" });
                          this.quill.updateContents(s, h.default.sources.USER),
                            this.quill.setSelection(
                              t.index + 1,
                              h.default.sources.SILENT
                            ),
                            this.quill.scrollIntoView();
                        },
                      },
                      "header enter": {
                        key: b.keys.ENTER,
                        collapsed: !0,
                        format: ["header"],
                        suffix: /^$/,
                        handler: function (t, e) {
                          var n = this.quill.getLine(t.index),
                            r = o(n, 2),
                            i = r[0],
                            a = r[1],
                            s = new u.default()
                              .retain(t.index)
                              .insert("\n", e.format)
                              .retain(i.length() - a - 1)
                              .retain(1, { header: null });
                          this.quill.updateContents(s, h.default.sources.USER),
                            this.quill.setSelection(
                              t.index + 1,
                              h.default.sources.SILENT
                            ),
                            this.quill.scrollIntoView();
                        },
                      },
                      "list autofill": {
                        key: " ",
                        collapsed: !0,
                        format: { list: !1 },
                        prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
                        handler: function (t, e) {
                          var n = e.prefix.length,
                            r = this.quill.getLine(t.index),
                            i = o(r, 2),
                            a = i[0],
                            s = i[1];
                          if (s > n) return !0;
                          var l = void 0;
                          switch (e.prefix.trim()) {
                            case "[]":
                            case "[ ]":
                              l = "unchecked";
                              break;
                            case "[x]":
                              l = "checked";
                              break;
                            case "-":
                            case "*":
                              l = "bullet";
                              break;
                            default:
                              l = "ordered";
                          }
                          this.quill.insertText(
                            t.index,
                            " ",
                            h.default.sources.USER
                          ),
                            this.quill.history.cutoff();
                          var c = new u.default()
                            .retain(t.index - s)
                            .delete(n + 1)
                            .retain(a.length() - 2 - s)
                            .retain(1, { list: l });
                          this.quill.updateContents(c, h.default.sources.USER),
                            this.quill.history.cutoff(),
                            this.quill.setSelection(
                              t.index - n,
                              h.default.sources.SILENT
                            );
                        },
                      },
                      "code exit": {
                        key: b.keys.ENTER,
                        collapsed: !0,
                        format: ["code-block"],
                        prefix: /\n\n$/,
                        suffix: /^\s+$/,
                        handler: function (t) {
                          var e = this.quill.getLine(t.index),
                            n = o(e, 2),
                            r = n[0],
                            i = n[1],
                            a = new u.default()
                              .retain(t.index + r.length() - i - 2)
                              .retain(1, { "code-block": null })
                              .delete(1);
                          this.quill.updateContents(a, h.default.sources.USER);
                        },
                      },
                      "embed left": x(b.keys.LEFT, !1),
                      "embed left shift": x(b.keys.LEFT, !0),
                      "embed right": x(b.keys.RIGHT, !1),
                      "embed right shift": x(b.keys.RIGHT, !0),
                    },
                  }),
                  (e.default = b),
                  (e.SHORTKEY = v);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = function (t, e) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t))
                      return (function (t, e) {
                        var n = [],
                          r = !0,
                          o = !1,
                          i = void 0;
                        try {
                          for (
                            var a, s = t[Symbol.iterator]();
                            !(r = (a = s.next()).done) &&
                            (n.push(a.value), !e || n.length !== e);
                            r = !0
                          );
                        } catch (t) {
                          (o = !0), (i = t);
                        } finally {
                          try {
                            !r && s.return && s.return();
                          } finally {
                            if (o) throw i;
                          }
                        }
                        return n;
                      })(t, e);
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  },
                  o = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                      var i = Object.getPrototypeOf(e);
                      return null === i ? void 0 : t(i, n, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                  },
                  i = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  a = l(n(0)),
                  s = l(n(7));
                function l(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                var u = (function (t) {
                  function e(t, n) {
                    !(function (t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e);
                    var r = (function (t, e) {
                      if (!t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return !e ||
                        ("object" != typeof e && "function" != typeof e)
                        ? t
                        : e;
                    })(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)
                    );
                    return (
                      (r.selection = n),
                      (r.textNode = document.createTextNode(e.CONTENTS)),
                      r.domNode.appendChild(r.textNode),
                      (r._length = 0),
                      r
                    );
                  }
                  return (
                    (function (t, e) {
                      if ("function" != typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, t),
                    i(e, null, [{ key: "value", value: function () {} }]),
                    i(e, [
                      {
                        key: "detach",
                        value: function () {
                          null != this.parent && this.parent.removeChild(this);
                        },
                      },
                      {
                        key: "format",
                        value: function (t, n) {
                          if (0 !== this._length)
                            return o(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "format",
                              this
                            ).call(this, t, n);
                          for (
                            var r = this, i = 0;
                            null != r &&
                            r.statics.scope !== a.default.Scope.BLOCK_BLOT;

                          )
                            (i += r.offset(r.parent)), (r = r.parent);
                          null != r &&
                            ((this._length = e.CONTENTS.length),
                            r.optimize(),
                            r.formatAt(i, e.CONTENTS.length, t, n),
                            (this._length = 0));
                        },
                      },
                      {
                        key: "index",
                        value: function (t, n) {
                          return t === this.textNode
                            ? 0
                            : o(
                                e.prototype.__proto__ ||
                                  Object.getPrototypeOf(e.prototype),
                                "index",
                                this
                              ).call(this, t, n);
                        },
                      },
                      {
                        key: "length",
                        value: function () {
                          return this._length;
                        },
                      },
                      {
                        key: "position",
                        value: function () {
                          return [this.textNode, this.textNode.data.length];
                        },
                      },
                      {
                        key: "remove",
                        value: function () {
                          o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "remove",
                            this
                          ).call(this),
                            (this.parent = null);
                        },
                      },
                      {
                        key: "restore",
                        value: function () {
                          if (
                            !this.selection.composing &&
                            null != this.parent
                          ) {
                            var t = this.textNode,
                              n = this.selection.getNativeRange(),
                              o = void 0,
                              i = void 0,
                              l = void 0;
                            if (
                              null != n &&
                              n.start.node === t &&
                              n.end.node === t
                            ) {
                              var u = [t, n.start.offset, n.end.offset];
                              (o = u[0]), (i = u[1]), (l = u[2]);
                            }
                            for (
                              ;
                              null != this.domNode.lastChild &&
                              this.domNode.lastChild !== this.textNode;

                            )
                              this.domNode.parentNode.insertBefore(
                                this.domNode.lastChild,
                                this.domNode
                              );
                            if (this.textNode.data !== e.CONTENTS) {
                              var c = this.textNode.data
                                .split(e.CONTENTS)
                                .join("");
                              this.next instanceof s.default
                                ? ((o = this.next.domNode),
                                  this.next.insertAt(0, c),
                                  (this.textNode.data = e.CONTENTS))
                                : ((this.textNode.data = c),
                                  this.parent.insertBefore(
                                    a.default.create(this.textNode),
                                    this
                                  ),
                                  (this.textNode = document.createTextNode(
                                    e.CONTENTS
                                  )),
                                  this.domNode.appendChild(this.textNode));
                            }
                            if ((this.remove(), null != i)) {
                              var f = [i, l].map(function (t) {
                                  return Math.max(
                                    0,
                                    Math.min(o.data.length, t - 1)
                                  );
                                }),
                                h = r(f, 2);
                              return (
                                (i = h[0]),
                                (l = h[1]),
                                {
                                  startNode: o,
                                  startOffset: i,
                                  endNode: o,
                                  endOffset: l,
                                }
                              );
                            }
                          }
                        },
                      },
                      {
                        key: "update",
                        value: function (t, e) {
                          var n = this;
                          if (
                            t.some(function (t) {
                              return (
                                "characterData" === t.type &&
                                t.target === n.textNode
                              );
                            })
                          ) {
                            var r = this.restore();
                            r && (e.range = r);
                          }
                        },
                      },
                      {
                        key: "value",
                        value: function () {
                          return "";
                        },
                      },
                    ]),
                    e
                  );
                })(a.default.Embed);
                (u.blotName = "cursor"),
                  (u.className = "ql-cursor"),
                  (u.tagName = "span"),
                  (u.CONTENTS = "\ufeff"),
                  (e.default = u);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = a(n(0)),
                  o = n(4),
                  i = a(o);
                function a(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function s(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function l(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                }
                var u = (function (t) {
                  function e() {
                    return (
                      s(this, e),
                      l(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function (t, e) {
                      if ("function" != typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, t),
                    e
                  );
                })(r.default.Container);
                (u.allowedChildren = [i.default, o.BlockEmbed, u]),
                  (e.default = u);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.ColorStyle = e.ColorClass = e.ColorAttributor = void 0);
                var r,
                  o = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = n(0),
                  a = (r = i) && r.__esModule ? r : { default: r };
                function s(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function l(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                }
                var u = (function (t) {
                    function e() {
                      return (
                        s(this, e),
                        l(
                          this,
                          (e.__proto__ || Object.getPrototypeOf(e)).apply(
                            this,
                            arguments
                          )
                        )
                      );
                    }
                    return (
                      (function (t, e) {
                        if ("function" != typeof e && null !== e)
                          throw new TypeError(
                            "Super expression must either be null or a function, not " +
                              typeof e
                          );
                        (t.prototype = Object.create(e && e.prototype, {
                          constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0,
                          },
                        })),
                          e &&
                            (Object.setPrototypeOf
                              ? Object.setPrototypeOf(t, e)
                              : (t.__proto__ = e));
                      })(e, t),
                      o(e, [
                        {
                          key: "value",
                          value: function (t) {
                            var n = (function t(e, n, r) {
                              null === e && (e = Function.prototype);
                              var o = Object.getOwnPropertyDescriptor(e, n);
                              if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, n, r);
                              }
                              if ("value" in o) return o.value;
                              var a = o.get;
                              return void 0 !== a ? a.call(r) : void 0;
                            })(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "value",
                              this
                            ).call(this, t);
                            return n.startsWith("rgb(")
                              ? ((n = n
                                  .replace(/^[^\d]+/, "")
                                  .replace(/[^\d]+$/, "")),
                                "#" +
                                  n
                                    .split(",")
                                    .map(function (t) {
                                      return (
                                        "00" + parseInt(t).toString(16)
                                      ).slice(-2);
                                    })
                                    .join(""))
                              : n;
                          },
                        },
                      ]),
                      e
                    );
                  })(a.default.Attributor.Style),
                  c = new a.default.Attributor.Class("color", "ql-color", {
                    scope: a.default.Scope.INLINE,
                  }),
                  f = new u("color", "color", {
                    scope: a.default.Scope.INLINE,
                  });
                (e.ColorAttributor = u), (e.ColorClass = c), (e.ColorStyle = f);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.sanitize = e.default = void 0);
                var r,
                  o = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                      var i = Object.getPrototypeOf(e);
                      return null === i ? void 0 : t(i, n, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                  },
                  a = n(6);
                function s(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function l(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                }
                var u = (function (t) {
                  function e() {
                    return (
                      s(this, e),
                      l(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function (t, e) {
                      if ("function" != typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, t),
                    o(
                      e,
                      [
                        {
                          key: "format",
                          value: function (t, n) {
                            if (t !== this.statics.blotName || !n)
                              return i(
                                e.prototype.__proto__ ||
                                  Object.getPrototypeOf(e.prototype),
                                "format",
                                this
                              ).call(this, t, n);
                            (n = this.constructor.sanitize(n)),
                              this.domNode.setAttribute("href", n);
                          },
                        },
                      ],
                      [
                        {
                          key: "create",
                          value: function (t) {
                            var n = i(
                              e.__proto__ || Object.getPrototypeOf(e),
                              "create",
                              this
                            ).call(this, t);
                            return (
                              (t = this.sanitize(t)),
                              n.setAttribute("href", t),
                              n.setAttribute("rel", "noopener noreferrer"),
                              n.setAttribute("target", "_blank"),
                              n
                            );
                          },
                        },
                        {
                          key: "formats",
                          value: function (t) {
                            return t.getAttribute("href");
                          },
                        },
                        {
                          key: "sanitize",
                          value: function (t) {
                            return c(t, this.PROTOCOL_WHITELIST)
                              ? t
                              : this.SANITIZED_URL;
                          },
                        },
                      ]
                    ),
                    e
                  );
                })(((r = a) && r.__esModule ? r : { default: r }).default);
                function c(t, e) {
                  var n = document.createElement("a");
                  n.href = t;
                  var r = n.href.slice(0, n.href.indexOf(":"));
                  return e.indexOf(r) > -1;
                }
                (u.blotName = "link"),
                  (u.tagName = "A"),
                  (u.SANITIZED_URL = "about:blank"),
                  (u.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"]),
                  (e.default = u),
                  (e.sanitize = c);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (t) {
                          return typeof t;
                        }
                      : function (t) {
                          return t &&
                            "function" == typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                        },
                  o = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = s(n(23)),
                  a = s(n(107));
                function s(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                var l = 0;
                function u(t, e) {
                  t.setAttribute(e, !("true" === t.getAttribute(e)));
                }
                var c = (function () {
                  function t(e) {
                    var n = this;
                    !(function (t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, t),
                      (this.select = e),
                      (this.container = document.createElement("span")),
                      this.buildPicker(),
                      (this.select.style.display = "none"),
                      this.select.parentNode.insertBefore(
                        this.container,
                        this.select
                      ),
                      this.label.addEventListener("mousedown", function () {
                        n.togglePicker();
                      }),
                      this.label.addEventListener("keydown", function (t) {
                        switch (t.keyCode) {
                          case i.default.keys.ENTER:
                            n.togglePicker();
                            break;
                          case i.default.keys.ESCAPE:
                            n.escape(), t.preventDefault();
                        }
                      }),
                      this.select.addEventListener(
                        "change",
                        this.update.bind(this)
                      );
                  }
                  return (
                    o(t, [
                      {
                        key: "togglePicker",
                        value: function () {
                          this.container.classList.toggle("ql-expanded"),
                            u(this.label, "aria-expanded"),
                            u(this.options, "aria-hidden");
                        },
                      },
                      {
                        key: "buildItem",
                        value: function (t) {
                          var e = this,
                            n = document.createElement("span");
                          return (
                            (n.tabIndex = "0"),
                            n.setAttribute("role", "button"),
                            n.classList.add("ql-picker-item"),
                            t.hasAttribute("value") &&
                              n.setAttribute(
                                "data-value",
                                t.getAttribute("value")
                              ),
                            t.textContent &&
                              n.setAttribute("data-label", t.textContent),
                            n.addEventListener("click", function () {
                              e.selectItem(n, !0);
                            }),
                            n.addEventListener("keydown", function (t) {
                              switch (t.keyCode) {
                                case i.default.keys.ENTER:
                                  e.selectItem(n, !0), t.preventDefault();
                                  break;
                                case i.default.keys.ESCAPE:
                                  e.escape(), t.preventDefault();
                              }
                            }),
                            n
                          );
                        },
                      },
                      {
                        key: "buildLabel",
                        value: function () {
                          var t = document.createElement("span");
                          return (
                            t.classList.add("ql-picker-label"),
                            (t.innerHTML = a.default),
                            (t.tabIndex = "0"),
                            t.setAttribute("role", "button"),
                            t.setAttribute("aria-expanded", "false"),
                            this.container.appendChild(t),
                            t
                          );
                        },
                      },
                      {
                        key: "buildOptions",
                        value: function () {
                          var t = this,
                            e = document.createElement("span");
                          e.classList.add("ql-picker-options"),
                            e.setAttribute("aria-hidden", "true"),
                            (e.tabIndex = "-1"),
                            (e.id = "ql-picker-options-" + l),
                            (l += 1),
                            this.label.setAttribute("aria-controls", e.id),
                            (this.options = e),
                            [].slice
                              .call(this.select.options)
                              .forEach(function (n) {
                                var r = t.buildItem(n);
                                e.appendChild(r),
                                  !0 === n.selected && t.selectItem(r);
                              }),
                            this.container.appendChild(e);
                        },
                      },
                      {
                        key: "buildPicker",
                        value: function () {
                          var t = this;
                          [].slice
                            .call(this.select.attributes)
                            .forEach(function (e) {
                              t.container.setAttribute(e.name, e.value);
                            }),
                            this.container.classList.add("ql-picker"),
                            (this.label = this.buildLabel()),
                            this.buildOptions();
                        },
                      },
                      {
                        key: "escape",
                        value: function () {
                          var t = this;
                          this.close(),
                            setTimeout(function () {
                              return t.label.focus();
                            }, 1);
                        },
                      },
                      {
                        key: "close",
                        value: function () {
                          this.container.classList.remove("ql-expanded"),
                            this.label.setAttribute("aria-expanded", "false"),
                            this.options.setAttribute("aria-hidden", "true");
                        },
                      },
                      {
                        key: "selectItem",
                        value: function (t) {
                          var e =
                              arguments.length > 1 &&
                              void 0 !== arguments[1] &&
                              arguments[1],
                            n = this.container.querySelector(".ql-selected");
                          if (
                            t !== n &&
                            (null != n && n.classList.remove("ql-selected"),
                            null != t &&
                              (t.classList.add("ql-selected"),
                              (this.select.selectedIndex = [].indexOf.call(
                                t.parentNode.children,
                                t
                              )),
                              t.hasAttribute("data-value")
                                ? this.label.setAttribute(
                                    "data-value",
                                    t.getAttribute("data-value")
                                  )
                                : this.label.removeAttribute("data-value"),
                              t.hasAttribute("data-label")
                                ? this.label.setAttribute(
                                    "data-label",
                                    t.getAttribute("data-label")
                                  )
                                : this.label.removeAttribute("data-label"),
                              e))
                          ) {
                            if ("function" == typeof Event)
                              this.select.dispatchEvent(new Event("change"));
                            else if (
                              "object" ===
                              ("undefined" == typeof Event
                                ? "undefined"
                                : r(Event))
                            ) {
                              var o = document.createEvent("Event");
                              o.initEvent("change", !0, !0),
                                this.select.dispatchEvent(o);
                            }
                            this.close();
                          }
                        },
                      },
                      {
                        key: "update",
                        value: function () {
                          var t = void 0;
                          if (this.select.selectedIndex > -1) {
                            var e =
                              this.container.querySelector(".ql-picker-options")
                                .children[this.select.selectedIndex];
                            (t =
                              this.select.options[this.select.selectedIndex]),
                              this.selectItem(e);
                          } else this.selectItem(null);
                          var n =
                            null != t &&
                            t !== this.select.querySelector("option[selected]");
                          this.label.classList.toggle("ql-active", n);
                        },
                      },
                    ]),
                    t
                  );
                })();
                e.default = c;
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = m(n(0)),
                  o = m(n(5)),
                  i = n(4),
                  a = m(i),
                  s = m(n(16)),
                  l = m(n(25)),
                  u = m(n(24)),
                  c = m(n(35)),
                  f = m(n(6)),
                  h = m(n(22)),
                  p = m(n(7)),
                  d = m(n(55)),
                  y = m(n(42)),
                  g = m(n(23));
                function m(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                o.default.register({
                  "blots/block": a.default,
                  "blots/block/embed": i.BlockEmbed,
                  "blots/break": s.default,
                  "blots/container": l.default,
                  "blots/cursor": u.default,
                  "blots/embed": c.default,
                  "blots/inline": f.default,
                  "blots/scroll": h.default,
                  "blots/text": p.default,
                  "modules/clipboard": d.default,
                  "modules/history": y.default,
                  "modules/keyboard": g.default,
                }),
                  r.default.register(
                    a.default,
                    s.default,
                    u.default,
                    f.default,
                    h.default,
                    p.default
                  ),
                  (e.default = o.default);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = n(1),
                  o = (function () {
                    function t(t) {
                      (this.domNode = t),
                        (this.domNode[r.DATA_KEY] = { blot: this });
                    }
                    return (
                      Object.defineProperty(t.prototype, "statics", {
                        get: function () {
                          return this.constructor;
                        },
                        enumerable: !0,
                        configurable: !0,
                      }),
                      (t.create = function (t) {
                        if (null == this.tagName)
                          throw new r.ParchmentError(
                            "Blot definition missing tagName"
                          );
                        var e;
                        return (
                          Array.isArray(this.tagName)
                            ? ("string" == typeof t &&
                                ((t = t.toUpperCase()),
                                parseInt(t).toString() === t &&
                                  (t = parseInt(t))),
                              (e =
                                "number" == typeof t
                                  ? document.createElement(this.tagName[t - 1])
                                  : this.tagName.indexOf(t) > -1
                                  ? document.createElement(t)
                                  : document.createElement(this.tagName[0])))
                            : (e = document.createElement(this.tagName)),
                          this.className && e.classList.add(this.className),
                          e
                        );
                      }),
                      (t.prototype.attach = function () {
                        null != this.parent &&
                          (this.scroll = this.parent.scroll);
                      }),
                      (t.prototype.clone = function () {
                        var t = this.domNode.cloneNode(!1);
                        return r.create(t);
                      }),
                      (t.prototype.detach = function () {
                        null != this.parent && this.parent.removeChild(this),
                          delete this.domNode[r.DATA_KEY];
                      }),
                      (t.prototype.deleteAt = function (t, e) {
                        this.isolate(t, e).remove();
                      }),
                      (t.prototype.formatAt = function (t, e, n, o) {
                        var i = this.isolate(t, e);
                        if (null != r.query(n, r.Scope.BLOT) && o) i.wrap(n, o);
                        else if (null != r.query(n, r.Scope.ATTRIBUTE)) {
                          var a = r.create(this.statics.scope);
                          i.wrap(a), a.format(n, o);
                        }
                      }),
                      (t.prototype.insertAt = function (t, e, n) {
                        var o =
                            null == n ? r.create("text", e) : r.create(e, n),
                          i = this.split(t);
                        this.parent.insertBefore(o, i);
                      }),
                      (t.prototype.insertInto = function (t, e) {
                        void 0 === e && (e = null),
                          null != this.parent &&
                            this.parent.children.remove(this);
                        var n = null;
                        t.children.insertBefore(this, e),
                          null != e && (n = e.domNode),
                          (this.domNode.parentNode == t.domNode &&
                            this.domNode.nextSibling == n) ||
                            t.domNode.insertBefore(this.domNode, n),
                          (this.parent = t),
                          this.attach();
                      }),
                      (t.prototype.isolate = function (t, e) {
                        var n = this.split(t);
                        return n.split(e), n;
                      }),
                      (t.prototype.length = function () {
                        return 1;
                      }),
                      (t.prototype.offset = function (t) {
                        return (
                          void 0 === t && (t = this.parent),
                          null == this.parent || this == t
                            ? 0
                            : this.parent.children.offset(this) +
                              this.parent.offset(t)
                        );
                      }),
                      (t.prototype.optimize = function (t) {
                        null != this.domNode[r.DATA_KEY] &&
                          delete this.domNode[r.DATA_KEY].mutations;
                      }),
                      (t.prototype.remove = function () {
                        null != this.domNode.parentNode &&
                          this.domNode.parentNode.removeChild(this.domNode),
                          this.detach();
                      }),
                      (t.prototype.replace = function (t) {
                        null != t.parent &&
                          (t.parent.insertBefore(this, t.next), t.remove());
                      }),
                      (t.prototype.replaceWith = function (t, e) {
                        var n = "string" == typeof t ? r.create(t, e) : t;
                        return n.replace(this), n;
                      }),
                      (t.prototype.split = function (t, e) {
                        return 0 === t ? this : this.next;
                      }),
                      (t.prototype.update = function (t, e) {}),
                      (t.prototype.wrap = function (t, e) {
                        var n = "string" == typeof t ? r.create(t, e) : t;
                        return (
                          null != this.parent &&
                            this.parent.insertBefore(n, this.next),
                          n.appendChild(this),
                          n
                        );
                      }),
                      (t.blotName = "abstract"),
                      t
                    );
                  })();
                e.default = o;
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = n(12),
                  o = n(32),
                  i = n(33),
                  a = n(1),
                  s = (function () {
                    function t(t) {
                      (this.attributes = {}), (this.domNode = t), this.build();
                    }
                    return (
                      (t.prototype.attribute = function (t, e) {
                        e
                          ? t.add(this.domNode, e) &&
                            (null != t.value(this.domNode)
                              ? (this.attributes[t.attrName] = t)
                              : delete this.attributes[t.attrName])
                          : (t.remove(this.domNode),
                            delete this.attributes[t.attrName]);
                      }),
                      (t.prototype.build = function () {
                        var t = this;
                        this.attributes = {};
                        var e = r.default.keys(this.domNode),
                          n = o.default.keys(this.domNode),
                          s = i.default.keys(this.domNode);
                        e.concat(n)
                          .concat(s)
                          .forEach(function (e) {
                            var n = a.query(e, a.Scope.ATTRIBUTE);
                            n instanceof r.default &&
                              (t.attributes[n.attrName] = n);
                          });
                      }),
                      (t.prototype.copy = function (t) {
                        var e = this;
                        Object.keys(this.attributes).forEach(function (n) {
                          var r = e.attributes[n].value(e.domNode);
                          t.format(n, r);
                        });
                      }),
                      (t.prototype.move = function (t) {
                        var e = this;
                        this.copy(t),
                          Object.keys(this.attributes).forEach(function (t) {
                            e.attributes[t].remove(e.domNode);
                          }),
                          (this.attributes = {});
                      }),
                      (t.prototype.values = function () {
                        var t = this;
                        return Object.keys(this.attributes).reduce(function (
                          e,
                          n
                        ) {
                          return (e[n] = t.attributes[n].value(t.domNode)), e;
                        },
                        {});
                      }),
                      t
                    );
                  })();
                e.default = s;
              },
              function (t, e, n) {
                "use strict";
                var r,
                  o =
                    (this && this.__extends) ||
                    ((r =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      }),
                    function (t, e) {
                      function n() {
                        this.constructor = t;
                      }
                      r(t, e),
                        (t.prototype =
                          null === e
                            ? Object.create(e)
                            : ((n.prototype = e.prototype), new n()));
                    });
                function i(t, e) {
                  return (t.getAttribute("class") || "")
                    .split(/\s+/)
                    .filter(function (t) {
                      return 0 === t.indexOf(e + "-");
                    });
                }
                Object.defineProperty(e, "__esModule", { value: !0 });
                var a = (function (t) {
                  function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                  }
                  return (
                    o(e, t),
                    (e.keys = function (t) {
                      return (t.getAttribute("class") || "")
                        .split(/\s+/)
                        .map(function (t) {
                          return t.split("-").slice(0, -1).join("-");
                        });
                    }),
                    (e.prototype.add = function (t, e) {
                      return (
                        !!this.canAdd(t, e) &&
                        (this.remove(t),
                        t.classList.add(this.keyName + "-" + e),
                        !0)
                      );
                    }),
                    (e.prototype.remove = function (t) {
                      i(t, this.keyName).forEach(function (e) {
                        t.classList.remove(e);
                      }),
                        0 === t.classList.length && t.removeAttribute("class");
                    }),
                    (e.prototype.value = function (t) {
                      var e = (i(t, this.keyName)[0] || "").slice(
                        this.keyName.length + 1
                      );
                      return this.canAdd(t, e) ? e : "";
                    }),
                    e
                  );
                })(n(12).default);
                e.default = a;
              },
              function (t, e, n) {
                "use strict";
                var r,
                  o =
                    (this && this.__extends) ||
                    ((r =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      }),
                    function (t, e) {
                      function n() {
                        this.constructor = t;
                      }
                      r(t, e),
                        (t.prototype =
                          null === e
                            ? Object.create(e)
                            : ((n.prototype = e.prototype), new n()));
                    });
                function i(t) {
                  var e = t.split("-"),
                    n = e
                      .slice(1)
                      .map(function (t) {
                        return t[0].toUpperCase() + t.slice(1);
                      })
                      .join("");
                  return e[0] + n;
                }
                Object.defineProperty(e, "__esModule", { value: !0 });
                var a = (function (t) {
                  function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                  }
                  return (
                    o(e, t),
                    (e.keys = function (t) {
                      return (t.getAttribute("style") || "")
                        .split(";")
                        .map(function (t) {
                          return t.split(":")[0].trim();
                        });
                    }),
                    (e.prototype.add = function (t, e) {
                      return (
                        !!this.canAdd(t, e) &&
                        ((t.style[i(this.keyName)] = e), !0)
                      );
                    }),
                    (e.prototype.remove = function (t) {
                      (t.style[i(this.keyName)] = ""),
                        t.getAttribute("style") || t.removeAttribute("style");
                    }),
                    (e.prototype.value = function (t) {
                      var e = t.style[i(this.keyName)];
                      return this.canAdd(t, e) ? e : "";
                    }),
                    e
                  );
                })(n(12).default);
                e.default = a;
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  o = (function () {
                    function t(e, n) {
                      !(function (t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, t),
                        (this.quill = e),
                        (this.options = n),
                        (this.modules = {});
                    }
                    return (
                      r(t, [
                        {
                          key: "init",
                          value: function () {
                            var t = this;
                            Object.keys(this.options.modules).forEach(function (
                              e
                            ) {
                              null == t.modules[e] && t.addModule(e);
                            });
                          },
                        },
                        {
                          key: "addModule",
                          value: function (t) {
                            var e = this.quill.constructor.import(
                              "modules/" + t
                            );
                            return (
                              (this.modules[t] = new e(
                                this.quill,
                                this.options.modules[t] || {}
                              )),
                              this.modules[t]
                            );
                          },
                        },
                      ]),
                      t
                    );
                  })();
                (o.DEFAULTS = { modules: {} }),
                  (o.themes = { default: o }),
                  (e.default = o);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  o = a(n(0)),
                  i = a(n(7));
                function a(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                var s = (function (t) {
                  function e(t) {
                    !(function (t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e);
                    var n = (function (t, e) {
                      if (!t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return !e ||
                        ("object" != typeof e && "function" != typeof e)
                        ? t
                        : e;
                    })(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)
                    );
                    return (
                      (n.contentNode = document.createElement("span")),
                      n.contentNode.setAttribute("contenteditable", !1),
                      [].slice.call(n.domNode.childNodes).forEach(function (t) {
                        n.contentNode.appendChild(t);
                      }),
                      (n.leftGuard = document.createTextNode("\ufeff")),
                      (n.rightGuard = document.createTextNode("\ufeff")),
                      n.domNode.appendChild(n.leftGuard),
                      n.domNode.appendChild(n.contentNode),
                      n.domNode.appendChild(n.rightGuard),
                      n
                    );
                  }
                  return (
                    (function (t, e) {
                      if ("function" != typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, t),
                    r(e, [
                      {
                        key: "index",
                        value: function (t, n) {
                          return t === this.leftGuard
                            ? 0
                            : t === this.rightGuard
                            ? 1
                            : (function t(e, n, r) {
                                null === e && (e = Function.prototype);
                                var o = Object.getOwnPropertyDescriptor(e, n);
                                if (void 0 === o) {
                                  var i = Object.getPrototypeOf(e);
                                  return null === i ? void 0 : t(i, n, r);
                                }
                                if ("value" in o) return o.value;
                                var a = o.get;
                                return void 0 !== a ? a.call(r) : void 0;
                              })(
                                e.prototype.__proto__ ||
                                  Object.getPrototypeOf(e.prototype),
                                "index",
                                this
                              ).call(this, t, n);
                        },
                      },
                      {
                        key: "restore",
                        value: function (t) {
                          var e = void 0,
                            n = void 0,
                            r = t.data.split("\ufeff").join("");
                          if (t === this.leftGuard)
                            if (this.prev instanceof i.default) {
                              var a = this.prev.length();
                              this.prev.insertAt(a, r),
                                (e = {
                                  startNode: this.prev.domNode,
                                  startOffset: a + r.length,
                                });
                            } else
                              (n = document.createTextNode(r)),
                                this.parent.insertBefore(
                                  o.default.create(n),
                                  this
                                ),
                                (e = { startNode: n, startOffset: r.length });
                          else
                            t === this.rightGuard &&
                              (this.next instanceof i.default
                                ? (this.next.insertAt(0, r),
                                  (e = {
                                    startNode: this.next.domNode,
                                    startOffset: r.length,
                                  }))
                                : ((n = document.createTextNode(r)),
                                  this.parent.insertBefore(
                                    o.default.create(n),
                                    this.next
                                  ),
                                  (e = {
                                    startNode: n,
                                    startOffset: r.length,
                                  })));
                          return (t.data = "\ufeff"), e;
                        },
                      },
                      {
                        key: "update",
                        value: function (t, e) {
                          var n = this;
                          t.forEach(function (t) {
                            if (
                              "characterData" === t.type &&
                              (t.target === n.leftGuard ||
                                t.target === n.rightGuard)
                            ) {
                              var r = n.restore(t.target);
                              r && (e.range = r);
                            }
                          });
                        },
                      },
                    ]),
                    e
                  );
                })(o.default.Embed);
                e.default = s;
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.AlignStyle = e.AlignClass = e.AlignAttribute = void 0);
                var r,
                  o = n(0),
                  i = (r = o) && r.__esModule ? r : { default: r },
                  a = {
                    scope: i.default.Scope.BLOCK,
                    whitelist: ["right", "center", "justify"],
                  },
                  s = new i.default.Attributor.Attribute("align", "align", a),
                  l = new i.default.Attributor.Class("align", "ql-align", a),
                  u = new i.default.Attributor.Style("align", "text-align", a);
                (e.AlignAttribute = s), (e.AlignClass = l), (e.AlignStyle = u);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.BackgroundStyle = e.BackgroundClass = void 0);
                var r,
                  o = n(0),
                  i = (r = o) && r.__esModule ? r : { default: r },
                  a = n(26),
                  s = new i.default.Attributor.Class("background", "ql-bg", {
                    scope: i.default.Scope.INLINE,
                  }),
                  l = new a.ColorAttributor("background", "background-color", {
                    scope: i.default.Scope.INLINE,
                  });
                (e.BackgroundClass = s), (e.BackgroundStyle = l);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.DirectionStyle =
                    e.DirectionClass =
                    e.DirectionAttribute =
                      void 0);
                var r,
                  o = n(0),
                  i = (r = o) && r.__esModule ? r : { default: r },
                  a = { scope: i.default.Scope.BLOCK, whitelist: ["rtl"] },
                  s = new i.default.Attributor.Attribute("direction", "dir", a),
                  l = new i.default.Attributor.Class(
                    "direction",
                    "ql-direction",
                    a
                  ),
                  u = new i.default.Attributor.Style(
                    "direction",
                    "direction",
                    a
                  );
                (e.DirectionAttribute = s),
                  (e.DirectionClass = l),
                  (e.DirectionStyle = u);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.FontClass = e.FontStyle = void 0);
                var r,
                  o = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = n(0),
                  a = (r = i) && r.__esModule ? r : { default: r };
                function s(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function l(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                }
                var u = {
                    scope: a.default.Scope.INLINE,
                    whitelist: ["serif", "monospace"],
                  },
                  c = new a.default.Attributor.Class("font", "ql-font", u),
                  f = new ((function (t) {
                    function e() {
                      return (
                        s(this, e),
                        l(
                          this,
                          (e.__proto__ || Object.getPrototypeOf(e)).apply(
                            this,
                            arguments
                          )
                        )
                      );
                    }
                    return (
                      (function (t, e) {
                        if ("function" != typeof e && null !== e)
                          throw new TypeError(
                            "Super expression must either be null or a function, not " +
                              typeof e
                          );
                        (t.prototype = Object.create(e && e.prototype, {
                          constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0,
                          },
                        })),
                          e &&
                            (Object.setPrototypeOf
                              ? Object.setPrototypeOf(t, e)
                              : (t.__proto__ = e));
                      })(e, t),
                      o(e, [
                        {
                          key: "value",
                          value: function (t) {
                            return (function t(e, n, r) {
                              null === e && (e = Function.prototype);
                              var o = Object.getOwnPropertyDescriptor(e, n);
                              if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, n, r);
                              }
                              if ("value" in o) return o.value;
                              var a = o.get;
                              return void 0 !== a ? a.call(r) : void 0;
                            })(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "value",
                              this
                            )
                              .call(this, t)
                              .replace(/["']/g, "");
                          },
                        },
                      ]),
                      e
                    );
                  })(a.default.Attributor.Style))("font", "font-family", u);
                (e.FontStyle = f), (e.FontClass = c);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.SizeStyle = e.SizeClass = void 0);
                var r,
                  o = n(0),
                  i = (r = o) && r.__esModule ? r : { default: r },
                  a = new i.default.Attributor.Class("size", "ql-size", {
                    scope: i.default.Scope.INLINE,
                    whitelist: ["small", "large", "huge"],
                  }),
                  s = new i.default.Attributor.Style("size", "font-size", {
                    scope: i.default.Scope.INLINE,
                    whitelist: ["10px", "18px", "32px"],
                  });
                (e.SizeClass = a), (e.SizeStyle = s);
              },
              function (t, e, n) {
                "use strict";
                t.exports = {
                  align: {
                    "": n(76),
                    center: n(77),
                    right: n(78),
                    justify: n(79),
                  },
                  background: n(80),
                  blockquote: n(81),
                  bold: n(82),
                  clean: n(83),
                  code: n(58),
                  "code-block": n(58),
                  color: n(84),
                  direction: { "": n(85), rtl: n(86) },
                  float: {
                    center: n(87),
                    full: n(88),
                    left: n(89),
                    right: n(90),
                  },
                  formula: n(91),
                  header: { 1: n(92), 2: n(93) },
                  italic: n(94),
                  image: n(95),
                  indent: { "+1": n(96), "-1": n(97) },
                  link: n(98),
                  list: { ordered: n(99), bullet: n(100), check: n(101) },
                  script: { sub: n(102), super: n(103) },
                  strike: n(104),
                  underline: n(105),
                  video: n(106),
                };
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.getLastChangeIndex = e.default = void 0);
                var r = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  o = a(n(0)),
                  i = a(n(5));
                function a(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                var s = (function (t) {
                  function e(t, n) {
                    !(function (t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, e);
                    var r = (function (t, e) {
                      if (!t)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called"
                        );
                      return !e ||
                        ("object" != typeof e && "function" != typeof e)
                        ? t
                        : e;
                    })(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
                    );
                    return (
                      (r.lastRecorded = 0),
                      (r.ignoreChange = !1),
                      r.clear(),
                      r.quill.on(
                        i.default.events.EDITOR_CHANGE,
                        function (t, e, n, o) {
                          t !== i.default.events.TEXT_CHANGE ||
                            r.ignoreChange ||
                            (r.options.userOnly && o !== i.default.sources.USER
                              ? r.transform(e)
                              : r.record(e, n));
                        }
                      ),
                      r.quill.keyboard.addBinding(
                        { key: "Z", shortKey: !0 },
                        r.undo.bind(r)
                      ),
                      r.quill.keyboard.addBinding(
                        { key: "Z", shortKey: !0, shiftKey: !0 },
                        r.redo.bind(r)
                      ),
                      /Win/i.test(navigator.platform) &&
                        r.quill.keyboard.addBinding(
                          { key: "Y", shortKey: !0 },
                          r.redo.bind(r)
                        ),
                      r
                    );
                  }
                  return (
                    (function (t, e) {
                      if ("function" != typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, t),
                    r(e, [
                      {
                        key: "change",
                        value: function (t, e) {
                          if (0 !== this.stack[t].length) {
                            var n = this.stack[t].pop();
                            this.stack[e].push(n),
                              (this.lastRecorded = 0),
                              (this.ignoreChange = !0),
                              this.quill.updateContents(
                                n[t],
                                i.default.sources.USER
                              ),
                              (this.ignoreChange = !1);
                            var r = l(n[t]);
                            this.quill.setSelection(r);
                          }
                        },
                      },
                      {
                        key: "clear",
                        value: function () {
                          this.stack = { undo: [], redo: [] };
                        },
                      },
                      {
                        key: "cutoff",
                        value: function () {
                          this.lastRecorded = 0;
                        },
                      },
                      {
                        key: "record",
                        value: function (t, e) {
                          if (0 !== t.ops.length) {
                            this.stack.redo = [];
                            var n = this.quill.getContents().diff(e),
                              r = Date.now();
                            if (
                              this.lastRecorded + this.options.delay > r &&
                              this.stack.undo.length > 0
                            ) {
                              var o = this.stack.undo.pop();
                              (n = n.compose(o.undo)), (t = o.redo.compose(t));
                            } else this.lastRecorded = r;
                            this.stack.undo.push({ redo: t, undo: n }),
                              this.stack.undo.length > this.options.maxStack &&
                                this.stack.undo.shift();
                          }
                        },
                      },
                      {
                        key: "redo",
                        value: function () {
                          this.change("redo", "undo");
                        },
                      },
                      {
                        key: "transform",
                        value: function (t) {
                          this.stack.undo.forEach(function (e) {
                            (e.undo = t.transform(e.undo, !0)),
                              (e.redo = t.transform(e.redo, !0));
                          }),
                            this.stack.redo.forEach(function (e) {
                              (e.undo = t.transform(e.undo, !0)),
                                (e.redo = t.transform(e.redo, !0));
                            });
                        },
                      },
                      {
                        key: "undo",
                        value: function () {
                          this.change("undo", "redo");
                        },
                      },
                    ]),
                    e
                  );
                })(a(n(9)).default);
                function l(t) {
                  var e = t.reduce(function (t, e) {
                      return (t += e.delete || 0);
                    }, 0),
                    n = t.length() - e;
                  return (
                    (function (t) {
                      var e = t.ops[t.ops.length - 1];
                      return (
                        null != e &&
                        (null != e.insert
                          ? "string" == typeof e.insert &&
                            e.insert.endsWith("\n")
                          : null != e.attributes &&
                            Object.keys(e.attributes).some(function (t) {
                              return (
                                null !=
                                o.default.query(t, o.default.Scope.BLOCK)
                              );
                            }))
                      );
                    })(t) && (n -= 1),
                    n
                  );
                }
                (s.DEFAULTS = { delay: 1e3, maxStack: 100, userOnly: !1 }),
                  (e.default = s),
                  (e.getLastChangeIndex = l);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.default = e.BaseTooltip = void 0);
                var r = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  o = p(n(3)),
                  i = p(n(2)),
                  a = p(n(8)),
                  s = p(n(23)),
                  l = p(n(34)),
                  u = p(n(59)),
                  c = p(n(60)),
                  f = p(n(28)),
                  h = p(n(61));
                function p(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function d(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function y(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                }
                function g(t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                }
                var m = [!1, "center", "right", "justify"],
                  v = [
                    "#000000",
                    "#e60000",
                    "#ff9900",
                    "#ffff00",
                    "#008a00",
                    "#0066cc",
                    "#9933ff",
                    "#ffffff",
                    "#facccc",
                    "#ffebcc",
                    "#ffffcc",
                    "#cce8cc",
                    "#cce0f5",
                    "#ebd6ff",
                    "#bbbbbb",
                    "#f06666",
                    "#ffc266",
                    "#ffff66",
                    "#66b966",
                    "#66a3e0",
                    "#c285ff",
                    "#888888",
                    "#a10000",
                    "#b26b00",
                    "#b2b200",
                    "#006100",
                    "#0047b2",
                    "#6b24b2",
                    "#444444",
                    "#5c0000",
                    "#663d00",
                    "#666600",
                    "#003700",
                    "#002966",
                    "#3d1466",
                  ],
                  b = [!1, "serif", "monospace"],
                  x = ["1", "2", "3", !1],
                  _ = ["small", !1, "large", "huge"],
                  w = (function (t) {
                    function e(t, n) {
                      d(this, e);
                      var r = y(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).call(
                          this,
                          t,
                          n
                        )
                      );
                      return (
                        t.emitter.listenDOM(
                          "click",
                          document.body,
                          function e(n) {
                            if (!document.body.contains(t.root))
                              return document.body.removeEventListener(
                                "click",
                                e
                              );
                            null == r.tooltip ||
                              r.tooltip.root.contains(n.target) ||
                              document.activeElement === r.tooltip.textbox ||
                              r.quill.hasFocus() ||
                              r.tooltip.hide(),
                              null != r.pickers &&
                                r.pickers.forEach(function (t) {
                                  t.container.contains(n.target) || t.close();
                                });
                          }
                        ),
                        r
                      );
                    }
                    return (
                      g(e, t),
                      r(e, [
                        {
                          key: "addModule",
                          value: function (t) {
                            var n = (function t(e, n, r) {
                              null === e && (e = Function.prototype);
                              var o = Object.getOwnPropertyDescriptor(e, n);
                              if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, n, r);
                              }
                              if ("value" in o) return o.value;
                              var a = o.get;
                              return void 0 !== a ? a.call(r) : void 0;
                            })(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "addModule",
                              this
                            ).call(this, t);
                            return "toolbar" === t && this.extendToolbar(n), n;
                          },
                        },
                        {
                          key: "buildButtons",
                          value: function (t, e) {
                            t.forEach(function (t) {
                              (t.getAttribute("class") || "")
                                .split(/\s+/)
                                .forEach(function (n) {
                                  if (
                                    n.startsWith("ql-") &&
                                    ((n = n.slice("ql-".length)), null != e[n])
                                  )
                                    if ("direction" === n)
                                      t.innerHTML = e[n][""] + e[n].rtl;
                                    else if ("string" == typeof e[n])
                                      t.innerHTML = e[n];
                                    else {
                                      var r = t.value || "";
                                      null != r &&
                                        e[n][r] &&
                                        (t.innerHTML = e[n][r]);
                                    }
                                });
                            });
                          },
                        },
                        {
                          key: "buildPickers",
                          value: function (t, e) {
                            var n = this;
                            (this.pickers = t.map(function (t) {
                              if (t.classList.contains("ql-align"))
                                return (
                                  null == t.querySelector("option") && E(t, m),
                                  new c.default(t, e.align)
                                );
                              if (
                                t.classList.contains("ql-background") ||
                                t.classList.contains("ql-color")
                              ) {
                                var n = t.classList.contains("ql-background")
                                  ? "background"
                                  : "color";
                                return (
                                  null == t.querySelector("option") &&
                                    E(
                                      t,
                                      v,
                                      "background" === n ? "#ffffff" : "#000000"
                                    ),
                                  new u.default(t, e[n])
                                );
                              }
                              return (
                                null == t.querySelector("option") &&
                                  (t.classList.contains("ql-font")
                                    ? E(t, b)
                                    : t.classList.contains("ql-header")
                                    ? E(t, x)
                                    : t.classList.contains("ql-size") &&
                                      E(t, _)),
                                new f.default(t)
                              );
                            })),
                              this.quill.on(
                                a.default.events.EDITOR_CHANGE,
                                function () {
                                  n.pickers.forEach(function (t) {
                                    t.update();
                                  });
                                }
                              );
                          },
                        },
                      ]),
                      e
                    );
                  })(l.default);
                w.DEFAULTS = (0, o.default)(!0, {}, l.default.DEFAULTS, {
                  modules: {
                    toolbar: {
                      handlers: {
                        formula: function () {
                          this.quill.theme.tooltip.edit("formula");
                        },
                        image: function () {
                          var t = this,
                            e = this.container.querySelector(
                              "input.ql-image[type=file]"
                            );
                          null == e &&
                            ((e = document.createElement("input")).setAttribute(
                              "type",
                              "file"
                            ),
                            e.setAttribute(
                              "accept",
                              "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"
                            ),
                            e.classList.add("ql-image"),
                            e.addEventListener("change", function () {
                              if (null != e.files && null != e.files[0]) {
                                var n = new FileReader();
                                (n.onload = function (n) {
                                  var r = t.quill.getSelection(!0);
                                  t.quill.updateContents(
                                    new i.default()
                                      .retain(r.index)
                                      .delete(r.length)
                                      .insert({ image: n.target.result }),
                                    a.default.sources.USER
                                  ),
                                    t.quill.setSelection(
                                      r.index + 1,
                                      a.default.sources.SILENT
                                    ),
                                    (e.value = "");
                                }),
                                  n.readAsDataURL(e.files[0]);
                              }
                            }),
                            this.container.appendChild(e)),
                            e.click();
                        },
                        video: function () {
                          this.quill.theme.tooltip.edit("video");
                        },
                      },
                    },
                  },
                });
                var A = (function (t) {
                  function e(t, n) {
                    d(this, e);
                    var r = y(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
                    );
                    return (
                      (r.textbox = r.root.querySelector('input[type="text"]')),
                      r.listen(),
                      r
                    );
                  }
                  return (
                    g(e, t),
                    r(e, [
                      {
                        key: "listen",
                        value: function () {
                          var t = this;
                          this.textbox.addEventListener(
                            "keydown",
                            function (e) {
                              s.default.match(e, "enter")
                                ? (t.save(), e.preventDefault())
                                : s.default.match(e, "escape") &&
                                  (t.cancel(), e.preventDefault());
                            }
                          );
                        },
                      },
                      {
                        key: "cancel",
                        value: function () {
                          this.hide();
                        },
                      },
                      {
                        key: "edit",
                        value: function () {
                          var t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "link",
                            e =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : null;
                          this.root.classList.remove("ql-hidden"),
                            this.root.classList.add("ql-editing"),
                            null != e
                              ? (this.textbox.value = e)
                              : t !== this.root.getAttribute("data-mode") &&
                                (this.textbox.value = ""),
                            this.position(
                              this.quill.getBounds(
                                this.quill.selection.savedRange
                              )
                            ),
                            this.textbox.select(),
                            this.textbox.setAttribute(
                              "placeholder",
                              this.textbox.getAttribute("data-" + t) || ""
                            ),
                            this.root.setAttribute("data-mode", t);
                        },
                      },
                      {
                        key: "restoreFocus",
                        value: function () {
                          var t = this.quill.scrollingContainer.scrollTop;
                          this.quill.focus(),
                            (this.quill.scrollingContainer.scrollTop = t);
                        },
                      },
                      {
                        key: "save",
                        value: function () {
                          var t,
                            e,
                            n = this.textbox.value;
                          switch (this.root.getAttribute("data-mode")) {
                            case "link":
                              var r = this.quill.root.scrollTop;
                              this.linkRange
                                ? (this.quill.formatText(
                                    this.linkRange,
                                    "link",
                                    n,
                                    a.default.sources.USER
                                  ),
                                  delete this.linkRange)
                                : (this.restoreFocus(),
                                  this.quill.format(
                                    "link",
                                    n,
                                    a.default.sources.USER
                                  )),
                                (this.quill.root.scrollTop = r);
                              break;
                            case "video":
                              (e =
                                (t = n).match(
                                  /^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/
                                ) ||
                                t.match(
                                  /^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/
                                )),
                                (n = e
                                  ? (e[1] || "https") +
                                    "://www.youtube.com/embed/" +
                                    e[2] +
                                    "?showinfo=0"
                                  : (e = t.match(
                                      /^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/
                                    ))
                                  ? (e[1] || "https") +
                                    "://player.vimeo.com/video/" +
                                    e[2] +
                                    "/"
                                  : t);
                            case "formula":
                              if (!n) break;
                              var o = this.quill.getSelection(!0);
                              if (null != o) {
                                var i = o.index + o.length;
                                this.quill.insertEmbed(
                                  i,
                                  this.root.getAttribute("data-mode"),
                                  n,
                                  a.default.sources.USER
                                ),
                                  "formula" ===
                                    this.root.getAttribute("data-mode") &&
                                    this.quill.insertText(
                                      i + 1,
                                      " ",
                                      a.default.sources.USER
                                    ),
                                  this.quill.setSelection(
                                    i + 2,
                                    a.default.sources.USER
                                  );
                              }
                          }
                          (this.textbox.value = ""), this.hide();
                        },
                      },
                    ]),
                    e
                  );
                })(h.default);
                function E(t, e) {
                  var n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                  e.forEach(function (e) {
                    var r = document.createElement("option");
                    e === n
                      ? r.setAttribute("selected", "selected")
                      : r.setAttribute("value", e),
                      t.appendChild(r);
                  });
                }
                (e.BaseTooltip = A), (e.default = w);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = (function () {
                  function t() {
                    (this.head = this.tail = null), (this.length = 0);
                  }
                  return (
                    (t.prototype.append = function () {
                      for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                      this.insertBefore(t[0], null),
                        t.length > 1 && this.append.apply(this, t.slice(1));
                    }),
                    (t.prototype.contains = function (t) {
                      for (var e, n = this.iterator(); (e = n()); )
                        if (e === t) return !0;
                      return !1;
                    }),
                    (t.prototype.insertBefore = function (t, e) {
                      t &&
                        ((t.next = e),
                        null != e
                          ? ((t.prev = e.prev),
                            null != e.prev && (e.prev.next = t),
                            (e.prev = t),
                            e === this.head && (this.head = t))
                          : null != this.tail
                          ? ((this.tail.next = t),
                            (t.prev = this.tail),
                            (this.tail = t))
                          : ((t.prev = null), (this.head = this.tail = t)),
                        (this.length += 1));
                    }),
                    (t.prototype.offset = function (t) {
                      for (var e = 0, n = this.head; null != n; ) {
                        if (n === t) return e;
                        (e += n.length()), (n = n.next);
                      }
                      return -1;
                    }),
                    (t.prototype.remove = function (t) {
                      this.contains(t) &&
                        (null != t.prev && (t.prev.next = t.next),
                        null != t.next && (t.next.prev = t.prev),
                        t === this.head && (this.head = t.next),
                        t === this.tail && (this.tail = t.prev),
                        (this.length -= 1));
                    }),
                    (t.prototype.iterator = function (t) {
                      return (
                        void 0 === t && (t = this.head),
                        function () {
                          var e = t;
                          return null != t && (t = t.next), e;
                        }
                      );
                    }),
                    (t.prototype.find = function (t, e) {
                      void 0 === e && (e = !1);
                      for (var n, r = this.iterator(); (n = r()); ) {
                        var o = n.length();
                        if (
                          t < o ||
                          (e &&
                            t === o &&
                            (null == n.next || 0 !== n.next.length()))
                        )
                          return [n, t];
                        t -= o;
                      }
                      return [null, 0];
                    }),
                    (t.prototype.forEach = function (t) {
                      for (var e, n = this.iterator(); (e = n()); ) t(e);
                    }),
                    (t.prototype.forEachAt = function (t, e, n) {
                      if (!(e <= 0))
                        for (
                          var r,
                            o = this.find(t),
                            i = o[0],
                            a = t - o[1],
                            s = this.iterator(i);
                          (r = s()) && a < t + e;

                        ) {
                          var l = r.length();
                          t > a
                            ? n(r, t - a, Math.min(e, a + l - t))
                            : n(r, 0, Math.min(l, t + e - a)),
                            (a += l);
                        }
                    }),
                    (t.prototype.map = function (t) {
                      return this.reduce(function (e, n) {
                        return e.push(t(n)), e;
                      }, []);
                    }),
                    (t.prototype.reduce = function (t, e) {
                      for (var n, r = this.iterator(); (n = r()); ) e = t(e, n);
                      return e;
                    }),
                    t
                  );
                })();
                e.default = r;
              },
              function (t, e, n) {
                "use strict";
                var r,
                  o =
                    (this && this.__extends) ||
                    ((r =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      }),
                    function (t, e) {
                      function n() {
                        this.constructor = t;
                      }
                      r(t, e),
                        (t.prototype =
                          null === e
                            ? Object.create(e)
                            : ((n.prototype = e.prototype), new n()));
                    });
                Object.defineProperty(e, "__esModule", { value: !0 });
                var i = n(17),
                  a = n(1),
                  s = {
                    attributes: !0,
                    characterData: !0,
                    characterDataOldValue: !0,
                    childList: !0,
                    subtree: !0,
                  },
                  l = (function (t) {
                    function e(e) {
                      var n = t.call(this, e) || this;
                      return (
                        (n.scroll = n),
                        (n.observer = new MutationObserver(function (t) {
                          n.update(t);
                        })),
                        n.observer.observe(n.domNode, s),
                        n.attach(),
                        n
                      );
                    }
                    return (
                      o(e, t),
                      (e.prototype.detach = function () {
                        t.prototype.detach.call(this),
                          this.observer.disconnect();
                      }),
                      (e.prototype.deleteAt = function (e, n) {
                        this.update(),
                          0 === e && n === this.length()
                            ? this.children.forEach(function (t) {
                                t.remove();
                              })
                            : t.prototype.deleteAt.call(this, e, n);
                      }),
                      (e.prototype.formatAt = function (e, n, r, o) {
                        this.update(),
                          t.prototype.formatAt.call(this, e, n, r, o);
                      }),
                      (e.prototype.insertAt = function (e, n, r) {
                        this.update(), t.prototype.insertAt.call(this, e, n, r);
                      }),
                      (e.prototype.optimize = function (e, n) {
                        var r = this;
                        void 0 === e && (e = []),
                          void 0 === n && (n = {}),
                          t.prototype.optimize.call(this, n);
                        for (
                          var o = [].slice.call(this.observer.takeRecords());
                          o.length > 0;

                        )
                          e.push(o.pop());
                        for (
                          var s = function (t, e) {
                              void 0 === e && (e = !0),
                                null != t &&
                                  t !== r &&
                                  null != t.domNode.parentNode &&
                                  (null == t.domNode[a.DATA_KEY].mutations &&
                                    (t.domNode[a.DATA_KEY].mutations = []),
                                  e && s(t.parent));
                            },
                            l = function (t) {
                              null != t.domNode[a.DATA_KEY] &&
                                null != t.domNode[a.DATA_KEY].mutations &&
                                (t instanceof i.default &&
                                  t.children.forEach(l),
                                t.optimize(n));
                            },
                            u = e,
                            c = 0;
                          u.length > 0;
                          c += 1
                        ) {
                          if (c >= 100)
                            throw new Error(
                              "[Parchment] Maximum optimize iterations reached"
                            );
                          for (
                            u.forEach(function (t) {
                              var e = a.find(t.target, !0);
                              null != e &&
                                (e.domNode === t.target &&
                                  ("childList" === t.type
                                    ? (s(a.find(t.previousSibling, !1)),
                                      [].forEach.call(
                                        t.addedNodes,
                                        function (t) {
                                          var e = a.find(t, !1);
                                          s(e, !1),
                                            e instanceof i.default &&
                                              e.children.forEach(function (t) {
                                                s(t, !1);
                                              });
                                        }
                                      ))
                                    : "attributes" === t.type && s(e.prev)),
                                s(e));
                            }),
                              this.children.forEach(l),
                              o = (u = [].slice.call(
                                this.observer.takeRecords()
                              )).slice();
                            o.length > 0;

                          )
                            e.push(o.pop());
                        }
                      }),
                      (e.prototype.update = function (e, n) {
                        var r = this;
                        void 0 === n && (n = {}),
                          (e = e || this.observer.takeRecords())
                            .map(function (t) {
                              var e = a.find(t.target, !0);
                              return null == e
                                ? null
                                : null == e.domNode[a.DATA_KEY].mutations
                                ? ((e.domNode[a.DATA_KEY].mutations = [t]), e)
                                : (e.domNode[a.DATA_KEY].mutations.push(t),
                                  null);
                            })
                            .forEach(function (t) {
                              null != t &&
                                t !== r &&
                                null != t.domNode[a.DATA_KEY] &&
                                t.update(
                                  t.domNode[a.DATA_KEY].mutations || [],
                                  n
                                );
                            }),
                          null != this.domNode[a.DATA_KEY].mutations &&
                            t.prototype.update.call(
                              this,
                              this.domNode[a.DATA_KEY].mutations,
                              n
                            ),
                          this.optimize(e, n);
                      }),
                      (e.blotName = "scroll"),
                      (e.defaultChild = "block"),
                      (e.scope = a.Scope.BLOCK_BLOT),
                      (e.tagName = "DIV"),
                      e
                    );
                  })(i.default);
                e.default = l;
              },
              function (t, e, n) {
                "use strict";
                var r,
                  o =
                    (this && this.__extends) ||
                    ((r =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      }),
                    function (t, e) {
                      function n() {
                        this.constructor = t;
                      }
                      r(t, e),
                        (t.prototype =
                          null === e
                            ? Object.create(e)
                            : ((n.prototype = e.prototype), new n()));
                    });
                Object.defineProperty(e, "__esModule", { value: !0 });
                var i = n(18),
                  a = n(1),
                  s = (function (t) {
                    function e() {
                      return (null !== t && t.apply(this, arguments)) || this;
                    }
                    return (
                      o(e, t),
                      (e.formats = function (n) {
                        if (n.tagName !== e.tagName)
                          return t.formats.call(this, n);
                      }),
                      (e.prototype.format = function (n, r) {
                        var o = this;
                        n !== this.statics.blotName || r
                          ? t.prototype.format.call(this, n, r)
                          : (this.children.forEach(function (t) {
                              t instanceof i.default ||
                                (t = t.wrap(e.blotName, !0)),
                                o.attributes.copy(t);
                            }),
                            this.unwrap());
                      }),
                      (e.prototype.formatAt = function (e, n, r, o) {
                        null != this.formats()[r] ||
                        a.query(r, a.Scope.ATTRIBUTE)
                          ? this.isolate(e, n).format(r, o)
                          : t.prototype.formatAt.call(this, e, n, r, o);
                      }),
                      (e.prototype.optimize = function (n) {
                        t.prototype.optimize.call(this, n);
                        var r = this.formats();
                        if (0 === Object.keys(r).length) return this.unwrap();
                        var o = this.next;
                        o instanceof e &&
                          o.prev === this &&
                          (function (t, e) {
                            if (Object.keys(t).length !== Object.keys(e).length)
                              return !1;
                            for (var n in t) if (t[n] !== e[n]) return !1;
                            return !0;
                          })(r, o.formats()) &&
                          (o.moveChildren(this), o.remove());
                      }),
                      (e.blotName = "inline"),
                      (e.scope = a.Scope.INLINE_BLOT),
                      (e.tagName = "SPAN"),
                      e
                    );
                  })(i.default);
                e.default = s;
              },
              function (t, e, n) {
                "use strict";
                var r,
                  o =
                    (this && this.__extends) ||
                    ((r =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      }),
                    function (t, e) {
                      function n() {
                        this.constructor = t;
                      }
                      r(t, e),
                        (t.prototype =
                          null === e
                            ? Object.create(e)
                            : ((n.prototype = e.prototype), new n()));
                    });
                Object.defineProperty(e, "__esModule", { value: !0 });
                var i = n(18),
                  a = n(1),
                  s = (function (t) {
                    function e() {
                      return (null !== t && t.apply(this, arguments)) || this;
                    }
                    return (
                      o(e, t),
                      (e.formats = function (n) {
                        var r = a.query(e.blotName).tagName;
                        if (n.tagName !== r) return t.formats.call(this, n);
                      }),
                      (e.prototype.format = function (n, r) {
                        null != a.query(n, a.Scope.BLOCK) &&
                          (n !== this.statics.blotName || r
                            ? t.prototype.format.call(this, n, r)
                            : this.replaceWith(e.blotName));
                      }),
                      (e.prototype.formatAt = function (e, n, r, o) {
                        null != a.query(r, a.Scope.BLOCK)
                          ? this.format(r, o)
                          : t.prototype.formatAt.call(this, e, n, r, o);
                      }),
                      (e.prototype.insertAt = function (e, n, r) {
                        if (null == r || null != a.query(n, a.Scope.INLINE))
                          t.prototype.insertAt.call(this, e, n, r);
                        else {
                          var o = this.split(e),
                            i = a.create(n, r);
                          o.parent.insertBefore(i, o);
                        }
                      }),
                      (e.prototype.update = function (e, n) {
                        navigator.userAgent.match(/Trident/)
                          ? this.build()
                          : t.prototype.update.call(this, e, n);
                      }),
                      (e.blotName = "block"),
                      (e.scope = a.Scope.BLOCK_BLOT),
                      (e.tagName = "P"),
                      e
                    );
                  })(i.default);
                e.default = s;
              },
              function (t, e, n) {
                "use strict";
                var r,
                  o =
                    (this && this.__extends) ||
                    ((r =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      }),
                    function (t, e) {
                      function n() {
                        this.constructor = t;
                      }
                      r(t, e),
                        (t.prototype =
                          null === e
                            ? Object.create(e)
                            : ((n.prototype = e.prototype), new n()));
                    });
                Object.defineProperty(e, "__esModule", { value: !0 });
                var i = (function (t) {
                  function e() {
                    return (null !== t && t.apply(this, arguments)) || this;
                  }
                  return (
                    o(e, t),
                    (e.formats = function (t) {}),
                    (e.prototype.format = function (e, n) {
                      t.prototype.formatAt.call(this, 0, this.length(), e, n);
                    }),
                    (e.prototype.formatAt = function (e, n, r, o) {
                      0 === e && n === this.length()
                        ? this.format(r, o)
                        : t.prototype.formatAt.call(this, e, n, r, o);
                    }),
                    (e.prototype.formats = function () {
                      return this.statics.formats(this.domNode);
                    }),
                    e
                  );
                })(n(19).default);
                e.default = i;
              },
              function (t, e, n) {
                "use strict";
                var r,
                  o =
                    (this && this.__extends) ||
                    ((r =
                      Object.setPrototypeOf ||
                      ({ __proto__: [] } instanceof Array &&
                        function (t, e) {
                          t.__proto__ = e;
                        }) ||
                      function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                      }),
                    function (t, e) {
                      function n() {
                        this.constructor = t;
                      }
                      r(t, e),
                        (t.prototype =
                          null === e
                            ? Object.create(e)
                            : ((n.prototype = e.prototype), new n()));
                    });
                Object.defineProperty(e, "__esModule", { value: !0 });
                var i = n(19),
                  a = n(1),
                  s = (function (t) {
                    function e(e) {
                      var n = t.call(this, e) || this;
                      return (n.text = n.statics.value(n.domNode)), n;
                    }
                    return (
                      o(e, t),
                      (e.create = function (t) {
                        return document.createTextNode(t);
                      }),
                      (e.value = function (t) {
                        var e = t.data;
                        return e.normalize && (e = e.normalize()), e;
                      }),
                      (e.prototype.deleteAt = function (t, e) {
                        this.domNode.data = this.text =
                          this.text.slice(0, t) + this.text.slice(t + e);
                      }),
                      (e.prototype.index = function (t, e) {
                        return this.domNode === t ? e : -1;
                      }),
                      (e.prototype.insertAt = function (e, n, r) {
                        null == r
                          ? ((this.text =
                              this.text.slice(0, e) + n + this.text.slice(e)),
                            (this.domNode.data = this.text))
                          : t.prototype.insertAt.call(this, e, n, r);
                      }),
                      (e.prototype.length = function () {
                        return this.text.length;
                      }),
                      (e.prototype.optimize = function (n) {
                        t.prototype.optimize.call(this, n),
                          (this.text = this.statics.value(this.domNode)),
                          0 === this.text.length
                            ? this.remove()
                            : this.next instanceof e &&
                              this.next.prev === this &&
                              (this.insertAt(this.length(), this.next.value()),
                              this.next.remove());
                      }),
                      (e.prototype.position = function (t, e) {
                        return void 0 === e && (e = !1), [this.domNode, t];
                      }),
                      (e.prototype.split = function (t, e) {
                        if ((void 0 === e && (e = !1), !e)) {
                          if (0 === t) return this;
                          if (t === this.length()) return this.next;
                        }
                        var n = a.create(this.domNode.splitText(t));
                        return (
                          this.parent.insertBefore(n, this.next),
                          (this.text = this.statics.value(this.domNode)),
                          n
                        );
                      }),
                      (e.prototype.update = function (t, e) {
                        var n = this;
                        t.some(function (t) {
                          return (
                            "characterData" === t.type && t.target === n.domNode
                          );
                        }) && (this.text = this.statics.value(this.domNode));
                      }),
                      (e.prototype.value = function () {
                        return this.text;
                      }),
                      (e.blotName = "text"),
                      (e.scope = a.Scope.INLINE_BLOT),
                      e
                    );
                  })(i.default);
                e.default = s;
              },
              function (t, e, n) {
                "use strict";
                var r = document.createElement("div");
                if (
                  (r.classList.toggle("test-class", !1),
                  r.classList.contains("test-class"))
                ) {
                  var o = DOMTokenList.prototype.toggle;
                  DOMTokenList.prototype.toggle = function (t, e) {
                    return arguments.length > 1 && !this.contains(t) == !e
                      ? e
                      : o.call(this, t);
                  };
                }
                String.prototype.startsWith ||
                  (String.prototype.startsWith = function (t, e) {
                    return (e = e || 0), this.substr(e, t.length) === t;
                  }),
                  String.prototype.endsWith ||
                    (String.prototype.endsWith = function (t, e) {
                      var n = this.toString();
                      ("number" != typeof e ||
                        !isFinite(e) ||
                        Math.floor(e) !== e ||
                        e > n.length) &&
                        (e = n.length),
                        (e -= t.length);
                      var r = n.indexOf(t, e);
                      return -1 !== r && r === e;
                    }),
                  Array.prototype.find ||
                    Object.defineProperty(Array.prototype, "find", {
                      value: function (t) {
                        if (null === this)
                          throw new TypeError(
                            "Array.prototype.find called on null or undefined"
                          );
                        if ("function" != typeof t)
                          throw new TypeError("predicate must be a function");
                        for (
                          var e,
                            n = Object(this),
                            r = n.length >>> 0,
                            o = arguments[1],
                            i = 0;
                          i < r;
                          i++
                        )
                          if (((e = n[i]), t.call(o, e, i, n))) return e;
                      },
                    }),
                  document.addEventListener("DOMContentLoaded", function () {
                    document.execCommand("enableObjectResizing", !1, !1),
                      document.execCommand("autoUrlDetect", !1, !1);
                  });
              },
              function (t, e) {
                function n(t, e, a) {
                  if (t == e) return t ? [[0, t]] : [];
                  (a < 0 || t.length < a) && (a = null);
                  var l = o(t, e),
                    u = t.substring(0, l);
                  l = i((t = t.substring(l)), (e = e.substring(l)));
                  var c = t.substring(t.length - l),
                    f = (function (t, e) {
                      var a;
                      if (!t) return [[1, e]];
                      if (!e) return [[-1, t]];
                      var s = t.length > e.length ? t : e,
                        l = t.length > e.length ? e : t,
                        u = s.indexOf(l);
                      if (-1 != u)
                        return (
                          (a = [
                            [1, s.substring(0, u)],
                            [0, l],
                            [1, s.substring(u + l.length)],
                          ]),
                          t.length > e.length && (a[0][0] = a[2][0] = -1),
                          a
                        );
                      if (1 == l.length)
                        return [
                          [-1, t],
                          [1, e],
                        ];
                      var c = (function (t, e) {
                        var n = t.length > e.length ? t : e,
                          r = t.length > e.length ? e : t;
                        if (n.length < 4 || 2 * r.length < n.length)
                          return null;
                        function a(t, e, n) {
                          for (
                            var r,
                              a,
                              s,
                              l,
                              u = t.substring(n, n + Math.floor(t.length / 4)),
                              c = -1,
                              f = "";
                            -1 != (c = e.indexOf(u, c + 1));

                          ) {
                            var h = o(t.substring(n), e.substring(c)),
                              p = i(t.substring(0, n), e.substring(0, c));
                            f.length < p + h &&
                              ((f =
                                e.substring(c - p, c) + e.substring(c, c + h)),
                              (r = t.substring(0, n - p)),
                              (a = t.substring(n + h)),
                              (s = e.substring(0, c - p)),
                              (l = e.substring(c + h)));
                          }
                          return 2 * f.length >= t.length
                            ? [r, a, s, l, f]
                            : null;
                        }
                        var s,
                          l,
                          u,
                          c,
                          f,
                          h = a(n, r, Math.ceil(n.length / 4)),
                          p = a(n, r, Math.ceil(n.length / 2));
                        if (!h && !p) return null;
                        (s = p ? (h && h[4].length > p[4].length ? h : p) : h),
                          t.length > e.length
                            ? ((l = s[0]), (u = s[1]), (c = s[2]), (f = s[3]))
                            : ((c = s[0]), (f = s[1]), (l = s[2]), (u = s[3]));
                        var d = s[4];
                        return [l, u, c, f, d];
                      })(t, e);
                      if (c) {
                        var f = c[0],
                          h = c[1],
                          p = c[2],
                          d = c[3],
                          y = c[4],
                          g = n(f, p),
                          m = n(h, d);
                        return g.concat([[0, y]], m);
                      }
                      return (function (t, e) {
                        for (
                          var n = t.length,
                            o = e.length,
                            i = Math.ceil((n + o) / 2),
                            a = i,
                            s = 2 * i,
                            l = new Array(s),
                            u = new Array(s),
                            c = 0;
                          c < s;
                          c++
                        )
                          (l[c] = -1), (u[c] = -1);
                        (l[a + 1] = 0), (u[a + 1] = 0);
                        for (
                          var f = n - o,
                            h = f % 2 != 0,
                            p = 0,
                            d = 0,
                            y = 0,
                            g = 0,
                            m = 0;
                          m < i;
                          m++
                        ) {
                          for (var v = -m + p; v <= m - d; v += 2) {
                            for (
                              var b = a + v,
                                x =
                                  (k =
                                    v == -m || (v != m && l[b - 1] < l[b + 1])
                                      ? l[b + 1]
                                      : l[b - 1] + 1) - v;
                              k < n && x < o && t.charAt(k) == e.charAt(x);

                            )
                              k++, x++;
                            if (((l[b] = k), k > n)) d += 2;
                            else if (x > o) p += 2;
                            else if (
                              h &&
                              (A = a + f - v) >= 0 &&
                              A < s &&
                              -1 != u[A]
                            ) {
                              var _ = n - u[A];
                              if (k >= _) return r(t, e, k, x);
                            }
                          }
                          for (var w = -m + y; w <= m - g; w += 2) {
                            for (
                              var A = a + w,
                                E =
                                  (_ =
                                    w == -m || (w != m && u[A - 1] < u[A + 1])
                                      ? u[A + 1]
                                      : u[A - 1] + 1) - w;
                              _ < n &&
                              E < o &&
                              t.charAt(n - _ - 1) == e.charAt(o - E - 1);

                            )
                              _++, E++;
                            if (((u[A] = _), _ > n)) g += 2;
                            else if (E > o) y += 2;
                            else if (
                              !h &&
                              (b = a + f - w) >= 0 &&
                              b < s &&
                              -1 != l[b]
                            ) {
                              var k = l[b];
                              if (((x = a + k - b), k >= (_ = n - _)))
                                return r(t, e, k, x);
                            }
                          }
                        }
                        return [
                          [-1, t],
                          [1, e],
                        ];
                      })(t, e);
                    })(
                      (t = t.substring(0, t.length - l)),
                      (e = e.substring(0, e.length - l))
                    );
                  return (
                    u && f.unshift([0, u]),
                    c && f.push([0, c]),
                    (function t(e) {
                      e.push([0, ""]);
                      for (
                        var n, r = 0, a = 0, s = 0, l = "", u = "";
                        r < e.length;

                      )
                        switch (e[r][0]) {
                          case 1:
                            s++, (u += e[r][1]), r++;
                            break;
                          case -1:
                            a++, (l += e[r][1]), r++;
                            break;
                          case 0:
                            a + s > 1
                              ? (0 !== a &&
                                  0 !== s &&
                                  (0 !== (n = o(u, l)) &&
                                    (r - a - s > 0 && 0 == e[r - a - s - 1][0]
                                      ? (e[r - a - s - 1][1] += u.substring(
                                          0,
                                          n
                                        ))
                                      : (e.splice(0, 0, [0, u.substring(0, n)]),
                                        r++),
                                    (u = u.substring(n)),
                                    (l = l.substring(n))),
                                  0 !== (n = i(u, l)) &&
                                    ((e[r][1] =
                                      u.substring(u.length - n) + e[r][1]),
                                    (u = u.substring(0, u.length - n)),
                                    (l = l.substring(0, l.length - n)))),
                                0 === a
                                  ? e.splice(r - s, a + s, [1, u])
                                  : 0 === s
                                  ? e.splice(r - a, a + s, [-1, l])
                                  : e.splice(r - a - s, a + s, [-1, l], [1, u]),
                                (r = r - a - s + (a ? 1 : 0) + (s ? 1 : 0) + 1))
                              : 0 !== r && 0 == e[r - 1][0]
                              ? ((e[r - 1][1] += e[r][1]), e.splice(r, 1))
                              : r++,
                              (s = 0),
                              (a = 0),
                              (l = ""),
                              (u = "");
                        }
                      "" === e[e.length - 1][1] && e.pop();
                      var c = !1;
                      for (r = 1; r < e.length - 1; )
                        0 == e[r - 1][0] &&
                          0 == e[r + 1][0] &&
                          (e[r][1].substring(
                            e[r][1].length - e[r - 1][1].length
                          ) == e[r - 1][1]
                            ? ((e[r][1] =
                                e[r - 1][1] +
                                e[r][1].substring(
                                  0,
                                  e[r][1].length - e[r - 1][1].length
                                )),
                              (e[r + 1][1] = e[r - 1][1] + e[r + 1][1]),
                              e.splice(r - 1, 1),
                              (c = !0))
                            : e[r][1].substring(0, e[r + 1][1].length) ==
                                e[r + 1][1] &&
                              ((e[r - 1][1] += e[r + 1][1]),
                              (e[r][1] =
                                e[r][1].substring(e[r + 1][1].length) +
                                e[r + 1][1]),
                              e.splice(r + 1, 1),
                              (c = !0))),
                          r++;
                      c && t(e);
                    })(f),
                    null != a &&
                      (f = (function (t, e) {
                        var n = (function (t, e) {
                            if (0 === e) return [0, t];
                            for (var n = 0, r = 0; r < t.length; r++) {
                              var o = t[r];
                              if (-1 === o[0] || 0 === o[0]) {
                                var i = n + o[1].length;
                                if (e === i) return [r + 1, t];
                                if (e < i) {
                                  t = t.slice();
                                  var a = e - n,
                                    s = [o[0], o[1].slice(0, a)],
                                    l = [o[0], o[1].slice(a)];
                                  return t.splice(r, 1, s, l), [r + 1, t];
                                }
                                n = i;
                              }
                            }
                            throw new Error("cursor_pos is out of bounds!");
                          })(t, e),
                          r = n[1],
                          o = n[0],
                          i = r[o],
                          a = r[o + 1];
                        if (null == i) return t;
                        if (0 !== i[0]) return t;
                        if (null != a && i[1] + a[1] === a[1] + i[1])
                          return r.splice(o, 2, a, i), s(r, o, 2);
                        if (null != a && 0 === a[1].indexOf(i[1])) {
                          r.splice(o, 2, [a[0], i[1]], [0, i[1]]);
                          var l = a[1].slice(i[1].length);
                          return (
                            l.length > 0 && r.splice(o + 2, 0, [a[0], l]),
                            s(r, o, 3)
                          );
                        }
                        return t;
                      })(f, a)),
                    (f = (function (t) {
                      for (
                        var e = !1,
                          n = function (t) {
                            return (
                              t.charCodeAt(0) >= 56320 &&
                              t.charCodeAt(0) <= 57343
                            );
                          },
                          r = 2;
                        r < t.length;
                        r += 1
                      )
                        0 === t[r - 2][0] &&
                          (o = t[r - 2][1]).charCodeAt(o.length - 1) >= 55296 &&
                          o.charCodeAt(o.length - 1) <= 56319 &&
                          -1 === t[r - 1][0] &&
                          n(t[r - 1][1]) &&
                          1 === t[r][0] &&
                          n(t[r][1]) &&
                          ((e = !0),
                          (t[r - 1][1] = t[r - 2][1].slice(-1) + t[r - 1][1]),
                          (t[r][1] = t[r - 2][1].slice(-1) + t[r][1]),
                          (t[r - 2][1] = t[r - 2][1].slice(0, -1)));
                      var o;
                      if (!e) return t;
                      var i = [];
                      for (r = 0; r < t.length; r += 1)
                        t[r][1].length > 0 && i.push(t[r]);
                      return i;
                    })(f))
                  );
                }
                function r(t, e, r, o) {
                  var i = t.substring(0, r),
                    a = e.substring(0, o),
                    s = t.substring(r),
                    l = e.substring(o),
                    u = n(i, a),
                    c = n(s, l);
                  return u.concat(c);
                }
                function o(t, e) {
                  if (!t || !e || t.charAt(0) != e.charAt(0)) return 0;
                  for (
                    var n = 0, r = Math.min(t.length, e.length), o = r, i = 0;
                    n < o;

                  )
                    t.substring(i, o) == e.substring(i, o)
                      ? (i = n = o)
                      : (r = o),
                      (o = Math.floor((r - n) / 2 + n));
                  return o;
                }
                function i(t, e) {
                  if (
                    !t ||
                    !e ||
                    t.charAt(t.length - 1) != e.charAt(e.length - 1)
                  )
                    return 0;
                  for (
                    var n = 0, r = Math.min(t.length, e.length), o = r, i = 0;
                    n < o;

                  )
                    t.substring(t.length - o, t.length - i) ==
                    e.substring(e.length - o, e.length - i)
                      ? (i = n = o)
                      : (r = o),
                      (o = Math.floor((r - n) / 2 + n));
                  return o;
                }
                var a = n;
                function s(t, e, n) {
                  for (var r = e + n - 1; r >= 0 && r >= e - 1; r--)
                    if (r + 1 < t.length) {
                      var o = t[r],
                        i = t[r + 1];
                      o[0] === i[1] && t.splice(r, 2, [o[0], o[1] + i[1]]);
                    }
                  return t;
                }
                (a.INSERT = 1), (a.DELETE = -1), (a.EQUAL = 0), (t.exports = a);
              },
              function (t, e) {
                function n(t) {
                  var e = [];
                  for (var n in t) e.push(n);
                  return e;
                }
                (t.exports =
                  "function" == typeof Object.keys ? Object.keys : n).shim = n;
              },
              function (t, e) {
                var n =
                  "[object Arguments]" ==
                  (function () {
                    return Object.prototype.toString.call(arguments);
                  })();
                function r(t) {
                  return (
                    "[object Arguments]" == Object.prototype.toString.call(t)
                  );
                }
                function o(t) {
                  return (
                    (t &&
                      "object" == typeof t &&
                      "number" == typeof t.length &&
                      Object.prototype.hasOwnProperty.call(t, "callee") &&
                      !Object.prototype.propertyIsEnumerable.call(
                        t,
                        "callee"
                      )) ||
                    !1
                  );
                }
                ((e = t.exports = n ? r : o).supported = r),
                  (e.unsupported = o);
              },
              function (t, e) {
                "use strict";
                var n = Object.prototype.hasOwnProperty,
                  r = "~";
                function o() {}
                function i(t, e, n) {
                  (this.fn = t), (this.context = e), (this.once = n || !1);
                }
                function a() {
                  (this._events = new o()), (this._eventsCount = 0);
                }
                Object.create &&
                  ((o.prototype = Object.create(null)),
                  new o().__proto__ || (r = !1)),
                  (a.prototype.eventNames = function () {
                    var t,
                      e,
                      o = [];
                    if (0 === this._eventsCount) return o;
                    for (e in (t = this._events))
                      n.call(t, e) && o.push(r ? e.slice(1) : e);
                    return Object.getOwnPropertySymbols
                      ? o.concat(Object.getOwnPropertySymbols(t))
                      : o;
                  }),
                  (a.prototype.listeners = function (t, e) {
                    var n = r ? r + t : t,
                      o = this._events[n];
                    if (e) return !!o;
                    if (!o) return [];
                    if (o.fn) return [o.fn];
                    for (var i = 0, a = o.length, s = new Array(a); i < a; i++)
                      s[i] = o[i].fn;
                    return s;
                  }),
                  (a.prototype.emit = function (t, e, n, o, i, a) {
                    var s = r ? r + t : t;
                    if (!this._events[s]) return !1;
                    var l,
                      u,
                      c = this._events[s],
                      f = arguments.length;
                    if (c.fn) {
                      switch (
                        (c.once && this.removeListener(t, c.fn, void 0, !0), f)
                      ) {
                        case 1:
                          return c.fn.call(c.context), !0;
                        case 2:
                          return c.fn.call(c.context, e), !0;
                        case 3:
                          return c.fn.call(c.context, e, n), !0;
                        case 4:
                          return c.fn.call(c.context, e, n, o), !0;
                        case 5:
                          return c.fn.call(c.context, e, n, o, i), !0;
                        case 6:
                          return c.fn.call(c.context, e, n, o, i, a), !0;
                      }
                      for (u = 1, l = new Array(f - 1); u < f; u++)
                        l[u - 1] = arguments[u];
                      c.fn.apply(c.context, l);
                    } else {
                      var h,
                        p = c.length;
                      for (u = 0; u < p; u++)
                        switch (
                          (c[u].once &&
                            this.removeListener(t, c[u].fn, void 0, !0),
                          f)
                        ) {
                          case 1:
                            c[u].fn.call(c[u].context);
                            break;
                          case 2:
                            c[u].fn.call(c[u].context, e);
                            break;
                          case 3:
                            c[u].fn.call(c[u].context, e, n);
                            break;
                          case 4:
                            c[u].fn.call(c[u].context, e, n, o);
                            break;
                          default:
                            if (!l)
                              for (h = 1, l = new Array(f - 1); h < f; h++)
                                l[h - 1] = arguments[h];
                            c[u].fn.apply(c[u].context, l);
                        }
                    }
                    return !0;
                  }),
                  (a.prototype.on = function (t, e, n) {
                    var o = new i(e, n || this),
                      a = r ? r + t : t;
                    return (
                      this._events[a]
                        ? this._events[a].fn
                          ? (this._events[a] = [this._events[a], o])
                          : this._events[a].push(o)
                        : ((this._events[a] = o), this._eventsCount++),
                      this
                    );
                  }),
                  (a.prototype.once = function (t, e, n) {
                    var o = new i(e, n || this, !0),
                      a = r ? r + t : t;
                    return (
                      this._events[a]
                        ? this._events[a].fn
                          ? (this._events[a] = [this._events[a], o])
                          : this._events[a].push(o)
                        : ((this._events[a] = o), this._eventsCount++),
                      this
                    );
                  }),
                  (a.prototype.removeListener = function (t, e, n, i) {
                    var a = r ? r + t : t;
                    if (!this._events[a]) return this;
                    if (!e)
                      return (
                        0 == --this._eventsCount
                          ? (this._events = new o())
                          : delete this._events[a],
                        this
                      );
                    var s = this._events[a];
                    if (s.fn)
                      s.fn !== e ||
                        (i && !s.once) ||
                        (n && s.context !== n) ||
                        (0 == --this._eventsCount
                          ? (this._events = new o())
                          : delete this._events[a]);
                    else {
                      for (var l = 0, u = [], c = s.length; l < c; l++)
                        (s[l].fn !== e ||
                          (i && !s[l].once) ||
                          (n && s[l].context !== n)) &&
                          u.push(s[l]);
                      u.length
                        ? (this._events[a] = 1 === u.length ? u[0] : u)
                        : 0 == --this._eventsCount
                        ? (this._events = new o())
                        : delete this._events[a];
                    }
                    return this;
                  }),
                  (a.prototype.removeAllListeners = function (t) {
                    var e;
                    return (
                      t
                        ? ((e = r ? r + t : t),
                          this._events[e] &&
                            (0 == --this._eventsCount
                              ? (this._events = new o())
                              : delete this._events[e]))
                        : ((this._events = new o()), (this._eventsCount = 0)),
                      this
                    );
                  }),
                  (a.prototype.off = a.prototype.removeListener),
                  (a.prototype.addListener = a.prototype.on),
                  (a.prototype.setMaxListeners = function () {
                    return this;
                  }),
                  (a.prefixed = r),
                  (a.EventEmitter = a),
                  void 0 !== t && (t.exports = a);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.matchText =
                    e.matchSpacing =
                    e.matchNewline =
                    e.matchBlot =
                    e.matchAttributor =
                    e.default =
                      void 0);
                var r =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (t) {
                          return typeof t;
                        }
                      : function (t) {
                          return t &&
                            "function" == typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                        },
                  o = function (t, e) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t))
                      return (function (t, e) {
                        var n = [],
                          r = !0,
                          o = !1,
                          i = void 0;
                        try {
                          for (
                            var a, s = t[Symbol.iterator]();
                            !(r = (a = s.next()).done) &&
                            (n.push(a.value), !e || n.length !== e);
                            r = !0
                          );
                        } catch (t) {
                          (o = !0), (i = t);
                        } finally {
                          try {
                            !r && s.return && s.return();
                          } finally {
                            if (o) throw i;
                          }
                        }
                        return n;
                      })(t, e);
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  },
                  i = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  a = b(n(3)),
                  s = b(n(2)),
                  l = b(n(0)),
                  u = b(n(5)),
                  c = b(n(10)),
                  f = b(n(9)),
                  h = n(36),
                  p = n(37),
                  d = b(n(13)),
                  y = n(26),
                  g = n(38),
                  m = n(39),
                  v = n(40);
                function b(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function x(t, e, n) {
                  return (
                    e in t
                      ? Object.defineProperty(t, e, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (t[e] = n),
                    t
                  );
                }
                var _ = (0, c.default)("quill:clipboard"),
                  w = "__ql-matcher",
                  A = [
                    [Node.TEXT_NODE, B],
                    [Node.TEXT_NODE, L],
                    [
                      "br",
                      function (t, e) {
                        return N(e, "\n") || e.insert("\n"), e;
                      },
                    ],
                    [Node.ELEMENT_NODE, L],
                    [Node.ELEMENT_NODE, q],
                    [Node.ELEMENT_NODE, D],
                    [Node.ELEMENT_NODE, P],
                    [
                      Node.ELEMENT_NODE,
                      function (t, e) {
                        var n = {},
                          r = t.style || {};
                        return (
                          r.fontStyle &&
                            "italic" === T(t).fontStyle &&
                            (n.italic = !0),
                          r.fontWeight &&
                            (T(t).fontWeight.startsWith("bold") ||
                              parseInt(T(t).fontWeight) >= 700) &&
                            (n.bold = !0),
                          Object.keys(n).length > 0 && (e = C(e, n)),
                          parseFloat(r.textIndent || 0) > 0 &&
                            (e = new s.default().insert("\t").concat(e)),
                          e
                        );
                      },
                    ],
                    [
                      "li",
                      function (t, e) {
                        var n = l.default.query(t);
                        if (
                          null == n ||
                          "list-item" !== n.blotName ||
                          !N(e, "\n")
                        )
                          return e;
                        for (
                          var r = -1, o = t.parentNode;
                          !o.classList.contains("ql-clipboard");

                        )
                          "list" === (l.default.query(o) || {}).blotName &&
                            (r += 1),
                            (o = o.parentNode);
                        return r <= 0
                          ? e
                          : e.compose(
                              new s.default()
                                .retain(e.length() - 1)
                                .retain(1, { indent: r })
                            );
                      },
                    ],
                    ["b", S.bind(S, "bold")],
                    ["i", S.bind(S, "italic")],
                    [
                      "style",
                      function () {
                        return new s.default();
                      },
                    ],
                  ],
                  E = [h.AlignAttribute, g.DirectionAttribute].reduce(function (
                    t,
                    e
                  ) {
                    return (t[e.keyName] = e), t;
                  },
                  {}),
                  k = [
                    h.AlignStyle,
                    p.BackgroundStyle,
                    y.ColorStyle,
                    g.DirectionStyle,
                    m.FontStyle,
                    v.SizeStyle,
                  ].reduce(function (t, e) {
                    return (t[e.keyName] = e), t;
                  }, {}),
                  O = (function (t) {
                    function e(t, n) {
                      !(function (t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e);
                      var r = (function (t, e) {
                        if (!t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return !e ||
                          ("object" != typeof e && "function" != typeof e)
                          ? t
                          : e;
                      })(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).call(
                          this,
                          t,
                          n
                        )
                      );
                      return (
                        r.quill.root.addEventListener(
                          "paste",
                          r.onPaste.bind(r)
                        ),
                        (r.container = r.quill.addContainer("ql-clipboard")),
                        r.container.setAttribute("contenteditable", !0),
                        r.container.setAttribute("tabindex", -1),
                        (r.matchers = []),
                        A.concat(r.options.matchers).forEach(function (t) {
                          var e = o(t, 2),
                            i = e[0],
                            a = e[1];
                          (n.matchVisual || a !== D) && r.addMatcher(i, a);
                        }),
                        r
                      );
                    }
                    return (
                      (function (t, e) {
                        if ("function" != typeof e && null !== e)
                          throw new TypeError(
                            "Super expression must either be null or a function, not " +
                              typeof e
                          );
                        (t.prototype = Object.create(e && e.prototype, {
                          constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0,
                          },
                        })),
                          e &&
                            (Object.setPrototypeOf
                              ? Object.setPrototypeOf(t, e)
                              : (t.__proto__ = e));
                      })(e, t),
                      i(e, [
                        {
                          key: "addMatcher",
                          value: function (t, e) {
                            this.matchers.push([t, e]);
                          },
                        },
                        {
                          key: "convert",
                          value: function (t) {
                            if ("string" == typeof t)
                              return (
                                (this.container.innerHTML = t.replace(
                                  /\>\r?\n +\</g,
                                  "><"
                                )),
                                this.convert()
                              );
                            var e = this.quill.getFormat(
                              this.quill.selection.savedRange.index
                            );
                            if (e[d.default.blotName]) {
                              var n = this.container.innerText;
                              return (
                                (this.container.innerHTML = ""),
                                new s.default().insert(
                                  n,
                                  x(
                                    {},
                                    d.default.blotName,
                                    e[d.default.blotName]
                                  )
                                )
                              );
                            }
                            var r = this.prepareMatching(),
                              i = o(r, 2),
                              a = i[0],
                              l = i[1],
                              u = (function t(e, n, r) {
                                return e.nodeType === e.TEXT_NODE
                                  ? r.reduce(function (t, n) {
                                      return n(e, t);
                                    }, new s.default())
                                  : e.nodeType === e.ELEMENT_NODE
                                  ? [].reduce.call(
                                      e.childNodes || [],
                                      function (o, i) {
                                        var a = t(i, n, r);
                                        return (
                                          i.nodeType === e.ELEMENT_NODE &&
                                            ((a = n.reduce(function (t, e) {
                                              return e(i, t);
                                            }, a)),
                                            (a = (i[w] || []).reduce(function (
                                              t,
                                              e
                                            ) {
                                              return e(i, t);
                                            },
                                            a))),
                                          o.concat(a)
                                        );
                                      },
                                      new s.default()
                                    )
                                  : new s.default();
                              })(this.container, a, l);
                            return (
                              N(u, "\n") &&
                                null == u.ops[u.ops.length - 1].attributes &&
                                (u = u.compose(
                                  new s.default()
                                    .retain(u.length() - 1)
                                    .delete(1)
                                )),
                              _.log("convert", this.container.innerHTML, u),
                              (this.container.innerHTML = ""),
                              u
                            );
                          },
                        },
                        {
                          key: "dangerouslyPasteHTML",
                          value: function (t, e) {
                            var n =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : u.default.sources.API;
                            if ("string" == typeof t)
                              this.quill.setContents(this.convert(t), e),
                                this.quill.setSelection(
                                  0,
                                  u.default.sources.SILENT
                                );
                            else {
                              var r = this.convert(e);
                              this.quill.updateContents(
                                new s.default().retain(t).concat(r),
                                n
                              ),
                                this.quill.setSelection(
                                  t + r.length(),
                                  u.default.sources.SILENT
                                );
                            }
                          },
                        },
                        {
                          key: "onPaste",
                          value: function (t) {
                            var e = this;
                            if (!t.defaultPrevented && this.quill.isEnabled()) {
                              var n = this.quill.getSelection(),
                                r = new s.default().retain(n.index),
                                o = this.quill.scrollingContainer.scrollTop;
                              this.container.focus(),
                                this.quill.selection.update(
                                  u.default.sources.SILENT
                                ),
                                setTimeout(function () {
                                  (r = r.concat(e.convert()).delete(n.length)),
                                    e.quill.updateContents(
                                      r,
                                      u.default.sources.USER
                                    ),
                                    e.quill.setSelection(
                                      r.length() - n.length,
                                      u.default.sources.SILENT
                                    ),
                                    (e.quill.scrollingContainer.scrollTop = o),
                                    e.quill.focus();
                                }, 1);
                            }
                          },
                        },
                        {
                          key: "prepareMatching",
                          value: function () {
                            var t = this,
                              e = [],
                              n = [];
                            return (
                              this.matchers.forEach(function (r) {
                                var i = o(r, 2),
                                  a = i[0],
                                  s = i[1];
                                switch (a) {
                                  case Node.TEXT_NODE:
                                    n.push(s);
                                    break;
                                  case Node.ELEMENT_NODE:
                                    e.push(s);
                                    break;
                                  default:
                                    [].forEach.call(
                                      t.container.querySelectorAll(a),
                                      function (t) {
                                        (t[w] = t[w] || []), t[w].push(s);
                                      }
                                    );
                                }
                              }),
                              [e, n]
                            );
                          },
                        },
                      ]),
                      e
                    );
                  })(f.default);
                function C(t, e, n) {
                  return "object" === (void 0 === e ? "undefined" : r(e))
                    ? Object.keys(e).reduce(function (t, n) {
                        return C(t, n, e[n]);
                      }, t)
                    : t.reduce(function (t, r) {
                        return r.attributes && r.attributes[e]
                          ? t.push(r)
                          : t.insert(
                              r.insert,
                              (0, a.default)({}, x({}, e, n), r.attributes)
                            );
                      }, new s.default());
                }
                function T(t) {
                  return t.nodeType !== Node.ELEMENT_NODE
                    ? {}
                    : t["__ql-computed-style"] ||
                        (t["__ql-computed-style"] = window.getComputedStyle(t));
                }
                function N(t, e) {
                  for (
                    var n = "", r = t.ops.length - 1;
                    r >= 0 && n.length < e.length;
                    --r
                  ) {
                    var o = t.ops[r];
                    if ("string" != typeof o.insert) break;
                    n = o.insert + n;
                  }
                  return n.slice(-1 * e.length) === e;
                }
                function j(t) {
                  if (0 === t.childNodes.length) return !1;
                  var e = T(t);
                  return ["block", "list-item"].indexOf(e.display) > -1;
                }
                function S(t, e, n) {
                  return C(n, t, !0);
                }
                function P(t, e) {
                  var n = l.default.Attributor.Attribute.keys(t),
                    r = l.default.Attributor.Class.keys(t),
                    o = l.default.Attributor.Style.keys(t),
                    i = {};
                  return (
                    n
                      .concat(r)
                      .concat(o)
                      .forEach(function (e) {
                        var n = l.default.query(e, l.default.Scope.ATTRIBUTE);
                        (null != n &&
                          ((i[n.attrName] = n.value(t)), i[n.attrName])) ||
                          (null == (n = E[e]) ||
                            (n.attrName !== e && n.keyName !== e) ||
                            (i[n.attrName] = n.value(t) || void 0),
                          null == (n = k[e]) ||
                            (n.attrName !== e && n.keyName !== e) ||
                            ((n = k[e]),
                            (i[n.attrName] = n.value(t) || void 0)));
                      }),
                    Object.keys(i).length > 0 && (e = C(e, i)),
                    e
                  );
                }
                function q(t, e) {
                  var n = l.default.query(t);
                  if (null == n) return e;
                  if (n.prototype instanceof l.default.Embed) {
                    var r = {},
                      o = n.value(t);
                    null != o &&
                      ((r[n.blotName] = o),
                      (e = new s.default().insert(r, n.formats(t))));
                  } else
                    "function" == typeof n.formats &&
                      (e = C(e, n.blotName, n.formats(t)));
                  return e;
                }
                function L(t, e) {
                  return (
                    N(e, "\n") ||
                      ((j(t) ||
                        (e.length() > 0 &&
                          t.nextSibling &&
                          j(t.nextSibling))) &&
                        e.insert("\n")),
                    e
                  );
                }
                function D(t, e) {
                  if (j(t) && null != t.nextElementSibling && !N(e, "\n\n")) {
                    var n =
                      t.offsetHeight +
                      parseFloat(T(t).marginTop) +
                      parseFloat(T(t).marginBottom);
                    t.nextElementSibling.offsetTop > t.offsetTop + 1.5 * n &&
                      e.insert("\n");
                  }
                  return e;
                }
                function B(t, e) {
                  var n = t.data;
                  if ("O:P" === t.parentNode.tagName) return e.insert(n.trim());
                  if (
                    0 === n.trim().length &&
                    t.parentNode.classList.contains("ql-clipboard")
                  )
                    return e;
                  if (!T(t.parentNode).whiteSpace.startsWith("pre")) {
                    var r = function (t, e) {
                      return (e = e.replace(/[^\u00a0]/g, "")).length < 1 && t
                        ? " "
                        : e;
                    };
                    (n = (n = n
                      .replace(/\r\n/g, " ")
                      .replace(/\n/g, " ")).replace(/\s\s+/g, r.bind(r, !0))),
                      ((null == t.previousSibling && j(t.parentNode)) ||
                        (null != t.previousSibling && j(t.previousSibling))) &&
                        (n = n.replace(/^\s+/, r.bind(r, !1))),
                      ((null == t.nextSibling && j(t.parentNode)) ||
                        (null != t.nextSibling && j(t.nextSibling))) &&
                        (n = n.replace(/\s+$/, r.bind(r, !1)));
                  }
                  return e.insert(n);
                }
                (O.DEFAULTS = { matchers: [], matchVisual: !0 }),
                  (e.default = O),
                  (e.matchAttributor = P),
                  (e.matchBlot = q),
                  (e.matchNewline = L),
                  (e.matchSpacing = D),
                  (e.matchText = B);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r,
                  o = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                      var i = Object.getPrototypeOf(e);
                      return null === i ? void 0 : t(i, n, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                  },
                  a = n(6);
                function s(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function l(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                }
                var u = (function (t) {
                  function e() {
                    return (
                      s(this, e),
                      l(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function (t, e) {
                      if ("function" != typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, t),
                    o(
                      e,
                      [
                        {
                          key: "optimize",
                          value: function (t) {
                            i(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "optimize",
                              this
                            ).call(this, t),
                              this.domNode.tagName !==
                                this.statics.tagName[0] &&
                                this.replaceWith(this.statics.blotName);
                          },
                        },
                      ],
                      [
                        {
                          key: "create",
                          value: function () {
                            return i(
                              e.__proto__ || Object.getPrototypeOf(e),
                              "create",
                              this
                            ).call(this);
                          },
                        },
                        {
                          key: "formats",
                          value: function () {
                            return !0;
                          },
                        },
                      ]
                    ),
                    e
                  );
                })(((r = a) && r.__esModule ? r : { default: r }).default);
                (u.blotName = "bold"),
                  (u.tagName = ["STRONG", "B"]),
                  (e.default = u);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.addControls = e.default = void 0);
                var r = function (t, e) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t))
                      return (function (t, e) {
                        var n = [],
                          r = !0,
                          o = !1,
                          i = void 0;
                        try {
                          for (
                            var a, s = t[Symbol.iterator]();
                            !(r = (a = s.next()).done) &&
                            (n.push(a.value), !e || n.length !== e);
                            r = !0
                          );
                        } catch (t) {
                          (o = !0), (i = t);
                        } finally {
                          try {
                            !r && s.return && s.return();
                          } finally {
                            if (o) throw i;
                          }
                        }
                        return n;
                      })(t, e);
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  },
                  o = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = c(n(2)),
                  a = c(n(0)),
                  s = c(n(5)),
                  l = c(n(10)),
                  u = c(n(9));
                function c(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function f(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                }
                var h = (0, l.default)("quill:toolbar"),
                  p = (function (t) {
                    function e(t, n) {
                      !(function (t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e);
                      var o,
                        i = f(
                          this,
                          (e.__proto__ || Object.getPrototypeOf(e)).call(
                            this,
                            t,
                            n
                          )
                        );
                      if (Array.isArray(i.options.container)) {
                        var a = document.createElement("div");
                        y(a, i.options.container),
                          t.container.parentNode.insertBefore(a, t.container),
                          (i.container = a);
                      } else
                        "string" == typeof i.options.container
                          ? (i.container = document.querySelector(
                              i.options.container
                            ))
                          : (i.container = i.options.container);
                      return i.container instanceof HTMLElement
                        ? (i.container.classList.add("ql-toolbar"),
                          (i.controls = []),
                          (i.handlers = {}),
                          Object.keys(i.options.handlers).forEach(function (t) {
                            i.addHandler(t, i.options.handlers[t]);
                          }),
                          [].forEach.call(
                            i.container.querySelectorAll("button, select"),
                            function (t) {
                              i.attach(t);
                            }
                          ),
                          i.quill.on(
                            s.default.events.EDITOR_CHANGE,
                            function (t, e) {
                              t === s.default.events.SELECTION_CHANGE &&
                                i.update(e);
                            }
                          ),
                          i.quill.on(
                            s.default.events.SCROLL_OPTIMIZE,
                            function () {
                              var t = i.quill.selection.getRange(),
                                e = r(t, 1)[0];
                              i.update(e);
                            }
                          ),
                          i)
                        : ((o = h.error(
                            "Container required for toolbar",
                            i.options
                          )),
                          f(i, o));
                    }
                    return (
                      (function (t, e) {
                        if ("function" != typeof e && null !== e)
                          throw new TypeError(
                            "Super expression must either be null or a function, not " +
                              typeof e
                          );
                        (t.prototype = Object.create(e && e.prototype, {
                          constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0,
                          },
                        })),
                          e &&
                            (Object.setPrototypeOf
                              ? Object.setPrototypeOf(t, e)
                              : (t.__proto__ = e));
                      })(e, t),
                      o(e, [
                        {
                          key: "addHandler",
                          value: function (t, e) {
                            this.handlers[t] = e;
                          },
                        },
                        {
                          key: "attach",
                          value: function (t) {
                            var e = this,
                              n = [].find.call(t.classList, function (t) {
                                return 0 === t.indexOf("ql-");
                              });
                            if (n) {
                              if (
                                ((n = n.slice("ql-".length)),
                                "BUTTON" === t.tagName &&
                                  t.setAttribute("type", "button"),
                                null == this.handlers[n])
                              ) {
                                if (
                                  null != this.quill.scroll.whitelist &&
                                  null == this.quill.scroll.whitelist[n]
                                )
                                  return void h.warn(
                                    "ignoring attaching to disabled format",
                                    n,
                                    t
                                  );
                                if (null == a.default.query(n))
                                  return void h.warn(
                                    "ignoring attaching to nonexistent format",
                                    n,
                                    t
                                  );
                              }
                              var o =
                                "SELECT" === t.tagName ? "change" : "click";
                              t.addEventListener(o, function (o) {
                                var l = void 0;
                                if ("SELECT" === t.tagName) {
                                  if (t.selectedIndex < 0) return;
                                  var u = t.options[t.selectedIndex];
                                  l =
                                    !u.hasAttribute("selected") &&
                                    (u.value || !1);
                                } else (l = !t.classList.contains("ql-active") && (t.value || !t.hasAttribute("value"))), o.preventDefault();
                                e.quill.focus();
                                var c = e.quill.selection.getRange(),
                                  f = r(c, 1)[0];
                                if (null != e.handlers[n])
                                  e.handlers[n].call(e, l);
                                else if (
                                  a.default.query(n).prototype instanceof
                                  a.default.Embed
                                ) {
                                  if (!(l = prompt("Enter " + n))) return;
                                  e.quill.updateContents(
                                    new i.default()
                                      .retain(f.index)
                                      .delete(f.length)
                                      .insert(
                                        (function (t, e, n) {
                                          return (
                                            e in t
                                              ? Object.defineProperty(t, e, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                                })
                                              : (t[e] = n),
                                            t
                                          );
                                        })({}, n, l)
                                      ),
                                    s.default.sources.USER
                                  );
                                } else
                                  e.quill.format(n, l, s.default.sources.USER);
                                e.update(f);
                              }),
                                this.controls.push([n, t]);
                            }
                          },
                        },
                        {
                          key: "update",
                          value: function (t) {
                            var e = null == t ? {} : this.quill.getFormat(t);
                            this.controls.forEach(function (n) {
                              var o = r(n, 2),
                                i = o[0],
                                a = o[1];
                              if ("SELECT" === a.tagName) {
                                var s = void 0;
                                if (null == t) s = null;
                                else if (null == e[i])
                                  s = a.querySelector("option[selected]");
                                else if (!Array.isArray(e[i])) {
                                  var l = e[i];
                                  "string" == typeof l &&
                                    (l = l.replace(/\"/g, '\\"')),
                                    (s = a.querySelector(
                                      'option[value="' + l + '"]'
                                    ));
                                }
                                null == s
                                  ? ((a.value = ""), (a.selectedIndex = -1))
                                  : (s.selected = !0);
                              } else if (null == t)
                                a.classList.remove("ql-active");
                              else if (a.hasAttribute("value")) {
                                var u =
                                  e[i] === a.getAttribute("value") ||
                                  (null != e[i] &&
                                    e[i].toString() ===
                                      a.getAttribute("value")) ||
                                  (null == e[i] && !a.getAttribute("value"));
                                a.classList.toggle("ql-active", u);
                              } else
                                a.classList.toggle("ql-active", null != e[i]);
                            });
                          },
                        },
                      ]),
                      e
                    );
                  })(u.default);
                function d(t, e, n) {
                  var r = document.createElement("button");
                  r.setAttribute("type", "button"),
                    r.classList.add("ql-" + e),
                    null != n && (r.value = n),
                    t.appendChild(r);
                }
                function y(t, e) {
                  Array.isArray(e[0]) || (e = [e]),
                    e.forEach(function (e) {
                      var n = document.createElement("span");
                      n.classList.add("ql-formats"),
                        e.forEach(function (t) {
                          if ("string" == typeof t) d(n, t);
                          else {
                            var e = Object.keys(t)[0],
                              r = t[e];
                            Array.isArray(r)
                              ? (function (t, e, n) {
                                  var r = document.createElement("select");
                                  r.classList.add("ql-" + e),
                                    n.forEach(function (t) {
                                      var e = document.createElement("option");
                                      !1 !== t
                                        ? e.setAttribute("value", t)
                                        : e.setAttribute(
                                            "selected",
                                            "selected"
                                          ),
                                        r.appendChild(e);
                                    }),
                                    t.appendChild(r);
                                })(n, e, r)
                              : d(n, e, r);
                          }
                        }),
                        t.appendChild(n);
                    });
                }
                (p.DEFAULTS = {}),
                  (p.DEFAULTS = {
                    container: null,
                    handlers: {
                      clean: function () {
                        var t = this,
                          e = this.quill.getSelection();
                        if (null != e)
                          if (0 == e.length) {
                            var n = this.quill.getFormat();
                            Object.keys(n).forEach(function (e) {
                              null !=
                                a.default.query(e, a.default.Scope.INLINE) &&
                                t.quill.format(e, !1);
                            });
                          } else
                            this.quill.removeFormat(e, s.default.sources.USER);
                      },
                      direction: function (t) {
                        var e = this.quill.getFormat().align;
                        "rtl" === t && null == e
                          ? this.quill.format(
                              "align",
                              "right",
                              s.default.sources.USER
                            )
                          : t ||
                            "right" !== e ||
                            this.quill.format(
                              "align",
                              !1,
                              s.default.sources.USER
                            ),
                          this.quill.format(
                            "direction",
                            t,
                            s.default.sources.USER
                          );
                      },
                      indent: function (t) {
                        var e = this.quill.getSelection(),
                          n = this.quill.getFormat(e),
                          r = parseInt(n.indent || 0);
                        if ("+1" === t || "-1" === t) {
                          var o = "+1" === t ? 1 : -1;
                          "rtl" === n.direction && (o *= -1),
                            this.quill.format(
                              "indent",
                              r + o,
                              s.default.sources.USER
                            );
                        }
                      },
                      link: function (t) {
                        !0 === t && (t = prompt("Enter link URL:")),
                          this.quill.format("link", t, s.default.sources.USER);
                      },
                      list: function (t) {
                        var e = this.quill.getSelection(),
                          n = this.quill.getFormat(e);
                        "check" === t
                          ? "checked" === n.list || "unchecked" === n.list
                            ? this.quill.format(
                                "list",
                                !1,
                                s.default.sources.USER
                              )
                            : this.quill.format(
                                "list",
                                "unchecked",
                                s.default.sources.USER
                              )
                          : this.quill.format(
                              "list",
                              t,
                              s.default.sources.USER
                            );
                      },
                    },
                  }),
                  (e.default = p),
                  (e.addControls = y);
              },
              function (t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>';
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r,
                  o = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                      var i = Object.getPrototypeOf(e);
                      return null === i ? void 0 : t(i, n, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                  },
                  a = n(28),
                  s = (function (t) {
                    function e(t, n) {
                      !(function (t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e);
                      var r = (function (t, e) {
                        if (!t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return !e ||
                          ("object" != typeof e && "function" != typeof e)
                          ? t
                          : e;
                      })(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)
                      );
                      return (
                        (r.label.innerHTML = n),
                        r.container.classList.add("ql-color-picker"),
                        [].slice
                          .call(
                            r.container.querySelectorAll(".ql-picker-item"),
                            0,
                            7
                          )
                          .forEach(function (t) {
                            t.classList.add("ql-primary");
                          }),
                        r
                      );
                    }
                    return (
                      (function (t, e) {
                        if ("function" != typeof e && null !== e)
                          throw new TypeError(
                            "Super expression must either be null or a function, not " +
                              typeof e
                          );
                        (t.prototype = Object.create(e && e.prototype, {
                          constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0,
                          },
                        })),
                          e &&
                            (Object.setPrototypeOf
                              ? Object.setPrototypeOf(t, e)
                              : (t.__proto__ = e));
                      })(e, t),
                      o(e, [
                        {
                          key: "buildItem",
                          value: function (t) {
                            var n = i(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "buildItem",
                              this
                            ).call(this, t);
                            return (
                              (n.style.backgroundColor =
                                t.getAttribute("value") || ""),
                              n
                            );
                          },
                        },
                        {
                          key: "selectItem",
                          value: function (t, n) {
                            i(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "selectItem",
                              this
                            ).call(this, t, n);
                            var r = this.label.querySelector(".ql-color-label"),
                              o = (t && t.getAttribute("data-value")) || "";
                            r &&
                              ("line" === r.tagName
                                ? (r.style.stroke = o)
                                : (r.style.fill = o));
                          },
                        },
                      ]),
                      e
                    );
                  })(((r = a) && r.__esModule ? r : { default: r }).default);
                e.default = s;
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r,
                  o = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = n(28),
                  a = (function (t) {
                    function e(t, n) {
                      !(function (t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, e);
                      var r = (function (t, e) {
                        if (!t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return !e ||
                          ("object" != typeof e && "function" != typeof e)
                          ? t
                          : e;
                      })(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)
                      );
                      return (
                        r.container.classList.add("ql-icon-picker"),
                        [].forEach.call(
                          r.container.querySelectorAll(".ql-picker-item"),
                          function (t) {
                            t.innerHTML = n[t.getAttribute("data-value") || ""];
                          }
                        ),
                        (r.defaultItem =
                          r.container.querySelector(".ql-selected")),
                        r.selectItem(r.defaultItem),
                        r
                      );
                    }
                    return (
                      (function (t, e) {
                        if ("function" != typeof e && null !== e)
                          throw new TypeError(
                            "Super expression must either be null or a function, not " +
                              typeof e
                          );
                        (t.prototype = Object.create(e && e.prototype, {
                          constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0,
                          },
                        })),
                          e &&
                            (Object.setPrototypeOf
                              ? Object.setPrototypeOf(t, e)
                              : (t.__proto__ = e));
                      })(e, t),
                      o(e, [
                        {
                          key: "selectItem",
                          value: function (t, n) {
                            (function t(e, n, r) {
                              null === e && (e = Function.prototype);
                              var o = Object.getOwnPropertyDescriptor(e, n);
                              if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, n, r);
                              }
                              if ("value" in o) return o.value;
                              var a = o.get;
                              return void 0 !== a ? a.call(r) : void 0;
                            })(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "selectItem",
                              this
                            ).call(this, t, n),
                              (t = t || this.defaultItem),
                              (this.label.innerHTML = t.innerHTML);
                          },
                        },
                      ]),
                      e
                    );
                  })(((r = i) && r.__esModule ? r : { default: r }).default);
                e.default = a;
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  o = (function () {
                    function t(e, n) {
                      var r = this;
                      !(function (t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, t),
                        (this.quill = e),
                        (this.boundsContainer = n || document.body),
                        (this.root = e.addContainer("ql-tooltip")),
                        (this.root.innerHTML = this.constructor.TEMPLATE),
                        this.quill.root === this.quill.scrollingContainer &&
                          this.quill.root.addEventListener(
                            "scroll",
                            function () {
                              r.root.style.marginTop =
                                -1 * r.quill.root.scrollTop + "px";
                            }
                          ),
                        this.hide();
                    }
                    return (
                      r(t, [
                        {
                          key: "hide",
                          value: function () {
                            this.root.classList.add("ql-hidden");
                          },
                        },
                        {
                          key: "position",
                          value: function (t) {
                            var e =
                                t.left +
                                t.width / 2 -
                                this.root.offsetWidth / 2,
                              n = t.bottom + this.quill.root.scrollTop;
                            (this.root.style.left = e + "px"),
                              (this.root.style.top = n + "px"),
                              this.root.classList.remove("ql-flip");
                            var r =
                                this.boundsContainer.getBoundingClientRect(),
                              o = this.root.getBoundingClientRect(),
                              i = 0;
                            if (
                              (o.right > r.right &&
                                ((i = r.right - o.right),
                                (this.root.style.left = e + i + "px")),
                              o.left < r.left &&
                                ((i = r.left - o.left),
                                (this.root.style.left = e + i + "px")),
                              o.bottom > r.bottom)
                            ) {
                              var a = o.bottom - o.top,
                                s = t.bottom - t.top + a;
                              (this.root.style.top = n - s + "px"),
                                this.root.classList.add("ql-flip");
                            }
                            return i;
                          },
                        },
                        {
                          key: "show",
                          value: function () {
                            this.root.classList.remove("ql-editing"),
                              this.root.classList.remove("ql-hidden");
                          },
                        },
                      ]),
                      t
                    );
                  })();
                e.default = o;
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = function (t, e) {
                    if (Array.isArray(t)) return t;
                    if (Symbol.iterator in Object(t))
                      return (function (t, e) {
                        var n = [],
                          r = !0,
                          o = !1,
                          i = void 0;
                        try {
                          for (
                            var a, s = t[Symbol.iterator]();
                            !(r = (a = s.next()).done) &&
                            (n.push(a.value), !e || n.length !== e);
                            r = !0
                          );
                        } catch (t) {
                          (o = !0), (i = t);
                        } finally {
                          try {
                            !r && s.return && s.return();
                          } finally {
                            if (o) throw i;
                          }
                        }
                        return n;
                      })(t, e);
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance"
                    );
                  },
                  o = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                      var i = Object.getPrototypeOf(e);
                      return null === i ? void 0 : t(i, n, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                  },
                  i = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  a = p(n(3)),
                  s = p(n(8)),
                  l = n(43),
                  u = p(l),
                  c = p(n(27)),
                  f = n(15),
                  h = p(n(41));
                function p(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function d(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function y(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                }
                function g(t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                }
                var m = [
                    [{ header: ["1", "2", "3", !1] }],
                    ["bold", "italic", "underline", "link"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["clean"],
                  ],
                  v = (function (t) {
                    function e(t, n) {
                      d(this, e),
                        null != n.modules.toolbar &&
                          null == n.modules.toolbar.container &&
                          (n.modules.toolbar.container = m);
                      var r = y(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).call(
                          this,
                          t,
                          n
                        )
                      );
                      return r.quill.container.classList.add("ql-snow"), r;
                    }
                    return (
                      g(e, t),
                      i(e, [
                        {
                          key: "extendToolbar",
                          value: function (t) {
                            t.container.classList.add("ql-snow"),
                              this.buildButtons(
                                [].slice.call(
                                  t.container.querySelectorAll("button")
                                ),
                                h.default
                              ),
                              this.buildPickers(
                                [].slice.call(
                                  t.container.querySelectorAll("select")
                                ),
                                h.default
                              ),
                              (this.tooltip = new b(
                                this.quill,
                                this.options.bounds
                              )),
                              t.container.querySelector(".ql-link") &&
                                this.quill.keyboard.addBinding(
                                  { key: "K", shortKey: !0 },
                                  function (e, n) {
                                    t.handlers.link.call(t, !n.format.link);
                                  }
                                );
                          },
                        },
                      ]),
                      e
                    );
                  })(u.default);
                v.DEFAULTS = (0, a.default)(!0, {}, u.default.DEFAULTS, {
                  modules: {
                    toolbar: {
                      handlers: {
                        link: function (t) {
                          if (t) {
                            var e = this.quill.getSelection();
                            if (null == e || 0 == e.length) return;
                            var n = this.quill.getText(e);
                            /^\S+@\S+\.\S+$/.test(n) &&
                              0 !== n.indexOf("mailto:") &&
                              (n = "mailto:" + n),
                              this.quill.theme.tooltip.edit("link", n);
                          } else this.quill.format("link", !1);
                        },
                      },
                    },
                  },
                });
                var b = (function (t) {
                  function e(t, n) {
                    d(this, e);
                    var r = y(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
                    );
                    return (
                      (r.preview = r.root.querySelector("a.ql-preview")), r
                    );
                  }
                  return (
                    g(e, t),
                    i(e, [
                      {
                        key: "listen",
                        value: function () {
                          var t = this;
                          o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "listen",
                            this
                          ).call(this),
                            this.root
                              .querySelector("a.ql-action")
                              .addEventListener("click", function (e) {
                                t.root.classList.contains("ql-editing")
                                  ? t.save()
                                  : t.edit("link", t.preview.textContent),
                                  e.preventDefault();
                              }),
                            this.root
                              .querySelector("a.ql-remove")
                              .addEventListener("click", function (e) {
                                if (null != t.linkRange) {
                                  var n = t.linkRange;
                                  t.restoreFocus(),
                                    t.quill.formatText(
                                      n,
                                      "link",
                                      !1,
                                      s.default.sources.USER
                                    ),
                                    delete t.linkRange;
                                }
                                e.preventDefault(), t.hide();
                              }),
                            this.quill.on(
                              s.default.events.SELECTION_CHANGE,
                              function (e, n, o) {
                                if (null != e) {
                                  if (
                                    0 === e.length &&
                                    o === s.default.sources.USER
                                  ) {
                                    var i = t.quill.scroll.descendant(
                                        c.default,
                                        e.index
                                      ),
                                      a = r(i, 2),
                                      l = a[0],
                                      u = a[1];
                                    if (null != l) {
                                      t.linkRange = new f.Range(
                                        e.index - u,
                                        l.length()
                                      );
                                      var h = c.default.formats(l.domNode);
                                      return (
                                        (t.preview.textContent = h),
                                        t.preview.setAttribute("href", h),
                                        t.show(),
                                        void t.position(
                                          t.quill.getBounds(t.linkRange)
                                        )
                                      );
                                    }
                                  } else delete t.linkRange;
                                  t.hide();
                                }
                              }
                            );
                        },
                      },
                      {
                        key: "show",
                        value: function () {
                          o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "show",
                            this
                          ).call(this),
                            this.root.removeAttribute("data-mode");
                        },
                      },
                    ]),
                    e
                  );
                })(l.BaseTooltip);
                (b.TEMPLATE = [
                  '<a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a>',
                  '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
                  '<a class="ql-action"></a>',
                  '<a class="ql-remove"></a>',
                ].join("")),
                  (e.default = v);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r = D(n(29)),
                  o = n(36),
                  i = n(38),
                  a = n(64),
                  s = D(n(65)),
                  l = D(n(66)),
                  u = n(67),
                  c = D(u),
                  f = n(37),
                  h = n(26),
                  p = n(39),
                  d = n(40),
                  y = D(n(56)),
                  g = D(n(68)),
                  m = D(n(27)),
                  v = D(n(69)),
                  b = D(n(70)),
                  x = D(n(71)),
                  _ = D(n(72)),
                  w = D(n(73)),
                  A = n(13),
                  E = D(A),
                  k = D(n(74)),
                  O = D(n(75)),
                  C = D(n(57)),
                  T = D(n(41)),
                  N = D(n(28)),
                  j = D(n(59)),
                  S = D(n(60)),
                  P = D(n(61)),
                  q = D(n(108)),
                  L = D(n(62));
                function D(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                r.default.register(
                  {
                    "attributors/attribute/direction": i.DirectionAttribute,
                    "attributors/class/align": o.AlignClass,
                    "attributors/class/background": f.BackgroundClass,
                    "attributors/class/color": h.ColorClass,
                    "attributors/class/direction": i.DirectionClass,
                    "attributors/class/font": p.FontClass,
                    "attributors/class/size": d.SizeClass,
                    "attributors/style/align": o.AlignStyle,
                    "attributors/style/background": f.BackgroundStyle,
                    "attributors/style/color": h.ColorStyle,
                    "attributors/style/direction": i.DirectionStyle,
                    "attributors/style/font": p.FontStyle,
                    "attributors/style/size": d.SizeStyle,
                  },
                  !0
                ),
                  r.default.register(
                    {
                      "formats/align": o.AlignClass,
                      "formats/direction": i.DirectionClass,
                      "formats/indent": a.IndentClass,
                      "formats/background": f.BackgroundStyle,
                      "formats/color": h.ColorStyle,
                      "formats/font": p.FontClass,
                      "formats/size": d.SizeClass,
                      "formats/blockquote": s.default,
                      "formats/code-block": E.default,
                      "formats/header": l.default,
                      "formats/list": c.default,
                      "formats/bold": y.default,
                      "formats/code": A.Code,
                      "formats/italic": g.default,
                      "formats/link": m.default,
                      "formats/script": v.default,
                      "formats/strike": b.default,
                      "formats/underline": x.default,
                      "formats/image": _.default,
                      "formats/video": w.default,
                      "formats/list/item": u.ListItem,
                      "modules/formula": k.default,
                      "modules/syntax": O.default,
                      "modules/toolbar": C.default,
                      "themes/bubble": q.default,
                      "themes/snow": L.default,
                      "ui/icons": T.default,
                      "ui/picker": N.default,
                      "ui/icon-picker": S.default,
                      "ui/color-picker": j.default,
                      "ui/tooltip": P.default,
                    },
                    !0
                  ),
                  (e.default = r.default);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.IndentClass = void 0);
                var r,
                  o = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                      var i = Object.getPrototypeOf(e);
                      return null === i ? void 0 : t(i, n, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                  },
                  a = n(0),
                  s = (r = a) && r.__esModule ? r : { default: r };
                function l(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function u(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                }
                var c = new ((function (t) {
                  function e() {
                    return (
                      l(this, e),
                      u(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function (t, e) {
                      if ("function" != typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, t),
                    o(e, [
                      {
                        key: "add",
                        value: function (t, n) {
                          if ("+1" === n || "-1" === n) {
                            var r = this.value(t) || 0;
                            n = "+1" === n ? r + 1 : r - 1;
                          }
                          return 0 === n
                            ? (this.remove(t), !0)
                            : i(
                                e.prototype.__proto__ ||
                                  Object.getPrototypeOf(e.prototype),
                                "add",
                                this
                              ).call(this, t, n);
                        },
                      },
                      {
                        key: "canAdd",
                        value: function (t, n) {
                          return (
                            i(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "canAdd",
                              this
                            ).call(this, t, n) ||
                            i(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "canAdd",
                              this
                            ).call(this, t, parseInt(n))
                          );
                        },
                      },
                      {
                        key: "value",
                        value: function (t) {
                          return (
                            parseInt(
                              i(
                                e.prototype.__proto__ ||
                                  Object.getPrototypeOf(e.prototype),
                                "value",
                                this
                              ).call(this, t)
                            ) || void 0
                          );
                        },
                      },
                    ]),
                    e
                  );
                })(s.default.Attributor.Class))("indent", "ql-indent", {
                  scope: s.default.Scope.BLOCK,
                  whitelist: [1, 2, 3, 4, 5, 6, 7, 8],
                });
                e.IndentClass = c;
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r,
                  o = n(4);
                function i(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function a(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                }
                var s = (function (t) {
                  function e() {
                    return (
                      i(this, e),
                      a(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function (t, e) {
                      if ("function" != typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, t),
                    e
                  );
                })(((r = o) && r.__esModule ? r : { default: r }).default);
                (s.blotName = "blockquote"),
                  (s.tagName = "blockquote"),
                  (e.default = s);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r,
                  o = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = n(4);
                function a(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function s(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                }
                var l = (function (t) {
                  function e() {
                    return (
                      a(this, e),
                      s(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function (t, e) {
                      if ("function" != typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, t),
                    o(e, null, [
                      {
                        key: "formats",
                        value: function (t) {
                          return this.tagName.indexOf(t.tagName) + 1;
                        },
                      },
                    ]),
                    e
                  );
                })(((r = i) && r.__esModule ? r : { default: r }).default);
                (l.blotName = "header"),
                  (l.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"]),
                  (e.default = l);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.default = e.ListItem = void 0);
                var r = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  o = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                      var i = Object.getPrototypeOf(e);
                      return null === i ? void 0 : t(i, n, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                  },
                  i = l(n(0)),
                  a = l(n(4)),
                  s = l(n(25));
                function l(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function u(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function c(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                }
                function f(t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                }
                var h = (function (t) {
                  function e() {
                    return (
                      u(this, e),
                      c(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    f(e, t),
                    r(
                      e,
                      [
                        {
                          key: "format",
                          value: function (t, n) {
                            t !== p.blotName || n
                              ? o(
                                  e.prototype.__proto__ ||
                                    Object.getPrototypeOf(e.prototype),
                                  "format",
                                  this
                                ).call(this, t, n)
                              : this.replaceWith(
                                  i.default.create(this.statics.scope)
                                );
                          },
                        },
                        {
                          key: "remove",
                          value: function () {
                            null == this.prev && null == this.next
                              ? this.parent.remove()
                              : o(
                                  e.prototype.__proto__ ||
                                    Object.getPrototypeOf(e.prototype),
                                  "remove",
                                  this
                                ).call(this);
                          },
                        },
                        {
                          key: "replaceWith",
                          value: function (t, n) {
                            return (
                              this.parent.isolate(
                                this.offset(this.parent),
                                this.length()
                              ),
                              t === this.parent.statics.blotName
                                ? (this.parent.replaceWith(t, n), this)
                                : (this.parent.unwrap(),
                                  o(
                                    e.prototype.__proto__ ||
                                      Object.getPrototypeOf(e.prototype),
                                    "replaceWith",
                                    this
                                  ).call(this, t, n))
                            );
                          },
                        },
                      ],
                      [
                        {
                          key: "formats",
                          value: function (t) {
                            return t.tagName === this.tagName
                              ? void 0
                              : o(
                                  e.__proto__ || Object.getPrototypeOf(e),
                                  "formats",
                                  this
                                ).call(this, t);
                          },
                        },
                      ]
                    ),
                    e
                  );
                })(a.default);
                (h.blotName = "list-item"), (h.tagName = "LI");
                var p = (function (t) {
                  function e(t) {
                    u(this, e);
                    var n = c(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).call(this, t)
                      ),
                      r = function (e) {
                        if (e.target.parentNode === t) {
                          var r = n.statics.formats(t),
                            o = i.default.find(e.target);
                          "checked" === r
                            ? o.format("list", "unchecked")
                            : "unchecked" === r && o.format("list", "checked");
                        }
                      };
                    return (
                      t.addEventListener("touchstart", r),
                      t.addEventListener("mousedown", r),
                      n
                    );
                  }
                  return (
                    f(e, t),
                    r(e, null, [
                      {
                        key: "create",
                        value: function (t) {
                          var n = "ordered" === t ? "OL" : "UL",
                            r = o(
                              e.__proto__ || Object.getPrototypeOf(e),
                              "create",
                              this
                            ).call(this, n);
                          return (
                            ("checked" !== t && "unchecked" !== t) ||
                              r.setAttribute("data-checked", "checked" === t),
                            r
                          );
                        },
                      },
                      {
                        key: "formats",
                        value: function (t) {
                          return "OL" === t.tagName
                            ? "ordered"
                            : "UL" === t.tagName
                            ? t.hasAttribute("data-checked")
                              ? "true" === t.getAttribute("data-checked")
                                ? "checked"
                                : "unchecked"
                              : "bullet"
                            : void 0;
                        },
                      },
                    ]),
                    r(e, [
                      {
                        key: "format",
                        value: function (t, e) {
                          this.children.length > 0 &&
                            this.children.tail.format(t, e);
                        },
                      },
                      {
                        key: "formats",
                        value: function () {
                          return (
                            (t = {}),
                            (e = this.statics.blotName),
                            (n = this.statics.formats(this.domNode)),
                            e in t
                              ? Object.defineProperty(t, e, {
                                  value: n,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                                })
                              : (t[e] = n),
                            t
                          );
                          var t, e, n;
                        },
                      },
                      {
                        key: "insertBefore",
                        value: function (t, n) {
                          if (t instanceof h)
                            o(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "insertBefore",
                              this
                            ).call(this, t, n);
                          else {
                            var r = null == n ? this.length() : n.offset(this),
                              i = this.split(r);
                            i.parent.insertBefore(t, i);
                          }
                        },
                      },
                      {
                        key: "optimize",
                        value: function (t) {
                          o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "optimize",
                            this
                          ).call(this, t);
                          var n = this.next;
                          null != n &&
                            n.prev === this &&
                            n.statics.blotName === this.statics.blotName &&
                            n.domNode.tagName === this.domNode.tagName &&
                            n.domNode.getAttribute("data-checked") ===
                              this.domNode.getAttribute("data-checked") &&
                            (n.moveChildren(this), n.remove());
                        },
                      },
                      {
                        key: "replace",
                        value: function (t) {
                          if (t.statics.blotName !== this.statics.blotName) {
                            var n = i.default.create(this.statics.defaultChild);
                            t.moveChildren(n), this.appendChild(n);
                          }
                          o(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "replace",
                            this
                          ).call(this, t);
                        },
                      },
                    ]),
                    e
                  );
                })(s.default);
                (p.blotName = "list"),
                  (p.scope = i.default.Scope.BLOCK_BLOT),
                  (p.tagName = ["OL", "UL"]),
                  (p.defaultChild = "list-item"),
                  (p.allowedChildren = [h]),
                  (e.ListItem = h),
                  (e.default = p);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r,
                  o = n(56);
                function i(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function a(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                }
                var s = (function (t) {
                  function e() {
                    return (
                      i(this, e),
                      a(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function (t, e) {
                      if ("function" != typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, t),
                    e
                  );
                })(((r = o) && r.__esModule ? r : { default: r }).default);
                (s.blotName = "italic"),
                  (s.tagName = ["EM", "I"]),
                  (e.default = s);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r,
                  o = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = n(6);
                function a(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function s(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                }
                var l = (function (t) {
                  function e() {
                    return (
                      a(this, e),
                      s(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function (t, e) {
                      if ("function" != typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, t),
                    o(e, null, [
                      {
                        key: "create",
                        value: function (t) {
                          return "super" === t
                            ? document.createElement("sup")
                            : "sub" === t
                            ? document.createElement("sub")
                            : (function t(e, n, r) {
                                null === e && (e = Function.prototype);
                                var o = Object.getOwnPropertyDescriptor(e, n);
                                if (void 0 === o) {
                                  var i = Object.getPrototypeOf(e);
                                  return null === i ? void 0 : t(i, n, r);
                                }
                                if ("value" in o) return o.value;
                                var a = o.get;
                                return void 0 !== a ? a.call(r) : void 0;
                              })(
                                e.__proto__ || Object.getPrototypeOf(e),
                                "create",
                                this
                              ).call(this, t);
                        },
                      },
                      {
                        key: "formats",
                        value: function (t) {
                          return "SUB" === t.tagName
                            ? "sub"
                            : "SUP" === t.tagName
                            ? "super"
                            : void 0;
                        },
                      },
                    ]),
                    e
                  );
                })(((r = i) && r.__esModule ? r : { default: r }).default);
                (l.blotName = "script"),
                  (l.tagName = ["SUB", "SUP"]),
                  (e.default = l);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r,
                  o = n(6);
                function i(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function a(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                }
                var s = (function (t) {
                  function e() {
                    return (
                      i(this, e),
                      a(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function (t, e) {
                      if ("function" != typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, t),
                    e
                  );
                })(((r = o) && r.__esModule ? r : { default: r }).default);
                (s.blotName = "strike"), (s.tagName = "S"), (e.default = s);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r,
                  o = n(6);
                function i(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function a(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                }
                var s = (function (t) {
                  function e() {
                    return (
                      i(this, e),
                      a(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function (t, e) {
                      if ("function" != typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(e, t),
                    e
                  );
                })(((r = o) && r.__esModule ? r : { default: r }).default);
                (s.blotName = "underline"), (s.tagName = "U"), (e.default = s);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r,
                  o = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                      var i = Object.getPrototypeOf(e);
                      return null === i ? void 0 : t(i, n, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                  },
                  a = n(0),
                  s = (r = a) && r.__esModule ? r : { default: r },
                  l = n(27);
                function u(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function c(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                }
                var f = ["alt", "height", "width"],
                  h = (function (t) {
                    function e() {
                      return (
                        u(this, e),
                        c(
                          this,
                          (e.__proto__ || Object.getPrototypeOf(e)).apply(
                            this,
                            arguments
                          )
                        )
                      );
                    }
                    return (
                      (function (t, e) {
                        if ("function" != typeof e && null !== e)
                          throw new TypeError(
                            "Super expression must either be null or a function, not " +
                              typeof e
                          );
                        (t.prototype = Object.create(e && e.prototype, {
                          constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0,
                          },
                        })),
                          e &&
                            (Object.setPrototypeOf
                              ? Object.setPrototypeOf(t, e)
                              : (t.__proto__ = e));
                      })(e, t),
                      o(
                        e,
                        [
                          {
                            key: "format",
                            value: function (t, n) {
                              f.indexOf(t) > -1
                                ? n
                                  ? this.domNode.setAttribute(t, n)
                                  : this.domNode.removeAttribute(t)
                                : i(
                                    e.prototype.__proto__ ||
                                      Object.getPrototypeOf(e.prototype),
                                    "format",
                                    this
                                  ).call(this, t, n);
                            },
                          },
                        ],
                        [
                          {
                            key: "create",
                            value: function (t) {
                              var n = i(
                                e.__proto__ || Object.getPrototypeOf(e),
                                "create",
                                this
                              ).call(this, t);
                              return (
                                "string" == typeof t &&
                                  n.setAttribute("src", this.sanitize(t)),
                                n
                              );
                            },
                          },
                          {
                            key: "formats",
                            value: function (t) {
                              return f.reduce(function (e, n) {
                                return (
                                  t.hasAttribute(n) &&
                                    (e[n] = t.getAttribute(n)),
                                  e
                                );
                              }, {});
                            },
                          },
                          {
                            key: "match",
                            value: function (t) {
                              return (
                                /\.(jpe?g|gif|png)$/.test(t) ||
                                /^data:image\/.+;base64/.test(t)
                              );
                            },
                          },
                          {
                            key: "sanitize",
                            value: function (t) {
                              return (0, l.sanitize)(t, [
                                "http",
                                "https",
                                "data",
                              ])
                                ? t
                                : "//:0";
                            },
                          },
                          {
                            key: "value",
                            value: function (t) {
                              return t.getAttribute("src");
                            },
                          },
                        ]
                      ),
                      e
                    );
                  })(s.default.Embed);
                (h.blotName = "image"), (h.tagName = "IMG"), (e.default = h);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var r,
                  o = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                      var i = Object.getPrototypeOf(e);
                      return null === i ? void 0 : t(i, n, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                  },
                  a = n(4),
                  s = n(27),
                  l = (r = s) && r.__esModule ? r : { default: r };
                function u(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function c(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                }
                var f = ["height", "width"],
                  h = (function (t) {
                    function e() {
                      return (
                        u(this, e),
                        c(
                          this,
                          (e.__proto__ || Object.getPrototypeOf(e)).apply(
                            this,
                            arguments
                          )
                        )
                      );
                    }
                    return (
                      (function (t, e) {
                        if ("function" != typeof e && null !== e)
                          throw new TypeError(
                            "Super expression must either be null or a function, not " +
                              typeof e
                          );
                        (t.prototype = Object.create(e && e.prototype, {
                          constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0,
                          },
                        })),
                          e &&
                            (Object.setPrototypeOf
                              ? Object.setPrototypeOf(t, e)
                              : (t.__proto__ = e));
                      })(e, t),
                      o(
                        e,
                        [
                          {
                            key: "format",
                            value: function (t, n) {
                              f.indexOf(t) > -1
                                ? n
                                  ? this.domNode.setAttribute(t, n)
                                  : this.domNode.removeAttribute(t)
                                : i(
                                    e.prototype.__proto__ ||
                                      Object.getPrototypeOf(e.prototype),
                                    "format",
                                    this
                                  ).call(this, t, n);
                            },
                          },
                        ],
                        [
                          {
                            key: "create",
                            value: function (t) {
                              var n = i(
                                e.__proto__ || Object.getPrototypeOf(e),
                                "create",
                                this
                              ).call(this, t);
                              return (
                                n.setAttribute("frameborder", "0"),
                                n.setAttribute("allowfullscreen", !0),
                                n.setAttribute("src", this.sanitize(t)),
                                n
                              );
                            },
                          },
                          {
                            key: "formats",
                            value: function (t) {
                              return f.reduce(function (e, n) {
                                return (
                                  t.hasAttribute(n) &&
                                    (e[n] = t.getAttribute(n)),
                                  e
                                );
                              }, {});
                            },
                          },
                          {
                            key: "sanitize",
                            value: function (t) {
                              return l.default.sanitize(t);
                            },
                          },
                          {
                            key: "value",
                            value: function (t) {
                              return t.getAttribute("src");
                            },
                          },
                        ]
                      ),
                      e
                    );
                  })(a.BlockEmbed);
                (h.blotName = "video"),
                  (h.className = "ql-video"),
                  (h.tagName = "IFRAME"),
                  (e.default = h);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.default = e.FormulaBlot = void 0);
                var r = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  o = s(n(35)),
                  i = s(n(5)),
                  a = s(n(9));
                function s(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function l(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function u(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                }
                function c(t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                }
                var f = (function (t) {
                  function e() {
                    return (
                      l(this, e),
                      u(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    c(e, t),
                    r(e, null, [
                      {
                        key: "create",
                        value: function (t) {
                          var n = (function t(e, n, r) {
                            null === e && (e = Function.prototype);
                            var o = Object.getOwnPropertyDescriptor(e, n);
                            if (void 0 === o) {
                              var i = Object.getPrototypeOf(e);
                              return null === i ? void 0 : t(i, n, r);
                            }
                            if ("value" in o) return o.value;
                            var a = o.get;
                            return void 0 !== a ? a.call(r) : void 0;
                          })(
                            e.__proto__ || Object.getPrototypeOf(e),
                            "create",
                            this
                          ).call(this, t);
                          return (
                            "string" == typeof t &&
                              (window.katex.render(t, n, {
                                throwOnError: !1,
                                errorColor: "#f00",
                              }),
                              n.setAttribute("data-value", t)),
                            n
                          );
                        },
                      },
                      {
                        key: "value",
                        value: function (t) {
                          return t.getAttribute("data-value");
                        },
                      },
                    ]),
                    e
                  );
                })(o.default);
                (f.blotName = "formula"),
                  (f.className = "ql-formula"),
                  (f.tagName = "SPAN");
                var h = (function (t) {
                  function e() {
                    l(this, e);
                    var t = u(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).call(this)
                    );
                    if (null == window.katex)
                      throw new Error("Formula module requires KaTeX.");
                    return t;
                  }
                  return (
                    c(e, t),
                    r(e, null, [
                      {
                        key: "register",
                        value: function () {
                          i.default.register(f, !0);
                        },
                      },
                    ]),
                    e
                  );
                })(a.default);
                (e.FormulaBlot = f), (e.default = h);
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.default = e.CodeToken = e.CodeBlock = void 0);
                var r = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  o = s(n(0)),
                  i = s(n(5)),
                  a = s(n(9));
                function s(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function l(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function u(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                }
                function c(t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                }
                var f = (function (t) {
                  function e() {
                    return (
                      l(this, e),
                      u(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    c(e, t),
                    r(e, [
                      {
                        key: "replaceWith",
                        value: function (t) {
                          (this.domNode.textContent = this.domNode.textContent),
                            this.attach(),
                            (function t(e, n, r) {
                              null === e && (e = Function.prototype);
                              var o = Object.getOwnPropertyDescriptor(e, n);
                              if (void 0 === o) {
                                var i = Object.getPrototypeOf(e);
                                return null === i ? void 0 : t(i, n, r);
                              }
                              if ("value" in o) return o.value;
                              var a = o.get;
                              return void 0 !== a ? a.call(r) : void 0;
                            })(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "replaceWith",
                              this
                            ).call(this, t);
                        },
                      },
                      {
                        key: "highlight",
                        value: function (t) {
                          var e = this.domNode.textContent;
                          this.cachedText !== e &&
                            ((e.trim().length > 0 || null == this.cachedText) &&
                              ((this.domNode.innerHTML = t(e)),
                              this.domNode.normalize(),
                              this.attach()),
                            (this.cachedText = e));
                        },
                      },
                    ]),
                    e
                  );
                })(s(n(13)).default);
                f.className = "ql-syntax";
                var h = new o.default.Attributor.Class("token", "hljs", {
                    scope: o.default.Scope.INLINE,
                  }),
                  p = (function (t) {
                    function e(t, n) {
                      l(this, e);
                      var r = u(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).call(
                          this,
                          t,
                          n
                        )
                      );
                      if ("function" != typeof r.options.highlight)
                        throw new Error(
                          "Syntax module requires highlight.js. Please include the library on the page before Quill."
                        );
                      var o = null;
                      return (
                        r.quill.on(
                          i.default.events.SCROLL_OPTIMIZE,
                          function () {
                            clearTimeout(o),
                              (o = setTimeout(function () {
                                r.highlight(), (o = null);
                              }, r.options.interval));
                          }
                        ),
                        r.highlight(),
                        r
                      );
                    }
                    return (
                      c(e, t),
                      r(e, null, [
                        {
                          key: "register",
                          value: function () {
                            i.default.register(h, !0),
                              i.default.register(f, !0);
                          },
                        },
                      ]),
                      r(e, [
                        {
                          key: "highlight",
                          value: function () {
                            var t = this;
                            if (!this.quill.selection.composing) {
                              this.quill.update(i.default.sources.USER);
                              var e = this.quill.getSelection();
                              this.quill.scroll
                                .descendants(f)
                                .forEach(function (e) {
                                  e.highlight(t.options.highlight);
                                }),
                                this.quill.update(i.default.sources.SILENT),
                                null != e &&
                                  this.quill.setSelection(
                                    e,
                                    i.default.sources.SILENT
                                  );
                            }
                          },
                        },
                      ]),
                      e
                    );
                  })(a.default);
                (p.DEFAULTS = {
                  highlight:
                    null == window.hljs
                      ? null
                      : function (t) {
                          return window.hljs.highlightAuto(t).value;
                        },
                  interval: 1e3,
                }),
                  (e.CodeBlock = f),
                  (e.CodeToken = h),
                  (e.default = p);
              },
              function (t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>';
              },
              function (t, e) {
                t.exports =
                  '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>';
              },
              function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 }),
                  (e.default = e.BubbleTooltip = void 0);
                var r = function t(e, n, r) {
                    null === e && (e = Function.prototype);
                    var o = Object.getOwnPropertyDescriptor(e, n);
                    if (void 0 === o) {
                      var i = Object.getPrototypeOf(e);
                      return null === i ? void 0 : t(i, n, r);
                    }
                    if ("value" in o) return o.value;
                    var a = o.get;
                    return void 0 !== a ? a.call(r) : void 0;
                  },
                  o = (function () {
                    function t(t, e) {
                      for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(t, r.key, r);
                      }
                    }
                    return function (e, n, r) {
                      return n && t(e.prototype, n), r && t(e, r), e;
                    };
                  })(),
                  i = f(n(3)),
                  a = f(n(8)),
                  s = n(43),
                  l = f(s),
                  u = n(15),
                  c = f(n(41));
                function f(t) {
                  return t && t.__esModule ? t : { default: t };
                }
                function h(t, e) {
                  if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function");
                }
                function p(t, e) {
                  if (!t)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !e || ("object" != typeof e && "function" != typeof e)
                    ? t
                    : e;
                }
                function d(t, e) {
                  if ("function" != typeof e && null !== e)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof e
                    );
                  (t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                      value: t,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    e &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, e)
                        : (t.__proto__ = e));
                }
                var y = [
                    ["bold", "italic", "link"],
                    [{ header: 1 }, { header: 2 }, "blockquote"],
                  ],
                  g = (function (t) {
                    function e(t, n) {
                      h(this, e),
                        null != n.modules.toolbar &&
                          null == n.modules.toolbar.container &&
                          (n.modules.toolbar.container = y);
                      var r = p(
                        this,
                        (e.__proto__ || Object.getPrototypeOf(e)).call(
                          this,
                          t,
                          n
                        )
                      );
                      return r.quill.container.classList.add("ql-bubble"), r;
                    }
                    return (
                      d(e, t),
                      o(e, [
                        {
                          key: "extendToolbar",
                          value: function (t) {
                            (this.tooltip = new m(
                              this.quill,
                              this.options.bounds
                            )),
                              this.tooltip.root.appendChild(t.container),
                              this.buildButtons(
                                [].slice.call(
                                  t.container.querySelectorAll("button")
                                ),
                                c.default
                              ),
                              this.buildPickers(
                                [].slice.call(
                                  t.container.querySelectorAll("select")
                                ),
                                c.default
                              );
                          },
                        },
                      ]),
                      e
                    );
                  })(l.default);
                g.DEFAULTS = (0, i.default)(!0, {}, l.default.DEFAULTS, {
                  modules: {
                    toolbar: {
                      handlers: {
                        link: function (t) {
                          t
                            ? this.quill.theme.tooltip.edit()
                            : this.quill.format("link", !1);
                        },
                      },
                    },
                  },
                });
                var m = (function (t) {
                  function e(t, n) {
                    h(this, e);
                    var r = p(
                      this,
                      (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
                    );
                    return (
                      r.quill.on(
                        a.default.events.EDITOR_CHANGE,
                        function (t, e, n, o) {
                          if (t === a.default.events.SELECTION_CHANGE)
                            if (
                              null != e &&
                              e.length > 0 &&
                              o === a.default.sources.USER
                            ) {
                              r.show(),
                                (r.root.style.left = "0px"),
                                (r.root.style.width = ""),
                                (r.root.style.width =
                                  r.root.offsetWidth + "px");
                              var i = r.quill.getLines(e.index, e.length);
                              if (1 === i.length)
                                r.position(r.quill.getBounds(e));
                              else {
                                var s = i[i.length - 1],
                                  l = r.quill.getIndex(s),
                                  c = Math.min(
                                    s.length() - 1,
                                    e.index + e.length - l
                                  ),
                                  f = r.quill.getBounds(new u.Range(l, c));
                                r.position(f);
                              }
                            } else
                              document.activeElement !== r.textbox &&
                                r.quill.hasFocus() &&
                                r.hide();
                        }
                      ),
                      r
                    );
                  }
                  return (
                    d(e, t),
                    o(e, [
                      {
                        key: "listen",
                        value: function () {
                          var t = this;
                          r(
                            e.prototype.__proto__ ||
                              Object.getPrototypeOf(e.prototype),
                            "listen",
                            this
                          ).call(this),
                            this.root
                              .querySelector(".ql-close")
                              .addEventListener("click", function () {
                                t.root.classList.remove("ql-editing");
                              }),
                            this.quill.on(
                              a.default.events.SCROLL_OPTIMIZE,
                              function () {
                                setTimeout(function () {
                                  if (!t.root.classList.contains("ql-hidden")) {
                                    var e = t.quill.getSelection();
                                    null != e &&
                                      t.position(t.quill.getBounds(e));
                                  }
                                }, 1);
                              }
                            );
                        },
                      },
                      {
                        key: "cancel",
                        value: function () {
                          this.show();
                        },
                      },
                      {
                        key: "position",
                        value: function (t) {
                          var n = r(
                              e.prototype.__proto__ ||
                                Object.getPrototypeOf(e.prototype),
                              "position",
                              this
                            ).call(this, t),
                            o = this.root.querySelector(".ql-tooltip-arrow");
                          if (((o.style.marginLeft = ""), 0 === n)) return n;
                          o.style.marginLeft =
                            -1 * n - o.offsetWidth / 2 + "px";
                        },
                      },
                    ]),
                    e
                  );
                })(s.BaseTooltip);
                (m.TEMPLATE = [
                  '<span class="ql-tooltip-arrow"></span>',
                  '<div class="ql-tooltip-editor">',
                  '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">',
                  '<a class="ql-close"></a>',
                  "</div>",
                ].join("")),
                  (e.BubbleTooltip = m),
                  (e.default = g);
              },
              function (t, e, n) {
                t.exports = n(63);
              },
            ]).default;
          }),
          (t.exports = n());
      }).call(this, n(250).Buffer);
    },
    1462: function (t, e, n) {
      "use strict";
      var r = n(1461),
        o = n.n(r);
      function i(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function a(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function s(t, e, n) {
        return e && a(t.prototype, e), n && a(t, n), t;
      }
      function l(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function u() {
        return (u =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      function c(t) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function f(t, e) {
        return (f =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function h(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function p(t, e) {
        if (e && ("object" == typeof e || "function" == typeof e)) return e;
        if (void 0 !== e)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return h(t);
      }
      function d(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = c(t);
          if (e) {
            var o = c(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return p(this, n);
        };
      }
      function y(t, e) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = c(t));

        );
        return t;
      }
      function g() {
        return (g =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, e, n) {
                var r = y(t, e);
                if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, e);
                  return o.get
                    ? o.get.call(arguments.length < 3 ? t : n)
                    : o.value;
                }
              }).apply(this, arguments);
      }
      function m(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function v(t, e) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = (function (t, e) {
              if (t) {
                if ("string" == typeof t) return m(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(t)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? m(t, e)
                    : void 0
                );
              }
            })(t)) ||
            (e && t && "number" == typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          a = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (a = t.done), t;
          },
          e: function (t) {
            (s = !0), (i = t);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (s) throw i;
            }
          },
        };
      }
      var b = 9,
        x = 13,
        _ = 27,
        w = 38,
        A = 40;
      function E(t, e, n) {
        var r = t;
        return (
          Object.keys(e).forEach(function (t) {
            n.indexOf(t) > -1 ? (r.dataset[t] = e[t]) : delete r.dataset[t];
          }),
          r
        );
      }
      var k = (function (t) {
        !(function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            e && f(t, e);
        })(n, t);
        var e = d(n);
        function n(t, r) {
          var o;
          return (
            i(this, n),
            l(h((o = e.call(this, t, r))), "hoverHandler", void 0),
            l(h(o), "hoverHandler", void 0),
            (o.clickHandler = null),
            (o.hoverHandler = null),
            (o.mounted = !1),
            o
          );
        }
        return (
          s(
            n,
            [
              {
                key: "attach",
                value: function () {
                  g(c(n.prototype), "attach", this).call(this),
                    this.mounted ||
                      ((this.mounted = !0),
                      (this.clickHandler = this.getClickHandler()),
                      (this.hoverHandler = this.getHoverHandler()),
                      this.domNode.addEventListener(
                        "click",
                        this.clickHandler,
                        !1
                      ),
                      this.domNode.addEventListener(
                        "mouseenter",
                        this.hoverHandler,
                        !1
                      ));
                },
              },
              {
                key: "detach",
                value: function () {
                  g(c(n.prototype), "detach", this).call(this),
                    (this.mounted = !1),
                    this.clickHandler &&
                      (this.domNode.removeEventListener(
                        "click",
                        this.clickHandler
                      ),
                      (this.clickHandler = null));
                },
              },
              {
                key: "getClickHandler",
                value: function () {
                  var t = this;
                  return function (e) {
                    var n = t.buildEvent("mention-clicked", e);
                    window.dispatchEvent(n), e.preventDefault();
                  };
                },
              },
              {
                key: "getHoverHandler",
                value: function () {
                  var t = this;
                  return function (e) {
                    var n = t.buildEvent("mention-hovered", e);
                    window.dispatchEvent(n), e.preventDefault();
                  };
                },
              },
              {
                key: "buildEvent",
                value: function (t, e) {
                  var n = new Event(t, { bubbles: !0, cancelable: !0 });
                  return (
                    (n.value = u({}, this.domNode.dataset)), (n.event = e), n
                  );
                },
              },
            ],
            [
              {
                key: "create",
                value: function (t) {
                  var e = g(c(n), "create", this).call(this),
                    r = document.createElement("span");
                  return (
                    (r.className = "ql-mention-denotation-char"),
                    (r.innerHTML = t.denotationChar),
                    e.appendChild(r),
                    (e.innerHTML += t.value),
                    n.setDataValues(e, t)
                  );
                },
              },
              {
                key: "setDataValues",
                value: function (t, e) {
                  var n = t;
                  return (
                    Object.keys(e).forEach(function (t) {
                      n.dataset[t] = e[t];
                    }),
                    n
                  );
                },
              },
              {
                key: "value",
                value: function (t) {
                  return t.dataset;
                },
              },
            ]
          ),
          n
        );
      })(o.a.import("blots/embed"));
      (k.blotName = "mention"),
        (k.tagName = "span"),
        (k.className = "mention"),
        o.a.register(k);
      var O = (function () {
        function t(e, n) {
          var r = this;
          i(this, t),
            (this.isOpen = !1),
            (this.itemIndex = 0),
            (this.mentionCharPos = null),
            (this.cursorPos = null),
            (this.values = []),
            (this.suspendMouseEnter = !1),
            (this.existingSourceExecutionToken = null),
            (this.quill = e),
            (this.options = {
              source: null,
              renderItem: function (t) {
                return "".concat(t.value);
              },
              renderLoading: function () {
                return null;
              },
              onSelect: function (t, e) {
                e(t);
              },
              mentionDenotationChars: ["@"],
              showDenotationChar: !0,
              allowedChars: /^[a-zA-Z0-9_]*$/,
              minChars: 0,
              maxChars: 31,
              offsetTop: 2,
              offsetLeft: 0,
              isolateCharacter: !1,
              fixMentionsToQuill: !1,
              positioningStrategy: "normal",
              defaultMenuOrientation: "bottom",
              blotName: "mention",
              dataAttributes: [
                "id",
                "value",
                "denotationChar",
                "link",
                "target",
                "disabled",
              ],
              linkTarget: "_blank",
              onOpen: function () {
                return !0;
              },
              onBeforeClose: function () {
                return !0;
              },
              onClose: function () {
                return !0;
              },
              listItemClass: "ql-mention-list-item",
              mentionContainerClass: "ql-mention-list-container",
              mentionListClass: "ql-mention-list",
              spaceAfterInsert: !0,
              selectKeys: [x],
            }),
            u(this.options, n, {
              dataAttributes: Array.isArray(n.dataAttributes)
                ? this.options.dataAttributes.concat(n.dataAttributes)
                : this.options.dataAttributes,
            }),
            (this.mentionContainer = document.createElement("div")),
            (this.mentionContainer.className = this.options
              .mentionContainerClass
              ? this.options.mentionContainerClass
              : ""),
            (this.mentionContainer.style.cssText =
              "display: none; position: absolute;"),
            (this.mentionContainer.onmousemove =
              this.onContainerMouseMove.bind(this)),
            this.options.fixMentionsToQuill &&
              (this.mentionContainer.style.width = "auto"),
            (this.mentionList = document.createElement("ul")),
            (this.mentionList.id = "quill-mention-list"),
            e.root.setAttribute("aria-owns", "quill-mention-list"),
            (this.mentionList.className = this.options.mentionListClass
              ? this.options.mentionListClass
              : ""),
            this.mentionContainer.appendChild(this.mentionList),
            e.on("text-change", this.onTextChange.bind(this)),
            e.on("selection-change", this.onSelectionChange.bind(this)),
            e.container.addEventListener("paste", function () {
              setTimeout(function () {
                var t = e.getSelection();
                r.onSelectionChange(t);
              });
            }),
            e.keyboard.addBinding({ key: b }, this.selectHandler.bind(this)),
            e.keyboard.bindings[b].unshift(e.keyboard.bindings[b].pop());
          var o,
            a = v(this.options.selectKeys);
          try {
            for (a.s(); !(o = a.n()).done; ) {
              var s = o.value;
              e.keyboard.addBinding({ key: s }, this.selectHandler.bind(this));
            }
          } catch (t) {
            a.e(t);
          } finally {
            a.f();
          }
          e.keyboard.bindings[x].unshift(e.keyboard.bindings[x].pop()),
            e.keyboard.addBinding({ key: _ }, this.escapeHandler.bind(this)),
            e.keyboard.addBinding({ key: w }, this.upHandler.bind(this)),
            e.keyboard.addBinding({ key: A }, this.downHandler.bind(this));
        }
        return (
          s(t, [
            {
              key: "selectHandler",
              value: function () {
                return (
                  !(this.isOpen && !this.existingSourceExecutionToken) ||
                  (this.selectItem(), !1)
                );
              },
            },
            {
              key: "escapeHandler",
              value: function () {
                return (
                  !this.isOpen ||
                  (this.existingSourceExecutionToken &&
                    (this.existingSourceExecutionToken.abandoned = !0),
                  this.hideMentionList(),
                  !1)
                );
              },
            },
            {
              key: "upHandler",
              value: function () {
                return (
                  !(this.isOpen && !this.existingSourceExecutionToken) ||
                  (this.prevItem(), !1)
                );
              },
            },
            {
              key: "downHandler",
              value: function () {
                return (
                  !(this.isOpen && !this.existingSourceExecutionToken) ||
                  (this.nextItem(), !1)
                );
              },
            },
            {
              key: "showMentionList",
              value: function () {
                "fixed" === this.options.positioningStrategy
                  ? document.body.appendChild(this.mentionContainer)
                  : this.quill.container.appendChild(this.mentionContainer),
                  (this.mentionContainer.style.visibility = "hidden"),
                  (this.mentionContainer.style.display = ""),
                  (this.mentionContainer.scrollTop = 0),
                  this.setMentionContainerPosition(),
                  this.setIsOpen(!0);
              },
            },
            {
              key: "hideMentionList",
              value: function () {
                this.options.onBeforeClose(),
                  (this.mentionContainer.style.display = "none"),
                  this.mentionContainer.remove(),
                  this.setIsOpen(!1),
                  this.quill.root.removeAttribute("aria-activedescendant");
              },
            },
            {
              key: "highlightItem",
              value: function () {
                for (
                  var t =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0],
                    e = 0;
                  e < this.mentionList.childNodes.length;
                  e += 1
                )
                  this.mentionList.childNodes[e].classList.remove("selected");
                if (
                  -1 !== this.itemIndex &&
                  "true" !==
                    this.mentionList.childNodes[this.itemIndex].dataset
                      .disabled &&
                  (this.mentionList.childNodes[this.itemIndex].classList.add(
                    "selected"
                  ),
                  this.quill.root.setAttribute(
                    "aria-activedescendant",
                    this.mentionList.childNodes[this.itemIndex].id
                  ),
                  t)
                ) {
                  var n =
                      this.mentionList.childNodes[this.itemIndex].offsetHeight,
                    r = this.mentionList.childNodes[this.itemIndex].offsetTop,
                    o = this.mentionContainer.scrollTop,
                    i = o + this.mentionContainer.offsetHeight;
                  r < o
                    ? (this.mentionContainer.scrollTop = r)
                    : r > i - n &&
                      (this.mentionContainer.scrollTop += r - i + n);
                }
              },
            },
            {
              key: "getItemData",
              value: function () {
                var t =
                    this.mentionList.childNodes[this.itemIndex].dataset.link,
                  e = void 0 !== t,
                  n =
                    this.mentionList.childNodes[this.itemIndex].dataset.target;
                return (
                  e &&
                    (this.mentionList.childNodes[this.itemIndex].dataset.value =
                      '<a href="'
                        .concat(t, '" target=')
                        .concat(n || this.options.linkTarget, ">")
                        .concat(
                          this.mentionList.childNodes[this.itemIndex].dataset
                            .value
                        )),
                  this.mentionList.childNodes[this.itemIndex].dataset
                );
              },
            },
            {
              key: "onContainerMouseMove",
              value: function () {
                this.suspendMouseEnter = !1;
              },
            },
            {
              key: "selectItem",
              value: function () {
                var t = this;
                if (-1 !== this.itemIndex) {
                  var e = this.getItemData();
                  e.disabled ||
                    (this.options.onSelect(e, function (e) {
                      t.insertItem(e);
                    }),
                    this.hideMentionList());
                }
              },
            },
            {
              key: "insertItem",
              value: function (t, e) {
                var n,
                  r = t;
                null !== r &&
                  (this.options.showDenotationChar || (r.denotationChar = ""),
                  e
                    ? (n = this.cursorPos)
                    : ((n = this.mentionCharPos),
                      this.quill.deleteText(
                        this.mentionCharPos,
                        this.cursorPos - this.mentionCharPos,
                        o.a.sources.USER
                      )),
                  this.quill.insertEmbed(
                    n,
                    this.options.blotName,
                    r,
                    o.a.sources.USER
                  ),
                  this.options.spaceAfterInsert
                    ? (this.quill.insertText(n + 1, " ", o.a.sources.USER),
                      this.quill.setSelection(n + 2, o.a.sources.USER))
                    : this.quill.setSelection(n + 1, o.a.sources.USER),
                  this.hideMentionList());
              },
            },
            {
              key: "onItemMouseEnter",
              value: function (t) {
                if (!this.suspendMouseEnter) {
                  var e = Number(t.target.dataset.index);
                  Number.isNaN(e) ||
                    e === this.itemIndex ||
                    ((this.itemIndex = e), this.highlightItem(!1));
                }
              },
            },
            {
              key: "onDisabledItemMouseEnter",
              value: function (t) {
                this.suspendMouseEnter ||
                  ((this.itemIndex = -1), this.highlightItem(!1));
              },
            },
            {
              key: "onItemClick",
              value: function (t) {
                0 === t.button &&
                  (t.preventDefault(),
                  t.stopImmediatePropagation(),
                  (this.itemIndex = t.currentTarget.dataset.index),
                  this.highlightItem(),
                  this.selectItem());
              },
            },
            {
              key: "onItemMouseDown",
              value: function (t) {
                t.preventDefault(), t.stopImmediatePropagation();
              },
            },
            {
              key: "renderLoading",
              value: function () {
                if (this.options.renderLoading())
                  if (
                    this.mentionContainer.getElementsByClassName(
                      "ql-mention-loading"
                    ).length > 0
                  )
                    this.showMentionList();
                  else {
                    this.mentionList.innerHTML = "";
                    var t = document.createElement("div");
                    (t.className = "ql-mention-loading"),
                      (t.innerHTML = this.options.renderLoading()),
                      this.mentionContainer.append(t),
                      this.showMentionList();
                  }
              },
            },
            {
              key: "removeLoading",
              value: function () {
                var t =
                  this.mentionContainer.getElementsByClassName(
                    "ql-mention-loading"
                  );
                t.length > 0 && t[0].remove();
              },
            },
            {
              key: "renderList",
              value: function (t, e, n) {
                if (e && e.length > 0) {
                  this.removeLoading(),
                    (this.values = e),
                    (this.mentionList.innerHTML = "");
                  for (var r = -1, o = 0; o < e.length; o += 1) {
                    var i = document.createElement("li");
                    (i.id = "quill-mention-item-" + o),
                      (i.className = this.options.listItemClass
                        ? this.options.listItemClass
                        : ""),
                      e[o].disabled
                        ? ((i.className += " disabled"),
                          i.setAttribute("aria-hidden", "true"))
                        : -1 === r && (r = o),
                      (i.dataset.index = o),
                      (i.innerHTML = this.options.renderItem(e[o], n)),
                      e[o].disabled
                        ? (i.onmouseenter =
                            this.onDisabledItemMouseEnter.bind(this))
                        : ((i.onmouseenter = this.onItemMouseEnter.bind(this)),
                          (i.onmouseup = this.onItemClick.bind(this)),
                          (i.onmousedown = this.onItemMouseDown.bind(this))),
                      (i.dataset.denotationChar = t),
                      this.mentionList.appendChild(
                        E(i, e[o], this.options.dataAttributes)
                      );
                  }
                  (this.itemIndex = r),
                    this.highlightItem(),
                    this.showMentionList();
                } else this.hideMentionList();
              },
            },
            {
              key: "nextItem",
              value: function () {
                var t,
                  e = 0;
                do {
                  e++, (t = (this.itemIndex + e) % this.values.length);
                  var n =
                    "true" === this.mentionList.childNodes[t].dataset.disabled;
                  if (e === this.values.length + 1) {
                    t = -1;
                    break;
                  }
                } while (n);
                (this.itemIndex = t),
                  (this.suspendMouseEnter = !0),
                  this.highlightItem();
              },
            },
            {
              key: "prevItem",
              value: function () {
                var t,
                  e = 0;
                do {
                  e++,
                    (t =
                      (this.itemIndex + this.values.length - e) %
                      this.values.length);
                  var n =
                    "true" === this.mentionList.childNodes[t].dataset.disabled;
                  if (e === this.values.length + 1) {
                    t = -1;
                    break;
                  }
                } while (n);
                (this.itemIndex = t),
                  (this.suspendMouseEnter = !0),
                  this.highlightItem();
              },
            },
            {
              key: "containerBottomIsNotVisible",
              value: function (t, e) {
                return (
                  t + this.mentionContainer.offsetHeight + e.top >
                  window.pageYOffset + window.innerHeight
                );
              },
            },
            {
              key: "containerRightIsNotVisible",
              value: function (t, e) {
                return (
                  !this.options.fixMentionsToQuill &&
                  t + this.mentionContainer.offsetWidth + e.left >
                    window.pageXOffset + document.documentElement.clientWidth
                );
              },
            },
            {
              key: "setIsOpen",
              value: function (t) {
                this.isOpen !== t &&
                  (t ? this.options.onOpen() : this.options.onClose(),
                  (this.isOpen = t));
              },
            },
            {
              key: "setMentionContainerPosition",
              value: function () {
                "fixed" === this.options.positioningStrategy
                  ? this.setMentionContainerPosition_Fixed()
                  : this.setMentionContainerPosition_Normal();
              },
            },
            {
              key: "setMentionContainerPosition_Normal",
              value: function () {
                var t = this,
                  e = this.quill.container.getBoundingClientRect(),
                  n = this.quill.getBounds(this.mentionCharPos),
                  r = this.mentionContainer.offsetHeight,
                  o = this.options.offsetTop,
                  i = this.options.offsetLeft;
                if (this.options.fixMentionsToQuill) {
                  this.mentionContainer.style.right = "".concat(0, "px");
                } else i += n.left;
                if (this.containerRightIsNotVisible(i, e)) {
                  var a =
                    this.mentionContainer.offsetWidth + this.options.offsetLeft;
                  i = e.width - a;
                }
                if ("top" === this.options.defaultMenuOrientation) {
                  if (
                    (o = this.options.fixMentionsToQuill
                      ? -1 * (r + this.options.offsetTop)
                      : n.top - (r + this.options.offsetTop)) +
                      e.top <=
                    0
                  ) {
                    var s = this.options.offsetTop;
                    this.options.fixMentionsToQuill
                      ? (s += e.height)
                      : (s += n.bottom),
                      (o = s);
                  }
                } else if (
                  (this.options.fixMentionsToQuill
                    ? (o += e.height)
                    : (o += n.bottom),
                  this.containerBottomIsNotVisible(o, e))
                ) {
                  var l = -1 * this.options.offsetTop;
                  this.options.fixMentionsToQuill || (l += n.top), (o = l - r);
                }
                o >= 0
                  ? this.options.mentionContainerClass
                      .split(" ")
                      .forEach(function (e) {
                        t.mentionContainer.classList.add(
                          "".concat(e, "-bottom")
                        ),
                          t.mentionContainer.classList.remove(
                            "".concat(e, "-top")
                          );
                      })
                  : this.options.mentionContainerClass
                      .split(" ")
                      .forEach(function (e) {
                        t.mentionContainer.classList.add("".concat(e, "-top")),
                          t.mentionContainer.classList.remove(
                            "".concat(e, "-bottom")
                          );
                      }),
                  (this.mentionContainer.style.top = "".concat(o, "px")),
                  (this.mentionContainer.style.left = "".concat(i, "px")),
                  (this.mentionContainer.style.visibility = "visible");
              },
            },
            {
              key: "setMentionContainerPosition_Fixed",
              value: function () {
                var t = this;
                (this.mentionContainer.style.position = "fixed"),
                  (this.mentionContainer.style.height = null);
                var e = this.quill.container.getBoundingClientRect(),
                  n = this.quill.getBounds(this.mentionCharPos),
                  r = {
                    left: e.left + n.left,
                    top: e.top + n.top,
                    width: 0,
                    height: n.height,
                  },
                  o = this.options.fixMentionsToQuill ? e : r,
                  i = this.options.offsetTop,
                  a = this.options.offsetLeft;
                if (this.options.fixMentionsToQuill) {
                  var s = o.right;
                  this.mentionContainer.style.right = "".concat(s, "px");
                } else
                  (a += o.left) + this.mentionContainer.offsetWidth >
                    document.documentElement.clientWidth &&
                    (a -=
                      a +
                      this.mentionContainer.offsetWidth -
                      document.documentElement.clientWidth);
                var l = o.top,
                  u =
                    document.documentElement.clientHeight - (o.top + o.height),
                  c = this.mentionContainer.offsetHeight <= u,
                  f = this.mentionContainer.offsetHeight <= l;
                "bottom" ===
                ("top" === this.options.defaultMenuOrientation && f
                  ? "top"
                  : ("bottom" === this.options.defaultMenuOrientation && c) ||
                    u > l
                  ? "bottom"
                  : "top")
                  ? ((i = o.top + o.height),
                    c || (this.mentionContainer.style.height = u - 3 + "px"),
                    this.options.mentionContainerClass
                      .split(" ")
                      .forEach(function (e) {
                        t.mentionContainer.classList.add(
                          "".concat(e, "-bottom")
                        ),
                          t.mentionContainer.classList.remove(
                            "".concat(e, "-top")
                          );
                      }))
                  : ((i = o.top - this.mentionContainer.offsetHeight),
                    f ||
                      ((this.mentionContainer.style.height = l - 3 + "px"),
                      (i = 3)),
                    this.options.mentionContainerClass
                      .split(" ")
                      .forEach(function (e) {
                        t.mentionContainer.classList.add("".concat(e, "-top")),
                          t.mentionContainer.classList.remove(
                            "".concat(e, "-bottom")
                          );
                      })),
                  (this.mentionContainer.style.top = "".concat(i, "px")),
                  (this.mentionContainer.style.left = "".concat(a, "px")),
                  (this.mentionContainer.style.visibility = "visible");
              },
            },
            {
              key: "getTextBeforeCursor",
              value: function () {
                var t = Math.max(0, this.cursorPos - this.options.maxChars);
                return this.quill.getText(t, this.cursorPos - t);
              },
            },
            {
              key: "onSomethingChange",
              value: function () {
                var t = this,
                  e = this.quill.getSelection();
                if (null != e) {
                  this.cursorPos = e.index;
                  var n,
                    r = this.getTextBeforeCursor(),
                    o =
                      ((n = r),
                      this.options.mentionDenotationChars.reduce(
                        function (t, e) {
                          var r = n.lastIndexOf(e);
                          return r > t.mentionCharIndex
                            ? { mentionChar: e, mentionCharIndex: r }
                            : {
                                mentionChar: t.mentionChar,
                                mentionCharIndex: t.mentionCharIndex,
                              };
                        },
                        { mentionChar: null, mentionCharIndex: -1 }
                      )),
                    i = o.mentionChar,
                    a = o.mentionCharIndex;
                  if (
                    (function (t, e, n) {
                      return (
                        t > -1 && !(n && 0 !== t && !e[t - 1].match(/\s/g))
                      );
                    })(a, r, this.options.isolateCharacter)
                  ) {
                    var s = this.cursorPos - (r.length - a);
                    this.mentionCharPos = s;
                    var l = r.substring(a + i.length);
                    if (
                      l.length >= this.options.minChars &&
                      (function (t, e) {
                        return e.test(t);
                      })(l, this.getAllowedCharsRegex(i))
                    ) {
                      this.existingSourceExecutionToken &&
                        (this.existingSourceExecutionToken.abandoned = !0),
                        this.renderLoading();
                      var u = { abandoned: !1 };
                      (this.existingSourceExecutionToken = u),
                        this.options.source(
                          l,
                          function (e, n) {
                            u.abandoned ||
                              ((t.existingSourceExecutionToken = null),
                              t.renderList(i, e, n));
                          },
                          i
                        );
                    } else
                      this.existingSourceExecutionToken &&
                        (this.existingSourceExecutionToken.abandoned = !0),
                        this.hideMentionList();
                  } else
                    this.existingSourceExecutionToken &&
                      (this.existingSourceExecutionToken.abandoned = !0),
                      this.hideMentionList();
                }
              },
            },
            {
              key: "getAllowedCharsRegex",
              value: function (t) {
                return this.options.allowedChars instanceof RegExp
                  ? this.options.allowedChars
                  : this.options.allowedChars(t);
              },
            },
            {
              key: "onTextChange",
              value: function (t, e, n) {
                "user" === n && this.onSomethingChange();
              },
            },
            {
              key: "onSelectionChange",
              value: function (t) {
                t && 0 === t.length
                  ? this.onSomethingChange()
                  : this.hideMentionList();
              },
            },
            {
              key: "openMenu",
              value: function (t) {
                var e = this.quill.getSelection(!0);
                this.quill.insertText(e.index, t),
                  this.quill.blur(),
                  this.quill.focus();
              },
            },
          ]),
          t
        );
      })();
      o.a.register("modules/mention", O);
    },
    1463: function (t, e, n) {
      /*! @license DOMPurify 3.0.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.3/LICENSE */
      t.exports = (function () {
        "use strict";
        const {
          entries: t,
          setPrototypeOf: e,
          isFrozen: n,
          getPrototypeOf: r,
          getOwnPropertyDescriptor: o,
        } = Object;
        let { freeze: i, seal: a, create: s } = Object,
          { apply: l, construct: u } = "undefined" != typeof Reflect && Reflect;
        l ||
          (l = function (t, e, n) {
            return t.apply(e, n);
          }),
          i ||
            (i = function (t) {
              return t;
            }),
          a ||
            (a = function (t) {
              return t;
            }),
          u ||
            (u = function (t, e) {
              return new t(...e);
            });
        const c = w(Array.prototype.forEach),
          f = w(Array.prototype.pop),
          h = w(Array.prototype.push),
          p = w(String.prototype.toLowerCase),
          d = w(String.prototype.toString),
          y = w(String.prototype.match),
          g = w(String.prototype.replace),
          m = w(String.prototype.indexOf),
          v = w(String.prototype.trim),
          b = w(RegExp.prototype.test),
          x =
            ((_ = TypeError),
            function () {
              for (
                var t = arguments.length, e = new Array(t), n = 0;
                n < t;
                n++
              )
                e[n] = arguments[n];
              return u(_, e);
            });
        var _;
        function w(t) {
          return function (e) {
            for (
              var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1;
              o < n;
              o++
            )
              r[o - 1] = arguments[o];
            return l(t, e, r);
          };
        }
        function A(t, r, o) {
          var i;
          (o = null !== (i = o) && void 0 !== i ? i : p), e && e(t, null);
          let a = r.length;
          for (; a--; ) {
            let e = r[a];
            if ("string" == typeof e) {
              const t = o(e);
              t !== e && (n(r) || (r[a] = t), (e = t));
            }
            t[e] = !0;
          }
          return t;
        }
        function E(e) {
          const n = s(null);
          for (const [r, o] of t(e)) n[r] = o;
          return n;
        }
        function k(t, e) {
          for (; null !== t; ) {
            const n = o(t, e);
            if (n) {
              if (n.get) return w(n.get);
              if ("function" == typeof n.value) return w(n.value);
            }
            t = r(t);
          }
          return function (t) {
            return console.warn("fallback value for", t), null;
          };
        }
        const O = i([
            "a",
            "abbr",
            "acronym",
            "address",
            "area",
            "article",
            "aside",
            "audio",
            "b",
            "bdi",
            "bdo",
            "big",
            "blink",
            "blockquote",
            "body",
            "br",
            "button",
            "canvas",
            "caption",
            "center",
            "cite",
            "code",
            "col",
            "colgroup",
            "content",
            "data",
            "datalist",
            "dd",
            "decorator",
            "del",
            "details",
            "dfn",
            "dialog",
            "dir",
            "div",
            "dl",
            "dt",
            "element",
            "em",
            "fieldset",
            "figcaption",
            "figure",
            "font",
            "footer",
            "form",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "head",
            "header",
            "hgroup",
            "hr",
            "html",
            "i",
            "img",
            "input",
            "ins",
            "kbd",
            "label",
            "legend",
            "li",
            "main",
            "map",
            "mark",
            "marquee",
            "menu",
            "menuitem",
            "meter",
            "nav",
            "nobr",
            "ol",
            "optgroup",
            "option",
            "output",
            "p",
            "picture",
            "pre",
            "progress",
            "q",
            "rp",
            "rt",
            "ruby",
            "s",
            "samp",
            "section",
            "select",
            "shadow",
            "small",
            "source",
            "spacer",
            "span",
            "strike",
            "strong",
            "style",
            "sub",
            "summary",
            "sup",
            "table",
            "tbody",
            "td",
            "template",
            "textarea",
            "tfoot",
            "th",
            "thead",
            "time",
            "tr",
            "track",
            "tt",
            "u",
            "ul",
            "var",
            "video",
            "wbr",
          ]),
          C = i([
            "svg",
            "a",
            "altglyph",
            "altglyphdef",
            "altglyphitem",
            "animatecolor",
            "animatemotion",
            "animatetransform",
            "circle",
            "clippath",
            "defs",
            "desc",
            "ellipse",
            "filter",
            "font",
            "g",
            "glyph",
            "glyphref",
            "hkern",
            "image",
            "line",
            "lineargradient",
            "marker",
            "mask",
            "metadata",
            "mpath",
            "path",
            "pattern",
            "polygon",
            "polyline",
            "radialgradient",
            "rect",
            "stop",
            "style",
            "switch",
            "symbol",
            "text",
            "textpath",
            "title",
            "tref",
            "tspan",
            "view",
            "vkern",
          ]),
          T = i([
            "feBlend",
            "feColorMatrix",
            "feComponentTransfer",
            "feComposite",
            "feConvolveMatrix",
            "feDiffuseLighting",
            "feDisplacementMap",
            "feDistantLight",
            "feDropShadow",
            "feFlood",
            "feFuncA",
            "feFuncB",
            "feFuncG",
            "feFuncR",
            "feGaussianBlur",
            "feImage",
            "feMerge",
            "feMergeNode",
            "feMorphology",
            "feOffset",
            "fePointLight",
            "feSpecularLighting",
            "feSpotLight",
            "feTile",
            "feTurbulence",
          ]),
          N = i([
            "animate",
            "color-profile",
            "cursor",
            "discard",
            "font-face",
            "font-face-format",
            "font-face-name",
            "font-face-src",
            "font-face-uri",
            "foreignobject",
            "hatch",
            "hatchpath",
            "mesh",
            "meshgradient",
            "meshpatch",
            "meshrow",
            "missing-glyph",
            "script",
            "set",
            "solidcolor",
            "unknown",
            "use",
          ]),
          j = i([
            "math",
            "menclose",
            "merror",
            "mfenced",
            "mfrac",
            "mglyph",
            "mi",
            "mlabeledtr",
            "mmultiscripts",
            "mn",
            "mo",
            "mover",
            "mpadded",
            "mphantom",
            "mroot",
            "mrow",
            "ms",
            "mspace",
            "msqrt",
            "mstyle",
            "msub",
            "msup",
            "msubsup",
            "mtable",
            "mtd",
            "mtext",
            "mtr",
            "munder",
            "munderover",
            "mprescripts",
          ]),
          S = i([
            "maction",
            "maligngroup",
            "malignmark",
            "mlongdiv",
            "mscarries",
            "mscarry",
            "msgroup",
            "mstack",
            "msline",
            "msrow",
            "semantics",
            "annotation",
            "annotation-xml",
            "mprescripts",
            "none",
          ]),
          P = i(["#text"]),
          q = i([
            "accept",
            "action",
            "align",
            "alt",
            "autocapitalize",
            "autocomplete",
            "autopictureinpicture",
            "autoplay",
            "background",
            "bgcolor",
            "border",
            "capture",
            "cellpadding",
            "cellspacing",
            "checked",
            "cite",
            "class",
            "clear",
            "color",
            "cols",
            "colspan",
            "controls",
            "controlslist",
            "coords",
            "crossorigin",
            "datetime",
            "decoding",
            "default",
            "dir",
            "disabled",
            "disablepictureinpicture",
            "disableremoteplayback",
            "download",
            "draggable",
            "enctype",
            "enterkeyhint",
            "face",
            "for",
            "headers",
            "height",
            "hidden",
            "high",
            "href",
            "hreflang",
            "id",
            "inputmode",
            "integrity",
            "ismap",
            "kind",
            "label",
            "lang",
            "list",
            "loading",
            "loop",
            "low",
            "max",
            "maxlength",
            "media",
            "method",
            "min",
            "minlength",
            "multiple",
            "muted",
            "name",
            "nonce",
            "noshade",
            "novalidate",
            "nowrap",
            "open",
            "optimum",
            "pattern",
            "placeholder",
            "playsinline",
            "poster",
            "preload",
            "pubdate",
            "radiogroup",
            "readonly",
            "rel",
            "required",
            "rev",
            "reversed",
            "role",
            "rows",
            "rowspan",
            "spellcheck",
            "scope",
            "selected",
            "shape",
            "size",
            "sizes",
            "span",
            "srclang",
            "start",
            "src",
            "srcset",
            "step",
            "style",
            "summary",
            "tabindex",
            "title",
            "translate",
            "type",
            "usemap",
            "valign",
            "value",
            "width",
            "xmlns",
            "slot",
          ]),
          L = i([
            "accent-height",
            "accumulate",
            "additive",
            "alignment-baseline",
            "ascent",
            "attributename",
            "attributetype",
            "azimuth",
            "basefrequency",
            "baseline-shift",
            "begin",
            "bias",
            "by",
            "class",
            "clip",
            "clippathunits",
            "clip-path",
            "clip-rule",
            "color",
            "color-interpolation",
            "color-interpolation-filters",
            "color-profile",
            "color-rendering",
            "cx",
            "cy",
            "d",
            "dx",
            "dy",
            "diffuseconstant",
            "direction",
            "display",
            "divisor",
            "dur",
            "edgemode",
            "elevation",
            "end",
            "fill",
            "fill-opacity",
            "fill-rule",
            "filter",
            "filterunits",
            "flood-color",
            "flood-opacity",
            "font-family",
            "font-size",
            "font-size-adjust",
            "font-stretch",
            "font-style",
            "font-variant",
            "font-weight",
            "fx",
            "fy",
            "g1",
            "g2",
            "glyph-name",
            "glyphref",
            "gradientunits",
            "gradienttransform",
            "height",
            "href",
            "id",
            "image-rendering",
            "in",
            "in2",
            "k",
            "k1",
            "k2",
            "k3",
            "k4",
            "kerning",
            "keypoints",
            "keysplines",
            "keytimes",
            "lang",
            "lengthadjust",
            "letter-spacing",
            "kernelmatrix",
            "kernelunitlength",
            "lighting-color",
            "local",
            "marker-end",
            "marker-mid",
            "marker-start",
            "markerheight",
            "markerunits",
            "markerwidth",
            "maskcontentunits",
            "maskunits",
            "max",
            "mask",
            "media",
            "method",
            "mode",
            "min",
            "name",
            "numoctaves",
            "offset",
            "operator",
            "opacity",
            "order",
            "orient",
            "orientation",
            "origin",
            "overflow",
            "paint-order",
            "path",
            "pathlength",
            "patterncontentunits",
            "patterntransform",
            "patternunits",
            "points",
            "preservealpha",
            "preserveaspectratio",
            "primitiveunits",
            "r",
            "rx",
            "ry",
            "radius",
            "refx",
            "refy",
            "repeatcount",
            "repeatdur",
            "restart",
            "result",
            "rotate",
            "scale",
            "seed",
            "shape-rendering",
            "specularconstant",
            "specularexponent",
            "spreadmethod",
            "startoffset",
            "stddeviation",
            "stitchtiles",
            "stop-color",
            "stop-opacity",
            "stroke-dasharray",
            "stroke-dashoffset",
            "stroke-linecap",
            "stroke-linejoin",
            "stroke-miterlimit",
            "stroke-opacity",
            "stroke",
            "stroke-width",
            "style",
            "surfacescale",
            "systemlanguage",
            "tabindex",
            "targetx",
            "targety",
            "transform",
            "transform-origin",
            "text-anchor",
            "text-decoration",
            "text-rendering",
            "textlength",
            "type",
            "u1",
            "u2",
            "unicode",
            "values",
            "viewbox",
            "visibility",
            "version",
            "vert-adv-y",
            "vert-origin-x",
            "vert-origin-y",
            "width",
            "word-spacing",
            "wrap",
            "writing-mode",
            "xchannelselector",
            "ychannelselector",
            "x",
            "x1",
            "x2",
            "xmlns",
            "y",
            "y1",
            "y2",
            "z",
            "zoomandpan",
          ]),
          D = i([
            "accent",
            "accentunder",
            "align",
            "bevelled",
            "close",
            "columnsalign",
            "columnlines",
            "columnspan",
            "denomalign",
            "depth",
            "dir",
            "display",
            "displaystyle",
            "encoding",
            "fence",
            "frame",
            "height",
            "href",
            "id",
            "largeop",
            "length",
            "linethickness",
            "lspace",
            "lquote",
            "mathbackground",
            "mathcolor",
            "mathsize",
            "mathvariant",
            "maxsize",
            "minsize",
            "movablelimits",
            "notation",
            "numalign",
            "open",
            "rowalign",
            "rowlines",
            "rowspacing",
            "rowspan",
            "rspace",
            "rquote",
            "scriptlevel",
            "scriptminsize",
            "scriptsizemultiplier",
            "selection",
            "separator",
            "separators",
            "stretchy",
            "subscriptshift",
            "supscriptshift",
            "symmetric",
            "voffset",
            "width",
            "xmlns",
          ]),
          B = i([
            "xlink:href",
            "xml:id",
            "xlink:title",
            "xml:space",
            "xmlns:xlink",
          ]),
          M = a(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
          F = a(/<%[\w\W]*|[\w\W]*%>/gm),
          R = a(/\${[\w\W]*}/gm),
          I = a(/^data-[\-\w.\u00B7-\uFFFF]/),
          U = a(/^aria-[\-\w]+$/),
          H = a(
            /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
          ),
          z = a(/^(?:\w+script|data):/i),
          K = a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
          W = a(/^html$/i);
        var V = Object.freeze({
          __proto__: null,
          MUSTACHE_EXPR: M,
          ERB_EXPR: F,
          TMPLIT_EXPR: R,
          DATA_ATTR: I,
          ARIA_ATTR: U,
          IS_ALLOWED_URI: H,
          IS_SCRIPT_OR_DATA: z,
          ATTR_WHITESPACE: K,
          DOCTYPE_NAME: W,
        });
        const Z = () => ("undefined" == typeof window ? null : window),
          G = function (t, e) {
            if ("object" != typeof t || "function" != typeof t.createPolicy)
              return null;
            let n = null;
            e &&
              e.hasAttribute("data-tt-policy-suffix") &&
              (n = e.getAttribute("data-tt-policy-suffix"));
            const r = "dompurify" + (n ? "#" + n : "");
            try {
              return t.createPolicy(r, {
                createHTML: (t) => t,
                createScriptURL: (t) => t,
              });
            } catch (t) {
              return (
                console.warn(
                  "TrustedTypes policy " + r + " could not be created."
                ),
                null
              );
            }
          };
        return (function e() {
          let n =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : Z();
          const r = (t) => e(t);
          if (
            ((r.version = "3.0.3"),
            (r.removed = []),
            !n || !n.document || 9 !== n.document.nodeType)
          )
            return (r.isSupported = !1), r;
          const o = n.document,
            a = o.currentScript;
          let { document: s } = n;
          const {
              DocumentFragment: l,
              HTMLTemplateElement: u,
              Node: _,
              Element: w,
              NodeFilter: M,
              NamedNodeMap: F = n.NamedNodeMap || n.MozNamedAttrMap,
              HTMLFormElement: R,
              DOMParser: I,
              trustedTypes: U,
            } = n,
            z = w.prototype,
            K = k(z, "cloneNode"),
            Y = k(z, "nextSibling"),
            $ = k(z, "childNodes"),
            X = k(z, "parentNode");
          if ("function" == typeof u) {
            const t = s.createElement("template");
            t.content &&
              t.content.ownerDocument &&
              (s = t.content.ownerDocument);
          }
          let Q,
            J = "";
          const {
              implementation: tt,
              createNodeIterator: et,
              createDocumentFragment: nt,
              getElementsByTagName: rt,
            } = s,
            { importNode: ot } = o;
          let it = {};
          r.isSupported =
            "function" == typeof t &&
            "function" == typeof X &&
            tt &&
            void 0 !== tt.createHTMLDocument;
          const {
            MUSTACHE_EXPR: at,
            ERB_EXPR: st,
            TMPLIT_EXPR: lt,
            DATA_ATTR: ut,
            ARIA_ATTR: ct,
            IS_SCRIPT_OR_DATA: ft,
            ATTR_WHITESPACE: ht,
          } = V;
          let { IS_ALLOWED_URI: pt } = V,
            dt = null;
          const yt = A({}, [...O, ...C, ...T, ...j, ...P]);
          let gt = null;
          const mt = A({}, [...q, ...L, ...D, ...B]);
          let vt = Object.seal(
              Object.create(null, {
                tagNameCheck: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: null,
                },
                attributeNameCheck: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: null,
                },
                allowCustomizedBuiltInElements: {
                  writable: !0,
                  configurable: !1,
                  enumerable: !0,
                  value: !1,
                },
              })
            ),
            bt = null,
            xt = null,
            _t = !0,
            wt = !0,
            At = !1,
            Et = !0,
            kt = !1,
            Ot = !1,
            Ct = !1,
            Tt = !1,
            Nt = !1,
            jt = !1,
            St = !1,
            Pt = !0,
            qt = !1;
          const Lt = "user-content-";
          let Dt = !0,
            Bt = !1,
            Mt = {},
            Ft = null;
          const Rt = A({}, [
            "annotation-xml",
            "audio",
            "colgroup",
            "desc",
            "foreignobject",
            "head",
            "iframe",
            "math",
            "mi",
            "mn",
            "mo",
            "ms",
            "mtext",
            "noembed",
            "noframes",
            "noscript",
            "plaintext",
            "script",
            "style",
            "svg",
            "template",
            "thead",
            "title",
            "video",
            "xmp",
          ]);
          let It = null;
          const Ut = A({}, [
            "audio",
            "video",
            "img",
            "source",
            "image",
            "track",
          ]);
          let Ht = null;
          const zt = A({}, [
              "alt",
              "class",
              "for",
              "id",
              "label",
              "name",
              "pattern",
              "placeholder",
              "role",
              "summary",
              "title",
              "value",
              "style",
              "xmlns",
            ]),
            Kt = "http://www.w3.org/1998/Math/MathML",
            Wt = "http://www.w3.org/2000/svg",
            Vt = "http://www.w3.org/1999/xhtml";
          let Zt = Vt,
            Gt = !1,
            Yt = null;
          const $t = A({}, [Kt, Wt, Vt], d);
          let Xt;
          const Qt = ["application/xhtml+xml", "text/html"],
            Jt = "text/html";
          let te,
            ee = null;
          const ne = s.createElement("form"),
            re = function (t) {
              return t instanceof RegExp || t instanceof Function;
            },
            oe = function (t) {
              if (!ee || ee !== t) {
                if (
                  ((t && "object" == typeof t) || (t = {}),
                  (t = E(t)),
                  (Xt = Xt =
                    -1 === Qt.indexOf(t.PARSER_MEDIA_TYPE)
                      ? Jt
                      : t.PARSER_MEDIA_TYPE),
                  (te = "application/xhtml+xml" === Xt ? d : p),
                  (dt = "ALLOWED_TAGS" in t ? A({}, t.ALLOWED_TAGS, te) : yt),
                  (gt = "ALLOWED_ATTR" in t ? A({}, t.ALLOWED_ATTR, te) : mt),
                  (Yt =
                    "ALLOWED_NAMESPACES" in t
                      ? A({}, t.ALLOWED_NAMESPACES, d)
                      : $t),
                  (Ht =
                    "ADD_URI_SAFE_ATTR" in t
                      ? A(E(zt), t.ADD_URI_SAFE_ATTR, te)
                      : zt),
                  (It =
                    "ADD_DATA_URI_TAGS" in t
                      ? A(E(Ut), t.ADD_DATA_URI_TAGS, te)
                      : Ut),
                  (Ft =
                    "FORBID_CONTENTS" in t ? A({}, t.FORBID_CONTENTS, te) : Rt),
                  (bt = "FORBID_TAGS" in t ? A({}, t.FORBID_TAGS, te) : {}),
                  (xt = "FORBID_ATTR" in t ? A({}, t.FORBID_ATTR, te) : {}),
                  (Mt = "USE_PROFILES" in t && t.USE_PROFILES),
                  (_t = !1 !== t.ALLOW_ARIA_ATTR),
                  (wt = !1 !== t.ALLOW_DATA_ATTR),
                  (At = t.ALLOW_UNKNOWN_PROTOCOLS || !1),
                  (Et = !1 !== t.ALLOW_SELF_CLOSE_IN_ATTR),
                  (kt = t.SAFE_FOR_TEMPLATES || !1),
                  (Ot = t.WHOLE_DOCUMENT || !1),
                  (Nt = t.RETURN_DOM || !1),
                  (jt = t.RETURN_DOM_FRAGMENT || !1),
                  (St = t.RETURN_TRUSTED_TYPE || !1),
                  (Tt = t.FORCE_BODY || !1),
                  (Pt = !1 !== t.SANITIZE_DOM),
                  (qt = t.SANITIZE_NAMED_PROPS || !1),
                  (Dt = !1 !== t.KEEP_CONTENT),
                  (Bt = t.IN_PLACE || !1),
                  (pt = t.ALLOWED_URI_REGEXP || H),
                  (Zt = t.NAMESPACE || Vt),
                  (vt = t.CUSTOM_ELEMENT_HANDLING || {}),
                  t.CUSTOM_ELEMENT_HANDLING &&
                    re(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                    (vt.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                  t.CUSTOM_ELEMENT_HANDLING &&
                    re(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                    (vt.attributeNameCheck =
                      t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                  t.CUSTOM_ELEMENT_HANDLING &&
                    "boolean" ==
                      typeof t.CUSTOM_ELEMENT_HANDLING
                        .allowCustomizedBuiltInElements &&
                    (vt.allowCustomizedBuiltInElements =
                      t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                  kt && (wt = !1),
                  jt && (Nt = !0),
                  Mt &&
                    ((dt = A({}, [...P])),
                    (gt = []),
                    !0 === Mt.html && (A(dt, O), A(gt, q)),
                    !0 === Mt.svg && (A(dt, C), A(gt, L), A(gt, B)),
                    !0 === Mt.svgFilters && (A(dt, T), A(gt, L), A(gt, B)),
                    !0 === Mt.mathMl && (A(dt, j), A(gt, D), A(gt, B))),
                  t.ADD_TAGS &&
                    (dt === yt && (dt = E(dt)), A(dt, t.ADD_TAGS, te)),
                  t.ADD_ATTR &&
                    (gt === mt && (gt = E(gt)), A(gt, t.ADD_ATTR, te)),
                  t.ADD_URI_SAFE_ATTR && A(Ht, t.ADD_URI_SAFE_ATTR, te),
                  t.FORBID_CONTENTS &&
                    (Ft === Rt && (Ft = E(Ft)), A(Ft, t.FORBID_CONTENTS, te)),
                  Dt && (dt["#text"] = !0),
                  Ot && A(dt, ["html", "head", "body"]),
                  dt.table && (A(dt, ["tbody"]), delete bt.tbody),
                  t.TRUSTED_TYPES_POLICY)
                ) {
                  if ("function" != typeof t.TRUSTED_TYPES_POLICY.createHTML)
                    throw x(
                      'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'
                    );
                  if (
                    "function" != typeof t.TRUSTED_TYPES_POLICY.createScriptURL
                  )
                    throw x(
                      'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
                    );
                  (Q = t.TRUSTED_TYPES_POLICY), (J = Q.createHTML(""));
                } else
                  void 0 === Q && (Q = G(U, a)),
                    null !== Q &&
                      "string" == typeof J &&
                      (J = Q.createHTML(""));
                i && i(t), (ee = t);
              }
            },
            ie = A({}, ["mi", "mo", "mn", "ms", "mtext"]),
            ae = A({}, ["foreignobject", "desc", "title", "annotation-xml"]),
            se = A({}, ["title", "style", "font", "a", "script"]),
            le = A({}, C);
          A(le, T), A(le, N);
          const ue = A({}, j);
          A(ue, S);
          const ce = function (t) {
              let e = X(t);
              (e && e.tagName) ||
                (e = { namespaceURI: Zt, tagName: "template" });
              const n = p(t.tagName),
                r = p(e.tagName);
              return (
                !!Yt[t.namespaceURI] &&
                (t.namespaceURI === Wt
                  ? e.namespaceURI === Vt
                    ? "svg" === n
                    : e.namespaceURI === Kt
                    ? "svg" === n && ("annotation-xml" === r || ie[r])
                    : Boolean(le[n])
                  : t.namespaceURI === Kt
                  ? e.namespaceURI === Vt
                    ? "math" === n
                    : e.namespaceURI === Wt
                    ? "math" === n && ae[r]
                    : Boolean(ue[n])
                  : t.namespaceURI === Vt
                  ? !(e.namespaceURI === Wt && !ae[r]) &&
                    !(e.namespaceURI === Kt && !ie[r]) &&
                    !ue[n] &&
                    (se[n] || !le[n])
                  : !("application/xhtml+xml" !== Xt || !Yt[t.namespaceURI]))
              );
            },
            fe = function (t) {
              h(r.removed, { element: t });
              try {
                t.parentNode.removeChild(t);
              } catch (e) {
                t.remove();
              }
            },
            he = function (t, e) {
              try {
                h(r.removed, { attribute: e.getAttributeNode(t), from: e });
              } catch (t) {
                h(r.removed, { attribute: null, from: e });
              }
              if ((e.removeAttribute(t), "is" === t && !gt[t]))
                if (Nt || jt)
                  try {
                    fe(e);
                  } catch (t) {}
                else
                  try {
                    e.setAttribute(t, "");
                  } catch (t) {}
            },
            pe = function (t) {
              let e, n;
              if (Tt) t = "<remove></remove>" + t;
              else {
                const e = y(t, /^[\r\n\t ]+/);
                n = e && e[0];
              }
              "application/xhtml+xml" === Xt &&
                Zt === Vt &&
                (t =
                  '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
                  t +
                  "</body></html>");
              const r = Q ? Q.createHTML(t) : t;
              if (Zt === Vt)
                try {
                  e = new I().parseFromString(r, Xt);
                } catch (t) {}
              if (!e || !e.documentElement) {
                e = tt.createDocument(Zt, "template", null);
                try {
                  e.documentElement.innerHTML = Gt ? J : r;
                } catch (t) {}
              }
              const o = e.body || e.documentElement;
              return (
                t &&
                  n &&
                  o.insertBefore(s.createTextNode(n), o.childNodes[0] || null),
                Zt === Vt
                  ? rt.call(e, Ot ? "html" : "body")[0]
                  : Ot
                  ? e.documentElement
                  : o
              );
            },
            de = function (t) {
              return et.call(
                t.ownerDocument || t,
                t,
                M.SHOW_ELEMENT | M.SHOW_COMMENT | M.SHOW_TEXT,
                null,
                !1
              );
            },
            ye = function (t) {
              return (
                t instanceof R &&
                ("string" != typeof t.nodeName ||
                  "string" != typeof t.textContent ||
                  "function" != typeof t.removeChild ||
                  !(t.attributes instanceof F) ||
                  "function" != typeof t.removeAttribute ||
                  "function" != typeof t.setAttribute ||
                  "string" != typeof t.namespaceURI ||
                  "function" != typeof t.insertBefore ||
                  "function" != typeof t.hasChildNodes)
              );
            },
            ge = function (t) {
              return "object" == typeof _
                ? t instanceof _
                : t &&
                    "object" == typeof t &&
                    "number" == typeof t.nodeType &&
                    "string" == typeof t.nodeName;
            },
            me = function (t, e, n) {
              it[t] &&
                c(it[t], (t) => {
                  t.call(r, e, n, ee);
                });
            },
            ve = function (t) {
              let e;
              if ((me("beforeSanitizeElements", t, null), ye(t)))
                return fe(t), !0;
              const n = te(t.nodeName);
              if (
                (me("uponSanitizeElement", t, { tagName: n, allowedTags: dt }),
                t.hasChildNodes() &&
                  !ge(t.firstElementChild) &&
                  (!ge(t.content) || !ge(t.content.firstElementChild)) &&
                  b(/<[/\w]/g, t.innerHTML) &&
                  b(/<[/\w]/g, t.textContent))
              )
                return fe(t), !0;
              if (!dt[n] || bt[n]) {
                if (!bt[n] && xe(n)) {
                  if (
                    vt.tagNameCheck instanceof RegExp &&
                    b(vt.tagNameCheck, n)
                  )
                    return !1;
                  if (vt.tagNameCheck instanceof Function && vt.tagNameCheck(n))
                    return !1;
                }
                if (Dt && !Ft[n]) {
                  const e = X(t) || t.parentNode,
                    n = $(t) || t.childNodes;
                  if (n && e)
                    for (let r = n.length - 1; r >= 0; --r)
                      e.insertBefore(K(n[r], !0), Y(t));
                }
                return fe(t), !0;
              }
              return t instanceof w && !ce(t)
                ? (fe(t), !0)
                : ("noscript" !== n && "noembed" !== n) ||
                  !b(/<\/no(script|embed)/i, t.innerHTML)
                ? (kt &&
                    3 === t.nodeType &&
                    ((e = t.textContent),
                    (e = g(e, at, " ")),
                    (e = g(e, st, " ")),
                    (e = g(e, lt, " ")),
                    t.textContent !== e &&
                      (h(r.removed, { element: t.cloneNode() }),
                      (t.textContent = e))),
                  me("afterSanitizeElements", t, null),
                  !1)
                : (fe(t), !0);
            },
            be = function (t, e, n) {
              if (Pt && ("id" === e || "name" === e) && (n in s || n in ne))
                return !1;
              if (wt && !xt[e] && b(ut, e));
              else if (_t && b(ct, e));
              else if (!gt[e] || xt[e]) {
                if (
                  !(
                    (xe(t) &&
                      ((vt.tagNameCheck instanceof RegExp &&
                        b(vt.tagNameCheck, t)) ||
                        (vt.tagNameCheck instanceof Function &&
                          vt.tagNameCheck(t))) &&
                      ((vt.attributeNameCheck instanceof RegExp &&
                        b(vt.attributeNameCheck, e)) ||
                        (vt.attributeNameCheck instanceof Function &&
                          vt.attributeNameCheck(e)))) ||
                    ("is" === e &&
                      vt.allowCustomizedBuiltInElements &&
                      ((vt.tagNameCheck instanceof RegExp &&
                        b(vt.tagNameCheck, n)) ||
                        (vt.tagNameCheck instanceof Function &&
                          vt.tagNameCheck(n))))
                  )
                )
                  return !1;
              } else if (Ht[e]);
              else if (b(pt, g(n, ht, "")));
              else if (
                ("src" !== e && "xlink:href" !== e && "href" !== e) ||
                "script" === t ||
                0 !== m(n, "data:") ||
                !It[t]
              )
                if (At && !b(ft, g(n, ht, "")));
                else if (n) return !1;
              return !0;
            },
            xe = function (t) {
              return t.indexOf("-") > 0;
            },
            _e = function (t) {
              let e, n, o, i;
              me("beforeSanitizeAttributes", t, null);
              const { attributes: a } = t;
              if (!a) return;
              const s = {
                attrName: "",
                attrValue: "",
                keepAttr: !0,
                allowedAttributes: gt,
              };
              for (i = a.length; i--; ) {
                e = a[i];
                const { name: l, namespaceURI: u } = e;
                if (
                  ((n = "value" === l ? e.value : v(e.value)),
                  (o = te(l)),
                  (s.attrName = o),
                  (s.attrValue = n),
                  (s.keepAttr = !0),
                  (s.forceKeepAttr = void 0),
                  me("uponSanitizeAttribute", t, s),
                  (n = s.attrValue),
                  s.forceKeepAttr)
                )
                  continue;
                if ((he(l, t), !s.keepAttr)) continue;
                if (!Et && b(/\/>/i, n)) {
                  he(l, t);
                  continue;
                }
                kt &&
                  ((n = g(n, at, " ")),
                  (n = g(n, st, " ")),
                  (n = g(n, lt, " ")));
                const c = te(t.nodeName);
                if (be(c, o, n)) {
                  if (
                    (!qt ||
                      ("id" !== o && "name" !== o) ||
                      (he(l, t), (n = Lt + n)),
                    Q &&
                      "object" == typeof U &&
                      "function" == typeof U.getAttributeType)
                  )
                    if (u);
                    else
                      switch (U.getAttributeType(c, o)) {
                        case "TrustedHTML":
                          n = Q.createHTML(n);
                          break;
                        case "TrustedScriptURL":
                          n = Q.createScriptURL(n);
                      }
                  try {
                    u ? t.setAttributeNS(u, l, n) : t.setAttribute(l, n),
                      f(r.removed);
                  } catch (t) {}
                }
              }
              me("afterSanitizeAttributes", t, null);
            },
            we = function t(e) {
              let n;
              const r = de(e);
              for (me("beforeSanitizeShadowDOM", e, null); (n = r.nextNode()); )
                me("uponSanitizeShadowNode", n, null),
                  ve(n) || (n.content instanceof l && t(n.content), _e(n));
              me("afterSanitizeShadowDOM", e, null);
            };
          return (
            (r.sanitize = function (t) {
              let e,
                n,
                i,
                a,
                s =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
              if (
                ((Gt = !t),
                Gt && (t = "\x3c!--\x3e"),
                "string" != typeof t && !ge(t))
              ) {
                if ("function" != typeof t.toString)
                  throw x("toString is not a function");
                if ("string" != typeof (t = t.toString()))
                  throw x("dirty is not a string, aborting");
              }
              if (!r.isSupported) return t;
              if (
                (Ct || oe(s),
                (r.removed = []),
                "string" == typeof t && (Bt = !1),
                Bt)
              ) {
                if (t.nodeName) {
                  const e = te(t.nodeName);
                  if (!dt[e] || bt[e])
                    throw x(
                      "root node is forbidden and cannot be sanitized in-place"
                    );
                }
              } else if (t instanceof _)
                (e = pe("\x3c!----\x3e")),
                  (n = e.ownerDocument.importNode(t, !0)),
                  (1 === n.nodeType && "BODY" === n.nodeName) ||
                  "HTML" === n.nodeName
                    ? (e = n)
                    : e.appendChild(n);
              else {
                if (!Nt && !kt && !Ot && -1 === t.indexOf("<"))
                  return Q && St ? Q.createHTML(t) : t;
                if (((e = pe(t)), !e)) return Nt ? null : St ? J : "";
              }
              e && Tt && fe(e.firstChild);
              const u = de(Bt ? t : e);
              for (; (i = u.nextNode()); )
                ve(i) || (i.content instanceof l && we(i.content), _e(i));
              if (Bt) return t;
              if (Nt) {
                if (jt)
                  for (a = nt.call(e.ownerDocument); e.firstChild; )
                    a.appendChild(e.firstChild);
                else a = e;
                return (
                  (gt.shadowroot || gt.shadowrootmod) &&
                    (a = ot.call(o, a, !0)),
                  a
                );
              }
              let c = Ot ? e.outerHTML : e.innerHTML;
              return (
                Ot &&
                  dt["!doctype"] &&
                  e.ownerDocument &&
                  e.ownerDocument.doctype &&
                  e.ownerDocument.doctype.name &&
                  b(W, e.ownerDocument.doctype.name) &&
                  (c = "<!DOCTYPE " + e.ownerDocument.doctype.name + ">\n" + c),
                kt &&
                  ((c = g(c, at, " ")),
                  (c = g(c, st, " ")),
                  (c = g(c, lt, " "))),
                Q && St ? Q.createHTML(c) : c
              );
            }),
            (r.setConfig = function (t) {
              oe(t), (Ct = !0);
            }),
            (r.clearConfig = function () {
              (ee = null), (Ct = !1);
            }),
            (r.isValidAttribute = function (t, e, n) {
              ee || oe({});
              const r = te(t),
                o = te(e);
              return be(r, o, n);
            }),
            (r.addHook = function (t, e) {
              "function" == typeof e && ((it[t] = it[t] || []), h(it[t], e));
            }),
            (r.removeHook = function (t) {
              if (it[t]) return f(it[t]);
            }),
            (r.removeHooks = function (t) {
              it[t] && (it[t] = []);
            }),
            (r.removeAllHooks = function () {
              it = {};
            }),
            r
          );
        })();
      })();
    },
    1472: function (t, e, n) {
      "use strict";
      function r(t, e) {
        if (Array.prototype.indexOf) return t.indexOf(e);
        for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
        return -1;
      }
      function o(t, e) {
        for (var n = t.length - 1; n >= 0; n--)
          !0 === e(t[n]) && t.splice(n, 1);
      }
      function i(t) {
        throw new Error("Unhandled case for value: '".concat(t, "'"));
      }
      var a = (function () {
        function t(t) {
          void 0 === t && (t = {}),
            (this.tagName = ""),
            (this.attrs = {}),
            (this.innerHTML = ""),
            (this.whitespaceRegex = /\s+/),
            (this.tagName = t.tagName || ""),
            (this.attrs = t.attrs || {}),
            (this.innerHTML = t.innerHtml || t.innerHTML || "");
        }
        return (
          (t.prototype.setTagName = function (t) {
            return (this.tagName = t), this;
          }),
          (t.prototype.getTagName = function () {
            return this.tagName || "";
          }),
          (t.prototype.setAttr = function (t, e) {
            return (this.getAttrs()[t] = e), this;
          }),
          (t.prototype.getAttr = function (t) {
            return this.getAttrs()[t];
          }),
          (t.prototype.setAttrs = function (t) {
            return Object.assign(this.getAttrs(), t), this;
          }),
          (t.prototype.getAttrs = function () {
            return this.attrs || (this.attrs = {});
          }),
          (t.prototype.setClass = function (t) {
            return this.setAttr("class", t);
          }),
          (t.prototype.addClass = function (t) {
            for (
              var e,
                n = this.getClass(),
                o = this.whitespaceRegex,
                i = n ? n.split(o) : [],
                a = t.split(o);
              (e = a.shift());

            )
              -1 === r(i, e) && i.push(e);
            return (this.getAttrs().class = i.join(" ")), this;
          }),
          (t.prototype.removeClass = function (t) {
            for (
              var e,
                n = this.getClass(),
                o = this.whitespaceRegex,
                i = n ? n.split(o) : [],
                a = t.split(o);
              i.length && (e = a.shift());

            ) {
              var s = r(i, e);
              -1 !== s && i.splice(s, 1);
            }
            return (this.getAttrs().class = i.join(" ")), this;
          }),
          (t.prototype.getClass = function () {
            return this.getAttrs().class || "";
          }),
          (t.prototype.hasClass = function (t) {
            return -1 !== (" " + this.getClass() + " ").indexOf(" " + t + " ");
          }),
          (t.prototype.setInnerHTML = function (t) {
            return (this.innerHTML = t), this;
          }),
          (t.prototype.setInnerHtml = function (t) {
            return this.setInnerHTML(t);
          }),
          (t.prototype.getInnerHTML = function () {
            return this.innerHTML || "";
          }),
          (t.prototype.getInnerHtml = function () {
            return this.getInnerHTML();
          }),
          (t.prototype.toAnchorString = function () {
            var t = this.getTagName(),
              e = this.buildAttrsStr();
            return [
              "<",
              t,
              (e = e ? " " + e : ""),
              ">",
              this.getInnerHtml(),
              "</",
              t,
              ">",
            ].join("");
          }),
          (t.prototype.buildAttrsStr = function () {
            if (!this.attrs) return "";
            var t = this.getAttrs(),
              e = [];
            for (var n in t)
              t.hasOwnProperty(n) && e.push(n + '="' + t[n] + '"');
            return e.join(" ");
          }),
          t
        );
      })();
      var s = (function () {
          function t(t) {
            void 0 === t && (t = {}),
              (this.newWindow = !1),
              (this.truncate = {}),
              (this.className = ""),
              (this.newWindow = t.newWindow || !1),
              (this.truncate = t.truncate || {}),
              (this.className = t.className || "");
          }
          return (
            (t.prototype.build = function (t) {
              return new a({
                tagName: "a",
                attrs: this.createAttrs(t),
                innerHtml: this.processAnchorText(t.getAnchorText()),
              });
            }),
            (t.prototype.createAttrs = function (t) {
              var e = { href: t.getAnchorHref() },
                n = this.createCssClass(t);
              return (
                n && (e.class = n),
                this.newWindow &&
                  ((e.target = "_blank"), (e.rel = "noopener noreferrer")),
                this.truncate &&
                  this.truncate.length &&
                  this.truncate.length < t.getAnchorText().length &&
                  (e.title = t.getAnchorHref()),
                e
              );
            }),
            (t.prototype.createCssClass = function (t) {
              var e = this.className;
              if (e) {
                for (
                  var n = [e], r = t.getCssClassSuffixes(), o = 0, i = r.length;
                  o < i;
                  o++
                )
                  n.push(e + "-" + r[o]);
                return n.join(" ");
              }
              return "";
            }),
            (t.prototype.processAnchorText = function (t) {
              return (t = this.doTruncate(t));
            }),
            (t.prototype.doTruncate = function (t) {
              var e = this.truncate;
              if (!e || !e.length) return t;
              var n = e.length,
                r = e.location;
              return "smart" === r
                ? (function (t, e, n) {
                    var r, o;
                    null == n
                      ? ((n = "&hellip;"), (o = 3), (r = 8))
                      : ((o = n.length), (r = n.length));
                    var i = function (t) {
                        var e = "";
                        return (
                          t.scheme && t.host && (e += t.scheme + "://"),
                          t.host && (e += t.host),
                          t.path && (e += "/" + t.path),
                          t.query && (e += "?" + t.query),
                          t.fragment && (e += "#" + t.fragment),
                          e
                        );
                      },
                      a = function (t, e) {
                        var r = e / 2,
                          o = Math.ceil(r),
                          i = -1 * Math.floor(r),
                          a = "";
                        return (
                          i < 0 && (a = t.substr(i)), t.substr(0, o) + n + a
                        );
                      };
                    if (t.length <= e) return t;
                    var s = e - o,
                      l = (function (t) {
                        var e = {},
                          n = t,
                          r = n.match(/^([a-z]+):\/\//i);
                        return (
                          r && ((e.scheme = r[1]), (n = n.substr(r[0].length))),
                          (r = n.match(/^(.*?)(?=(\?|#|\/|$))/i)) &&
                            ((e.host = r[1]), (n = n.substr(r[0].length))),
                          (r = n.match(/^\/(.*?)(?=(\?|#|$))/i)) &&
                            ((e.path = r[1]), (n = n.substr(r[0].length))),
                          (r = n.match(/^\?(.*?)(?=(#|$))/i)) &&
                            ((e.query = r[1]), (n = n.substr(r[0].length))),
                          (r = n.match(/^#(.*?)$/i)) && (e.fragment = r[1]),
                          e
                        );
                      })(t);
                    if (l.query) {
                      var u = l.query.match(/^(.*?)(?=(\?|\#))(.*?)$/i);
                      u &&
                        ((l.query = l.query.substr(0, u[1].length)),
                        (t = i(l)));
                    }
                    if (t.length <= e) return t;
                    if (
                      (l.host &&
                        ((l.host = l.host.replace(/^www\./, "")), (t = i(l))),
                      t.length <= e)
                    )
                      return t;
                    var c = "";
                    if ((l.host && (c += l.host), c.length >= s))
                      return l.host.length == e
                        ? (l.host.substr(0, e - o) + n).substr(0, s + r)
                        : a(c, s).substr(0, s + r);
                    var f = "";
                    if (
                      (l.path && (f += "/" + l.path),
                      l.query && (f += "?" + l.query),
                      f)
                    ) {
                      if ((c + f).length >= s)
                        return (c + f).length == e
                          ? (c + f).substr(0, e)
                          : (c + a(f, s - c.length)).substr(0, s + r);
                      c += f;
                    }
                    if (l.fragment) {
                      var h = "#" + l.fragment;
                      if ((c + h).length >= s)
                        return (c + h).length == e
                          ? (c + h).substr(0, e)
                          : (c + a(h, s - c.length)).substr(0, s + r);
                      c += h;
                    }
                    if (l.scheme && l.host) {
                      var p = l.scheme + "://";
                      if ((c + p).length < s) return (p + c).substr(0, e);
                    }
                    if (c.length <= e) return c;
                    var d = "";
                    return (
                      s > 0 && (d = c.substr(-1 * Math.floor(s / 2))),
                      (c.substr(0, Math.ceil(s / 2)) + n + d).substr(0, s + r)
                    );
                  })(t, n)
                : "middle" === r
                ? (function (t, e, n) {
                    if (t.length <= e) return t;
                    var r, o;
                    null == n
                      ? ((n = "&hellip;"), (r = 8), (o = 3))
                      : ((r = n.length), (o = n.length));
                    var i = e - o,
                      a = "";
                    return (
                      i > 0 && (a = t.substr(-1 * Math.floor(i / 2))),
                      (t.substr(0, Math.ceil(i / 2)) + n + a).substr(0, i + r)
                    );
                  })(t, n)
                : (function (t, e, n) {
                    return (function (t, e, n) {
                      var r;
                      return (
                        t.length > e &&
                          (null == n
                            ? ((n = "&hellip;"), (r = 3))
                            : (r = n.length),
                          (t = t.substring(0, e - r) + n)),
                        t
                      );
                    })(t, e, n);
                  })(t, n);
            }),
            t
          );
        })(),
        l = (function () {
          function t(t) {
            (this.__jsduckDummyDocProp = null),
              (this.matchedText = ""),
              (this.offset = 0),
              (this.tagBuilder = t.tagBuilder),
              (this.matchedText = t.matchedText),
              (this.offset = t.offset);
          }
          return (
            (t.prototype.getMatchedText = function () {
              return this.matchedText;
            }),
            (t.prototype.setOffset = function (t) {
              this.offset = t;
            }),
            (t.prototype.getOffset = function () {
              return this.offset;
            }),
            (t.prototype.getCssClassSuffixes = function () {
              return [this.getType()];
            }),
            (t.prototype.buildTag = function () {
              return this.tagBuilder.build(this);
            }),
            t
          );
        })(),
        u = function (t, e) {
          return (u =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            })(t, e);
        };
      function c(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Class extends value " + String(e) + " is not a constructor or null"
          );
        function n() {
          this.constructor = t;
        }
        u(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      var f = function () {
        return (f =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var o in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
          }).apply(this, arguments);
      };
      Object.create;
      Object.create;
      var h,
        p = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (n.email = ""), (n.email = e.email), n;
          }
          return (
            c(e, t),
            (e.prototype.getType = function () {
              return "email";
            }),
            (e.prototype.getEmail = function () {
              return this.email;
            }),
            (e.prototype.getAnchorHref = function () {
              return "mailto:" + this.email;
            }),
            (e.prototype.getAnchorText = function () {
              return this.email;
            }),
            e
          );
        })(l),
        d = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              (n.serviceName = ""),
              (n.hashtag = ""),
              (n.serviceName = e.serviceName),
              (n.hashtag = e.hashtag),
              n
            );
          }
          return (
            c(e, t),
            (e.prototype.getType = function () {
              return "hashtag";
            }),
            (e.prototype.getServiceName = function () {
              return this.serviceName;
            }),
            (e.prototype.getHashtag = function () {
              return this.hashtag;
            }),
            (e.prototype.getAnchorHref = function () {
              var t = this.serviceName,
                e = this.hashtag;
              switch (t) {
                case "twitter":
                  return "https://twitter.com/hashtag/" + e;
                case "facebook":
                  return "https://www.facebook.com/hashtag/" + e;
                case "instagram":
                  return "https://instagram.com/explore/tags/" + e;
                case "tiktok":
                  return "https://www.tiktok.com/tag/" + e;
                default:
                  throw new Error(
                    "Unknown service name to point hashtag to: " + t
                  );
              }
            }),
            (e.prototype.getAnchorText = function () {
              return "#" + this.hashtag;
            }),
            e
          );
        })(l),
        y = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              (n.serviceName = "twitter"),
              (n.mention = ""),
              (n.mention = e.mention),
              (n.serviceName = e.serviceName),
              n
            );
          }
          return (
            c(e, t),
            (e.prototype.getType = function () {
              return "mention";
            }),
            (e.prototype.getMention = function () {
              return this.mention;
            }),
            (e.prototype.getServiceName = function () {
              return this.serviceName;
            }),
            (e.prototype.getAnchorHref = function () {
              switch (this.serviceName) {
                case "twitter":
                  return "https://twitter.com/" + this.mention;
                case "instagram":
                  return "https://instagram.com/" + this.mention;
                case "soundcloud":
                  return "https://soundcloud.com/" + this.mention;
                case "tiktok":
                  return "https://www.tiktok.com/@" + this.mention;
                default:
                  throw new Error(
                    "Unknown service name to point mention to: " +
                      this.serviceName
                  );
              }
            }),
            (e.prototype.getAnchorText = function () {
              return "@" + this.mention;
            }),
            (e.prototype.getCssClassSuffixes = function () {
              var e = t.prototype.getCssClassSuffixes.call(this),
                n = this.getServiceName();
              return n && e.push(n), e;
            }),
            e
          );
        })(l),
        g = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              (n.number = ""),
              (n.plusSign = !1),
              (n.number = e.number),
              (n.plusSign = e.plusSign),
              n
            );
          }
          return (
            c(e, t),
            (e.prototype.getType = function () {
              return "phone";
            }),
            (e.prototype.getPhoneNumber = function () {
              return this.number;
            }),
            (e.prototype.getNumber = function () {
              return this.getPhoneNumber();
            }),
            (e.prototype.getAnchorHref = function () {
              return "tel:" + (this.plusSign ? "+" : "") + this.number;
            }),
            (e.prototype.getAnchorText = function () {
              return this.matchedText;
            }),
            e
          );
        })(l),
        m = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              (n.url = ""),
              (n.urlMatchType = "scheme"),
              (n.protocolUrlMatch = !1),
              (n.protocolRelativeMatch = !1),
              (n.stripPrefix = { scheme: !0, www: !0 }),
              (n.stripTrailingSlash = !0),
              (n.decodePercentEncoding = !0),
              (n.schemePrefixRegex = /^(https?:\/\/)?/i),
              (n.wwwPrefixRegex = /^(https?:\/\/)?(www\.)?/i),
              (n.protocolRelativeRegex = /^\/\//),
              (n.protocolPrepended = !1),
              (n.urlMatchType = e.urlMatchType),
              (n.url = e.url),
              (n.protocolUrlMatch = e.protocolUrlMatch),
              (n.protocolRelativeMatch = e.protocolRelativeMatch),
              (n.stripPrefix = e.stripPrefix),
              (n.stripTrailingSlash = e.stripTrailingSlash),
              (n.decodePercentEncoding = e.decodePercentEncoding),
              n
            );
          }
          return (
            c(e, t),
            (e.prototype.getType = function () {
              return "url";
            }),
            (e.prototype.getUrlMatchType = function () {
              return this.urlMatchType;
            }),
            (e.prototype.getUrl = function () {
              var t = this.url;
              return (
                this.protocolRelativeMatch ||
                  this.protocolUrlMatch ||
                  this.protocolPrepended ||
                  ((t = this.url = "http://" + t),
                  (this.protocolPrepended = !0)),
                t
              );
            }),
            (e.prototype.getAnchorHref = function () {
              return this.getUrl().replace(/&amp;/g, "&");
            }),
            (e.prototype.getAnchorText = function () {
              var t = this.getMatchedText();
              return (
                this.protocolRelativeMatch &&
                  (t = this.stripProtocolRelativePrefix(t)),
                this.stripPrefix.scheme && (t = this.stripSchemePrefix(t)),
                this.stripPrefix.www && (t = this.stripWwwPrefix(t)),
                this.stripTrailingSlash && (t = this.removeTrailingSlash(t)),
                this.decodePercentEncoding &&
                  (t = this.removePercentEncoding(t)),
                t
              );
            }),
            (e.prototype.stripSchemePrefix = function (t) {
              return t.replace(this.schemePrefixRegex, "");
            }),
            (e.prototype.stripWwwPrefix = function (t) {
              return t.replace(this.wwwPrefixRegex, "$1");
            }),
            (e.prototype.stripProtocolRelativePrefix = function (t) {
              return t.replace(this.protocolRelativeRegex, "");
            }),
            (e.prototype.removeTrailingSlash = function (t) {
              return "/" === t.charAt(t.length - 1) && (t = t.slice(0, -1)), t;
            }),
            (e.prototype.removePercentEncoding = function (t) {
              var e = t
                .replace(/%22/gi, "&quot;")
                .replace(/%26/gi, "&amp;")
                .replace(/%27/gi, "&#39;")
                .replace(/%3C/gi, "&lt;")
                .replace(/%3E/gi, "&gt;");
              try {
                return decodeURIComponent(e);
              } catch (t) {
                return e;
              }
            }),
            e
          );
        })(l),
        v = function (t) {
          (this.__jsduckDummyDocProp = null), (this.tagBuilder = t.tagBuilder);
        },
        b = /[A-Za-z]/,
        x = /[\d]/,
        _ = /[\D]/,
        w = /\s/,
        A = /['"]/,
        E = /[\x00-\x1F\x7F]/,
        k =
          /A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC/
            .source,
        O =
          k +
          /\u2700-\u27bf\udde6-\uddff\ud800-\udbff\udc00-\udfff\ufe0e\ufe0f\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0\ud83c\udffb-\udfff\u200d\u3299\u3297\u303d\u3030\u24c2\ud83c\udd70-\udd71\udd7e-\udd7f\udd8e\udd91-\udd9a\udde6-\uddff\ude01-\ude02\ude1a\ude2f\ude32-\ude3a\ude50-\ude51\u203c\u2049\u25aa-\u25ab\u25b6\u25c0\u25fb-\u25fe\u00a9\u00ae\u2122\u2139\udc04\u2600-\u26FF\u2b05\u2b06\u2b07\u2b1b\u2b1c\u2b50\u2b55\u231a\u231b\u2328\u23cf\u23e9-\u23f3\u23f8-\u23fa\udccf\u2935\u2934\u2190-\u21ff/
            .source +
          /\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D4-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F/
            .source,
        C =
          /0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19/
            .source,
        T = O + C,
        N = O + C,
        j = "(?:[" + C + "]{1,3}\\.){3}[" + C + "]{1,3}",
        S = "[" + N + "](?:[" + N + "\\-]{0,61}[" + N + "])?",
        P = function (t) {
          return "(?=(" + S + "))\\" + t;
        },
        q = function (t) {
          return "(?:" + P(t) + "(?:\\." + P(t + 1) + "){0,126}|" + j + ")";
        },
        L =
          (new RegExp("[" + N + ".\\-]*[" + N + "\\-]"),
          new RegExp("[".concat(N, "]"))),
        D =
          /(?:xn--vermgensberatung-pwb|xn--vermgensberater-ctb|xn--clchc0ea0b2g2a9gcd|xn--w4r85el8fhu5dnra|northwesternmutual|travelersinsurance|vermögensberatung|xn--3oq18vl8pn36a|xn--5su34j936bgsg|xn--bck1b9a5dre4c|xn--mgbah1a3hjkrd|xn--mgbai9azgqp6j|xn--mgberp4a5d4ar|xn--xkc2dl3a5ee0h|vermögensberater|xn--fzys8d69uvgm|xn--mgba7c0bbn0a|xn--mgbcpq6gpa1a|xn--xkc2al3hye2a|americanexpress|kerryproperties|sandvikcoromant|xn--i1b6b1a6a2e|xn--kcrx77d1x4a|xn--lgbbat1ad8j|xn--mgba3a4f16a|xn--mgbaakc7dvf|xn--mgbc0a9azcg|xn--nqv7fs00ema|afamilycompany|americanfamily|bananarepublic|cancerresearch|cookingchannel|kerrylogistics|weatherchannel|xn--54b7fta0cc|xn--6qq986b3xl|xn--80aqecdr1a|xn--b4w605ferd|xn--fiq228c5hs|xn--h2breg3eve|xn--jlq480n2rg|xn--jlq61u9w7b|xn--mgba3a3ejt|xn--mgbaam7a8h|xn--mgbayh7gpa|xn--mgbbh1a71e|xn--mgbca7dzdo|xn--mgbi4ecexp|xn--mgbx4cd0ab|xn--rvc1e0am3e|international|lifeinsurance|travelchannel|wolterskluwer|xn--cckwcxetd|xn--eckvdtc9d|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--h2brj9c8c|xn--tiq49xqyj|xn--yfro4i67o|xn--ygbi2ammx|construction|lplfinancial|scholarships|versicherung|xn--3e0b707e|xn--45br5cyl|xn--4dbrk0ce|xn--80adxhks|xn--80asehdb|xn--8y0a063a|xn--gckr3f0f|xn--mgb9awbf|xn--mgbab2bd|xn--mgbgu82a|xn--mgbpl2fh|xn--mgbt3dhd|xn--mk1bu44c|xn--ngbc5azd|xn--ngbe9e0a|xn--ogbpf8fl|xn--qcka1pmc|accountants|barclaycard|blackfriday|blockbuster|bridgestone|calvinklein|contractors|creditunion|engineering|enterprises|foodnetwork|investments|kerryhotels|lamborghini|motorcycles|olayangroup|photography|playstation|productions|progressive|redumbrella|williamhill|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--2scrj9c|xn--3bst00m|xn--3ds443g|xn--3hcrj9c|xn--42c2d9a|xn--45brj9c|xn--55qw42g|xn--6frz82g|xn--80ao21a|xn--9krt00a|xn--cck2b3b|xn--czr694b|xn--d1acj3b|xn--efvy88h|xn--fct429k|xn--fjq720a|xn--flw351e|xn--g2xx48c|xn--gecrj9c|xn--gk3at1e|xn--h2brj9c|xn--hxt814e|xn--imr513n|xn--j6w193g|xn--jvr189m|xn--kprw13d|xn--kpry57d|xn--mgbbh1a|xn--mgbtx2b|xn--mix891f|xn--nyqy26a|xn--otu796d|xn--pgbs0dh|xn--q9jyb4c|xn--rhqv96g|xn--rovu88b|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--vuq861b|xn--w4rs40l|xn--xhq521b|xn--zfr164b|சிங்கப்பூர்|accountant|apartments|associates|basketball|bnpparibas|boehringer|capitalone|consulting|creditcard|cuisinella|eurovision|extraspace|foundation|healthcare|immobilien|industries|management|mitsubishi|nextdirect|properties|protection|prudential|realestate|republican|restaurant|schaeffler|swiftcover|tatamotors|technology|university|vlaanderen|volkswagen|xn--30rr7y|xn--3pxu8k|xn--45q11c|xn--4gbrim|xn--55qx5d|xn--5tzm5g|xn--80aswg|xn--90a3ac|xn--9dbq2a|xn--9et52u|xn--c2br7g|xn--cg4bki|xn--czrs0t|xn--czru2d|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--io0a7i|xn--kput3i|xn--mxtq1m|xn--o3cw4h|xn--pssy2u|xn--q7ce6a|xn--unup4y|xn--wgbh1c|xn--wgbl6a|xn--y9a3aq|accenture|alfaromeo|allfinanz|amsterdam|analytics|aquarelle|barcelona|bloomberg|christmas|community|directory|education|equipment|fairwinds|financial|firestone|fresenius|frontdoor|furniture|goldpoint|hisamitsu|homedepot|homegoods|homesense|institute|insurance|kuokgroup|lancaster|landrover|lifestyle|marketing|marshalls|melbourne|microsoft|panasonic|passagens|pramerica|richardli|scjohnson|shangrila|solutions|statebank|statefarm|stockholm|travelers|vacations|xn--90ais|xn--c1avg|xn--d1alf|xn--e1a4c|xn--fhbei|xn--j1aef|xn--j1amh|xn--l1acc|xn--ngbrx|xn--nqv7f|xn--p1acf|xn--qxa6a|xn--tckwe|xn--vhquv|yodobashi|موريتانيا|abudhabi|airforce|allstate|attorney|barclays|barefoot|bargains|baseball|boutique|bradesco|broadway|brussels|budapest|builders|business|capetown|catering|catholic|cipriani|cityeats|cleaning|clinique|clothing|commbank|computer|delivery|deloitte|democrat|diamonds|discount|discover|download|engineer|ericsson|etisalat|exchange|feedback|fidelity|firmdale|football|frontier|goodyear|grainger|graphics|guardian|hdfcbank|helsinki|holdings|hospital|infiniti|ipiranga|istanbul|jpmorgan|lighting|lundbeck|marriott|maserati|mckinsey|memorial|merckmsd|mortgage|observer|partners|pharmacy|pictures|plumbing|property|redstone|reliance|saarland|samsclub|security|services|shopping|showtime|softbank|software|stcgroup|supplies|training|vanguard|ventures|verisign|woodside|xn--90ae|xn--node|xn--p1ai|xn--qxam|yokohama|السعودية|abogado|academy|agakhan|alibaba|android|athleta|auction|audible|auspost|avianca|banamex|bauhaus|bentley|bestbuy|booking|brother|bugatti|capital|caravan|careers|channel|charity|chintai|citadel|clubmed|college|cologne|comcast|company|compare|contact|cooking|corsica|country|coupons|courses|cricket|cruises|dentist|digital|domains|exposed|express|farmers|fashion|ferrari|ferrero|finance|fishing|fitness|flights|florist|flowers|forsale|frogans|fujitsu|gallery|genting|godaddy|grocery|guitars|hamburg|hangout|hitachi|holiday|hosting|hoteles|hotmail|hyundai|ismaili|jewelry|juniper|kitchen|komatsu|lacaixa|lanxess|lasalle|latrobe|leclerc|limited|lincoln|markets|monster|netbank|netflix|network|neustar|okinawa|oldnavy|organic|origins|philips|pioneer|politie|realtor|recipes|rentals|reviews|rexroth|samsung|sandvik|schmidt|schwarz|science|shiksha|singles|staples|storage|support|surgery|systems|temasek|theater|theatre|tickets|tiffany|toshiba|trading|walmart|wanggou|watches|weather|website|wedding|whoswho|windows|winners|xfinity|yamaxun|youtube|zuerich|католик|اتصالات|البحرين|الجزائر|العليان|پاکستان|كاثوليك|இந்தியா|abarth|abbott|abbvie|africa|agency|airbus|airtel|alipay|alsace|alstom|amazon|anquan|aramco|author|bayern|beauty|berlin|bharti|bostik|boston|broker|camera|career|casino|center|chanel|chrome|church|circle|claims|clinic|coffee|comsec|condos|coupon|credit|cruise|dating|datsun|dealer|degree|dental|design|direct|doctor|dunlop|dupont|durban|emerck|energy|estate|events|expert|family|flickr|futbol|gallup|garden|george|giving|global|google|gratis|health|hermes|hiphop|hockey|hotels|hughes|imamat|insure|intuit|jaguar|joburg|juegos|kaufen|kinder|kindle|kosher|lancia|latino|lawyer|lefrak|living|locker|london|luxury|madrid|maison|makeup|market|mattel|mobile|monash|mormon|moscow|museum|mutual|nagoya|natura|nissan|nissay|norton|nowruz|office|olayan|online|oracle|orange|otsuka|pfizer|photos|physio|pictet|quebec|racing|realty|reisen|repair|report|review|rocher|rogers|ryukyu|safety|sakura|sanofi|school|schule|search|secure|select|shouji|soccer|social|stream|studio|supply|suzuki|swatch|sydney|taipei|taobao|target|tattoo|tennis|tienda|tjmaxx|tkmaxx|toyota|travel|unicom|viajes|viking|villas|virgin|vision|voting|voyage|vuelos|walter|webcam|xihuan|yachts|yandex|zappos|москва|онлайн|ابوظبي|ارامكو|الاردن|المغرب|امارات|فلسطين|مليسيا|भारतम्|இலங்கை|ファッション|actor|adult|aetna|amfam|amica|apple|archi|audio|autos|azure|baidu|beats|bible|bingo|black|boats|bosch|build|canon|cards|chase|cheap|cisco|citic|click|cloud|coach|codes|crown|cymru|dabur|dance|deals|delta|drive|dubai|earth|edeka|email|epson|faith|fedex|final|forex|forum|gallo|games|gifts|gives|glade|glass|globo|gmail|green|gripe|group|gucci|guide|homes|honda|horse|house|hyatt|ikano|irish|jetzt|koeln|kyoto|lamer|lease|legal|lexus|lilly|linde|lipsy|lixil|loans|locus|lotte|lotto|macys|mango|media|miami|money|movie|nexus|nikon|ninja|nokia|nowtv|omega|osaka|paris|parts|party|phone|photo|pizza|place|poker|praxi|press|prime|promo|quest|radio|rehab|reise|ricoh|rocks|rodeo|rugby|salon|sener|seven|sharp|shell|shoes|skype|sling|smart|smile|solar|space|sport|stada|store|study|style|sucks|swiss|tatar|tires|tirol|tmall|today|tokyo|tools|toray|total|tours|trade|trust|tunes|tushu|ubank|vegas|video|vodka|volvo|wales|watch|weber|weibo|works|world|xerox|yahoo|ישראל|ایران|بازار|بھارت|سودان|سورية|همراه|भारोत|संगठन|বাংলা|భారత్|ഭാരതം|嘉里大酒店|aarp|able|adac|aero|akdn|ally|amex|arab|army|arpa|arte|asda|asia|audi|auto|baby|band|bank|bbva|beer|best|bike|bing|blog|blue|bofa|bond|book|buzz|cafe|call|camp|care|cars|casa|case|cash|cbre|cern|chat|citi|city|club|cool|coop|cyou|data|date|dclk|deal|dell|desi|diet|dish|docs|duck|dvag|erni|fage|fail|fans|farm|fast|fiat|fido|film|fire|fish|flir|food|ford|free|fund|game|gbiz|gent|ggee|gift|gmbh|gold|golf|goog|guge|guru|hair|haus|hdfc|help|here|hgtv|host|hsbc|icbc|ieee|imdb|immo|info|itau|java|jeep|jobs|jprs|kddi|kiwi|kpmg|kred|land|lego|lgbt|lidl|life|like|limo|link|live|loan|loft|love|ltda|luxe|maif|meet|meme|menu|mini|mint|mobi|moda|moto|name|navy|news|next|nico|nike|ollo|open|page|pars|pccw|pics|ping|pink|play|plus|pohl|porn|post|prod|prof|qpon|raid|read|reit|rent|rest|rich|rmit|room|rsvp|ruhr|safe|sale|sarl|save|saxo|scot|seat|seek|sexy|shaw|shia|shop|show|silk|sina|site|skin|sncf|sohu|song|sony|spot|star|surf|talk|taxi|team|tech|teva|tiaa|tips|town|toys|tube|vana|visa|viva|vivo|vote|voto|wang|weir|wien|wiki|wine|work|xbox|yoga|zara|zero|zone|дети|сайт|بارت|بيتك|ڀارت|تونس|شبكة|عراق|عمان|موقع|भारत|ভারত|ভাৰত|ਭਾਰਤ|ભારત|ଭାରତ|ಭಾರತ|ලංකා|アマゾン|グーグル|クラウド|ポイント|大众汽车|组织机构|電訊盈科|香格里拉|aaa|abb|abc|aco|ads|aeg|afl|aig|anz|aol|app|art|aws|axa|bar|bbc|bbt|bcg|bcn|bet|bid|bio|biz|bms|bmw|bom|boo|bot|box|buy|bzh|cab|cal|cam|car|cat|cba|cbn|cbs|ceo|cfa|cfd|com|cpa|crs|csc|dad|day|dds|dev|dhl|diy|dnp|dog|dot|dtv|dvr|eat|eco|edu|esq|eus|fan|fit|fly|foo|fox|frl|ftr|fun|fyi|gal|gap|gay|gdn|gea|gle|gmo|gmx|goo|gop|got|gov|hbo|hiv|hkt|hot|how|ibm|ice|icu|ifm|inc|ing|ink|int|ist|itv|jcb|jio|jll|jmp|jnj|jot|joy|kfh|kia|kim|kpn|krd|lat|law|lds|llc|llp|lol|lpl|ltd|man|map|mba|med|men|mil|mit|mlb|mls|mma|moe|moi|mom|mov|msd|mtn|mtr|nab|nba|nec|net|new|nfl|ngo|nhk|now|nra|nrw|ntt|nyc|obi|off|one|ong|onl|ooo|org|ott|ovh|pay|pet|phd|pid|pin|pnc|pro|pru|pub|pwc|qvc|red|ren|ril|rio|rip|run|rwe|sap|sas|sbi|sbs|sca|scb|ses|sew|sex|sfr|ski|sky|soy|spa|srl|stc|tab|tax|tci|tdk|tel|thd|tjx|top|trv|tui|tvs|ubs|uno|uol|ups|vet|vig|vin|vip|wed|win|wme|wow|wtc|wtf|xin|xxx|xyz|you|yun|zip|бел|ком|қаз|мкд|мон|орг|рус|срб|укр|հայ|קום|عرب|قطر|كوم|مصر|कॉम|नेट|คอม|ไทย|ລາວ|ストア|セール|みんな|中文网|亚马逊|天主教|我爱你|新加坡|淡马锡|诺基亚|飞利浦|ac|ad|ae|af|ag|ai|al|am|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|ελ|ευ|бг|ею|рф|გე|닷넷|닷컴|삼성|한국|コム|世界|中信|中国|中國|企业|佛山|信息|健康|八卦|公司|公益|台湾|台灣|商城|商店|商标|嘉里|在线|大拿|娱乐|家電|广东|微博|慈善|手机|招聘|政务|政府|新闻|时尚|書籍|机构|游戏|澳門|点看|移动|网址|网店|网站|网络|联通|谷歌|购物|通販|集团|食品|餐厅|香港)/,
        B = new RegExp("[".concat(N, "!#$%&'*+/=?^_`{|}~-]")),
        M = new RegExp("^".concat(D.source, "$")),
        F = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.localPartCharRegex = B), (e.strictTldRegex = M), e;
          }
          return (
            c(e, t),
            (e.prototype.parseMatches = function (t) {
              for (
                var e = this.tagBuilder,
                  n = this.localPartCharRegex,
                  r = this.strictTldRegex,
                  o = [],
                  a = t.length,
                  s = new R(),
                  l = { m: "a", a: "i", i: "l", l: "t", t: "o", o: ":" },
                  u = 0,
                  c = 0,
                  h = s;
                u < a;

              ) {
                var d = t.charAt(u);
                switch (c) {
                  case 0:
                    y(d);
                    break;
                  case 1:
                    g(t.charAt(u - 1), d);
                    break;
                  case 2:
                    m(d);
                    break;
                  case 3:
                    v(d);
                    break;
                  case 4:
                    b(d);
                    break;
                  case 5:
                    x(d);
                    break;
                  case 6:
                    _(d);
                    break;
                  case 7:
                    w(d);
                    break;
                  default:
                    i(c);
                }
                u++;
              }
              return k(), o;
              function y(t) {
                "m" === t ? A(1) : n.test(t) && A();
              }
              function g(t, e) {
                ":" === t
                  ? n.test(e)
                    ? ((c = 2),
                      (h = new R(f(f({}, h), { hasMailtoPrefix: !0 }))))
                    : E()
                  : l[t] === e ||
                    (n.test(e)
                      ? (c = 2)
                      : "." === e
                      ? (c = 3)
                      : "@" === e
                      ? (c = 4)
                      : E());
              }
              function m(t) {
                "." === t ? (c = 3) : "@" === t ? (c = 4) : n.test(t) || E();
              }
              function v(t) {
                "." === t || "@" === t ? E() : n.test(t) ? (c = 2) : E();
              }
              function b(t) {
                L.test(t) ? (c = 5) : E();
              }
              function x(t) {
                "." === t ? (c = 7) : "-" === t ? (c = 6) : L.test(t) || k();
              }
              function _(t) {
                "-" === t || "." === t ? k() : L.test(t) ? (c = 5) : k();
              }
              function w(t) {
                "." === t || "-" === t
                  ? k()
                  : L.test(t)
                  ? ((c = 5), (h = new R(f(f({}, h), { hasDomainDot: !0 }))))
                  : k();
              }
              function A(t) {
                void 0 === t && (t = 2), (c = t), (h = new R({ idx: u }));
              }
              function E() {
                (c = 0), (h = s);
              }
              function k() {
                if (h.hasDomainDot) {
                  var n = t.slice(h.idx, u);
                  /[-.]$/.test(n) && (n = n.slice(0, -1));
                  var i = h.hasMailtoPrefix ? n.slice("mailto:".length) : n;
                  (function (t) {
                    var e = (t.split(".").pop() || "").toLowerCase();
                    return r.test(e);
                  })(i) &&
                    o.push(
                      new p({
                        tagBuilder: e,
                        matchedText: n,
                        offset: h.idx,
                        email: i,
                      })
                    );
                }
                E();
              }
            }),
            e
          );
        })(v),
        R = function (t) {
          void 0 === t && (t = {}),
            (this.idx = void 0 !== t.idx ? t.idx : -1),
            (this.hasMailtoPrefix = !!t.hasMailtoPrefix),
            (this.hasDomainDot = !!t.hasDomainDot);
        },
        I = (function () {
          function t() {}
          return (
            (t.isValid = function (t, e) {
              return !(
                (e && !this.isValidUriScheme(e)) ||
                this.urlMatchDoesNotHaveProtocolOrDot(t, e) ||
                (this.urlMatchDoesNotHaveAtLeastOneWordChar(t, e) &&
                  !this.isValidIpAddress(t)) ||
                this.containsMultipleDots(t)
              );
            }),
            (t.isValidIpAddress = function (t) {
              var e = new RegExp(
                this.hasFullProtocolRegex.source + this.ipRegex.source
              );
              return null !== t.match(e);
            }),
            (t.containsMultipleDots = function (t) {
              var e = t;
              return (
                this.hasFullProtocolRegex.test(t) && (e = t.split("://")[1]),
                e.split("/")[0].indexOf("..") > -1
              );
            }),
            (t.isValidUriScheme = function (t) {
              var e = t.match(this.uriSchemeRegex),
                n = e && e[0].toLowerCase();
              return "javascript:" !== n && "vbscript:" !== n;
            }),
            (t.urlMatchDoesNotHaveProtocolOrDot = function (t, e) {
              return !(
                !t ||
                (e && this.hasFullProtocolRegex.test(e)) ||
                -1 !== t.indexOf(".")
              );
            }),
            (t.urlMatchDoesNotHaveAtLeastOneWordChar = function (t, e) {
              return (
                !(!t || !e) &&
                !this.hasFullProtocolRegex.test(e) &&
                !this.hasWordCharAfterProtocolRegex.test(t)
              );
            }),
            (t.hasFullProtocolRegex = /^[A-Za-z][-.+A-Za-z0-9]*:\/\//),
            (t.uriSchemeRegex = /^[A-Za-z][-.+A-Za-z0-9]*:/),
            (t.hasWordCharAfterProtocolRegex = new RegExp(
              ":[^\\s]*?[" + k + "]"
            )),
            (t.ipRegex =
              /[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?\.[0-9][0-9]?[0-9]?(:[0-9]*)?\/?$/),
            t
          );
        })(),
        U =
          ((h = new RegExp(
            "[/?#](?:[" +
              N +
              "\\-+&@#/%=~_()|'$*\\[\\]{}?!:,.;^✓]*[" +
              N +
              "\\-+&@#/%=~_()|'$*\\[\\]{}✓])?"
          )),
          new RegExp(
            [
              "(?:",
              "(",
              /(?:[A-Za-z][-.+A-Za-z0-9]{0,63}:(?![A-Za-z][-.+A-Za-z0-9]{0,63}:\/\/)(?!\d+\/?)(?:\/\/)?)/
                .source,
              q(2),
              ")",
              "|",
              "(",
              "(//)?",
              /(?:www\.)/.source,
              q(6),
              ")",
              "|",
              "(",
              "(//)?",
              q(10) + "\\.",
              D.source,
              "(?![-" + T + "])",
              ")",
              ")",
              "(?::[0-9]+)?",
              "(?:" + h.source + ")?",
            ].join(""),
            "gi"
          )),
        H = new RegExp("[" + N + "]"),
        z = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              (n.stripPrefix = { scheme: !0, www: !0 }),
              (n.stripTrailingSlash = !0),
              (n.decodePercentEncoding = !0),
              (n.matcherRegex = U),
              (n.wordCharRegExp = H),
              (n.stripPrefix = e.stripPrefix),
              (n.stripTrailingSlash = e.stripTrailingSlash),
              (n.decodePercentEncoding = e.decodePercentEncoding),
              n
            );
          }
          return (
            c(e, t),
            (e.prototype.parseMatches = function (t) {
              for (
                var e,
                  n = this.matcherRegex,
                  r = this.stripPrefix,
                  o = this.stripTrailingSlash,
                  i = this.decodePercentEncoding,
                  a = this.tagBuilder,
                  s = [],
                  l = function () {
                    var n = e[0],
                      l = e[1],
                      c = e[4],
                      f = e[5],
                      h = e[9],
                      p = e.index,
                      d = f || h,
                      y = t.charAt(p - 1);
                    if (!I.isValid(n, l)) return "continue";
                    if (p > 0 && "@" === y) return "continue";
                    if (p > 0 && d && u.wordCharRegExp.test(y))
                      return "continue";
                    if (
                      (/\?$/.test(n) && (n = n.substr(0, n.length - 1)),
                      u.matchHasUnbalancedClosingParen(n))
                    )
                      n = n.substr(0, n.length - 1);
                    else {
                      var g = u.matchHasInvalidCharAfterTld(n, l);
                      g > -1 && (n = n.substr(0, g));
                    }
                    var v = ["http://", "https://"].find(function (t) {
                      return !!l && -1 !== l.indexOf(t);
                    });
                    if (v) {
                      var b = n.indexOf(v);
                      (n = n.substr(b)), (l = l.substr(b)), (p += b);
                    }
                    var x = l ? "scheme" : c ? "www" : "tld",
                      _ = !!l;
                    s.push(
                      new m({
                        tagBuilder: a,
                        matchedText: n,
                        offset: p,
                        urlMatchType: x,
                        url: n,
                        protocolUrlMatch: _,
                        protocolRelativeMatch: !!d,
                        stripPrefix: r,
                        stripTrailingSlash: o,
                        decodePercentEncoding: i,
                      })
                    );
                  },
                  u = this;
                null !== (e = n.exec(t));

              )
                l();
              return s;
            }),
            (e.prototype.matchHasUnbalancedClosingParen = function (t) {
              var e,
                n = t.charAt(t.length - 1);
              if (")" === n) e = "(";
              else if ("]" === n) e = "[";
              else {
                if ("}" !== n) return !1;
                e = "{";
              }
              for (var r = 0, o = 0, i = t.length - 1; o < i; o++) {
                var a = t.charAt(o);
                a === e ? r++ : a === n && (r = Math.max(r - 1, 0));
              }
              return 0 === r;
            }),
            (e.prototype.matchHasInvalidCharAfterTld = function (t, e) {
              if (!t) return -1;
              var n = 0;
              e && ((n = t.indexOf(":")), (t = t.slice(n)));
              var r = new RegExp(
                "^((.?//)?[-." + N + "]*[-" + N + "]\\.[-" + N + "]+)"
              ).exec(t);
              return null === r
                ? -1
                : ((n += r[1].length),
                  (t = t.slice(r[1].length)),
                  /^[^-.A-Za-z0-9:\/?#]/.test(t) ? n : -1);
            }),
            e
          );
        })(v),
        K = new RegExp("#[_".concat(N, "]{1,139}(?![_").concat(N, "])"), "g"),
        W = new RegExp("[^" + N + "]"),
        V = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              (n.serviceName = "twitter"),
              (n.matcherRegex = K),
              (n.nonWordCharRegex = W),
              (n.serviceName = e.serviceName),
              n
            );
          }
          return (
            c(e, t),
            (e.prototype.parseMatches = function (t) {
              for (
                var e,
                  n = this.matcherRegex,
                  r = this.nonWordCharRegex,
                  o = this.serviceName,
                  i = this.tagBuilder,
                  a = [];
                null !== (e = n.exec(t));

              ) {
                var s = e.index,
                  l = t.charAt(s - 1);
                if (0 === s || r.test(l)) {
                  var u = e[0],
                    c = e[0].slice(1);
                  a.push(
                    new d({
                      tagBuilder: i,
                      matchedText: u,
                      offset: s,
                      serviceName: o,
                      hashtag: c,
                    })
                  );
                }
              }
              return a;
            }),
            e
          );
        })(v),
        Z = new RegExp(
          ""
            .concat(
              /(?:(?:(?:(\+)?\d{1,3}[-\040.]?)?\(?\d{3}\)?[-\040.]?\d{3}[-\040.]?\d{4})|(?:(\+)(?:9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)[-\040.]?(?:\d[-\040.]?){6,12}\d+))([,;]+[0-9]+#?)*/
                .source,
              "|"
            )
            .concat(
              /(0([1-9]{1}-?[1-9]\d{3}|[1-9]{2}-?\d{3}|[1-9]{2}\d{1}-?\d{2}|[1-9]{2}\d{2}-?\d{1})-?\d{4}|0[789]0-?\d{4}-?\d{4}|050-?\d{4}-?\d{4})/
                .source
            ),
          "g"
        ),
        G = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.matcherRegex = Z), e;
          }
          return (
            c(e, t),
            (e.prototype.parseMatches = function (t) {
              for (
                var e, n = this.matcherRegex, r = this.tagBuilder, o = [];
                null !== (e = n.exec(t));

              ) {
                var i = e[0],
                  a = i.replace(/[^0-9,;#]/g, ""),
                  s = !(!e[1] && !e[2]),
                  l = 0 == e.index ? "" : t.substr(e.index - 1, 1),
                  u = t.substr(e.index + i.length, 1),
                  c = !l.match(/\d/) && !u.match(/\d/);
                this.testMatch(e[3]) &&
                  this.testMatch(i) &&
                  c &&
                  o.push(
                    new g({
                      tagBuilder: r,
                      matchedText: i,
                      offset: e.index,
                      number: a,
                      plusSign: s,
                    })
                  );
              }
              return o;
            }),
            (e.prototype.testMatch = function (t) {
              return _.test(t);
            }),
            e
          );
        })(v),
        Y = new RegExp("@[_".concat(N, "]{1,50}(?![_").concat(N, "])"), "g"),
        $ = new RegExp("@[_.".concat(N, "]{1,30}(?![_").concat(N, "])"), "g"),
        X = new RegExp("@[-_.".concat(N, "]{1,50}(?![-_").concat(N, "])"), "g"),
        Q = new RegExp(
          "@[_.".concat(N, "]{1,23}[_").concat(N, "](?![_").concat(N, "])"),
          "g"
        ),
        J = new RegExp("[^" + N + "]"),
        tt = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              (n.serviceName = "twitter"),
              (n.matcherRegexes = {
                twitter: Y,
                instagram: $,
                soundcloud: X,
                tiktok: Q,
              }),
              (n.nonWordCharRegex = J),
              (n.serviceName = e.serviceName),
              n
            );
          }
          return (
            c(e, t),
            (e.prototype.parseMatches = function (t) {
              var e,
                n = this.serviceName,
                r = this.matcherRegexes[this.serviceName],
                o = this.nonWordCharRegex,
                i = this.tagBuilder,
                a = [];
              if (!r) return a;
              for (; null !== (e = r.exec(t)); ) {
                var s = e.index,
                  l = t.charAt(s - 1);
                if (0 === s || o.test(l)) {
                  var u = e[0].replace(/\.+$/g, ""),
                    c = u.slice(1);
                  a.push(
                    new y({
                      tagBuilder: i,
                      matchedText: u,
                      offset: s,
                      serviceName: n,
                      mention: c,
                    })
                  );
                }
              }
              return a;
            }),
            e
          );
        })(v);
      function et(t, e) {
        for (
          var n,
            r = e.onOpenTag,
            o = e.onCloseTag,
            a = e.onText,
            s = e.onComment,
            l = e.onDoctype,
            u = new nt(),
            c = 0,
            h = t.length,
            p = 0,
            d = 0,
            y = u;
          c < h;

        ) {
          var g = t.charAt(c);
          switch (p) {
            case 0:
              m(g);
              break;
            case 1:
              v(g);
              break;
            case 2:
              k(g);
              break;
            case 3:
              _(g);
              break;
            case 4:
              O(g);
              break;
            case 5:
              C(g);
              break;
            case 6:
              T(g);
              break;
            case 7:
              N(g);
              break;
            case 8:
              j(g);
              break;
            case 9:
              S(g);
              break;
            case 10:
              P(g);
              break;
            case 11:
              q(g);
              break;
            case 12:
              L(g);
              break;
            case 13:
              D(g);
              break;
            case 14:
              B(g);
              break;
            case 15:
              M(g);
              break;
            case 16:
              F(g);
              break;
            case 17:
              R(g);
              break;
            case 18:
              I(g);
              break;
            case 19:
              U(g);
              break;
            case 20:
              H(g);
              break;
            default:
              i(p);
          }
          c++;
        }
        function m(t) {
          "<" === t && K();
        }
        function v(t) {
          "!" === t
            ? (p = 13)
            : "/" === t
            ? ((p = 2), (y = new nt(f(f({}, y), { isClosing: !0 }))))
            : "<" === t
            ? K()
            : b.test(t)
            ? ((p = 3), (y = new nt(f(f({}, y), { isOpening: !0 }))))
            : ((p = 0), (y = u));
        }
        function _(t) {
          w.test(t)
            ? ((y = new nt(f(f({}, y), { name: V() }))), (p = 4))
            : "<" === t
            ? K()
            : "/" === t
            ? ((y = new nt(f(f({}, y), { name: V() }))), (p = 12))
            : ">" === t
            ? ((y = new nt(f(f({}, y), { name: V() }))), W())
            : b.test(t) || x.test(t) || ":" === t || z();
        }
        function k(t) {
          ">" === t ? z() : b.test(t) ? (p = 3) : z();
        }
        function O(t) {
          w.test(t) ||
            ("/" === t
              ? (p = 12)
              : ">" === t
              ? W()
              : "<" === t
              ? K()
              : "=" === t || A.test(t) || E.test(t)
              ? z()
              : (p = 5));
        }
        function C(t) {
          w.test(t)
            ? (p = 6)
            : "/" === t
            ? (p = 12)
            : "=" === t
            ? (p = 7)
            : ">" === t
            ? W()
            : "<" === t
            ? K()
            : A.test(t) && z();
        }
        function T(t) {
          w.test(t) ||
            ("/" === t
              ? (p = 12)
              : "=" === t
              ? (p = 7)
              : ">" === t
              ? W()
              : "<" === t
              ? K()
              : A.test(t)
              ? z()
              : (p = 5));
        }
        function N(t) {
          w.test(t) ||
            ('"' === t
              ? (p = 8)
              : "'" === t
              ? (p = 9)
              : /[>=`]/.test(t)
              ? z()
              : "<" === t
              ? K()
              : (p = 10));
        }
        function j(t) {
          '"' === t && (p = 11);
        }
        function S(t) {
          "'" === t && (p = 11);
        }
        function P(t) {
          w.test(t) ? (p = 4) : ">" === t ? W() : "<" === t && K();
        }
        function q(t) {
          w.test(t)
            ? (p = 4)
            : "/" === t
            ? (p = 12)
            : ">" === t
            ? W()
            : "<" === t
            ? K()
            : ((p = 4), c--);
        }
        function L(t) {
          ">" === t
            ? ((y = new nt(f(f({}, y), { isClosing: !0 }))), W())
            : (p = 4);
        }
        function D(e) {
          "--" === t.substr(c, 2)
            ? ((c += 2),
              (y = new nt(f(f({}, y), { type: "comment" }))),
              (p = 14))
            : "DOCTYPE" === t.substr(c, 7).toUpperCase()
            ? ((c += 7),
              (y = new nt(f(f({}, y), { type: "doctype" }))),
              (p = 20))
            : z();
        }
        function B(t) {
          "-" === t ? (p = 15) : ">" === t ? z() : (p = 16);
        }
        function M(t) {
          "-" === t ? (p = 18) : ">" === t ? z() : (p = 16);
        }
        function F(t) {
          "-" === t && (p = 17);
        }
        function R(t) {
          p = "-" === t ? 18 : 16;
        }
        function I(t) {
          ">" === t ? W() : "!" === t ? (p = 19) : "-" === t || (p = 16);
        }
        function U(t) {
          "-" === t ? (p = 17) : ">" === t ? W() : (p = 16);
        }
        function H(t) {
          ">" === t ? W() : "<" === t && K();
        }
        function z() {
          (p = 0), (y = u);
        }
        function K() {
          (p = 1), (y = new nt({ idx: c }));
        }
        function W() {
          var e = t.slice(d, y.idx);
          e && a(e, d),
            "comment" === y.type
              ? s(y.idx)
              : "doctype" === y.type
              ? l(y.idx)
              : (y.isOpening && r(y.name, y.idx),
                y.isClosing && o(y.name, y.idx)),
            z(),
            (d = c + 1);
        }
        function V() {
          var e = y.idx + (y.isClosing ? 2 : 1);
          return t.slice(e, c).toLowerCase();
        }
        d < c && ((n = t.slice(d, c)), a(n, d), (d = c + 1));
      }
      var nt = function (t) {
          void 0 === t && (t = {}),
            (this.idx = void 0 !== t.idx ? t.idx : -1),
            (this.type = t.type || "tag"),
            (this.name = t.name || ""),
            (this.isOpening = !!t.isOpening),
            (this.isClosing = !!t.isClosing);
        },
        rt = (function () {
          function t(e) {
            void 0 === e && (e = {}),
              (this.version = t.version),
              (this.urls = {}),
              (this.email = !0),
              (this.phone = !0),
              (this.hashtag = !1),
              (this.mention = !1),
              (this.newWindow = !0),
              (this.stripPrefix = { scheme: !0, www: !0 }),
              (this.stripTrailingSlash = !0),
              (this.decodePercentEncoding = !0),
              (this.truncate = { length: 0, location: "end" }),
              (this.className = ""),
              (this.replaceFn = null),
              (this.context = void 0),
              (this.sanitizeHtml = !1),
              (this.matchers = null),
              (this.tagBuilder = null),
              (this.urls = this.normalizeUrlsCfg(e.urls)),
              (this.email = "boolean" == typeof e.email ? e.email : this.email),
              (this.phone = "boolean" == typeof e.phone ? e.phone : this.phone),
              (this.hashtag = e.hashtag || this.hashtag),
              (this.mention = e.mention || this.mention),
              (this.newWindow =
                "boolean" == typeof e.newWindow ? e.newWindow : this.newWindow),
              (this.stripPrefix = this.normalizeStripPrefixCfg(e.stripPrefix)),
              (this.stripTrailingSlash =
                "boolean" == typeof e.stripTrailingSlash
                  ? e.stripTrailingSlash
                  : this.stripTrailingSlash),
              (this.decodePercentEncoding =
                "boolean" == typeof e.decodePercentEncoding
                  ? e.decodePercentEncoding
                  : this.decodePercentEncoding),
              (this.sanitizeHtml = e.sanitizeHtml || !1);
            var n = this.mention;
            if (
              !1 !== n &&
              -1 === ["twitter", "instagram", "soundcloud", "tiktok"].indexOf(n)
            )
              throw new Error(
                "invalid `mention` cfg '".concat(n, "' - see docs")
              );
            var r = this.hashtag;
            if (
              !1 !== r &&
              -1 === ["twitter", "facebook", "instagram", "tiktok"].indexOf(r)
            )
              throw new Error(
                "invalid `hashtag` cfg '".concat(r, "' - see docs")
              );
            (this.truncate = this.normalizeTruncateCfg(e.truncate)),
              (this.className = e.className || this.className),
              (this.replaceFn = e.replaceFn || this.replaceFn),
              (this.context = e.context || this);
          }
          return (
            (t.link = function (e, n) {
              return new t(n).link(e);
            }),
            (t.parse = function (e, n) {
              return new t(n).parse(e);
            }),
            (t.prototype.normalizeUrlsCfg = function (t) {
              return (
                null == t && (t = !0),
                "boolean" == typeof t
                  ? { schemeMatches: t, wwwMatches: t, tldMatches: t }
                  : {
                      schemeMatches:
                        "boolean" != typeof t.schemeMatches || t.schemeMatches,
                      wwwMatches:
                        "boolean" != typeof t.wwwMatches || t.wwwMatches,
                      tldMatches:
                        "boolean" != typeof t.tldMatches || t.tldMatches,
                    }
              );
            }),
            (t.prototype.normalizeStripPrefixCfg = function (t) {
              return (
                null == t && (t = !0),
                "boolean" == typeof t
                  ? { scheme: t, www: t }
                  : {
                      scheme: "boolean" != typeof t.scheme || t.scheme,
                      www: "boolean" != typeof t.www || t.www,
                    }
              );
            }),
            (t.prototype.normalizeTruncateCfg = function (t) {
              return "number" == typeof t
                ? { length: t, location: "end" }
                : (function (t, e) {
                    for (var n in e)
                      e.hasOwnProperty(n) && void 0 === t[n] && (t[n] = e[n]);
                    return t;
                  })(t || {}, {
                    length: Number.POSITIVE_INFINITY,
                    location: "end",
                  });
            }),
            (t.prototype.parse = function (t) {
              var e = this,
                n = ["a", "style", "script"],
                r = 0,
                o = [];
              return (
                et(t, {
                  onOpenTag: function (t) {
                    n.indexOf(t) >= 0 && r++;
                  },
                  onText: function (t, n) {
                    if (0 === r) {
                      var i = (function (t, e) {
                          if (!e.global)
                            throw new Error(
                              "`splitRegex` must have the 'g' flag set"
                            );
                          for (var n, r = [], o = 0; (n = e.exec(t)); )
                            r.push(t.substring(o, n.index)),
                              r.push(n[0]),
                              (o = n.index + n[0].length);
                          return r.push(t.substring(o)), r;
                        })(
                          t,
                          /(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi
                        ),
                        a = n;
                      i.forEach(function (t, n) {
                        if (n % 2 == 0) {
                          var r = e.parseText(t, a);
                          o.push.apply(o, r);
                        }
                        a += t.length;
                      });
                    }
                  },
                  onCloseTag: function (t) {
                    n.indexOf(t) >= 0 && (r = Math.max(r - 1, 0));
                  },
                  onComment: function (t) {},
                  onDoctype: function (t) {},
                }),
                (o = this.compactMatches(o)),
                (o = this.removeUnwantedMatches(o))
              );
            }),
            (t.prototype.compactMatches = function (t) {
              t.sort(function (t, e) {
                return t.getOffset() - e.getOffset();
              });
              for (var e = 0; e < t.length - 1; ) {
                var n = t[e],
                  r = n.getOffset(),
                  o = n.getMatchedText().length,
                  i = r + o;
                if (e + 1 < t.length) {
                  if (t[e + 1].getOffset() === r) {
                    var a = t[e + 1].getMatchedText().length > o ? e : e + 1;
                    t.splice(a, 1);
                    continue;
                  }
                  if (t[e + 1].getOffset() < i) {
                    t.splice(e + 1, 1);
                    continue;
                  }
                }
                e++;
              }
              return t;
            }),
            (t.prototype.removeUnwantedMatches = function (t) {
              return (
                this.hashtag ||
                  o(t, function (t) {
                    return "hashtag" === t.getType();
                  }),
                this.email ||
                  o(t, function (t) {
                    return "email" === t.getType();
                  }),
                this.phone ||
                  o(t, function (t) {
                    return "phone" === t.getType();
                  }),
                this.mention ||
                  o(t, function (t) {
                    return "mention" === t.getType();
                  }),
                this.urls.schemeMatches ||
                  o(t, function (t) {
                    return (
                      "url" === t.getType() && "scheme" === t.getUrlMatchType()
                    );
                  }),
                this.urls.wwwMatches ||
                  o(t, function (t) {
                    return (
                      "url" === t.getType() && "www" === t.getUrlMatchType()
                    );
                  }),
                this.urls.tldMatches ||
                  o(t, function (t) {
                    return (
                      "url" === t.getType() && "tld" === t.getUrlMatchType()
                    );
                  }),
                t
              );
            }),
            (t.prototype.parseText = function (t, e) {
              void 0 === e && (e = 0), (e = e || 0);
              for (
                var n = this.getMatchers(), r = [], o = 0, i = n.length;
                o < i;
                o++
              ) {
                for (
                  var a = n[o].parseMatches(t), s = 0, l = a.length;
                  s < l;
                  s++
                )
                  a[s].setOffset(e + a[s].getOffset());
                r.push.apply(r, a);
              }
              return r;
            }),
            (t.prototype.link = function (t) {
              if (!t) return "";
              this.sanitizeHtml &&
                (t = t.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
              for (
                var e = this.parse(t), n = [], r = 0, o = 0, i = e.length;
                o < i;
                o++
              ) {
                var a = e[o];
                n.push(t.substring(r, a.getOffset())),
                  n.push(this.createMatchReturnVal(a)),
                  (r = a.getOffset() + a.getMatchedText().length);
              }
              return n.push(t.substring(r)), n.join("");
            }),
            (t.prototype.createMatchReturnVal = function (t) {
              var e;
              return (
                this.replaceFn && (e = this.replaceFn.call(this.context, t)),
                "string" == typeof e
                  ? e
                  : !1 === e
                  ? t.getMatchedText()
                  : e instanceof a
                  ? e.toAnchorString()
                  : t.buildTag().toAnchorString()
              );
            }),
            (t.prototype.getMatchers = function () {
              if (this.matchers) return this.matchers;
              var t = this.getTagBuilder(),
                e = [
                  new V({ tagBuilder: t, serviceName: this.hashtag }),
                  new F({ tagBuilder: t }),
                  new G({ tagBuilder: t }),
                  new tt({ tagBuilder: t, serviceName: this.mention }),
                  new z({
                    tagBuilder: t,
                    stripPrefix: this.stripPrefix,
                    stripTrailingSlash: this.stripTrailingSlash,
                    decodePercentEncoding: this.decodePercentEncoding,
                  }),
                ];
              return (this.matchers = e);
            }),
            (t.prototype.getTagBuilder = function () {
              var t = this.tagBuilder;
              return (
                t ||
                  (t = this.tagBuilder =
                    new s({
                      newWindow: this.newWindow,
                      truncate: this.truncate,
                      className: this.className,
                    })),
                t
              );
            }),
            (t.version = "3.15.0"),
            (t.AnchorTagBuilder = s),
            (t.HtmlTag = a),
            (t.matcher = {
              Email: F,
              Hashtag: V,
              Matcher: v,
              Mention: tt,
              Phone: G,
              Url: z,
            }),
            (t.match = {
              Email: p,
              Hashtag: d,
              Match: l,
              Mention: y,
              Phone: g,
              Url: m,
            }),
            t
          );
        })();
      e.a = rt;
    },
    1531: function (t, e, n) {
      var r = n(1532);
      t.exports = function (t, e) {
        return r(t, e);
      };
    },
    1532: function (t, e, n) {
      var r = n(1533),
        o = n(549);
      t.exports = function t(e, n, i, a, s) {
        return (
          e === n ||
          (null == e || null == n || (!o(e) && !o(n))
            ? e != e && n != n
            : r(e, n, i, a, t, s))
        );
      };
    },
    1533: function (t, e, n) {
      var r = n(1457),
        o = n(1539),
        i = n(1544),
        a = n(1545),
        s = n(1459),
        l = n(427),
        u = n(1460),
        c = n(1546),
        f = "[object Object]",
        h = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, n, p, d, y) {
        var g = l(t),
          m = l(e),
          v = g ? "[object Array]" : s(t),
          b = m ? "[object Array]" : s(e),
          x = (v = "[object Arguments]" == v ? f : v) == f,
          _ = (b = "[object Arguments]" == b ? f : b) == f,
          w = v == b;
        if (w && u(t)) {
          if (!u(e)) return !1;
          (g = !0), (x = !1);
        }
        if (w && !x)
          return (
            y || (y = new r()),
            g || c(t) ? o(t, e, n, p, d, y) : i(t, e, v, n, p, d, y)
          );
        if (!(1 & n)) {
          var A = x && h.call(t, "__wrapped__"),
            E = _ && h.call(e, "__wrapped__");
          if (A || E) {
            var k = A ? t.value() : t,
              O = E ? e.value() : e;
            return y || (y = new r()), d(k, O, n, p, y);
          }
        }
        return !!w && (y || (y = new r()), a(t, e, n, p, d, y));
      };
    },
    1539: function (t, e, n) {
      var r = n(1540),
        o = n(1541),
        i = n(1542);
      t.exports = function (t, e, n, a, s, l) {
        var u = 1 & n,
          c = t.length,
          f = e.length;
        if (c != f && !(u && f > c)) return !1;
        var h = l.get(t),
          p = l.get(e);
        if (h && p) return h == e && p == t;
        var d = -1,
          y = !0,
          g = 2 & n ? new r() : void 0;
        for (l.set(t, e), l.set(e, t); ++d < c; ) {
          var m = t[d],
            v = e[d];
          if (a) var b = u ? a(v, m, d, e, t, l) : a(m, v, d, t, e, l);
          if (void 0 !== b) {
            if (b) continue;
            y = !1;
            break;
          }
          if (g) {
            if (
              !o(e, function (t, e) {
                if (!i(g, e) && (m === t || s(m, t, n, a, l))) return g.push(e);
              })
            ) {
              y = !1;
              break;
            }
          } else if (m !== v && !s(m, v, n, a, l)) {
            y = !1;
            break;
          }
        }
        return l.delete(t), l.delete(e), y;
      };
    },
    1540: function (t, e, n) {
      var r = n(427);
      t.exports = function () {
        if (!arguments.length) return [];
        var t = arguments[0];
        return r(t) ? t : [t];
      };
    },
    1541: function (t, e) {
      t.exports = function (t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
          if (e(t[n], n, t)) return !0;
        return !1;
      };
    },
    1542: function (t, e, n) {
      var r = n(1543);
      t.exports = function (t, e) {
        return !!(null == t ? 0 : t.length) && r(t, e, 0) > -1;
      };
    },
    1543: function (t, e) {
      t.exports = function (t, e, n) {
        for (var r = n - 1, o = t.length; ++r < o; ) if (t[r] === e) return r;
        return -1;
      };
    },
    1544: function (t, e) {
      t.exports = function (t, e) {
        return t === e || (t != t && e != e);
      };
    },
    1545: function (t, e, n) {
      var r = n(1458),
        o = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, n, i, a, s) {
        var l = 1 & n,
          u = r(t),
          c = u.length;
        if (c != r(e).length && !l) return !1;
        for (var f = c; f--; ) {
          var h = u[f];
          if (!(l ? h in e : o.call(e, h))) return !1;
        }
        var p = s.get(t),
          d = s.get(e);
        if (p && d) return p == e && d == t;
        var y = !0;
        s.set(t, e), s.set(e, t);
        for (var g = l; ++f < c; ) {
          var m = t[(h = u[f])],
            v = e[h];
          if (i) var b = l ? i(v, m, h, e, t, s) : i(m, v, h, t, e, s);
          if (!(void 0 === b ? m === v || a(m, v, n, i, s) : b)) {
            y = !1;
            break;
          }
          g || (g = "constructor" == h);
        }
        if (y && !g) {
          var x = t.constructor,
            _ = e.constructor;
          x == _ ||
            !("constructor" in t) ||
            !("constructor" in e) ||
            ("function" == typeof x &&
              x instanceof x &&
              "function" == typeof _ &&
              _ instanceof _) ||
            (y = !1);
        }
        return s.delete(t), s.delete(e), y;
      };
    },
    1546: function (t, e) {
      t.exports = function () {
        return !1;
      };
    },
  },
]);
//# sourceMappingURL=7.chunk.js.map
