"use strict";
(self.__LOADABLE_LOADED_CHUNKS__ = self.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [2656], {
        43548: function(e, t, n) {
            var a = n(4942),
                l = n(67294),
                i = n(52301),
                o = n(84751),
                r = n(77651),
                c = n(44740);

            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, a)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(n), !0).forEach((function(t) {
                        (0, a.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            t.Z = function(e) {
                var t, n, a = null,
                    d = "",
                    m = e.data,
                    u = e.handleEdit,
                    v = e.backAction,
                    g = e.showLightbox,
                    h = void 0 !== g && g,
                    f = e.imageStyles,
                    b = e.prevFiles,
                    p = e.handleRemoval,
                    E = e.fullImage,
                    y = e.questionId,
                    x = e.answerId,
                    N = e.lazyLoad,
                    O = void 0 === N || N,
                    w = (0, o.I0)(),
                    L = s(s({}, f), {}, {
                        height: null !== (t = null == f ? void 0 : f.height) && void 0 !== t ? t : 50,
                        width: null !== (n = null == f ? void 0 : f.width) && void 0 !== n ? n : 50
                    });
                return (0, l.useEffect)((function() {
                    if ("undefined" != typeof File && m instanceof File) return function() {
                        URL.revokeObjectURL(a)
                    }
                }), []), m ? ("undefined" != typeof File && m instanceof File ? a = URL.createObjectURL(m) : (a = E ? null == m ? void 0 : m.full_image_url : null == m ? void 0 : m.image_url, d = null == m ? void 0 : m.alt_tag), l.createElement("img", {
                    src: a,
                    style: L,
                    alt: d,
                    onClick: function() {
                        return function() {
                            if ((0, c.bK)(y, x, m.id), h) {
                                var e = {
                                    source: {
                                        image: m,
                                        backAction: v,
                                        handleEdit: u,
                                        prevFiles: b,
                                        handleRemoval: p
                                    }
                                };
                                null == u && (0, r.Z)("viewed", "lightbox open"), w(i.N.openLightbox("lightbox", e))
                            }
                        }()
                    },
                    loading: O ? "lazy" : "eager",
                    height: L.height,
                    width: L.width
                })) : null
            }
        },
        77651: function(e, t, n) {
            var a = n(70399);
            t.Z = function(e, t, n) {
                switch (e) {
                    case "u-success":
                        (0, a.qP)({
                            eventCategory: "Image Engagement",
                            eventAction: "Image Upload Success"
                        });
                        break;
                    case "u-failure":
                        (0, a.qP)({
                            eventCategory: "Image Engagement",
                            eventAction: "Image Upload Failed",
                            eventLabel: t
                        });
                        break;
                    case "viewed":
                        (0, a.qP)({
                            eventCategory: "Image Engagement",
                            eventAction: "Image Viewed",
                            eventLabel: t
                        });
                        break;
                    case "abandoned":
                        (0, a.qP)({
                            eventCategory: "Image Engagement",
                            eventAction: "Image Upload Abandoned",
                            eventLabel: t
                        })
                }
            }
        },
        30581: function(e, t, n) {
            var a = n(67294);
            t.Z = function(e) {
                var t = e.label,
                    n = void 0 === t ? "" : t,
                    l = e.type,
                    i = void 0 === l ? "" : l,
                    o = e.name,
                    r = void 0 === o ? "" : o,
                    c = e.id,
                    d = void 0 === c ? "" : c,
                    s = e.placeholder,
                    m = void 0 === s ? " " : s,
                    u = e.helperText,
                    v = void 0 === u ? "" : u,
                    g = e.autoComplete,
                    h = void 0 === g ? "" : g,
                    f = e.onChange,
                    b = void 0 === f ? null : f;
                return a.createElement("div", {
                    className: "md-input-main"
                }, a.createElement("div", {
                    className: "md-input-box"
                }, a.createElement("input", {
                    id: d,
                    name: r,
                    type: i,
                    className: "md-input",
                    placeholder: m,
                    autoComplete: h,
                    onChange: b,
                    value: e.value
                }), a.createElement("label", {
                    htmlFor: d,
                    className: "md-label"
                }, n), a.createElement("div", {
                    className: "md-input-underline"
                })), v && a.createElement("span", {
                    className: "caption1 text-errorText flex"
                }, v))
            }
        },
        7170: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n(87462),
                l = n(67294),
                i = n(43548),
                o = n(29439),
                r = n(77651),
                c = n(30581),
                d = n(29539),
                s = n(85618),
                m = function(e) {
                    var t = e.handleEdit,
                        n = e.data,
                        a = e.prevFiles,
                        i = e.handleRemoval,
                        m = (0, l.useState)(""),
                        u = (0, o.Z)(m, 2),
                        v = u[0],
                        g = u[1];
                    return l.createElement("div", {
                        className: "flex flex-col px-2"
                    }, l.createElement("div", {
                        className: "my-2"
                    }, l.createElement(c.Z, {
                        id: "outlined-basic",
                        label: "Name this image",
                        onChange: function(e) {
                            return function(e) {
                                g(e.target.value)
                            }(e)
                        }
                    })), l.createElement("div", {
                        className: "flex justify-between items-center mb-2 cursor-pointer"
                    }, l.createElement(s.Z, {
                        src: "/icons/deleteIcon.svg",
                        width: 20,
                        height: 20,
                        lazyLoad: !1,
                        onClick: function() {
                            var t = 0;
                            Array.from(a).forEach((function(e, a) {
                                e.name == n.name && (t = a)
                            })), i(t, a), e.handleClose(), (0, r.Z)("abandoned", "Lightbox - Editing Image")
                        },
                        className: "self-center"
                    }), l.createElement(d.El, {
                        onClick: function() {
                            t(n, v, a), e.handleClose()
                        },
                        className: "hover:bg-primaryDark"
                    }, "Save")))
                },
                u = function(e) {
                    var t = e.className;
                    return l.createElement(l.Fragment, null, e.isOpen && l.createElement("div", {
                        className: "fixed z-50 inset-0 overflow-y-auto"
                    }, l.createElement("div", {
                        className: "items-end justify-center min-h-screen text-center block sm:p-0"
                    }, l.createElement("div", {
                        className: "fixed inset-0 transition-opacity",
                        "aria-hidden": "true"
                    }, l.createElement("div", {
                        className: "absolute inset-0 bg-black opacity-75"
                    })), l.createElement("span", {
                        className: "inline-block align-middle h-screen",
                        "aria-hidden": "true"
                    }, "​"), l.createElement("div", {
                        className: "inline-block align-middle bg-white rounded-md overflow-visible shadow-md transform transition-all h-auto ".concat(t),
                        role: "dialog",
                        "aria-modal": "true"
                    }, e.children))))
                },
                v = function(e) {
                    var t = null == e ? void 0 : e.source,
                        n = t.image,
                        a = t.handleEdit,
                        o = void 0 !== a && a,
                        r = t.prevFiles,
                        c = t.handleRemoval,
                        d = void 0 !== c && c,
                        v = 0 != o && 0 != d,
                        g = function() {
                            e.closeLightbox()
                        };
                    return l.createElement(u, {
                        className: v ? "max-w-md max-h-96" : "",
                        isOpen: e.isOpen
                    }, l.createElement(s.Z, {
                        src: "/icons/cancelIcon.svg",
                        width: 20,
                        height: 20,
                        lazyLoad: !1,
                        className: "z-10 absolute -right-2 -top-2 cursor-pointer",
                        onClick: g
                    }), l.createElement(i.Z, {
                        data: n,
                        imageStyles: {
                            height: "100%",
                            width: "100%"
                        },
                        fullImage: !0
                    }), v ? l.createElement(m, {
                        handleEdit: o,
                        data: n,
                        prevFiles: r,
                        handleClose: g,
                        handleRemoval: d
                    }) : null)
                },
                g = n(84751),
                h = n(52301),
                f = function(e) {
                    var t = (0, g.I0)(),
                        n = (0, g.v9)((function(e) {
                            return {
                                modalType: e.lightbox.type,
                                data: e.lightbox.data
                            }
                        })),
                        i = n.modalType,
                        o = n.data;
                    return "lightbox" == i ? l.createElement(v, (0, a.Z)({}, e.lightboxProps, e, {
                        closeLightbox: function(e) {
                            t(h.N.closeLightbox())
                        },
                        openLightbox: function(e, n) {
                            t(h.N.openLightbox(e, n))
                        },
                        source: null == o ? void 0 : o.source
                    })) : null
                }
        }
    }
]);