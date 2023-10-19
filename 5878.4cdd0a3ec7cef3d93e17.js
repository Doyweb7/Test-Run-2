(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [5878], {
        27465: function(e, t, n) {
            "use strict";
            var r = n(67294),
                o = n(84751);
            t.Z = function(e) {
                var t = (0, o.v9)((function(e) {
                        return e.slots
                    })),
                    n = {
                        __html: t[e.name]
                    };
                return r.createElement("div", {
                    dangerouslySetInnerHTML: n
                })
            }
        },
        45461: function(e, t, n) {
            "use strict";
            var r = n(67294),
                o = n(1216),
                i = n(38435),
                a = n(90624);
            t.Z = function(e) {
                var t, n, c, s, l, u, d = (0, a.Z)(e.user),
                    v = e.id ? e.id.replace("avatar-h-", "") : 32,
                    m = null !== (t = e.disableLink) && void 0 !== t && t,
                    f = /s[0-9]{2}-c/;
                if (!d) return "";
                var h = encodeURI("/images/avatars/default.png"),
                    p = d.avatar;
                if (p)
                    if (-1 !== p.indexOf("googleusercontent"))
                        if (p.indexOf("=") > -1) {
                            var g = p.split("=");
                            g.forEach((function(e, t) {
                                e.match(f) && (g[t] = "s".concat(v, "-c"))
                            })), p = g.join("=")
                        } else p += "=s".concat(v, "-c");
                else -1 !== p.indexOf("graph.facebook.com") && (p = "".concat(p, "&width=").concat(v, "&height=").concat(v));
                else p = d.email ? "https://www.gravatar.com/avatar/".concat(d.email, "?s=").concat(v, "&d=").concat(h) : "".concat(h);
                return p = p.replace(/avatarSize/g, v), r.createElement(o.ZP, {
                    height: 32,
                    offset: 100,
                    once: !0,
                    placeholder: m ? r.createElement("img", {
                        className: "".concat(null !== (n = e.id) && void 0 !== n ? n : "avatar-h-40", " avatar-img ").concat(null !== (c = e.customClass) && void 0 !== c ? c : ""),
                        alt: "User Avatar",
                        src: h
                    }) : r.createElement("img", {
                        className: "".concat(null !== (s = e.id) && void 0 !== s ? s : "avatar-h-40", " avatar-img"),
                        alt: "User Avatar",
                        src: h
                    })
                }, r.createElement(i.Z, {
                    objectId: e.objectId,
                    className: null == e.userId && "Anonymous" == d.name ? "cursor-default" : null,
                    type: e.type,
                    user: d,
                    disableLink: !0
                }, r.createElement("img", {
                    className: "".concat(null !== (l = e.id) && void 0 !== l ? l : "h-40", " avatar-img ").concat("rounded-full z-10", " ").concat(null !== (u = e.customClass) && void 0 !== u ? u : ""),
                    alt: "User Avatar",
                    src: p,
                    name: "user-avatar",
                    onError: function(e) {
                        var t = e.currentTarget;
                        t.onerror = null, t.src = "".concat(h)
                    }
                })))
            }
        },
        38435: function(e, t, n) {
            "use strict";
            var r = n(87462),
                o = n(45987),
                i = n(67294),
                a = n(60371),
                c = n(59802),
                s = n(84751),
                l = n(70399),
                u = n(54885),
                d = i.memo((function(e) {
                    var t = e.user,
                        n = e.disableWikiUser,
                        d = void 0 === n || n,
                        v = e.linkText,
                        m = e.disableLink,
                        f = void 0 === m || m,
                        h = e.objectId,
                        p = void 0 === h ? 0 : h,
                        g = e.type,
                        y = void 0 === g ? "Question" : g,
                        b = (0, o.Z)(e, ["user", "disableWikiUser", "linkText", "disableLink", "objectId", "type"]),
                        E = (0, c.Z)("disable_wiki_user_link", !1) || d,
                        C = e.children ? e.children : null,
                        w = (0, s.v9)((function(e) {
                            return null == e ? void 0 : e.pageData
                        })).location,
                        k = void 0 !== w && w,
                        Z = t.user_name || t.username,
                        _ = C || v || (null == t ? void 0 : t.name) || Z,
                        A = function() {
                            "function" == typeof e.onClick && e.onClick(), k ? (0, l.qP)({
                                eventCategory: "".concat(k, " Engagement"),
                                eventAction: "User Profile Clicked",
                                eventLabel: '{"'.concat(y, ' ID": "').concat(p, '", "User ID": "').concat(t.id, '"}'),
                                eventValue: 0
                            }) : (0, u.Rq)(t.id)
                        };
                    return "answerbot" == (null == t ? void 0 : t.username) ? i.createElement(a.Z, (0, r.Z)({
                        onClick: A,
                        href: "/pages/answerbot"
                    }, b), " ", _) : f || E && ("Wiki User" == (null == t ? void 0 : t.name) || !_) ? i.createElement("span", {
                        className: "body1"
                    }, _ || "Wiki User") : t && Z || C ? "Anonymous" != (null == t ? void 0 : t.name) ? i.createElement(a.Z, (0, r.Z)({
                        onClick: A,
                        href: "".concat(Z ? "/u/".concat(Z) : "/page/wiki-users")
                    }, b), " ", _) : i.createElement(a.Z, b, _) : d ? "" : "Anonymous" == (null == t ? void 0 : t.name) ? i.createElement(a.Z, b, null == t ? void 0 : t.name) : i.createElement(a.Z, (0, r.Z)({
                        href: "/page/wiki-users",
                        rel: "nofollow"
                    }, b), v || "Wiki User")
                }));
            t.Z = d
        },
        68116: function(e, t, n) {
            "use strict";
            var r = n(67294),
                o = n(60371),
                i = n(27157),
                a = n(85618);
            t.Z = function(e) {
                var t = e.isRail,
                    n = void 0 !== t && t,
                    c = (0, i.S_)(),
                    s = function() {
                        if (!c) return null;
                        window.google.accounts.id.disableAutoSelect()
                    };
                return n ? r.createElement("a", {
                    className: "flex caption1 px-2 py-1 items-center cursor-pointer hover:no-underline hover:bg-white rounded",
                    onClick: s,
                    href: "/logout"
                }, "Logout") : r.createElement("button", {
                    className: "body1"
                }, r.createElement(o.Z, {
                    href: "/logout",
                    onClick: s,
                    className: "headerMenuButton"
                }, r.createElement(a.Z, {
                    src: "/icons/logoutBtnIcon.svg",
                    width: 20,
                    height: 20,
                    lazyLoad: !1,
                    className: "self-center"
                }), r.createElement("span", {
                    className: "body1 ml-2"
                }, "Logout")))
            }
        },
        8624: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(29439),
                o = n(67294),
                i = n(85618),
                a = n(98655),
                c = n(16639),
                s = n(84751),
                l = n(52301),
                u = n(27157),
                d = n(52674),
                v = n(30659);
            t.default = function(e) {
                var t, n = e.isLoading,
                    m = void 0 !== n && n,
                    f = e.hideIcon,
                    h = void 0 !== f && f,
                    p = e.customSearchInput,
                    g = void 0 === p ? "" : p,
                    y = e.searchInputPlaceholder,
                    b = void 0 === y ? "Ask Questions and Find Answers" : y,
                    E = e.setValue,
                    C = void 0 === E ? function() {
                        return null
                    } : E,
                    w = e.setPrefilledResults,
                    k = void 0 === w ? function() {
                        return null
                    } : w,
                    Z = e.id,
                    _ = void 0 === Z ? "search-input" : Z,
                    A = e.onClick,
                    N = void 0 === A ? function() {
                        return null
                    } : A,
                    x = e.autoFocus,
                    L = void 0 !== x && x,
                    S = o.useState(null !== (t = (0, c.Z)()) && void 0 !== t ? t : ""),
                    P = (0, r.Z)(S, 2),
                    M = P[0],
                    q = P[1],
                    O = "home" == (0, s.v9)((function(e) {
                        var t;
                        return null == e || null === (t = e.pageData) || void 0 === t ? void 0 : t.route
                    })),
                    T = o.useState(!1),
                    I = (0, r.Z)(T, 2),
                    j = I[0],
                    R = I[1],
                    D = (0, s.I0)();
                o.useEffect((function() {
                    (0, u.S_)() && R((0, d.xz)())
                }), []);
                return o.createElement("div", {
                    className: "max-center-column-width bg-white grid grid-cols-12 h-9 rounded-md ".concat(g),
                    onClick: function(e) {
                        e.stopPropagation(), N()
                    }
                }, !h && o.createElement(i.Z, {
                    src: "/icons/searchIcon.svg",
                    width: 16,
                    height: 16,
                    lazyLoad: !1,
                    className: "col-span-1 self-center justify-self-center h-4 md:-ml-6"
                }), o.createElement("input", {
                    autoComplete: "off",
                    className: "placeholder-charcoal rounded-md body1 outline-none ".concat(O ? "col-span-11 pl-2" : M.length > 1 && !h || h || m ? "col-span-9 md:-ml-6" : "col-span-10 md:-ml-6"),
                    id: _,
                    value: M,
                    onChange: function(e) {
                        e.preventDefault(), C(e.target.value), q(e.target.value)
                    },
                    placeholder: b,
                    name: "q",
                    autoFocus: L
                }), !m && (null == M ? void 0 : M.length) > 1 && o.createElement(i.Z, {
                    src: "/icons/cancelIcon.svg",
                    width: 20,
                    height: 20,
                    lazyLoad: !1,
                    className: "col-span-1 self-center ".concat(!O && "md:justify-self-end", " justify-self-center cursor-pointer md:-mr-6"),
                    onClick: function() {
                        C(""), q(""), k([]), document.getElementById(_).focus()
                    }
                }), m && o.createElement("span", {
                    className: "text-primaryColor self-center justify-self-center"
                }, o.createElement(a.Z, {
                    className: "md:ml-0 md:-mr-6"
                })), !O && o.createElement("svg", {
                    viewBox: "0 0 20 18",
                    className: "w-4 h-4 col-span-1 self-center justify-self-center ".concat(j ? "text-primaryColor" : "text-grey", " cursor-pointer md:-mr-6"),
                    onClick: function(e) {
                        return function(e) {
                            e.stopPropagation(), (0, v.a2)(), D(l.N.openModal("advSearch", {
                                searchInput: M
                            }))
                        }(e)
                    }
                }, o.createElement("use", {
                    xlinkHref: "#adv-config",
                    fill: "currentColor"
                })))
            }
        },
        66356: function(e, t, n) {
            "use strict";
            var r = n(87462),
                o = n(93433),
                i = n(29439),
                a = n(67294),
                c = n(84751),
                s = n(25280),
                l = n(31821),
                u = n(65376),
                d = n(50813),
                v = n(40684),
                m = n(30659),
                f = n(20051),
                h = n(16639),
                p = n(27157),
                g = (0, v.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "SuggestionContainer"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(6671).then(n.bind(n, 8887))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return 8887
                    }
                }, {
                    ssr: !1
                }),
                y = (0, v.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "SearchInput"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.resolve().then(n.bind(n, 8624))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return 8624
                    }
                }),
                b = function(e) {
                    var t, n, v, b = e.searchElementName,
                        E = void 0 === b ? "input field" : b,
                        C = e.autoFocus,
                        w = void 0 !== C && C,
                        k = e.noTop,
                        Z = void 0 !== k && k,
                        _ = e.onClick,
                        A = void 0 === _ ? function() {
                            return null
                        } : _,
                        N = e.isModal,
                        x = void 0 !== N && N,
                        L = (0, a.useState)(""),
                        S = (0, i.Z)(L, 2),
                        P = S[0],
                        M = S[1],
                        q = (0, a.useState)(-2),
                        O = (0, i.Z)(q, 2),
                        T = O[0],
                        I = O[1],
                        j = (0, a.useState)(!0),
                        R = (0, i.Z)(j, 2),
                        D = R[0],
                        H = R[1],
                        z = (0, l.Z)(),
                        V = null !== (t = null === (n = (0, h.Z)()) || void 0 === n ? void 0 : n.replace("?", "")) && void 0 !== t ? t : "",
                        B = (0, c.v9)((function(e) {
                            var t, n;
                            return null == e || null === (t = e.pageData) || void 0 === t || null === (n = t.content) || void 0 === n ? void 0 : n.alsoAsked
                        })),
                        F = (0, a.useState)(null != B ? B : null !== (v = JSON.parse((0, p.S_)() && window.sessionStorage.getItem("".concat(null == V ? void 0 : V.toLowerCase(), "_search")))) && void 0 !== v ? v : []),
                        G = (0, i.Z)(F, 2),
                        Q = G[0],
                        U = G[1],
                        W = (0, s.Z)("question-search", "/question/search?q=" + P, e.questionSearch ? P : ""),
                        Y = (0, i.Z)(W, 2),
                        K = Y[0],
                        J = Y[1],
                        X = a.useMemo((function() {
                            return (0, o.Z)(K.length > 10 ? K.slice(0, 10) : K)
                        }), [K]),
                        $ = K[K.length - 1],
                        ee = (0, f.Z)();
                    return (0, a.useEffect)((function() {
                        D && !ee && (0, m.MW)(P, z ? "Closed Search container" : "Clicked away")
                    }), [D]), (0, a.useEffect)((function() {
                        Q.length > 0 && w && H(!1)
                    }), []), (0, a.useEffect)((function() {
                        !window.sessionStorage.getItem("".concat(null == P ? void 0 : P.toLowerCase(), "_search")) && !J && P.length > 0 && K.length > 0 && window.sessionStorage.setItem("".concat(null == P ? void 0 : P.toLowerCase(), "_search"), JSON.stringify(X))
                    }), [K]), a.createElement("div", {
                        onKeyDown: function(e) {
                            switch (H(!1), e.target.value.length <= 3 && U([]), e.keyCode) {
                                case 9:
                                case 40:
                                    e.preventDefault();
                                    var t = T == X.length - 1 ? -1 : T + 1;
                                    I(t);
                                    break;
                                case 13:
                                    if (0 == P.length) break;
                                    T <= -1 ? ((0, m.bR)(P), (0, u.t)("/search?q=".concat(encodeURIComponent(P)))) : -2 != T && (e.preventDefault(), window.location = (0, d.G)(X[T]));
                                    break;
                                case 27:
                                    H(!0), M(""), I(-2);
                                    break;
                                case 38:
                                    e.preventDefault();
                                    var n = -2 == T ? X.length - 1 : T - 1;
                                    I(n)
                            }
                        },
                        onMouseOver: function() {
                            g.preload()
                        },
                        onClick: function() {
                            return A()
                        },
                        className: "w-full"
                    }, a.createElement(y, (0, r.Z)({
                        onClick: function() {
                            return D && (0, m.QA)(E), void H(!1)
                        },
                        isLoading: J,
                        setValue: M,
                        value: P
                    }, e, {
                        autoFocus: w,
                        setPrefilledResults: U
                    })), a.createElement(g, {
                        suggestions: 0 == X.length ? Q : X,
                        query: P.toLowerCase(),
                        numAnswers: $,
                        faytSearch: 0 == P.length ? V : P,
                        cursor: T,
                        isModal: x,
                        setHideResults: H,
                        hideResults: D,
                        noTop: Z
                    }))
                };
            t.Z = b
        },
        4670: function(e, t, n) {
            "use strict";
            var r = n(67294),
                o = n(59802),
                i = n(84751),
                a = n(52301),
                c = n(30659),
                s = n(31821),
                l = n(85618);
            t.Z = function(e) {
                var t = e.forceMobile,
                    n = void 0 !== t && t,
                    u = e.className,
                    d = (0, o.Z)("enable_s1_menu", !1),
                    v = (0, i.I0)(),
                    m = (0, s.Z)() || n ? "Mobile " : "",
                    f = function(e) {
                        v(a.N.openModal(e))
                    };
                return r.createElement(l.Z, {
                    src: "/icons/searchGlassWhiteIcon.svg",
                    width: 20,
                    height: 20,
                    lazyLoad: !1,
                    className: "".concat(u, " self-center"),
                    onClick: function() {
                        (0, c.QA)("".concat(m, "Search Glass")), m && f(d ? "s1SideMenu" : "search")
                    }
                })
            }
        },
        13845: function(e, t, n) {
            "use strict";
            var r = n(67294);
            t.Z = function() {
                return r.createElement("svg", {
                    style: {
                        display: "none"
                    }
                }, r.createElement("defs", null, r.createElement("symbol", {
                    id: "bulleted-icon"
                }, r.createElement("path", {
                    d: "M7 10h9V8H7v2zm0-7v2h9V3H7zm0 12h9v-2H7v2zm-4-5h2V8H3v2zm0-7v2h2V3H3zm0 12h2v-2H3v2z",
                    fill: "currentColor"
                })), r.createElement("symbol", {
                    id: "numbered-icon"
                }, r.createElement("path", {
                    d: "M2 13h2v.5H3v1h1v.5H2v1h3v-4H2v1zm0-5h1.8L2 10.1v.9h3v-1H3.2L5 7.9V7H2v1zm1-2h1V2H2v1h1v3zm4-3v2h9V3H7zm0 12h9v-2H7v2zm0-5h9V8H7v2z",
                    fill: "currentColor"
                })), r.createElement("symbol", {
                    id: "settings-icon"
                }, r.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M19.1512 8.07692H20.2808C20.6781 8.07692 21 8.38346 21 8.76154V11.2381C21 11.6165 20.6781 11.9231 20.2812 11.9227H19.1516C18.9283 12.8362 18.5511 13.6931 18.0455 14.4662L18.8443 15.2269C19.1249 15.4942 19.1249 15.9281 18.8443 16.1954L17.0056 17.9465C16.7249 18.2138 16.2693 18.2138 15.9887 17.9465L15.1899 17.1858C14.3777 17.6677 13.4784 18.0269 12.5192 18.2392V19.315C12.5192 19.6935 12.1974 20 11.8004 20H9.20002C8.80263 20 8.48077 19.6935 8.48117 19.315V18.2392C7.52204 18.0269 6.62267 17.6673 5.81054 17.1858L5.01173 17.9465C4.73106 18.2138 4.27552 18.2138 3.99485 17.9465L2.15613 16.1954C1.87546 15.9281 1.87546 15.4946 2.15613 15.2269L2.95494 14.4665C2.44892 13.6931 2.07173 12.8365 1.84881 11.9231H0.71925C0.321865 11.9231 0 11.6165 0 11.2385V8.76192C0 8.38346 0.321865 8.07692 0.71925 8.07692H1.84881C2.07173 7.16346 2.44892 6.30692 2.95494 5.53385L2.15613 4.77308C1.87546 4.50577 1.87546 4.07192 2.15613 3.80462L3.99485 2.05346C4.27552 1.78615 4.73106 1.78615 5.01173 2.05346L5.81013 2.81423C6.62227 2.33231 7.52163 1.97308 8.48077 1.76077V0.685C8.48077 0.306539 8.80263 0 9.19961 0H11.8C12.1974 0 12.5192 0.306539 12.5192 0.685V1.76077C13.4784 1.97308 14.3777 2.33231 15.1895 2.81385L15.9883 2.05308C16.2689 1.78577 16.7245 1.78577 17.0052 2.05308L18.8439 3.80423C19.1245 4.07154 19.1245 4.50538 18.8439 4.77269L18.0451 5.53346C18.5511 6.30692 18.9283 7.16346 19.1512 8.07692ZM6.86541 10C6.86541 11.9116 8.4925 13.4616 10.5 13.4616C12.5075 13.4616 14.1346 11.9116 14.1346 10C14.1346 8.0881 12.5075 6.53849 10.5 6.53849C8.4925 6.53849 6.86541 8.0881 6.86541 10Z",
                    fill: "#E7ECED"
                })), r.createElement("symbol", {
                    id: "settings-icon-secondary"
                }, r.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M19.1512 8.07692H20.2808C20.6781 8.07692 21 8.38346 21 8.76154V11.2381C21 11.6165 20.6781 11.9231 20.2812 11.9227H19.1516C18.9283 12.8362 18.5511 13.6931 18.0455 14.4662L18.8443 15.2269C19.1249 15.4942 19.1249 15.9281 18.8443 16.1954L17.0056 17.9465C16.7249 18.2138 16.2693 18.2138 15.9887 17.9465L15.1899 17.1858C14.3777 17.6677 13.4784 18.0269 12.5192 18.2392V19.315C12.5192 19.6935 12.1974 20 11.8004 20H9.20002C8.80263 20 8.48077 19.6935 8.48117 19.315V18.2392C7.52204 18.0269 6.62267 17.6673 5.81054 17.1858L5.01173 17.9465C4.73106 18.2138 4.27552 18.2138 3.99485 17.9465L2.15613 16.1954C1.87546 15.9281 1.87546 15.4946 2.15613 15.2269L2.95494 14.4665C2.44892 13.6931 2.07173 12.8365 1.84881 11.9231H0.71925C0.321865 11.9231 0 11.6165 0 11.2385V8.76192C0 8.38346 0.321865 8.07692 0.71925 8.07692H1.84881C2.07173 7.16346 2.44892 6.30692 2.95494 5.53385L2.15613 4.77308C1.87546 4.50577 1.87546 4.07192 2.15613 3.80462L3.99485 2.05346C4.27552 1.78615 4.73106 1.78615 5.01173 2.05346L5.81013 2.81423C6.62227 2.33231 7.52163 1.97308 8.48077 1.76077V0.685C8.48077 0.306539 8.80263 0 9.19961 0H11.8C12.1974 0 12.5192 0.306539 12.5192 0.685V1.76077C13.4784 1.97308 14.3777 2.33231 15.1895 2.81385L15.9883 2.05308C16.2689 1.78577 16.7245 1.78577 17.0052 2.05308L18.8439 3.80423C19.1245 4.07154 19.1245 4.50538 18.8439 4.77269L18.0451 5.53346C18.5511 6.30692 18.9283 7.16346 19.1512 8.07692ZM6.86541 10C6.86541 11.9116 8.4925 13.4616 10.5 13.4616C12.5075 13.4616 14.1346 11.9116 14.1346 10C14.1346 8.0881 12.5075 6.53849 10.5 6.53849C8.4925 6.53849 6.86541 8.0881 6.86541 10Z",
                    fill: "#000"
                })), r.createElement("symbol", {
                    id: "person-icon"
                }, r.createElement("path", {
                    fill: "#fff",
                    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                })), r.createElement("symbol", {
                    id: "person-icon-secondary"
                }, r.createElement("path", {
                    fill: "#000",
                    d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                })), r.createElement("symbol", {
                    id: "check-circle-icon"
                }, r.createElement("path", {
                    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
                    fill: "#fff"
                })), r.createElement("symbol", {
                    id: "down-arrow-white-icon"
                }, r.createElement("path", {
                    d: "M2 1.5L9 8.5L16 1.5",
                    stroke: "white",
                    strokeWidth: "3",
                    fill: "none"
                })), r.createElement("symbol", {
                    id: "menu-dots"
                }, r.createElement("path", {
                    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
                    fill: "#3A78FC"
                })), r.createElement("symbol", {
                    id: "back-icon"
                }, r.createElement("path", {
                    d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z",
                    fill: "#B6BAC0"
                })), r.createElement("symbol", {
                    id: "forward-arrow"
                }, r.createElement("path", {
                    d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                })), r.createElement("symbol", {
                    id: "apple-icon"
                }, r.createElement("path", {
                    style: {
                        transform: "scale(0.03)"
                    },
                    d: "m 979.04184,925.18785 c -17.95397,41.47737 -39.20563,79.65705 -63.82824,114.75895 -33.56298,47.8528 -61.04356,80.9761 -82.22194,99.3698 -32.83013,30.192 -68.00529,45.6544 -105.67203,46.5338 -27.04089,0 -59.6512,-7.6946 -97.61105,-23.3035 -38.08442,-15.5358 -73.08371,-23.2303 -105.08578,-23.2303 -33.56296,0 -69.55888,7.6945 -108.06101,23.2303 -38.5608,15.6089 -69.62484,23.7432 -93.37541,24.5493 -36.12049,1.5389 -72.1237,-14.3632 -108.06101,-47.7796 -22.93711,-20.0059 -51.62684,-54.3017 -85.99592,-102.8874 C 92.254176,984.54592 61.937588,924.38175 38.187028,855.7902 12.750995,781.70252 0,709.95986 0,640.50361 0,560.94181 17.191859,492.32094 51.626869,434.81688 78.689754,388.62753 114.69299,352.19192 159.75381,325.44413 c 45.06086,-26.74775 93.74914,-40.37812 146.18212,-41.25019 28.68971,0 66.3125,8.8744 113.06613,26.31542 46.62174,17.49964 76.55727,26.37404 89.68198,26.37404 9.8124,0 43.06758,-10.37669 99.4431,-31.06405 53.31237,-19.18512 98.30724,-27.12887 135.16787,-23.99975 99.8828,8.06098 174.92313,47.43518 224.82789,118.37174 -89.33023,54.12578 -133.51903,129.93556 -132.63966,227.18753 0.8061,75.75115 28.28668,138.78795 82.2952,188.8393 24.47603,23.23022 51.81008,41.18421 82.22186,53.93522 -6.59525,19.12648 -13.557,37.44688 -20.95846,55.03446 z M 749.96366,23.751237 c 0,59.37343 -21.69138,114.810233 -64.92748,166.121963 -52.17652,60.99961 -115.28658,96.24803 -183.72426,90.68597 -0.87204,-7.12298 -1.37769,-14.61967 -1.37769,-22.49743 0,-56.99843 24.81315,-117.99801 68.87738,-167.873453 21.99909,-25.25281 49.978,-46.25018 83.90738,-63.00018 C 686.57507,10.688027 718.59913,1.5631274 748.71783,5.2734376e-4 749.59727,7.9378274 749.96366,15.875627 749.96366,23.750467 Z",
                    fill: "#fff"
                })), r.createElement("symbol", {
                    id: "facebook-icon-white"
                }, r.createElement("path", {
                    d: "M17.525,9H14V7c0-1.032,0.084-1.682,1.563-1.682h1.868v-3.18C16.522,2.044,15.608,1.998,14.693,2 C11.98,2,10,3.657,10,6.699V9H7v4l3-0.001V22h4v-9.003l3.066-0.001L17.525,9z",
                    fill: "#fff"
                })), r.createElement("symbol", {
                    id: "adv-config"
                }, r.createElement("line", {
                    x1: "0.75",
                    y1: "2.58331",
                    x2: "18.8991",
                    y2: "2.58331",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round"
                }), r.createElement("line", {
                    x1: "0.75",
                    y1: "9.13306",
                    x2: "18.8991",
                    y2: "9.13306",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round"
                }), r.createElement("line", {
                    x1: "0.75",
                    y1: "15.6828",
                    x2: "18.8991",
                    y2: "15.6828",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round"
                }), r.createElement("rect", {
                    x: "4.24268",
                    y: "0.5",
                    width: "3.67836",
                    height: "3.67836",
                    rx: "0.5",
                    fill: "currentColor",
                    stroke: "currentColor"
                }), r.createElement("rect", {
                    x: "10.7925",
                    y: "7.04968",
                    width: "3.67836",
                    height: "3.67836",
                    rx: "0.5",
                    fill: "currentColor",
                    stroke: "currentColor"
                }), r.createElement("rect", {
                    x: "3.30713",
                    y: "13.5994",
                    width: "3.67836",
                    height: "3.67836",
                    rx: "0.5",
                    fill: "currentColor",
                    stroke: "currentColor"
                })), r.createElement("symbol", {
                    id: "close-x-icon"
                }, r.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6.21094 4.79143L1.41951 0L0.210938 1.20857L5.00237 5.99914L0.210938 10.7906L1.41951 12L6.21094 7.20857L11.0024 12L12.2109 10.7906L7.41951 5.99914L12.2109 1.20857L11.0024 0L6.21094 4.79143Z",
                    fill: "#8E8E93"
                })), r.createElement("symbol", {
                    id: "arrow-icon"
                }, r.createElement("path", {
                    d: "M14.3622 1.32065C15.246 2.13933 15.2468 3.53689 14.3638 4.35653L6.11066 12.0177L14.3638 19.6789C15.2468 20.4985 15.246 21.8961 14.3622 22.7147C13.5684 23.4499 12.3425 23.4499 11.5488 22.7147L0.934126 12.8829C0.4302 12.4162 0.430201 11.6192 0.934127 11.1525L11.5488 1.32065C12.3425 0.585476 13.5685 0.585476 14.3622 1.32065Z",
                    fill: "currentColor"
                })), r.createElement("symbol", {
                    id: "modal-close-icon"
                }, r.createElement("path", {
                    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
                    fill: "#B6BAC0"
                }))))
            }
        },
        98655: function(e, t, n) {
            "use strict";
            var r = n(67294);
            t.Z = function(e) {
                var t = e.className,
                    n = void 0 === t ? "-ml-1 mr-3" : t;
                return r.createElement("svg", {
                    className: "animate-spin h-5 w-5 text-current ".concat(n),
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24"
                }, r.createElement("circle", {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4"
                }), r.createElement("path", {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                }))
            }
        },
        73774: function(e, t, n) {
            "use strict";
            var r = n(87462),
                o = n(67294),
                i = n(84751),
                a = n(52301),
                c = n(59802),
                s = n(52674),
                l = n(40684),
                u = n(21163),
                d = n(16555),
                v = (0, l.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "components-modals-register-LoginModal"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(6262).then(n.bind(n, 86764))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return 86764
                    }
                }),
                m = (0, l.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "components-modals-register-EmailLoginModal"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(7760).then(n.bind(n, 97400))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return 97400
                    }
                }),
                f = (0, l.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "components-modals-register-RegisterModal"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(4736), n.e(7666)]).then(n.bind(n, 54584))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return 54584
                    }
                }),
                h = (0, l.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "components-modals-search-SearchModal"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(2434).then(n.bind(n, 78484))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return 78484
                    }
                }),
                p = (0, l.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "components-modals-search-AdvancedSearchModal"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(4736), n.e(9342)]).then(n.bind(n, 65588))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return 65588
                    }
                }),
                g = (0, l.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "components-modals-register-PasswordResetRequestModal"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(9722).then(n.bind(n, 35307))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return 35307
                    }
                }),
                y = (0, l.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "components-modals-register-PasswordResetModal"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(5737).then(n.bind(n, 70532))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return 70532
                    }
                }),
                b = (0, l.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "components-modals-register-ExpiredResetTokenModal"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(5276).then(n.bind(n, 92577))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return 92577
                    }
                }),
                E = (0, l.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "components-modals-register-ExpiredVerifyTokenModal"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(7085).then(n.bind(n, 6705))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return 6705
                    }
                }),
                C = (0, l.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "components-modals-DeleteAnswerModal"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(6787).then(n.bind(n, 49046))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return 49046
                    }
                }),
                w = (0, l.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "components-header-components-MobileSideMenu"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(2526).then(n.bind(n, 41963))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return 41963
                    }
                }, {
                    ssr: !1
                }),
                k = (0, l.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "components-header-components-S1SideMenu"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(1463).then(n.bind(n, 82086))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return 82086
                    }
                }, {
                    ssr: !1
                }),
                Z = (0, l.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "components-modals-DeleteAccountConfirmationModal"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(3962).then(n.bind(n, 62245))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return 62245
                    }
                }),
                _ = (0, l.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "components-modals-FlagObjectConfirmationModal"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(7707).then(n.bind(n, 22188))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return 22188
                    }
                }),
                A = (0, l.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "components-modals-input-AnswerModal"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(7323), n.e(3919)]).then(n.bind(n, 37323))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return 37323
                    }
                }),
                N = (0, l.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "components-modals-input-AskModal"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(5146), n.e(1272)]).then(n.bind(n, 44961))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return 44961
                    }
                }),
                x = (0, l.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "components-modals-ProfileEditModal"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(2815).then(n.bind(n, 96114))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return 96114
                    }
                }),
                L = (0, l.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "components-modals-AppInstallModal"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(4971).then(n.bind(n, 30335))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return 30335
                    }
                }),
                S = (0, l.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "components-modals-input-GuideModal"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(5146), n.e(3958)]).then(n.bind(n, 75124))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return 75124
                    }
                }),
                P = (0, l.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "components-modals-FlashCardModal"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(4736), n.e(8781), n.e(3645)]).then(n.bind(n, 47764))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return 47764
                    }
                }),
                M = function(e) {
                    var t = !1,
                        n = (0, i.I0)(),
                        l = (0, u.Z)(),
                        M = (0, i.v9)((function(e) {
                            return e.pageData.isMobile
                        })),
                        q = (0, i.v9)((function(e) {
                            return {
                                loggedIn: e.auth.loggedIn,
                                data: e.modal.data
                            }
                        })),
                        O = q.loggedIn,
                        T = q.data,
                        I = (0, i.v9)((function(e) {
                            return {
                                modalType: e.modal.type
                            }
                        })).modalType,
                        j = I,
                        R = function(e, t) {
                            n(a.N.openModal(e, t)), l && (window.location.href = "gonative://modal/opened")
                        };
                    switch ((0, o.useEffect)((function() {
                        switch ((0, s.ak)("modalAction")) {
                            case "login":
                                O || R("login");
                                break;
                            case "ask":
                                R("ask");
                                break;
                            case "editGuide":
                                R("editGuide");
                                break;
                            case "answer":
                                R("answer")
                        }
                    }), [!0]), I) {
                        case "login":
                            t = v;
                            break;
                        case "emaillogin":
                            t = m;
                            break;
                        case "register":
                            t = f;
                            break;
                        case "search":
                            t = h;
                            break;
                        case "advSearch":
                            t = p;
                            break;
                        case "resetRequest":
                            t = g;
                            break;
                        case "expiredResetToken":
                            t = b;
                            break;
                        case "expiredVerifyToken":
                            t = E;
                            break;
                        case "resetPassword":
                            t = y;
                            break;
                        case "deleteAnswer":
                            t = C;
                            break;
                        case "mobileMenu":
                            t = w;
                            break;
                        case "s1SideMenu":
                            t = k;
                            break;
                        case "deleteAccountConfirmation":
                            t = Z;
                            break;
                        case "flagObjectConfirmation":
                            t = _;
                            break;
                        case "answer":
                            t = A;
                            break;
                        case "ask":
                            t = N;
                            break;
                        case "editProfile":
                            t = x;
                            break;
                        case "guide":
                            t = S;
                            break;
                        case "flashcard":
                            t = P;
                            break;
                        default:
                            t = !1
                    }
                    return I = (0, c.Z)("".concat(I, "-app"), I), "".concat(j, "-app") === I && M && (t = L), t ? o.createElement(d.Z, (0, r.Z)({
                        type: I
                    }, T), o.createElement(t, (0, r.Z)({}, e.modalProps, e, {
                        closeModal: function(e) {
                            n(a.N.closeModal()), "answer" == (0, s.ak)("modalAction") && "login" == I.match(/login/g) && R("answer"), "ask" == (0, s.ak)("modalAction") && "login" == I && O && n(a.N.openModal("ask")), l && (window.location.href = "gonative://modal/closed")
                        },
                        openModal: R,
                        source: null == T ? void 0 : T.source,
                        campaign: null == T ? void 0 : T.campaign
                    }, T))) : o.createElement("div", null)
                };
            t.Z = M
        },
        16555: function(e, t, n) {
            "use strict";
            var r = n(67294),
                o = n(84771),
                i = n(94293),
                a = function(e) {
                    var t = (0, o.Gh)(e),
                        n = t.campaign,
                        a = t.source;
                    return r.useEffect((function() {
                        Promise.allSettled([(0, i.U2)("savanaCampaign"), (0, i.U2)("savanaSource")]).then((function(e) {
                            var t, r, o = null === (t = e[0]) || void 0 === t ? void 0 : t.value,
                                c = null === (r = e[1]) || void 0 === r ? void 0 : r.value;
                            o && !n || (0, i.t8)("savanaCampaign", null != n && n), c && !a || (0, i.t8)("savanaSource", null != a && a)
                        }))
                    }), [n, a]), r.cloneElement(e.children, {
                        closeModal: function() {
                            e.children.props.closeModal(), (0, i.IV)("savanaCampaign"), (0, i.IV)("savanaSource")
                        }
                    })
                };
            t.Z = r.memo(a)
        },
        98773: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return u
                }
            });
            var r = n(87462),
                o = n(67294),
                i = n(84751),
                a = n(52301),
                c = n(85618),
                s = o.memo((function(e) {
                    var t = e.bgColor,
                        n = e.dismissTime,
                        r = e.emoji,
                        s = e.id,
                        l = e.maxLength,
                        u = e.message,
                        d = void 0 === u ? "" : u,
                        v = e.showX,
                        m = e.textColor,
                        f = e.rightIcon,
                        h = void 0 !== f && f,
                        p = (0, i.I0)(),
                        g = null,
                        y = Array.isArray(d) ? d[0] : d;
                    return n > 0 && setTimeout((function() {
                        p(a.N.removeToast(s))
                    }), n), v ? g = o.createElement(c.Z, {
                        src: "/icons/closeIcon.svg",
                        width: 20,
                        height: 20,
                        lazyLoad: !1,
                        className: "ml-auto ".concat(m, " cursor-pointer max-h-3"),
                        onClick: function() {
                            return p(a.N.removeToast(s))
                        }
                    }) : h && (g = o.createElement("span", {
                        className: "ml-auto"
                    }, h)), y.length > l && (y = y.slice(0, l) + "..."), o.createElement("div", {
                        className: "".concat(t, " ").concat(m, " h-14 w-full px-4 md:w-103 flex flex-row items-center caption1 animate-slideTop md:animate-slideLeft")
                    }, o.createElement("span", {
                        className: "mr-4"
                    }, r), o.createElement("span", {
                        className: "overflow-hidden"
                    }, y), g)
                })),
                l = n(21163),
                u = function() {
                    var e = (0, i.v9)((function(e) {
                            return e
                        })).toast,
                        t = (0, l.Z)();
                    if (0 == e.length) return null;
                    var n = e.map((function(e) {
                        return o.createElement(s, (0, r.Z)({}, e, {
                            key: e.id
                        }))
                    }));
                    return o.createElement("div", {
                        className: "flex flex-col space-y-3 w-screen md:w-auto fixed md:left-5 md:bottom-5 z-50 ".concat(t ? "top-0" : "max-md:top-12")
                    }, n)
                }
        },
        38058: function(e, t, n) {
            "use strict";
            var r = n(67294),
                o = n(29539),
                i = n(31821),
                a = n(84751),
                c = n(59802),
                s = n(52301),
                l = n(70399),
                u = n(76097);
            t.Z = function(e) {
                var t = (0, i.Z)(),
                    n = (0, a.I0)(),
                    d = (0, u.Z)(),
                    v = (0, c.Z)("desktop_stickyfooter_header_text", "Upgrade to Answers+ and your first week is free!"),
                    m = (0, c.Z)("desktop_stickyfooter_subheader_text", "Get unlimited, ad-free homework help with access to exclusive features and priority answers."),
                    f = (0, c.Z)("desktop_stickyfooter_button_text", "Start free trial"),
                    h = (0, c.Z)("subscribe_stickyfooter_disable", !0),
                    p = (0, c.Z)("mobile_stickyfooter_header_text", "Upgrade to Answers+ and get a week free!"),
                    g = (0, c.Z)("mobile_stickyfooter_button_text", "Start free trial"),
                    y = function() {
                        d ? n(s.N.openModal("multiSub", {
                            source: "Footer Subscribe Button"
                        })) : ((0, l.qP)({
                            eventCategory: "Sign up/Login Engagement",
                            eventAction: "Login Modal Shown",
                            eventLabel: '{"Trigger": "Footer Subscribe Button"}'
                        }), window.sessionStorage.setItem("source", "Footer Subscribe Button"), n(s.N.openModal("login")))
                    };
                return t || h ? h ? null : r.createElement("div", {
                    id: "sticky_footer_banner",
                    className: "w-screen fixed left-0 items-center justify-center p-4 bg-sfColor bottom-0"
                }, r.createElement("h2", {
                    className: "sfMobileHeaderText text-center mb-4"
                }, p), r.createElement(o.Yo, {
                    onClick: y,
                    className: "w-full body1"
                }, g)) : r.createElement("div", {
                    id: "sticky_footer_banner",
                    className: "items-center place-content-center z-1 fixed left-0 bottom-0 w-screen bg-verifiedChipLight"
                }, r.createElement("div", {
                    className: "grid max-app-width sf-col-size p-4 items-center"
                }, r.createElement("img", {
                    src: "https://st.answers.com/logos/a-plus-logo_ztNoi8F.png",
                    alt: "A+",
                    width: "63px",
                    height: "50px",
                    loading: "eager"
                }), r.createElement("div", {
                    className: "sf-text-pos col-span-1"
                }, r.createElement("h2", {
                    className: "sfDesktopHeaderText"
                }, v), r.createElement("h3", {
                    className: "body1"
                }, m)), r.createElement(o.Yo, {
                    className: "ml-auto",
                    onClick: y
                }, f)))
            }
        },
        91081: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return g
                }
            });
            var r = n(87757),
                o = n.n(r),
                i = n(71002),
                a = n(15861),
                c = n(67294),
                s = n(84751),
                l = n(27157),
                u = n(21163),
                d = n(80482),
                v = n(59802),
                m = n(92342),
                f = n(90624),
                h = {
                    answer: !0
                },
                p = function(e) {
                    var t, n, r, o = null == e || null === (t = e.url) || void 0 === t || null === (n = t.split("/")) || void 0 === n ? void 0 : n.pop();
                    return null !== (r = h[o]) && void 0 !== r && r
                };

            function g() {
                var e, t, n = (0, s.I0)(),
                    r = null !== (e = (0, f.Z)()) && void 0 !== e && e,
                    h = (0, u.Z)(),
                    g = (0, v.Z)("enable_app_toast", !1);
                (0, l.S_)() && (window.userCoins = null !== (t = null == r ? void 0 : r.coins) && void 0 !== t ? t : 0);
                (0, c.useEffect)((function() {
                    if (!(0, l.S_)() || h && !g) return null;
                    var e = window.fetch;
                    window.fetch = (0, a.Z)(o().mark((function t() {
                        var a, c = arguments;
                        return o().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.apply(void 0, c);
                                case 2:
                                    return (a = t.sent).clone().json().then((function(e) {
                                        var t;
                                        if (0 == e.success || 500 == e.status) {
                                            var o, c = e.errors;
                                            if ("object" == (0, i.Z)(e.message)) e.message = null == e || null === (o = e.message) || void 0 === o ? void 0 : o.message;
                                            (0, d.d)(c, n, e.message)
                                        } else if (e.success && (null != e && null !== (t = e.data) && void 0 !== t && t.toastType || p(a))) {
                                            var s;
                                            if (p(a) && r)(0, m.H)(r, n);
                                            else if (null != e && null !== (s = e.data) && void 0 !== s && s.toastType) {
                                                var l, u;
                                                (0, d.C)(null, n, null !== (l = e.message) && void 0 !== l ? l : "success", null == e || null === (u = e.data) || void 0 === u ? void 0 : u.toastType)
                                            }
                                        }
                                    })).catch((function(e) {
                                        console.error("Error in network request: ".concat(e))
                                    })), t.abrupt("return", a);
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }), [])
            }
        },
        92342: function(e, t, n) {
            "use strict";
            n.d(t, {
                H: function() {
                    return v
                }
            });
            var r = n(4942),
                o = n(77292),
                i = n(80482),
                a = n(59802),
                c = n(52301),
                s = n(3901),
                l = n(51332);

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var v = function(e, t) {
                    var n = e.api_token,
                        r = [];
                    (0, o.Z)("userPoints", "/api/checkPoints?api_token=".concat(n, "&nonce=").concat(Math.random()), (function(e) {
                        null != e && e.data && e.data.forEach((function(e) {
                            var n, o = (0, a.Z)("".concat(e.action, "_message"), function(e, t) {
                                switch (e) {
                                    case "daily_reward":
                                        return "Welcome back!";
                                    case "answer_submitted":
                                        return "Your answer has been submitted!";
                                    case "user_app_download":
                                        return "Thanks for using the Answers app!";
                                    case "user_registration":
                                        return "Thanks for joining Answers!";
                                    default:
                                        return "+".concat(t, " points have been added")
                                }
                            }(e.action, e.points));
                            r.push(d(d({}, e), {}, {
                                type: "game",
                                message: o,
                                points: e.points,
                                action: e.action
                            })), m(null === (n = window) || void 0 === n ? void 0 : n.userCoins, e.points, t), t(c.N.addPoints(e.points)), (0, s.Y)(e.points, e.action)
                        }));
                        (0, i.C)(r, t, "Points added", "game")
                    }), {
                        method: "GET",
                        headers: {
                            Accept: "application/json"
                        }
                    }, !0)
                },
                m = function(e, t, n) {
                    var r = parseInt(e) + parseInt(t),
                        o = (0, l.E5)(parseInt(e)),
                        i = (0, l.E5)(r);
                    o < i && n(c.N.addToast({
                        type: "game",
                        message: "You just unlocked level ".concat(i, ", congrats!")
                    }))
                }
        },
        80482: function(e, t, n) {
            "use strict";
            n.d(t, {
                C: function() {
                    return a
                },
                d: function() {
                    return i
                }
            });
            var r = n(71002),
                o = n(52301),
                i = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Error: Failed to handle request";
                    return a(e, t, n, "error")
                },
                a = function(e, t, n, i) {
                    e ? "object" === (0, r.Z)(e) ? Object.values(e).forEach((function(e) {
                        var r, a;
                        (null == e || !e.points || (null == e ? void 0 : e.points) > 0) && t(o.N.addToast({
                            points: null !== (r = null == e ? void 0 : e.points) && void 0 !== r ? r : 0,
                            type: null !== (a = e.type) && void 0 !== a ? a : i,
                            message: e.message || e || n,
                            action: e.action
                        }))
                    })) : e.forEach((function(e) {
                        var r, a;
                        (null == e || !e.points || (null == e ? void 0 : e.points) > 0) && t(o.N.addToast({
                            points: null !== (r = null == e ? void 0 : e.points) && void 0 !== r ? r : 0,
                            type: null !== (a = e.type) && void 0 !== a ? a : i,
                            message: e.message || e || n,
                            action: e.action
                        }))
                    })) : t(o.N.addToast({
                        type: i,
                        message: n
                    }))
                }
        },
        39386: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return v
                },
                i: function() {
                    return m
                }
            });
            var r = n(87757),
                o = n.n(r),
                i = n(15861),
                a = n(4942),
                c = n(29439),
                s = n(67294),
                l = n(84751);

            function u(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function d(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var v = function(e, t) {
                    var n = (0, s.useState)(e),
                        r = (0, c.Z)(n, 2),
                        o = r[0],
                        i = r[1];
                    return (0, s.useEffect)((function() {
                        var n = setTimeout((function() {
                            i(e)
                        }), t);
                        return function() {
                            clearTimeout(n)
                        }
                    }), [e, t]), o
                },
                m = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        a = (0, s.useRef)({}),
                        u = (0, l.v9)((function(e) {
                            var t, n;
                            return null == e || null === (t = e.auth) || void 0 === t || null === (n = t.user) || void 0 === n ? void 0 : n.api_token
                        }));
                    t && e && (e += "&api_token=".concat(u)), n && e && (e += n);
                    var v = {
                            status: "idle",
                            error: null,
                            data: []
                        },
                        m = (0, s.useReducer)((function(e, t) {
                            switch (t.type) {
                                case "FETCHING":
                                    return d(d({}, v), {}, {
                                        status: "fetching"
                                    });
                                case "FETCHED":
                                    return d(d({}, v), {}, {
                                        status: "fetched",
                                        data: t.payload
                                    });
                                case "FETCH_ERROR":
                                    return d(d({}, v), {}, {
                                        status: "error",
                                        error: t.payload
                                    });
                                default:
                                    return e
                            }
                        }), v),
                        f = (0, c.Z)(m, 2),
                        h = f[0],
                        p = f[1];
                    return (0, s.useEffect)((function() {
                        var n = !1,
                            c = !1;
                        if (e) {
                            var s = function() {
                                var c = (0, i.Z)(o().mark((function i() {
                                    var c, s, l;
                                    return o().wrap((function(o) {
                                        for (;;) switch (o.prev = o.next) {
                                            case 0:
                                                if (p({
                                                        type: "FETCHING"
                                                    }), u || !t) {
                                                    o.next = 4;
                                                    break
                                                }
                                                return p({
                                                    type: "FETCH_ERROR",
                                                    payload: "Unauthenticated."
                                                }), o.abrupt("return");
                                            case 4:
                                                if (!a.current[e] || r) {
                                                    o.next = 9;
                                                    break
                                                }
                                                c = a.current[e], p({
                                                    type: "FETCHED",
                                                    payload: c
                                                }), o.next = 27;
                                                break;
                                            case 9:
                                                return o.prev = 9, o.next = 12, fetch(e, {
                                                    headers: {
                                                        Accept: "application/json",
                                                        "Content-Type": "application/json"
                                                    }
                                                });
                                            case 12:
                                                return s = o.sent, o.next = 15, s.json();
                                            case 15:
                                                if (l = o.sent, a.current[e] = l.data, !n) {
                                                    o.next = 19;
                                                    break
                                                }
                                                return o.abrupt("return");
                                            case 19:
                                                l.success ? p({
                                                    type: "FETCHED",
                                                    payload: l.data
                                                }) : p({
                                                    type: "FETCH_ERROR",
                                                    payload: l.message
                                                }), o.next = 27;
                                                break;
                                            case 22:
                                                if (o.prev = 22, o.t0 = o.catch(9), !n) {
                                                    o.next = 26;
                                                    break
                                                }
                                                return o.abrupt("return");
                                            case 26:
                                                p({
                                                    type: "FETCH_ERROR",
                                                    payload: o.t0.message
                                                });
                                            case 27:
                                            case "end":
                                                return o.stop()
                                        }
                                    }), i, null, [
                                        [9, 22]
                                    ])
                                })));
                                return function() {
                                    return c.apply(this, arguments)
                                }
                            }();
                            return s(), r && (c = setInterval((function() {
                                    return s()
                                }), r)),
                                function() {
                                    n = !0, clearInterval(c)
                                }
                        }
                    }), [e]), h
                }
        },
        8906: function(e, t, n) {
            "use strict";
            var r = n(59802),
                o = n(67294),
                i = n(70399),
                a = n(82131);
            t.Z = function() {
                if ((0, r.Z)("sendWebVitals", !1)) {
                    var e = function(e) {
                        var t = e.name,
                            n = e.delta,
                            r = e.id;
                        (0, i.qP)({
                            eventCategory: "Web Vitals",
                            eventAction: t,
                            eventLabel: r,
                            eventValue: Math.round("CLS" === t ? 1e3 * n : n),
                            nonInteraction: 1
                        })
                    };
                    (0, o.useEffect)((function() {
                        (0, r.Z)("enableCLSEvent", !1) && (0, a.getCLS)(e), (0, r.Z)("enableFIDEvent", !1) && (0, a.getFID)(e), (0, r.Z)("enableLCPEvent", !0) && (0, a.getLCP)(e)
                    }), [])
                }
            }
        },
        25280: function(e, t, n) {
            "use strict";
            var r = n(29439),
                o = n(67294),
                i = n(77292);
            t.Z = function(e, t, n) {
                var a = (0, o.useState)([]),
                    c = (0, r.Z)(a, 2),
                    s = c[0],
                    l = c[1],
                    u = (0, o.useState)(!1),
                    d = (0, r.Z)(u, 2),
                    v = d[0],
                    m = d[1],
                    f = function(e) {
                        m(!1);
                        try {
                            var t, n = e;
                            if (n.errors) throw n.errors;
                            l(null !== (t = n.data) && void 0 !== t ? t : [])
                        } catch (e) {
                            console.log(e), l([])
                        }
                    };
                return (0, o.useEffect)((function() {
                    !0 !== n && n.length < 3 ? l([]) : (m(!0), (0, i.Z)(e, t, f))
                }), [t]), [s, v]
            }
        },
        20051: function(e, t, n) {
            "use strict";
            var r = n(67294);
            t.Z = function() {
                var e = (0, r.useRef)(!0);
                return (0, r.useEffect)((function() {
                    e.current = !1
                }), []), e.current
            }
        },
        16639: function(e, t, n) {
            "use strict";
            var r = n(84751);
            t.Z = function() {
                return (0, r.v9)((function(e) {
                    var t;
                    return null == e || null === (t = e.pageData) || void 0 === t ? void 0 : t.searchTerm
                }))
            }
        },
        21163: function(e, t, n) {
            "use strict";
            var r = n(84751);
            t.Z = function() {
                return (0, r.v9)((function(e) {
                    return e.pageData.isApp
                }))
            }
        },
        64342: function(e, t, n) {
            "use strict";
            var r = n(45987),
                o = n(67294),
                i = n(84751),
                a = n(52301);
            Promise.all([n.e(4252), n.e(462)]).then(n.bind(n, 70462));
            t.Z = function(e) {
                var t, n = e.children,
                    c = (0, r.Z)(e, ["children"]),
                    s = null !== (t = e.store) && void 0 !== t ? t : (0, a.M)(c);
                return o.createElement(i.zt, {
                    store: s
                }, n)
            }
        },
        16754: function(e, t, n) {
            "use strict";
            var r = n(29439),
                o = n(67294),
                i = n(73774),
                a = n(84751),
                c = n(52301),
                s = n(53472),
                l = n(27157),
                u = n(52674),
                d = n(27465),
                v = n(13845),
                m = n(16407),
                f = n(77292),
                h = n(70399),
                p = n(88059),
                g = n(40684),
                y = n(98773),
                b = n(91081),
                E = n(92342),
                C = n(90624),
                w = n(8906),
                k = n(38058),
                Z = n(59802),
                _ = n(86004),
                A = (0, g.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "components-modals-lightbox-LightboxRouter"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return n.e(2656).then(n.bind(n, 7170))
                    },
                    requireAsync: function(e) {
                        var t = this,
                            n = this.resolve(e);
                        return this.resolved[n] = !1, this.importAsync(e).then((function(e) {
                            return t.resolved[n] = !0, e
                        }))
                    },
                    requireSync: function e(t) {
                        var r = this.resolve(t);
                        return n(r)
                    },
                    resolve: function e() {
                        return 7170
                    }
                }, {
                    ssr: !1
                }),
                N = function(e) {
                    var t, n = (0, a.v9)((function(e) {
                            return e.modal.isOpen
                        })),
                        g = (0, a.v9)((function(e) {
                            return e.pageData.route
                        })),
                        N = (0, a.v9)((function(e) {
                            return e.pageData.userBucket
                        })),
                        x = (0, a.v9)((function(e) {
                            return e.pageData.activeTests
                        })),
                        L = (0, a.v9)((function(e) {
                            return e.pageData.audienceId
                        })),
                        S = (0, a.v9)((function(e) {
                            return e.pageData.contentBucket
                        })),
                        P = (0, a.v9)((function(e) {
                            return e.pageData.contentCategory
                        })),
                        M = (0, a.v9)((function(e) {
                            return e.pageData.contentSubject
                        })),
                        q = (0, a.v9)((function(e) {
                            return e.pageData.contentTopics
                        })),
                        O = (0, a.v9)((function(e) {
                            var t;
                            return null === (t = e.pageData.content) || void 0 === t ? void 0 : t.id
                        })),
                        T = (0, a.v9)((function(e) {
                            return e.modal.hasBeenClosed
                        })),
                        I = (0, a.v9)((function(e) {
                            return e.lightbox.isOpen
                        })),
                        j = (0, a.v9)((function(e) {
                            return e.lightbox.hasBeenClosed
                        })),
                        R = null !== (t = (0, C.Z)()) && void 0 !== t && t,
                        D = (0, m.Z)(),
                        H = e.children,
                        z = (0, Z.Z)("enable_dpl", !1),
                        V = (0, o.useState)(!1),
                        B = (0, r.Z)(V, 2),
                        F = B[0],
                        G = B[1],
                        Q = (0, a.I0)();
                    (0, b.k)();
                    var U = function(e) {
                        var t = e;
                        if (200 == e.status) Q(c.N.auth(t)), (0, p.he)("GoogleOneTap Login");
                        else if (400 == e.status) {
                            var n = o.createElement("div", null, "Failed to login. Please try another method ", o.createElement("span", {
                                style: {
                                    color: "white"
                                },
                                onClick: function() {
                                    Q.openModal("login"), (0, p.Lq)("Failed Google One Tap")
                                }
                            }, "here"));
                            Q(c.N.addToast({
                                type: "error",
                                message: n
                            }))
                        } else 201 == e.status && (Q(c.N.auth(t)), Q(c.N.openModal("multiSub", {
                            source: "Google One Tap",
                            type: "single"
                        })))
                    };
                    if ((0, l.S_)()) {
                        window.dispatch = Q, window.actions = c.N, z && !F && (window.dataLayer.push({
                            AppData: {
                                userBucket: N,
                                route: g,
                                userId: R ? R.id : -1,
                                content: {
                                    id: O,
                                    questionBucket: S,
                                    category: P,
                                    subject: M,
                                    topics: q
                                }
                            }
                        }), _.vj.init({
                            session: {
                                business: "answers"
                            },
                            ga: {
                                gaMeasurementId: "UA-273774-7",
                                gtmId: "GTM-T833LKG"
                            }
                        }), window.ga("set", {
                            dimension2: O,
                            dimension3: g,
                            dimension15: N,
                            dimension20: "answ3",
                            dimension23: JSON.stringify(q),
                            dimension32: "answers",
                            dimension33: R ? R.id : -1,
                            dimension42: S,
                            dimension24: P,
                            dimension49: M
                        }), G(!0)), window.googleOneTapVerification = function(e) {
                            var t = {
                                method: "POST",
                                headers: {
                                    Accept: "application/json"
                                },
                                body: JSON.stringify(e)
                            };
                            (0, f.Z)("verifyUser", "/user/loginNoRefresh", U, t)
                        };
                        var W = ["route:" + g, "userBucket:" + N, "audienceId:" + L, "contentBucket:" + S, "contentId:" + O, "tests:" + (x ? x.join(",") : "")];
                        (0, h.w)(W), (0, w.Z)()
                    }
                    return (0, o.useEffect)((function() {
                        e.modal && !T && (e.source || e.campaign ? Q(c.N.openModal(e.modal, {
                            campaign: null == e ? void 0 : e.campaign,
                            source: null == e ? void 0 : e.source
                        })) : Q(c.N.openModal(e.modal))), e.lightbox && !j && Q(c.N.openLightbox(e.lightbox));
                        var t = Number((0, u.ak)("flagObjectId")),
                            n = (0, u.ak)("flagObjectType");
                        t && n && D({
                            objectId: t,
                            objectType: n,
                            confirmIntent: !0
                        }), R && (0, l.S_)() && (0, E.H)(R, Q)
                    }), []), o.createElement("div", {
                        className: "break-word break-words"
                    }, e.header, H, o.createElement(d.Z, {
                        name: "after_main_content"
                    }), o.createElement(s.Z, {
                        defer: !0
                    }, o.createElement(i.Z, {
                        isOpen: n,
                        relatedCategories: e.relatedCategories,
                        tags: e.tags,
                        trendingQuestions: e.trendingQuestions,
                        unansweredQuestionProps: e.unansweredQuestionProps,
                        previouslyViewedProps: e.previouslyViewedProps,
                        modalProps: e.modalProps
                    }), o.createElement(y.Z, null)), o.createElement(A, {
                        isOpen: I,
                        lightboxProps: e.lightboxProps
                    }), o.createElement(v.Z, null), o.createElement(k.Z, null))
                };
            t.Z = N
        },
        81080: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return F
                }
            });
            var r = n(87462),
                o = n(45987),
                i = n(67294),
                a = n(16754),
                c = n(85618),
                s = n(75315),
                l = n(52301),
                u = n(66356),
                d = n(59802),
                v = function() {
                    var e = (0, s.Z)("/search");
                    return (0, d.Z)("hide_search_bar", !1) ? null : i.createElement("form", {
                        action: e,
                        method: "GET",
                        target: "_top",
                        className: "w-full"
                    }, i.createElement("div", {
                        className: "flex"
                    }, i.createElement("div", {
                        className: "flex items-center relative w-full"
                    }, i.createElement(u.Z, {
                        questionSearch: !0
                    }))))
                },
                m = n(84751),
                f = n(70399),
                h = n(54885),
                p = n(29539),
                g = function(e) {
                    var t = (0, m.I0)(),
                        n = {
                            eventName: "Ask",
                            eventCategory: "Question Engagement",
                            eventAction: "Ask Q button clicked",
                            eventLabel: "AskButton"
                        },
                        r = (0, d.Z)("desktop_ask_button_text", "Ask a question"),
                        o = (0, d.Z)("desktop_tooltip", "Ask a question");
                    return i.createElement(p.Yo, {
                        onClick: function() {
                            return r = e.placement, (0, h.TI)(r), t(l.N.openModal("ask")), void(0, f.qP)(n);
                            var r
                        },
                        "aria-label": o,
                        "aria-labelledby": o,
                        tooltip: o,
                        className: "hover:bg-tertiaryLight"
                    }, r)
                },
                y = n(78273),
                b = n(94828),
                E = function(e) {
                    var t = (0, m.I0)(),
                        n = (0, m.v9)((function(e) {
                            return e.auth.user
                        })),
                        r = {
                            eventName: "Create",
                            eventCategory: "Other Engagement",
                            eventAction: "Create button clicked"
                        },
                        o = {
                            eventName: "Create Question",
                            eventCategory: "Question Engagement",
                            eventAction: "Create Question button clicked"
                        },
                        a = {
                            eventName: "Sign up/Login Engagement event",
                            eventCategory: "Sign up/Login Engagement",
                            eventAction: "Login Modal Shown",
                            eventValue: '{"Trigger": "Create Guide Button"}'
                        },
                        s = i.createElement(p.Yo, {
                            onClick: function() {
                                return (0, f.qP)(r)
                            },
                            className: "hover:bg-tertiaryLight"
                        }, "Create", i.createElement("svg", {
                            className: "h-4 w-4 self-center",
                            viewBox: "-2 -5 20 20"
                        }, i.createElement("use", {
                            xlinkHref: "#down-arrow-white-icon"
                        }))),
                        u = i.createElement("button", {
                            className: "flex caption3 px-2 py-1",
                            onClick: function() {
                                t(l.N.openModal("ask")), (0, f.qP)(o)
                            }
                        }, i.createElement(c.Z, {
                            src: "/icons/askIcon.svg",
                            width: 16,
                            height: 16,
                            lazyLoad: !1,
                            className: "mr-1 mt-1 self-center"
                        }), i.createElement("span", null, "Question")),
                        d = i.createElement("button", {
                            className: "flex caption3 px-2 py-1",
                            onClick: function() {
                                n ? ((0, y.Ov)(), window.location = "/create/guide") : ((0, f.qP)(a), window.sessionStorage.setItem("source", "Create Guide Button"), t(l.N.openModal("login")))
                            }
                        }, i.createElement(c.Z, {
                            src: "/icons/createGuideIcon.svg",
                            width: 16,
                            height: 16,
                            lazyLoad: !1,
                            className: "mr-1 self-center"
                        }), i.createElement("span", null, "Study Guide"));
                    return i.createElement(b.Z, {
                        btn: s,
                        styleOverride: "left-0 mt-3",
                        styleHeight: "block",
                        isOptionsMenu: !0
                    }, u, d)
                },
                C = n(29439),
                w = n(45461),
                k = n(88059),
                Z = n(76097),
                _ = n(38435),
                A = function(e) {
                    var t = e.user;
                    return i.createElement("button", {
                        className: "body1"
                    }, i.createElement(_.Z, {
                        user: t,
                        disableLink: !1,
                        className: "headerMenuButton"
                    }, i.createElement("svg", {
                        viewBox: "0 0 22 24",
                        className: "headerMenuIcon"
                    }, i.createElement("use", {
                        xlinkHref: "#person-icon-secondary"
                    })), i.createElement("span", {
                        className: "body1 ml-2"
                    }, "Profile")))
                },
                N = n(60371),
                x = function(e) {
                    return i.createElement("button", {
                        className: "body1"
                    }, i.createElement(N.Z, {
                        href: "/user/profile",
                        className: "headerMenuButton"
                    }, i.createElement("svg", {
                        viewBox: "0 0 22 24",
                        className: "headerMenuIcon"
                    }, i.createElement("use", {
                        xlinkHref: "#settings-icon-secondary"
                    })), i.createElement("span", {
                        className: "body1 ml-2"
                    }, "Settings")))
                },
                L = n(68116),
                S = function() {
                    var e = (0, m.v9)((function(e) {
                            return e.auth
                        })).user,
                        t = (0, i.useState)(!1),
                        n = (0, C.Z)(t, 2),
                        r = n[0],
                        o = n[1],
                        a = (0, i.useRef)(),
                        c = function(e) {
                            a.current.contains(e.target) || o(!1)
                        };
                    return (0, i.useEffect)((function() {
                        return r ? document.addEventListener("mousedown", c) : document.removeEventListener("mousedown", c),
                            function() {
                                document.removeEventListener("mousedown", c)
                            }
                    }), [r]), i.createElement("div", {
                        className: "relative inline-block"
                    }, i.createElement("button", {
                        onClick: function(e) {
                            e.preventDefault(), o(!r)
                        },
                        "aria-label": "Toggle profile dropdown",
                        id: "profile-menu"
                    }, i.createElement(w.Z, {
                        id: "avatar-h-30"
                    })), r && i.createElement("div", {
                        ref: a,
                        className: "origin-top-right absolute right-0 mt-2 w-26 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    }, i.createElement("div", {
                        className: "py-1",
                        role: "menu",
                        "aria-orientation": "vertical",
                        "aria-labelledby": "profile-menu"
                    }, i.createElement(A, {
                        user: e,
                        spacing: 13,
                        fontSize: 15,
                        iconSize: 20
                    }), i.createElement(x, {
                        spacing: 13,
                        fontSize: 15,
                        iconSize: 20
                    }), i.createElement(L.Z, {
                        spacing: 13,
                        fontSize: 15,
                        iconSize: 20
                    }))))
                },
                P = function() {
                    var e = (0, m.I0)();
                    return i.createElement(i.Fragment, null, i.createElement("button", {
                        className: "h-8 m-2 p-2 text-white hover:bg-primaryLight body1 rounded flex items-center",
                        color: "secondary",
                        onClick: function() {
                            return t = "login", e(l.N.openModal(t)), window.sessionStorage.setItem("source", "Login Button"), void(0, k.Lq)("Login Button");
                            var t
                        }
                    }, "Log in"))
                },
                M = function() {
                    var e = (0, Z.Z)();
                    return i.createElement("span", null, e ? i.createElement(S, null) : i.createElement(P, null))
                },
                q = function(e) {
                    var t = (0, m.I0)();
                    return i.createElement("button", {
                        "aria-label": "Toggle navigation",
                        onClick: function(e) {
                            (0, f.qP)({
                                eventCategory: "Other Engagement",
                                eventAction: "Navigation",
                                eventLabel: "Hamburger",
                                eventValue: 0
                            }), t(l.N.openModal("mobileMenu"))
                        },
                        className: "flex justify-self-start items-center ml-4"
                    }, i.createElement(c.Z, {
                        src: "/icons/hamburgerMenuIcon.svg",
                        width: 20,
                        height: 15,
                        lazyLoad: !1,
                        className: "self-center"
                    }))
                },
                O = n(39386),
                T = n(27157),
                I = function() {
                    var e = (0, Z.Z)(),
                        t = (0, m.I0)(),
                        n = (0, O.i)("/api/notifications?per_page=1", !0, "&filter=unread").data,
                        r = (0, i.useState)(!1),
                        o = (0, C.Z)(r, 2),
                        a = o[0],
                        s = o[1],
                        u = (0, d.Z)("log_out_bell_click", "popup"),
                        v = (0, d.Z)("notification-app", !1),
                        h = (0, d.Z)("show_logged_out_notification", !1) && !e,
                        p = (0, m.v9)((function(e) {
                            return e.pageData.isMobile
                        }));
                    (0, i.useEffect)((function() {
                        var e;
                        h || s((null == n || null === (e = n.data) || void 0 === e ? void 0 : e.length) > 0)
                    }), [n]), (0, i.useEffect)((function() {
                        (0, T.S_)() && h && (localStorage.getItem("loggedOutClickedBell") || s(!1))
                    }), []);
                    return i.createElement(N.Z, {
                        className: "relative inline-block",
                        href: "/notifications",
                        onClick: function(n) {
                            return function(n) {
                                if ((0, f.qP)({
                                        eventCategory: "Notifications Engagement",
                                        eventAction: "Notification Page Visit",
                                        eventLabel: "Bell Click"
                                    }), !e && (h && localStorage.setItem("loggedOutClickedBell", !0), "popup" == u)) {
                                    if (n.preventDefault(), "notification-app" == v && p) return t(l.N.openModal("notification")), null;
                                    window.sessionStorage.setItem("source", "Notification Bell"), t(l.N.openModal("login", {
                                        source: {
                                            title: "Login or register to gain access to notifications!"
                                        }
                                    }))
                                }
                            }(n)
                        }
                    }, i.createElement(c.Z, {
                        src: "/icons/notificationBellIcon.svg",
                        width: 30,
                        height: 30,
                        lazyLoad: !1,
                        className: "self-center"
                    }), a && i.createElement("span", {
                        className: "absolute top-0 right-0 inline-block w-2 h-2 transform -translate-x-1/2 translate-y-1/2 bg-errorText rounded-full"
                    }))
                },
                j = n(4670),
                R = n(8322),
                D = n(16639),
                H = n(8624),
                z = function(e) {
                    var t = (0, s.Z)("/"),
                        n = "home" == (0, m.v9)((function(e) {
                            var t;
                            return null == e || null === (t = e.pageData) || void 0 === t ? void 0 : t.route
                        })),
                        r = "search" == (0, m.v9)((function(e) {
                            var t;
                            return null == e || null === (t = e.pageData) || void 0 === t ? void 0 : t.route
                        })),
                        o = (0, D.Z)(),
                        a = (0, m.I0)(),
                        u = (0, m.v9)((function(e) {
                            var t, n, r;
                            return null !== (t = null == e || null === (n = e.auth) || void 0 === n || null === (r = n.user) || void 0 === r ? void 0 : r.coins) && void 0 !== t ? t : 0
                        })),
                        f = (0, d.Z)("enable_sif", !1),
                        h = (0, d.Z)("show_ask_question_button", !0),
                        p = (0, d.Z)("show_create_button", !1),
                        y = (0, d.Z)("enable_s1_menu", !1),
                        b = i.createElement(N.Z, {
                            href: t,
                            className: "self-center justify-self-center"
                        }, i.createElement(c.Z, {
                            src: "/images/logos/answers-logo-white-updated.svg",
                            alt: "answersLogoWhite",
                            height: 24,
                            width: 122
                        })),
                        C = i.createElement(N.Z, {
                            href: t,
                            className: "self-center justify-self-center mr-1"
                        }, i.createElement(c.Z, {
                            src: "/images/logos/a_burst_blue_square.svg",
                            alt: "answersABurst",
                            height: 40,
                            width: 40
                        })),
                        w = i.createElement(i.Fragment, null, i.createElement("span", {
                            className: "caption1 flex mt-1 items-center mr-2 ml-2 cursor-pointer",
                            onClick: function() {
                                return window.location = "/leaderboard"
                            }
                        }, i.createElement(c.Z, {
                            src: "/icons/coinIcon.svg",
                            width: 24,
                            height: 24,
                            lazyLoad: !1,
                            className: "self-center"
                        }), i.createElement("p", {
                            className: "text-secondaryLight caption1 ml-1"
                        }, (0, R.Ot)(u)))),
                        k = function(e) {
                            return i.createElement("div", {
                                className: "h-12 bg-primaryColor w-full flex fixed left-0 top-0 z-20"
                            }, i.createElement("div", {
                                className: "grid md:grid-cols-layout grid-cols-3 max-app-width gap-x-4 place-content-center"
                            }, e.children))
                        },
                        Z = i.createElement(i.Fragment, null, i.createElement("span", {
                            className: "caption1 flex items-center mx-2 cursor-pointer max-md:hidden",
                            onClick: function() {
                                return a(l.N.openModal("s1SideMenu"))
                            }
                        }, i.createElement(c.Z, {
                            src: "/icons/searchGlassWhiteIcon.svg",
                            width: 24,
                            height: 24,
                            lazyLoad: !1,
                            className: "self-center"
                        })));
                    return i.createElement(k, null, i.createElement("div", {
                        className: "".concat(r ? "hidden" : "max-md:contents hidden")
                    }, i.createElement(q, {
                        static: e.static
                    }), i.createElement("div", {
                        className: "absolute top-3 left-12"
                    }, i.createElement(j.Z, {
                        forceMobile: !0,
                        className: "h-7"
                    }))), i.createElement("div", {
                        className: "md:contents ".concat(r ? "hidden" : "", " self-center justify-self-center")
                    }, b), i.createElement("div", {
                        className: "w-full max-center-column-width self-center max-md:hidden"
                    }, f && n ? null : i.createElement(v, null)), r && i.createElement("div", {
                        className: "col-span-3 p-2 items-center max-md:flex hidden"
                    }, C, i.createElement(H.default, {
                        customSearchInput: "w-full",
                        isLoading: !1,
                        onClick: function() {
                            a(l.N.openModal("search", {
                                value: o
                            }))
                        },
                        id: "search-input-mobile"
                    })), i.createElement("div", {
                        className: "flex justify-self-end items-center space-x-1"
                    }, y && Z, r ? i.createElement("div", {
                        className: "md:contents hidden"
                    }, i.createElement(I, null)) : i.createElement(I, null), i.createElement("div", {
                        className: "max-md:hidden"
                    }, h && i.createElement(g, {
                        placement: "Ask Button SimpleHeader"
                    }), p && i.createElement(E, {
                        placement: "Create Button SimpleHeader"
                    })), i.createElement("div", {
                        className: "mr-4 ml-4 no-print ".concat(r ? "max-md:hidden md:contents" : "")
                    }, w), i.createElement("div", {
                        className: "max-md:hidden"
                    }, i.createElement(M, null))))
                },
                V = n(21163),
                B = n(31821),
                F = function(e) {
                    var t = e.center,
                        n = e.trendingQuestionsProps,
                        c = e.previouslyViewedProps,
                        s = e.unansweredQuestionProps,
                        l = e.disableMaxWidth,
                        u = void 0 !== l && l,
                        d = (0, o.Z)(e, ["center", "trendingQuestionsProps", "previouslyViewedProps", "unansweredQuestionProps", "disableMaxWidth"]),
                        v = (0, V.Z)(),
                        f = (0, B.Z)(),
                        h = (0, m.v9)((function(e) {
                            return null == e ? void 0 : e.modal.isOpen
                        })),
                        p = null;
                    p = v ? i.createElement("div", null) : i.createElement(z, null);
                    var g = "",
                        y = "";
                    return f && h && (g = "fixed h-full"), u || (y = "max-center-column-width"), i.createElement(a.Z, (0, r.Z)({}, d, {
                        trendingQuestions: n,
                        unansweredQuestionProps: s,
                        previouslyViewedProps: c,
                        header: p
                    }), i.createElement("div", {
                        className: "".concat(g, " ").concat(y, " relative")
                    }, t))
                }
        },
        77292: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return c
                }
            });
            var r = n(4942);

            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var a = {};

            function c(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                        method: "GET"
                    },
                    o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                void 0 === a[e] && (a[e] = {});
                var i = a[e];
                i.timeout && clearTimeout(i.timeout), o ? s(t, r, n) : i.timeout = setTimeout((function() {
                    s(t, r, n)
                }), 800)
            }
            var s = function(e, t, n) {
                fetch(e, i({}, t)).then((function(e) {
                    return e.json().then((function(t) {
                        return i({
                            status: e.status
                        }, t)
                    }))
                })).then((function(e) {
                    n(e)
                })).catch((function(e) {
                    return console.log(e)
                }))
            }
        },
        52674: function(e, t, n) {
            "use strict";
            n.d(t, {
                ak: function() {
                    return i
                },
                uU: function() {
                    return a
                },
                xz: function() {
                    return o
                }
            });
            var r = n(27157),
                o = function() {
                    var e = new URLSearchParams(window.location.search);
                    return e.delete("q"), e.delete("filter"), "" !== e.toString()
                },
                i = function(e) {
                    if ((0, r.S_)()) {
                        var t = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search);
                        return t && decodeURIComponent(t[1].replace(/\+/g, " "))
                    }
                },
                a = function() {
                    if ((0, r.S_)()) return /iP(ad|od|hone)/i.test(window.navigator.userAgent) && /WebKit/i.test(window.navigator.userAgent) && !/(CriOS|FxiOS|OPiOS|mercury)/i.test(window.navigator.userAgent)
                }
        },
        3901: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return o
                },
                Y: function() {
                    return i
                }
            });
            var r = n(70399),
                o = function(e, t) {
                    (0, r.qP)({
                        eventCategory: "Leaderboard Engagement",
                        eventAction: "Earn Points Click",
                        eventLabel: '{"Message": "'.concat(e, '", "Destination": "').concat(t, '"}'),
                        eventValue: 0
                    })
                },
                i = function(e, t) {
                    (0, r.qP)({
                        eventCategory: "Gamification Engagement",
                        eventAction: "Points Earned",
                        eventLabel: '{"Points Earned": "'.concat(e, '", "Earnable Action": "').concat(t, '"}'),
                        eventValue: e
                    })
                }
        },
        78273: function(e, t, n) {
            "use strict";
            n.d(t, {
                MW: function() {
                    return s
                },
                Ov: function() {
                    return i
                },
                TI: function() {
                    return c
                },
                Wp: function() {
                    return m
                },
                Zu: function() {
                    return a
                },
                _G: function() {
                    return u
                },
                kk: function() {
                    return l
                },
                mz: function() {
                    return v
                },
                tk: function() {
                    return d
                }
            });
            var r = n(70399),
                o = "Guide Engagement",
                i = function(e) {
                    var t = "Create Guide button clicked" + (e ? " (" + e + ")" : "");
                    (0, r.qP)({
                        eventName: "Create Guide",
                        eventCategory: "Guide Engagement",
                        eventAction: t
                    })
                },
                a = function(e) {
                    var t = "See all guides button cilcked" + (e ? " (" + e + ")" : "");
                    (0, r.qP)({
                        eventName: "Study Guide Clicked",
                        eventCategory: "Guide Engagement",
                        eventAction: t
                    })
                },
                c = function(e) {
                    (0, r.qP)({
                        eventCategory: o,
                        eventAction: "Modal Shown",
                        eventLabel: '{"Trigger": "'.concat(e, '"}')
                    })
                },
                s = function(e) {
                    for (var t = [], n = 0; n < e.guideTopics.length; n++) null != e.guideTopics[n] && t.push(e.guideTopics[n].id);
                    (0, r.qP)({
                        eventCategory: o,
                        eventAction: "Guide Attempted",
                        eventLabel: '{"Guide Text": "'.concat(e.guideText, '", "Context Text": "').concat(e.guideContext, '", "Topic ID List": "').concat(t, '", "Error": "').concat(e.error, '"}')
                    })
                },
                l = function(e) {
                    for (var t = [], n = 0; n < e.guideTopics.length; n++) null != e.guideTopics[n] && t.push(e.guideTopics[n].id);
                    (0, r.qP)({
                        eventCategory: o,
                        eventAction: "Guide Submitted",
                        eventLabel: '{"Guide Text": "'.concat(e.guideText, '", "Context Text": "').concat(e.guideContext, '", "Topic ID List": "').concat(t, '"}')
                    })
                },
                u = function(e) {
                    (0, r.qP)({
                        eventCategory: o,
                        eventAction: "Guide Submitted",
                        eventLabel: '{"Guide Text": "'.concat(e.guideText, '", "Context Text": "').concat(e.guideContext, '"}')
                    })
                },
                d = function(e) {
                    var t = [];
                    if (e.guideTopics)
                        for (var n = 0; n < e.guideTopics.length; n++) null != e.guideTopics[n] && t.push(e.guideTopics[n].id);
                    (0, r.qP)({
                        eventCategory: o,
                        eventAction: "Guide Abandoned",
                        eventLabel: '{"Guide Text": "'.concat(e.guideText, '", "Context Text": "').concat(e.guideContext, '", "Topic ID List": "').concat(t, '", "Reason": "').concat(e.reason, '"}')
                    })
                },
                v = function() {
                    (0, r.qP)({
                        eventCategory: o,
                        eventAction: "Advanced Expanded"
                    })
                },
                m = function() {
                    (0, r.qP)({
                        eventCategory: o,
                        eventAction: "Context Field Selected"
                    })
                }
        },
        30659: function(e, t, n) {
            "use strict";
            n.d(t, {
                MW: function() {
                    return d
                },
                QA: function() {
                    return s
                },
                RS: function() {
                    return a
                },
                a2: function() {
                    return c
                },
                bR: function() {
                    return l
                },
                m2: function() {
                    return m
                },
                m7: function() {
                    return v
                },
                ow: function() {
                    return u
                }
            });
            var r = n(70399),
                o = "Search Bar Engagement",
                i = "Search Page Feed Engagement",
                a = function(e, t, n, o) {
                    (0, r.qP)({
                        eventCategory: i,
                        eventAction: "Click",
                        eventLabel: '{"Factor Use Case ID": "'.concat(e || "-1", '", "Question ID": "').concat(t, '", "Page Section": "').concat(o, '"'),
                        eventValue: n
                    })
                },
                c = function() {
                    (0, r.qP)({
                        eventCategory: o,
                        eventAction: "Click",
                        eventLabel: '{"Element Name": "Advanced Search Icon"}'
                    })
                },
                s = function(e) {
                    (0, r.qP)({
                        eventCategory: o,
                        eventAction: "Click",
                        eventLabel: '{"Element Name": "'.concat(e, '"}'),
                        eventValue: 0
                    })
                },
                l = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "No";
                    (0, r.qP)({
                        eventCategory: o,
                        eventAction: "Query Submitted",
                        eventLabel: '{"Query Text": "'.concat(e, '", "Advanced": "').concat(t, '"}'),
                        eventValue: 0
                    })
                },
                u = function(e, t, n, i) {
                    (0, r.qP)({
                        eventCategory: o,
                        eventAction: "Suggested ".concat(t, " Selected"),
                        eventLabel: '{"Query Text: "'.concat(e, '", "').concat(t, ' ID": "').concat(n, '"}'),
                        eventValue: i
                    })
                },
                d = function(e, t) {
                    (0, r.qP)({
                        eventCategory: o,
                        eventAction: "Query Abandoned",
                        eventLabel: '{"Query Text: "'.concat(e, '", "Reason": "').concat(t, '"}'),
                        eventValue: 0
                    })
                },
                v = function(e) {
                    (0, r.qP)({
                        eventCategory: i,
                        eventAction: "Algo Loaded",
                        eventLabel: '{"Factor Use Case ID": "'.concat(e || "-1", '"}'),
                        eventValue: 0
                    })
                },
                m = function() {
                    (0, r.qP)({
                        eventCategory: i,
                        eventAction: "Load More",
                        eventLabel: "Load More clicked",
                        eventValue: 1
                    })
                }
        },
        50813: function(e, t, n) {
            "use strict";
            n.d(t, {
                G: function() {
                    return r
                }
            });
            var r = function(e) {
                return e.description ? "/t/".concat(e.slug) : "/Q/".concat(e.slug)
            }
        },
        51332: function(e, t, n) {
            "use strict";
            n.d(t, {
                E5: function() {
                    return i
                },
                qD: function() {
                    return o
                },
                rf: function() {
                    return a
                }
            });
            var r = n(59802),
                o = function(e) {
                    var t;
                    return parseInt((0, r.Z)("level_".concat(e, "_points"), null !== (t = {
                        level_1: 0,
                        level_2: 20,
                        level_3: 100,
                        level_4: 200,
                        level_5: 400,
                        level_6: 800,
                        level_7: 1400,
                        level_8: 3e3,
                        level_9: 5e3,
                        level_10: 8e3,
                        level_11: 14e3,
                        level_12: 2e4,
                        level_13: 34e3,
                        level_14: 54e3,
                        level_15: 88e3,
                        level_16: 142e3,
                        level_17: 23e4,
                        level_18: 372e3,
                        level_19: 602e3,
                        level_20: 974e3,
                        level_21: 15e5
                    }["level_".concat(e)]) && void 0 !== t ? t : 9999999999999))
                },
                i = function(e) {
                    for (var t = 1, n = 1; n <= parseInt((0, r.Z)("user_max_level", 21)) && e >= o(n); n++) t = n;
                    return t
                },
                a = function(e) {
                    var t;
                    return (0, r.Z)("level_".concat(e, "_color"), null !== (t = {
                        level_1_color: "#B8CEFC",
                        level_2_color: "#11CCAA",
                        level_3_color: "#E90505",
                        level_4_color: "#ED2378",
                        level_5_color: "#FF6B00",
                        level_6_color: "#FFBB0B",
                        level_7_color: "#00AA63",
                        level_8_color: "#39CCE0",
                        level_9_color: "#3A78FC",
                        level_10_color: "#A100C9",
                        level_11_color: "#4C00C9",
                        level_12_color: "#000000",
                        level_13_color: "#0FE300",
                        level_14_color: "#FF11A0",
                        level_15_color: "#27E5FF",
                        level_16_color: "#EB5400",
                        level_17_color: "#B384FF",
                        level_18_color: "#00DACD",
                        level_19_color: "#8E8E93",
                        level_20_color: "#FEDB41",
                        level_21_color: "#B8CEFC"
                    }["level_".concat(e, "_color")]) && void 0 !== t ? t : "#B8CEFC")
                }
        },
        42480: function() {}
    }
]);