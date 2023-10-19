"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [6671], {
        8887: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return h
                },
                getSuggestionUrl: function() {
                    return d.G
                }
            });
            var a = n(29439),
                r = n(67294),
                o = n(8322),
                s = n(59802),
                c = n(95589),
                l = n(85618),
                i = n(30659),
                m = function(e) {
                    return (0, s.Z)("fayt_to_srp", !1) ? (0, c.$)("/search?q=".concat(e.title)) : (0, c.$)("/Q/".concat(e.slug))
                },
                u = function(e) {
                    var t = e.faytSearch,
                        n = e.suggestions,
                        a = e.justDropdown,
                        s = e.cursor,
                        c = function(e) {
                            return s == e ? "bg-black bg-opacity-5" : ""
                        },
                        u = encodeURIComponent(t),
                        d = r.createElement("a", {
                            href: "/search?q=" + u,
                            className: "w-full grid grid-cols-12 justify-items-start items-center hover:bg-black cursor-pointer hover:bg-opacity-5 hover:no-underline border-b border-newGrey border-solid py-4 ".concat(c(-1)),
                            onClick: function() {
                                return (0, i.bR)(t)
                            }
                        }, r.createElement(l.Z, {
                            src: "/icons/searchIcon.svg",
                            width: 16,
                            height: 16,
                            lazyLoad: !1,
                            className: "col-span-1 justify-self-center"
                        }), r.createElement("div", {
                            className: "col-span-10 flex flex-col ml-4"
                        }, r.createElement("span", {
                            className: "body1"
                        }, "Search: ", t))),
                        f = n.map((function(e, n) {
                            var s = "question-".concat(e.id),
                                u = r.createElement("h2", {
                                    className: "body1"
                                }, e.title, "?"),
                                d = " ".concat((0, o.pw)(e.num_answers), " answers");
                            1 == e.num_answers && (d = " ".concat((0, o.pw)(e.num_answers), " answer"));
                            var f = "";
                            return a || (f = r.createElement("span", {
                                className: "caption1 text-secondaryText"
                            }, d)), r.createElement("a", {
                                index: n,
                                key: s,
                                href: a ? "javascript:;" : m(e),
                                onClick: function() {
                                    return (0, i.ow)(t, "Question", e.id, n)
                                },
                                className: "w-full grid grid-cols-12 justify-items-start items-center hover:bg-black cursor-pointer hover:bg-opacity-5 hover:no-underline text-primaryText border-b border-newGrey border-solid py-2 pr-2 ".concat(c(n))
                            }, r.createElement(l.Z, {
                                src: "/icons/searchIcon.svg",
                                lazyLoad: !1,
                                width: 16,
                                height: 16,
                                className: "col-span-1 justify-self-center"
                            }), r.createElement("div", {
                                className: "col-span-10 flex flex-col ml-4"
                            }, u, f))
                        }));
                    return r.createElement(r.Fragment, null, d, f)
                },
                d = n(50813),
                f = n(84751),
                h = function(e) {
                    var t = e.faytSearch,
                        n = e.suggestions,
                        o = e.query,
                        c = e.cursor,
                        i = e.hideResults,
                        m = e.setHideResults,
                        d = e.justDropdown,
                        h = e.noTop,
                        v = void 0 !== h && h,
                        p = e.isModal,
                        w = void 0 !== p && p,
                        g = (0, s.Z)("search_modal_main_text", "The best way to get a good answer is to ask a good question."),
                        b = (0, r.useState)(!1),
                        E = (0, a.Z)(b, 2),
                        y = E[0],
                        _ = E[1],
                        x = "home" == (0, f.v9)((function(e) {
                            var t;
                            return null == e || null === (t = e.pageData) || void 0 === t ? void 0 : t.route
                        })),
                        N = (0, s.Z)("search_modal_step_1", "Start with an interrogative word like who, what, or where."),
                        L = (0, s.Z)("search_modal_step_2", "State your question clearly, and be specific!"),
                        D = (0, s.Z)("search_modal_step_3", "Double check your spelling and grammar."),
                        S = (0, r.useRef)(),
                        Z = !i && n.length > 0,
                        k = (0, f.v9)((function(e) {
                            return 1 == e.pageData.isMobile
                        })),
                        I = function(e) {
                            S.current.contains(e.target) || m(!0)
                        };
                    (0, r.useEffect)((function() {
                        i ? document.removeEventListener("mousedown", I) : document.addEventListener("mousedown", I);
                        var e = document.getElementById("search-input") == document.activeElement || document.getElementById("search-input-mobile") == document.activeElement;
                        return _(e),
                            function() {
                                document.removeEventListener("mousedown", I)
                            }
                    }), [i]);
                    var j = "";
                    return Z ? j = r.createElement(u, {
                        suggestions: n,
                        numAnswers: e.numAnswers,
                        query: o,
                        cursor: c,
                        hideResults: i,
                        justDropdown: d,
                        faytSearch: t
                    }) : (y || w) && (j = r.createElement("div", {
                        className: "body1 cursor-pointer flex flex-col p-4"
                    }, r.createElement("div", {
                        className: "search-modal-main"
                    }, g), r.createElement("div", {
                        className: "caption3 flex flex-col"
                    }, r.createElement("div", {
                        className: "mb-4 flex flex-row"
                    }, r.createElement(l.Z, {
                        src: "/icons/number1Icon.svg",
                        width: 28,
                        height: 28,
                        lazyLoad: !1,
                        className: "overflow-visible self-center"
                    }), r.createElement("span", {
                        className: "ml-3"
                    }, N)), r.createElement("div", {
                        className: "mb-4 flex flex-row"
                    }, r.createElement(l.Z, {
                        src: "/icons/number2Icon.svg",
                        width: 28,
                        height: 28,
                        lazyLoad: !1,
                        className: "overflow-visible self-center"
                    }), r.createElement("span", {
                        className: "ml-3"
                    }, L)), r.createElement("div", {
                        className: "mb-4 flex flex-row"
                    }, r.createElement(l.Z, {
                        src: "/icons/number3Icon.svg",
                        width: 28,
                        height: 28,
                        lazyLoad: !1,
                        className: "overflow-visible self-center"
                    }), r.createElement("span", {
                        className: "ml-3"
                    }, D))))), r.createElement("div", {
                        className: "\n                ".concat(v ? "mt-2" : "top-12", "\n                w-full max-center-column-width max-h-9/10 md:max-h-56 z-50 rounded\n                ").concat(x ? "absolute" : "absolute md:right-auto right-0 ", "\n                ").concat(Z || !k ? "shadow" : "", "\n                overflow-y-auto px-4 md:px-2 max-h-full bg-transparent md:bg-white max-md:left-0"),
                        style: d ? {
                            width: "auto",
                            top: "auto",
                            zIndex: 1200
                        } : null
                    }, r.createElement("div", {
                        ref: S
                    }, j))
                }
        },
        95589: function(e, t, n) {
            n.d(t, {
                $: function() {
                    return r
                }
            });
            var a = n(27157),
                r = function(e) {
                    var t, n, r;
                    return (0, a.S_)() ? (null !== (t = "https://" + (null === (n = window) || void 0 === n || null === (r = n.appConfig) || void 0 === r ? void 0 : r.rootDomain)) && void 0 !== t ? t : "www.answers.com") + e : null
                }
        }
    }
]);