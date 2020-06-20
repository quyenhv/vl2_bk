/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
 */
(function(e, t) {
    var n, r, i = typeof t,
        o = e.location,
        a = e.document,
        s = a.documentElement,
        l = e.jQuery,
        u = e.$,
        c = {},
        p = [],
        f = "1.10.2",
        d = p.concat,
        h = p.push,
        g = p.slice,
        m = p.indexOf,
        y = c.toString,
        v = c.hasOwnProperty,
        b = f.trim,
        x = function(e, t) {
            return new x.fn.init(e, t, r)
        },
        w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = /\S+/g,
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        E = /^[\],:{}\s]*$/,
        S = /(?:^|:|,)(?:\s*\[)+/g,
        A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        D = /^-ms-/,
        L = /-([\da-z])/gi,
        H = function(e, t) {
            return t.toUpperCase()
        },
        q = function(e) {
            (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
        },
        _ = function() {
            a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
        };
    x.fn = x.prototype = {
        jquery: f,
        constructor: x,
        init: function(e, n, r) {
            var i, o;
            if (!e) {
                return this
            }
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) {
                    return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
                }
                if (i[1]) {
                    if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n)) {
                        for (i in n) {
                            x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i])
                        }
                    }
                    return this
                }
                if (o = a.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) {
                        return r.find(e)
                    }
                    this.length = 1, this[0] = o
                }
                return this.context = a, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return g.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = x.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return x.each(this, e, t)
        },
        ready: function(e) {
            return x.ready.promise().done(e), this
        },
        slice: function() {
            return this.pushStack(g.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(x.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: h,
        sort: [].sort,
        splice: [].splice
    }, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function() {
        var e, n, r, i, o, a, s = arguments[0] || {},
            l = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++) {
            if (null != (o = arguments[l])) {
                for (i in o) {
                    e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r))
                }
            }
        }
        return s
    }, x.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? x.readyWait++ : x.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--x.readyWait : !x.isReady) {
                if (!a.body) {
                    return setTimeout(x.ready)
                }
                x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === x.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === x.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
        },
        isPlainObject: function(e) {
            var n;
            if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e)) {
                return !1
            }
            try {
                if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf")) {
                    return !1
                }
            } catch (r) {
                return !1
            }
            if (x.support.ownLast) {
                for (n in e) {
                    return v.call(e, n)
                }
            }
            for (n in e) {}
            return n === t || v.call(e, n)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) {
                return !1
            }
            return !0
        },
        error: function(e) {
            throw Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) {
                return null
            }
            "boolean" == typeof t && (n = t, t = !1), t = t || a;
            var r = k.exec(e),
                i = !n && [];
            return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
        },
        parseJSON: function(n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) {
                return null
            }
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r
        },
        noop: function() {},
        globalEval: function(t) {
            t && x.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(D, "ms-").replace(L, H)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e);
            if (n) {
                if (a) {
                    for (; o > i; i++) {
                        if (r = t.apply(e[i], n), r === !1) {
                            break
                        }
                    }
                } else {
                    for (i in e) {
                        if (r = t.apply(e[i], n), r === !1) {
                            break
                        }
                    }
                }
            } else {
                if (a) {
                    for (; o > i; i++) {
                        if (r = t.call(e[i], i, e[i]), r === !1) {
                            break
                        }
                    }
                } else {
                    for (i in e) {
                        if (r = t.call(e[i], i, e[i]), r === !1) {
                            break
                        }
                    }
                }
            }
            return e
        },
        trim: b && !b.call("\ufeff\u00a0") ? function(e) {
            return null == e ? "" : b.call(e)
        } : function(e) {
            return null == e ? "" : (e + "").replace(C, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (m) {
                    return m.call(t, e, n)
                }
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) {
                    if (n in t && t[n] === e) {
                        return n
                    }
                }
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length,
                i = e.length,
                o = 0;
            if ("number" == typeof r) {
                for (; r > o; o++) {
                    e[i++] = n[o]
                }
            } else {
                while (n[o] !== t) {
                    e[i++] = n[o++]
                }
            }
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                o = 0,
                a = e.length;
            for (n = !!n; a > o; o++) {
                r = !!t(e[o], o), n !== r && i.push(e[o])
            }
            return i
        },
        map: function(e, t, n) {
            var r, i = 0,
                o = e.length,
                a = M(e),
                s = [];
            if (a) {
                for (; o > i; i++) {
                    r = t(e[i], i, n), null != r && (s[s.length] = r)
                }
            } else {
                for (i in e) {
                    r = t(e[i], i, n), null != r && (s[s.length] = r)
                }
            }
            return d.apply([], s)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function() {
                return e.apply(n || this, r.concat(g.call(arguments)))
            }, i.guid = e.guid = e.guid || x.guid++, i) : t
        },
        access: function(e, n, r, i, o, a, s) {
            var l = 0,
                u = e.length,
                c = null == r;
            if ("object" === x.type(r)) {
                o = !0;
                for (l in r) {
                    x.access(e, n, l, r[l], !0, a, s)
                }
            } else {
                if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
                        return c.call(x(e), n)
                    })), n)) {
                    for (; u > l; l++) {
                        n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)))
                    }
                }
            }
            return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) {
                a[o] = e.style[o], e.style[o] = t[o]
            }
            i = n.apply(e, r || []);
            for (o in t) {
                e.style[o] = a[o]
            }
            return i
        }
    }), x.ready.promise = function(t) {
        if (!n) {
            if (n = x.Deferred(), "complete" === a.readyState) {
                setTimeout(x.ready)
            } else {
                if (a.addEventListener) {
                    a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1)
                } else {
                    a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
                    var r = !1;
                    try {
                        r = null == e.frameElement && a.documentElement
                    } catch (i) {}
                    r && r.doScroll && function o() {
                        if (!x.isReady) {
                            try {
                                r.doScroll("left")
                            } catch (e) {
                                return setTimeout(o, 50)
                            }
                            _(), x.ready()
                        }
                    }()
                }
            }
        }
        return n.promise(t)
    }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });

    function M(e) {
        var t = e.length,
            n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    r = x(a),
        function(e, t) {
            var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date,
                w = e.document,
                T = 0,
                C = 0,
                N = st(),
                k = st(),
                E = st(),
                S = !1,
                A = function(e, t) {
                    return e === t ? (S = !0, 0) : 0
                },
                j = typeof t,
                D = 1 << 31,
                L = {}.hasOwnProperty,
                H = [],
                q = H.pop,
                _ = H.push,
                M = H.push,
                O = H.slice,
                F = H.indexOf || function(e) {
                    var t = 0,
                        n = this.length;
                    for (; n > t; t++) {
                        if (this[t] === e) {
                            return t
                        }
                    }
                    return -1
                },
                B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                P = "[\\x20\\t\\r\\n\\f]",
                R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                W = R.replace("w", "w#"),
                $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]",
                I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)",
                z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
                X = RegExp("^" + P + "*," + P + "*"),
                U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
                V = RegExp(P + "*[+~]"),
                Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"),
                J = RegExp(I),
                G = RegExp("^" + W + "$"),
                Q = {
                    ID: RegExp("^#(" + R + ")"),
                    CLASS: RegExp("^\\.(" + R + ")"),
                    TAG: RegExp("^(" + R.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + $),
                    PSEUDO: RegExp("^" + I),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                    bool: RegExp("^(?:" + B + ")$", "i"),
                    needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
                },
                K = /^[^{]+\{\s*\[native \w/,
                Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                et = /^(?:input|select|textarea|button)$/i,
                tt = /^h\d$/i,
                nt = /'|\\/g,
                rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"),
                it = function(e, t, n) {
                    var r = "0x" + t - 65536;
                    return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
                };
            try {
                M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType
            } catch (ot) {
                M = {
                    apply: H.length ? function(e, t) {
                        _.apply(e, O.call(t))
                    } : function(e, t) {
                        var n = e.length,
                            r = 0;
                        while (e[n++] = t[r++]) {}
                        e.length = n - 1
                    }
                }
            }

            function at(e, t, n, i) {
                var o, a, s, l, u, c, d, m, y, x;
                if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e) {
                    return n
                }
                if (1 !== (l = t.nodeType) && 9 !== l) {
                    return []
                }
                if (h && !i) {
                    if (o = Z.exec(e)) {
                        if (s = o[1]) {
                            if (9 === l) {
                                if (a = t.getElementById(s), !a || !a.parentNode) {
                                    return n
                                }
                                if (a.id === s) {
                                    return n.push(a), n
                                }
                            } else {
                                if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s) {
                                    return n.push(a), n
                                }
                            }
                        } else {
                            if (o[2]) {
                                return M.apply(n, t.getElementsByTagName(e)), n
                            }
                            if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName) {
                                return M.apply(n, t.getElementsByClassName(s)), n
                            }
                        }
                    }
                    if (r.qsa && (!g || !g.test(e))) {
                        if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                            c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;
                            while (u--) {
                                c[u] = m + yt(c[u])
                            }
                            y = V.test(e) && t.parentNode || t, x = c.join(",")
                        }
                        if (x) {
                            try {
                                return M.apply(n, y.querySelectorAll(x)), n
                            } catch (T) {} finally {
                                d || t.removeAttribute("id")
                            }
                        }
                    }
                }
                return kt(e.replace(z, "$1"), t, n, i)
            }

            function st() {
                var e = [];

                function t(n, r) {
                    return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r
                }
                return t
            }

            function lt(e) {
                return e[b] = !0, e
            }

            function ut(e) {
                var t = f.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function ct(e, t) {
                var n = e.split("|"),
                    r = e.length;
                while (r--) {
                    o.attrHandle[n[r]] = t
                }
            }

            function pt(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
                if (r) {
                    return r
                }
                if (n) {
                    while (n = n.nextSibling) {
                        if (n === t) {
                            return -1
                        }
                    }
                }
                return e ? 1 : -1
            }

            function ft(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function dt(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function ht(e) {
                return lt(function(t) {
                    return t = +t, lt(function(n, r) {
                        var i, o = e([], n.length, t),
                            a = o.length;
                        while (a--) {
                            n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        }
                    })
                })
            }
            s = at.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, r = at.support = {}, p = at.setDocument = function(e) {
                var n = e ? e.ownerDocument || e : w,
                    i = n.defaultView;
                return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
                    p()
                }), r.attributes = ut(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), r.getElementsByTagName = ut(function(e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), r.getElementsByClassName = ut(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), r.getById = ut(function(e) {
                    return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length
                }), r.getById ? (o.find.ID = function(e, t) {
                    if (typeof t.getElementById !== j && h) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, o.filter.ID = function(e) {
                    var t = e.replace(rt, it);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete o.find.ID, o.filter.ID = function(e) {
                    var t = e.replace(rt, it);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), o.find.TAG = r.getElementsByTagName ? function(e, n) {
                    return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) {
                            1 === n.nodeType && r.push(n)
                        }
                        return r
                    }
                    return o
                }, o.find.CLASS = r.getElementsByClassName && function(e, n) {
                    return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
                }, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked")
                }), ut(function(e) {
                    var t = n.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
                })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function(e) {
                    r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I)
                }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t) {
                        while (t = t.parentNode) {
                            if (t === e) {
                                return !0
                            }
                        }
                    }
                    return !1
                }, A = d.compareDocumentPosition ? function(e, t) {
                    if (e === t) {
                        return S = !0, 0
                    }
                    var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                    return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                } : function(e, t) {
                    var r, i = 0,
                        o = e.parentNode,
                        a = t.parentNode,
                        s = [e],
                        l = [t];
                    if (e === t) {
                        return S = !0, 0
                    }
                    if (!o || !a) {
                        return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0
                    }
                    if (o === a) {
                        return pt(e, t)
                    }
                    r = e;
                    while (r = r.parentNode) {
                        s.unshift(r)
                    }
                    r = t;
                    while (r = r.parentNode) {
                        l.unshift(r)
                    }
                    while (s[i] === l[i]) {
                        i++
                    }
                    return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
                }, n) : f
            }, at.matches = function(e, t) {
                return at(e, null, null, t)
            }, at.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t))) {
                    try {
                        var n = y.call(e, t);
                        if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType) {
                            return n
                        }
                    } catch (i) {}
                }
                return at(t, f, null, [e]).length > 0
            }, at.contains = function(e, t) {
                return (e.ownerDocument || e) !== f && p(e), v(e, t)
            }, at.attr = function(e, n) {
                (e.ownerDocument || e) !== f && p(e);
                var i = o.attrHandle[n.toLowerCase()],
                    a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
                return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
            }, at.error = function(e) {
                throw Error("Syntax error, unrecognized expression: " + e)
            }, at.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
                    while (t = e[o++]) {
                        t === e[o] && (i = n.push(o))
                    }
                    while (i--) {
                        e.splice(n[i], 1)
                    }
                }
                return e
            }, a = at.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) {
                            return e.textContent
                        }
                        for (e = e.firstChild; e; e = e.nextSibling) {
                            n += a(e)
                        }
                    } else {
                        if (3 === i || 4 === i) {
                            return e.nodeValue
                        }
                    }
                } else {
                    for (; t = e[r]; r++) {
                        n += a(t)
                    }
                }
                return n
            }, o = at.selectors = {
                cacheLength: 50,
                createPseudo: lt,
                match: Q,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var n, r = !e[5] && e[2];
                        return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(rt, it).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = N[e + " "];
                        return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r) {
                            var i = at.attr(r, e);
                            return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                y = s && t.nodeName.toLowerCase(),
                                v = !l && !s;
                            if (m) {
                                if (o) {
                                    while (g) {
                                        p = t;
                                        while (p = p[g]) {
                                            if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) {
                                                return !1
                                            }
                                        }
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                    c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
                                    while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                                        if (1 === p.nodeType && ++f && p === t) {
                                            c[e] = [T, d, f];
                                            break
                                        }
                                    }
                                } else {
                                    if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T) {
                                        f = u[1]
                                    } else {
                                        while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
                                            if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t)) {
                                                break
                                            }
                                        }
                                    }
                                }
                                return f -= i, f === r || 0 === f % r && f / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
                        return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function(e, n) {
                            var i, o = r(e, t),
                                a = o.length;
                            while (a--) {
                                i = F.call(e, o[a]), e[i] = !(n[i] = o[a])
                            }
                        }) : function(e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: lt(function(e) {
                        var t = [],
                            n = [],
                            r = l(e.replace(z, "$1"));
                        return r[b] ? lt(function(e, t, n, i) {
                            var o, a = r(e, null, i, []),
                                s = e.length;
                            while (s--) {
                                (o = a[s]) && (e[s] = !(t[s] = o))
                            }
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), !n.pop()
                        }
                    }),
                    has: lt(function(e) {
                        return function(t) {
                            return at(e, t).length > 0
                        }
                    }),
                    contains: lt(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || a(t)).indexOf(e) > -1
                        }
                    }),
                    lang: lt(function(e) {
                        return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(),
                            function(t) {
                                var n;
                                do {
                                    if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) {
                                        return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-")
                                    }
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === d
                    },
                    focus: function(e) {
                        return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling) {
                            if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) {
                                return !1
                            }
                        }
                        return !0
                    },
                    parent: function(e) {
                        return !o.pseudos.empty(e)
                    },
                    header: function(e) {
                        return tt.test(e.nodeName)
                    },
                    input: function(e) {
                        return et.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                    },
                    first: ht(function() {
                        return [0]
                    }),
                    last: ht(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ht(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: ht(function(e, t) {
                        var n = 0;
                        for (; t > n; n += 2) {
                            e.push(n)
                        }
                        return e
                    }),
                    odd: ht(function(e, t) {
                        var n = 1;
                        for (; t > n; n += 2) {
                            e.push(n)
                        }
                        return e
                    }),
                    lt: ht(function(e, t, n) {
                        var r = 0 > n ? n + t : n;
                        for (; --r >= 0;) {
                            e.push(r)
                        }
                        return e
                    }),
                    gt: ht(function(e, t, n) {
                        var r = 0 > n ? n + t : n;
                        for (; t > ++r;) {
                            e.push(r)
                        }
                        return e
                    })
                }
            }, o.pseudos.nth = o.pseudos.eq;
            for (n in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) {
                o.pseudos[n] = ft(n)
            }
            for (n in {
                    submit: !0,
                    reset: !0
                }) {
                o.pseudos[n] = dt(n)
            }

            function gt() {}
            gt.prototype = o.filters = o.pseudos, o.setFilters = new gt;

            function mt(e, t) {
                var n, r, i, a, s, l, u, c = k[e + " "];
                if (c) {
                    return t ? 0 : c.slice(0)
                }
                s = e, l = [], u = o.preFilter;
                while (s) {
                    (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(z, " ")
                    }), s = s.slice(n.length));
                    for (a in o.filter) {
                        !(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({
                            value: n,
                            type: a,
                            matches: r
                        }), s = s.slice(n.length))
                    }
                    if (!n) {
                        break
                    }
                }
                return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
            }

            function yt(e) {
                var t = 0,
                    n = e.length,
                    r = "";
                for (; n > t; t++) {
                    r += e[t].value
                }
                return r
            }

            function vt(e, t, n) {
                var r = t.dir,
                    o = n && "parentNode" === r,
                    a = C++;
                return t.first ? function(t, n, i) {
                    while (t = t[r]) {
                        if (1 === t.nodeType || o) {
                            return e(t, n, i)
                        }
                    }
                } : function(t, n, s) {
                    var l, u, c, p = T + " " + a;
                    if (s) {
                        while (t = t[r]) {
                            if ((1 === t.nodeType || o) && e(t, n, s)) {
                                return !0
                            }
                        }
                    } else {
                        while (t = t[r]) {
                            if (1 === t.nodeType || o) {
                                if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
                                    if ((l = u[1]) === !0 || l === i) {
                                        return l === !0
                                    }
                                } else {
                                    if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0) {
                                        return !0
                                    }
                                }
                            }
                        }
                    }
                }
            }

            function bt(e) {
                return e.length > 1 ? function(t, n, r) {
                    var i = e.length;
                    while (i--) {
                        if (!e[i](t, n, r)) {
                            return !1
                        }
                    }
                    return !0
                } : e[0]
            }

            function xt(e, t, n, r, i) {
                var o, a = [],
                    s = 0,
                    l = e.length,
                    u = null != t;
                for (; l > s; s++) {
                    (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s))
                }
                return a
            }

            function wt(e, t, n, r, i, o) {
                return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function(o, a, s, l) {
                    var u, c, p, f = [],
                        d = [],
                        h = a.length,
                        g = o || Nt(t || "*", s.nodeType ? [s] : s, []),
                        m = !e || !o && t ? g : xt(g, f, e, s, l),
                        y = n ? i || (o ? e : h || r) ? [] : a : m;
                    if (n && n(m, y, s, l), r) {
                        u = xt(y, d), r(u, [], s, l), c = u.length;
                        while (c--) {
                            (p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
                        }
                    }
                    if (o) {
                        if (i || e) {
                            if (i) {
                                u = [], c = y.length;
                                while (c--) {
                                    (p = y[c]) && u.push(m[c] = p)
                                }
                                i(null, y = [], u, l)
                            }
                            c = y.length;
                            while (c--) {
                                (p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
                            }
                        }
                    } else {
                        y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y)
                    }
                })
            }

            function Tt(e) {
                var t, n, r, i = e.length,
                    a = o.relative[e[0].type],
                    s = a || o.relative[" "],
                    l = a ? 1 : 0,
                    c = vt(function(e) {
                        return e === t
                    }, s, !0),
                    p = vt(function(e) {
                        return F.call(t, e) > -1
                    }, s, !0),
                    f = [function(e, n, r) {
                        return !a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
                    }];
                for (; i > l; l++) {
                    if (n = o.relative[e[l].type]) {
                        f = [vt(bt(f), n)]
                    } else {
                        if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
                            for (r = ++l; i > r; r++) {
                                if (o.relative[e[r].type]) {
                                    break
                                }
                            }
                            return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({
                                value: " " === e[l - 2].type ? "*" : ""
                            })).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e))
                        }
                        f.push(n)
                    }
                }
                return bt(f)
            }

            function Ct(e, t) {
                var n = 0,
                    r = t.length > 0,
                    a = e.length > 0,
                    s = function(s, l, c, p, d) {
                        var h, g, m, y = [],
                            v = 0,
                            b = "0",
                            x = s && [],
                            w = null != d,
                            C = u,
                            N = s || a && o.find.TAG("*", d && l.parentNode || l),
                            k = T += null == C ? 1 : Math.random() || 0.1;
                        for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
                            if (a && h) {
                                g = 0;
                                while (m = e[g++]) {
                                    if (m(h, l, c)) {
                                        p.push(h);
                                        break
                                    }
                                }
                                w && (T = k, i = ++n)
                            }
                            r && ((h = !m && h) && v--, s && x.push(h))
                        }
                        if (v += b, r && b !== v) {
                            g = 0;
                            while (m = t[g++]) {
                                m(x, y, l, c)
                            }
                            if (s) {
                                if (v > 0) {
                                    while (b--) {
                                        x[b] || y[b] || (y[b] = q.call(p))
                                    }
                                }
                                y = xt(y)
                            }
                            M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
                        }
                        return w && (T = k, u = C), x
                    };
                return r ? lt(s) : s
            }
            l = at.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    o = E[e + " "];
                if (!o) {
                    t || (t = mt(e)), n = t.length;
                    while (n--) {
                        o = Tt(t[n]), o[b] ? r.push(o) : i.push(o)
                    }
                    o = E(e, Ct(i, r))
                }
                return o
            };

            function Nt(e, t, n) {
                var r = 0,
                    i = t.length;
                for (; i > r; r++) {
                    at(e, t[r], n)
                }
                return n
            }

            function kt(e, t, n, i) {
                var a, s, u, c, p, f = mt(e);
                if (!i && 1 === f.length) {
                    if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                        if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t) {
                            return n
                        }
                        e = e.slice(s.shift().value.length)
                    }
                    a = Q.needsContext.test(e) ? 0 : s.length;
                    while (a--) {
                        if (u = s[a], o.relative[c = u.type]) {
                            break
                        }
                        if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
                            if (s.splice(a, 1), e = i.length && yt(s), !e) {
                                return M.apply(n, i), n
                            }
                            break
                        }
                    }
                }
                return l(e, f)(i, t, !h, n, V.test(e)), n
            }
            r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function(e) {
                return 1 & e.compareDocumentPosition(f.createElement("div"))
            }), ut(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || ct("type|href|height|width", function(e, n, r) {
                return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
            }), r.attributes && ut(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || ct("value", function(e, n, r) {
                return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
            }), ut(function(e) {
                return null == e.getAttribute("disabled")
            }) || ct(B, function(e, n, r) {
                var i;
                return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
            }), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains
        }(e);
    var O = {};

    function F(e) {
        var t = O[e] = {};
        return x.each(e.match(T) || [], function(e, n) {
            t[n] = !0
        }), t
    }
    x.Callbacks = function(e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
        var n, r, i, o, a, s, l = [],
            u = !e.once && [],
            c = function(t) {
                for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++) {
                    if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                }
                n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
            },
            p = {
                add: function() {
                    if (l) {
                        var t = l.length;
                        (function i(t) {
                            x.each(t, function(t, n) {
                                var r = x.type(n);
                                "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                            })
                        })(arguments), n ? o = l.length : r && (s = t, c(r))
                    }
                    return this
                },
                remove: function() {
                    return l && x.each(arguments, function(e, t) {
                        var r;
                        while ((r = x.inArray(t, l, r)) > -1) {
                            l.splice(r, 1), n && (o >= r && o--, a >= r && a--)
                        }
                    }), this
                },
                has: function(e) {
                    return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
                },
                empty: function() {
                    return l = [], o = 0, this
                },
                disable: function() {
                    return l = u = r = t, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return u = t, r || p.disable(), this
                },
                locked: function() {
                    return !u
                },
                fireWith: function(e, t) {
                    return !l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this
                },
                fire: function() {
                    return p.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return p
    }, x.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", x.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", x.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", x.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return x.Deferred(function(n) {
                            x.each(t, function(t, o) {
                                var a = o[0],
                                    s = x.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? x.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, x.each(t, function(e, o) {
                var a = o[2],
                    s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = g.call(arguments),
                r = n.length,
                i = 1 !== r || e && x.isFunction(e.promise) ? r : 0,
                o = 1 === i ? e : x.Deferred(),
                a = function(e, t, n) {
                    return function(r) {
                        t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
                    }
                },
                s, l, u;
            if (r > 1) {
                for (s = Array(r), l = Array(r), u = Array(r); r > t; t++) {
                    n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i
                }
            }
            return i || o.resolveWith(u, n), o.promise()
        }
    }), x.support = function(t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length) {
            return t
        }
        s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
        try {
            delete d.test
        } catch (h) {
            t.deleteExpando = !1
        }
        o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (f in {
                submit: !0,
                change: !0,
                focusin: !0
            }) {
            d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1
        }
        d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (f in x(t)) {
            break
        }
        return t.ownLast = "0" !== f, x(function() {
            var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                l = a.getElementsByTagName("body")[0];
            l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = 4 === d.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
        }), n = s = l = u = r = o = null, t
    }({});
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        P = /([A-Z])/g;

    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o, a, s = x.expando,
                l = e.nodeType,
                u = l ? x.cache : e,
                c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) {
                return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : {
                    toJSON: x.noop
                }), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o
            }
        }
    }

    function W(e, t, n) {
        if (x.acceptData(e)) {
            var r, i, o = e.nodeType,
                a = o ? x.cache : e,
                s = o ? e[x.expando] : x.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    while (i--) {
                        delete r[t[i]]
                    }
                    if (n ? !I(r) : !x.isEmptyObject(r)) {
                        return
                    }
                }(n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }
    x.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e)
        },
        data: function(e, t, n) {
            return R(e, t, n)
        },
        removeData: function(e, t) {
            return W(e, t)
        },
        _data: function(e, t, n) {
            return R(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return W(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) {
                return !1
            }
            var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), x.fn.extend({
        data: function(e, n) {
            var r, i, o = null,
                a = 0,
                s = this[0];
            if (e === t) {
                if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                    for (r = s.attributes; r.length > a; a++) {
                        i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]))
                    }
                    x._data(s, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                x.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                x.data(this, e, n)
            }) : s ? $(s, e, x.data(s, e)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                x.removeData(this, e)
            })
        }
    });

    function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
                } catch (o) {}
                x.data(e, n, r)
            } else {
                r = t
            }
        }
        return r
    }

    function I(e) {
        var t;
        for (t in e) {
            if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t) {
                return !1
            }
        }
        return !0
    }
    x.extend({
        queue: function(e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = x.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = x._queueHooks(e, t),
                a = function() {
                    x.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return x._data(e, n) || x._data(e, n, {
                empty: x.Callbacks("once memory").add(function() {
                    x._removeData(e, t + "queue"), x._removeData(e, n)
                })
            })
        }
    }), x.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = x.queue(this, e, n);
                x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                x.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
                o = x.Deferred(),
                a = this,
                s = this.length,
                l = function() {
                    --i || o.resolveWith(a, [a])
                };
            "string" != typeof e && (n = e, e = t), e = e || "fx";
            while (s--) {
                r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l))
            }
            return l(), o.promise(n)
        }
    });
    var z, X, U = /[\t\r\n\f]/g,
        V = /\r/g,
        Y = /^(?:input|select|textarea|button|object)$/i,
        J = /^(?:a|area)$/i,
        G = /^(?:checked|selected)$/i,
        Q = x.support.getSetAttribute,
        K = x.support.input;
    x.fn.extend({
        attr: function(e, t) {
            return x.access(this, x.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                x.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return x.access(this, x.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = x.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = "string" == typeof e && e;
            if (x.isFunction(e)) {
                return this.each(function(t) {
                    x(this).addClass(e.call(this, t, this.className))
                })
            }
            if (l) {
                for (t = (e || "").match(T) || []; s > a; a++) {
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
                        o = 0;
                        while (i = t[o++]) {
                            0 > r.indexOf(" " + i + " ") && (r += i + " ")
                        }
                        n.className = x.trim(r)
                    }
                }
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a = 0,
                s = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (x.isFunction(e)) {
                return this.each(function(t) {
                    x(this).removeClass(e.call(this, t, this.className))
                })
            }
            if (l) {
                for (t = (e || "").match(T) || []; s > a; a++) {
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
                        o = 0;
                        while (i = t[o++]) {
                            while (r.indexOf(" " + i + " ") >= 0) {
                                r = r.replace(" " + i + " ", " ")
                            }
                        }
                        n.className = e ? x.trim(r) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function(n) {
                x(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n) {
                    var t, r = 0,
                        o = x(this),
                        a = e.match(T) || [];
                    while (t = a[r++]) {
                        o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                    }
                } else {
                    (n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
                }
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; r > n; n++) {
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0) {
                    return !0
                }
            }
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0];
            if (arguments.length) {
                return i = x.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
                })
            }
            if (o) {
                return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
            }
        }
    }), x.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = x.find.attr(e, "value");
                    return null != t ? t : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        o = "select-one" === e.type || 0 > i,
                        a = o ? null : [],
                        s = o ? i + 1 : r.length,
                        l = 0 > i ? s : o ? i : 0;
                    for (; s > l; l++) {
                        if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
                            if (t = x(n).val(), o) {
                                return t
                            }
                            a.push(t)
                        }
                    }
                    return a
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = x.makeArray(t),
                        a = i.length;
                    while (a--) {
                        r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0)
                    }
                    return n || (e.selectedIndex = -1), o
                }
            }
        },
        attr: function(e, n, r) {
            var o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) {
                return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get" in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set" in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t))
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
                o = t && t.match(T);
            if (o && 1 === e.nodeType) {
                while (n = o[i++]) {
                    r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r)
                }
            }
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) {
                return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = x.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), X = {
        set: function(e, t, n) {
            return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, n) {
        var r = x.expr.attrHandle[n] || x.find.attr;
        x.expr.attrHandle[n] = K && Q || !G.test(n) ? function(e, n, i) {
            var o = x.expr.attrHandle[n],
                a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return x.expr.attrHandle[n] = o, a
        } : function(e, n, r) {
            return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), K && Q || (x.attrHooks.value = {
        set: function(e, n, r) {
            return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
        }
    }), Q || (z = {
        set: function(e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function(e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }, x.valHooks.button = {
        get: function(e, n) {
            var r = e.getAttributeNode(n);
            return r && r.specified ? r.value : t
        },
        set: z.set
    }, x.attrHooks.contenteditable = {
        set: function(e, t, n) {
            z.set(e, "" === t ? !1 : t, n)
        }
    }, x.each(["width", "height"], function(e, n) {
        x.attrHooks[n] = {
            set: function(e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        }
    })), x.support.hrefNormalized || x.each(["href", "src"], function(e, t) {
        x.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }), x.support.style || (x.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), x.support.optSelected || (x.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        x.propFix[this.toLowerCase()] = this
    }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function() {
        x.valHooks[this] = {
            set: function(e, n) {
                return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
            }
        }, x.support.checkOn || (x.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Z = /^(?:input|select|textarea)$/i,
        et = /^key/,
        tt = /^(?:mouse|contextmenu)|click/,
        nt = /^(?:focusinfocus|focusoutblur)$/,
        rt = /^([^.]*)(?:\.(.+)|)$/;

    function it() {
        return !0
    }

    function ot() {
        return !1
    }

    function at() {
        try {
            return a.activeElement
        } catch (e) {}
    }
    x.event = {
        global: {},
        add: function(e, n, r, o, a) {
            var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
            if (v) {
                r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
                    return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
                }, f.elem = e), n = (n || "").match(T) || [""], u = n.length;
                while (u--) {
                    s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({
                        type: g,
                        origType: y,
                        data: o,
                        handler: r,
                        guid: r.guid,
                        selector: a,
                        needsContext: a && x.expr.match.needsContext.test(a),
                        namespace: m.join(".")
                    }, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0)
                }
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
            if (m && (c = m.events)) {
                t = (t || "").match(T) || [""], u = t.length;
                while (u--) {
                    if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
                        while (o--) {
                            a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a))
                        }
                        l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
                    } else {
                        for (d in c) {
                            x.event.remove(e, d + t[u], n, r, !0)
                        }
                    }
                }
                x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
            }
        },
        trigger: function(n, r, i, o) {
            var s, l, u, c, p, f, d, h = [i || a],
                g = v.call(n, "type") ? n.type : n,
                m = v.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !x.isWindow(i)) {
                    for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) {
                        h.push(u), f = u
                    }
                    f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
                }
                d = 0;
                while ((u = h[d++]) && !n.isPropagationStopped()) {
                    n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault()
                }
                if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                    f = i[l], f && (i[l] = null), x.event.triggered = g;
                    try {
                        i[g]()
                    } catch (y) {}
                    x.event.triggered = t, f && (i[l] = f)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = x.event.fix(e);
            var n, r, i, o, a, s = [],
                l = g.call(arguments),
                u = (x._data(this, "events") || {})[e.type] || [],
                c = x.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                s = x.event.handlers.call(this, e, u), n = 0;
                while ((o = s[n++]) && !e.isPropagationStopped()) {
                    e.currentTarget = o.elem, a = 0;
                    while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) {
                        (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
                    }
                }
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, n) {
            var r, i, o, a, s = [],
                l = n.delegateCount,
                u = e.target;
            if (l && u.nodeType && (!e.button || "click" !== e.type)) {
                for (; u != this; u = u.parentNode || this) {
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (o = [], a = 0; l > a; a++) {
                            i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i)
                        }
                        o.length && s.push({
                            elem: u,
                            handlers: o
                        })
                    }
                }
            }
            return n.length > l && s.push({
                elem: this,
                handlers: n.slice(l)
            }), s
        },
        fix: function(e) {
            if (e[x.expando]) {
                return e
            }
            var t, n, r, i = e.type,
                o = e,
                s = this.fixHooks[i];
            s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
            while (t--) {
                n = r[t], e[n] = o[n]
            }
            return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var r, i, o, s = n.button,
                    l = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== at() && this.focus) {
                        try {
                            return this.focus(), !1
                        } catch (e) {}
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === at() && this.blur ? (this.blur(), !1) : t
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                },
                _default: function(e) {
                    return x.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, r) {
            var i = x.extend(new x.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, x.removeEvent = a.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, x.Event = function(e, n) {
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n)
    }, x.Event.prototype = {
        isDefaultPrevented: ot,
        isPropagationStopped: ot,
        isImmediatePropagationStopped: ot,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = it, this.stopPropagation()
        }
    }, x.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        x.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return (!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), x.support.submitBubbles || (x.event.special.submit = {
        setup: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function(e) {
                var n = e.target,
                    r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
                r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }), x._data(r, "submitBubbles", !0))
            }), t)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t)
        }
    }), x.support.changeBubbles || (x.event.special.change = {
        setup: function() {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), x.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0)
            })), !1) : (x.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
                }), x._data(t, "changeBubbles", !0))
            }), t)
        },
        handle: function(e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        },
        teardown: function() {
            return x.event.remove(this, "._change"), !Z.test(this.nodeName)
        }
    }), x.support.focusinBubbles || x.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = 0,
            r = function(e) {
                x.event.simulate(t, e.target, x.event.fix(e), !0)
            };
        x.event.special[t] = {
            setup: function() {
                0 === n++ && a.addEventListener(e, r, !0)
            },
            teardown: function() {
                0 === --n && a.removeEventListener(e, r, !0)
            }
        }
    }), x.fn.extend({
        on: function(e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e) {
                    this.on(a, n, r, e[a], o)
                }
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) {
                i = ot
            } else {
                if (!i) {
                    return this
                }
            }
            return 1 === o && (s = i, i = function(e) {
                return x().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function() {
                x.event.add(this, e, i, r, n)
            })
        },
        one: function(e, t, n, r) {
            return this.on(e, t, n, r, 1)
        },
        off: function(e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) {
                return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this
            }
            if ("object" == typeof e) {
                for (o in e) {
                    this.off(o, n, e[o])
                }
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function() {
                x.event.remove(this, e, r, n)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                x.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, n) {
            var r = this[0];
            return r ? x.event.trigger(e, n, r, !0) : t
        }
    });
    var st = /^.[^:#\[\.,]*$/,
        lt = /^(?:parents|prev(?:Until|All))/,
        ut = x.expr.match.needsContext,
        ct = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    x.fn.extend({
        find: function(e) {
            var t, n = [],
                r = this,
                i = r.length;
            if ("string" != typeof e) {
                return this.pushStack(x(e).filter(function() {
                    for (t = 0; i > t; t++) {
                        if (x.contains(r[t], this)) {
                            return !0
                        }
                    }
                }))
            }
            for (t = 0; i > t; t++) {
                x.find(e, r[t], n)
            }
            return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        },
        has: function(e) {
            var t, n = x(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++) {
                    if (x.contains(this, n[t])) {
                        return !0
                    }
                }
            })
        },
        not: function(e) {
            return this.pushStack(ft(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(ft(this, e || [], !1))
        },
        is: function(e) {
            return !!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
            for (; i > r; r++) {
                for (n = this[r]; n && n !== t; n = n.parentNode) {
                    if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
                        n = o.push(n);
                        break
                    }
                }
            }
            return this.pushStack(o.length > 1 ? x.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e),
                r = x.merge(this.get(), n);
            return this.pushStack(x.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });

    function pt(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);
        return e
    }
    x.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return x.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return x.dir(e, "parentNode", n)
        },
        next: function(e) {
            return pt(e, "nextSibling")
        },
        prev: function(e) {
            return pt(e, "previousSibling")
        },
        nextAll: function(e) {
            return x.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return x.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return x.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return x.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return x.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return x.sibling(e.firstChild)
        },
        contents: function(e) {
            return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
        }
    }, function(e, t) {
        x.fn[e] = function(n, r) {
            var i = x.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), x.extend({
        filter: function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, n, r) {
            var i = [],
                o = e[n];
            while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r))) {
                1 === o.nodeType && i.push(o), o = o[n]
            }
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) {
                1 === e.nodeType && e !== t && n.push(e)
            }
            return n
        }
    });

    function ft(e, t, n) {
        if (x.isFunction(t)) {
            return x.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            })
        }
        if (t.nodeType) {
            return x.grep(e, function(e) {
                return e === t !== n
            })
        }
        if ("string" == typeof t) {
            if (st.test(t)) {
                return x.filter(t, e, n)
            }
            t = x.filter(t, e)
        }
        return x.grep(e, function(e) {
            return x.inArray(e, t) >= 0 !== n
        })
    }

    function dt(e) {
        var t = ht.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement) {
            while (t.length) {
                n.createElement(t.pop())
            }
        }
        return n
    }
    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gt = / jQuery\d+="(?:null|\d+)"/g,
        mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
        yt = /^\s+/,
        vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        xt = /<tbody/i,
        wt = /<|&#?\w+;/,
        Tt = /<(?:script|style|link)/i,
        Ct = /^(?:checkbox|radio)$/i,
        Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        kt = /^$|\/(?:java|ecma)script/i,
        Et = /^true\/(.*)/,
        St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        At = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        jt = dt(a),
        Dt = jt.appendChild(a.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({
        text: function(e) {
            return x.access(this, function(e) {
                return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Lt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            var n, r = e ? x.filter(e, this) : this,
                i = 0;
            for (; null != (n = r[i]); i++) {
                t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n))
            }
            return this
        },
        empty: function() {
            var e, t = 0;
            for (; null != (e = this[t]); t++) {
                1 === e.nodeType && x.cleanData(Ft(e, !1));
                while (e.firstChild) {
                    e.removeChild(e.firstChild)
                }
                e.options && x.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                return x.clone(this, e, t)
            })
        },
        html: function(e) {
            return x.access(this, function(e) {
                var n = this[0] || {},
                    r = 0,
                    i = this.length;
                if (e === t) {
                    return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t
                }
                if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(vt, "<$1></$2>");
                    try {
                        for (; i > r; r++) {
                            n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e)
                        }
                        n = 0
                    } catch (o) {}
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = x.map(this, function(e) {
                    return [e.nextSibling, e.parentNode]
                }),
                t = 0;
            return this.domManip(arguments, function(n) {
                var r = e[t++],
                    i = e[t++];
                i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
            }, !0), t ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, n) {
            e = d.apply([], e);
            var r, i, o, a, s, l, u = 0,
                c = this.length,
                p = this,
                f = c - 1,
                h = e[0],
                g = x.isFunction(h);
            if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h)) {
                return this.each(function(r) {
                    var i = p.eq(r);
                    g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
                })
            }
            if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
                for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++) {
                    i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u)
                }
                if (o) {
                    for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++) {
                        i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")))
                    }
                }
                l = r = null
            }
            return this
        }
    });

    function Lt(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function Ht(e) {
        return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e
    }

    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function _t(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++) {
            x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
        }
    }

    function Mt(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n, r, i, o = x._data(e),
                a = x._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s) {
                    for (r = 0, i = s[n].length; i > r; r++) {
                        x.event.add(t, n, s[n][r])
                    }
                }
            }
            a.data && (a.data = x.extend({}, a.data))
        }
    }

    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
                i = x._data(t);
                for (r in i.events) {
                    x.removeEvent(t, r, i.handle)
                }
                t.removeAttribute(x.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    x.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        x.fn[e] = function(e) {
            var n, r = 0,
                i = [],
                o = x(e),
                a = o.length - 1;
            for (; a >= r; r++) {
                n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get())
            }
            return this.pushStack(i)
        }
    });

    function Ft(e, n) {
        var r, o, a = 0,
            s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s) {
            for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) {
                !n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n))
            }
        }
        return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
    }

    function Bt(e) {
        Ct.test(e.type) && (e.defaultChecked = e.checked)
    }
    x.extend({
        clone: function(e, t, n) {
            var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
            if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e))) {
                for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a) {
                    r[a] && Ot(i, r[a])
                }
            }
            if (t) {
                if (n) {
                    for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++) {
                        Mt(i, r[a])
                    }
                } else {
                    Mt(e, o)
                }
            }
            return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o
        },
        buildFragment: function(e, t, n, r) {
            var i, o, a, s, l, u, c, p = e.length,
                f = dt(t),
                d = [],
                h = 0;
            for (; p > h; h++) {
                if (o = e[h], o || 0 === o) {
                    if ("object" === x.type(o)) {
                        x.merge(d, o.nodeType ? [o] : o)
                    } else {
                        if (wt.test(o)) {
                            s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
                            while (i--) {
                                s = s.lastChild
                            }
                            if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
                                o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
                                while (i--) {
                                    x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
                                }
                            }
                            x.merge(d, s.childNodes), s.textContent = "";
                            while (s.firstChild) {
                                s.removeChild(s.firstChild)
                            }
                            s = f.lastChild
                        } else {
                            d.push(t.createTextNode(o))
                        }
                    }
                }
            }
            s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;
            while (o = d[h++]) {
                if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
                    i = 0;
                    while (o = s[i++]) {
                        kt.test(o.type || "") && n.push(o)
                    }
                }
            }
            return s = null, f
        },
        cleanData: function(e, t) {
            var n, r, o, a, s = 0,
                l = x.expando,
                u = x.cache,
                c = x.support.deleteExpando,
                f = x.event.special;
            for (; null != (n = e[s]); s++) {
                if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
                    if (a.events) {
                        for (r in a.events) {
                            f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle)
                        }
                    }
                    u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
                }
            }
        },
        _evalUrl: function(e) {
            return x.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }), x.fn.extend({
        wrapAll: function(e) {
            if (x.isFunction(e)) {
                return this.each(function(t) {
                    x(this).wrapAll(e.call(this, t))
                })
            }
            if (this[0]) {
                var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    var e = this;
                    while (e.firstChild && 1 === e.firstChild.nodeType) {
                        e = e.firstChild
                    }
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return x.isFunction(e) ? this.each(function(t) {
                x(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = x(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = x.isFunction(e);
            return this.each(function(n) {
                x(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
        It = /opacity\s*=\s*([^)]*)/,
        zt = /^(top|right|bottom|left)$/,
        Xt = /^(none|table(?!-c[ea]).+)/,
        Ut = /^margin/,
        Vt = RegExp("^(" + w + ")(.*)$", "i"),
        Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"),
        Jt = RegExp("^([+-])=(" + w + ")", "i"),
        Gt = {
            BODY: "block"
        },
        Qt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Kt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Zt = ["Top", "Right", "Bottom", "Left"],
        en = ["Webkit", "O", "Moz", "ms"];

    function tn(e, t) {
        if (t in e) {
            return t
        }
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = en.length;
        while (i--) {
            if (t = en[i] + n, t in e) {
                return t
            }
        }
        return r
    }

    function nn(e, t) {
        return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, o = [],
            a = 0,
            s = e.length;
        for (; s > a; a++) {
            r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))))
        }
        for (a = 0; s > a; a++) {
            r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"))
        }
        return e
    }
    x.fn.extend({
        css: function(e, n) {
            return x.access(this, function(e, n, r) {
                var i, o, a = {},
                    s = 0;
                if (x.isArray(n)) {
                    for (o = Rt(e), i = n.length; i > s; s++) {
                        a[n[s]] = x.css(e, n[s], !1, o)
                    }
                    return a
                }
                return r !== t ? x.style(e, n, r) : x.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return rn(this, !0)
        },
        hide: function() {
            return rn(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                nn(this) ? x(this).show() : x(this).hide()
            })
        }
    }), x.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Wt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": x.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, l = x.camelCase(n),
                    u = e.style;
                if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t) {
                    return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n]
                }
                if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) {
                    try {
                        u[n] = r
                    } catch (c) {}
                }
            }
        },
        css: function(e, n, r, i) {
            var o, a, s, l = x.camelCase(n);
            return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a
        }
    }), e.getComputedStyle ? (Rt = function(t) {
        return e.getComputedStyle(t, null)
    }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
            l = s ? s.getPropertyValue(n) || s[n] : t,
            u = e.style;
        return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
    }) : a.documentElement.currentStyle && (Rt = function(e) {
        return e.currentStyle
    }, Wt = function(e, n, r) {
        var i, o, a, s = r || Rt(e),
            l = s ? s[n] : t,
            u = e.style;
        return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
    });

    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
            a = 0;
        for (; 4 > o; o += 2) {
            "margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)))
        }
        return a
    }

    function sn(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Rt(e),
            a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) {
                return i
            }
            r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function ln(e) {
        var t = a,
            n = Gt[e];
        return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n
    }

    function un(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body),
            r = x.css(n[0], "display");
        return n.remove(), r
    }
    x.each(["height", "width"], function(e, n) {
        x.cssHooks[n] = {
            get: function(e, r, i) {
                return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function() {
                    return sn(e, n, i)
                }) : sn(e, n, i) : t
            },
            set: function(e, t, r) {
                var i = r && Rt(e);
                return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), x.support.opacity || (x.cssHooks.opacity = {
        get: function(e, t) {
            return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
        }
    }), x(function() {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {
            get: function(e, n) {
                return n ? x.swap(e, {
                    display: "inline-block"
                }, Wt, [e, "marginRight"]) : t
            }
        }), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function(e, n) {
            x.cssHooks[n] = {
                get: function(e, r) {
                    return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), x.expr && x.expr.filters && (x.expr.filters.hidden = function(e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
    }, x.expr.filters.visible = function(e) {
        return !x.expr.filters.hidden(e)
    }), x.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        x.cssHooks[e + t] = {
            expand: function(n) {
                var r = 0,
                    i = {},
                    o = "string" == typeof n ? n.split(" ") : [n];
                for (; 4 > r; r++) {
                    i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0]
                }
                return i
            }
        }, Ut.test(e) || (x.cssHooks[e + t].set = on)
    });
    var cn = /%20/g,
        pn = /\[\]$/,
        fn = /\r?\n/g,
        dn = /^(?:submit|button|image|reset|file)$/i,
        hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({
        serialize: function() {
            return x.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = x.prop(this, "elements");
                return e ? x.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
            }).map(function(e, t) {
                var n = x(this).val();
                return null == n ? null : x.isArray(n) ? x.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(fn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(fn, "\r\n")
                }
            }).get()
        }
    }), x.param = function(e, n) {
        var r, i = [],
            o = function(e, t) {
                t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e)) {
            x.each(e, function() {
                o(this.name, this.value)
            })
        } else {
            for (r in e) {
                gn(r, e[r], n, o)
            }
        }
        return i.join("&").replace(cn, "+")
    };

    function gn(e, t, n, r) {
        var i;
        if (x.isArray(t)) {
            x.each(t, function(t, i) {
                n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            })
        } else {
            if (n || "object" !== x.type(t)) {
                r(e, t)
            } else {
                for (i in t) {
                    gn(e + "[" + i + "]", t[i], n, r)
                }
            }
        }
    }
    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        x.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), x.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var mn, yn, vn = x.now(),
        bn = /\?/,
        xn = /#.*$/,
        wn = /([?&])_=[^&]*/,
        Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Nn = /^(?:GET|HEAD)$/,
        kn = /^\/\//,
        En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Sn = x.fn.load,
        An = {},
        jn = {},
        Dn = "*/".concat("*");
    try {
        yn = o.href
    } catch (Ln) {
        yn = a.createElement("a"), yn.href = "", yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];

    function Hn(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(T) || [];
            if (x.isFunction(n)) {
                while (r = o[i++]) {
                    "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }
        }
    }

    function qn(e, n, r, i) {
        var o = {},
            a = e === jn;

        function s(l) {
            var u;
            return o[l] = !0, x.each(e[l] || [], function(e, l) {
                var c = l(n, r, i);
                return "string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1)
            }), u
        }
        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }

    function _n(e, n) {
        var r, i, o = x.ajaxSettings.flatOptions || {};
        for (i in n) {
            n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i])
        }
        return r && x.extend(!0, e, r), e
    }
    x.fn.load = function(e, n, r) {
        if ("string" != typeof e && Sn) {
            return Sn.apply(this, arguments)
        }
        var i, o, a, s = this,
            l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }).complete(r && function(e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        x.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), x.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: yn,
            type: "GET",
            isLocal: Cn.test(mn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Dn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": x.parseJSON,
                "text xml": x.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
        },
        ajaxPrefilter: Hn(An),
        ajaxTransport: Hn(jn),
        ajax: function(e, n) {
            "object" == typeof e && (n = e, e = t), n = n || {};
            var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n),
                f = p.context || p,
                d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event,
                h = x.Deferred(),
                g = x.Callbacks("once memory"),
                m = p.statusCode || {},
                y = {},
                v = {},
                b = 0,
                w = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!c) {
                                c = {};
                                while (t = Tn.exec(a)) {
                                    c[t[1].toLowerCase()] = t[2]
                                }
                            }
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? a : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = v[n] = v[n] || e, y[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (p.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e) {
                            if (2 > b) {
                                for (t in e) {
                                    m[t] = [m[t], e[t]]
                                }
                            } else {
                                C.always(e[C.status])
                            }
                        }
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return u && u.abort(t), k(0, t), this
                    }
                };
            if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b) {
                return C
            }
            l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
            for (i in p.headers) {
                C.setRequestHeader(i, p.headers[i])
            }
            if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b)) {
                return C.abort()
            }
            w = "abort";
            for (i in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) {
                C[i](p[i])
            }
            if (u = qn(jn, p, n, C)) {
                C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
                    C.abort("timeout")
                }, p.timeout));
                try {
                    b = 1, u.send(y, k)
                } catch (N) {
                    if (!(2 > b)) {
                        throw N
                    }
                    k(-1, N)
                }
            } else {
                k(-1, "No Transport")
            }

            function k(e, n, r, i) {
                var c, y, v, w, T, N = n;
                2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(e, t, n) {
            return x.get(e, t, n, "json")
        },
        getScript: function(e, n) {
            return x.get(e, t, n, "script")
        }
    }), x.each(["get", "post"], function(e, n) {
        x[n] = function(e, r, i, o) {
            return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    });

    function Mn(e, n, r) {
        var i, o, a, s, l = e.contents,
            u = e.dataTypes;
        while ("*" === u[0]) {
            u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"))
        }
        if (o) {
            for (s in l) {
                if (l[s] && l[s].test(o)) {
                    u.unshift(s);
                    break
                }
            }
        }
        if (u[0] in r) {
            a = u[0]
        } else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : t
    }

    function On(e, t, n, r) {
        var i, o, a, s, l, u = {},
            c = e.dataTypes.slice();
        if (c[1]) {
            for (a in e.converters) {
                u[a.toLowerCase()] = e.converters[a]
            }
        }
        o = c.shift();
        while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) {
                if ("*" === o) {
                    o = l
                } else {
                    if ("*" !== l && l !== o) {
                        if (a = u[l + " " + o] || u["* " + o], !a) {
                            for (i in u) {
                                if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                    a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                            }
                        }
                        if (a !== !0) {
                            if (a && e["throws"]) {
                                t = a(t)
                            } else {
                                try {
                                    t = a(t)
                                } catch (p) {
                                    return {
                                        state: "parsererror",
                                        error: a ? p : "No conversion from " + l + " to " + o
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    x.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return x.globalEval(e), e
            }
        }
    }), x.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), x.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = a.head || x("head")[0] || a.documentElement;
            return {
                send: function(t, i) {
                    n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Fn = [],
        Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Fn.pop() || x.expando + "_" + vn++;
            return this[e] = !0, e
        }
    }), x.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return s || x.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
            s = arguments
        }, i.always(function() {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Pn, Rn, Wn = 0,
        $n = e.ActiveXObject && function() {
            var e;
            for (e in Pn) {
                Pn[e](t, !0)
            }
        };

    function In() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    x.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && In() || zn()
    } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials" in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function(n) {
        if (!n.crossDomain || x.support.cors) {
            var r;
            return {
                send: function(i, o) {
                    var a, s, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) {
                        for (s in n.xhrFields) {
                            l[s] = n.xhrFields[s]
                        }
                    }
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) {
                            l.setRequestHeader(s, i[s])
                        }
                    } catch (u) {}
                    l.send(n.hasContent && n.data || null), r = function(e, i) {
                        var s, u, c, p;
                        try {
                            if (r && (i || 4 === l.readyState)) {
                                if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i) {
                                    4 !== l.readyState && l.abort()
                                } else {
                                    p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                                    try {
                                        c = l.statusText
                                    } catch (f) {
                                        c = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                                }
                            }
                        } catch (d) {
                            i || o(-1, d)
                        }
                        p && o(s, c, p, u)
                    }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r()
                },
                abort: function() {
                    r && r(t, !0)
                }
            }
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
        Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"),
        Jn = /queueHooks$/,
        Gn = [nr],
        Qn = {
            "*": [function(e, t) {
                var n = this.createTween(e, t),
                    r = n.cur(),
                    i = Yn.exec(t),
                    o = i && i[3] || (x.cssNumber[e] ? "" : "px"),
                    a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)),
                    s = 1,
                    l = 20;
                if (a && a[3] !== o) {
                    o = o || a[3], i = i || [], a = +r || 1;
                    do {
                        s = s || ".5", a /= s, x.style(n.elem, e, a + o)
                    } while (s !== (s = n.cur() / r) && 1 !== s && --l)
                }
                return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };

    function Kn() {
        return setTimeout(function() {
            Xn = t
        }), Xn = x.now()
    }

    function Zn(e, t, n) {
        var r, i = (Qn[t] || []).concat(Qn["*"]),
            o = 0,
            a = i.length;
        for (; a > o; o++) {
            if (r = i[o].call(n, t, e)) {
                return r
            }
        }
    }

    function er(e, t, n) {
        var r, i, o = 0,
            a = Gn.length,
            s = x.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (i) {
                    return !1
                }
                var t = Xn || Kn(),
                    n = Math.max(0, u.startTime + u.duration - t),
                    r = n / u.duration || 0,
                    o = 1 - r,
                    a = 0,
                    l = u.tweens.length;
                for (; l > a; a++) {
                    u.tweens[a].run(o)
                }
                return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: x.extend({}, t),
                opts: x.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || Kn(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? u.tweens.length : 0;
                    if (i) {
                        return this
                    }
                    for (i = !0; r > n; n++) {
                        u.tweens[n].run(1)
                    }
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            c = u.props;
        for (tr(c, u.opts.specialEasing); a > o; o++) {
            if (r = Gn[o].call(u, e, c, u.opts)) {
                return r
            }
        }
        return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function tr(e, t) {
        var n, r, i, o, a;
        for (n in e) {
            if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) {
                    n in e || (e[n] = o[n], t[n] = i)
                }
            } else {
                t[r] = i
            }
        }
    }
    x.Animation = x.extend(er, {
        tweener: function(e, t) {
            x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; i > r; r++) {
                n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
            }
        },
        prefilter: function(e, t) {
            t ? Gn.unshift(e) : Gn.push(e)
        }
    });

    function nr(e, t, n) {
        var r, i, o, a, s, l, u = this,
            c = {},
            p = e.style,
            f = e.nodeType && nn(e),
            d = x._data(e, "fxshow");
        n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, u.always(function() {
            u.always(function() {
                s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t) {
            if (i = t[r], Vn.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) {
                    continue
                }
                c[r] = d && d[r] || x.style(e, r)
            }
        }
        if (!x.isEmptyObject(c)) {
            d ? "hidden" in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function() {
                x(e).hide()
            }), u.done(function() {
                var t;
                x._removeData(e, "fxshow");
                for (t in c) {
                    x.style(e, t, c[t])
                }
            });
            for (r in c) {
                a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
            }
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }
    x.Tween = rr, rr.prototype = {
        constructor: rr,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = rr.propHooks[this.prop];
            return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = rr.propHooks[this.prop];
            return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
        }
    }, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, x.each(["toggle", "show", "hide"], function(e, t) {
        var n = x.fn[t];
        x.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), x.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(nn).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = x.isEmptyObject(e),
                o = x.speed(t, n, r),
                a = function() {
                    var t = er(this, x.extend({}, e), o);
                    (i || x._data(this, "finish")) && t.stop(!0)
                };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = x.timers,
                    a = x._data(this);
                if (n) {
                    a[n] && a[n].stop && i(a[n])
                } else {
                    for (n in a) {
                        a[n] && a[n].stop && Jn.test(n) && i(a[n])
                    }
                }
                for (n = o.length; n--;) {
                    o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1))
                }(t || !r) && x.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"), this.each(function() {
                var t, n = x._data(this),
                    r = n[e + "queue"],
                    i = n[e + "queueHooks"],
                    o = x.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1))
                }
                for (t = 0; a > t; t++) {
                    r[t] && r[t].finish && r[t].finish.call(this)
                }
                delete n.finish
            })
        }
    });

    function ir(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) {
            n = Zt[i], r["margin" + n] = r["padding" + n] = e
        }
        return t && (r.opacity = r.width = e), r
    }
    x.each({
        slideDown: ir("show"),
        slideUp: ir("hide"),
        slideToggle: ir("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        x.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), x.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {
            complete: n || !n && t || x.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !x.isFunction(t) && t
        };
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
        }, r
    }, x.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return 0.5 - Math.cos(e * Math.PI) / 2
        }
    }, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function() {
        var e, n = x.timers,
            r = 0;
        for (Xn = x.now(); n.length > r; r++) {
            e = n[r], e() || n[r] !== e || n.splice(r--, 1)
        }
        n.length || x.fx.stop(), Xn = t
    }, x.fx.timer = function(e) {
        e() && x.timers.push(e) && x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function() {
        Un || (Un = setInterval(x.fx.tick, x.fx.interval))
    }, x.fx.stop = function() {
        clearInterval(Un), Un = null
    }, x.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function(e) {
        return x.grep(x.timers, function(t) {
            return e === t.elem
        }).length
    }), x.fn.offset = function(e) {
        if (arguments.length) {
            return e === t ? this : this.each(function(t) {
                x.offset.setOffset(this, e, t)
            })
        }
        var n, r, o = {
                top: 0,
                left: 0
            },
            a = this[0],
            s = a && a.ownerDocument;
        if (s) {
            return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
                top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : o
        }
    }, x.offset = {
        setOffset: function(e, t, n) {
            var r = x.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i = x(e),
                o = i.offset(),
                a = x.css(e, "top"),
                s = x.css(e, "left"),
                l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1,
                u = {},
                c = {},
                p, f;
            l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using" in t ? t.using.call(e, u) : i.css(u)
        }
    }, x.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                        top: 0,
                        left: 0
                    },
                    r = this[0];
                return "fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - x.css(r, "marginTop", !0),
                    left: t.left - n.left - x.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || s;
                while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position")) {
                    e = e.offsetParent
                }
                return e || s
            })
        }
    }), x.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        x.fn[e] = function(i) {
            return x.access(this, function(e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    });

    function or(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    x.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        x.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            x.fn[i] = function(i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return x.access(this, function(n, r, i) {
                    var o;
                    return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), x.fn.size = function() {
        return this.length
    }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function() {
        return x
    }))
})(window);
/*! jQuery UI - v1.10.4 - 2014-03-09
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
 * Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function(g, d) {
    function c(k, j) {
        var l, e, n, m = k.nodeName.toLowerCase();
        return "area" === m ? (l = k.parentNode, e = l.name, k.href && e && "map" === l.nodeName.toLowerCase() ? (n = g("img[usemap=#" + e + "]")[0], !!n && h(n)) : !1) : (/input|select|textarea|button|object/.test(m) ? !k.disabled : "a" === m ? k.href || j : j) && h(k)
    }

    function h(a) {
        return g.expr.filters.visible(a) && !g(a).parents().addBack().filter(function() {
            return "hidden" === g.css(this, "visibility")
        }).length
    }
    var f = 0,
        b = /^ui-id-\d+$/;
    g.ui = g.ui || {}, g.extend(g.ui, {
        version: "1.10.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), g.fn.extend({
        focus: function(a) {
            return function(e, j) {
                return "number" == typeof e ? this.each(function() {
                    var i = this;
                    setTimeout(function() {
                        g(i).focus(), j && j.call(i)
                    }, e)
                }) : a.apply(this, arguments)
            }
        }(g.fn.focus),
        scrollParent: function() {
            var a;
            return a = g.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(g.css(this, "position")) && /(auto|scroll)/.test(g.css(this, "overflow") + g.css(this, "overflow-y") + g.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(g.css(this, "overflow") + g.css(this, "overflow-y") + g.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !a.length ? g(document) : a
        },
        zIndex: function(j) {
            if (j !== d) {
                return this.css("zIndex", j)
            }
            if (this.length) {
                for (var l, k, e = g(this[0]); e.length && e[0] !== document;) {
                    if (l = e.css("position"), ("absolute" === l || "relative" === l || "fixed" === l) && (k = parseInt(e.css("zIndex"), 10), !isNaN(k) && 0 !== k)) {
                        return k
                    }
                    e = e.parent()
                }
            }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++f)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                b.test(this.id) && g(this).removeAttr("id")
            })
        }
    }), g.extend(g.expr[":"], {
        data: g.expr.createPseudo ? g.expr.createPseudo(function(a) {
            return function(e) {
                return !!g.data(e, a)
            }
        }) : function(e, a, j) {
            return !!g.data(e, j[3])
        },
        focusable: function(a) {
            return c(a, !isNaN(g.attr(a, "tabindex")))
        },
        tabbable: function(a) {
            var i = g.attr(a, "tabindex"),
                e = isNaN(i);
            return (e || i >= 0) && c(a, !e)
        }
    }), g("<a>").outerWidth(1).jquery || g.each(["Width", "Height"], function(j, p) {
        function k(o, a, r, q) {
            return g.each(e, function() {
                a -= parseFloat(g.css(o, "padding" + this)) || 0, r && (a -= parseFloat(g.css(o, "border" + this + "Width")) || 0), q && (a -= parseFloat(g.css(o, "margin" + this)) || 0)
            }), a
        }
        var e = "Width" === p ? ["Left", "Right"] : ["Top", "Bottom"],
            m = p.toLowerCase(),
            l = {
                innerWidth: g.fn.innerWidth,
                innerHeight: g.fn.innerHeight,
                outerWidth: g.fn.outerWidth,
                outerHeight: g.fn.outerHeight
            };
        g.fn["inner" + p] = function(a) {
            return a === d ? l["inner" + p].call(this) : this.each(function() {
                g(this).css(m, k(this, a) + "px")
            })
        }, g.fn["outer" + p] = function(n, a) {
            return "number" != typeof n ? l["outer" + p].call(this, n) : this.each(function() {
                g(this).css(m, k(this, n, !0, a) + "px")
            })
        }
    }), g.fn.addBack || (g.fn.addBack = function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }), g("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (g.fn.removeData = function(a) {
        return function(e) {
            return arguments.length ? a.call(this, g.camelCase(e)) : a.call(this)
        }
    }(g.fn.removeData)), g.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), g.support.selectstart = "onselectstart" in document.createElement("div"), g.fn.extend({
        disableSelection: function() {
            return this.bind((g.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(a) {
                a.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), g.extend(g.ui, {
        plugin: {
            add: function(k, j, m) {
                var l, e = g.ui[k].prototype;
                for (l in m) {
                    e.plugins[l] = e.plugins[l] || [], e.plugins[l].push([j, m[l]])
                }
            },
            call: function(l, j, a) {
                var m, k = l.plugins[j];
                if (k && l.element[0].parentNode && 11 !== l.element[0].parentNode.nodeType) {
                    for (m = 0; k.length > m; m++) {
                        l.options[k[m][0]] && k[m][1].apply(l.element, a)
                    }
                }
            }
        },
        hasScroll: function(e, a) {
            if ("hidden" === g(e).css("overflow")) {
                return !1
            }
            var k = a && "left" === a ? "scrollLeft" : "scrollTop",
                j = !1;
            return e[k] > 0 ? !0 : (e[k] = 1, j = e[k] > 0, e[k] = 0, j)
        }
    })
})(jQuery);
(function(b, d) {
    var a = 0,
        c = Array.prototype.slice,
        f = b.cleanData;
    b.cleanData = function(j) {
        for (var g, h = 0; null != (g = j[h]); h++) {
            try {
                b(g).triggerHandler("remove")
            } catch (k) {}
        }
        f(j)
    }, b.widget = function(m, u, j) {
        var g, t, e, p, k = {},
            q = m.split(".")[0];
        m = m.split(".")[1], g = q + "-" + m, j || (j = u, u = b.Widget), b.expr[":"][g.toLowerCase()] = function(h) {
            return !!b.data(h, g)
        }, b[q] = b[q] || {}, t = b[q][m], e = b[q][m] = function(l, h) {
            return this._createWidget ? (arguments.length && this._createWidget(l, h), d) : new e(l, h)
        }, b.extend(e, t, {
            version: j.version,
            _proto: b.extend({}, j),
            _childConstructors: []
        }), p = new u, p.options = b.widget.extend({}, p.options), b.each(j, function(h, l) {
            return b.isFunction(l) ? (k[h] = function() {
                var i = function() {
                        return u.prototype[h].apply(this, arguments)
                    },
                    n = function(o) {
                        return u.prototype[h].apply(this, o)
                    };
                return function() {
                    var r, v = this._super,
                        w = this._superApply;
                    return this._super = i, this._superApply = n, r = l.apply(this, arguments), this._super = v, this._superApply = w, r
                }
            }(), d) : (k[h] = l, d)
        }), e.prototype = b.widget.extend(p, {
            widgetEventPrefix: t ? p.widgetEventPrefix || m : m
        }, k, {
            constructor: e,
            namespace: q,
            widgetName: m,
            widgetFullName: g
        }), t ? (b.each(t._childConstructors, function(n, h) {
            var l = h.prototype;
            b.widget(l.namespace + "." + l.widgetName, e, h._proto)
        }), delete t._childConstructors) : u._childConstructors.push(e), b.widget.bridge(m, e)
    }, b.widget.extend = function(g) {
        for (var m, l, e = c.call(arguments, 1), k = 0, j = e.length; j > k; k++) {
            for (m in e[k]) {
                l = e[k][m], e[k].hasOwnProperty(m) && l !== d && (g[m] = b.isPlainObject(l) ? b.isPlainObject(g[m]) ? b.widget.extend({}, g[m], l) : b.widget.extend({}, l) : l)
            }
        }
        return g
    }, b.widget.bridge = function(e, h) {
        var g = h.prototype.widgetFullName || e;
        b.fn[e] = function(j) {
            var m = "string" == typeof j,
                k = c.call(arguments, 1),
                i = this;
            return j = !m && k.length ? b.widget.extend.apply(null, [j].concat(k)) : j, m ? this.each(function() {
                var l, o = b.data(this, g);
                return o ? b.isFunction(o[j]) && "_" !== j.charAt(0) ? (l = o[j].apply(o, k), l !== o && l !== d ? (i = l && l.jquery ? i.pushStack(l.get()) : l, !1) : d) : b.error("no such method '" + j + "' for " + e + " widget instance") : b.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + j + "'")
            }) : this.each(function() {
                var l = b.data(this, g);
                l ? l.option(j || {})._init() : b.data(this, g, new h(j, this))
            }), i
        }
    }, b.Widget = function() {}, b.Widget._childConstructors = [], b.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(h, g) {
            g = b(g || this.defaultElement || this)[0], this.element = b(g), this.uuid = a++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = b.widget.extend({}, this.options, this._getCreateOptions(), h), this.bindings = b(), this.hoverable = b(), this.focusable = b(), g !== this && (b.data(g, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === g && this.destroy()
                }
            }), this.document = b(g.style ? g.ownerDocument : g.document || g), this.window = b(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: b.noop,
        _getCreateEventData: b.noop,
        _create: b.noop,
        _init: b.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(b.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: b.noop,
        widget: function() {
            return this.element
        },
        option: function(g, h) {
            var l, k, e, j = g;
            if (0 === arguments.length) {
                return b.widget.extend({}, this.options)
            }
            if ("string" == typeof g) {
                if (j = {}, l = g.split("."), g = l.shift(), l.length) {
                    for (k = j[g] = b.widget.extend({}, this.options[g]), e = 0; l.length - 1 > e; e++) {
                        k[l[e]] = k[l[e]] || {}, k = k[l[e]]
                    }
                    if (g = l.pop(), 1 === arguments.length) {
                        return k[g] === d ? null : k[g]
                    }
                    k[g] = h
                } else {
                    if (1 === arguments.length) {
                        return this.options[g] === d ? null : this.options[g]
                    }
                    j[g] = h
                }
            }
            return this._setOptions(j), this
        },
        _setOptions: function(g) {
            var h;
            for (h in g) {
                this._setOption(h, g[h])
            }
            return this
        },
        _setOption: function(g, h) {
            return this.options[g] = h, "disabled" === g && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!h).attr("aria-disabled", h), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(g, h, k) {
            var j, e = this;
            "boolean" != typeof g && (k = h, h = g, g = !1), k ? (h = j = b(h), this.bindings = this.bindings.add(h)) : (k = h, h = this.element, j = this.widget()), b.each(k, function(s, p) {
                function o() {
                    return g || e.options.disabled !== !0 && !b(this).hasClass("ui-state-disabled") ? ("string" == typeof p ? e[p] : p).apply(e, arguments) : d
                }
                "string" != typeof p && (o.guid = p.guid = p.guid || o.guid || b.guid++);
                var i = s.match(/^(\w+)\s*(.*)$/),
                    q = i[1] + e.eventNamespace,
                    m = i[2];
                m ? j.delegate(m, q, o) : h.bind(q, o)
            })
        },
        _off: function(g, h) {
            h = (h || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, g.unbind(h).undelegate(h)
        },
        _delay: function(h, k) {
            function g() {
                return ("string" == typeof h ? j[h] : h).apply(j, arguments)
            }
            var j = this;
            return setTimeout(g, k || 0)
        },
        _hoverable: function(g) {
            this.hoverable = this.hoverable.add(g), this._on(g, {
                mouseenter: function(h) {
                    b(h.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(h) {
                    b(h.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(g) {
            this.focusable = this.focusable.add(g), this._on(g, {
                focusin: function(h) {
                    b(h.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(h) {
                    b(h.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(k, h, j) {
            var m, l, g = this.options[k];
            if (j = j || {}, h = b.Event(h), h.type = (k === this.widgetEventPrefix ? k : this.widgetEventPrefix + k).toLowerCase(), h.target = this.element[0], l = h.originalEvent) {
                for (m in l) {
                    m in h || (h[m] = l[m])
                }
            }
            return this.element.trigger(h, j), !(b.isFunction(g) && g.apply(this.element[0], [h].concat(j)) === !1 || h.isDefaultPrevented())
        }
    }, b.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(h, g) {
        b.Widget.prototype["_" + h] = function(i, l, k) {
            "string" == typeof l && (l = {
                effect: l
            });
            var e, j = l ? l === !0 || "number" == typeof l ? g : l.effect || g : h;
            l = l || {}, "number" == typeof l && (l = {
                duration: l
            }), e = !b.isEmptyObject(l), l.complete = k, l.delay && i.delay(l.delay), e && b.effects && b.effects.effect[j] ? i[h](l) : j !== h && i[j] ? i[j](l.duration, l.easing, k) : i.queue(function(m) {
                b(this)[h](), k && k.call(i[0]), m()
            })
        }
    })
})(jQuery);
(function(a) {
    var b = !1;
    a(document).mouseup(function() {
        b = !1
    }), a.widget("ui.mouse", {
        version: "1.10.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var c = this;
            this.element.bind("mousedown." + this.widgetName, function(d) {
                return c._mouseDown(d)
            }).bind("click." + this.widgetName, function(d) {
                return !0 === a.data(d.target, c.widgetName + ".preventClickEvent") ? (a.removeData(d.target, c.widgetName + ".preventClickEvent"), d.stopImmediatePropagation(), !1) : undefined
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(d) {
            if (!b) {
                this._mouseStarted && this._mouseUp(d), this._mouseDownEvent = d;
                var e = this,
                    f = 1 === d.which,
                    c = "string" == typeof this.options.cancel && d.target.nodeName ? a(d.target).closest(this.options.cancel).length : !1;
                return f && !c && this._mouseCapture(d) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    e.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(d) && this._mouseDelayMet(d) && (this._mouseStarted = this._mouseStart(d) !== !1, !this._mouseStarted) ? (d.preventDefault(), !0) : (!0 === a.data(d.target, this.widgetName + ".preventClickEvent") && a.removeData(d.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(g) {
                    return e._mouseMove(g)
                }, this._mouseUpDelegate = function(g) {
                    return e._mouseUp(g)
                }, a(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), d.preventDefault(), b = !0, !0)) : !0
            }
        },
        _mouseMove: function(c) {
            return a.ui.ie && (!document.documentMode || 9 > document.documentMode) && !c.button ? this._mouseUp(c) : this._mouseStarted ? (this._mouseDrag(c), c.preventDefault()) : (this._mouseDistanceMet(c) && this._mouseDelayMet(c) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, c) !== !1, this._mouseStarted ? this._mouseDrag(c) : this._mouseUp(c)), !this._mouseStarted)
        },
        _mouseUp: function(c) {
            return a(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, c.target === this._mouseDownEvent.target && a.data(c.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(c)), !1
        },
        _mouseDistanceMet: function(c) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - c.pageX), Math.abs(this._mouseDownEvent.pageY - c.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
})(jQuery);
(function(C, x) {
    function q(c, d, a) {
        return [parseFloat(c[0]) * (g.test(c[0]) ? d / 100 : 1), parseFloat(c[1]) * (g.test(c[1]) ? a / 100 : 1)]
    }

    function D(c, a) {
        return parseInt(C.css(c, a), 10) || 0
    }

    function k(c) {
        var a = c[0];
        return 9 === a.nodeType ? {
            width: c.width(),
            height: c.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : C.isWindow(a) ? {
            width: c.width(),
            height: c.height(),
            offset: {
                top: c.scrollTop(),
                left: c.scrollLeft()
            }
        } : a.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: a.pageY,
                left: a.pageX
            }
        } : {
            width: c.outerWidth(),
            height: c.outerHeight(),
            offset: c.offset()
        }
    }
    C.ui = C.ui || {};
    var A, j = Math.max,
        b = Math.abs,
        m = Math.round,
        v = /left|center|right/,
        z = /top|center|bottom/,
        B = /[\+\-]\d+(\.[\d]+)?%?/,
        y = /^\w+/,
        g = /%$/,
        w = C.fn.position;
    C.position = {
            scrollbarWidth: function() {
                if (A !== x) {
                    return A
                }
                var a, c, e = C("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    d = e.children()[0];
                return C("body").append(e), a = d.offsetWidth, e.css("overflow", "scroll"), c = d.offsetWidth, a === c && (c = e[0].clientWidth), e.remove(), A = a - c
            },
            getScrollInfo: function(h) {
                var d = h.isWindow || h.isDocument ? "" : h.element.css("overflow-x"),
                    f = h.isWindow || h.isDocument ? "" : h.element.css("overflow-y"),
                    l = "scroll" === d || "auto" === d && h.width < h.element[0].scrollWidth,
                    c = "scroll" === f || "auto" === f && h.height < h.element[0].scrollHeight;
                return {
                    width: c ? C.position.scrollbarWidth() : 0,
                    height: l ? C.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(d) {
                var a = C(d || window),
                    c = C.isWindow(a[0]),
                    f = !!a[0] && 9 === a[0].nodeType;
                return {
                    element: a,
                    isWindow: c,
                    isDocument: f,
                    offset: a.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: a.scrollLeft(),
                    scrollTop: a.scrollTop(),
                    width: c ? a.width() : a.outerWidth(),
                    height: c ? a.height() : a.outerHeight()
                }
            }
        }, C.fn.position = function(l) {
            if (!l || !l.of) {
                return w.apply(this, arguments)
            }
            l = C.extend({}, l);
            var r, d, i, f, u, t, o = C(l.of),
                n = C.position.getWithinInfo(l.within),
                h = C.position.getScrollInfo(n),
                s = (l.collision || "flip").split(" "),
                c = {};
            return t = k(o), o[0].preventDefault && (l.at = "left top"), d = t.width, i = t.height, f = t.offset, u = C.extend({}, f), C.each(["my", "at"], function() {
                var e, a, p = (l[this] || "").split(" ");
                1 === p.length && (p = v.test(p[0]) ? p.concat(["center"]) : z.test(p[0]) ? ["center"].concat(p) : ["center", "center"]), p[0] = v.test(p[0]) ? p[0] : "center", p[1] = z.test(p[1]) ? p[1] : "center", e = B.exec(p[0]), a = B.exec(p[1]), c[this] = [e ? e[0] : 0, a ? a[0] : 0], l[this] = [y.exec(p[0])[0], y.exec(p[1])[0]]
            }), 1 === s.length && (s[1] = s[0]), "right" === l.at[0] ? u.left += d : "center" === l.at[0] && (u.left += d / 2), "bottom" === l.at[1] ? u.top += i : "center" === l.at[1] && (u.top += i / 2), r = q(c.at, d, i), u.left += r[0], u.top += r[1], this.each(function() {
                var e, E, I = C(this),
                    L = I.outerWidth(),
                    H = I.outerHeight(),
                    F = D(this, "marginLeft"),
                    K = D(this, "marginTop"),
                    J = L + F + D(this, "marginRight") + h.width,
                    a = H + K + D(this, "marginBottom") + h.height,
                    G = C.extend({}, u),
                    p = q(c.my, I.outerWidth(), I.outerHeight());
                "right" === l.my[0] ? G.left -= L : "center" === l.my[0] && (G.left -= L / 2), "bottom" === l.my[1] ? G.top -= H : "center" === l.my[1] && (G.top -= H / 2), G.left += p[0], G.top += p[1], C.support.offsetFractions || (G.left = m(G.left), G.top = m(G.top)), e = {
                    marginLeft: F,
                    marginTop: K
                }, C.each(["left", "top"], function(M, N) {
                    C.ui.position[s[M]] && C.ui.position[s[M]][N](G, {
                        targetWidth: d,
                        targetHeight: i,
                        elemWidth: L,
                        elemHeight: H,
                        collisionPosition: e,
                        collisionWidth: J,
                        collisionHeight: a,
                        offset: [r[0] + p[0], r[1] + p[1]],
                        my: l.my,
                        at: l.at,
                        within: n,
                        elem: I
                    })
                }), l.using && (E = function(P) {
                    var O = f.left - G.left,
                        Q = O + d - L,
                        R = f.top - G.top,
                        N = R + i - H,
                        M = {
                            target: {
                                element: o,
                                left: f.left,
                                top: f.top,
                                width: d,
                                height: i
                            },
                            element: {
                                element: I,
                                left: G.left,
                                top: G.top,
                                width: L,
                                height: H
                            },
                            horizontal: 0 > Q ? "left" : O > 0 ? "right" : "center",
                            vertical: 0 > N ? "top" : R > 0 ? "bottom" : "middle"
                        };
                    L > d && d > b(O + Q) && (M.horizontal = "center"), H > i && i > b(R + N) && (M.vertical = "middle"), M.important = j(b(O), b(Q)) > j(b(R), b(N)) ? "horizontal" : "vertical", l.using.call(this, P, M)
                }), I.offset(C.extend(G, {
                    using: E
                }))
            })
        }, C.ui.position = {
            fit: {
                left: function(F, u) {
                    var o, G = u.within,
                        d = G.isWindow ? G.scrollLeft : G.offset.left,
                        E = G.width,
                        c = F.left - u.collisionPosition.marginLeft,
                        f = d - c,
                        p = c + u.collisionWidth - E - d;
                    u.collisionWidth > E ? f > 0 && 0 >= p ? (o = F.left + f + u.collisionWidth - E - d, F.left += f - o) : F.left = p > 0 && 0 >= f ? d : f > p ? d + E - u.collisionWidth : d : f > 0 ? F.left += f : p > 0 ? F.left -= p : F.left = j(F.left - c, F.left)
                },
                top: function(F, u) {
                    var o, G = u.within,
                        d = G.isWindow ? G.scrollTop : G.offset.top,
                        E = u.within.height,
                        c = F.top - u.collisionPosition.marginTop,
                        f = d - c,
                        p = c + u.collisionHeight - E - d;
                    u.collisionHeight > E ? f > 0 && 0 >= p ? (o = F.top + f + u.collisionHeight - E - d, F.top += f - o) : F.top = p > 0 && 0 >= f ? d : f > p ? d + E - u.collisionHeight : d : f > 0 ? F.top += f : p > 0 ? F.top -= p : F.top = j(F.top - c, F.top)
                }
            },
            flip: {
                left: function(P, K) {
                    var H, Q, F = K.within,
                        N = F.offset.left + F.scrollLeft,
                        E = F.width,
                        G = F.isWindow ? F.scrollLeft : F.offset.left,
                        I = P.left - K.collisionPosition.marginLeft,
                        M = I - G,
                        O = I + K.collisionWidth - E - G,
                        L = "left" === K.my[0] ? -K.elemWidth : "right" === K.my[0] ? K.elemWidth : 0,
                        r = "left" === K.at[0] ? K.targetWidth : "right" === K.at[0] ? -K.targetWidth : 0,
                        J = -2 * K.offset[0];
                    0 > M ? (H = P.left + L + r + J + K.collisionWidth - E - N, (0 > H || b(M) > H) && (P.left += L + r + J)) : O > 0 && (Q = P.left - K.collisionPosition.marginLeft + L + r + J - G, (Q > 0 || O > b(Q)) && (P.left += L + r + J))
                },
                top: function(Q, L) {
                    var H, R, F = L.within,
                        O = F.offset.top + F.scrollTop,
                        E = F.height,
                        G = F.isWindow ? F.scrollTop : F.offset.top,
                        I = Q.top - L.collisionPosition.marginTop,
                        N = I - G,
                        P = I + L.collisionHeight - E - G,
                        M = "top" === L.my[1],
                        r = M ? -L.elemHeight : "bottom" === L.my[1] ? L.elemHeight : 0,
                        K = "top" === L.at[1] ? L.targetHeight : "bottom" === L.at[1] ? -L.targetHeight : 0,
                        J = -2 * L.offset[1];
                    0 > N ? (R = Q.top + r + K + J + L.collisionHeight - E - O, Q.top + r + K + J > N && (0 > R || b(N) > R) && (Q.top += r + K + J)) : P > 0 && (H = Q.top - L.collisionPosition.marginTop + r + K + J - G, Q.top + r + K + J > P && (H > 0 || P > b(H)) && (Q.top += r + K + J))
                }
            },
            flipfit: {
                left: function() {
                    C.ui.position.flip.left.apply(this, arguments), C.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    C.ui.position.flip.top.apply(this, arguments), C.ui.position.fit.top.apply(this, arguments)
                }
            }
        },
        function() {
            var l, d, f, t, c, p = document.getElementsByTagName("body")[0],
                h = document.createElement("div");
            l = document.createElement(p ? "div" : "body"), f = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            }, p && C.extend(f, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (c in f) {
                l.style[c] = f[c]
            }
            l.appendChild(h), d = p || document.documentElement, d.insertBefore(l, d.firstChild), h.style.cssText = "position: absolute; left: 10.7432222px;", t = C(h).offset().left, C.support.offsetFractions = t > 10 && 11 > t, l.innerHTML = "", d.removeChild(l)
        }()
})(jQuery);
(function(a) {
    a.widget("ui.draggable", a.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        },
        _mouseCapture: function(c) {
            var b = this.options;
            return this.helper || b.disabled || a(c.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(c), this.handle ? (a(b.iframeFix === !0 ? "iframe" : b.iframeFix).each(function() {
                a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1000
                }).css(a(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function(c) {
            var b = this.options;
            return this.helper = this._createHelper(c), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), a.ui.ddmanager && (a.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.offset.scroll = !1, a.extend(this.offset, {
                click: {
                    left: c.pageX - this.offset.left,
                    top: c.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(c), this.originalPageX = c.pageX, this.originalPageY = c.pageY, b.cursorAt && this._adjustOffsetFromHelper(b.cursorAt), this._setContainment(), this._trigger("start", c) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), a.ui.ddmanager && !b.dropBehaviour && a.ui.ddmanager.prepareOffsets(this, c), this._mouseDrag(c, !0), a.ui.ddmanager && a.ui.ddmanager.dragStart(this, c), !0)
        },
        _mouseDrag: function(d, b) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(d), this.positionAbs = this._convertPositionTo("absolute"), !b) {
                var c = this._uiHash();
                if (this._trigger("drag", d, c) === !1) {
                    return this._mouseUp({}), !1
                }
                this.position = c.position
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), a.ui.ddmanager && a.ui.ddmanager.drag(this, d), !1
        },
        _mouseStop: function(d) {
            var b = this,
                c = !1;
            return a.ui.ddmanager && !this.options.dropBehaviour && (c = a.ui.ddmanager.drop(this, d)), this.dropped && (c = this.dropped, this.dropped = !1), "original" !== this.options.helper || a.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !c || "valid" === this.options.revert && c || this.options.revert === !0 || a.isFunction(this.options.revert) && this.options.revert.call(this.element, c) ? a(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                b._trigger("stop", d) !== !1 && b._clear()
            }) : this._trigger("stop", d) !== !1 && this._clear(), !1) : !1
        },
        _mouseUp: function(b) {
            return a("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }), a.ui.ddmanager && a.ui.ddmanager.dragStop(this, b), a.ui.mouse.prototype._mouseUp.call(this, b)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(b) {
            return this.options.handle ? !!a(b.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _createHelper: function(d) {
            var b = this.options,
                c = a.isFunction(b.helper) ? a(b.helper.apply(this.element[0], [d])) : "clone" === b.helper ? this.element.clone().removeAttr("id") : this.element;
            return c.parents("body").length || c.appendTo("parent" === b.appendTo ? this.element[0].parentNode : b.appendTo), c[0] === this.element[0] || /(fixed|absolute)/.test(c.css("position")) || c.css("position", "absolute"), c
        },
        _adjustOffsetFromHelper: function(b) {
            "string" == typeof b && (b = b.split(" ")), a.isArray(b) && (b = {
                left: +b[0],
                top: +b[1] || 0
            }), "left" in b && (this.offset.click.left = b.left + this.margins.left), "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left), "top" in b && (this.offset.click.top = b.top + this.margins.top), "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            var b = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && a.ui.ie) && (b = {
                top: 0,
                left: 0
            }), {
                top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var b = this.element.position();
                return {
                    top: b.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: b.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var d, b, c, f = this.options;
            return f.containment ? "window" === f.containment ? (this.containment = [a(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, a(window).scrollLeft() + a(window).width() - this.helperProportions.width - this.margins.left, a(window).scrollTop() + (a(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : "document" === f.containment ? (this.containment = [0, 0, a(document).width() - this.helperProportions.width - this.margins.left, (a(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : f.containment.constructor === Array ? (this.containment = f.containment, undefined) : ("parent" === f.containment && (f.containment = this.helper[0].parentNode), b = a(f.containment), c = b[0], c && (d = "hidden" !== b.css("overflow"), this.containment = [(parseInt(b.css("borderLeftWidth"), 10) || 0) + (parseInt(b.css("paddingLeft"), 10) || 0), (parseInt(b.css("borderTopWidth"), 10) || 0) + (parseInt(b.css("paddingTop"), 10) || 0), (d ? Math.max(c.scrollWidth, c.offsetWidth) : c.offsetWidth) - (parseInt(b.css("borderRightWidth"), 10) || 0) - (parseInt(b.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (d ? Math.max(c.scrollHeight, c.offsetHeight) : c.offsetHeight) - (parseInt(b.css("borderBottomWidth"), 10) || 0) - (parseInt(b.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = b), undefined) : (this.containment = null, undefined)
        },
        _convertPositionTo: function(d, b) {
            b || (b = this.position);
            var c = "absolute" === d ? 1 : -1,
                f = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
            return this.offset.scroll || (this.offset.scroll = {
                top: f.scrollTop(),
                left: f.scrollLeft()
            }), {
                top: b.top + this.offset.relative.top * c + this.offset.parent.top * c - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * c,
                left: b.left + this.offset.relative.left * c + this.offset.parent.left * c - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * c
            }
        },
        _generatePosition: function(k) {
            var g, p, d, m, c = this.options,
                b = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && a.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                f = k.pageX,
                j = k.pageY;
            return this.offset.scroll || (this.offset.scroll = {
                top: b.scrollTop(),
                left: b.scrollLeft()
            }), this.originalPosition && (this.containment && (this.relative_container ? (p = this.relative_container.offset(), g = [this.containment[0] + p.left, this.containment[1] + p.top, this.containment[2] + p.left, this.containment[3] + p.top]) : g = this.containment, k.pageX - this.offset.click.left < g[0] && (f = g[0] + this.offset.click.left), k.pageY - this.offset.click.top < g[1] && (j = g[1] + this.offset.click.top), k.pageX - this.offset.click.left > g[2] && (f = g[2] + this.offset.click.left), k.pageY - this.offset.click.top > g[3] && (j = g[3] + this.offset.click.top)), c.grid && (d = c.grid[1] ? this.originalPageY + Math.round((j - this.originalPageY) / c.grid[1]) * c.grid[1] : this.originalPageY, j = g ? d - this.offset.click.top >= g[1] || d - this.offset.click.top > g[3] ? d : d - this.offset.click.top >= g[1] ? d - c.grid[1] : d + c.grid[1] : d, m = c.grid[0] ? this.originalPageX + Math.round((f - this.originalPageX) / c.grid[0]) * c.grid[0] : this.originalPageX, f = g ? m - this.offset.click.left >= g[0] || m - this.offset.click.left > g[2] ? m : m - this.offset.click.left >= g[0] ? m - c.grid[0] : m + c.grid[0] : m)), {
                top: j - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function(d, b, c) {
            return c = c || this._uiHash(), a.ui.plugin.call(this, d, [b, c]), "drag" === d && (this.positionAbs = this._convertPositionTo("absolute")), a.Widget.prototype._trigger.call(this, d, b, c)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), a.ui.plugin.add("draggable", "connectToSortable", {
        start: function(f, c) {
            var d = a(this).data("ui-draggable"),
                g = d.options,
                b = a.extend({}, c, {
                    item: d.element
                });
            d.sortables = [], a(g.connectToSortable).each(function() {
                var e = a.data(this, "ui-sortable");
                e && !e.options.disabled && (d.sortables.push({
                    instance: e,
                    shouldRevert: e.options.revert
                }), e.refreshPositions(), e._trigger("activate", f, b))
            })
        },
        stop: function(d, b) {
            var c = a(this).data("ui-draggable"),
                f = a.extend({}, b, {
                    item: c.element
                });
            a.each(c.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, c.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(d), this.instance.options.helper = this.instance.options._helper, "original" === c.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", d, f))
            })
        },
        drag: function(d, b) {
            var c = a(this).data("ui-draggable"),
                f = this;
            a.each(c.sortables, function() {
                var e = !1,
                    g = this;
                this.instance.positionAbs = c.positionAbs, this.instance.helperProportions = c.helperProportions, this.instance.offset.click = c.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (e = !0, a.each(c.sortables, function() {
                    return this.instance.positionAbs = c.positionAbs, this.instance.helperProportions = c.helperProportions, this.instance.offset.click = c.offset.click, this !== g && this.instance._intersectsWith(this.instance.containerCache) && a.contains(g.instance.element[0], this.instance.element[0]) && (e = !1), e
                })), e ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = a(f).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return b.helper[0]
                }, d.target = this.instance.currentItem[0], this.instance._mouseCapture(d, !0), this.instance._mouseStart(d, !0, !0), this.instance.offset.click.top = c.offset.click.top, this.instance.offset.click.left = c.offset.click.left, this.instance.offset.parent.left -= c.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= c.offset.parent.top - this.instance.offset.parent.top, c._trigger("toSortable", d), c.dropped = this.instance.element, c.currentItem = c.element, this.instance.fromOutside = c), this.instance.currentItem && this.instance._mouseDrag(d)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", d, this.instance._uiHash(this.instance)), this.instance._mouseStop(d, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), c._trigger("fromSortable", d), c.dropped = !1)
            })
        }
    }), a.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var c = a("body"),
                b = a(this).data("ui-draggable").options;
            c.css("cursor") && (b._cursor = c.css("cursor")), c.css("cursor", b.cursor)
        },
        stop: function() {
            var b = a(this).data("ui-draggable").options;
            b._cursor && a("body").css("cursor", b._cursor)
        }
    }), a.ui.plugin.add("draggable", "opacity", {
        start: function(d, b) {
            var c = a(b.helper),
                f = a(this).data("ui-draggable").options;
            c.css("opacity") && (f._opacity = c.css("opacity")), c.css("opacity", f.opacity)
        },
        stop: function(d, b) {
            var c = a(this).data("ui-draggable").options;
            c._opacity && a(b.helper).css("opacity", c._opacity)
        }
    }), a.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var b = a(this).data("ui-draggable");
            b.scrollParent[0] !== document && "HTML" !== b.scrollParent[0].tagName && (b.overflowOffset = b.scrollParent.offset())
        },
        drag: function(d) {
            var b = a(this).data("ui-draggable"),
                c = b.options,
                f = !1;
            b.scrollParent[0] !== document && "HTML" !== b.scrollParent[0].tagName ? (c.axis && "x" === c.axis || (b.overflowOffset.top + b.scrollParent[0].offsetHeight - d.pageY < c.scrollSensitivity ? b.scrollParent[0].scrollTop = f = b.scrollParent[0].scrollTop + c.scrollSpeed : d.pageY - b.overflowOffset.top < c.scrollSensitivity && (b.scrollParent[0].scrollTop = f = b.scrollParent[0].scrollTop - c.scrollSpeed)), c.axis && "y" === c.axis || (b.overflowOffset.left + b.scrollParent[0].offsetWidth - d.pageX < c.scrollSensitivity ? b.scrollParent[0].scrollLeft = f = b.scrollParent[0].scrollLeft + c.scrollSpeed : d.pageX - b.overflowOffset.left < c.scrollSensitivity && (b.scrollParent[0].scrollLeft = f = b.scrollParent[0].scrollLeft - c.scrollSpeed))) : (c.axis && "x" === c.axis || (d.pageY - a(document).scrollTop() < c.scrollSensitivity ? f = a(document).scrollTop(a(document).scrollTop() - c.scrollSpeed) : a(window).height() - (d.pageY - a(document).scrollTop()) < c.scrollSensitivity && (f = a(document).scrollTop(a(document).scrollTop() + c.scrollSpeed))), c.axis && "y" === c.axis || (d.pageX - a(document).scrollLeft() < c.scrollSensitivity ? f = a(document).scrollLeft(a(document).scrollLeft() - c.scrollSpeed) : a(window).width() - (d.pageX - a(document).scrollLeft()) < c.scrollSensitivity && (f = a(document).scrollLeft(a(document).scrollLeft() + c.scrollSpeed)))), f !== !1 && a.ui.ddmanager && !c.dropBehaviour && a.ui.ddmanager.prepareOffsets(b, d)
        }
    }), a.ui.plugin.add("draggable", "snap", {
        start: function() {
            var c = a(this).data("ui-draggable"),
                b = c.options;
            c.snapElements = [], a(b.snap.constructor !== String ? b.snap.items || ":data(ui-draggable)" : b.snap).each(function() {
                var d = a(this),
                    e = d.offset();
                this !== c.element[0] && c.snapElements.push({
                    item: this,
                    width: d.outerWidth(),
                    height: d.outerHeight(),
                    top: e.top,
                    left: e.left
                })
            })
        },
        drag: function(F, B) {
            var q, y, J, x, t, A, C, H, k, G, w = a(this).data("ui-draggable"),
                D = w.options,
                E = D.snapTolerance,
                z = B.offset.left,
                K = z + w.helperProportions.width,
                j = B.offset.top,
                I = j + w.helperProportions.height;
            for (k = w.snapElements.length - 1; k >= 0; k--) {
                t = w.snapElements[k].left, A = t + w.snapElements[k].width, C = w.snapElements[k].top, H = C + w.snapElements[k].height, t - E > K || z > A + E || C - E > I || j > H + E || !a.contains(w.snapElements[k].item.ownerDocument, w.snapElements[k].item) ? (w.snapElements[k].snapping && w.options.snap.release && w.options.snap.release.call(w.element, F, a.extend(w._uiHash(), {
                    snapItem: w.snapElements[k].item
                })), w.snapElements[k].snapping = !1) : ("inner" !== D.snapMode && (q = E >= Math.abs(C - I), y = E >= Math.abs(H - j), J = E >= Math.abs(t - K), x = E >= Math.abs(A - z), q && (B.position.top = w._convertPositionTo("relative", {
                    top: C - w.helperProportions.height,
                    left: 0
                }).top - w.margins.top), y && (B.position.top = w._convertPositionTo("relative", {
                    top: H,
                    left: 0
                }).top - w.margins.top), J && (B.position.left = w._convertPositionTo("relative", {
                    top: 0,
                    left: t - w.helperProportions.width
                }).left - w.margins.left), x && (B.position.left = w._convertPositionTo("relative", {
                    top: 0,
                    left: A
                }).left - w.margins.left)), G = q || y || J || x, "outer" !== D.snapMode && (q = E >= Math.abs(C - j), y = E >= Math.abs(H - I), J = E >= Math.abs(t - z), x = E >= Math.abs(A - K), q && (B.position.top = w._convertPositionTo("relative", {
                    top: C,
                    left: 0
                }).top - w.margins.top), y && (B.position.top = w._convertPositionTo("relative", {
                    top: H - w.helperProportions.height,
                    left: 0
                }).top - w.margins.top), J && (B.position.left = w._convertPositionTo("relative", {
                    top: 0,
                    left: t
                }).left - w.margins.left), x && (B.position.left = w._convertPositionTo("relative", {
                    top: 0,
                    left: A - w.helperProportions.width
                }).left - w.margins.left)), !w.snapElements[k].snapping && (q || y || J || x || G) && w.options.snap.snap && w.options.snap.snap.call(w.element, F, a.extend(w._uiHash(), {
                    snapItem: w.snapElements[k].item
                })), w.snapElements[k].snapping = q || y || J || x || G)
            }
        }
    }), a.ui.plugin.add("draggable", "stack", {
        start: function() {
            var d, b = this.data("ui-draggable").options,
                c = a.makeArray(a(b.stack)).sort(function(g, f) {
                    return (parseInt(a(g).css("zIndex"), 10) || 0) - (parseInt(a(f).css("zIndex"), 10) || 0)
                });
            c.length && (d = parseInt(a(c[0]).css("zIndex"), 10) || 0, a(c).each(function(e) {
                a(this).css("zIndex", d + e)
            }), this.css("zIndex", d + c.length))
        }
    }), a.ui.plugin.add("draggable", "zIndex", {
        start: function(d, b) {
            var c = a(b.helper),
                f = a(this).data("ui-draggable").options;
            c.css("zIndex") && (f._zIndex = c.css("zIndex")), c.css("zIndex", f.zIndex)
        },
        stop: function(d, b) {
            var c = a(this).data("ui-draggable").options;
            c._zIndex && a(b.helper).css("zIndex", c._zIndex)
        }
    })
})(jQuery);
(function(a) {
    function b(d, f, c) {
        return d > f && f + c > d
    }
    a.widget("ui.droppable", {
        version: "1.10.4",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var f, c = this.options,
                d = c.accept;
            this.isover = !1, this.isout = !0, this.accept = a.isFunction(d) ? d : function(e) {
                return e.is(d)
            }, this.proportions = function() {
                return arguments.length ? (f = arguments[0], undefined) : f ? f : f = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }
            }, a.ui.ddmanager.droppables[c.scope] = a.ui.ddmanager.droppables[c.scope] || [], a.ui.ddmanager.droppables[c.scope].push(this), c.addClasses && this.element.addClass("ui-droppable")
        },
        _destroy: function() {
            for (var d = 0, c = a.ui.ddmanager.droppables[this.options.scope]; c.length > d; d++) {
                c[d] === this && c.splice(d, 1)
            }
            this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function(d, c) {
            "accept" === d && (this.accept = a.isFunction(c) ? c : function(e) {
                return e.is(c)
            }), a.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function(d) {
            var c = a.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), c && this._trigger("activate", d, this.ui(c))
        },
        _deactivate: function(d) {
            var c = a.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), c && this._trigger("deactivate", d, this.ui(c))
        },
        _over: function(d) {
            var c = a.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", d, this.ui(c)))
        },
        _out: function(d) {
            var c = a.ui.ddmanager.current;
            c && (c.currentItem || c.element)[0] !== this.element[0] && this.accept.call(this.element[0], c.currentItem || c.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", d, this.ui(c)))
        },
        _drop: function(f, c) {
            var d = c || a.ui.ddmanager.current,
                g = !1;
            return d && (d.currentItem || d.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var h = a.data(this, "ui-droppable");
                return h.options.greedy && !h.options.disabled && h.options.scope === d.options.scope && h.accept.call(h.element[0], d.currentItem || d.element) && a.ui.intersect(d, a.extend(h, {
                    offset: h.element.offset()
                }), h.options.tolerance) ? (g = !0, !1) : undefined
            }), g ? !1 : this.accept.call(this.element[0], d.currentItem || d.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", f, this.ui(d)), this.element) : !1) : !1
        },
        ui: function(c) {
            return {
                draggable: c.currentItem || c.element,
                helper: c.helper,
                position: c.position,
                offset: c.positionAbs
            }
        }
    }), a.ui.intersect = function(z, m, A) {
        if (!m.offset) {
            return !1
        }
        var j, x, g = (z.positionAbs || z.position.absolute).left,
            e = (z.positionAbs || z.position.absolute).top,
            k = g + z.helperProportions.width,
            q = e + z.helperProportions.height,
            w = m.offset.left,
            y = m.offset.top,
            v = w + m.proportions().width,
            f = y + m.proportions().height;
        switch (A) {
            case "fit":
                return g >= w && v >= k && e >= y && f >= q;
            case "intersect":
                return g + z.helperProportions.width / 2 > w && v > k - z.helperProportions.width / 2 && e + z.helperProportions.height / 2 > y && f > q - z.helperProportions.height / 2;
            case "pointer":
                return j = (z.positionAbs || z.position.absolute).left + (z.clickOffset || z.offset.click).left, x = (z.positionAbs || z.position.absolute).top + (z.clickOffset || z.offset.click).top, b(x, y, m.proportions().height) && b(j, w, m.proportions().width);
            case "touch":
                return (e >= y && f >= e || q >= y && f >= q || y > e && q > f) && (g >= w && v >= g || k >= w && v >= k || w > g && k > v);
            default:
                return !1
        }
    }, a.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(h, d) {
            var f, k, c = a.ui.ddmanager.droppables[h.options.scope] || [],
                j = d ? d.type : null,
                g = (h.currentItem || h.element).find(":data(ui-droppable)").addBack();
            a: for (f = 0; c.length > f; f++) {
                if (!(c[f].options.disabled || h && !c[f].accept.call(c[f].element[0], h.currentItem || h.element))) {
                    for (k = 0; g.length > k; k++) {
                        if (g[k] === c[f].element[0]) {
                            c[f].proportions().height = 0;
                            continue a
                        }
                    }
                    c[f].visible = "none" !== c[f].element.css("display"), c[f].visible && ("mousedown" === j && c[f]._activate.call(c[f], d), c[f].offset = c[f].element.offset(), c[f].proportions({
                        width: c[f].element[0].offsetWidth,
                        height: c[f].element[0].offsetHeight
                    }))
                }
            }
        },
        drop: function(f, c) {
            var d = !1;
            return a.each((a.ui.ddmanager.droppables[f.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && a.ui.intersect(f, this, this.options.tolerance) && (d = this._drop.call(this, c) || d), !this.options.disabled && this.visible && this.accept.call(this.element[0], f.currentItem || f.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, c)))
            }), d
        },
        dragStart: function(d, c) {
            d.element.parentsUntil("body").bind("scroll.droppable", function() {
                d.options.refreshPositions || a.ui.ddmanager.prepareOffsets(d, c)
            })
        },
        drag: function(d, c) {
            d.options.refreshPositions && a.ui.ddmanager.prepareOffsets(d, c), a.each(a.ui.ddmanager.droppables[d.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var f, i, e, h = a.ui.intersect(d, this, this.options.tolerance),
                        g = !h && this.isover ? "isout" : h && !this.isover ? "isover" : null;
                    g && (this.options.greedy && (i = this.options.scope, e = this.element.parents(":data(ui-droppable)").filter(function() {
                        return a.data(this, "ui-droppable").options.scope === i
                    }), e.length && (f = a.data(e[0], "ui-droppable"), f.greedyChild = "isover" === g)), f && "isover" === g && (f.isover = !1, f.isout = !0, f._out.call(f, c)), this[g] = !0, this["isout" === g ? "isover" : "isout"] = !1, this["isover" === g ? "_over" : "_out"].call(this, c), f && "isout" === g && (f.isout = !1, f.isover = !0, f._over.call(f, c)))
                }
            })
        },
        dragStop: function(d, c) {
            d.element.parentsUntil("body").unbind("scroll.droppable"), d.options.refreshPositions || a.ui.ddmanager.prepareOffsets(d, c)
        }
    }
})(jQuery);
(function(b) {
    function c(d) {
        return parseInt(d, 10) || 0
    }

    function a(d) {
        return !isNaN(parseInt(d, 10))
    }
    b.widget("ui.resizable", b.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function() {
            var j, f, g, l, d, k = this,
                h = this.options;
            if (this.element.addClass("ui-resizable"), b.extend(this, {
                    _aspectRatio: !!h.aspectRatio,
                    aspectRatio: h.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: h.helper || h.ghost || h.animate ? h.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(b("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({
                    margin: this.originalElement.css("margin")
                }), this._proportionallyResize()), this.handles = h.handles || (b(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this.handles.constructor === String) {
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), j = this.handles.split(","), this.handles = {}, f = 0; j.length > f; f++) {
                    g = b.trim(j[f]), d = "ui-resizable-" + g, l = b("<div class='ui-resizable-handle " + d + "'></div>"), l.css({
                        zIndex: h.zIndex
                    }), "se" === g && l.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[g] = ".ui-resizable-" + g, this.element.append(l)
                }
            }
            this._renderAxis = function(q) {
                var o, p, r, m;
                q = q || this.element;
                for (o in this.handles) {
                    this.handles[o].constructor === String && (this.handles[o] = b(this.handles[o], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (p = b(this.handles[o], this.element), m = /sw|ne|nw|se|n|s/.test(o) ? p.outerHeight() : p.outerWidth(), r = ["padding", /ne|nw|n/.test(o) ? "Top" : /se|sw|s/.test(o) ? "Bottom" : /^e$/.test(o) ? "Right" : "Left"].join(""), q.css(r, m), this._proportionallyResize()), b(this.handles[o]).length
                }
            }, this._renderAxis(this.element), this._handles = b(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                k.resizing || (this.className && (l = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), k.axis = l && l[1] ? l[1] : "se")
            }), h.autoHide && (this._handles.hide(), b(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                h.disabled || (b(this).removeClass("ui-resizable-autohide"), k._handles.show())
            }).mouseleave(function() {
                h.disabled || k.resizing || (b(this).addClass("ui-resizable-autohide"), k._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var f, d = function(g) {
                b(g).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (d(this.element), f = this.element, this.originalElement.css({
                position: f.css("position"),
                width: f.outerWidth(),
                height: f.outerHeight(),
                top: f.css("top"),
                left: f.css("left")
            }).insertAfter(f), f.remove()), this.originalElement.css("resize", this.originalResizeStyle), d(this.originalElement), this
        },
        _mouseCapture: function(g) {
            var d, f, h = !1;
            for (d in this.handles) {
                f = b(this.handles[d])[0], (f === g.target || b.contains(f, g.target)) && (h = !0)
            }
            return !this.options.disabled && h
        },
        _mouseStart: function(e) {
            var g, l, d, k = this.options,
                j = this.element.position(),
                f = this.element;
            return this.resizing = !0, /absolute/.test(f.css("position")) ? f.css({
                position: "absolute",
                top: f.css("top"),
                left: f.css("left")
            }) : f.is(".ui-draggable") && f.css({
                position: "absolute",
                top: j.top,
                left: j.left
            }), this._renderProxy(), g = c(this.helper.css("left")), l = c(this.helper.css("top")), k.containment && (g += b(k.containment).scrollLeft() || 0, l += b(k.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: g,
                top: l
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: f.width(),
                height: f.height()
            }, this.originalSize = this._helper ? {
                width: f.outerWidth(),
                height: f.outerHeight()
            } : {
                width: f.width(),
                height: f.height()
            }, this.originalPosition = {
                left: g,
                top: l
            }, this.sizeDiff = {
                width: f.outerWidth() - f.width(),
                height: f.outerHeight() - f.height()
            }, this.originalMousePosition = {
                left: e.pageX,
                top: e.pageY
            }, this.aspectRatio = "number" == typeof k.aspectRatio ? k.aspectRatio : this.originalSize.width / this.originalSize.height || 1, d = b(".ui-resizable-" + this.axis).css("cursor"), b("body").css("cursor", "auto" === d ? this.axis + "-resize" : d), f.addClass("ui-resizable-resizing"), this._propagate("start", e), !0
        },
        _mouseDrag: function(v) {
            var q, A = this.helper,
                k = {},
                y = this.originalMousePosition,
                j = this.axis,
                f = this.position.top,
                t = this.position.left,
                m = this.size.width,
                x = this.size.height,
                z = v.pageX - y.left || 0,
                w = v.pageY - y.top || 0,
                g = this._change[j];
            return g ? (q = g.apply(this, [v, z, w]), this._updateVirtualBoundaries(v.shiftKey), (this._aspectRatio || v.shiftKey) && (q = this._updateRatio(q, v)), q = this._respectSize(q, v), this._updateCache(q), this._propagate("resize", v), this.position.top !== f && (k.top = this.position.top + "px"), this.position.left !== t && (k.left = this.position.left + "px"), this.size.width !== m && (k.width = this.size.width + "px"), this.size.height !== x && (k.height = this.size.height + "px"), A.css(k), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), b.isEmptyObject(k) || this._trigger("resize", v, this.ui()), !1) : !1
        },
        _mouseStop: function(p) {
            this.resizing = !1;
            var k, u, g, t, f, d, m, j = this.options,
                q = this;
            return this._helper && (k = this._proportionallyResizeElements, u = k.length && /textarea/i.test(k[0].nodeName), g = u && b.ui.hasScroll(k[0], "left") ? 0 : q.sizeDiff.height, t = u ? 0 : q.sizeDiff.width, f = {
                width: q.helper.width() - t,
                height: q.helper.height() - g
            }, d = parseInt(q.element.css("left"), 10) + (q.position.left - q.originalPosition.left) || null, m = parseInt(q.element.css("top"), 10) + (q.position.top - q.originalPosition.top) || null, j.animate || this.element.css(b.extend(f, {
                top: m,
                left: d
            })), q.helper.height(q.size.height), q.helper.width(q.size.width), this._helper && !j.animate && this._proportionallyResize()), b("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", p), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function(f) {
            var i, g, k, d, j, h = this.options;
            j = {
                minWidth: a(h.minWidth) ? h.minWidth : 0,
                maxWidth: a(h.maxWidth) ? h.maxWidth : 1 / 0,
                minHeight: a(h.minHeight) ? h.minHeight : 0,
                maxHeight: a(h.maxHeight) ? h.maxHeight : 1 / 0
            }, (this._aspectRatio || f) && (i = j.minHeight * this.aspectRatio, k = j.minWidth / this.aspectRatio, g = j.maxHeight * this.aspectRatio, d = j.maxWidth / this.aspectRatio, i > j.minWidth && (j.minWidth = i), k > j.minHeight && (j.minHeight = k), j.maxWidth > g && (j.maxWidth = g), j.maxHeight > d && (j.maxHeight = d)), this._vBoundaries = j
        },
        _updateCache: function(d) {
            this.offset = this.helper.offset(), a(d.left) && (this.position.left = d.left), a(d.top) && (this.position.top = d.top), a(d.height) && (this.size.height = d.height), a(d.width) && (this.size.width = d.width)
        },
        _updateRatio: function(d) {
            var g = this.position,
                f = this.size,
                h = this.axis;
            return a(d.height) ? d.width = d.height * this.aspectRatio : a(d.width) && (d.height = d.width / this.aspectRatio), "sw" === h && (d.left = g.left + (f.width - d.width), d.top = null), "nw" === h && (d.top = g.top + (f.height - d.height), d.left = g.left + (f.width - d.width)), d
        },
        _respectSize: function(v) {
            var k = this._vBoundaries,
                w = this.axis,
                g = a(v.width) && k.maxWidth && k.maxWidth < v.width,
                p = a(v.height) && k.maxHeight && k.maxHeight < v.height,
                f = a(v.width) && k.minWidth && k.minWidth > v.width,
                d = a(v.height) && k.minHeight && k.minHeight > v.height,
                j = this.originalPosition.left + this.originalSize.width,
                i = this.position.top + this.size.height,
                m = /sw|nw|w/.test(w),
                q = /nw|ne|n/.test(w);
            return f && (v.width = k.minWidth), d && (v.height = k.minHeight), g && (v.width = k.maxWidth), p && (v.height = k.maxHeight), f && m && (v.left = j - k.minWidth), g && m && (v.left = j - k.maxWidth), d && q && (v.top = i - k.minHeight), p && q && (v.top = i - k.maxHeight), v.width || v.height || v.left || !v.top ? v.width || v.height || v.top || !v.left || (v.left = null) : v.top = null, v
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) {
                var g, j, f, h, k, d = this.helper || this.element;
                for (g = 0; this._proportionallyResizeElements.length > g; g++) {
                    if (k = this._proportionallyResizeElements[g], !this.borderDif) {
                        for (this.borderDif = [], f = [k.css("borderTopWidth"), k.css("borderRightWidth"), k.css("borderBottomWidth"), k.css("borderLeftWidth")], h = [k.css("paddingTop"), k.css("paddingRight"), k.css("paddingBottom"), k.css("paddingLeft")], j = 0; f.length > j; j++) {
                            this.borderDif[j] = (parseInt(f[j], 10) || 0) + (parseInt(h[j], 10) || 0)
                        }
                    }
                    k.css({
                        height: d.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: d.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
            }
        },
        _renderProxy: function() {
            var f = this.element,
                d = this.options;
            this.elementOffset = f.offset(), this._helper ? (this.helper = this.helper || b("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++d.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(d, f) {
                return {
                    width: this.originalSize.width + f
                }
            },
            w: function(f, h) {
                var d = this.originalSize,
                    g = this.originalPosition;
                return {
                    left: g.left + h,
                    width: d.width - h
                }
            },
            n: function(f, h, d) {
                var g = this.originalSize,
                    j = this.originalPosition;
                return {
                    top: j.top + d,
                    height: g.height - d
                }
            },
            s: function(f, g, d) {
                return {
                    height: this.originalSize.height + d
                }
            },
            se: function(g, d, f) {
                return b.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [g, d, f]))
            },
            sw: function(g, d, f) {
                return b.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [g, d, f]))
            },
            ne: function(g, d, f) {
                return b.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [g, d, f]))
            },
            nw: function(g, d, f) {
                return b.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [g, d, f]))
            }
        },
        _propagate: function(f, d) {
            b.ui.plugin.call(this, f, [d, this.ui()]), "resize" !== f && this._trigger(f, d, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), b.ui.plugin.add("resizable", "animate", {
        stop: function(p) {
            var k = b(this).data("ui-resizable"),
                u = k.options,
                g = k._proportionallyResizeElements,
                t = g.length && /textarea/i.test(g[0].nodeName),
                f = t && b.ui.hasScroll(g[0], "left") ? 0 : k.sizeDiff.height,
                d = t ? 0 : k.sizeDiff.width,
                m = {
                    width: k.size.width - d,
                    height: k.size.height - f
                },
                j = parseInt(k.element.css("left"), 10) + (k.position.left - k.originalPosition.left) || null,
                q = parseInt(k.element.css("top"), 10) + (k.position.top - k.originalPosition.top) || null;
            k.element.animate(b.extend(m, q && j ? {
                top: q,
                left: j
            } : {}), {
                duration: u.animateDuration,
                easing: u.animateEasing,
                step: function() {
                    var e = {
                        width: parseInt(k.element.css("width"), 10),
                        height: parseInt(k.element.css("height"), 10),
                        top: parseInt(k.element.css("top"), 10),
                        left: parseInt(k.element.css("left"), 10)
                    };
                    g && g.length && b(g[0]).css({
                        width: e.width,
                        height: e.height
                    }), k._updateCache(e), k._propagate("resize", p)
                }
            })
        }
    }), b.ui.plugin.add("resizable", "containment", {
        start: function() {
            var m, y, j, w, g, e, q, k = b(this).data("ui-resizable"),
                v = k.options,
                x = k.element,
                t = v.containment,
                f = t instanceof b ? t.get(0) : /parent/.test(t) ? x.parent().get(0) : t;
            f && (k.containerElement = b(f), /document/.test(t) || t === document ? (k.containerOffset = {
                left: 0,
                top: 0
            }, k.containerPosition = {
                left: 0,
                top: 0
            }, k.parentData = {
                element: b(document),
                left: 0,
                top: 0,
                width: b(document).width(),
                height: b(document).height() || document.body.parentNode.scrollHeight
            }) : (m = b(f), y = [], b(["Top", "Right", "Left", "Bottom"]).each(function(d, h) {
                y[d] = c(m.css("padding" + h))
            }), k.containerOffset = m.offset(), k.containerPosition = m.position(), k.containerSize = {
                height: m.innerHeight() - y[3],
                width: m.innerWidth() - y[1]
            }, j = k.containerOffset, w = k.containerSize.height, g = k.containerSize.width, e = b.ui.hasScroll(f, "left") ? f.scrollWidth : g, q = b.ui.hasScroll(f) ? f.scrollHeight : w, k.parentData = {
                element: f,
                left: j.left,
                top: j.top,
                width: e,
                height: q
            }))
        },
        resize: function(q) {
            var m, y, j, w, g = b(this).data("ui-resizable"),
                f = g.options,
                p = g.containerOffset,
                k = g.position,
                v = g._aspectRatio || q.shiftKey,
                x = {
                    top: 0,
                    left: 0
                },
                t = g.containerElement;
            t[0] !== document && /static/.test(t.css("position")) && (x = p), k.left < (g._helper ? p.left : 0) && (g.size.width = g.size.width + (g._helper ? g.position.left - p.left : g.position.left - x.left), v && (g.size.height = g.size.width / g.aspectRatio), g.position.left = f.helper ? p.left : 0), k.top < (g._helper ? p.top : 0) && (g.size.height = g.size.height + (g._helper ? g.position.top - p.top : g.position.top), v && (g.size.width = g.size.height * g.aspectRatio), g.position.top = g._helper ? p.top : 0), g.offset.left = g.parentData.left + g.position.left, g.offset.top = g.parentData.top + g.position.top, m = Math.abs((g._helper ? g.offset.left - x.left : g.offset.left - x.left) + g.sizeDiff.width), y = Math.abs((g._helper ? g.offset.top - x.top : g.offset.top - p.top) + g.sizeDiff.height), j = g.containerElement.get(0) === g.element.parent().get(0), w = /relative|absolute/.test(g.containerElement.css("position")), j && w && (m -= Math.abs(g.parentData.left)), m + g.size.width >= g.parentData.width && (g.size.width = g.parentData.width - m, v && (g.size.height = g.size.width / g.aspectRatio)), y + g.size.height >= g.parentData.height && (g.size.height = g.parentData.height - y, v && (g.size.width = g.size.height * g.aspectRatio))
        },
        stop: function() {
            var p = b(this).data("ui-resizable"),
                k = p.options,
                t = p.containerOffset,
                g = p.containerPosition,
                q = p.containerElement,
                f = b(p.helper),
                d = f.offset(),
                m = f.outerWidth() - p.sizeDiff.width,
                j = f.outerHeight() - p.sizeDiff.height;
            p._helper && !k.animate && /relative/.test(q.css("position")) && b(this).css({
                left: d.left - g.left - t.left,
                width: m,
                height: j
            }), p._helper && !k.animate && /static/.test(q.css("position")) && b(this).css({
                left: d.left - g.left - t.left,
                width: m,
                height: j
            })
        }
    }), b.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var g = b(this).data("ui-resizable"),
                d = g.options,
                f = function(h) {
                    b(h).each(function() {
                        var i = b(this);
                        i.data("ui-resizable-alsoresize", {
                            width: parseInt(i.width(), 10),
                            height: parseInt(i.height(), 10),
                            left: parseInt(i.css("left"), 10),
                            top: parseInt(i.css("top"), 10)
                        })
                    })
                };
            "object" != typeof d.alsoResize || d.alsoResize.parentNode ? f(d.alsoResize) : d.alsoResize.length ? (d.alsoResize = d.alsoResize[0], f(d.alsoResize)) : b.each(d.alsoResize, function(e) {
                f(e)
            })
        },
        resize: function(l, f) {
            var j = b(this).data("ui-resizable"),
                p = j.options,
                d = j.originalSize,
                m = j.originalPosition,
                k = {
                    height: j.size.height - d.height || 0,
                    width: j.size.width - d.width || 0,
                    top: j.position.top - m.top || 0,
                    left: j.position.left - m.left || 0
                },
                g = function(i, h) {
                    b(i).each(function() {
                        var r = b(this),
                            t = b(this).data("ui-resizable-alsoresize"),
                            q = {},
                            s = h && h.length ? h : r.parents(f.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        b.each(s, function(o, u) {
                            var n = (t[u] || 0) + (k[u] || 0);
                            n && n >= 0 && (q[u] = n || null)
                        }), r.css(q)
                    })
                };
            "object" != typeof p.alsoResize || p.alsoResize.nodeType ? g(p.alsoResize) : b.each(p.alsoResize, function(h, i) {
                g(h, i)
            })
        },
        stop: function() {
            b(this).removeData("resizable-alsoresize")
        }
    }), b.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var g = b(this).data("ui-resizable"),
                d = g.options,
                f = g.size;
            g.ghost = g.originalElement.clone(), g.ghost.css({
                opacity: 0.25,
                display: "block",
                position: "relative",
                height: f.height,
                width: f.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof d.ghost ? d.ghost : ""), g.ghost.appendTo(g.helper)
        },
        resize: function() {
            var d = b(this).data("ui-resizable");
            d.ghost && d.ghost.css({
                position: "relative",
                height: d.size.height,
                width: d.size.width
            })
        },
        stop: function() {
            var d = b(this).data("ui-resizable");
            d.ghost && d.helper && d.helper.get(0).removeChild(d.ghost.get(0))
        }
    }), b.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var C = b(this).data("ui-resizable"),
                y = C.options,
                I = C.size,
                t = C.originalSize,
                F = C.originalPosition,
                q = C.axis,
                j = "number" == typeof y.grid ? [y.grid, y.grid] : y.grid,
                z = j[0] || 1,
                x = j[1] || 1,
                E = Math.round((I.width - t.width) / z) * z,
                H = Math.round((I.height - t.height) / x) * x,
                D = t.width + E,
                k = t.height + H,
                B = y.maxWidth && D > y.maxWidth,
                A = y.maxHeight && k > y.maxHeight,
                w = y.minWidth && y.minWidth > D,
                G = y.minHeight && y.minHeight > k;
            y.grid = j, w && (D += z), G && (k += x), B && (D -= z), A && (k -= x), /^(se|s|e)$/.test(q) ? (C.size.width = D, C.size.height = k) : /^(ne)$/.test(q) ? (C.size.width = D, C.size.height = k, C.position.top = F.top - H) : /^(sw)$/.test(q) ? (C.size.width = D, C.size.height = k, C.position.left = F.left - E) : (k - x > 0 ? (C.size.height = k, C.position.top = F.top - H) : (C.size.height = x, C.position.top = F.top + t.height - x), D - z > 0 ? (C.size.width = D, C.position.left = F.left - E) : (C.size.width = z, C.position.left = F.left + t.width - z))
        }
    })
})(jQuery);
(function(a) {
    a.widget("ui.selectable", a.ui.mouse, {
        version: "1.10.4",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var c, b = this;
            this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                c = a(b.options.filter, b.element[0]), c.addClass("ui-selectee"), c.each(function() {
                    var f = a(this),
                        d = f.offset();
                    a.data(this, "selectable-item", {
                        element: this,
                        $element: f,
                        left: d.left,
                        top: d.top,
                        right: d.left + f.outerWidth(),
                        bottom: d.top + f.outerHeight(),
                        startselected: !1,
                        selected: f.hasClass("ui-selected"),
                        selecting: f.hasClass("ui-selecting"),
                        unselecting: f.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = c.addClass("ui-selectee"), this._mouseInit(), this.helper = a("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
        },
        _mouseStart: function(d) {
            var b = this,
                c = this.options;
            this.opos = [d.pageX, d.pageY], this.options.disabled || (this.selectees = a(c.filter, this.element[0]), this._trigger("start", d), a(c.appendTo).append(this.helper), this.helper.css({
                left: d.pageX,
                top: d.pageY,
                width: 0,
                height: 0
            }), c.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var e = a.data(this, "selectable-item");
                e.startselected = !0, d.metaKey || d.ctrlKey || (e.$element.removeClass("ui-selected"), e.selected = !1, e.$element.addClass("ui-unselecting"), e.unselecting = !0, b._trigger("unselecting", d, {
                    unselecting: e.element
                }))
            }), a(d.target).parents().addBack().each(function() {
                var e, f = a.data(this, "selectable-item");
                return f ? (e = !d.metaKey && !d.ctrlKey || !f.$element.hasClass("ui-selected"), f.$element.removeClass(e ? "ui-unselecting" : "ui-selected").addClass(e ? "ui-selecting" : "ui-unselecting"), f.unselecting = !e, f.selecting = e, f.selected = e, e ? b._trigger("selecting", d, {
                    selecting: f.element
                }) : b._trigger("unselecting", d, {
                    unselecting: f.element
                }), !1) : undefined
            }))
        },
        _mouseDrag: function(h) {
            if (this.dragged = !0, !this.options.disabled) {
                var d, f = this,
                    k = this.options,
                    c = this.opos[0],
                    j = this.opos[1],
                    g = h.pageX,
                    b = h.pageY;
                return c > g && (d = g, g = c, c = d), j > b && (d = b, b = j, j = d), this.helper.css({
                    left: c,
                    top: j,
                    width: g - c,
                    height: b - j
                }), this.selectees.each(function() {
                    var e = a.data(this, "selectable-item"),
                        l = !1;
                    e && e.element !== f.element[0] && ("touch" === k.tolerance ? l = !(e.left > g || c > e.right || e.top > b || j > e.bottom) : "fit" === k.tolerance && (l = e.left > c && g > e.right && e.top > j && b > e.bottom), l ? (e.selected && (e.$element.removeClass("ui-selected"), e.selected = !1), e.unselecting && (e.$element.removeClass("ui-unselecting"), e.unselecting = !1), e.selecting || (e.$element.addClass("ui-selecting"), e.selecting = !0, f._trigger("selecting", h, {
                        selecting: e.element
                    }))) : (e.selecting && ((h.metaKey || h.ctrlKey) && e.startselected ? (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.$element.addClass("ui-selected"), e.selected = !0) : (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.startselected && (e.$element.addClass("ui-unselecting"), e.unselecting = !0), f._trigger("unselecting", h, {
                        unselecting: e.element
                    }))), e.selected && (h.metaKey || h.ctrlKey || e.startselected || (e.$element.removeClass("ui-selected"), e.selected = !1, e.$element.addClass("ui-unselecting"), e.unselecting = !0, f._trigger("unselecting", h, {
                        unselecting: e.element
                    })))))
                }), !1
            }
        },
        _mouseStop: function(c) {
            var b = this;
            return this.dragged = !1, a(".ui-unselecting", this.element[0]).each(function() {
                var d = a.data(this, "selectable-item");
                d.$element.removeClass("ui-unselecting"), d.unselecting = !1, d.startselected = !1, b._trigger("unselected", c, {
                    unselected: d.element
                })
            }), a(".ui-selecting", this.element[0]).each(function() {
                var d = a.data(this, "selectable-item");
                d.$element.removeClass("ui-selecting").addClass("ui-selected"), d.selecting = !1, d.selected = !0, d.startselected = !0, b._trigger("selected", c, {
                    selected: d.element
                })
            }), this._trigger("stop", c), this.helper.remove(), !1
        }
    })
})(jQuery);
(function(b) {
    function c(f, g, d) {
        return f > g && g + d > f
    }

    function a(d) {
        return /left|right/.test(d.css("float")) || /inline|table-cell/.test(d.css("display"))
    }
    b.widget("ui.sortable", b.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1000,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function() {
            var d = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === d.axis || a(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var d = this.items.length - 1; d >= 0; d--) {
                this.items[d].item.removeData(this.widgetName + "-item")
            }
            return this
        },
        _setOption: function(f, d) {
            "disabled" === f ? (this.options[f] = d, this.widget().toggleClass("ui-sortable-disabled", !!d)) : b.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(g, d) {
            var f = null,
                j = !1,
                h = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(g), b(g.target).parents().each(function() {
                return b.data(this, h.widgetName + "-item") === h ? (f = b(this), !1) : undefined
            }), b.data(g.target, h.widgetName + "-item") === h && (f = b(g.target)), f ? !this.options.handle || d || (b(this.options.handle, f).find("*").addBack().each(function() {
                this === g.target && (j = !0)
            }), j) ? (this.currentItem = f, this._removeCurrentsFromItems(), !0) : !1 : !1)
        },
        _mouseStart: function(h, f, g) {
            var k, j, d = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(h), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, b.extend(this.offset, {
                    click: {
                        left: h.pageX - this.offset.left,
                        top: h.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(h), this.originalPageX = h.pageX, this.originalPageY = h.pageY, d.cursorAt && this._adjustOffsetFromHelper(d.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), d.containment && this._setContainment(), d.cursor && "auto" !== d.cursor && (j = this.document.find("body"), this.storedCursor = j.css("cursor"), j.css("cursor", d.cursor), this.storedStylesheet = b("<style>*{ cursor: " + d.cursor + " !important; }</style>").appendTo(j)), d.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", d.opacity)), d.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", d.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", h, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !g) {
                for (k = this.containers.length - 1; k >= 0; k--) {
                    this.containers[k]._trigger("activate", h, this._uiHash(this))
                }
            }
            return b.ui.ddmanager && (b.ui.ddmanager.current = this), b.ui.ddmanager && !d.dropBehaviour && b.ui.ddmanager.prepareOffsets(this, h), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(h), !0
        },
        _mouseDrag: function(j) {
            var f, g, l, k, d = this.options,
                h = !1;
            for (this.position = this._generatePosition(j), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - j.pageY < d.scrollSensitivity ? this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop + d.scrollSpeed : j.pageY - this.overflowOffset.top < d.scrollSensitivity && (this.scrollParent[0].scrollTop = h = this.scrollParent[0].scrollTop - d.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - j.pageX < d.scrollSensitivity ? this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft + d.scrollSpeed : j.pageX - this.overflowOffset.left < d.scrollSensitivity && (this.scrollParent[0].scrollLeft = h = this.scrollParent[0].scrollLeft - d.scrollSpeed)) : (j.pageY - b(document).scrollTop() < d.scrollSensitivity ? h = b(document).scrollTop(b(document).scrollTop() - d.scrollSpeed) : b(window).height() - (j.pageY - b(document).scrollTop()) < d.scrollSensitivity && (h = b(document).scrollTop(b(document).scrollTop() + d.scrollSpeed)), j.pageX - b(document).scrollLeft() < d.scrollSensitivity ? h = b(document).scrollLeft(b(document).scrollLeft() - d.scrollSpeed) : b(window).width() - (j.pageX - b(document).scrollLeft()) < d.scrollSensitivity && (h = b(document).scrollLeft(b(document).scrollLeft() + d.scrollSpeed))), h !== !1 && b.ui.ddmanager && !d.dropBehaviour && b.ui.ddmanager.prepareOffsets(this, j)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), f = this.items.length - 1; f >= 0; f--) {
                if (g = this.items[f], l = g.item[0], k = this._intersectsWithPointer(g), k && g.instance === this.currentContainer && l !== this.currentItem[0] && this.placeholder[1 === k ? "next" : "prev"]()[0] !== l && !b.contains(this.placeholder[0], l) && ("semi-dynamic" === this.options.type ? !b.contains(this.element[0], l) : !0)) {
                    if (this.direction = 1 === k ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(g)) {
                        break
                    }
                    this._rearrange(j, g), this._trigger("change", j, this._uiHash());
                    break
                }
            }
            return this._contactContainers(j), b.ui.ddmanager && b.ui.ddmanager.drag(this, j), this._trigger("sort", j, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(h, f) {
            if (h) {
                if (b.ui.ddmanager && !this.options.dropBehaviour && b.ui.ddmanager.drop(this, h), this.options.revert) {
                    var g = this,
                        k = this.placeholder.offset(),
                        j = this.options.axis,
                        d = {};
                    j && "x" !== j || (d.left = k.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), j && "y" !== j || (d.top = k.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, b(this.helper).animate(d, parseInt(this.options.revert, 10) || 500, function() {
                        g._clear(h)
                    })
                } else {
                    this._clear(h, f)
                }
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var d = this.containers.length - 1; d >= 0; d--) {
                    this.containers[d]._trigger("deactivate", null, this._uiHash(this)), this.containers[d].containerCache.over && (this.containers[d]._trigger("out", null, this._uiHash(this)), this.containers[d].containerCache.over = 0)
                }
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), b.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? b(this.domPosition.prev).after(this.currentItem) : b(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(g) {
            var d = this._getItemsAsjQuery(g && g.connected),
                f = [];
            return g = g || {}, b(d).each(function() {
                var e = (b(g.item || this).attr(g.attribute || "id") || "").match(g.expression || /(.+)[\-=_](.+)/);
                e && f.push((g.key || e[1] + "[]") + "=" + (g.key && g.expression ? e[1] : e[2]))
            }), !f.length && g.key && f.push(g.key + "="), f.join("&")
        },
        toArray: function(g) {
            var d = this._getItemsAsjQuery(g && g.connected),
                f = [];
            return g = g || {}, d.each(function() {
                f.push(b(g.item || this).attr(g.attribute || "id") || "")
            }), f
        },
        _intersectsWith: function(B) {
            var w = this.positionAbs.left,
                q = w + this.helperProportions.width,
                C = this.positionAbs.top,
                k = C + this.helperProportions.height,
                j = B.left,
                z = j + B.width,
                f = B.top,
                v = f + B.height,
                m = this.offset.click.top,
                y = this.offset.click.left,
                A = "x" === this.options.axis || C + m > f && v > C + m,
                x = "y" === this.options.axis || w + y > j && z > w + y,
                g = A && x;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > B[this.floating ? "width" : "height"] ? g : w + this.helperProportions.width / 2 > j && z > q - this.helperProportions.width / 2 && C + this.helperProportions.height / 2 > f && v > k - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function(f) {
            var e = "x" === this.options.axis || c(this.positionAbs.top + this.offset.click.top, f.top, f.height),
                g = "y" === this.options.axis || c(this.positionAbs.left + this.offset.click.left, f.left, f.width),
                j = e && g,
                h = this._getDragVerticalDirection(),
                d = this._getDragHorizontalDirection();
            return j ? this.floating ? d && "right" === d || "down" === h ? 2 : 1 : h && ("down" === h ? 2 : 1) : !1
        },
        _intersectsWithSides: function(e) {
            var d = c(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
                f = c(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
                h = this._getDragVerticalDirection(),
                g = this._getDragHorizontalDirection();
            return this.floating && g ? "right" === g && f || "left" === g && !f : h && ("down" === h && d || "up" === h && !d)
        },
        _getDragVerticalDirection: function() {
            var d = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== d && (d > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var d = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== d && (d > 0 ? "right" : "left")
        },
        refresh: function(d) {
            return this._refreshItems(d), this.refreshPositions(), this
        },
        _connectWith: function() {
            var d = this.options;
            return d.connectWith.constructor === String ? [d.connectWith] : d.connectWith
        },
        _getItemsAsjQuery: function(p) {
            function k() {
                d.push(this)
            }
            var t, g, f, q, d = [],
                m = [],
                j = this._connectWith();
            if (j && p) {
                for (t = j.length - 1; t >= 0; t--) {
                    for (f = b(j[t]), g = f.length - 1; g >= 0; g--) {
                        q = b.data(f[g], this.widgetFullName), q && q !== this && !q.options.disabled && m.push([b.isFunction(q.options.items) ? q.options.items.call(q.element) : b(q.options.items, q.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), q])
                    }
                }
            }
            for (m.push([b.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : b(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), t = m.length - 1; t >= 0; t--) {
                m[t][0].each(k)
            }
            return b(d)
        },
        _removeCurrentsFromItems: function() {
            var d = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = b.grep(this.items, function(f) {
                for (var e = 0; d.length > e; e++) {
                    if (d[e] === f.item[0]) {
                        return !1
                    }
                }
                return !0
            })
        },
        _refreshItems: function(q) {
            this.items = [], this.containers = [this];
            var m, y, j, g, w, f, p, k, v = this.items,
                x = [
                    [b.isFunction(this.options.items) ? this.options.items.call(this.element[0], q, {
                        item: this.currentItem
                    }) : b(this.options.items, this.element), this]
                ],
                t = this._connectWith();
            if (t && this.ready) {
                for (m = t.length - 1; m >= 0; m--) {
                    for (j = b(t[m]), y = j.length - 1; y >= 0; y--) {
                        g = b.data(j[y], this.widgetFullName), g && g !== this && !g.options.disabled && (x.push([b.isFunction(g.options.items) ? g.options.items.call(g.element[0], q, {
                            item: this.currentItem
                        }) : b(g.options.items, g.element), g]), this.containers.push(g))
                    }
                }
            }
            for (m = x.length - 1; m >= 0; m--) {
                for (w = x[m][1], f = x[m][0], y = 0, k = f.length; k > y; y++) {
                    p = b(f[y]), p.data(this.widgetName + "-item", w), v.push({
                        item: p,
                        instance: w,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
                }
            }
        },
        refreshPositions: function(g) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var d, f, j, h;
            for (d = this.items.length - 1; d >= 0; d--) {
                f = this.items[d], f.instance !== this.currentContainer && this.currentContainer && f.item[0] !== this.currentItem[0] || (j = this.options.toleranceElement ? b(this.options.toleranceElement, f.item) : f.item, g || (f.width = j.outerWidth(), f.height = j.outerHeight()), h = j.offset(), f.left = h.left, f.top = h.top)
            }
            if (this.options.custom && this.options.custom.refreshContainers) {
                this.options.custom.refreshContainers.call(this)
            } else {
                for (d = this.containers.length - 1; d >= 0; d--) {
                    h = this.containers[d].element.offset(), this.containers[d].containerCache.left = h.left, this.containers[d].containerCache.top = h.top, this.containers[d].containerCache.width = this.containers[d].element.outerWidth(), this.containers[d].containerCache.height = this.containers[d].element.outerHeight()
                }
            }
            return this
        },
        _createPlaceholder: function(g) {
            g = g || this;
            var d, f = g.options;
            f.placeholder && f.placeholder.constructor !== String || (d = f.placeholder, f.placeholder = {
                element: function() {
                    var e = g.currentItem[0].nodeName.toLowerCase(),
                        h = b("<" + e + ">", g.document[0]).addClass(d || g.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === e ? g.currentItem.children().each(function() {
                        b("<td>&#160;</td>", g.document[0]).attr("colspan", b(this).attr("colspan") || 1).appendTo(h)
                    }) : "img" === e && h.attr("src", g.currentItem.attr("src")), d || h.css("visibility", "hidden"), h
                },
                update: function(e, h) {
                    (!d || f.forcePlaceholderSize) && (h.height() || h.height(g.currentItem.innerHeight() - parseInt(g.currentItem.css("paddingTop") || 0, 10) - parseInt(g.currentItem.css("paddingBottom") || 0, 10)), h.width() || h.width(g.currentItem.innerWidth() - parseInt(g.currentItem.css("paddingLeft") || 0, 10) - parseInt(g.currentItem.css("paddingRight") || 0, 10)))
                }
            }), g.placeholder = b(f.placeholder.element.call(g.element, g.currentItem)), g.currentItem.after(g.placeholder), f.placeholder.update(g, g.placeholder)
        },
        _contactContainers: function(A) {
            var k, j, y, e, q, m, x, z, w, i, v = null,
                t = null;
            for (k = this.containers.length - 1; k >= 0; k--) {
                if (!b.contains(this.currentItem[0], this.containers[k].element[0])) {
                    if (this._intersectsWith(this.containers[k].containerCache)) {
                        if (v && b.contains(this.containers[k].element[0], v.element[0])) {
                            continue
                        }
                        v = this.containers[k], t = k
                    } else {
                        this.containers[k].containerCache.over && (this.containers[k]._trigger("out", A, this._uiHash(this)), this.containers[k].containerCache.over = 0)
                    }
                }
            }
            if (v) {
                if (1 === this.containers.length) {
                    this.containers[t].containerCache.over || (this.containers[t]._trigger("over", A, this._uiHash(this)), this.containers[t].containerCache.over = 1)
                } else {
                    for (y = 10000, e = null, i = v.floating || a(this.currentItem), q = i ? "left" : "top", m = i ? "width" : "height", x = this.positionAbs[q] + this.offset.click[q], j = this.items.length - 1; j >= 0; j--) {
                        b.contains(this.containers[t].element[0], this.items[j].item[0]) && this.items[j].item[0] !== this.currentItem[0] && (!i || c(this.positionAbs.top + this.offset.click.top, this.items[j].top, this.items[j].height)) && (z = this.items[j].item.offset()[q], w = !1, Math.abs(z - x) > Math.abs(z + this.items[j][m] - x) && (w = !0, z += this.items[j][m]), y > Math.abs(z - x) && (y = Math.abs(z - x), e = this.items[j], this.direction = w ? "up" : "down"))
                    }
                    if (!e && !this.options.dropOnEmpty) {
                        return
                    }
                    if (this.currentContainer === this.containers[t]) {
                        return
                    }
                    e ? this._rearrange(A, e, null, !0) : this._rearrange(A, null, this.containers[t].element, !0), this._trigger("change", A, this._uiHash()), this.containers[t]._trigger("change", A, this._uiHash(this)), this.currentContainer = this.containers[t], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[t]._trigger("over", A, this._uiHash(this)), this.containers[t].containerCache.over = 1
                }
            }
        },
        _createHelper: function(g) {
            var d = this.options,
                f = b.isFunction(d.helper) ? b(d.helper.apply(this.element[0], [g, this.currentItem])) : "clone" === d.helper ? this.currentItem.clone() : this.currentItem;
            return f.parents("body").length || b("parent" !== d.appendTo ? d.appendTo : this.currentItem[0].parentNode)[0].appendChild(f[0]), f[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!f[0].style.width || d.forceHelperSize) && f.width(this.currentItem.width()), (!f[0].style.height || d.forceHelperSize) && f.height(this.currentItem.height()), f
        },
        _adjustOffsetFromHelper: function(d) {
            "string" == typeof d && (d = d.split(" ")), b.isArray(d) && (d = {
                left: +d[0],
                top: +d[1] || 0
            }), "left" in d && (this.offset.click.left = d.left + this.margins.left), "right" in d && (this.offset.click.left = this.helperProportions.width - d.right + this.margins.left), "top" in d && (this.offset.click.top = d.top + this.margins.top), "bottom" in d && (this.offset.click.top = this.helperProportions.height - d.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var d = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0]) && (d.left += this.scrollParent.scrollLeft(), d.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && b.ui.ie) && (d = {
                top: 0,
                left: 0
            }), {
                top: d.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: d.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var d = this.currentItem.position();
                return {
                    top: d.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: d.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var g, d, f, h = this.options;
            "parent" === h.containment && (h.containment = this.helper[0].parentNode), ("document" === h.containment || "window" === h.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, b("document" === h.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (b("document" === h.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(h.containment) || (g = b(h.containment)[0], d = b(h.containment).offset(), f = "hidden" !== b(g).css("overflow"), this.containment = [d.left + (parseInt(b(g).css("borderLeftWidth"), 10) || 0) + (parseInt(b(g).css("paddingLeft"), 10) || 0) - this.margins.left, d.top + (parseInt(b(g).css("borderTopWidth"), 10) || 0) + (parseInt(b(g).css("paddingTop"), 10) || 0) - this.margins.top, d.left + (f ? Math.max(g.scrollWidth, g.offsetWidth) : g.offsetWidth) - (parseInt(b(g).css("borderLeftWidth"), 10) || 0) - (parseInt(b(g).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, d.top + (f ? Math.max(g.scrollHeight, g.offsetHeight) : g.offsetHeight) - (parseInt(b(g).css("borderTopWidth"), 10) || 0) - (parseInt(b(g).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(g, d) {
            d || (d = this.position);
            var f = "absolute" === g ? 1 : -1,
                j = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                h = /(html|body)/i.test(j[0].tagName);
            return {
                top: d.top + this.offset.relative.top * f + this.offset.parent.top * f - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : j.scrollTop()) * f,
                left: d.left + this.offset.relative.left * f + this.offset.parent.left * f - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : j.scrollLeft()) * f
            }
        },
        _generatePosition: function(l) {
            var f, j, p = this.options,
                m = l.pageX,
                d = l.pageY,
                k = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                g = /(html|body)/i.test(k[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (l.pageX - this.offset.click.left < this.containment[0] && (m = this.containment[0] + this.offset.click.left), l.pageY - this.offset.click.top < this.containment[1] && (d = this.containment[1] + this.offset.click.top), l.pageX - this.offset.click.left > this.containment[2] && (m = this.containment[2] + this.offset.click.left), l.pageY - this.offset.click.top > this.containment[3] && (d = this.containment[3] + this.offset.click.top)), p.grid && (f = this.originalPageY + Math.round((d - this.originalPageY) / p.grid[1]) * p.grid[1], d = this.containment ? f - this.offset.click.top >= this.containment[1] && f - this.offset.click.top <= this.containment[3] ? f : f - this.offset.click.top >= this.containment[1] ? f - p.grid[1] : f + p.grid[1] : f, j = this.originalPageX + Math.round((m - this.originalPageX) / p.grid[0]) * p.grid[0], m = this.containment ? j - this.offset.click.left >= this.containment[0] && j - this.offset.click.left <= this.containment[2] ? j : j - this.offset.click.left >= this.containment[0] ? j - p.grid[0] : j + p.grid[0] : j)), {
                top: d - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : g ? 0 : k.scrollTop()),
                left: m - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : g ? 0 : k.scrollLeft())
            }
        },
        _rearrange: function(f, h, d, g) {
            d ? d[0].appendChild(this.placeholder[0]) : h.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? h.item[0] : h.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var j = this.counter;
            this._delay(function() {
                j === this.counter && this.refreshPositions(!g)
            })
        },
        _clear: function(f, h) {
            function d(l, m, k) {
                return function(e) {
                    k._trigger(l, e, m._uiHash(m))
                }
            }
            this.reverting = !1;
            var g, j = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (g in this._storedCSS) {
                    ("auto" === this._storedCSS[g] || "static" === this._storedCSS[g]) && (this._storedCSS[g] = "")
                }
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else {
                this.currentItem.show()
            }
            for (this.fromOutside && !h && j.push(function(e) {
                    this._trigger("receive", e, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || h || j.push(function(e) {
                    this._trigger("update", e, this._uiHash())
                }), this !== this.currentContainer && (h || (j.push(function(e) {
                    this._trigger("remove", e, this._uiHash())
                }), j.push(function(e) {
                    return function(i) {
                        e._trigger("receive", i, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), j.push(function(e) {
                    return function(i) {
                        e._trigger("update", i, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), g = this.containers.length - 1; g >= 0; g--) {
                h || j.push(d("deactivate", this, this.containers[g])), this.containers[g].containerCache.over && (j.push(d("out", this, this.containers[g])), this.containers[g].containerCache.over = 0)
            }
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!h) {
                    for (this._trigger("beforeStop", f, this._uiHash()), g = 0; j.length > g; g++) {
                        j[g].call(this, f)
                    }
                    this._trigger("stop", f, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            if (h || this._trigger("beforeStop", f, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !h) {
                for (g = 0; j.length > g; g++) {
                    j[g].call(this, f)
                }
                this._trigger("stop", f, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function() {
            b.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(f) {
            var d = f || this;
            return {
                helper: d.helper,
                placeholder: d.placeholder || b([]),
                position: d.position,
                originalPosition: d.originalPosition,
                offset: d.positionAbs,
                item: d.currentItem,
                sender: f ? f.element : null
            }
        }
    })
})(jQuery);
(function(f) {
    var d = 0,
        c = {},
        b = {};
    c.height = c.paddingTop = c.paddingBottom = c.borderTopWidth = c.borderBottomWidth = "hide", b.height = b.paddingTop = b.paddingBottom = b.borderTopWidth = b.borderBottomWidth = "show", f.widget("ui.accordion", {
        version: "1.10.4",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        _create: function() {
            var a = this.options;
            this.prevShow = this.prevHide = f(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), a.collapsible || a.active !== !1 && null != a.active || (a.active = 0), this._processPanels(), 0 > a.active && (a.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : f(),
                content: this.active.length ? this.active.next() : f()
            }
        },
        _createIcons: function() {
            var a = this.options.icons;
            a && (f("<span>").addClass("ui-accordion-header-icon ui-icon " + a.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(a.header).addClass(a.activeHeader), this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var a;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), this._destroyIcons(), a = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), "content" !== this.options.heightStyle && a.css("height", "")
        },
        _setOption: function(g, a) {
            return "active" === g ? (this._activate(a), undefined) : ("event" === g && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(a)), this._super(g, a), "collapsible" !== g || a || this.options.active !== !1 || this._activate(0), "icons" === g && (this._destroyIcons(), a && this._createIcons()), "disabled" === g && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!a), undefined)
        },
        _keydown: function(h) {
            if (!h.altKey && !h.ctrlKey) {
                var g = f.ui.keyCode,
                    e = this.headers.length,
                    j = this.headers.index(h.target),
                    k = !1;
                switch (h.keyCode) {
                    case g.RIGHT:
                    case g.DOWN:
                        k = this.headers[(j + 1) % e];
                        break;
                    case g.LEFT:
                    case g.UP:
                        k = this.headers[(j - 1 + e) % e];
                        break;
                    case g.SPACE:
                    case g.ENTER:
                        this._eventHandler(h);
                        break;
                    case g.HOME:
                        k = this.headers[0];
                        break;
                    case g.END:
                        k = this.headers[e - 1]
                }
                k && (f(h.target).attr("tabIndex", -1), f(k).attr("tabIndex", 0), k.focus(), h.preventDefault())
            }
        },
        _panelKeyDown: function(a) {
            a.keyCode === f.ui.keyCode.UP && a.ctrlKey && f(a.currentTarget).prev().focus()
        },
        refresh: function() {
            var a = this.options;
            this._processPanels(), a.active === !1 && a.collapsible === !0 || !this.headers.length ? (a.active = !1, this.active = f()) : a.active === !1 ? this._activate(0) : this.active.length && !f.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (a.active = !1, this.active = f()) : this._activate(Math.max(0, a.active - 1)) : a.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function() {
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
        },
        _refresh: function() {
            var g, e = this.options,
                h = e.heightStyle,
                k = this.element.parent(),
                j = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++d);
            this.active = this._findActive(e.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function(o) {
                var m = f(this),
                    l = m.attr("id"),
                    p = m.next(),
                    q = p.attr("id");
                l || (l = j + "-header-" + o, m.attr("id", l)), q || (q = j + "-panel-" + o, p.attr("id", q)), m.attr("aria-controls", q), p.attr("aria-labelledby", l)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(e.event), "fill" === h ? (g = k.height(), this.element.siblings(":visible").each(function() {
                var l = f(this),
                    i = l.css("position");
                "absolute" !== i && "fixed" !== i && (g -= l.outerHeight(!0))
            }), this.headers.each(function() {
                g -= f(this).outerHeight(!0)
            }), this.headers.next().each(function() {
                f(this).height(Math.max(0, g - f(this).innerHeight() + f(this).height()))
            }).css("overflow", "auto")) : "auto" === h && (g = 0, this.headers.next().each(function() {
                g = Math.max(g, f(this).css("height", "").height())
            }).height(g))
        },
        _activate: function(e) {
            var a = this._findActive(e)[0];
            a !== this.active[0] && (a = a || this.active[0], this._eventHandler({
                target: a,
                currentTarget: a,
                preventDefault: f.noop
            }))
        },
        _findActive: function(a) {
            return "number" == typeof a ? this.headers.eq(a) : f()
        },
        _setupEvents: function(e) {
            var a = {
                keydown: "_keydown"
            };
            e && f.each(e.split(" "), function(h, g) {
                a[g] = "_eventHandler"
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, a), this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function(q) {
            var k = this.options,
                p = this.active,
                u = f(q.currentTarget),
                j = u[0] === p[0],
                e = j && k.collapsible,
                g = e ? f() : u.next(),
                l = p.next(),
                m = {
                    oldHeader: p,
                    oldPanel: l,
                    newHeader: e ? f() : u,
                    newPanel: g
                };
            q.preventDefault(), j && !k.collapsible || this._trigger("beforeActivate", q, m) === !1 || (k.active = e ? !1 : this.headers.index(u), this.active = j ? f() : u, this._toggle(m), p.removeClass("ui-accordion-header-active ui-state-active"), k.icons && p.children(".ui-accordion-header-icon").removeClass(k.icons.activeHeader).addClass(k.icons.header), j || (u.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), k.icons && u.children(".ui-accordion-header-icon").removeClass(k.icons.header).addClass(k.icons.activeHeader), u.next().addClass("ui-accordion-content-active")))
        },
        _toggle: function(h) {
            var g = h.newPanel,
                e = this.prevShow.length ? this.prevShow : h.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = g, this.prevHide = e, this.options.animate ? this._animate(g, e, h) : (e.hide(), g.show(), this._toggleComplete(h)), e.attr({
                "aria-hidden": "true"
            }), e.prev().attr("aria-selected", "false"), g.length && e.length ? e.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : g.length && this.headers.filter(function() {
                return 0 === f(this).attr("tabIndex")
            }).attr("tabIndex", -1), g.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                tabIndex: 0,
                "aria-expanded": "true"
            })
        },
        _animate: function(m, y, z) {
            var i, a, g, k = this,
                p = 0,
                q = m.length && (!y.length || m.index() < y.index()),
                j = this.options.animate || {},
                x = q && j.down || j,
                w = function() {
                    k._toggleComplete(z)
                };
            return "number" == typeof x && (g = x), "string" == typeof x && (a = x), a = a || x.easing || j.easing, g = g || x.duration || j.duration, y.length ? m.length ? (i = m.show().outerHeight(), y.animate(c, {
                duration: g,
                easing: a,
                step: function(l, h) {
                    h.now = Math.round(l)
                }
            }), m.hide().animate(b, {
                duration: g,
                easing: a,
                complete: w,
                step: function(l, h) {
                    h.now = Math.round(l), "height" !== h.prop ? p += h.now : "content" !== k.options.heightStyle && (h.now = Math.round(i - y.outerHeight() - p), p = 0)
                }
            }), undefined) : y.animate(c, g, a, w) : m.animate(b, g, a, w)
        },
        _toggleComplete: function(g) {
            var a = g.oldPanel;
            a.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), a.length && (a.parent()[0].className = a.parent()[0].className), this._trigger("activate", null, g)
        }
    })
})(jQuery);
(function(a) {
    a.widget("ui.autocomplete", {
        version: "1.10.4",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var d, c, e, g = this.element[0].nodeName.toLowerCase(),
                b = "textarea" === g,
                f = "input" === g;
            this.isMultiLine = b ? !0 : f ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[b || f ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function(i) {
                    if (this.element.prop("readOnly")) {
                        return d = !0, e = !0, c = !0, undefined
                    }
                    d = !1, e = !1, c = !1;
                    var h = a.ui.keyCode;
                    switch (i.keyCode) {
                        case h.PAGE_UP:
                            d = !0, this._move("previousPage", i);
                            break;
                        case h.PAGE_DOWN:
                            d = !0, this._move("nextPage", i);
                            break;
                        case h.UP:
                            d = !0, this._keyEvent("previous", i);
                            break;
                        case h.DOWN:
                            d = !0, this._keyEvent("next", i);
                            break;
                        case h.ENTER:
                        case h.NUMPAD_ENTER:
                            this.menu.active && (d = !0, i.preventDefault(), this.menu.select(i));
                            break;
                        case h.TAB:
                            this.menu.active && this.menu.select(i);
                            break;
                        case h.ESCAPE:
                            this.menu.element.is(":visible") && (this._value(this.term), this.close(i), i.preventDefault());
                            break;
                        default:
                            c = !0, this._searchTimeout(i)
                    }
                },
                keypress: function(h) {
                    if (d) {
                        return d = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && h.preventDefault(), undefined
                    }
                    if (!c) {
                        var i = a.ui.keyCode;
                        switch (h.keyCode) {
                            case i.PAGE_UP:
                                this._move("previousPage", h);
                                break;
                            case i.PAGE_DOWN:
                                this._move("nextPage", h);
                                break;
                            case i.UP:
                                this._keyEvent("previous", h);
                                break;
                            case i.DOWN:
                                this._keyEvent("next", h)
                        }
                    }
                },
                input: function(h) {
                    return e ? (e = !1, h.preventDefault(), undefined) : (this._searchTimeout(h), undefined)
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function(h) {
                    return this.cancelBlur ? (delete this.cancelBlur, undefined) : (clearTimeout(this.searching), this.close(h), this._change(h), undefined)
                }
            }), this._initSource(), this.menu = a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().data("ui-menu"), this._on(this.menu.element, {
                mousedown: function(j) {
                    j.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur
                    });
                    var h = this.menu.element[0];
                    a(j.target).closest(".ui-menu-item").length || this._delay(function() {
                        var i = this;
                        this.document.one("mousedown", function(k) {
                            k.target === i.element[0] || k.target === h || a.contains(h, k.target) || i.close()
                        })
                    })
                },
                menufocus: function(j, h) {
                    if (this.isNewMenu && (this.isNewMenu = !1, j.originalEvent && /^mouse/.test(j.originalEvent.type))) {
                        return this.menu.blur(), this.document.one("mousemove", function() {
                            a(j.target).trigger(j.originalEvent)
                        }), undefined
                    }
                    var k = h.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", j, {
                        item: k
                    }) ? j.originalEvent && /^key/.test(j.originalEvent.type) && this._value(k.value) : this.liveRegion.text(k.value)
                },
                menuselect: function(l, j) {
                    var h = j.item.data("ui-autocomplete-item"),
                        k = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = k, this._delay(function() {
                        this.previous = k, this.selectedItem = h
                    })), !1 !== this._trigger("select", l, {
                        item: h
                    }) && this._value(h.value), this.term = this._value(), this.close(l), this.selectedItem = h
                }
            }), this.liveRegion = a("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function(c, b) {
            this._super(c, b), "source" === c && this._initSource(), "appendTo" === c && this.menu.element.appendTo(this._appendTo()), "disabled" === c && b && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
            var b = this.options.appendTo;
            return b && (b = b.jquery || b.nodeType ? a(b) : this.document.find(b).eq(0)), b || (b = this.element.closest(".ui-front")), b.length || (b = this.document[0].body), b
        },
        _initSource: function() {
            var c, b, d = this;
            a.isArray(this.options.source) ? (c = this.options.source, this.source = function(e, f) {
                f(a.ui.autocomplete.filter(c, e.term))
            }) : "string" == typeof this.options.source ? (b = this.options.source, this.source = function(e, f) {
                d.xhr && d.xhr.abort(), d.xhr = a.ajax({
                    url: b,
                    data: e,
                    dataType: "json",
                    success: function(g) {
                        f(g)
                    },
                    error: function() {
                        f([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(b) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, b))
            }, this.options.delay)
        },
        search: function(c, b) {
            return c = null != c ? c : this._value(), this.term = this._value(), c.length < this.options.minLength ? this.close(b) : this._trigger("search", b) !== !1 ? this._search(c) : undefined
        },
        _search: function(b) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: b
            }, this._response())
        },
        _response: function() {
            var b = ++this.requestIndex;
            return a.proxy(function(c) {
                b === this.requestIndex && this.__response(c), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function(b) {
            b && (b = this._normalize(b)), this._trigger("response", null, {
                content: b
            }), !this.options.disabled && b && b.length && !this.cancelSearch ? (this._suggest(b), this._trigger("open")) : this._close()
        },
        close: function(b) {
            this.cancelSearch = !0, this._close(b)
        },
        _close: function(b) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", b))
        },
        _change: function(b) {
            this.previous !== this._value() && this._trigger("change", b, {
                item: this.selectedItem
            })
        },
        _normalize: function(b) {
            return b.length && b[0].label && b[0].value ? b : a.map(b, function(c) {
                return "string" == typeof c ? {
                    label: c,
                    value: c
                } : a.extend({
                    label: c.label || c.value,
                    value: c.value || c.label
                }, c)
            })
        },
        _suggest: function(c) {
            var b = this.menu.element.empty();
            this._renderMenu(b, c), this.isNewMenu = !0, this.menu.refresh(), b.show(), this._resizeMenu(), b.position(a.extend({ of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var b = this.menu.element;
            b.outerWidth(Math.max(b.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(c, b) {
            var d = this;
            a.each(b, function(g, f) {
                d._renderItemData(c, f)
            })
        },
        _renderItemData: function(c, b) {
            return this._renderItem(c, b).data("ui-autocomplete-item", b)
        },
        _renderItem: function(c, b) {
            return a("<li>").append(a("<a>").text(b.label)).appendTo(c)
        },
        _move: function(c, b) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(c) || this.menu.isLastItem() && /^next/.test(c) ? (this._value(this.term), this.menu.blur(), undefined) : (this.menu[c](b), undefined) : (this.search(null, b), undefined)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(c, b) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(c, b), b.preventDefault())
        }
    }), a.extend(a.ui.autocomplete, {
        escapeRegex: function(b) {
            return b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(c, b) {
            var d = RegExp(a.ui.autocomplete.escapeRegex(b), "i");
            return a.grep(c, function(f) {
                return d.test(f.label || f.value || f)
            })
        }
    }), a.widget("ui.autocomplete", a.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(b) {
                    return b + (b > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(c) {
            var b;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (b = c && c.length ? this.options.messages.results(c.length) : this.options.messages.noResults, this.liveRegion.text(b))
        }
    })
})(jQuery);
(function(g) {
    var d, c = "ui-button ui-widget ui-state-default ui-corner-all",
        h = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        f = function() {
            var a = g(this);
            setTimeout(function() {
                a.find(":ui-button").button("refresh")
            }, 1)
        },
        b = function(e) {
            var a = e.name,
                k = e.form,
                j = g([]);
            return a && (a = a.replace(/'/g, "\\'"), j = k ? g(k).find("[name='" + a + "']") : g("[name='" + a + "']", e.ownerDocument).filter(function() {
                return !this.form
            })), j
        };
    g.widget("ui.button", {
        version: "1.10.4",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, f), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var j = this,
                i = this.options,
                e = "checkbox" === this.type || "radio" === this.type,
                a = e ? "" : "ui-state-active";
            null === i.label && (i.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(c).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                i.disabled || this === d && g(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function() {
                i.disabled || g(this).removeClass(a)
            }).bind("click" + this.eventNamespace, function(k) {
                i.disabled && (k.preventDefault(), k.stopImmediatePropagation())
            }), this._on({
                focus: function() {
                    this.buttonElement.addClass("ui-state-focus")
                },
                blur: function() {
                    this.buttonElement.removeClass("ui-state-focus")
                }
            }), e && this.element.bind("change" + this.eventNamespace, function() {
                j.refresh()
            }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                return i.disabled ? !1 : undefined
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (i.disabled) {
                    return !1
                }
                g(this).addClass("ui-state-active"), j.buttonElement.attr("aria-pressed", "true");
                var k = j.element[0];
                b(k).not(k).map(function() {
                    return g(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                return i.disabled ? !1 : (g(this).addClass("ui-state-active"), d = this, j.document.one("mouseup", function() {
                    d = null
                }), undefined)
            }).bind("mouseup" + this.eventNamespace, function() {
                return i.disabled ? !1 : (g(this).removeClass("ui-state-active"), undefined)
            }).bind("keydown" + this.eventNamespace, function(k) {
                return i.disabled ? !1 : ((k.keyCode === g.ui.keyCode.SPACE || k.keyCode === g.ui.keyCode.ENTER) && g(this).addClass("ui-state-active"), undefined)
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                g(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(k) {
                k.keyCode === g.ui.keyCode.SPACE && g(this).click()
            })), this._setOption("disabled", i.disabled), this._resetButton()
        },
        _determineButtonType: function() {
            var k, j, a;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (k = this.element.parents().last(), j = "label[for='" + this.element.attr("id") + "']", this.buttonElement = k.find(j), this.buttonElement.length || (k = k.length ? k.siblings() : this.element.siblings(), this.buttonElement = k.filter(j), this.buttonElement.length || (this.buttonElement = k.find(j))), this.element.addClass("ui-helper-hidden-accessible"), a = this.element.is(":checked"), a && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", a)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(c + " ui-state-active " + h).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function(i, a) {
            return this._super(i, a), "disabled" === i ? (this.element.prop("disabled", !!a), a && this.buttonElement.removeClass("ui-state-focus"), undefined) : (this._resetButton(), undefined)
        },
        refresh: function() {
            var a = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            a !== this.options.disabled && this._setOption("disabled", a), "radio" === this.type ? b(this.element[0]).each(function() {
                g(this).is(":checked") ? g(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : g(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if ("input" === this.type) {
                return this.options.label && this.element.val(this.options.label), undefined
            }
            var k = this.buttonElement.removeClass(h),
                j = g("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(k.empty()).text(),
                l = this.options.icons,
                e = l.primary && l.secondary,
                m = [];
            l.primary || l.secondary ? (this.options.text && m.push("ui-button-text-icon" + (e ? "s" : l.primary ? "-primary" : "-secondary")), l.primary && k.prepend("<span class='ui-button-icon-primary ui-icon " + l.primary + "'></span>"), l.secondary && k.append("<span class='ui-button-icon-secondary ui-icon " + l.secondary + "'></span>"), this.options.text || (m.push(e ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || k.attr("title", g.trim(j)))) : m.push("ui-button-text-only"), k.addClass(m.join(" "))
        }
    }), g.widget("ui.buttonset", {
        version: "1.10.4",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(i, a) {
            "disabled" === i && this.buttons.button("option", i, a), this._super(i, a)
        },
        refresh: function() {
            var a = "rtl" === this.element.css("direction");
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return g(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(a ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(a ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                return g(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
})(jQuery);
(function(h, d) {
    function c() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, h.extend(this._defaults, this.regional[""]), this.dpDiv = b(h("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function b(e) {
        var a = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.delegate(a, "mouseout", function() {
            h(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && h(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && h(this).removeClass("ui-datepicker-next-hover")
        }).delegate(a, "mouseover", function() {
            h.datepicker._isDisabledDatepicker(j.inline ? e.parent()[0] : j.input[0]) || (h(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), h(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && h(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && h(this).addClass("ui-datepicker-next-hover"))
        })
    }

    function f(l, k) {
        h.extend(l, k);
        for (var e in k) {
            null == k[e] && (l[e] = k[e])
        }
        return l
    }
    h.extend(h.ui, {
        datepicker: {
            version: "1.10.4"
        }
    });
    var j, g = "datepicker";
    h.extend(c.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(a) {
            return f(this._defaults, a || {}), this
        },
        _attachDatepicker: function(l, k) {
            var e, m, o;
            e = l.nodeName.toLowerCase(), m = "div" === e || "span" === e, l.id || (this.uuid += 1, l.id = "dp" + this.uuid), o = this._newInst(h(l), m), o.settings = h.extend({}, k || {}), "input" === e ? this._connectDatepicker(l, o) : m && this._inlineDatepicker(l, o)
        },
        _newInst: function(e, a) {
            var k = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: k,
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: a,
                dpDiv: a ? b(h("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(l, k) {
            var e = h(l);
            k.append = h([]), k.trigger = h([]), e.hasClass(this.markerClassName) || (this._attachments(e, k), e.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(k), h.data(l, g, k), k.settings.disabled && this._disableDatepicker(l))
        },
        _attachments: function(l, k) {
            var e, m, u, p = this._get(k, "appendText"),
                q = this._get(k, "isRTL");
            k.append && k.append.remove(), p && (k.append = h("<span class='" + this._appendClass + "'>" + p + "</span>"), l[q ? "before" : "after"](k.append)), l.unbind("focus", this._showDatepicker), k.trigger && k.trigger.remove(), e = this._get(k, "showOn"), ("focus" === e || "both" === e) && l.focus(this._showDatepicker), ("button" === e || "both" === e) && (m = this._get(k, "buttonText"), u = this._get(k, "buttonImage"), k.trigger = h(this._get(k, "buttonImageOnly") ? h("<img/>").addClass(this._triggerClass).attr({
                src: u,
                alt: m,
                title: m
            }) : h("<button type='button'></button>").addClass(this._triggerClass).html(u ? h("<img/>").attr({
                src: u,
                alt: m,
                title: m
            }) : m)), l[q ? "before" : "after"](k.trigger), k.trigger.click(function() {
                return h.datepicker._datepickerShowing && h.datepicker._lastInput === l[0] ? h.datepicker._hideDatepicker() : h.datepicker._datepickerShowing && h.datepicker._lastInput !== l[0] ? (h.datepicker._hideDatepicker(), h.datepicker._showDatepicker(l[0])) : h.datepicker._showDatepicker(l[0]), !1
            }))
        },
        _autoSize: function(q) {
            if (this._get(q, "autoSize") && !q.inline) {
                var m, l, k, o, u = new Date(2009, 11, 20),
                    p = this._get(q, "dateFormat");
                p.match(/[DM]/) && (m = function(a) {
                    for (l = 0, k = 0, o = 0; a.length > o; o++) {
                        a[o].length > l && (l = a[o].length, k = o)
                    }
                    return k
                }, u.setMonth(m(this._get(q, p.match(/MM/) ? "monthNames" : "monthNamesShort"))), u.setDate(m(this._get(q, p.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - u.getDay())), q.input.attr("size", this._formatDate(q, u).length)
            }
        },
        _inlineDatepicker: function(l, k) {
            var e = h(l);
            e.hasClass(this.markerClassName) || (e.addClass(this.markerClassName).append(k.dpDiv), h.data(l, g, k), this._setDate(k, this._getDefaultDate(k), !0), this._updateDatepicker(k), this._updateAlternate(k), k.settings.disabled && this._disableDatepicker(l), k.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(z, r, x, m, k) {
            var y, w, s, q, v, e = this._dialogInst;
            return e || (this.uuid += 1, y = "dp" + this.uuid, this._dialogInput = h("<input type='text' id='" + y + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), h("body").append(this._dialogInput), e = this._dialogInst = this._newInst(this._dialogInput, !1), e.settings = {}, h.data(this._dialogInput[0], g, e)), f(e.settings, m || {}), r = r && r.constructor === Date ? this._formatDate(e, r) : r, this._dialogInput.val(r), this._pos = k ? k.length ? k : [k.pageX, k.pageY] : null, this._pos || (w = document.documentElement.clientWidth, s = document.documentElement.clientHeight, q = document.documentElement.scrollLeft || document.body.scrollLeft, v = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [w / 2 - 100 + q, s / 2 - 150 + v]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), e.settings.onSelect = x, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), h.blockUI && h.blockUI(this.dpDiv), h.data(this._dialogInput[0], g, e), this
        },
        _destroyDatepicker: function(l) {
            var k, e = h(l),
                m = h.data(l, g);
            e.hasClass(this.markerClassName) && (k = l.nodeName.toLowerCase(), h.removeData(l, g), "input" === k ? (m.append.remove(), m.trigger.remove(), e.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === k || "span" === k) && e.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function(l) {
            var k, e, m = h(l),
                o = h.data(l, g);
            m.hasClass(this.markerClassName) && (k = l.nodeName.toLowerCase(), "input" === k ? (l.disabled = !1, o.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === k || "span" === k) && (e = m.children("." + this._inlineClass), e.children().removeClass("ui-state-disabled"), e.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = h.map(this._disabledInputs, function(a) {
                return a === l ? null : a
            }))
        },
        _disableDatepicker: function(l) {
            var k, e, m = h(l),
                o = h.data(l, g);
            m.hasClass(this.markerClassName) && (k = l.nodeName.toLowerCase(), "input" === k ? (l.disabled = !0, o.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === k || "span" === k) && (e = m.children("." + this._inlineClass), e.children().addClass("ui-state-disabled"), e.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = h.map(this._disabledInputs, function(a) {
                return a === l ? null : a
            }), this._disabledInputs[this._disabledInputs.length] = l)
        },
        _isDisabledDatepicker: function(i) {
            if (!i) {
                return !1
            }
            for (var a = 0; this._disabledInputs.length > a; a++) {
                if (this._disabledInputs[a] === i) {
                    return !0
                }
            }
            return !1
        },
        _getInst: function(e) {
            try {
                return h.data(e, g)
            } catch (a) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(l, e, t) {
            var p, q, k, s, m = this._getInst(l);
            return 2 === arguments.length && "string" == typeof e ? "defaults" === e ? h.extend({}, h.datepicker._defaults) : m ? "all" === e ? h.extend({}, m.settings) : this._get(m, e) : null : (p = e || {}, "string" == typeof e && (p = {}, p[e] = t), m && (this._curInst === m && this._hideDatepicker(), q = this._getDateDatepicker(l, !0), k = this._getMinMaxDate(m, "min"), s = this._getMinMaxDate(m, "max"), f(m.settings, p), null !== k && p.dateFormat !== d && p.minDate === d && (m.settings.minDate = this._formatDate(m, k)), null !== s && p.dateFormat !== d && p.maxDate === d && (m.settings.maxDate = this._formatDate(m, s)), "disabled" in p && (p.disabled ? this._disableDatepicker(l) : this._enableDatepicker(l)), this._attachments(h(l), m), this._autoSize(m), this._setDate(m, q), this._updateAlternate(m), this._updateDatepicker(m)), d)
        },
        _changeDatepicker: function(l, k, a) {
            this._optionDatepicker(l, k, a)
        },
        _refreshDatepicker: function(i) {
            var a = this._getInst(i);
            a && this._updateDatepicker(a)
        },
        _setDateDatepicker: function(l, k) {
            var a = this._getInst(l);
            a && (this._setDate(a, k), this._updateDatepicker(a), this._updateAlternate(a))
        },
        _getDateDatepicker: function(l, k) {
            var a = this._getInst(l);
            return a && !a.inline && this._setDateFromField(a, k), a ? this._getDate(a) : null
        },
        _doKeyDown: function(l) {
            var k, e, m, u = h.datepicker._getInst(l.target),
                p = !0,
                q = u.dpDiv.is(".ui-datepicker-rtl");
            if (u._keyEvent = !0, h.datepicker._datepickerShowing) {
                switch (l.keyCode) {
                    case 9:
                        h.datepicker._hideDatepicker(), p = !1;
                        break;
                    case 13:
                        return m = h("td." + h.datepicker._dayOverClass + ":not(." + h.datepicker._currentClass + ")", u.dpDiv), m[0] && h.datepicker._selectDay(l.target, u.selectedMonth, u.selectedYear, m[0]), k = h.datepicker._get(u, "onSelect"), k ? (e = h.datepicker._formatDate(u), k.apply(u.input ? u.input[0] : null, [e, u])) : h.datepicker._hideDatepicker(), !1;
                    case 27:
                        h.datepicker._hideDatepicker();
                        break;
                    case 33:
                        h.datepicker._adjustDate(l.target, l.ctrlKey ? -h.datepicker._get(u, "stepBigMonths") : -h.datepicker._get(u, "stepMonths"), "M");
                        break;
                    case 34:
                        h.datepicker._adjustDate(l.target, l.ctrlKey ? +h.datepicker._get(u, "stepBigMonths") : +h.datepicker._get(u, "stepMonths"), "M");
                        break;
                    case 35:
                        (l.ctrlKey || l.metaKey) && h.datepicker._clearDate(l.target), p = l.ctrlKey || l.metaKey;
                        break;
                    case 36:
                        (l.ctrlKey || l.metaKey) && h.datepicker._gotoToday(l.target), p = l.ctrlKey || l.metaKey;
                        break;
                    case 37:
                        (l.ctrlKey || l.metaKey) && h.datepicker._adjustDate(l.target, q ? 1 : -1, "D"), p = l.ctrlKey || l.metaKey, l.originalEvent.altKey && h.datepicker._adjustDate(l.target, l.ctrlKey ? -h.datepicker._get(u, "stepBigMonths") : -h.datepicker._get(u, "stepMonths"), "M");
                        break;
                    case 38:
                        (l.ctrlKey || l.metaKey) && h.datepicker._adjustDate(l.target, -7, "D"), p = l.ctrlKey || l.metaKey;
                        break;
                    case 39:
                        (l.ctrlKey || l.metaKey) && h.datepicker._adjustDate(l.target, q ? -1 : 1, "D"), p = l.ctrlKey || l.metaKey, l.originalEvent.altKey && h.datepicker._adjustDate(l.target, l.ctrlKey ? +h.datepicker._get(u, "stepBigMonths") : +h.datepicker._get(u, "stepMonths"), "M");
                        break;
                    case 40:
                        (l.ctrlKey || l.metaKey) && h.datepicker._adjustDate(l.target, 7, "D"), p = l.ctrlKey || l.metaKey;
                        break;
                    default:
                        p = !1
                }
            } else {
                36 === l.keyCode && l.ctrlKey ? h.datepicker._showDatepicker(this) : p = !1
            }
            p && (l.preventDefault(), l.stopPropagation())
        },
        _doKeyPress: function(k) {
            var e, l, m = h.datepicker._getInst(k.target);
            return h.datepicker._get(m, "constrainInput") ? (e = h.datepicker._possibleChars(h.datepicker._get(m, "dateFormat")), l = String.fromCharCode(null == k.charCode ? k.keyCode : k.charCode), k.ctrlKey || k.metaKey || " " > l || !e || e.indexOf(l) > -1) : d
        },
        _doKeyUp: function(l) {
            var k, e = h.datepicker._getInst(l.target);
            if (e.input.val() !== e.lastVal) {
                try {
                    k = h.datepicker.parseDate(h.datepicker._get(e, "dateFormat"), e.input ? e.input.val() : null, h.datepicker._getFormatConfig(e)), k && (h.datepicker._setDateFromField(e), h.datepicker._updateAlternate(e), h.datepicker._updateDatepicker(e))
                } catch (m) {}
            }
            return !0
        },
        _showDatepicker: function(m) {
            if (m = m.target || m, "input" !== m.nodeName.toLowerCase() && (m = h("input", m.parentNode)[0]), !h.datepicker._isDisabledDatepicker(m) && h.datepicker._lastInput !== m) {
                var l, e, v, p, q, k, s;
                l = h.datepicker._getInst(m), h.datepicker._curInst && h.datepicker._curInst !== l && (h.datepicker._curInst.dpDiv.stop(!0, !0), l && h.datepicker._datepickerShowing && h.datepicker._hideDatepicker(h.datepicker._curInst.input[0])), e = h.datepicker._get(l, "beforeShow"), v = e ? e.apply(m, [m, l]) : {}, v !== !1 && (f(l.settings, v), l.lastVal = null, h.datepicker._lastInput = m, h.datepicker._setDateFromField(l), h.datepicker._inDialog && (m.value = ""), h.datepicker._pos || (h.datepicker._pos = h.datepicker._findPos(m), h.datepicker._pos[1] += m.offsetHeight), p = !1, h(m).parents().each(function() {
                    return p |= "fixed" === h(this).css("position"), !p
                }), q = {
                    left: h.datepicker._pos[0],
                    top: h.datepicker._pos[1]
                }, h.datepicker._pos = null, l.dpDiv.empty(), l.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), h.datepicker._updateDatepicker(l), q = h.datepicker._checkOffset(l, q, p), l.dpDiv.css({
                    position: h.datepicker._inDialog && h.blockUI ? "static" : p ? "fixed" : "absolute",
                    display: "none",
                    left: q.left + "px",
                    top: q.top + "px"
                }), l.inline || (k = h.datepicker._get(l, "showAnim"), s = h.datepicker._get(l, "duration"), l.dpDiv.zIndex(h(m).zIndex() + 1), h.datepicker._datepickerShowing = !0, h.effects && h.effects.effect[k] ? l.dpDiv.show(k, h.datepicker._get(l, "showOptions"), s) : l.dpDiv[k || "show"](k ? s : null), h.datepicker._shouldFocusInput(l) && l.input.focus(), h.datepicker._curInst = l))
            }
        },
        _updateDatepicker: function(l) {
            this.maxRows = 4, j = l, l.dpDiv.empty().append(this._generateHTML(l)), this._attachHandlers(l), l.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var k, e = this._getNumberOfMonths(l),
                m = e[1],
                n = 17;
            l.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), m > 1 && l.dpDiv.addClass("ui-datepicker-multi-" + m).css("width", n * m + "em"), l.dpDiv[(1 !== e[0] || 1 !== e[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), l.dpDiv[(this._get(l, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), l === h.datepicker._curInst && h.datepicker._datepickerShowing && h.datepicker._shouldFocusInput(l) && l.input.focus(), l.yearshtml && (k = l.yearshtml, setTimeout(function() {
                k === l.yearshtml && l.yearshtml && l.dpDiv.find("select.ui-datepicker-year:first").replaceWith(l.yearshtml), k = l.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(a) {
            return a.input && a.input.is(":visible") && !a.input.is(":disabled") && !a.input.is(":focus")
        },
        _checkOffset: function(w, m, q) {
            var x = w.dpDiv.outerWidth(),
                l = w.dpDiv.outerHeight(),
                e = w.input ? w.input.outerWidth() : 0,
                k = w.input ? w.input.outerHeight() : 0,
                v = document.documentElement.clientWidth + (q ? 0 : h(document).scrollLeft()),
                p = document.documentElement.clientHeight + (q ? 0 : h(document).scrollTop());
            return m.left -= this._get(w, "isRTL") ? x - e : 0, m.left -= q && m.left === w.input.offset().left ? h(document).scrollLeft() : 0, m.top -= q && m.top === w.input.offset().top + k ? h(document).scrollTop() : 0, m.left -= Math.min(m.left, m.left + x > v && v > x ? Math.abs(m.left + x - v) : 0), m.top -= Math.min(m.top, m.top + l > p && p > l ? Math.abs(l + k) : 0), m
        },
        _findPos: function(l) {
            for (var k, e = this._getInst(l), m = this._get(e, "isRTL"); l && ("hidden" === l.type || 1 !== l.nodeType || h.expr.filters.hidden(l));) {
                l = l[m ? "previousSibling" : "nextSibling"]
            }
            return k = h(l).offset(), [k.left, k.top]
        },
        _hideDatepicker: function(l) {
            var k, e, m, q, p = this._curInst;
            !p || l && p !== h.data(l, g) || this._datepickerShowing && (k = this._get(p, "showAnim"), e = this._get(p, "duration"), m = function() {
                h.datepicker._tidyDialog(p)
            }, h.effects && (h.effects.effect[k] || h.effects[k]) ? p.dpDiv.hide(k, h.datepicker._get(p, "showOptions"), e, m) : p.dpDiv["slideDown" === k ? "slideUp" : "fadeIn" === k ? "fadeOut" : "hide"](k ? e : null, m), k || m(), this._datepickerShowing = !1, q = this._get(p, "onClose"), q && q.apply(p.input ? p.input[0] : null, [p.input ? p.input.val() : "", p]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), h.blockUI && (h.unblockUI(), h("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(a) {
            a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(l) {
            if (h.datepicker._curInst) {
                var k = h(l.target),
                    e = h.datepicker._getInst(k[0]);
                (k[0].id !== h.datepicker._mainDivId && 0 === k.parents("#" + h.datepicker._mainDivId).length && !k.hasClass(h.datepicker.markerClassName) && !k.closest("." + h.datepicker._triggerClass).length && h.datepicker._datepickerShowing && (!h.datepicker._inDialog || !h.blockUI) || k.hasClass(h.datepicker.markerClassName) && h.datepicker._curInst !== e) && h.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(l, k, e) {
            var m = h(l),
                o = this._getInst(m[0]);
            this._isDisabledDatepicker(m[0]) || (this._adjustInstDate(o, k + ("M" === e ? this._get(o, "showCurrentAtPos") : 0), e), this._updateDatepicker(o))
        },
        _gotoToday: function(l) {
            var k, e = h(l),
                m = this._getInst(e[0]);
            this._get(m, "gotoCurrent") && m.currentDay ? (m.selectedDay = m.currentDay, m.drawMonth = m.selectedMonth = m.currentMonth, m.drawYear = m.selectedYear = m.currentYear) : (k = new Date, m.selectedDay = k.getDate(), m.drawMonth = m.selectedMonth = k.getMonth(), m.drawYear = m.selectedYear = k.getFullYear()), this._notifyChange(m), this._adjustDate(e)
        },
        _selectMonthYear: function(l, k, e) {
            var m = h(l),
                o = this._getInst(m[0]);
            o["selected" + ("M" === e ? "Month" : "Year")] = o["draw" + ("M" === e ? "Month" : "Year")] = parseInt(k.options[k.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(m)
        },
        _selectDay: function(l, k, e, m) {
            var p, o = h(l);
            h(m).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (p = this._getInst(o[0]), p.selectedDay = p.currentDay = h("a", m).html(), p.selectedMonth = p.currentMonth = k, p.selectedYear = p.currentYear = e, this._selectDate(l, this._formatDate(p, p.currentDay, p.currentMonth, p.currentYear)))
        },
        _clearDate: function(e) {
            var a = h(e);
            this._selectDate(a, "")
        },
        _selectDate: function(l, k) {
            var e, m = h(l),
                o = this._getInst(m[0]);
            k = null != k ? k : this._formatDate(o), o.input && o.input.val(k), this._updateAlternate(o), e = this._get(o, "onSelect"), e ? e.apply(o.input ? o.input[0] : null, [k, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(l) {
            var k, e, m, o = this._get(l, "altField");
            o && (k = this._get(l, "altFormat") || this._get(l, "dateFormat"), e = this._getDate(l), m = this.formatDate(k, e, this._getFormatConfig(l)), h(o).each(function() {
                h(this).val(m)
            }))
        },
        noWeekends: function(i) {
            var a = i.getDay();
            return [a > 0 && 6 > a, ""]
        },
        iso8601Week: function(l) {
            var k, a = new Date(l.getTime());
            return a.setDate(a.getDate() + 4 - (a.getDay() || 7)), k = a.getTime(), a.setMonth(0), a.setDate(1), Math.floor(Math.round((k - a) / 86400000) / 7) + 1
        },
        parseDate: function(K, S, B) {
            if (null == K || null == S) {
                throw "Invalid arguments"
            }
            if (S = "object" == typeof S ? "" + S : S + "", "" === S) {
                return null
            }
            var G, C, F, z, Q = 0,
                L = (B ? B.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                I = "string" != typeof L ? L : (new Date).getFullYear() % 100 + parseInt(L, 10),
                P = (B ? B.dayNamesShort : null) || this._defaults.dayNamesShort,
                E = (B ? B.dayNames : null) || this._defaults.dayNames,
                N = (B ? B.monthNamesShort : null) || this._defaults.monthNamesShort,
                H = (B ? B.monthNames : null) || this._defaults.monthNames,
                O = -1,
                T = -1,
                x = -1,
                J = -1,
                q = !1,
                R = function(i) {
                    var a = K.length > G + 1 && K.charAt(G + 1) === i;
                    return a && G++, a
                },
                A = function(m) {
                    var k = R(m),
                        a = "@" === m ? 14 : "!" === m ? 20 : "y" === m && k ? 4 : "o" === m ? 3 : 2,
                        l = RegExp("^\\d{1," + a + "}"),
                        o = S.substring(Q).match(l);
                    if (!o) {
                        throw "Missing number at position " + Q
                    }
                    return Q += o[0].length, parseInt(o[0], 10)
                },
                t = function(a, k, p) {
                    var l = -1,
                        m = h.map(R(a) ? p : k, function(n, i) {
                            return [
                                [i, n]
                            ]
                        }).sort(function(n, i) {
                            return -(n[1].length - i[1].length)
                        });
                    if (h.each(m, function(r, n) {
                            var o = n[1];
                            return S.substr(Q, o.length).toLowerCase() === o.toLowerCase() ? (l = n[0], Q += o.length, !1) : d
                        }), -1 !== l) {
                        return l + 1
                    }
                    throw "Unknown name at position " + Q
                },
                e = function() {
                    if (S.charAt(Q) !== K.charAt(G)) {
                        throw "Unexpected literal at position " + Q
                    }
                    Q++
                };
            for (G = 0; K.length > G; G++) {
                if (q) {
                    "'" !== K.charAt(G) || R("'") ? e() : q = !1
                } else {
                    switch (K.charAt(G)) {
                        case "d":
                            x = A("d");
                            break;
                        case "D":
                            t("D", P, E);
                            break;
                        case "o":
                            J = A("o");
                            break;
                        case "m":
                            T = A("m");
                            break;
                        case "M":
                            T = t("M", N, H);
                            break;
                        case "y":
                            O = A("y");
                            break;
                        case "@":
                            z = new Date(A("@")), O = z.getFullYear(), T = z.getMonth() + 1, x = z.getDate();
                            break;
                        case "!":
                            z = new Date((A("!") - this._ticksTo1970) / 10000), O = z.getFullYear(), T = z.getMonth() + 1, x = z.getDate();
                            break;
                        case "'":
                            R("'") ? e() : q = !0;
                            break;
                        default:
                            e()
                    }
                }
            }
            if (S.length > Q && (F = S.substr(Q), !/^\s+/.test(F))) {
                throw "Extra/unparsed characters found in date: " + F
            }
            if (-1 === O ? O = (new Date).getFullYear() : 100 > O && (O += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (I >= O ? 0 : -100)), J > -1) {
                for (T = 1, x = J;;) {
                    if (C = this._getDaysInMonth(O, T - 1), C >= x) {
                        break
                    }
                    T++, x -= C
                }
            }
            if (z = this._daylightSavingAdjust(new Date(O, T - 1, x)), z.getFullYear() !== O || z.getMonth() + 1 !== T || z.getDate() !== x) {
                throw "Invalid date"
            }
            return z
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 10000000 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(x, C, v) {
            if (!C) {
                return ""
            }
            var A, D = (v ? v.dayNamesShort : null) || this._defaults.dayNamesShort,
                p = (v ? v.dayNames : null) || this._defaults.dayNames,
                k = (v ? v.monthNamesShort : null) || this._defaults.monthNamesShort,
                m = (v ? v.monthNames : null) || this._defaults.monthNames,
                B = function(e) {
                    var a = x.length > A + 1 && x.charAt(A + 1) === e;
                    return a && A++, a
                },
                z = function(r, o, n) {
                    var l = "" + o;
                    if (B(r)) {
                        for (; n > l.length;) {
                            l = "0" + l
                        }
                    }
                    return l
                },
                w = function(r, o, n, l) {
                    return B(r) ? l[o] : n[o]
                },
                q = "",
                y = !1;
            if (C) {
                for (A = 0; x.length > A; A++) {
                    if (y) {
                        "'" !== x.charAt(A) || B("'") ? q += x.charAt(A) : y = !1
                    } else {
                        switch (x.charAt(A)) {
                            case "d":
                                q += z("d", C.getDate(), 2);
                                break;
                            case "D":
                                q += w("D", C.getDay(), D, p);
                                break;
                            case "o":
                                q += z("o", Math.round((new Date(C.getFullYear(), C.getMonth(), C.getDate()).getTime() - new Date(C.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                                break;
                            case "m":
                                q += z("m", C.getMonth() + 1, 2);
                                break;
                            case "M":
                                q += w("M", C.getMonth(), k, m);
                                break;
                            case "y":
                                q += B("y") ? C.getFullYear() : (10 > C.getYear() % 100 ? "0" : "") + C.getYear() % 100;
                                break;
                            case "@":
                                q += C.getTime();
                                break;
                            case "!":
                                q += 10000 * C.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                B("'") ? q += "'" : y = !0;
                                break;
                            default:
                                q += x.charAt(A)
                        }
                    }
                }
            }
            return q
        },
        _possibleChars: function(o) {
            var m, l = "",
                k = !1,
                n = function(p) {
                    var e = o.length > m + 1 && o.charAt(m + 1) === p;
                    return e && m++, e
                };
            for (m = 0; o.length > m; m++) {
                if (k) {
                    "'" !== o.charAt(m) || n("'") ? l += o.charAt(m) : k = !1
                } else {
                    switch (o.charAt(m)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            l += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            n("'") ? l += "'" : k = !0;
                            break;
                        default:
                            l += o.charAt(m)
                    }
                }
            }
            return l
        },
        _get: function(k, a) {
            return k.settings[a] !== d ? k.settings[a] : this._defaults[a]
        },
        _setDateFromField: function(u, m) {
            if (u.input.val() !== u.lastVal) {
                var l = this._get(u, "dateFormat"),
                    k = u.lastVal = u.input ? u.input.val() : null,
                    p = this._getDefaultDate(u),
                    w = p,
                    q = this._getFormatConfig(u);
                try {
                    w = this.parseDate(l, k, q) || p
                } catch (v) {
                    k = m ? "" : k
                }
                u.selectedDay = w.getDate(), u.drawMonth = u.selectedMonth = w.getMonth(), u.drawYear = u.selectedYear = w.getFullYear(), u.currentDay = k ? w.getDate() : 0, u.currentMonth = k ? w.getMonth() : 0, u.currentYear = k ? w.getFullYear() : 0, this._adjustInstDate(u)
            }
        },
        _getDefaultDate: function(a) {
            return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
        },
        _determineDate: function(l, k, e) {
            var m = function(i) {
                    var a = new Date;
                    return a.setDate(a.getDate() + i), a
                },
                p = function(v) {
                    try {
                        return h.datepicker.parseDate(h.datepicker._get(l, "dateFormat"), v, h.datepicker._getFormatConfig(l))
                    } catch (q) {}
                    for (var w = (v.toLowerCase().match(/^c/) ? h.datepicker._getDate(l) : null) || new Date, A = w.getFullYear(), x = w.getMonth(), y = w.getDate(), t = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, z = t.exec(v); z;) {
                        switch (z[2] || "d") {
                            case "d":
                            case "D":
                                y += parseInt(z[1], 10);
                                break;
                            case "w":
                            case "W":
                                y += 7 * parseInt(z[1], 10);
                                break;
                            case "m":
                            case "M":
                                x += parseInt(z[1], 10), y = Math.min(y, h.datepicker._getDaysInMonth(A, x));
                                break;
                            case "y":
                            case "Y":
                                A += parseInt(z[1], 10), y = Math.min(y, h.datepicker._getDaysInMonth(A, x))
                        }
                        z = t.exec(v)
                    }
                    return new Date(A, x, y)
                },
                o = null == k || "" === k ? e : "string" == typeof k ? p(k) : "number" == typeof k ? isNaN(k) ? e : m(k) : new Date(k.getTime());
            return o = o && "Invalid Date" == "" + o ? e : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
        },
        _daylightSavingAdjust: function(a) {
            return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null
        },
        _setDate: function(q, m, l) {
            var k = !m,
                o = q.selectedMonth,
                u = q.selectedYear,
                p = this._restrictMinMax(q, this._determineDate(q, m, new Date));
            q.selectedDay = q.currentDay = p.getDate(), q.drawMonth = q.selectedMonth = q.currentMonth = p.getMonth(), q.drawYear = q.selectedYear = q.currentYear = p.getFullYear(), o === q.selectedMonth && u === q.selectedYear || l || this._notifyChange(q), this._adjustInstDate(q), q.input && q.input.val(k ? "" : this._formatDate(q))
        },
        _getDate: function(i) {
            var a = !i.currentYear || i.input && "" === i.input.val() ? null : this._daylightSavingAdjust(new Date(i.currentYear, i.currentMonth, i.currentDay));
            return a
        },
        _attachHandlers: function(l) {
            var k = this._get(l, "stepMonths"),
                e = "#" + l.id.replace(/\\\\/g, "\\");
            l.dpDiv.find("[data-handler]").map(function() {
                var a = {
                    prev: function() {
                        h.datepicker._adjustDate(e, -k, "M")
                    },
                    next: function() {
                        h.datepicker._adjustDate(e, +k, "M")
                    },
                    hide: function() {
                        h.datepicker._hideDatepicker()
                    },
                    today: function() {
                        h.datepicker._gotoToday(e)
                    },
                    selectDay: function() {
                        return h.datepicker._selectDay(e, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return h.datepicker._selectMonthYear(e, this, "M"), !1
                    },
                    selectYear: function() {
                        return h.datepicker._selectMonthYear(e, this, "Y"), !1
                    }
                };
                h(this).bind(this.getAttribute("data-event"), a[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(aY) {
            var aI, aU, a2, aJ, aP, aK, aO, aH, a0, aV, aR, aZ, aN, aW, aQ, aX, a3, aG, aS, aD, a1, ax, aF, an, ay, aE, ar, am, ag, aA, aw, ah, ab, av, ak, al, aT, ap, ai, at = new Date,
                ad = this._daylightSavingAdjust(new Date(at.getFullYear(), at.getMonth(), at.getDate())),
                ao = this._get(aY, "isRTL"),
                af = this._get(aY, "showButtonPanel"),
                az = this._get(aY, "hideIfNoPrevNext"),
                aC = this._get(aY, "navigationAsDateFormat"),
                aL = this._getNumberOfMonths(aY),
                au = this._get(aY, "showCurrentAtPos"),
                aq = this._get(aY, "stepMonths"),
                aj = 1 !== aL[0] || 1 !== aL[1],
                ae = this._daylightSavingAdjust(aY.currentDay ? new Date(aY.currentYear, aY.currentMonth, aY.currentDay) : new Date(9999, 9, 9)),
                aB = this._getMinMaxDate(aY, "min"),
                ac = this._getMinMaxDate(aY, "max"),
                aa = aY.drawMonth - au,
                aM = aY.drawYear;
            if (0 > aa && (aa += 12, aM--), ac) {
                for (aI = this._daylightSavingAdjust(new Date(ac.getFullYear(), ac.getMonth() - aL[0] * aL[1] + 1, ac.getDate())), aI = aB && aB > aI ? aB : aI; this._daylightSavingAdjust(new Date(aM, aa, 1)) > aI;) {
                    aa--, 0 > aa && (aa = 11, aM--)
                }
            }
            for (aY.drawMonth = aa, aY.drawYear = aM, aU = this._get(aY, "prevText"), aU = aC ? this.formatDate(aU, this._daylightSavingAdjust(new Date(aM, aa - aq, 1)), this._getFormatConfig(aY)) : aU, a2 = this._canAdjustMonth(aY, -1, aM, aa) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + aU + "'><span class='ui-icon ui-icon-circle-triangle-" + (ao ? "e" : "w") + "'>" + aU + "</span></a>" : az ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + aU + "'><span class='ui-icon ui-icon-circle-triangle-" + (ao ? "e" : "w") + "'>" + aU + "</span></a>", aJ = this._get(aY, "nextText"), aJ = aC ? this.formatDate(aJ, this._daylightSavingAdjust(new Date(aM, aa + aq, 1)), this._getFormatConfig(aY)) : aJ, aP = this._canAdjustMonth(aY, 1, aM, aa) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + aJ + "'><span class='ui-icon ui-icon-circle-triangle-" + (ao ? "w" : "e") + "'>" + aJ + "</span></a>" : az ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + aJ + "'><span class='ui-icon ui-icon-circle-triangle-" + (ao ? "w" : "e") + "'>" + aJ + "</span></a>", aK = this._get(aY, "currentText"), aO = this._get(aY, "gotoCurrent") && aY.currentDay ? ae : ad, aK = aC ? this.formatDate(aK, aO, this._getFormatConfig(aY)) : aK, aH = aY.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(aY, "closeText") + "</button>", a0 = af ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (ao ? aH : "") + (this._isInRange(aY, aO) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + aK + "</button>" : "") + (ao ? "" : aH) + "</div>" : "", aV = parseInt(this._get(aY, "firstDay"), 10), aV = isNaN(aV) ? 0 : aV, aR = this._get(aY, "showWeek"), aZ = this._get(aY, "dayNames"), aN = this._get(aY, "dayNamesMin"), aW = this._get(aY, "monthNames"), aQ = this._get(aY, "monthNamesShort"), aX = this._get(aY, "beforeShowDay"), a3 = this._get(aY, "showOtherMonths"), aG = this._get(aY, "selectOtherMonths"), aS = this._getDefaultDate(aY), aD = "", ax = 0; aL[0] > ax; ax++) {
                for (aF = "", this.maxRows = 4, an = 0; aL[1] > an; an++) {
                    if (ay = this._daylightSavingAdjust(new Date(aM, aa, aY.selectedDay)), aE = " ui-corner-all", ar = "", aj) {
                        if (ar += "<div class='ui-datepicker-group", aL[1] > 1) {
                            switch (an) {
                                case 0:
                                    ar += " ui-datepicker-group-first", aE = " ui-corner-" + (ao ? "right" : "left");
                                    break;
                                case aL[1] - 1:
                                    ar += " ui-datepicker-group-last", aE = " ui-corner-" + (ao ? "left" : "right");
                                    break;
                                default:
                                    ar += " ui-datepicker-group-middle", aE = ""
                            }
                        }
                        ar += "'>"
                    }
                    for (ar += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + aE + "'>" + (/all|left/.test(aE) && 0 === ax ? ao ? aP : a2 : "") + (/all|right/.test(aE) && 0 === ax ? ao ? a2 : aP : "") + this._generateMonthYearHeader(aY, aa, aM, aB, ac, ax > 0 || an > 0, aW, aQ) + "</div><table class='ui-datepicker-calendar'><thead><tr>", am = aR ? "<th class='ui-datepicker-week-col'>" + this._get(aY, "weekHeader") + "</th>" : "", a1 = 0; 7 > a1; a1++) {
                        ag = (a1 + aV) % 7, am += "<th" + ((a1 + aV + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + aZ[ag] + "'>" + aN[ag] + "</span></th>"
                    }
                    for (ar += am + "</tr></thead><tbody>", aA = this._getDaysInMonth(aM, aa), aM === aY.selectedYear && aa === aY.selectedMonth && (aY.selectedDay = Math.min(aY.selectedDay, aA)), aw = (this._getFirstDayOfMonth(aM, aa) - aV + 7) % 7, ah = Math.ceil((aw + aA) / 7), ab = aj ? this.maxRows > ah ? this.maxRows : ah : ah, this.maxRows = ab, av = this._daylightSavingAdjust(new Date(aM, aa, 1 - aw)), ak = 0; ab > ak; ak++) {
                        for (ar += "<tr>", al = aR ? "<td class='ui-datepicker-week-col'>" + this._get(aY, "calculateWeek")(av) + "</td>" : "", a1 = 0; 7 > a1; a1++) {
                            aT = aX ? aX.apply(aY.input ? aY.input[0] : null, [av]) : [!0, ""], ap = av.getMonth() !== aa, ai = ap && !aG || !aT[0] || aB && aB > av || ac && av > ac, al += "<td class='" + ((a1 + aV + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (ap ? " ui-datepicker-other-month" : "") + (av.getTime() === ay.getTime() && aa === aY.selectedMonth && aY._keyEvent || aS.getTime() === av.getTime() && aS.getTime() === ay.getTime() ? " " + this._dayOverClass : "") + (ai ? " " + this._unselectableClass + " ui-state-disabled" : "") + (ap && !a3 ? "" : " " + aT[1] + (av.getTime() === ae.getTime() ? " " + this._currentClass : "") + (av.getTime() === ad.getTime() ? " ui-datepicker-today" : "")) + "'" + (ap && !a3 || !aT[2] ? "" : " title='" + aT[2].replace(/'/g, "&#39;") + "'") + (ai ? "" : " data-handler='selectDay' data-event='click' data-month='" + av.getMonth() + "' data-year='" + av.getFullYear() + "'") + ">" + (ap && !a3 ? "&#xa0;" : ai ? "<span class='ui-state-default'>" + av.getDate() + "</span>" : "<a class='ui-state-default" + (av.getTime() === ad.getTime() ? " ui-state-highlight" : "") + (av.getTime() === ae.getTime() ? " ui-state-active" : "") + (ap ? " ui-priority-secondary" : "") + "' href='#'>" + av.getDate() + "</a>") + "</td>", av.setDate(av.getDate() + 1), av = this._daylightSavingAdjust(av)
                        }
                        ar += al + "</tr>"
                    }
                    aa++, aa > 11 && (aa = 0, aM++), ar += "</tbody></table>" + (aj ? "</div>" + (aL[0] > 0 && an === aL[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), aF += ar
                }
                aD += aF
            }
            return aD += a0, aY._keyEvent = !1, aD
        },
        _generateMonthYearHeader: function(M, z, I, P, A, E, B, D) {
            var x, O, J, G, N, C, K, F, L = this._get(M, "changeMonth"),
                Q = this._get(M, "changeYear"),
                w = this._get(M, "showMonthAfterYear"),
                H = "<div class='ui-datepicker-title'>",
                q = "";
            if (E || !L) {
                q += "<span class='ui-datepicker-month'>" + B[z] + "</span>"
            } else {
                for (x = P && P.getFullYear() === I, O = A && A.getFullYear() === I, q += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", J = 0; 12 > J; J++) {
                    (!x || J >= P.getMonth()) && (!O || A.getMonth() >= J) && (q += "<option value='" + J + "'" + (J === z ? " selected='selected'" : "") + ">" + D[J] + "</option>")
                }
                q += "</select>"
            }
            if (w || (H += q + (!E && L && Q ? "" : "&#xa0;")), !M.yearshtml) {
                if (M.yearshtml = "", E || !Q) {
                    H += "<span class='ui-datepicker-year'>" + I + "</span>"
                } else {
                    for (G = this._get(M, "yearRange").split(":"), N = (new Date).getFullYear(), C = function(i) {
                            var a = i.match(/c[+\-].*/) ? I + parseInt(i.substring(1), 10) : i.match(/[+\-].*/) ? N + parseInt(i, 10) : parseInt(i, 10);
                            return isNaN(a) ? N : a
                        }, K = C(G[0]), F = Math.max(K, C(G[1] || "")), K = P ? Math.max(K, P.getFullYear()) : K, F = A ? Math.min(F, A.getFullYear()) : F, M.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; F >= K; K++) {
                        M.yearshtml += "<option value='" + K + "'" + (K === I ? " selected='selected'" : "") + ">" + K + "</option>"
                    }
                    M.yearshtml += "</select>", H += M.yearshtml, M.yearshtml = null
                }
            }
            return H += this._get(M, "yearSuffix"), w && (H += (!E && L && Q ? "" : "&#xa0;") + q), H += "</div>"
        },
        _adjustInstDate: function(q, m, l) {
            var k = q.drawYear + ("Y" === l ? m : 0),
                o = q.drawMonth + ("M" === l ? m : 0),
                u = Math.min(q.selectedDay, this._getDaysInMonth(k, o)) + ("D" === l ? m : 0),
                p = this._restrictMinMax(q, this._daylightSavingAdjust(new Date(k, o, u)));
            q.selectedDay = p.getDate(), q.drawMonth = q.selectedMonth = p.getMonth(), q.drawYear = q.selectedYear = p.getFullYear(), ("M" === l || "Y" === l) && this._notifyChange(q)
        },
        _restrictMinMax: function(o, m) {
            var l = this._getMinMaxDate(o, "min"),
                k = this._getMinMaxDate(o, "max"),
                n = l && l > m ? l : m;
            return k && n > k ? k : n
        },
        _notifyChange: function(i) {
            var a = this._get(i, "onChangeMonthYear");
            a && a.apply(i.input ? i.input[0] : null, [i.selectedYear, i.selectedMonth + 1, i])
        },
        _getNumberOfMonths: function(i) {
            var a = this._get(i, "numberOfMonths");
            return null == a ? [1, 1] : "number" == typeof a ? [1, a] : a
        },
        _getMinMaxDate: function(i, a) {
            return this._determineDate(i, this._get(i, a + "Date"), null)
        },
        _getDaysInMonth: function(i, a) {
            return 32 - this._daylightSavingAdjust(new Date(i, a, 32)).getDate()
        },
        _getFirstDayOfMonth: function(i, a) {
            return new Date(i, a, 1).getDay()
        },
        _canAdjustMonth: function(p, m, l, k) {
            var o = this._getNumberOfMonths(p),
                q = this._daylightSavingAdjust(new Date(l, k + (0 > m ? m : o[0] * o[1]), 1));
            return 0 > m && q.setDate(this._getDaysInMonth(q.getFullYear(), q.getMonth())), this._isInRange(p, q)
        },
        _isInRange: function(q, x) {
            var p, v, y = this._getMinMaxDate(q, "min"),
                m = this._getMinMaxDate(q, "max"),
                k = null,
                l = null,
                w = this._get(q, "yearRange");
            return w && (p = w.split(":"), v = (new Date).getFullYear(), k = parseInt(p[0], 10), l = parseInt(p[1], 10), p[0].match(/[+\-].*/) && (k += v), p[1].match(/[+\-].*/) && (l += v)), (!y || x.getTime() >= y.getTime()) && (!m || x.getTime() <= m.getTime()) && (!k || x.getFullYear() >= k) && (!l || l >= x.getFullYear())
        },
        _getFormatConfig: function(i) {
            var a = this._get(i, "shortYearCutoff");
            return a = "string" != typeof a ? a : (new Date).getFullYear() % 100 + parseInt(a, 10), {
                shortYearCutoff: a,
                dayNamesShort: this._get(i, "dayNamesShort"),
                dayNames: this._get(i, "dayNames"),
                monthNamesShort: this._get(i, "monthNamesShort"),
                monthNames: this._get(i, "monthNames")
            }
        },
        _formatDate: function(o, m, l, k) {
            m || (o.currentDay = o.selectedDay, o.currentMonth = o.selectedMonth, o.currentYear = o.selectedYear);
            var n = m ? "object" == typeof m ? m : this._daylightSavingAdjust(new Date(k, l, m)) : this._daylightSavingAdjust(new Date(o.currentYear, o.currentMonth, o.currentDay));
            return this.formatDate(this._get(o, "dateFormat"), n, this._getFormatConfig(o))
        }
    }), h.fn.datepicker = function(e) {
        if (!this.length) {
            return this
        }
        h.datepicker.initialized || (h(document).mousedown(h.datepicker._checkExternalClick), h.datepicker.initialized = !0), 0 === h("#" + h.datepicker._mainDivId).length && h("body").append(h.datepicker.dpDiv);
        var a = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? h.datepicker["_" + e + "Datepicker"].apply(h.datepicker, [this[0]].concat(a)) : this.each(function() {
            "string" == typeof e ? h.datepicker["_" + e + "Datepicker"].apply(h.datepicker, [this].concat(a)) : h.datepicker._attachDatepicker(this, e)
        }) : h.datepicker["_" + e + "Datepicker"].apply(h.datepicker, [this[0]].concat(a))
    }, h.datepicker = new c, h.datepicker.initialized = !1, h.datepicker.uuid = (new Date).getTime(), h.datepicker.version = "1.10.4"
})(jQuery);
(function(c) {
    var b = {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        a = {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        };
    c.widget("ui.dialog", {
        version: "1.10.4",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(e) {
                    var d = c(this).css(e).offset().top;
                    0 > d && c(this).css("top", e.top - d)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && c.fn.draggable && this._makeDraggable(), this.options.resizable && c.fn.resizable && this._makeResizable(), this._isOpen = !1
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var d = this.options.appendTo;
            return d && (d.jquery || d.nodeType) ? c(d) : this.document.find(d || "body").eq(0)
        },
        _destroy: function() {
            var f, d = this.originalPosition;
            this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), f = d.parent.children().eq(d.index), f.length && f[0] !== this.element[0] ? f.before(this.element) : d.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: c.noop,
        enable: c.noop,
        close: function(f) {
            var e, d = this;
            if (this._isOpen && this._trigger("beforeClose", f) !== !1) {
                if (this._isOpen = !1, this._destroyOverlay(), !this.opener.filter(":focusable").focus().length) {
                    try {
                        e = this.document[0].activeElement, e && "body" !== e.nodeName.toLowerCase() && c(e).blur()
                    } catch (g) {}
                }
                this._hide(this.uiDialog, this.options.hide, function() {
                    d._trigger("close", f)
                })
            }
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(g, f) {
            var d = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
            return d && !f && this._trigger("focus", g), d
        },
        open: function() {
            var d = this;
            return this._isOpen ? (this._moveToTop() && this._focusTabbable(), undefined) : (this._isOpen = !0, this.opener = c(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function() {
                d._focusTabbable(), d._trigger("focus")
            }), this._trigger("open"), undefined)
        },
        _focusTabbable: function() {
            var d = this.element.find("[autofocus]");
            d.length || (d = this.element.find(":tabbable")), d.length || (d = this.uiDialogButtonPane.find(":tabbable")), d.length || (d = this.uiDialogTitlebarClose.filter(":tabbable")), d.length || (d = this.uiDialog), d.eq(0).focus()
        },
        _keepFocus: function(e) {
            function d() {
                var g = this.document[0].activeElement,
                    f = this.uiDialog[0] === g || c.contains(this.uiDialog[0], g);
                f || this._focusTabbable()
            }
            e.preventDefault(), d.call(this), this._delay(d)
        },
        _createWrapper: function() {
            this.uiDialog = c("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                keydown: function(f) {
                    if (this.options.closeOnEscape && !f.isDefaultPrevented() && f.keyCode && f.keyCode === c.ui.keyCode.ESCAPE) {
                        return f.preventDefault(), this.close(f), undefined
                    }
                    if (f.keyCode === c.ui.keyCode.TAB) {
                        var e = this.uiDialog.find(":tabbable"),
                            d = e.filter(":first"),
                            g = e.filter(":last");
                        f.target !== g[0] && f.target !== this.uiDialog[0] || f.shiftKey ? f.target !== d[0] && f.target !== this.uiDialog[0] || !f.shiftKey || (g.focus(1), f.preventDefault()) : (d.focus(1), f.preventDefault())
                    }
                },
                mousedown: function(d) {
                    this._moveToTop(d) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var d;
            this.uiDialogTitlebar = c("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                mousedown: function(e) {
                    c(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            }), this.uiDialogTitlebarClose = c("<button type='button'></button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                click: function(f) {
                    f.preventDefault(), this.close(f)
                }
            }), d = c("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(d), this.uiDialog.attr({
                "aria-labelledby": d.attr("id")
            })
        },
        _title: function(d) {
            this.options.title || d.html("&#160;"), d.text(this.options.title)
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = c("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = c("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
        },
        _createButtons: function() {
            var e = this,
                d = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), c.isEmptyObject(d) || c.isArray(d) && !d.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), undefined) : (c.each(d, function(g, f) {
                var h, j;
                f = c.isFunction(f) ? {
                    click: f,
                    text: g
                } : f, f = c.extend({
                    type: "button"
                }, f), h = f.click, f.click = function() {
                    h.apply(e.element[0], arguments)
                }, j = {
                    icons: f.icons,
                    text: f.showText
                }, delete f.icons, delete f.showText, c("<button></button>", f).button(j).appendTo(e.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), undefined)
        },
        _makeDraggable: function() {
            function f(g) {
                return {
                    position: g.position,
                    offset: g.offset
                }
            }
            var e = this,
                d = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(g, h) {
                    c(this).addClass("ui-dialog-dragging"), e._blockFrames(), e._trigger("dragStart", g, f(h))
                },
                drag: function(h, g) {
                    e._trigger("drag", h, f(g))
                },
                stop: function(g, h) {
                    d.position = [h.position.left - e.document.scrollLeft(), h.position.top - e.document.scrollTop()], c(this).removeClass("ui-dialog-dragging"), e._unblockFrames(), e._trigger("dragStop", g, f(h))
                }
            })
        },
        _makeResizable: function() {
            function f(i) {
                return {
                    originalPosition: i.originalPosition,
                    originalSize: i.originalSize,
                    position: i.position,
                    size: i.size
                }
            }
            var e = this,
                d = this.options,
                g = d.resizable,
                j = this.uiDialog.css("position"),
                h = "string" == typeof g ? g : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: d.maxWidth,
                maxHeight: d.maxHeight,
                minWidth: d.minWidth,
                minHeight: this._minHeight(),
                handles: h,
                start: function(i, k) {
                    c(this).addClass("ui-dialog-resizing"), e._blockFrames(), e._trigger("resizeStart", i, f(k))
                },
                resize: function(k, i) {
                    e._trigger("resize", k, f(i))
                },
                stop: function(i, k) {
                    d.height = c(this).height(), d.width = c(this).width(), c(this).removeClass("ui-dialog-resizing"), e._unblockFrames(), e._trigger("resizeStop", i, f(k))
                }
            }).css("position", j)
        },
        _minHeight: function() {
            var d = this.options;
            return "auto" === d.height ? d.minHeight : Math.min(d.minHeight, d.height)
        },
        _position: function() {
            var d = this.uiDialog.is(":visible");
            d || this.uiDialog.show(), this.uiDialog.position(this.options.position), d || this.uiDialog.hide()
        },
        _setOptions: function(d) {
            var e = this,
                g = !1,
                f = {};
            c.each(d, function(i, h) {
                e._setOption(i, h), i in b && (g = !0), i in a && (f[i] = h)
            }), g && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", f)
        },
        _setOption: function(j, g) {
            var f, d, h = this.uiDialog;
            "dialogClass" === j && h.removeClass(this.options.dialogClass).addClass(g), "disabled" !== j && (this._super(j, g), "appendTo" === j && this.uiDialog.appendTo(this._appendTo()), "buttons" === j && this._createButtons(), "closeText" === j && this.uiDialogTitlebarClose.button({
                label: "" + g
            }), "draggable" === j && (f = h.is(":data(ui-draggable)"), f && !g && h.draggable("destroy"), !f && g && this._makeDraggable()), "position" === j && this._position(), "resizable" === j && (d = h.is(":data(ui-resizable)"), d && !g && h.resizable("destroy"), d && "string" == typeof g && h.resizable("option", "handles", g), d || g === !1 || this._makeResizable()), "title" === j && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var h, g, f, d = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), d.minWidth > d.width && (d.width = d.minWidth), h = this.uiDialog.css({
                height: "auto",
                width: d.width
            }).outerHeight(), g = Math.max(0, d.minHeight - h), f = "number" == typeof d.maxHeight ? Math.max(0, d.maxHeight - h) : "none", "auto" === d.height ? this.element.css({
                minHeight: g,
                maxHeight: f,
                height: "auto"
            }) : this.element.height(Math.max(0, d.height - h)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var d = c(this);
                return c("<div>").css({
                    position: "absolute",
                    width: d.outerWidth(),
                    height: d.outerHeight()
                }).appendTo(d.parent()).offset(d.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function(d) {
            return c(d.target).closest(".ui-dialog").length ? !0 : !!c(d.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var e = this,
                    d = this.widgetFullName;
                c.ui.dialog.overlayInstances || this._delay(function() {
                    c.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function(f) {
                        e._allowInteraction(f) || (f.preventDefault(), c(".ui-dialog:visible:last .ui-dialog-content").data(d)._focusTabbable())
                    })
                }), this.overlay = c("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), c.ui.dialog.overlayInstances++
            }
        },
        _destroyOverlay: function() {
            this.options.modal && this.overlay && (c.ui.dialog.overlayInstances--, c.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
        }
    }), c.ui.dialog.overlayInstances = 0, c.uiBackCompat !== !1 && c.widget("ui.dialog", c.ui.dialog, {
        _position: function() {
            var f, e = this.options.position,
                d = [],
                g = [0, 0];
            e ? (("string" == typeof e || "object" == typeof e && "0" in e) && (d = e.split ? e.split(" ") : [e[0], e[1]], 1 === d.length && (d[1] = d[0]), c.each(["left", "top"], function(i, h) {
                +d[i] === d[i] && (g[i] = d[i], d[i] = h)
            }), e = {
                my: d[0] + (0 > g[0] ? g[0] : "+" + g[0]) + " " + d[1] + (0 > g[1] ? g[1] : "+" + g[1]),
                at: d.join(" ")
            }), e = c.extend({}, c.ui.dialog.prototype.options.position, e)) : e = c.ui.dialog.prototype.options.position, f = this.uiDialog.is(":visible"), f || this.uiDialog.show(), this.uiDialog.position(e), f || this.uiDialog.hide()
        }
    })
})(jQuery);
(function(a) {
    a.widget("ui.menu", {
        version: "1.10.4",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, a.proxy(function(b) {
                this.options.disabled && b.preventDefault()
            }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item > a": function(b) {
                    b.preventDefault()
                },
                "click .ui-state-disabled > a": function(b) {
                    b.preventDefault()
                },
                "click .ui-menu-item:has(a)": function(c) {
                    var b = a(c.target).closest(".ui-menu-item");
                    !this.mouseHandled && b.not(".ui-state-disabled").length && (this.select(c), c.isPropagationStopped() || (this.mouseHandled = !0), b.has(".ui-menu").length ? this.expand(c) : !this.element.is(":focus") && a(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(c) {
                    var b = a(c.currentTarget);
                    b.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(c, b)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(c, d) {
                    var b = this.active || this.element.children(".ui-menu-item").eq(0);
                    d || this.focus(c, b)
                },
                blur: function(b) {
                    this._delay(function() {
                        a.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(b)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(b) {
                    a(b.target).closest(".ui-menu").length || this.collapseAll(b), this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var b = a(this);
                b.data("ui-menu-submenu-carat") && b.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(h) {
            function d(e) {
                return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            var f, k, c, j, g, b = !0;
            switch (h.keyCode) {
                case a.ui.keyCode.PAGE_UP:
                    this.previousPage(h);
                    break;
                case a.ui.keyCode.PAGE_DOWN:
                    this.nextPage(h);
                    break;
                case a.ui.keyCode.HOME:
                    this._move("first", "first", h);
                    break;
                case a.ui.keyCode.END:
                    this._move("last", "last", h);
                    break;
                case a.ui.keyCode.UP:
                    this.previous(h);
                    break;
                case a.ui.keyCode.DOWN:
                    this.next(h);
                    break;
                case a.ui.keyCode.LEFT:
                    this.collapse(h);
                    break;
                case a.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(h);
                    break;
                case a.ui.keyCode.ENTER:
                case a.ui.keyCode.SPACE:
                    this._activate(h);
                    break;
                case a.ui.keyCode.ESCAPE:
                    this.collapse(h);
                    break;
                default:
                    b = !1, k = this.previousFilter || "", c = String.fromCharCode(h.keyCode), j = !1, clearTimeout(this.filterTimer), c === k ? j = !0 : c = k + c, g = RegExp("^" + d(c), "i"), f = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return g.test(a(this).children("a").text())
                    }), f = j && -1 !== f.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : f, f.length || (c = String.fromCharCode(h.keyCode), g = RegExp("^" + d(c), "i"), f = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return g.test(a(this).children("a").text())
                    })), f.length ? (this.focus(h, f), f.length > 1 ? (this.previousFilter = c, this.filterTimer = this._delay(function() {
                        delete this.previousFilter
                    }, 1000)) : delete this.previousFilter) : delete this.previousFilter
            }
            b && h.preventDefault()
        },
        _activate: function(b) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(b) : this.select(b))
        },
        refresh: function() {
            var d, b = this.options.icons.submenu,
                c = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), c.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var g = a(this),
                    f = g.prev("a"),
                    h = a("<span>").addClass("ui-menu-icon ui-icon " + b).data("ui-menu-submenu-carat", !0);
                f.attr("aria-haspopup", "true").prepend(h), g.attr("aria-labelledby", f.attr("id"))
            }), d = c.add(this.element), d.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }), d.children(":not(.ui-menu-item)").each(function() {
                var f = a(this);
                /[^\-\u2014\u2013\s]/.test(f.text()) || f.addClass("ui-widget-content ui-menu-divider")
            }), d.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !a.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(b, c) {
            "icons" === b && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(c.submenu), this._super(b, c)
        },
        focus: function(c, f) {
            var b, d;
            this.blur(c, c && "focus" === c.type), this._scrollIntoView(f), this.active = f.first(), d = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", d.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), c && "keydown" === c.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay), b = f.children(".ui-menu"), b.length && c && /^mouse/.test(c.type) && this._startOpening(b), this.activeMenu = f.parent(), this._trigger("focus", c, {
                item: f
            })
        },
        _scrollIntoView: function(g) {
            var c, d, j, b, h, f;
            this._hasScroll() && (c = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0, d = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0, j = g.offset().top - this.activeMenu.offset().top - c - d, b = this.activeMenu.scrollTop(), h = this.activeMenu.height(), f = g.height(), 0 > j ? this.activeMenu.scrollTop(b + j) : j + f > h && this.activeMenu.scrollTop(b + j - h + f))
        },
        blur: function(b, c) {
            c || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", b, {
                item: this.active
            }))
        },
        _startOpening: function(b) {
            clearTimeout(this.timer), "true" === b.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(b)
            }, this.delay))
        },
        _open: function(c) {
            var b = a.extend({ of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(c.parents(".ui-menu")).hide().attr("aria-hidden", "true"), c.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(b)
        },
        collapseAll: function(c, b) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var d = b ? this.element : a(c && c.target).closest(this.element.find(".ui-menu"));
                d.length || (d = this.element), this._close(d), this.blur(c), this.activeMenu = d
            }, this.delay)
        },
        _close: function(b) {
            b || (b = this.active ? this.active.parent() : this.element), b.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function(b) {
            var c = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            c && c.length && (this._close(), this.focus(b, c))
        },
        expand: function(b) {
            var c = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            c && c.length && (this._open(c.parent()), this._delay(function() {
                this.focus(b, c)
            }))
        },
        next: function(b) {
            this._move("next", "first", b)
        },
        previous: function(b) {
            this._move("prev", "last", b)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(c, f, b) {
            var d;
            this.active && (d = "first" === c || "last" === c ? this.active["first" === c ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[c + "All"](".ui-menu-item").eq(0)), d && d.length && this.active || (d = this.activeMenu.children(".ui-menu-item")[f]()), this.focus(b, d)
        },
        nextPage: function(d) {
            var b, c, f;
            return this.active ? (this.isLastItem() || (this._hasScroll() ? (c = this.active.offset().top, f = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return b = a(this), 0 > b.offset().top - c - f
            }), this.focus(d, b)) : this.focus(d, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())), undefined) : (this.next(d), undefined)
        },
        previousPage: function(d) {
            var b, c, f;
            return this.active ? (this.isFirstItem() || (this._hasScroll() ? (c = this.active.offset().top, f = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return b = a(this), b.offset().top - c + f > 0
            }), this.focus(d, b)) : this.focus(d, this.activeMenu.children(".ui-menu-item").first())), undefined) : (this.next(d), undefined)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(c) {
            this.active = this.active || a(c.target).closest(".ui-menu-item");
            var b = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(c, !0), this._trigger("select", c, b)
        }
    })
})(jQuery);
(function(a, b) {
    a.widget("ui.progressbar", {
        version: "1.10.4",
        options: {
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this.valueDiv = a("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
        },
        _destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
        },
        value: function(c) {
            return c === b ? this.options.value : (this.options.value = this._constrainedValue(c), this._refreshValue(), b)
        },
        _constrainedValue: function(c) {
            return c === b && (c = this.options.value), this.indeterminate = c === !1, "number" != typeof c && (c = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, c))
        },
        _setOptions: function(c) {
            var d = c.value;
            delete c.value, this._super(c), this.options.value = this._constrainedValue(d), this._refreshValue()
        },
        _setOption: function(c, d) {
            "max" === c && (d = Math.max(this.min, d)), this._super(c, d)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var d = this.options.value,
                c = this._percentage();
            this.valueDiv.toggle(this.indeterminate || d > this.min).toggleClass("ui-corner-right", d === this.options.max).width(c.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = a("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": d
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== d && (this.oldValue = d, this._trigger("change")), d === this.options.max && this._trigger("complete")
        }
    })
})(jQuery);
(function(a) {
    var b = 5;
    a.widget("ui.slider", a.ui.mouse, {
        version: "1.10.4",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function() {
            var g, d, f = this.options,
                j = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                c = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                h = [];
            for (d = f.values && f.values.length || 1, j.length > d && (j.slice(d).remove(), j = j.slice(0, d)), g = j.length; d > g; g++) {
                h.push(c)
            }
            this.handles = j.add(a(h.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(i) {
                a(this).data("ui-slider-handle-index", i)
            })
        },
        _createRange: function() {
            var d = this.options,
                c = "";
            d.range ? (d.range === !0 && (d.values ? d.values.length && 2 !== d.values.length ? d.values = [d.values[0], d.values[0]] : a.isArray(d.values) && (d.values = d.values.slice(0)) : d.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = a("<div></div>").appendTo(this.element), c = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(c + ("min" === d.range || "max" === d.range ? " ui-slider-range-" + d.range : ""))) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() {
            var c = this.handles.add(this.range).filter("a");
            this._off(c), this._on(c, this._handleEvents), this._hoverable(c), this._focusable(c)
        },
        _destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function(p) {
            var k, w, g, t, f, d, j, m, v = this,
                q = this.options;
            return q.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), k = {
                x: p.pageX,
                y: p.pageY
            }, w = this._normValueFromMouse(k), g = this._valueMax() - this._valueMin() + 1, this.handles.each(function(h) {
                var c = Math.abs(w - v.values(h));
                (g > c || g === c && (h === v._lastChangedValue || v.values(h) === q.min)) && (g = c, t = a(this), f = h)
            }), d = this._start(p, f), d === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = f, t.addClass("ui-state-active").focus(), j = t.offset(), m = !a(p.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = m ? {
                left: 0,
                top: 0
            } : {
                left: p.pageX - j.left - t.width() / 2,
                top: p.pageY - j.top - t.height() / 2 - (parseInt(t.css("borderTopWidth"), 10) || 0) - (parseInt(t.css("borderBottomWidth"), 10) || 0) + (parseInt(t.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(p, f, w), this._animateOff = !0, !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(d) {
            var f = {
                    x: d.pageX,
                    y: d.pageY
                },
                c = this._normValueFromMouse(f);
            return this._slide(d, this._handleIndex, c), !1
        },
        _mouseStop: function(c) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(c, this._handleIndex), this._change(c, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(f) {
            var h, d, g, j, c;
            return "horizontal" === this.orientation ? (h = this.elementSize.width, d = f.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (h = this.elementSize.height, d = f.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), g = d / h, g > 1 && (g = 1), 0 > g && (g = 0), "vertical" === this.orientation && (g = 1 - g), j = this._valueMax() - this._valueMin(), c = this._valueMin() + g * j, this._trimAlignValue(c)
        },
        _start: function(d, f) {
            var c = {
                handle: this.handles[f],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (c.value = this.values(f), c.values = this.values()), this._trigger("start", d, c)
        },
        _slide: function(f, h, d) {
            var g, j, c;
            this.options.values && this.options.values.length ? (g = this.values(h ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === h && d > g || 1 === h && g > d) && (d = g), d !== this.values(h) && (j = this.values(), j[h] = d, c = this._trigger("slide", f, {
                handle: this.handles[h],
                value: d,
                values: j
            }), g = this.values(h ? 0 : 1), c !== !1 && this.values(h, d))) : d !== this.value() && (c = this._trigger("slide", f, {
                handle: this.handles[h],
                value: d
            }), c !== !1 && this.value(d))
        },
        _stop: function(d, f) {
            var c = {
                handle: this.handles[f],
                value: this.value()
            };
            this.options.values && this.options.values.length && (c.value = this.values(f), c.values = this.values()), this._trigger("stop", d, c)
        },
        _change: function(d, f) {
            if (!this._keySliding && !this._mouseSliding) {
                var c = {
                    handle: this.handles[f],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (c.value = this.values(f), c.values = this.values()), this._lastChangedValue = f, this._trigger("change", d, c)
            }
        },
        value: function(c) {
            return arguments.length ? (this.options.value = this._trimAlignValue(c), this._refreshValue(), this._change(null, 0), undefined) : this._value()
        },
        values: function(g, d) {
            var f, h, c;
            if (arguments.length > 1) {
                return this.options.values[g] = this._trimAlignValue(d), this._refreshValue(), this._change(null, g), undefined
            }
            if (!arguments.length) {
                return this._values()
            }
            if (!a.isArray(arguments[0])) {
                return this.options.values && this.options.values.length ? this._values(g) : this.value()
            }
            for (f = this.options.values, h = arguments[0], c = 0; f.length > c; c += 1) {
                f[c] = this._trimAlignValue(h[c]), this._change(null, c)
            }
            this._refreshValue()
        },
        _setOption: function(f, c) {
            var d, g = 0;
            switch ("range" === f && this.options.range === !0 && ("min" === c ? (this.options.value = this._values(0), this.options.values = null) : "max" === c && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), a.isArray(this.options.values) && (g = this.options.values.length), a.Widget.prototype._setOption.apply(this, arguments), f) {
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), d = 0; g > d; d += 1) {
                        this._change(null, d)
                    }
                    this._animateOff = !1;
                    break;
                case "min":
                case "max":
                    this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function() {
            var c = this.options.value;
            return c = this._trimAlignValue(c)
        },
        _values: function(d) {
            var g, c, f;
            if (arguments.length) {
                return g = this.options.values[d], g = this._trimAlignValue(g)
            }
            if (this.options.values && this.options.values.length) {
                for (c = this.options.values.slice(), f = 0; c.length > f; f += 1) {
                    c[f] = this._trimAlignValue(c[f])
                }
                return c
            }
            return []
        },
        _trimAlignValue: function(d) {
            if (this._valueMin() >= d) {
                return this._valueMin()
            }
            if (d >= this._valueMax()) {
                return this._valueMax()
            }
            var g = this.options.step > 0 ? this.options.step : 1,
                c = (d - this._valueMin()) % g,
                f = d - c;
            return 2 * Math.abs(c) >= g && (f += c > 0 ? g : -g), parseFloat(f.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var m, j, t, f, p, d = this.options.range,
                c = this.options,
                g = this,
                k = this._animateOff ? !1 : c.animate,
                q = {};
            this.options.values && this.options.values.length ? this.handles.each(function(e) {
                j = 100 * ((g.values(e) - g._valueMin()) / (g._valueMax() - g._valueMin())), q["horizontal" === g.orientation ? "left" : "bottom"] = j + "%", a(this).stop(1, 1)[k ? "animate" : "css"](q, c.animate), g.options.range === !0 && ("horizontal" === g.orientation ? (0 === e && g.range.stop(1, 1)[k ? "animate" : "css"]({
                    left: j + "%"
                }, c.animate), 1 === e && g.range[k ? "animate" : "css"]({
                    width: j - m + "%"
                }, {
                    queue: !1,
                    duration: c.animate
                })) : (0 === e && g.range.stop(1, 1)[k ? "animate" : "css"]({
                    bottom: j + "%"
                }, c.animate), 1 === e && g.range[k ? "animate" : "css"]({
                    height: j - m + "%"
                }, {
                    queue: !1,
                    duration: c.animate
                }))), m = j
            }) : (t = this.value(), f = this._valueMin(), p = this._valueMax(), j = p !== f ? 100 * ((t - f) / (p - f)) : 0, q["horizontal" === this.orientation ? "left" : "bottom"] = j + "%", this.handle.stop(1, 1)[k ? "animate" : "css"](q, c.animate), "min" === d && "horizontal" === this.orientation && this.range.stop(1, 1)[k ? "animate" : "css"]({
                width: j + "%"
            }, c.animate), "max" === d && "horizontal" === this.orientation && this.range[k ? "animate" : "css"]({
                width: 100 - j + "%"
            }, {
                queue: !1,
                duration: c.animate
            }), "min" === d && "vertical" === this.orientation && this.range.stop(1, 1)[k ? "animate" : "css"]({
                height: j + "%"
            }, c.animate), "max" === d && "vertical" === this.orientation && this.range[k ? "animate" : "css"]({
                height: 100 - j + "%"
            }, {
                queue: !1,
                duration: c.animate
            }))
        },
        _handleEvents: {
            keydown: function(d) {
                var e, h, c, g, f = a(d.target).data("ui-slider-handle-index");
                switch (d.keyCode) {
                    case a.ui.keyCode.HOME:
                    case a.ui.keyCode.END:
                    case a.ui.keyCode.PAGE_UP:
                    case a.ui.keyCode.PAGE_DOWN:
                    case a.ui.keyCode.UP:
                    case a.ui.keyCode.RIGHT:
                    case a.ui.keyCode.DOWN:
                    case a.ui.keyCode.LEFT:
                        if (d.preventDefault(), !this._keySliding && (this._keySliding = !0, a(d.target).addClass("ui-state-active"), e = this._start(d, f), e === !1)) {
                            return
                        }
                }
                switch (g = this.options.step, h = c = this.options.values && this.options.values.length ? this.values(f) : this.value(), d.keyCode) {
                    case a.ui.keyCode.HOME:
                        c = this._valueMin();
                        break;
                    case a.ui.keyCode.END:
                        c = this._valueMax();
                        break;
                    case a.ui.keyCode.PAGE_UP:
                        c = this._trimAlignValue(h + (this._valueMax() - this._valueMin()) / b);
                        break;
                    case a.ui.keyCode.PAGE_DOWN:
                        c = this._trimAlignValue(h - (this._valueMax() - this._valueMin()) / b);
                        break;
                    case a.ui.keyCode.UP:
                    case a.ui.keyCode.RIGHT:
                        if (h === this._valueMax()) {
                            return
                        }
                        c = this._trimAlignValue(h + g);
                        break;
                    case a.ui.keyCode.DOWN:
                    case a.ui.keyCode.LEFT:
                        if (h === this._valueMin()) {
                            return
                        }
                        c = this._trimAlignValue(h - g)
                }
                this._slide(d, f, c)
            },
            click: function(c) {
                c.preventDefault()
            },
            keyup: function(d) {
                var c = a(d.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(d, c), this._change(d, c), a(d.target).removeClass("ui-state-active"))
            }
        }
    })
})(jQuery);
(function(a) {
    function b(c) {
        return function() {
            var d = this.element.val();
            c.apply(this, arguments), this._refresh(), d !== this.element.val() && this._trigger("change")
        }
    }
    a.widget("ui.spinner", {
        version: "1.10.4",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var d = {},
                c = this.element;
            return a.each(["min", "max", "step"], function(e, f) {
                var g = c.attr(f);
                void 0 !== g && g.length && (d[f] = g)
            }), d
        },
        _events: {
            keydown: function(c) {
                this._start(c) && this._keydown(c) && c.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(c) {
                return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", c), void 0)
            },
            mousewheel: function(c, d) {
                if (d) {
                    if (!this.spinning && !this._start(c)) {
                        return !1
                    }
                    this._spin((d > 0 ? 1 : -1) * this.options.step, c), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(c)
                    }, 100), c.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(f) {
                function c() {
                    var e = this.element[0] === this.document[0].activeElement;
                    e || (this.element.focus(), this.previous = d, this._delay(function() {
                        this.previous = d
                    }))
                }
                var d;
                d = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), f.preventDefault(), c.call(this), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur, c.call(this)
                }), this._start(f) !== !1 && this._repeat(null, a(f.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, f)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(c) {
                return a(c.currentTarget).hasClass("ui-state-active") ? this._start(c) === !1 ? !1 : (this._repeat(null, a(c.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, c), void 0) : void 0
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function() {
            var c = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton"), this.buttons = c.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(0.5 * c.height()) && c.height() > 0 && c.height(c.height()), this.options.disabled && this.disable()
        },
        _keydown: function(f) {
            var c = this.options,
                d = a.ui.keyCode;
            switch (f.keyCode) {
                case d.UP:
                    return this._repeat(null, 1, f), !0;
                case d.DOWN:
                    return this._repeat(null, -1, f), !0;
                case d.PAGE_UP:
                    return this._repeat(null, c.page, f), !0;
                case d.PAGE_DOWN:
                    return this._repeat(null, -c.page, f), !0
            }
            return !1
        },
        _uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function() {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
        },
        _start: function(c) {
            return this.spinning || this._trigger("start", c) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
        },
        _repeat: function(d, f, c) {
            d = d || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                this._repeat(40, f, c)
            }, d), this._spin(f * this.options.step, c)
        },
        _spin: function(d, f) {
            var c = this.value() || 0;
            this.counter || (this.counter = 1), c = this._adjustValue(c + d * this._increment(this.counter)), this.spinning && this._trigger("spin", f, {
                value: c
            }) === !1 || (this._value(c), this.counter++)
        },
        _increment: function(d) {
            var c = this.options.incremental;
            return c ? a.isFunction(c) ? c(d) : Math.floor(d * d * d / 50000 - d * d / 500 + 17 * d / 200 + 1) : 1
        },
        _precision: function() {
            var c = this._precisionOf(this.options.step);
            return null !== this.options.min && (c = Math.max(c, this._precisionOf(this.options.min))), c
        },
        _precisionOf: function(d) {
            var f = "" + d,
                c = f.indexOf(".");
            return -1 === c ? 0 : f.length - c - 1
        },
        _adjustValue: function(d) {
            var g, c, f = this.options;
            return g = null !== f.min ? f.min : 0, c = d - g, c = Math.round(c / f.step) * f.step, d = g + c, d = parseFloat(d.toFixed(this._precision())), null !== f.max && d > f.max ? f.max : null !== f.min && f.min > d ? f.min : d
        },
        _stop: function(c) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", c))
        },
        _setOption: function(d, f) {
            if ("culture" === d || "numberFormat" === d) {
                var c = this._parse(this.element.val());
                return this.options[d] = f, this.element.val(this._format(c)), void 0
            }("max" === d || "min" === d || "step" === d) && "string" == typeof f && (f = this._parse(f)), "icons" === d && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(f.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(f.down)), this._super(d, f), "disabled" === d && (f ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
        },
        _setOptions: b(function(c) {
            this._super(c), this._value(this.element.val())
        }),
        _parse: function(c) {
            return "string" == typeof c && "" !== c && (c = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(c, 10, this.options.culture) : +c), "" === c || isNaN(c) ? null : c
        },
        _format: function(c) {
            return "" === c ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(c, this.options.numberFormat, this.options.culture) : c
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        _value: function(d, f) {
            var c;
            "" !== d && (c = this._parse(d), null !== c && (f || (c = this._adjustValue(c)), d = this._format(c))), this.element.val(d), this._refresh()
        },
        _destroy: function() {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
        },
        stepUp: b(function(c) {
            this._stepUp(c)
        }),
        _stepUp: function(c) {
            this._start() && (this._spin((c || 1) * this.options.step), this._stop())
        },
        stepDown: b(function(c) {
            this._stepDown(c)
        }),
        _stepDown: function(c) {
            this._start() && (this._spin((c || 1) * -this.options.step), this._stop())
        },
        pageUp: b(function(c) {
            this._stepUp((c || 1) * this.options.page)
        }),
        pageDown: b(function(c) {
            this._stepDown((c || 1) * this.options.page)
        }),
        value: function(c) {
            return arguments.length ? (b(this._value).call(this, c), void 0) : this._parse(this.element.val())
        },
        widget: function() {
            return this.uiSpinner
        }
    })
})(jQuery);
(function(d, g) {
    function c() {
        return ++h
    }

    function f(a) {
        return a = a.cloneNode(!1), a.hash.length > 1 && decodeURIComponent(a.href.replace(b, "")) === decodeURIComponent(location.href.replace(b, ""))
    }
    var h = 0,
        b = /#.*$/;
    d.widget("ui.tabs", {
        version: "1.10.4",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _create: function() {
            var j = this,
                a = this.options;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", a.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(i) {
                d(this).is(".ui-state-disabled") && i.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                d(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this._processTabs(), a.active = this._initialActive(), d.isArray(a.disabled) && (a.disabled = d.unique(a.disabled.concat(d.map(this.tabs.filter(".ui-state-disabled"), function(e) {
                return j.tabs.index(e)
            }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(a.active) : d(), this._refresh(), this.active.length && this.load(a.active)
        },
        _initialActive: function() {
            var a = this.options.active,
                e = this.options.collapsible,
                j = location.hash.substring(1);
            return null === a && (j && this.tabs.each(function(k, i) {
                return d(i).attr("aria-controls") === j ? (a = k, !1) : g
            }), null === a && (a = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === a || -1 === a) && (a = this.tabs.length ? 0 : !1)), a !== !1 && (a = this.tabs.index(this.tabs.eq(a)), -1 === a && (a = e ? !1 : 0)), !e && a === !1 && this.anchors.length && (a = 0), a
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : d()
            }
        },
        _tabKeydown: function(j) {
            var k = d(this.document[0].activeElement).closest("li"),
                l = this.tabs.index(k),
                e = !0;
            if (!this._handlePageNav(j)) {
                switch (j.keyCode) {
                    case d.ui.keyCode.RIGHT:
                    case d.ui.keyCode.DOWN:
                        l++;
                        break;
                    case d.ui.keyCode.UP:
                    case d.ui.keyCode.LEFT:
                        e = !1, l--;
                        break;
                    case d.ui.keyCode.END:
                        l = this.anchors.length - 1;
                        break;
                    case d.ui.keyCode.HOME:
                        l = 0;
                        break;
                    case d.ui.keyCode.SPACE:
                        return j.preventDefault(), clearTimeout(this.activating), this._activate(l), g;
                    case d.ui.keyCode.ENTER:
                        return j.preventDefault(), clearTimeout(this.activating), this._activate(l === this.options.active ? !1 : l), g;
                    default:
                        return
                }
                j.preventDefault(), clearTimeout(this.activating), l = this._focusNextTab(l, e), j.ctrlKey || (k.attr("aria-selected", "false"), this.tabs.eq(l).attr("aria-selected", "true"), this.activating = this._delay(function() {
                    this.option("active", l)
                }, this.delay))
            }
        },
        _panelKeydown: function(a) {
            this._handlePageNav(a) || a.ctrlKey && a.keyCode === d.ui.keyCode.UP && (a.preventDefault(), this.active.focus())
        },
        _handlePageNav: function(a) {
            return a.altKey && a.keyCode === d.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : a.altKey && a.keyCode === d.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : g
        },
        _findNextTab: function(k, a) {
            function j() {
                return k > l && (k = 0), 0 > k && (k = l), k
            }
            for (var l = this.tabs.length - 1; - 1 !== d.inArray(j(), this.options.disabled);) {
                k = a ? k + 1 : k - 1
            }
            return k
        },
        _focusNextTab: function(a, i) {
            return a = this._findNextTab(a, i), this.tabs.eq(a).focus(), a
        },
        _setOption: function(e, a) {
            return "active" === e ? (this._activate(a), g) : "disabled" === e ? (this._setupDisabled(a), g) : (this._super(e, a), "collapsible" === e && (this.element.toggleClass("ui-tabs-collapsible", a), a || this.options.active !== !1 || this._activate(0)), "event" === e && this._setupEvents(a), "heightStyle" === e && this._setupHeightStyle(a), g)
        },
        _tabId: function(a) {
            return a.attr("aria-controls") || "ui-tabs-" + c()
        },
        _sanitizeSelector: function(a) {
            return a ? a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var j = this.options,
                a = this.tablist.children(":has(a[href])");
            j.disabled = d.map(a.filter(".ui-state-disabled"), function(e) {
                return a.index(e)
            }), this._processTabs(), j.active !== !1 && this.anchors.length ? this.active.length && !d.contains(this.tablist[0], this.active[0]) ? this.tabs.length === j.disabled.length ? (j.active = !1, this.active = d()) : this._activate(this._findNextTab(Math.max(0, j.active - 1), !1)) : j.active = this.tabs.index(this.active) : (j.active = !1, this.active = d()), this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var a = this;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function() {
                return d("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = d(), this.anchors.each(function(k, t) {
                var j, q, p, m = d(t).uniqueId().attr("id"),
                    e = d(t).closest("li"),
                    s = e.attr("aria-controls");
                f(t) ? (j = t.hash, q = a.element.find(a._sanitizeSelector(j))) : (p = a._tabId(e), j = "#" + p, q = a.element.find(j), q.length || (q = a._createPanel(p), q.insertAfter(a.panels[k - 1] || a.tablist)), q.attr("aria-live", "polite")), q.length && (a.panels = a.panels.add(q)), s && e.data("ui-tabs-aria-controls", s), e.attr({
                    "aria-controls": j.substring(1),
                    "aria-labelledby": m
                }), q.attr("aria-labelledby", m)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        },
        _getList: function() {
            return this.tablist || this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(a) {
            return d("<div>").attr("id", a).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function(k) {
            d.isArray(k) && (k.length ? k.length === this.anchors.length && (k = !0) : k = !1);
            for (var a, j = 0; a = this.tabs[j]; j++) {
                k === !0 || -1 !== d.inArray(j, k) ? d(a).addClass("ui-state-disabled").attr("aria-disabled", "true") : d(a).removeClass("ui-state-disabled").removeAttr("aria-disabled")
            }
            this.options.disabled = k
        },
        _setupEvents: function(j) {
            var a = {
                click: function(e) {
                    e.preventDefault()
                }
            };
            j && d.each(j.split(" "), function(i, k) {
                a[k] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, a), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(k) {
            var a, j = this.element.parent();
            "fill" === k ? (a = j.height(), a -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var l = d(this),
                    i = l.css("position");
                "absolute" !== i && "fixed" !== i && (a -= l.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() {
                a -= d(this).outerHeight(!0)
            }), this.panels.each(function() {
                d(this).height(Math.max(0, a - d(this).innerHeight() + d(this).height()))
            }).css("overflow", "auto")) : "auto" === k && (a = 0, this.panels.each(function() {
                a = Math.max(a, d(this).height("").height())
            }).height(a))
        },
        _eventHandler: function(u) {
            var q = this.options,
                x = this.active,
                m = d(u.currentTarget),
                w = m.closest("li"),
                k = w[0] === x[0],
                j = k && q.collapsible,
                t = j ? d() : this._getPanelForTab(w),
                p = x.length ? this._getPanelForTab(x) : d(),
                v = {
                    oldTab: x,
                    oldPanel: p,
                    newTab: j ? d() : w,
                    newPanel: t
                };
            u.preventDefault(), w.hasClass("ui-state-disabled") || w.hasClass("ui-tabs-loading") || this.running || k && !q.collapsible || this._trigger("beforeActivate", u, v) === !1 || (q.active = j ? !1 : this.tabs.index(w), this.active = k ? d() : w, this.xhr && this.xhr.abort(), p.length || t.length || d.error("jQuery UI Tabs: Mismatching fragment identifier."), t.length && this.load(this.tabs.index(w), u), this._toggle(u, v))
        },
        _toggle: function(p, k) {
            function l() {
                j.running = !1, j._trigger("activate", p, k)
            }

            function t() {
                k.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), q.length && j.options.show ? j._show(q, j.options.show, l) : (q.show(), l())
            }
            var j = this,
                q = k.newPanel,
                m = k.oldPanel;
            this.running = !0, m.length && this.options.hide ? this._hide(m, this.options.hide, function() {
                k.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), t()
            }) : (k.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), m.hide(), t()), m.attr({
                "aria-expanded": "false",
                "aria-hidden": "true"
            }), k.oldTab.attr("aria-selected", "false"), q.length && m.length ? k.oldTab.attr("tabIndex", -1) : q.length && this.tabs.filter(function() {
                return 0 === d(this).attr("tabIndex")
            }).attr("tabIndex", -1), q.attr({
                "aria-expanded": "true",
                "aria-hidden": "false"
            }), k.newTab.attr({
                "aria-selected": "true",
                tabIndex: 0
            })
        },
        _activate: function(k) {
            var a, j = this._findActive(k);
            j[0] !== this.active[0] && (j.length || (j = this.active), a = j.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: a,
                currentTarget: a,
                preventDefault: d.noop
            }))
        },
        _findActive: function(a) {
            return a === !1 ? d() : this.tabs.eq(a)
        },
        _getIndex: function(a) {
            return "string" == typeof a && (a = this.anchors.index(this.anchors.filter("[href$='" + a + "']"))), a
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                d.data(this, "ui-tabs-destroy") ? d(this).remove() : d(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }), this.tabs.each(function() {
                var j = d(this),
                    a = j.data("ui-tabs-aria-controls");
                a ? j.attr("aria-controls", a).removeData("ui-tabs-aria-controls") : j.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(a) {
            var e = this.options.disabled;
            e !== !1 && (a === g ? e = !1 : (a = this._getIndex(a), e = d.isArray(e) ? d.map(e, function(i) {
                return i !== a ? i : null
            }) : d.map(this.tabs, function(i, j) {
                return j !== a ? j : null
            })), this._setupDisabled(e))
        },
        disable: function(a) {
            var e = this.options.disabled;
            if (e !== !0) {
                if (a === g) {
                    e = !0
                } else {
                    if (a = this._getIndex(a), -1 !== d.inArray(a, e)) {
                        return
                    }
                    e = d.isArray(e) ? d.merge([a], e).sort() : [a]
                }
                this._setupDisabled(e)
            }
        },
        load: function(p, k) {
            p = this._getIndex(p);
            var s = this,
                j = this.tabs.eq(p),
                q = j.find(".ui-tabs-anchor"),
                m = this._getPanelForTab(j),
                l = {
                    tab: j,
                    panel: m
                };
            f(q[0]) || (this.xhr = d.ajax(this._ajaxSettings(q, k, l)), this.xhr && "canceled" !== this.xhr.statusText && (j.addClass("ui-tabs-loading"), m.attr("aria-busy", "true"), this.xhr.success(function(a) {
                setTimeout(function() {
                    m.html(a), s._trigger("load", k, l)
                }, 1)
            }).complete(function(a, i) {
                setTimeout(function() {
                    "abort" === i && s.panels.stop(!1, !0), j.removeClass("ui-tabs-loading"), m.removeAttr("aria-busy"), a === s.xhr && delete s.xhr
                }, 1)
            })))
        },
        _ajaxSettings: function(k, a, j) {
            var l = this;
            return {
                url: k.attr("href"),
                beforeSend: function(m, i) {
                    return l._trigger("beforeLoad", a, d.extend({
                        jqXHR: m,
                        ajaxSettings: i
                    }, j))
                }
            }
        },
        _getPanelForTab: function(j) {
            var a = d(j).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + a))
        }
    })
})(jQuery);
(function(b) {
    function d(h, f) {
        var g = (h.attr("aria-describedby") || "").split(/\s+/);
        g.push(f), h.data("ui-tooltip-id", f).attr("aria-describedby", b.trim(g.join(" ")))
    }

    function a(h) {
        var f = h.data("ui-tooltip-id"),
            g = (h.attr("aria-describedby") || "").split(/\s+/),
            j = b.inArray(f, g); - 1 !== j && g.splice(j, 1), h.removeData("ui-tooltip-id"), g = b.trim(g.join(" ")), g ? h.attr("aria-describedby", g) : h.removeAttr("aria-describedby")
    }
    var c = 0;
    b.widget("ui.tooltip", {
        version: "1.10.4",
        options: {
            content: function() {
                var f = b(this).attr("title") || "";
                return b("<a>").text(f).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
        },
        _setOption: function(h, f) {
            var g = this;
            return "disabled" === h ? (this[f ? "_disable" : "_enable"](), this.options[h] = f, void 0) : (this._super(h, f), "content" === h && b.each(this.tooltips, function(i, j) {
                g._updateContent(j)
            }), void 0)
        },
        _disable: function() {
            var f = this;
            b.each(this.tooltips, function(e, g) {
                var h = b.Event("blur");
                h.target = h.currentTarget = g[0], f.close(h, !0)
            }), this.element.find(this.options.items).addBack().each(function() {
                var g = b(this);
                g.is("[title]") && g.data("ui-tooltip-title", g.attr("title")).attr("title", "")
            })
        },
        _enable: function() {
            this.element.find(this.options.items).addBack().each(function() {
                var f = b(this);
                f.data("ui-tooltip-title") && f.attr("title", f.data("ui-tooltip-title"))
            })
        },
        open: function(h) {
            var f = this,
                g = b(h ? h.target : this.element).closest(this.options.items);
            g.length && !g.data("ui-tooltip-id") && (g.attr("title") && g.data("ui-tooltip-title", g.attr("title")), g.data("ui-tooltip-open", !0), h && "mouseover" === h.type && g.parents().each(function() {
                var j, i = b(this);
                i.data("ui-tooltip-open") && (j = b.Event("blur"), j.target = j.currentTarget = this, f.close(j, !0)), i.attr("title") && (i.uniqueId(), f.parents[this.id] = {
                    element: this,
                    title: i.attr("title")
                }, i.attr("title", ""))
            }), this._updateContent(g, h))
        },
        _updateContent: function(g, j) {
            var f, h = this.options.content,
                l = this,
                k = j ? j.type : null;
            return "string" == typeof h ? this._open(j, g, h) : (f = h.call(g[0], function(e) {
                g.data("ui-tooltip-open") && l._delay(function() {
                    j && (j.type = k), this._open(j, g, e)
                })
            }), f && this._open(j, g, f), void 0)
        },
        _open: function(g, k, q) {
            function p(h) {
                e.of = h, f.is(":hidden") || f.position(e)
            }
            var f, m, j, e = b.extend({}, this.options.position);
            if (q) {
                if (f = this._find(k), f.length) {
                    return f.find(".ui-tooltip-content").html(q), void 0
                }
                k.is("[title]") && (g && "mouseover" === g.type ? k.attr("title", "") : k.removeAttr("title")), f = this._tooltip(k), d(k, f.attr("id")), f.find(".ui-tooltip-content").html(q), this.options.track && g && /^mouse/.test(g.type) ? (this._on(this.document, {
                    mousemove: p
                }), p(g)) : f.position(b.extend({ of: k
                }, this.options.position)), f.hide(), this._show(f, this.options.show), this.options.show && this.options.show.delay && (j = this.delayedShow = setInterval(function() {
                    f.is(":visible") && (p(e.of), clearInterval(j))
                }, b.fx.interval)), this._trigger("open", g, {
                    tooltip: f
                }), m = {
                    keyup: function(l) {
                        if (l.keyCode === b.ui.keyCode.ESCAPE) {
                            var h = b.Event(l);
                            h.currentTarget = k[0], this.close(h, !0)
                        }
                    },
                    remove: function() {
                        this._removeTooltip(f)
                    }
                }, g && "mouseover" !== g.type || (m.mouseleave = "close"), g && "focusin" !== g.type || (m.focusout = "close"), this._on(!0, k, m)
            }
        },
        close: function(g) {
            var f = this,
                i = b(g ? g.currentTarget : this.element),
                h = this._find(i);
            this.closing || (clearInterval(this.delayedShow), i.data("ui-tooltip-title") && i.attr("title", i.data("ui-tooltip-title")), a(i), h.stop(!0), this._hide(h, this.options.hide, function() {
                f._removeTooltip(b(this))
            }), i.removeData("ui-tooltip-open"), this._off(i, "mouseleave focusout keyup"), i[0] !== this.element[0] && this._off(i, "remove"), this._off(this.document, "mousemove"), g && "mouseleave" === g.type && b.each(this.parents, function(k, j) {
                b(j.element).attr("title", j.title), delete f.parents[k]
            }), this.closing = !0, this._trigger("close", g, {
                tooltip: h
            }), this.closing = !1)
        },
        _tooltip: function(g) {
            var f = "ui-tooltip-" + c++,
                h = b("<div>").attr({
                    id: f,
                    role: "tooltip"
                }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            return b("<div>").addClass("ui-tooltip-content").appendTo(h), h.appendTo(this.document[0].body), this.tooltips[f] = g, h
        },
        _find: function(g) {
            var f = g.data("ui-tooltip-id");
            return f ? b("#" + f) : b()
        },
        _removeTooltip: function(e) {
            e.remove(), delete this.tooltips[e.attr("id")]
        },
        _destroy: function() {
            var f = this;
            b.each(this.tooltips, function(e, g) {
                var h = b.Event("blur");
                h.target = h.currentTarget = g[0], f.close(h, !0), b("#" + e).remove(), g.data("ui-tooltip-title") && (g.attr("title", g.data("ui-tooltip-title")), g.removeData("ui-tooltip-title"))
            })
        }
    })
})(jQuery);
(function(b, c) {
    var a = "ui-effects-";
    b.effects = {
            effect: {}
        },
        function(D, y) {
            function v(f, l, d) {
                var h = C[l.type] || {};
                return null == f ? d || !l.def ? null : l.def : (f = h.floor ? ~~f : parseFloat(f), isNaN(f) ? l.def : h.mod ? (f + h.mod) % h.mod : 0 > f ? 0 : f > h.max ? h.max : f)
            }

            function E(d) {
                var e = w(),
                    f = e._rgba = [];
                return d = d.toLowerCase(), x(q, function(p, n) {
                    var F, u = n.re.exec(d),
                        i = u && n.parse(u),
                        s = n.space || "rgba";
                    return i ? (F = e[s](i), e[A[s].cache] = F[A[s].cache], f = e._rgba = F._rgba, !1) : y
                }), f.length ? ("0,0,0,0" === f.join() && D.extend(f, B.transparent), e) : B[d]
            }

            function m(f, h, d) {
                return d = (d + 1) % 1, 1 > 6 * d ? f + 6 * (h - f) * d : 1 > 2 * d ? h : 2 > 3 * d ? f + 6 * (h - f) * (2 / 3 - d) : f
            }
            var B, k = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                g = /^([\-+])=\s*(\d+\.?\d*)/,
                q = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(d) {
                        return [d[1], d[2], d[3], d[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(d) {
                        return [2.55 * d[1], 2.55 * d[2], 2.55 * d[3], d[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function(d) {
                        return [parseInt(d[1], 16), parseInt(d[2], 16), parseInt(d[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function(d) {
                        return [parseInt(d[1] + d[1], 16), parseInt(d[2] + d[2], 16), parseInt(d[3] + d[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function(d) {
                        return [d[1], d[2] / 100, d[3] / 100, d[4]]
                    }
                }],
                w = D.Color = function(h, d, f, l) {
                    return new D.Color.fn.parse(h, d, f, l)
                },
                A = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                C = {
                    "byte": {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                z = w.support = {},
                j = D("<p>")[0],
                x = D.each;
            j.style.cssText = "background-color:rgba(1,1,1,.5)", z.rgba = j.style.backgroundColor.indexOf("rgba") > -1, x(A, function(d, f) {
                f.cache = "_" + d, f.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), w.fn = D.extend(w.prototype, {
                parse: function(F, t, h, e) {
                    if (F === y) {
                        return this._rgba = [null, null, null, null], this
                    }(F.jquery || F.nodeType) && (F = D(F).css(t), t = y);
                    var f = this,
                        s = D.type(F),
                        i = this._rgba = [];
                    return t !== y && (F = [F, t, h, e], s = "array"), "string" === s ? this.parse(E(F) || B._default) : "array" === s ? (x(A.rgba.props, function(d, l) {
                        i[l.idx] = v(F[l.idx], l)
                    }), this) : "object" === s ? (F instanceof w ? x(A, function(d, l) {
                        F[l.cache] && (f[l.cache] = F[l.cache].slice())
                    }) : x(A, function(n, l) {
                        var d = l.cache;
                        x(l.props, function(o, p) {
                            if (!f[d] && l.to) {
                                if ("alpha" === o || null == F[o]) {
                                    return
                                }
                                f[d] = l.to(f._rgba)
                            }
                            f[d][p.idx] = v(F[o], p, !0)
                        }), f[d] && 0 > D.inArray(null, f[d].slice(0, 3)) && (f[d][3] = 1, l.from && (f._rgba = l.from(f[d])))
                    }), this) : y
                },
                is: function(e) {
                    var d = w(e),
                        f = !0,
                        h = this;
                    return x(A, function(l, i) {
                        var p, n = d[i.cache];
                        return n && (p = h[i.cache] || i.to && i.to(h._rgba) || [], x(i.props, function(r, o) {
                            return null != n[o.idx] ? f = n[o.idx] === p[o.idx] : y
                        })), f
                    }), f
                },
                _space: function() {
                    var d = [],
                        f = this;
                    return x(A, function(e, h) {
                        f[h.cache] && d.push(e)
                    }), d.pop()
                },
                transition: function(h, u) {
                    var i = w(h),
                        G = i._space(),
                        f = A[G],
                        F = 0 === this.alpha() ? w("transparent") : this,
                        p = F[f.cache] || f.to(F._rgba),
                        d = p.slice();
                    return i = i[f.cache], x(f.props, function(l, I) {
                        var e = I.idx,
                            s = p[e],
                            r = i[e],
                            H = C[I.type] || {};
                        null !== r && (null === s ? d[e] = r : (H.mod && (r - s > H.mod / 2 ? s += H.mod : s - r > H.mod / 2 && (s -= H.mod)), d[e] = v((r - s) * u + s, I)))
                    }), this[G](d)
                },
                blend: function(h) {
                    if (1 === this._rgba[3]) {
                        return this
                    }
                    var d = this._rgba.slice(),
                        f = d.pop(),
                        l = w(h)._rgba;
                    return w(D.map(d, function(i, n) {
                        return (1 - f) * l[n] + f * i
                    }))
                },
                toRgbaString: function() {
                    var f = "rgba(",
                        d = D.map(this._rgba, function(h, i) {
                            return null == h ? i > 2 ? 1 : 0 : h
                        });
                    return 1 === d[3] && (d.pop(), f = "rgb("), f + d.join() + ")"
                },
                toHslaString: function() {
                    var f = "hsla(",
                        d = D.map(this.hsla(), function(h, i) {
                            return null == h && (h = i > 2 ? 1 : 0), i && 3 > i && (h = Math.round(100 * h) + "%"), h
                        });
                    return 1 === d[3] && (d.pop(), f = "hsl("), f + d.join() + ")"
                },
                toHexString: function(h) {
                    var d = this._rgba.slice(),
                        f = d.pop();
                    return h && d.push(~~(255 * f)), "#" + D.map(d, function(e) {
                        return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
                    }).join("")
                },
                toString: function() {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), w.fn.parse.prototype = w.fn, A.hsla.to = function(M) {
                if (null == M[0] || null == M[1] || null == M[2]) {
                    return [null, null, null, M[3]]
                }
                var I, G, N = M[0] / 255,
                    p = M[1] / 255,
                    K = M[2] / 255,
                    f = M[3],
                    d = Math.max(N, p, K),
                    F = Math.min(N, p, K),
                    H = d - F,
                    J = d + F,
                    L = 0.5 * J;
                return I = F === d ? 0 : N === d ? 60 * (p - K) / H + 360 : p === d ? 60 * (K - N) / H + 120 : 60 * (N - p) / H + 240, G = 0 === H ? 0 : 0.5 >= L ? H / J : H / (2 - J), [Math.round(I) % 360, G, L, null == f ? 1 : f]
            }, A.hsla.from = function(h) {
                if (null == h[0] || null == h[1] || null == h[2]) {
                    return [null, null, null, h[3]]
                }
                var p = h[0] / 360,
                    f = h[1],
                    l = h[2],
                    d = h[3],
                    u = 0.5 >= l ? l * (1 + f) : l + f - l * f,
                    n = 2 * l - u;
                return [Math.round(255 * m(n, u, p + 1 / 3)), Math.round(255 * m(n, u, p)), Math.round(255 * m(n, u, p - 1 / 3)), d]
            }, x(A, function(f, p) {
                var e = p.props,
                    h = p.cache,
                    d = p.to,
                    i = p.from;
                w.fn[f] = function(o) {
                    if (d && !this[h] && (this[h] = d(this._rgba)), o === y) {
                        return this[h].slice()
                    }
                    var G, t = D.type(o),
                        l = "array" === t || "object" === t ? o : arguments,
                        F = this[h].slice();
                    return x(e, function(n, u) {
                        var r = l["object" === t ? n : u.idx];
                        null == r && (r = F[u.idx]), F[u.idx] = v(r, u)
                    }), i ? (G = w(i(F)), G[h] = F, G) : w(F)
                }, x(e, function(n, l) {
                    w.fn[n] || (w.fn[n] = function(G) {
                        var s, u = D.type(G),
                            r = "alpha" === n ? this._hsla ? "hsla" : "rgba" : f,
                            t = this[r](),
                            F = t[l.idx];
                        return "undefined" === u ? F : ("function" === u && (G = G.call(this, F), u = D.type(G)), null == G && l.empty ? this : ("string" === u && (s = g.exec(G), s && (G = F + parseFloat(s[2]) * ("+" === s[1] ? 1 : -1))), t[l.idx] = G, this[r](t)))
                    })
                })
            }), w.hook = function(f) {
                var d = f.split(" ");
                x(d, function(l, h) {
                    D.cssHooks[h] = {
                        set: function(t, F) {
                            var p, u, s = "";
                            if ("transparent" !== F && ("string" !== D.type(F) || (p = E(F)))) {
                                if (F = w(p || F), !z.rgba && 1 !== F._rgba[3]) {
                                    for (u = "backgroundColor" === h ? t.parentNode : t;
                                        ("" === s || "transparent" === s) && u && u.style;) {
                                        try {
                                            s = D.css(u, "backgroundColor"), u = u.parentNode
                                        } catch (i) {}
                                    }
                                    F = F.blend(s && "transparent" !== s ? s : "_default")
                                }
                                F = F.toRgbaString()
                            }
                            try {
                                t.style[h] = F
                            } catch (i) {}
                        }
                    }, D.fx.step[h] = function(i) {
                        i.colorInit || (i.start = w(i.elem, h), i.end = w(i.end), i.colorInit = !0), D.cssHooks[h].set(i.elem, i.start.transition(i.end, i.pos))
                    }
                })
            }, w.hook(k), D.cssHooks.borderColor = {
                expand: function(d) {
                    var f = {};
                    return x(["Top", "Right", "Bottom", "Left"], function(e, h) {
                        f["border" + h + "Color"] = d
                    }), f
                }
            }, B = D.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(jQuery),
        function() {
            function e(l) {
                var j, k, m = l.ownerDocument.defaultView ? l.ownerDocument.defaultView.getComputedStyle(l, null) : l.currentStyle,
                    h = {};
                if (m && m.length && m[0] && m[m[0]]) {
                    for (k = m.length; k--;) {
                        j = m[k], "string" == typeof m[j] && (h[b.camelCase(j)] = m[j])
                    }
                } else {
                    for (j in m) {
                        "string" == typeof m[j] && (h[j] = m[j])
                    }
                }
                return h
            }

            function f(k, h) {
                var j, m, l = {};
                for (j in h) {
                    m = h[j], k[j] !== m && (d[j] || (b.fx.step[j] || !isNaN(parseFloat(m))) && (l[j] = m))
                }
                return l
            }
            var g = ["add", "remove", "toggle"],
                d = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            b.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(j, h) {
                b.fx.step[h] = function(i) {
                    ("none" !== i.end && !i.setAttr || 1 === i.pos && !i.setAttr) && (jQuery.style(i.elem, h, i.end), i.setAttr = !0)
                }
            }), b.fn.addBack || (b.fn.addBack = function(h) {
                return this.add(null == h ? this.prevObject : this.prevObject.filter(h))
            }), b.effects.animateClass = function(k, i, m, j) {
                var h = b.speed(i, m, j);
                return this.queue(function() {
                    var l, q = b(this),
                        p = q.attr("class") || "",
                        n = h.children ? q.find("*").addBack() : q;
                    n = n.map(function() {
                        var o = b(this);
                        return {
                            el: o,
                            start: e(this)
                        }
                    }), l = function() {
                        b.each(g, function(r, o) {
                            k[o] && q[o + "Class"](k[o])
                        })
                    }, l(), n = n.map(function() {
                        return this.end = e(this.el[0]), this.diff = f(this.start, this.end), this
                    }), q.attr("class", p), n = n.map(function() {
                        var t = this,
                            o = b.Deferred(),
                            r = b.extend({}, h, {
                                queue: !1,
                                complete: function() {
                                    o.resolve(t)
                                }
                            });
                        return this.el.animate(this.diff, r), o.promise()
                    }), b.when.apply(b, n.get()).done(function() {
                        l(), b.each(arguments, function() {
                            var o = this.el;
                            b.each(this.diff, function(r) {
                                o.css(r, "")
                            })
                        }), h.complete.call(q[0])
                    })
                })
            }, b.fn.extend({
                addClass: function(h) {
                    return function(k, l, m, j) {
                        return l ? b.effects.animateClass.call(this, {
                            add: k
                        }, l, m, j) : h.apply(this, arguments)
                    }
                }(b.fn.addClass),
                removeClass: function(h) {
                    return function(k, l, m, j) {
                        return arguments.length > 1 ? b.effects.animateClass.call(this, {
                            remove: k
                        }, l, m, j) : h.apply(this, arguments)
                    }
                }(b.fn.removeClass),
                toggleClass: function(h) {
                    return function(j, m, i, l, k) {
                        return "boolean" == typeof m || m === c ? i ? b.effects.animateClass.call(this, m ? {
                            add: j
                        } : {
                            remove: j
                        }, i, l, k) : h.apply(this, arguments) : b.effects.animateClass.call(this, {
                            toggle: j
                        }, m, i, l)
                    }
                }(b.fn.toggleClass),
                switchClass: function(l, j, k, m, h) {
                    return b.effects.animateClass.call(this, {
                        add: j,
                        remove: l
                    }, k, m, h)
                }
            })
        }(),
        function() {
            function d(h, f, g, j) {
                return b.isPlainObject(h) && (f = h, h = h.effect), h = {
                    effect: h
                }, null == f && (f = {}), b.isFunction(f) && (j = f, g = null, f = {}), ("number" == typeof f || b.fx.speeds[f]) && (j = g, g = f, f = {}), b.isFunction(g) && (j = g, g = null), f && b.extend(h, f), g = g || f.duration, h.duration = b.fx.off ? 0 : "number" == typeof g ? g : g in b.fx.speeds ? b.fx.speeds[g] : b.fx.speeds._default, h.complete = j || f.complete, h
            }

            function e(f) {
                return !f || "number" == typeof f || b.fx.speeds[f] ? !0 : "string" != typeof f || b.effects.effect[f] ? b.isFunction(f) ? !0 : "object" != typeof f || f.effect ? !1 : !0 : !0
            }
            b.extend(b.effects, {
                version: "1.10.4",
                save: function(f, h) {
                    for (var g = 0; h.length > g; g++) {
                        null !== h[g] && f.data(a + h[g], f[0].style[h[g]])
                    }
                },
                restore: function(g, h) {
                    var i, f;
                    for (f = 0; h.length > f; f++) {
                        null !== h[f] && (i = g.data(a + h[f]), i === c && (i = ""), g.css(h[f], i))
                    }
                },
                setMode: function(f, g) {
                    return "toggle" === g && (g = f.is(":hidden") ? "show" : "hide"), g
                },
                getBaseline: function(g, j) {
                    var f, h;
                    switch (g[0]) {
                        case "top":
                            f = 0;
                            break;
                        case "middle":
                            f = 0.5;
                            break;
                        case "bottom":
                            f = 1;
                            break;
                        default:
                            f = g[0] / j.height
                    }
                    switch (g[1]) {
                        case "left":
                            h = 0;
                            break;
                        case "center":
                            h = 0.5;
                            break;
                        case "right":
                            h = 1;
                            break;
                        default:
                            h = g[1] / j.width
                    }
                    return {
                        x: h,
                        y: f
                    }
                },
                createWrapper: function(j) {
                    if (j.parent().is(".ui-effects-wrapper")) {
                        return j.parent()
                    }
                    var g = {
                            width: j.outerWidth(!0),
                            height: j.outerHeight(!0),
                            "float": j.css("float")
                        },
                        h = b("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        l = {
                            width: j.width(),
                            height: j.height()
                        },
                        f = document.activeElement;
                    try {
                        f.id
                    } catch (k) {
                        f = document.body
                    }
                    return j.wrap(h), (j[0] === f || b.contains(j[0], f)) && b(f).focus(), h = j.parent(), "static" === j.css("position") ? (h.css({
                        position: "relative"
                    }), j.css({
                        position: "relative"
                    })) : (b.extend(g, {
                        position: j.css("position"),
                        zIndex: j.css("z-index")
                    }), b.each(["top", "left", "bottom", "right"], function(i, m) {
                        g[m] = j.css(m), isNaN(parseInt(g[m], 10)) && (g[m] = "auto")
                    }), j.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), j.css(l), h.css(g).show()
                },
                removeWrapper: function(g) {
                    var f = document.activeElement;
                    return g.parent().is(".ui-effects-wrapper") && (g.parent().replaceWith(g), (g[0] === f || b.contains(g[0], f)) && b(f).focus()), g
                },
                setTransition: function(h, f, g, j) {
                    return j = j || {}, b.each(f, function(m, l) {
                        var k = h.cssUnit(l);
                        k[0] > 0 && (j[l] = k[0] * g + k[1])
                    }), j
                }
            }), b.fn.extend({
                effect: function() {
                    function h(o) {
                        function l() {
                            b.isFunction(i) && i.call(p[0]), b.isFunction(o) && o()
                        }
                        var p = b(this),
                            i = g.complete,
                            m = g.mode;
                        (p.is(":hidden") ? "hide" === m : "show" === m) ? (p[m](), l()) : j.call(p[0], g, l)
                    }
                    var g = d.apply(this, arguments),
                        k = g.mode,
                        f = g.queue,
                        j = b.effects.effect[g.effect];
                    return b.fx.off || !j ? k ? this[k](g.duration, g.complete) : this.each(function() {
                        g.complete && g.complete.call(this)
                    }) : f === !1 ? this.each(h) : this.queue(f || "fx", h)
                },
                show: function(f) {
                    return function(h) {
                        if (e(h)) {
                            return f.apply(this, arguments)
                        }
                        var g = d.apply(this, arguments);
                        return g.mode = "show", this.effect.call(this, g)
                    }
                }(b.fn.show),
                hide: function(f) {
                    return function(h) {
                        if (e(h)) {
                            return f.apply(this, arguments)
                        }
                        var g = d.apply(this, arguments);
                        return g.mode = "hide", this.effect.call(this, g)
                    }
                }(b.fn.hide),
                toggle: function(f) {
                    return function(h) {
                        if (e(h) || "boolean" == typeof h) {
                            return f.apply(this, arguments)
                        }
                        var g = d.apply(this, arguments);
                        return g.mode = "toggle", this.effect.call(this, g)
                    }
                }(b.fn.toggle),
                cssUnit: function(h) {
                    var f = this.css(h),
                        g = [];
                    return b.each(["em", "px", "%", "pt"], function(i, j) {
                        f.indexOf(j) > 0 && (g = [parseFloat(f), j])
                    }), g
                }
            })
        }(),
        function() {
            var d = {};
            b.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(f, e) {
                d[e] = function(g) {
                    return Math.pow(g, f + 2)
                }
            }), b.extend(d, {
                Sine: function(e) {
                    return 1 - Math.cos(e * Math.PI / 2)
                },
                Circ: function(e) {
                    return 1 - Math.sqrt(1 - e * e)
                },
                Elastic: function(e) {
                    return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
                },
                Back: function(e) {
                    return e * e * (3 * e - 2)
                },
                Bounce: function(g) {
                    for (var h, f = 4;
                        ((h = Math.pow(2, --f)) - 1) / 11 > g;) {}
                    return 1 / Math.pow(4, 3 - f) - 7.5625 * Math.pow((3 * h - 2) / 22 - g, 2)
                }
            }), b.each(d, function(g, f) {
                b.easing["easeIn" + g] = f, b.easing["easeOut" + g] = function(e) {
                    return 1 - f(1 - e)
                }, b.easing["easeInOut" + g] = function(e) {
                    return 0.5 > e ? f(2 * e) / 2 : 1 - f(-2 * e + 2) / 2
                }
            })
        }()
})(jQuery);
(function(b) {
    var c = /up|down|vertical/,
        a = /up|left|vertical|horizontal/;
    b.effects.effect.blind = function(E, k) {
        var B, j, e, t = b(this),
            w = ["position", "top", "bottom", "left", "right", "height", "width"],
            A = b.effects.setMode(t, E.mode || "hide"),
            D = E.direction || "up",
            z = c.test(D),
            i = z ? "height" : "width",
            y = z ? "top" : "left",
            x = a.test(D),
            q = {},
            C = "show" === A;
        t.parent().is(".ui-effects-wrapper") ? b.effects.save(t.parent(), w) : b.effects.save(t, w), t.show(), B = b.effects.createWrapper(t).css({
            overflow: "hidden"
        }), j = B[i](), e = parseFloat(B.css(y)) || 0, q[i] = C ? j : 0, x || (t.css(z ? "bottom" : "right", 0).css(z ? "top" : "left", "auto").css({
            position: "absolute"
        }), q[y] = C ? e : j + e), C && (B.css(i, 0), x || B.css(y, e + j)), B.animate(q, {
            duration: E.duration,
            easing: E.easing,
            queue: !1,
            complete: function() {
                "hide" === A && t.hide(), b.effects.restore(t, w), b.effects.removeWrapper(t), k()
            }
        })
    }
})(jQuery);
(function(a) {
    a.effects.effect.bounce = function(H, D) {
        var t, A, L, z = a(this),
            w = ["position", "top", "bottom", "left", "right", "height", "width"],
            C = a.effects.setMode(z, H.mode || "effect"),
            E = "hide" === C,
            J = "show" === C,
            q = H.direction || "up",
            I = H.distance,
            x = H.times || 5,
            G = 2 * x + (J || E ? 1 : 0),
            F = H.duration / G,
            B = H.easing,
            k = "up" === q || "down" === q ? "top" : "left",
            M = "up" === q || "left" === q,
            K = z.queue(),
            j = K.length;
        for ((J || E) && w.push("opacity"), a.effects.save(z, w), z.show(), a.effects.createWrapper(z), I || (I = z["top" === k ? "outerHeight" : "outerWidth"]() / 3), J && (L = {
                opacity: 1
            }, L[k] = 0, z.css("opacity", 0).css(k, M ? 2 * -I : 2 * I).animate(L, F, B)), E && (I /= Math.pow(2, x - 1)), L = {}, L[k] = 0, t = 0; x > t; t++) {
            A = {}, A[k] = (M ? "-=" : "+=") + I, z.animate(A, F, B).animate(L, F, B), I = E ? 2 * I : I / 2
        }
        E && (A = {
            opacity: 0
        }, A[k] = (M ? "-=" : "+=") + I, z.animate(A, F, B)), z.queue(function() {
            E && z.hide(), a.effects.restore(z, w), a.effects.removeWrapper(z), D()
        }), j > 1 && K.splice.apply(K, [1, 0].concat(K.splice(j, G + 1))), z.dequeue()
    }
})(jQuery);
(function(a) {
    a.effects.effect.clip = function(w, q) {
        var B, k, z, j = a(this),
            b = ["position", "top", "bottom", "left", "right", "height", "width"],
            m = a.effects.setMode(j, w.mode || "hide"),
            t = "show" === m,
            y = w.direction || "vertical",
            A = "vertical" === y,
            x = A ? "height" : "width",
            g = A ? "top" : "left",
            v = {};
        a.effects.save(j, b), j.show(), B = a.effects.createWrapper(j).css({
            overflow: "hidden"
        }), k = "IMG" === j[0].tagName ? B : j, z = k[x](), t && (k.css(x, 0), k.css(g, z / 2)), v[x] = t ? z : 0, v[g] = t ? 0 : z / 2, k.animate(v, {
            queue: !1,
            duration: w.duration,
            easing: w.easing,
            complete: function() {
                t || j.hide(), a.effects.restore(j, b), a.effects.removeWrapper(j), q()
            }
        })
    }
})(jQuery);
(function(a) {
    a.effects.effect.drop = function(m, j) {
        var v, f = a(this),
            q = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
            d = a.effects.setMode(f, m.mode || "hide"),
            b = "show" === d,
            g = m.direction || "left",
            k = "up" === g || "down" === g ? "top" : "left",
            p = "up" === g || "left" === g ? "pos" : "neg",
            t = {
                opacity: b ? 1 : 0
            };
        a.effects.save(f, q), f.show(), a.effects.createWrapper(f), v = m.distance || f["top" === k ? "outerHeight" : "outerWidth"](!0) / 2, b && f.css("opacity", 0).css(k, "pos" === p ? -v : v), t[k] = (b ? "pos" === p ? "+=" : "-=" : "pos" === p ? "-=" : "+=") + v, f.animate(t, {
            queue: !1,
            duration: m.duration,
            easing: m.easing,
            complete: function() {
                "hide" === d && f.hide(), a.effects.restore(f, q), a.effects.removeWrapper(f), j()
            }
        })
    }
})(jQuery);
(function(a) {
    a.effects.effect.explode = function(F, B) {
        function q() {
            I.push(this), I.length === k * G && y()
        }

        function y() {
            w.css({
                visibility: "visible"
            }), a(I).remove(), D || w.hide(), B()
        }
        var J, x, t, A, C, H, k = F.pieces ? Math.round(Math.sqrt(F.pieces)) : 3,
            G = k,
            w = a(this),
            E = a.effects.setMode(w, F.mode || "hide"),
            D = "show" === E,
            z = w.show().css("visibility", "hidden").offset(),
            j = Math.ceil(w.outerWidth() / G),
            K = Math.ceil(w.outerHeight() / k),
            I = [];
        for (J = 0; k > J; J++) {
            for (A = z.top + J * K, H = J - (k - 1) / 2, x = 0; G > x; x++) {
                t = z.left + x * j, C = x - (G - 1) / 2, w.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -x * j,
                    top: -J * K
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: j,
                    height: K,
                    left: t + (D ? C * j : 0),
                    top: A + (D ? H * K : 0),
                    opacity: D ? 0 : 1
                }).animate({
                    left: t + (D ? 0 : C * j),
                    top: A + (D ? 0 : H * K),
                    opacity: D ? 1 : 0
                }, F.duration || 500, F.easing, q)
            }
        }
    }
})(jQuery);
(function(a) {
    a.effects.effect.fade = function(d, b) {
        var c = a(this),
            f = a.effects.setMode(c, d.mode || "toggle");
        c.animate({
            opacity: f
        }, {
            queue: !1,
            duration: d.duration,
            easing: d.easing,
            complete: b
        })
    }
})(jQuery);
(function(a) {
    a.effects.effect.fold = function(B, x) {
        var H, q, E = a(this),
            k = ["position", "top", "bottom", "left", "right", "height", "width"],
            b = a.effects.setMode(E, B.mode || "hide"),
            w = "show" === b,
            y = "hide" === b,
            D = B.size || 15,
            G = /([0-9]+)%/.exec(D),
            C = !!B.horizFirst,
            j = w !== C,
            A = j ? ["width", "height"] : ["height", "width"],
            z = B.duration / 2,
            t = {},
            F = {};
        a.effects.save(E, k), E.show(), H = a.effects.createWrapper(E).css({
            overflow: "hidden"
        }), q = j ? [H.width(), H.height()] : [H.height(), H.width()], G && (D = parseInt(G[1], 10) / 100 * q[y ? 0 : 1]), w && H.css(C ? {
            height: 0,
            width: D
        } : {
            height: D,
            width: 0
        }), t[A[0]] = w ? q[0] : D, F[A[1]] = w ? q[1] : 0, H.animate(t, z, B.easing).animate(F, z, B.easing, function() {
            y && E.hide(), a.effects.restore(E, k), a.effects.removeWrapper(E), x()
        })
    }
})(jQuery);
(function(a) {
    a.effects.effect.highlight = function(f, c) {
        var d = a(this),
            h = ["backgroundImage", "backgroundColor", "opacity"],
            b = a.effects.setMode(d, f.mode || "show"),
            g = {
                backgroundColor: d.css("backgroundColor")
            };
        "hide" === b && (g.opacity = 0), a.effects.save(d, h), d.show().css({
            backgroundImage: "none",
            backgroundColor: f.color || "#ffff99"
        }).animate(g, {
            queue: !1,
            duration: f.duration,
            easing: f.easing,
            complete: function() {
                "hide" === b && d.hide(), a.effects.restore(d, h), c()
            }
        })
    }
})(jQuery);
(function(a) {
    a.effects.effect.pulsate = function(t, m) {
        var z, j = a(this),
            x = a.effects.setMode(j, t.mode || "show"),
            g = "show" === x,
            b = "hide" === x,
            k = g || "hide" === x,
            q = 2 * (t.times || 5) + (k ? 1 : 0),
            w = t.duration / q,
            y = 0,
            v = j.queue(),
            f = v.length;
        for ((g || !j.is(":visible")) && (j.css("opacity", 0).show(), y = 1), z = 1; q > z; z++) {
            j.animate({
                opacity: y
            }, w, t.easing), y = 1 - y
        }
        j.animate({
            opacity: y
        }, w, t.easing), j.queue(function() {
            b && j.hide(), m()
        }), f > 1 && v.splice.apply(v, [1, 0].concat(v.splice(f, q + 1))), j.dequeue()
    }
})(jQuery);
(function(a) {
    a.effects.effect.puff = function(h, d) {
        var f = a(this),
            k = a.effects.setMode(f, h.mode || "hide"),
            c = "hide" === k,
            j = parseInt(h.percent, 10) || 150,
            g = j / 100,
            b = {
                height: f.height(),
                width: f.width(),
                outerHeight: f.outerHeight(),
                outerWidth: f.outerWidth()
            };
        a.extend(h, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: k,
            complete: d,
            percent: c ? j : 100,
            from: c ? b : {
                height: b.height * g,
                width: b.width * g,
                outerHeight: b.outerHeight * g,
                outerWidth: b.outerWidth * g
            }
        }), f.effect(h)
    }, a.effects.effect.scale = function(m, j) {
        var t = a(this),
            f = a.extend(!0, {}, m),
            q = a.effects.setMode(t, m.mode || "effect"),
            d = parseInt(m.percent, 10) || (0 === parseInt(m.percent, 10) ? 0 : "hide" === q ? 0 : 100),
            b = m.direction || "both",
            g = m.origin,
            k = {
                height: t.height(),
                width: t.width(),
                outerHeight: t.outerHeight(),
                outerWidth: t.outerWidth()
            },
            p = {
                y: "horizontal" !== b ? d / 100 : 1,
                x: "vertical" !== b ? d / 100 : 1
            };
        f.effect = "size", f.queue = !1, f.complete = j, "effect" !== q && (f.origin = g || ["middle", "center"], f.restore = !0), f.from = m.from || ("show" === q ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : k), f.to = {
            height: k.height * p.y,
            width: k.width * p.x,
            outerHeight: k.outerHeight * p.y,
            outerWidth: k.outerWidth * p.x
        }, f.fade && ("show" === q && (f.from.opacity = 0, f.to.opacity = 1), "hide" === q && (f.from.opacity = 1, f.to.opacity = 0)), t.effect(f)
    }, a.effects.effect.size = function(F, B) {
        var q, y, J, x = a(this),
            t = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
            A = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
            C = ["width", "height", "overflow"],
            H = ["fontSize"],
            k = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            G = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            w = a.effects.setMode(x, F.mode || "effect"),
            E = F.restore || "effect" !== w,
            D = F.scale || "both",
            z = F.origin || ["middle", "center"],
            j = x.css("position"),
            K = E ? t : A,
            I = {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            };
        "show" === w && x.show(), q = {
            height: x.height(),
            width: x.width(),
            outerHeight: x.outerHeight(),
            outerWidth: x.outerWidth()
        }, "toggle" === F.mode && "show" === w ? (x.from = F.to || I, x.to = F.from || q) : (x.from = F.from || ("show" === w ? I : q), x.to = F.to || ("hide" === w ? I : q)), J = {
            from: {
                y: x.from.height / q.height,
                x: x.from.width / q.width
            },
            to: {
                y: x.to.height / q.height,
                x: x.to.width / q.width
            }
        }, ("box" === D || "both" === D) && (J.from.y !== J.to.y && (K = K.concat(k), x.from = a.effects.setTransition(x, k, J.from.y, x.from), x.to = a.effects.setTransition(x, k, J.to.y, x.to)), J.from.x !== J.to.x && (K = K.concat(G), x.from = a.effects.setTransition(x, G, J.from.x, x.from), x.to = a.effects.setTransition(x, G, J.to.x, x.to))), ("content" === D || "both" === D) && J.from.y !== J.to.y && (K = K.concat(H).concat(C), x.from = a.effects.setTransition(x, H, J.from.y, x.from), x.to = a.effects.setTransition(x, H, J.to.y, x.to)), a.effects.save(x, K), x.show(), a.effects.createWrapper(x), x.css("overflow", "hidden").css(x.from), z && (y = a.effects.getBaseline(z, q), x.from.top = (q.outerHeight - x.outerHeight()) * y.y, x.from.left = (q.outerWidth - x.outerWidth()) * y.x, x.to.top = (q.outerHeight - x.to.outerHeight) * y.y, x.to.left = (q.outerWidth - x.to.outerWidth) * y.x), x.css(x.from), ("content" === D || "both" === D) && (k = k.concat(["marginTop", "marginBottom"]).concat(H), G = G.concat(["marginLeft", "marginRight"]), C = t.concat(k).concat(G), x.find("*[width]").each(function() {
            var b = a(this),
                c = {
                    height: b.height(),
                    width: b.width(),
                    outerHeight: b.outerHeight(),
                    outerWidth: b.outerWidth()
                };
            E && a.effects.save(b, C), b.from = {
                height: c.height * J.from.y,
                width: c.width * J.from.x,
                outerHeight: c.outerHeight * J.from.y,
                outerWidth: c.outerWidth * J.from.x
            }, b.to = {
                height: c.height * J.to.y,
                width: c.width * J.to.x,
                outerHeight: c.height * J.to.y,
                outerWidth: c.width * J.to.x
            }, J.from.y !== J.to.y && (b.from = a.effects.setTransition(b, k, J.from.y, b.from), b.to = a.effects.setTransition(b, k, J.to.y, b.to)), J.from.x !== J.to.x && (b.from = a.effects.setTransition(b, G, J.from.x, b.from), b.to = a.effects.setTransition(b, G, J.to.x, b.to)), b.css(b.from), b.animate(b.to, F.duration, F.easing, function() {
                E && a.effects.restore(b, C)
            })
        })), x.animate(x.to, {
            queue: !1,
            duration: F.duration,
            easing: F.easing,
            complete: function() {
                0 === x.to.opacity && x.css("opacity", x.from.opacity), "hide" === w && x.hide(), a.effects.restore(x, K), E || ("static" === j ? x.css({
                    position: "relative",
                    top: x.to.top,
                    left: x.to.left
                }) : a.each(["top", "left"], function(b, c) {
                    x.css(c, function(g, d) {
                        var f = parseInt(d, 10),
                            h = b ? x.to.left : x.to.top;
                        return "auto" === d ? h + "px" : f + h + "px"
                    })
                })), a.effects.removeWrapper(x), B()
            }
        })
    }
})(jQuery);
(function(a) {
    a.effects.effect.shake = function(E, A) {
        var k, x = a(this),
            H = ["position", "top", "bottom", "left", "right", "height", "width"],
            w = a.effects.setMode(x, E.mode || "effect"),
            q = E.direction || "left",
            z = E.distance || 20,
            B = E.times || 3,
            G = 2 * B + 1,
            j = Math.round(E.duration / G),
            F = "up" === q || "down" === q ? "top" : "left",
            t = "up" === q || "left" === q,
            D = {},
            C = {},
            y = {},
            b = x.queue(),
            I = b.length;
        for (a.effects.save(x, H), x.show(), a.effects.createWrapper(x), D[F] = (t ? "-=" : "+=") + z, C[F] = (t ? "+=" : "-=") + 2 * z, y[F] = (t ? "-=" : "+=") + 2 * z, x.animate(D, j, E.easing), k = 1; B > k; k++) {
            x.animate(C, j, E.easing).animate(y, j, E.easing)
        }
        x.animate(C, j, E.easing).animate(D, j / 2, E.easing).queue(function() {
            "hide" === w && x.hide(), a.effects.restore(x, H), a.effects.removeWrapper(x), A()
        }), I > 1 && b.splice.apply(b, [1, 0].concat(b.splice(I, G + 1))), x.dequeue()
    }
})(jQuery);
(function(a) {
    a.effects.effect.slide = function(m, j) {
        var v, f = a(this),
            q = ["position", "top", "bottom", "left", "right", "width", "height"],
            d = a.effects.setMode(f, m.mode || "show"),
            b = "show" === d,
            g = m.direction || "left",
            k = "up" === g || "down" === g ? "top" : "left",
            p = "up" === g || "left" === g,
            t = {};
        a.effects.save(f, q), f.show(), v = m.distance || f["top" === k ? "outerHeight" : "outerWidth"](!0), a.effects.createWrapper(f).css({
            overflow: "hidden"
        }), b && f.css(k, p ? isNaN(v) ? "-" + v : -v : v), t[k] = (b ? p ? "+=" : "-=" : p ? "-=" : "+=") + v, f.animate(t, {
            queue: !1,
            duration: m.duration,
            easing: m.easing,
            complete: function() {
                "hide" === d && f.hide(), a.effects.restore(f, q), a.effects.removeWrapper(f), j()
            }
        })
    }
})(jQuery);
(function(a) {
    a.effects.effect.transfer = function(p, k) {
        var x = a(this),
            g = a(p.to),
            v = "fixed" === g.css("position"),
            f = a("body"),
            b = v ? f.scrollTop() : 0,
            j = v ? f.scrollLeft() : 0,
            m = g.offset(),
            t = {
                top: m.top - b,
                left: m.left - j,
                height: g.innerHeight(),
                width: g.innerWidth()
            },
            w = x.offset(),
            q = a("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(p.className).css({
                top: w.top - b,
                left: w.left - j,
                height: x.innerHeight(),
                width: x.innerWidth(),
                position: v ? "fixed" : "absolute"
            }).animate(t, p.duration, p.easing, function() {
                q.remove(), k()
            })
    }
})(jQuery);
jQuery.fn.extend({
    setTracking: function(c, a, b) {
        return this.each(function() {
            var e = $(this);
            var d = e.attr("onclick") || e.attr("onClick") || "";
            if (d.indexOf("ga(") < 0 && d.indexOf("_gaq.push(") < 0) {
                e.removeAttr("onClick");
                e.attr("onclick", d + "ga('send', 'event', '" + c + "', '" + a + "', '" + b + "', 1);")
            }
        })
    }
});
var gaTracking = (function(h) {
    var i = {};
    var e = {
        "Tai khoan": "id.zing.vn",
        "Nap the": "pay.zing.vn"
    };
    var d = "";
    var j = "";

    function b(m) {
        return decodeURI((RegExp(m + "=(.+?)(&|$)").exec(h.location.search) || [, null])[1])
    }

    function a(m) {
        return m.replace(/([a-z])([A-Z])/g, "$1 $2")
    }

    function g(m) {
        return m.replace(/^[a-z]/, function(n) {
            return n.toUpperCase()
        })
    }

    function l(m) {
        m = a(m);
        m = m.toLowerCase();
        m = g(m);
        return m
    }

    function k() {
        var m = [];
        var q = $("body");
        var s = h.location.href;
        s = s.split("?")[0];
        s = s.split("#")[0];
        s = s.replace("http://", "");
        m = s.split("/");
        var t = "";
        var o = "Button Image";
        var p = "Homepage";
        if (q.hasClass("Teaser") || (m.length > 4 && m[1] == "intro" && (m[3] == "teaser"))) {
            p = "Teaser"
        } else {
            if (q.hasClass("Landingpage") || (m.length > 4 && m[1] == "intro" && (m[3] == "landing"))) {
                o = g(m[2].replace(/[-]/ig, " "));
                p = "Landingpage"
            } else {
                if (q.hasClass("Subpage") || m.length >= 3 && m[1] == "tin-tuc") {
                    p = "Subpage"
                } else {
                    if (q.hasClass("Subpage") || m.length >= 3 && m[1] == "su-kien" && (m[2].split("."))[0] == "danh-sach") {
                        p = "Subpage"
                    } else {
                        if (q.hasClass("Subpage") || m.length >= 4 && m[1] == "bai-viet" && m[2] == "huong-dan") {
                            p = "Subpage"
                        } else {
                            if (q.hasClass("Subpage") || m.length >= 4 && m[1] == "cam-nang") {
                                p = "Subpage"
                            } else {
                                if (q.hasClass("Event") || (m.length >= 2 && m[1] == "su-kien")) {
                                    o = g(m[2].replace(/[-]/ig, " "));
                                    p = "Subweb"
                                } else {
                                    p = "Homepage"
                                }
                            }
                        }
                    }
                }
            }
        }
        var n = {
            "Nap the": $(".NapThe"),
            "Quen mat khau": $(".ForgotPassword, .ForgotPass"),
            "Dang ky": $(".QuickRegister, .DangKyNhanh"),
            Download: $(".TaiGame, .Download"),
            PlayNow: $(".Playnow, .ChoiNgay"),
            Downloadhttp: $(".DownloadHttp")
        };
        for (inx in n) {
            var r = n[inx];
            r.size() && r.setTracking(inx, o, p)
        }
        i.trackingPlaynow = function() {
            ga("send", "event", "PlayNow", o, p, 1)
        };
        i.trackingDownload = function() {
            ga("send", "event", "Download", o, p, 1)
        };
        $(".DownloadBin").each(function(u) {
            $(this).setTracking("Downloadhttp Bin" + (u + 2), o, p)
        });
        $(".DownloadVdownloader").each(function(u) {
            $(this).setTracking("Downloadhttp Vdownloader", o, p)
        });
        $(".DownloadTorrent").each(function(u) {
            $(this).setTracking("Downloadhttp Torrent", o, p)
        });
        $("[class*=_track_]").each(function(u, v) {
            var x = $(this);
            var w = this.className.match(/\b_track_[^\s]+\b/);
            if (w.length <= 0) {
                return
            }
            var A = this.className.match(/\b_track_[^\s]+\b/)[0];
            var z = A.split("_");
            if (z.length == 3) {
                var y = l(a(z[2]));
                x.setTracking(y, "Link", p)
            } else {
                if (z.length > 3) {
                    switch (z[2]) {
                        case "img":
                            o = "Button Image";
                            break;
                        default:
                            o = "Link";
                            break
                    }
                    y = l(a(z[3]));
                    x.setTracking(y, o, p)
                }
            }
        })
    }

    function c(n, o, p, m) {
        n.each(function() {
            var r = $(this);
            var q = r.attr("onclick");
            q = (q == undefined) ? "" : (q + ";");
            if (q.indexOf("ga(") < 0) {
                r.attr("onclick", q + "ga('send', 'event', '" + o + "', '" + p + "', '" + m + "', 1);")
            }
        })
    }

    function f(n, o) {
        var m = $(n).attr("onclick");
        o = l(o);
        d = a(d);
        j = a(j);
        m = m == undefined ? "" : m
    }
    return {
        addTrack: f,
        convertCase: l,
        capitalizeFirst: g,
        unPascalCase: a,
        linkProcess: k,
        init: function() {
            k();
            this.trackingDownload = i.trackingDownload;
            this.trackingPlaynow = i.trackingPlaynow;
            return "init";
            var m = this;
            d = b("utm_campaign");
            j = b("utm_medium");
            var n = document.body.className.match(/\bGaMedium[^\s]+\b/);
            d = d == "null" ? "NoCampaign" : d.split("_")[0];
            j = (j != "null") ? j : "NoMedium";
            if (n != null && n.length) {
                j = n[0].replace("GaMedium", "")
            }
            $("a, area").each(function() {
                var q = this.className.match(/\bGaCategory[^\s]+\b/);
                var o = this.href;
                if (q) {
                    var r = q[0].replace("GaCategory", "");
                    f(this, r)
                } else {
                    if (jQuery(this).is("#ppregister_link")) {
                        f(this, "Dang ky")
                    }
                    for (var p in e) {
                        if (o.indexOf(e[p]) >= 0) {
                            f(this, p)
                        }
                    }
                }
            })
        }
    }
})(window, undefined);
jQuery(document).ready(function() {
    if (typeof ga != "undefined" || typeof _gaq != "undefined") {
        gaTracking.init();
        if (typeof _gaq == "undefined") {
            _gaq = {
                push: function(a) {
                    ga("send", "event", a[1], a[2], a[3], 1)
                }
            }
        } else {
            if (typeof ga == "undefined") {
                ga = function(h, g, l, k, j, i) {
                    _gaq.push(["_trackEvent", l, k, j, i])
                }
            }
        }
    }
});
(function(d, e, j, h, f, c, b) {
    d.GoogleAnalyticsObject = f;
    d[f] = d[f] || function() {
        (d[f].q = d[f].q || []).push(arguments)
    }, d[f].l = 1 * new Date();
    c = e.createElement(j), b = e.getElementsByTagName(j)[0];
    c.async = 1;
    c.src = h;
    b.parentNode.insertBefore(c, b)
})(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");
ga("create", "UA-57167487-24", "auto");
ga("send", "pageview");
var productCode = "vltkm";
var arrayBanner = ["1"];
var arrayBigBanner = [];
var CodeProduct = "vltkm";
var CookieProduct = "vltkm_Cookie";
var CookieBottomProduct = "vltkm_CookieBottom";
/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(a, x, i, u) {
    var k = i("html"),
        g = i(a),
        e = i(x),
        j = i.fancybox = function() {
            j.open.apply(this, arguments)
        },
        o = navigator.userAgent.match(/msie/i),
        d = null,
        A = x.createTouch !== u,
        y = function(b) {
            return b && b.hasOwnProperty && b instanceof i
        },
        c = function(b) {
            return b && "string" === i.type(b)
        },
        z = function(b) {
            return c(b) && 0 < b.indexOf("%")
        },
        h = function(b, l) {
            var f = parseInt(b, 10) || 0;
            l && z(b) && (f *= j.getViewport()[l] / 100);
            return Math.ceil(f)
        },
        m = function(l, f) {
            return h(l, f) + "px"
        };
    i.extend(j, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !A,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: 0.5,
            leftRatio: 0.5,
            scrolling: "no",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3000,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {
                dataType: "html",
                headers: {
                    "X-fancyBox": !0
                }
            },
            iframe: {
                scrolling: "no",
                preload: !0
            },
            swf: {
                wmode: "transparent",
                allowfullscreen: "true",
                allowscriptaccess: "always"
            },
            keys: {
                next: {
                    13: "left",
                    34: "up",
                    39: "left",
                    40: "up"
                },
                prev: {
                    8: "right",
                    33: "down",
                    37: "right",
                    38: "down"
                },
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {
                next: "left",
                prev: "right"
            },
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (o ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {
                overlay: !0,
                title: !0
            },
            onCancel: i.noop,
            beforeLoad: i.noop,
            afterLoad: i.noop,
            beforeShow: i.noop,
            afterShow: i.noop,
            beforeChange: i.noop,
            beforeClose: i.noop,
            afterClose: i.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {
            timer: null,
            isActive: !1
        },
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function(b, f) {
            if (b && (i.isPlainObject(f) || (f = {}), !1 !== j.close(!0))) {
                return i.isArray(b) || (b = y(b) ? i(b).get() : [b]), i.each(b, function(v, w) {
                    var q = {},
                        t, s, r, n, p;
                    "object" === i.type(w) && (w.nodeType && (w = i(w)), y(w) ? (q = {
                        href: w.data("fancybox-href") || w.attr("href"),
                        title: w.data("fancybox-title") || w.attr("title"),
                        isDom: !0,
                        element: w
                    }, i.metadata && i.extend(!0, q, w.metadata())) : q = w);
                    t = f.href || q.href || (c(w) ? w : null);
                    s = f.title !== u ? f.title : q.title || "";
                    n = (r = f.content || q.content) ? "html" : f.type || q.type;
                    !n && q.isDom && (n = w.data("fancybox-type"), n || (n = (n = w.prop("class").match(/fancybox\.(\w+)/)) ? n[1] : null));
                    c(t) && (n || (j.isImage(t) ? n = "image" : j.isSWF(t) ? n = "swf" : "#" === t.charAt(0) ? n = "inline" : c(w) && (n = "html", r = w)), "ajax" === n && (p = t.split(/\s+/, 2), t = p.shift(), p = p.shift()));
                    r || ("inline" === n ? t ? r = i(c(t) ? t.replace(/.*(?=#[^\s]+$)/, "") : t) : q.isDom && (r = w) : "html" === n ? r = t : !n && (!t && q.isDom) && (n = "inline", r = w));
                    i.extend(q, {
                        href: t,
                        type: n,
                        content: r,
                        title: s,
                        selector: p
                    });
                    b[v] = q
                }), j.opts = i.extend(!0, {}, j.defaults, f), f.keys !== u && (j.opts.keys = f.keys ? i.extend({}, j.defaults.keys, f.keys) : !1), j.group = b, j._start(j.opts.index)
            }
        },
        cancel: function() {
            var b = j.coming;
            b && !1 !== j.trigger("onCancel") && (j.hideLoading(), j.ajaxLoad && j.ajaxLoad.abort(), j.ajaxLoad = null, j.imgPreload && (j.imgPreload.onload = j.imgPreload.onerror = null), b.wrap && b.wrap.stop(!0, !0).trigger("onReset").remove(), j.coming = null, j.current || j._afterZoomOut(b))
        },
        close: function(b) {
            j.cancel();
            !1 !== j.trigger("beforeClose") && (j.unbindEvents(), j.isActive && (!j.isOpen || !0 === b ? (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(), j._afterZoomOut()) : (j.isOpen = j.isOpened = !1, j.isClosing = !0, i(".fancybox-item, .fancybox-nav").remove(), j.wrap.stop(!0, !0).removeClass("fancybox-opened"), j.transitions[j.current.closeMethod]())))
        },
        play: function(b) {
            var l = function() {
                    clearTimeout(j.player.timer)
                },
                f = function() {
                    l();
                    j.current && j.player.isActive && (j.player.timer = setTimeout(j.next, j.current.playSpeed))
                },
                n = function() {
                    l();
                    e.unbind(".player");
                    j.player.isActive = !1;
                    j.trigger("onPlayEnd")
                };
            if (!0 === b || !j.player.isActive && !1 !== b) {
                if (j.current && (j.current.loop || j.current.index < j.group.length - 1)) {
                    j.player.isActive = !0, e.bind({
                        "onCancel.player beforeClose.player": n,
                        "onUpdate.player": f,
                        "beforeLoad.player": l
                    }), f(), j.trigger("onPlayStart")
                }
            } else {
                n()
            }
        },
        next: function(b) {
            var f = j.current;
            f && (c(b) || (b = f.direction.next), j.jumpto(f.index + 1, b, "next"))
        },
        prev: function(b) {
            var f = j.current;
            f && (c(b) || (b = f.direction.prev), j.jumpto(f.index - 1, b, "prev"))
        },
        jumpto: function(b, l, f) {
            var n = j.current;
            n && (b = h(b), j.direction = l || n.direction[b >= n.index ? "next" : "prev"], j.router = f || "jumpto", n.loop && (0 > b && (b = n.group.length + b % n.group.length), b %= n.group.length), n.group[b] !== u && (j.cancel(), j._start(b)))
        },
        reposition: function(b, n) {
            var l = j.current,
                p = l ? l.wrap : null,
                f;
            p && (f = j._getPosition(n), b && "scroll" === b.type ? (delete f.position, p.stop(!0, !0).animate(f, 200)) : (p.css(f), l.pos = i.extend({}, l.dim, f)))
        },
        update: function(b) {
            var l = b && b.type,
                f = !l || "orientationchange" === l;
            f && (clearTimeout(d), d = null);
            j.isOpen && !d && (d = setTimeout(function() {
                var n = j.current;
                n && !j.isClosing && (j.wrap.removeClass("fancybox-tmp"), (f || "load" === l || "resize" === l && n.autoResize) && j._setDimension(), "scroll" === l && n.canShrink || j.reposition(b), j.trigger("onUpdate"), d = null)
            }, f && !A ? 0 : 300))
        },
        toggle: function(b) {
            j.isOpen && (j.current.fitToView = "boolean" === i.type(b) ? b : !j.current.fitToView, A && (j.wrap.removeAttr("style").addClass("fancybox-tmp"), j.trigger("onUpdate")), j.update())
        },
        hideLoading: function() {
            e.unbind(".loading");
            i("#fancybox-loading").remove()
        },
        showLoading: function() {
            var b, f;
            j.hideLoading();
            b = i('<div id="fancybox-loading"><div></div></div>').click(j.cancel).appendTo("body");
            e.bind("keydown.loading", function(l) {
                if (27 === (l.which || l.keyCode)) {
                    l.preventDefault(), j.cancel()
                }
            });
            j.defaults.fixed || (f = j.getViewport(), b.css({
                position: "absolute",
                top: 0.5 * f.h + f.y,
                left: 0.5 * f.w + f.x
            }))
        },
        getViewport: function() {
            var b = j.current && j.current.locked || !1,
                f = {
                    x: g.scrollLeft(),
                    y: g.scrollTop()
                };
            b ? (f.w = b[0].clientWidth, f.h = b[0].clientHeight) : (f.w = A && a.innerWidth ? a.innerWidth : g.width(), f.h = A && a.innerHeight ? a.innerHeight : g.height());
            return f
        },
        unbindEvents: function() {
            j.wrap && y(j.wrap) && j.wrap.unbind(".fb");
            e.unbind(".fb");
            g.unbind(".fb")
        },
        bindEvents: function() {
            var b = j.current,
                f;
            b && (g.bind("orientationchange.fb" + (A ? "" : " resize.fb") + (b.autoCenter && !b.locked ? " scroll.fb" : ""), j.update), (f = b.keys) && e.bind("keydown.fb", function(n) {
                var p = n.which || n.keyCode,
                    l = n.target || n.srcElement;
                if (27 === p && j.coming) {
                    return !1
                }!n.ctrlKey && (!n.altKey && !n.shiftKey && !n.metaKey && (!l || !l.type && !i(l).is("[contenteditable]"))) && i.each(f, function(r, q) {
                    if (1 < b.group.length && q[p] !== u) {
                        return j[r](q[p]), n.preventDefault(), !1
                    }
                    if (-1 < i.inArray(p, q)) {
                        return j[r](), n.preventDefault(), !1
                    }
                })
            }), i.fn.mousewheel && b.mouseWheel && j.wrap.bind("mousewheel.fb", function(r, s, l, q) {
                for (var p = i(r.target || null), n = !1; p.length && !n && !p.is(".fancybox-skin") && !p.is(".fancybox-wrap");) {
                    n = p[0] && !(p[0].style.overflow && "hidden" === p[0].style.overflow) && (p[0].clientWidth && p[0].scrollWidth > p[0].clientWidth || p[0].clientHeight && p[0].scrollHeight > p[0].clientHeight), p = i(p).parent()
                }
                if (0 !== s && !n && 1 < j.group.length && !b.canShrink) {
                    if (0 < q || 0 < l) {
                        j.prev(0 < q ? "down" : "left")
                    } else {
                        if (0 > q || 0 > l) {
                            j.next(0 > q ? "up" : "right")
                        }
                    }
                    r.preventDefault()
                }
            }))
        },
        trigger: function(b, l) {
            var f, n = l || j.coming || j.current;
            if (n) {
                i.isFunction(n[b]) && (f = n[b].apply(n, Array.prototype.slice.call(arguments, 1)));
                if (!1 === f) {
                    return !1
                }
                n.helpers && i.each(n.helpers, function(q, p) {
                    if (p && j.helpers[q] && i.isFunction(j.helpers[q][b])) {
                        j.helpers[q][b](i.extend(!0, {}, j.helpers[q].defaults, p), n)
                    }
                });
                e.trigger(b)
            }
        },
        isImage: function(b) {
            return c(b) && b.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function(b) {
            return c(b) && b.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function(b) {
            var l = {},
                f, n;
            b = h(b);
            f = j.group[b] || null;
            if (!f) {
                return !1
            }
            l = i.extend(!0, {}, j.opts, f);
            f = l.margin;
            n = l.padding;
            "number" === i.type(f) && (l.margin = [f, f, f, f]);
            "number" === i.type(n) && (l.padding = [n, n, n, n]);
            l.modal && i.extend(!0, l, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: {
                    overlay: {
                        closeClick: !1
                    }
                }
            });
            l.autoSize && (l.autoWidth = l.autoHeight = !0);
            "auto" === l.width && (l.autoWidth = !0);
            "auto" === l.height && (l.autoHeight = !0);
            l.group = j.group;
            l.index = b;
            j.coming = l;
            if (!1 === j.trigger("beforeLoad")) {
                j.coming = null
            } else {
                n = l.type;
                f = l.href;
                if (!n) {
                    return j.coming = null, j.current && j.router && "jumpto" !== j.router ? (j.current.index = b, j[j.router](j.direction)) : !1
                }
                j.isActive = !0;
                if ("image" === n || "swf" === n) {
                    l.autoHeight = l.autoWidth = !1, l.scrolling = "visible"
                }
                "image" === n && (l.aspectRatio = !0);
                "iframe" === n && A && (l.scrolling = "scroll");
                l.wrap = i(l.tpl.wrap).addClass("fancybox-" + (A ? "mobile" : "desktop") + " fancybox-type-" + n + " fancybox-tmp " + l.wrapCSS).appendTo(l.parent || "body");
                i.extend(l, {
                    skin: i(".fancybox-skin", l.wrap),
                    outer: i(".fancybox-outer", l.wrap),
                    inner: i(".fancybox-inner", l.wrap)
                });
                i.each(["Top", "Right", "Bottom", "Left"], function(q, p) {
                    l.skin.css("padding" + p, m(l.padding[q]))
                });
                j.trigger("onReady");
                if ("inline" === n || "html" === n) {
                    if (!l.content || !l.content.length) {
                        return j._error("content")
                    }
                } else {
                    if (!f) {
                        return j._error("href")
                    }
                }
                "image" === n ? j._loadImage() : "ajax" === n ? j._loadAjax() : "iframe" === n ? j._loadIframe() : j._afterLoad()
            }
        },
        _error: function(b) {
            i.extend(j.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: b,
                content: j.coming.tpl.error
            });
            j._afterLoad()
        },
        _loadImage: function() {
            var b = j.imgPreload = new Image;
            b.onload = function() {
                this.onload = this.onerror = null;
                j.coming.width = this.width / j.opts.pixelRatio;
                j.coming.height = this.height / j.opts.pixelRatio;
                j._afterLoad()
            };
            b.onerror = function() {
                this.onload = this.onerror = null;
                j._error("image")
            };
            b.src = j.coming.href;
            !0 !== b.complete && j.showLoading()
        },
        _loadAjax: function() {
            var b = j.coming;
            j.showLoading();
            j.ajaxLoad = i.ajax(i.extend({}, b.ajax, {
                url: b.href,
                error: function(f, l) {
                    j.coming && "abort" !== l ? j._error("ajax", f) : j.hideLoading()
                },
                success: function(l, f) {
                    "success" === f && (b.content = l, j._afterLoad())
                }
            }))
        },
        _loadIframe: function() {
            var b = j.coming,
                f = i(b.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", A ? "no" : b.iframe.scrolling).attr("src", b.href);
            i(b.wrap).bind("onReset", function() {
                try {
                    i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (l) {}
            });
            b.iframe.preload && (j.showLoading(), f.one("load", function() {
                i(this).data("ready", 1);
                A || i(this).bind("load.fb", j.update);
                i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                j._afterLoad()
            }));
            b.content = f.appendTo(b.inner);
            b.iframe.preload || j._afterLoad()
        },
        _preloadImages: function() {
            var b = j.group,
                q = j.current,
                p = b.length,
                r = q.preload ? Math.min(q.preload, p - 1) : 0,
                n, l;
            for (l = 1; l <= r; l += 1) {
                n = b[(q.index + l) % p], "image" === n.type && n.href && ((new Image).src = n.href)
            }
        },
        _afterLoad: function() {
            var b = j.coming,
                q = j.current,
                p, r, f, n, l;
            j.hideLoading();
            if (b && !1 !== j.isActive) {
                if (!1 === j.trigger("afterLoad", b, q)) {
                    b.wrap.stop(!0).trigger("onReset").remove(), j.coming = null
                } else {
                    q && (j.trigger("beforeChange", q), q.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
                    j.unbindEvents();
                    p = b.content;
                    r = b.type;
                    f = b.scrolling;
                    i.extend(j, {
                        wrap: b.wrap,
                        skin: b.skin,
                        outer: b.outer,
                        inner: b.inner,
                        current: b,
                        previous: q
                    });
                    n = b.href;
                    switch (r) {
                        case "inline":
                        case "ajax":
                        case "html":
                            b.selector ? p = i("<div>").html(p).find(b.selector) : y(p) && (p.data("fancybox-placeholder") || p.data("fancybox-placeholder", i('<div class="fancybox-placeholder"></div>').insertAfter(p).hide()), p = p.show().detach(), b.wrap.bind("onReset", function() {
                                i(this).find(p).length && p.hide().replaceAll(p.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                            }));
                            break;
                        case "image":
                            p = b.tpl.image.replace("{href}", n);
                            break;
                        case "swf":
                            p = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + n + '"></param>', l = "", i.each(b.swf, function(t, s) {
                                p += '<param name="' + t + '" value="' + s + '"></param>';
                                l += " " + t + '="' + s + '"'
                            }), p += '<embed src="' + n + '" type="application/x-shockwave-flash" width="100%" height="100%"' + l + "></embed></object>"
                    }(!y(p) || !p.parent().is(b.inner)) && b.inner.append(p);
                    j.trigger("beforeShow");
                    b.inner.css("overflow", "yes" === f ? "scroll" : "no" === f ? "hidden" : f);
                    j._setDimension();
                    j.reposition();
                    j.isOpen = !1;
                    j.coming = null;
                    j.bindEvents();
                    if (j.isOpened) {
                        if (q.prevMethod) {
                            j.transitions[q.prevMethod]()
                        }
                    } else {
                        i(".fancybox-wrap").not(b.wrap).stop(!0).trigger("onReset").remove()
                    }
                    j.transitions[j.isOpened ? b.nextMethod : b.openMethod]();
                    j._preloadImages()
                }
            }
        },
        _setDimension: function() {
            var ad = j.getViewport(),
                ab = 0,
                aa = !1,
                ac = !1,
                aa = j.wrap,
                W = j.skin,
                Z = j.inner,
                Y = j.current,
                ac = Y.width,
                X = Y.height,
                V = Y.minWidth,
                K = Y.minHeight,
                U = Y.maxWidth,
                T = Y.maxHeight,
                N = Y.scrolling,
                R = Y.scrollOutside ? Y.scrollbarWidth : 0,
                l = Y.margin,
                f = h(l[1] + l[3]),
                P = h(l[0] + l[2]),
                I, b, L, O, S, J, Q, M, w;
            aa.add(W).add(Z).width("auto").height("auto").removeClass("fancybox-tmp");
            l = h(W.outerWidth(!0) - W.width());
            I = h(W.outerHeight(!0) - W.height());
            b = f + l;
            L = P + I;
            O = z(ac) ? (ad.w - b) * h(ac) / 100 : ac;
            S = z(X) ? (ad.h - L) * h(X) / 100 : X;
            if ("iframe" === Y.type) {
                if (w = Y.content, Y.autoHeight && 1 === w.data("ready")) {
                    try {
                        w[0].contentWindow.document.location && (Z.width(O).height(9999), J = w.contents().find("body"), R && J.css("overflow-x", "hidden"), S = J.outerHeight(!0))
                    } catch (E) {}
                }
            } else {
                if (Y.autoWidth || Y.autoHeight) {
                    Z.addClass("fancybox-tmp"), Y.autoWidth || Z.width(O), Y.autoHeight || Z.height(S), Y.autoWidth && (O = Z.width()), Y.autoHeight && (S = Z.height()), Z.removeClass("fancybox-tmp")
                }
            }
            ac = h(O);
            X = h(S);
            M = O / S;
            V = h(z(V) ? h(V, "w") - b : V);
            U = h(z(U) ? h(U, "w") - b : U);
            K = h(z(K) ? h(K, "h") - L : K);
            T = h(z(T) ? h(T, "h") - L : T);
            J = U;
            Q = T;
            Y.fitToView && (U = Math.min(ad.w - b, U), T = Math.min(ad.h - L, T));
            b = ad.w - f;
            P = ad.h - P;
            Y.aspectRatio ? (ac > U && (ac = U, X = h(ac / M)), X > T && (X = T, ac = h(X * M)), ac < V && (ac = V, X = h(ac / M)), X < K && (X = K, ac = h(X * M))) : (ac = Math.max(V, Math.min(ac, U)), Y.autoHeight && "iframe" !== Y.type && (Z.width(ac), X = Z.height()), X = Math.max(K, Math.min(X, T)));
            if (Y.fitToView) {
                if (Z.width(ac).height(X), aa.width(ac + l), ad = aa.width(), f = aa.height(), Y.aspectRatio) {
                    for (;
                        (ad > b || f > P) && (ac > V && X > K) && !(19 < ab++);) {
                        X = Math.max(K, Math.min(T, X - 10)), ac = h(X * M), ac < V && (ac = V, X = h(ac / M)), ac > U && (ac = U, X = h(ac / M)), Z.width(ac).height(X), aa.width(ac + l), ad = aa.width(), f = aa.height()
                    }
                } else {
                    ac = Math.max(V, Math.min(ac, ac - (ad - b))), X = Math.max(K, Math.min(X, X - (f - P)))
                }
            }
            R && ("auto" === N && X < S && ac + l + R < b) && (ac += R);
            Z.width(ac).height(X);
            aa.width(ac + l);
            ad = aa.width();
            f = aa.height();
            aa = (ad > b || f > P) && ac > V && X > K;
            ac = Y.aspectRatio ? ac < J && X < Q && ac < O && X < S : (ac < J || X < Q) && (ac < O || X < S);
            i.extend(Y, {
                dim: {
                    width: m(ad),
                    height: m(f)
                },
                origWidth: O,
                origHeight: S,
                canShrink: aa,
                canExpand: ac,
                wPadding: l,
                hPadding: I,
                wrapSpace: f - W.outerHeight(!0),
                skinSpace: W.height() - X
            });
            !w && (Y.autoHeight && X > K && X < T && !ac) && Z.height("auto")
        },
        _getPosition: function(b) {
            var q = j.current,
                p = j.getViewport(),
                r = q.margin,
                n = j.wrap.width() + r[1] + r[3],
                l = j.wrap.height() + r[0] + r[2],
                r = {
                    position: "absolute",
                    top: r[0],
                    left: r[3]
                };
            q.autoCenter && q.fixed && !b && l <= p.h && n <= p.w ? r.position = "fixed" : q.locked || (r.top += p.y, r.left += p.x);
            r.top = m(Math.max(r.top, r.top + (p.h - l) * q.topRatio));
            r.left = m(Math.max(r.left, r.left + (p.w - n) * q.leftRatio));
            return r
        },
        _afterZoomIn: function() {
            var b = j.current;
            b && (j.isOpen = j.isOpened = !0, j.wrap.css("overflow", "visible").addClass("fancybox-opened"), j.update(), (b.closeClick || b.nextClick && 1 < j.group.length) && j.inner.css("cursor", "pointer").bind("click.fb", function(f) {
                !i(f.target).is("a") && !i(f.target).parent().is("a") && (f.preventDefault(), j[b.closeClick ? "close" : "next"]())
            }), b.closeBtn && i(b.tpl.closeBtn).appendTo(j.skin).bind("click.fb", function(f) {
                f.preventDefault();
                j.close()
            }), b.arrows && 1 < j.group.length && ((b.loop || 0 < b.index) && i(b.tpl.prev).appendTo(j.outer).bind("click.fb", j.prev), (b.loop || b.index < j.group.length - 1) && i(b.tpl.next).appendTo(j.outer).bind("click.fb", j.next)), j.trigger("afterShow"), !b.loop && b.index === b.group.length - 1 ? j.play(!1) : j.opts.autoPlay && !j.player.isActive && (j.opts.autoPlay = !1, j.play()))
        },
        _afterZoomOut: function(b) {
            b = b || j.current;
            i(".fancybox-wrap").trigger("onReset").remove();
            i.extend(j, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });
            j.trigger("afterClose", b)
        }
    });
    j.transitions = {
        getOrigPosition: function() {
            var v = j.current,
                s = v.element,
                r = v.orig,
                t = {},
                q = 50,
                p = 50,
                n = v.hPadding,
                l = v.wPadding,
                b = j.getViewport();
            !r && (v.isDom && s.is(":visible")) && (r = s.find("img:first"), r.length || (r = s));
            y(r) ? (t = r.offset(), r.is("img") && (q = r.outerWidth(), p = r.outerHeight())) : (t.top = b.y + (b.h - p) * v.topRatio, t.left = b.x + (b.w - q) * v.leftRatio);
            if ("fixed" === j.wrap.css("position") || v.locked) {
                t.top -= b.y, t.left -= b.x
            }
            return t = {
                top: m(t.top - n * v.topRatio),
                left: m(t.left - l * v.leftRatio),
                width: m(q + l),
                height: m(p + n)
            }
        },
        step: function(b, r) {
            var q, s, p = r.prop;
            s = j.current;
            var n = s.wrapSpace,
                l = s.skinSpace;
            if ("width" === p || "height" === p) {
                q = r.end === r.start ? 1 : (b - r.start) / (r.end - r.start), j.isClosing && (q = 1 - q), s = "width" === p ? s.wPadding : s.hPadding, s = b - s, j.skin[p](h("width" === p ? s : s - n * q)), j.inner[p](h("width" === p ? s : s - n * q - l * q))
            }
        },
        zoomIn: function() {
            var b = j.current,
                n = b.pos,
                l = b.openEffect,
                p = "elastic" === l,
                f = i.extend({
                    opacity: 1
                }, n);
            delete f.position;
            p ? (n = this.getOrigPosition(), b.openOpacity && (n.opacity = 0.1)) : "fade" === l && (n.opacity = 0.1);
            j.wrap.css(n).animate(f, {
                duration: "none" === l ? 0 : b.openSpeed,
                easing: b.openEasing,
                step: p ? this.step : null,
                complete: j._afterZoomIn
            })
        },
        zoomOut: function() {
            var b = j.current,
                l = b.closeEffect,
                f = "elastic" === l,
                n = {
                    opacity: 0.1
                };
            f && (n = this.getOrigPosition(), b.closeOpacity && (n.opacity = 0.1));
            j.wrap.animate(n, {
                duration: "none" === l ? 0 : b.closeSpeed,
                easing: b.closeEasing,
                step: f ? this.step : null,
                complete: j._afterZoomOut
            })
        },
        changeIn: function() {
            var b = j.current,
                q = b.nextEffect,
                p = b.pos,
                r = {
                    opacity: 1
                },
                n = j.direction,
                l;
            p.opacity = 0.1;
            "elastic" === q && (l = "down" === n || "up" === n ? "top" : "left", "down" === n || "right" === n ? (p[l] = m(h(p[l]) - 200), r[l] = "+=200px") : (p[l] = m(h(p[l]) + 200), r[l] = "-=200px"));
            "none" === q ? j._afterZoomIn() : j.wrap.css(p).animate(r, {
                duration: b.nextSpeed,
                easing: b.nextEasing,
                complete: j._afterZoomIn
            })
        },
        changeOut: function() {
            var b = j.previous,
                l = b.prevEffect,
                f = {
                    opacity: 0.1
                },
                n = j.direction;
            "elastic" === l && (f["down" === n || "up" === n ? "top" : "left"] = ("up" === n || "left" === n ? "-" : "+") + "=200px");
            b.wrap.animate(f, {
                duration: "none" === l ? 0 : b.prevSpeed,
                easing: b.prevEasing,
                complete: function() {
                    i(this).trigger("onReset").remove()
                }
            })
        }
    };
    j.helpers.overlay = {
        defaults: {
            closeClick: !0,
            speedOut: 200,
            showEarly: !0,
            css: {},
            locked: !A,
            fixed: !0
        },
        overlay: null,
        fixed: !1,
        el: i("html"),
        create: function(b) {
            b = i.extend({}, this.defaults, b);
            this.overlay && this.close();
            this.overlay = i('<div class="fancybox-overlay"></div>').appendTo(j.coming ? j.coming.parent : b.parent);
            this.fixed = !1;
            b.fixed && j.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function(b) {
            var f = this;
            b = i.extend({}, this.defaults, b);
            this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(b);
            this.fixed || (g.bind("resize.overlay", i.proxy(this.update, this)), this.update());
            b.closeClick && this.overlay.bind("click.overlay", function(l) {
                if (i(l.target).hasClass("fancybox-overlay")) {
                    return j.isActive ? j.close() : f.close(), !1
                }
            });
            this.overlay.css(b.css).show()
        },
        close: function() {
            var l, f;
            g.unbind("resize.overlay");
            this.el.hasClass("fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"), l = g.scrollTop(), f = g.scrollLeft(), this.el.removeClass("fancybox-lock"), g.scrollTop(l).scrollLeft(f));
            i(".fancybox-overlay").remove().hide();
            i.extend(this, {
                overlay: null,
                fixed: !1
            })
        },
        update: function() {
            var l = "100%",
                f;
            this.overlay.width(l).height("100%");
            o ? (f = Math.max(x.documentElement.offsetWidth, x.body.offsetWidth), e.width() > f && (l = e.width())) : e.width() > g.width() && (l = e.width());
            this.overlay.width(l).height(e.height())
        },
        onReady: function(l, f) {
            var n = this.overlay;
            i(".fancybox-overlay").stop(!0, !0);
            n || this.create(l);
            l.locked && (this.fixed && f.fixed) && (n || (this.margin = e.height() > g.height() ? i("html").css("margin-right").replace("px", "") : !1), f.locked = this.overlay.append(f.wrap), f.fixed = !1);
            !0 === l.showEarly && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function(l, f) {
            var n, p;
            f.locked && (!1 !== this.margin && (i("*").filter(function() {
                return "fixed" === i(this).css("position") && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), n = g.scrollTop(), p = g.scrollLeft(), this.el.addClass("fancybox-lock"), g.scrollTop(n).scrollLeft(p));
            this.open(l)
        },
        onUpdate: function() {
            this.fixed || this.update()
        },
        afterClose: function(b) {
            this.overlay && !j.coming && this.overlay.fadeOut(b.speedOut, i.proxy(this.close, this))
        }
    };
    j.helpers.title = {
        defaults: {
            type: "float",
            position: "bottom"
        },
        beforeShow: function(b) {
            var l = j.current,
                f = l.title,
                n = b.type;
            i.isFunction(f) && (f = f.call(l.element, l));
            if (c(f) && "" !== i.trim(f)) {
                l = i('<div class="fancybox-title fancybox-title-' + n + '-wrap">' + f + "</div>");
                switch (n) {
                    case "inside":
                        n = j.skin;
                        break;
                    case "outside":
                        n = j.wrap;
                        break;
                    case "over":
                        n = j.inner;
                        break;
                    default:
                        n = j.skin, l.appendTo("body"), o && l.width(l.width()), l.wrapInner('<span class="child"></span>'), j.current.margin[2] += Math.abs(h(l.css("margin-bottom")))
                }
                l["top" === b.position ? "prependTo" : "appendTo"](n)
            }
        }
    };
    i.fn.fancybox = function(b) {
        var n, l = i(this),
            p = this.selector || "",
            f = function(v) {
                var t = i(this).blur(),
                    s = n,
                    r, q;
                !v.ctrlKey && (!v.altKey && !v.shiftKey && !v.metaKey) && !t.is(".fancybox-wrap") && (r = b.groupAttr || "data-fancybox-group", q = t.attr(r), q || (r = "rel", q = t.get(0)[r]), q && ("" !== q && "nofollow" !== q) && (t = p.length ? i(p) : l, t = t.filter("[" + r + '="' + q + '"]'), s = t.index(this)), b.index = s, !1 !== j.open(t, b) && v.preventDefault())
            };
        b = b || {};
        n = b.index || 0;
        !p || !1 === b.live ? l.unbind("click.fb-start").bind("click.fb-start", f) : e.undelegate(p, "click.fb-start").delegate(p + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", f);
        this.filter("[data-fancybox-start=1]").trigger("click");
        return this
    };
    e.ready(function() {
        var b, l;
        i.scrollbarWidth === u && (i.scrollbarWidth = function() {
            var p = i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                n = p.children(),
                n = n.innerWidth() - n.height(99).innerWidth();
            p.remove();
            return n
        });
        if (i.support.fixedPosition === u) {
            b = i.support;
            l = i('<div style="position:fixed;top:20px;"></div>').appendTo("body");
            var f = 20 === l[0].offsetTop || 15 === l[0].offsetTop;
            l.remove();
            b.fixedPosition = f
        }
        i.extend(j.defaults, {
            scrollbarWidth: i.scrollbarWidth(),
            fixed: i.support.fixedPosition,
            parent: i("body")
        });
        b = i(a).width();
        k.addClass("fancybox-lock-test");
        l = i(a).width();
        k.removeClass("fancybox-lock-test");
        i("<style type='text/css'>.fancybox-margin{margin-right:" + (l - b) + "px;}</style>").appendTo("head")
    })
})(window, document, jQuery);
/*!
 * Thumbnail helper for fancyBox
 * version: 1.0.7 (Mon, 01 Oct 2012)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             thumbs: {
 *                 width  : 50,
 *                 height : 50
 *             }
 *         }
 *     });
 *
 */
(function(b) {
    var a = b.fancybox;
    a.helpers.thumbs = {
        defaults: {
            width: 50,
            height: 50,
            position: "bottom",
            source: function(d) {
                var c;
                if (d.element) {
                    c = b(d.element).find("img").attr("src")
                }
                if (!c && d.type === "image" && d.href) {
                    c = d.href
                }
                return c
            }
        },
        wrap: null,
        list: null,
        width: 0,
        init: function(f, i) {
            var e = this,
                g, c = f.width,
                h = f.height,
                d = f.source;
            g = "";
            for (var j = 0; j < i.group.length; j++) {
                g += '<li><a style="width:' + c + "px;height:" + h + 'px;" href="javascript:jQuery.fancybox.jumpto(' + j + ');"></a></li>'
            }
            this.wrap = b('<div id="fancybox-thumbs"></div>').addClass(f.position).appendTo("body");
            this.list = b("<ul>" + g + "</ul>").appendTo(this.wrap);
            b.each(i.group, function(l) {
                var k = d(i.group[l]);
                if (!k) {
                    return
                }
                b("<img />").load(function() {
                    var q = this.width,
                        m = this.height,
                        p, n, o;
                    if (!e.list || !q || !m) {
                        return
                    }
                    p = q / c;
                    n = m / h;
                    o = e.list.children().eq(l).find("a");
                    if (p >= 1 && n >= 1) {
                        if (p > n) {
                            q = Math.floor(q / n);
                            m = h
                        } else {
                            q = c;
                            m = Math.floor(m / p)
                        }
                    }
                    b(this).css({
                        width: q,
                        height: m,
                        top: Math.floor(h / 2 - m / 2),
                        left: Math.floor(c / 2 - q / 2)
                    });
                    o.width(c).height(h);
                    b(this).hide().appendTo(o).fadeIn(300)
                }).attr("src", k)
            });
            this.width = this.list.children().eq(0).outerWidth(true);
            this.list.width(this.width * (i.group.length + 1)).css("left", Math.floor(b(window).width() * 0.5 - (i.index * this.width + this.width * 0.5)))
        },
        beforeLoad: function(c, d) {
            if (d.group.length < 2) {
                d.helpers.thumbs = false;
                return
            }
            d.margin[c.position === "top" ? 0 : 2] += ((c.height) + 15)
        },
        afterShow: function(c, d) {
            if (this.list) {
                this.onUpdate(c, d)
            } else {
                this.init(c, d)
            }
            this.list.children().removeClass("active").eq(d.index).addClass("active")
        },
        onUpdate: function(c, d) {
            if (this.list) {
                this.list.stop(true).animate({
                    left: Math.floor(b(window).width() * 0.5 - (d.index * this.width + this.width * 0.5))
                }, 150)
            }
        },
        beforeClose: function() {
            if (this.wrap) {
                this.wrap.remove()
            }
            this.wrap = null;
            this.list = null;
            this.width = 0
        }
    }
}(jQuery));
/*!
 * Media helper for fancyBox
 * version: 1.0.6 (Fri, 14 Jun 2013)
 * @requires fancyBox v2.0 or later
 *
 * Usage:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: true
 *         }
 *     });
 *
 * Set custom URL parameters:
 *     $(".fancybox").fancybox({
 *         helpers : {
 *             media: {
 *                 youtube : {
 *                     params : {
 *                         autoplay : 0
 *                     }
 *                 }
 *             }
 *         }
 *     });
 *
 * Or:
 *     $(".fancybox").fancybox({,
 *         helpers : {
 *             media: true
 *         },
 *         youtube : {
 *             autoplay: 0
 *         }
 *     });
 *
 *  Supports:
 *
 *      Youtube
 *          http://www.youtube.com/watch?v=opj24KnzrWo
 *          http://www.youtube.com/embed/opj24KnzrWo
 *          http://youtu.be/opj24KnzrWo
 *			http://www.youtube-nocookie.com/embed/opj24KnzrWo
 *      Vimeo
 *          http://vimeo.com/40648169
 *          http://vimeo.com/channels/staffpicks/38843628
 *          http://vimeo.com/groups/surrealism/videos/36516384
 *          http://player.vimeo.com/video/45074303
 *      Metacafe
 *          http://www.metacafe.com/watch/7635964/dr_seuss_the_lorax_movie_trailer/
 *          http://www.metacafe.com/watch/7635964/
 *      Dailymotion
 *          http://www.dailymotion.com/video/xoytqh_dr-seuss-the-lorax-premiere_people
 *      Twitvid
 *          http://twitvid.com/QY7MD
 *      Twitpic
 *          http://twitpic.com/7p93st
 *      Instagram
 *          http://instagr.am/p/IejkuUGxQn/
 *          http://instagram.com/p/IejkuUGxQn/
 *      Google maps
 *          http://maps.google.com/maps?q=Eiffel+Tower,+Avenue+Gustave+Eiffel,+Paris,+France&t=h&z=17
 *          http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
 *          http://maps.google.com/?ll=48.859463,2.292626&spn=0.000965,0.002642&t=m&z=19&layer=c&cbll=48.859524,2.292532&panoid=YJ0lq28OOy3VT2IqIuVY0g&cbp=12,151.58,,0,-15.56
 */
(function(b) {
    var a = b.fancybox,
        c = function(d, e, f) {
            f = f || "";
            if (b.type(f) === "object") {
                f = b.param(f, true)
            }
            b.each(e, function(g, h) {
                d = d.replace("$" + g, h || "")
            });
            if (f.length) {
                d += (d.indexOf("?") > 0 ? "&" : "?") + f
            }
            return d
        };
    a.helpers.media = {
        defaults: {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube-nocookie\.com)\/(watch\?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*)).*/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: "opaque",
                    enablejsapi: 1
                },
                type: "iframe",
                url: "//www.youtube.com/embed/$3"
            },
            vimeo: {
                matcher: /(?:vimeo(?:pro)?.com)\/(?:[^\d]+)?(\d+)(?:.*)/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1
                },
                type: "iframe",
                url: "//player.vimeo.com/video/$1"
            },
            metacafe: {
                matcher: /metacafe.com\/(?:watch|fplayer)\/([\w\-]{1,10})/,
                params: {
                    autoPlay: "yes"
                },
                type: "swf",
                url: function(e, f, d) {
                    d.swf.flashVars = "playerVars=" + b.param(f, true);
                    return "//www.metacafe.com/fplayer/" + e[1] + "/.swf"
                }
            },
            dailymotion: {
                matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                params: {
                    additionalInfos: 0,
                    autoStart: 1
                },
                type: "swf",
                url: "//www.dailymotion.com/swf/video/$1"
            },
            twitvid: {
                matcher: /twitvid\.com\/([a-zA-Z0-9_\-\?\=]+)/i,
                params: {
                    autoplay: 0
                },
                type: "iframe",
                url: "//www.twitvid.com/embed.php?guid=$1"
            },
            twitpic: {
                matcher: /twitpic\.com\/(?!(?:place|photos|events)\/)([a-zA-Z0-9\?\=\-]+)/i,
                type: "image",
                url: "//twitpic.com/show/full/$1/"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/?size=l"
            },
            google_maps: {
                matcher: /maps\.google\.([a-z]{2,3}(\.[a-z]{2})?)\/(\?ll=|maps\?)(.*)/i,
                type: "iframe",
                url: function(d) {
                    return "//maps.google." + d[1] + "/" + d[3] + "" + d[4] + "&output=" + (d[4].indexOf("layer=c") > 0 ? "svembed" : "embed")
                }
            }
        },
        beforeLoad: function(g, j) {
            var d = j.href || "",
                e = false,
                i, f, h, k;
            for (i in g) {
                if (g.hasOwnProperty(i)) {
                    f = g[i];
                    h = d.match(f.matcher);
                    if (h) {
                        e = f.type;
                        k = b.extend(true, {}, f.params, j[i] || (b.isPlainObject(g[i]) ? g[i].params : null));
                        d = b.type(f.url) === "function" ? f.url.call(this, h, k, j) : c(f.url, h, k);
                        break
                    }
                }
            }
            if (e) {
                j.href = d;
                j.type = e;
                j.autoHeight = false
            }
        }
    }
}(jQuery));
var isIE6 = false;
var xmlObjAds;
var CookieBottomProductIdlogin = "";
jQuery(window).load(function() {
    var c = jQuery("#cookiesTime").length > 0 && jQuery("#cookiesTime").val() != "" && !isNaN(jQuery("#cookiesTime").val()) ? parseFloat(jQuery("#cookiesTime").val()) : 120;
    var a = jQuery("#cookiesTimeBottom").length > 0 && jQuery("#cookiesTimeBottom").val() != "" && !isNaN(jQuery("#cookiesTimeBottom").val()) ? parseFloat(jQuery("#cookiesTimeBottom").val()) : 120;
    var b = initAdsBanner(CodeProduct, CookieProduct, c);
    if (!b) {
        initAdsBannerBottom(CodeProduct, CookieBottomProduct, a);
        initAdsBannerBottomIL(CodeProduct, CookieBottomProductIdlogin, a)
    }
});

function initAdsBanner(c, e, f) {
    var b = new CookieTime();
    if (b.MethodGetCookie(e) == null || b.MethodGetCookie(e) == "") {
        var a = 60000 * f;
        var d = new BannerPopup();
        return d.MethodBannerPopup(c, a)
    }
    return false
}

function initAdsBannerBottom(d, c, e) {
    var f = new CookieTime();
    if (f.MethodGetCookie(c) == null || f.MethodGetCookie(c) == "") {
        var b = 60000 * e;
        var a = new BannerPopupBottom();
        a.MethodBannerPopupBottom(d, b)
    }
}

function initAdsBannerBottomIL(b, c, f) {
    var e = new CookieTime();
    if (e.MethodGetCookie(c) == null || e.MethodGetCookie(c) == "") {
        var a = 60000 * f;
        var d = new BannerPopupBottomIdLogin();
        d.MethodBannerPopupBottom(b, a)
    }
}
BannerPopup = function() {
    this.MethodOverlay = function() {
        var e = jQuery(window).scrollTop();
        var d = jQuery(window).height();
        var a = jQuery(window).width();
        var b = jQuery(document).height();
        var f = jQuery("#bannerPopup").height();
        var c = jQuery("#bannerPopup").width();
        jQuery("#thewindowbackground").css({
            height: b,
            width: a
        });
        if (e > 0) {
            if (isIE6) {
                jQuery("#bannerPopup").stop().animate({
                    top: e + (d - f > 0 ? (d - f) / 2 : 0)
                }, 400)
            } else {
                jQuery("#bannerPopup").addClass("fixedBanner")
            }
        }
        jQuery("#bannerPopup").css({
            top: d - f > 0 ? (d - f) / 2 : 0,
            left: (a - c) / 2
        });
        jQuery(window).resize(function() {
            e = jQuery(window).scrollTop();
            d = jQuery(window).height();
            a = jQuery(window).width();
            jQuery("#thewindowbackground").css({
                height: b,
                width: a
            });
            if (isIE6) {
                jQuery("#bannerPopup").css({
                    top: e + (d - f > 0 ? (d - f) / 2 : 0),
                    left: (a - c) / 2
                })
            } else {
                jQuery("#bannerPopup").css({
                    top: d - f > 0 ? (d - f) / 2 : 0,
                    left: (a - c) / 2
                })
            }
        });
        jQuery(window).scroll(function() {
            e = jQuery(window).scrollTop();
            if (e > 0) {
                if (isIE6) {
                    jQuery("#bannerPopup").stop().animate({
                        top: e + (d - f > 0 ? (d - f) / 2 : 0)
                    }, 400)
                } else {
                    jQuery("#bannerPopup").addClass("fixedBanner")
                }
            } else {
                jQuery("#bannerPopup").removeClass("fixedBanner");
                jQuery("#bannerPopup").css({
                    top: d - f > 0 ? (d - f) / 2 : 0
                })
            }
        })
    };
    this.ClosePopup = function(b) {
        jQuery("#thewindowbackground").css("display", "none");
        jQuery("#bannerPopup").css("display", "none");
        var a = new CookieTime();
        a.MethodSetCookie(CodeProduct + "_Cookie", CodeProduct, b)
    };
    this.checkDate = function(a, b) {};
    this.MethodBannerPopup = function(g, b) {
        var e = this;
        var d = jQuery("#bannerPopup > div > a > img").attr("alt");
        if (d == "" || d == undefined) {
            d = g + "_popupcenter"
        }
        if ((jQuery("#bannerPopup > div > a > img").length > 0) || (jQuery("#bannerPopup  embed").length > 0)) {
            e.MethodOverlay();
            var a = jQuery("#typePopup").length > 0 && jQuery("#typePopup").val() != "" && !isNaN(jQuery("#typePopup").val()) ? parseFloat(jQuery("#typePopup").val()) : 0;
            if (jQuery("#bannerPopup > div > a > img").length > 0) {
                var c = jQuery("#bannerPopup img").attr("src");
                var f = c.substr(c.length - 3, 3);
                if (f == "png" || f == "PNG" || a == 1) {
                    jQuery("#bannerPopup").css({
                        background: "none"
                    })
                }
            }
            jQuery("#bannerPopup > div > a").click(function() {
                e.ClosePopup(b)
            });
            jQuery("#thewindowbackground").click(function() {
                _gaq.push(["_trackEvent", " Popup Center", "overlay-close", d, 1]);
                e.ClosePopup(b)
            });
            jQuery("#bannerPopup > div > a > img").click(function() {});
            jQuery("#btClose").click(function() {
                e.ClosePopup(b);
                return false
            });
            jQuery("#popupBtnClose").click(function() {
                if (jQuery("#chkClose").is(":checked")) {
                    var h = jQuery("#cookiesTimeSecond").length > 0 && jQuery("#cookiesTimeSecond").val() != "" && !isNaN(jQuery("#cookiesTimeSecond").val()) ? parseFloat(jQuery("#cookiesTimeSecond").val()) : 120;
                    b = 60000 * h
                }
                e.ClosePopup(b);
                return false
            });
            jQuery("#thewindowbackground").css({
                display: "block"
            });
            jQuery("#bannerPopup").css({
                display: "block"
            });
            return true
        }
    };
    return this
};
BannerPopupBottom = function() {
    this.MouseScroll = function() {
        var f = jQuery(window).height();
        if (jQuery(".MenuFooter").length > 0) {
            f = f - jQuery(".MenuFooter").height()
        }
        var b = jQuery(window).width();
        var e = jQuery(window).scrollTop();
        var c = jQuery(document).height();
        var g = jQuery("#bannerPopupBottom").outerHeight();
        var d = jQuery("#bannerPopupBottom").width();
        jQuery("#thewindowbackground").css({
            height: c,
            width: b
        });
        jQuery("#bannerPopupBottom").css({
            top: f - g - 2,
            right: 0
        });
        if (e > 0) {
            if (isIE6) {
                jQuery("#bannerPopupBottom").stop().animate({
                    top: e + f - g - 2
                }, 400)
            } else {
                jQuery("#bannerPopupBottom").addClass("fixedBanner")
            }
        }
        jQuery("#bannerPopupBottom").css({
            top: f - g - 2
        });
        jQuery(window).resize(function() {
            e = jQuery(window).scrollTop();
            f = jQuery(window).height();
            if (jQuery(".MenuFooter").length > 0) {
                f = f - jQuery(".MenuFooter").height()
            }
            b = jQuery(window).width();
            jQuery("#thewindowbackground").css({
                height: c,
                width: b
            });
            if (isIE6) {
                jQuery("#bannerPopupBottom").css({
                    top: e + f - g - 2
                })
            } else {
                jQuery("#bannerPopupBottom").css({
                    top: f - g - 2
                })
            }
        });
        jQuery(window).scroll(function() {
            e = jQuery(window).scrollTop();
            if (e > 0) {
                if (isIE6) {
                    jQuery("#bannerPopupBottom").stop().animate({
                        top: e + f - g - 2
                    }, 400)
                } else {
                    jQuery("#bannerPopupBottom").addClass("fixedBanner")
                }
            } else {
                jQuery("#bannerPopupBottom").removeClass("fixedBanner");
                jQuery("#bannerPopupBottom").css({
                    top: f - g - 2
                })
            }
        });
        jQuery(window).load(function() {
            var h = jQuery(document).height();
            jQuery("#thewindowbackground").css({
                height: h
            })
        })
    };
    this.checkDate = function(b, c) {};
    this.ClosePopupBottom = function() {
        jQuery("#bannerPopupBottom").css("display", "none")
    };
    this.MethodBannerPopupBottom = function(e, b) {
        var d = this;
        var c = jQuery("#bannerPopupBottom > div > a > img").attr("alt");
        if (c == "" || c == undefined) {
            c = e + "_popupbottom"
        }
        if (jQuery("#bannerPopupBottom > div > a > img").length > 0) {
            d.MouseScroll();
            jQuery("#btCloseBottom").click(function() {
                d.ClosePopupBottom();
                var f = new CookieTime();
                f.MethodSetCookie(e + "_CookieBottom", e, b);
                return false
            });
            jQuery("#bannerPopupBottom > div > a > img").click(function() {});
            jQuery("#bannerPopupBottom").css({
                display: "block"
            })
        }
    };
    var a = setTimeout("jQuery('#bannerPopupBottom').fadeOut('slow')", 30000);
    return this
};
BannerPopupBottomIdLogin = function() {
    this.MouseScroll = function() {
        var f = jQuery(window).height();
        if (jQuery(".MenuFooter").length > 0) {
            f = f - jQuery(".MenuFooter").height()
        }
        var b = jQuery(window).width();
        var e = jQuery(window).scrollTop();
        var c = jQuery(document).height();
        var g = jQuery("#bannerPopupBottom").outerHeight();
        var d = jQuery("#bannerPopupBottom").width();
        jQuery("#thewindowbackground").css({
            height: c,
            width: b
        });
        jQuery("#bannerPopupBottom").css({
            top: f - g - 2,
            right: 0
        });
        if (e > 0) {
            if (isIE6) {
                jQuery("#bannerPopupBottom").stop().animate({
                    top: e + f - g - 2
                }, 400)
            } else {
                jQuery("#bannerPopupBottom").addClass("fixedBanner")
            }
        }
        jQuery("#bannerPopupBottom").css({
            top: f - g - 2
        });
        jQuery(window).resize(function() {
            e = jQuery(window).scrollTop();
            f = jQuery(window).height();
            if (jQuery(".MenuFooter").length > 0) {
                f = f - jQuery(".MenuFooter").height()
            }
            b = jQuery(window).width();
            jQuery("#thewindowbackground").css({
                height: c,
                width: b
            });
            if (isIE6) {
                jQuery("#bannerPopupBottom").css({
                    top: e + f - g - 2
                })
            } else {
                jQuery("#bannerPopupBottom").css({
                    top: f - g - 2
                })
            }
        });
        jQuery(window).scroll(function() {
            e = jQuery(window).scrollTop();
            if (e > 0) {
                if (isIE6) {
                    jQuery("#bannerPopupBottom").stop().animate({
                        top: e + f - g - 2
                    }, 400)
                } else {
                    jQuery("#bannerPopupBottom").addClass("fixedBanner")
                }
            } else {
                jQuery("#bannerPopupBottom").removeClass("fixedBanner");
                jQuery("#bannerPopupBottom").css({
                    top: f - g - 2
                })
            }
        });
        jQuery(window).load(function() {
            var h = jQuery(document).height();
            jQuery("#thewindowbackground").css({
                height: h
            })
        })
    };
    this.checkDate = function(b, c) {};
    this.ClosePopupBottom = function() {
        jQuery("#bannerPopupBottom").css("display", "none")
    };
    this.MethodBannerPopupBottom = function(e, b) {
        var d = this;
        var c = jQuery("#bannerPopupBottom > div > a > img").attr("alt");
        if (c == "" || c == undefined) {
            c = e + "_popupbottom"
        }
        if (jQuery("#bannerPopupBottom > div > a > img").length > 0) {
            d.MouseScroll();
            jQuery("#btCloseBottom").click(function() {
                d.ClosePopupBottom();
                var f = new CookieTime();
                f.MethodSetCookie(e + "_CookieBottom2", e, b);
                return false
            });
            jQuery("#bannerPopupBottom > div > a > img").click(function() {});
            jQuery("#bannerPopupBottom").css({
                display: "block"
            })
        }
    };
    var a = setTimeout("jQuery('#bannerPopupBottom').fadeOut('slow')", 30000);
    return this
};
CookieTime = function() {
    var a = 0;
    this.MethodGetCookie = function(b) {
        if (document.cookie.length > 0) {
            CookieStart = document.cookie.indexOf(b + "=");
            if (CookieStart != -1) {
                CookieStart = CookieStart + b.length + 1;
                CookieEnd = document.cookie.indexOf(";", CookieStart);
                if (CookieEnd == -1) {
                    CookieEnd = document.cookie.length
                }
                return unescape(document.cookie.substring(CookieStart, CookieEnd))
            }
        }
        return ""
    };
    this.MethodSetCookie = function(c, d, b) {
        var e = new Date();
        e.setTime(e.getTime() + b);
        document.cookie = c + "=" + escape(d) + ((b == null) ? "" : ";expires=" + e.toUTCString())
    }
};
Number.prototype.formatNumber = function(k, g, e) {
    var h = this,
        k = isNaN(k = Math.abs(k)) ? 2 : k,
        g = g == undefined ? "." : g,
        e = e == undefined ? "," : e,
        f = h < 0 ? "-" : "",
        b = parseInt(h = Math.abs(+h || 0).toFixed(k)) + "",
        a = (a = b.length) > 3 ? a % 3 : 0;
    return f + (a ? b.substr(0, a) + e : "") + b.substr(a).replace(/(\d{3})(?=\d)/g, "$1" + e) + (k ? g + Math.abs(h - b).toFixed(k).slice(2) : "")
};
if (!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
    }
}
var appIdFB = {
    "360play": "1059608667433733",
    vlcm: "572059102909765",
    volam: "849851525029790",
    volam2: "715307218515673",
    volammienphi: "310543362432021",
    kiemthe: "804601679558609",
    "3q": "1385523911693343",
    volam3: "249721521882052",
    "2S": "658637767505650",
    zingspeed: "658637767505650",
    "3d": "249721521882052",
    thoiloanmobile: "1483065071912810",
    "9k": "1459304647645630",
    xgame2014: "280351615502856",
    ttl: "278305615708721",
    ttl3d: "781279451938935",
    ctc: "466140210191844",
    gunnymobi: "312364145625427",
    tfsgm: "684784928304603",
    kt2: "776150779141947",
    vh2: "1528989040701763",
    cbg: "462261007274058",
    cuutoc: "291971524327085",
    giaidau: "1028731983811508",
    bf: "790342527778938",
    tdvn: "758390887606668",
    taydu: "1495592177403817",
    ngoisao: "1569020290054549",
    vdth: "402608599948233",
    hoathiencot: "1494523814186305"
};
var appIdFB_360game = {};
var appidFB_other = {
    tstk: "949383971804752"
};
var showPopupSocial = (function(d) {
    var B = false;
    var o = false;
    var f = "//img.zing.vn/products/vendor/plugin/social-style-vr3.min.css";
    var t = "home";
    var z = {
        isZingMe: true,
        isVportalLike: true,
        isDisableSend: false,
        labelTrackingGASocial: "N/A"
    };
    var b = {
            zingme: "zingme",
            facebook: "facebook",
            RelativeID: undefined,
            typePage: "subpage",
            pagetrackingname: "",
            labelTrackingGASocial: "home"
        },
        v = function(D, E) {
            z.isZingMe = D.isZingMe;
            z.isDisableSend = D.isDisableSend;
            if (typeof D.isVportalLike != "undefined") {
                z.isVportalLike = D.isVportalLike
            }
            t = (typeof D.typePage === undefined) ? t : D.typePage;
            t = (typeof D.pageTrackingName != "undefined" && D.pageTrackingName.length > 0) ? D.pageTrackingName : D.typePage;
            if (D.typePage === "subpage") {} else {
                j(g())
            }
            if (D.typePage === "subweb") {
                link_p = (window.location.href).split("?")[0];
                j(link_p)
            }
            if (typeof E != "undefined") {
                typeof E === "function" && E()
            }
            z.labelTrackingGASocial = D.labelTrackingGASocial;
            if (typeof z.labelTrackingGASocial == "undefined") {
                z.labelTrackingGASocial = t
            }
            jQuery(".btn-fb-like-social").remove();
            jQuery("body").append('<div id="zme-root"></div>');
            distance = jQuery("body").height() * 0.35;
            if (jQuery("#" + D.RelativeID) != undefined) {
                l(D.typePage);
                if (z.isVportalLike) {
                    s(".btn-custom-like")
                }
                var C = function(H) {
                    var G = d("#static").height() / 1.5;
                    var F = d("body,html").scrollTop() + d(window).height();
                    if (F >= G) {
                        if (!B) {
                            B = true
                        }
                    } else {
                        if (B) {
                            B = false
                        }
                    }
                };
                jQuery(window).bind("scroll", C);
                if (jQuery("#" + D.RelativeID).length > 0) {
                    jQuery("#" + D.RelativeID).children("a").bind("click", function(F) {
                        F.preventDefault();
                        jQuery(window).unbind("scroll");
                        d("body").animate({
                            "padding-bottom": "0"
                        }, 300, function() {
                            jQuery(window).bind("scroll", C)
                        })
                    })
                }
            } else {}
            w();
            if (e() == "329818837181469") {
                jQuery(".btn-fb-send-social").remove()
            }
        },
        w = function() {
            jQuery("#popup-social-home .btn-fb-share-social,#popup-social-sub .btn-fb-share-social").bind("click", function() {
                k(e())
            });
            u()
        },
        q = function() {
            jQuery("#popup-social-home .btn-fb-send-social,#popup-social-sub .btn-fb-send-social").bind("click", function() {
                i(e())
            })
        },
        e = function() {
            urlSite = location.href;
            domain = urlSite.match(/:\/\/(.[^/]+)/)[1].split(".");
            var C = appIdFB[domain[0]];
            if (domain[1] == "360game") {
                C = appIdFB_360game[domain[0]]
            } else {
                C = appidFB_other[domain[0]]
            }
            return C
        },
        A = function(C) {
            switch (C) {
                case b.facebook:
                    param = (typeof e() === undefined) ? "" : "&amp;appId=" + e();
                    x("//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8" + param, b.facebook);
                    break;
                case b.zingme:
                    x("//static.me.zing.vn/sp/js/all-1.34.js#&appId=d713b962dbf19d2dea16124b293558d1&status=true", b.zingme);
                    break
            }
        },
        x = function(D, C) {
            jssdk = C + "-jssdk";
            if (C.toLowerCase().trim() === b.facebook) {
                jQuery(".fb-social-button").each(function(E, F) {
                    if (jQuery(F).attr("data-href") != (window.location.href).split("?")[0]) {
                        A(C)
                    }
                })
            }(function(H, E, I) {
                var G, F = H.getElementsByTagName(E)[0];
                if (H.getElementById(I)) {
                    return
                }
                G = H.createElement(E);
                G.id = I;
                G.src = D;
                F.parentNode.insertBefore(G, F);
                if (C.toLowerCase().trim() === "facebook") {
                    setTimeout(function() {
                        link_p_add = (window.location.href).split("?")[0];
                        if (t === "home") {
                            link_p_add = link_p_add + "index.html";
                            if ((window.location.href).split("/index.html").length > 1) {
                                link_p_add = (window.location.href).split("?")[0]
                            }
                        }
                        url = link_p_add;
                        y(url)
                    }, 1000)
                }
            }(document, "script", jssdk))
        },
        y = function(C) {
            try {
                if (FB && FB.Event && FB.Event.subscribe) {
                    FB.Event.subscribe("edge.create", function(E) {
                        u()
                    });
                    FB.Event.subscribe("edge.remove", function(E) {
                        u()
                    });
                    FB.Event.subscribe("message.send", function(E) {
                        u()
                    });
                    FB.Event.subscribe("xfbml.render", function(E) {
                        u()
                    })
                }
            } catch (D) {}
        },
        s = function(C) {
            return false;
            wiFrame = 120;
            if (typeof C != undefined) {
                obj = jQuery(C);
                typeLike = "&type=" + t;
                link_p_add = (window.location.href).split("?")[0], link_p_add = link_p_add.split("#")[0];
                if (b.typePage === "home" || b.typePage == "landingpage") {
                    link_p_add = (window.location.href).split("?")[0] + "index.html", link_p_add = link_p_add.split("#")[0] + "index.html";
                    if ((window.location.href).split("/index.html").length > 1) {
                        link_p_add = (window.location.href).split("?")[0], link_p_add = link_p_add.split("#")[0]
                    }
                    wiFrame = 50
                }
                url = "//mainsite.360game.vn/like/?url=" + link_p_add + typeLike;
                iframeObj = '<iframe width="' + wiFrame + '" height="30" src="' + url + '" frameborder="0"  scrolling="no" allowtransparency="true" style="overflow:hidden;"></iframe>';
                if (obj.length > 0) {
                    obj.html(iframeObj)
                }
            }
        },
        g = function() {
            var C = window.location.href;
            var D = C.split("?")[0],
                D = D.split("#")[0];
            if (D.split("/").length > 2) {
                if (t == "home") {
                    if (C.split("/index.html").length > 1) {
                        D = (window.location.href).split("?")[0], D = D.split("#")[0]
                    } else {
                        if (C.split("dev.").length > 1) {
                            D = D + "/index.html"
                        } else {
                            D = D + "index.html"
                        }
                    }
                }
                D = D.replace("/app_dev.php", "").replace("dev.", "")
            }
            return D
        },
        n = function() {
            _sendfb = '<div title="Send" class="btn-fb-send-social"><div class="pluginButtonImage"><span class="pluginButtonIcon img sp_plugin-button sx_plugin-button_favblue"></span></div><span class="pluginButtonLabel">Send</span></div>';
            _objbtn = jQuery("div.plugin-social-block-p > div#popup-social-sub > div.block-social > div.like-block-social > div.group-facebook > .btn-fb-share-social");
            if (jQuery(".btn-fb-send-social").size() > 0) {} else {
                if (_objbtn.size() > 0) {}
            }
        },
        l = function(C) {
            jQuery(".fb-social-button,.fb-link-href").each(function(D, E) {
                D = "";
                if (C === "home") {
                    D = "/index.html"
                }
                jQuery(E).attr("data-href", (window.location.href).split("?")[0] + D)
            });
            n();
            A(b.facebook);
            if (z.isZingMe) {
                A(b.zingme)
            }
            h()
        },
        u = function(D) {
            like = 0;
            link_p_add = g();
            try {
                var E = d.ajax({
                    type: "POST",
                    url: "https://graph.facebook.com/?ids=" + link_p_add,
                    dataType: "jsonp"
                });
                E.done(function(F) {
                    d.each(F, function(G, H) {
                        like = (H.share != undefined && H.share.share_count != undefined && H.share.share_count > 0) ? H.share.share_count : -1
                    });
                    if (like != -1) {
                        format = like.formatNumber(0)
                    } else {
                        format = "0"
                    }
                    rs = format.split(",");
                    if (rs.length <= 1) {
                        rs = format
                    } else {
                        rs = ((rs[0] < 1) ? like : rs[0] + "k" + ((rs[1] < 1) ? "" : (rs[1].slice(0, 1))))
                    }
                    switch (t) {
                        case "subweb":
                        case "landingpage":
                        case "home":
                            break;
                        case "subpage":
                            break;
                        case "all":
                            break
                    }
                })
            } catch (C) {
                console.log(C)
            }
        },
        a = function() {
            objIframe = jQuery(".fb-social-button").find("span");
            jQuery(objIframe).addClass("fbiframe");
            if (!jQuery(objIframe).hasClass("fbiframe")) {
                a()
            }
        },
        j = function(D) {
            var C = '<div id="popup-social-home"><div class="block-social"><div class="like-block-social"><div class="button-control"><div class="group-facebook"><div id="fb-root"></div><div class="btn-fb-share-social" title="Share">Share</div><div title="Send" class="btn-fb-send-social">Send</div></div><div class="btn-custom-like"></div></div></div></div></div>';
            if (z.isDisableSend) {
                C = '<div id="popup-social-home"><div class="block-social"><div class="like-block-social"><div class="button-control"><div class="group-facebook"><div id="fb-root"></div><div class="btn-fb-share-social" title="Share">Share</div><div class="btn-custom-like"></div></div></div></div></div>'
            }

            // jQuery("body").append(C)
        },
        h = function() {
            jQuery("head").append("<link>");
            var C = jQuery("head").children(":last");
            C.attr({
                rel: "stylesheet",
                type: "text/css",
                href: f
            });
            jQuery("head").append('<meta http-equiv="X-UA-Compatible" content="IE=edge" />')
        },
        k = function(C) {
            var F = document.title;
            E = g();
            if (C == undefined) {
                if (navigator.userAgent.indexOf("MSIE") != -1) {
                    winDef = "scrollbars=no,status=no,toolbar=no,location=nnoo,menubar=no,resizable=yes,height=430,width=550,top=".concat((screen.height - 500) / 2).concat(",left=").concat((screen.width - 500) / 2)
                } else {
                    winDef = "scrollbars=no,status=no,toolbar=no,location=no,menubar=no,resizable=no,height=400,width=550,top=".concat((screen.height - 500) / 2).concat(",left=").concat((screen.width - 500) / 2)
                }
                var E = "//www.facebook.com/sharer/sharer.php?u=" + E + "&t=" + F;
                var D = window.open(E, "_blank", winDef);
                var G = setInterval(function() {
                    if (D.closed) {
                        clearInterval(G);
                        u()
                    }
                }, 1000)
            } else {
                FB.init({
                    appId: C,
                    status: true,
                    cookie: true
                });
                FB.ui({
                    method: "feed",
                    link: E,
                    caption: F
                }, function(H) {
                    switch (typeof H) {
                        case "undefined":
                            c("button Share - " + z.labelTrackingGASocial + "- close window popup");
                            break;
                        case "object":
                            if (H == null) {
                                c("button Share - " + z.labelTrackingGASocial + "- cancel")
                            } else {
                                c("button Share - " + z.labelTrackingGASocial + "- success");
                                u()
                            }
                            break
                    }
                })
            }
        },
        p = function(C) {
            var H = false;
            if (typeof FB == "undefined") {
                A(b.facebook);
                H = true
            }
            var G = document.title;
            if (C.titleShare != null && C.titleShare.length > 0) {
                G = C.titleShare
            }
            var F = g();
            if (C.linkShare != null && C.linkShare.length > 0) {
                G = C.linkShare
            }
            var J = d('meta[property="og:image"]').attr("content");
            if (C.imageshare != null && C.imageshare.length > 0) {
                J = C.imageshare
            }
            if (C.lableTracking != null && C.lableTracking.length > 0) {
                z.labelTrackingGASocial = C.lableTracking
            }
            appIdFB = e();
            if (appIdFB == undefined) {
                if (navigator.userAgent.indexOf("MSIE") != -1) {
                    winDef = "scrollbars=no,status=no,toolbar=no,location=nnoo,menubar=no,resizable=yes,height=430,width=550,top=".concat((screen.height - 500) / 2).concat(",left=").concat((screen.width - 500) / 2)
                } else {
                    winDef = "scrollbars=no,status=no,toolbar=no,location=no,menubar=no,resizable=no,height=400,width=550,top=".concat((screen.height - 500) / 2).concat(",left=").concat((screen.width - 500) / 2)
                }
                var F = "//www.facebook.com/sharer/sharer.php?u=" + F + "&t=" + G;
                var E = window.open(F, "_blank", winDef);
                var I = setInterval(function() {
                    if (E.closed) {
                        clearInterval(I);
                        u()
                    }
                }, 1000)
            } else {
                var D = 0;
                if (H) {
                    D = 500
                }
                setTimeout(function() {
                    FB.init({
                        appId: appIdFB,
                        status: true,
                        cookie: true
                    });
                    FB.ui({
                        method: "feed",
                        link: F,
                        caption: G,
                        picture: J
                    }, function(K) {
                        switch (typeof K) {
                            case "undefined":
                                c("button Share - " + z.labelTrackingGASocial + "- close window popup");
                                break;
                            case "object":
                                if (K == null) {
                                    c("button Share - " + z.labelTrackingGASocial + "- cancel")
                                } else {
                                    c("button Share - " + z.labelTrackingGASocial + "- success");
                                    u()
                                }
                                break
                        }
                    })
                }, D)
            }
        },
        i = function(C) {
            _utm = "?utm_source=facebook&utm_campaign=button_send";
            var D = document.title;
            urlSend = g();
            FB.init({
                appId: C,
                status: true,
                cookie: true
            });
            FB.ui({
                method: "send",
                link: urlSend,
                caption: D
            }, function(E) {
                switch (typeof E) {
                    case "undefined":
                        c("button Send - " + z.labelTrackingGASocial + "- close window popup");
                        break;
                    case "object":
                        if (E == null) {
                            c("button Send - " + z.labelTrackingGASocial + "- cancel")
                        } else {
                            c("button Send - " + z.labelTrackingGASocial + "- success");
                            u()
                        }
                        break
                }
            })
        },
        c = function(C) {
            if (typeof ga != "undefined" || typeof _gaq != "undefined") {
                if (typeof _gaq != "undefined") {
                    _gaq.push(["_trackEvent", "facebook", C, z.labelTrackingGASocial, 1])
                } else {
                    if (typeof ga != "undefined") {
                        ga("send", "event", C, "facebook", z.labelTrackingGASocial, 1)
                    }
                }
            }
        },
        m = function(D, C) {
            if (jQuery(D).size()) {
                if (d(".plugin-social-block-p").size()) {
                    p_items = d(".plugin-social-block-p");
                    switch (C) {
                        case "before":
                            jQuery(D).before(p_items);
                            break;
                        case "after":
                            jQuery(D).after(p_items);
                            break;
                        case "append":
                            jQuery(D).append(p_items);
                            break
                    }
                }
            }
        },
        r = function() {
            url360game = location.href;
            url360 = url360game.match(/:\/\/(.[^/]+)/)[1].split(".");
            if (url360[1] == "360game") {
                return true
            }
            return false
        };
    return {
        init: v,
        share: w,
        validateLinkHome: g,
        TrackingSocial: y,
        addPositionItem: m,
        ShareImageOption: p
    }
})(jQuery, window);
jQuery(window).load(function() {
    if (jQuery("div.plugin-social-block-p").length > 0) {
        var a = jQuery("div.plugin-social-block-p").offset().top;
        jQuery(window).scroll(function(b) {
            var c = jQuery(window).scrollTop();
            if (c > a) {
                jQuery("div.plugin-social-block-p").addClass("active");
                if (jQuery("#ved_section").length > 0) {
                    jQuery("div.plugin-social-block-p.active").css("top", "40px")
                }
                if (jQuery(".template-blank").length <= 0) {
                    jQuery("div.plugin-social-block-p").before('<div class="template-blank"></div>')
                }
            } else {
                jQuery(".template-blank").remove();
                jQuery("div.plugin-social-block-p").removeClass("active")
            }
        })
    }
});
(function(a) {
    a.extend(a, {
        placeholder: {
            browser_supported: function() {
                return this._supported !== undefined ? this._supported : (this._supported = !!("placeholder" in a('<input type="text">')[0]))
            },
            shim: function(c) {
                var b = {
                    color: "#888",
                    cls: "placeholder",
                    selector: "input[placeholder], textarea[placeholder]"
                };
                a.extend(b, c);
                return !this.browser_supported() && a(b.selector)._placeholder_shim(b)
            }
        }
    });
    a.extend(a.fn, {
        _placeholder_shim: function(d) {
            function c(f) {
                var g = a(f).offsetParent().offset();
                var e = a(f).offset();
                return {
                    top: e.top - g.top,
                    left: e.left - g.left,
                    width: a(f).width()
                }
            }

            function b(f) {
                var e = f.data("target");
                if (typeof e !== "undefined") {
                    f.css(c(e));
                    a(window).one("resize", function() {
                        b(f)
                    })
                }
            }
            return this.each(function() {
                var h = a(this);
                if (h.is(":visible")) {
                    if (h.data("placeholder")) {
                        var e = h.data("placeholder");
                        e.css(c(h));
                        return true
                    }
                    var g = {};
                    if (!h.is("textarea") && h.css("height") != "auto") {
                        g = {
                            lineHeight: h.css("height"),
                            whiteSpace: "nowrap"
                        }
                    }
                    var j = (h.css("box-sizing") === "border-box");
                    var i = h.is("textarea");
                    var f = a("<label />").text(h.attr("placeholder")).addClass(d.cls).css(a.extend({
                        position: "absolute",
                        display: "inline",
                        "float": "none",
                        overflow: "hidden",
                        textAlign: "left",
                        color: d.color,
                        cursor: "text",
                        paddingTop: !i && j ? "0" : h.css("padding-top"),
                        paddingRight: h.css("padding-right"),
                        paddingBottom: !i && j ? "0" : h.css("padding-bottom"),
                        paddingLeft: h.css("padding-left"),
                        fontSize: h.css("font-size"),
                        fontFamily: h.css("font-family"),
                        fontStyle: h.css("font-style"),
                        fontWeight: h.css("font-weight"),
                        textTransform: h.css("text-transform"),
                        backgroundColor: "transparent",
                        zIndex: 99
                    }, g)).css(c(this)).attr("for", this.id).data("target", h).click(function() {
                        if (!a(this).data("target").is(":disabled")) {
                            a(this).data("target").focus()
                        }
                    }).insertBefore(this);
                    h.data("placeholder", f).on("keydown", function() {
                        f.hide()
                    }).on("blur change", function() {
                        f[h.val().length ? "hide" : "show"]()
                    }).triggerHandler("blur");
                    a(window).one("resize", function() {
                        b(f)
                    })
                }
            })
        }
    })
})(jQuery);
jQuery(document).add(window).bind("ready load", function() {
    if (jQuery.placeholder) {
        jQuery.placeholder.shim()
    }
});
(function(b, c) {
    var a = "ActiveBanner";
    b.widget("ui.fadegallery", {
        options: {
            control_event: "click",
            auto_play: false,
            delay: 2,
            control: c,
            next_btn: c,
            prev_btn: c,
            play_backward: false,
            cbFunction: c
        },
        _create: function() {
            var d = this,
                e = d.options,
                f = d.element;
            this.list = f;
            this.list_items = f.find("> li");
            this.control_items = e.control.find("li");
            this.current_active_index;
            this.onAnimate = false;
            this.list_items.each(function(g) {
                var h = jQuery(this);
                if (h.hasClass(a)) {
                    d.current_active_index = g
                }
            });
            if (d.options.cbFunction != c) {
                d.options.cbFunction(d.current_active_index)
            }
            this.control_items.eq(d.current_active_index).addClass(a);
            if (e.control != c) {
                this.list_items.hover(function() {
                    d._clearTimer()
                }, function() {
                    if (e.auto_play) {
                        d._autoPlay()
                    }
                });
                this.control_items.each(function(g) {
                    var h = jQuery(this);
                    h.bind(e.control_event, function() {
                        if (!h.hasClass(a)) {
                            d.onAnimate = true;
                            d.gotoSlide(g)
                        }
                        d._clearTimer();
                        return false
                    });
                    h.bind("mouseout", function() {
                        if (e.auto_play) {
                            d._autoPlay()
                        }
                    })
                })
            }
            if (e.next_btn != c) {
                e.next_btn.bind("click", function() {
                    if (!d.onAnimate) {
                        d._clearTimer();
                        d.onAnimate = true;
                        d.next()
                    }
                    return false
                })
            }
            if (e.prev_btn != c) {
                e.prev_btn.bind("click", function() {
                    if (!d.onAnimate) {
                        d._clearTimer();
                        d.onAnimate = true;
                        d.prev()
                    }
                    return false
                })
            }
            if (e.auto_play) {
                d._autoPlay()
            }
        },
        _clear: function() {
            this.list_items.eq(this.current_active_index).removeClass(a);
            this.control_items.eq(this.current_active_index).removeClass(a);
            this.current_active_index = c
        },
        _autoPlay: function() {
            var d = this;
            this.timer = setInterval(function() {
                d.onAnimate = true;
                if (!d.options.play_backward) {
                    if (d.current_active_index == d.list_items.length - 1) {
                        d.gotoSlide(0)
                    } else {
                        d.gotoSlide(d.current_active_index + 1)
                    }
                } else {
                    if (d.current_active_index == 0) {
                        d.gotoSlide(d.list_items.length - 1)
                    } else {
                        d.gotoSlide(d.current_active_index - 1)
                    }
                }
            }, this.options.delay * 1000)
        },
        next: function() {
            if (this.current_active_index == this.list_items.length - 1) {
                this.gotoSlide(0)
            } else {
                this.gotoSlide(this.current_active_index + 1)
            }
        },
        prev: function() {
            if (this.current_active_index == 0) {
                this.gotoSlide(this.list_items.length - 1)
            } else {
                this.gotoSlide(this.current_active_index - 1)
            }
        },
        gotoSlide: function(e) {
            var d = this;
            this._swapSlides(this.current_active_index, e, function() {
                d.current_active_index = e;
                if (d.options.cbFunction != c) {
                    d.options.cbFunction(e)
                }
            })
        },
        _swapSlides: function(g, d, h) {
            var e = this;
            if (g != c) {
                e.control_items.eq(g).removeClass(a)
            }
            if ((/MSIE 6\.0/).test(navigator.userAgent)) {
                try {
                    DD_belatedPNG.applyVML(e.control_items.eq(g).find("a").get(0))
                } catch (f) {}
            }
            e.control_items.eq(d).addClass(a);
            if ((/MSIE 6\.0/).test(navigator.userAgent)) {
                try {
                    DD_belatedPNG.applyVML(e.control_items.eq(d).find("a").get(0))
                } catch (f) {}
            }
            this.list_items.eq(d).stop().animate({
                opacity: 1,
                "z-index": 9
            });
            if (g != c) {
                this.list_items.eq(g).stop().animate({
                    opacity: 0,
                    "z-index": 1
                }, "normal", "swing", function() {});
                e.list_items.eq(g).removeClass(a);
                e.list_items.eq(d).addClass(a);
                e._internal_callback();
                if (h != c) {
                    h(e)
                }
            } else {
                e.list_items.eq(d).addClass(a);
                e._internal_callback();
                if (h != c) {
                    h(e)
                }
            }
        },
        _internal_callback: function() {
            this.onAnimate = false;
            if (this.timer == null) {
                if (this.options.auto_play) {
                    this._autoPlay()
                }
            }
        },
        _clearTimer: function() {
            clearInterval(this.timer);
            this.timer = null
        }
    })
})(jQuery);
$selectDroplist_Manager = new function() {
    this.els = [];
    this.activeName = null;
    return this
};
$selectDroplist_UI = function(a, b) {
    var c = this;
    this.setupDropListUI = function() {
        var e = 0;
        c.select.find("> *").each(function(i) {
            var p = jQuery(this);
            var q = i;
            if (this.tagName.toLowerCase() == "optgroup") {
                p.each(function() {
                    var s = jQuery(this);
                    var u = s.attr("label");
                    var t = jQuery("<li></li>");
                    t.prepend('<span class="OptgroupLabel">' + u + "</span>");
                    var r = jQuery("<ul></ul>");
                    c.elUL.append(t);
                    t.append(r);
                    s.find("option").each(function(w) {
                        var v = jQuery(this);
                        if (v.attr("value") == "null") {
                            r.append('<li class="SelectUITitle" value="' + parseInt(q + w + e + 1) + '"><a href="#" title="' + v.text() + '" rel="' + v.attr("label") + '">' + v.text() + "</a></li>")
                        } else {
                            if (this.getAttribute("selected") == "selected" || this.getAttribute("selected") == true) {
                                r.append('<li class="Active" value="' + parseInt(q + w + e + 1) + '"><a href="#" title="' + v.text() + '" rel="' + v.attr("label") + '">' + v.text() + "</a></li>")
                            } else {
                                r.append('<li value="' + parseInt(q + w + e + 1) + '"><a href="#" title="' + v.text() + '" rel="' + v.attr("label") + '">' + v.text() + "</a></li>")
                            }
                        }
                    });
                    e += s.find("option").length - 1
                })
            } else {
                if (p.attr("value") == "null") {
                    c.elUL.append('<li class="SelectUITitle" value="' + parseInt(i + e + 1) + '"><a href="#" title="' + p.text() + '" rel="' + p.attr("label") + '">' + p.text() + "</a></li>")
                } else {
                    if (this.getAttribute("selected") == "selected" || this.getAttribute("selected") == true) {
                        c.elUL.append('<li class="Active" value="' + parseInt(i + e + 1) + '"><a href="#" title="' + p.text() + '" rel="' + p.attr("label") + '">' + p.text() + "</a></li>")
                    } else {
                        c.elUL.append('<li value="' + parseInt(i + e + 1) + '"><a href="#" title="' + p.text() + '" rel="' + p.attr("label") + '">' + p.text() + "</a></li>")
                    }
                }
            }
        });
        c.el.html(c.elUL);
        var d = c.elUL.attr("class").split(" ");
        var n = true;
        for (var f = 0; f < d.length; f++) {
            if (d[f].match(/^Theme/)) {
                c.elWrapper.addClass(d[f] + "_Wrapper");
                c.el.addClass(d[f] + "_List");
                n = false
            }
        }
        if (n) {
            c.elWrapper.addClass("Theme_Default_Wrapper");
            c.el.addClass("Theme_Default_List");
            c.elUL.addClass("Theme_Default")
        }
        if (!c.select.attr("multiple")) {
            c.maxDropListHeight = b != undefined && b.maxDropListHeight != undefined ? parseInt(b.maxDropListHeight) : 300;
            c.config = {
                maxDropListHeight: c.maxDropListHeight
            };
            var j = "";
            var l = false;
            c.select.find("option").each(function() {
                var i = jQuery(this);
                if (this.getAttribute("selected") == "selected" || this.getAttribute("selected") == true) {
                    j = i.text();
                    l = true
                }
            });
            if (!l) {
                j = c.select.attr("title") != "" ? c.select.attr("title") : ""
            }
            if (!c.select.attr("disabled")) {
                c.droplistTITLE.text(j);
                c.elWrapper.removeClass("Disabled")
            } else {
                c.droplistTITLE.text("");
                c.elWrapper.addClass("Disabled")
            }
            c.el.show();
            c.el.css({
                position: "absolute",
                left: 0,
                display: "none",
                overflow: "hidden",
                width: c.elUL.width()
            });
            c.el.hide();
            c.el.find("ul > li").each(function(p) {
                var i = jQuery(this);
                i.bind("click", function() {
                    if (i.find("span.OptgroupLabel:first-child").length > 0) {
                        return false
                    } else {
                        if (!c.select.attr("disabled")) {
                            c.el.find("ul > li").removeClass("Active");
                            i.addClass("Active");
                            c.droplistTITLE.text(i.text());
                            c.select.val(c.select.find("option").eq(i.attr("value") - 1).val());
                            c.hideList();
                            callExternalFunction(c, $selectDroplist_Manager.els, i.find("a:first").attr("rel"));
                            i.removeClass("Hover");
                            return false
                        }
                    }
                })
            });
            c.el.bind("click", function(i) {
                return false
            })
        } else {
            var o = c.select.attr("size");
            c.elUL.css({
                height: c.elUL.find("li").eq(0).outerHeight(true) * o,
                overflow: "hidden"
            });
            if (!c.elUL.parent().hasClass("jScrollPaneContainer")) {
                c.elUL.jScrollPane({
                    scrollbarWidth: c.options.scrollbarWidth,
                    scrollbarOnLeft: c.options.scrollbarSide == "left" ? true : false
                })
            }
            var k = null;
            var m = null;
            var g = null;

            function h() {
                c.select.find("option").removeAttr("selected");
                c.elUL.find("li").removeClass("Active")
            }
            c.el.find("ul > li").each(function(p) {
                var i = jQuery(this);
                i.bind("click", function(q) {
                    if (i.find("span.OptgroupLabel:first-child").length > 0) {
                        return false
                    } else {
                        if (!c.select.attr("disabled")) {
                            if (q.ctrlKey && !q.shiftKey) {
                                m = p;
                                c.select.find("option").eq(p).attr("selected", "selected")
                            } else {
                                if ((!q.ctrlKey && q.shiftKey) || (q.ctrlKey && q.shiftKey)) {
                                    if (!q.ctrlKey) {
                                        h()
                                    }
                                    if (m == null) {
                                        m = p
                                    } else {
                                        g = p;
                                        if (m != null && g != null) {
                                            c.el.find("ul > li").each(function(s) {
                                                var r = jQuery(this);
                                                if ((m <= g && s >= m && s <= g) || (m >= g && s <= m && s >= g)) {
                                                    c.select.find("option").eq(s).attr("selected", "selected");
                                                    r.addClass("Active")
                                                }
                                            });
                                            g = null
                                        }
                                    }
                                } else {
                                    h();
                                    c.select.find("option").eq(p).attr("selected", "selected");
                                    m = p
                                }
                            }
                            i.addClass("Active");
                            i.removeClass("Hover");
                            return false
                        }
                    }
                })
            })
        }
        c.el.find("ul > li").each(function(p) {
            var i = jQuery(this);
            i.bind("mouseover", function() {
                i.addClass("Hover");
                return false
            });
            i.bind("mouseout", function() {
                i.removeClass("Hover");
                return false
            })
        })
    };
    this.reset = function() {
        c.elUL.empty();
        c.elUL.removeAttr("class");
        c.elUL.removeAttr("style");
        c.elUL.attr("title", c.select.attr("title"));
        c.elUL.addClass(c.select.attr("class"));
        this.setupDropListUI()
    };
    this.showList = function() {
        c.el.addClass("TopLevel DropListUIShow");
        c.el.css({
            top: c.elWrapper.offset().top,
            left: c.elWrapper.offset().left
        });
        c.el.show();
        if (c.el.height() > c.maxDropListHeight && !c.elUL.parent().hasClass("jScrollPaneContainer")) {
            c.elUL.height(c.maxDropListHeight);
            c.elUL.jScrollPane({
                scrollbarWidth: c.options.scrollbarWidth,
                scrollbarOnLeft: c.options.scrollbarSide == "left" ? true : false
            })
        }
        c.setDirection();
        c.eventFire = false
    };
    this.hideList = function() {
        if (c.elUL.parent().hasClass("jScrollPaneContainer")) {
            c.el.prepend(c.elUL.parent())
        } else {
            c.el.prepend(c.elUL)
        }
        c.el.removeClass("TopLevel DropListUIShow");
        c.el.hide()
    };
    this.setDirection = function() {
        var j = jQuery(window).height() + jQuery(window).scrollTop();
        var d = c.elWrapper.offset().top;
        var g = c.elWrapper.offset().top + c.elWrapper.height();
        var e = c.elUL.outerHeight();
        var h = "";
        if (c.config.maxDropListHeight > c.maxDropListHeight) {
            c.maxDropListHeight = c.config.maxDropListHeight
        }
        if (e <= j - g - jQuery(window).scrollTop()) {
            h = "down"
        } else {
            if (j - g > c.maxDropListHeight) {
                h = "down"
            } else {
                if (e < d - jQuery(window).scrollTop()) {
                    h = "up"
                } else {
                    if (d - jQuery(window).scrollTop() > c.maxDropListHeight) {
                        h = "up"
                    } else {
                        if (j - g >= d - jQuery(window).scrollTop()) {
                            h = "down";
                            c.maxDropListHeight = j - g
                        } else {
                            h = "up";
                            c.maxDropListHeight = d - jQuery(window).scrollTop()
                        }
                    }
                }
            }
        }
        var i = (/[0-9]+/).test(c.el.css("borderTopWidth")) ? parseInt(c.el.css("borderTopWidth")) : 0;
        var f = (/[0-9]+/).test(c.el.css("borderBottomWidth")) ? parseInt(c.el.css("borderBottomWidth")) : 0;
        c.maxDropListHeight -= (i + f);
        if (h == "up") {
            c.el.css({
                top: d - c.el.outerHeight(true)
            })
        } else {
            c.el.css({
                top: g
            })
        }
    };
    c.options = {
        scrollbarWidth: b != undefined && b.scrollbarWidth != undefined ? parseInt(b.scrollbarWidth) : 10,
        scrollbarSide: b != undefined && b.scrollbarSide != undefined ? b.scrollbarSide : "right"
    };
    c.select = a;
    c.select.addClass("HasSelectUI");
    c.select.css({
        opacity: 0,
        position: "absolute",
        left: "-1000em",
        top: "-1000em"
    });
    c.reservedHolder = null;
    c.elWrapper = jQuery('<div class="DropListUI"></div>');
    c.select.before(c.elWrapper);
    c.el = jQuery('<div class="DropListUIContainer"></div>');
    if (!c.select.attr("multiple")) {
        jQuery("body").append(c.el)
    } else {
        c.elWrapper.html(c.el)
    }
    c.elUL = jQuery('<ul title="' + c.select.attr("title") + '"></ul>');
    c.elUL.addClass(c.select.attr("class"));
    c.el.html(c.elUL);
    if (!c.select.attr("multiple")) {
        c.droplistTITLE = jQuery("<p></p>");
        c.elWrapper.append(c.droplistTITLE);
        c.droplistTITLE.bind("click", function(d) {
            c.eventFire = true;
            if (!c.select.attr("disabled")) {
                if (c.el.hasClass("DropListUIShow")) {
                    c.hideList()
                } else {
                    if ($selectDroplist_Manager.activeName != null) {
                        $selectDroplist_Manager.els[$selectDroplist_Manager.activeName].hideList()
                    }
                    c.showList();
                    $selectDroplist_Manager.activeName = c.select.attr("id")
                }
            }
            return false
        })
    }
    this.setupDropListUI()
};
jQuery.fn.extend({
    addSelectUI: function() {
        if ($selectDroplist_Manager != undefined) {
            jQuery(window).bind("resize", function(b) {
                if ($selectDroplist_Manager.activeName != null && $selectDroplist_Manager.els[$selectDroplist_Manager.activeName] != undefined && !$selectDroplist_Manager.els[$selectDroplist_Manager.activeName].eventFire) {
                    $selectDroplist_Manager.els[$selectDroplist_Manager.activeName].hideList()
                }
            });
            jQuery(document).bind("click", function(b) {
                if ($selectDroplist_Manager.activeName != null) {
                    $selectDroplist_Manager.els[$selectDroplist_Manager.activeName].hideList()
                }
                b.stopPropagation()
            })
        }
        var a = arguments[0];
        this.each(function() {
            if (!jQuery(this).hasClass("HasSelectUI")) {
                jQuery(this).addClass("HasSelectUI");
                $selectDroplist_Manager.els[jQuery(this).attr("id")] = new $selectDroplist_UI(jQuery(this), a)
            }
        })
    }
});

function callExternalFunction(d, a, c) {
    d.select.trigger("onchange");
    if (jQuery("#year").length > 0 && jQuery("#month").length) {
        loadCalendar()
    }
    if (d.select.attr("id") == "rankingPointServer") {
        var b = c.replace(/\r\n\s/g, "").toString();
        loadPageEvent(b)
    }
};
$(function() {
    // $("#posts__tab li a").click(function(d) {
    //     var f = $(this).data("category");
    //     var b = jQuery("#posts__list");
    //     var c = $(this).data("shorturl") + "/" + $(this).data("block-name");
    //     $("#posts__tab li a").removeClass("active");
    //     $(this).addClass("active");
    //     c += f.length > 0 ? ".1.html?cate=" + f : ".1.html";
    //     var e = $(this).attr("href");
    //     $("#posts__view-all").attr("href", e);
    //     a(b, c);
    //     return false
    // });

    function a(b, d) {
        var c;
        if (c != undefined) {
            c.abort()
        }
        c = jQuery.ajax({
            url: d,
            dataType: "json",
            success: function(e) {
                if (navigator.appVersion.indexOf("MSIE 8.") != -1) {
                    b[0].innerHTML = e
                } else {
                    b.html(e)
                }
            }
        })
    }
});
/*! jCarousel - v0.3.1 - 2014-04-26
 * http://sorgalla.com/jcarousel
 * Copyright (c) 2014 Jan Sorgalla; Licensed MIT */
(function(c) {
    var a = c.jCarousel = {};
    a.version = "0.3.1";
    var b = /^([+\-]=)?(.+)$/;
    a.parseTarget = function(f) {
        var d = false,
            e = typeof f !== "object" ? b.exec(f) : null;
        if (e) {
            f = parseInt(e[2], 10) || 0;
            if (e[1]) {
                d = true;
                if (e[1] === "-=") {
                    f *= -1
                }
            }
        } else {
            if (typeof f !== "object") {
                f = parseInt(f, 10) || 0
            }
        }
        return {
            target: f,
            relative: d
        }
    };
    a.detectCarousel = function(d) {
        var e;
        while (d.length > 0) {
            e = d.filter("[data-jcarousel]");
            if (e.length > 0) {
                return e
            }
            e = d.find("[data-jcarousel]");
            if (e.length > 0) {
                return e
            }
            d = d.parent()
        }
        return null
    };
    a.base = function(d) {
        return {
            version: a.version,
            _options: {},
            _element: null,
            _carousel: null,
            _init: c.noop,
            _create: c.noop,
            _destroy: c.noop,
            _reload: c.noop,
            create: function() {
                this._element.attr("data-" + d.toLowerCase(), true).data(d, this);
                if (false === this._trigger("create")) {
                    return this
                }
                this._create();
                this._trigger("createend");
                return this
            },
            destroy: function() {
                if (false === this._trigger("destroy")) {
                    return this
                }
                this._destroy();
                this._trigger("destroyend");
                this._element.removeData(d).removeAttr("data-" + d.toLowerCase());
                return this
            },
            reload: function(e) {
                if (false === this._trigger("reload")) {
                    return this
                }
                if (e) {
                    this.options(e)
                }
                this._reload();
                this._trigger("reloadend");
                return this
            },
            element: function() {
                return this._element
            },
            options: function(e, f) {
                if (arguments.length === 0) {
                    return c.extend({}, this._options)
                }
                if (typeof e === "string") {
                    if (typeof f === "undefined") {
                        return typeof this._options[e] === "undefined" ? null : this._options[e]
                    }
                    this._options[e] = f
                } else {
                    this._options = c.extend({}, this._options, e)
                }
                return this
            },
            carousel: function() {
                if (!this._carousel) {
                    this._carousel = a.detectCarousel(this.options("carousel") || this._element);
                    if (!this._carousel) {
                        c.error('Could not detect carousel for plugin "' + d + '"')
                    }
                }
                return this._carousel
            },
            _trigger: function(g, f, i) {
                var h, e = false;
                i = [this].concat(i || []);
                (f || this._element).each(function() {
                    h = c.Event((d + ":" + g).toLowerCase());
                    c(this).trigger(h, i);
                    if (h.isDefaultPrevented()) {
                        e = true
                    }
                });
                return !e
            }
        }
    };
    a.plugin = function(f, d) {
        var e = c[f] = function(h, g) {
            this._element = c(h);
            this.options(g);
            this._init();
            this.create()
        };
        e.fn = e.prototype = c.extend({}, a.base(f), d);
        c.fn[f] = function(h) {
            var g = Array.prototype.slice.call(arguments, 1),
                i = this;
            if (typeof h === "string") {
                this.each(function() {
                    var j = c(this).data(f);
                    if (!j) {
                        return c.error("Cannot call methods on " + f + ' prior to initialization; attempted to call method "' + h + '"')
                    }
                    if (!c.isFunction(j[h]) || h.charAt(0) === "_") {
                        return c.error('No such method "' + h + '" for ' + f + " instance")
                    }
                    var k = j[h].apply(j, g);
                    if (k !== j && typeof k !== "undefined") {
                        i = k;
                        return false
                    }
                })
            } else {
                this.each(function() {
                    var j = c(this).data(f);
                    if (j instanceof e) {
                        j.reload(h)
                    } else {
                        new e(this, h)
                    }
                })
            }
            return i
        };
        return e
    }
}(jQuery));
(function(c, b) {
    var a = function(d) {
        return parseFloat(d) || 0
    };
    c.jCarousel.plugin("jcarousel", {
        animating: false,
        tail: 0,
        inTail: false,
        resizeTimer: null,
        lt: null,
        vertical: false,
        rtl: false,
        circular: false,
        underflow: false,
        relative: false,
        _options: {
            list: function() {
                return this.element().children().eq(0)
            },
            items: function() {
                return this.list().children()
            },
            animation: 400,
            transitions: false,
            wrap: null,
            vertical: null,
            rtl: null,
            center: false
        },
        _list: null,
        _items: null,
        _target: null,
        _first: null,
        _last: null,
        _visible: null,
        _fullyvisible: null,
        _init: function() {
            var d = this;
            this.onWindowResize = function() {
                if (d.resizeTimer) {
                    clearTimeout(d.resizeTimer)
                }
                d.resizeTimer = setTimeout(function() {
                    d.reload()
                }, 100)
            };
            return this
        },
        _create: function() {
            this._reload();
            c(b).on("resize.jcarousel", this.onWindowResize)
        },
        _destroy: function() {
            c(b).off("resize.jcarousel", this.onWindowResize)
        },
        _reload: function() {
            this.vertical = this.options("vertical");
            if (this.vertical == null) {
                this.vertical = this.list().height() > this.list().width()
            }
            this.rtl = this.options("rtl");
            if (this.rtl == null) {
                this.rtl = (function(f) {
                    if (("" + f.attr("dir")).toLowerCase() === "rtl") {
                        return true
                    }
                    var g = false;
                    f.parents("[dir]").each(function() {
                        if ((/rtl/i).test(c(this).attr("dir"))) {
                            g = true;
                            return false
                        }
                    });
                    return g
                }(this._element))
            }
            this.lt = this.vertical ? "top" : "left";
            this.relative = this.list().css("position") === "relative";
            this._list = null;
            this._items = null;
            var e = this._target && this.index(this._target) >= 0 ? this._target : this.closest();
            this.circular = this.options("wrap") === "circular";
            this.underflow = false;
            var d = {
                left: 0,
                top: 0
            };
            if (e.length > 0) {
                this._prepare(e);
                this.list().find("[data-jcarousel-clone]").remove();
                this._items = null;
                this.underflow = this._fullyvisible.length >= this.items().length;
                this.circular = this.circular && !this.underflow;
                d[this.lt] = this._position(e) + "px"
            }
            this.move(d);
            return this
        },
        list: function() {
            if (this._list === null) {
                var d = this.options("list");
                this._list = c.isFunction(d) ? d.call(this) : this._element.find(d)
            }
            return this._list
        },
        items: function() {
            if (this._items === null) {
                var d = this.options("items");
                this._items = (c.isFunction(d) ? d.call(this) : this.list().find(d)).not("[data-jcarousel-clone]")
            }
            return this._items
        },
        index: function(d) {
            return this.items().index(d)
        },
        closest: function() {
            var d = this,
                i = this.list().position()[this.lt],
                h = c(),
                e = false,
                g = this.vertical ? "bottom" : (this.rtl && !this.relative ? "left" : "right"),
                f;
            if (this.rtl && this.relative && !this.vertical) {
                i += this.list().width() - this.clipping()
            }
            this.items().each(function() {
                h = c(this);
                if (e) {
                    return false
                }
                var j = d.dimension(h);
                i += j;
                if (i >= 0) {
                    f = j - a(h.css("margin-" + g));
                    if ((Math.abs(i) - j + (f / 2)) <= 0) {
                        e = true
                    } else {
                        return false
                    }
                }
            });
            return h
        },
        target: function() {
            return this._target
        },
        first: function() {
            return this._first
        },
        last: function() {
            return this._last
        },
        visible: function() {
            return this._visible
        },
        fullyvisible: function() {
            return this._fullyvisible
        },
        hasNext: function() {
            if (false === this._trigger("hasnext")) {
                return true
            }
            var e = this.options("wrap"),
                d = this.items().length - 1;
            return d >= 0 && !this.underflow && ((e && e !== "first") || (this.index(this._last) < d) || (this.tail && !this.inTail)) ? true : false
        },
        hasPrev: function() {
            if (false === this._trigger("hasprev")) {
                return true
            }
            var d = this.options("wrap");
            return this.items().length > 0 && !this.underflow && ((d && d !== "last") || (this.index(this._first) > 0) || (this.tail && this.inTail)) ? true : false
        },
        clipping: function() {
            return this._element["inner" + (this.vertical ? "Height" : "Width")]()
        },
        dimension: function(d) {
            return d["outer" + (this.vertical ? "Height" : "Width")](true)
        },
        scroll: function(n, f, t) {
            if (this.animating) {
                return this
            }
            if (false === this._trigger("scroll", null, [n, f])) {
                return this
            }
            if (c.isFunction(f)) {
                t = f;
                f = true
            }
            var q = c.jCarousel.parseTarget(n);
            if (q.relative) {
                var g = this.items().length - 1,
                    r = Math.abs(q.target),
                    e = this.options("wrap"),
                    o, l, m, d, u, k, p, h;
                if (q.target > 0) {
                    var s = this.index(this._last);
                    if (s >= g && this.tail) {
                        if (!this.inTail) {
                            this._scrollTail(f, t)
                        } else {
                            if (e === "both" || e === "last") {
                                this._scroll(0, f, t)
                            } else {
                                if (c.isFunction(t)) {
                                    t.call(this, false)
                                }
                            }
                        }
                    } else {
                        o = this.index(this._target);
                        if ((this.underflow && o === g && (e === "circular" || e === "both" || e === "last")) || (!this.underflow && s === g && (e === "both" || e === "last"))) {
                            this._scroll(0, f, t)
                        } else {
                            m = o + r;
                            if (this.circular && m > g) {
                                h = g;
                                u = this.items().get(-1);
                                while (h++ < m) {
                                    u = this.items().eq(0);
                                    k = this._visible.index(u) >= 0;
                                    if (k) {
                                        u.after(u.clone(true).attr("data-jcarousel-clone", true))
                                    }
                                    this.list().append(u);
                                    if (!k) {
                                        p = {};
                                        p[this.lt] = this.dimension(u);
                                        this.moveBy(p)
                                    }
                                    this._items = null
                                }
                                this._scroll(u, f, t)
                            } else {
                                this._scroll(Math.min(m, g), f, t)
                            }
                        }
                    }
                } else {
                    if (this.inTail) {
                        this._scroll(Math.max((this.index(this._first) - r) + 1, 0), f, t)
                    } else {
                        l = this.index(this._first);
                        o = this.index(this._target);
                        d = this.underflow ? o : l;
                        m = d - r;
                        if (d <= 0 && ((this.underflow && e === "circular") || e === "both" || e === "first")) {
                            this._scroll(g, f, t)
                        } else {
                            if (this.circular && m < 0) {
                                h = m;
                                u = this.items().get(0);
                                while (h++ < 0) {
                                    u = this.items().eq(-1);
                                    k = this._visible.index(u) >= 0;
                                    if (k) {
                                        u.after(u.clone(true).attr("data-jcarousel-clone", true))
                                    }
                                    this.list().prepend(u);
                                    this._items = null;
                                    var j = this.dimension(u);
                                    p = {};
                                    p[this.lt] = -j;
                                    this.moveBy(p)
                                }
                                this._scroll(u, f, t)
                            } else {
                                this._scroll(Math.max(m, 0), f, t)
                            }
                        }
                    }
                }
            } else {
                this._scroll(q.target, f, t)
            }
            this._trigger("scrollend");
            return this
        },
        moveBy: function(f, g) {
            var d = this.list().position(),
                h = 1,
                e = 0;
            if (this.rtl && !this.vertical) {
                h = -1;
                if (this.relative) {
                    e = this.list().width() - this.clipping()
                }
            }
            if (f.left) {
                f.left = (d.left + e + a(f.left) * h) + "px"
            }
            if (f.top) {
                f.top = (d.top + e + a(f.top) * h) + "px"
            }
            return this.move(f, g)
        },
        move: function(m, d) {
            d = d || {};
            var h = this.options("transitions"),
                o = !!h,
                l = !!h.transforms,
                n = !!h.transforms3d,
                f = d.duration || 0,
                k = this.list();
            if (!o && f > 0) {
                k.animate(m, d);
                return
            }
            var e = d.complete || c.noop,
                j = {};
            if (o) {
                var i = k.css(["transitionDuration", "transitionTimingFunction", "transitionProperty"]),
                    g = e;
                e = function() {
                    c(this).css(i);
                    g.call(this)
                };
                j = {
                    transitionDuration: (f > 0 ? f / 1000 : 0) + "s",
                    transitionTimingFunction: h.easing || d.easing,
                    transitionProperty: f > 0 ? (function() {
                        if (l || n) {
                            return "all"
                        }
                        return m.left ? "left" : "top"
                    })() : "none",
                    transform: "none"
                }
            }
            if (n) {
                j.transform = "translate3d(" + (m.left || 0) + "," + (m.top || 0) + ",0)"
            } else {
                if (l) {
                    j.transform = "translate(" + (m.left || 0) + "," + (m.top || 0) + ")"
                } else {
                    c.extend(j, m)
                }
            }
            if (o && f > 0) {
                k.one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", e)
            }
            k.css(j);
            if (f <= 0) {
                k.each(function() {
                    e.call(this)
                })
            }
        },
        _scroll: function(f, d, i) {
            if (this.animating) {
                if (c.isFunction(i)) {
                    i.call(this, false)
                }
                return this
            }
            if (typeof f !== "object") {
                f = this.items().eq(f)
            } else {
                if (typeof f.jquery === "undefined") {
                    f = c(f)
                }
            }
            if (f.length === 0) {
                if (c.isFunction(i)) {
                    i.call(this, false)
                }
                return this
            }
            this.inTail = false;
            this._prepare(f);
            var h = this._position(f),
                g = this.list().position()[this.lt];
            if (h === g) {
                if (c.isFunction(i)) {
                    i.call(this, false)
                }
                return this
            }
            var e = {};
            e[this.lt] = h + "px";
            this._animate(e, d, i);
            return this
        },
        _scrollTail: function(d, g) {
            if (this.animating || !this.tail) {
                if (c.isFunction(g)) {
                    g.call(this, false)
                }
                return this
            }
            var f = this.list().position()[this.lt];
            if (this.rtl && this.relative && !this.vertical) {
                f += this.list().width() - this.clipping()
            }
            if (this.rtl && !this.vertical) {
                f += this.tail
            } else {
                f -= this.tail
            }
            this.inTail = true;
            var e = {};
            e[this.lt] = f + "px";
            this._update({
                target: this._target.next(),
                fullyvisible: this._fullyvisible.slice(1).add(this._visible.last())
            });
            this._animate(e, d, g);
            return this
        },
        _animate: function(f, e, j) {
            j = j || c.noop;
            if (false === this._trigger("animate")) {
                j.call(this, false);
                return this
            }
            this.animating = true;
            var i = this.options("animation"),
                d = c.proxy(function() {
                    this.animating = false;
                    var k = this.list().find("[data-jcarousel-clone]");
                    if (k.length > 0) {
                        k.remove();
                        this._reload()
                    }
                    this._trigger("animateend");
                    j.call(this, true)
                }, this);
            var h = typeof i === "object" ? c.extend({}, i) : {
                    duration: i
                },
                g = h.complete || c.noop;
            if (e === false) {
                h.duration = 0
            } else {
                if (typeof c.fx.speeds[h.duration] !== "undefined") {
                    h.duration = c.fx.speeds[h.duration]
                }
            }
            h.complete = function() {
                d();
                g.call(this)
            };
            this.move(f, h);
            return this
        },
        _prepare: function(o) {
            var l = this.index(o),
                n = l,
                e = this.dimension(o),
                f = this.clipping(),
                k = this.vertical ? "bottom" : (this.rtl ? "left" : "right"),
                d = this.options("center"),
                h = {
                    target: o,
                    first: o,
                    last: o,
                    visible: o,
                    fullyvisible: e <= f ? o : c()
                },
                p, j, g, i;
            if (d) {
                e /= 2;
                f /= 2
            }
            if (e < f) {
                while (true) {
                    p = this.items().eq(++n);
                    if (p.length === 0) {
                        if (!this.circular) {
                            break
                        }
                        p = this.items().eq(0);
                        if (o.get(0) === p.get(0)) {
                            break
                        }
                        j = this._visible.index(p) >= 0;
                        if (j) {
                            p.after(p.clone(true).attr("data-jcarousel-clone", true))
                        }
                        this.list().append(p);
                        if (!j) {
                            var m = {};
                            m[this.lt] = this.dimension(p);
                            this.moveBy(m)
                        }
                        this._items = null
                    }
                    i = this.dimension(p);
                    if (i === 0) {
                        break
                    }
                    e += i;
                    h.last = p;
                    h.visible = h.visible.add(p);
                    g = a(p.css("margin-" + k));
                    if ((e - g) <= f) {
                        h.fullyvisible = h.fullyvisible.add(p)
                    }
                    if (e >= f) {
                        break
                    }
                }
            }
            if (!this.circular && !d && e < f) {
                n = l;
                while (true) {
                    if (--n < 0) {
                        break
                    }
                    p = this.items().eq(n);
                    if (p.length === 0) {
                        break
                    }
                    i = this.dimension(p);
                    if (i === 0) {
                        break
                    }
                    e += i;
                    h.first = p;
                    h.visible = h.visible.add(p);
                    g = a(p.css("margin-" + k));
                    if ((e - g) <= f) {
                        h.fullyvisible = h.fullyvisible.add(p)
                    }
                    if (e >= f) {
                        break
                    }
                }
            }
            this._update(h);
            this.tail = 0;
            if (!d && this.options("wrap") !== "circular" && this.options("wrap") !== "custom" && this.index(h.last) === (this.items().length - 1)) {
                e -= a(h.last.css("margin-" + k));
                if (e > f) {
                    this.tail = e - f
                }
            }
            return this
        },
        _position: function(f) {
            var g = this._first,
                h = g.position()[this.lt],
                e = this.options("center"),
                d = e ? (this.clipping() / 2) - (this.dimension(g) / 2) : 0;
            if (this.rtl && !this.vertical) {
                if (this.relative) {
                    h -= this.list().width() - this.dimension(g)
                } else {
                    h -= this.clipping() - this.dimension(g)
                }
                h += d
            } else {
                h -= d
            }
            if (!e && (this.index(f) > this.index(g) || this.inTail) && this.tail) {
                h = this.rtl && !this.vertical ? h - this.tail : h + this.tail;
                this.inTail = true
            } else {
                this.inTail = false
            }
            return -h
        },
        _update: function(i) {
            var e = this,
                g = {
                    target: this._target || c(),
                    first: this._first || c(),
                    last: this._last || c(),
                    visible: this._visible || c(),
                    fullyvisible: this._fullyvisible || c()
                },
                d = this.index(i.first || g.first) < this.index(g.first),
                f, h = function(k) {
                    var j = [],
                        l = [];
                    i[k].each(function() {
                        if (g[k].index(this) < 0) {
                            j.push(this)
                        }
                    });
                    g[k].each(function() {
                        if (i[k].index(this) < 0) {
                            l.push(this)
                        }
                    });
                    if (d) {
                        j = j.reverse()
                    } else {
                        l = l.reverse()
                    }
                    e._trigger(k + "in", c(j));
                    e._trigger(k + "out", c(l));
                    e["_" + k] = i[k]
                };
            for (f in i) {
                h(f)
            }
            return this
        }
    })
}(jQuery, window));
(function(a) {
    a.jcarousel.fn.scrollIntoView = function(i, c, m) {
        var k = a.jCarousel.parseTarget(i),
            f = this.index(this._fullyvisible.first()),
            l = this.index(this._fullyvisible.last()),
            h;
        if (k.relative) {
            h = k.target < 0 ? Math.max(0, f + k.target) : l + k.target
        } else {
            h = typeof k.target !== "object" ? k.target : this.index(k.target)
        }
        if (h < f) {
            return this.scroll(h, c, m)
        }
        if (h >= f && h <= l) {
            if (a.isFunction(m)) {
                m.call(this, false)
            }
            return this
        }
        var j = this.items(),
            d = this.clipping(),
            g = this.vertical ? "bottom" : (this.rtl ? "left" : "right"),
            b = 0,
            n;
        while (true) {
            n = j.eq(h);
            if (n.length === 0) {
                break
            }
            b += this.dimension(n);
            if (b >= d) {
                var e = parseFloat(n.css("margin-" + g)) || 0;
                if ((b - e) !== d) {
                    h++
                }
                break
            }
            if (h <= 0) {
                break
            }
            h--
        }
        return this.scroll(h, c, m)
    }
}(jQuery));
(function(a) {
    a.jCarousel.plugin("jcarouselControl", {
        _options: {
            target: "+=1",
            event: "click",
            method: "scroll"
        },
        _active: null,
        _init: function() {
            this.onDestroy = a.proxy(function() {
                this._destroy();
                this.carousel().one("jcarousel:createend", a.proxy(this._create, this))
            }, this);
            this.onReload = a.proxy(this._reload, this);
            this.onEvent = a.proxy(function(b) {
                b.preventDefault();
                var c = this.options("method");
                if (a.isFunction(c)) {
                    c.call(this)
                } else {
                    this.carousel().jcarousel(this.options("method"), this.options("target"))
                }
            }, this)
        },
        _create: function() {
            this.carousel().one("jcarousel:destroy", this.onDestroy).on("jcarousel:reloadend jcarousel:scrollend", this.onReload);
            this._element.on(this.options("event") + ".jcarouselcontrol", this.onEvent);
            this._reload()
        },
        _destroy: function() {
            this._element.off(".jcarouselcontrol", this.onEvent);
            this.carousel().off("jcarousel:destroy", this.onDestroy).off("jcarousel:reloadend jcarousel:scrollend", this.onReload)
        },
        _reload: function() {
            var b = a.jCarousel.parseTarget(this.options("target")),
                e = this.carousel(),
                d;
            if (b.relative) {
                d = e.jcarousel(b.target > 0 ? "hasNext" : "hasPrev")
            } else {
                var c = typeof b.target !== "object" ? e.jcarousel("items").eq(b.target) : b.target;
                d = e.jcarousel("target").index(c) >= 0
            }
            if (this._active !== d) {
                this._trigger(d ? "active" : "inactive");
                this._active = d
            }
            return this
        }
    })
}(jQuery));
(function(a) {
    a.jCarousel.plugin("jcarouselPagination", {
        _options: {
            perPage: null,
            item: function(b) {
                return '<a href="#' + b + '">' + b + "</a>"
            },
            event: "click",
            method: "scroll"
        },
        _carouselItems: null,
        _pages: {},
        _items: {},
        _currentPage: null,
        _init: function() {
            this.onDestroy = a.proxy(function() {
                this._destroy();
                this.carousel().one("jcarousel:createend", a.proxy(this._create, this))
            }, this);
            this.onReload = a.proxy(this._reload, this);
            this.onScroll = a.proxy(this._update, this)
        },
        _create: function() {
            this.carousel().one("jcarousel:destroy", this.onDestroy).on("jcarousel:reloadend", this.onReload).on("jcarousel:scrollend", this.onScroll);
            this._reload()
        },
        _destroy: function() {
            this._clear();
            this.carousel().off("jcarousel:destroy", this.onDestroy).off("jcarousel:reloadend", this.onReload).off("jcarousel:scrollend", this.onScroll);
            this._carouselItems = null
        },
        _reload: function() {
            var h = this.options("perPage");
            this._pages = {};
            this._items = {};
            if (a.isFunction(h)) {
                h = h.call(this)
            }
            if (h == null) {
                this._pages = this._calculatePages()
            } else {
                var b = parseInt(h, 10) || 0,
                    g = this._getCarouselItems(),
                    f = 1,
                    d = 0,
                    m;
                while (true) {
                    m = g.eq(d++);
                    if (m.length === 0) {
                        break
                    }
                    if (!this._pages[f]) {
                        this._pages[f] = m
                    } else {
                        this._pages[f] = this._pages[f].add(m)
                    }
                    if (d % b === 0) {
                        f++
                    }
                }
            }
            this._clear();
            var l = this,
                k = this.carousel().data("jcarousel"),
                c = this._element,
                j = this.options("item"),
                e = this._getCarouselItems().length;
            a.each(this._pages, function(o, n) {
                var i = l._items[o] = a(j.call(l, o, n));
                i.on(l.options("event") + ".jcarouselpagination", a.proxy(function() {
                    var r = n.eq(0);
                    if (k.circular) {
                        var p = k.index(k.target()),
                            q = k.index(r);
                        if (parseFloat(o) > parseFloat(l._currentPage)) {
                            if (q < p) {
                                r = "+=" + (e - p + q)
                            }
                        } else {
                            if (q > p) {
                                r = "-=" + (p + (e - q))
                            }
                        }
                    }
                    k[this.options("method")](r)
                }, l));
                c.append(i)
            });
            this._update()
        },
        _update: function() {
            var c = this.carousel().jcarousel("target"),
                b;
            a.each(this._pages, function(e, d) {
                d.each(function() {
                    if (c.is(this)) {
                        b = e;
                        return false
                    }
                });
                if (b) {
                    return false
                }
            });
            if (this._currentPage !== b) {
                this._trigger("inactive", this._items[this._currentPage]);
                this._trigger("active", this._items[b])
            }
            this._currentPage = b
        },
        items: function() {
            return this._items
        },
        reloadCarouselItems: function() {
            this._carouselItems = null;
            return this
        },
        _clear: function() {
            this._element.empty();
            this._currentPage = null
        },
        _calculatePages: function() {
            var i = this.carousel().data("jcarousel"),
                e = this._getCarouselItems(),
                f = i.clipping(),
                d = 0,
                c = 0,
                g = 1,
                b = {},
                h;
            while (true) {
                h = e.eq(c++);
                if (h.length === 0) {
                    break
                }
                if (!b[g]) {
                    b[g] = h
                } else {
                    b[g] = b[g].add(h)
                }
                d += i.dimension(h);
                if (d >= f) {
                    g++;
                    d = 0
                }
            }
            return b
        },
        _getCarouselItems: function() {
            if (!this._carouselItems) {
                this._carouselItems = this.carousel().jcarousel("items")
            }
            return this._carouselItems
        }
    })
}(jQuery));
(function(a) {
    a.jCarousel.plugin("jcarouselAutoscroll", {
        _options: {
            target: "+=1",
            interval: 3000,
            autostart: true
        },
        _timer: null,
        _init: function() {
            this.onDestroy = a.proxy(function() {
                this._destroy();
                this.carousel().one("jcarousel:createend", a.proxy(this._create, this))
            }, this);
            this.onAnimateEnd = a.proxy(this.start, this)
        },
        _create: function() {
            this.carousel().one("jcarousel:destroy", this.onDestroy);
            if (this.options("autostart")) {
                this.start()
            }
        },
        _destroy: function() {
            this.stop();
            this.carousel().off("jcarousel:destroy", this.onDestroy)
        },
        start: function() {
            this.stop();
            this.carousel().one("jcarousel:animateend", this.onAnimateEnd);
            this._timer = setTimeout(a.proxy(function() {
                this.carousel().jcarousel("scroll", this.options("target"))
            }, this), this.options("interval"));
            return this
        },
        stop: function() {
            if (this._timer) {
                this._timer = clearTimeout(this._timer)
            }
            this.carousel().off("jcarousel:animateend", this.onAnimateEnd);
            return this
        }
    })
}(jQuery));
(function(a) {
    a.fn.activeMenu = function(m) {
        var f = a.extend({
            classActive: "active",
            objActive: "a",
            exceptSection: ""
        }, m);
        var k = this;
        var j = k.find("a");
        var l = window.location.pathname.replace("/app_dev.php/", "").replace("/app_dev.php", "");
        var c = l.charAt(0) == "/" ? l.substring(1, l.length).split("/") : l.split("/");
        var d = null;

        function b(n) {
            j.each(function(p) {
                var q = a(this);
                var o = q.attr("href").replace(domain + "/", "").split("/").toString();
                if (o.search(n) > -1) {
                    d = q;
                    if (q.parent("li").has("a").length == 0) {
                        return false
                    }
                }
            })
        }
        if (c.length == 1) {
            c[0] = "index.html";
            if (f.objActive == "a") {
                k.find("li").eq(0).children("a").addClass(f.classActive)
            } else {
                k.find("li").eq(0).addClass(f.classActive)
            }
            return this
        }
        if (c.length > 0) {
            var g = c.length;
            var e = f.exceptSection.split(",");
            for (i = 0; i < g; i++) {
                var h = c.slice(0, g - i).toString();
                if ((i == g - 1) && e.indexOf(h) > -1) {
                    break
                }
                b(h);
                if (d != null) {
                    if (f.objActive == "a") {
                        d.addClass(f.classActive);
                        d.parents("li").children("a").addClass(f.classActive)
                    } else {
                        d.parent("li").addClass(f.classActive);
                        d.parents("li").addClass(f.classActive)
                    }
                    d.parents("li").addClass("open");
                    break
                }
            }
        }
        return this
    }
}(jQuery));
$(document).ready(function() {
    if ($("#main-nav").length) {
        $("#main-nav").activeMenu()
    }
    if ($("#left-nav").length) {
        $("#left-nav ul").activeMenu()
    }
});
var btnToggle = $(".fixed-box .toggle");
var fixedbox = $(".fixed-box");
$(function(a) {
    btnToggle.unbind("click").bind("click", function(b) {
        b.preventDefault();
        if (btnToggle.hasClass("open")) {
            fixedbox.animate({
                right: 0
            }, 500, function() {
                btnToggle.removeClass("open").addClass("close")
            })
        } else {
            fixedbox.animate({
                right: -110
            }, 500, function() {
                btnToggle.removeClass("close").addClass("open")
            })
        }
    })
});
$(window).load(function() {
    try {
        if ($(".subpage").size()) {
            showPopupSocial.init({
                RelativeID: "popup-social-home",
                typePage: "subpage",
                isDisableSend: true,
                isVportalLike: false,
                isZingMe: false
            }, function() {
                htmlLikeFanpage = '<div style="margin:10px 0;" class="fb-like" data-href="https://www.facebook.com/vltkm.zing.vn/" data-layout="box_count" data-action="like" data-show-faces="true" data-share="false"></div>';
                // $("#popup-social-home .button-control .group-facebook").append(htmlLikeFanpage)
            })
        } else {
            showPopupSocial.init({
                RelativeID: "popup-social-home",
                typePage: "home",
                isDisableSend: true,
                isVportalLike: false,
                isZingMe: false
            }, function() {
                htmlLikeFanpage = '<div style="margin:10px 0;" class="fb-like" data-href="https://www.facebook.com/vltkm.zing.vn/" data-layout="box_count" data-action="like" data-show-faces="true" data-share="false"></div>';
                // $("#popup-social-home .button-control .group-facebook").append(htmlLikeFanpage)
            })
        }
    } catch (a) {
        console.error(a.message)
    }
});
var data_group = 1;
jQuery(document).ready(function() {
    var a = "function_ranking=getDailyTotalActiveFightPowerRanking";
    var c = "";
    $("#block-ranking").delegate("#pagination li.prev a", "click", function() {
        if (data_group > 1) {
            data_group--;
            $(".pagination-container .pagination li.page").hide();
            $(".pagination-container .pagination li.group-page-" + data_group).show();
            $("#pagination li.prev").removeClass("disabled");
            $("#pagination li.next").removeClass("disabled");
            if (data_group <= 1) {
                $("#pagination li.prev").addClass("disabled")
            }
        } else {
            $("#pagination li.prev").addClass("disabled")
        }
        return false
    });
    $("#block-ranking").delegate("#pagination li.next ", "click", function() {
        if (data_group < 5) {
            data_group++;
            $(".pagination-container .pagination li.page").hide();
            $(".pagination-container .pagination li.group-page-" + data_group).show();
            $("#pagination li.next").removeClass("disabled");
            $("#pagination li.prev").removeClass("disabled");
            if (data_group >= 5) {
                $("#pagination li.prev").addClass("disabled")
            }
        } else {
            $("#pagination li.next").addClass("disabled")
        }
        return false
    });
    $("#block-ranking").delegate("#pagination li.page a", "click", function() {
        var d = parseInt($(this).text());
        $("ul.list-data-bxh").hide();
        $("#page-" + d).show();
        $("#pagination .page").removeClass("active");
        $(this).parent().addClass("active");
        return false
    });
    if ($("#block-ranking").length > 0) {
        var b = $("#block-ranking").attr("rel");
        $("#block-ranking").delegate(".tabbxh ul li a", "click", function() {
            var d = $(this).attr("rel");
            $(".tabbxh ul li ").removeClass("active");
            $(this).parent().addClass("active");
            if (d != "") {
                a = d
            } else {
                return false
            }
            jQuery.ajax({
                type: "POST",
                url: b,
                data: a,
                beforeSend: function() {
                    $("#block-ranking").html("<div style='padding-top: 150px'> <img src='http://img.zing.vn/products/vltkm/skin-2016/images/loading.gif' /> <p>Loading...</p> </div>")
                },
                success: function(e) {
                    $("#block-ranking").html(e)
                },
                error: function(e) {}
            });
            return false
        });
        $("#block-ranking").delegate(".banghoi select", "change", function() {
            var d = $(this).val();
            if (d != "") {
                postData_banghoi = "function_ranking=" + d
            } else {
                postData_banghoi = "function_ranking=getPrestigeRanking"
            }
            jQuery.ajax({
                type: "POST",
                url: b,
                data: postData_banghoi,
                beforeSend: function() {
                    $("#block-ranking").html("<div style='padding-top: 150px'> <img src='http://img.zing.vn/products/vltkm/skin-2016/images/loading.gif' /> <p>Loading...</p> </div>")
                },
                success: function(e) {
                    $("#block-ranking").html(e)
                },
                error: function(e) {}
            })
        });
        $("#block-ranking").delegate(".other select", "change", function() {
            var d = $(this).val();
            if (d != "") {
                postData_other = "&faction_id=" + d
            } else {
                postData_other = "&faction_id=" + 1
            }
            jQuery.ajax({
                type: "POST",
                url: b,
                data: a + postData_other + c,
                beforeSend: function() {
                    $("#block-ranking").html("<div style='padding-top: 150px'> <img src='http://img.zing.vn/products/vltkm/skin-2016/images/loading.gif' /> <p>Loading...</p> </div>")
                },
                success: function(e) {
                    $("#block-ranking").html(e)
                },
                error: function(e) {}
            })
        });
        $("#block-ranking").delegate(".chon-server select", "change", function() {
            var d = $(this).val();
            if (d != "") {
                c = "&server_id=" + d
            } else {
                c = ""
            }
            jQuery.ajax({
                type: "POST",
                url: b,
                data: a + c,
                beforeSend: function() {
                    $("#block-ranking").html("<div style='padding-top: 150px'> <img src='http://img.zing.vn/products/vltkm/skin-2016/images/loading.gif' /> <p>Loading...</p> </div>")
                },
                success: function(e) {
                    $("#block-ranking").html(e)
                },
                error: function(e) {}
            })
        });
        jQuery.ajax({
            type: "POST",
            url: b,
            data: a,
            beforeSend: function() {
                $("#block-ranking").html("<div style='padding-top: 150px; padding-left: 250px;'> <img src='http://img.zing.vn/products/vltkm/skin-2016/images/loading.gif' /> <p>Loading...</p> </div>")
            },
            success: function(d) {
                $("#block-ranking").html(d)
            },
            error: function(d) {}
        })
    }
});

function cutStringTable() {
    for (var a = 1; a < $("p.NhanVat").length; a++) {
        $("p.NhanVat").eq(a).text(($("p.NhanVat").eq(a).html()).substring(0, 6))
    }
}

function addClassTable() {
    if (jQuery("#rankingResult").length > 0) {
        for (var a = 0; a < jQuery("#rankingResult li p").length; a++) {
            switch (a % 3) {
                case 0:
                    jQuery("#rankingResult li p").eq(a).addClass("Hang");
                    break;
                case 1:
                    jQuery("#rankingResult li p").eq(a).addClass("NhanVat");
                    break;
                case 2:
                    jQuery("#rankingResult li p").eq(a).addClass("ThanhTich");
                    break
            }
        }
    }
};