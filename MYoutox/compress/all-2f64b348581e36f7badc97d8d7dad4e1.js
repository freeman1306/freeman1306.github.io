! function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    var i = [],
        n = i.slice,
        o = i.concat,
        s = i.push,
        r = i.indexOf,
        a = {},
        l = a.toString,
        c = a.hasOwnProperty,
        d = {},
        u = e.document,
        h = "2.1.4",
        p = function(e, t) {
            return new p.fn.init(e, t)
        },
        f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        m = /^-ms-/,
        v = /-([\da-z])/gi,
        g = function(e, t) {
            return t.toUpperCase()
        };

    function y(e) {
        var t = "length" in e && e.length,
            i = p.type(e);
        return "function" !== i && !p.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    p.fn = p.prototype = {
        jquery: h,
        constructor: p,
        selector: "",
        length: 0,
        toArray: function() {
            return n.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : n.call(this)
        },
        pushStack: function(e) {
            var t = p.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        },
        each: function(e, t) {
            return p.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(p.map(this, function(t, i) {
                return e.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(n.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                i = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= i && i < t ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: s,
        sort: i.sort,
        splice: i.splice
    }, p.extend = p.fn.extend = function() {
        var e, t, i, n, o, s, r = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || p.isFunction(r) || (r = {}), a === l && (r = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) i = r[t], r !== (n = e[t]) && (c && n && (p.isPlainObject(n) || (o = p.isArray(n))) ? (o ? (o = !1, s = i && p.isArray(i) ? i : []) : s = i && p.isPlainObject(i) ? i : {}, r[t] = p.extend(c, s, n)) : void 0 !== n && (r[t] = n));
        return r
    }, p.extend({
        expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === p.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            return !p.isArray(e) && 0 <= e - parseFloat(e) + 1
        },
        isPlainObject: function(e) {
            return !("object" !== p.type(e) || e.nodeType || p.isWindow(e) || e.constructor && !c.call(e.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? a[l.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, i = eval;
            (e = p.trim(e)) && (1 === e.indexOf("use strict") ? ((t = u.createElement("script")).text = e, u.head.appendChild(t).parentNode.removeChild(t)) : i(e))
        },
        camelCase: function(e) {
            return e.replace(m, "ms-").replace(v, g)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var n = 0,
                o = e.length,
                s = y(e);
            if (i) {
                if (s)
                    for (; n < o && !1 !== t.apply(e[n], i); n++);
                else
                    for (n in e)
                        if (!1 === t.apply(e[n], i)) break
            } else if (s)
                for (; n < o && !1 !== t.call(e[n], n, e[n]); n++);
            else
                for (n in e)
                    if (!1 === t.call(e[n], n, e[n])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(f, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (y(Object(e)) ? p.merge(i, "string" == typeof e ? [e] : e) : s.call(i, e)), i
        },
        inArray: function(e, t, i) {
            return null == t ? -1 : r.call(t, e, i)
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, o = e.length; n < i; n++) e[o++] = t[n];
            return e.length = o, e
        },
        grep: function(e, t, i) {
            for (var n = [], o = 0, s = e.length, r = !i; o < s; o++) !t(e[o], o) !== r && n.push(e[o]);
            return n
        },
        map: function(e, t, i) {
            var n, s = 0,
                r = e.length,
                a = [];
            if (y(e))
                for (; s < r; s++) null != (n = t(e[s], s, i)) && a.push(n);
            else
                for (s in e) null != (n = t(e[s], s, i)) && a.push(n);
            return o.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var i, o, s;
            return "string" == typeof t && (i = e[t], t = e, e = i), p.isFunction(e) ? (o = n.call(arguments, 2), (s = function() {
                return e.apply(t || this, o.concat(n.call(arguments)))
            }).guid = e.guid = e.guid || p.guid++, s) : void 0
        },
        now: Date.now,
        support: d
    }), p.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        a["[object " + t + "]"] = t.toLowerCase()
    });
    var b = function(e) {
        var t, i, n, o, s, r, a, l, c, d, u, h, p, f, m, v, g, y, b, w = "sizzle" + 1 * new Date,
            x = e.document,
            k = 0,
            S = 0,
            T = re(),
            C = re(),
            E = re(),
            A = function(e, t) {
                return e === t && (u = !0), 0
            },
            $ = 1 << 31,
            _ = {}.hasOwnProperty,
            O = [],
            P = O.pop,
            L = O.push,
            D = O.push,
            M = O.slice,
            H = function(e, t) {
                for (var i = 0, n = e.length; i < n; i++)
                    if (e[i] === t) return i;
                return -1
            },
            j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            I = "[\\x20\\t\\r\\n\\f]",
            q = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            B = q.replace("w", "w#"),
            N = "\\[" + I + "*(" + q + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + B + "))|)" + I + "*\\]",
            z = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            F = new RegExp(I + "+", "g"),
            W = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$", "g"),
            R = new RegExp("^" + I + "*," + I + "*"),
            X = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"),
            Y = new RegExp("=" + I + "*([^\\]'\"]*?)" + I + "*\\]", "g"),
            U = new RegExp(z),
            V = new RegExp("^" + B + "$"),
            Q = {
                ID: new RegExp("^#(" + q + ")"),
                CLASS: new RegExp("^\\.(" + q + ")"),
                TAG: new RegExp("^(" + q.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + z),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + j + ")$", "i"),
                needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)", "i")
            },
            Z = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = /'|\\/g,
            ie = new RegExp("\\\\([\\da-f]{1,6}" + I + "?|(" + I + ")|.)", "ig"),
            ne = function(e, t, i) {
                var n = "0x" + t - 65536;
                return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
            },
            oe = function() {
                h()
            };
        try {
            D.apply(O = M.call(x.childNodes), x.childNodes), O[x.childNodes.length].nodeType
        } catch (t) {
            D = {
                apply: O.length ? function(e, t) {
                    L.apply(e, M.call(t))
                } : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++];);
                    e.length = i - 1
                }
            }
        }

        function se(e, t, n, o) {
            var s, a, c, d, u, f, g, y, k, S;
            if ((t ? t.ownerDocument || t : x) !== p && h(t), n = n || [], d = (t = t || p).nodeType, "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n;
            if (!o && m) {
                if (11 !== d && (s = J.exec(e)))
                    if (c = s[1]) {
                        if (9 === d) {
                            if (!(a = t.getElementById(c)) || !a.parentNode) return n;
                            if (a.id === c) return n.push(a), n
                        } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(c)) && b(t, a) && a.id === c) return n.push(a), n
                    } else {
                        if (s[2]) return D.apply(n, t.getElementsByTagName(e)), n;
                        if ((c = s[3]) && i.getElementsByClassName) return D.apply(n, t.getElementsByClassName(c)), n
                    }
                if (i.qsa && (!v || !v.test(e))) {
                    if (y = g = w, k = t, S = 1 !== d && e, 1 === d && "object" !== t.nodeName.toLowerCase()) {
                        for (f = r(e), (g = t.getAttribute("id")) ? y = g.replace(te, "\\$&") : t.setAttribute("id", y), y = "[id='" + y + "'] ", u = f.length; u--;) f[u] = y + ve(f[u]);
                        k = ee.test(e) && fe(t.parentNode) || t, S = f.join(",")
                    }
                    if (S) try {
                        return D.apply(n, k.querySelectorAll(S)), n
                    } catch (e) {} finally {
                        g || t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(W, "$1"), t, n, o)
        }

        function re() {
            var e = [];
            return function t(i, o) {
                return e.push(i + " ") > n.cacheLength && delete t[e.shift()], t[i + " "] = o
            }
        }

        function ae(e) {
            return e[w] = !0, e
        }

        function le(e) {
            var t = p.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ce(e, t) {
            for (var i = e.split("|"), o = e.length; o--;) n.attrHandle[i[o]] = t
        }

        function de(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || $) - (~e.sourceIndex || $);
            if (n) return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t) return -1;
            return e ? 1 : -1
        }

        function ue(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function he(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }

        function pe(e) {
            return ae(function(t) {
                return t = +t, ae(function(i, n) {
                    for (var o, s = e([], i.length, t), r = s.length; r--;) i[o = s[r]] && (i[o] = !(n[o] = i[o]))
                })
            })
        }

        function fe(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (t in i = se.support = {}, s = se.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, h = se.setDocument = function(e) {
                var t, o, r = e ? e.ownerDocument || e : x;
                return r !== p && 9 === r.nodeType && r.documentElement ? (f = (p = r).documentElement, (o = r.defaultView) && o !== o.top && (o.addEventListener ? o.addEventListener("unload", oe, !1) : o.attachEvent && o.attachEvent("onunload", oe)), m = !s(r), i.attributes = le(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), i.getElementsByTagName = le(function(e) {
                    return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
                }), i.getElementsByClassName = K.test(r.getElementsByClassName), i.getById = le(function(e) {
                    return f.appendChild(e).id = w, !r.getElementsByName || !r.getElementsByName(w).length
                }), i.getById ? (n.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && m) {
                        var i = t.getElementById(e);
                        return i && i.parentNode ? [i] : []
                    }
                }, n.filter.ID = function(e) {
                    var t = e.replace(ie, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete n.find.ID, n.filter.ID = function(e) {
                    var t = e.replace(ie, ne);
                    return function(e) {
                        var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return i && i.value === t
                    }
                }), n.find.TAG = i.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var i, n = [],
                        o = 0,
                        s = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; i = s[o++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return s
                }, n.find.CLASS = i.getElementsByClassName && function(e, t) {
                    return m ? t.getElementsByClassName(e) : void 0
                }, g = [], v = [], (i.qsa = K.test(r.querySelectorAll)) && (le(function(e) {
                    f.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + I + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + I + "*(?:value|" + j + ")"), e.querySelectorAll("[id~=" + w + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || v.push(".#.+[+~]")
                }), le(function(e) {
                    var t = r.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + I + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (i.matchesSelector = K.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && le(function(e) {
                    i.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), g.push("!=", z)
                }), v = v.length && new RegExp(v.join("|")), g = g.length && new RegExp(g.join("|")), t = K.test(f.compareDocumentPosition), b = t || K.test(f.contains) ? function(e, t) {
                    var i = 9 === e.nodeType ? e.documentElement : e,
                        n = t && t.parentNode;
                    return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, A = t ? function(e, t) {
                    if (e === t) return u = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !i.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === x && b(x, e) ? -1 : t === r || t.ownerDocument === x && b(x, t) ? 1 : d ? H(d, e) - H(d, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return u = !0, 0;
                    var i, n = 0,
                        o = e.parentNode,
                        s = t.parentNode,
                        a = [e],
                        l = [t];
                    if (!o || !s) return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : d ? H(d, e) - H(d, t) : 0;
                    if (o === s) return de(e, t);
                    for (i = e; i = i.parentNode;) a.unshift(i);
                    for (i = t; i = i.parentNode;) l.unshift(i);
                    for (; a[n] === l[n];) n++;
                    return n ? de(a[n], l[n]) : a[n] === x ? -1 : l[n] === x ? 1 : 0
                }, r) : p
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== p && h(e), t = t.replace(Y, "='$1']"), !(!i.matchesSelector || !m || g && g.test(t) || v && v.test(t))) try {
                    var n = y.call(e, t);
                    if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return 0 < se(t, p, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) !== p && h(e), b(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) !== p && h(e);
                var o = n.attrHandle[t.toLowerCase()],
                    s = o && _.call(n.attrHandle, t.toLowerCase()) ? o(e, t, !m) : void 0;
                return void 0 !== s ? s : i.attributes || !m ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, n = [],
                    o = 0,
                    s = 0;
                if (u = !i.detectDuplicates, d = !i.sortStable && e.slice(0), e.sort(A), u) {
                    for (; t = e[s++];) t === e[s] && (o = n.push(s));
                    for (; o--;) e.splice(n[o], 1)
                }
                return d = null, e
            }, o = se.getText = function(e) {
                var t, i = "",
                    n = 0,
                    s = e.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) i += o(e)
                    } else if (3 === s || 4 === s) return e.nodeValue
                } else
                    for (; t = e[n++];) i += o(t);
                return i
            }, (n = se.selectors = {
                cacheLength: 50,
                createPseudo: ae,
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
                        return e[1] = e[1].replace(ie, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(ie, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, i = !e[6] && e[2];
                        return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && U.test(i) && (t = r(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ie, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = T[e + " "];
                        return t || (t = new RegExp("(^|" + I + ")" + e + "(" + I + "|$)")) && T(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, i) {
                        return function(n) {
                            var o = se.attr(n, e);
                            return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === i : "!=" === t ? o !== i : "^=" === t ? i && 0 === o.indexOf(i) : "*=" === t ? i && -1 < o.indexOf(i) : "$=" === t ? i && o.slice(-i.length) === i : "~=" === t ? -1 < (" " + o.replace(F, " ") + " ").indexOf(i) : "|=" === t && (o === i || o.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, i, n, o) {
                        var s = "nth" !== e.slice(0, 3),
                            r = "last" !== e.slice(-4),
                            a = "of-type" === t;
                        return 1 === n && 0 === o ? function(e) {
                            return !!e.parentNode
                        } : function(t, i, l) {
                            var c, d, u, h, p, f, m = s !== r ? "nextSibling" : "previousSibling",
                                v = t.parentNode,
                                g = a && t.nodeName.toLowerCase(),
                                y = !l && !a;
                            if (v) {
                                if (s) {
                                    for (; m;) {
                                        for (u = t; u = u[m];)
                                            if (a ? u.nodeName.toLowerCase() === g : 1 === u.nodeType) return !1;
                                        f = m = "only" === e && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [r ? v.firstChild : v.lastChild], r && y) {
                                    for (p = (c = (d = v[w] || (v[w] = {}))[e] || [])[0] === k && c[1], h = c[0] === k && c[2], u = p && v.childNodes[p]; u = ++p && u && u[m] || (h = p = 0) || f.pop();)
                                        if (1 === u.nodeType && ++h && u === t) {
                                            d[e] = [k, p, h];
                                            break
                                        }
                                } else if (y && (c = (t[w] || (t[w] = {}))[e]) && c[0] === k) h = c[1];
                                else
                                    for (;
                                        (u = ++p && u && u[m] || (h = p = 0) || f.pop()) && ((a ? u.nodeName.toLowerCase() !== g : 1 !== u.nodeType) || !++h || (y && ((u[w] || (u[w] = {}))[e] = [k, h]), u !== t)););
                                return (h -= o) === n || h % n == 0 && 0 <= h / n
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var i, o = n.pseudos[e] || n.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return o[w] ? o(t) : 1 < o.length ? (i = [e, e, "", t], n.setFilters.hasOwnProperty(e.toLowerCase()) ? ae(function(e, i) {
                            for (var n, s = o(e, t), r = s.length; r--;) e[n = H(e, s[r])] = !(i[n] = s[r])
                        }) : function(e) {
                            return o(e, 0, i)
                        }) : o
                    }
                },
                pseudos: {
                    not: ae(function(e) {
                        var t = [],
                            i = [],
                            n = a(e.replace(W, "$1"));
                        return n[w] ? ae(function(e, t, i, o) {
                            for (var s, r = n(e, null, o, []), a = e.length; a--;)(s = r[a]) && (e[a] = !(t[a] = s))
                        }) : function(e, o, s) {
                            return t[0] = e, n(t, null, s, i), t[0] = null, !i.pop()
                        }
                    }),
                    has: ae(function(e) {
                        return function(t) {
                            return 0 < se(e, t).length
                        }
                    }),
                    contains: ae(function(e) {
                        return e = e.replace(ie, ne),
                            function(t) {
                                return -1 < (t.textContent || t.innerText || o(t)).indexOf(e)
                            }
                    }),
                    lang: ae(function(e) {
                        return V.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(ie, ne).toLowerCase(),
                            function(t) {
                                var i;
                                do {
                                    if (i = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var i = e.location && e.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === f
                    },
                    focus: function(e) {
                        return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !n.pseudos.empty(e)
                    },
                    header: function(e) {
                        return G.test(e.nodeName)
                    },
                    input: function(e) {
                        return Z.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: pe(function() {
                        return [0]
                    }),
                    last: pe(function(e, t) {
                        return [t - 1]
                    }),
                    eq: pe(function(e, t, i) {
                        return [i < 0 ? i + t : i]
                    }),
                    even: pe(function(e, t) {
                        for (var i = 0; i < t; i += 2) e.push(i);
                        return e
                    }),
                    odd: pe(function(e, t) {
                        for (var i = 1; i < t; i += 2) e.push(i);
                        return e
                    }),
                    lt: pe(function(e, t, i) {
                        for (var n = i < 0 ? i + t : i; 0 <= --n;) e.push(n);
                        return e
                    }),
                    gt: pe(function(e, t, i) {
                        for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
                        return e
                    })
                }
            }).pseudos.nth = n.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) n.pseudos[t] = ue(t);
        for (t in {
                submit: !0,
                reset: !0
            }) n.pseudos[t] = he(t);

        function me() {}

        function ve(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
            return n
        }

        function ge(e, t, i) {
            var n = t.dir,
                o = i && "parentNode" === n,
                s = S++;
            return t.first ? function(t, i, s) {
                for (; t = t[n];)
                    if (1 === t.nodeType || o) return e(t, i, s)
            } : function(t, i, r) {
                var a, l, c = [k, s];
                if (r) {
                    for (; t = t[n];)
                        if ((1 === t.nodeType || o) && e(t, i, r)) return !0
                } else
                    for (; t = t[n];)
                        if (1 === t.nodeType || o) {
                            if ((a = (l = t[w] || (t[w] = {}))[n]) && a[0] === k && a[1] === s) return c[2] = a[2];
                            if ((l[n] = c)[2] = e(t, i, r)) return !0
                        }
            }
        }

        function ye(e) {
            return 1 < e.length ? function(t, i, n) {
                for (var o = e.length; o--;)
                    if (!e[o](t, i, n)) return !1;
                return !0
            } : e[0]
        }

        function be(e, t, i, n, o) {
            for (var s, r = [], a = 0, l = e.length, c = null != t; a < l; a++)(s = e[a]) && (!i || i(s, n, o)) && (r.push(s), c && t.push(a));
            return r
        }

        function we(e, t, i, n, o, s) {
            return n && !n[w] && (n = we(n)), o && !o[w] && (o = we(o, s)), ae(function(s, r, a, l) {
                var c, d, u, h = [],
                    p = [],
                    f = r.length,
                    m = s || function(e, t, i) {
                        for (var n = 0, o = t.length; n < o; n++) se(e, t[n], i);
                        return i
                    }(t || "*", a.nodeType ? [a] : a, []),
                    v = !e || !s && t ? m : be(m, h, e, a, l),
                    g = i ? o || (s ? e : f || n) ? [] : r : v;
                if (i && i(v, g, a, l), n)
                    for (c = be(g, p), n(c, [], a, l), d = c.length; d--;)(u = c[d]) && (g[p[d]] = !(v[p[d]] = u));
                if (s) {
                    if (o || e) {
                        if (o) {
                            for (c = [], d = g.length; d--;)(u = g[d]) && c.push(v[d] = u);
                            o(null, g = [], c, l)
                        }
                        for (d = g.length; d--;)(u = g[d]) && -1 < (c = o ? H(s, u) : h[d]) && (s[c] = !(r[c] = u))
                    }
                } else g = be(g === r ? g.splice(f, g.length) : g), o ? o(null, r, g, l) : D.apply(r, g)
            })
        }

        function xe(e) {
            for (var t, i, o, s = e.length, r = n.relative[e[0].type], a = r || n.relative[" "], l = r ? 1 : 0, d = ge(function(e) {
                    return e === t
                }, a, !0), u = ge(function(e) {
                    return -1 < H(t, e)
                }, a, !0), h = [function(e, i, n) {
                    var o = !r && (n || i !== c) || ((t = i).nodeType ? d(e, i, n) : u(e, i, n));
                    return t = null, o
                }]; l < s; l++)
                if (i = n.relative[e[l].type]) h = [ge(ye(h), i)];
                else {
                    if ((i = n.filter[e[l].type].apply(null, e[l].matches))[w]) {
                        for (o = ++l; o < s && !n.relative[e[o].type]; o++);
                        return we(1 < l && ye(h), 1 < l && ve(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(W, "$1"), i, l < o && xe(e.slice(l, o)), o < s && xe(e = e.slice(o)), o < s && ve(e))
                    }
                    h.push(i)
                }
            return ye(h)
        }
        return me.prototype = n.filters = n.pseudos, n.setFilters = new me, r = se.tokenize = function(e, t) {
            var i, o, s, r, a, l, c, d = C[e + " "];
            if (d) return t ? 0 : d.slice(0);
            for (a = e, l = [], c = n.preFilter; a;) {
                for (r in (!i || (o = R.exec(a))) && (o && (a = a.slice(o[0].length) || a), l.push(s = [])), i = !1, (o = X.exec(a)) && (i = o.shift(), s.push({
                        value: i,
                        type: o[0].replace(W, " ")
                    }), a = a.slice(i.length)), n.filter) !(o = Q[r].exec(a)) || c[r] && !(o = c[r](o)) || (i = o.shift(), s.push({
                    value: i,
                    type: r,
                    matches: o
                }), a = a.slice(i.length));
                if (!i) break
            }
            return t ? a.length : a ? se.error(e) : C(e, l).slice(0)
        }, a = se.compile = function(e, t) {
            var i, o, s, a, l, d, u = [],
                h = [],
                f = E[e + " "];
            if (!f) {
                for (t || (t = r(e)), i = t.length; i--;)(f = xe(t[i]))[w] ? u.push(f) : h.push(f);
                (f = E(e, (o = h, a = 0 < (s = u).length, l = 0 < o.length, d = function(e, t, i, r, d) {
                    var u, h, f, m = 0,
                        v = "0",
                        g = e && [],
                        y = [],
                        b = c,
                        w = e || l && n.find.TAG("*", d),
                        x = k += null == b ? 1 : Math.random() || .1,
                        S = w.length;
                    for (d && (c = t !== p && t); v !== S && null != (u = w[v]); v++) {
                        if (l && u) {
                            for (h = 0; f = o[h++];)
                                if (f(u, t, i)) {
                                    r.push(u);
                                    break
                                }
                            d && (k = x)
                        }
                        a && ((u = !f && u) && m--, e && g.push(u))
                    }
                    if (m += v, a && v !== m) {
                        for (h = 0; f = s[h++];) f(g, y, t, i);
                        if (e) {
                            if (0 < m)
                                for (; v--;) g[v] || y[v] || (y[v] = P.call(r));
                            y = be(y)
                        }
                        D.apply(r, y), d && !e && 0 < y.length && 1 < m + s.length && se.uniqueSort(r)
                    }
                    return d && (k = x, c = b), g
                }, a ? ae(d) : d))).selector = e
            }
            return f
        }, l = se.select = function(e, t, o, s) {
            var l, c, d, u, h, p = "function" == typeof e && e,
                f = !s && r(e = p.selector || e);
            if (o = o || [], 1 === f.length) {
                if (2 < (c = f[0] = f[0].slice(0)).length && "ID" === (d = c[0]).type && i.getById && 9 === t.nodeType && m && n.relative[c[1].type]) {
                    if (!(t = (n.find.ID(d.matches[0].replace(ie, ne), t) || [])[0])) return o;
                    p && (t = t.parentNode), e = e.slice(c.shift().value.length)
                }
                for (l = Q.needsContext.test(e) ? 0 : c.length; l-- && (d = c[l], !n.relative[u = d.type]);)
                    if ((h = n.find[u]) && (s = h(d.matches[0].replace(ie, ne), ee.test(c[0].type) && fe(t.parentNode) || t))) {
                        if (c.splice(l, 1), !(e = s.length && ve(c))) return D.apply(o, s), o;
                        break
                    }
            }
            return (p || a(e, f))(s, t, !m, o, ee.test(e) && fe(t.parentNode) || t), o
        }, i.sortStable = w.split("").sort(A).join("") === w, i.detectDuplicates = !!u, h(), i.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(p.createElement("div"))
        }), le(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ce("type|href|height|width", function(e, t, i) {
            return i ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), i.attributes && le(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ce("value", function(e, t, i) {
            return i || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), le(function(e) {
            return null == e.getAttribute("disabled")
        }) || ce(j, function(e, t, i) {
            var n;
            return i ? void 0 : !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }), se
    }(e);
    p.find = b, p.expr = b.selectors, p.expr[":"] = p.expr.pseudos, p.unique = b.uniqueSort, p.text = b.getText, p.isXMLDoc = b.isXML, p.contains = b.contains;
    var w = p.expr.match.needsContext,
        x = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        k = /^.[^:#\[\.,]*$/;

    function S(e, t, i) {
        if (p.isFunction(t)) return p.grep(e, function(e, n) {
            return !!t.call(e, n, e) !== i
        });
        if (t.nodeType) return p.grep(e, function(e) {
            return e === t !== i
        });
        if ("string" == typeof t) {
            if (k.test(t)) return p.filter(t, e, i);
            t = p.filter(t, e)
        }
        return p.grep(e, function(e) {
            return 0 <= r.call(t, e) !== i
        })
    }
    p.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? p.find.matchesSelector(n, e) ? [n] : [] : p.find.matches(e, p.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, p.fn.extend({
        find: function(e) {
            var t, i = this.length,
                n = [],
                o = this;
            if ("string" != typeof e) return this.pushStack(p(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (p.contains(o[t], this)) return !0
            }));
            for (t = 0; t < i; t++) p.find(e, o[t], n);
            return (n = this.pushStack(1 < i ? p.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
        },
        filter: function(e) {
            return this.pushStack(S(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(S(this, e || [], !0))
        },
        is: function(e) {
            return !!S(this, "string" == typeof e && w.test(e) ? p(e) : e || [], !1).length
        }
    });
    var T, C = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (p.fn.init = function(e, t) {
        var i, n;
        if (!e) return this;
        if ("string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : C.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || T).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof p ? t[0] : t, p.merge(this, p.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), x.test(i[1]) && p.isPlainObject(t))
                    for (i in t) p.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return (n = u.getElementById(i[2])) && n.parentNode && (this.length = 1, this[0] = n), this.context = u, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : p.isFunction(e) ? void 0 !== T.ready ? T.ready(e) : e(p) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), p.makeArray(e, this))
    }).prototype = p.fn, T = p(u);
    var E = /^(?:parents|prev(?:Until|All))/,
        A = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function $(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    p.extend({
        dir: function(e, t, i) {
            for (var n = [], o = void 0 !== i;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (o && p(e).is(i)) break;
                    n.push(e)
                }
            return n
        },
        sibling: function(e, t) {
            for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
            return i
        }
    }), p.fn.extend({
        has: function(e) {
            var t = p(e, this),
                i = t.length;
            return this.filter(function() {
                for (var e = 0; e < i; e++)
                    if (p.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            for (var i, n = 0, o = this.length, s = [], r = w.test(e) || "string" != typeof e ? p(e, t || this.context) : 0; n < o; n++)
                for (i = this[n]; i && i !== t; i = i.parentNode)
                    if (i.nodeType < 11 && (r ? -1 < r.index(i) : 1 === i.nodeType && p.find.matchesSelector(i, e))) {
                        s.push(i);
                        break
                    }
            return this.pushStack(1 < s.length ? p.unique(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? r.call(p(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(p.unique(p.merge(this.get(), p(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), p.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return p.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return p.dir(e, "parentNode", i)
        },
        next: function(e) {
            return $(e, "nextSibling")
        },
        prev: function(e) {
            return $(e, "previousSibling")
        },
        nextAll: function(e) {
            return p.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return p.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return p.dir(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return p.dir(e, "previousSibling", i)
        },
        siblings: function(e) {
            return p.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return p.sibling(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || p.merge([], e.childNodes)
        }
    }, function(e, t) {
        p.fn[e] = function(i, n) {
            var o = p.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (o = p.filter(n, o)), 1 < this.length && (A[e] || p.unique(o), E.test(e) && o.reverse()), this.pushStack(o)
        }
    });
    var _, O = /\S+/g,
        P = {};

    function L() {
        u.removeEventListener("DOMContentLoaded", L, !1), e.removeEventListener("load", L, !1), p.ready()
    }
    p.Callbacks = function(e) {
        var t, i, n, o, s, r, a, l, c = [],
            d = !(e = "string" == typeof e ? P[e] || (i = P[t = e] = {}, p.each(t.match(O) || [], function(e, t) {
                i[t] = !0
            }), i) : p.extend({}, e)).once && [],
            u = function(t) {
                for (n = e.memory && t, o = !0, l = r || 0, r = 0, a = c.length, s = !0; c && l < a; l++)
                    if (!1 === c[l].apply(t[0], t[1]) && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                s = !1, c && (d ? d.length && u(d.shift()) : n ? c = [] : h.disable())
            },
            h = {
                add: function() {
                    if (c) {
                        var t = c.length;
                        ! function t(i) {
                            p.each(i, function(i, n) {
                                var o = p.type(n);
                                "function" === o ? e.unique && h.has(n) || c.push(n) : n && n.length && "string" !== o && t(n)
                            })
                        }(arguments), s ? a = c.length : n && (r = t, u(n))
                    }
                    return this
                },
                remove: function() {
                    return c && p.each(arguments, function(e, t) {
                        for (var i; - 1 < (i = p.inArray(t, c, i));) c.splice(i, 1), s && (i <= a && a--, i <= l && l--)
                    }), this
                },
                has: function(e) {
                    return e ? -1 < p.inArray(e, c) : !(!c || !c.length)
                },
                empty: function() {
                    return c = [], a = 0, this
                },
                disable: function() {
                    return c = d = n = void 0, this
                },
                disabled: function() {
                    return !c
                },
                lock: function() {
                    return d = void 0, n || h.disable(), this
                },
                locked: function() {
                    return !d
                },
                fireWith: function(e, t) {
                    return !c || o && !d || (t = [e, (t = t || []).slice ? t.slice() : t], s ? d.push(t) : u(t)), this
                },
                fire: function() {
                    return h.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return h
    }, p.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", p.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", p.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", p.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return p.Deferred(function(i) {
                            p.each(t, function(t, s) {
                                var r = p.isFunction(e[t]) && e[t];
                                o[s[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && p.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[s[0] + "With"](this === n ? i.promise() : this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? p.extend(e, n) : n
                    }
                },
                o = {};
            return n.pipe = n.then, p.each(t, function(e, s) {
                var r = s[2],
                    a = s[3];
                n[s[1]] = r.add, a && r.add(function() {
                    i = a
                }, t[1 ^ e][2].disable, t[2][2].lock), o[s[0]] = function() {
                    return o[s[0] + "With"](this === o ? n : this, arguments), this
                }, o[s[0] + "With"] = r.fireWith
            }), n.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            var t, i, o, s = 0,
                r = n.call(arguments),
                a = r.length,
                l = 1 !== a || e && p.isFunction(e.promise) ? a : 0,
                c = 1 === l ? e : p.Deferred(),
                d = function(e, i, o) {
                    return function(s) {
                        i[e] = this, o[e] = 1 < arguments.length ? n.call(arguments) : s, o === t ? c.notifyWith(i, o) : --l || c.resolveWith(i, o)
                    }
                };
            if (1 < a)
                for (t = new Array(a), i = new Array(a), o = new Array(a); s < a; s++) r[s] && p.isFunction(r[s].promise) ? r[s].promise().done(d(s, o, r)).fail(c.reject).progress(d(s, i, t)) : --l;
            return l || c.resolveWith(o, r), c.promise()
        }
    }), p.fn.ready = function(e) {
        return p.ready.promise().done(e), this
    }, p.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? p.readyWait++ : p.ready(!0)
        },
        ready: function(e) {
            (!0 === e ? --p.readyWait : p.isReady) || (p.isReady = !0) !== e && 0 < --p.readyWait || (_.resolveWith(u, [p]), p.fn.triggerHandler && (p(u).triggerHandler("ready"), p(u).off("ready")))
        }
    }), p.ready.promise = function(t) {
        return _ || (_ = p.Deferred(), "complete" === u.readyState ? setTimeout(p.ready) : (u.addEventListener("DOMContentLoaded", L, !1), e.addEventListener("load", L, !1))), _.promise(t)
    }, p.ready.promise();
    var D = p.access = function(e, t, i, n, o, s, r) {
        var a = 0,
            l = e.length,
            c = null == i;
        if ("object" === p.type(i))
            for (a in o = !0, i) p.access(e, t, a, i[a], !0, s, r);
        else if (void 0 !== n && (o = !0, p.isFunction(n) || (r = !0), c && (r ? (t.call(e, n), t = null) : (c = t, t = function(e, t, i) {
                return c.call(p(e), i)
            })), t))
            for (; a < l; a++) t(e[a], i, r ? n : n.call(e[a], a, t(e[a], i)));
        return o ? e : c ? t.call(e) : l ? t(e[0], i) : s
    };

    function M() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = p.expando + M.uid++
    }
    p.acceptData = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, M.uid = 1, M.accepts = p.acceptData, M.prototype = {
        key: function(e) {
            if (!M.accepts(e)) return 0;
            var t = {},
                i = e[this.expando];
            if (!i) {
                i = M.uid++;
                try {
                    t[this.expando] = {
                        value: i
                    }, Object.defineProperties(e, t)
                } catch (n) {
                    t[this.expando] = i, p.extend(e, t)
                }
            }
            return this.cache[i] || (this.cache[i] = {}), i
        },
        set: function(e, t, i) {
            var n, o = this.key(e),
                s = this.cache[o];
            if ("string" == typeof t) s[t] = i;
            else if (p.isEmptyObject(s)) p.extend(this.cache[o], t);
            else
                for (n in t) s[n] = t[n];
            return s
        },
        get: function(e, t) {
            var i = this.cache[this.key(e)];
            return void 0 === t ? i : i[t]
        },
        access: function(e, t, i) {
            var n;
            return void 0 === t || t && "string" == typeof t && void 0 === i ? void 0 !== (n = this.get(e, t)) ? n : this.get(e, p.camelCase(t)) : (this.set(e, t, i), void 0 !== i ? i : t)
        },
        remove: function(e, t) {
            var i, n, o, s = this.key(e),
                r = this.cache[s];
            if (void 0 === t) this.cache[s] = {};
            else {
                p.isArray(t) ? n = t.concat(t.map(p.camelCase)) : (o = p.camelCase(t), n = t in r ? [t, o] : (n = o) in r ? [n] : n.match(O) || []), i = n.length;
                for (; i--;) delete r[n[i]]
            }
        },
        hasData: function(e) {
            return !p.isEmptyObject(this.cache[e[this.expando]] || {})
        },
        discard: function(e) {
            e[this.expando] && delete this.cache[e[this.expando]]
        }
    };
    var H = new M,
        j = new M,
        I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        q = /([A-Z])/g;

    function B(e, t, i) {
        var n;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace(q, "-$1").toLowerCase(), "string" == typeof(i = e.getAttribute(n))) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : I.test(i) ? p.parseJSON(i) : i)
                } catch (e) {}
                j.set(e, t, i)
            } else i = void 0;
        return i
    }
    p.extend({
        hasData: function(e) {
            return j.hasData(e) || H.hasData(e)
        },
        data: function(e, t, i) {
            return j.access(e, t, i)
        },
        removeData: function(e, t) {
            j.remove(e, t)
        },
        _data: function(e, t, i) {
            return H.access(e, t, i)
        },
        _removeData: function(e, t) {
            H.remove(e, t)
        }
    }), p.fn.extend({
        data: function(e, t) {
            var i, n, o, s = this[0],
                r = s && s.attributes;
            if (void 0 === e) {
                if (this.length && (o = j.get(s), 1 === s.nodeType && !H.get(s, "hasDataAttrs"))) {
                    for (i = r.length; i--;) r[i] && 0 === (n = r[i].name).indexOf("data-") && (n = p.camelCase(n.slice(5)), B(s, n, o[n]));
                    H.set(s, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                j.set(this, e)
            }) : D(this, function(t) {
                var i, n = p.camelCase(e);
                if (s && void 0 === t) {
                    if (void 0 !== (i = j.get(s, e))) return i;
                    if (void 0 !== (i = j.get(s, n))) return i;
                    if (void 0 !== (i = B(s, n, void 0))) return i
                } else this.each(function() {
                    var i = j.get(this, n);
                    j.set(this, n, t), -1 !== e.indexOf("-") && void 0 !== i && j.set(this, e, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                j.remove(this, e)
            })
        }
    }), p.extend({
        queue: function(e, t, i) {
            var n;
            return e ? (t = (t || "fx") + "queue", n = H.get(e, t), i && (!n || p.isArray(i) ? n = H.access(e, t, p.makeArray(i)) : n.push(i)), n || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = p.queue(e, t),
                n = i.length,
                o = i.shift(),
                s = p._queueHooks(e, t);
            "inprogress" === o && (o = i.shift(), n--), o && ("fx" === t && i.unshift("inprogress"), delete s.stop, o.call(e, function() {
                p.dequeue(e, t)
            }, s)), !n && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return H.get(e, i) || H.access(e, i, {
                empty: p.Callbacks("once memory").add(function() {
                    H.remove(e, [t + "queue", i])
                })
            })
        }
    }), p.fn.extend({
        queue: function(e, t) {
            var i = 2;
            return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? p.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var i = p.queue(this, e, t);
                p._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && p.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                p.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var i, n = 1,
                o = p.Deferred(),
                s = this,
                r = this.length,
                a = function() {
                    --n || o.resolveWith(s, [s])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;)(i = H.get(s[r], e + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), o.promise(t)
        }
    });
    var N, z, F = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        W = ["Top", "Right", "Bottom", "Left"],
        R = function(e, t) {
            return e = t || e, "none" === p.css(e, "display") || !p.contains(e.ownerDocument, e)
        },
        X = /^(?:checkbox|radio)$/i;
    N = u.createDocumentFragment().appendChild(u.createElement("div")), (z = u.createElement("input")).setAttribute("type", "radio"), z.setAttribute("checked", "checked"), z.setAttribute("name", "t"), N.appendChild(z), d.checkClone = N.cloneNode(!0).cloneNode(!0).lastChild.checked, N.innerHTML = "<textarea>x</textarea>", d.noCloneChecked = !!N.cloneNode(!0).lastChild.defaultValue;
    var Y = "undefined";
    d.focusinBubbles = "onfocusin" in e;
    var U = /^key/,
        V = /^(?:mouse|pointer|contextmenu)|click/,
        Q = /^(?:focusinfocus|focusoutblur)$/,
        Z = /^([^.]*)(?:\.(.+)|)$/;

    function G() {
        return !0
    }

    function K() {
        return !1
    }

    function J() {
        try {
            return u.activeElement
        } catch (e) {}
    }
    p.event = {
        global: {},
        add: function(e, t, i, n, o) {
            var s, r, a, l, c, d, u, h, f, m, v, g = H.get(e);
            if (g)
                for (i.handler && (i = (s = i).handler, o = s.selector), i.guid || (i.guid = p.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function(t) {
                        return typeof p !== Y && p.event.triggered !== t.type ? p.event.dispatch.apply(e, arguments) : void 0
                    }), c = (t = (t || "").match(O) || [""]).length; c--;) f = v = (a = Z.exec(t[c]) || [])[1], m = (a[2] || "").split(".").sort(), f && (u = p.event.special[f] || {}, f = (o ? u.delegateType : u.bindType) || f, u = p.event.special[f] || {}, d = p.extend({
                    type: f,
                    origType: v,
                    data: n,
                    handler: i,
                    guid: i.guid,
                    selector: o,
                    needsContext: o && p.expr.match.needsContext.test(o),
                    namespace: m.join(".")
                }, s), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, n, m, r) || e.addEventListener && e.addEventListener(f, r, !1)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = i.guid)), o ? h.splice(h.delegateCount++, 0, d) : h.push(d), p.event.global[f] = !0)
        },
        remove: function(e, t, i, n, o) {
            var s, r, a, l, c, d, u, h, f, m, v, g = H.hasData(e) && H.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(O) || [""]).length; c--;)
                    if (f = v = (a = Z.exec(t[c]) || [])[1], m = (a[2] || "").split(".").sort(), f) {
                        for (u = p.event.special[f] || {}, h = l[f = (n ? u.delegateType : u.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = h.length; s--;) d = h[s], !o && v !== d.origType || i && i.guid !== d.guid || a && !a.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (h.splice(s, 1), d.selector && h.delegateCount--, u.remove && u.remove.call(e, d));
                        r && !h.length && (u.teardown && !1 !== u.teardown.call(e, m, g.handle) || p.removeEvent(e, f, g.handle), delete l[f])
                    } else
                        for (f in l) p.event.remove(e, f + t[c], i, n, !0);
                p.isEmptyObject(l) && (delete g.handle, H.remove(e, "events"))
            }
        },
        trigger: function(t, i, n, o) {
            var s, r, a, l, d, h, f, m = [n || u],
                v = c.call(t, "type") ? t.type : t,
                g = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (r = a = n = n || u, 3 !== n.nodeType && 8 !== n.nodeType && !Q.test(v + p.event.triggered) && (0 <= v.indexOf(".") && (v = (g = v.split(".")).shift(), g.sort()), d = v.indexOf(":") < 0 && "on" + v, (t = t[p.expando] ? t : new p.Event(v, "object" == typeof t && t)).isTrigger = o ? 2 : 3, t.namespace = g.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : p.makeArray(i, [t]), f = p.event.special[v] || {}, o || !f.trigger || !1 !== f.trigger.apply(n, i))) {
                if (!o && !f.noBubble && !p.isWindow(n)) {
                    for (l = f.delegateType || v, Q.test(l + v) || (r = r.parentNode); r; r = r.parentNode) m.push(r), a = r;
                    a === (n.ownerDocument || u) && m.push(a.defaultView || a.parentWindow || e)
                }
                for (s = 0;
                    (r = m[s++]) && !t.isPropagationStopped();) t.type = 1 < s ? l : f.bindType || v, (h = (H.get(r, "events") || {})[t.type] && H.get(r, "handle")) && h.apply(r, i), (h = d && r[d]) && h.apply && p.acceptData(r) && (t.result = h.apply(r, i), !1 === t.result && t.preventDefault());
                return t.type = v, o || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(m.pop(), i) || !p.acceptData(n) || d && p.isFunction(n[v]) && !p.isWindow(n) && ((a = n[d]) && (n[d] = null), n[p.event.triggered = v](), p.event.triggered = void 0, a && (n[d] = a)), t.result
            }
        },
        dispatch: function(e) {
            e = p.event.fix(e);
            var t, i, o, s, r, a = [],
                l = n.call(arguments),
                c = (H.get(this, "events") || {})[e.type] || [],
                d = p.event.special[e.type] || {};
            if ((l[0] = e).delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, e)) {
                for (a = p.event.handlers.call(this, e, c), t = 0;
                    (s = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = s.elem, i = 0;
                        (r = s.handlers[i++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, void 0 !== (o = ((p.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, l)) && !1 === (e.result = o) && (e.preventDefault(), e.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, e), e.result
            }
        },
        handlers: function(e, t) {
            var i, n, o, s, r = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && (!e.button || "click" !== e.type))
                for (; l !== this; l = l.parentNode || this)
                    if (!0 !== l.disabled || "click" !== e.type) {
                        for (n = [], i = 0; i < a; i++) void 0 === n[o = (s = t[i]).selector + " "] && (n[o] = s.needsContext ? 0 <= p(o, this).index(l) : p.find(o, this, null, [l]).length), n[o] && n.push(s);
                        n.length && r.push({
                            elem: l,
                            handlers: n
                        })
                    }
            return a < t.length && r.push({
                elem: this,
                handlers: t.slice(a)
            }), r
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
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var i, n, o, s = t.button;
                return null == e.pageX && null != t.clientX && (n = (i = e.target.ownerDocument || u).documentElement, o = i.body, e.pageX = t.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
            }
        },
        fix: function(e) {
            if (e[p.expando]) return e;
            var t, i, n, o = e.type,
                s = e,
                r = this.fixHooks[o];
            for (r || (this.fixHooks[o] = r = V.test(o) ? this.mouseHooks : U.test(o) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, e = new p.Event(s), t = n.length; t--;) e[i = n[t]] = s[i];
            return e.target || (e.target = u), 3 === e.target.nodeType && (e.target = e.target.parentNode), r.filter ? r.filter(e, s) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== J() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === J() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && p.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return p.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, i, n) {
            var o = p.extend(new p.Event, i, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? p.event.trigger(o, null, t) : p.event.dispatch.call(t, o), o.isDefaultPrevented() && i.preventDefault()
        }
    }, p.removeEvent = function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i, !1)
    }, p.Event = function(e, t) {
        return this instanceof p.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? G : K) : this.type = e, t && p.extend(this, t), this.timeStamp = e && e.timeStamp || p.now(), void(this[p.expando] = !0)) : new p.Event(e, t)
    }, p.Event.prototype = {
        isDefaultPrevented: K,
        isPropagationStopped: K,
        isImmediatePropagationStopped: K,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = G, e && e.preventDefault && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = G, e && e.stopPropagation && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = G, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, p.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        p.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var i, n = e.relatedTarget,
                    o = e.handleObj;
                return (!n || n !== this && !p.contains(this, n)) && (e.type = o.origType, i = o.handler.apply(this, arguments), e.type = t), i
            }
        }
    }), d.focusinBubbles || p.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var i = function(e) {
            p.event.simulate(t, e.target, p.event.fix(e), !0)
        };
        p.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this,
                    o = H.access(n, t);
                o || n.addEventListener(e, i, !0), H.access(n, t, (o || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this,
                    o = H.access(n, t) - 1;
                o ? H.access(n, t, o) : (n.removeEventListener(e, i, !0), H.remove(n, t))
            }
        }
    }), p.fn.extend({
        on: function(e, t, i, n, o) {
            var s, r;
            if ("object" == typeof e) {
                for (r in "string" != typeof t && (i = i || t, t = void 0), e) this.on(r, t, i, e[r], o);
                return this
            }
            if (null == i && null == n ? (n = t, i = t = void 0) : null == n && ("string" == typeof t ? (n = i, i = void 0) : (n = i, i = t, t = void 0)), !1 === n) n = K;
            else if (!n) return this;
            return 1 === o && (s = n, (n = function(e) {
                return p().off(e), s.apply(this, arguments)
            }).guid = s.guid || (s.guid = p.guid++)), this.each(function() {
                p.event.add(this, e, n, i, t)
            })
        },
        one: function(e, t, i, n) {
            return this.on(e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, o;
            if (e && e.preventDefault && e.handleObj) return n = e.handleObj, p(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return (!1 === t || "function" == typeof t) && (i = t, t = void 0), !1 === i && (i = K), this.each(function() {
                p.event.remove(this, e, i, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                p.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            return i ? p.event.trigger(e, t, i, !0) : void 0
        }
    });
    var ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        te = /<([\w:]+)/,
        ie = /<|&#?\w+;/,
        ne = /<(?:script|style|link)/i,
        oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        se = /^$|\/(?:java|ecma)script/i,
        re = /^true\/(.*)/,
        ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        le = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function ce(e, t) {
        return p.nodeName(e, "table") && p.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function de(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function ue(e) {
        var t = re.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function he(e, t) {
        for (var i = 0, n = e.length; i < n; i++) H.set(e[i], "globalEval", !t || H.get(t[i], "globalEval"))
    }

    function pe(e, t) {
        var i, n, o, s, r, a, l, c;
        if (1 === t.nodeType) {
            if (H.hasData(e) && (s = H.access(e), r = H.set(t, s), c = s.events))
                for (o in delete r.handle, r.events = {}, c)
                    for (i = 0, n = c[o].length; i < n; i++) p.event.add(t, o, c[o][i]);
            j.hasData(e) && (a = j.access(e), l = p.extend({}, a), j.set(t, l))
        }
    }

    function fe(e, t) {
        var i = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && p.nodeName(e, t) ? p.merge([e], i) : i
    }
    le.optgroup = le.option, le.tbody = le.tfoot = le.colgroup = le.caption = le.thead, le.th = le.td, p.extend({
        clone: function(e, t, i) {
            var n, o, s, r, a, l, c, u = e.cloneNode(!0),
                h = p.contains(e.ownerDocument, e);
            if (!(d.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || p.isXMLDoc(e)))
                for (r = fe(u), n = 0, o = (s = fe(e)).length; n < o; n++) a = s[n], l = r[n], "input" === (c = l.nodeName.toLowerCase()) && X.test(a.type) ? l.checked = a.checked : ("input" === c || "textarea" === c) && (l.defaultValue = a.defaultValue);
            if (t)
                if (i)
                    for (s = s || fe(e), r = r || fe(u), n = 0, o = s.length; n < o; n++) pe(s[n], r[n]);
                else pe(e, u);
            return 0 < (r = fe(u, "script")).length && he(r, !h && fe(e, "script")), u
        },
        buildFragment: function(e, t, i, n) {
            for (var o, s, r, a, l, c, d = t.createDocumentFragment(), u = [], h = 0, f = e.length; h < f; h++)
                if ((o = e[h]) || 0 === o)
                    if ("object" === p.type(o)) p.merge(u, o.nodeType ? [o] : o);
                    else if (ie.test(o)) {
                for (s = s || d.appendChild(t.createElement("div")), r = (te.exec(o) || ["", ""])[1].toLowerCase(), a = le[r] || le._default, s.innerHTML = a[1] + o.replace(ee, "<$1></$2>") + a[2], c = a[0]; c--;) s = s.lastChild;
                p.merge(u, s.childNodes), (s = d.firstChild).textContent = ""
            } else u.push(t.createTextNode(o));
            for (d.textContent = "", h = 0; o = u[h++];)
                if ((!n || -1 === p.inArray(o, n)) && (l = p.contains(o.ownerDocument, o), s = fe(d.appendChild(o), "script"), l && he(s), i))
                    for (c = 0; o = s[c++];) se.test(o.type || "") && i.push(o);
            return d
        },
        cleanData: function(e) {
            for (var t, i, n, o, s = p.event.special, r = 0; void 0 !== (i = e[r]); r++) {
                if (p.acceptData(i) && (o = i[H.expando]) && (t = H.cache[o])) {
                    if (t.events)
                        for (n in t.events) s[n] ? p.event.remove(i, n) : p.removeEvent(i, n, t.handle);
                    H.cache[o] && delete H.cache[o]
                }
                delete j.cache[i[j.expando]]
            }
        }
    }), p.fn.extend({
        text: function(e) {
            return D(this, function(e) {
                return void 0 === e ? p.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ce(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ce(this, e);
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
            for (var i, n = e ? p.filter(e, this) : this, o = 0; null != (i = n[o]); o++) t || 1 !== i.nodeType || p.cleanData(fe(i)), i.parentNode && (t && p.contains(i.ownerDocument, i) && he(fe(i, "script")), i.parentNode.removeChild(i));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (p.cleanData(fe(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return p.clone(this, e, t)
            })
        },
        html: function(e) {
            return D(this, function(e) {
                var t = this[0] || {},
                    i = 0,
                    n = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ne.test(e) && !le[(te.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(ee, "<$1></$2>");
                    try {
                        for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (p.cleanData(fe(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = arguments[0];
            return this.domManip(arguments, function(t) {
                e = this.parentNode, p.cleanData(fe(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t) {
            e = o.apply([], e);
            var i, n, s, r, a, l, c = 0,
                u = this.length,
                h = this,
                f = u - 1,
                m = e[0],
                v = p.isFunction(m);
            if (v || 1 < u && "string" == typeof m && !d.checkClone && oe.test(m)) return this.each(function(i) {
                var n = h.eq(i);
                v && (e[0] = m.call(this, i, n.html())), n.domManip(e, t)
            });
            if (u && (n = (i = p.buildFragment(e, this[0].ownerDocument, !1, this)).firstChild, 1 === i.childNodes.length && (i = n), n)) {
                for (r = (s = p.map(fe(i, "script"), de)).length; c < u; c++) a = i, c !== f && (a = p.clone(a, !0, !0), r && p.merge(s, fe(a, "script"))), t.call(this[c], a, c);
                if (r)
                    for (l = s[s.length - 1].ownerDocument, p.map(s, ue), c = 0; c < r; c++) a = s[c], se.test(a.type || "") && !H.access(a, "globalEval") && p.contains(l, a) && (a.src ? p._evalUrl && p._evalUrl(a.src) : p.globalEval(a.textContent.replace(ae, "")))
            }
            return this
        }
    }), p.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        p.fn[e] = function(e) {
            for (var i, n = [], o = p(e), r = o.length - 1, a = 0; a <= r; a++) i = a === r ? this : this.clone(!0), p(o[a])[t](i), s.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var me, ve = {};

    function ge(t, i) {
        var n, o = p(i.createElement(t)).appendTo(i.body),
            s = e.getDefaultComputedStyle && (n = e.getDefaultComputedStyle(o[0])) ? n.display : p.css(o[0], "display");
        return o.detach(), s
    }

    function ye(e) {
        var t = u,
            i = ve[e];
        return i || ("none" !== (i = ge(e, t)) && i || ((t = (me = (me || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), i = ge(e, t), me.detach()), ve[e] = i), i
    }
    var be = /^margin/,
        we = new RegExp("^(" + F + ")(?!px)[a-z%]+$", "i"),
        xe = function(t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
        };

    function ke(e, t, i) {
        var n, o, s, r, a = e.style;
        return (i = i || xe(e)) && (r = i.getPropertyValue(t) || i[t]), i && ("" !== r || p.contains(e.ownerDocument, e) || (r = p.style(e, t)), we.test(r) && be.test(t) && (n = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = o, a.maxWidth = s)), void 0 !== r ? r + "" : r
    }

    function Se(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }! function() {
        var t, i, n = u.documentElement,
            o = u.createElement("div"),
            s = u.createElement("div");
        if (s.style) {
            function r() {
                s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", n.appendChild(o);
                var r = e.getComputedStyle(s, null);
                t = "1%" !== r.top, i = "4px" === r.width, n.removeChild(o)
            }
            s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", d.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), e.getComputedStyle && p.extend(d, {
                pixelPosition: function() {
                    return r(), t
                },
                boxSizingReliable: function() {
                    return null == i && r(), i
                },
                reliableMarginRight: function() {
                    var t, i = s.appendChild(u.createElement("div"));
                    return i.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", s.style.width = "1px", n.appendChild(o), t = !parseFloat(e.getComputedStyle(i, null).marginRight), n.removeChild(o), s.removeChild(i), t
                }
            })
        }
    }(), p.swap = function(e, t, i, n) {
        var o, s, r = {};
        for (s in t) r[s] = e.style[s], e.style[s] = t[s];
        for (s in o = i.apply(e, n || []), t) e.style[s] = r[s];
        return o
    };
    var Te = /^(none|table(?!-c[ea]).+)/,
        Ce = new RegExp("^(" + F + ")(.*)$", "i"),
        Ee = new RegExp("^([+-])=(" + F + ")", "i"),
        Ae = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        $e = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        _e = ["Webkit", "O", "Moz", "ms"];

    function Oe(e, t) {
        if (t in e) return t;
        for (var i = t[0].toUpperCase() + t.slice(1), n = t, o = _e.length; o--;)
            if ((t = _e[o] + i) in e) return t;
        return n
    }

    function Pe(e, t, i) {
        var n = Ce.exec(t);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
    }

    function Le(e, t, i, n, o) {
        for (var s = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; s < 4; s += 2) "margin" === i && (r += p.css(e, i + W[s], !0, o)), n ? ("content" === i && (r -= p.css(e, "padding" + W[s], !0, o)), "margin" !== i && (r -= p.css(e, "border" + W[s] + "Width", !0, o))) : (r += p.css(e, "padding" + W[s], !0, o), "padding" !== i && (r += p.css(e, "border" + W[s] + "Width", !0, o)));
        return r
    }

    function De(e, t, i) {
        var n = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            s = xe(e),
            r = "border-box" === p.css(e, "boxSizing", !1, s);
        if (o <= 0 || null == o) {
            if (((o = ke(e, t, s)) < 0 || null == o) && (o = e.style[t]), we.test(o)) return o;
            n = r && (d.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
        }
        return o + Le(e, t, i || (r ? "border" : "content"), n, s) + "px"
    }

    function Me(e, t) {
        for (var i, n, o, s = [], r = 0, a = e.length; r < a; r++)(n = e[r]).style && (s[r] = H.get(n, "olddisplay"), i = n.style.display, t ? (s[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && R(n) && (s[r] = H.access(n, "olddisplay", ye(n.nodeName)))) : (o = R(n), "none" === i && o || H.set(n, "olddisplay", o ? i : p.css(n, "display"))));
        for (r = 0; r < a; r++)(n = e[r]).style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? s[r] || "" : "none"));
        return e
    }

    function He(e, t, i, n, o) {
        return new He.prototype.init(e, t, i, n, o)
    }
    p.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = ke(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
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
            float: "cssFloat"
        },
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, r, a = p.camelCase(t),
                    l = e.style;
                return t = p.cssProps[a] || (p.cssProps[a] = Oe(l, a)), r = p.cssHooks[t] || p.cssHooks[a], void 0 === i ? r && "get" in r && void 0 !== (o = r.get(e, !1, n)) ? o : l[t] : ("string" == (s = typeof i) && (o = Ee.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(p.css(e, t)), s = "number"), void(null != i && i == i && ("number" !== s || p.cssNumber[a] || (i += "px"), d.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), r && "set" in r && void 0 === (i = r.set(e, i, n)) || (l[t] = i))))
            }
        },
        css: function(e, t, i, n) {
            var o, s, r, a = p.camelCase(t);
            return t = p.cssProps[a] || (p.cssProps[a] = Oe(e.style, a)), (r = p.cssHooks[t] || p.cssHooks[a]) && "get" in r && (o = r.get(e, !0, i)), void 0 === o && (o = ke(e, t, n)), "normal" === o && t in $e && (o = $e[t]), "" === i || i ? (s = parseFloat(o), !0 === i || p.isNumeric(s) ? s || 0 : o) : o
        }
    }), p.each(["height", "width"], function(e, t) {
        p.cssHooks[t] = {
            get: function(e, i, n) {
                return i ? Te.test(p.css(e, "display")) && 0 === e.offsetWidth ? p.swap(e, Ae, function() {
                    return De(e, t, n)
                }) : De(e, t, n) : void 0
            },
            set: function(e, i, n) {
                var o = n && xe(e);
                return Pe(0, i, n ? Le(e, t, n, "border-box" === p.css(e, "boxSizing", !1, o), o) : 0)
            }
        }
    }), p.cssHooks.marginRight = Se(d.reliableMarginRight, function(e, t) {
        return t ? p.swap(e, {
            display: "inline-block"
        }, ke, [e, "marginRight"]) : void 0
    }), p.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        p.cssHooks[e + t] = {
            expand: function(i) {
                for (var n = 0, o = {}, s = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) o[e + W[n] + t] = s[n] || s[n - 2] || s[0];
                return o
            }
        }, be.test(e) || (p.cssHooks[e + t].set = Pe)
    }), p.fn.extend({
        css: function(e, t) {
            return D(this, function(e, t, i) {
                var n, o, s = {},
                    r = 0;
                if (p.isArray(t)) {
                    for (n = xe(e), o = t.length; r < o; r++) s[t[r]] = p.css(e, t[r], !1, n);
                    return s
                }
                return void 0 !== i ? p.style(e, t, i) : p.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function() {
            return Me(this, !0)
        },
        hide: function() {
            return Me(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                R(this) ? p(this).show() : p(this).hide()
            })
        }
    }), ((p.Tween = He).prototype = {
        constructor: He,
        init: function(e, t, i, n, o, s) {
            this.elem = e, this.prop = i, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = s || (p.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = He.propHooks[this.prop];
            return e && e.get ? e.get(this) : He.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = He.propHooks[this.prop];
            return this.options.duration ? this.pos = t = p.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : He.propHooks._default.set(this), this
        }
    }).init.prototype = He.prototype, (He.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = p.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            },
            set: function(e) {
                p.fx.step[e.prop] ? p.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[p.cssProps[e.prop]] || p.cssHooks[e.prop]) ? p.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }).scrollTop = He.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, p.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, p.fx = He.prototype.init, p.fx.step = {};
    var je, Ie, qe, Be, Ne, ze = /^(?:toggle|show|hide)$/,
        Fe = new RegExp("^(?:([+-])=|)(" + F + ")([a-z%]*)$", "i"),
        We = /queueHooks$/,
        Re = [function(e, t, i) {
            var n, o, s, r, a, l, c, d = this,
                u = {},
                h = e.style,
                f = e.nodeType && R(e),
                m = H.get(e, "fxshow");
            for (n in i.queue || (null == (a = p._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || l()
                }), a.unqueued++, d.always(function() {
                    d.always(function() {
                        a.unqueued--, p.queue(e, "fx").length || a.empty.fire()
                    })
                })), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [h.overflow, h.overflowX, h.overflowY], c = p.css(e, "display"), "inline" === ("none" === c ? H.get(e, "olddisplay") || ye(e.nodeName) : c) && "none" === p.css(e, "float") && (h.display = "inline-block")), i.overflow && (h.overflow = "hidden", d.always(function() {
                    h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
                })), t)
                if (o = t[n], ze.exec(o)) {
                    if (delete t[n], s = s || "toggle" === o, o === (f ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[n]) continue;
                        f = !0
                    }
                    u[n] = m && m[n] || p.style(e, n)
                } else c = void 0;
            if (p.isEmptyObject(u)) "inline" === ("none" === c ? ye(e.nodeName) : c) && (h.display = c);
            else
                for (n in m ? "hidden" in m && (f = m.hidden) : m = H.access(e, "fxshow", {}), s && (m.hidden = !f), f ? p(e).show() : d.done(function() {
                        p(e).hide()
                    }), d.done(function() {
                        var t;
                        for (t in H.remove(e, "fxshow"), u) p.style(e, t, u[t])
                    }), u) r = Ve(f ? m[n] : 0, n, d), n in m || (m[n] = r.start, f && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
        }],
        Xe = {
            "*": [function(e, t) {
                var i = this.createTween(e, t),
                    n = i.cur(),
                    o = Fe.exec(t),
                    s = o && o[3] || (p.cssNumber[e] ? "" : "px"),
                    r = (p.cssNumber[e] || "px" !== s && +n) && Fe.exec(p.css(i.elem, e)),
                    a = 1,
                    l = 20;
                if (r && r[3] !== s)
                    for (s = s || r[3], o = o || [], r = +n || 1; r /= a = a || ".5", p.style(i.elem, e, r + s), a !== (a = i.cur() / n) && 1 !== a && --l;);
                return o && (r = i.start = +r || +n || 0, i.unit = s, i.end = o[1] ? r + (o[1] + 1) * o[2] : +o[2]), i
            }]
        };

    function Ye() {
        return setTimeout(function() {
            je = void 0
        }), je = p.now()
    }

    function Ue(e, t) {
        var i, n = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; n < 4; n += 2 - t) o["margin" + (i = W[n])] = o["padding" + i] = e;
        return t && (o.opacity = o.width = e), o
    }

    function Ve(e, t, i) {
        for (var n, o = (Xe[t] || []).concat(Xe["*"]), s = 0, r = o.length; s < r; s++)
            if (n = o[s].call(i, t, e)) return n
    }

    function Qe(e, t, i) {
        var n, o, s = 0,
            r = Re.length,
            a = p.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (o) return !1;
                for (var t = je || Ye(), i = Math.max(0, c.startTime + c.duration - t), n = 1 - (i / c.duration || 0), s = 0, r = c.tweens.length; s < r; s++) c.tweens[s].run(n);
                return a.notifyWith(e, [c, n, i]), n < 1 && r ? i : (a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: p.extend({}, t),
                opts: p.extend(!0, {
                    specialEasing: {}
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: je || Ye(),
                duration: i.duration,
                tweens: [],
                createTween: function(t, i) {
                    var n = p.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(t) {
                    var i = 0,
                        n = t ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i < n; i++) c.tweens[i].run(1);
                    return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]), this
                }
            }),
            d = c.props;
        for (function(e, t) {
                var i, n, o, s, r;
                for (i in e)
                    if (o = t[n = p.camelCase(i)], s = e[i], p.isArray(s) && (o = s[1], s = e[i] = s[0]), i !== n && (e[n] = s, delete e[i]), (r = p.cssHooks[n]) && "expand" in r)
                        for (i in s = r.expand(s), delete e[n], s) i in e || (e[i] = s[i], t[i] = o);
                    else t[n] = o
            }(d, c.opts.specialEasing); s < r; s++)
            if (n = Re[s].call(c, e, d, c.opts)) return n;
        return p.map(d, Ve, c), p.isFunction(c.opts.start) && c.opts.start.call(e, c), p.fx.timer(p.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    p.Animation = p.extend(Qe, {
        tweener: function(e, t) {
            p.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var i, n = 0, o = e.length; n < o; n++) i = e[n], Xe[i] = Xe[i] || [], Xe[i].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Re.unshift(e) : Re.push(e)
        }
    }), p.speed = function(e, t, i) {
        var n = e && "object" == typeof e ? p.extend({}, e) : {
            complete: i || !i && t || p.isFunction(e) && e,
            duration: e,
            easing: i && t || t && !p.isFunction(t) && t
        };
        return n.duration = p.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in p.fx.speeds ? p.fx.speeds[n.duration] : p.fx.speeds._default, (null == n.queue || !0 === n.queue) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            p.isFunction(n.old) && n.old.call(this), n.queue && p.dequeue(this, n.queue)
        }, n
    }, p.fn.extend({
        fadeTo: function(e, t, i, n) {
            return this.filter(R).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, i, n)
        },
        animate: function(e, t, i, n) {
            var o = p.isEmptyObject(e),
                s = p.speed(t, i, n),
                r = function() {
                    var t = Qe(this, p.extend({}, e), s);
                    (o || H.get(this, "finish")) && t.stop(!0)
                };
            return r.finish = r, o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
        },
        stop: function(e, t, i) {
            var n = function(e) {
                var t = e.stop;
                delete e.stop, t(i)
            };
            return "string" != typeof e && (i = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    o = null != e && e + "queueHooks",
                    s = p.timers,
                    r = H.get(this);
                if (o) r[o] && r[o].stop && n(r[o]);
                else
                    for (o in r) r[o] && r[o].stop && We.test(o) && n(r[o]);
                for (o = s.length; o--;) s[o].elem !== this || null != e && s[o].queue !== e || (s[o].anim.stop(i), t = !1, s.splice(o, 1));
                (t || !i) && p.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, i = H.get(this),
                    n = i[e + "queue"],
                    o = i[e + "queueHooks"],
                    s = p.timers,
                    r = n ? n.length : 0;
                for (i.finish = !0, p.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; t < r; t++) n[t] && n[t].finish && n[t].finish.call(this);
                delete i.finish
            })
        }
    }), p.each(["toggle", "show", "hide"], function(e, t) {
        var i = p.fn[t];
        p.fn[t] = function(e, n, o) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(Ue(t, !0), e, n, o)
        }
    }), p.each({
        slideDown: Ue("show"),
        slideUp: Ue("hide"),
        slideToggle: Ue("toggle"),
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
        p.fn[e] = function(e, i, n) {
            return this.animate(t, e, i, n)
        }
    }), p.timers = [], p.fx.tick = function() {
        var e, t = 0,
            i = p.timers;
        for (je = p.now(); t < i.length; t++)(e = i[t])() || i[t] !== e || i.splice(t--, 1);
        i.length || p.fx.stop(), je = void 0
    }, p.fx.timer = function(e) {
        p.timers.push(e), e() ? p.fx.start() : p.timers.pop()
    }, p.fx.interval = 13, p.fx.start = function() {
        Ie || (Ie = setInterval(p.fx.tick, p.fx.interval))
    }, p.fx.stop = function() {
        clearInterval(Ie), Ie = null
    }, p.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, p.fn.delay = function(e, t) {
        return e = p.fx && p.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, i) {
            var n = setTimeout(t, e);
            i.stop = function() {
                clearTimeout(n)
            }
        })
    }, qe = u.createElement("input"), Ne = (Be = u.createElement("select")).appendChild(u.createElement("option")), qe.type = "checkbox", d.checkOn = "" !== qe.value, d.optSelected = Ne.selected, Be.disabled = !0, d.optDisabled = !Ne.disabled, (qe = u.createElement("input")).value = "t", qe.type = "radio", d.radioValue = "t" === qe.value;
    var Ze, Ge = p.expr.attrHandle;
    p.fn.extend({
        attr: function(e, t) {
            return D(this, p.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                p.removeAttr(this, e)
            })
        }
    }), p.extend({
        attr: function(e, t, i) {
            var n, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === Y ? p.prop(e, t, i) : (1 === s && p.isXMLDoc(e) || (t = t.toLowerCase(), n = p.attrHooks[t] || (p.expr.match.bool.test(t) ? Ze : void 0)), void 0 === i ? n && "get" in n && null !== (o = n.get(e, t)) ? o : null == (o = p.find.attr(e, t)) ? void 0 : o : null !== i ? n && "set" in n && void 0 !== (o = n.set(e, i, t)) ? o : (e.setAttribute(t, i + ""), i) : void p.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var i, n, o = 0,
                s = t && t.match(O);
            if (s && 1 === e.nodeType)
                for (; i = s[o++];) n = p.propFix[i] || i, p.expr.match.bool.test(i) && (e[n] = !1), e.removeAttribute(i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!d.radioValue && "radio" === t && p.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t), i && (e.value = i), t
                    }
                }
            }
        }
    }), Ze = {
        set: function(e, t, i) {
            return !1 === t ? p.removeAttr(e, i) : e.setAttribute(i, i), i
        }
    }, p.each(p.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var i = Ge[t] || p.find.attr;
        Ge[t] = function(e, t, n) {
            var o, s;
            return n || (s = Ge[t], Ge[t] = o, o = null != i(e, t, n) ? t.toLowerCase() : null, Ge[t] = s), o
        }
    });
    var Ke = /^(?:input|select|textarea|button)$/i;
    p.fn.extend({
        prop: function(e, t) {
            return D(this, p.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[p.propFix[e] || e]
            })
        }
    }), p.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(e, t, i) {
            var n, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return (1 !== s || !p.isXMLDoc(e)) && (t = p.propFix[t] || t, o = p.propHooks[t]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(e, i, t)) ? n : e[t] = i : o && "get" in o && null !== (n = o.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    return e.hasAttribute("tabindex") || Ke.test(e.nodeName) || e.href ? e.tabIndex : -1
                }
            }
        }
    }), d.optSelected || (p.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }
    }), p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        p.propFix[this.toLowerCase()] = this
    });
    var Je = /[\t\r\n\f]/g;
    p.fn.extend({
        addClass: function(e) {
            var t, i, n, o, s, r, a = "string" == typeof e && e,
                l = 0,
                c = this.length;
            if (p.isFunction(e)) return this.each(function(t) {
                p(this).addClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(O) || []; l < c; l++)
                    if (n = 1 === (i = this[l]).nodeType && (i.className ? (" " + i.className + " ").replace(Je, " ") : " ")) {
                        for (s = 0; o = t[s++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                        r = p.trim(n), i.className !== r && (i.className = r)
                    }
            return this
        },
        removeClass: function(e) {
            var t, i, n, o, s, r, a = 0 === arguments.length || "string" == typeof e && e,
                l = 0,
                c = this.length;
            if (p.isFunction(e)) return this.each(function(t) {
                p(this).removeClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(O) || []; l < c; l++)
                    if (n = 1 === (i = this[l]).nodeType && (i.className ? (" " + i.className + " ").replace(Je, " ") : "")) {
                        for (s = 0; o = t[s++];)
                            for (; 0 <= n.indexOf(" " + o + " ");) n = n.replace(" " + o + " ", " ");
                        r = e ? p.trim(n) : "", i.className !== r && (i.className = r)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var i = typeof e;
            return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : this.each(p.isFunction(e) ? function(i) {
                p(this).toggleClass(e.call(this, i, this.className, t), t)
            } : function() {
                if ("string" === i)
                    for (var t, n = 0, o = p(this), s = e.match(O) || []; t = s[n++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else(i === Y || "boolean" === i) && (this.className && H.set(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : H.get(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", i = 0, n = this.length; i < n; i++)
                if (1 === this[i].nodeType && 0 <= (" " + this[i].className + " ").replace(Je, " ").indexOf(t)) return !0;
            return !1
        }
    });
    var et = /\r/g;
    p.fn.extend({
        val: function(e) {
            var t, i, n, o = this[0];
            return arguments.length ? (n = p.isFunction(e), this.each(function(i) {
                var o;
                1 === this.nodeType && (null == (o = n ? e.call(this, i, p(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : p.isArray(o) && (o = p.map(o, function(e) {
                    return null == e ? "" : e + ""
                })), (t = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = p.valHooks[o.type] || p.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(o, "value")) ? i : "string" == typeof(i = o.value) ? i.replace(et, "") : null == i ? "" : i : void 0
        }
    }), p.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = p.find.attr(e, "value");
                    return null != t ? t : p.trim(p.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, i, n = e.options, o = e.selectedIndex, s = "select-one" === e.type || o < 0, r = s ? null : [], a = s ? o + 1 : n.length, l = o < 0 ? a : s ? o : 0; l < a; l++)
                        if (!(!(i = n[l]).selected && l !== o || (d.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && p.nodeName(i.parentNode, "optgroup"))) {
                            if (t = p(i).val(), s) return t;
                            r.push(t)
                        }
                    return r
                },
                set: function(e, t) {
                    for (var i, n, o = e.options, s = p.makeArray(t), r = o.length; r--;)((n = o[r]).selected = 0 <= p.inArray(n.value, s)) && (i = !0);
                    return i || (e.selectedIndex = -1), s
                }
            }
        }
    }), p.each(["radio", "checkbox"], function() {
        p.valHooks[this] = {
            set: function(e, t) {
                return p.isArray(t) ? e.checked = 0 <= p.inArray(p(e).val(), t) : void 0
            }
        }, d.checkOn || (p.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        p.fn[t] = function(e, i) {
            return 0 < arguments.length ? this.on(t, null, e, i) : this.trigger(t)
        }
    }), p.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    });
    var tt = p.now(),
        it = /\?/;
    p.parseJSON = function(e) {
        return JSON.parse(e + "")
    }, p.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return (!t || t.getElementsByTagName("parsererror").length) && p.error("Invalid XML: " + e), t
    };
    var nt = /#.*$/,
        ot = /([?&])_=[^&]*/,
        st = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        rt = /^(?:GET|HEAD)$/,
        at = /^\/\//,
        lt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        ct = {},
        dt = {},
        ut = "*/".concat("*"),
        ht = e.location.href,
        pt = lt.exec(ht.toLowerCase()) || [];

    function ft(e) {
        return function(t, i) {
            "string" != typeof t && (i = t, t = "*");
            var n, o = 0,
                s = t.toLowerCase().match(O) || [];
            if (p.isFunction(i))
                for (; n = s[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }

    function mt(e, t, i, n) {
        var o = {},
            s = e === dt;

        function r(a) {
            var l;
            return o[a] = !0, p.each(e[a] || [], function(e, a) {
                var c = a(t, i, n);
                return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
            }), l
        }
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function vt(e, t) {
        var i, n, o = p.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
        return n && p.extend(!0, e, n), e
    }
    p.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ht,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(pt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ut,
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
                "text json": p.parseJSON,
                "text xml": p.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? vt(vt(e, p.ajaxSettings), t) : vt(p.ajaxSettings, e)
        },
        ajaxPrefilter: ft(ct),
        ajaxTransport: ft(dt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var i, n, o, s, r, a, l, c, d = p.ajaxSetup({}, t),
                u = d.context || d,
                h = d.context && (u.nodeType || u.jquery) ? p(u) : p.event,
                f = p.Deferred(),
                m = p.Callbacks("once memory"),
                v = d.statusCode || {},
                g = {},
                y = {},
                b = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!s)
                                for (s = {}; t = st.exec(o);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? o : null
                    },
                    setRequestHeader: function(e, t) {
                        var i = e.toLowerCase();
                        return b || (e = y[i] = y[i] || e, g[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return b || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (b < 2)
                                for (t in e) v[t] = [v[t], e[t]];
                            else x.always(e[x.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return i && i.abort(t), k(0, t), this
                    }
                };
            if (f.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((e || d.url || ht) + "").replace(nt, "").replace(at, pt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = p.trim(d.dataType || "*").toLowerCase().match(O) || [""], null == d.crossDomain && (a = lt.exec(d.url.toLowerCase()), d.crossDomain = !(!a || a[1] === pt[1] && a[2] === pt[2] && (a[3] || ("http:" === a[1] ? "80" : "443")) === (pt[3] || ("http:" === pt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = p.param(d.data, d.traditional)), mt(ct, d, t, x), 2 === b) return x;
            for (c in (l = p.event && d.global) && 0 == p.active++ && p.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !rt.test(d.type), n = d.url, d.hasContent || (d.data && (n = d.url += (it.test(n) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = ot.test(n) ? n.replace(ot, "$1_=" + tt++) : n + (it.test(n) ? "&" : "?") + "_=" + tt++)), d.ifModified && (p.lastModified[n] && x.setRequestHeader("If-Modified-Since", p.lastModified[n]), p.etag[n] && x.setRequestHeader("If-None-Match", p.etag[n])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + ut + "; q=0.01" : "") : d.accepts["*"]), d.headers) x.setRequestHeader(c, d.headers[c]);
            if (d.beforeSend && (!1 === d.beforeSend.call(u, x, d) || 2 === b)) return x.abort();
            for (c in w = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) x[c](d[c]);
            if (i = mt(dt, d, t, x)) {
                x.readyState = 1, l && h.trigger("ajaxSend", [x, d]), d.async && 0 < d.timeout && (r = setTimeout(function() {
                    x.abort("timeout")
                }, d.timeout));
                try {
                    b = 1, i.send(g, k)
                } catch (e) {
                    if (!(b < 2)) throw e;
                    k(-1, e)
                }
            } else k(-1, "No Transport");

            function k(e, t, s, a) {
                var c, g, y, w, k, S = t;
                2 !== b && (b = 2, r && clearTimeout(r), i = void 0, o = a || "", x.readyState = 0 < e ? 4 : 0, c = 200 <= e && e < 300 || 304 === e, s && (w = function(e, t, i) {
                    for (var n, o, s, r, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (n)
                        for (o in a)
                            if (a[o] && a[o].test(n)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0] in i) s = l[0];
                    else {
                        for (o in i) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                s = o;
                                break
                            }
                            r || (r = o)
                        }
                        s = s || r
                    }
                    return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
                }(d, x, s)), w = function(e, t, i, n) {
                    var o, s, r, a, l, c = {},
                        d = e.dataTypes.slice();
                    if (d[1])
                        for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
                    for (s = d.shift(); s;)
                        if (e.responseFields[s] && (i[e.responseFields[s]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = d.shift())
                            if ("*" === s) s = l;
                            else if ("*" !== l && l !== s) {
                        if (!(r = c[l + " " + s] || c["* " + s]))
                            for (o in c)
                                if ((a = o.split(" "))[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === r ? r = c[o] : !0 !== c[o] && (s = a[0], d.unshift(a[1]));
                                    break
                                }
                        if (!0 !== r)
                            if (r && e.throws) t = r(t);
                            else try {
                                t = r(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: r ? e : "No conversion from " + l + " to " + s
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(d, w, x, c), c ? (d.ifModified && ((k = x.getResponseHeader("Last-Modified")) && (p.lastModified[n] = k), (k = x.getResponseHeader("etag")) && (p.etag[n] = k)), 204 === e || "HEAD" === d.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = w.state, g = w.data, c = !(y = w.error))) : (y = S, (e || !S) && (S = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || S) + "", c ? f.resolveWith(u, [g, S, x]) : f.rejectWith(u, [x, S, y]), x.statusCode(v), v = void 0, l && h.trigger(c ? "ajaxSuccess" : "ajaxError", [x, d, c ? g : y]), m.fireWith(u, [x, S]), l && (h.trigger("ajaxComplete", [x, d]), --p.active || p.event.trigger("ajaxStop")))
            }
            return x
        },
        getJSON: function(e, t, i) {
            return p.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return p.get(e, void 0, t, "script")
        }
    }), p.each(["get", "post"], function(e, t) {
        p[t] = function(e, i, n, o) {
            return p.isFunction(i) && (o = o || n, n = i, i = void 0), p.ajax({
                url: e,
                type: t,
                dataType: o,
                data: i,
                success: n
            })
        }
    }), p._evalUrl = function(e) {
        return p.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, p.fn.extend({
        wrapAll: function(e) {
            var t;
            return p.isFunction(e) ? this.each(function(t) {
                p(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = p(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return this.each(p.isFunction(e) ? function(t) {
                p(this).wrapInner(e.call(this, t))
            } : function() {
                var t = p(this),
                    i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = p.isFunction(e);
            return this.each(function(i) {
                p(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
            }).end()
        }
    }), p.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0
    }, p.expr.filters.visible = function(e) {
        return !p.expr.filters.hidden(e)
    };
    var gt = /%20/g,
        yt = /\[\]$/,
        bt = /\r?\n/g,
        wt = /^(?:submit|button|image|reset|file)$/i,
        xt = /^(?:input|select|textarea|keygen)/i;

    function kt(e, t, i, n) {
        var o;
        if (p.isArray(t)) p.each(t, function(t, o) {
            i || yt.test(e) ? n(e, o) : kt(e + "[" + ("object" == typeof o ? t : "") + "]", o, i, n)
        });
        else if (i || "object" !== p.type(t)) n(e, t);
        else
            for (o in t) kt(e + "[" + o + "]", t[o], i, n)
    }
    p.param = function(e, t) {
        var i, n = [],
            o = function(e, t) {
                t = p.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = p.ajaxSettings && p.ajaxSettings.traditional), p.isArray(e) || e.jquery && !p.isPlainObject(e)) p.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (i in e) kt(i, e[i], t, o);
        return n.join("&").replace(gt, "+")
    }, p.fn.extend({
        serialize: function() {
            return p.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = p.prop(this, "elements");
                return e ? p.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !p(this).is(":disabled") && xt.test(this.nodeName) && !wt.test(e) && (this.checked || !X.test(e))
            }).map(function(e, t) {
                var i = p(this).val();
                return null == i ? null : p.isArray(i) ? p.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(bt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(bt, "\r\n")
                }
            }).get()
        }
    }), p.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (e) {}
    };
    var St = 0,
        Tt = {},
        Ct = {
            0: 200,
            1223: 204
        },
        Et = p.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Tt) Tt[e]()
    }), d.cors = !!Et && "withCredentials" in Et, d.ajax = Et = !!Et, p.ajaxTransport(function(e) {
        var t;
        return d.cors || Et && !e.crossDomain ? {
            send: function(i, n) {
                var o, s = e.xhr(),
                    r = ++St;
                if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (o in e.xhrFields) s[o] = e.xhrFields[o];
                for (o in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(o, i[o]);
                t = function(e) {
                    return function() {
                        t && (delete Tt[r], t = s.onload = s.onerror = null, "abort" === e ? s.abort() : "error" === e ? n(s.status, s.statusText) : n(Ct[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {
                            text: s.responseText
                        } : void 0, s.getAllResponseHeaders()))
                    }
                }, s.onload = t(), s.onerror = t("error"), t = Tt[r] = t("abort");
                try {
                    s.send(e.hasContent && e.data || null)
                } catch (i) {
                    if (t) throw i
                }
            },
            abort: function() {
                t && t()
            }
        } : void 0
    }), p.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return p.globalEval(e), e
            }
        }
    }), p.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), p.ajaxTransport("script", function(e) {
        var t, i;
        if (e.crossDomain) return {
            send: function(n, o) {
                t = p("<script>").prop({
                    async: !0,
                    charset: e.scriptCharset,
                    src: e.url
                }).on("load error", i = function(e) {
                    t.remove(), i = null, e && o("error" === e.type ? 404 : 200, e.type)
                }), u.head.appendChild(t[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var At = [],
        $t = /(=)\?(?=&|$)|\?\?/;
    p.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = At.pop() || p.expando + "_" + tt++;
            return this[e] = !0, e
        }
    }), p.ajaxPrefilter("json jsonp", function(t, i, n) {
        var o, s, r, a = !1 !== t.jsonp && ($t.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && $t.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = p.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace($t, "$1" + o) : !1 !== t.jsonp && (t.url += (it.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
            return r || p.error(o + " was not called"), r[0]
        }, t.dataTypes[0] = "json", s = e[o], e[o] = function() {
            r = arguments
        }, n.always(function() {
            e[o] = s, t[o] && (t.jsonpCallback = i.jsonpCallback, At.push(o)), r && p.isFunction(s) && s(r[0]), r = s = void 0
        }), "script") : void 0
    }), p.parseHTML = function(e, t, i) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (i = t, t = !1), t = t || u;
        var n = x.exec(e),
            o = !i && [];
        return n ? [t.createElement(n[1])] : (n = p.buildFragment([e], t, o), o && o.length && p(o).remove(), p.merge([], n.childNodes))
    };
    var _t = p.fn.load;
    p.fn.load = function(e, t, i) {
        if ("string" != typeof e && _t) return _t.apply(this, arguments);
        var n, o, s, r = this,
            a = e.indexOf(" ");
        return 0 <= a && (n = p.trim(e.slice(a)), e = e.slice(0, a)), p.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < r.length && p.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: t
        }).done(function(e) {
            s = arguments, r.html(n ? p("<div>").append(p.parseHTML(e)).find(n) : e)
        }).complete(i && function(e, t) {
            r.each(i, s || [e.responseText, t, e])
        }), this
    }, p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        p.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), p.expr.filters.animated = function(e) {
        return p.grep(p.timers, function(t) {
            return e === t.elem
        }).length
    };
    var Ot = e.document.documentElement;

    function Pt(e) {
        return p.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    p.offset = {
        setOffset: function(e, t, i) {
            var n, o, s, r, a, l, c = p.css(e, "position"),
                d = p(e),
                u = {};
            "static" === c && (e.style.position = "relative"), a = d.offset(), s = p.css(e, "top"), l = p.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (s + l).indexOf("auto") ? (r = (n = d.position()).top, o = n.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), p.isFunction(t) && (t = t.call(e, i, a)), null != t.top && (u.top = t.top - a.top + r), null != t.left && (u.left = t.left - a.left + o), "using" in t ? t.using.call(e, u) : d.css(u)
        }
    }, p.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                p.offset.setOffset(this, e, t)
            });
            var t, i, n = this[0],
                o = {
                    top: 0,
                    left: 0
                },
                s = n && n.ownerDocument;
            return s ? (t = s.documentElement, p.contains(t, n) ? (typeof n.getBoundingClientRect !== Y && (o = n.getBoundingClientRect()), i = Pt(s), {
                top: o.top + i.pageYOffset - t.clientTop,
                left: o.left + i.pageXOffset - t.clientLeft
            }) : o) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, i = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === p.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), p.nodeName(e[0], "html") || (n = e.offset()), n.top += p.css(e[0], "borderTopWidth", !0), n.left += p.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - p.css(i, "marginTop", !0),
                    left: t.left - n.left - p.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || Ot; e && !p.nodeName(e, "html") && "static" === p.css(e, "position");) e = e.offsetParent;
                return e || Ot
            })
        }
    }), p.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var n = "pageYOffset" === i;
        p.fn[t] = function(o) {
            return D(this, function(t, o, s) {
                var r = Pt(t);
                return void 0 === s ? r ? r[i] : t[o] : void(r ? r.scrollTo(n ? e.pageXOffset : s, n ? s : e.pageYOffset) : t[o] = s)
            }, t, o, arguments.length, null)
        }
    }), p.each(["top", "left"], function(e, t) {
        p.cssHooks[t] = Se(d.pixelPosition, function(e, i) {
            return i ? (i = ke(e, t), we.test(i) ? p(e).position()[t] + "px" : i) : void 0
        })
    }), p.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        p.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(i, n) {
            p.fn[n] = function(n, o) {
                var s = arguments.length && (i || "boolean" != typeof n),
                    r = i || (!0 === n || !0 === o ? "margin" : "border");
                return D(this, function(t, i, n) {
                    var o;
                    return p.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === n ? p.css(t, i, r) : p.style(t, i, n, r)
                }, t, s ? n : void 0, s, null)
            }
        })
    }), p.fn.size = function() {
        return this.length
    }, p.fn.andSelf = p.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return p
    });
    var Lt = e.jQuery,
        Dt = e.$;
    return p.noConflict = function(t) {
        return e.$ === p && (e.$ = Dt), t && e.jQuery === p && (e.jQuery = Lt), p
    }, typeof t === Y && (e.jQuery = e.$ = p), p
}), window.yii = function(e) {
        var t = {
            reloadableScripts: [],
            clickableSelector: 'a, button, input[type="submit"], input[type="button"], input[type="reset"], input[type="image"]',
            changeableSelector: "select, input, textarea",
            getCsrfParam: function() {
                return e("meta[name=csrf-param]").attr("content")
            },
            getCsrfToken: function() {
                return e("meta[name=csrf-token]").attr("content")
            },
            setCsrfToken: function(t, i) {
                e("meta[name=csrf-param]").attr("content", t), e("meta[name=csrf-token]").attr("content", i)
            },
            refreshCsrfToken: function() {
                var i = t.getCsrfToken();
                i && e('form input[name="' + t.getCsrfParam() + '"]').val(i)
            },
            confirm: function(e, t, i) {
                window.confirm(e) ? !t || t() : !i || i()
            },
            handleAction: function(i, n) {
                var o, s = i.attr("data-form") ? e("#" + i.attr("data-form")) : i.closest("form"),
                    r = !i.data("method") && s ? s.attr("method") : i.data("method"),
                    a = i.attr("href"),
                    l = a && "#" !== a,
                    c = i.data("params"),
                    d = c && e.isPlainObject(c),
                    u = i.data("pjax"),
                    h = void 0 !== u && 0 !== u && e.support.pjax,
                    p = {};
                if (h && (void 0 !== (o = i.data("pjax-container")) && o.length || (o = i.closest("[data-pjax-container]").attr("id") ? "#" + i.closest("[data-pjax-container]").attr("id") : ""), o.length || (o = "body"), p = {
                        container: o,
                        push: !!i.data("pjax-push-state"),
                        replace: !!i.data("pjax-replace-state"),
                        scrollTo: i.data("pjax-scrollto"),
                        pushRedirect: i.data("pjax-push-redirect"),
                        replaceRedirect: i.data("pjax-replace-redirect"),
                        skipOuterContainers: i.data("pjax-skip-outer-containers"),
                        timeout: i.data("pjax-timeout"),
                        originalEvent: n,
                        originalTarget: i
                    }), void 0 !== r) {
                    var f, m, v = !s.length;
                    if (v) {
                        l || (a = t.getCurrentUrl()), s = e("<form/>", {
                            method: r,
                            action: a
                        });
                        var g = i.attr("target");
                        if (g && s.attr("target", g), /(get|post)/i.test(r) || (s.append(e("<input/>", {
                                name: "_method",
                                value: r,
                                type: "hidden"
                            })), r = "post", s.attr("method", r)), /post/i.test(r)) {
                            var y = t.getCsrfParam();
                            y && s.append(e("<input/>", {
                                name: y,
                                value: t.getCsrfToken(),
                                type: "hidden"
                            }))
                        }
                        s.hide().appendTo("body")
                    } else f = s.attr("method"), s.attr("method", r), l && (m = s.attr("action"), s.attr("action", a));
                    var b = s.data("yiiActiveForm");
                    b && (b.submitObject = i), d && e.each(c, function(t, i) {
                        s.append(e("<input/>").attr({
                            name: t,
                            value: i,
                            type: "hidden"
                        }))
                    }), h && s.on("submit", function(t) {
                        e.pjax.submit(t, p)
                    }), s.trigger("submit"), e.when(s.data("yiiSubmitFinalizePromise")).then(function() {
                        v ? s.remove() : (void 0 !== m && s.attr("action", m), s.attr("method", f), d && e.each(c, function(t) {
                            e('input[name="' + t + '"]', s).remove()
                        }))
                    })
                } else l ? h ? e.pjax.click(n, p) : window.location.assign(a) : i.is(":submit") && s.length && (h && s.on("submit", function(t) {
                    e.pjax.submit(t, p)
                }), s.trigger("submit"))
            },
            getQueryParams: function(t) {
                var i = t.indexOf("?");
                if (i < 0) return {};
                for (var n = e.grep(t.substring(i + 1).split("#")[0].split("&"), function(e) {
                        return "" !== e
                    }), o = {}, s = 0, r = n.length; s < r; s++) {
                    var a = n[s].split("="),
                        l = decodeURIComponent(a[0].replace(/\+/g, "%20")),
                        c = decodeURIComponent(a[1].replace(/\+/g, "%20"));
                    l.length && (void 0 === o[l] ? o[l] = c || "" : (e.isArray(o[l]) || (o[l] = [o[l]]), o[l].push(c || "")))
                }
                return o
            },
            initModule: function(i) {
                (void 0 === i.isActive || i.isActive) && (e.isFunction(i.init) && i.init(), e.each(i, function() {
                    e.isPlainObject(this) && t.initModule(this)
                }))
            },
            init: function() {
                var o, s;
                e.ajaxPrefilter(function(e, i, n) {
                    !e.crossDomain && t.getCsrfParam() && n.setRequestHeader("X-CSRF-Token", t.getCsrfToken())
                }), t.refreshCsrfToken(), e(document).ajaxComplete(function(e, t) {
                    var i = t && t.getResponseHeader("X-Redirect");
                    i && window.location.assign(i)
                }), o = {}, e("script[src]").each(function() {
                    var e = n(this.src);
                    o[e] = !0
                }), e.ajaxPrefilter("script", function(e, t, s) {
                    if ("jsonp" != e.dataType) {
                        var r = n(e.url),
                            a = !0 === o[r] && !i(r),
                            l = void 0 !== o[r] && !0 === o[r].xhrDone;
                        a || l ? s.abort() : (void 0 !== o[r] && !0 !== o[r] || (o[r] = {
                            xhrList: [],
                            xhrDone: !1
                        }), s.done(function(e, t, i) {
                            if (!0 !== o[i.yiiUrl].xhrDone) {
                                o[i.yiiUrl].xhrDone = !0;
                                for (var n = 0, s = o[i.yiiUrl].xhrList.length; n < s; n++) {
                                    var r = o[i.yiiUrl].xhrList[n];
                                    r && r.readyState !== XMLHttpRequest.DONE && r.abort()
                                }
                                o[i.yiiUrl] = !0
                            }
                        }).fail(function(e, t) {
                            if ("abort" !== t) {
                                delete o[e.yiiUrl].xhrList[e.yiiIndex];
                                for (var i = !0, n = 0, s = o[e.yiiUrl].xhrList.length; n < s; n++) o[e.yiiUrl].xhrList[n] && (i = !1);
                                i && delete o[e.yiiUrl]
                            }
                        }), s.yiiIndex = o[r].xhrList.length, s.yiiUrl = r, o[r].xhrList[s.yiiIndex] = s)
                    }
                }), e(document).ajaxComplete(function() {
                    var t = [];
                    e("link[rel=stylesheet]").each(function() {
                        var o = n(this.href);
                        i(o) || (-1 === e.inArray(o, t) ? t.push(o) : e(this).remove())
                    })
                }), s = function(i) {
                    var n = e(this),
                        o = n.data("method"),
                        s = n.data("confirm"),
                        r = n.data("form");
                    return void 0 === o && void 0 === s && void 0 === r || (void 0 !== s ? e.proxy(t.confirm, this)(s, function() {
                        t.handleAction(n, i)
                    }) : t.handleAction(n, i), i.stopImmediatePropagation(), !1)
                }, e(document).on("click.yii", t.clickableSelector, s).on("change.yii", t.changeableSelector, s)
            },
            getBaseCurrentUrl: function() {
                return window.location.protocol + "//" + window.location.host
            },
            getCurrentUrl: function() {
                return window.location.href
            }
        };

        function i(e) {
            for (var i = 0; i < t.reloadableScripts.length; i++) {
                var o = n(t.reloadableScripts[i]);
                if (!0 === new RegExp("^" + (s = o, s.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")).split("\\*").join(".+") + "$").test(e)) return !0
            }
            var s;
            return !1
        }

        function n(e) {
            return "/" === e.charAt(0) ? t.getBaseCurrentUrl() + e : e
        }
        return t
    }(window.jQuery), window.jQuery(function() {
        window.yii.initModule(window.yii)
    }),
    function(e) {
        e.fn.yiiActiveForm = function(t) {
            return p[t] ? p[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? (e.error("Method " + t + " does not exist on jQuery.yiiActiveForm"), !1) : p.init.apply(this, arguments)
        };
        var t, i = "beforeValidate",
            n = "afterValidate",
            o = "beforeValidateAttribute",
            s = "afterValidateAttribute",
            r = "beforeSubmit",
            a = "ajaxBeforeSend",
            l = "ajaxComplete",
            c = "afterInit",
            d = {
                encodeErrorSummary: !0,
                errorSummary: ".error-summary",
                validateOnSubmit: !0,
                errorCssClass: "has-error",
                successCssClass: "has-success",
                validatingCssClass: "validating",
                ajaxParam: "ajax",
                ajaxDataType: "json",
                validationUrl: void 0,
                scrollToError: !0,
                scrollToErrorOffset: 0
            },
            u = {
                id: void 0,
                name: void 0,
                container: void 0,
                input: void 0,
                error: ".help-block",
                encodeError: !0,
                validateOnChange: !0,
                validateOnBlur: !0,
                validateOnType: !1,
                validationDelay: 500,
                enableAjaxValidation: !1,
                validate: void 0,
                status: 0,
                cancelled: !1,
                value: void 0,
                updateAriaInvalid: !0
            },
            h = function(e) {
                t && (t.resolve(), t = void 0, e.removeData("yiiSubmitFinalizePromise"))
            },
            p = {
                init: function(t, i) {
                    return this.each(function() {
                        var n = e(this);
                        if (!n.data("yiiActiveForm")) {
                            var o = e.extend({}, d, i || {});
                            void 0 === o.validationUrl && (o.validationUrl = n.attr("action")), e.each(t, function(i) {
                                t[i] = e.extend({
                                    value: T(n, this)
                                }, u, this), f(n, t[i])
                            }), n.data("yiiActiveForm", {
                                settings: o,
                                attributes: t,
                                submitting: !1,
                                validated: !1,
                                options: b(n)
                            }), n.on("reset.yiiActiveForm", p.resetForm), o.validateOnSubmit && (n.on("mouseup.yiiActiveForm keyup.yiiActiveForm", ":submit", function() {
                                n.data("yiiActiveForm").submitObject = e(this)
                            }), n.on("submit.yiiActiveForm", p.submitForm));
                            var s = e.Event(c);
                            n.trigger(s)
                        }
                    })
                },
                add: function(t) {
                    var i = e(this);
                    t = e.extend({
                        value: T(i, t)
                    }, u, t), i.data("yiiActiveForm").attributes.push(t), f(i, t)
                },
                remove: function(t) {
                    var i = e(this),
                        n = i.data("yiiActiveForm").attributes,
                        o = -1,
                        s = void 0;
                    return e.each(n, function(e) {
                        if (n[e].id == t) return o = e, s = n[e], !1
                    }), o >= 0 && (n.splice(o, 1), m(i, s)), s
                },
                validateAttribute: function(t) {
                    var i = p.find.call(this, t);
                    void 0 != i && v(e(this), i, !0)
                },
                find: function(t) {
                    var i = e(this).data("yiiActiveForm").attributes,
                        n = void 0;
                    return e.each(i, function(e) {
                        if (i[e].id == t) return n = i[e], !1
                    }), n
                },
                destroy: function() {
                    return this.each(function() {
                        e(this).off(".yiiActiveForm"), e(this).removeData("yiiActiveForm")
                    })
                },
                data: function() {
                    return this.data("yiiActiveForm")
                },
                validate: function(t) {
                    t && (e(this).data("yiiActiveForm").submitting = !0);
                    var n = e(this),
                        s = n.data("yiiActiveForm"),
                        r = !1,
                        c = {},
                        d = g(),
                        u = s.submitting;
                    if (u) {
                        var p = e.Event(i);
                        if (n.trigger(p, [c, d]), !1 === p.result) return s.submitting = !1, void h(n)
                    }
                    e.each(s.attributes, function() {
                        if (this.$form = n, !e(this.input).is(":disabled") && (this.cancelled = !1, s.submitting || 2 === this.status || 3 === this.status)) {
                            var t = c[this.id];
                            void 0 === t && (t = [], c[this.id] = t);
                            var i = e.Event(o);
                            n.trigger(i, [this, t, d]), !1 !== i.result ? (this.validate && this.validate(this, T(n, this), t, d, n), this.enableAjaxValidation && (r = !0)) : this.cancelled = !0
                        }
                    }), e.when.apply(this, d).always(function() {
                        for (var t in c) 0 === c[t].length && delete c[t];
                        if (r && (e.isEmptyObject(c) || s.submitting)) {
                            var i = s.submitObject,
                                o = "&" + s.settings.ajaxParam + "=" + n.attr("id");
                            i && i.length && i.attr("name") && (o += "&" + i.attr("name") + "=" + i.attr("value")), e.ajax({
                                url: s.settings.validationUrl,
                                type: n.attr("method"),
                                data: n.serialize() + o,
                                dataType: s.settings.ajaxDataType,
                                complete: function(e, t) {
                                    n.trigger(l, [e, t])
                                },
                                beforeSend: function(e, t) {
                                    n.trigger(a, [e, t])
                                },
                                success: function(t) {
                                    null !== t && "object" == typeof t ? (e.each(s.attributes, function() {
                                        this.enableAjaxValidation && !this.cancelled || delete t[this.id]
                                    }), w(n, e.extend(c, t), u)) : w(n, c, u)
                                },
                                error: function() {
                                    s.submitting = !1, h(n)
                                }
                            })
                        } else s.submitting ? window.setTimeout(function() {
                            w(n, c, u)
                        }, 200) : w(n, c, u)
                    })
                },
                submitForm: function() {
                    var i, n = e(this),
                        o = n.data("yiiActiveForm");
                    if (o.validated) {
                        o.submitting = !1;
                        var s = e.Event(r);
                        return n.trigger(s), !1 === s.result ? (o.validated = !1, h(n), !1) : (x(n), !0)
                    }
                    return i = n, t = e.Deferred(), i.data("yiiSubmitFinalizePromise", t.promise()), void 0 !== o.settings.timer && clearTimeout(o.settings.timer), o.submitting = !0, p.validate.call(n), !1
                },
                resetForm: function() {
                    var t = e(this),
                        i = t.data("yiiActiveForm");
                    window.setTimeout(function() {
                        e.each(i.attributes, function() {
                            this.value = T(t, this), this.status = 0;
                            var e = t.find(this.container);
                            e.removeClass(i.settings.validatingCssClass + " " + i.settings.errorCssClass + " " + i.settings.successCssClass), e.find(this.error).html("")
                        }), t.find(i.settings.errorSummary).hide().find("ul").html("")
                    }, 1)
                },
                updateMessages: function(t, i) {
                    var n = e(this),
                        o = n.data("yiiActiveForm");
                    e.each(o.attributes, function() {
                        k(n, this, t)
                    }), i && S(n, t)
                },
                updateAttribute: function(t, i) {
                    var n = p.find.call(this, t);
                    if (void 0 != n) {
                        var o = {};
                        o[t] = i, k(e(this), n, o)
                    }
                }
            },
            f = function(t, i) {
                var n = C(t, i);
                i.validateOnChange && n.on("change.yiiActiveForm", function() {
                    v(t, i, !1)
                }), i.validateOnBlur && n.on("blur.yiiActiveForm", function() {
                    0 != i.status && 1 != i.status || v(t, i, !0)
                }), i.validateOnType && n.on("keyup.yiiActiveForm", function(n) {
                    -1 === e.inArray(n.which, [16, 17, 18, 37, 38, 39, 40]) && i.value !== T(t, i) && v(t, i, !1, i.validationDelay)
                })
            },
            m = function(e, t) {
                C(e, t).off(".yiiActiveForm")
            },
            v = function(t, i, n, o) {
                var s = t.data("yiiActiveForm");
                n && (i.status = 2), e.each(s.attributes, function() {
                    this.value !== T(t, this) && (this.status = 2, n = !0)
                }), n && (void 0 !== s.settings.timer && clearTimeout(s.settings.timer), s.settings.timer = window.setTimeout(function() {
                    s.submitting || t.is(":hidden") || (e.each(s.attributes, function() {
                        2 === this.status && (this.status = 3, t.find(this.container).addClass(s.settings.validatingCssClass))
                    }), p.validate.call(t))
                }, o || 200))
            },
            g = function() {
                var t = [];
                return t.add = function(t) {
                    this.push(new e.Deferred(t))
                }, t
            },
            y = ["action", "target", "method", "enctype"],
            b = function(e) {
                for (var t = {}, i = 0; i < y.length; i++) t[y[i]] = e.attr(y[i]);
                return t
            },
            w = function(t, i, o) {
                var s = t.data("yiiActiveForm");
                if (void 0 === s) return !1;
                if (o) {
                    var r = [];
                    if (e.each(s.attributes, function() {
                            e(this.input).is(":disabled") || this.cancelled || !k(t, this, i) || r.push(this)
                        }), t.trigger(n, [i, r]), S(t, i), r.length) {
                        if (s.settings.scrollToError) {
                            var a = t.find(e.map(r, function(e) {
                                return e.input
                            }).join(",")).first().closest(":visible").offset().top - s.settings.scrollToErrorOffset;
                            a < 0 ? a = 0 : a > e(document).height() && (a = e(document).height());
                            var l = e(window).scrollTop();
                            (a < l || a > l + e(window).height()) && e(window).scrollTop(a)
                        }
                        s.submitting = !1
                    } else s.validated = !0, s.submitObject && function(e, t) {
                        for (var i = 0; i < y.length; i++) {
                            var n = t.attr("form" + y[i]);
                            n && e.attr(y[i], n)
                        }
                    }(t, s.submitObject), t.submit(), s.submitObject && function(e) {
                        for (var t = e.data("yiiActiveForm"), i = 0; i < y.length; i++) e.attr(y[i], t.options[y[i]] || null)
                    }(t)
                } else e.each(s.attributes, function() {
                    this.cancelled || 2 !== this.status && 3 !== this.status || k(t, this, i)
                });
                h(t)
            },
            x = function(t) {
                var i = t.data("yiiActiveForm").submitObject || t.find(":submit:first");
                if (i.length && "submit" == i.attr("type") && i.attr("name")) {
                    var n = e('input[type="hidden"][name="' + i.attr("name") + '"]', t);
                    n.length ? n.attr("value", i.attr("value")) : e("<input>").attr({
                        type: "hidden",
                        name: i.attr("name"),
                        value: i.attr("value")
                    }).appendTo(t)
                }
            },
            k = function(t, i, n) {
                var o = t.data("yiiActiveForm"),
                    r = C(t, i),
                    a = !1;
                if (e.isArray(n[i.id]) || (n[i.id] = []), i.status = 1, r.length) {
                    a = n[i.id].length > 0;
                    var l = t.find(i.container),
                        c = l.find(i.error);
                    E(t, i, a), a ? (i.encodeError ? c.text(n[i.id][0]) : c.html(n[i.id][0]), l.removeClass(o.settings.validatingCssClass + " " + o.settings.successCssClass).addClass(o.settings.errorCssClass)) : (c.empty(), l.removeClass(o.settings.validatingCssClass + " " + o.settings.errorCssClass + " ").addClass(o.settings.successCssClass)), i.value = T(t, i)
                }
                return t.trigger(s, [i, n[i.id]]), a
            },
            S = function(t, i) {
                var n = t.data("yiiActiveForm"),
                    o = t.find(n.settings.errorSummary),
                    s = o.find("ul").empty();
                o.length && i && (e.each(n.attributes, function() {
                    if (e.isArray(i[this.id]) && i[this.id].length) {
                        var t = e("<li/>");
                        n.settings.encodeErrorSummary ? t.text(i[this.id][0]) : t.html(i[this.id][0]), s.append(t)
                    }
                }), o.toggle(s.find("li").length > 0))
            },
            T = function(e, t) {
                var i = C(e, t),
                    n = i.attr("type");
                if ("checkbox" === n || "radio" === n) {
                    var o = i.filter(":checked");
                    return o.length || (o = e.find('input[type=hidden][name="' + i.attr("name") + '"]')), o.val()
                }
                return i.val()
            },
            C = function(e, t) {
                var i = e.find(t.input);
                return i.length && "div" === i[0].tagName.toLowerCase() ? i.find("input") : i
            },
            E = function(e, t, i) {
                t.updateAriaInvalid && e.find(t.input).attr("aria-invalid", i ? "true" : "false")
            }
    }(window.jQuery), yii.validation = function(e) {
        var t = {
            isEmpty: function(t) {
                return null === t || void 0 === t || e.isArray(t) && 0 === t.length || "" === t
            },
            addMessage: function(e, t, i) {
                e.push(t.replace(/\{value\}/g, i))
            },
            required: function(i, n, o) {
                var s = !1;
                if (void 0 === o.requiredValue) {
                    var r = "string" == typeof i || i instanceof String;
                    (o.strict && void 0 !== i || !o.strict && !t.isEmpty(r ? e.trim(i) : i)) && (s = !0)
                } else(!o.strict && i == o.requiredValue || o.strict && i === o.requiredValue) && (s = !0);
                s || t.addMessage(n, o.message, i)
            },
            boolean: function(e, i, n) {
                n.skipOnEmpty && t.isEmpty(e) || (!n.strict && (e == n.trueValue || e == n.falseValue) || n.strict && (e === n.trueValue || e === n.falseValue) || t.addMessage(i, n.message, e))
            },
            string: function(e, i, n) {
                n.skipOnEmpty && t.isEmpty(e) || ("string" == typeof e ? void 0 === n.is || e.length == n.is ? (void 0 !== n.min && e.length < n.min && t.addMessage(i, n.tooShort, e), void 0 !== n.max && e.length > n.max && t.addMessage(i, n.tooLong, e)) : t.addMessage(i, n.notEqual, e) : t.addMessage(i, n.message, e))
            },
            file: function(t, o, s) {
                var r = i(t, o, s);
                e.each(r, function(e, t) {
                    n(t, o, s)
                })
            },
            image: function(o, s, r, a) {
                var l = i(o, s, r);
                e.each(l, function(i, o) {
                    if (n(o, s, r), "undefined" != typeof FileReader) {
                        var l = e.Deferred();
                        t.validateImage(o, s, r, l, new FileReader, new Image), a.push(l)
                    }
                })
            },
            validateImage: function(e, t, i, n, o, s) {
                s.onload = function() {
                    ! function(e, t, i, n) {
                        n.minWidth && t.width < n.minWidth && i.push(n.underWidth.replace(/\{file\}/g, e.name));
                        n.maxWidth && t.width > n.maxWidth && i.push(n.overWidth.replace(/\{file\}/g, e.name));
                        n.minHeight && t.height < n.minHeight && i.push(n.underHeight.replace(/\{file\}/g, e.name));
                        n.maxHeight && t.height > n.maxHeight && i.push(n.overHeight.replace(/\{file\}/g, e.name))
                    }(e, s, t, i), n.resolve()
                }, s.onerror = function() {
                    t.push(i.notImage.replace(/\{file\}/g, e.name)), n.resolve()
                }, o.onload = function() {
                    s.src = this.result
                }, o.onerror = function() {
                    n.resolve()
                }, o.readAsDataURL(e)
            },
            number: function(e, i, n) {
                n.skipOnEmpty && t.isEmpty(e) || ("string" != typeof e || n.pattern.test(e) ? (void 0 !== n.min && e < n.min && t.addMessage(i, n.tooSmall, e), void 0 !== n.max && e > n.max && t.addMessage(i, n.tooBig, e)) : t.addMessage(i, n.message, e))
            },
            range: function(i, n, o) {
                if (!o.skipOnEmpty || !t.isEmpty(i))
                    if (o.allowArray || !e.isArray(i)) {
                        var s = !0;
                        e.each(e.isArray(i) ? i : [i], function(t, i) {
                            return -1 != e.inArray(i, o.range) || (s = !1, !1)
                        }), void 0 === o.not && (o.not = !1), o.not === s && t.addMessage(n, o.message, i)
                    } else t.addMessage(n, o.message, i)
            },
            regularExpression: function(e, i, n) {
                n.skipOnEmpty && t.isEmpty(e) || (!n.not && !n.pattern.test(e) || n.not && n.pattern.test(e)) && t.addMessage(i, n.message, e)
            },
            email: function(e, i, n) {
                if (!n.skipOnEmpty || !t.isEmpty(e)) {
                    var o = !0,
                        s = /^((?:"?([^"]*)"?\s)?)(?:\s+)?(?:(<?)((.+)@([^>]+))(>?))$/.exec(e);
                    if (null === s) o = !1;
                    else {
                        var r = s[5],
                            a = s[6];
                        n.enableIDN && (r = punycode.toASCII(r), a = punycode.toASCII(a), e = s[1] + s[3] + r + "@" + a + s[7]), o = !(r.length > 64) && (!((r + "@" + a).length > 254) && (n.pattern.test(e) || n.allowName && n.fullPattern.test(e)))
                    }
                    o || t.addMessage(i, n.message, e)
                }
            },
            url: function(e, i, n) {
                if (!n.skipOnEmpty || !t.isEmpty(e)) {
                    n.defaultScheme && !/:\/\//.test(e) && (e = n.defaultScheme + "://" + e);
                    var o = !0;
                    if (n.enableIDN) {
                        var s = /^([^:]+):\/\/([^\/]+)(.*)$/.exec(e);
                        null === s ? o = !1 : e = s[1] + "://" + punycode.toASCII(s[2]) + s[3]
                    }
                    o && n.pattern.test(e) || t.addMessage(i, n.message, e)
                }
            },
            trim: function(i, n, o) {
                var s = i.find(n.input),
                    r = s.val();
                return o.skipOnEmpty && t.isEmpty(r) || (r = e.trim(r), s.val(r)), r
            },
            captcha: function(i, n, o) {
                if (!o.skipOnEmpty || !t.isEmpty(i)) {
                    var s = e("body").data(o.hashKey);
                    s = null == s ? o.hash : s[o.caseSensitive ? 0 : 1];
                    for (var r = o.caseSensitive ? i : i.toLowerCase(), a = r.length - 1, l = 0; a >= 0; --a) l += r.charCodeAt(a);
                    l != s && t.addMessage(n, o.message, i)
                }
            },
            compare: function(i, n, o) {
                if (!o.skipOnEmpty || !t.isEmpty(i)) {
                    var s, r = !0;
                    switch (s = void 0 === o.compareAttribute ? o.compareValue : e("#" + o.compareAttribute).val(), "number" === o.type && (i = parseFloat(i), s = parseFloat(s)), o.operator) {
                        case "==":
                            r = i == s;
                            break;
                        case "===":
                            r = i === s;
                            break;
                        case "!=":
                            r = i != s;
                            break;
                        case "!==":
                            r = i !== s;
                            break;
                        case ">":
                            r = i > s;
                            break;
                        case ">=":
                            r = i >= s;
                            break;
                        case "<":
                            r = i < s;
                            break;
                        case "<=":
                            r = i <= s;
                            break;
                        default:
                            r = !1
                    }
                    r || t.addMessage(n, o.message, i)
                }
            },
            ip: function(e, i, n) {
                if (!n.skipOnEmpty || !t.isEmpty(e)) {
                    var o = null,
                        s = null,
                        r = new RegExp(n.ipParsePattern).exec(e);
                    if (r && (o = r[1] || null, e = r[2], s = r[4] || null), !0 !== n.subnet || null !== s)
                        if (!1 !== n.subnet || null === s)
                            if (!1 !== n.negation || null === o) 6 == (-1 === e.indexOf(":") ? 4 : 6) ? (new RegExp(n.ipv6Pattern).test(e) || t.addMessage(i, n.messages.message, e), n.ipv6 || t.addMessage(i, n.messages.ipv6NotAllowed, e)) : (new RegExp(n.ipv4Pattern).test(e) || t.addMessage(i, n.messages.message, e), n.ipv4 || t.addMessage(i, n.messages.ipv4NotAllowed, e));
                            else t.addMessage(i, n.messages.message, e);
                    else t.addMessage(i, n.messages.hasSubnet, e);
                    else t.addMessage(i, n.messages.noSubnet, e)
                }
            }
        };

        function i(t, i, n) {
            if ("undefined" == typeof File) return [];
            var o = e(t.input, t.$form).get(0).files;
            return o ? 0 === o.length ? (n.skipOnEmpty || i.push(n.uploadRequired), []) : n.maxFiles && n.maxFiles < o.length ? (i.push(n.tooMany), []) : o : (i.push(n.message), [])
        }

        function n(e, t, i) {
            if (i.extensions && i.extensions.length > 0) {
                var n = e.name.lastIndexOf("."),
                    o = ~n ? e.name.substr(n + 1, e.name.length).toLowerCase() : "";
                ~i.extensions.indexOf(o) || t.push(i.wrongExtension.replace(/\{file\}/g, e.name))
            }
            i.mimeTypes && i.mimeTypes.length > 0 && (function(e, t) {
                for (var i = 0, n = e.length; i < n; i++)
                    if (new RegExp(e[i]).test(t)) return !0;
                return !1
            }(i.mimeTypes, e.type) || t.push(i.wrongMimeType.replace(/\{file\}/g, e.name))), i.maxSize && i.maxSize < e.size && t.push(i.tooBig.replace(/\{file\}/g, e.name)), i.minSize && i.minSize > e.size && t.push(i.tooSmall.replace(/\{file\}/g, e.name))
        }
        return t
    }(jQuery);
var tools = {
    init: function(e) {
        if (this.client(), null != e)
            for (var t = 0, i = e.length; t < i; t++) tools[e[t]]()
    },
    client: function() {
        window.client = {
            get: function() {
                this.$document = $(document), this.$window = $(window), this.windowW = this.$window.width(), this.windowH = this.$window.height(), this.isMobile = this.windowW <= 1200, this.scrollW = this.getScrollWidth(), this.isRetina = this.checkRetina()
            },
            getScrollWidth: function() {
                var e = document.createElement("div");
                e.style.visibility = "hidden", e.style.width = "100px", e.style.msOverflowStyle = "scrollbar", document.body.appendChild(e);
                var t = e.offsetWidth;
                e.style.overflow = "scroll";
                var i = document.createElement("div");
                i.style.width = "100%", e.appendChild(i);
                var n = i.offsetWidth;
                return e.parentNode.removeChild(e), t - n
            },
            checkRetina: function() {
                if (window.matchMedia) {
                    var e = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
                    return e && e.matches || 1 < window.devicePixelRatio
                }
            }
        }, client.get(), client.$window.on("resize", function() {
            client.get()
        })
    },
    backgrounds: function() {
        for (var e = document.querySelectorAll("[data-bg-src]"), t = e.length, i = 0; i < t; i++) {
            var n = e[i],
                o = n.getAttribute("data-bg-src") || "",
                s = n.getAttribute("data-bg-size") || "auto",
                r = n.getAttribute("data-bg-pos") || "auto";
            n.style.background = "url(" + o + ") " + r + " / " + s + " no-repeat"
        }
    },
    tabs: function() {
        window.tabs = {
            init: function() {
                var e = this,
                    t = document.querySelectorAll("[data-tabs]");
                e.classTabActive = "tabs__tab_active", e.classBtnActive = "tabs__btn_active", e.tagTab = "[data-tab]", e.tagBtn = "[data-open-tab]";
                for (var i = 0, n = t.length; i < n; i++) {
                    var o = t[i],
                        s = o.querySelector("[data-tab]").getAttribute("data-tab");
                    e.open(o, s), o.classList.add("tabs_initialized")
                }
                e.events()
            },
            open: function(e, t) {
                for (var i = this, n = e.querySelectorAll(i.tagTab), o = 0, s = n.length; o < s; o++) n[o].classList.remove(i.classTabActive);
                e.querySelector("[data-tab='" + t + "']").classList.add(i.classTabActive);
                for (var r = e.querySelectorAll(i.tagBtn), a = 0, l = r.length; a < l; a++) r[a].classList.remove(i.classBtnActive);
                e.querySelector("[data-open-tab='" + t + "']").classList.add(i.classBtnActive)
            },
            events: function() {
                var e = this;
                client.$document.on("click", "[data-open-tab]", function() {
                    var t = $(this),
                        i = t.closest(".tabs"),
                        n = t.data("open-tab");
                    e.open(i[0], n)
                })
            }
        }, tabs.init()
    },
    modals: function() {
        window.modals = {
            init: function() {
                var e = this;
                e.container = document.querySelector("[data-modals]"), e.tagBtnClose = "[data-modal-close]", e.tagBtnOpen = "[data-modal-open]", e.classModalActive = "modal_active", e.countOpened = 0, e.events()
            },
            open: function(e, t) {
                var i = modals,
                    n = document.querySelector("[data-modal='" + e + "']");
                n.classList.add(i.classModalActive), i.countOpened++, t && t(n)
            },
            close: function(e, t) {
                var i = document.querySelector("[data-modal='" + e + "']");
                i.classList.remove(this.classModalActive), this.countOpened--, this.countOpened, t && t(i)
            },
            closeAll: function(e) {
                for (var t = this.container.querySelectorAll("[data-modal]"), i = 0, n = t.length; i < n; i++) t[i].classList.remove(this.classModalActive);
                this.countOpened = 0, e && e()
            },
            hideOverflow: function() {
                document.body.style.overflowY = "hidden", document.body.style.paddingRight = client.scrollW + "px"
            },
            showOverflow: function() {
                document.body.style.overflowY = "auto", document.body.style.paddingRight = "0"
            },
            events: function() {
                var e = this;
                client.$document.on("click", e.tagBtnClose, function(t) {
                    t.preventDefault();
                    var i = $(this).closest(".modal").data("modal");
                    e.close(i)
                }), client.$document.on("click", e.tagBtnOpen, function(t) {
                    t.preventDefault();
                    var i = $(this).data("modal-open");
                    e.open(i)
                })
            }
        }, modals.init()
    },
    forms: function() {
        var e = {
            email: function(e) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
            }
        };
        window.forms = {
            init: function() {},
            isValid: function(t, i) {
                try {
                    return e[t](i)
                } catch (t) {
                    return null
                }
            }
        }, forms.init()
    },
    preloader: function() {
        window.preloader = {
            init: function() {
                this.urls = this.getUrls(), this.loadImages(this.urls)
            },
            getUrls: function() {
                for (var e = [], t = document.getElementsByTagName("img"), i = t.length, n = 0, o = document.querySelectorAll("[data-bg-src]"), s = o.length, r = 0; n < i; n++) {
                    var a = t[n].getAttribute("src");
                    e.push(a)
                }
                for (; r < s; r++) a = o[r].getAttribute("data-bg-src"), e.push(a);
                return this.total = i + s, this.loaded = 0, e
            },
            loadImages: function(e) {
                for (var t = this, i = 0, n = e.length; i < n; i++) {
                    var o = e[i],
                        s = new Image;
                    s.src = o, s.addEventListener("load", function() {
                        t.loaded++, t.check()
                    }), s.addEventListener("error", function() {
                        t.loaded++, t.check()
                    })
                }
            },
            getProgress: function() {
                return (this.loaded / this.total).toFixed(2)
            },
            check: function() {
                this.loaded === this.total && this.done()
            },
            done: function() {
                var e;
                document.createEvent ? (e = document.createEvent("HTMLEvents")).initEvent("preloaderDone", !0, !0) : (e = document.createEventObject()).eventType = "preloaderDone", e.eventName = "preloaderDone", document.createEvent ? document.dispatchEvent(e) : document.fireEvent("on" + e.eventType, e)
            }
        }, preloader.init()
    },
    templates: function() {}
};
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    var t, i = window.Slick;
    (t = 0, i = function(i, n) {
        var o, s = this;
        s.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: e(i),
            appendDots: e(i),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function(t, i) {
                return e('<button type="button" />').text(i + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            focusOnChange: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        }, s.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        }, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = e(i), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, o = e(i).data("slick") || {}, s.options = e.extend({}, s.defaults, n, o), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = e.proxy(s.autoPlay, s), s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s), s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), s.keyHandler = e.proxy(s.keyHandler, s), s.instanceUid = t++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
    }).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, i.prototype.addSlide = i.prototype.slickAdd = function(t, i, n) {
        var o = this;
        if ("boolean" == typeof i) n = i, i = null;
        else if (i < 0 || i >= o.slideCount) return !1;
        o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : n ? e(t).insertBefore(o.$slides.eq(i)) : e(t).insertAfter(o.$slides.eq(i)) : !0 === n ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function(t, i) {
            e(i).attr("data-slick-index", t)
        }), o.$slidesCache = o.$slides, o.reinit()
    }, i.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }, i.prototype.animateSlide = function(t, i) {
        var n = {},
            o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (t = -t), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
            left: t
        }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
            top: t
        }, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
            animStart: o.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(e) {
                e = Math.ceil(e), !1 === o.options.vertical ? n[o.animType] = "translate(" + e + "px, 0px)" : n[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(n)
            },
            complete: function() {
                i && i.call()
            }
        })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? n[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(n), i && setTimeout(function() {
            o.disableTransition(), i.call()
        }, o.options.speed))
    }, i.prototype.getNavTarget = function() {
        var t = this.options.asNavFor;
        return t && null !== t && (t = e(t).not(this.$slider)), t
    }, i.prototype.asNavFor = function(t) {
        var i = this.getNavTarget();
        null !== i && "object" == typeof i && i.each(function() {
            var i = e(this).slick("getSlick");
            i.unslicked || i.slideHandler(t, !0)
        })
    }, i.prototype.applyTransition = function(e) {
        var t = this,
            i = {};
        !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, i.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, i.prototype.autoPlayClear = function() {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, i.prototype.autoPlayIterator = function() {
        var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
    }, i.prototype.buildArrows = function() {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, i.prototype.buildDots = function() {
        var t, i, n = this;
        if (!0 === n.options.dots) {
            for (n.$slider.addClass("slick-dotted"), i = e("<ul />").addClass(n.options.dotsClass), t = 0; t <= n.getDotCount(); t += 1) i.append(e("<li />").append(n.options.customPaging.call(this, n, t)));
            n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active")
        }
    }, i.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
            e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
        }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
    }, i.prototype.buildRows = function() {
        var e, t, i, n, o, s, r, a = this;
        if (n = document.createDocumentFragment(), s = a.$slider.children(), 1 < a.options.rows) {
            for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), e = 0; e < o; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var c = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var d = e * r + (t * a.options.slidesPerRow + i);
                        s.get(d) && c.appendChild(s.get(d))
                    }
                    l.appendChild(c)
                }
                n.appendChild(l)
            }
            a.$slider.empty().append(n), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, i.prototype.checkResponsive = function(t, i) {
        var n, o, s, r = this,
            a = !1,
            l = r.$slider.width(),
            c = window.innerWidth || e(window).width();
        if ("window" === r.respondTo ? s = c : "slider" === r.respondTo ? s = l : "min" === r.respondTo && (s = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            for (n in o = null, r.breakpoints) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[n] && (o = r.breakpoints[n]) : s > r.breakpoints[n] && (o = r.breakpoints[n]));
            null !== o ? null !== r.activeBreakpoint ? (o !== r.activeBreakpoint || i) && (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : (r.activeBreakpoint = o, "unslick" === r.breakpointSettings[o] ? r.unslick(o) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[o]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = o) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t), a = o), t || !1 === a || r.$slider.trigger("breakpoint", [r, a])
        }
    }, i.prototype.changeSlide = function(t, i) {
        var n, o, s = this,
            r = e(t.currentTarget);
        switch (r.is("a") && t.preventDefault(), r.is("li") || (r = r.closest("li")), n = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
            case "previous":
                o = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, i);
                break;
            case "next":
                o = 0 === n ? s.options.slidesToScroll : n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, i);
                break;
            case "index":
                var a = 0 === t.data.index ? 0 : t.data.index || r.index() * s.options.slidesToScroll;
                s.slideHandler(s.checkNavigable(a), !1, i), r.children().trigger("focus");
                break;
            default:
                return
        }
    }, i.prototype.checkNavigable = function(e) {
        var t, i;
        if (i = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
        else
            for (var n in t) {
                if (e < t[n]) {
                    e = i;
                    break
                }
                i = t[n]
            }
        return e
    }, i.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
    }, i.prototype.cleanUpSlideEvents = function() {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, i.prototype.cleanUpRows = function() {
        var e;
        1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
    }, i.prototype.clickHandler = function(e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, i.prototype.destroy = function(t) {
        var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            e(this).attr("style", e(this).data("originalStyling"))
        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
    }, i.prototype.disableTransition = function(e) {
        var t = {};
        t[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(t) : this.$slides.eq(e).css(t)
    }, i.prototype.fadeSlide = function(e, t) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(e).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(e).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), t && setTimeout(function() {
            i.disableTransition(e), t.call()
        }, i.options.speed))
    }, i.prototype.fadeSlideOut = function(e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, i.prototype.filterSlides = i.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, i.prototype.focusHandler = function() {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(i) {
            i.stopImmediatePropagation();
            var n = e(this);
            setTimeout(function() {
                t.options.pauseOnFocus && (t.focussed = n.is(":focus"), t.autoPlay())
            }, 0)
        })
    }, i.prototype.getCurrent = i.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }, i.prototype.getDotCount = function() {
        var e = this,
            t = 0,
            i = 0,
            n = 0;
        if (!0 === e.options.infinite)
            if (e.slideCount <= e.options.slidesToShow) ++n;
            else
                for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode) n = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return n - 1
    }, i.prototype.getLeft = function(e) {
        var t, i, n, o, s = this,
            r = 0;
        return s.slideOffset = 0, i = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, o = -1, !0 === s.options.vertical && !0 === s.options.centerMode && (2 === s.options.slidesToShow ? o = -1.5 : 1 === s.options.slidesToShow && (o = -2)), r = i * s.options.slidesToShow * o), s.slideCount % s.options.slidesToScroll != 0 && e + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (e > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (e - s.slideCount)) * s.slideWidth * -1, r = (s.options.slidesToShow - (e - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, r = s.slideCount % s.options.slidesToScroll * i * -1))) : e + s.options.slidesToShow > s.slideCount && (s.slideOffset = (e + s.options.slidesToShow - s.slideCount) * s.slideWidth, r = (e + s.options.slidesToShow - s.slideCount) * i), s.slideCount <= s.options.slidesToShow && (r = s.slideOffset = 0), !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow ? s.slideOffset = s.slideWidth * Math.floor(s.options.slidesToShow) / 2 - s.slideWidth * s.slideCount / 2 : !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), t = !1 === s.options.vertical ? e * s.slideWidth * -1 + s.slideOffset : e * i * -1 + r, !0 === s.options.variableWidth && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow), t = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === s.options.centerMode && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow + 1), t = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (s.$list.width() - n.outerWidth()) / 2)), t
    }, i.prototype.getOption = i.prototype.slickGetOption = function(e) {
        return this.options[e]
    }, i.prototype.getNavigableIndexes = function() {
        var e, t = this,
            i = 0,
            n = 0,
            o = [];
        for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e;) o.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o
    }, i.prototype.getSlick = function() {
        return this
    }, i.prototype.getSlideCount = function() {
        var t, i, n = this;
        return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function(o, s) {
            if (s.offsetLeft - i + e(s).outerWidth() / 2 > -1 * n.swipeLeft) return t = s, !1
        }), Math.abs(e(t).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
    }, i.prototype.goTo = i.prototype.slickGoTo = function(e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }, i.prototype.init = function(t) {
        var i = this;
        e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), t && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
    }, i.prototype.initADA = function() {
        var t = this,
            i = Math.ceil(t.slideCount / t.options.slidesToShow),
            n = t.getNavigableIndexes().filter(function(e) {
                return 0 <= e && e < t.slideCount
            });
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
            var o = n.indexOf(i);
            e(this).attr({
                role: "tabpanel",
                id: "slick-slide" + t.instanceUid + i,
                tabindex: -1
            }), -1 !== o && e(this).attr({
                "aria-describedby": "slick-slide-control" + t.instanceUid + o
            })
        }), t.$dots.attr("role", "tablist").find("li").each(function(o) {
            var s = n[o];
            e(this).attr({
                role: "presentation"
            }), e(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + t.instanceUid + o,
                "aria-controls": "slick-slide" + t.instanceUid + s,
                "aria-label": o + 1 + " of " + i,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(t.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var o = t.currentSlide, s = o + t.options.slidesToShow; o < s; o++) t.$slides.eq(o).attr("tabindex", 0);
        t.activateADA()
    }, i.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
    }, i.prototype.initDotEvents = function() {
        var t = this;
        !0 === t.options.dots && (e("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, i.prototype.initSlideEvents = function() {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
    }, i.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
    }, i.prototype.initUI = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, i.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }))
    }, i.prototype.lazyLoad = function() {
        function t(t) {
            e("img[data-lazy]", t).each(function() {
                var t = e(this),
                    i = e(this).attr("data-lazy"),
                    n = e(this).attr("data-srcset"),
                    o = e(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
                    r = document.createElement("img");
                r.onload = function() {
                    t.animate({
                        opacity: 0
                    }, 100, function() {
                        n && (t.attr("srcset", n), o && t.attr("sizes", o)), t.attr("src", i).animate({
                            opacity: 1
                        }, 200, function() {
                            t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), s.$slider.trigger("lazyLoaded", [s, t, i])
                    })
                }, r.onerror = function() {
                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, i])
                }, r.src = i
            })
        }
        var i, n, o, s = this;
        if (!0 === s.options.centerMode ? !0 === s.options.infinite ? o = (n = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2 : (n = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), o = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (n = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, o = Math.ceil(n + s.options.slidesToShow), !0 === s.options.fade && (0 < n && n--, o <= s.slideCount && o++)), i = s.$slider.find(".slick-slide").slice(n, o), "anticipated" === s.options.lazyLoad)
            for (var r = n - 1, a = o, l = s.$slider.find(".slick-slide"), c = 0; c < s.options.slidesToScroll; c++) r < 0 && (r = s.slideCount - 1), i = (i = i.add(l.eq(r))).add(l.eq(a)), r--, a++;
        t(i), s.slideCount <= s.options.slidesToShow ? t(s.$slider.find(".slick-slide")) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? t(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)) : 0 === s.currentSlide && t(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow))
    }, i.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
            opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, i.prototype.next = i.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, i.prototype.orientationChange = function() {
        this.checkResponsive(), this.setPosition()
    }, i.prototype.pause = i.prototype.slickPause = function() {
        this.autoPlayClear(), this.paused = !0
    }, i.prototype.play = i.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, i.prototype.postSlide = function(t) {
        var i = this;
        i.unslicked || (i.$slider.trigger("afterChange", [i, t]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && e(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
    }, i.prototype.prev = i.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, i.prototype.preventDefault = function(e) {
        e.preventDefault()
    }, i.prototype.progressiveLazyLoad = function(t) {
        t = t || 1;
        var i, n, o, s, r, a = this,
            l = e("img[data-lazy]", a.$slider);
        l.length ? (i = l.first(), n = i.attr("data-lazy"), o = i.attr("data-srcset"), s = i.attr("data-sizes") || a.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
            o && (i.attr("srcset", o), s && i.attr("sizes", s)), i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, n]), a.progressiveLazyLoad()
        }, r.onerror = function() {
            t < 3 ? setTimeout(function() {
                a.progressiveLazyLoad(t + 1)
            }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, n]), a.progressiveLazyLoad())
        }, r.src = n) : a.$slider.trigger("allImagesLoaded", [a])
    }, i.prototype.refresh = function(t) {
        var i, n, o = this;
        n = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > n && (o.currentSlide = n), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), e.extend(o, o.initials, {
            currentSlide: i
        }), o.init(), t || o.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }, i.prototype.registerBreakpoints = function() {
        var t, i, n, o = this,
            s = o.options.responsive || null;
        if ("array" === e.type(s) && s.length) {
            for (t in o.respondTo = o.options.respondTo || "window", s)
                if (n = o.breakpoints.length - 1, s.hasOwnProperty(t)) {
                    for (i = s[t].breakpoint; 0 <= n;) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
                    o.breakpoints.push(i), o.breakpointSettings[i] = s[t].settings
                }
            o.breakpoints.sort(function(e, t) {
                return o.options.mobileFirst ? e - t : t - e
            })
        }
    }, i.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
    }, i.prototype.resize = function() {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
            t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
        }, 50))
    }, i.prototype.removeSlide = i.prototype.slickRemove = function(e, t, i) {
        var n = this;
        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : n.slideCount - 1 : !0 === t ? --e : e, n.slideCount < 1 || e < 0 || e > n.slideCount - 1) return !1;
        n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
    }, i.prototype.setCSS = function(e) {
        var t, i, n = this,
            o = {};
        !0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", o[n.positionProp] = e, !1 === n.transformsEnabled || (!(o = {}) === n.cssTransitions ? o[n.animType] = "translate(" + t + ", " + i + ")" : o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)"), n.$slideTrack.css(o)
    }, i.prototype.setDimensions = function() {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, i.prototype.setFade = function() {
        var t, i = this;
        i.$slides.each(function(n, o) {
            t = i.slideWidth * n * -1, !0 === i.options.rtl ? e(o).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : e(o).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }), i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }, i.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, i.prototype.setOption = i.prototype.slickSetOption = function() {
        var t, i, n, o, s, r = this,
            a = !1;
        if ("object" === e.type(arguments[0]) ? (n = arguments[0], a = arguments[1], s = "multiple") : "string" === e.type(arguments[0]) && (n = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) r.options[n] = o;
        else if ("multiple" === s) e.each(n, function(e, t) {
            r.options[e] = t
        });
        else if ("responsive" === s)
            for (i in o)
                if ("array" !== e.type(r.options.responsive)) r.options.responsive = [o[i]];
                else {
                    for (t = r.options.responsive.length - 1; 0 <= t;) r.options.responsive[t].breakpoint === o[i].breakpoint && r.options.responsive.splice(t, 1), t--;
                    r.options.responsive.push(o[i])
                }
        a && (r.unload(), r.reinit())
    }, i.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, i.prototype.setProps = function() {
        var e = this,
            t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, i.prototype.setSlideClasses = function(e) {
        var t, i, n, o, s = this;
        if (i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), !0 === s.options.centerMode) {
            var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
            t = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (t <= e && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t + r, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + e, i.slice(n - t + 1 + r, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")
        } else 0 <= e && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = s.slideCount % s.options.slidesToShow, n = !0 === s.options.infinite ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - o), n + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad || s.lazyLoad()
    }, i.prototype.setupInfinite = function() {
        var t, i, n, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (i = null, o.slideCount > o.options.slidesToShow)) {
            for (n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - n; t -= 1) i = t - 1, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (t = 0; t < n + o.slideCount; t += 1) i = t, e(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                e(this).attr("id", "")
            })
        }
    }, i.prototype.interrupt = function(e) {
        e || this.autoPlay(), this.interrupted = e
    }, i.prototype.selectHandler = function(t) {
        var i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
            n = parseInt(i.attr("data-slick-index"));
        n || (n = 0), this.slideCount <= this.options.slidesToShow ? this.slideHandler(n, !1, !0) : this.slideHandler(n)
    }, i.prototype.slideHandler = function(e, t, i) {
        var n, o, s, r, a, l = null,
            c = this;
        if (t = t || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e))
            if (!1 === t && c.asNavFor(e), n = e, l = c.getLeft(n), r = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(r, function() {
                c.postSlide(n)
            }) : c.postSlide(n));
            else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(r, function() {
            c.postSlide(n)
        }) : c.postSlide(n));
        else {
            if (c.options.autoplay && clearInterval(c.autoPlayTimer), o = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, o]), s = c.currentSlide, c.currentSlide = o, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(s), c.fadeSlide(o, function() {
                c.postSlide(o)
            })) : c.postSlide(o), void c.animateHeight();
            !0 !== i ? c.animateSlide(l, function() {
                c.postSlide(o)
            }) : c.postSlide(o)
        }
    }, i.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, i.prototype.swipeDirection = function() {
        var e, t, i, n, o = this;
        return e = o.touchObject.startX - o.touchObject.curX, t = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(t, e), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && 0 <= n ? !1 === o.options.rtl ? "left" : "right" : n <= 360 && 315 <= n ? !1 === o.options.rtl ? "left" : "right" : 135 <= n && n <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? 35 <= n && n <= 135 ? "down" : "up" : "vertical"
    }, i.prototype.swipeEnd = function(e) {
        var t, i, n = this;
        if (n.dragging = !1, n.swiping = !1, n.scrolling) return n.scrolling = !1;
        if (n.interrupted = !1, n.shouldClick = !(10 < n.touchObject.swipeLength), void 0 === n.touchObject.curX) return !1;
        if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
            switch (i = n.swipeDirection()) {
                case "left":
                case "down":
                    t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
            }
            "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
        } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
    }, i.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
        }
    }, i.prototype.swipeMove = function(e) {
        var t, i, n, o, s, r, a = this;
        return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || s && 1 !== s.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && 4 < r ? !(a.scrolling = !0) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r), i = a.swipeDirection(), void 0 !== e.originalEvent && 4 < a.touchObject.swipeLength && (a.swiping = !0, e.preventDefault()), o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, (a.touchObject.edgeHit = !1) === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + n * o : a.swipeLeft = t + n * (a.$list.height() / a.listWidth) * o, !0 === a.options.verticalSwiping && (a.swipeLeft = t + n * o), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
    }, i.prototype.swipeStart = function(e) {
        var t, i = this;
        if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return !(i.touchObject = {});
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, i.dragging = !0
    }, i.prototype.unfilterSlides = i.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, i.prototype.unload = function() {
        var t = this;
        e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, i.prototype.unslick = function(e) {
        this.$slider.trigger("unslick", [this, e]), this.destroy()
    }, i.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, i.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
    }, i.prototype.visibility = function() {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }, e.fn.slick = function() {
        var e, t, n = this,
            o = arguments[0],
            s = Array.prototype.slice.call(arguments, 1),
            r = n.length;
        for (e = 0; e < r; e++)
            if ("object" == typeof o || void 0 === o ? n[e].slick = new i(n[e], o) : t = n[e].slick[o].apply(n[e].slick, s), void 0 !== t) return t;
        return n
    }
}),
function(e) {
    var t = function(e, i) {
        var n = /[^\w\-\.:]/.test(e) ? new Function(t.arg + ",tmpl", "var _e=tmpl.encode" + t.helper + ",_s='" + e.replace(t.regexp, t.func) + "';return _s;") : t.cache[e] = t.cache[e] || t(t.load(e));
        return i ? n(i, t) : function(e) {
            return n(e, t)
        }
    };
    t.cache = {}, t.load = function(e) {
        return document.getElementById(e).innerHTML
    }, t.regexp = /([\s'\\])(?!(?:[^{]|\{(?!%))*%\})|(?:\{%(=|#)([\s\S]+?)%\})|(\{%)|(%\})/g, t.func = function(e, t, i, n, o, s) {
        return t ? {
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            " ": " "
        }[t] || "\\" + t : i ? "=" === i ? "'+_e(" + n + ")+'" : "'+(" + n + "==null?'':" + n + ")+'" : o ? "';" : s ? "_s+='" : void 0
    }, t.encReg = /[<>&"'\x00]/g, t.encMap = {
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&#39;"
    }, t.encode = function(e) {
        return (null == e ? "" : "" + e).replace(t.encReg, function(e) {
            return t.encMap[e] || ""
        })
    }, t.arg = "o", t.helper = ",print=function(s,e){_s+=e?(s==null?'':s):_e(s);},include=function(s,d){_s+=tmpl(s,d);}", "function" == typeof define && define.amd ? define(function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : e.tmpl = t
}(this),
function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], function(i) {
        return t(i, e, e.document, e.Math)
    }) : "object" == typeof exports && exports ? module.exports = t(require("jquery"), e, e.document, e.Math) : t(jQuery, e, e.document, e.Math)
}("undefined" != typeof window ? window : this, function(e, t, i, n, o) {
    var s = "fullpage-wrapper",
        r = "." + s,
        a = "fp-responsive",
        l = "fp-notransition",
        c = "fp-destroyed",
        d = "fp-enabled",
        u = "fp-viewing",
        h = "active",
        p = "." + h,
        f = "fp-completely",
        m = "." + f,
        v = "fp-section",
        g = "." + v,
        y = g + p,
        b = g + ":first",
        w = g + ":last",
        x = "fp-tableCell",
        k = "." + x,
        S = "fp-auto-height",
        T = "fp-normal-scroll",
        C = "#fp-nav",
        E = "fp-tooltip",
        A = "fp-slide",
        $ = "." + A,
        _ = $ + p,
        O = "fp-slides",
        P = "." + O,
        L = "fp-slidesContainer",
        D = "." + L,
        M = "fp-table",
        H = "fp-slidesNav",
        j = "." + H,
        I = j + " a",
        q = "fp-controlArrow",
        B = "." + q,
        N = "fp-prev",
        z = q + " " + N,
        F = B + "." + N,
        W = B + ".fp-next",
        R = e(t),
        X = e(i);
    e.fn.fullpage = function(q) {
        if (e("html").hasClass(d)) zt();
        else {
            var Y = e("html, body"),
                U = e("body"),
                V = e.fn.fullpage;
            q = e.extend({
                menu: !1,
                anchors: [],
                lockAnchors: !1,
                navigation: !1,
                navigationPosition: "right",
                navigationTooltips: [],
                showActiveTooltip: !1,
                slidesNavigation: !1,
                slidesNavPosition: "bottom",
                scrollBar: !1,
                hybrid: !1,
                css3: !0,
                scrollingSpeed: 700,
                autoScrolling: !0,
                fitToSection: !0,
                fitToSectionDelay: 1e3,
                easing: "easeInOutCubic",
                easingcss3: "ease",
                loopBottom: !1,
                loopTop: !1,
                loopHorizontal: !0,
                continuousVertical: !1,
                continuousHorizontal: !1,
                scrollHorizontally: !1,
                interlockedSlides: !1,
                dragAndMove: !1,
                offsetSections: !1,
                resetSliders: !1,
                fadingEffect: !1,
                normalScrollElements: null,
                scrollOverflow: !1,
                scrollOverflowReset: !1,
                scrollOverflowHandler: e.fn.fp_scrolloverflow ? e.fn.fp_scrolloverflow.iscrollHandler : null,
                scrollOverflowOptions: null,
                touchSensitivity: 5,
                normalScrollElementTouchThreshold: 5,
                bigSectionsDestination: null,
                keyboardScrolling: !0,
                animateAnchor: !0,
                recordHistory: !0,
                controlArrows: !0,
                controlArrowColor: "#fff",
                verticalCentered: !0,
                sectionsColor: [],
                paddingTop: 0,
                paddingBottom: 0,
                fixedElements: null,
                responsive: 0,
                responsiveWidth: 0,
                responsiveHeight: 0,
                responsiveSlides: !1,
                parallax: !1,
                parallaxOptions: {
                    type: "reveal",
                    percentage: 62,
                    property: "translate"
                },
                sectionSelector: ".section",
                slideSelector: ".slide",
                afterLoad: null,
                onLeave: null,
                afterRender: null,
                afterResize: null,
                afterReBuild: null,
                afterSlideLoad: null,
                onSlideLeave: null,
                afterResponsive: null,
                lazyLoading: !0
            }, q);
            var Q, Z, G, K, J = !1,
                ee = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
                te = "ontouchstart" in t || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints,
                ie = e(this),
                ne = R.height(),
                oe = !1,
                se = !0,
                re = !0,
                ae = [],
                le = {
                    m: {
                        up: !0,
                        down: !0,
                        left: !0,
                        right: !0
                    }
                };
            le.k = e.extend(!0, {}, le.m);
            var ce, de, ue, he, pe, fe, me, ve = t.PointerEvent ? {
                    down: "pointerdown",
                    move: "pointermove"
                } : {
                    down: "MSPointerDown",
                    move: "MSPointerMove"
                },
                ge = {
                    touchmove: "ontouchmove" in t ? "touchmove" : ve.move,
                    touchstart: "ontouchstart" in t ? "touchstart" : ve.down
                },
                ye = e.extend(!0, {}, q);
            zt(), e.extend(e.easing, {
                easeInOutCubic: function(e, t, i, n, o) {
                    return (t /= o / 2) < 1 ? n / 2 * t * t * t + i : n / 2 * ((t -= 2) * t * t + 2) + i
                }
            }), e(this).length && (V.version = "2.9.5", V.setAutoScrolling = Oe, V.setRecordHistory = Pe, V.setScrollingSpeed = Le, V.setFitToSection = De, V.setLockAnchors = function(e) {
                q.lockAnchors = e
            }, V.setMouseWheelScrolling = Me, V.setAllowScrolling = He, V.setKeyboardScrolling = je, V.moveSectionUp = Ie, V.moveSectionDown = qe, V.silentMoveTo = Be, V.moveTo = Ne, V.moveSlideRight = ze, V.moveSlideLeft = Fe, V.fitToSection = Ue, V.reBuild = We, V.setResponsive = Re, V.destroy = function(t) {
                Oe(!1, "internal"), He(!1), je(!1), ie.addClass(c), clearTimeout(he), clearTimeout(ue), clearTimeout(de), clearTimeout(pe), clearTimeout(fe), R.off("scroll", Ye).off("hashchange", ht).off("resize", bt), X.off("click touchstart", C + " a").off("mouseenter", C + " li").off("mouseleave", C + " li").off("click touchstart", I).off("mouseover", q.normalScrollElements).off("mouseout", q.normalScrollElements), e(g).off("click touchstart", B), clearTimeout(he), clearTimeout(ue), t && function() {
                    It(0), ie.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
                        st(e(this), "src")
                    }), ie.find("img[data-srcset]").each(function() {
                        st(e(this), "srcset")
                    }), e(C + ", " + j + ", " + B).remove(), e(g).css({
                        height: "",
                        "background-color": "",
                        padding: ""
                    }), e($).css({
                        width: ""
                    }), ie.css({
                        height: "",
                        position: "",
                        "-ms-touch-action": "",
                        "touch-action": ""
                    }), Y.css({
                        overflow: "",
                        height: ""
                    }), e("html").removeClass(d), U.removeClass(a), e.each(U.get(0).className.split(/\s+/), function(e, t) {
                        0 === t.indexOf(u) && U.removeClass(t)
                    }), e(g + ", " + $).each(function() {
                        q.scrollOverflowHandler && q.scrollOverflowHandler.remove(e(this)), e(this).removeClass(M + " " + h)
                    }), kt(ie), ie.find(k + ", " + D + ", " + P).each(function() {
                        e(this).replaceWith(this.childNodes)
                    }), ie.css({
                        "-webkit-transition": "none",
                        transition: "none"
                    }), Y.scrollTop(0);
                    var t = [v, A, L];
                    e.each(t, function(t, i) {
                        e("." + i).removeClass(i)
                    })
                }()
            }, V.shared = {
                afterRenderActions: Xe
            }, q.css3 && (q.css3 = function() {
                var e, n = i.createElement("p"),
                    s = {
                        webkitTransform: "-webkit-transform",
                        OTransform: "-o-transform",
                        msTransform: "-ms-transform",
                        MozTransform: "-moz-transform",
                        transform: "transform"
                    };
                for (var r in i.body.insertBefore(n, null), s) n.style[r] !== o && (n.style[r] = "translate3d(1px,1px,1px)", e = t.getComputedStyle(n).getPropertyValue(s[r]));
                return i.body.removeChild(n), e !== o && 0 < e.length && "none" !== e
            }()), q.scrollBar = q.scrollBar || q.hybrid, _e = ie.find(q.sectionSelector), q.anchors.length || (q.anchors = _e.filter("[data-anchor]").map(function() {
                return e(this).data("anchor").toString()
            }).get()), q.navigationTooltips.length || (q.navigationTooltips = _e.filter("[data-tooltip]").map(function() {
                return e(this).data("tooltip").toString()
            }).get()), ie.css({
                height: "100%",
                position: "relative"
            }), ie.addClass(s), e("html").addClass(d), ne = R.height(), ie.removeClass(c), ie.find(q.sectionSelector).addClass(v), ie.find(q.slideSelector).addClass(A), e(g).each(function(t) {
                var i, n, o, s, a = e(this),
                    l = a.find($),
                    c = l.length;
                o = a, (s = t) || 0 !== e(y).length || o.addClass(h), K = e(y), o.css("height", ne + "px"), q.paddingTop && o.css("padding-top", q.paddingTop), q.paddingBottom && o.css("padding-bottom", q.paddingBottom), void 0 !== q.sectionsColor[s] && o.css("background-color", q.sectionsColor[s]), void 0 !== q.anchors[s] && o.attr("data-anchor", q.anchors[s]), i = a, n = t, void 0 !== q.anchors[n] && i.hasClass(h) && St(q.anchors[n], n), q.menu && q.css3 && e(q.menu).closest(r).length && e(q.menu).appendTo(U), 0 < c ? function(t, i, n) {
                    var o, s = 100 * n,
                        r = 100 / n;
                    i.wrapAll('<div class="' + L + '" />'), i.parent().wrap('<div class="' + O + '" />'), t.find(D).css("width", s + "%"), 1 < n && (q.controlArrows && ((o = t).find(P).after('<div class="' + z + '"></div><div class="fp-controlArrow fp-next"></div>'), "#fff" != q.controlArrowColor && (o.find(W).css("border-color", "transparent transparent transparent " + q.controlArrowColor), o.find(F).css("border-color", "transparent " + q.controlArrowColor + " transparent transparent")), q.loopHorizontal || o.find(F).hide()), q.slidesNavigation && function(e, t) {
                        e.append('<div class="' + H + '"><ul></ul></div>');
                        var i = e.find(j);
                        i.addClass(q.slidesNavPosition);
                        for (var n = 0; n < t; n++) i.find("ul").append('<li><a href="#"><span></span></a></li>');
                        i.css("margin-left", "-" + i.width() / 2 + "px"), i.find("li").first().find("a").addClass(h)
                    }(t, n)), i.each(function(t) {
                        e(this).css("width", r + "%"), q.verticalCentered && Ct(e(this))
                    });
                    var a = t.find(_);
                    a.length && (0 !== e(y).index(g) || 0 === e(y).index(g) && 0 !== a.index()) ? jt(a, "internal") : i.eq(0).addClass(h)
                }(a, l, c) : q.verticalCentered && Ct(a)
            }), q.fixedElements && q.css3 && e(q.fixedElements).appendTo(U), q.navigation && function() {
                U.append('<div id="fp-nav"><ul></ul></div>');
                var t = e(C);
                t.addClass(function() {
                    return q.showActiveTooltip ? "fp-show-active " + q.navigationPosition : q.navigationPosition
                });
                for (var i = 0; i < e(g).length; i++) {
                    var n = "";
                    q.anchors.length && (n = q.anchors[i]);
                    var o = '<li><a href="#' + n + '"><span></span></a>',
                        s = q.navigationTooltips[i];
                    void 0 !== s && "" !== s && (o += '<div class="' + E + " " + q.navigationPosition + '">' + s + "</div>"), o += "</li>", t.find("ul").append(o)
                }
                e(C).css("margin-top", "-" + e(C).height() / 2 + "px"), e(C).find("li").eq(e(y).index(g)).find("a").addClass(h)
            }(), ie.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var t, i, n;
                i = "enablejsapi=1", n = (t = e(this)).attr("src"), t.attr("src", n + (/\?/.test(n) ? "&" : "?") + i)
            }), q.scrollOverflow ? ce = q.scrollOverflowHandler.init(q) : Xe(), He(!0), Oe(q.autoScrolling, "internal"), wt(), Mt(), "complete" === i.readyState && ut(), R.on("load", ut), R.on("scroll", Ye).on("hashchange", ht).blur(function() {
                G = se = !1
            }).resize(bt), X.keydown(function(t) {
                clearTimeout(me);
                var i = e(":focus");
                if (!i.is("textarea") && !i.is("input") && !i.is("select") && "true" !== i.attr("contentEditable") && "" !== i.attr("contentEditable") && q.keyboardScrolling && q.autoScrolling) {
                    var n = t.which; - 1 < e.inArray(n, [40, 38, 32, 33, 34]) && t.preventDefault(), G = t.ctrlKey, me = setTimeout(function() {
                        ! function(t) {
                            var i = t.shiftKey;
                            if (re || !([37, 39].indexOf(t.which) < 0)) switch (t.which) {
                                case 38:
                                case 33:
                                    le.k.up && Ie();
                                    break;
                                case 32:
                                    if (i && le.k.up) {
                                        Ie();
                                        break
                                    }
                                case 40:
                                case 34:
                                    le.k.down && qe();
                                    break;
                                case 36:
                                    le.k.up && Ne(1);
                                    break;
                                case 35:
                                    le.k.down && Ne(e(g).length);
                                    break;
                                case 37:
                                    le.k.left && Fe();
                                    break;
                                case 39:
                                    le.k.right && ze()
                            }
                        }(t)
                    }, 150)
                }
            }).keyup(function(e) {
                se && (G = e.ctrlKey)
            }).on("click touchstart", C + " a", function(t) {
                t.preventDefault();
                var i = e(this).parent().index();
                nt(e(g).eq(i))
            }).on("click touchstart", I, function(t) {
                t.preventDefault();
                var i = e(this).closest(g).find(P);
                gt(i, i.find($).eq(e(this).closest("li").index()))
            }).on("click", ".fp-tooltip", function() {
                e(this).prev().trigger("click")
            }), e(g).on("click touchstart", B, function() {
                var t = e(this).closest(g);
                e(this).hasClass(N) ? le.m.left && Fe(t) : le.m.right && ze(t)
            }), q.normalScrollElements && (X.on("mouseenter touchstart", q.normalScrollElements, function() {
                He(!1)
            }), X.on("mouseleave touchend", q.normalScrollElements, function() {
                He(!0)
            })));
            var be = !1,
                we = 0,
                xe = 0,
                ke = 0,
                Se = 0,
                Te = 0,
                Ce = (new Date).getTime(),
                Ee = 0,
                Ae = 0,
                $e = ne
        }
        var _e;

        function Oe(t, i) {
            t || It(0), Nt("autoScrolling", t, i);
            var n = e(y);
            q.autoScrolling && !q.scrollBar ? (Y.css({
                overflow: "hidden",
                height: "100%"
            }), Pe(ye.recordHistory, "internal"), ie.css({
                "-ms-touch-action": "none",
                "touch-action": "none"
            }), n.length && It(n.position().top)) : (Y.css({
                overflow: "visible",
                height: "initial"
            }), Pe(!1, "internal"), ie.css({
                "-ms-touch-action": "",
                "touch-action": ""
            }), n.length && Y.scrollTop(n.position().top))
        }

        function Pe(e, t) {
            Nt("recordHistory", e, t)
        }

        function Le(e, t) {
            Nt("scrollingSpeed", e, t)
        }

        function De(e, t) {
            Nt("fitToSection", e, t)
        }

        function Me(e) {
            e ? (function() {
                var e, n = "";
                t.addEventListener ? e = "addEventListener" : (e = "attachEvent", n = "on");
                var s = "onwheel" in i.createElement("div") ? "wheel" : i.onmousewheel !== o ? "mousewheel" : "DOMMouseScroll";
                "DOMMouseScroll" == s ? i[e](n + "MozMousePixelScroll", et, !1) : i[e](n + s, et, !1)
            }(), ie.on("mousedown", ft).on("mouseup", mt)) : (i.addEventListener ? (i.removeEventListener("mousewheel", et, !1), i.removeEventListener("wheel", et, !1), i.removeEventListener("MozMousePixelScroll", et, !1)) : i.detachEvent("onmousewheel", et), ie.off("mousedown", ft).off("mouseup", mt))
        }

        function He(t, i) {
            void 0 !== i ? (i = i.replace(/ /g, "").split(","), e.each(i, function(e, i) {
                Bt(t, i, "m")
            })) : (Bt(t, "all", "m"), t ? (Me(!0), (ee || te) && (q.autoScrolling && U.off(ge.touchmove).on(ge.touchmove, Qe), e(r).off(ge.touchstart).on(ge.touchstart, Ke).off(ge.touchmove).on(ge.touchmove, Ze))) : (Me(!1), (ee || te) && (q.autoScrolling && U.off(ge.touchmove), e(r).off(ge.touchstart).off(ge.touchmove))))
        }

        function je(t, i) {
            void 0 !== i ? (i = i.replace(/ /g, "").split(","), e.each(i, function(e, i) {
                Bt(t, i, "k")
            })) : (Bt(t, "all", "k"), q.keyboardScrolling = t)
        }

        function Ie() {
            var t = e(y).prev(g);
            t.length || !q.loopTop && !q.continuousVertical || (t = e(g).last()), t.length && nt(t, null, !0)
        }

        function qe() {
            var t = e(y).next(g);
            t.length || !q.loopBottom && !q.continuousVertical || (t = e(g).first()), t.length && nt(t, null, !1)
        }

        function Be(e, t) {
            Le(0, "internal"), Ne(e, t), Le(ye.scrollingSpeed, "internal")
        }

        function Ne(e, t) {
            var i = $t(e);
            void 0 !== t ? _t(e, t) : 0 < i.length && nt(i)
        }

        function ze(e) {
            tt("right", e)
        }

        function Fe(e) {
            tt("left", e)
        }

        function We(t) {
            if (!ie.hasClass(c)) {
                oe = !0, ne = R.height(), e(g).each(function() {
                    var t = e(this).find(P),
                        i = e(this).find($);
                    q.verticalCentered && e(this).find(k).css("height", Et(e(this)) + "px"), e(this).css("height", ne + "px"), 1 < i.length && gt(t, t.find(_))
                }), q.scrollOverflow && ce.createScrollBarForAll();
                var i = e(y).index(g);
                i && Be(i + 1), oe = !1, e.isFunction(q.afterResize) && t && q.afterResize.call(ie), e.isFunction(q.afterReBuild) && !t && q.afterReBuild.call(ie)
            }
        }

        function Re(t) {
            var i = U.hasClass(a);
            t ? i || (Oe(!1, "internal"), De(!1, "internal"), e(C).hide(), U.addClass(a), e.isFunction(q.afterResponsive) && q.afterResponsive.call(ie, t)) : i && (Oe(ye.autoScrolling, "internal"), De(ye.autoScrolling, "internal"), e(C).show(), U.removeClass(a), e.isFunction(q.afterResponsive) && q.afterResponsive.call(ie, t))
        }

        function Xe() {
            var t, i = e(y);
            i.addClass(f), rt(i), at(i), q.scrollOverflow && q.scrollOverflowHandler.afterLoad(), (!(t = $t(pt().section)).length || t.length && t.index() === K.index()) && e.isFunction(q.afterLoad) && q.afterLoad.call(i, i.data("anchor"), i.index(g) + 1), e.isFunction(q.afterRender) && q.afterRender.call(ie)
        }

        function Ye() {
            var t, n, o, s, r, a;
            if (!q.autoScrolling || q.scrollBar) {
                var l = R.scrollTop(),
                    c = (o = we < (n = l) ? "down" : "up", Ee = we = n, o),
                    d = 0,
                    u = l + R.height() / 2,
                    p = U.height() - R.height() === l,
                    m = i.querySelectorAll(g);
                if (p) d = m.length - 1;
                else if (l)
                    for (var v = 0; v < m.length; ++v) m[v].offsetTop <= u && (d = v);
                else d = 0;
                if (s = c, r = e(y).position().top, a = r + R.height(), ("up" == s ? a >= R.scrollTop() + R.height() : r <= R.scrollTop()) && (e(y).hasClass(f) || e(y).addClass(f).siblings().removeClass(f)), !(t = e(m).eq(d)).hasClass(h)) {
                    be = !0;
                    var b, w, x = e(y),
                        k = x.index(g) + 1,
                        S = Tt(t),
                        T = t.data("anchor"),
                        C = t.index(g) + 1,
                        E = t.find(_);
                    E.length && (w = E.data("anchor"), b = E.index()), re && (t.addClass(h).siblings().removeClass(h), e.isFunction(q.onLeave) && q.onLeave.call(x, k, C, S), e.isFunction(q.afterLoad) && q.afterLoad.call(t, T, C), ct(x), rt(t), at(t), St(T, C - 1), q.anchors.length && (Q = T), Pt(b, w, T, C)), clearTimeout(pe), pe = setTimeout(function() {
                        be = !1
                    }, 100)
                }
                q.fitToSection && (clearTimeout(fe), fe = setTimeout(function() {
                    q.fitToSection && e(y).outerHeight() <= ne && Ue()
                }, q.fitToSectionDelay))
            }
        }

        function Ue() {
            re && (oe = !0, nt(e(y)), oe = !1)
        }

        function Ve(t) {
            if (le.m[t]) {
                var i = "down" === t ? qe : Ie;
                if (q.scrollOverflow) {
                    var n = q.scrollOverflowHandler.scrollable(e(y)),
                        o = "down" === t ? "bottom" : "top";
                    if (0 < n.length) {
                        if (!q.scrollOverflowHandler.isScrolled(o, n)) return !0;
                        i()
                    } else i()
                } else i()
            }
        }

        function Qe(e) {
            var t = e.originalEvent;
            q.autoScrolling && Ge(t) && e.preventDefault()
        }

        function Ze(t) {
            var i = t.originalEvent,
                o = e(i.target).closest(g);
            if (Ge(i)) {
                q.autoScrolling && t.preventDefault();
                var s = Ht(i);
                Se = s.y, Te = s.x, o.find(P).length && n.abs(ke - Te) > n.abs(xe - Se) ? !J && n.abs(ke - Te) > R.outerWidth() / 100 * q.touchSensitivity && (Te < ke ? le.m.right && ze(o) : le.m.left && Fe(o)) : q.autoScrolling && re && n.abs(xe - Se) > R.height() / 100 * q.touchSensitivity && (Se < xe ? Ve("down") : xe < Se && Ve("up"))
            }
        }

        function Ge(e) {
            return void 0 === e.pointerType || "mouse" != e.pointerType
        }

        function Ke(e) {
            var t = e.originalEvent;
            if (q.fitToSection && Y.stop(), Ge(t)) {
                var i = Ht(t);
                xe = i.y, ke = i.x
            }
        }

        function Je(e, t) {
            for (var i = 0, o = e.slice(n.max(e.length - t, 1)), s = 0; s < o.length; s++) i += o[s];
            return n.ceil(i / t)
        }

        function et(i) {
            var o = (new Date).getTime(),
                s = e(m).hasClass(T);
            if (q.autoScrolling && !G && !s) {
                var r = (i = i || t.event).wheelDelta || -i.deltaY || -i.detail,
                    a = n.max(-1, n.min(1, r)),
                    l = void 0 !== i.wheelDeltaX || void 0 !== i.deltaX,
                    c = n.abs(i.wheelDeltaX) < n.abs(i.wheelDelta) || n.abs(i.deltaX) < n.abs(i.deltaY) || !l;
                149 < ae.length && ae.shift(), ae.push(n.abs(r)), q.scrollBar && (i.preventDefault ? i.preventDefault() : i.returnValue = !1);
                var d = o - Ce;
                if (Ce = o, 200 < d && (ae = []), re) {
                    var u = Je(ae, 10);
                    Je(ae, 70) <= u && c && Ve(a < 0 ? "down" : "up")
                }
                return !1
            }
            q.fitToSection && Y.stop()
        }

        function tt(t, i) {
            var n = (void 0 === i ? e(y) : i).find(P),
                o = n.find($).length;
            if (!(!n.length || J || o < 2)) {
                var s = n.find(_),
                    r = null;
                if (!(r = "left" === t ? s.prev($) : s.next($)).length) {
                    if (!q.loopHorizontal) return;
                    r = "left" === t ? s.siblings(":last") : s.siblings(":first")
                }
                J = !0, gt(n, r, t)
            }
        }

        function it() {
            e(_).each(function() {
                jt(e(this), "internal")
            })
        }

        function nt(t, i, o) {
            if (void 0 !== t) {
                var s, a, l, c, d, u, p, f, m = {
                    element: t,
                    callback: i,
                    isMovementUp: o,
                    dtop: (a = (s = t).position(), l = a.top, c = a.top > Ee, d = l - ne + s.outerHeight(), u = q.bigSectionsDestination, s.outerHeight() > ne ? (c || u) && "bottom" !== u || (l = d) : (c || oe && s.is(":last-child")) && (l = d), Ee = l),
                    yMovement: Tt(t),
                    anchorLink: t.data("anchor"),
                    sectionIndex: t.index(g),
                    activeSlide: t.find(_),
                    activeSection: e(y),
                    leavingSection: e(y).index(g) + 1,
                    localIsResizing: oe
                };
                m.activeSection.is(t) && !oe || q.scrollBar && R.scrollTop() === m.dtop && !t.hasClass(S) || (m.activeSlide.length && (p = m.activeSlide.data("anchor"), f = m.activeSlide.index()), e.isFunction(q.onLeave) && !m.localIsResizing && !1 === q.onLeave.call(m.activeSection, m.leavingSection, m.sectionIndex + 1, m.yMovement) || (q.autoScrolling && q.continuousVertical && void 0 !== m.isMovementUp && (!m.isMovementUp && "up" == m.yMovement || m.isMovementUp && "down" == m.yMovement) && ((v = m).isMovementUp ? e(y).before(v.activeSection.nextAll(g)) : e(y).after(v.activeSection.prevAll(g).get().reverse()), It(e(y).position().top), it(), v.wrapAroundElements = v.activeSection, v.dtop = v.element.position().top, v.yMovement = Tt(v.element), v.leavingSection = v.activeSection.index(g) + 1, v.sectionIndex = v.element.index(g), m = v), m.localIsResizing || ct(m.activeSection), q.scrollOverflow && q.scrollOverflowHandler.beforeLeave(), t.addClass(h).siblings().removeClass(h), rt(t), q.scrollOverflow && q.scrollOverflowHandler.onLeave(), re = !1, Pt(f, p, m.anchorLink, m.sectionIndex), function(t) {
                    if (q.css3 && q.autoScrolling && !q.scrollBar) {
                        At("translate3d(0px, -" + n.round(t.dtop) + "px, 0px)", !0), q.scrollingSpeed ? (clearTimeout(ue), ue = setTimeout(function() {
                            ot(t)
                        }, q.scrollingSpeed)) : ot(t)
                    } else {
                        var i = (o = t, s = {}, q.autoScrolling && !q.scrollBar ? (s.options = {
                            top: -o.dtop
                        }, s.element = r) : (s.options = {
                            scrollTop: o.dtop
                        }, s.element = "html, body"), s);
                        e(i.element).animate(i.options, q.scrollingSpeed, q.easing).promise().done(function() {
                            q.scrollBar ? setTimeout(function() {
                                ot(t)
                            }, 30) : ot(t)
                        })
                    }
                    var o, s
                }(m), Q = m.anchorLink, St(m.anchorLink, m.sectionIndex)))
            }
            var v
        }

        function ot(t) {
            var i;
            (i = t).wrapAroundElements && i.wrapAroundElements.length && (i.isMovementUp ? e(b).before(i.wrapAroundElements) : e(w).after(i.wrapAroundElements), It(e(y).position().top), it()), e.isFunction(q.afterLoad) && !t.localIsResizing && q.afterLoad.call(t.element, t.anchorLink, t.sectionIndex + 1), q.scrollOverflow && q.scrollOverflowHandler.afterLoad(), t.localIsResizing || at(t.element), t.element.addClass(f).siblings().removeClass(f), re = !0, e.isFunction(t.callback) && t.callback.call(this)
        }

        function st(e, t) {
            e.attr(t, e.data(t)).removeAttr("data-" + t)
        }

        function rt(t) {
            var i;
            q.lazyLoading && dt(t).find("img[data-src], img[data-srcset], source[data-src], video[data-src], audio[data-src], iframe[data-src]").each(function() {
                if (i = e(this), e.each(["src", "srcset"], function(e, t) {
                        var n = i.attr("data-" + t);
                        void 0 !== n && n && st(i, t)
                    }), i.is("source")) {
                    var t = i.closest("video").length ? "video" : "audio";
                    i.closest(t).get(0).load()
                }
            })
        }

        function at(t) {
            var i = dt(t);
            i.find("video, audio").each(function() {
                var t = e(this).get(0);
                t.hasAttribute("data-autoplay") && "function" == typeof t.play && t.play()
            }), i.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var t = e(this).get(0);
                t.hasAttribute("data-autoplay") && lt(t), t.onload = function() {
                    t.hasAttribute("data-autoplay") && lt(t)
                }
            })
        }

        function lt(e) {
            e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
        }

        function ct(t) {
            var i = dt(t);
            i.find("video, audio").each(function() {
                var t = e(this).get(0);
                t.hasAttribute("data-keepplaying") || "function" != typeof t.pause || t.pause()
            }), i.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var t = e(this).get(0);
                /youtube\.com\/embed\//.test(e(this).attr("src")) && !t.hasAttribute("data-keepplaying") && e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
            })
        }

        function dt(t) {
            var i = t.find(_);
            return i.length && (t = e(i)), t
        }

        function ut() {
            var e = pt(),
                t = e.section,
                i = e.slide;
            t && (q.animateAnchor ? _t(t, i) : Be(t, i))
        }

        function ht() {
            if (!be && !q.lockAnchors) {
                var e = pt(),
                    t = e.section,
                    i = e.slide,
                    n = void 0 === Q,
                    o = void 0 === Q && void 0 === i && !J;
                t.length && (t && t !== Q && !n || o || !J && Z != i) && _t(t, i)
            }
        }

        function pt() {
            var e = t.location.hash,
                i = e.replace("#", "").split("/"),
                n = -1 < e.indexOf("#/");
            return {
                section: n ? "/" + i[1] : decodeURIComponent(i[0]),
                slide: n ? decodeURIComponent(i[2]) : decodeURIComponent(i[1])
            }
        }

        function ft(e) {
            2 == e.which && (Ae = e.pageY, ie.on("mousemove", vt))
        }

        function mt(e) {
            2 == e.which && ie.off("mousemove")
        }

        function vt(e) {
            re && (e.pageY < Ae && le.m.up ? Ie() : e.pageY > Ae && le.m.down && qe()), Ae = e.pageY
        }

        function gt(t, i, o) {
            var s, r, a = t.closest(g),
                l = {
                    slides: t,
                    destiny: i,
                    direction: o,
                    destinyPos: i.position(),
                    slideIndex: i.index(),
                    section: a,
                    sectionIndex: a.index(g),
                    anchorLink: a.data("anchor"),
                    slidesNav: a.find(j),
                    slideAnchor: Dt(i),
                    prevSlide: a.find(_),
                    prevSlideIndex: a.find(_).index(),
                    localIsResizing: oe
                };
            l.xMovement = (s = l.prevSlideIndex, r = l.slideIndex, s == r ? "none" : r < s ? "left" : "right"), l.localIsResizing || (re = !1), q.onSlideLeave && !l.localIsResizing && "none" !== l.xMovement && e.isFunction(q.onSlideLeave) && !1 === q.onSlideLeave.call(l.prevSlide, l.anchorLink, l.sectionIndex + 1, l.prevSlideIndex, l.direction, l.slideIndex) ? J = !1 : (i.addClass(h).siblings().removeClass(h), l.localIsResizing || (ct(l.prevSlide), rt(i)), !q.loopHorizontal && q.controlArrows && (a.find(F).toggle(0 !== l.slideIndex), a.find(W).toggle(!i.is(":last-child"))), a.hasClass(h) && !l.localIsResizing && Pt(l.slideIndex, l.slideAnchor, l.anchorLink, l.sectionIndex), function(e, t, i) {
                var o = t.destinyPos;
                if (q.css3) {
                    var s = "translate3d(-" + n.round(o.left) + "px, 0px, 0px)";
                    xt(e.find(D)).css(qt(s)), he = setTimeout(function() {
                        yt(t)
                    }, q.scrollingSpeed, q.easing)
                } else e.animate({
                    scrollLeft: n.round(o.left)
                }, q.scrollingSpeed, q.easing, function() {
                    yt(t)
                })
            }(t, l))
        }

        function yt(t) {
            var i, n;
            i = t.slidesNav, n = t.slideIndex, i.find(p).removeClass(h), i.find("li").eq(n).find("a").addClass(h), t.localIsResizing || (e.isFunction(q.afterSlideLoad) && q.afterSlideLoad.call(t.destiny, t.anchorLink, t.sectionIndex + 1, t.slideAnchor, t.slideIndex), re = !0, at(t.destiny)), J = !1
        }

        function bt() {
            if (wt(), ee) {
                var t = e(i.activeElement);
                if (!t.is("textarea") && !t.is("input") && !t.is("select")) {
                    var o = R.height();
                    n.abs(o - $e) > 20 * n.max($e, o) / 100 && (We(!0), $e = o)
                }
            } else clearTimeout(de), de = setTimeout(function() {
                We(!0)
            }, 350)
        }

        function wt() {
            var e = q.responsive || q.responsiveWidth,
                t = q.responsiveHeight,
                i = e && R.outerWidth() < e,
                n = t && R.height() < t;
            e && t ? Re(i || n) : e ? Re(i) : t && Re(n)
        }

        function xt(e) {
            var t = "all " + q.scrollingSpeed + "ms " + q.easingcss3;
            return e.removeClass(l), e.css({
                "-webkit-transition": t,
                transition: t
            })
        }

        function kt(e) {
            return e.addClass(l)
        }

        function St(t, i) {
            var n, o, s;
            n = t, q.menu && (e(q.menu).find(p).removeClass(h), e(q.menu).find('[data-menuanchor="' + n + '"]').addClass(h)), o = t, s = i, q.navigation && (e(C).find(p).removeClass(h), o ? e(C).find('a[href="#' + o + '"]').addClass(h) : e(C).find("li").eq(s).find("a").addClass(h))
        }

        function Tt(t) {
            var i = e(y).index(g),
                n = t.index(g);
            return i == n ? "none" : n < i ? "up" : "down"
        }

        function Ct(e) {
            e.hasClass(M) || e.addClass(M).wrapInner('<div class="' + x + '" style="height:' + Et(e) + 'px;" />')
        }

        function Et(e) {
            var t = ne;
            if (q.paddingTop || q.paddingBottom) {
                var i = e;
                i.hasClass(v) || (i = e.closest(g));
                var n = parseInt(i.css("padding-top")) + parseInt(i.css("padding-bottom"));
                t = ne - n
            }
            return t
        }

        function At(e, t) {
            t ? xt(ie) : kt(ie), ie.css(qt(e)), setTimeout(function() {
                ie.removeClass(l)
            }, 10)
        }

        function $t(t) {
            if (!t) return [];
            var i = ie.find(g + '[data-anchor="' + t + '"]');
            return i.length || (i = e(g).eq(t - 1)), i
        }

        function _t(e, t) {
            var i = $t(e);
            i.length && (void 0 === t && (t = 0), e === Q || i.hasClass(h) ? Ot(i, t) : nt(i, function() {
                Ot(i, t)
            }))
        }

        function Ot(e, t) {
            if (void 0 !== t) {
                var i = e.find(P),
                    n = (o = t, (r = (s = e.find(P)).find($ + '[data-anchor="' + o + '"]')).length || (r = s.find($).eq(o)), r);
                n.length && gt(i, n)
            }
            var o, s, r
        }

        function Pt(e, t, i, n) {
            var o = "";
            q.anchors.length && !q.lockAnchors && (e ? (void 0 !== i && (o = i), void 0 === t && (t = e), Lt(o + "/" + (Z = t))) : (void 0 !== e && (Z = t), Lt(i))), Mt()
        }

        function Lt(e) {
            if (q.recordHistory) location.hash = e;
            else if (ee || te) t.history.replaceState(o, o, "#" + e);
            else {
                var i = t.location.href.split("#")[0];
                t.location.replace(i + "#" + e)
            }
        }

        function Dt(e) {
            var t = e.data("anchor"),
                i = e.index();
            return void 0 === t && (t = i), t
        }

        function Mt() {
            var t = e(y),
                i = t.find(_),
                n = Dt(t),
                o = Dt(i),
                s = String(n);
            i.length && (s = s + "-" + o), s = s.replace("/", "-").replace("#", "");
            var r = new RegExp("\\b\\s?" + u + "-[^\\s]+\\b", "g");
            U[0].className = U[0].className.replace(r, ""), U.addClass(u + "-" + s)
        }

        function Ht(e) {
            var t = [];
            return t.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, te && Ge(e) && q.scrollBar && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t
        }

        function jt(e, t) {
            Le(0, "internal"), void 0 !== t && (oe = !0), gt(e.closest(P), e), void 0 !== t && (oe = !1), Le(ye.scrollingSpeed, "internal")
        }

        function It(e) {
            var t = n.round(e);
            q.css3 && q.autoScrolling && !q.scrollBar ? At("translate3d(0px, -" + t + "px, 0px)", !1) : q.autoScrolling && !q.scrollBar ? ie.css("top", -t) : Y.scrollTop(t)
        }

        function qt(e) {
            return {
                "-webkit-transform": e,
                "-moz-transform": e,
                "-ms-transform": e,
                transform: e
            }
        }

        function Bt(t, i, n) {
            "all" !== i ? le[n][i] = t : e.each(Object.keys(le[n]), function(e, i) {
                le[n][i] = t
            })
        }

        function Nt(e, t, i) {
            q[e] = t, "internal" !== i && (ye[e] = t)
        }

        function zt() {
            e("html").hasClass(d) ? Ft("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (q.continuousVertical && (q.loopTop || q.loopBottom) && (q.continuousVertical = !1, Ft("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), q.scrollBar && q.scrollOverflow && Ft("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), !q.continuousVertical || !q.scrollBar && q.autoScrolling || (q.continuousVertical = !1, Ft("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), q.scrollOverflow && !q.scrollOverflowHandler && (q.scrollOverflow = !1, Ft("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")), e.each(["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides", "offsetSections", "dragAndMove", "scrollOverflowReset", "parallax"], function(e, t) {
                q[t] && Ft("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + t)
            }), e.each(q.anchors, function(t, i) {
                var n = X.find("[name]").filter(function() {
                        return e(this).attr("name") && e(this).attr("name").toLowerCase() == i.toLowerCase()
                    }),
                    o = X.find("[id]").filter(function() {
                        return e(this).attr("id") && e(this).attr("id").toLowerCase() == i.toLowerCase()
                    });
                (o.length || n.length) && (Ft("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), o.length && Ft("error", '"' + i + '" is is being used by another element `id` property'), n.length && Ft("error", '"' + i + '" is is being used by another element `name` property'))
            }))
        }

        function Ft(e, t) {
            console && console[e] && console[e]("fullPage: " + t)
        }
    }
}),
function(e, t, i) {
    var n = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(t) {
            e.setTimeout(t, 1e3 / 60)
        },
        o = function() {
            var n = {},
                o = t.createElement("div").style,
                s = function() {
                    for (var e = ["t", "webkitT", "MozT", "msT", "OT"], t = 0, i = e.length; t < i; t++)
                        if (e[t] + "ransform" in o) return e[t].substr(0, e[t].length - 1);
                    return !1
                }();

            function r(e) {
                return !1 !== s && ("" === s ? e : s + e.charAt(0).toUpperCase() + e.substr(1))
            }
            n.getTime = Date.now || function() {
                return (new Date).getTime()
            }, n.extend = function(e, t) {
                for (var i in t) e[i] = t[i]
            }, n.addEvent = function(e, t, i, n) {
                e.addEventListener(t, i, !!n)
            }, n.removeEvent = function(e, t, i, n) {
                e.removeEventListener(t, i, !!n)
            }, n.prefixPointerEvent = function(t) {
                return e.MSPointerEvent ? "MSPointer" + t.charAt(7).toUpperCase() + t.substr(8) : t
            }, n.momentum = function(e, t, n, o, s, r) {
                var a, l, c = e - t,
                    d = i.abs(c) / n;
                return l = d / (r = void 0 === r ? 6e-4 : r), (a = e + d * d / (2 * r) * (c < 0 ? -1 : 1)) < o ? (a = s ? o - s / 2.5 * (d / 8) : o, l = (c = i.abs(a - e)) / d) : 0 < a && (a = s ? s / 2.5 * (d / 8) : 0, l = (c = i.abs(e) + a) / d), {
                    destination: i.round(a),
                    duration: l
                }
            };
            var a = r("transform");
            return n.extend(n, {
                hasTransform: !1 !== a,
                hasPerspective: r("perspective") in o,
                hasTouch: "ontouchstart" in e,
                hasPointer: !(!e.PointerEvent && !e.MSPointerEvent),
                hasTransition: r("transition") in o
            }), n.isBadAndroid = function() {
                var t = e.navigator.appVersion;
                if (/Android/.test(t) && !/Chrome\/\d/.test(t)) {
                    var i = t.match(/Safari\/(\d+.\d)/);
                    return !(i && "object" == typeof i && 2 <= i.length) || parseFloat(i[1]) < 535.19
                }
                return !1
            }(), n.extend(n.style = {}, {
                transform: a,
                transitionTimingFunction: r("transitionTimingFunction"),
                transitionDuration: r("transitionDuration"),
                transitionDelay: r("transitionDelay"),
                transformOrigin: r("transformOrigin")
            }), n.hasClass = function(e, t) {
                return new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
            }, n.addClass = function(e, t) {
                if (!n.hasClass(e, t)) {
                    var i = e.className.split(" ");
                    i.push(t), e.className = i.join(" ")
                }
            }, n.removeClass = function(e, t) {
                if (n.hasClass(e, t)) {
                    var i = new RegExp("(^|\\s)" + t + "(\\s|$)", "g");
                    e.className = e.className.replace(i, " ")
                }
            }, n.offset = function(e) {
                for (var t = -e.offsetLeft, i = -e.offsetTop; e = e.offsetParent;) t -= e.offsetLeft, i -= e.offsetTop;
                return {
                    left: t,
                    top: i
                }
            }, n.preventDefaultException = function(e, t) {
                for (var i in t)
                    if (t[i].test(e[i])) return !0;
                return !1
            }, n.extend(n.eventType = {}, {
                touchstart: 1,
                touchmove: 1,
                touchend: 1,
                mousedown: 2,
                mousemove: 2,
                mouseup: 2,
                pointerdown: 3,
                pointermove: 3,
                pointerup: 3,
                MSPointerDown: 3,
                MSPointerMove: 3,
                MSPointerUp: 3
            }), n.extend(n.ease = {}, {
                quadratic: {
                    style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    fn: function(e) {
                        return e * (2 - e)
                    }
                },
                circular: {
                    style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                    fn: function(e) {
                        return i.sqrt(1 - --e * e)
                    }
                },
                back: {
                    style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    fn: function(e) {
                        return (e -= 1) * e * (5 * e + 4) + 1
                    }
                },
                bounce: {
                    style: "",
                    fn: function(e) {
                        return (e /= 1) < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                    }
                },
                elastic: {
                    style: "",
                    fn: function(e) {
                        return 0 === e ? 0 : 1 == e ? 1 : .4 * i.pow(2, -10 * e) * i.sin((e - .055) * (2 * i.PI) / .22) + 1
                    }
                }
            }), n.tap = function(e, i) {
                var n = t.createEvent("Event");
                n.initEvent(i, !0, !0), n.pageX = e.pageX, n.pageY = e.pageY, e.target.dispatchEvent(n)
            }, n.click = function(i) {
                var n, o = i.target;
                /(SELECT|INPUT|TEXTAREA)/i.test(o.tagName) || ((n = t.createEvent(e.MouseEvent ? "MouseEvents" : "Event")).initEvent("click", !0, !0), n._constructed = !0, o.dispatchEvent(n))
            }, n
        }();

    function s(i, n) {
        for (var s in this.wrapper = "string" == typeof i ? t.querySelector(i) : i, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
                resizeScrollbars: !0,
                mouseWheelSpeed: 20,
                snapThreshold: .334,
                disablePointer: !o.hasPointer,
                disableTouch: o.hasPointer || !o.hasTouch,
                disableMouse: o.hasPointer || o.hasTouch,
                startX: 0,
                startY: 0,
                scrollY: !0,
                directionLockThreshold: 5,
                momentum: !0,
                bounce: !0,
                bounceTime: 600,
                bounceEasing: "",
                preventDefault: !0,
                preventDefaultException: {
                    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|LABEL)$/
                },
                HWCompositing: !0,
                useTransition: !0,
                useTransform: !0,
                bindToWrapper: void 0 === e.onmousedown
            }, n) this.options[s] = n[s];
        this.translateZ = this.options.HWCompositing && o.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = o.hasTransition && this.options.useTransition, this.options.useTransform = o.hasTransform && this.options.useTransform, this.options.eventPassthrough = !0 === this.options.eventPassthrough ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY, this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? o.ease[this.options.bounceEasing] || o.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, !0 === this.options.tap && (this.options.tap = "tap"), this.options.useTransition || this.options.useTransform || /relative|absolute/i.test(this.scrollerStyle.position) || (this.scrollerStyle.position = "relative"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
    }

    function r(e, i, n) {
        var o = t.createElement("div"),
            s = t.createElement("div");
        return !0 === n && (o.style.cssText = "position:absolute;z-index:9999", s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), s.className = "iScrollIndicator", "h" == e ? (!0 === n && (o.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", s.style.height = "100%"), o.className = "iScrollHorizontalScrollbar") : (!0 === n && (o.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", s.style.width = "100%"), o.className = "iScrollVerticalScrollbar"), o.style.cssText += ";overflow:hidden", i || (o.style.pointerEvents = "none"), o.appendChild(s), o
    }

    function a(i, s) {
        for (var r in this.wrapper = "string" == typeof s.el ? t.querySelector(s.el) : s.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = i, this.options = {
                listenX: !0,
                listenY: !0,
                interactive: !1,
                resize: !0,
                defaultScrollbars: !1,
                shrink: !1,
                fade: !1,
                speedRatioX: 0,
                speedRatioY: 0
            }, s) this.options[r] = s[r];
        if (this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (o.addEvent(this.indicator, "touchstart", this), o.addEvent(e, "touchend", this)), this.options.disablePointer || (o.addEvent(this.indicator, o.prefixPointerEvent("pointerdown"), this), o.addEvent(e, o.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (o.addEvent(this.indicator, "mousedown", this), o.addEvent(e, "mouseup", this))), this.options.fade) {
            this.wrapperStyle[o.style.transform] = this.scroller.translateZ;
            var a = o.style.transitionDuration;
            if (!a) return;
            this.wrapperStyle[a] = o.isBadAndroid ? "0.0001ms" : "0ms";
            var l = this;
            o.isBadAndroid && n(function() {
                "0.0001ms" === l.wrapperStyle[a] && (l.wrapperStyle[a] = "0s")
            }), this.wrapperStyle.opacity = "0"
        }
    }
    s.prototype = {
        version: "5.2.0",
        _init: function() {
            this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys()
        },
        destroy: function() {
            this._initEvents(!0), clearTimeout(this.resizeTimeout), this.resizeTimeout = null, this._execEvent("destroy")
        },
        _transitionEnd: function(e) {
            e.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
        },
        _start: function(e) {
            if ((1 == o.eventType[e.type] || 0 === (e.which ? e.button : e.button < 2 ? 0 : 4 == e.button ? 1 : 2)) && this.enabled && (!this.initiated || o.eventType[e.type] === this.initiated)) {
                !this.options.preventDefault || o.isBadAndroid || o.preventDefaultException(e.target, this.options.preventDefaultException) || e.preventDefault();
                var t, n = e.touches ? e.touches[0] : e;
                this.initiated = o.eventType[e.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this.startTime = o.getTime(), this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, t = this.getComputedPosition(), this._translate(i.round(t.x), i.round(t.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = n.pageX, this.pointY = n.pageY, this._execEvent("beforeScrollStart")
            }
        },
        _move: function(e) {
            if (this.enabled && o.eventType[e.type] === this.initiated) {
                this.options.preventDefault && e.preventDefault();
                var t, n, s, r, a = e.touches ? e.touches[0] : e,
                    l = a.pageX - this.pointX,
                    c = a.pageY - this.pointY,
                    d = o.getTime();
                if (this.pointX = a.pageX, this.pointY = a.pageY, this.distX += l, this.distY += c, s = i.abs(this.distX), r = i.abs(this.distY), !(300 < d - this.endTime && s < 10 && r < 10)) {
                    if (this.directionLocked || this.options.freeScroll || (s > r + this.options.directionLockThreshold ? this.directionLocked = "h" : r >= s + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" == this.directionLocked) {
                        if ("vertical" == this.options.eventPassthrough) e.preventDefault();
                        else if ("horizontal" == this.options.eventPassthrough) return void(this.initiated = !1);
                        c = 0
                    } else if ("v" == this.directionLocked) {
                        if ("horizontal" == this.options.eventPassthrough) e.preventDefault();
                        else if ("vertical" == this.options.eventPassthrough) return void(this.initiated = !1);
                        l = 0
                    }
                    l = this.hasHorizontalScroll ? l : 0, c = this.hasVerticalScroll ? c : 0, t = this.x + l, n = this.y + c, (0 < t || t < this.maxScrollX) && (t = this.options.bounce ? this.x + l / 3 : 0 < t ? 0 : this.maxScrollX), (0 < n || n < this.maxScrollY) && (n = this.options.bounce ? this.y + c / 3 : 0 < n ? 0 : this.maxScrollY), this.directionX = 0 < l ? -1 : l < 0 ? 1 : 0, this.directionY = 0 < c ? -1 : c < 0 ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(t, n), 300 < d - this.startTime && (this.startTime = d, this.startX = this.x, this.startY = this.y)
                }
            }
        },
        _end: function(e) {
            if (this.enabled && o.eventType[e.type] === this.initiated) {
                this.options.preventDefault && !o.preventDefaultException(e.target, this.options.preventDefaultException) && e.preventDefault(), e.changedTouches && e.changedTouches[0];
                var t, n, s = o.getTime() - this.startTime,
                    r = i.round(this.x),
                    a = i.round(this.y),
                    l = i.abs(r - this.startX),
                    c = i.abs(a - this.startY),
                    d = 0,
                    u = "";
                if (this.isInTransition = 0, this.initiated = 0, this.endTime = o.getTime(), !this.resetPosition(this.options.bounceTime)) {
                    if (this.scrollTo(r, a), !this.moved) return this.options.tap && o.tap(e, this.options.tap), this.options.click && o.click(e), void this._execEvent("scrollCancel");
                    if (this._events.flick && s < 200 && l < 100 && c < 100) this._execEvent("flick");
                    else {
                        if (this.options.momentum && s < 300 && (t = this.hasHorizontalScroll ? o.momentum(this.x, this.startX, s, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                                destination: r,
                                duration: 0
                            }, n = this.hasVerticalScroll ? o.momentum(this.y, this.startY, s, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                                destination: a,
                                duration: 0
                            }, r = t.destination, a = n.destination, d = i.max(t.duration, n.duration), this.isInTransition = 1), this.options.snap) {
                            var h = this._nearestSnap(r, a);
                            this.currentPage = h, d = this.options.snapSpeed || i.max(i.max(i.min(i.abs(r - h.x), 1e3), i.min(i.abs(a - h.y), 1e3)), 300), r = h.x, a = h.y, this.directionX = 0, this.directionY = 0, u = this.options.bounceEasing
                        }
                        if (r != this.x || a != this.y) return (0 < r || r < this.maxScrollX || 0 < a || a < this.maxScrollY) && (u = o.ease.quadratic), void this.scrollTo(r, a, d, u);
                        this._execEvent("scrollEnd")
                    }
                }
            }
        },
        _resize: function() {
            var e = this;
            clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
                e.refresh()
            }, this.options.resizePolling)
        },
        resetPosition: function(e) {
            var t = this.x,
                i = this.y;
            return e = e || 0, !this.hasHorizontalScroll || 0 < this.x ? t = 0 : this.x < this.maxScrollX && (t = this.maxScrollX), !this.hasVerticalScroll || 0 < this.y ? i = 0 : this.y < this.maxScrollY && (i = this.maxScrollY), (t != this.x || i != this.y) && (this.scrollTo(t, i, e, this.options.bounceEasing), !0)
        },
        disable: function() {
            this.enabled = !1
        },
        enable: function() {
            this.enabled = !0
        },
        refresh: function() {
            this.wrapper.offsetHeight, this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = o.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
        },
        on: function(e, t) {
            this._events[e] || (this._events[e] = []), this._events[e].push(t)
        },
        off: function(e, t) {
            if (this._events[e]) {
                var i = this._events[e].indexOf(t); - 1 < i && this._events[e].splice(i, 1)
            }
        },
        _execEvent: function(e) {
            if (this._events[e]) {
                var t = 0,
                    i = this._events[e].length;
                if (i)
                    for (; t < i; t++) this._events[e][t].apply(this, [].slice.call(arguments, 1))
            }
        },
        scrollBy: function(e, t, i, n) {
            e = this.x + e, t = this.y + t, i = i || 0, this.scrollTo(e, t, i, n)
        },
        scrollTo: function(e, t, i, n) {
            n = n || o.ease.circular, this.isInTransition = this.options.useTransition && 0 < i;
            var s = this.options.useTransition && n.style;
            !i || s ? (s && (this._transitionTimingFunction(n.style), this._transitionTime(i)), this._translate(e, t)) : this._animate(e, t, i, n.fn)
        },
        scrollToElement: function(e, t, n, s, r) {
            if (e = e.nodeType ? e : this.scroller.querySelector(e)) {
                var a = o.offset(e);
                a.left -= this.wrapperOffset.left, a.top -= this.wrapperOffset.top, !0 === n && (n = i.round(e.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), !0 === s && (s = i.round(e.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), a.left -= n || 0, a.top -= s || 0, a.left = 0 < a.left ? 0 : a.left < this.maxScrollX ? this.maxScrollX : a.left, a.top = 0 < a.top ? 0 : a.top < this.maxScrollY ? this.maxScrollY : a.top, t = null == t || "auto" === t ? i.max(i.abs(this.x - a.left), i.abs(this.y - a.top)) : t, this.scrollTo(a.left, a.top, t, r)
            }
        },
        _transitionTime: function(e) {
            if (this.options.useTransition) {
                e = e || 0;
                var t = o.style.transitionDuration;
                if (t) {
                    if (this.scrollerStyle[t] = e + "ms", !e && o.isBadAndroid) {
                        this.scrollerStyle[t] = "0.0001ms";
                        var i = this;
                        n(function() {
                            "0.0001ms" === i.scrollerStyle[t] && (i.scrollerStyle[t] = "0s")
                        })
                    }
                    if (this.indicators)
                        for (var s = this.indicators.length; s--;) this.indicators[s].transitionTime(e)
                }
            }
        },
        _transitionTimingFunction: function(e) {
            if (this.scrollerStyle[o.style.transitionTimingFunction] = e, this.indicators)
                for (var t = this.indicators.length; t--;) this.indicators[t].transitionTimingFunction(e)
        },
        _translate: function(e, t) {
            if (this.options.useTransform ? this.scrollerStyle[o.style.transform] = "translate(" + e + "px," + t + "px)" + this.translateZ : (e = i.round(e), t = i.round(t), this.scrollerStyle.left = e + "px", this.scrollerStyle.top = t + "px"), this.x = e, this.y = t, this.indicators)
                for (var n = this.indicators.length; n--;) this.indicators[n].updatePosition()
        },
        _initEvents: function(t) {
            var i = t ? o.removeEvent : o.addEvent,
                n = this.options.bindToWrapper ? this.wrapper : e;
            i(e, "orientationchange", this), i(e, "resize", this), this.options.click && i(this.wrapper, "click", this, !0), this.options.disableMouse || (i(this.wrapper, "mousedown", this), i(n, "mousemove", this), i(n, "mousecancel", this), i(n, "mouseup", this)), o.hasPointer && !this.options.disablePointer && (i(this.wrapper, o.prefixPointerEvent("pointerdown"), this), i(n, o.prefixPointerEvent("pointermove"), this), i(n, o.prefixPointerEvent("pointercancel"), this), i(n, o.prefixPointerEvent("pointerup"), this)), o.hasTouch && !this.options.disableTouch && (i(this.wrapper, "touchstart", this), i(n, "touchmove", this), i(n, "touchcancel", this), i(n, "touchend", this)), i(this.scroller, "transitionend", this), i(this.scroller, "webkitTransitionEnd", this), i(this.scroller, "oTransitionEnd", this), i(this.scroller, "MSTransitionEnd", this)
        },
        getComputedPosition: function() {
            var t, i, n = e.getComputedStyle(this.scroller, null);
            return this.options.useTransform ? (t = +((n = n[o.style.transform].split(")")[0].split(", "))[12] || n[4]), i = +(n[13] || n[5])) : (t = +n.left.replace(/[^-\d.]/g, ""), i = +n.top.replace(/[^-\d.]/g, "")), {
                x: t,
                y: i
            }
        },
        _initIndicators: function() {
            var e, t = this.options.interactiveScrollbars,
                i = "string" != typeof this.options.scrollbars,
                n = [],
                o = this;
            this.indicators = [], this.options.scrollbars && (this.options.scrollY && (e = {
                el: r("v", t, this.options.scrollbars),
                interactive: t,
                defaultScrollbars: !0,
                customStyle: i,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenX: !1
            }, this.wrapper.appendChild(e.el), n.push(e)), this.options.scrollX && (e = {
                el: r("h", t, this.options.scrollbars),
                interactive: t,
                defaultScrollbars: !0,
                customStyle: i,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenY: !1
            }, this.wrapper.appendChild(e.el), n.push(e))), this.options.indicators && (n = n.concat(this.options.indicators));
            for (var s = n.length; s--;) this.indicators.push(new a(this, n[s]));

            function l(e) {
                if (o.indicators)
                    for (var t = o.indicators.length; t--;) e.call(o.indicators[t])
            }
            this.options.fadeScrollbars && (this.on("scrollEnd", function() {
                l(function() {
                    this.fade()
                })
            }), this.on("scrollCancel", function() {
                l(function() {
                    this.fade()
                })
            }), this.on("scrollStart", function() {
                l(function() {
                    this.fade(1)
                })
            }), this.on("beforeScrollStart", function() {
                l(function() {
                    this.fade(1, !0)
                })
            })), this.on("refresh", function() {
                l(function() {
                    this.refresh()
                })
            }), this.on("destroy", function() {
                l(function() {
                    this.destroy()
                }), delete this.indicators
            })
        },
        _initWheel: function() {
            o.addEvent(this.wrapper, "wheel", this), o.addEvent(this.wrapper, "mousewheel", this), o.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function() {
                clearTimeout(this.wheelTimeout), this.wheelTimeout = null, o.removeEvent(this.wrapper, "wheel", this), o.removeEvent(this.wrapper, "mousewheel", this), o.removeEvent(this.wrapper, "DOMMouseScroll", this)
            })
        },
        _wheel: function(e) {
            if (this.enabled) {
                var t, n, o, s, r = this;
                if (void 0 === this.wheelTimeout && r._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function() {
                        r.options.snap || r._execEvent("scrollEnd"), r.wheelTimeout = void 0
                    }, 400), "deltaX" in e) 1 === e.deltaMode ? (t = -e.deltaX * this.options.mouseWheelSpeed, n = -e.deltaY * this.options.mouseWheelSpeed) : (t = -e.deltaX, n = -e.deltaY);
                else if ("wheelDeltaX" in e) t = e.wheelDeltaX / 120 * this.options.mouseWheelSpeed, n = e.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                else if ("wheelDelta" in e) t = n = e.wheelDelta / 120 * this.options.mouseWheelSpeed;
                else {
                    if (!("detail" in e)) return;
                    t = n = -e.detail / 3 * this.options.mouseWheelSpeed
                }
                if (t *= this.options.invertWheelDirection, n *= this.options.invertWheelDirection, this.hasVerticalScroll || (t = n, n = 0), this.options.snap) return o = this.currentPage.pageX, s = this.currentPage.pageY, 0 < t ? o-- : t < 0 && o++, 0 < n ? s-- : n < 0 && s++, void this.goToPage(o, s);
                o = this.x + i.round(this.hasHorizontalScroll ? t : 0), s = this.y + i.round(this.hasVerticalScroll ? n : 0), this.directionX = 0 < t ? -1 : t < 0 ? 1 : 0, this.directionY = 0 < n ? -1 : n < 0 ? 1 : 0, 0 < o ? o = 0 : o < this.maxScrollX && (o = this.maxScrollX), 0 < s ? s = 0 : s < this.maxScrollY && (s = this.maxScrollY), this.scrollTo(o, s, 0)
            }
        },
        _initSnap: function() {
            this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function() {
                var e, t, n, o, s, r, a = 0,
                    l = 0,
                    c = 0,
                    d = this.options.snapStepX || this.wrapperWidth,
                    u = this.options.snapStepY || this.wrapperHeight;
                if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                    if (!0 === this.options.snap)
                        for (n = i.round(d / 2), o = i.round(u / 2); c > -this.scrollerWidth;) {
                            for (this.pages[a] = [], s = e = 0; s > -this.scrollerHeight;) this.pages[a][e] = {
                                x: i.max(c, this.maxScrollX),
                                y: i.max(s, this.maxScrollY),
                                width: d,
                                height: u,
                                cx: c - n,
                                cy: s - o
                            }, s -= u, e++;
                            c -= d, a++
                        } else
                            for (e = (r = this.options.snap).length, t = -1; a < e; a++)(0 === a || r[a].offsetLeft <= r[a - 1].offsetLeft) && (l = 0, t++), this.pages[l] || (this.pages[l] = []), c = i.max(-r[a].offsetLeft, this.maxScrollX), s = i.max(-r[a].offsetTop, this.maxScrollY), n = c - i.round(r[a].offsetWidth / 2), o = s - i.round(r[a].offsetHeight / 2), this.pages[l][t] = {
                                x: c,
                                y: s,
                                width: r[a].offsetWidth,
                                height: r[a].offsetHeight,
                                cx: n,
                                cy: o
                            }, c > this.maxScrollX && l++;
                    this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 == 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = i.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = i.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
                }
            }), this.on("flick", function() {
                var e = this.options.snapSpeed || i.max(i.max(i.min(i.abs(this.x - this.startX), 1e3), i.min(i.abs(this.y - this.startY), 1e3)), 300);
                this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, e)
            })
        },
        _nearestSnap: function(e, t) {
            if (!this.pages.length) return {
                x: 0,
                y: 0,
                pageX: 0,
                pageY: 0
            };
            var n = 0,
                o = this.pages.length,
                s = 0;
            if (i.abs(e - this.absStartX) < this.snapThresholdX && i.abs(t - this.absStartY) < this.snapThresholdY) return this.currentPage;
            for (0 < e ? e = 0 : e < this.maxScrollX && (e = this.maxScrollX), 0 < t ? t = 0 : t < this.maxScrollY && (t = this.maxScrollY); n < o; n++)
                if (e >= this.pages[n][0].cx) {
                    e = this.pages[n][0].x;
                    break
                }
            for (o = this.pages[n].length; s < o; s++)
                if (t >= this.pages[0][s].cy) {
                    t = this.pages[0][s].y;
                    break
                }
            return n == this.currentPage.pageX && ((n += this.directionX) < 0 ? n = 0 : n >= this.pages.length && (n = this.pages.length - 1), e = this.pages[n][0].x), s == this.currentPage.pageY && ((s += this.directionY) < 0 ? s = 0 : s >= this.pages[0].length && (s = this.pages[0].length - 1), t = this.pages[0][s].y), {
                x: e,
                y: t,
                pageX: n,
                pageY: s
            }
        },
        goToPage: function(e, t, n, o) {
            o = o || this.options.bounceEasing, e >= this.pages.length ? e = this.pages.length - 1 : e < 0 && (e = 0), t >= this.pages[e].length ? t = this.pages[e].length - 1 : t < 0 && (t = 0);
            var s = this.pages[e][t].x,
                r = this.pages[e][t].y;
            n = void 0 === n ? this.options.snapSpeed || i.max(i.max(i.min(i.abs(s - this.x), 1e3), i.min(i.abs(r - this.y), 1e3)), 300) : n, this.currentPage = {
                x: s,
                y: r,
                pageX: e,
                pageY: t
            }, this.scrollTo(s, r, n, o)
        },
        next: function(e, t) {
            var i = this.currentPage.pageX,
                n = this.currentPage.pageY;
            ++i >= this.pages.length && this.hasVerticalScroll && (i = 0, n++), this.goToPage(i, n, e, t)
        },
        prev: function(e, t) {
            var i = this.currentPage.pageX,
                n = this.currentPage.pageY;
            --i < 0 && this.hasVerticalScroll && (i = 0, n--), this.goToPage(i, n, e, t)
        },
        _initKeys: function(t) {
            var i, n = {
                pageUp: 33,
                pageDown: 34,
                end: 35,
                home: 36,
                left: 37,
                up: 38,
                right: 39,
                down: 40
            };
            if ("object" == typeof this.options.keyBindings)
                for (i in this.options.keyBindings) "string" == typeof this.options.keyBindings[i] && (this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0));
            else this.options.keyBindings = {};
            for (i in n) this.options.keyBindings[i] = this.options.keyBindings[i] || n[i];
            o.addEvent(e, "keydown", this), this.on("destroy", function() {
                o.removeEvent(e, "keydown", this)
            })
        },
        _key: function(e) {
            if (this.enabled) {
                var t, n = this.options.snap,
                    s = n ? this.currentPage.pageX : this.x,
                    r = n ? this.currentPage.pageY : this.y,
                    a = o.getTime(),
                    l = this.keyTime || 0;
                switch (this.options.useTransition && this.isInTransition && (t = this.getComputedPosition(), this._translate(i.round(t.x), i.round(t.y)), this.isInTransition = !1), this.keyAcceleration = a - l < 200 ? i.min(this.keyAcceleration + .25, 50) : 0, e.keyCode) {
                    case this.options.keyBindings.pageUp:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? s += n ? 1 : this.wrapperWidth : r += n ? 1 : this.wrapperHeight;
                        break;
                    case this.options.keyBindings.pageDown:
                        this.hasHorizontalScroll && !this.hasVerticalScroll ? s -= n ? 1 : this.wrapperWidth : r -= n ? 1 : this.wrapperHeight;
                        break;
                    case this.options.keyBindings.end:
                        s = n ? this.pages.length - 1 : this.maxScrollX, r = n ? this.pages[0].length - 1 : this.maxScrollY;
                        break;
                    case this.options.keyBindings.home:
                        r = s = 0;
                        break;
                    case this.options.keyBindings.left:
                        s += n ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.up:
                        r += n ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.right:
                        s -= n ? -1 : 5 + this.keyAcceleration >> 0;
                        break;
                    case this.options.keyBindings.down:
                        r -= n ? 1 : 5 + this.keyAcceleration >> 0;
                        break;
                    default:
                        return
                }
                n ? this.goToPage(s, r) : (0 < s ? (s = 0, this.keyAcceleration = 0) : s < this.maxScrollX && (s = this.maxScrollX, this.keyAcceleration = 0), 0 < r ? (r = 0, this.keyAcceleration = 0) : r < this.maxScrollY && (r = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(s, r, 0), this.keyTime = a)
            }
        },
        _animate: function(e, t, i, s) {
            var r = this,
                a = this.x,
                l = this.y,
                c = o.getTime(),
                d = c + i;
            this.isAnimating = !0,
                function u() {
                    var h, p, f, m = o.getTime();
                    if (d <= m) return r.isAnimating = !1, r._translate(e, t), void(r.resetPosition(r.options.bounceTime) || r._execEvent("scrollEnd"));
                    f = s(m = (m - c) / i), h = (e - a) * f + a, p = (t - l) * f + l, r._translate(h, p), r.isAnimating && n(u)
                }()
        },
        handleEvent: function(e) {
            switch (e.type) {
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                case "mousedown":
                    this._start(e);
                    break;
                case "touchmove":
                case "pointermove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(e);
                    break;
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "pointercancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(e);
                    break;
                case "orientationchange":
                case "resize":
                    this._resize();
                    break;
                case "transitionend":
                case "webkitTransitionEnd":
                case "oTransitionEnd":
                case "MSTransitionEnd":
                    this._transitionEnd(e);
                    break;
                case "wheel":
                case "DOMMouseScroll":
                case "mousewheel":
                    this._wheel(e);
                    break;
                case "keydown":
                    this._key(e);
                    break;
                case "click":
                    this.enabled && !e._constructed && (e.preventDefault(), e.stopPropagation())
            }
        }
    }, a.prototype = {
        handleEvent: function(e) {
            switch (e.type) {
                case "touchstart":
                case "pointerdown":
                case "MSPointerDown":
                case "mousedown":
                    this._start(e);
                    break;
                case "touchmove":
                case "pointermove":
                case "MSPointerMove":
                case "mousemove":
                    this._move(e);
                    break;
                case "touchend":
                case "pointerup":
                case "MSPointerUp":
                case "mouseup":
                case "touchcancel":
                case "pointercancel":
                case "MSPointerCancel":
                case "mousecancel":
                    this._end(e)
            }
        },
        destroy: function() {
            this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), this.fadeTimeout = null), this.options.interactive && (o.removeEvent(this.indicator, "touchstart", this), o.removeEvent(this.indicator, o.prefixPointerEvent("pointerdown"), this), o.removeEvent(this.indicator, "mousedown", this), o.removeEvent(e, "touchmove", this), o.removeEvent(e, o.prefixPointerEvent("pointermove"), this), o.removeEvent(e, "mousemove", this), o.removeEvent(e, "touchend", this), o.removeEvent(e, o.prefixPointerEvent("pointerup"), this), o.removeEvent(e, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
        },
        _start: function(t) {
            var i = t.touches ? t.touches[0] : t;
            t.preventDefault(), t.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = i.pageX, this.lastPointY = i.pageY, this.startTime = o.getTime(), this.options.disableTouch || o.addEvent(e, "touchmove", this), this.options.disablePointer || o.addEvent(e, o.prefixPointerEvent("pointermove"), this), this.options.disableMouse || o.addEvent(e, "mousemove", this), this.scroller._execEvent("beforeScrollStart")
        },
        _move: function(e) {
            var t, i, n, s, r = e.touches ? e.touches[0] : e;
            o.getTime(), this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, t = r.pageX - this.lastPointX, this.lastPointX = r.pageX, i = r.pageY - this.lastPointY, this.lastPointY = r.pageY, n = this.x + t, s = this.y + i, this._pos(n, s), e.preventDefault(), e.stopPropagation()
        },
        _end: function(t) {
            if (this.initiated) {
                if (this.initiated = !1, t.preventDefault(), t.stopPropagation(), o.removeEvent(e, "touchmove", this), o.removeEvent(e, o.prefixPointerEvent("pointermove"), this), o.removeEvent(e, "mousemove", this), this.scroller.options.snap) {
                    var n = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                        s = this.options.snapSpeed || i.max(i.max(i.min(i.abs(this.scroller.x - n.x), 1e3), i.min(i.abs(this.scroller.y - n.y), 1e3)), 300);
                    this.scroller.x == n.x && this.scroller.y == n.y || (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = n, this.scroller.scrollTo(n.x, n.y, s, this.scroller.options.bounceEasing))
                }
                this.moved && this.scroller._execEvent("scrollEnd")
            }
        },
        transitionTime: function(e) {
            e = e || 0;
            var t = o.style.transitionDuration;
            if (t && (this.indicatorStyle[t] = e + "ms", !e && o.isBadAndroid)) {
                this.indicatorStyle[t] = "0.0001ms";
                var i = this;
                n(function() {
                    "0.0001ms" === i.indicatorStyle[t] && (i.indicatorStyle[t] = "0s")
                })
            }
        },
        transitionTimingFunction: function(e) {
            this.indicatorStyle[o.style.transitionTimingFunction] = e
        },
        refresh: function() {
            this.transitionTime(), this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (o.addClass(this.wrapper, "iScrollBothScrollbars"), o.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (o.removeClass(this.wrapper, "iScrollBothScrollbars"), o.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px")), this.wrapper.offsetHeight, this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = i.max(i.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = 8 - this.indicatorWidth, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = i.max(i.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = 8 - this.indicatorHeight, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
        },
        updatePosition: function() {
            var e = this.options.listenX && i.round(this.sizeRatioX * this.scroller.x) || 0,
                t = this.options.listenY && i.round(this.sizeRatioY * this.scroller.y) || 0;
            this.options.ignoreBoundaries || (e < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = i.max(this.indicatorWidth + e, 8), this.indicatorStyle.width = this.width + "px"), e = this.minBoundaryX) : e > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = i.max(this.indicatorWidth - (e - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", e = this.maxPosX + this.indicatorWidth - this.width) : e = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), t < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = i.max(this.indicatorHeight + 3 * t, 8), this.indicatorStyle.height = this.height + "px"), t = this.minBoundaryY) : t > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = i.max(this.indicatorHeight - 3 * (t - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", t = this.maxPosY + this.indicatorHeight - this.height) : t = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = e, this.y = t, this.scroller.options.useTransform ? this.indicatorStyle[o.style.transform] = "translate(" + e + "px," + t + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = e + "px", this.indicatorStyle.top = t + "px")
        },
        _pos: function(e, t) {
            e < 0 ? e = 0 : e > this.maxPosX && (e = this.maxPosX), t < 0 ? t = 0 : t > this.maxPosY && (t = this.maxPosY), e = this.options.listenX ? i.round(e / this.sizeRatioX) : this.scroller.x, t = this.options.listenY ? i.round(t / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(e, t)
        },
        fade: function(e, t) {
            if (!t || this.visible) {
                clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
                var i = e ? 250 : 500,
                    n = e ? 0 : 300;
                e = e ? "1" : "0", this.wrapperStyle[o.style.transitionDuration] = i + "ms", this.fadeTimeout = setTimeout(function(e) {
                    this.wrapperStyle.opacity = e, this.visible = +e
                }.bind(this, e), n)
            }
        }
    }, s.utils = o, "undefined" != typeof module && module.exports ? module.exports = s : "function" == typeof define && define.amd ? define(function() {
        return s
    }) : e.IScroll = s
}(window, document, Math),
function(e, t, i) {
    i.fn.fp_scrolloverflow = function() {
        var n = "fp-scrollable",
            o = "." + n,
            s = ".active",
            r = ".fp-section",
            a = r + s,
            l = ".fp-slide",
            c = l + s,
            d = ".fp-tableCell",
            u = "fp-responsive",
            h = "fp-auto-height-responsive";

        function p(e) {
            var t = e.closest(r);
            return t.length ? parseInt(t.css("padding-bottom")) + parseInt(t.css("padding-top")) : 0
        }
        IScroll.prototype.wheelOn = function() {
            this.wrapper.addEventListener("wheel", this), this.wrapper.addEventListener("mousewheel", this), this.wrapper.addEventListener("DOMMouseScroll", this)
        };
        var f = {
            refreshId: null,
            iScrollInstances: [],
            iscrollOptions: {
                scrollbars: !0,
                mouseWheel: !0,
                hideScrollbars: !(IScroll.prototype.wheelOff = function() {
                    this.wrapper.removeEventListener("wheel", this), this.wrapper.removeEventListener("mousewheel", this), this.wrapper.removeEventListener("DOMMouseScroll", this)
                }),
                fadeScrollbars: !1,
                disableMouse: !0,
                interactiveScrollbars: !0
            },
            init: function(n) {
                var o = "ontouchstart" in e || 0 < navigator.msMaxTouchPoints || navigator.maxTouchPoints;
                return f.iscrollOptions.click = o, f.iscrollOptions = i.extend(f.iscrollOptions, n.scrollOverflowOptions), (new function() {
                    var n = this;

                    function o() {
                        var e;
                        i("body").hasClass(u) ? (e = n.options.scrollOverflowHandler, a(function(t) {
                            t.closest(r).hasClass(h) && e.remove(t)
                        })) : a(s)
                    }

                    function s(t) {
                        if (!t.hasClass("fp-noscroll")) {
                            t.css("overflow", "hidden");
                            var o, s = n.options.scrollOverflowHandler,
                                a = s.wrapContent(),
                                l = t.closest(r),
                                c = s.scrollable(t),
                                u = p(l);
                            c.length ? o = s.scrollHeight(t) : (o = t.get(0).scrollHeight - u, n.options.verticalCentered && (o = t.find(d).get(0).scrollHeight - u));
                            var h = i(e).height() - u;
                            h < o ? c.length ? s.update(t, h) : (n.options.verticalCentered ? t.find(d).wrapInner(a) : t.wrapInner(a), s.create(t, h, n.iscrollOptions)) : s.remove(t), t.css("overflow", "")
                        }
                    }

                    function a(e) {
                        i(r).each(function() {
                            var t = i(this).find(l);
                            t.length ? t.each(function() {
                                e(i(this))
                            }) : e(i(this))
                        })
                    }
                    n.options = null, n.init = function(s, r) {
                        return n.options = s, n.iscrollOptions = r, "complete" === t.readyState && (o(), i.fn.fullpage.shared.afterRenderActions()), i(e).on("load", function() {
                            o(), i.fn.fullpage.shared.afterRenderActions()
                        }), n
                    }, n.createScrollBarForAll = o
                }).init(n, f.iscrollOptions)
            },
            toggleWheel: function(e) {
                i(a).find(o).each(function() {
                    var t = i(this).data("iscrollInstance");
                    void 0 !== t && t && (e ? t.wheelOn() : t.wheelOff())
                })
            },
            onLeave: function() {
                f.toggleWheel(!1)
            },
            beforeLeave: function() {
                f.onLeave()
            },
            afterLoad: function() {
                f.toggleWheel(!0)
            },
            create: function(e, t, n) {
                var s = e.find(o);
                s.height(t), s.each(function() {
                    var t = i(this),
                        o = t.data("iscrollInstance");
                    o && i.each(f.iScrollInstances, function() {
                        i(this).destroy()
                    }), o = new IScroll(t.get(0), n), f.iScrollInstances.push(o), e.closest(r).hasClass("active") || o.wheelOff(), t.data("iscrollInstance", o)
                })
            },
            isScrolled: function(e, t) {
                var i = t.data("iscrollInstance");
                return !i || ("top" === e ? 0 <= i.y && !t.scrollTop() : "bottom" === e ? 0 - i.y + t.scrollTop() + 1 + t.innerHeight() >= t[0].scrollHeight : void 0)
            },
            scrollable: function(e) {
                return e.find(".fp-slides").length ? e.find(c).find(o) : e.find(o)
            },
            scrollHeight: function(e) {
                return e.find(o).children().first().get(0).scrollHeight
            },
            remove: function(e) {
                var t = e.find(o);
                if (t.length) {
                    var i = t.data("iscrollInstance");
                    i && i.destroy(), t.data("iscrollInstance", null)
                }
                e.find(o).children().first().children().first().unwrap().unwrap()
            },
            update: function(e, t) {
                clearTimeout(f.refreshId), f.refreshId = setTimeout(function() {
                    i.each(f.iScrollInstances, function() {
                        i(this).get(0).refresh(), i.fn.fullpage.silentMoveTo(i(a).index() + 1)
                    })
                }, 150), e.find(o).css("height", t + "px").parent().css("height", t + p(e) + "px")
            },
            wrapContent: function() {
                return '<div class="' + n + '"><div class="fp-scroller"></div></div>'
            }
        };
        return {
            iscrollHandler: f
        }
    }()
}(window, document, jQuery);
var $jscomp$this = this;
! function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? module.exports = t() : e.anime = t()
}(this, function() {
    function e(e) {
        if (!E.col(e)) try {
            return document.querySelectorAll(e)
        } catch (e) {}
    }

    function t(e) {
        return e.reduce(function(e, i) {
            return e.concat(E.arr(i) ? t(i) : i)
        }, [])
    }

    function i(t) {
        return E.arr(t) ? t : (E.str(t) && (t = e(t) || t), t instanceof NodeList || t instanceof HTMLCollection ? [].slice.call(t) : [t])
    }

    function n(e, t) {
        return e.some(function(e) {
            return e === t
        })
    }

    function o(e) {
        var t, i = {};
        for (t in e) i[t] = e[t];
        return i
    }

    function s(e, t) {
        var i, n = o(e);
        for (i in e) n[i] = t.hasOwnProperty(i) ? t[i] : e[i];
        return n
    }

    function r(e, t) {
        var i, n = o(e);
        for (i in t) n[i] = E.und(e[i]) ? t[i] : e[i];
        return n
    }

    function a(e) {
        if (e = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg|rad|turn)?/.exec(e)) return e[2]
    }

    function l(e, t) {
        return E.fnc(e) ? e(t.target, t.id, t.total) : e
    }

    function c(e, t) {
        if (t in e.style) return getComputedStyle(e).getPropertyValue(t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0"
    }

    function d(e, t) {
        return E.dom(e) && n(C, t) ? "transform" : E.dom(e) && (e.getAttribute(t) || E.svg(e) && e[t]) ? "attribute" : E.dom(e) && "transform" !== t && c(e, t) ? "css" : null != e[t] ? "object" : void 0
    }

    function u(e, t) {
        switch (d(e, t)) {
            case "transform":
                return function(e, t) {
                    var i, n = -1 < (i = t).indexOf("translate") ? "px" : -1 < i.indexOf("rotate") || -1 < i.indexOf("skew") ? "deg" : void 0;
                    if (n = -1 < t.indexOf("scale") ? 1 : 0 + n, !(e = e.style.transform)) return n;
                    for (var o = [], s = [], r = [], a = /(\w+)\((.+?)\)/g; o = a.exec(e);) s.push(o[1]), r.push(o[2]);
                    return (e = r.filter(function(e, i) {
                        return s[i] === t
                    })).length ? e[0] : n
                }(e, t);
            case "css":
                return c(e, t);
            case "attribute":
                return e.getAttribute(t)
        }
        return e[t] || 0
    }

    function h(e, t) {
        var i = /^(\*=|\+=|-=)/.exec(e);
        if (!i) return e;
        switch (t = parseFloat(t), e = parseFloat(e.replace(i[0], "")), i[0][0]) {
            case "+":
                return t + e;
            case "-":
                return t - e;
            case "*":
                return t * e
        }
    }

    function p(e) {
        return E.obj(e) && e.hasOwnProperty("totalLength")
    }

    function f(e, t) {
        function i(i) {
            return i = void 0 === i ? 0 : i, e.el.getPointAtLength(1 <= t + i ? t + i : 0)
        }
        var n = i(),
            o = i(-1),
            s = i(1);
        switch (e.property) {
            case "x":
                return n.x;
            case "y":
                return n.y;
            case "angle":
                return 180 * Math.atan2(s.y - o.y, s.x - o.x) / Math.PI
        }
    }

    function m(e, t) {
        var i = /-?\d*\.?\d+/g;
        if (e = p(e) ? e.totalLength : e, E.col(e)) t = E.rgb(e) ? e : E.hex(e) ? function(e) {
            e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, i, n) {
                return t + t + i + i + n + n
            });
            var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
            return "rgb(" + (e = parseInt(t[1], 16)) + "," + parseInt(t[2], 16) + "," + (t = parseInt(t[3], 16)) + ")"
        }(e) : E.hsl(e) ? function(e) {
            function t(e, t, i) {
                return i < 0 && (i += 1), 1 < i && --i, i < 1 / 6 ? e + 6 * (t - e) * i : i < .5 ? t : i < 2 / 3 ? e + (t - e) * (2 / 3 - i) * 6 : e
            }
            var i = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e);
            e = parseInt(i[1]) / 360;
            var n = parseInt(i[2]) / 100;
            if (i = parseInt(i[3]) / 100, 0 == n) n = i = e = i;
            else {
                var o = i < .5 ? i * (1 + n) : i + n - i * n,
                    s = 2 * i - o;
                n = t(s, o, e + 1 / 3), i = t(s, o, e), e = t(s, o, e - 1 / 3)
            }
            return "rgb(" + 255 * n + "," + 255 * i + "," + 255 * e + ")"
        }(e) : void 0;
        else {
            var n = a(e);
            e = n ? e.substr(0, e.length - n.length) : e, t = t ? e + t : e
        }
        return {
            original: t += "",
            numbers: t.match(i) ? t.match(i).map(Number) : [0],
            strings: t.split(i)
        }
    }

    function v(e, t) {
        return t.reduce(function(t, i, n) {
            return t + e[n - 1] + i
        })
    }

    function g(e) {
        return (e ? t(E.arr(e) ? e.map(i) : i(e)) : []).filter(function(e, t, i) {
            return i.indexOf(e) === t
        })
    }

    function y(e, t) {
        var n = o(t);
        if (E.arr(e)) {
            var s = e.length;
            2 !== s || E.obj(e[0]) ? E.fnc(t.duration) || (n.duration = t.duration / s) : e = {
                value: e
            }
        }
        return i(e).map(function(e, i) {
            return i = i ? 0 : t.delay, e = E.obj(e) && !p(e) ? e : {
                value: e
            }, E.und(e.delay) && (e.delay = i), e
        }).map(function(e) {
            return r(e, n)
        })
    }

    function b(e, t, i) {
        var n = "delay" === e ? Math.min : Math.max;
        return t.length ? n.apply(Math, t.map(function(t) {
            return t[e]
        })) : i[e]
    }

    function w(e) {
        var i, n, o, c, f, v = s(S, e),
            w = s(T, e),
            x = (n = e.targets, (o = g(n)).map(function(e, t) {
                return {
                    target: e,
                    id: t,
                    total: o.length
                }
            })),
            k = [],
            C = r(v, w);
        for (i in e) C.hasOwnProperty(i) || "targets" === i || k.push({
            name: i,
            offset: C.offset,
            tweens: y(e[i], w)
        });
        return f = k, r(v, {
            children: [],
            animatables: c = x,
            animations: e = t(c.map(function(e) {
                return f.map(function(t) {
                    var i, n, o, s = d(e.target, t.name);
                    if (s) {
                        var r = (n = e, (i = t).tweens.map(function(e) {
                            var t = (e = function(e, t) {
                                    var i, n = {};
                                    for (i in e) {
                                        var o = l(e[i], t);
                                        E.arr(o) && 1 === (o = o.map(function(e) {
                                            return l(e, t)
                                        })).length && (o = o[0]), n[i] = o
                                    }
                                    return n.duration = parseFloat(n.duration), n.delay = parseFloat(n.delay), n
                                }(e, n)).value,
                                s = u(n.target, i.name),
                                r = o ? o.to.original : s,
                                c = (r = E.arr(t) ? t[0] : r, h(E.arr(t) ? t[1] : t, r));
                            return s = a(c) || a(r) || a(s), e.isPath = p(t), e.from = m(r, s), e.to = m(c, s), e.start = o ? o.end : i.offset, e.end = e.start + e.delay + e.duration, e.easing = function(e) {
                                return E.arr(e) ? A.apply(this, e) : $[e]
                            }(e.easing), e.elasticity = (1e3 - Math.min(Math.max(e.elasticity, 1), 999)) / 1e3, E.col(e.from.original) && (e.round = 1), o = e
                        }));
                        t = {
                            type: s,
                            property: t.name,
                            animatable: e,
                            tweens: r,
                            duration: r[r.length - 1].end,
                            delay: r[0].delay
                        }
                    } else t = void 0;
                    return t
                })
            })).filter(function(e) {
                return !E.und(e)
            }),
            duration: b("duration", e, w),
            delay: b("delay", e, w)
        })
    }

    function x(e) {
        function t() {
            return window.Promise && new Promise(function(e) {
                return u = e
            })
        }

        function i(e) {
            return p.reversed ? p.duration - e : e
        }

        function n(e) {
            for (var t = 0, i = {}, n = p.animations, o = {}; t < n.length;) {
                var s = n[t],
                    r = s.animatable,
                    a = s.tweens;
                o.tween = a.filter(function(t) {
                    return e < t.end
                })[0] || a[a.length - 1], o.isPath$1 = o.tween.isPath, o.round = o.tween.round, o.eased = o.tween.easing(Math.min(Math.max(e - o.tween.start - o.tween.delay, 0), o.tween.duration) / o.tween.duration, o.tween.elasticity), a = v(o.tween.to.numbers.map(function(e) {
                    return function(t, i) {
                        return t = (i = e.isPath$1 ? 0 : e.tween.from.numbers[i]) + e.eased * (t - i), e.isPath$1 && (t = f(e.tween.value, t)), e.round && (t = Math.round(t * e.round) / e.round), t
                    }
                }(o)), o.tween.to.strings), _[s.type](r.target, s.property, a, i, r.id), s.currentValue = a, t++, o = {
                    isPath$1: o.isPath$1,
                    tween: o.tween,
                    eased: o.eased,
                    round: o.round
                }
            }
            if (i)
                for (var l in i) k || (k = c(document.body, "transform") ? "transform" : "-webkit-transform"), p.animatables[l].target.style[k] = i[l].join(" ");
            p.currentTime = e, p.progress = e / p.duration * 100
        }

        function o(e) {
            p[e] && p[e](p)
        }

        function s() {
            p.remaining && !0 !== p.remaining && p.remaining--
        }

        function r(e) {
            var r = p.duration,
                c = p.offset,
                f = p.delay,
                m = p.currentTime,
                v = p.reversed,
                g = i(e);
            if (g = Math.min(Math.max(g, 0), r), p.children) {
                var y = p.children;
                if (g >= p.currentTime)
                    for (var b = 0; b < y.length; b++) y[b].seek(g);
                else
                    for (b = y.length; b--;) y[b].seek(g)
            }
            c < g && g < r ? (n(g), !p.began && f <= g && (p.began = !0, o("begin")), o("run")) : (g <= c && 0 !== m && (n(0), v && s()), r <= g && m !== r && (n(r), v || s())), r <= e && (p.remaining ? (l = a, "alternate" === p.direction && (p.reversed = !p.reversed)) : (p.pause(), "Promise" in window && (u(), h = t()), p.completed || (p.completed = !0, o("complete"))), d = 0), o("update")
        }
        e = void 0 === e ? {} : e;
        var a, l, d = 0,
            u = null,
            h = t(),
            p = w(e);
        return p.reset = function() {
            var e = p.direction,
                t = p.loop;
            for (p.currentTime = 0, p.progress = 0, p.paused = !0, p.began = !1, p.completed = !1, p.reversed = "reverse" === e, p.remaining = "alternate" === e && 1 === t ? 2 : t, e = p.children.length; e--;)(t = p.children[e]).seek(t.offset), t.reset()
        }, p.tick = function(e) {
            a = e, l || (l = a), r((d + a - l) * x.speed)
        }, p.seek = function(e) {
            r(i(e))
        }, p.pause = function() {
            var e = O.indexOf(p); - 1 < e && O.splice(e, 1), p.paused = !0
        }, p.play = function() {
            p.paused && (p.paused = !1, l = 0, d = i(p.currentTime), O.push(p), P || L())
        }, p.reverse = function() {
            p.reversed = !p.reversed, l = 0, d = i(p.currentTime)
        }, p.restart = function() {
            p.pause(), p.reset(), p.play()
        }, p.finished = h, p.reset(), p.autoplay && p.play(), p
    }
    var k, S = {
            update: void 0,
            begin: void 0,
            run: void 0,
            complete: void 0,
            loop: 1,
            direction: "normal",
            autoplay: !0,
            offset: 0
        },
        T = {
            duration: 1e3,
            delay: 0,
            easing: "easeOutElastic",
            elasticity: 500,
            round: 0
        },
        C = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),
        E = {
            arr: function(e) {
                return Array.isArray(e)
            },
            obj: function(e) {
                return -1 < Object.prototype.toString.call(e).indexOf("Object")
            },
            svg: function(e) {
                return e instanceof SVGElement
            },
            dom: function(e) {
                return e.nodeType || E.svg(e)
            },
            str: function(e) {
                return "string" == typeof e
            },
            fnc: function(e) {
                return "function" == typeof e
            },
            und: function(e) {
                return void 0 === e
            },
            hex: function(e) {
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)
            },
            rgb: function(e) {
                return /^rgb/.test(e)
            },
            hsl: function(e) {
                return /^hsl/.test(e)
            },
            col: function(e) {
                return E.hex(e) || E.rgb(e) || E.hsl(e)
            }
        },
        A = function() {
            function e(e, t, i) {
                return (((1 - 3 * i + 3 * t) * e + (3 * i - 6 * t)) * e + 3 * t) * e
            }
            return function(t, i, n, o) {
                if (0 <= t && t <= 1 && 0 <= n && n <= 1) {
                    var s = new Float32Array(11);
                    if (t !== i || n !== o)
                        for (var r = 0; r < 11; ++r) s[r] = e(.1 * r, t, n);
                    return function(r) {
                        if (t === i && n === o) return r;
                        if (0 === r) return 0;
                        if (1 === r) return 1;
                        for (var a = 0, l = 1; 10 !== l && s[l] <= r; ++l) a += .1;
                        l = a + (r - s[--l]) / (s[l + 1] - s[l]) * .1;
                        var c = 3 * (1 - 3 * n + 3 * t) * l * l + 2 * (3 * n - 6 * t) * l + 3 * t;
                        if (.001 <= c) {
                            for (a = 0; a < 4 && 0 != (c = 3 * (1 - 3 * n + 3 * t) * l * l + 2 * (3 * n - 6 * t) * l + 3 * t); ++a) {
                                var d = e(l, t, n) - r;
                                l -= d / c
                            }
                            r = l
                        } else if (0 === c) r = l;
                        else {
                            l = a, a += .1;
                            for (var u = 0; 0 < (c = e(d = l + (a - l) / 2, t, n) - r) ? a = d : l = d, 1e-7 < Math.abs(c) && ++u < 10;);
                            r = d
                        }
                        return e(r, i, o)
                    }
                }
            }
        }(),
        $ = function() {
            function e(e, t) {
                return 0 === e || 1 === e ? e : -Math.pow(2, 10 * (e - 1)) * Math.sin(2 * (e - 1 - t / (2 * Math.PI) * Math.asin(1)) * Math.PI / t)
            }
            var t, i = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),
                n = {
                    In: [
                        [.55, .085, .68, .53],
                        [.55, .055, .675, .19],
                        [.895, .03, .685, .22],
                        [.755, .05, .855, .06],
                        [.47, 0, .745, .715],
                        [.95, .05, .795, .035],
                        [.6, .04, .98, .335],
                        [.6, -.28, .735, .045], e
                    ],
                    Out: [
                        [.25, .46, .45, .94],
                        [.215, .61, .355, 1],
                        [.165, .84, .44, 1],
                        [.23, 1, .32, 1],
                        [.39, .575, .565, 1],
                        [.19, 1, .22, 1],
                        [.075, .82, .165, 1],
                        [.175, .885, .32, 1.275],
                        function(t, i) {
                            return 1 - e(1 - t, i)
                        }
                    ],
                    InOut: [
                        [.455, .03, .515, .955],
                        [.645, .045, .355, 1],
                        [.77, 0, .175, 1],
                        [.86, 0, .07, 1],
                        [.445, .05, .55, .95],
                        [1, 0, 0, 1],
                        [.785, .135, .15, .86],
                        [.68, -.55, .265, 1.55],
                        function(t, i) {
                            return t < .5 ? e(2 * t, i) / 2 : 1 - e(-2 * t + 2, i) / 2
                        }
                    ]
                },
                o = {
                    linear: A(.25, .25, .75, .75)
                },
                s = {};
            for (t in n) s.type = t, n[s.type].forEach(function(e) {
                return function(t, n) {
                    o["ease" + e.type + i[n]] = E.fnc(t) ? t : A.apply($jscomp$this, t)
                }
            }(s)), s = {
                type: s.type
            };
            return o
        }(),
        _ = {
            css: function(e, t, i) {
                return e.style[t] = i
            },
            attribute: function(e, t, i) {
                return e.setAttribute(t, i)
            },
            object: function(e, t, i) {
                return e[t] = i
            },
            transform: function(e, t, i, n, o) {
                n[o] || (n[o] = []), n[o].push(t + "(" + i + ")")
            }
        },
        O = [],
        P = 0,
        L = function() {
            function e() {
                P = requestAnimationFrame(t)
            }

            function t(t) {
                var i = O.length;
                if (i) {
                    for (var n = 0; n < i;) O[n] && O[n].tick(t), n++;
                    e()
                } else cancelAnimationFrame(P), P = 0
            }
            return e
        }();
    return x.version = "2.0.2", x.speed = 1, x.running = O, x.remove = function(e) {
        e = g(e);
        for (var t = O.length; t--;)
            for (var i = O[t], o = i.animations, s = o.length; s--;) n(e, o[s].animatable.target) && (o.splice(s, 1), o.length || i.pause())
    }, x.getValue = u, x.path = function(t, i) {
        var n = E.str(t) ? e(t)[0] : t,
            o = i || 100;
        return function(e) {
            return {
                el: n,
                property: e,
                totalLength: n.getTotalLength() * (o / 100)
            }
        }
    }, x.setDashoffset = function(e) {
        var t = e.getTotalLength();
        return e.setAttribute("stroke-dasharray", t), t
    }, x.bezier = A, x.easings = $, x.timeline = function(e) {
        var t = x(e);
        return t.pause(), t.duration = 0, t.add = function(e) {
            return t.children.forEach(function(e) {
                e.began = !0, e.completed = !0
            }), i(e).forEach(function(e) {
                var i = t.duration,
                    n = e.offset;
                e.autoplay = !1, e.offset = E.und(n) ? i : h(n, i), t.seek(e.offset), (e = x(e)).duration > i && (t.duration = e.duration), e.began = !0, t.children.push(e)
            }), t.reset(), t.seek(0), t.autoplay && t.restart(), t
        }, t
    }, x.random = function(e, t) {
        return Math.floor(Math.random() * (t - e + 1)) + e
    }, x
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var i = this._events = this._events || {},
                n = i[e] = i[e] || [];
            return -1 == n.indexOf(t) && n.push(t), this
        }
    }, t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[e] = i[e] || {})[t] = !0, this
        }
    }, t.off = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return -1 != n && i.splice(n, 1), this
        }
    }, t.emitEvent = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = 0,
                o = i[n];
            t = t || [];
            for (var s = this._onceEvents && this._onceEvents[e]; o;) {
                var r = s && s[o];
                r && (this.off(e, o), delete s[o]), o.apply(this, t), o = i[n += r ? 0 : 1]
            }
            return this
        }
    }, e
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}(window, function(e, t) {
    function i(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    }

    function n(e, t, o) {
        return this instanceof n ? ("string" == typeof e && (e = document.querySelectorAll(e)), this.elements = function(e) {
            var t = [];
            if (Array.isArray(e)) t = e;
            else if ("number" == typeof e.length)
                for (var i = 0; i < e.length; i++) t.push(e[i]);
            else t.push(e);
            return t
        }(e), this.options = i({}, this.options), "function" == typeof t ? o = t : i(this.options, t), o && this.on("always", o), this.getImages(), r && (this.jqDeferred = new r.Deferred), void setTimeout(function() {
            this.check()
        }.bind(this))) : new n(e, t, o)
    }

    function o(e) {
        this.img = e
    }

    function s(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }
    var r = e.jQuery,
        a = e.console;
    (n.prototype = Object.create(t.prototype)).options = {}, n.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, n.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && l[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var s = e.querySelectorAll(this.options.background);
                for (n = 0; n < s.length; n++) {
                    var r = s[n];
                    this.addElementBackgroundImages(r)
                }
            }
        }
    };
    var l = {
        1: !0,
        9: !0,
        11: !0
    };
    return n.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
                var o = n && n[2];
                o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
            }
    }, n.prototype.addImage = function(e) {
        var t = new o(e);
        this.images.push(t)
    }, n.prototype.addBackground = function(e, t) {
        var i = new s(e, t);
        this.images.push(i)
    }, n.prototype.check = function() {
        function e(e, i, n) {
            setTimeout(function() {
                t.progress(e, i, n)
            })
        }
        var t = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
            t.once("progress", e), t.check()
        }) : void this.complete()
    }, n.prototype.progress = function(e, t, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t)
    }, n.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, (o.prototype = Object.create(t.prototype)).check = function() {
        return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, o.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, o.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, o.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, o.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, o.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, o.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, (s.prototype = Object.create(o.prototype)).check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, n.makeJQueryPlugin = function(t) {
        (t = t || e.jQuery) && ((r = t).fn.imagesLoaded = function(e, t) {
            return new n(this, e, t).jqDeferred.promise(r(this))
        })
    }, n.makeJQueryPlugin(), n
}),
function(e) {
    function t(e, t) {
        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
        return e
    }

    function i(e, i) {
        this.DOM = {}, this.DOM.el = e, this.options = t({}, this.options), t(this.options, i), this._init()
    }
    i.prototype.options = {
        movement: {
            imgWrapper: {
                translation: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                rotation: {
                    x: -5,
                    y: 5,
                    z: 0
                },
                reverseAnimation: {
                    duration: 1200,
                    easing: "easeOutElastic",
                    elasticity: 600
                }
            },
            lines: {
                translation: {
                    x: 10,
                    y: 10,
                    z: [0, 10]
                },
                reverseAnimation: {
                    duration: 1e3,
                    easing: "easeOutExpo",
                    elasticity: 600
                }
            },
            caption: {
                translation: {
                    x: 20,
                    y: 20,
                    z: 0
                },
                rotation: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                reverseAnimation: {
                    duration: 1500,
                    easing: "easeOutElastic",
                    elasticity: 600
                }
            },
            shine: {
                translation: {
                    x: 50,
                    y: 50,
                    z: 0
                },
                reverseAnimation: {
                    duration: 1200,
                    easing: "easeOutElastic",
                    elasticity: 600
                }
            }
        }
    }, i.prototype._init = function() {
        this.DOM.animatable = {}, this.DOM.animatable.imgWrapper = this.DOM.el.querySelector(".event__figure"), this.DOM.animatable.caption = this.DOM.el.querySelector(".event__caption"), this._initEvents()
    }, i.prototype._initEvents = function() {
        var e = this;
        this.mouseenterFn = function() {
            for (var t in e.DOM.animatable) anime.remove(e.DOM.animatable[t])
        }, this.mousemoveFn = function(t) {
            requestAnimationFrame(function() {
                e._layout(t)
            })
        }, this.mouseleaveFn = function(t) {
            requestAnimationFrame(function() {
                for (var t in e.DOM.animatable) null != e.options.movement[t] && anime({
                    targets: e.DOM.animatable[t],
                    duration: null != e.options.movement[t].reverseAnimation ? e.options.movement[t].reverseAnimation.duration || 0 : 1,
                    easing: null != e.options.movement[t].reverseAnimation && e.options.movement[t].reverseAnimation.easing || "linear",
                    elasticity: null != e.options.movement[t].reverseAnimation && e.options.movement[t].reverseAnimation.elasticity || null,
                    scaleX: 1,
                    scaleY: 1,
                    scaleZ: 1,
                    translateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    rotateX: 0,
                    rotateY: 0,
                    rotateZ: 0
                })
            })
        }, this.DOM.el.addEventListener("mousemove", this.mousemoveFn), this.DOM.el.addEventListener("mouseleave", this.mouseleaveFn), this.DOM.el.addEventListener("mouseenter", this.mouseenterFn)
    }, i.prototype._layout = function(t) {
        var i, n, o, s = (n = 0, o = 0, (i = t) || (i = e.event), i.pageX || i.pageY ? (n = i.pageX, o = i.pageY) : (i.clientX || i.clientY) && (n = i.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, o = i.clientY + document.body.scrollTop + document.documentElement.scrollTop), {
                x: n,
                y: o
            }),
            r = document.body.scrollLeft + document.documentElement.scrollLeft,
            a = document.body.scrollTop + document.documentElement.scrollTop,
            l = this.DOM.el.getBoundingClientRect(),
            c = s.x - l.left - r,
            d = s.y - l.top - a;
        for (var u in this.DOM.animatable)
            if (null != this.DOM.animatable[u] && null != this.options.movement[u]) {
                var h = null != this.options.movement[u] && this.options.movement[u].translation || {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    p = null != this.options.movement[u] && this.options.movement[u].rotation || {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    f = function(e) {
                        for (var t in e) null == e[t] ? e[t] = [0, 0] : "number" == typeof e[t] && (e[t] = [-1 * e[t], e[t]])
                    };
                f(h), f(p);
                var m = (h.x[1] - h.x[0]) / l.width * c + h.x[0],
                    v = (h.y[1] - h.y[0]) / l.height * d + h.y[0],
                    g = (h.z[1] - h.z[0]) / l.height * d + h.z[0],
                    y = (p.x[1] - p.x[0]) / l.height * d + p.x[0],
                    b = (p.y[1] - p.y[0]) / l.width * c + p.y[0],
                    w = (p.z[1] - p.z[0]) / l.width * c + p.z[0];
                this.DOM.animatable[u].style.WebkitTransform = this.DOM.animatable[u].style.transform = "translateX(" + m + "px) translateY(" + v + "px) translateZ(" + g + "px) rotateX(" + y + "deg) rotateY(" + b + "deg) rotateZ(" + w + "deg)"
            }
    }, e.TiltFx = i
}(window);
var animationsCtrl = {
    init: function() {
        var e = animationsCtrl;
        e.html = {
            $elements: $("[data-animation]")
        }, e.prepareElements(), e.check(), e.events()
    },
    prepareElements: function() {
        -1 < navigator.userAgent.toLowerCase().indexOf("android") || ($(".ml10 .letters").each(function() {
            var e = $(this);
            splitLines(e, !0), e.find(".line").each(function() {
                var e = $(this),
                    t = e.text().split(""),
                    n = "";
                for (i = 0; i < t.length; i++) {
                    var o = '<span class="letter">' + t[i] + "</span>",
                        s = i + 1;
                    s < t.length && " " == t[s] && (o = '<span class="letter">' + t[i] + "&nbsp;</span>"), " " == t[i] && (o = ""), n += o
                }
                e.html(n)
            })
        }), $("[data-animation='text-fade-in']").each(function() {
            var e = $(this);
            splitLines(e), e.find(".line").each(function(e, t) {
                var i = "<span><span>" + $(t).html() + "</span></span>";
                i += i, $(t).append(i)
            })
        }))
    },
    check: function() {},
    events: function() {}
};

function splitLines(e, t) {
    var i = e.find("p");
    t && (i = e), i.each(function() {
        var e = $(this),
            t = (e.html(function(e, t) {
                return t.replace(/(\S+\s*)/g, "<span>$1</span>")
            }), 0),
            i = {},
            n = 0,
            o = 0;
        $("span", e).each(function(e, s) {
            n = $(s).offset().top, t < n && (t = n, i[++o] = []), i[o].push($(this).html())
        });
        var s = "";
        $.each(i, function(e, t) {
            s += '<span class="line">' + t.join("") + "</span>"
        }), e.html(s)
    })
}
var preloaderCtrl = {
        isComplete: 0,
        init: function() {
            var e = preloaderCtrl;
            $(".main").css("opacity", 1), e.fullPageWrap = $("[data-full-page]"), e.header = $("[data-header]"), e.bgBlock = $("[data-bg-main]"), e.preloaderEffect(), e.events()
        },
        fullPageShow: function() {
            preloaderCtrl.fullPageWrap.addClass("myFullPage_top")
        },
        preloaderEffect: function() {
            var e = {
                opacityIn: [0, 1],
                scaleIn: [.2, 1],
                scaleOut: 3,
                durationIn: 800,
                durationOut: 600,
                delay: 0
            };
            anime.timeline({
                loop: !1
            }).add({
                targets: ".preloader__phrase_1",
                opacity: e.opacityIn,
                scale: e.scaleIn,
                duration: e.durationIn
            }).add({
                targets: ".preloader__phrase_1",
                opacity: 0,
                scale: e.scaleOut,
                duration: e.durationOut,
                easing: "easeInExpo",
                delay: e.delay
            }).add({
                targets: ".preloader__phrase_2",
                opacity: e.opacityIn,
                scale: e.scaleIn,
                duration: e.durationIn
            }).add({
                targets: ".preloader__phrase_2",
                opacity: 0,
                scale: e.scaleOut,
                duration: e.durationOut,
                easing: "easeInExpo",
                delay: e.delay
            }).add({
                targets: ".preloader__phrase_3",
                opacity: e.opacityIn,
                scale: e.scaleIn,
                duration: e.durationIn
            }).add({
                targets: ".preloader__phrase_3",
                opacity: 0,
                scale: e.scaleOut,
                duration: e.durationOut,
                easing: "easeInExpo",
                delay: e.delay
            }).add({
                targets: ".preloader__phrase_4",
                opacity: e.opacityIn,
                scale: e.scaleIn,
                duration: e.durationIn
            }).add({
                targets: ".preloader__phrase_4",
                opacity: 0,
                scale: e.scaleOut,
                duration: e.durationOut,
                easing: "easeInExpo",
                delay: e.delay
            }).add({
                targets: ".preloader__phrase",
                opacity: 0,
                duration: 500,
                delay: e.delay,
                complete: function(e) {
                    preloaderCtrl.preloaderComplete()
                }
            })
        },
        preloaderComplete: function() {
            var e = preloaderCtrl;
            e.isComplete || (client.isMobile || bubblesBg.init(), e.fullPageShow(), e.bgBlock.removeClass("bg_preloader").addClass("bg_poster"), e.header.addClass("header_show"), $("[data-preloader]").fadeOut(), setTimeout(function() {
                $(".poster").find("[data-animation]").attr("data-animation-complete", "true"), $.fn.fullpage.setAllowScrolling(!0)
            }, 500), e.isComplete = 1)
        },
        events: function() {
            $("[data-preloader-skip]").on("click", function() {
                preloaderCtrl.preloaderComplete()
            })
        }
    },
    observer = function() {
        var e = {};
        return {
            addObserver: function(t, i) {
                e.hasOwnProperty(t) || (e[t] = []), e[t].push(i)
            },
            notifyObserver: function(t) {
                e[t].forEach(function(e) {
                    e.call()
                })
            }
        }
    },
    constructor = {
        init: function() {
            var e = constructor,
                t = document.getElementById("constructor"),
                i = new e.model,
                n = new e.view(i, t);
            new e.controller(i, n)
        },
        model: function() {
            var e = observer();
            if ($("#constructor").data("href")) {
                $('meta[name="csrf-param"]').attr("content");
                var t = $('meta[name="csrf-token"]').attr("content"),
                    i = jQuery.ajax({
                        cache: !1,
                        type: "POST",
                        dataType: "json",
                        data: {
                            param: t
                        },
                        success: function(e) {},
                        error: function(e) {
                            console.log(e)
                        },
                        url: $("#constructor").data("href"),
                        async: !1
                    }).responseJSON
            } else i = {
                drinks: [{
                    id: 0,
                    icon: "img/alc1.png"
                }, {
                    id: 1,
                    icon: "img/alc2.png"
                }, {
                    id: 2,
                    icon: "img/alc3.png"
                }, {
                    id: 3,
                    icon: "img/alc4.png"
                }, {
                    id: 4,
                    icon: "img/alc5.png"
                }, {
                    id: 5,
                    icon: "img/alc6.png"
                }],
                cocktails: [{
                    id: 100,
                    drinks: null,
                    imageCocktail: "img/cocktail_def.png",
                    textTop: "Саня немного приуныл",
                    textBottom: "взбодри, сделай ему коктейль",
                    imageHero: "img/hero_def.png",
                    isDefault: !0,
                    isOther: !1
                }, {
                    id: 0,
                    drinks: [1, 4, 5],
                    imageCocktail: "img/glass3.png",
                    textTop: "Саня зовет друзей на коктейль",
                    textBottom: '"Добрый вечер" с Outox',
                    imageHero: "img/hero3.png",
                    isDefault: !1,
                    isOther: !0,
                    shares: {
                        facebook: "#fb"
                    }
                }, {
                    id: 1,
                    drinks: [0, 1],
                    imageCocktail: "img/glass1.png",
                    textTop: "Сане уже веселее от коктейля",
                    textBottom: '"Прощай бармен" с Outox',
                    imageHero: "img/hero1.png",
                    isDefault: !1,
                    isOther: !1,
                    shares: {
                        facebook: "#fb"
                    }
                }, {
                    id: 2,
                    drinks: [2, 3, 4],
                    imageCocktail: "img/glass2.png",
                    textTop: "Саня идет танцевать с коктейлем",
                    textBottom: '"Танцы на баре" с Outox',
                    imageHero: "img/hero2.png",
                    isDefault: !1,
                    isOther: !1,
                    shares: {
                        facebook: "#fb"
                    }
                }]
            };
            var n = {
                drinks: [],
                cocktail: null
            };
            return {
                getData: function() {
                    return i
                },
                getActiveData: function() {
                    return n
                },
                getObservers: function() {
                    return e
                },
                make: function() {
                    if (n.drinks.length) {
                        for (var t = 0, o = i.cocktails.length; o--;) {
                            for (var s = i.cocktails[o], r = 1, a = n.drinks.length; a--;) null !== s.drinks && -1 === s.drinks.indexOf(+n.drinks[a]) && (r = 0), null == s.drinks && (r = 0);
                            if (r && n.drinks.length === s.drinks.length) return n.cocktail = s.id, e.notifyObserver("cocktailReady"), !1;
                            t = 1
                        }
                        if (t)
                            for (o = i.cocktails.length; o--;)
                                if (i.cocktails[o].isOther) return n.cocktail = i.cocktails[o].id, e.notifyObserver("cocktailReady"), !1
                    }
                },
                restart: function() {
                    n = {
                        drinks: [],
                        cocktail: null
                    }, e.notifyObserver("constructorRestart")
                },
                toggleDrink: function(t) {
                    var i, o, s; - 1 === n.drinks.indexOf(t) ? (s = t, n.drinks.push(s)) : (i = t, o = n.drinks.indexOf(i), n.drinks.splice(o, 1)), e.notifyObserver("toggleDrinks")
                }
            }
        },
        view: function(e, t) {
            var i = e.getObservers(),
                n = "tpl-drinks",
                o = "tpl-bubbles",
                s = "tpl-heroes",
                r = "tpl-glasses",
                a = "constructor_completed",
                l = "constructor__drink_active",
                c = "constructor__drink_ready",
                d = "constructor__bubble_active",
                u = "constructor__hero_active",
                h = "constructor__info_active",
                p = "constructor__coctail_active",
                f = "constructor__prepare-btn_active",
                m = "constructor__social_active",
                v = "constructor__social_ready",
                g = "constructor__restart-btn_active",
                y = {
                    root: t,
                    drinkBtns: "data-add-drink",
                    bubbles: "data-constructor-bubble-id",
                    heroes: "data-constructor-hero-id",
                    text: "data-constructor-info-id",
                    glasses: "data-constructor-glass-id",
                    social: document.querySelector(".constructor__social"),
                    share: document.getElementById("constructor-share"),
                    shareFb: document.getElementById("constructor-share-fb"),
                    rootDrinks: document.getElementById("list-drinks"),
                    rootBubbles: document.getElementById("list-bubbles"),
                    rootHeroes: document.getElementById("list-heroes"),
                    rootText: document.getElementById("list-text"),
                    rootGlasses: document.getElementById("list-glasses"),
                    btnMake: document.getElementById("btn-make-cocktail"),
                    btnRestart: document.getElementById("constructor-restart"),
                    textTop: document.getElementById("constructor-text-top"),
                    textBottom: document.getElementById("constructor-text-bottom"),
                    cocktailImage: document.getElementById("constructor-cocktail-image"),
                    imageHero: document.getElementById("constructor-hero-image")
                },
                b = function() {
                    var t = e.getData();
                    document.getElementById(n).parentNode.innerHTML = tmpl(n, t.drinks), document.getElementById(o).parentNode.innerHTML = tmpl(o, t.drinks), document.getElementById(s).parentNode.innerHTML = tmpl(s, t.cocktails), document.getElementById("tpl-text").parentNode.innerHTML = tmpl("tpl-text", t.cocktails), document.getElementById(r).parentNode.innerHTML = tmpl(r, t.cocktails)
                };
            return i.addObserver("toggleDrinks", function() {
                ! function() {
                    for (var t = e.getActiveData().drinks, i = y.rootDrinks.querySelectorAll("[" + y.drinkBtns + "]"), n = i.length; n--;) {
                        var o = i[n],
                            s = o.getAttribute(y.drinkBtns),
                            r = y.rootBubbles.querySelector("[" + y.bubbles + "='" + s + "']"); - 1 === t.indexOf(s) ? (o.classList.remove(l), r.classList.remove(d)) : (o.classList.add(l), r.classList.add(d))
                    }
                    t.length ? y.btnMake.classList.add(f) : y.btnMake.classList.remove(f)
                }()
            }), i.addObserver("cocktailReady", function() {
                ! function() {
                    var t = e.getData(),
                        i = e.getActiveData();
                    y.root.classList.add(a);
                    var n = t.cocktails.filter(function(e) {
                        if (e.id === +i.cocktail) return e
                    });
                    if (n[0].shares) y.shareFb.setAttribute("data-url", n[0].shares.facebook);
                    else {
                        var o = $("#constructor-share").data("href");
                        y.shareFb.setAttribute("data-url", o)
                    }
                    y.share.classList.add(m), setTimeout(function() {
                        y.social.classList.add(v)
                    }, 1900), y.btnMake.classList.remove(f), setTimeout(function() {
                        y.btnRestart.classList.add(g)
                    }, 1900);
                    for (var s = y.rootDrinks.querySelectorAll("[" + y.drinkBtns + "]"), r = s.length; r--;) {
                        var d = s[r];
                        d.classList.remove(l), d.classList.remove(c)
                    }
                    for (var b = y.rootHeroes.querySelectorAll("[" + y.heroes + "]"), w = b.length; w--;) b[w].classList.remove(u);
                    y.rootHeroes.querySelector("[" + y.heroes + "='" + i.cocktail + "']").classList.add(u);
                    for (var x = y.rootText.querySelectorAll("[" + y.text + "]"), k = x.length; k--;) x[k].classList.remove(h);
                    y.rootText.querySelector("[" + y.text + "='" + i.cocktail + "']").classList.add(h);
                    for (var S = y.rootGlasses.querySelectorAll("[" + y.glasses + "]"), T = S.length; T--;) S[T].classList.remove(p);
                    y.rootGlasses.querySelector("[" + y.glasses + "='" + i.cocktail + "']").classList.add(p)
                }()
            }), i.addObserver("constructorRestart", function() {
                ! function() {
                    y.root.classList.remove(a), y.btnRestart.classList.remove(g), y.share.classList.remove(m), y.social.classList.remove(v);
                    for (var e = y.rootDrinks.querySelectorAll("[" + y.drinkBtns + "]"), t = e.length; t--;) e[t].classList.add(c);
                    for (var i = y.rootHeroes.querySelectorAll("[" + y.heroes + "]"), n = i.length; n--;) i[n].classList.remove(u);
                    y.rootHeroes.querySelector("[data-constructor-hero-default]").classList.add(u);
                    for (var o = y.rootBubbles.querySelectorAll("[" + y.bubbles + "]"), s = o.length; s--;) o[s].classList.remove(d);
                    for (var r = y.rootText.querySelectorAll("[" + y.text + "]"), l = r.length; l--;) r[l].classList.remove(h);
                    y.rootText.querySelector("[data-constructor-info-default]").classList.add(h);
                    for (var f = y.rootGlasses.querySelectorAll("[" + y.glasses + "]"), b = f.length; b--;) f[b].classList.remove(p);
                    y.rootGlasses.querySelector("[data-constructor-cocktail-default]").classList.add(p)
                }()
            }), b(), {
                draw: b,
                getCtrls: function() {
                    return y
                }
            }
        },
        controller: function(e, t) {
            for (var i = t.getCtrls(), n = i.rootDrinks.querySelectorAll("[" + i.drinkBtns + "]"), o = n.length; o--;) n[o].addEventListener("click", function() {
                var t = this.getAttribute(i.drinkBtns);
                e.toggleDrink(t)
            });
            i.btnMake.addEventListener("click", e.make), i.btnRestart.addEventListener("click", e.restart)
        }
    },
    inputContactCtrl = {
        init: function() {
            inputContactCtrl.events()
        },
        events: function() {
            $(".form__field input, .form__field textarea").on("focus", function() {
                $(this).parent().addClass("focus")
            }), $(".form__field input, .form__field textarea").on("blur", function() {
                $(this).val() || $(this).parent().removeClass("focus")
            })
        }
    },
    menuCtrl = {
        init: function() {
            menuCtrl.events()
        },
        open: function() {
            var e = $("[data-fullpage-nav]");
            $(".btn-menu").addClass("btn-menu_active"), $(".btn-menu__label").addClass("btn-menu__label_hide"), $(".menu").addClass("menu_active"), e.addClass("nav_hide"), $(".header__social").addClass("header__social_active"), $(".lang").addClass("lang_active"), $(".header-scroll").hasClass("header-scroll_active") && ($(".header-scroll").removeClass("header-scroll_active"), $(".header").addClass("header_show"))
        },
        close: function() {
            var e = $("[data-fullpage-nav]");
            $(".btn-menu").removeClass("btn-menu_active"), $(".btn-menu__label").removeClass("btn-menu__label_hide"), $(".menu").removeClass("menu_active"), e.removeClass("nav_hide"), $(".header__social").removeClass("header__social_active"), $(".lang").removeClass("lang_active"), $(".header-scroll").hasClass("header-scroll_active") || 1 == window.nextIndex || ($(".header-scroll").addClass("header-scroll_active"), $(".header").removeClass("header_show"))
        },
        events: function() {
            $(".btn-menu").on("click", function() {
                $(this).hasClass("btn-menu_active") ? menuCtrl.close() : menuCtrl.open()
            })
        }
    },
    videoPlayCtrl = {
        init: function() {
            videoPlayCtrl.events()
        },
        events: function() {
            $(".video").on("click", function() {
                $(".header-scroll").removeClass("header-scroll_active"), client.isMobile || $(".nav").removeClass("nav_show"), $(".video-popup").addClass("video-popup_active"), $("#video").attr("src", $("#video").data("video-src"))
            }), $(".video-popup__popup-close").on("click", function() {
                $(".header-scroll").addClass("header-scroll_active"), $(".video-popup").removeClass("video-popup_active"), $("#video").attr("src", ""), client.isMobile || setTimeout(function() {
                    $(".nav").addClass("nav_show")
                }, 1e3)
            })
        }
    },
    bubblesBg = {
        data: {
            canvasHtml: document.getElementById("bubblesbg"),
            mouseX: 0,
            mouseY: 0,
            color: "#dbce03",
            circlesArray: []
        },
        init: function() {
            var e = bubblesBg,
                t = window.innerWidth,
                i = window.innerHeight;
            e.data.canvasHtml.width = t, e.data.canvasHtml.height = i, e.data.ctx = e.data.canvasHtml.getContext("2d"), e.data.ctx.width = t, e.data.ctx.height = i, e.build(), e.events(), e.loop()
        },
        build: function() {
            for (var e = bubblesBg, t = [{
                    dx: -1,
                    dy: -1
                }, {
                    dx: 2,
                    dy: .2
                }, {
                    dx: 1.3,
                    dy: -1.2
                }, {
                    dx: -.2,
                    dy: 1.8
                }, {
                    dx: 2,
                    dy: 2
                }, {
                    dx: -3,
                    dy: .5
                }, {
                    dx: -1.4,
                    dy: -2.5
                }, {
                    dx: -1.5,
                    dy: -1
                }, {
                    dx: 1.1,
                    dy: .8
                }, {
                    dx: -.3,
                    dy: -1.9
                }, {
                    dx: .2,
                    dy: -2.2
                }], i = t.length; i--;) {
                var n = 10 * Math.random() + 2,
                    o = e.data.canvasHtml.width / 2 + 300,
                    s = e.data.canvasHtml.height / 2 + 50,
                    r = t[i].dx,
                    a = t[i].dy,
                    l = 5 * Math.random() + 1,
                    c = new Circle(e.data.ctx, o, s, r, a, n, e.data.color, l);
                e.data.circlesArray.push(c)
            }
        },
        setColor: function(e) {
            for (var t = bubblesBg, i = t.data.circlesArray.length; i--;) t.data.circlesArray[i].setColor(e)
        },
        loop: function() {
            var e = bubblesBg;
            e.data.ctx.clearRect(0, 0, e.data.ctx.width, e.data.ctx.height);
            for (var t = e.data.circlesArray.length; t--;) e.data.circlesArray[t].update();
            requestAnimationFrame(e.loop)
        },
        events: function() {
            var e = bubblesBg;
            window.addEventListener("mousemove", function(t) {
                e.data.mouseX = t.x, e.data.mouseY = t.y;
                for (var i = e.data.circlesArray.length; i--;) e.data.circlesArray[i].origX = t.x, e.data.circlesArray[i].origY = t.y
            }), window.addEventListener("resize", function() {
                var t = window.innerWidth,
                    i = window.innerHeight;
                e.data.canvasHtml.width = t, e.data.canvasHtml.height = i, console.log(i), e.data.ctx.width = t, e.data.ctx.height = i
            })
        }
    };

function Circle(e, t, i, n, o, s, r, a) {
    this.x = t, this.y = i, this.dx = n, this.dy = o, this.radius = s, this.color = r, this.strokeWidth = a, this.origX = t, this.origY = i, this.lastX = t, this.lastY = i, this.draw = function() {
        e.beginPath(), e.strokeStyle = this.color, e.lineWidth = this.strokeWidth, e.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), 0 != this.strokeWidth && e.stroke()
    }, this.setColor = function(e) {
        this.color = e
    }, this.update = function() {
        this.x += this.dx, this.y += this.dy;
        var e = Math.pow(this.lastX - this.x, 2) + Math.pow(this.lastY - this.y, 2);
        4900 < e && (this.radius += 1.3, this.strokeWidth -= .4, this.strokeWidth < 0 && (this.strokeWidth = 0)), 14400 < e && (this.x = this.origX, this.y = this.origY, this.radius = s, this.strokeWidth = a, this.lastX = this.origX, this.lastY = this.origY), this.draw()
    }
}
window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
    window.setTimeout(e, 1e3 / 60)
}, window.cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function(e) {
    window.clearTimeout(e)
};
var bubblesBottle = {
    data: {
        canvasHtml: document.getElementById("bubbles-bottle"),
        circlesArray: []
    },
    init: function() {
        var e = bubblesBottle;
        e.data.canvasHtml.width = 470, e.data.canvasHtml.height = 540, e.data.ctx = e.data.canvasHtml.getContext("2d"), e.data.ctx.width = 470, e.data.ctx.height = 540, e.build(), e.events(), e.loop()
    },
    build: function() {
        for (var e = bubblesBottle, t = ["rgba(218, 206, 3, .51)", "rgba(255, 176, 6, .51)", "rgba(255, 240, 0, .51)", "rgba(255, 240, 0, 1)", "rgba(255, 240, 0, 1)", "rgba(255, 186, 0, .42)"], i = 50; i--;) {
            var n = 18 * Math.random() + 2,
                o = e.data.canvasHtml.width / 2,
                s = e.data.canvasHtml.height - 50,
                r = 6 * Math.random() - 3,
                a = 2 * Math.random() - 5,
                l = 9 * Math.random() + 1,
                c = t[Math.floor(Math.random() * (t.length - 0)) + 0],
                d = new CircleBottle(e.data.ctx, o, s, r, a, n, c, l);
            e.data.circlesArray.push(d)
        }
    },
    loop: function() {
        var e = bubblesBottle;
        e.data.ctx.clearRect(0, 0, e.data.ctx.width, e.data.ctx.height);
        for (var t = e.data.circlesArray.length; t--;) e.data.circlesArray[t].update();
        e.data.request = requestAnimationFrame(e.loop)
    },
    pause: function() {
        cancelAnimationFrame(bubblesBottle.data.request)
    },
    resume: function() {
        var e = bubblesBottle;
        e.data.request = requestAnimationFrame(e.loop)
    },
    events: function() {}
};

