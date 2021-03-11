!(function (n, t) {
    "object" == typeof exports && "undefined" != typeof module
        ? t(exports, require("jquery"), require("popper.js"))
        : "function" == typeof define && define.amd
        ? define(["exports", "jquery", "popper.js"], t)
        : t(((n = n || self).bootstrap = {}), n.jQuery, n.Popper);
})(this, function (n, t, e) {
    "use strict";
    function o(n, t) {
        for (var e = 0; e < t.length; e++) {
            var o = t[e];
            (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(n, o.key, o);
        }
    }
    function i(n, t, e) {
        return t && o(n.prototype, t), e && o(n, e), n;
    }
    function c(n, t, e) {
        return t in n ? Object.defineProperty(n, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : (n[t] = e), n;
    }
    function u(n) {
        for (var t = 1; t < arguments.length; t++) {
            var e = null != arguments[t] ? arguments[t] : {},
                o = Object.keys(e);
            "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(e).filter(function (n) {}))),
                o.forEach(function (t) {
                    c(n, t, e[t]);
                });
        }
        return n;
    }
    (t = t && t.hasOwnProperty("default") ? t.default : t), (e = e && e.hasOwnProperty("default") ? e.default : e);
    var r = "transitionend";
    function a(n) {}
    var f = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function (n) {},
        getSelectorFromElement: function (n) {},
        getTransitionDurationFromElement: function (n) {},
        reflow: function (n) {},
        triggerTransitionEnd: function (n) {},
        supportsTransitionEnd: function () {},
        isElement: function (n) {},
        typeCheckConfig: function (n, t, e) {},
        findShadowRoot: function (n) {},
    };
    (t.fn.emulateTransitionEnd = a), (t.event.special[f.TRANSITION_END] = { bindType: r, delegateType: r, handle: function (n) {} });
    t.fn.alert;
    var l = { CLOSE: "close.bs.alert", CLOSED: "closed.bs.alert", CLICK_DATA_API: "click.bs.alert.data-api" },
        s = (function () {
            function n(n) {
                this._element = n;
            }
            var t = n.prototype;
            return (
                (t.close = function (n) {}),
                (t.dispose = function () {}),
                (t._getRootElement = function (n) {}),
                (t._triggerCloseEvent = function (n) {}),
                (t._removeElement = function (n) {}),
                (t._destroyElement = function (n) {}),
                (n._jQueryInterface = function (n) {}),
                (n._handleDismiss = function (n) {
                    return function (n) {};
                }),
                i(n, null, [{ key: "VERSION", get: function () {} }]),
                n
            );
        })();
    t(document).on(l.CLICK_DATA_API, '[data-dismiss="alert"]', s._handleDismiss(new s())), (t.fn.alert = s._jQueryInterface), (t.fn.alert.Constructor = s), (t.fn.alert.noConflict = function () {});
    t.fn.button;
    var d = { CLICK_DATA_API: "click.bs.button.data-api", FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api" },
        p = (function () {
            function n(n) {}
            var t = n.prototype;
            return (t.toggle = function () {}), (t.dispose = function () {}), (n._jQueryInterface = function (n) {}), i(n, null, [{ key: "VERSION", get: function () {} }]), n;
        })();
    t(document).on(d.CLICK_DATA_API, '[data-toggle^="button"]', function (n) {}), (t.fn.button = p._jQueryInterface), (t.fn.button.Constructor = p), (t.fn.button.noConflict = function () {});
    t.fn.carousel;
    var _ = {
            SLIDE: "slide.bs.carousel",
            SLID: "slid.bs.carousel",
            KEYDOWN: "keydown.bs.carousel",
            MOUSEENTER: "mouseenter.bs.carousel",
            MOUSELEAVE: "mouseleave.bs.carousel",
            TOUCHSTART: "touchstart.bs.carousel",
            TOUCHMOVE: "touchmove.bs.carousel",
            TOUCHEND: "touchend.bs.carousel",
            POINTERDOWN: "pointerdown.bs.carousel",
            POINTERUP: "pointerup.bs.carousel",
            DRAG_START: "dragstart.bs.carousel",
            LOAD_DATA_API: "load.bs.carousel.data-api",
            CLICK_DATA_API: "click.bs.carousel.data-api",
        },
        g = "[data-slide], [data-slide-to]",
        y = '[data-ride="carousel"]',
        b = (function () {
            function n(n, t) {}
            var t = n.prototype;
            return (
                (t.next = function () {}),
                (t.nextWhenVisible = function () {}),
                (t.prev = function () {}),
                (t.pause = function (n) {}),
                (t.cycle = function (n) {}),
                (t.to = function (n) {}),
                (t.dispose = function () {}),
                (t._getConfig = function (n) {}),
                (t._handleSwipe = function () {}),
                (t._addEventListeners = function () {}),
                (t._addTouchEventListeners = function () {}),
                (t._keydown = function (n) {}),
                (t._getItemIndex = function (n) {}),
                (t._getItemByDirection = function (n, t) {}),
                (t._triggerSlideEvent = function (n, t) {}),
                (t._setActiveIndicatorElement = function (n) {}),
                (t._slide = function (n, t) {}),
                (n._jQueryInterface = function (n) {}),
                (n._dataApiClickHandler = function (n) {}),
                i(n, null, [
                    { key: "VERSION", get: function () {} },
                    { key: "Default", get: function () {} },
                ]),
                n
            );
        })();
    t(document).on(_.CLICK_DATA_API, g, b._dataApiClickHandler),
        t(window).on(_.LOAD_DATA_API, function () {
            for (var n = [].slice.call(document.querySelectorAll(y)), e = 0, o = n.length; e < o; e++) {
                var i = t(n[e]);
                b._jQueryInterface.call(i, i.data());
            }
        }),
        (t.fn.carousel = b._jQueryInterface),
        (t.fn.carousel.Constructor = b),
        (t.fn.carousel.noConflict = function () {});
    t.fn.collapse;
    var A = { SHOW: "show.bs.collapse", SHOWN: "shown.bs.collapse", HIDE: "hide.bs.collapse", HIDDEN: "hidden.bs.collapse", CLICK_DATA_API: "click.bs.collapse.data-api" },
        I = (function () {
            function n(n, t) {}
            var t = n.prototype;
            return (
                (t.toggle = function () {}),
                (t.show = function () {}),
                (t.hide = function () {}),
                (t.setTransitioning = function (n) {}),
                (t.dispose = function () {}),
                (t._getConfig = function (n) {}),
                (t._getDimension = function () {}),
                (t._getParent = function () {}),
                (t._addAriaAndCollapsedClass = function (n, t) {}),
                (n._getTargetFromElement = function (n) {}),
                (n._jQueryInterface = function (n) {}),
                i(n, null, [
                    { key: "VERSION", get: function () {} },
                    { key: "Default", get: function () {} },
                ]),
                n
            );
        })();
    t(document).on(A.CLICK_DATA_API, '[data-toggle="collapse"]', function (n) {}), (t.fn.collapse = I._jQueryInterface), (t.fn.collapse.Constructor = I), (t.fn.collapse.noConflict = function () {});
    t.fn.dropdown, new RegExp("38|40|27");
    var m = {
            HIDE: "hide.bs.dropdown",
            HIDDEN: "hidden.bs.dropdown",
            SHOW: "show.bs.dropdown",
            SHOWN: "shown.bs.dropdown",
            CLICK: "click.bs.dropdown",
            CLICK_DATA_API: "click.bs.dropdown.data-api",
            KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
            KEYUP_DATA_API: "keyup.bs.dropdown.data-api",
        },
        C = '[data-toggle="dropdown"]',
        E = ".dropdown-menu",
        v = (function () {
            function n(n, t) {}
            var t = n.prototype;
            return (
                (t.toggle = function () {}),
                (t.show = function () {}),
                (t.hide = function () {}),
                (t.dispose = function () {}),
                (t.update = function () {}),
                (t._addEventListeners = function () {}),
                (t._getConfig = function (n) {}),
                (t._getMenuElement = function () {}),
                (t._getPlacement = function () {}),
                (t._detectNavbar = function () {}),
                (t._getOffset = function () {}),
                (t._getPopperConfig = function () {}),
                (n._jQueryInterface = function (n) {}),
                (n._clearMenus = function (n) {}),
                (n._getParentFromElement = function (n) {}),
                (n._dataApiKeydownHandler = function (n) {}),
                i(n, null, [
                    { key: "VERSION", get: function () {} },
                    { key: "Default", get: function () {} },
                    { key: "DefaultType", get: function () {} },
                ]),
                n
            );
        })();
    t(document)
        .on(m.KEYDOWN_DATA_API, C, v._dataApiKeydownHandler)
        .on(m.KEYDOWN_DATA_API, E, v._dataApiKeydownHandler)
        .on(m.CLICK_DATA_API + " " + m.KEYUP_DATA_API, v._clearMenus)
        .on(m.CLICK_DATA_API, C, function (n) {}),
        (t.fn.dropdown = v._jQueryInterface),
        (t.fn.dropdown.Constructor = v),
        (t.fn.dropdown.noConflict = function () {});
    t.fn.modal;
    var h = {
            HIDE: "hide.bs.modal",
            HIDDEN: "hidden.bs.modal",
            SHOW: "show.bs.modal",
            SHOWN: "shown.bs.modal",
            FOCUSIN: "focusin.bs.modal",
            RESIZE: "resize.bs.modal",
            CLICK_DISMISS: "click.dismiss.bs.modal",
            KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
            MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
            MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
            CLICK_DATA_API: "click.bs.modal.data-api",
        },
        D = (function () {
            function n(n, t) {}
            var t = n.prototype;
            return (
                (t.toggle = function (n) {}),
                (t.show = function (n) {}),
                (t.hide = function (n) {}),
                (t.dispose = function () {}),
                (t.handleUpdate = function () {}),
                (t._getConfig = function (n) {}),
                (t._showElement = function (n) {}),
                (t._enforceFocus = function () {}),
                (t._setEscapeEvent = function () {}),
                (t._setResizeEvent = function () {}),
                (t._hideModal = function () {}),
                (t._removeBackdrop = function () {}),
                (t._showBackdrop = function (n) {}),
                (t._adjustDialog = function () {}),
                (t._resetAdjustments = function () {}),
                (t._checkScrollbar = function () {}),
                (t._setScrollbar = function () {}),
                (t._resetScrollbar = function () {}),
                (t._getScrollbarWidth = function () {}),
                (n._jQueryInterface = function (n, t) {}),
                i(n, null, [
                    { key: "VERSION", get: function () {} },
                    { key: "Default", get: function () {} },
                ]),
                n
            );
        })();
    t(document).on(h.CLICK_DATA_API, '[data-toggle="modal"]', function (n) {}), (t.fn.modal = D._jQueryInterface), (t.fn.modal.Constructor = D), (t.fn.modal.noConflict = function () {});
    var T = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
    };
    t.fn.tooltip, new RegExp("(^|\\s)bs-tooltip\\S+", "g");
    var w = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
        },
        S = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: T,
        },
        O = (function () {
            function n(n, t) {}
            var t = n.prototype;
            return (
                (t.enable = function () {}),
                (t.disable = function () {}),
                (t.toggleEnabled = function () {}),
                (t.toggle = function (n) {}),
                (t.dispose = function () {}),
                (t.show = function () {}),
                (t.hide = function (n) {}),
                (t.update = function () {}),
                (t.isWithContent = function () {}),
                (t.addAttachmentClass = function (n) {}),
                (t.getTipElement = function () {}),
                (t.setContent = function () {}),
                (t.setElementContent = function (n, t) {}),
                (t.getTitle = function () {}),
                (t._getOffset = function () {}),
                (t._getContainer = function () {}),
                (t._getAttachment = function (n) {}),
                (t._setListeners = function () {}),
                (t._fixTitle = function () {}),
                (t._enter = function (n, t) {}),
                (t._leave = function (n, t) {}),
                (t._isWithActiveTrigger = function () {}),
                (t._getConfig = function (n) {}),
                (t._getDelegateConfig = function () {}),
                (t._cleanTipClass = function () {}),
                (t._handlePopperPlacementChange = function (n) {}),
                (t._fixTransition = function () {}),
                (n._jQueryInterface = function (n) {}),
                i(n, null, [
                    { key: "VERSION", get: function () {} },
                    {
                        key: "Default",
                        get: function () {
                            return S;
                        },
                    },
                    { key: "NAME", get: function () {} },
                    { key: "DATA_KEY", get: function () {} },
                    { key: "Event", get: function () {} },
                    { key: "EVENT_KEY", get: function () {} },
                    {
                        key: "DefaultType",
                        get: function () {
                            return w;
                        },
                    },
                ]),
                n
            );
        })();
    (t.fn.tooltip = O._jQueryInterface), (t.fn.tooltip.Constructor = O), (t.fn.tooltip.noConflict = function () {});
    t.fn.popover,
        new RegExp("(^|\\s)bs-popover\\S+", "g"),
        u({}, O.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
        u({}, O.DefaultType, { content: "(string|element|function)" });
    var k = (function (n) {
        var t, e;
        function o() {}
        (e = O), ((t = o).prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
        var c = o.prototype;
        return (
            (c.isWithContent = function () {}),
            (c.addAttachmentClass = function (n) {}),
            (c.getTipElement = function () {}),
            (c.setContent = function () {}),
            (c._getContent = function () {}),
            (c._cleanTipClass = function () {}),
            (o._jQueryInterface = function (n) {}),
            i(o, null, [
                { key: "VERSION", get: function () {} },
                { key: "Default", get: function () {} },
                { key: "NAME", get: function () {} },
                { key: "DATA_KEY", get: function () {} },
                { key: "Event", get: function () {} },
                { key: "EVENT_KEY", get: function () {} },
                { key: "DefaultType", get: function () {} },
            ]),
            o
        );
    })();
    (t.fn.popover = k._jQueryInterface), (t.fn.popover.Constructor = k), (t.fn.popover.noConflict = function () {});
    var P = "scrollspy",
        j = (t.fn[P], { ACTIVATE: "activate.bs.scrollspy", SCROLL: "scroll.bs.scrollspy", LOAD_DATA_API: "load.bs.scrollspy.data-api" }),
        N = '[data-spy="scroll"]',
        L = (function () {
            function n(n, t) {}
            var t = n.prototype;
            return (
                (t.refresh = function () {}),
                (t.dispose = function () {}),
                (t._getConfig = function (n) {}),
                (t._getScrollTop = function () {}),
                (t._getScrollHeight = function () {}),
                (t._getOffsetHeight = function () {}),
                (t._process = function () {}),
                (t._activate = function (n) {}),
                (t._clear = function () {}),
                (n._jQueryInterface = function (n) {}),
                i(n, null, [
                    { key: "VERSION", get: function () {} },
                    { key: "Default", get: function () {} },
                ]),
                n
            );
        })();
    t(window).on(j.LOAD_DATA_API, function () {
        for (var n = [].slice.call(document.querySelectorAll(N)), e = n.length; e--; ) {
            var o = t(n[e]);
            L._jQueryInterface.call(o, o.data());
        }
    }),
        (t.fn[P] = L._jQueryInterface),
        (t.fn[P].Constructor = L),
        (t.fn[P].noConflict = function () {});
    t.fn.tab;
    var K = { HIDE: "hide.bs.tab", HIDDEN: "hidden.bs.tab", SHOW: "show.bs.tab", SHOWN: "shown.bs.tab", CLICK_DATA_API: "click.bs.tab.data-api" },
        Q = (function () {
            function n(n) {}
            var t = n.prototype;
            return (
                (t.show = function () {}),
                (t.dispose = function () {}),
                (t._activate = function (n, t, e) {}),
                (t._transitionComplete = function (n, t, e) {}),
                (n._jQueryInterface = function (n) {}),
                i(n, null, [{ key: "VERSION", get: function () {} }]),
                n
            );
        })();
    t(document).on(K.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (n) {}), (t.fn.tab = Q._jQueryInterface), (t.fn.tab.Constructor = Q), (t.fn.tab.noConflict = function () {});
    t.fn.toast;
    var R = (function () {
        function n(n, t) {}
        var t = n.prototype;
        return (
            (t.show = function () {}),
            (t.hide = function (n) {}),
            (t.dispose = function () {}),
            (t._getConfig = function (n) {}),
            (t._setListeners = function () {}),
            (t._close = function () {}),
            (n._jQueryInterface = function (n) {}),
            i(n, null, [
                { key: "VERSION", get: function () {} },
                { key: "DefaultType", get: function () {} },
                { key: "Default", get: function () {} },
            ]),
            n
        );
    })();
    (t.fn.toast = R._jQueryInterface),
        (t.fn.toast.Constructor = R),
        (t.fn.toast.noConflict = function () {}),
        (function () {
            if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var n = t.fn.jquery.split(" ")[0].split(".");
            if ((n[0] < 2 && n[1] < 9) || (1 === n[0] && 9 === n[1] && n[2] < 1) || n[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
        })(),
        (n.Util = f),
        (n.Alert = s),
        (n.Button = p),
        (n.Carousel = b),
        (n.Collapse = I),
        (n.Dropdown = v),
        (n.Modal = D),
        (n.Popover = k),
        (n.Scrollspy = L),
        (n.Tab = Q),
        (n.Toast = R),
        (n.Tooltip = O),
        Object.defineProperty(n, "__esModule", { value: !0 });
});
