"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [359], {
        85618: function(e, t, n) {
            var o = n(87462),
                r = n(45987),
                i = n(67294);
            t.Z = function(e) {
                var t = e.className,
                    n = e.lazyLoad,
                    c = void 0 === n || n,
                    a = e.width,
                    u = e.height,
                    s = e.onClick,
                    l = void 0 === s ? null : s,
                    f = e.alt,
                    d = void 0 === f ? "" : f,
                    p = (0, r.Z)(e, ["className", "lazyLoad", "width", "height", "onClick", "alt"]);
                return i.createElement("img", (0, o.Z)({
                    alt: d,
                    className: t,
                    loading: c ? "lazy" : "eager",
                    onClick: l,
                    width: a,
                    height: u
                }, p))
            }
        },
        60371: function(e, t, n) {
            var o = n(87462),
                r = n(45987),
                i = n(67294),
                c = n(75315);
            t.Z = function(e) {
                var t = e.href,
                    n = e.underline,
                    a = void 0 === n ? "no-underline" : n,
                    u = e.className,
                    s = void 0 === u ? "" : u,
                    l = (0, r.Z)(e, ["href", "underline", "className"]),
                    f = "hover:".concat(a, " ").concat(s),
                    d = (0, c.Z)(t);
                return i.createElement("a", (0, o.Z)({
                    className: f,
                    href: d,
                    onClick: function() {
                        return e.onClick
                    }
                }, l))
            }
        },
        90149: function(e, t, n) {
            var o = n(29439),
                r = n(67294);
            t.Z = function(e) {
                var t = e.backgroundColor,
                    n = void 0 === t ? "bg-primaryText" : t,
                    i = e.color,
                    c = void 0 === i ? "text-white" : i,
                    a = e.visibleOverride,
                    u = void 0 !== a && a,
                    s = e.actAsPopper,
                    l = void 0 !== s && s,
                    f = (0, r.useState)(!1),
                    d = (0, o.Z)(f, 2),
                    p = d[0],
                    v = d[1];
                return r.createElement("div", {
                    onMouseEnter: function() {
                        return l ? null : v(!0)
                    },
                    onMouseLeave: function() {
                        return l ? null : v(!1)
                    },
                    className: e.className
                }, e.children, (p || u) && r.createElement("div", {
                    className: "mt-2 caption1 ".concat(n, " ").concat(c, " rounded shadow-xl absolute px-2 py-1 ").concat(e.tooltipClasses, " z-1")
                }, e.tooltipName))
            }
        },
        29539: function(e, t, n) {
            n.d(t, {
                El: function() {
                    return s
                },
                IK: function() {
                    return l
                },
                Yo: function() {
                    return u
                }
            });
            var o = n(87462),
                r = n(45987),
                i = n(67294),
                c = n(90149),
                a = function(e) {
                    var t = e.children,
                        n = e.onClick,
                        a = e.href,
                        u = void 0 === a ? null : a,
                        s = e.toolTipClass,
                        l = e.className,
                        f = e.tooltip,
                        d = void 0 === f ? null : f,
                        p = e.color,
                        v = (0, r.Z)(e, ["children", "onClick", "href", "toolTipClass", "className", "tooltip", "color"]),
                        g = i.createElement("button", (0, o.Z)({
                            className: "py-2 px-3 rounded-md flex items-center justify-center ".concat(p, " ").concat(l),
                            onClick: function(e) {
                                u && (window.location.href = u), n && n(e)
                            }
                        }, v), t);
                    return d ? i.createElement(c.Z, {
                        tooltipName: d,
                        className: s
                    }, g) : g
                },
                u = function(e) {
                    return i.createElement(a, (0, o.Z)({}, e, {
                        color: "bg-tertiary text-secondaryLight caption3"
                    }))
                },
                s = function(e) {
                    return i.createElement(a, (0, o.Z)({}, e, {
                        color: "bg-primaryColor text-secondaryLight caption3"
                    }))
                },
                l = function(e) {
                    var t = e.extraClasses,
                        n = void 0 === t ? "bg-white text-primaryColor" : t;
                    return i.createElement(a, (0, o.Z)({}, e, {
                        color: " ".concat(n, " border-primaryLight border border-solid caption1")
                    }))
                }
        },
        94828: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return a
                }
            });
            var o = n(29439),
                r = n(67294),
                i = function(e) {
                    var t = e.className;
                    return r.createElement(r.Fragment, null, e.isOpen && r.createElement("div", {
                        className: "fixed z-50 inset-0 overflow-y-auto"
                    }, r.createElement("div", {
                        className: "flex items-end justify-center min-h-screen text-center sm:block sm:p-0"
                    }, r.createElement("div", {
                        className: "fixed inset-0 transition-opacity",
                        "aria-hidden": "true"
                    }, r.createElement("div", {
                        className: "absolute inset-0 bg-black opacity-75"
                    })), r.createElement("span", {
                        className: "hidden sm:inline-block sm:align-middle sm:h-screen",
                        "aria-hidden": "true"
                    }, "​"), r.createElement("div", {
                        className: "fixed -inset-x-0 bottom-0 inline-block align-middle bg-white rounded-md shadow-md transform transition-all w-full h-auto ".concat(t),
                        role: "dialog",
                        "aria-modal": "true"
                    }, e.children))))
                },
                c = n(29539),
                a = function(e) {
                    var t = e.children,
                        n = e.isOptionsMenu,
                        a = void 0 !== n && n,
                        u = e.isAdvanced,
                        s = void 0 !== u && u,
                        l = e.itemStyles,
                        f = e.btn,
                        d = void 0 === f ? "Select" : f,
                        p = e.styleOverride,
                        v = void 0 === p ? "right-0 mt-2" : p,
                        g = e.styleHeight,
                        y = void 0 === g ? "h-3" : g,
                        O = e.itemContainerOverride,
                        m = void 0 === O ? "py-1 flex flex-col justify-between" : O,
                        b = e.containerStyles,
                        h = void 0 === b ? "" : b,
                        E = r.useRef(),
                        _ = (0, r.useState)(!1),
                        w = (0, o.Z)(_, 2),
                        T = w[0],
                        I = w[1],
                        P = function(t) {
                            e.isMobile && "DIV" != t.target.tagName || !e.isMobile && E.current.contains(t.target) || I(!1)
                        };
                    r.useEffect((function() {
                        return T ? document.addEventListener("mousedown", P) : document.removeEventListener("mousedown", P),
                            function() {
                                document.removeEventListener("mousedown", P)
                            }
                    }), [T]);
                    var A = function(e) {
                            I(!T)
                        },
                        S = function(t) {
                            if (t && null != t && t.key) return e.isMobile ? "block mx-3 py-4 profileHud body1" : "block mx-2 ".concat(s ? "" : "my-3", " caption1")
                        };
                    return r.createElement("div", {
                        className: "relative inline-block ".concat(h)
                    }, r.createElement("button", {
                        onClick: A,
                        className: "".concat(y, " focus:outline-none")
                    }, d), T ? e.isMobile ? r.createElement(i, {
                        isOpen: T
                    }, t.map((function(e, t) {
                        return r.createElement("span", {
                            id: "option-".concat(t),
                            className: S(e),
                            role: "menuitem",
                            key: t
                        }, e)
                    })), r.createElement(c.IK, {
                        className: "justify-center w-11/12 my-2 mx-auto",
                        onClick: A
                    }, "Cancel")) : r.createElement("div", {
                        ref: E,
                        className: "origin-top-right z-10 absolute ".concat(v, " w-26 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 w-max")
                    }, r.createElement("div", {
                        className: m,
                        role: "menu",
                        "aria-orientation": "vertical",
                        "aria-labelledby": "dropdown-menu"
                    }, t.map((function(e, t) {
                        return r.createElement("span", {
                            className: "".concat(S(e), " ").concat(l),
                            role: "menuitem",
                            key: t,
                            onClick: function() {
                                return function(e) {
                                    var t;
                                    a ? null == e || e.props : null == e || null === (t = e.props) || void 0 === t || t.onClickParent(), I(!1)
                                }(e)
                            }
                        }, e)
                    })))) : null)
                }
        },
        84771: function(e, t, n) {
            n.d(t, {
                Gh: function() {
                    return u
                },
                g3: function() {
                    return s
                }
            });
            var o = n(4942),
                r = n(70399),
                i = n(94293);

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var u = function(e) {
                    var t = new URLSearchParams(window.location.search),
                        n = e.campaign,
                        o = void 0 !== n && n,
                        r = e.source,
                        i = void 0 !== r && r;
                    return o || (o = t.get("campaign")), i || (i = t.get("source")), {
                        campaign: o,
                        source: i
                    }
                },
                s = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    Promise.allSettled([(0, i.U2)("savanaCampaign"), (0, i.U2)("savanaSource")]).then((function(n) {
                        var o, i, c, u, s, l, f, d, p, v = null === (o = n[0]) || void 0 === o ? void 0 : o.value,
                            g = null === (i = n[1]) || void 0 === i ? void 0 : i.value,
                            y = null === (c = window) || void 0 === c || null === (u = c.appConfig) || void 0 === u ? void 0 : u.keyValues,
                            O = null === (s = window) || void 0 === s || null === (l = s.appConfig) || void 0 === l ? void 0 : l.activeTests;
                        (g || v) && (t && (0, r.qP)(e), (0, r.FM)({
                            name: "Savana",
                            meta: a(a({}, e), {}, {
                                ua: null === (f = navigator) || void 0 === f ? void 0 : f.userAgent,
                                campaign: v,
                                source: g,
                                activeTests: O,
                                keyValues: y,
                                route: null === (d = window) || void 0 === d || null === (p = d.appConfig) || void 0 === p ? void 0 : p.route
                            })
                        }))
                    }))
                }
        },
        59802: function(e, t, n) {
            var o = n(27157),
                r = n(84751);
            t.Z = function(e, t) {
                if (!(0, o.S_)()) {
                    var n = (0, r.v9)((function(e) {
                        return e.pageData.keyValues
                    }));
                    return n && n[e] ? n[e].value : t
                }
                return window.appConfig && window.appConfig.keyValues && window.appConfig.keyValues[e] ? window.appConfig.keyValues[e].value : t
            }
        },
        75315: function(e, t, n) {
            var o = n(84751);
            t.Z = function(e) {
                var t = (0, o.v9)((function(e) {
                    var t, n;
                    return "https://" + (null !== (t = null === (n = e.pageData) || void 0 === n ? void 0 : n.rootDomain) && void 0 !== t ? t : "www.answers.com")
                }));
                return void 0 === e || !t || "#" == e.charAt(0) || /^https?:\/\//i.test(e) || /^\/\//.test(e) || (e = t + e), e
            }
        },
        16407: function(e, t, n) {
            var o = n(29439),
                r = n(67294),
                i = n(84751),
                c = n(52301),
                a = n(70399),
                u = n(88059),
                s = n(54885),
                l = n(44740);
            t.Z = function() {
                var e = (0, i.v9)((function(e) {
                        return e.auth
                    })),
                    t = e.loggedIn,
                    n = e.verified,
                    f = e.user,
                    d = (0, i.v9)((function(e) {
                        return null == e ? void 0 : e.pageData
                    })).location,
                    p = void 0 !== d && d,
                    v = (0, i.I0)(),
                    g = (0, r.useState)(!1),
                    y = (0, o.Z)(g, 2),
                    O = y[0],
                    m = y[1],
                    b = function(e, t, n, o) {
                        "Question" == t ? (0, s.GP)(e, "Failed", n) : "Answer" == t && (0, l.fx)(o, e, n)
                    },
                    h = function(e, t, n) {
                        "Question" == t ? (0, s.GP)(e, "Success") : "Answer" == t && (0, l.fx)(n, e)
                    };
                return function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        o = e.objectId,
                        r = void 0 === o ? null : o,
                        i = e.objectType,
                        s = void 0 === i ? "" : i,
                        l = e.confirmIntent,
                        d = void 0 !== l && l,
                        g = e.questionId;
                    if (!O && r && s) {
                        if (m(!0), !t) return window.sessionStorage.setItem("source", "Report Content Button"), v(c.N.openModal("login", {
                            source: {
                                fileName: "report",
                                title: "You must be logged in to report content"
                            }
                        })), b(r, s, "Not Logged In", g), (0, u.Lq)("Flag Button"), p && (0, a.qP)({
                            eventCategory: "".concat(p, " Engagement"),
                            eventAction: "Question Reported",
                            eventLabel: '{"Question ID": "'.concat(r, '", "Status": "Failed", "Reason": "Not Logged In"}'),
                            eventValue: 0
                        }), void m(!1);
                        if (d) return v(c.N.openModal("flagObjectConfirmation", {
                            objectId: r,
                            objectType: s
                        })), b(r, s, "unknown", g), void m(!1);
                        if (!n) return v(c.N.addToast({
                            type: "info",
                            message: "Your account must be verified to report content."
                        })), p && (0, a.qP)({
                            eventCategory: "".concat(p, " Engagement"),
                            eventAction: "Question Reported",
                            eventLabel: '{"Question ID": "'.concat(r, '", "Status": "Failed", "Reason": "Account Not Verified"}'),
                            eventValue: 0
                        }), void m(!1);
                        v(c.N.addToast({
                            type: "info",
                            message: "Thank you for your feedback."
                        })), h(r, s, g), p && (0, a.qP)({
                            eventCategory: "".concat(p, " Engagement"),
                            eventAction: "Question Reported",
                            eventLabel: '{"Question ID": "'.concat(r, '", "Status": "Success"}'),
                            eventValue: 0
                        });
                        var y = ["/api/flag", s, r].join("/");
                        fetch(y, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                api_token: f ? f.api_token : ""
                            })
                        }), m(!1)
                    }
                }
            }
        },
        90624: function(e, t, n) {
            var o = n(84751),
                r = n(76097);
            t.Z = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = (0, r.Z)(),
                    n = (0, o.v9)((function(e) {
                        return e.auth.user
                    }));
                return !e && t ? n : e
            }
        },
        31821: function(e, t, n) {
            var o = n(84751);
            t.Z = function() {
                return (0, o.v9)((function(e) {
                    return e.pageData.isMobile
                }))
            }
        },
        52301: function(e, t, n) {
            n.d(t, {
                N: function() {
                    return o
                },
                M: function() {
                    return je
                }
            });
            var o = {};
            n.r(o), n.d(o, {
                addPoints: function() {
                    return Ee
                },
                addToast: function() {
                    return Pe
                },
                addToastObject: function() {
                    return Se
                },
                auth: function() {
                    return he
                },
                changeLightbox: function() {
                    return me
                },
                changeModal: function() {
                    return ge
                },
                closeLightbox: function() {
                    return Oe
                },
                closeModal: function() {
                    return ve
                },
                editGuide: function() {
                    return Ne
                },
                loadMorePageAnswers: function() {
                    return Ie
                },
                openLightbox: function() {
                    return ye
                },
                openModal: function() {
                    return pe
                },
                removeToast: function() {
                    return Ae
                },
                slots: function() {
                    return _e
                },
                toggleGates: function() {
                    return Ce
                },
                updateAdSafe: function() {
                    return be
                },
                updateIsBot: function() {
                    return De
                },
                updatePageAnswers: function() {
                    return Te
                },
                updatePageData: function() {
                    return we
                }
            });
            var r = n(14890),
                i = n(4942),
                c = "OPEN_MODAL",
                a = "CHANGE_MODAL",
                u = "CLOSE_MODAL",
                s = "OPEN_LIGHTBOX",
                l = "CHANGE_LIGHTBOX",
                f = "CLOSE_LIGHTBOX",
                d = "AUTH",
                p = "SLOTS",
                v = "UPDATE_AD_SAFE",
                g = "UPDATE_PAGE_DATA",
                y = "UPDATE_PAGE_ANSWERS",
                O = "LOAD_MORE_PAGE_ANSWERS",
                m = "IS_BOT",
                b = "OPEN_TOAST",
                h = "CLOSE_TOAST",
                E = "ADD_FULL_TOAST",
                _ = "ADD_POINTS",
                w = "TOGGLE_GATES",
                T = "UPDATE_GUIDE";

            function I(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? I(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var A = {
                isOpen: !1,
                type: !1,
                hasBeenClosed: !1,
                data: {}
            };

            function S(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function D(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? S(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var C = {
                loggedIn: !1,
                verified: !1,
                user: !1
            };

            function N(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function L(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? N(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : N(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var j = {};

            function R(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function M(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? R(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : R(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var x = {
                    adSafe: !0
                },
                Z = n(93433),
                F = function(e, t, n) {
                    return [].concat((0, Z.Z)(e.slice(0, t)), [n], (0, Z.Z)(e.slice(t)))
                };

            function q(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function U(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? q(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function B(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? B(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : B(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var V = {
                isBot: !1
            };

            function Y(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function G(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Y(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Y(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Q = {
                isOpen: !1,
                type: !1,
                hasBeenClosed: !1,
                data: {}
            };

            function H(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function X(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? H(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : H(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var z = {
                    gateHidden: !1
                },
                K = (0, r.UY)({
                    isBot: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case m:
                                return k(k({}, e), {}, {
                                    isBot: t.payload
                                });
                            default:
                                return e
                        }
                    },
                    auth: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case d:
                                return D(D({}, e), t.payload);
                            case _:
                                var n, o = null !== (n = t.payload) && void 0 !== n ? n : 0;
                                return D(D({}, e), {}, {
                                    user: D(D({}, e.user), {}, {
                                        coins: parseInt(e.user.coins) + parseInt(o)
                                    })
                                });
                            default:
                                return e
                        }
                    },
                    modal: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case c:
                                var n = t.payload;
                                return P(P({}, e), {}, {
                                    isOpen: !0,
                                    type: n,
                                    data: P({}, t.data)
                                });
                            case u:
                                return P(P({}, e), {}, {
                                    isOpen: !1,
                                    hasBeenClosed: !0
                                });
                            case a:
                                return P(P({}, e), {}, {
                                    isOpen: !0,
                                    type: t.payload,
                                    data: P({}, t.data)
                                });
                            default:
                                return e
                        }
                    },
                    lightbox: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case s:
                                var n = t.payload;
                                return G(G({}, e), {}, {
                                    isOpen: !0,
                                    type: n,
                                    data: G({}, t.data)
                                });
                            case f:
                                return G(G({}, e), {}, {
                                    isOpen: !1,
                                    hasBeenClosed: !0
                                });
                            case l:
                                return G(G({}, e), {}, {
                                    isOpen: !0,
                                    type: t.payload,
                                    data: G({}, t.data)
                                });
                            default:
                                return e
                        }
                    },
                    ads: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case v:
                                var n = t.payload;
                                return M(M({}, e), {}, {
                                    adSafe: n
                                });
                            default:
                                return e
                        }
                    },
                    pageData: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case g:
                                return U(U({}, e), t.payload);
                            case y:
                                var n = ["vote", "App\\Models\\Answer", t.payload.data.id, "user_vote", t.payload.data.user_id].join("_");
                                localStorage.setItem(n, 1);
                                var o = F(e.content.answers, 1, t.payload.data);
                                return e.content.answers = o, U({}, e);
                            case O:
                                var r = [].concat((0, Z.Z)(e.content.answers), (0, Z.Z)(t.payload.data));
                                return e.content.answers = r, U({}, e);
                            case T:
                                var i = t.payload;
                                return e.guide.title = i.title, e.guide.description = i.description, U({}, e);
                            default:
                                return e
                        }
                    },
                    slots: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : j,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case p:
                                return L(L({}, e), t.payload);
                            default:
                                return e
                        }
                    },
                    toast: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            n = t.payload;
                        switch (t.type) {
                            case b:
                                return e.length > 0 ? e : [].concat((0, Z.Z)(e), [n]);
                            case E:
                                return [].concat((0, Z.Z)(e), [n]);
                            case h:
                                return e.filter((function(e) {
                                    return e.id !== n
                                }));
                            default:
                                return e
                        }
                    },
                    toggleGates: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : z,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case w:
                                return X(X({}, e), {}, {
                                    gateHidden: !0
                                });
                            default:
                                return e
                        }
                    }
                }),
                J = n(67294),
                $ = n(8322),
                W = n(59802),
                ee = n(85618);

            function te(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function ne(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? te(Object(n), !0).forEach((function(t) {
                        (0, i.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : te(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var oe = 0,
                re = {
                    error: "bg-errorLight",
                    game: "bg-primaryText",
                    info: "bg-primaryLight"
                },
                ie = {
                    error: "🚫",
                    game: "🎉",
                    info: "ℹ️"
                },
                ce = {
                    error: 90,
                    game: 90,
                    info: 90
                },
                ae = {
                    error: 5e3,
                    game: 5e3,
                    info: 5e3
                },
                ue = {
                    error: "text-primaryText",
                    game: "text-white",
                    info: "text-primaryText"
                },
                se = {
                    error: !0,
                    game: !1,
                    info: !1
                },
                le = {
                    error: !1,
                    game: !0,
                    info: !1
                };

            function fe(e) {
                var t = e.type,
                    n = e.action,
                    o = void 0 === n ? null : n,
                    r = {
                        bgColor: (0, W.Z)("".concat(t, "_").concat(o, "_bg_color"), (0, W.Z)("".concat(t, "_bg_color"), re[e.type])),
                        emoji: (0, W.Z)("".concat(t, "_").concat(o, "_emoji"), (0, W.Z)("".concat(t, "_emoji"), ie[e.type])),
                        maxLength: parseInt((0, W.Z)("".concat(t, "_").concat(o, "_length"), parseInt((0, W.Z)("".concat(t, "_length"), ce[e.type])))),
                        dismissTime: parseInt((0, W.Z)("".concat(t, "_").concat(o, "_dismiss"), parseInt((0, W.Z)("".concat(t, "_dismiss"), ae[e.type])))),
                        textColor: (0, W.Z)("".concat(t, "_").concat(o, "_text_color"), (0, W.Z)("".concat(t, "_text_color"), ue[e.type])),
                        showX: (0, W.Z)("".concat(t, "_").concat(o, "_show_x"), (0, W.Z)("".concat(t, "_show_x"), se[e.type])),
                        rightIcon: (0, W.Z)("".concat(t, "_").concat(o, "_right_icon"), (0, W.Z)("".concat(t, "_right_icon"), le[e.type]))
                    };
                return r.rightIcon && "game" === t && e.points && (r.rightIcon = J.createElement("div", null, J.createElement("span", {
                    className: "text-sm flex mt-1 items-center mr-2 ml-2"
                }, J.createElement("p", {
                    className: "text-tertiaryText text-sm mx-1 whitespace-nowrap"
                }, "+", (0, $.Ot)(e.points), " pts"), J.createElement(ee.Z, {
                    src: "/icons/coinIcon.svg",
                    width: 20,
                    height: 20,
                    lazyLoad: !1,
                    className: "caption3 mr-1 self-center"
                })))), ne(ne(ne({}, e), r), {}, {
                    id: oe++
                })
            }

            function de(e) {
                return ne(ne({}, e), {}, {
                    id: oe++
                })
            }
            var pe = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return {
                        type: c,
                        payload: e,
                        data: t
                    }
                },
                ve = function() {
                    return {
                        type: u
                    }
                },
                ge = function(e) {
                    return {
                        type: a,
                        payload: e
                    }
                },
                ye = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return {
                        type: s,
                        payload: e,
                        data: t
                    }
                },
                Oe = function() {
                    return {
                        type: f
                    }
                },
                me = function(e) {
                    return {
                        type: l,
                        payload: e
                    }
                },
                be = function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return {
                        type: v,
                        payload: e
                    }
                },
                he = function(e) {
                    return {
                        type: d,
                        payload: e
                    }
                },
                Ee = function(e) {
                    return {
                        type: _,
                        payload: e
                    }
                },
                _e = function(e) {
                    return {
                        type: p,
                        payload: e
                    }
                },
                we = function(e) {
                    return {
                        type: g,
                        payload: e
                    }
                },
                Te = function(e) {
                    return {
                        type: y,
                        payload: e
                    }
                },
                Ie = function(e) {
                    return {
                        type: O,
                        payload: e
                    }
                },
                Pe = function(e) {
                    return {
                        type: b,
                        payload: fe(e)
                    }
                },
                Ae = function(e) {
                    return {
                        type: h,
                        payload: e
                    }
                },
                Se = function(e) {
                    return {
                        type: E,
                        payload: de(e)
                    }
                },
                De = function() {
                    return {
                        type: m
                    }
                },
                Ce = function() {
                    return {
                        type: w
                    }
                },
                Ne = function(e) {
                    return {
                        type: T,
                        payload: e
                    }
                },
                Le = n(27157),
                je = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, Le.S_)() && (e = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()), (0, r.MT)(K, t, e)
                }
        },
        53472: function(e, t, n) {
            var o = n(27157);
            t.Z = function(e) {
                var t = e.children,
                    n = e.fallback,
                    r = void 0 === n ? null : n;
                return (0, o.S_)() ? t : r
            }
        },
        27157: function(e, t, n) {
            n.d(t, {
                S_: function() {
                    return o
                }
            });
            var o = function() {
                return "undefined" != typeof window && window.document && window.document.createElement
            }
        },
        44740: function(e, t, n) {
            n.d(t, {
                Ic: function() {
                    return p
                },
                N2: function() {
                    return u
                },
                O: function() {
                    return l
                },
                Yr: function() {
                    return d
                },
                bK: function() {
                    return g
                },
                fx: function() {
                    return i
                },
                gn: function() {
                    return c
                },
                m4: function() {
                    return a
                },
                sG: function() {
                    return f
                },
                sJ: function() {
                    return v
                },
                u0: function() {
                    return s
                }
            });
            var o = n(70399),
                r = "Answer Engagement",
                i = function(e, t, n) {
                    var i = {
                        eventCategory: r,
                        eventAction: "Answer Reported"
                    };
                    i.eventLabel = n ? '{"Question ID": "'.concat(e, '", "Answer ID": "').concat(t, '", Status: "Failed", "Reason": "').concat(n, '"}') : '{"Question ID": "'.concat(e, '", "Answer ID": "').concat(t, '", Status: "Success"}'), (0, o.qP)(i)
                },
                c = function(e, t, n) {
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "Answer Vote",
                        eventLabel: '{"Question ID": "'.concat(e, '", "Answer ID": "').concat(t, '", "Type": "').concat(n, '"}')
                    })
                },
                a = function(e, t) {
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "Answer Expanded",
                        eventLabel: '{"Question ID": "'.concat(e, '", "Answer ID": "').concat(t, '"}')
                    })
                },
                u = function(e, t) {
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "View Comments",
                        eventLabel: '{"Question ID": "'.concat(e, '", "Answer ID": "').concat(t, '"}')
                    })
                },
                s = function(e, t) {
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "Hide Comments",
                        eventLabel: '{"Question ID": "'.concat(e, '", "Answer ID": "').concat(t, '"}')
                    })
                },
                l = function() {
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "See More Answers"
                    })
                },
                f = function(e, t) {
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "See More Comments",
                        eventLabel: '{"Question ID": "'.concat(e, '", "Answer ID": "').concat(t, '"}')
                    })
                },
                d = function(e, t, n) {
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "Comment Submitted",
                        eventLabel: '{"Question ID": "'.concat(e, '", "Answer ID": "').concat(t, '", "Comment Text": "').concat(n, '"}')
                    })
                },
                p = function(e, t, n) {
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "Comment Abandoned",
                        eventLabel: '{"Question ID": "'.concat(e, '", "Answer ID": "').concat(t, '", "Reason": "').concat(n, '"}')
                    })
                },
                v = function(e, t, n, i) {
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "Comment Attempted",
                        eventLabel: '{"Question ID": "'.concat(e, '", "Answer ID": "').concat(t, '", "Comment Text": "').concat(n, '", "Error": "').concat(i, '"}')
                    })
                },
                g = function(e, t, n) {
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "Image Viewed",
                        eventLabel: '{"Question ID": "'.concat(e, '", "Answer ID": "').concat(t, '", "Image ID": "').concat(n, '"}')
                    })
                }
        },
        88059: function(e, t, n) {
            n.d(t, {
                Lq: function() {
                    return i
                },
                bH: function() {
                    return a
                },
                eE: function() {
                    return l
                },
                gZ: function() {
                    return u
                },
                he: function() {
                    return c
                },
                zZ: function() {
                    return s
                }
            });
            var o = n(70399),
                r = "Sign up/Login Engagement",
                i = function(e) {
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "Login Modal Shown",
                        eventLabel: '{"Trigger": "'.concat(e, '"}')
                    })
                },
                c = function(e) {
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "Login Success",
                        eventLabel: '{"Type": "'.concat(e, '"}')
                    })
                },
                a = function(e, t) {
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "Login Failed",
                        eventLabel: '{"Type": "'.concat(e, '", "Error": "').concat(t, '"}')
                    })
                },
                u = function(e) {
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "Sign Up Modal Shown",
                        eventLabel: '{"Trigger": "'.concat(e, '"}')
                    })
                },
                s = function(e) {
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "Sign Up Success",
                        eventLabel: '{"Type": "'.concat(e, '"}')
                    })
                },
                l = function(e, t) {
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "Sign Up Failed",
                        eventLabel: '{"Type": "'.concat(e, '", "Error": "').concat(t, '"}')
                    })
                }
        },
        54885: function(e, t, n) {
            n.d(t, {
                BQ: function() {
                    return O
                },
                GP: function() {
                    return i
                },
                Rq: function() {
                    return a
                },
                TI: function() {
                    return l
                },
                Tf: function() {
                    return c
                },
                VS: function() {
                    return p
                },
                Vo: function() {
                    return s
                },
                Wp: function() {
                    return g
                },
                ZD: function() {
                    return f
                },
                dB: function() {
                    return u
                },
                mT: function() {
                    return b
                },
                mz: function() {
                    return v
                },
                qv: function() {
                    return d
                },
                rE: function() {
                    return y
                },
                rl: function() {
                    return m
                }
            });
            var o = n(70399),
                r = "Question Engagement",
                i = function(e, t, n) {
                    var i = {
                        eventCategory: r,
                        eventAction: "Question Reported"
                    };
                    i.eventLabel = "Failed" == t ? '{"Question ID": "'.concat(e, '", "Status": "Failed", "Reason": "').concat(n, '"}') : '{"Question ID": "'.concat(e, '", "Status": "').concat(t, '"}'), (0, o.qP)(i)
                },
                c = function(e, t) {
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "Question Vote",
                        eventLabel: '{"Question ID": "'.concat(e, '", "Type": "').concat(t, '"}')
                    })
                },
                a = function(e) {
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "User Profile Clicked",
                        eventLabel: '{"User ID": "'.concat(e, '"}')
                    })
                },
                u = function() {
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "Topics Expanded"
                    })
                },
                s = function(e) {
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "Topic Clicked",
                        eventLabel: '{"Topic ID": "'.concat(e, '"}')
                    })
                },
                l = function(e) {
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "Modal Shown",
                        eventLabel: '{"Trigger": "'.concat(e, '"}')
                    })
                },
                f = function(e) {
                    for (var t = [], n = 0; n < e.questionTopics.length; n++) null != e.questionTopics[n] && t.push(e.questionTopics[n].id);
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "Question Attempted",
                        eventLabel: '{"Question Text": "'.concat(e.questionText, '", "Context Text": "').concat(e.questionContext, '", "Topic ID List": "').concat(t, '", "Error": "').concat(e.error, '"}')
                    })
                },
                d = function(e) {
                    for (var t = [], n = 0; n < e.questionTopics.length; n++) null != e.questionTopics[n] && t.push(e.questionTopics[n].id);
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "Question Submitted",
                        eventLabel: '{"Question Text": "'.concat(e.questionText, '", "Context Text": "').concat(e.questionContext, '", "Topic ID List": "').concat(t, '"}')
                    })
                },
                p = function(e) {
                    var t = [];
                    if (e.questionTopics)
                        for (var n = 0; n < e.questionTopics.length; n++) null != e.questionTopics[n] && t.push(e.questionTopics[n].id);
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "Question Abandoned",
                        eventLabel: '{"Question Text": "'.concat(e.questionText, '", "Context Text": "').concat(e.questionContext, '", "Topic ID List": "').concat(t, '", "Reason": "').concat(e.reason, '"}')
                    })
                },
                v = function() {
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "Advanced Expanded"
                    })
                },
                g = function() {
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "Context Field Selected"
                    })
                },
                y = function(e) {
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "Topic Selected",
                        eventLabel: '{"Topic ID": "'.concat(e, '"}')
                    })
                },
                O = function(e) {
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "Topic Removed",
                        eventLabel: '{"Topic ID": "'.concat(e, '"}')
                    })
                },
                m = function() {
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "Existing Question Viewed"
                    })
                },
                b = function() {
                    (0, o.qP)({
                        eventCategory: r,
                        eventAction: "Existing Question Closed"
                    })
                }
        },
        8322: function(e, t, n) {
            n.d(t, {
                fm: function() {
                    return w
                },
                td: function() {
                    return T
                },
                p6: function() {
                    return y
                },
                mn: function() {
                    return O
                },
                pw: function() {
                    return v
                },
                Ot: function() {
                    return g
                },
                ej: function() {
                    return E
                },
                X9: function() {
                    return I
                },
                DI: function() {
                    return _
                },
                $8: function() {
                    return P
                },
                OX: function() {
                    return d
                },
                Dw: function() {
                    return D
                },
                ox: function() {
                    return p
                },
                LF: function() {
                    return f
                },
                aF: function() {
                    return A
                },
                z1: function() {
                    return S
                }
            });
            var o = n(93433),
                r = n(29439),
                i = n(67294),
                c = n(59802),
                a = new RegExp(/<\/?[^>]+(>|$)/g),
                u = new RegExp(!1),
                s = new RegExp(/<[^>]*>?/gm),
                l = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                f = function(e, t, n) {
                    var o = e[t];
                    return e[t] = e[n], e[n] = o, e
                },
                d = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return {
                        __html: e = t ? e.replace(a, (function(e) {
                            return u.test(e) ? e.replace(s, "") : e
                        })) : e.replace(s, "")
                    }
                },
                p = function(e) {
                    return "string" == typeof e && (e = e.replace(s, "")), e
                },
                v = function(e) {
                    try {
                        return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    } catch (e) {
                        return ""
                    }
                },
                g = function(e) {
                    for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, n = Math.sign(e), o = Math.abs(e), i = [{
                            value: 1,
                            symbol: ""
                        }, {
                            value: 1e3,
                            symbol: "k"
                        }, {
                            value: 1e6,
                            symbol: "M"
                        }, {
                            value: 1e9,
                            symbol: "G"
                        }], c = i.length - 1; c > 0 && !(o >= i[c].value); c--);
                    var a = o / i[c].value * n,
                        u = a.toFixed(t).split("."),
                        s = (0, r.Z)(u, 2),
                        l = s[0],
                        f = s[1];
                    if (f && i[c].symbol) {
                        var d = 3 - l.length;
                        return (f = f.substr(0, d).replace(/0*$/, "")) ? ["".concat(l, ".").concat(f).concat(i[c].symbol), !1] : ["".concat(l).concat(i[c].symbol), !1]
                    }
                    return [l, !0]
                },
                y = function(e) {
                    var t = e;
                    e = e.replace(/-/g, "/");
                    try {
                        var n = Math.floor((new Date - new Date(e)) / 1e3) + 60 * (new Date).getTimezoneOffset(),
                            o = m(n = 0 == n ? 1 : n),
                            r = o.interval,
                            c = o.epoch;
                        return i.createElement("span", {
                            title: t
                        }, r, c, " ago")
                    } catch (e) {
                        return console.error(e), ""
                    }
                },
                O = function(e) {
                    try {
                        var t = e.substring(0, 4),
                            n = e.substring(5, 7);
                        return l[n - 1] + " " + t
                    } catch (e) {
                        return console.error(e), ""
                    }
                },
                m = function(e) {
                    for (var t = 0, n = [
                            ["y", 31536e3],
                            ["mo", 2592e3],
                            ["w", 604800],
                            ["d", 86400],
                            ["h", 3600],
                            ["m", 60],
                            ["s", 1]
                        ]; t < n.length; t++) {
                        var o = (0, r.Z)(n[t], 2),
                            i = o[0],
                            c = o[1],
                            a = Math.floor(e / c);
                        if (a >= 1) return {
                            interval: a,
                            epoch: i
                        }
                    }
                },
                b = function(e) {
                    return e.reduce((function(e, t) {
                        return e[t.key] = t, e
                    }), {})
                },
                h = function(e) {
                    return e = (e = (e = e.replace(/[ ]/g, "_")).replace(/[&]/g, "and")).replace(/[&/\\#,+()$~%.'":*?<>{}]/g, "")
                },
                E = function(e) {
                    return window.getCookie(e)
                },
                _ = function(e, t, n) {
                    return e.split(" ").map((function(e, o) {
                        var r = e.trim().toLowerCase();
                        return -1 != n.toLowerCase().indexOf(r) ? i.createElement("strong", {
                            key: "".concat(t, "-").concat(e, "-").concat(o)
                        }, e, " ") : i.createElement("span", {
                            key: "".concat(t, "-").concat(e, "-").concat(o)
                        }, e, " ")
                    }))
                },
                w = function(e) {
                    return e.replace(/^\w/, (function(e) {
                        return e.toUpperCase()
                    }))
                },
                T = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                    if (0 === e) return "0 Bytes";
                    var n = 1e3,
                        o = t < 0 ? 0 : t,
                        r = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
                        i = Math.floor(Math.log(e) / Math.log(n));
                    return parseFloat((e / Math.pow(n, i)).toFixed(o)) + " " + r[i]
                },
                I = function(e) {
                    if (!e) return "";
                    return e = (e = e.replace(/("([^]+)")/, "<strong>$1</strong>")).replace(/([^\s]+)/, "<strong>$1</strong>")
                },
                P = function(e) {
                    var t, n, o, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = e.body,
                        c = e.meta;
                    return Array.isArray(c) && (c = b(c)), r && e.answers && e.answers.length > 0 && (i = e.answers[0].body), {
                        body: i,
                        title: e.title,
                        topics: e.topics,
                        user: e.user,
                        vote_count: null === (t = e.vote_count) || void 0 === t ? void 0 : t.vote_count,
                        id: e.id,
                        meta: c,
                        slug: null !== (n = e.slug) && void 0 !== n ? n : h(e.title),
                        href: null !== (o = e.href) && void 0 !== o ? o : "/Q/" + e.slug
                    }
                },
                A = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 25;
                    if (!e) return e;
                    var n = (0, o.Z)(e);
                    if (n.length > t) {
                        var r = n.slice(0, t);
                        return r.join("") + "..."
                    }
                    return e
                },
                S = function(e) {
                    var t = parseInt((0, c.Z)("truncate_username", 20));
                    return A(e, t)
                },
                D = function(e, t) {
                    return e.map((function(e, n) {
                        return {
                            body: e.newEquation.ascii(),
                            heading: function(e) {
                                var t;
                                return null !== (t = {
                                    ABSOLUTE_VALUE: "Resolve the absolute value",
                                    ADD_FRACTIONS: "Add the fractions",
                                    ADD_NUMERATORS: "Add the numerators",
                                    COMBINE_NUMERATORS: "Combine the numerators",
                                    COMMON_DENOMINATOR: "Find the common denominator",
                                    CONVERT_INTEGER_TO_FRACTION: "Convert the integer to a fraction",
                                    DIVIDE_FRACTION_FOR_ADDITION: "Divide the fraction and add",
                                    MULTIPLY_DENOMINATORS: "Multiply the denominators",
                                    MULTIPLY_NUMERATORS: "Multiply the numerators",
                                    ADD_COEFFICIENT_OF_ONE: "Add the coefficient of 1",
                                    ADD_POLYNOMIAL_TERMS: "Add polynomial terms",
                                    GROUP_COEFFICIENTS: "Group the coefficients",
                                    UNARY_MINUS_TO_NEGATIVE_ONE: "Replace negative operator with negative 1",
                                    SIMPLIFY_ARITHMETIC: "Simplify",
                                    DIVISION_BY_NEGATIVE_ONE: "Divide by -1",
                                    DIVISION_BY_ONE: "Divide by 1",
                                    MULTIPLY_BY_ZERO: "Multiply by 0",
                                    REARRANGE_COEFF: "Rearrange the coefficient",
                                    REDUCE_EXPONENT_BY_ZERO: "Reduce the exponent by 0",
                                    REDUCE_ZERO_NUMERATOR: "Reduce 0 numerator",
                                    REMOVE_ADDING_ZERO: "Remove the 0",
                                    REMOVE_EXPONENT_BY_ONE: "Remove exponent by 1",
                                    REMOVE_EXPONENT_BASE_ONE: "Any exponent with base 1 equals 1",
                                    REMOVE_MULTIPLYING_BY_NEGATIVE_ONE: "Multiply by -1",
                                    REMOVE_MULTIPLYING_BY_ONE: "Multiply by 1",
                                    RESOLVE_DOUBLE_MINUS: "Resolve the double negatives",
                                    COLLECT_AND_COMBINE_LIKE_TERMS: "Find and combine like terms",
                                    COLLECT_LIKE_TERMS: "Find like terms",
                                    STATEMENT_IS_TRUE: "The statement is true",
                                    STATEMENT_IS_FALSE: "The statement is false",
                                    DISTRIBUTE: "Distribute",
                                    DISTRIBUTE_NEGATIVE_ONE: "Distribute -1",
                                    SIMPLIFY_TERMS: "Simplify the terms",
                                    EXPAND_EXPONENT: "Expand the exponent",
                                    SIMPLIFY_DIVISION: "Simplify the division",
                                    MULTIPLY_BY_INVERSE: "Multiply by the inverse",
                                    FACTOR_SYMBOL: "Rewrite in factored form",
                                    FACTOR_DIFFERENCE_OF_SQUARES: "Factor the difference of the squares",
                                    FACTOR_PERFECT_SQUARE: "Factor the perfect square",
                                    FACTOR_SUM_PRODUCT_RULE: "Use the sum product pattern",
                                    BREAK_UP_TERM: "Separate the terms",
                                    BREAK_UP_FRACTION: "Separate the fractions",
                                    CANCEL_MINUSES: "Cancel the minuses",
                                    CANCEL_TERMS: "Cancel the terms",
                                    SIMPLIFY_FRACTION: "Simplify the fraction",
                                    SIMPLIFY_SIGNS: "Simplify the signs",
                                    FIND_GCD: "Find the greatest common divisor",
                                    CANCEL_GCD: "Cancel the greatest common divisor",
                                    CONVERT_MIXED_NUMBER_TO_IMPROPER_FRACTION: "Convert mixed number to an improper fraction",
                                    IMPROPER_FRACTION_NUMERATOR: "Convert mixed number to an improper fraction",
                                    COLLECT_CONSTANT_EXPONENTS: "Find and combine constant exponents",
                                    MULTIPLY_FRACTIONS: "Multiply the fractions",
                                    ADD_EXPONENT_OF_ONE: "Add the exponents",
                                    COLLECT_POLYNOMIAL_EXPONENTS: "Collect polynomial exponents",
                                    MULTIPLY_COEFFICIENTS: "Multiply the coefficients",
                                    MULTIPLY_POLYNOMIAL_TERMS: "Multiply the polynomial terms",
                                    CANCEL_EXPONENT: "Cancel the exponent",
                                    CANCEL_EXPONENT_AND_ROOT: "Cancel the exponent and root",
                                    CANCEL_ROOT: "Cancel the root",
                                    COMBINE_UNDER_ROOT: "Combine under the root",
                                    CONVERT_MULTIPLICATION_TO_EXPONENT: "Convert the multiplication to an exponent",
                                    DISTRIBUTE_NTH_ROOT: "Distribute the Nth root",
                                    EVALUATE_DISTRIBUTED_NTH_ROOT: "Evaluate the distributed Nth root",
                                    FACTOR_INTO_PRIMES: "Factor into primes",
                                    GROUP_TERMS_BY_ROOT: "Group items by root",
                                    NTH_ROOT_VALUE: "Evaluate Nth root",
                                    ADD_NTH_ROOTS: "Add Nth roots",
                                    MULTIPLY_NTH_ROOTS: "Multiply Nth roots",
                                    ADD_TO_BOTH_SIDES: "Add to both sides",
                                    DIVIDE_FROM_BOTH_SIDES: "Divide from both sides",
                                    MULTIPLY_BOTH_SIDES_BY_INVERSE_FRACTION: "Multiply both sides by the inverse fraction",
                                    MULTIPLY_BOTH_SIDES_BY_NEGATIVE_ONE: "Multiply both sides by -1",
                                    MULTIPLY_TO_BOTH_SIDES: "Multiply on both sides",
                                    SIMPLIFY_LEFT_SIDE: "Simplify the left side",
                                    SIMPLIFY_RIGHT_SIDE: "Simplify the right side",
                                    SUBTRACT_FROM_BOTH_SIDES: "Subtract from both sides",
                                    SWAP_SIDES: "Swap sides",
                                    FIND_ROOTS: "Find roots"
                                }[e]) && void 0 !== t ? t : e
                            }(e.changeType),
                            question_id: t,
                            step_number: n + 1
                        }
                    }))
                }
        },
        65376: function(e, t, n) {
            n.d(t, {
                t: function() {
                    return r
                }
            });
            var o = n(27157),
                r = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (!(0, o.S_)()) return null;
                    window.location = t ? e + "?addAnswer=true" : e
                }
        },
        94293: function(e, t, n) {
            n.d(t, {
                IV: function() {
                    return a
                },
                U2: function() {
                    return i
                },
                t8: function() {
                    return c
                }
            });
            var o = n(91047),
                r = n(22372),
                i = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return (0, r.Z)().then((function() {
                        return o.get.apply(o, t)
                    })).catch((function(e) {
                        console.log("Something went wrong!", e)
                    }))
                },
                c = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return (0, r.Z)().then((function() {
                        return o.set.apply(o, t)
                    })).catch((function(e) {
                        console.log("Something went wrong!", e)
                    }))
                },
                a = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return (0, r.Z)().then((function() {
                        return o.del.apply(o, t)
                    })).catch((function(e) {
                        console.log("Something went wrong!", e)
                    }))
                }
        },
        5794: function(e, t, n) {
            n.d(t, {
                N$: function() {
                    return u
                },
                eG: function() {
                    return a
                },
                k4: function() {
                    return s
                }
            });
            var o = n(45987),
                r = n(73935),
                i = n(27157),
                c = n(40684),
                a = function(e) {
                    var t, n, r, i, c, a, u, s, l, f, d = e.componentData,
                        p = (0, o.Z)(e, ["componentData"]),
                        v = d.isBot,
                        g = d.auth,
                        y = d.slots,
                        O = d.ads,
                        m = (0, o.Z)(d, ["isBot", "auth", "slots", "ads"]);
                    "question" === (null == e ? void 0 : e.route) && (p.content = {
                        id: null == e || null === (t = e.componentData) || void 0 === t || null === (n = t.questionProps) || void 0 === n || null === (r = n.question) || void 0 === r ? void 0 : r.id,
                        title: null == e || null === (i = e.componentData) || void 0 === i || null === (c = i.questionProps) || void 0 === c || null === (a = c.question) || void 0 === a ? void 0 : a.title,
                        answers: null !== (u = null == e || null === (s = e.componentData) || void 0 === s || null === (l = s.questionProps) || void 0 === l || null === (f = l.question) || void 0 === f ? void 0 : f.answers) && void 0 !== u ? u : []
                    });
                    return [{
                        pageData: p,
                        isBot: v,
                        auth: g,
                        slots: y,
                        ads: O
                    }, m]
                },
                u = function(e) {
                    (0, i.S_)() && (0, c.TA)((function() {
                        r.hydrate(e(window.appConfig), document.getElementById("root"))
                    }))
                },
                s = function(e, t) {
                    (0, i.S_)() && (0, c.TA)((function() {
                        r.hydrate(e(window.appConfig), document.getElementById(t))
                    }))
                }
        },
        70399: function(e, t, n) {
            n.d(t, {
                FM: function() {
                    return r
                },
                qP: function() {
                    return o
                },
                w: function() {
                    return c
                }
            });
            var o = function(e) {
                    -1 !== e.eventCategory.indexOf("Engagement") && c([e.eventCategory, e.eventAction, e.eventLabel]), i(e, {
                        hitType: "event",
                        eventCategory: "Event",
                        eventAction: "",
                        eventLabel: "",
                        eventValue: null,
                        nonInteraction: 0
                    })
                },
                r = function(e) {
                    fetch("/api/sendEvent", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(e)
                    }).then((function(e) {
                        return e.json()
                    })).then((function(e) {
                        return e
                    }))
                },
                i = function(e, t) {
                    var n = Object.assign(t, e);
                    a(e.eventAction, e), window.ga("send", n)
                },
                c = function(e) {
                    null != window.hj && (window.hj("tagRecording", e), e.forEach((function(e) {
                        window.hj("trigger", e)
                    })))
                },
                a = function(e, t) {
                    if (e)
                        if (window.AnalyticsWebInterface) window.AnalyticsWebInterface.logEvent(e, JSON.stringify(t));
                        else if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.firebase) {
                        var n = {
                            command: "logEvent",
                            name: e,
                            parameters: t
                        };
                        window.webkit.messageHandlers.firebase.postMessage(n)
                    }
                }
        },
        76097: function(e, t, n) {
            var o = n(84751);
            t.Z = function() {
                return (0, o.v9)((function(e) {
                    return e.auth.loggedIn
                }))
            }
        }
    }
]);