function CircleBottle(e, t, i, n, o, s, r, a) {
    this.x = t, this.y = i, this.dx = n, this.dy = o, this.radius = s, this.color = r, this.strokeWidth = a, this.draw = function() {
        e.beginPath(), e.strokeStyle = this.color, e.lineWidth = this.strokeWidth, e.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), 0 != this.strokeWidth && e.stroke()
    }, this.update = function() {
        this.x += this.dx, this.y += this.dy, Math.pow(bubblesBottle.data.canvasHtml.width / 2 - this.x, 2), Math.pow(bubblesBottle.data.canvasHtml.height - 20 - this.y, 2);
        var e = 0;
        (this.x - this.radius < 70 || this.x + this.radius > bubblesBottle.data.canvasHtml.width - 70) && (e = 1), this.y - this.radius < 70 && (e = 1), e && (this.radius += 1.3, this.strokeWidth -= .4, this.strokeWidth < 0 && (this.strokeWidth = 0)), (this.x - this.radius < 5 || this.x + this.radius > bubblesBottle.data.canvasHtml.width - 5) && (this.x = t, this.y = i, this.radius = s, this.strokeWidth = a), this.y - this.radius < 5 && (this.x = t, this.y = i, this.radius = s, this.strokeWidth = a), this.draw()
    }
}
var bottleRotate = {
        data: {
            sequenceTop: {
                inited: !1,
                nFrames: 30,
                current: 30,
                frames: $("#sequence-top > img")
            },
            sequenceBottom: {
                inited: !1,
                nFrames: 30,
                current: 30,
                frames: $("#sequence-bottom > img")
            }
        },
        init: function(e) {
            var t = bottleRotate.data[e],
                i = 1;
            t.inited || t.frames.each(function(e, n) {
                n.dataset.seqSrc && (n.src = n.dataset.seqSrc, n.onload = function() {
                    (i += 1) == t.frames.length && (t.inited = !0)
                })
            })
        },
        bindMouse: function(e) {
            var t = bottleRotate;
            $(window).on("mousemove", null, t.data[e], t.setFrame)
        },
        unbindMouse: function() {
            var e = bottleRotate;
            $(window).off("mousemove", e.setFrame)
        },
        setFrame: function(e) {
            if (e.data.inited) {
                Math.abs(2 * e.pageX / window.innerWidth - 1);
                var t = Math.round(e.pageX / window.innerWidth * e.data.nFrames);
                t !== e.data.current && (e.data.frames.eq(e.data.current).css("opacity", 0), e.data.frames.eq(t).css("opacity", 1), e.data.current = t)
            }
        }
    },
    isDomReady = 0,
    isWindowLoaded = 0;
