"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [5177], {
        75690: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return d
                }
            });
            var r = n(29439),
                a = n(67294),
                o = n(84751),
                l = n(27157),
                i = n(52301),
                c = n(52674),
                s = n(59802),
                u = function(e) {
                    var t = e.onClick,
                        n = e.style,
                        r = void 0 === n ? "bottom-12" : n,
                        o = e.ariaLabel,
                        l = e.ariaLabelledBy,
                        i = e.enableToolTip,
                        c = e.fabTooltip,
                        s = e.fabButtonText,
                        u = void 0 === s ? null : s;
                    return a.createElement("div", {
                        className: "fixed ".concat(r, " z-40 right-6")
                    }, i ? a.createElement("span", {
                        className: "bg-tertiary text-white py-1 px-2 mr-3 rounded"
                    }, c) : null, a.createElement("button", {
                        onClick: t,
                        "aria-label": o,
                        "aria-labelledby": l,
                        className: "p-0 w-12 h-12 bg-tertiary rounded-full hover:bg-tertiaryDark active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
                    }, u || a.createElement("svg", {
                        viewBox: "0 0 20 20",
                        enableBackground: "new 0 0 20 20",
                        className: "w-6 h-6 inline-block"
                    }, a.createElement("path", {
                        fill: "#FFFFFF",
                        d: "M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601 C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399 C15.952,9,16,9.447,16,10z"
                    }))))
                },
                d = function(e) {
                    var t = (0, o.v9)((function(e) {
                            return e.pageData.isMobile
                        })),
                        n = (0, o.I0)(),
                        d = (0, a.useState)(!1),
                        m = (0, r.Z)(d, 2),
                        f = m[0],
                        h = m[1],
                        p = (0, a.useState)("bottom-4"),
                        v = (0, r.Z)(p, 2),
                        g = v[0],
                        b = v[1],
                        w = (0, s.Z)("show_fab", !0),
                        E = (0, s.Z)("fab_button_text", null),
                        x = (0, s.Z)("fab_tooltip", "Ask your question");
                    (0, a.useEffect)((function() {
                        t && w && (null == E && h(!0), (0, l.S_)() && window.addEventListener("scroll", _), (0, c.uU)() && b("bottom-1/10"))
                    }), []);
                    var _ = function e(n) {
                            t && w && (n.target.scrollingElement.scrollTop > 20 && (h(!1), window.removeEventListener("scroll", e)))
                        },
                        y = null != E ? a.createElement("p", {
                            className: "headline2"
                        }, E) : null;
                    return t && w ? a.createElement(u, {
                        style: g,
                        onClick: function() {
                            n(i.N.openModal("ask"))
                        },
                        ariaLabel: x,
                        ariaLabelledBy: x,
                        enableToolTip: f,
                        fabButtonText: y,
                        fabTooltip: x
                    }) : null
                }
        },
        24483: function(e, t, n) {
            n.d(t, {
                NF: function() {
                    return m
                },
                _d: function() {
                    return s
                },
                am: function() {
                    return h
                },
                c7: function() {
                    return u
                },
                vN: function() {
                    return f
                }
            });
            var r = n(29439),
                a = n(67294),
                o = n(31821),
                l = n(27157),
                i = n(60371),
                c = n(29539),
                s = function(e) {
                    var t = e.cardBody,
                        n = e.cardExtraOne,
                        r = void 0 === n ? function() {
                            return null
                        } : n,
                        o = e.position,
                        l = e.id,
                        i = e.entireCardLink,
                        c = e.cardExtraTwo,
                        s = void 0 === c ? function() {
                            return null
                        } : c,
                        u = e.extraClass,
                        d = void 0 === u ? "" : u;
                    return a.createElement("div", {
                        className: "border border-solid cursor-pointer border-primaryLight bg-white rounded-md h-44 max-w-44 w-full overflow-hidden p-3 mr-4 flex-shrink-0 flex flex-col ".concat(d),
                        id: "".concat(l, "-").concat(o),
                        onClick: i
                    }, t(), r(), s())
                },
                u = function(e) {
                    var t = e.children,
                        n = e.href,
                        r = e.fontStyle,
                        o = void 0 === r ? "headline2" : r,
                        l = e.nofollow,
                        c = e.isGuideTitle,
                        s = void 0 !== c && c;
                    return a.createElement("h2", null, l && s && a.createElement(i.Z, {
                        className: "".concat(o, " text-primaryText mb-1"),
                        href: n,
                        rel: "nofollow"
                    }, t), !l && s && a.createElement(i.Z, {
                        className: "".concat(o, " text-primaryText mb-1"),
                        href: n
                    }, t), !s && a.createElement("div", {
                        className: "".concat(o, " text-primaryText mb-1"),
                        onClick: function() {
                            window.location = n
                        }
                    }, t))
                },
                d = function(e) {
                    var t = e.children,
                        n = e.handleClick,
                        r = e.id,
                        o = e.btnText,
                        l = void 0 === o ? "Create" : o;
                    return a.createElement("div", {
                        className: "".concat(l ? "justify-between" : "justify-center cursor-pointer", " text-center headline2 border border-solid cursor-default border-primaryLight bg-white rounded-md h-44 max-w-44 w-full overflow-hidden p-3 mr-4 flex-shrink-0 flex flex-col"),
                        id: r,
                        onClick: n
                    }, t, l && a.createElement(c.Yo, {
                        onClick: n,
                        className: "justify-center cursor-pointer inline-block hover:bg-tertiaryLight"
                    }, l))
                },
                m = function(e) {
                    var t = e.children,
                        n = e.inlineHtml;
                    return a.createElement("div", {
                        className: "caption1 text-primaryText noMargin overflow-hidden line-clamp-6",
                        dangerouslySetInnerHTML: n ? {
                            __html: t
                        } : null
                    }, n ? null : t)
                },
                f = function(e) {
                    var t = e.children,
                        n = e.color,
                        r = void 0 === n ? "text-primaryColor" : n;
                    return a.createElement("div", {
                        className: "".concat(r, " caption1 mt-auto bg-white pt-0.5")
                    }, t)
                },
                h = function(e) {
                    var t = e.children,
                        n = e.hasArrows,
                        i = void 0 !== n && n,
                        c = e.id,
                        s = e.ctaCard,
                        u = void 0 === s ? null : s,
                        m = e.scrollLength,
                        f = void 0 === m ? "3" : m,
                        h = a.Children.count(t) + (u ? u.length : 0),
                        p = a.Children.count(t),
                        v = (0, l.S_)(),
                        g = (0, o.Z)(),
                        b = a.useRef(),
                        w = a.useState(null),
                        E = (0, r.Z)(w, 2),
                        x = E[0],
                        _ = E[1],
                        y = a.useState(null),
                        N = (0, r.Z)(y, 2),
                        k = N[0],
                        Z = N[1],
                        C = null;
                    u && (C = u.map((function(e, t) {
                        return a.createElement(d, {
                            handleClick: e.handleClick,
                            btnText: e.btnText,
                            key: e.btnText,
                            id: "".concat(e.id, "-").concat(t + p)
                        }, a.createElement("div", {
                            className: "mt-4"
                        }, a.createElement("div", {
                            className: "mb-4 mdEmoji"
                        }, e.emoji), a.createElement("div", {
                            className: "".concat(null != e && e.ctaTextStyles ? e.ctaTextStyles : "mt-4 font-fira")
                        }, e.ctaText)))
                    }))), a.useEffect((function() {
                        v && !g && i && h >= f && (_(0), Z(f))
                    }), []);
                    var S = function(e, t) {
                        v && null !== e && document.querySelector("#".concat(c, "-").concat(e)).scrollIntoView({
                            behavior: "smooth",
                            inline: "center",
                            block: "nearest"
                        }), "left" == t ? (Z(k - 1), _(x - 1)) : (Z(k + 1), _(x + 1))
                    };
                    return i && !g ? a.createElement("div", {
                        className: "relative"
                    }, x > 0 && a.createElement("div", {
                        onClick: function() {
                            return S(x, "left")
                        },
                        className: "cursor-pointer rounded-full h-8 w-8 items-center justify-center bg-white border border-solid border-primaryLight flex absolute z-1 -left-3",
                        style: {
                            bottom: "calc(50% - 16px)"
                        }
                    }, a.createElement("svg", {
                        viewBox: "0 0 16 24",
                        className: "w-3 h-3 text-primaryLight",
                        fill: "none"
                    }, a.createElement("use", {
                        xlinkHref: "#arrow-icon"
                    }))), a.createElement("div", {
                        className: "overflow-x-scroll overflow-y-hidden flex flex-row no-scrollbar slider slides relative",
                        ref: b
                    }, t, C), k && k <= h - 1 && a.createElement("div", {
                        onClick: function() {
                            return S(k, "right")
                        },
                        className: "cursor-pointer rounded-full h-8 w-8 items-center justify-center bg-white border border-solid border-primaryLight flex absolute z-1 -right-3 transform rotate-180",
                        style: {
                            bottom: "calc(50% - 16px)"
                        }
                    }, a.createElement("svg", {
                        viewBox: "0 0 16 24",
                        className: "w-3 h-3 text-primaryLight rotate-180",
                        fill: "none"
                    }, a.createElement("use", {
                        xlinkHref: "#arrow-icon"
                    })))) : a.createElement("div", {
                        className: "overflow-x-scroll overflow-y-hidden flex flex-row no-scrollbar slider slides",
                        ref: b
                    }, t, C)
                }
        },
        5173: function(e, t, n) {
            var r = n(67294),
                a = n(29539),
                o = n(84751),
                l = n(52301),
                i = n(70399),
                c = n(76097),
                s = n(59802);
            t.Z = function(e) {
                var t = e.homepage,
                    n = void 0 !== t && t,
                    u = (0, s.Z)("disable_center_feed_sub", !0),
                    d = (0, o.I0)(),
                    m = (0, c.Z)(),
                    f = r.createElement("div", {
                        className: "w-full justify-center self-center rounded-md p-4 bg-verifiedChipLight mx-auto text-center max-w-lg md:min-w-126"
                    }, r.createElement("img", {
                        className: "mb-4 mx-auto",
                        alt: "answers plus logo",
                        src: "https://st.answers.com/logos/ANSWERSPLUS_SVG.svg",
                        width: "125px",
                        height: "135px"
                    }), r.createElement("h2", {
                        className: "headline1 mb-2"
                    }, "Upgrade today and get a week for free"), r.createElement("p", null, "Get unlimited, ad-free homework help with access to exclusive features and priority answers."), r.createElement(a.Yo, {
                        onClick: function() {
                            m ? d(l.N.openModal("multiSub", {
                                source: "Center Feed Subscribe Button"
                            })) : ((0, i.qP)({
                                eventCategory: "Sign up/Login Engagement",
                                eventAction: "Login Modal Shown",
                                eventLabel: '{"Trigger": "Center Feed Subscribe Button"}'
                            }), window.sessionStorage.setItem("source", "Center Feed Subscribe Button"), d(l.N.openModal("login")))
                        },
                        className: "px-2 w-full"
                    }, "Start free trial"));
                return u ? null : n ? f : r.createElement("div", {
                    className: "bg-verifiedChipLight p-4 shadow-cardGlow text-center rounded-none md:rounded-md"
                }, f)
            }
        },
        56484: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var r = function(e, t) {
                    fetch(e, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(t)
                    }).then((function(e) {
                        return e.json()
                    })).then((function(e) {
                        return e.errors ? e.errors : e
                    })).catch((function(e) {
                        return e
                    }))
                },
                a = n(8322),
                o = function(e, t) {
                    var n = (0, a.ej)("mx_uuid", !1);
                    n && r("/api/decrementSessionEvent", {
                        mx_uuid: n,
                        event: e,
                        amount: t
                    })
                }
        },
        33421: function(e, t, n) {
            var r = n(87462),
                a = n(29439),
                o = n(67294),
                l = n(27157),
                i = n(84751),
                c = n(52301),
                s = n(59802),
                u = n(29539),
                d = n(56484),
                m = n(40684),
                f = (0, m.ZP)({
                    resolved: {},
                    chunkName: function() {
                        return "VideoPlayer"
                    },
                    isReady: function(e) {
                        var t = this.resolve(e);
                        return !0 === this.resolved[t] && !!n.m[t]
                    },
                    importAsync: function() {
                        return Promise.all([n.e(7843), n.e(4736), n.e(6964)]).then(n.bind(n, 13011))
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
                        return 13011
                    }
                }, {
                    ssr: !1
                }),
                h = function(e) {
                    var t = (0, i.I0)(),
                        n = e.active,
                        m = void 0 === n ? (0, s.Z)("web_rewarded_ads_active", !1) : n,
                        h = e.instaLoad,
                        p = void 0 !== h && h,
                        v = e.decrementAmount,
                        g = void 0 === v ? (0, s.Z)("web_rewarded_ads_decrement_amount", 5) : v,
                        b = e.decrementType,
                        w = void 0 === b ? (0, s.Z)("web_rewarded_ads_decrement_type", "question") : b,
                        E = e.closeButtonText,
                        x = void 0 === E ? (0, s.Z)("web_rewarded_ads_close_button_txt", "Skip to Answer") : E,
                        _ = e.minAdWatchMs,
                        y = void 0 === _ ? (0, s.Z)("web_rewarded_ads_skip_ms", 1e4) : _,
                        N = e.imaOptions,
                        k = void 0 === N ? {
                            adTagUrl: (0, s.Z)("web_rewarded_ads_ad_tag_url", "https://pubads.g.doubleclick.net/gampad/ads?iu=/51859126/answers/answers_video&description_url=https%3A%2F%2Fwww.answers.com%2Fpages%2Fanswers-plus%2F&tfcd=0&npa=0&sz=400x300%7C640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=")
                        } : N,
                        Z = e.videoUrl,
                        C = void 0 === Z ? (0, s.Z)("web_rewarded_ads_video_url", "https://answ-img-store.s3.amazonaws.com/Videos/AnswersAD_30.mp4") : Z,
                        S = (0, o.useState)(!1),
                        L = (0, a.Z)(S, 2),
                        T = L[0],
                        j = L[1],
                        A = (0, o.useState)(m),
                        I = (0, a.Z)(A, 2),
                        F = I[0],
                        B = I[1],
                        q = (0, o.useState)(p),
                        P = (0, a.Z)(q, 2),
                        M = P[0],
                        O = P[1],
                        H = (0, o.useState)(!1),
                        V = (0, a.Z)(H, 2),
                        D = V[0],
                        U = V[1],
                        z = o.createElement("div", {
                            className: "h-18"
                        });
                    if (T && (z = o.createElement("div", {
                            className: "text-center py-4"
                        }, o.createElement(u.Yo, {
                            className: "ml-auto mr-auto",
                            onClick: function() {
                                B(!1), document.body.style.overflow = "", (0, d.Z)(w, g), t(c.N.toggleGates())
                            }
                        }, x))), !F) return null;
                    var G = D ? "h-screen w-full fixed top-0 left-0 z-10 backdrop-filter backdrop-blur-sm pt-20" : "";
                    return (0, l.S_)() && (window.loadRewardedVideo = function() {
                        O(!0), document.body.style.overflow = "hidden"
                    }), o.createElement("div", {
                        id: "video-column",
                        className: G
                    }, D && z, o.createElement(f, (0, r.Z)({}, e, {
                        loadPlayer: M,
                        videoUrl: C,
                        playerLoaded: function(e) {
                            U(!0), e.ima(k), setTimeout((function() {
                                j(!0)
                            }), y)
                        }
                    })))
                };
            t.Z = h
        },
        18474: function(e, t, n) {
            var r = n(29439),
                a = n(67294),
                o = n(64342),
                l = n(87462),
                i = n(84751),
                c = n(52301),
                s = n(81080),
                u = n(75690),
                d = n(66356),
                m = n(4670),
                f = n(60371),
                h = n(27465),
                p = n(76097),
                v = n(31821),
                g = n(59802),
                b = n(33421),
                w = n(29539),
                E = n(5173),
                x = n(70399),
                _ = function(e) {
                    var t = e.subjects;
                    return a.createElement(a.Fragment, null, a.createElement("h2", {
                        className: "body2 text-center mb-4 mt-4"
                    }, "Browse Subjects"), a.createElement("div", {
                        className: "flex flex-wrap justify-center self-center"
                    }, t.map((function(e, t) {
                        return a.createElement("a", {
                            className: "border border-solid border-primaryLight rounded-md items-center text-center cursor-pointer w-100px h-100px m-1",
                            key: t,
                            onClick: function() {
                                return function(e) {
                                    (0, x.qP)({
                                        hitType: "event",
                                        eventCategory: "Other Engagement",
                                        eventAction: "Navigation",
                                        eventLabel: e.title,
                                        eventValue: 0,
                                        nonInteraction: 0
                                    })
                                }(e)
                            },
                            href: "/".concat(e.slug)
                        }, a.createElement("div", {
                            style: {
                                backgroundColor: e.color
                            },
                            className: "emojiCircle mb-1 text-center"
                        }, a.createElement("span", {
                            className: "subjectEmoji text-center inline-block"
                        }, e.emoji)), a.createElement("div", {
                            className: "caption2"
                        }, e.title))
                    }))))
                },
                y = n(24483),
                N = function(e) {
                    var t = e.catogories;
                    return a.createElement(a.Fragment, null, a.createElement("h2", {
                        className: "body2 text-center mb-4"
                    }, "Browse Categories"), a.createElement("div", {
                        className: "self-center block mb-6"
                    }, a.createElement(y.am, {
                        id: "category-chips",
                        hasArrows: !0,
                        length: t.length,
                        scrollLength: 7
                    }, t.map((function(e, t) {
                        return a.createElement("a", {
                            className: "flex flex-row min-w-max border border-solid border-primaryLight rounded-md items-center py-2 px-3 text-center cursor-pointer m-1",
                            id: "category-chips-".concat(t),
                            onClick: function() {
                                return function(e) {
                                    (0, x.qP)({
                                        hitType: "event",
                                        eventCategory: "Other Engagement",
                                        eventAction: "Navigation",
                                        eventLabel: e.title,
                                        eventValue: 0,
                                        nonInteraction: 0
                                    })
                                }(e)
                            },
                            key: e.id,
                            href: "/".concat(e.slug)
                        }, a.createElement("div", {
                            className: "caption2"
                        }, e.emoji, " ", e.title))
                    })))))
                },
                k = n(30659),
                Z = function(e) {
                    var t = (0, i.I0)(),
                        n = (0, p.Z)(),
                        r = (0, v.Z)(),
                        o = (0, g.Z)("mobile_sif_image", "https://img.answers.com/answ/image/upload/c_crop,g_east,h_404,w_426,dpr_auto/v1614975208/home_page/general_homepage_desktop.png"),
                        l = (0, g.Z)("desktop_sif_image", "https://img.answers.com/answ/image/upload/dpr_auto,q_auto,f_auto,h_600/v1618583627/home_page/homepage.d.illustration.png"),
                        s = (0, g.Z)("sif_home_page_text", "What is your question?"),
                        u = (0, g.Z)("sif_image_alt", "Home Page"),
                        x = r ? o : l,
                        y = {
                            height: r ? 404 : 600,
                            width: r ? 426 : "auto"
                        },
                        Z = function(e) {
                            return t(c.N.openModal(e)), null
                        },
                        C = function() {
                            r && (Z("search"), (0, k.QA)("single-input page")), "" != document.getElementById("search-input").value && (window.location = "/search?q=" + encodeURIComponent(document.getElementById("search-input").value))
                        };
                    return a.createElement("main", {
                        className: "flex flex-col justify-items-center bg-white h-full grid-rows-3 overflow-x-hidden overflow-y-hidden"
                    }, a.createElement("section", {
                        className: "flex flex-col mt-20 md:mt-40"
                    }, a.createElement(h.Z, {
                        name: "before_sif_input"
                    }), a.createElement("h1", {
                        className: "headline3 self-center"
                    }, s), a.createElement("div", {
                        className: "flex mb-10 mt-4 self-center"
                    }, a.createElement(d.Z, {
                        customSearchInput: "border border-solid border-primaryLight md:w-182",
                        questionSearch: !0,
                        noTop: !0,
                        searchInputPlaceholder: "Type your question...",
                        hideIcon: !0,
                        onClick: r ? C : function() {
                            return (0, k.QA)("single-input page")
                        },
                        searchElementName: "single-input page"
                    }), a.createElement(w.El, {
                        className: "ml-1",
                        onClick: C
                    }, a.createElement(m.Z, {
                        className: "self-center h-5"
                    }))), !n && a.createElement("span", {
                        className: "body2 text-primaryColor self-center cursor-pointer"
                    }, a.createElement(f.Z, {
                        onClick: function() {
                            window.sessionStorage.setItem("source", "SIF Login"), Z("login")
                        }
                    }, "Log in"), a.createElement("span", {
                        className: "cursor-default body1"
                    }, " or "), a.createElement(f.Z, {
                        onClick: function() {
                            window.sessionStorage.setItem("source", "SIF Register"), Z("register")
                        }
                    }, "Sign up"))), a.createElement(h.Z, {
                        name: "after_sif_input"
                    }), a.createElement(_, {
                        subjects: e.subjects
                    }), a.createElement(E.Z, {
                        homepage: !0
                    }), a.createElement("section", {
                        className: "bg-repeat-x bg-center",
                        style: {
                            backgroundImage: "url(".concat(x, ")"),
                            height: y.height,
                            width: y.width
                        },
                        alt: u
                    }), a.createElement("section", {
                        className: "mt-4 max-app-width"
                    }, a.createElement(N, {
                        catogories: e.categories
                    })), a.createElement(b.Z, null))
                },
                C = function(e) {
                    var t = (0, i.I0)(),
                        n = a.createElement(a.Fragment, null, a.createElement(Z, {
                            topics: e.baseTopics,
                            categories: e.homepage_category,
                            subjects: e.homepage_subjects
                        }), a.createElement(u.Z, null));
                    return e.toastProps && t(c.N.addToast({
                        type: e.toastProps.toastType,
                        message: e.toastProps.toastMessage
                    })), a.createElement(s.Z, (0, l.Z)({}, e, {
                        center: n,
                        disableMaxWidth: !0
                    }))
                },
                S = n(5794);
            (0, S.N$)((function(e) {
                var t = (0, S.eG)(e),
                    n = (0, r.Z)(t, 2),
                    l = n[0],
                    i = n[1];
                return a.createElement(o.Z, l, a.createElement(C, i))
            }))
        }
    },
    function(e) {
        e.O(0, [5514, 4736, 359, 5878], (function() {
            return t = 18474, e(e.s = t);
            var t
        }));
        e.O()
    }
]);