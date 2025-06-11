import "./chunk-G3PMV62Z.js";

// node_modules/gsap-trial/ScrollSmoother.js
var e;
var t;
var r;
var o;
var s;
var i;
var n;
var a;
var l;
var c;
var d;
var h;
var f;
var g;
var p;
var u = () => "undefined" != typeof window;
var m = () => e || u() && (e = window.gsap) && e.registerPlugin && e;
var v = function() {
  return String.fromCharCode.apply(null, arguments);
};
var y = v(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109);
var w = v(103, 115, 97, 112, 46, 99, 111, 109);
var b = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/;
var S = (function(t2) {
  var r2 = "undefined" != typeof window, o2 = 0 === (r2 ? window.location.href : "").indexOf(v(102, 105, 108, 101, 58, 47, 47)) || -1 !== t2.indexOf(v(108, 111, 99, 97, 108, 104, 111, 115, 116)) || b.test(t2) || (r2 ? window.location.hostname : "").split(".").pop() === v(108, 111, 99, 97, 108), s2 = [y, w, v(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), v(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), v(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), v(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112), v(99, 111, 100, 101, 112, 101, 110, 46, 119, 101, 98, 115, 105, 116, 101), v(112, 101, 110, 115, 46, 99, 108, 111, 117, 100), v(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), v(99, 100, 112, 110, 46, 105, 111), v(112, 101, 110, 115, 46, 105, 111), v(103, 97, 110, 110, 111, 110, 46, 116, 118), v(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), v(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), v(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), v(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), v(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), v(112, 108, 110, 107, 114, 46, 99, 111), v(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), v(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), v(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), v(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), v(99, 115, 98, 46, 97, 112, 112), v(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), v(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111), v(99, 111, 100, 105, 101, 114, 46, 105, 111), v(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), v(115, 116, 97, 99, 107, 111, 118, 101, 114, 102, 108, 111, 119, 46, 99, 111, 109), v(115, 116, 97, 99, 107, 101, 120, 99, 104, 97, 110, 103, 101, 46, 99, 111, 109), v(115, 116, 117, 100, 105, 111, 102, 114, 101, 105, 103, 104, 116, 46, 99, 111, 109), v(119, 101, 98, 99, 111, 110, 116, 97, 105, 110, 101, 114, 46, 105, 111), v(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)], i2 = function() {
    if (r2) if ("loading" === document.readyState || "interactive" === document.readyState) document.addEventListener("readystatechange", i2);
    else {
      document.removeEventListener("readystatechange", i2);
      var t3 = "object" == typeof e ? e : r2 && window.gsap;
      r2 && window.console && !window._gsapWarned && "object" == typeof t3 && false !== t3.config().trialWarn && (console.log(v(37, 99, 87, 97, 114, 110, 105, 110, 103), v(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 51, 48, 112, 120, 59, 99, 111, 108, 111, 114, 58, 114, 101, 100, 59)), console.log(v(65, 32, 116, 114, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) + "ScrollSmoother" + v(32, 105, 115, 32, 108, 111, 97, 100, 101, 100, 32, 116, 104, 97, 116, 32, 111, 110, 108, 121, 32, 119, 111, 114, 107, 115, 32, 108, 111, 99, 97, 108, 108, 121, 32, 97, 110, 100, 32, 111, 110, 32, 100, 111, 109, 97, 105, 110, 115, 32, 108, 105, 107, 101, 32, 99, 111, 100, 101, 112, 101, 110, 46, 105, 111, 32, 97, 110, 100, 32, 99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111, 46, 32, 42, 42, 42, 32, 68, 79, 32, 78, 79, 84, 32, 68, 69, 80, 76, 79, 89, 32, 84, 72, 73, 83, 32, 70, 73, 76, 69, 32, 42, 42, 42, 32, 76, 111, 97, 100, 105, 110, 103, 32, 105, 116, 32, 111, 110, 32, 97, 110, 32, 117, 110, 97, 117, 116, 104, 111, 114, 105, 122, 101, 100, 32, 115, 105, 116, 101, 32, 118, 105, 111, 108, 97, 116, 101, 115, 32, 116, 104, 101, 32, 108, 105, 99, 101, 110, 115, 101, 32, 97, 110, 100, 32, 119, 105, 108, 108, 32, 99, 97, 117, 115, 101, 32, 97, 32, 114, 101, 100, 105, 114, 101, 99, 116, 46, 32, 80, 108, 101, 97, 115, 101, 32, 106, 111, 105, 110, 32, 67, 108, 117, 98, 32, 71, 114, 101, 101, 110, 83, 111, 99, 107, 32, 116, 111, 32, 103, 101, 116, 32, 102, 117, 108, 108, 32, 97, 99, 99, 101, 115, 115, 32, 116, 111, 32, 116, 104, 101, 32, 98, 111, 110, 117, 115, 32, 112, 108, 117, 103, 105, 110, 115, 32, 116, 104, 97, 116, 32, 98, 111, 111, 115, 116, 32, 121, 111, 117, 114, 32, 97, 110, 105, 109, 97, 116, 105, 111, 110, 32, 115, 117, 112, 101, 114, 112, 111, 119, 101, 114, 115, 46, 32, 68, 105, 115, 97, 98, 108, 101, 32, 116, 104, 105, 115, 32, 119, 97, 114, 110, 105, 110, 103, 32, 119, 105, 116, 104, 32, 103, 115, 97, 112, 46, 99, 111, 110, 102, 105, 103, 40, 123, 116, 114, 105, 97, 108, 87, 97, 114, 110, 58, 32, 102, 97, 108, 115, 101, 125, 41, 59)), console.log(v(37, 99, 71, 101, 116, 32, 117, 110, 114, 101, 115, 116, 114, 105, 99, 116, 101, 100, 32, 102, 105, 108, 101, 115, 32, 97, 116, 32, 104, 116, 116, 112, 115, 58, 47, 47, 103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109, 47, 99, 108, 117, 98), v(102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 49, 54, 112, 120, 59, 99, 111, 108, 111, 114, 58, 35, 52, 101, 57, 56, 49, 53)), window._gsapWarned = 1);
    }
  }, n2 = s2.length;
  for (setTimeout(i2, 50); --n2 > -1; ) if (-1 !== t2.indexOf(s2[n2])) return true;
  o2 || setTimeout(function() {
    r2 && (window.location.href = v(104, 116, 116, 112, 115, 58, 47, 47) + y + v(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47) + "?plugin=ScrollSmoother&source=trial");
  }, 4e3);
}("undefined" != typeof window ? window.location.host : ""), (e2) => l.maxScroll(e2 || r));
var T = (e2) => {
  let t2 = o.querySelector(".ScrollSmoother-wrapper");
  return t2 || (t2 = o.createElement("div"), t2.classList.add("ScrollSmoother-wrapper"), e2.parentNode.insertBefore(t2, e2), t2.appendChild(e2)), t2;
};
var x = class _x {
  constructor(u2) {
    t || _x.register(e) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), u2 = this.vars = u2 || {}, c && c.kill(), c = this, g(this);
    let m2, v2, y2, w2, b2, _, C, E, P, R, k, A, N, M, z, F, { smoothTouch: L, onUpdate: H, onStop: O, smooth: I, onFocusIn: B, normalizeScroll: U, wholePixels: q } = u2, V = this, W = u2.effectsPrefix || "", D = l.getScrollFunc(r), j = 1 === l.isTouch ? true === L ? 0.8 : parseFloat(L) || 0 : 0 === I || false === I ? 0 : parseFloat(I) || 0.8, Y = j && +u2.speed || 1, K = 0, $ = 0, G = 1, J = h(0), Q = () => J.update(-K), X = { y: 0 }, Z = () => m2.style.overflow = "visible", ee = (e2) => {
      e2.update();
      let t2 = e2.getTween();
      t2 && (t2.pause(), t2._time = t2._dur, t2._tTime = t2._tDur), z = false, e2.animation.progress(e2.progress, true);
    }, te = (e2, t2) => {
      (e2 !== K && !R || t2) && (q && (e2 = Math.round(e2)), j && (m2.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e2 + ", 0, 1)", m2._gsap.y = e2 + "px"), $ = e2 - K, K = e2, l.isUpdating || _x.isRefreshing || l.update());
    }, re = function(e2) {
      return arguments.length ? (e2 < 0 && (e2 = 0), X.y = -e2, z = true, R ? K = -e2 : te(-e2), l.isRefreshing ? w2.update() : D(e2 / Y), this) : -K;
    }, oe = "undefined" != typeof ResizeObserver && false !== u2.autoResize && new ResizeObserver(() => {
      if (!l.isRefreshing) {
        let e2 = S(v2) * Y;
        e2 < -K && re(e2), p.restart(true);
      }
    }), se = (e2) => {
      v2.scrollTop = 0, e2.target.contains && e2.target.contains(v2) || B && false === B(this, e2) || (l.isInViewport(e2.target) || e2.target === F || this.scrollTo(e2.target, false, "center center"), F = e2.target);
    }, ie = (e2, t2) => {
      if (e2 < t2.start) return e2;
      let r2 = isNaN(t2.ratio) ? 1 : t2.ratio, o2 = t2.end - t2.start, s2 = e2 - t2.start, i2 = t2.offset || 0, n2 = t2.pins || [], a2 = n2.offset || 0, l2 = t2._startClamp && t2.start <= 0 || t2.pins && t2.pins.offset ? 0 : t2._endClamp && t2.end === S() ? 1 : 0.5;
      return n2.forEach((t3) => {
        o2 -= t3.distance, t3.nativeStart <= e2 && (s2 -= t3.distance);
      }), a2 && (s2 *= (o2 - a2 / r2) / o2), e2 + (s2 - i2 * l2) / r2 - s2;
    }, ne = (t2, r2, o2) => {
      o2 || (t2.pins.length = t2.pins.offset = 0);
      let s2, i2, n2, a2, l2, c2, d2, h2, f2 = t2.pins, g2 = t2.markers;
      for (d2 = 0; d2 < r2.length; d2++) if (h2 = r2[d2], t2.trigger && h2.trigger && t2 !== h2 && (h2.trigger === t2.trigger || h2.pinnedContainer === t2.trigger || t2.trigger.contains(h2.trigger)) && (l2 = h2._startNative || h2._startClamp || h2.start, c2 = h2._endNative || h2._endClamp || h2.end, n2 = ie(l2, t2), a2 = h2.pin && c2 > 0 ? n2 + (c2 - l2) : ie(c2, t2), h2.setPositions(n2, a2, true, (h2._startClamp ? Math.max(0, n2) : n2) - l2), h2.markerStart && g2.push(e.quickSetter([h2.markerStart, h2.markerEnd], "y", "px")), h2.pin && h2.end > 0 && !o2)) {
        if (s2 = h2.end - h2.start, i2 = t2._startClamp && h2.start < 0, i2) {
          if (t2.start > 0) return t2.setPositions(0, t2.end + (t2._startNative - t2.start), true), void ne(t2, r2);
          s2 += h2.start, f2.offset = -h2.start;
        }
        f2.push({ start: h2.start, nativeStart: l2, end: h2.end, distance: s2, trig: h2 }), t2.setPositions(t2.start, t2.end + (i2 ? -h2.start : s2), true);
      }
    }, ae = (e2, t2) => {
      b2.forEach((r2) => ne(r2, e2, t2));
    }, le = () => {
      s = o.documentElement, i = o.body, Z(), requestAnimationFrame(Z), b2 && (l.getAll().forEach((e2) => {
        e2._startNative = e2.start, e2._endNative = e2.end;
      }), b2.forEach((e2) => {
        let t2 = e2._startClamp || e2.start, r2 = e2.autoSpeed ? Math.min(S(), e2.end) : t2 + Math.abs((e2.end - t2) / e2.ratio), o2 = r2 - e2.end;
        if (t2 -= o2 / 2, r2 -= o2 / 2, t2 > r2) {
          let e3 = t2;
          t2 = r2, r2 = e3;
        }
        e2._startClamp && t2 < 0 ? (r2 = e2.ratio < 0 ? S() : e2.end / e2.ratio, o2 = r2 - e2.end, t2 = 0) : (e2.ratio < 0 || e2._endClamp && r2 >= S()) && (r2 = S(), t2 = e2.ratio < 0 || e2.ratio > 1 ? 0 : r2 - (r2 - e2.start) / e2.ratio, o2 = (r2 - t2) * e2.ratio - (e2.end - e2.start)), e2.offset = o2 || 1e-4, e2.pins.length = e2.pins.offset = 0, e2.setPositions(t2, r2, true);
      }), ae(l.sort())), J.reset();
    }, ce = () => l.addEventListener("refresh", le), de = () => b2 && b2.forEach((e2) => e2.vars.onRefresh(e2)), he = () => (b2 && b2.forEach((e2) => e2.vars.onRefreshInit(e2)), de), fe = (e2, t2, r2, o2) => () => {
      let s2 = "function" == typeof t2 ? t2(r2, o2) : t2;
      s2 || 0 === s2 || (s2 = o2.getAttribute("data-" + W + e2) || ("speed" === e2 ? 1 : 0)), o2.setAttribute("data-" + W + e2, s2);
      let i2 = "clamp(" === (s2 + "").substr(0, 6);
      return { clamp: i2, value: i2 ? s2.substr(6, s2.length - 7) : s2 };
    }, ge = (t2, o2, i2, n2, c2) => {
      c2 = ("function" == typeof c2 ? c2(n2, t2) : c2) || 0;
      let h2, f2, g2, p2, u3, m3, y3 = fe("speed", o2, n2, t2), w3 = fe("lag", i2, n2, t2), T2 = e.getProperty(t2, "y"), x2 = t2._gsap, _2 = [], C2 = () => {
        o2 = y3(), i2 = parseFloat(w3().value), h2 = parseFloat(o2.value) || 1, g2 = "auto" === o2.value, u3 = g2 || f2 && f2._startClamp && f2.start <= 0 || _2.offset ? 0 : f2 && f2._endClamp && f2.end === S() ? 1 : 0.5, p2 && p2.kill(), p2 = i2 && e.to(t2, { ease: d, overwrite: false, y: "+=0", duration: i2 }), f2 && (f2.ratio = h2, f2.autoSpeed = g2);
      }, E2 = () => {
        x2.y = T2 + "px", x2.renderTransform(1), C2();
      }, P2 = [], R2 = 0, k2 = (e2) => {
        if (g2) {
          E2();
          let o3 = ((e3, t3) => {
            let o4, i3, n3 = e3.parentNode || s, a2 = e3.getBoundingClientRect(), l2 = n3.getBoundingClientRect(), c3 = l2.top - a2.top, d2 = l2.bottom - a2.bottom, h3 = (Math.abs(c3) > Math.abs(d2) ? c3 : d2) / (1 - t3), f3 = -h3 * t3;
            return h3 > 0 && (o4 = l2.height / (r.innerHeight + l2.height), i3 = 0.5 === o4 ? 2 * l2.height : 2 * Math.min(l2.height, Math.abs(-h3 * o4 / (2 * o4 - 1))) * (t3 || 1), f3 += t3 ? -i3 * t3 : -i3 / 2, h3 += i3), { change: h3, offset: f3 };
          })(t2, a(0, 1, -e2.start / (e2.end - e2.start)));
          R2 = o3.change, m3 = o3.offset;
        } else m3 = _2.offset || 0, R2 = (e2.end - e2.start - m3) * (1 - h2);
        _2.forEach((e3) => R2 -= e3.distance * (1 - h2)), e2.offset = R2 || 1e-3, e2.vars.onUpdate(e2), p2 && p2.progress(1);
      };
      return C2(), (1 !== h2 || g2 || p2) && (f2 = l.create({ trigger: g2 ? t2.parentNode : t2, start: () => o2.clamp ? "clamp(top bottom+=" + c2 + ")" : "top bottom+=" + c2, end: () => o2.value < 0 ? "max" : o2.clamp ? "clamp(bottom top-=" + c2 + ")" : "bottom top-=" + c2, scroller: v2, scrub: true, refreshPriority: -999, onRefreshInit: E2, onRefresh: k2, onKill: (e2) => {
        let t3 = b2.indexOf(e2);
        t3 >= 0 && b2.splice(t3, 1), E2();
      }, onUpdate: (t3) => {
        let r2, o3, s2, i3 = T2 + R2 * (t3.progress - u3), n3 = _2.length, a2 = 0;
        if (t3.offset) {
          if (n3) {
            for (o3 = -K, s2 = t3.end; n3--; ) {
              if (r2 = _2[n3], r2.trig.isActive || o3 >= r2.start && o3 <= r2.end) return void (p2 && (r2.trig.progress += r2.trig.direction < 0 ? 1e-3 : -1e-3, r2.trig.update(0, 0, 1), p2.resetTo("y", parseFloat(x2.y), -$, true), G && p2.progress(1)));
              o3 > r2.end && (a2 += r2.distance), s2 -= r2.distance;
            }
            i3 = T2 + a2 + R2 * ((e.utils.clamp(t3.start, t3.end, o3) - t3.start - a2) / (s2 - t3.start) - u3);
          }
          P2.length && !g2 && P2.forEach((e2) => e2(i3 - a2)), l2 = i3 + m3, i3 = Math.round(1e5 * l2) / 1e5 || 0, p2 ? (p2.resetTo("y", i3, -$, true), G && p2.progress(1)) : (x2.y = i3 + "px", x2.renderTransform(1));
        }
        var l2;
      } }), k2(f2), e.core.getCache(f2.trigger).stRevert = he, f2.startY = T2, f2.pins = _2, f2.markers = P2, f2.ratio = h2, f2.autoSpeed = g2, t2.style.willChange = "transform"), f2;
    };
    function pe() {
      return y2 = m2.clientHeight, m2.style.overflow = "visible", i.style.height = r.innerHeight + (y2 - r.innerHeight) / Y + "px", y2 - r.innerHeight;
    }
    ce(), l.addEventListener("killAll", ce), e.delayedCall(0.5, () => G = 0), this.scrollTop = re, this.scrollTo = (t2, r2, o2) => {
      let s2 = e.utils.clamp(0, S(), isNaN(t2) ? this.offset(t2, o2, !!r2 && !R) : +t2);
      r2 ? R ? e.to(this, { duration: j, scrollTop: s2, overwrite: "auto", ease: d }) : D(s2) : re(s2);
    }, this.offset = (t2, r2, o2) => {
      let s2, i2 = (t2 = n(t2)[0]).style.cssText, a2 = l.create({ trigger: t2, start: r2 || "top top" });
      return b2 && (G ? l.refresh() : ae([a2], true)), s2 = a2.start / (o2 ? Y : 1), a2.kill(false), t2.style.cssText = i2, e.core.getCache(t2).uncache = 1, s2;
    }, this.content = function(t2) {
      if (arguments.length) {
        let r2 = n(t2 || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || i.children[0];
        return r2 !== m2 && (m2 = r2, P = m2.getAttribute("style") || "", oe && oe.observe(m2), e.set(m2, { overflow: "visible", width: "100%", boxSizing: "border-box", y: "+=0" }), j || e.set(m2, { clearProps: "transform" })), this;
      }
      return m2;
    }, this.wrapper = function(t2) {
      return arguments.length ? (v2 = n(t2 || "#smooth-wrapper")[0] || T(m2), E = v2.getAttribute("style") || "", pe(), e.set(v2, j ? { overflow: "hidden", position: "fixed", height: "100%", width: "100%", top: 0, left: 0, right: 0, bottom: 0 } : { overflow: "visible", position: "relative", width: "100%", height: "auto", top: "auto", bottom: "auto", left: "auto", right: "auto" }), this) : v2;
    }, this.effects = (e2, t2) => {
      if (b2 || (b2 = []), !e2) return b2.slice(0);
      (e2 = n(e2)).forEach((e3) => {
        let t3 = b2.length;
        for (; t3--; ) b2[t3].trigger === e3 && b2[t3].kill();
      }), t2 = t2 || {};
      let r2, o2, { speed: s2, lag: i2, effectsPadding: a2 } = t2, c2 = [];
      for (r2 = 0; r2 < e2.length; r2++) o2 = ge(e2[r2], s2, i2, r2, a2), o2 && c2.push(o2);
      return b2.push(...c2), false !== t2.refresh && l.refresh(), c2;
    }, this.sections = (e2, t2) => {
      if (_ || (_ = []), !e2) return _.slice(0);
      let r2 = n(e2).map((e3) => l.create({ trigger: e3, start: "top 120%", end: "bottom -20%", onToggle: (t3) => {
        e3.style.opacity = t3.isActive ? "1" : "0", e3.style.pointerEvents = t3.isActive ? "all" : "none";
      } }));
      return t2 && t2.add ? _.push(...r2) : _ = r2.slice(0), r2;
    }, this.content(u2.content), this.wrapper(u2.wrapper), this.render = (e2) => te(e2 || 0 === e2 ? e2 : K), this.getVelocity = () => J.getVelocity(-K), l.scrollerProxy(v2, { scrollTop: re, scrollHeight: () => pe() && i.scrollHeight, fixedMarkers: false !== u2.fixedMarkers && !!j, content: m2, getBoundingClientRect: () => ({ top: 0, left: 0, width: r.innerWidth, height: r.innerHeight }) }), l.defaults({ scroller: v2 });
    let ue = l.getAll().filter((e2) => e2.scroller === r || e2.scroller === v2);
    ue.forEach((e2) => e2.revert(true, true)), w2 = l.create({ animation: e.fromTo(X, { y: () => (M = 0, 0) }, { y: () => (M = 1, -pe()), immediateRender: false, ease: "none", data: "ScrollSmoother", duration: 100, onUpdate: function() {
      if (M) {
        let e2 = z;
        e2 && (ee(w2), X.y = K), te(X.y, e2), Q(), H && !R && H(V);
      }
    } }), onRefreshInit: (e2) => {
      if (_x.isRefreshing) return;
      if (_x.isRefreshing = true, b2) {
        let e3 = l.getAll().filter((e4) => !!e4.pin);
        b2.forEach((t3) => {
          t3.vars.pinnedContainer || e3.forEach((e4) => {
            if (e4.pin.contains(t3.trigger)) {
              let r2 = t3.vars;
              r2.pinnedContainer = e4.pin, t3.vars = null, t3.init(r2, t3.animation);
            }
          });
        });
      }
      let t2 = e2.getTween();
      N = t2 && t2._end > t2._dp._time, A = K, X.y = 0, j && (1 === l.isTouch && (v2.style.position = "absolute"), v2.scrollTop = 0, 1 === l.isTouch && (v2.style.position = "fixed"));
    }, onRefresh: (t2) => {
      t2.animation.invalidate(), t2.setPositions(t2.start, pe() / Y), N || ee(t2), X.y = -D() * Y, te(X.y), G || (N && (z = false), t2.animation.progress(e.utils.clamp(0, 1, A / Y / -t2.end))), N && (t2.progress -= 1e-3, t2.update()), _x.isRefreshing = false;
    }, id: "ScrollSmoother", scroller: r, invalidateOnRefresh: true, start: 0, refreshPriority: -9999, end: () => pe() / Y, onScrubComplete: () => {
      J.reset(), O && O(this);
    }, scrub: j || true }), this.smooth = function(e2) {
      return arguments.length && (j = e2 || 0, Y = j && +u2.speed || 1, w2.scrubDuration(e2)), w2.getTween() ? w2.getTween().duration() : 0;
    }, w2.getTween() && (w2.getTween().vars.ease = u2.ease || d), this.scrollTrigger = w2, u2.effects && this.effects(true === u2.effects ? "[data-" + W + "speed], [data-" + W + "lag]" : u2.effects, { effectsPadding: u2.effectsPadding, refresh: false }), u2.sections && this.sections(true === u2.sections ? "[data-section]" : u2.sections), ue.forEach((e2) => {
      e2.vars.scroller = v2, e2.revert(false, true), e2.init(e2.vars, e2.animation);
    }), this.paused = function(e2, t2) {
      return arguments.length ? (!!R !== e2 && (e2 ? (w2.getTween() && w2.getTween().pause(), D(-K / Y), J.reset(), k = l.normalizeScroll(), k && k.disable(), R = l.observe({ preventDefault: true, type: "wheel,touch,scroll", debounce: false, allowClicks: true, onChangeY: () => re(-K) }), R.nested = f(s, "wheel,touch,scroll", true, false !== t2)) : (R.nested.kill(), R.kill(), R = 0, k && k.enable(), w2.progress = (-K / Y - w2.start) / (w2.end - w2.start), ee(w2))), this) : !!R;
    }, this.kill = this.revert = () => {
      this.paused(false), ee(w2), w2.kill();
      let e2 = (b2 || []).concat(_ || []), t2 = e2.length;
      for (; t2--; ) e2[t2].kill();
      l.scrollerProxy(v2), l.removeEventListener("killAll", ce), l.removeEventListener("refresh", le), v2.style.cssText = E, m2.style.cssText = P;
      let o2 = l.defaults({});
      o2 && o2.scroller === v2 && l.defaults({ scroller: r }), this.normalizer && l.normalizeScroll(false), clearInterval(C), c = null, oe && oe.disconnect(), i.style.removeProperty("height"), r.removeEventListener("focusin", se);
    }, this.refresh = (e2, t2) => w2.refresh(e2, t2), U && (this.normalizer = l.normalizeScroll(true === U ? { debounce: true, content: !j && m2 } : U)), l.config(u2), "scrollBehavior" in r.getComputedStyle(i) && e.set([i, s], { scrollBehavior: "auto" }), r.addEventListener("focusin", se), C = setInterval(Q, 250), "loading" === o.readyState || requestAnimationFrame(() => l.refresh());
  }
  get progress() {
    return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0;
  }
  static register(v2) {
    return t || (e = v2 || m(), u() && window.document && (r = window, o = document, s = o.documentElement, i = o.body), e && (n = e.utils.toArray, a = e.utils.clamp, d = e.parseEase("expo"), g = e.core.context || function() {
    }, l = e.core.globals().ScrollTrigger, e.core.globals("ScrollSmoother", _x), i && l && (p = e.delayedCall(0.2, () => l.isRefreshing || c && c.refresh()).pause(), h = l.core._getVelocityProp, f = l.core._inputObserver, _x.refresh = l.refresh, t = 1))), t;
  }
};
x.version = "3.12.7", x.create = (e2) => c && e2 && c.content() === n(e2.content)[0] ? c : new x(e2), x.get = () => c, m() && e.registerPlugin(x);
var ScrollSmoother_default = x;
export {
  x as ScrollSmoother,
  ScrollSmoother_default as default
};
/*! Bundled license information:

gsap-trial/ScrollSmoother.js:
  (*!
   * ScrollSmoother 3.12.7
   * https://gsap.com
   * 
   * @license Copyright 2025, GreenSock. All rights reserved.
   * *** DO NOT DEPLOY THIS FILE ***
   * This is a trial version that only works locally and on domains like codepen.io and codesandbox.io.
   * Loading it on an unauthorized domain violates the license and will cause a redirect.
   * Get the unrestricted file by joining Club GSAP at https://gsap.com/pricing
   * @author: Jack Doyle, jack@greensock.com
   *)
*/
//# sourceMappingURL=gsap-trial_ScrollSmoother.js.map