window.nextIndex = 1;
var completedSlides = [],
    outoxApp = {
        checkLoad: function() {
            isDomReady && isWindowLoaded && outoxApp.init()
        },
        init: function() {
            tools.init(["backgrounds", "preloader", "modals"]), $("#constructor").length && constructor.init(), $("[data-modal]").length && inputContactCtrl.init(), $(".menu").length && menuCtrl.init(), $(".video").length && videoPlayCtrl.init(), client.isMobile || afficheHovers.init(), client.isMobile || bubblesBottle.init(), client.isMobile || (bottleRotate.init("sequenceTop"), bottleRotate.init("sequenceBottom")), this.initPlugins()
        },
        initPlugins: function() {
            var e = $("[data-slick]");
            e.length && e.slick({
                responsive: [{
                    breakpoint: 1201,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }]
            }), $(document).on("click", "[data-button-id]", function(e) {
                e.preventDefault;
                var t = 0 + $(this).data("button-id");
                console.log(t), menuCtrl.close(), $.fn.fullpage.moveTo(t, 0), 13 === t && ($.fn.fp_scrolloverflow.iscrollHandler.iScrollInstances[3].y = 0, $("[data-section-id='13']").closest(".fp-scroller").css({
                    transform: "translate(0px, 0) translateZ(0px)",
                    "-webkit-transform": "translate(0px, 0) translateZ(0px)"
                })), setTimeout(function() {
                    $.fn.fullpage.setAllowScrolling(!0)
                }, 1500)
            });
            var t = $("#fullPageScroll"),
                i = function(e) {
                    return {
                        1: $("[data-section-id='1']"),
                        2: $("[data-section-id='2']"),
                        3: $("[data-section-id='3']"),
                        4: $("[data-section-id='4']"),
                        5: $("[data-section-id='5']"),
                        6: $("[data-section-id='6']"),
                        7: $("[data-section-id='7']"),
                        8: $("[data-section-id='8']"),
                        9: $("[data-section-id='9']"),
                        10: $("[data-section-id='10']"),
                        11: $("[data-section-id='11']"),
                        12: $("[data-section-id='12']"),
                        13: $("[data-section-id='13']"),
                        14: $("[data-section-id='14']"),
                        15: $("[data-section-id='15']")
                    }[e]
                };
            if (t.length) {
                var n = $("[data-feature]"),
                    o = $("[data-feature-morning]"),
                    s = $("[data-bg-main]"),
                    r = $("[data-bg-text]"),
                    a = $("[data-bg-feature]"),
                    l = $("[data-bg-feature-morning]"),
                    c = $("[data-fullpage-nav]"),
                    d = ($("[data-section-nav]"), $(".header")),
                    u = $(".header-scroll"),
                    h = -1 < navigator.userAgent.toLowerCase().indexOf("android");
                h && $(document).find("[data-animation]").attr("data-animation-complete", "true"), t.fullpage({
                    fixedElements: ".menu",
                    sectionSelector: ".fullPageSection",
                    scrollOverflow: !0,
                    scrollbar: !1,
                    lockAnchors: !0,
                    scrollingSpeed: 1200,
                    normalScrollElements: ".menu__wrap",
                    afterLoad: function(e, t) {
                        i(t).find('[data-animation-title="incomplete"]').attr("data-animation-title"), 1 === t && bottleRotate.bindMouse("sequenceTop"), 13 === t ? ($(".article__bottle").addClass("article__bottle_active"), bottleRotate.bindMouse("sequenceBottom")) : $(".article__bottle").removeClass("article__bottle_active"), 2 == t ? n.addClass("feature_show") : n.removeClass("feature_show"), 3 == t ? o.addClass("feature_show") : o.removeClass("feature_show"), 2 == t || 3 == t || 4 == t || 5 == t || 7 == t || 8 == t || 9 == t || 10 == t || 11 == t || 12 == t || 13 == t ? r.addClass("bg__h1_show") : r.removeClass("bg__h1_show"), 2 != t && 3 != t && 4 != t && 5 != t && 6 != t && 7 != t && 8 != t && 9 != t && 10 != t && 11 != t && 12 != t || client.isMobile ? c.removeClass("nav_show") : c.addClass("nav_show"), "constructorSection" !== e || $(".constructor").hasClass("constructor_completed") || $("[data-anchor='constructorSection']").find(".constructor__drink").addClass("constructor__drink_ready"), 13 === t && $(window).trigger("resize")
                    },
                    onLeave: function(e, t, n) {
                        window.nextIndex = t;
                        var o = i(t),
                            p = o.data("bg-html"),
                            f = o.find('[data-animation-title="incomplete"]');
                        if ("incomplete" == f.attr("data-animation-title") && !h) {
                            var m = 500;
                            2 !== t && 3 !== t || (m = 1500), setTimeout(function() {
                                anime.timeline({
                                    loop: !1
                                }).add({
                                    targets: '[data-section-id="' + t + '"] .ml10 .letter',
                                    rotateY: [-90, 0],
                                    duration: 3300,
                                    delay: function(e, t) {
                                        return 45 * t
                                    }
                                })
                            }, m)
                        }
                        f.attr({
                            "data-animation-title": "complete"
                        }), 1 != t && 2 != t && 3 != t && setTimeout(function() {
                            o.find("[data-animation]").attr("data-animation-complete", "true")
                        }, 600), 2 !== t && 3 !== t || setTimeout(function() {
                            o.find("[data-animation]").attr("data-animation-complete", "true")
                        }, 2e3), 1 !== t ? (bubblesBottle.pause(), $(".btn-menu").hasClass("btn-menu_active") || (d.removeClass("header_show"), u.addClass("header-scroll_active"))) : $(".btn-menu").hasClass("btn-menu_active") || (d.addClass("header_show"), u.removeClass("header-scroll_active")), 2 == t ? (a.addClass("bg__pic_show"), a.removeClass("bg__pic_hide")) : (a.addClass("bg__pic_hide"), a.removeClass("bg__pic_show")), 3 == t ? (l.addClass("bg__pic_show"), l.removeClass("bg__pic_hide")) : (l.addClass("bg__pic_hide"), l.removeClass("bg__pic_show")), 1 == t && (s.addClass("bg_poster"), s.removeClass("bg_holiday bg_feature bg_feature-morning bg_party bg_energy bg_night bg_affiche bg_contact"), r.removeClass("bg__h1_show"), bubblesBg.setColor("#dbce03"), bubblesBottle.resume(), bottleRotate.bindMouse("sequenceTop")), 2 == t && (s.addClass("bg_feature"), s.removeClass("bg_poster bg_feature-morning bg_holiday bg_party bg_energy bg_night bg_affiche bg_contact"), r.addClass("animated"), setTimeout(function() {
                            r.addClass("opacity")
                        }), setTimeout(function() {
                            r.html(p), r.removeClass("opacity")
                        }, 400), setTimeout(function() {
                            r.removeClass("animated")
                        }, 800), -1 < completedSlides.indexOf(t) && r.addClass("super-important"), bubblesBg.setColor("#a2ff04")), 3 == t && (s.addClass("bg_feature-morning"), s.removeClass("bg_poster bg_feature bg_holiday bg_party bg_energy bg_night bg_affiche bg_contact"), r.addClass("animated"), setTimeout(function() {
                            r.addClass("opacity")
                        }), setTimeout(function() {
                            r.html(p), r.removeClass("opacity")
                        }, 400), setTimeout(function() {
                            r.removeClass("animated")
                        }, 800), -1 < completedSlides.indexOf(t) && r.addClass("super-important"), bubblesBg.setColor("#f0ff00")), 4 != t && 5 != t && 6 != t || (s.addClass("bg_holiday"), s.removeClass("bg_poster bg_feature bg_feature-morning bg_party bg_energy bg_night bg_affiche bg_contact"), r.html(p), bubblesBg.setColor("#00fcff")), 7 != t && 8 != t || (s.addClass("bg_party"), s.removeClass("bg_poster bg_feature bg_feature-morning bg_holiday bg_energy bg_night bg_affiche bg_contact"), bubblesBg.setColor("#ac1de6"), r.html(p)), 9 != t && 10 != t || (s.addClass("bg_energy"), s.removeClass("bg_poster bg_feature bg_feature-morning bg_holiday bg_party bg_night bg_affiche bg_contact"), r.html(p), bubblesBg.setColor("#a6ff00")), 11 != t && 12 != t || (s.addClass("bg_night"), s.removeClass("bg_poster bg_feature bg_feature-morning bg_holiday bg_party bg_energy bg_affiche bg_contact"), r.html(p), bubblesBg.setColor("#f0ff00")), 13 == t && (s.addClass("bg_affiche"), s.removeClass("bg_poster bg_feature bg_feature-morning bg_holiday bg_party bg_energy bg_night bg_contact"), r.html(p), bubblesBg.setColor("#00fcff"), c.removeClass("nav_show"), bottleRotate.bindMouse("sequenceBottom")), 14 == t && (s.addClass("bg_contact"), s.removeClass("bg_poster bg_feature bg_feature-morning bg_holiday bg_party bg_energy bg_night bg_affiche"), r.html(p), bubblesBg.setColor("none")), 5 == t || 6 == t || 8 == t || 10 == t || 12 == t || 13 == t ? r.addClass("mood bg__h1_translate") : r.removeClass("mood bg__h1_translate"), 6 == t && r.removeClass("bg__h1_show"), 2 != t && 3 != t && r.removeClass("super-important");
                        var v = {
                            2: 1,
                            3: 2,
                            4: 3,
                            5: 3,
                            6: 3,
                            7: 4,
                            8: 4,
                            9: 5,
                            10: 5,
                            11: 6,
                            12: 6
                        };
                        if (v.hasOwnProperty(t)) {
                            var g = v[t],
                                y = $("[data-section-nav='" + g + "']");
                            $("[data-section-nav]").removeClass("nav__item_active"), y.addClass("nav__item_active").prevAll("[data-section-nav]").addClass("nav__item_active"), $(".menu__link").removeClass("menu__link_active"), $('.menu__link[data-button-id="' + t + '"]').addClass("menu__link_active")
                        }
                        completedSlides.push(t), 4 !== t && 9 !== t && 11 !== t || "down" !== n || (console.log(t), setTimeout(function() {
                            $.fn.fullpage.moveSectionDown()
                        }, 1200)), 7 === t && "down" === n && setTimeout(function() {
                            $.fn.fullpage.moveSectionDown()
                        }, 1700), 1 !== t && 13 !== t && bottleRotate.unbindMouse()
                    }
                }), $.fn.fullpage.reBuild(), $.fn.fullpage.setAllowScrolling(!1), setTimeout(function() {
                    $.fn.fullpage.reBuild(), preloaderCtrl.init()
                }, 1e3)
            }
        }
    },
    afficheHovers = {
        tiltSettings: [{
            movement: {
                imgWrapper: {
                    translation: {
                        x: 10,
                        y: 10,
                        z: 30
                    },
                    rotation: {
                        x: 0,
                        y: -10,
                        z: 0
                    },
                    reverseAnimation: {
                        duration: 200,
                        easing: "easeOutQuad"
                    }
                },
                caption: {
                    rotation: {
                        x: 0,
                        y: 0,
                        z: 2
                    },
                    reverseAnimation: {
                        duration: 200,
                        easing: "easeOutQuad"
                    }
                }
            }
        }],
        init: function() {
            imagesLoaded(document.querySelector(".loading"), {
                background: !0
            }, function() {
                document.querySelector(".loading").classList.remove("loading");
                var e = 0;
                [].slice.call(document.querySelectorAll("a.event")).forEach(function(t, i) {
                    e = i % 2 == 0 ? e + 1 : e, new TiltFx(t, afficheHovers.tiltSettings[e - 1])
                })
            })
        }
    };

function parseResponse(e) {
    if (e.replaces instanceof Array)
        for (var t = 0, i = e.replaces.length; t < i; t++) $(e.replaces[t].what).replaceWith(e.replaces[t].data);
    if (e.append instanceof Array)
        for (t = 0, i = e.append.length; t < i; t++) $(e.append[t].what).append(e.append[t].data);
    if (e.content instanceof Array)
        for (t = 0, i = e.content.length; t < i; t++) $(e.content[t].what).html(e.content[t].data);
    e.js && $("body").append(e.js), e.refresh && window.location.reload(!0), e.redirect && (window.location.href = e.redirect)
}
$(document).on("preloaderDone", function() {
    $("[data-animation]").length && animationsCtrl.init()
}), $(window).load(function() {
    isWindowLoaded = 1, outoxApp.checkLoad()
}), $(document).ready(function() {
    var e, t, i;
    isDomReady = 1, outoxApp.checkLoad(), navigator.sayswho = (i = (t = navigator.userAgent).match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [], /trident/i.test(i[1]) ? "IE " + ((e = /\brv[ :]+(\d+)/g.exec(t) || [])[1] || "") : "Chrome" === i[1] && null != (e = t.match(/\b(OPR|Edge)\/(\d+)/)) ? e.slice(1).join(" ").replace("OPR", "Opera") : (i = i[2] ? [i[1], i[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (e = t.match(/version\/(\d+)/i)) && i.splice(1, 1, e[1]), i.join(" "))), "Safari 9" == navigator.sayswho && $("body").addClass("safari9"), ~navigator.sayswho.indexOf("IE") && $("body").addClass("ie"), ~navigator.sayswho.indexOf("Edge") && $("body").addClass("edge"), $(document).on("click", "footer .footer__logo", function(e) {
        e.preventDefault(), $.fn.fullpage.moveTo(1, 0)
    })
}), $(document).on("click", ".contact-modal", function(e) {
    return jQuery.ajax({
        cache: !1,
        type: "POST",
        dataType: "json",
        success: function(e) {
            parseResponse(e)
        },
        error: function(e) {
            console.log(e.responseText)
        },
        url: $(this).data("href")
    }), !1
}), $(document).on("beforeSubmit", "#request-form", function(e) {
    e.preventDefault();
    var t = new FormData(this);
    return jQuery.ajax({
        cache: !1,
        type: "POST",
        dataType: "json",
        data: t,
        processData: !1,
        contentType: !1,
        success: function(e) {
            parseResponse(e)
        },
        error: function(e) {
            console.log(e)
        },
        url: this.action
    }), !1
}), $(function() {
    $(document).on("click", "#constructor-share-fb", function(e) {
        var t = $(this);
        e.preventDefault();
        var i, n = t.attr("data-url") ? t.attr("data-url") : window.location.href,
            o = encodeURIComponent(n);
        switch (!0) {
            case t.hasClass("social__item_facebook"):
                i = "https://www.facebook.com/sharer/sharer.php?u=" + o, console.log(i), window.open(i, "", "top=" + ($(window).height() / 2 - 125) + ",left=" + ($(window).width() / 2 - 275) + ",toolbar=0,status=0,width=550,height=300")
        }
    })
});