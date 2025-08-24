/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function cl(e) {
    const t = Object.create(null);
    for (const n of e.split(","))
        t[n] = 1;
    return n => n in t
}
const Oe = {}
  , kr = []
  , Zt = () => {}
  , Lp = () => !1
  , Qi = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97)
  , fl = e => e.startsWith("onUpdate:")
  , Ke = Object.assign
  , dl = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
  }
  , Op = Object.prototype.hasOwnProperty
  , Pe = (e, t) => Op.call(e, t)
  , de = Array.isArray
  , Ar = e => zr(e) === "[object Map]"
  , Wr = e => zr(e) === "[object Set]"
  , mu = e => zr(e) === "[object Date]"
  , Pp = e => zr(e) === "[object RegExp]"
  , _e = e => typeof e == "function"
  , He = e => typeof e == "string"
  , Ut = e => typeof e == "symbol"
  , $e = e => e !== null && typeof e == "object"
  , xd = e => ($e(e) || _e(e)) && _e(e.then) && _e(e.catch)
  , kd = Object.prototype.toString
  , zr = e => kd.call(e)
  , Rp = e => zr(e).slice(8, -1)
  , Ad = e => zr(e) === "[object Object]"
  , ml = e => He(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e
  , vo = cl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , Ji = e => {
    const t = Object.create(null);
    return n => t[n] || (t[n] = e(n))
}
  , Ip = /-(\w)/g
  , At = Ji(e => e.replace(Ip, (t, n) => n ? n.toUpperCase() : ""))
  , Np = /\B([A-Z])/g
  , gn = Ji(e => e.replace(Np, "-$1").toLowerCase())
  , Zi = Ji(e => e.charAt(0).toUpperCase() + e.slice(1))
  , $s = Ji(e => e ? `on${Zi(e)}` : "")
  , Et = (e, t) => !Object.is(e, t)
  , Lr = (e, ...t) => {
    for (let n = 0; n < e.length; n++)
        e[n](...t)
}
  , Ld = (e, t, n, r=!1) => {
    Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !1,
        writable: r,
        value: n
    })
}
  , Si = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t
}
  , Mp = e => {
    const t = He(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t
}
;
let hu;
const es = () => hu || (hu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function hl(e) {
    if (de(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n]
              , o = He(r) ? qp(r) : hl(r);
            if (o)
                for (const i in o)
                    t[i] = o[i]
        }
        return t
    } else if (He(e) || $e(e))
        return e
}
const $p = /;(?![^(]*\))/g
  , Fp = /:([^]+)/
  , Dp = /\/\*[^]*?\*\//g;
function qp(e) {
    const t = {};
    return e.replace(Dp, "").split($p).forEach(n => {
        if (n) {
            const r = n.split(Fp);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }
    ),
    t
}
function gl(e) {
    let t = "";
    if (He(e))
        t = e;
    else if (de(e))
        for (let n = 0; n < e.length; n++) {
            const r = gl(e[n]);
            r && (t += r + " ")
        }
    else if ($e(e))
        for (const n in e)
            e[n] && (t += n + " ");
    return t.trim()
}
const Bp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , jp = cl(Bp);
function Od(e) {
    return !!e || e === ""
}
function Up(e, t) {
    if (e.length !== t.length)
        return !1;
    let n = !0;
    for (let r = 0; n && r < e.length; r++)
        n = sr(e[r], t[r]);
    return n
}
function sr(e, t) {
    if (e === t)
        return !0;
    let n = mu(e)
      , r = mu(t);
    if (n || r)
        return n && r ? e.getTime() === t.getTime() : !1;
    if (n = Ut(e),
    r = Ut(t),
    n || r)
        return e === t;
    if (n = de(e),
    r = de(t),
    n || r)
        return n && r ? Up(e, t) : !1;
    if (n = $e(e),
    r = $e(t),
    n || r) {
        if (!n || !r)
            return !1;
        const o = Object.keys(e).length
          , i = Object.keys(t).length;
        if (o !== i)
            return !1;
        for (const s in e) {
            const a = e.hasOwnProperty(s)
              , l = t.hasOwnProperty(s);
            if (a && !l || !a && l || !sr(e[s], t[s]))
                return !1
        }
    }
    return String(e) === String(t)
}
function pl(e, t) {
    return e.findIndex(n => sr(n, t))
}
const Pd = e => !!(e && e.__v_isRef === !0)
  , Vp = e => He(e) ? e : e == null ? "" : de(e) || $e(e) && (e.toString === kd || !_e(e.toString)) ? Pd(e) ? Vp(e.value) : JSON.stringify(e, Rd, 2) : String(e)
  , Rd = (e, t) => Pd(t) ? Rd(e, t.value) : Ar(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce( (n, [r,o], i) => (n[Fs(r, i) + " =>"] = o,
    n), {})
} : Wr(t) ? {
    [`Set(${t.size})`]: [...t.values()].map(n => Fs(n))
} : Ut(t) ? Fs(t) : $e(t) && !de(t) && !Ad(t) ? String(t) : t
  , Fs = (e, t="") => {
    var n;
    return Ut(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
}
;
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let bt;
class Id {
    constructor(t=!1) {
        this.detached = t,
        this._active = !0,
        this.effects = [],
        this.cleanups = [],
        this._isPaused = !1,
        this.parent = bt,
        !t && bt && (this.index = (bt.scopes || (bt.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, n;
            if (this.scopes)
                for (t = 0,
                n = this.scopes.length; t < n; t++)
                    this.scopes[t].pause();
            for (t = 0,
            n = this.effects.length; t < n; t++)
                this.effects[t].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, n;
            if (this.scopes)
                for (t = 0,
                n = this.scopes.length; t < n; t++)
                    this.scopes[t].resume();
            for (t = 0,
            n = this.effects.length; t < n; t++)
                this.effects[t].resume()
        }
    }
    run(t) {
        if (this._active) {
            const n = bt;
            try {
                return bt = this,
                t()
            } finally {
                bt = n
            }
        }
    }
    on() {
        bt = this
    }
    off() {
        bt = this.parent
    }
    stop(t) {
        if (this._active) {
            this._active = !1;
            let n, r;
            for (n = 0,
            r = this.effects.length; n < r; n++)
                this.effects[n].stop();
            for (this.effects.length = 0,
            n = 0,
            r = this.cleanups.length; n < r; n++)
                this.cleanups[n]();
            if (this.cleanups.length = 0,
            this.scopes) {
                for (n = 0,
                r = this.scopes.length; n < r; n++)
                    this.scopes[n].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !t) {
                const o = this.parent.scopes.pop();
                o && o !== this && (this.parent.scopes[this.index] = o,
                o.index = this.index)
            }
            this.parent = void 0
        }
    }
}
function Hp(e) {
    return new Id(e)
}
function Nd() {
    return bt
}
function Wp(e, t=!1) {
    bt && bt.cleanups.push(e)
}
let qe;
const Ds = new WeakSet;
class Md {
    constructor(t) {
        this.fn = t,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 5,
        this.next = void 0,
        this.cleanup = void 0,
        this.scheduler = void 0,
        bt && bt.active && bt.effects.push(this)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65,
        Ds.has(this) && (Ds.delete(this),
        this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Fd(this)
    }
    run() {
        if (!(this.flags & 1))
            return this.fn();
        this.flags |= 2,
        gu(this),
        Dd(this);
        const t = qe
          , n = jt;
        qe = this,
        jt = !0;
        try {
            return this.fn()
        } finally {
            qd(this),
            qe = t,
            jt = n,
            this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep)
                _l(t);
            this.deps = this.depsTail = void 0,
            gu(this),
            this.onStop && this.onStop(),
            this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? Ds.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        _a(this) && this.run()
    }
    get dirty() {
        return _a(this)
    }
}
let $d = 0, bo, _o;
function Fd(e, t=!1) {
    if (e.flags |= 8,
    t) {
        e.next = _o,
        _o = e;
        return
    }
    e.next = bo,
    bo = e
}
function vl() {
    $d++
}
function bl() {
    if (--$d > 0)
        return;
    if (_o) {
        let t = _o;
        for (_o = void 0; t; ) {
            const n = t.next;
            t.next = void 0,
            t.flags &= -9,
            t = n
        }
    }
    let e;
    for (; bo; ) {
        let t = bo;
        for (bo = void 0; t; ) {
            const n = t.next;
            if (t.next = void 0,
            t.flags &= -9,
            t.flags & 1)
                try {
                    t.trigger()
                } catch (r) {
                    e || (e = r)
                }
            t = n
        }
    }
    if (e)
        throw e
}
function Dd(e) {
    for (let t = e.deps; t; t = t.nextDep)
        t.version = -1,
        t.prevActiveLink = t.dep.activeLink,
        t.dep.activeLink = t
}
function qd(e) {
    let t, n = e.depsTail, r = n;
    for (; r; ) {
        const o = r.prevDep;
        r.version === -1 ? (r === n && (n = o),
        _l(r),
        zp(r)) : t = r,
        r.dep.activeLink = r.prevActiveLink,
        r.prevActiveLink = void 0,
        r = o
    }
    e.deps = t,
    e.depsTail = n
}
function _a(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (t.dep.version !== t.version || t.dep.computed && (Bd(t.dep.computed) || t.dep.version !== t.version))
            return !0;
    return !!e._dirty
}
function Bd(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17,
    e.globalVersion === Ao))
        return;
    e.globalVersion = Ao;
    const t = e.dep;
    if (e.flags |= 2,
    t.version > 0 && !e.isSSR && e.deps && !_a(e)) {
        e.flags &= -3;
        return
    }
    const n = qe
      , r = jt;
    qe = e,
    jt = !0;
    try {
        Dd(e);
        const o = e.fn(e._value);
        (t.version === 0 || Et(o, e._value)) && (e._value = o,
        t.version++)
    } catch (o) {
        throw t.version++,
        o
    } finally {
        qe = n,
        jt = r,
        qd(e),
        e.flags &= -3
    }
}
function _l(e, t=!1) {
    const {dep: n, prevSub: r, nextSub: o} = e;
    if (r && (r.nextSub = o,
    e.prevSub = void 0),
    o && (o.prevSub = r,
    e.nextSub = void 0),
    n.subs === e && (n.subs = r,
    !r && n.computed)) {
        n.computed.flags &= -5;
        for (let i = n.computed.deps; i; i = i.nextDep)
            _l(i, !0)
    }
    !t && !--n.sc && n.map && n.map.delete(n.key)
}
function zp(e) {
    const {prevDep: t, nextDep: n} = e;
    t && (t.nextDep = n,
    e.prevDep = void 0),
    n && (n.prevDep = t,
    e.nextDep = void 0)
}
let jt = !0;
const jd = [];
function Dn() {
    jd.push(jt),
    jt = !1
}
function qn() {
    const e = jd.pop();
    jt = e === void 0 ? !0 : e
}
function gu(e) {
    const {cleanup: t} = e;
    if (e.cleanup = void 0,
    t) {
        const n = qe;
        qe = void 0;
        try {
            t()
        } finally {
            qe = n
        }
    }
}
let Ao = 0;
class Kp {
    constructor(t, n) {
        this.sub = t,
        this.dep = n,
        this.version = n.version,
        this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
class ts {
    constructor(t) {
        this.computed = t,
        this.version = 0,
        this.activeLink = void 0,
        this.subs = void 0,
        this.map = void 0,
        this.key = void 0,
        this.sc = 0
    }
    track(t) {
        if (!qe || !jt || qe === this.computed)
            return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== qe)
            n = this.activeLink = new Kp(qe,this),
            qe.deps ? (n.prevDep = qe.depsTail,
            qe.depsTail.nextDep = n,
            qe.depsTail = n) : qe.deps = qe.depsTail = n,
            Ud(n);
        else if (n.version === -1 && (n.version = this.version,
        n.nextDep)) {
            const r = n.nextDep;
            r.prevDep = n.prevDep,
            n.prevDep && (n.prevDep.nextDep = r),
            n.prevDep = qe.depsTail,
            n.nextDep = void 0,
            qe.depsTail.nextDep = n,
            qe.depsTail = n,
            qe.deps === n && (qe.deps = r)
        }
        return n
    }
    trigger(t) {
        this.version++,
        Ao++,
        this.notify(t)
    }
    notify(t) {
        vl();
        try {
            for (let n = this.subs; n; n = n.prevSub)
                n.sub.notify() && n.sub.dep.notify()
        } finally {
            bl()
        }
    }
}
function Ud(e) {
    if (e.dep.sc++,
    e.sub.flags & 4) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let r = t.deps; r; r = r.nextDep)
                Ud(r)
        }
        const n = e.dep.subs;
        n !== e && (e.prevSub = n,
        n && (n.nextSub = e)),
        e.dep.subs = e
    }
}
const Ci = new WeakMap
  , Zn = Symbol("")
  , ya = Symbol("")
  , Lo = Symbol("");
function ct(e, t, n) {
    if (jt && qe) {
        let r = Ci.get(e);
        r || Ci.set(e, r = new Map);
        let o = r.get(n);
        o || (r.set(n, o = new ts),
        o.map = r,
        o.key = n),
        o.track()
    }
}
function ln(e, t, n, r, o, i) {
    const s = Ci.get(e);
    if (!s) {
        Ao++;
        return
    }
    const a = l => {
        l && l.trigger()
    }
    ;
    if (vl(),
    t === "clear")
        s.forEach(a);
    else {
        const l = de(e)
          , u = l && ml(n);
        if (l && n === "length") {
            const c = Number(r);
            s.forEach( (d, f) => {
                (f === "length" || f === Lo || !Ut(f) && f >= c) && a(d)
            }
            )
        } else
            switch ((n !== void 0 || s.has(void 0)) && a(s.get(n)),
            u && a(s.get(Lo)),
            t) {
            case "add":
                l ? u && a(s.get("length")) : (a(s.get(Zn)),
                Ar(e) && a(s.get(ya)));
                break;
            case "delete":
                l || (a(s.get(Zn)),
                Ar(e) && a(s.get(ya)));
                break;
            case "set":
                Ar(e) && a(s.get(Zn));
                break
            }
    }
    bl()
}
function Gp(e, t) {
    const n = Ci.get(e);
    return n && n.get(t)
}
function pr(e) {
    const t = Se(e);
    return t === e ? t : (ct(t, "iterate", Lo),
    Nt(e) ? t : t.map(ft))
}
function ns(e) {
    return ct(e = Se(e), "iterate", Lo),
    e
}
const Yp = {
    __proto__: null,
    [Symbol.iterator]() {
        return qs(this, Symbol.iterator, ft)
    },
    concat(...e) {
        return pr(this).concat(...e.map(t => de(t) ? pr(t) : t))
    },
    entries() {
        return qs(this, "entries", e => (e[1] = ft(e[1]),
        e))
    },
    every(e, t) {
        return tn(this, "every", e, t, void 0, arguments)
    },
    filter(e, t) {
        return tn(this, "filter", e, t, n => n.map(ft), arguments)
    },
    find(e, t) {
        return tn(this, "find", e, t, ft, arguments)
    },
    findIndex(e, t) {
        return tn(this, "findIndex", e, t, void 0, arguments)
    },
    findLast(e, t) {
        return tn(this, "findLast", e, t, ft, arguments)
    },
    findLastIndex(e, t) {
        return tn(this, "findLastIndex", e, t, void 0, arguments)
    },
    forEach(e, t) {
        return tn(this, "forEach", e, t, void 0, arguments)
    },
    includes(...e) {
        return Bs(this, "includes", e)
    },
    indexOf(...e) {
        return Bs(this, "indexOf", e)
    },
    join(e) {
        return pr(this).join(e)
    },
    lastIndexOf(...e) {
        return Bs(this, "lastIndexOf", e)
    },
    map(e, t) {
        return tn(this, "map", e, t, void 0, arguments)
    },
    pop() {
        return ro(this, "pop")
    },
    push(...e) {
        return ro(this, "push", e)
    },
    reduce(e, ...t) {
        return pu(this, "reduce", e, t)
    },
    reduceRight(e, ...t) {
        return pu(this, "reduceRight", e, t)
    },
    shift() {
        return ro(this, "shift")
    },
    some(e, t) {
        return tn(this, "some", e, t, void 0, arguments)
    },
    splice(...e) {
        return ro(this, "splice", e)
    },
    toReversed() {
        return pr(this).toReversed()
    },
    toSorted(e) {
        return pr(this).toSorted(e)
    },
    toSpliced(...e) {
        return pr(this).toSpliced(...e)
    },
    unshift(...e) {
        return ro(this, "unshift", e)
    },
    values() {
        return qs(this, "values", ft)
    }
};
function qs(e, t, n) {
    const r = ns(e)
      , o = r[t]();
    return r !== e && !Nt(e) && (o._next = o.next,
    o.next = () => {
        const i = o._next();
        return i.value && (i.value = n(i.value)),
        i
    }
    ),
    o
}
const Xp = Array.prototype;
function tn(e, t, n, r, o, i) {
    const s = ns(e)
      , a = s !== e && !Nt(e)
      , l = s[t];
    if (l !== Xp[t]) {
        const d = l.apply(e, i);
        return a ? ft(d) : d
    }
    let u = n;
    s !== e && (a ? u = function(d, f) {
        return n.call(this, ft(d), f, e)
    }
    : n.length > 2 && (u = function(d, f) {
        return n.call(this, d, f, e)
    }
    ));
    const c = l.call(s, u, r);
    return a && o ? o(c) : c
}
function pu(e, t, n, r) {
    const o = ns(e);
    let i = n;
    return o !== e && (Nt(e) ? n.length > 3 && (i = function(s, a, l) {
        return n.call(this, s, a, l, e)
    }
    ) : i = function(s, a, l) {
        return n.call(this, s, ft(a), l, e)
    }
    ),
    o[t](i, ...r)
}
function Bs(e, t, n) {
    const r = Se(e);
    ct(r, "iterate", Lo);
    const o = r[t](...n);
    return (o === -1 || o === !1) && Sl(n[0]) ? (n[0] = Se(n[0]),
    r[t](...n)) : o
}
function ro(e, t, n=[]) {
    Dn(),
    vl();
    const r = Se(e)[t].apply(e, n);
    return bl(),
    qn(),
    r
}
const Qp = cl("__proto__,__v_isRef,__isVue")
  , Vd = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Ut));
function Jp(e) {
    Ut(e) || (e = String(e));
    const t = Se(this);
    return ct(t, "has", e),
    t.hasOwnProperty(e)
}
class Hd {
    constructor(t=!1, n=!1) {
        this._isReadonly = t,
        this._isShallow = n
    }
    get(t, n, r) {
        if (n === "__v_skip")
            return t.__v_skip;
        const o = this._isReadonly
          , i = this._isShallow;
        if (n === "__v_isReactive")
            return !o;
        if (n === "__v_isReadonly")
            return o;
        if (n === "__v_isShallow")
            return i;
        if (n === "__v_raw")
            return r === (o ? i ? lv : Gd : i ? Kd : zd).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
        const s = de(t);
        if (!o) {
            let l;
            if (s && (l = Yp[n]))
                return l;
            if (n === "hasOwnProperty")
                return Jp
        }
        const a = Reflect.get(t, n, et(t) ? t : r);
        return (Ut(n) ? Vd.has(n) : Qp(n)) || (o || ct(t, "get", n),
        i) ? a : et(a) ? s && ml(n) ? a : a.value : $e(a) ? o ? rs(a) : Kr(a) : a
    }
}
class Wd extends Hd {
    constructor(t=!1) {
        super(!1, t)
    }
    set(t, n, r, o) {
        let i = t[n];
        if (!this._isShallow) {
            const l = ar(i);
            if (!Nt(r) && !ar(r) && (i = Se(i),
            r = Se(r)),
            !de(t) && et(i) && !et(r))
                return l ? !1 : (i.value = r,
                !0)
        }
        const s = de(t) && ml(n) ? Number(n) < t.length : Pe(t, n)
          , a = Reflect.set(t, n, r, et(t) ? t : o);
        return t === Se(o) && (s ? Et(r, i) && ln(t, "set", n, r) : ln(t, "add", n, r)),
        a
    }
    deleteProperty(t, n) {
        const r = Pe(t, n);
        t[n];
        const o = Reflect.deleteProperty(t, n);
        return o && r && ln(t, "delete", n, void 0),
        o
    }
    has(t, n) {
        const r = Reflect.has(t, n);
        return (!Ut(n) || !Vd.has(n)) && ct(t, "has", n),
        r
    }
    ownKeys(t) {
        return ct(t, "iterate", de(t) ? "length" : Zn),
        Reflect.ownKeys(t)
    }
}
class Zp extends Hd {
    constructor(t=!1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const ev = new Wd
  , tv = new Zp
  , nv = new Wd(!0);
const wa = e => e
  , Qo = e => Reflect.getPrototypeOf(e);
function rv(e, t, n) {
    return function(...r) {
        const o = this.__v_raw
          , i = Se(o)
          , s = Ar(i)
          , a = e === "entries" || e === Symbol.iterator && s
          , l = e === "keys" && s
          , u = o[e](...r)
          , c = n ? wa : t ? Ea : ft;
        return !t && ct(i, "iterate", l ? ya : Zn),
        {
            next() {
                const {value: d, done: f} = u.next();
                return f ? {
                    value: d,
                    done: f
                } : {
                    value: a ? [c(d[0]), c(d[1])] : c(d),
                    done: f
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function Jo(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function ov(e, t) {
    const n = {
        get(o) {
            const i = this.__v_raw
              , s = Se(i)
              , a = Se(o);
            e || (Et(o, a) && ct(s, "get", o),
            ct(s, "get", a));
            const {has: l} = Qo(s)
              , u = t ? wa : e ? Ea : ft;
            if (l.call(s, o))
                return u(i.get(o));
            if (l.call(s, a))
                return u(i.get(a));
            i !== s && i.get(o)
        },
        get size() {
            const o = this.__v_raw;
            return !e && ct(Se(o), "iterate", Zn),
            Reflect.get(o, "size", o)
        },
        has(o) {
            const i = this.__v_raw
              , s = Se(i)
              , a = Se(o);
            return e || (Et(o, a) && ct(s, "has", o),
            ct(s, "has", a)),
            o === a ? i.has(o) : i.has(o) || i.has(a)
        },
        forEach(o, i) {
            const s = this
              , a = s.__v_raw
              , l = Se(a)
              , u = t ? wa : e ? Ea : ft;
            return !e && ct(l, "iterate", Zn),
            a.forEach( (c, d) => o.call(i, u(c), u(d), s))
        }
    };
    return Ke(n, e ? {
        add: Jo("add"),
        set: Jo("set"),
        delete: Jo("delete"),
        clear: Jo("clear")
    } : {
        add(o) {
            !t && !Nt(o) && !ar(o) && (o = Se(o));
            const i = Se(this);
            return Qo(i).has.call(i, o) || (i.add(o),
            ln(i, "add", o, o)),
            this
        },
        set(o, i) {
            !t && !Nt(i) && !ar(i) && (i = Se(i));
            const s = Se(this)
              , {has: a, get: l} = Qo(s);
            let u = a.call(s, o);
            u || (o = Se(o),
            u = a.call(s, o));
            const c = l.call(s, o);
            return s.set(o, i),
            u ? Et(i, c) && ln(s, "set", o, i) : ln(s, "add", o, i),
            this
        },
        delete(o) {
            const i = Se(this)
              , {has: s, get: a} = Qo(i);
            let l = s.call(i, o);
            l || (o = Se(o),
            l = s.call(i, o)),
            a && a.call(i, o);
            const u = i.delete(o);
            return l && ln(i, "delete", o, void 0),
            u
        },
        clear() {
            const o = Se(this)
              , i = o.size !== 0
              , s = o.clear();
            return i && ln(o, "clear", void 0, void 0),
            s
        }
    }),
    ["keys", "values", "entries", Symbol.iterator].forEach(o => {
        n[o] = rv(o, e, t)
    }
    ),
    n
}
function yl(e, t) {
    const n = ov(e, t);
    return (r, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(Pe(n, o) && o in r ? n : r, o, i)
}
const iv = {
    get: yl(!1, !1)
}
  , sv = {
    get: yl(!1, !0)
}
  , av = {
    get: yl(!0, !1)
};
const zd = new WeakMap
  , Kd = new WeakMap
  , Gd = new WeakMap
  , lv = new WeakMap;
function uv(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function cv(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : uv(Rp(e))
}
function Kr(e) {
    return ar(e) ? e : El(e, !1, ev, iv, zd)
}
function wl(e) {
    return El(e, !1, nv, sv, Kd)
}
function rs(e) {
    return El(e, !0, tv, av, Gd)
}
function El(e, t, n, r, o) {
    if (!$e(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const i = o.get(e);
    if (i)
        return i;
    const s = cv(e);
    if (s === 0)
        return e;
    const a = new Proxy(e,s === 2 ? r : n);
    return o.set(e, a),
    a
}
function Or(e) {
    return ar(e) ? Or(e.__v_raw) : !!(e && e.__v_isReactive)
}
function ar(e) {
    return !!(e && e.__v_isReadonly)
}
function Nt(e) {
    return !!(e && e.__v_isShallow)
}
function Sl(e) {
    return e ? !!e.__v_raw : !1
}
function Se(e) {
    const t = e && e.__v_raw;
    return t ? Se(t) : e
}
function os(e) {
    return !Pe(e, "__v_skip") && Object.isExtensible(e) && Ld(e, "__v_skip", !0),
    e
}
const ft = e => $e(e) ? Kr(e) : e
  , Ea = e => $e(e) ? rs(e) : e;
function et(e) {
    return e ? e.__v_isRef === !0 : !1
}
function le(e) {
    return Yd(e, !1)
}
function is(e) {
    return Yd(e, !0)
}
function Yd(e, t) {
    return et(e) ? e : new fv(e,t)
}
class fv {
    constructor(t, n) {
        this.dep = new ts,
        this.__v_isRef = !0,
        this.__v_isShallow = !1,
        this._rawValue = n ? t : Se(t),
        this._value = n ? t : ft(t),
        this.__v_isShallow = n
    }
    get value() {
        return this.dep.track(),
        this._value
    }
    set value(t) {
        const n = this._rawValue
          , r = this.__v_isShallow || Nt(t) || ar(t);
        t = r ? t : Se(t),
        Et(t, n) && (this._rawValue = t,
        this._value = r ? t : ft(t),
        this.dep.trigger())
    }
}
function Ln(e) {
    return et(e) ? e.value : e
}
const dv = {
    get: (e, t, n) => t === "__v_raw" ? e : Ln(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
        const o = e[t];
        return et(o) && !et(n) ? (o.value = n,
        !0) : Reflect.set(e, t, n, r)
    }
};
function Xd(e) {
    return Or(e) ? e : new Proxy(e,dv)
}
class mv {
    constructor(t) {
        this.__v_isRef = !0,
        this._value = void 0;
        const n = this.dep = new ts
          , {get: r, set: o} = t(n.track.bind(n), n.trigger.bind(n));
        this._get = r,
        this._set = o
    }
    get value() {
        return this._value = this._get()
    }
    set value(t) {
        this._set(t)
    }
}
function Qd(e) {
    return new mv(e)
}
class hv {
    constructor(t, n, r) {
        this._object = t,
        this._key = n,
        this._defaultValue = r,
        this.__v_isRef = !0,
        this._value = void 0
    }
    get value() {
        const t = this._object[this._key];
        return this._value = t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return Gp(Se(this._object), this._key)
    }
}
class gv {
    constructor(t) {
        this._getter = t,
        this.__v_isRef = !0,
        this.__v_isReadonly = !0,
        this._value = void 0
    }
    get value() {
        return this._value = this._getter()
    }
}
function pv(e, t, n) {
    return et(e) ? e : _e(e) ? new gv(e) : $e(e) && arguments.length > 1 ? vv(e, t, n) : le(e)
}
function vv(e, t, n) {
    const r = e[t];
    return et(r) ? r : new hv(e,t,n)
}
class bv {
    constructor(t, n, r) {
        this.fn = t,
        this.setter = n,
        this._value = void 0,
        this.dep = new ts(this),
        this.__v_isRef = !0,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 16,
        this.globalVersion = Ao - 1,
        this.next = void 0,
        this.effect = this,
        this.__v_isReadonly = !n,
        this.isSSR = r
    }
    notify() {
        if (this.flags |= 16,
        !(this.flags & 8) && qe !== this)
            return Fd(this, !0),
            !0
    }
    get value() {
        const t = this.dep.track();
        return Bd(this),
        t && (t.version = this.dep.version),
        this._value
    }
    set value(t) {
        this.setter && this.setter(t)
    }
}
function _v(e, t, n=!1) {
    let r, o;
    return _e(e) ? r = e : (r = e.get,
    o = e.set),
    new bv(r,o,n)
}
const Zo = {}
  , Ti = new WeakMap;
let Xn;
function yv(e, t=!1, n=Xn) {
    if (n) {
        let r = Ti.get(n);
        r || Ti.set(n, r = []),
        r.push(e)
    }
}
function wv(e, t, n=Oe) {
    const {immediate: r, deep: o, once: i, scheduler: s, augmentJob: a, call: l} = n
      , u = p => o ? p : Nt(p) || o === !1 || o === 0 ? un(p, 1) : un(p);
    let c, d, f, m, h = !1, g = !1;
    if (et(e) ? (d = () => e.value,
    h = Nt(e)) : Or(e) ? (d = () => u(e),
    h = !0) : de(e) ? (g = !0,
    h = e.some(p => Or(p) || Nt(p)),
    d = () => e.map(p => {
        if (et(p))
            return p.value;
        if (Or(p))
            return u(p);
        if (_e(p))
            return l ? l(p, 2) : p()
    }
    )) : _e(e) ? t ? d = l ? () => l(e, 2) : e : d = () => {
        if (f) {
            Dn();
            try {
                f()
            } finally {
                qn()
            }
        }
        const p = Xn;
        Xn = c;
        try {
            return l ? l(e, 3, [m]) : e(m)
        } finally {
            Xn = p
        }
    }
    : d = Zt,
    t && o) {
        const p = d
          , C = o === !0 ? 1 / 0 : o;
        d = () => un(p(), C)
    }
    const b = Nd()
      , T = () => {
        c.stop(),
        b && b.active && dl(b.effects, c)
    }
    ;
    if (i && t) {
        const p = t;
        t = (...C) => {
            p(...C),
            T()
        }
    }
    let E = g ? new Array(e.length).fill(Zo) : Zo;
    const v = p => {
        if (!(!(c.flags & 1) || !c.dirty && !p))
            if (t) {
                const C = c.run();
                if (o || h || (g ? C.some( (w, k) => Et(w, E[k])) : Et(C, E))) {
                    f && f();
                    const w = Xn;
                    Xn = c;
                    try {
                        const k = [C, E === Zo ? void 0 : g && E[0] === Zo ? [] : E, m];
                        l ? l(t, 3, k) : t(...k),
                        E = C
                    } finally {
                        Xn = w
                    }
                }
            } else
                c.run()
    }
    ;
    return a && a(v),
    c = new Md(d),
    c.scheduler = s ? () => s(v, !1) : v,
    m = p => yv(p, !1, c),
    f = c.onStop = () => {
        const p = Ti.get(c);
        if (p) {
            if (l)
                l(p, 4);
            else
                for (const C of p)
                    C();
            Ti.delete(c)
        }
    }
    ,
    t ? r ? v(!0) : E = c.run() : s ? s(v.bind(null, !0), !0) : c.run(),
    T.pause = c.pause.bind(c),
    T.resume = c.resume.bind(c),
    T.stop = T,
    T
}
function un(e, t=1 / 0, n) {
    if (t <= 0 || !$e(e) || e.__v_skip || (n = n || new Set,
    n.has(e)))
        return e;
    if (n.add(e),
    t--,
    et(e))
        un(e.value, t, n);
    else if (de(e))
        for (let r = 0; r < e.length; r++)
            un(e[r], t, n);
    else if (Wr(e) || Ar(e))
        e.forEach(r => {
            un(r, t, n)
        }
        );
    else if (Ad(e)) {
        for (const r in e)
            un(e[r], t, n);
        for (const r of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, r) && un(e[r], t, n)
    }
    return e
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Vo(e, t, n, r) {
    try {
        return r ? e(...r) : e()
    } catch (o) {
        ss(o, t, n)
    }
}
function Vt(e, t, n, r) {
    if (_e(e)) {
        const o = Vo(e, t, n, r);
        return o && xd(o) && o.catch(i => {
            ss(i, t, n)
        }
        ),
        o
    }
    if (de(e)) {
        const o = [];
        for (let i = 0; i < e.length; i++)
            o.push(Vt(e[i], t, n, r));
        return o
    }
}
function ss(e, t, n, r=!0) {
    const o = t ? t.vnode : null
      , {errorHandler: i, throwUnhandledErrorInProduction: s} = t && t.appContext.config || Oe;
    if (t) {
        let a = t.parent;
        const l = t.proxy
          , u = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; a; ) {
            const c = a.ec;
            if (c) {
                for (let d = 0; d < c.length; d++)
                    if (c[d](e, l, u) === !1)
                        return
            }
            a = a.parent
        }
        if (i) {
            Dn(),
            Vo(i, null, 10, [e, l, u]),
            qn();
            return
        }
    }
    Ev(e, n, o, r, s)
}
function Ev(e, t, n, r=!0, o=!1) {
    if (o)
        throw e;
    console.error(e)
}
const _t = [];
let Xt = -1;
const Pr = [];
let Sn = null
  , wr = 0;
const Jd = Promise.resolve();
let xi = null;
function mt(e) {
    const t = xi || Jd;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function Sv(e) {
    let t = Xt + 1
      , n = _t.length;
    for (; t < n; ) {
        const r = t + n >>> 1
          , o = _t[r]
          , i = Oo(o);
        i < e || i === e && o.flags & 2 ? t = r + 1 : n = r
    }
    return t
}
function Cl(e) {
    if (!(e.flags & 1)) {
        const t = Oo(e)
          , n = _t[_t.length - 1];
        !n || !(e.flags & 2) && t >= Oo(n) ? _t.push(e) : _t.splice(Sv(t), 0, e),
        e.flags |= 1,
        Zd()
    }
}
function Zd() {
    xi || (xi = Jd.then(tm))
}
function Cv(e) {
    de(e) ? Pr.push(...e) : Sn && e.id === -1 ? Sn.splice(wr + 1, 0, e) : e.flags & 1 || (Pr.push(e),
    e.flags |= 1),
    Zd()
}
function vu(e, t, n=Xt + 1) {
    for (; n < _t.length; n++) {
        const r = _t[n];
        if (r && r.flags & 2) {
            if (e && r.id !== e.uid)
                continue;
            _t.splice(n, 1),
            n--,
            r.flags & 4 && (r.flags &= -2),
            r(),
            r.flags & 4 || (r.flags &= -2)
        }
    }
}
function em(e) {
    if (Pr.length) {
        const t = [...new Set(Pr)].sort( (n, r) => Oo(n) - Oo(r));
        if (Pr.length = 0,
        Sn) {
            Sn.push(...t);
            return
        }
        for (Sn = t,
        wr = 0; wr < Sn.length; wr++) {
            const n = Sn[wr];
            n.flags & 4 && (n.flags &= -2),
            n.flags & 8 || n(),
            n.flags &= -2
        }
        Sn = null,
        wr = 0
    }
}
const Oo = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function tm(e) {
    try {
        for (Xt = 0; Xt < _t.length; Xt++) {
            const t = _t[Xt];
            t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2),
            Vo(t, t.i, t.i ? 15 : 14),
            t.flags & 4 || (t.flags &= -2))
        }
    } finally {
        for (; Xt < _t.length; Xt++) {
            const t = _t[Xt];
            t && (t.flags &= -2)
        }
        Xt = -1,
        _t.length = 0,
        em(),
        xi = null,
        (_t.length || Pr.length) && tm()
    }
}
let rt = null
  , nm = null;
function ki(e) {
    const t = rt;
    return rt = e,
    nm = e && e.type.__scopeId || null,
    t
}
function Tv(e, t=rt, n) {
    if (!t || e._n)
        return e;
    const r = (...o) => {
        r._d && Au(-1);
        const i = ki(t);
        let s;
        try {
            s = e(...o)
        } finally {
            ki(i),
            r._d && Au(1)
        }
        return s
    }
    ;
    return r._n = !0,
    r._c = !0,
    r._d = !0,
    r
}
function Tl(e, t) {
    if (rt === null)
        return e;
    const n = ms(rt)
      , r = e.dirs || (e.dirs = []);
    for (let o = 0; o < t.length; o++) {
        let[i,s,a,l=Oe] = t[o];
        i && (_e(i) && (i = {
            mounted: i,
            updated: i
        }),
        i.deep && un(s),
        r.push({
            dir: i,
            instance: n,
            value: s,
            oldValue: void 0,
            arg: a,
            modifiers: l
        }))
    }
    return e
}
function Vn(e, t, n, r) {
    const o = e.dirs
      , i = t && t.dirs;
    for (let s = 0; s < o.length; s++) {
        const a = o[s];
        i && (a.oldValue = i[s].value);
        let l = a.dir[r];
        l && (Dn(),
        Vt(l, n, 8, [e.el, a, e, t]),
        qn())
    }
}
const rm = Symbol("_vte")
  , om = e => e.__isTeleport
  , yo = e => e && (e.disabled || e.disabled === "")
  , bu = e => e && (e.defer || e.defer === "")
  , _u = e => typeof SVGElement < "u" && e instanceof SVGElement
  , yu = e => typeof MathMLElement == "function" && e instanceof MathMLElement
  , Sa = (e, t) => {
    const n = e && e.to;
    return He(n) ? t ? t(n) : null : n
}
  , im = {
    name: "Teleport",
    __isTeleport: !0,
    process(e, t, n, r, o, i, s, a, l, u) {
        const {mc: c, pc: d, pbc: f, o: {insert: m, querySelector: h, createText: g, createComment: b}} = u
          , T = yo(t.props);
        let {shapeFlag: E, children: v, dynamicChildren: p} = t;
        if (e == null) {
            const C = t.el = g("")
              , w = t.anchor = g("");
            m(C, n, r),
            m(w, n, r);
            const k = (A, R) => {
                E & 16 && (o && o.isCE && (o.ce._teleportTarget = A),
                c(v, A, R, o, i, s, a, l))
            }
              , P = () => {
                const A = t.target = Sa(t.props, h)
                  , R = sm(A, t, g, m);
                A && (s !== "svg" && _u(A) ? s = "svg" : s !== "mathml" && yu(A) && (s = "mathml"),
                T || (k(A, R),
                mi(t, !1)))
            }
            ;
            T && (k(n, w),
            mi(t, !0)),
            bu(t.props) ? Je( () => {
                P(),
                t.el.__isMounted = !0
            }
            , i) : P()
        } else {
            if (bu(t.props) && !e.el.__isMounted) {
                Je( () => {
                    im.process(e, t, n, r, o, i, s, a, l, u),
                    delete e.el.__isMounted
                }
                , i);
                return
            }
            t.el = e.el,
            t.targetStart = e.targetStart;
            const C = t.anchor = e.anchor
              , w = t.target = e.target
              , k = t.targetAnchor = e.targetAnchor
              , P = yo(e.props)
              , A = P ? n : w
              , R = P ? C : k;
            if (s === "svg" || _u(w) ? s = "svg" : (s === "mathml" || yu(w)) && (s = "mathml"),
            p ? (f(e.dynamicChildren, p, A, o, i, s, a),
            Pl(e, t, !0)) : l || d(e, t, A, R, o, i, s, a, !1),
            T)
                P ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ei(t, n, C, u, 1);
            else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                const q = t.target = Sa(t.props, h);
                q && ei(t, q, null, u, 0)
            } else
                P && ei(t, w, k, u, 1);
            mi(t, T)
        }
    },
    remove(e, t, n, {um: r, o: {remove: o}}, i) {
        const {shapeFlag: s, children: a, anchor: l, targetStart: u, targetAnchor: c, target: d, props: f} = e;
        if (d && (o(u),
        o(c)),
        i && o(l),
        s & 16) {
            const m = i || !yo(f);
            for (let h = 0; h < a.length; h++) {
                const g = a[h];
                r(g, t, n, m, !!g.dynamicChildren)
            }
        }
    },
    move: ei,
    hydrate: xv
};
function ei(e, t, n, {o: {insert: r}, m: o}, i=2) {
    i === 0 && r(e.targetAnchor, t, n);
    const {el: s, anchor: a, shapeFlag: l, children: u, props: c} = e
      , d = i === 2;
    if (d && r(s, t, n),
    (!d || yo(c)) && l & 16)
        for (let f = 0; f < u.length; f++)
            o(u[f], t, n, 2);
    d && r(a, t, n)
}
function xv(e, t, n, r, o, i, {o: {nextSibling: s, parentNode: a, querySelector: l, insert: u, createText: c}}, d) {
    const f = t.target = Sa(t.props, l);
    if (f) {
        const m = yo(t.props)
          , h = f._lpa || f.firstChild;
        if (t.shapeFlag & 16)
            if (m)
                t.anchor = d(s(e), t, a(e), n, r, o, i),
                t.targetStart = h,
                t.targetAnchor = h && s(h);
            else {
                t.anchor = s(e);
                let g = h;
                for (; g; ) {
                    if (g && g.nodeType === 8) {
                        if (g.data === "teleport start anchor")
                            t.targetStart = g;
                        else if (g.data === "teleport anchor") {
                            t.targetAnchor = g,
                            f._lpa = t.targetAnchor && s(t.targetAnchor);
                            break
                        }
                    }
                    g = s(g)
                }
                t.targetAnchor || sm(f, t, c, u),
                d(h && s(h), t, f, n, r, o, i)
            }
        mi(t, m)
    }
    return t.anchor && s(t.anchor)
}
const kv = im;
function mi(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
        let r, o;
        for (t ? (r = e.el,
        o = e.anchor) : (r = e.targetStart,
        o = e.targetAnchor); r && r !== o; )
            r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid),
            r = r.nextSibling;
        n.ut()
    }
}
function sm(e, t, n, r) {
    const o = t.targetStart = n("")
      , i = t.targetAnchor = n("");
    return o[rm] = i,
    e && (r(o, e),
    r(i, e)),
    i
}
const Cn = Symbol("_leaveCb")
  , ti = Symbol("_enterCb");
function am() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return Tt( () => {
        e.isMounted = !0
    }
    ),
    Qe( () => {
        e.isUnmounting = !0
    }
    ),
    e
}
const Lt = [Function, Array]
  , lm = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: Lt,
    onEnter: Lt,
    onAfterEnter: Lt,
    onEnterCancelled: Lt,
    onBeforeLeave: Lt,
    onLeave: Lt,
    onAfterLeave: Lt,
    onLeaveCancelled: Lt,
    onBeforeAppear: Lt,
    onAppear: Lt,
    onAfterAppear: Lt,
    onAppearCancelled: Lt
}
  , um = e => {
    const t = e.subTree;
    return t.component ? um(t.component) : t
}
  , Av = {
    name: "BaseTransition",
    props: lm,
    setup(e, {slots: t}) {
        const n = Te()
          , r = am();
        return () => {
            const o = t.default && xl(t.default(), !0);
            if (!o || !o.length)
                return;
            const i = cm(o)
              , s = Se(e)
              , {mode: a} = s;
            if (r.isLeaving)
                return js(i);
            const l = wu(i);
            if (!l)
                return js(i);
            let u = Po(l, s, r, n, d => u = d);
            l.type !== ht && Rn(l, u);
            let c = n.subTree && wu(n.subTree);
            if (c && c.type !== ht && !An(l, c) && um(n).type !== ht) {
                let d = Po(c, s, r, n);
                if (Rn(c, d),
                a === "out-in" && l.type !== ht)
                    return r.isLeaving = !0,
                    d.afterLeave = () => {
                        r.isLeaving = !1,
                        n.job.flags & 8 || n.update(),
                        delete d.afterLeave,
                        c = void 0
                    }
                    ,
                    js(i);
                a === "in-out" && l.type !== ht ? d.delayLeave = (f, m, h) => {
                    const g = fm(r, c);
                    g[String(c.key)] = c,
                    f[Cn] = () => {
                        m(),
                        f[Cn] = void 0,
                        delete u.delayedLeave,
                        c = void 0
                    }
                    ,
                    u.delayedLeave = () => {
                        h(),
                        delete u.delayedLeave,
                        c = void 0
                    }
                }
                : c = void 0
            } else
                c && (c = void 0);
            return i
        }
    }
};
function cm(e) {
    let t = e[0];
    if (e.length > 1) {
        for (const n of e)
            if (n.type !== ht) {
                t = n;
                break
            }
    }
    return t
}
const Lv = Av;
function fm(e, t) {
    const {leavingVNodes: n} = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null),
    n.set(t.type, r)),
    r
}
function Po(e, t, n, r, o) {
    const {appear: i, mode: s, persisted: a=!1, onBeforeEnter: l, onEnter: u, onAfterEnter: c, onEnterCancelled: d, onBeforeLeave: f, onLeave: m, onAfterLeave: h, onLeaveCancelled: g, onBeforeAppear: b, onAppear: T, onAfterAppear: E, onAppearCancelled: v} = t
      , p = String(e.key)
      , C = fm(n, e)
      , w = (A, R) => {
        A && Vt(A, r, 9, R)
    }
      , k = (A, R) => {
        const q = R[1];
        w(A, R),
        de(A) ? A.every(L => L.length <= 1) && q() : A.length <= 1 && q()
    }
      , P = {
        mode: s,
        persisted: a,
        beforeEnter(A) {
            let R = l;
            if (!n.isMounted)
                if (i)
                    R = b || l;
                else
                    return;
            A[Cn] && A[Cn](!0);
            const q = C[p];
            q && An(e, q) && q.el[Cn] && q.el[Cn](),
            w(R, [A])
        },
        enter(A) {
            let R = u
              , q = c
              , L = d;
            if (!n.isMounted)
                if (i)
                    R = T || u,
                    q = E || c,
                    L = v || d;
                else
                    return;
            let H = !1;
            const F = A[ti] = ee => {
                H || (H = !0,
                ee ? w(L, [A]) : w(q, [A]),
                P.delayedLeave && P.delayedLeave(),
                A[ti] = void 0)
            }
            ;
            R ? k(R, [A, F]) : F()
        },
        leave(A, R) {
            const q = String(e.key);
            if (A[ti] && A[ti](!0),
            n.isUnmounting)
                return R();
            w(f, [A]);
            let L = !1;
            const H = A[Cn] = F => {
                L || (L = !0,
                R(),
                F ? w(g, [A]) : w(h, [A]),
                A[Cn] = void 0,
                C[q] === e && delete C[q])
            }
            ;
            C[q] = e,
            m ? k(m, [A, H]) : H()
        },
        clone(A) {
            const R = Po(A, t, n, r, o);
            return o && o(R),
            R
        }
    };
    return P
}
function js(e) {
    if (as(e))
        return e = mn(e),
        e.children = null,
        e
}
function wu(e) {
    if (!as(e))
        return om(e.type) && e.children ? cm(e.children) : e;
    const {shapeFlag: t, children: n} = e;
    if (n) {
        if (t & 16)
            return n[0];
        if (t & 32 && _e(n.default))
            return n.default()
    }
}
function Rn(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t,
    Rn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent),
    e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function xl(e, t=!1, n) {
    let r = []
      , o = 0;
    for (let i = 0; i < e.length; i++) {
        let s = e[i];
        const a = n == null ? s.key : String(n) + String(s.key != null ? s.key : i);
        s.type === dt ? (s.patchFlag & 128 && o++,
        r = r.concat(xl(s.children, t, a))) : (t || s.type !== ht) && r.push(a != null ? mn(s, {
            key: a
        }) : s)
    }
    if (o > 1)
        for (let i = 0; i < r.length; i++)
            r[i].patchFlag = -2;
    return r
}
/*! #__NO_SIDE_EFFECTS__ */
function Gr(e, t) {
    return _e(e) ? Ke({
        name: e.name
    }, t, {
        setup: e
    }) : e
}
function dm(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}
function Ai(e, t, n, r, o=!1) {
    if (de(e)) {
        e.forEach( (h, g) => Ai(h, t && (de(t) ? t[g] : t), n, r, o));
        return
    }
    if (er(r) && !o) {
        r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Ai(e, t, n, r.component.subTree);
        return
    }
    const i = r.shapeFlag & 4 ? ms(r.component) : r.el
      , s = o ? null : i
      , {i: a, r: l} = e
      , u = t && t.r
      , c = a.refs === Oe ? a.refs = {} : a.refs
      , d = a.setupState
      , f = Se(d)
      , m = d === Oe ? () => !1 : h => Pe(f, h);
    if (u != null && u !== l && (He(u) ? (c[u] = null,
    m(u) && (d[u] = null)) : et(u) && (u.value = null)),
    _e(l))
        Vo(l, a, 12, [s, c]);
    else {
        const h = He(l)
          , g = et(l);
        if (h || g) {
            const b = () => {
                if (e.f) {
                    const T = h ? m(l) ? d[l] : c[l] : l.value;
                    o ? de(T) && dl(T, i) : de(T) ? T.includes(i) || T.push(i) : h ? (c[l] = [i],
                    m(l) && (d[l] = c[l])) : (l.value = [i],
                    e.k && (c[e.k] = l.value))
                } else
                    h ? (c[l] = s,
                    m(l) && (d[l] = s)) : g && (l.value = s,
                    e.k && (c[e.k] = s))
            }
            ;
            s ? (b.id = -1,
            Je(b, n)) : b()
        }
    }
}
es().requestIdleCallback;
es().cancelIdleCallback;
const er = e => !!e.type.__asyncLoader
  , as = e => e.type.__isKeepAlive
  , Ov = {
    name: "KeepAlive",
    __isKeepAlive: !0,
    props: {
        include: [String, RegExp, Array],
        exclude: [String, RegExp, Array],
        max: [String, Number]
    },
    setup(e, {slots: t}) {
        const n = Te()
          , r = n.ctx;
        if (!r.renderer)
            return () => {
                const E = t.default && t.default();
                return E && E.length === 1 ? E[0] : E
            }
            ;
        const o = new Map
          , i = new Set;
        let s = null;
        const a = n.suspense
          , {renderer: {p: l, m: u, um: c, o: {createElement: d}}} = r
          , f = d("div");
        r.activate = (E, v, p, C, w) => {
            const k = E.component;
            u(E, v, p, 0, a),
            l(k.vnode, E, v, p, k, a, C, E.slotScopeIds, w),
            Je( () => {
                k.isDeactivated = !1,
                k.a && Lr(k.a);
                const P = E.props && E.props.onVnodeMounted;
                P && Pt(P, k.parent, E)
            }
            , a)
        }
        ,
        r.deactivate = E => {
            const v = E.component;
            Pi(v.m),
            Pi(v.a),
            u(E, f, null, 1, a),
            Je( () => {
                v.da && Lr(v.da);
                const p = E.props && E.props.onVnodeUnmounted;
                p && Pt(p, v.parent, E),
                v.isDeactivated = !0
            }
            , a)
        }
        ;
        function m(E) {
            Us(E),
            c(E, n, a, !0)
        }
        function h(E) {
            o.forEach( (v, p) => {
                const C = Pa(v.type);
                C && !E(C) && g(p)
            }
            )
        }
        function g(E) {
            const v = o.get(E);
            v && (!s || !An(v, s)) ? m(v) : s && Us(s),
            o.delete(E),
            i.delete(E)
        }
        ve( () => [e.include, e.exclude], ([E,v]) => {
            E && h(p => ho(E, p)),
            v && h(p => !ho(v, p))
        }
        , {
            flush: "post",
            deep: !0
        });
        let b = null;
        const T = () => {
            b != null && (Ri(n.subTree.type) ? Je( () => {
                o.set(b, ni(n.subTree))
            }
            , n.subTree.suspense) : o.set(b, ni(n.subTree)))
        }
        ;
        return Tt(T),
        Al(T),
        Qe( () => {
            o.forEach(E => {
                const {subTree: v, suspense: p} = n
                  , C = ni(v);
                if (E.type === C.type && E.key === C.key) {
                    Us(C);
                    const w = C.component.da;
                    w && Je(w, p);
                    return
                }
                m(E)
            }
            )
        }
        ),
        () => {
            if (b = null,
            !t.default)
                return s = null;
            const E = t.default()
              , v = E[0];
            if (E.length > 1)
                return s = null,
                E;
            if (!Mr(v) || !(v.shapeFlag & 4) && !(v.shapeFlag & 128))
                return s = null,
                v;
            let p = ni(v);
            if (p.type === ht)
                return s = null,
                p;
            const C = p.type
              , w = Pa(er(p) ? p.type.__asyncResolved || {} : C)
              , {include: k, exclude: P, max: A} = e;
            if (k && (!w || !ho(k, w)) || P && w && ho(P, w))
                return p.shapeFlag &= -257,
                s = p,
                v;
            const R = p.key == null ? C : p.key
              , q = o.get(R);
            return p.el && (p = mn(p),
            v.shapeFlag & 128 && (v.ssContent = p)),
            b = R,
            q ? (p.el = q.el,
            p.component = q.component,
            p.transition && Rn(p, p.transition),
            p.shapeFlag |= 512,
            i.delete(R),
            i.add(R)) : (i.add(R),
            A && i.size > parseInt(A, 10) && g(i.values().next().value)),
            p.shapeFlag |= 256,
            s = p,
            Ri(v.type) ? v : p
        }
    }
}
  , Pv = Ov;
function ho(e, t) {
    return de(e) ? e.some(n => ho(n, t)) : He(e) ? e.split(",").includes(t) : Pp(e) ? (e.lastIndex = 0,
    e.test(t)) : !1
}
function mm(e, t) {
    hm(e, "a", t)
}
function ls(e, t) {
    hm(e, "da", t)
}
function hm(e, t, n=at) {
    const r = e.__wdc || (e.__wdc = () => {
        let o = n;
        for (; o; ) {
            if (o.isDeactivated)
                return;
            o = o.parent
        }
        return e()
    }
    );
    if (us(t, r, n),
    n) {
        let o = n.parent;
        for (; o && o.parent; )
            as(o.parent.vnode) && Rv(r, t, n, o),
            o = o.parent
    }
}
function Rv(e, t, n, r) {
    const o = us(t, e, r, !0);
    cs( () => {
        dl(r[t], o)
    }
    , n)
}
function Us(e) {
    e.shapeFlag &= -257,
    e.shapeFlag &= -513
}
function ni(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}
function us(e, t, n=at, r=!1) {
    if (n) {
        const o = n[e] || (n[e] = [])
          , i = t.__weh || (t.__weh = (...s) => {
            Dn();
            const a = Wo(n)
              , l = Vt(t, n, e, s);
            return a(),
            qn(),
            l
        }
        );
        return r ? o.unshift(i) : o.push(i),
        i
    }
}
const pn = e => (t, n=at) => {
    (!Io || e === "sp") && us(e, (...r) => t(...r), n)
}
  , kl = pn("bm")
  , Tt = pn("m")
  , gm = pn("bu")
  , Al = pn("u")
  , Qe = pn("bum")
  , cs = pn("um")
  , Iv = pn("sp")
  , Nv = pn("rtg")
  , Mv = pn("rtc");
function $v(e, t=at) {
    us("ec", e, t)
}
const pm = "components";
function jA(e, t) {
    return bm(pm, e, !0, t) || e
}
const vm = Symbol.for("v-ndc");
function UA(e) {
    return He(e) ? bm(pm, e, !1) || e : e || vm
}
function bm(e, t, n=!0, r=!1) {
    const o = rt || at;
    if (o) {
        const i = o.type;
        {
            const a = Pa(i, !1);
            if (a && (a === t || a === At(t) || a === Zi(At(t))))
                return i
        }
        const s = Eu(o[e] || i[e], t) || Eu(o.appContext[e], t);
        return !s && r ? i : s
    }
}
function Eu(e, t) {
    return e && (e[t] || e[At(t)] || e[Zi(At(t))])
}
function VA(e, t, n, r) {
    let o;
    const i = n
      , s = de(e);
    if (s || He(e)) {
        const a = s && Or(e);
        let l = !1;
        a && (l = !Nt(e),
        e = ns(e)),
        o = new Array(e.length);
        for (let u = 0, c = e.length; u < c; u++)
            o[u] = t(l ? ft(e[u]) : e[u], u, void 0, i)
    } else if (typeof e == "number") {
        o = new Array(e);
        for (let a = 0; a < e; a++)
            o[a] = t(a + 1, a, void 0, i)
    } else if ($e(e))
        if (e[Symbol.iterator])
            o = Array.from(e, (a, l) => t(a, l, void 0, i));
        else {
            const a = Object.keys(e);
            o = new Array(a.length);
            for (let l = 0, u = a.length; l < u; l++) {
                const c = a[l];
                o[l] = t(e[c], c, l, i)
            }
        }
    else
        o = [];
    return o
}
function HA(e, t, n={}, r, o) {
    if (rt.ce || rt.parent && er(rt.parent) && rt.parent.ce)
        return t !== "default" && (n.name = t),
        Aa(),
        La(dt, null, [gt("slot", n, r)], 64);
    let i = e[t];
    i && i._c && (i._d = !1),
    Aa();
    const s = i && _m(i(n))
      , a = n.key || s && s.key
      , l = La(dt, {
        key: (a && !Ut(a) ? a : `_${t}`) + (!s && r ? "_fb" : "")
    }, s || [], s && e._ === 1 ? 64 : -2);
    return i && i._c && (i._d = !0),
    l
}
function _m(e) {
    return e.some(t => Mr(t) ? !(t.type === ht || t.type === dt && !_m(t.children)) : !0) ? e : null
}
const Ca = e => e ? Dm(e) ? ms(e) : Ca(e.parent) : null
  , wo = Ke(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => Ca(e.parent),
    $root: e => Ca(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => Ll(e),
    $forceUpdate: e => e.f || (e.f = () => {
        Cl(e.update)
    }
    ),
    $nextTick: e => e.n || (e.n = mt.bind(e.proxy)),
    $watch: e => ib.bind(e)
})
  , Vs = (e, t) => e !== Oe && !e.__isScriptSetup && Pe(e, t)
  , Fv = {
    get({_: e}, t) {
        if (t === "__v_skip")
            return !0;
        const {ctx: n, setupState: r, data: o, props: i, accessCache: s, type: a, appContext: l} = e;
        let u;
        if (t[0] !== "$") {
            const m = s[t];
            if (m !== void 0)
                switch (m) {
                case 1:
                    return r[t];
                case 2:
                    return o[t];
                case 4:
                    return n[t];
                case 3:
                    return i[t]
                }
            else {
                if (Vs(r, t))
                    return s[t] = 1,
                    r[t];
                if (o !== Oe && Pe(o, t))
                    return s[t] = 2,
                    o[t];
                if ((u = e.propsOptions[0]) && Pe(u, t))
                    return s[t] = 3,
                    i[t];
                if (n !== Oe && Pe(n, t))
                    return s[t] = 4,
                    n[t];
                Ta && (s[t] = 0)
            }
        }
        const c = wo[t];
        let d, f;
        if (c)
            return t === "$attrs" && ct(e.attrs, "get", ""),
            c(e);
        if ((d = a.__cssModules) && (d = d[t]))
            return d;
        if (n !== Oe && Pe(n, t))
            return s[t] = 4,
            n[t];
        if (f = l.config.globalProperties,
        Pe(f, t))
            return f[t]
    },
    set({_: e}, t, n) {
        const {data: r, setupState: o, ctx: i} = e;
        return Vs(o, t) ? (o[t] = n,
        !0) : r !== Oe && Pe(r, t) ? (r[t] = n,
        !0) : Pe(e.props, t) || t[0] === "$" && t.slice(1)in e ? !1 : (i[t] = n,
        !0)
    },
    has({_: {data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: i}}, s) {
        let a;
        return !!n[s] || e !== Oe && Pe(e, s) || Vs(t, s) || (a = i[0]) && Pe(a, s) || Pe(r, s) || Pe(wo, s) || Pe(o.config.globalProperties, s)
    },
    defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : Pe(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
    }
};
function Li(e) {
    return de(e) ? e.reduce( (t, n) => (t[n] = null,
    t), {}) : e
}
function WA(e, t) {
    return !e || !t ? e || t : de(e) && de(t) ? e.concat(t) : Ke({}, Li(e), Li(t))
}
let Ta = !0;
function Dv(e) {
    const t = Ll(e)
      , n = e.proxy
      , r = e.ctx;
    Ta = !1,
    t.beforeCreate && Su(t.beforeCreate, e, "bc");
    const {data: o, computed: i, methods: s, watch: a, provide: l, inject: u, created: c, beforeMount: d, mounted: f, beforeUpdate: m, updated: h, activated: g, deactivated: b, beforeDestroy: T, beforeUnmount: E, destroyed: v, unmounted: p, render: C, renderTracked: w, renderTriggered: k, errorCaptured: P, serverPrefetch: A, expose: R, inheritAttrs: q, components: L, directives: H, filters: F} = t;
    if (u && qv(u, r, null),
    s)
        for (const z in s) {
            const K = s[z];
            _e(K) && (r[z] = K.bind(n))
        }
    if (o) {
        const z = o.call(n, n);
        $e(z) && (e.data = Kr(z))
    }
    if (Ta = !0,
    i)
        for (const z in i) {
            const K = i[z]
              , ae = _e(K) ? K.bind(n, n) : _e(K.get) ? K.get.bind(n, n) : Zt
              , ue = !_e(K) && _e(K.set) ? K.set.bind(n) : Zt
              , ce = O({
                get: ae,
                set: ue
            });
            Object.defineProperty(r, z, {
                enumerable: !0,
                configurable: !0,
                get: () => ce.value,
                set: X => ce.value = X
            })
        }
    if (a)
        for (const z in a)
            ym(a[z], r, n, z);
    if (l) {
        const z = _e(l) ? l.call(n) : l;
        Reflect.ownKeys(z).forEach(K => {
            Eo(K, z[K])
        }
        )
    }
    c && Su(c, e, "c");
    function ne(z, K) {
        de(K) ? K.forEach(ae => z(ae.bind(n))) : K && z(K.bind(n))
    }
    if (ne(kl, d),
    ne(Tt, f),
    ne(gm, m),
    ne(Al, h),
    ne(mm, g),
    ne(ls, b),
    ne($v, P),
    ne(Mv, w),
    ne(Nv, k),
    ne(Qe, E),
    ne(cs, p),
    ne(Iv, A),
    de(R))
        if (R.length) {
            const z = e.exposed || (e.exposed = {});
            R.forEach(K => {
                Object.defineProperty(z, K, {
                    get: () => n[K],
                    set: ae => n[K] = ae
                })
            }
            )
        } else
            e.exposed || (e.exposed = {});
    C && e.render === Zt && (e.render = C),
    q != null && (e.inheritAttrs = q),
    L && (e.components = L),
    H && (e.directives = H),
    A && dm(e)
}
function qv(e, t, n=Zt) {
    de(e) && (e = xa(e));
    for (const r in e) {
        const o = e[r];
        let i;
        $e(o) ? "default"in o ? i = yt(o.from || r, o.default, !0) : i = yt(o.from || r) : i = yt(o),
        et(i) ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: s => i.value = s
        }) : t[r] = i
    }
}
function Su(e, t, n) {
    Vt(de(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function ym(e, t, n, r) {
    let o = r.includes(".") ? Rm(n, r) : () => n[r];
    if (He(e)) {
        const i = t[e];
        _e(i) && ve(o, i)
    } else if (_e(e))
        ve(o, e.bind(n));
    else if ($e(e))
        if (de(e))
            e.forEach(i => ym(i, t, n, r));
        else {
            const i = _e(e.handler) ? e.handler.bind(n) : t[e.handler];
            _e(i) && ve(o, i, e)
        }
}
function Ll(e) {
    const t = e.type
      , {mixins: n, extends: r} = t
      , {mixins: o, optionsCache: i, config: {optionMergeStrategies: s}} = e.appContext
      , a = i.get(t);
    let l;
    return a ? l = a : !o.length && !n && !r ? l = t : (l = {},
    o.length && o.forEach(u => Oi(l, u, s, !0)),
    Oi(l, t, s)),
    $e(t) && i.set(t, l),
    l
}
function Oi(e, t, n, r=!1) {
    const {mixins: o, extends: i} = t;
    i && Oi(e, i, n, !0),
    o && o.forEach(s => Oi(e, s, n, !0));
    for (const s in t)
        if (!(r && s === "expose")) {
            const a = Bv[s] || n && n[s];
            e[s] = a ? a(e[s], t[s]) : t[s]
        }
    return e
}
const Bv = {
    data: Cu,
    props: Tu,
    emits: Tu,
    methods: go,
    computed: go,
    beforeCreate: pt,
    created: pt,
    beforeMount: pt,
    mounted: pt,
    beforeUpdate: pt,
    updated: pt,
    beforeDestroy: pt,
    beforeUnmount: pt,
    destroyed: pt,
    unmounted: pt,
    activated: pt,
    deactivated: pt,
    errorCaptured: pt,
    serverPrefetch: pt,
    components: go,
    directives: go,
    watch: Uv,
    provide: Cu,
    inject: jv
};
function Cu(e, t) {
    return t ? e ? function() {
        return Ke(_e(e) ? e.call(this, this) : e, _e(t) ? t.call(this, this) : t)
    }
    : t : e
}
function jv(e, t) {
    return go(xa(e), xa(t))
}
function xa(e) {
    if (de(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++)
            t[e[n]] = e[n];
        return t
    }
    return e
}
function pt(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function go(e, t) {
    return e ? Ke(Object.create(null), e, t) : t
}
function Tu(e, t) {
    return e ? de(e) && de(t) ? [...new Set([...e, ...t])] : Ke(Object.create(null), Li(e), Li(t ?? {})) : t
}
function Uv(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const n = Ke(Object.create(null), e);
    for (const r in t)
        n[r] = pt(e[r], t[r]);
    return n
}
function wm() {
    return {
        app: null,
        config: {
            isNativeTag: Lp,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let Vv = 0;
function Hv(e, t) {
    return function(r, o=null) {
        _e(r) || (r = Ke({}, r)),
        o != null && !$e(o) && (o = null);
        const i = wm()
          , s = new WeakSet
          , a = [];
        let l = !1;
        const u = i.app = {
            _uid: Vv++,
            _component: r,
            _props: o,
            _container: null,
            _context: i,
            _instance: null,
            version: Tb,
            get config() {
                return i.config
            },
            set config(c) {},
            use(c, ...d) {
                return s.has(c) || (c && _e(c.install) ? (s.add(c),
                c.install(u, ...d)) : _e(c) && (s.add(c),
                c(u, ...d))),
                u
            },
            mixin(c) {
                return i.mixins.includes(c) || i.mixins.push(c),
                u
            },
            component(c, d) {
                return d ? (i.components[c] = d,
                u) : i.components[c]
            },
            directive(c, d) {
                return d ? (i.directives[c] = d,
                u) : i.directives[c]
            },
            mount(c, d, f) {
                if (!l) {
                    const m = u._ceVNode || gt(r, o);
                    return m.appContext = i,
                    f === !0 ? f = "svg" : f === !1 && (f = void 0),
                    d && t ? t(m, c) : e(m, c, f),
                    l = !0,
                    u._container = c,
                    c.__vue_app__ = u,
                    ms(m.component)
                }
            },
            onUnmount(c) {
                a.push(c)
            },
            unmount() {
                l && (Vt(a, u._instance, 16),
                e(null, u._container),
                delete u._container.__vue_app__)
            },
            provide(c, d) {
                return i.provides[c] = d,
                u
            },
            runWithContext(c) {
                const d = Rr;
                Rr = u;
                try {
                    return c()
                } finally {
                    Rr = d
                }
            }
        };
        return u
    }
}
let Rr = null;
function Eo(e, t) {
    if (at) {
        let n = at.provides;
        const r = at.parent && at.parent.provides;
        r === n && (n = at.provides = Object.create(r)),
        n[e] = t
    }
}
function yt(e, t, n=!1) {
    const r = at || rt;
    if (r || Rr) {
        const o = Rr ? Rr._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
        if (o && e in o)
            return o[e];
        if (arguments.length > 1)
            return n && _e(t) ? t.call(r && r.proxy) : t
    }
}
const Em = {}
  , Sm = () => Object.create(Em)
  , Cm = e => Object.getPrototypeOf(e) === Em;
function Wv(e, t, n, r=!1) {
    const o = {}
      , i = Sm();
    e.propsDefaults = Object.create(null),
    Tm(e, t, o, i);
    for (const s in e.propsOptions[0])
        s in o || (o[s] = void 0);
    n ? e.props = r ? o : wl(o) : e.type.props ? e.props = o : e.props = i,
    e.attrs = i
}
function zv(e, t, n, r) {
    const {props: o, attrs: i, vnode: {patchFlag: s}} = e
      , a = Se(o)
      , [l] = e.propsOptions;
    let u = !1;
    if ((r || s > 0) && !(s & 16)) {
        if (s & 8) {
            const c = e.vnode.dynamicProps;
            for (let d = 0; d < c.length; d++) {
                let f = c[d];
                if (ds(e.emitsOptions, f))
                    continue;
                const m = t[f];
                if (l)
                    if (Pe(i, f))
                        m !== i[f] && (i[f] = m,
                        u = !0);
                    else {
                        const h = At(f);
                        o[h] = ka(l, a, h, m, e, !1)
                    }
                else
                    m !== i[f] && (i[f] = m,
                    u = !0)
            }
        }
    } else {
        Tm(e, t, o, i) && (u = !0);
        let c;
        for (const d in a)
            (!t || !Pe(t, d) && ((c = gn(d)) === d || !Pe(t, c))) && (l ? n && (n[d] !== void 0 || n[c] !== void 0) && (o[d] = ka(l, a, d, void 0, e, !0)) : delete o[d]);
        if (i !== a)
            for (const d in i)
                (!t || !Pe(t, d)) && (delete i[d],
                u = !0)
    }
    u && ln(e.attrs, "set", "")
}
function Tm(e, t, n, r) {
    const [o,i] = e.propsOptions;
    let s = !1, a;
    if (t)
        for (let l in t) {
            if (vo(l))
                continue;
            const u = t[l];
            let c;
            o && Pe(o, c = At(l)) ? !i || !i.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : ds(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u,
            s = !0)
        }
    if (i) {
        const l = Se(n)
          , u = a || Oe;
        for (let c = 0; c < i.length; c++) {
            const d = i[c];
            n[d] = ka(o, l, d, u[d], e, !Pe(u, d))
        }
    }
    return s
}
function ka(e, t, n, r, o, i) {
    const s = e[n];
    if (s != null) {
        const a = Pe(s, "default");
        if (a && r === void 0) {
            const l = s.default;
            if (s.type !== Function && !s.skipFactory && _e(l)) {
                const {propsDefaults: u} = o;
                if (n in u)
                    r = u[n];
                else {
                    const c = Wo(o);
                    r = u[n] = l.call(null, t),
                    c()
                }
            } else
                r = l;
            o.ce && o.ce._setProp(n, r)
        }
        s[0] && (i && !a ? r = !1 : s[1] && (r === "" || r === gn(n)) && (r = !0))
    }
    return r
}
const Kv = new WeakMap;
function xm(e, t, n=!1) {
    const r = n ? Kv : t.propsCache
      , o = r.get(e);
    if (o)
        return o;
    const i = e.props
      , s = {}
      , a = [];
    let l = !1;
    if (!_e(e)) {
        const c = d => {
            l = !0;
            const [f,m] = xm(d, t, !0);
            Ke(s, f),
            m && a.push(...m)
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(c),
        e.extends && c(e.extends),
        e.mixins && e.mixins.forEach(c)
    }
    if (!i && !l)
        return $e(e) && r.set(e, kr),
        kr;
    if (de(i))
        for (let c = 0; c < i.length; c++) {
            const d = At(i[c]);
            xu(d) && (s[d] = Oe)
        }
    else if (i)
        for (const c in i) {
            const d = At(c);
            if (xu(d)) {
                const f = i[c]
                  , m = s[d] = de(f) || _e(f) ? {
                    type: f
                } : Ke({}, f)
                  , h = m.type;
                let g = !1
                  , b = !0;
                if (de(h))
                    for (let T = 0; T < h.length; ++T) {
                        const E = h[T]
                          , v = _e(E) && E.name;
                        if (v === "Boolean") {
                            g = !0;
                            break
                        } else
                            v === "String" && (b = !1)
                    }
                else
                    g = _e(h) && h.name === "Boolean";
                m[0] = g,
                m[1] = b,
                (g || Pe(m, "default")) && a.push(d)
            }
        }
    const u = [s, a];
    return $e(e) && r.set(e, u),
    u
}
function xu(e) {
    return e[0] !== "$" && !vo(e)
}
const km = e => e[0] === "_" || e === "$stable"
  , Ol = e => de(e) ? e.map(Qt) : [Qt(e)]
  , Gv = (e, t, n) => {
    if (t._n)
        return t;
    const r = Tv( (...o) => Ol(t(...o)), n);
    return r._c = !1,
    r
}
  , Am = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
        if (km(o))
            continue;
        const i = e[o];
        if (_e(i))
            t[o] = Gv(o, i, r);
        else if (i != null) {
            const s = Ol(i);
            t[o] = () => s
        }
    }
}
  , Lm = (e, t) => {
    const n = Ol(t);
    e.slots.default = () => n
}
  , Om = (e, t, n) => {
    for (const r in t)
        (n || r !== "_") && (e[r] = t[r])
}
  , Yv = (e, t, n) => {
    const r = e.slots = Sm();
    if (e.vnode.shapeFlag & 32) {
        const o = t._;
        o ? (Om(r, t, n),
        n && Ld(r, "_", o, !0)) : Am(t, r)
    } else
        t && Lm(e, t)
}
  , Xv = (e, t, n) => {
    const {vnode: r, slots: o} = e;
    let i = !0
      , s = Oe;
    if (r.shapeFlag & 32) {
        const a = t._;
        a ? n && a === 1 ? i = !1 : Om(o, t, n) : (i = !t.$stable,
        Am(t, o)),
        s = t
    } else
        t && (Lm(e, t),
        s = {
            default: 1
        });
    if (i)
        for (const a in o)
            !km(a) && s[a] == null && delete o[a]
}
  , Je = fb;
function Qv(e) {
    return Jv(e)
}
function Jv(e, t) {
    const n = es();
    n.__VUE__ = !0;
    const {insert: r, remove: o, patchProp: i, createElement: s, createText: a, createComment: l, setText: u, setElementText: c, parentNode: d, nextSibling: f, setScopeId: m=Zt, insertStaticContent: h} = e
      , g = (x, y, N, j=null, D=null, Y=null, G=void 0, _=null, S=!!y.dynamicChildren) => {
        if (x === y)
            return;
        x && !An(x, y) && (j = B(x),
        X(x, D, Y, !0),
        x = null),
        y.patchFlag === -2 && (S = !1,
        y.dynamicChildren = null);
        const {type: I, ref: Q, shapeFlag: te} = y;
        switch (I) {
        case Ho:
            b(x, y, N, j);
            break;
        case ht:
            T(x, y, N, j);
            break;
        case zs:
            x == null && E(y, N, j, G);
            break;
        case dt:
            L(x, y, N, j, D, Y, G, _, S);
            break;
        default:
            te & 1 ? C(x, y, N, j, D, Y, G, _, S) : te & 6 ? H(x, y, N, j, D, Y, G, _, S) : (te & 64 || te & 128) && I.process(x, y, N, j, D, Y, G, _, S, ie)
        }
        Q != null && D && Ai(Q, x && x.ref, Y, y || x, !y)
    }
      , b = (x, y, N, j) => {
        if (x == null)
            r(y.el = a(y.children), N, j);
        else {
            const D = y.el = x.el;
            y.children !== x.children && u(D, y.children)
        }
    }
      , T = (x, y, N, j) => {
        x == null ? r(y.el = l(y.children || ""), N, j) : y.el = x.el
    }
      , E = (x, y, N, j) => {
        [x.el,x.anchor] = h(x.children, y, N, j, x.el, x.anchor)
    }
      , v = ({el: x, anchor: y}, N, j) => {
        let D;
        for (; x && x !== y; )
            D = f(x),
            r(x, N, j),
            x = D;
        r(y, N, j)
    }
      , p = ({el: x, anchor: y}) => {
        let N;
        for (; x && x !== y; )
            N = f(x),
            o(x),
            x = N;
        o(y)
    }
      , C = (x, y, N, j, D, Y, G, _, S) => {
        y.type === "svg" ? G = "svg" : y.type === "math" && (G = "mathml"),
        x == null ? w(y, N, j, D, Y, G, _, S) : A(x, y, D, Y, G, _, S)
    }
      , w = (x, y, N, j, D, Y, G, _) => {
        let S, I;
        const {props: Q, shapeFlag: te, transition: Z, dirs: $} = x;
        if (S = x.el = s(x.type, Y, Q && Q.is, Q),
        te & 8 ? c(S, x.children) : te & 16 && P(x.children, S, null, j, D, Hs(x, Y), G, _),
        $ && Vn(x, null, j, "created"),
        k(S, x, x.scopeId, G, j),
        Q) {
            for (const fe in Q)
                fe !== "value" && !vo(fe) && i(S, fe, null, Q[fe], Y, j);
            "value"in Q && i(S, "value", null, Q.value, Y),
            (I = Q.onVnodeBeforeMount) && Pt(I, j, x)
        }
        $ && Vn(x, null, j, "beforeMount");
        const U = Zv(D, Z);
        U && Z.beforeEnter(S),
        r(S, y, N),
        ((I = Q && Q.onVnodeMounted) || U || $) && Je( () => {
            I && Pt(I, j, x),
            U && Z.enter(S),
            $ && Vn(x, null, j, "mounted")
        }
        , D)
    }
      , k = (x, y, N, j, D) => {
        if (N && m(x, N),
        j)
            for (let Y = 0; Y < j.length; Y++)
                m(x, j[Y]);
        if (D) {
            let Y = D.subTree;
            if (y === Y || Ri(Y.type) && (Y.ssContent === y || Y.ssFallback === y)) {
                const G = D.vnode;
                k(x, G, G.scopeId, G.slotScopeIds, D.parent)
            }
        }
    }
      , P = (x, y, N, j, D, Y, G, _, S=0) => {
        for (let I = S; I < x.length; I++) {
            const Q = x[I] = _ ? Tn(x[I]) : Qt(x[I]);
            g(null, Q, y, N, j, D, Y, G, _)
        }
    }
      , A = (x, y, N, j, D, Y, G) => {
        const _ = y.el = x.el;
        let {patchFlag: S, dynamicChildren: I, dirs: Q} = y;
        S |= x.patchFlag & 16;
        const te = x.props || Oe
          , Z = y.props || Oe;
        let $;
        if (N && Hn(N, !1),
        ($ = Z.onVnodeBeforeUpdate) && Pt($, N, y, x),
        Q && Vn(y, x, N, "beforeUpdate"),
        N && Hn(N, !0),
        (te.innerHTML && Z.innerHTML == null || te.textContent && Z.textContent == null) && c(_, ""),
        I ? R(x.dynamicChildren, I, _, N, j, Hs(y, D), Y) : G || K(x, y, _, null, N, j, Hs(y, D), Y, !1),
        S > 0) {
            if (S & 16)
                q(_, te, Z, N, D);
            else if (S & 2 && te.class !== Z.class && i(_, "class", null, Z.class, D),
            S & 4 && i(_, "style", te.style, Z.style, D),
            S & 8) {
                const U = y.dynamicProps;
                for (let fe = 0; fe < U.length; fe++) {
                    const me = U[fe]
                      , Ve = te[me]
                      , We = Z[me];
                    (We !== Ve || me === "value") && i(_, me, Ve, We, D, N)
                }
            }
            S & 1 && x.children !== y.children && c(_, y.children)
        } else
            !G && I == null && q(_, te, Z, N, D);
        (($ = Z.onVnodeUpdated) || Q) && Je( () => {
            $ && Pt($, N, y, x),
            Q && Vn(y, x, N, "updated")
        }
        , j)
    }
      , R = (x, y, N, j, D, Y, G) => {
        for (let _ = 0; _ < y.length; _++) {
            const S = x[_]
              , I = y[_]
              , Q = S.el && (S.type === dt || !An(S, I) || S.shapeFlag & 70) ? d(S.el) : N;
            g(S, I, Q, null, j, D, Y, G, !0)
        }
    }
      , q = (x, y, N, j, D) => {
        if (y !== N) {
            if (y !== Oe)
                for (const Y in y)
                    !vo(Y) && !(Y in N) && i(x, Y, y[Y], null, D, j);
            for (const Y in N) {
                if (vo(Y))
                    continue;
                const G = N[Y]
                  , _ = y[Y];
                G !== _ && Y !== "value" && i(x, Y, _, G, D, j)
            }
            "value"in N && i(x, "value", y.value, N.value, D)
        }
    }
      , L = (x, y, N, j, D, Y, G, _, S) => {
        const I = y.el = x ? x.el : a("")
          , Q = y.anchor = x ? x.anchor : a("");
        let {patchFlag: te, dynamicChildren: Z, slotScopeIds: $} = y;
        $ && (_ = _ ? _.concat($) : $),
        x == null ? (r(I, N, j),
        r(Q, N, j),
        P(y.children || [], N, Q, D, Y, G, _, S)) : te > 0 && te & 64 && Z && x.dynamicChildren ? (R(x.dynamicChildren, Z, N, D, Y, G, _),
        (y.key != null || D && y === D.subTree) && Pl(x, y, !0)) : K(x, y, N, Q, D, Y, G, _, S)
    }
      , H = (x, y, N, j, D, Y, G, _, S) => {
        y.slotScopeIds = _,
        x == null ? y.shapeFlag & 512 ? D.ctx.activate(y, N, j, G, S) : F(y, N, j, D, Y, G, S) : ee(x, y, S)
    }
      , F = (x, y, N, j, D, Y, G) => {
        const _ = x.component = _b(x, j, D);
        if (as(x) && (_.ctx.renderer = ie),
        yb(_, !1, G),
        _.asyncDep) {
            if (D && D.registerDep(_, ne, G),
            !x.el) {
                const S = _.subTree = gt(ht);
                T(null, S, y, N)
            }
        } else
            ne(_, x, y, N, D, Y, G)
    }
      , ee = (x, y, N) => {
        const j = y.component = x.component;
        if (ub(x, y, N))
            if (j.asyncDep && !j.asyncResolved) {
                z(j, y, N);
                return
            } else
                j.next = y,
                j.update();
        else
            y.el = x.el,
            j.vnode = y
    }
      , ne = (x, y, N, j, D, Y, G) => {
        const _ = () => {
            if (x.isMounted) {
                let {next: te, bu: Z, u: $, parent: U, vnode: fe} = x;
                {
                    const J = Pm(x);
                    if (J) {
                        te && (te.el = fe.el,
                        z(x, te, G)),
                        J.asyncDep.then( () => {
                            x.isUnmounted || _()
                        }
                        );
                        return
                    }
                }
                let me = te, Ve;
                Hn(x, !1),
                te ? (te.el = fe.el,
                z(x, te, G)) : te = fe,
                Z && Lr(Z),
                (Ve = te.props && te.props.onVnodeBeforeUpdate) && Pt(Ve, U, te, fe),
                Hn(x, !0);
                const We = Ws(x)
                  , Ge = x.subTree;
                x.subTree = We,
                g(Ge, We, d(Ge.el), B(Ge), x, D, Y),
                te.el = We.el,
                me === null && cb(x, We.el),
                $ && Je($, D),
                (Ve = te.props && te.props.onVnodeUpdated) && Je( () => Pt(Ve, U, te, fe), D)
            } else {
                let te;
                const {el: Z, props: $} = y
                  , {bm: U, m: fe, parent: me, root: Ve, type: We} = x
                  , Ge = er(y);
                if (Hn(x, !1),
                U && Lr(U),
                !Ge && (te = $ && $.onVnodeBeforeMount) && Pt(te, me, y),
                Hn(x, !0),
                Z && ge) {
                    const J = () => {
                        x.subTree = Ws(x),
                        ge(Z, x.subTree, x, D, null)
                    }
                    ;
                    Ge && We.__asyncHydrate ? We.__asyncHydrate(Z, x, J) : J()
                } else {
                    Ve.ce && Ve.ce._injectChildStyle(We);
                    const J = x.subTree = Ws(x);
                    g(null, J, N, j, x, D, Y),
                    y.el = J.el
                }
                if (fe && Je(fe, D),
                !Ge && (te = $ && $.onVnodeMounted)) {
                    const J = y;
                    Je( () => Pt(te, me, J), D)
                }
                (y.shapeFlag & 256 || me && er(me.vnode) && me.vnode.shapeFlag & 256) && x.a && Je(x.a, D),
                x.isMounted = !0,
                y = N = j = null
            }
        }
        ;
        x.scope.on();
        const S = x.effect = new Md(_);
        x.scope.off();
        const I = x.update = S.run.bind(S)
          , Q = x.job = S.runIfDirty.bind(S);
        Q.i = x,
        Q.id = x.uid,
        S.scheduler = () => Cl(Q),
        Hn(x, !0),
        I()
    }
      , z = (x, y, N) => {
        y.component = x;
        const j = x.vnode.props;
        x.vnode = y,
        x.next = null,
        zv(x, y.props, j, N),
        Xv(x, y.children, N),
        Dn(),
        vu(x),
        qn()
    }
      , K = (x, y, N, j, D, Y, G, _, S=!1) => {
        const I = x && x.children
          , Q = x ? x.shapeFlag : 0
          , te = y.children
          , {patchFlag: Z, shapeFlag: $} = y;
        if (Z > 0) {
            if (Z & 128) {
                ue(I, te, N, j, D, Y, G, _, S);
                return
            } else if (Z & 256) {
                ae(I, te, N, j, D, Y, G, _, S);
                return
            }
        }
        $ & 8 ? (Q & 16 && oe(I, D, Y),
        te !== I && c(N, te)) : Q & 16 ? $ & 16 ? ue(I, te, N, j, D, Y, G, _, S) : oe(I, D, Y, !0) : (Q & 8 && c(N, ""),
        $ & 16 && P(te, N, j, D, Y, G, _, S))
    }
      , ae = (x, y, N, j, D, Y, G, _, S) => {
        x = x || kr,
        y = y || kr;
        const I = x.length
          , Q = y.length
          , te = Math.min(I, Q);
        let Z;
        for (Z = 0; Z < te; Z++) {
            const $ = y[Z] = S ? Tn(y[Z]) : Qt(y[Z]);
            g(x[Z], $, N, null, D, Y, G, _, S)
        }
        I > Q ? oe(x, D, Y, !0, !1, te) : P(y, N, j, D, Y, G, _, S, te)
    }
      , ue = (x, y, N, j, D, Y, G, _, S) => {
        let I = 0;
        const Q = y.length;
        let te = x.length - 1
          , Z = Q - 1;
        for (; I <= te && I <= Z; ) {
            const $ = x[I]
              , U = y[I] = S ? Tn(y[I]) : Qt(y[I]);
            if (An($, U))
                g($, U, N, null, D, Y, G, _, S);
            else
                break;
            I++
        }
        for (; I <= te && I <= Z; ) {
            const $ = x[te]
              , U = y[Z] = S ? Tn(y[Z]) : Qt(y[Z]);
            if (An($, U))
                g($, U, N, null, D, Y, G, _, S);
            else
                break;
            te--,
            Z--
        }
        if (I > te) {
            if (I <= Z) {
                const $ = Z + 1
                  , U = $ < Q ? y[$].el : j;
                for (; I <= Z; )
                    g(null, y[I] = S ? Tn(y[I]) : Qt(y[I]), N, U, D, Y, G, _, S),
                    I++
            }
        } else if (I > Z)
            for (; I <= te; )
                X(x[I], D, Y, !0),
                I++;
        else {
            const $ = I
              , U = I
              , fe = new Map;
            for (I = U; I <= Z; I++) {
                const xe = y[I] = S ? Tn(y[I]) : Qt(y[I]);
                xe.key != null && fe.set(xe.key, I)
            }
            let me, Ve = 0;
            const We = Z - U + 1;
            let Ge = !1
              , J = 0;
            const pe = new Array(We);
            for (I = 0; I < We; I++)
                pe[I] = 0;
            for (I = $; I <= te; I++) {
                const xe = x[I];
                if (Ve >= We) {
                    X(xe, D, Y, !0);
                    continue
                }
                let Fe;
                if (xe.key != null)
                    Fe = fe.get(xe.key);
                else
                    for (me = U; me <= Z; me++)
                        if (pe[me - U] === 0 && An(xe, y[me])) {
                            Fe = me;
                            break
                        }
                Fe === void 0 ? X(xe, D, Y, !0) : (pe[Fe - U] = I + 1,
                Fe >= J ? J = Fe : Ge = !0,
                g(xe, y[Fe], N, null, D, Y, G, _, S),
                Ve++)
            }
            const Me = Ge ? eb(pe) : kr;
            for (me = Me.length - 1,
            I = We - 1; I >= 0; I--) {
                const xe = U + I
                  , Fe = y[xe]
                  , $t = xe + 1 < Q ? y[xe + 1].el : j;
                pe[I] === 0 ? g(null, Fe, N, $t, D, Y, G, _, S) : Ge && (me < 0 || I !== Me[me] ? ce(Fe, N, $t, 2) : me--)
            }
        }
    }
      , ce = (x, y, N, j, D=null) => {
        const {el: Y, type: G, transition: _, children: S, shapeFlag: I} = x;
        if (I & 6) {
            ce(x.component.subTree, y, N, j);
            return
        }
        if (I & 128) {
            x.suspense.move(y, N, j);
            return
        }
        if (I & 64) {
            G.move(x, y, N, ie);
            return
        }
        if (G === dt) {
            r(Y, y, N);
            for (let te = 0; te < S.length; te++)
                ce(S[te], y, N, j);
            r(x.anchor, y, N);
            return
        }
        if (G === zs) {
            v(x, y, N);
            return
        }
        if (j !== 2 && I & 1 && _)
            if (j === 0)
                _.beforeEnter(Y),
                r(Y, y, N),
                Je( () => _.enter(Y), D);
            else {
                const {leave: te, delayLeave: Z, afterLeave: $} = _
                  , U = () => r(Y, y, N)
                  , fe = () => {
                    te(Y, () => {
                        U(),
                        $ && $()
                    }
                    )
                }
                ;
                Z ? Z(Y, U, fe) : fe()
            }
        else
            r(Y, y, N)
    }
      , X = (x, y, N, j=!1, D=!1) => {
        const {type: Y, props: G, ref: _, children: S, dynamicChildren: I, shapeFlag: Q, patchFlag: te, dirs: Z, cacheIndex: $} = x;
        if (te === -2 && (D = !1),
        _ != null && Ai(_, null, N, x, !0),
        $ != null && (y.renderCache[$] = void 0),
        Q & 256) {
            y.ctx.deactivate(x);
            return
        }
        const U = Q & 1 && Z
          , fe = !er(x);
        let me;
        if (fe && (me = G && G.onVnodeBeforeUnmount) && Pt(me, y, x),
        Q & 6)
            Ae(x.component, N, j);
        else {
            if (Q & 128) {
                x.suspense.unmount(N, j);
                return
            }
            U && Vn(x, null, y, "beforeUnmount"),
            Q & 64 ? x.type.remove(x, y, N, ie, j) : I && !I.hasOnce && (Y !== dt || te > 0 && te & 64) ? oe(I, y, N, !1, !0) : (Y === dt && te & 384 || !D && Q & 16) && oe(S, y, N),
            j && be(x)
        }
        (fe && (me = G && G.onVnodeUnmounted) || U) && Je( () => {
            me && Pt(me, y, x),
            U && Vn(x, null, y, "unmounted")
        }
        , N)
    }
      , be = x => {
        const {type: y, el: N, anchor: j, transition: D} = x;
        if (y === dt) {
            ke(N, j);
            return
        }
        if (y === zs) {
            p(x);
            return
        }
        const Y = () => {
            o(N),
            D && !D.persisted && D.afterLeave && D.afterLeave()
        }
        ;
        if (x.shapeFlag & 1 && D && !D.persisted) {
            const {leave: G, delayLeave: _} = D
              , S = () => G(N, Y);
            _ ? _(x.el, Y, S) : S()
        } else
            Y()
    }
      , ke = (x, y) => {
        let N;
        for (; x !== y; )
            N = f(x),
            o(x),
            x = N;
        o(y)
    }
      , Ae = (x, y, N) => {
        const {bum: j, scope: D, job: Y, subTree: G, um: _, m: S, a: I} = x;
        Pi(S),
        Pi(I),
        j && Lr(j),
        D.stop(),
        Y && (Y.flags |= 8,
        X(G, x, y, N)),
        _ && Je(_, y),
        Je( () => {
            x.isUnmounted = !0
        }
        , y),
        y && y.pendingBranch && !y.isUnmounted && x.asyncDep && !x.asyncResolved && x.suspenseId === y.pendingId && (y.deps--,
        y.deps === 0 && y.resolve())
    }
      , oe = (x, y, N, j=!1, D=!1, Y=0) => {
        for (let G = Y; G < x.length; G++)
            X(x[G], y, N, j, D)
    }
      , B = x => {
        if (x.shapeFlag & 6)
            return B(x.component.subTree);
        if (x.shapeFlag & 128)
            return x.suspense.next();
        const y = f(x.anchor || x.el)
          , N = y && y[rm];
        return N ? f(N) : y
    }
    ;
    let re = !1;
    const W = (x, y, N) => {
        x == null ? y._vnode && X(y._vnode, null, null, !0) : g(y._vnode || null, x, y, null, null, null, N),
        y._vnode = x,
        re || (re = !0,
        vu(),
        em(),
        re = !1)
    }
      , ie = {
        p: g,
        um: X,
        m: ce,
        r: be,
        mt: F,
        mc: P,
        pc: K,
        pbc: R,
        n: B,
        o: e
    };
    let we, ge;
    return {
        render: W,
        hydrate: we,
        createApp: Hv(W, we)
    }
}
function Hs({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}
function Hn({effect: e, job: t}, n) {
    n ? (e.flags |= 32,
    t.flags |= 4) : (e.flags &= -33,
    t.flags &= -5)
}
function Zv(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function Pl(e, t, n=!1) {
    const r = e.children
      , o = t.children;
    if (de(r) && de(o))
        for (let i = 0; i < r.length; i++) {
            const s = r[i];
            let a = o[i];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[i] = Tn(o[i]),
            a.el = s.el),
            !n && a.patchFlag !== -2 && Pl(s, a)),
            a.type === Ho && (a.el = s.el)
        }
}
function eb(e) {
    const t = e.slice()
      , n = [0];
    let r, o, i, s, a;
    const l = e.length;
    for (r = 0; r < l; r++) {
        const u = e[r];
        if (u !== 0) {
            if (o = n[n.length - 1],
            e[o] < u) {
                t[r] = o,
                n.push(r);
                continue
            }
            for (i = 0,
            s = n.length - 1; i < s; )
                a = i + s >> 1,
                e[n[a]] < u ? i = a + 1 : s = a;
            u < e[n[i]] && (i > 0 && (t[r] = n[i - 1]),
            n[i] = r)
        }
    }
    for (i = n.length,
    s = n[i - 1]; i-- > 0; )
        n[i] = s,
        s = t[s];
    return n
}
function Pm(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : Pm(t)
}
function Pi(e) {
    if (e)
        for (let t = 0; t < e.length; t++)
            e[t].flags |= 8
}
const tb = Symbol.for("v-scx")
  , nb = () => yt(tb);
function rb(e, t) {
    return fs(e, null, t)
}
function ob(e, t) {
    return fs(e, null, {
        flush: "sync"
    })
}
function ve(e, t, n) {
    return fs(e, t, n)
}
function fs(e, t, n=Oe) {
    const {immediate: r, deep: o, flush: i, once: s} = n
      , a = Ke({}, n)
      , l = t && r || !t && i !== "post";
    let u;
    if (Io) {
        if (i === "sync") {
            const m = nb();
            u = m.__watcherHandles || (m.__watcherHandles = [])
        } else if (!l) {
            const m = () => {}
            ;
            return m.stop = Zt,
            m.resume = Zt,
            m.pause = Zt,
            m
        }
    }
    const c = at;
    a.call = (m, h, g) => Vt(m, c, h, g);
    let d = !1;
    i === "post" ? a.scheduler = m => {
        Je(m, c && c.suspense)
    }
    : i !== "sync" && (d = !0,
    a.scheduler = (m, h) => {
        h ? m() : Cl(m)
    }
    ),
    a.augmentJob = m => {
        t && (m.flags |= 4),
        d && (m.flags |= 2,
        c && (m.id = c.uid,
        m.i = c))
    }
    ;
    const f = wv(e, t, a);
    return Io && (u ? u.push(f) : l && f()),
    f
}
function ib(e, t, n) {
    const r = this.proxy
      , o = He(e) ? e.includes(".") ? Rm(r, e) : () => r[e] : e.bind(r, r);
    let i;
    _e(t) ? i = t : (i = t.handler,
    n = t);
    const s = Wo(this)
      , a = fs(o, i.bind(r), n);
    return s(),
    a
}
function Rm(e, t) {
    const n = t.split(".");
    return () => {
        let r = e;
        for (let o = 0; o < n.length && r; o++)
            r = r[n[o]];
        return r
    }
}
function zA(e, t, n=Oe) {
    const r = Te()
      , o = At(t)
      , i = gn(t)
      , s = Im(e, o)
      , a = Qd( (l, u) => {
        let c, d = Oe, f;
        return ob( () => {
            const m = e[o];
            Et(c, m) && (c = m,
            u())
        }
        ),
        {
            get() {
                return l(),
                n.get ? n.get(c) : c
            },
            set(m) {
                const h = n.set ? n.set(m) : m;
                if (!Et(h, c) && !(d !== Oe && Et(m, d)))
                    return;
                const g = r.vnode.props;
                g && (t in g || o in g || i in g) && (`onUpdate:${t}`in g || `onUpdate:${o}`in g || `onUpdate:${i}`in g) || (c = m,
                u()),
                r.emit(`update:${t}`, h),
                Et(m, h) && Et(m, d) && !Et(h, f) && u(),
                d = m,
                f = h
            }
        }
    }
    );
    return a[Symbol.iterator] = () => {
        let l = 0;
        return {
            next() {
                return l < 2 ? {
                    value: l++ ? s || Oe : a,
                    done: !1
                } : {
                    done: !0
                }
            }
        }
    }
    ,
    a
}
const Im = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${At(t)}Modifiers`] || e[`${gn(t)}Modifiers`];
function sb(e, t, ...n) {
    if (e.isUnmounted)
        return;
    const r = e.vnode.props || Oe;
    let o = n;
    const i = t.startsWith("update:")
      , s = i && Im(r, t.slice(7));
    s && (s.trim && (o = n.map(c => He(c) ? c.trim() : c)),
    s.number && (o = n.map(Si)));
    let a, l = r[a = $s(t)] || r[a = $s(At(t))];
    !l && i && (l = r[a = $s(gn(t))]),
    l && Vt(l, e, 6, o);
    const u = r[a + "Once"];
    if (u) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[a])
            return;
        e.emitted[a] = !0,
        Vt(u, e, 6, o)
    }
}
function Nm(e, t, n=!1) {
    const r = t.emitsCache
      , o = r.get(e);
    if (o !== void 0)
        return o;
    const i = e.emits;
    let s = {}
      , a = !1;
    if (!_e(e)) {
        const l = u => {
            const c = Nm(u, t, !0);
            c && (a = !0,
            Ke(s, c))
        }
        ;
        !n && t.mixins.length && t.mixins.forEach(l),
        e.extends && l(e.extends),
        e.mixins && e.mixins.forEach(l)
    }
    return !i && !a ? ($e(e) && r.set(e, null),
    null) : (de(i) ? i.forEach(l => s[l] = null) : Ke(s, i),
    $e(e) && r.set(e, s),
    s)
}
function ds(e, t) {
    return !e || !Qi(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""),
    Pe(e, t[0].toLowerCase() + t.slice(1)) || Pe(e, gn(t)) || Pe(e, t))
}
function Ws(e) {
    const {type: t, vnode: n, proxy: r, withProxy: o, propsOptions: [i], slots: s, attrs: a, emit: l, render: u, renderCache: c, props: d, data: f, setupState: m, ctx: h, inheritAttrs: g} = e
      , b = ki(e);
    let T, E;
    try {
        if (n.shapeFlag & 4) {
            const p = o || r
              , C = p;
            T = Qt(u.call(C, p, c, d, m, f, h)),
            E = a
        } else {
            const p = t;
            T = Qt(p.length > 1 ? p(d, {
                attrs: a,
                slots: s,
                emit: l
            }) : p(d, null)),
            E = t.props ? a : ab(a)
        }
    } catch (p) {
        So.length = 0,
        ss(p, e, 1),
        T = gt(ht)
    }
    let v = T;
    if (E && g !== !1) {
        const p = Object.keys(E)
          , {shapeFlag: C} = v;
        p.length && C & 7 && (i && p.some(fl) && (E = lb(E, i)),
        v = mn(v, E, !1, !0))
    }
    return n.dirs && (v = mn(v, null, !1, !0),
    v.dirs = v.dirs ? v.dirs.concat(n.dirs) : n.dirs),
    n.transition && Rn(v, n.transition),
    T = v,
    ki(b),
    T
}
const ab = e => {
    let t;
    for (const n in e)
        (n === "class" || n === "style" || Qi(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}
  , lb = (e, t) => {
    const n = {};
    for (const r in e)
        (!fl(r) || !(r.slice(9)in t)) && (n[r] = e[r]);
    return n
}
;
function ub(e, t, n) {
    const {props: r, children: o, component: i} = e
      , {props: s, children: a, patchFlag: l} = t
      , u = i.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (n && l >= 0) {
        if (l & 1024)
            return !0;
        if (l & 16)
            return r ? ku(r, s, u) : !!s;
        if (l & 8) {
            const c = t.dynamicProps;
            for (let d = 0; d < c.length; d++) {
                const f = c[d];
                if (s[f] !== r[f] && !ds(u, f))
                    return !0
            }
        }
    } else
        return (o || a) && (!a || !a.$stable) ? !0 : r === s ? !1 : r ? s ? ku(r, s, u) : !0 : !!s;
    return !1
}
function ku(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length)
        return !0;
    for (let o = 0; o < r.length; o++) {
        const i = r[o];
        if (t[i] !== e[i] && !ds(n, i))
            return !0
    }
    return !1
}
function cb({vnode: e, parent: t}, n) {
    for (; t; ) {
        const r = t.subTree;
        if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el),
        r === e)
            (e = t.vnode).el = n,
            t = t.parent;
        else
            break
    }
}
const Ri = e => e.__isSuspense;
function fb(e, t) {
    t && t.pendingBranch ? de(e) ? t.effects.push(...e) : t.effects.push(e) : Cv(e)
}
const dt = Symbol.for("v-fgt")
  , Ho = Symbol.for("v-txt")
  , ht = Symbol.for("v-cmt")
  , zs = Symbol.for("v-stc")
  , So = [];
let xt = null;
function Aa(e=!1) {
    So.push(xt = e ? null : [])
}
function db() {
    So.pop(),
    xt = So[So.length - 1] || null
}
let Ro = 1;
function Au(e, t=!1) {
    Ro += e,
    e < 0 && xt && t && (xt.hasOnce = !0)
}
function Mm(e) {
    return e.dynamicChildren = Ro > 0 ? xt || kr : null,
    db(),
    Ro > 0 && xt && xt.push(e),
    e
}
function KA(e, t, n, r, o, i) {
    return Mm(Fm(e, t, n, r, o, i, !0))
}
function La(e, t, n, r, o) {
    return Mm(gt(e, t, n, r, o, !0))
}
function Mr(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function An(e, t) {
    return e.type === t.type && e.key === t.key
}
const $m = ({key: e}) => e ?? null
  , hi = ({ref: e, ref_key: t, ref_for: n}) => (typeof e == "number" && (e = "" + e),
e != null ? He(e) || et(e) || _e(e) ? {
    i: rt,
    r: e,
    k: t,
    f: !!n
} : e : null);
function Fm(e, t=null, n=null, r=0, o=null, i=e === dt ? 0 : 1, s=!1, a=!1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && $m(t),
        ref: t && hi(t),
        scopeId: nm,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: i,
        patchFlag: r,
        dynamicProps: o,
        dynamicChildren: null,
        appContext: null,
        ctx: rt
    };
    return a ? (Rl(l, n),
    i & 128 && e.normalize(l)) : n && (l.shapeFlag |= He(n) ? 8 : 16),
    Ro > 0 && !s && xt && (l.patchFlag > 0 || i & 6) && l.patchFlag !== 32 && xt.push(l),
    l
}
const gt = mb;
function mb(e, t=null, n=null, r=0, o=null, i=!1) {
    if ((!e || e === vm) && (e = ht),
    Mr(e)) {
        const a = mn(e, t, !0);
        return n && Rl(a, n),
        Ro > 0 && !i && xt && (a.shapeFlag & 6 ? xt[xt.indexOf(e)] = a : xt.push(a)),
        a.patchFlag = -2,
        a
    }
    if (Cb(e) && (e = e.__vccOpts),
    t) {
        t = hb(t);
        let {class: a, style: l} = t;
        a && !He(a) && (t.class = gl(a)),
        $e(l) && (Sl(l) && !de(l) && (l = Ke({}, l)),
        t.style = hl(l))
    }
    const s = He(e) ? 1 : Ri(e) ? 128 : om(e) ? 64 : $e(e) ? 4 : _e(e) ? 2 : 0;
    return Fm(e, t, n, r, o, s, i, !0)
}
function hb(e) {
    return e ? Sl(e) || Cm(e) ? Ke({}, e) : e : null
}
function mn(e, t, n=!1, r=!1) {
    const {props: o, ref: i, patchFlag: s, children: a, transition: l} = e
      , u = t ? pb(o || {}, t) : o
      , c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: u,
        key: u && $m(u),
        ref: t && t.ref ? n && i ? de(i) ? i.concat(hi(t)) : [i, hi(t)] : hi(t) : i,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: a,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== dt ? s === -1 ? 16 : s | 16 : s,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: l,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && mn(e.ssContent),
        ssFallback: e.ssFallback && mn(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return l && r && Rn(c, l.clone(c)),
    c
}
function gb(e=" ", t=0) {
    return gt(Ho, null, e, t)
}
function GA(e="", t=!1) {
    return t ? (Aa(),
    La(ht, null, e)) : gt(ht, null, e)
}
function Qt(e) {
    return e == null || typeof e == "boolean" ? gt(ht) : de(e) ? gt(dt, null, e.slice()) : Mr(e) ? Tn(e) : gt(Ho, null, String(e))
}
function Tn(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : mn(e)
}
function Rl(e, t) {
    let n = 0;
    const {shapeFlag: r} = e;
    if (t == null)
        t = null;
    else if (de(t))
        n = 16;
    else if (typeof t == "object")
        if (r & 65) {
            const o = t.default;
            o && (o._c && (o._d = !1),
            Rl(e, o()),
            o._c && (o._d = !0));
            return
        } else {
            n = 32;
            const o = t._;
            !o && !Cm(t) ? t._ctx = rt : o === 3 && rt && (rt.slots._ === 1 ? t._ = 1 : (t._ = 2,
            e.patchFlag |= 1024))
        }
    else
        _e(t) ? (t = {
            default: t,
            _ctx: rt
        },
        n = 32) : (t = String(t),
        r & 64 ? (n = 16,
        t = [gb(t)]) : n = 8);
    e.children = t,
    e.shapeFlag |= n
}
function pb(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const o in r)
            if (o === "class")
                t.class !== r.class && (t.class = gl([t.class, r.class]));
            else if (o === "style")
                t.style = hl([t.style, r.style]);
            else if (Qi(o)) {
                const i = t[o]
                  , s = r[o];
                s && i !== s && !(de(i) && i.includes(s)) && (t[o] = i ? [].concat(i, s) : s)
            } else
                o !== "" && (t[o] = r[o])
    }
    return t
}
function Pt(e, t, n, r=null) {
    Vt(e, t, 7, [n, r])
}
const vb = wm();
let bb = 0;
function _b(e, t, n) {
    const r = e.type
      , o = (t ? t.appContext : e.appContext) || vb
      , i = {
        uid: bb++,
        vnode: e,
        type: r,
        parent: t,
        appContext: o,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        job: null,
        scope: new Id(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(o.provides),
        ids: t ? t.ids : ["", 0, 0],
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: xm(r, o),
        emitsOptions: Nm(r, o),
        emit: null,
        emitted: null,
        propsDefaults: Oe,
        inheritAttrs: r.inheritAttrs,
        ctx: Oe,
        data: Oe,
        props: Oe,
        attrs: Oe,
        slots: Oe,
        refs: Oe,
        setupState: Oe,
        setupContext: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return i.ctx = {
        _: i
    },
    i.root = t ? t.root : i,
    i.emit = sb.bind(null, i),
    e.ce && e.ce(i),
    i
}
let at = null;
const Te = () => at || rt;
let Ii, Oa;
{
    const e = es()
      , t = (n, r) => {
        let o;
        return (o = e[n]) || (o = e[n] = []),
        o.push(r),
        i => {
            o.length > 1 ? o.forEach(s => s(i)) : o[0](i)
        }
    }
    ;
    Ii = t("__VUE_INSTANCE_SETTERS__", n => at = n),
    Oa = t("__VUE_SSR_SETTERS__", n => Io = n)
}
const Wo = e => {
    const t = at;
    return Ii(e),
    e.scope.on(),
    () => {
        e.scope.off(),
        Ii(t)
    }
}
  , Lu = () => {
    at && at.scope.off(),
    Ii(null)
}
;
function Dm(e) {
    return e.vnode.shapeFlag & 4
}
let Io = !1;
function yb(e, t=!1, n=!1) {
    t && Oa(t);
    const {props: r, children: o} = e.vnode
      , i = Dm(e);
    Wv(e, r, i, t),
    Yv(e, o, n);
    const s = i ? wb(e, t) : void 0;
    return t && Oa(!1),
    s
}
function wb(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null),
    e.proxy = new Proxy(e.ctx,Fv);
    const {setup: r} = n;
    if (r) {
        Dn();
        const o = e.setupContext = r.length > 1 ? Sb(e) : null
          , i = Wo(e)
          , s = Vo(r, e, 0, [e.props, o])
          , a = xd(s);
        if (qn(),
        i(),
        (a || e.sp) && !er(e) && dm(e),
        a) {
            if (s.then(Lu, Lu),
            t)
                return s.then(l => {
                    Ou(e, l, t)
                }
                ).catch(l => {
                    ss(l, e, 0)
                }
                );
            e.asyncDep = s
        } else
            Ou(e, s, t)
    } else
        qm(e, t)
}
function Ou(e, t, n) {
    _e(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : $e(t) && (e.setupState = Xd(t)),
    qm(e, n)
}
let Pu;
function qm(e, t, n) {
    const r = e.type;
    if (!e.render) {
        if (!t && Pu && !r.render) {
            const o = r.template || Ll(e).template;
            if (o) {
                const {isCustomElement: i, compilerOptions: s} = e.appContext.config
                  , {delimiters: a, compilerOptions: l} = r
                  , u = Ke(Ke({
                    isCustomElement: i,
                    delimiters: a
                }, s), l);
                r.render = Pu(o, u)
            }
        }
        e.render = r.render || Zt
    }
    {
        const o = Wo(e);
        Dn();
        try {
            Dv(e)
        } finally {
            qn(),
            o()
        }
    }
}
const Eb = {
    get(e, t) {
        return ct(e, "get", ""),
        e[t]
    }
};
function Sb(e) {
    const t = n => {
        e.exposed = n || {}
    }
    ;
    return {
        attrs: new Proxy(e.attrs,Eb),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function ms(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Xd(os(e.exposed)),{
        get(t, n) {
            if (n in t)
                return t[n];
            if (n in wo)
                return wo[n](e)
        },
        has(t, n) {
            return n in t || n in wo
        }
    })) : e.proxy
}
function Pa(e, t=!0) {
    return _e(e) ? e.displayName || e.name : e.name || t && e.__name
}
function Cb(e) {
    return _e(e) && "__vccOpts"in e
}
const O = (e, t) => _v(e, t, Io);
function M(e, t, n) {
    const r = arguments.length;
    return r === 2 ? $e(t) && !de(t) ? Mr(t) ? gt(e, null, [t]) : gt(e, t) : gt(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Mr(n) && (n = [n]),
    gt(e, t, n))
}
const Tb = "3.5.13";
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ra;
const Ru = typeof window < "u" && window.trustedTypes;
if (Ru)
    try {
        Ra = Ru.createPolicy("vue", {
            createHTML: e => e
        })
    } catch {}
const Bm = Ra ? e => Ra.createHTML(e) : e => e
  , xb = "http://www.w3.org/2000/svg"
  , kb = "http://www.w3.org/1998/Math/MathML"
  , sn = typeof document < "u" ? document : null
  , Iu = sn && sn.createElement("template")
  , Ab = {
    insert: (e, t, n) => {
        t.insertBefore(e, n || null)
    }
    ,
    remove: e => {
        const t = e.parentNode;
        t && t.removeChild(e)
    }
    ,
    createElement: (e, t, n, r) => {
        const o = t === "svg" ? sn.createElementNS(xb, e) : t === "mathml" ? sn.createElementNS(kb, e) : n ? sn.createElement(e, {
            is: n
        }) : sn.createElement(e);
        return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple),
        o
    }
    ,
    createText: e => sn.createTextNode(e),
    createComment: e => sn.createComment(e),
    setText: (e, t) => {
        e.nodeValue = t
    }
    ,
    setElementText: (e, t) => {
        e.textContent = t
    }
    ,
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => sn.querySelector(e),
    setScopeId(e, t) {
        e.setAttribute(t, "")
    },
    insertStaticContent(e, t, n, r, o, i) {
        const s = n ? n.previousSibling : t.lastChild;
        if (o && (o === i || o.nextSibling))
            for (; t.insertBefore(o.cloneNode(!0), n),
            !(o === i || !(o = o.nextSibling)); )
                ;
        else {
            Iu.innerHTML = Bm(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
            const a = Iu.content;
            if (r === "svg" || r === "mathml") {
                const l = a.firstChild;
                for (; l.firstChild; )
                    a.appendChild(l.firstChild);
                a.removeChild(l)
            }
            t.insertBefore(a, n)
        }
        return [s ? s.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
}
  , bn = "transition"
  , oo = "animation"
  , $r = Symbol("_vtc")
  , jm = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
}
  , Um = Ke({}, lm, jm)
  , Lb = e => (e.displayName = "Transition",
e.props = Um,
e)
  , lr = Lb( (e, {slots: t}) => M(Lv, Vm(e), t))
  , Wn = (e, t=[]) => {
    de(e) ? e.forEach(n => n(...t)) : e && e(...t)
}
  , Nu = e => e ? de(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;
function Vm(e) {
    const t = {};
    for (const L in e)
        L in jm || (t[L] = e[L]);
    if (e.css === !1)
        return t;
    const {name: n="v", type: r, duration: o, enterFromClass: i=`${n}-enter-from`, enterActiveClass: s=`${n}-enter-active`, enterToClass: a=`${n}-enter-to`, appearFromClass: l=i, appearActiveClass: u=s, appearToClass: c=a, leaveFromClass: d=`${n}-leave-from`, leaveActiveClass: f=`${n}-leave-active`, leaveToClass: m=`${n}-leave-to`} = e
      , h = Ob(o)
      , g = h && h[0]
      , b = h && h[1]
      , {onBeforeEnter: T, onEnter: E, onEnterCancelled: v, onLeave: p, onLeaveCancelled: C, onBeforeAppear: w=T, onAppear: k=E, onAppearCancelled: P=v} = t
      , A = (L, H, F, ee) => {
        L._enterCancelled = ee,
        En(L, H ? c : a),
        En(L, H ? u : s),
        F && F()
    }
      , R = (L, H) => {
        L._isLeaving = !1,
        En(L, d),
        En(L, m),
        En(L, f),
        H && H()
    }
      , q = L => (H, F) => {
        const ee = L ? k : E
          , ne = () => A(H, L, F);
        Wn(ee, [H, ne]),
        Mu( () => {
            En(H, L ? l : i),
            Yt(H, L ? c : a),
            Nu(ee) || $u(H, r, g, ne)
        }
        )
    }
    ;
    return Ke(t, {
        onBeforeEnter(L) {
            Wn(T, [L]),
            Yt(L, i),
            Yt(L, s)
        },
        onBeforeAppear(L) {
            Wn(w, [L]),
            Yt(L, l),
            Yt(L, u)
        },
        onEnter: q(!1),
        onAppear: q(!0),
        onLeave(L, H) {
            L._isLeaving = !0;
            const F = () => R(L, H);
            Yt(L, d),
            L._enterCancelled ? (Yt(L, f),
            Ia()) : (Ia(),
            Yt(L, f)),
            Mu( () => {
                L._isLeaving && (En(L, d),
                Yt(L, m),
                Nu(p) || $u(L, r, b, F))
            }
            ),
            Wn(p, [L, F])
        },
        onEnterCancelled(L) {
            A(L, !1, void 0, !0),
            Wn(v, [L])
        },
        onAppearCancelled(L) {
            A(L, !0, void 0, !0),
            Wn(P, [L])
        },
        onLeaveCancelled(L) {
            R(L),
            Wn(C, [L])
        }
    })
}
function Ob(e) {
    if (e == null)
        return null;
    if ($e(e))
        return [Ks(e.enter), Ks(e.leave)];
    {
        const t = Ks(e);
        return [t, t]
    }
}
function Ks(e) {
    return Mp(e)
}
function Yt(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)),
    (e[$r] || (e[$r] = new Set)).add(t)
}
function En(e, t) {
    t.split(/\s+/).forEach(r => r && e.classList.remove(r));
    const n = e[$r];
    n && (n.delete(t),
    n.size || (e[$r] = void 0))
}
function Mu(e) {
    requestAnimationFrame( () => {
        requestAnimationFrame(e)
    }
    )
}
let Pb = 0;
function $u(e, t, n, r) {
    const o = e._endId = ++Pb
      , i = () => {
        o === e._endId && r()
    }
    ;
    if (n != null)
        return setTimeout(i, n);
    const {type: s, timeout: a, propCount: l} = Hm(e, t);
    if (!s)
        return r();
    const u = s + "end";
    let c = 0;
    const d = () => {
        e.removeEventListener(u, f),
        i()
    }
      , f = m => {
        m.target === e && ++c >= l && d()
    }
    ;
    setTimeout( () => {
        c < l && d()
    }
    , a + 1),
    e.addEventListener(u, f)
}
function Hm(e, t) {
    const n = window.getComputedStyle(e)
      , r = h => (n[h] || "").split(", ")
      , o = r(`${bn}Delay`)
      , i = r(`${bn}Duration`)
      , s = Fu(o, i)
      , a = r(`${oo}Delay`)
      , l = r(`${oo}Duration`)
      , u = Fu(a, l);
    let c = null
      , d = 0
      , f = 0;
    t === bn ? s > 0 && (c = bn,
    d = s,
    f = i.length) : t === oo ? u > 0 && (c = oo,
    d = u,
    f = l.length) : (d = Math.max(s, u),
    c = d > 0 ? s > u ? bn : oo : null,
    f = c ? c === bn ? i.length : l.length : 0);
    const m = c === bn && /\b(transform|all)(,|$)/.test(r(`${bn}Property`).toString());
    return {
        type: c,
        timeout: d,
        propCount: f,
        hasTransform: m
    }
}
function Fu(e, t) {
    for (; e.length < t.length; )
        e = e.concat(e);
    return Math.max(...t.map( (n, r) => Du(n) + Du(e[r])))
}
function Du(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}
function Ia() {
    return document.body.offsetHeight
}
function Rb(e, t, n) {
    const r = e[$r];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")),
    t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Ni = Symbol("_vod")
  , Wm = Symbol("_vsh")
  , Ib = {
    beforeMount(e, {value: t}, {transition: n}) {
        e[Ni] = e.style.display === "none" ? "" : e.style.display,
        n && t ? n.beforeEnter(e) : io(e, t)
    },
    mounted(e, {value: t}, {transition: n}) {
        n && t && n.enter(e)
    },
    updated(e, {value: t, oldValue: n}, {transition: r}) {
        !t != !n && (r ? t ? (r.beforeEnter(e),
        io(e, !0),
        r.enter(e)) : r.leave(e, () => {
            io(e, !1)
        }
        ) : io(e, t))
    },
    beforeUnmount(e, {value: t}) {
        io(e, t)
    }
};
function io(e, t) {
    e.style.display = t ? e[Ni] : "none",
    e[Wm] = !t
}
const Nb = Symbol("")
  , Mb = /(^|;)\s*display\s*:/;
function $b(e, t, n) {
    const r = e.style
      , o = He(n);
    let i = !1;
    if (n && !o) {
        if (t)
            if (He(t))
                for (const s of t.split(";")) {
                    const a = s.slice(0, s.indexOf(":")).trim();
                    n[a] == null && gi(r, a, "")
                }
            else
                for (const s in t)
                    n[s] == null && gi(r, s, "");
        for (const s in n)
            s === "display" && (i = !0),
            gi(r, s, n[s])
    } else if (o) {
        if (t !== n) {
            const s = r[Nb];
            s && (n += ";" + s),
            r.cssText = n,
            i = Mb.test(n)
        }
    } else
        t && e.removeAttribute("style");
    Ni in e && (e[Ni] = i ? r.display : "",
    e[Wm] && (r.display = "none"))
}
const qu = /\s*!important$/;
function gi(e, t, n) {
    if (de(n))
        n.forEach(r => gi(e, t, r));
    else if (n == null && (n = ""),
    t.startsWith("--"))
        e.setProperty(t, n);
    else {
        const r = Fb(e, t);
        qu.test(n) ? e.setProperty(gn(r), n.replace(qu, ""), "important") : e[r] = n
    }
}
const Bu = ["Webkit", "Moz", "ms"]
  , Gs = {};
function Fb(e, t) {
    const n = Gs[t];
    if (n)
        return n;
    let r = At(t);
    if (r !== "filter" && r in e)
        return Gs[t] = r;
    r = Zi(r);
    for (let o = 0; o < Bu.length; o++) {
        const i = Bu[o] + r;
        if (i in e)
            return Gs[t] = i
    }
    return t
}
const ju = "http://www.w3.org/1999/xlink";
function Uu(e, t, n, r, o, i=jp(t)) {
    r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ju, t.slice(6, t.length)) : e.setAttributeNS(ju, t, n) : n == null || i && !Od(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : Ut(n) ? String(n) : n)
}
function Vu(e, t, n, r, o) {
    if (t === "innerHTML" || t === "textContent") {
        n != null && (e[t] = t === "innerHTML" ? Bm(n) : n);
        return
    }
    const i = e.tagName;
    if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
        const a = i === "OPTION" ? e.getAttribute("value") || "" : e.value
          , l = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
        (a !== l || !("_value"in e)) && (e.value = l),
        n == null && e.removeAttribute(t),
        e._value = n;
        return
    }
    let s = !1;
    if (n === "" || n == null) {
        const a = typeof e[t];
        a === "boolean" ? n = Od(n) : n == null && a === "string" ? (n = "",
        s = !0) : a === "number" && (n = 0,
        s = !0)
    }
    try {
        e[t] = n
    } catch {}
    s && e.removeAttribute(o || t)
}
function cn(e, t, n, r) {
    e.addEventListener(t, n, r)
}
function Db(e, t, n, r) {
    e.removeEventListener(t, n, r)
}
const Hu = Symbol("_vei");
function qb(e, t, n, r, o=null) {
    const i = e[Hu] || (e[Hu] = {})
      , s = i[t];
    if (r && s)
        s.value = r;
    else {
        const [a,l] = Bb(t);
        if (r) {
            const u = i[t] = Vb(r, o);
            cn(e, a, u, l)
        } else
            s && (Db(e, a, s, l),
            i[t] = void 0)
    }
}
const Wu = /(?:Once|Passive|Capture)$/;
function Bb(e) {
    let t;
    if (Wu.test(e)) {
        t = {};
        let r;
        for (; r = e.match(Wu); )
            e = e.slice(0, e.length - r[0].length),
            t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : gn(e.slice(2)), t]
}
let Ys = 0;
const jb = Promise.resolve()
  , Ub = () => Ys || (jb.then( () => Ys = 0),
Ys = Date.now());
function Vb(e, t) {
    const n = r => {
        if (!r._vts)
            r._vts = Date.now();
        else if (r._vts <= n.attached)
            return;
        Vt(Hb(r, n.value), t, 5, [r])
    }
    ;
    return n.value = e,
    n.attached = Ub(),
    n
}
function Hb(e, t) {
    if (de(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e),
            e._stopped = !0
        }
        ,
        t.map(r => o => !o._stopped && r && r(o))
    } else
        return t
}
const zu = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123
  , Wb = (e, t, n, r, o, i) => {
    const s = o === "svg";
    t === "class" ? Rb(e, r, s) : t === "style" ? $b(e, n, r) : Qi(t) ? fl(t) || qb(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1),
    !0) : t[0] === "^" ? (t = t.slice(1),
    !1) : zb(e, t, r, s)) ? (Vu(e, t, r),
    !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Uu(e, t, r, s, i, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !He(r)) ? Vu(e, At(t), r, i, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r),
    Uu(e, t, r, s))
}
;
function zb(e, t, n, r) {
    if (r)
        return !!(t === "innerHTML" || t === "textContent" || t in e && zu(t) && _e(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const o = e.tagName;
        if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
            return !1
    }
    return zu(t) && He(n) ? !1 : t in e
}
const zm = new WeakMap
  , Km = new WeakMap
  , Mi = Symbol("_moveCb")
  , Ku = Symbol("_enterCb")
  , Kb = e => (delete e.props.mode,
e)
  , Gb = Kb({
    name: "TransitionGroup",
    props: Ke({}, Um, {
        tag: String,
        moveClass: String
    }),
    setup(e, {slots: t}) {
        const n = Te()
          , r = am();
        let o, i;
        return Al( () => {
            if (!o.length)
                return;
            const s = e.moveClass || `${e.name || "v"}-move`;
            if (!Zb(o[0].el, n.vnode.el, s))
                return;
            o.forEach(Xb),
            o.forEach(Qb);
            const a = o.filter(Jb);
            Ia(),
            a.forEach(l => {
                const u = l.el
                  , c = u.style;
                Yt(u, s),
                c.transform = c.webkitTransform = c.transitionDuration = "";
                const d = u[Mi] = f => {
                    f && f.target !== u || (!f || /transform$/.test(f.propertyName)) && (u.removeEventListener("transitionend", d),
                    u[Mi] = null,
                    En(u, s))
                }
                ;
                u.addEventListener("transitionend", d)
            }
            )
        }
        ),
        () => {
            const s = Se(e)
              , a = Vm(s);
            let l = s.tag || dt;
            if (o = [],
            i)
                for (let u = 0; u < i.length; u++) {
                    const c = i[u];
                    c.el && c.el instanceof Element && (o.push(c),
                    Rn(c, Po(c, a, r, n)),
                    zm.set(c, c.el.getBoundingClientRect()))
                }
            i = t.default ? xl(t.default()) : [];
            for (let u = 0; u < i.length; u++) {
                const c = i[u];
                c.key != null && Rn(c, Po(c, a, r, n))
            }
            return gt(l, null, i)
        }
    }
})
  , Yb = Gb;
function Xb(e) {
    const t = e.el;
    t[Mi] && t[Mi](),
    t[Ku] && t[Ku]()
}
function Qb(e) {
    Km.set(e, e.el.getBoundingClientRect())
}
function Jb(e) {
    const t = zm.get(e)
      , n = Km.get(e)
      , r = t.left - n.left
      , o = t.top - n.top;
    if (r || o) {
        const i = e.el.style;
        return i.transform = i.webkitTransform = `translate(${r}px,${o}px)`,
        i.transitionDuration = "0s",
        e
    }
}
function Zb(e, t, n) {
    const r = e.cloneNode()
      , o = e[$r];
    o && o.forEach(a => {
        a.split(/\s+/).forEach(l => l && r.classList.remove(l))
    }
    ),
    n.split(/\s+/).forEach(a => a && r.classList.add(a)),
    r.style.display = "none";
    const i = t.nodeType === 1 ? t : t.parentNode;
    i.appendChild(r);
    const {hasTransform: s} = Hm(r);
    return i.removeChild(r),
    s
}
const In = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return de(t) ? n => Lr(t, n) : t
}
;
function e_(e) {
    e.target.composing = !0
}
function Gu(e) {
    const t = e.target;
    t.composing && (t.composing = !1,
    t.dispatchEvent(new Event("input")))
}
const Mt = Symbol("_assign")
  , Yu = {
    created(e, {modifiers: {lazy: t, trim: n, number: r}}, o) {
        e[Mt] = In(o);
        const i = r || o.props && o.props.type === "number";
        cn(e, t ? "change" : "input", s => {
            if (s.target.composing)
                return;
            let a = e.value;
            n && (a = a.trim()),
            i && (a = Si(a)),
            e[Mt](a)
        }
        ),
        n && cn(e, "change", () => {
            e.value = e.value.trim()
        }
        ),
        t || (cn(e, "compositionstart", e_),
        cn(e, "compositionend", Gu),
        cn(e, "change", Gu))
    },
    mounted(e, {value: t}) {
        e.value = t ?? ""
    },
    beforeUpdate(e, {value: t, oldValue: n, modifiers: {lazy: r, trim: o, number: i}}, s) {
        if (e[Mt] = In(s),
        e.composing)
            return;
        const a = (i || e.type === "number") && !/^0\d/.test(e.value) ? Si(e.value) : e.value
          , l = t ?? "";
        a !== l && (document.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === l) || (e.value = l))
    }
}
  , t_ = {
    deep: !0,
    created(e, t, n) {
        e[Mt] = In(n),
        cn(e, "change", () => {
            const r = e._modelValue
              , o = Fr(e)
              , i = e.checked
              , s = e[Mt];
            if (de(r)) {
                const a = pl(r, o)
                  , l = a !== -1;
                if (i && !l)
                    s(r.concat(o));
                else if (!i && l) {
                    const u = [...r];
                    u.splice(a, 1),
                    s(u)
                }
            } else if (Wr(r)) {
                const a = new Set(r);
                i ? a.add(o) : a.delete(o),
                s(a)
            } else
                s(Gm(e, i))
        }
        )
    },
    mounted: Xu,
    beforeUpdate(e, t, n) {
        e[Mt] = In(n),
        Xu(e, t, n)
    }
};
function Xu(e, {value: t, oldValue: n}, r) {
    e._modelValue = t;
    let o;
    if (de(t))
        o = pl(t, r.props.value) > -1;
    else if (Wr(t))
        o = t.has(r.props.value);
    else {
        if (t === n)
            return;
        o = sr(t, Gm(e, !0))
    }
    e.checked !== o && (e.checked = o)
}
const n_ = {
    created(e, {value: t}, n) {
        e.checked = sr(t, n.props.value),
        e[Mt] = In(n),
        cn(e, "change", () => {
            e[Mt](Fr(e))
        }
        )
    },
    beforeUpdate(e, {value: t, oldValue: n}, r) {
        e[Mt] = In(r),
        t !== n && (e.checked = sr(t, r.props.value))
    }
}
  , r_ = {
    deep: !0,
    created(e, {value: t, modifiers: {number: n}}, r) {
        const o = Wr(t);
        cn(e, "change", () => {
            const i = Array.prototype.filter.call(e.options, s => s.selected).map(s => n ? Si(Fr(s)) : Fr(s));
            e[Mt](e.multiple ? o ? new Set(i) : i : i[0]),
            e._assigning = !0,
            mt( () => {
                e._assigning = !1
            }
            )
        }
        ),
        e[Mt] = In(r)
    },
    mounted(e, {value: t}) {
        Qu(e, t)
    },
    beforeUpdate(e, t, n) {
        e[Mt] = In(n)
    },
    updated(e, {value: t}) {
        e._assigning || Qu(e, t)
    }
};
function Qu(e, t) {
    const n = e.multiple
      , r = de(t);
    if (!(n && !r && !Wr(t))) {
        for (let o = 0, i = e.options.length; o < i; o++) {
            const s = e.options[o]
              , a = Fr(s);
            if (n)
                if (r) {
                    const l = typeof a;
                    l === "string" || l === "number" ? s.selected = t.some(u => String(u) === String(a)) : s.selected = pl(t, a) > -1
                } else
                    s.selected = t.has(a);
            else if (sr(Fr(s), t)) {
                e.selectedIndex !== o && (e.selectedIndex = o);
                return
            }
        }
        !n && e.selectedIndex !== -1 && (e.selectedIndex = -1)
    }
}
function Fr(e) {
    return "_value"in e ? e._value : e.value
}
function Gm(e, t) {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t
}
const YA = {
    created(e, t, n) {
        ri(e, t, n, null, "created")
    },
    mounted(e, t, n) {
        ri(e, t, n, null, "mounted")
    },
    beforeUpdate(e, t, n, r) {
        ri(e, t, n, r, "beforeUpdate")
    },
    updated(e, t, n, r) {
        ri(e, t, n, r, "updated")
    }
};
function o_(e, t) {
    switch (e) {
    case "SELECT":
        return r_;
    case "TEXTAREA":
        return Yu;
    default:
        switch (t) {
        case "checkbox":
            return t_;
        case "radio":
            return n_;
        default:
            return Yu
        }
    }
}
function ri(e, t, n, r, o) {
    const s = o_(e.tagName, n.props && n.props.type)[o];
    s && s(e, t, n, r)
}
const i_ = ["ctrl", "shift", "alt", "meta"]
  , s_ = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => "button"in e && e.button !== 0,
    middle: e => "button"in e && e.button !== 1,
    right: e => "button"in e && e.button !== 2,
    exact: (e, t) => i_.some(n => e[`${n}Key`] && !t.includes(n))
}
  , XA = (e, t) => {
    const n = e._withMods || (e._withMods = {})
      , r = t.join(".");
    return n[r] || (n[r] = (o, ...i) => {
        for (let s = 0; s < t.length; s++) {
            const a = s_[t[s]];
            if (a && a(o, t))
                return
        }
        return e(o, ...i)
    }
    )
}
  , a_ = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
}
  , QA = (e, t) => {
    const n = e._withKeys || (e._withKeys = {})
      , r = t.join(".");
    return n[r] || (n[r] = o => {
        if (!("key"in o))
            return;
        const i = gn(o.key);
        if (t.some(s => s === i || a_[s] === i))
            return e(o)
    }
    )
}
  , l_ = Ke({
    patchProp: Wb
}, Ab);
let Ju;
function u_() {
    return Ju || (Ju = Qv(l_))
}
const c_ = (...e) => {
    const t = u_().createApp(...e)
      , {mount: n} = t;
    return t.mount = r => {
        const o = d_(r);
        if (!o)
            return;
        const i = t._component;
        !_e(i) && !i.render && !i.template && (i.template = o.innerHTML),
        o.nodeType === 1 && (o.textContent = "");
        const s = n(o, !1, f_(o));
        return o instanceof Element && (o.removeAttribute("v-cloak"),
        o.setAttribute("data-v-app", "")),
        s
    }
    ,
    t
}
;
function f_(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function d_(e) {
    return He(e) ? document.querySelector(e) : e
}
function Yr(e, t, n, r) {
    return Object.defineProperty(e, t, {
        get: n,
        set: r,
        enumerable: !0
    }),
    e
}
const Nn = le(!1);
let Na;
function m_(e, t) {
    const n = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
    return {
        browser: n[5] || n[3] || n[1] || "",
        version: n[4] || n[2] || "0",
        platform: t[0] || ""
    }
}
function h_(e) {
    return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || []
}
const Ym = "ontouchstart"in window || window.navigator.maxTouchPoints > 0;
function g_(e) {
    const t = e.toLowerCase()
      , n = h_(t)
      , r = m_(t, n)
      , o = {
        mobile: !1,
        desktop: !1,
        cordova: !1,
        capacitor: !1,
        nativeMobile: !1,
        electron: !1,
        bex: !1,
        linux: !1,
        mac: !1,
        win: !1,
        cros: !1,
        chrome: !1,
        firefox: !1,
        opera: !1,
        safari: !1,
        vivaldi: !1,
        edge: !1,
        edgeChromium: !1,
        ie: !1,
        webkit: !1,
        android: !1,
        ios: !1,
        ipad: !1,
        iphone: !1,
        ipod: !1,
        kindle: !1,
        winphone: !1,
        blackberry: !1,
        playbook: !1,
        silk: !1
    };
    r.browser && (o[r.browser] = !0,
    o.version = r.version,
    o.versionNumber = parseInt(r.version, 10)),
    r.platform && (o[r.platform] = !0);
    const i = o.android || o.ios || o.bb || o.blackberry || o.ipad || o.iphone || o.ipod || o.kindle || o.playbook || o.silk || o["windows phone"];
    if (i === !0 || t.indexOf("mobile") !== -1 ? o.mobile = !0 : o.desktop = !0,
    o["windows phone"] && (o.winphone = !0,
    delete o["windows phone"]),
    o.edga || o.edgios || o.edg ? (o.edge = !0,
    r.browser = "edge") : o.crios ? (o.chrome = !0,
    r.browser = "chrome") : o.fxios && (o.firefox = !0,
    r.browser = "firefox"),
    (o.ipod || o.ipad || o.iphone) && (o.ios = !0),
    o.vivaldi && (r.browser = "vivaldi",
    o.vivaldi = !0),
    (o.chrome || o.opr || o.safari || o.vivaldi || o.mobile === !0 && o.ios !== !0 && i !== !0) && (o.webkit = !0),
    o.opr && (r.browser = "opera",
    o.opera = !0),
    o.safari && (o.blackberry || o.bb ? (r.browser = "blackberry",
    o.blackberry = !0) : o.playbook ? (r.browser = "playbook",
    o.playbook = !0) : o.android ? (r.browser = "android",
    o.android = !0) : o.kindle ? (r.browser = "kindle",
    o.kindle = !0) : o.silk && (r.browser = "silk",
    o.silk = !0)),
    o.name = r.browser,
    o.platform = r.platform,
    t.indexOf("electron") !== -1)
        o.electron = !0;
    else if (document.location.href.indexOf("-extension://") !== -1)
        o.bex = !0;
    else {
        if (window.Capacitor !== void 0 ? (o.capacitor = !0,
        o.nativeMobile = !0,
        o.nativeMobileWrapper = "capacitor") : (window._cordovaNative !== void 0 || window.cordova !== void 0) && (o.cordova = !0,
        o.nativeMobile = !0,
        o.nativeMobileWrapper = "cordova"),
        Nn.value === !0 && (Na = {
            is: {
                ...o
            }
        }),
        Ym === !0 && o.mac === !0 && (o.desktop === !0 && o.safari === !0 || o.nativeMobile === !0 && o.android !== !0 && o.ios !== !0 && o.ipad !== !0)) {
            delete o.mac,
            delete o.desktop;
            const s = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
            Object.assign(o, {
                mobile: !0,
                ios: !0,
                platform: s,
                [s]: !0
            })
        }
        o.mobile !== !0 && window.navigator.userAgentData && window.navigator.userAgentData.mobile && (delete o.desktop,
        o.mobile = !0)
    }
    return o
}
const Zu = navigator.userAgent || navigator.vendor || window.opera
  , p_ = {
    has: {
        touch: !1,
        webStorage: !1
    },
    within: {
        iframe: !1
    }
}
  , Re = {
    userAgent: Zu,
    is: g_(Zu),
    has: {
        touch: Ym
    },
    within: {
        iframe: window.self !== window.top
    }
}
  , $i = {
    install(e) {
        const {$q: t} = e;
        Nn.value === !0 ? (e.onSSRHydrated.push( () => {
            Object.assign(t.platform, Re),
            Nn.value = !1
        }
        ),
        t.platform = Kr(this)) : t.platform = this
    }
};
{
    let e;
    Yr(Re.has, "webStorage", () => {
        if (e !== void 0)
            return e;
        try {
            if (window.localStorage)
                return e = !0,
                !0
        } catch {}
        return e = !1,
        !1
    }
    ),
    Object.assign($i, Re),
    Nn.value === !0 && (Object.assign($i, Na, p_),
    Na = null)
}
function Ne(e) {
    return os(Gr(e))
}
function hs(e) {
    return os(e)
}
const gs = (e, t) => {
    const n = Kr(e);
    for (const r in e)
        Yr(t, r, () => n[r], o => {
            n[r] = o
        }
        );
    return t
}
  , st = {
    hasPassive: !1,
    passiveCapture: !0,
    notPassiveCapture: !0
};
try {
    const e = Object.defineProperty({}, "passive", {
        get() {
            Object.assign(st, {
                hasPassive: !0,
                passive: {
                    passive: !0
                },
                notPassive: {
                    passive: !1
                },
                passiveCapture: {
                    passive: !0,
                    capture: !0
                },
                notPassiveCapture: {
                    passive: !1,
                    capture: !0
                }
            })
        }
    });
    window.addEventListener("qtest", null, e),
    window.removeEventListener("qtest", null, e)
} catch {}
function ur() {}
function Xm(e) {
    return e.button === 0
}
function Mn(e) {
    return e.touches && e.touches[0] ? e = e.touches[0] : e.changedTouches && e.changedTouches[0] ? e = e.changedTouches[0] : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]),
    {
        top: e.clientY,
        left: e.clientX
    }
}
function v_(e) {
    if (e.path)
        return e.path;
    if (e.composedPath)
        return e.composedPath();
    const t = [];
    let n = e.target;
    for (; n; ) {
        if (t.push(n),
        n.tagName === "HTML")
            return t.push(document),
            t.push(window),
            t;
        n = n.parentElement
    }
}
function tr(e) {
    e.stopPropagation()
}
function It(e) {
    e.cancelable !== !1 && e.preventDefault()
}
function Xe(e) {
    e.cancelable !== !1 && e.preventDefault(),
    e.stopPropagation()
}
function Ir(e, t) {
    if (e === void 0 || t === !0 && e.__dragPrevented === !0)
        return;
    const n = t === !0 ? r => {
        r.__dragPrevented = !0,
        r.addEventListener("dragstart", It, st.notPassiveCapture)
    }
    : r => {
        delete r.__dragPrevented,
        r.removeEventListener("dragstart", It, st.notPassiveCapture)
    }
    ;
    e.querySelectorAll("a, img").forEach(n)
}
function qt(e, t, n) {
    const r = `__q_${t}_evt`;
    e[r] = e[r] !== void 0 ? e[r].concat(n) : n,
    n.forEach(o => {
        o[0].addEventListener(o[1], e[o[2]], st[o[3]])
    }
    )
}
function On(e, t) {
    const n = `__q_${t}_evt`;
    e[n] !== void 0 && (e[n].forEach(r => {
        r[0].removeEventListener(r[1], e[r[2]], st[r[3]])
    }
    ),
    e[n] = void 0)
}
function Qm(e, t=250, n) {
    let r = null;
    function o() {
        const i = arguments
          , s = () => {
            r = null,
            e.apply(this, i)
        }
        ;
        r !== null && clearTimeout(r),
        r = setTimeout(s, t)
    }
    return o.cancel = () => {
        r !== null && clearTimeout(r)
    }
    ,
    o
}
const Xs = ["sm", "md", "lg", "xl"]
  , {passive: ec} = st
  , b_ = gs({
    width: 0,
    height: 0,
    name: "xs",
    sizes: {
        sm: 600,
        md: 1024,
        lg: 1440,
        xl: 1920
    },
    lt: {
        sm: !0,
        md: !0,
        lg: !0,
        xl: !0
    },
    gt: {
        xs: !1,
        sm: !1,
        md: !1,
        lg: !1
    },
    xs: !0,
    sm: !1,
    md: !1,
    lg: !1,
    xl: !1
}, {
    setSizes: ur,
    setDebounce: ur,
    install({$q: e, onSSRHydrated: t}) {
        if (e.screen = this,
        this.__installed === !0) {
            e.config.screen !== void 0 && (e.config.screen.bodyClasses === !1 ? document.body.classList.remove(`screen--${this.name}`) : this.__update(!0));
            return
        }
        const {visualViewport: n} = window
          , r = n || window
          , o = document.scrollingElement || document.documentElement
          , i = n === void 0 || Re.is.mobile === !0 ? () => [Math.max(window.innerWidth, o.clientWidth), Math.max(window.innerHeight, o.clientHeight)] : () => [n.width * n.scale + window.innerWidth - o.clientWidth, n.height * n.scale + window.innerHeight - o.clientHeight]
          , s = e.config.screen !== void 0 && e.config.screen.bodyClasses === !0;
        this.__update = d => {
            const [f,m] = i();
            if (m !== this.height && (this.height = m),
            f !== this.width)
                this.width = f;
            else if (d !== !0)
                return;
            let h = this.sizes;
            this.gt.xs = f >= h.sm,
            this.gt.sm = f >= h.md,
            this.gt.md = f >= h.lg,
            this.gt.lg = f >= h.xl,
            this.lt.sm = f < h.sm,
            this.lt.md = f < h.md,
            this.lt.lg = f < h.lg,
            this.lt.xl = f < h.xl,
            this.xs = this.lt.sm,
            this.sm = this.gt.xs === !0 && this.lt.md === !0,
            this.md = this.gt.sm === !0 && this.lt.lg === !0,
            this.lg = this.gt.md === !0 && this.lt.xl === !0,
            this.xl = this.gt.lg,
            h = this.xs === !0 && "xs" || this.sm === !0 && "sm" || this.md === !0 && "md" || this.lg === !0 && "lg" || "xl",
            h !== this.name && (s === !0 && (document.body.classList.remove(`screen--${this.name}`),
            document.body.classList.add(`screen--${h}`)),
            this.name = h)
        }
        ;
        let a, l = {}, u = 16;
        this.setSizes = d => {
            Xs.forEach(f => {
                d[f] !== void 0 && (l[f] = d[f])
            }
            )
        }
        ,
        this.setDebounce = d => {
            u = d
        }
        ;
        const c = () => {
            const d = getComputedStyle(document.body);
            d.getPropertyValue("--q-size-sm") && Xs.forEach(f => {
                this.sizes[f] = parseInt(d.getPropertyValue(`--q-size-${f}`), 10)
            }
            ),
            this.setSizes = f => {
                Xs.forEach(m => {
                    f[m] && (this.sizes[m] = f[m])
                }
                ),
                this.__update(!0)
            }
            ,
            this.setDebounce = f => {
                a !== void 0 && r.removeEventListener("resize", a, ec),
                a = f > 0 ? Qm(this.__update, f) : this.__update,
                r.addEventListener("resize", a, ec)
            }
            ,
            this.setDebounce(u),
            Object.keys(l).length !== 0 ? (this.setSizes(l),
            l = void 0) : this.__update(),
            s === !0 && this.name === "xs" && document.body.classList.add("screen--xs")
        }
        ;
        Nn.value === !0 ? t.push(c) : c()
    }
})
  , ut = gs({
    isActive: !1,
    mode: !1
}, {
    __media: void 0,
    set(e) {
        ut.mode = e,
        e === "auto" ? (ut.__media === void 0 && (ut.__media = window.matchMedia("(prefers-color-scheme: dark)"),
        ut.__updateMedia = () => {
            ut.set("auto")
        }
        ,
        ut.__media.addListener(ut.__updateMedia)),
        e = ut.__media.matches) : ut.__media !== void 0 && (ut.__media.removeListener(ut.__updateMedia),
        ut.__media = void 0),
        ut.isActive = e === !0,
        document.body.classList.remove(`body--${e === !0 ? "light" : "dark"}`),
        document.body.classList.add(`body--${e === !0 ? "dark" : "light"}`)
    },
    toggle() {
        ut.set(ut.isActive === !1)
    },
    install({$q: e, ssrContext: t}) {
        const {dark: n} = e.config;
        e.dark = this,
        this.__installed !== !0 && this.set(n !== void 0 ? n : !1)
    }
});
function __(e, t, n=document.body) {
    if (typeof e != "string")
        throw new TypeError("Expected a string as propName");
    if (typeof t != "string")
        throw new TypeError("Expected a string as value");
    if (!(n instanceof Element))
        throw new TypeError("Expected a DOM element");
    n.style.setProperty(`--q-${e}`, t)
}
let Jm = !1;
function y_(e) {
    Jm = e.isComposing === !0
}
function Zm(e) {
    return Jm === !0 || e !== Object(e) || e.isComposing === !0 || e.qKeyEvent === !0
}
function cr(e, t) {
    return Zm(e) === !0 ? !1 : [].concat(t).includes(e.keyCode)
}
function eh(e) {
    if (e.ios === !0)
        return "ios";
    if (e.android === !0)
        return "android"
}
function w_({is: e, has: t, within: n}, r) {
    const o = [e.desktop === !0 ? "desktop" : "mobile", `${t.touch === !1 ? "no-" : ""}touch`];
    if (e.mobile === !0) {
        const i = eh(e);
        i !== void 0 && o.push("platform-" + i)
    }
    if (e.nativeMobile === !0) {
        const i = e.nativeMobileWrapper;
        o.push(i),
        o.push("native-mobile"),
        e.ios === !0 && (r[i] === void 0 || r[i].iosStatusBarPadding !== !1) && o.push("q-ios-padding")
    } else
        e.electron === !0 ? o.push("electron") : e.bex === !0 && o.push("bex");
    return n.iframe === !0 && o.push("within-iframe"),
    o
}
function E_() {
    const {is: e} = Re
      , t = document.body.className
      , n = new Set(t.replace(/ {2}/g, " ").split(" "));
    if (e.nativeMobile !== !0 && e.electron !== !0 && e.bex !== !0) {
        if (e.desktop === !0)
            n.delete("mobile"),
            n.delete("platform-ios"),
            n.delete("platform-android"),
            n.add("desktop");
        else if (e.mobile === !0) {
            n.delete("desktop"),
            n.add("mobile"),
            n.delete("platform-ios"),
            n.delete("platform-android");
            const o = eh(e);
            o !== void 0 && n.add(`platform-${o}`)
        }
    }
    Re.has.touch === !0 && (n.delete("no-touch"),
    n.add("touch")),
    Re.within.iframe === !0 && n.add("within-iframe");
    const r = Array.from(n).join(" ");
    t !== r && (document.body.className = r)
}
function S_(e) {
    for (const t in e)
        __(t, e[t])
}
const C_ = {
    install(e) {
        if (this.__installed !== !0) {
            if (Nn.value === !0)
                E_();
            else {
                const {$q: t} = e;
                t.config.brand !== void 0 && S_(t.config.brand);
                const n = w_(Re, t.config);
                document.body.classList.add.apply(document.body.classList, n)
            }
            Re.is.ios === !0 && document.body.addEventListener("touchstart", ur),
            window.addEventListener("keydown", y_, !0)
        }
    }
}
  , th = () => !0;
function T_(e) {
    return typeof e == "string" && e !== "" && e !== "/" && e !== "#/"
}
function x_(e) {
    return e.startsWith("#") === !0 && (e = e.substring(1)),
    e.startsWith("/") === !1 && (e = "/" + e),
    e.endsWith("/") === !0 && (e = e.substring(0, e.length - 1)),
    "#" + e
}
function k_(e) {
    if (e.backButtonExit === !1)
        return () => !1;
    if (e.backButtonExit === "*")
        return th;
    const t = ["#/"];
    return Array.isArray(e.backButtonExit) === !0 && t.push(...e.backButtonExit.filter(T_).map(x_)),
    () => t.includes(window.location.hash)
}
const No = {
    __history: [],
    add: ur,
    remove: ur,
    install({$q: e}) {
        if (this.__installed === !0)
            return;
        const {cordova: t, capacitor: n} = Re.is;
        if (t !== !0 && n !== !0)
            return;
        const r = e.config[t === !0 ? "cordova" : "capacitor"];
        if (r !== void 0 && r.backButton === !1 || n === !0 && (window.Capacitor === void 0 || window.Capacitor.Plugins.App === void 0))
            return;
        this.add = s => {
            s.condition === void 0 && (s.condition = th),
            this.__history.push(s)
        }
        ,
        this.remove = s => {
            const a = this.__history.indexOf(s);
            a >= 0 && this.__history.splice(a, 1)
        }
        ;
        const o = k_(Object.assign({
            backButtonExit: !0
        }, r))
          , i = () => {
            if (this.__history.length) {
                const s = this.__history[this.__history.length - 1];
                s.condition() === !0 && (this.__history.pop(),
                s.handler())
            } else
                o() === !0 ? navigator.app.exitApp() : window.history.back()
        }
        ;
        t === !0 ? document.addEventListener("deviceready", () => {
            document.addEventListener("backbutton", i, !1)
        }
        ) : window.Capacitor.Plugins.App.addListener("backButton", i)
    }
}
  , tc = {
    isoName: "en-US",
    nativeName: "English (US)",
    label: {
        clear: "Clear",
        ok: "OK",
        cancel: "Cancel",
        close: "Close",
        set: "Set",
        select: "Select",
        reset: "Reset",
        remove: "Remove",
        update: "Update",
        create: "Create",
        search: "Search",
        filter: "Filter",
        refresh: "Refresh",
        expand: e => e ? `Expand "${e}"` : "Expand",
        collapse: e => e ? `Collapse "${e}"` : "Collapse"
    },
    date: {
        days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        firstDayOfWeek: 0,
        format24h: !1,
        pluralDay: "days"
    },
    table: {
        noData: "No data available",
        noResults: "No matching records found",
        loading: "Loading...",
        selectedRecords: e => e === 1 ? "1 record selected." : (e === 0 ? "No" : e) + " records selected.",
        recordsPerPage: "Records per page:",
        allRows: "All",
        pagination: (e, t, n) => e + "-" + t + " of " + n,
        columns: "Columns"
    },
    editor: {
        url: "URL",
        bold: "Bold",
        italic: "Italic",
        strikethrough: "Strikethrough",
        underline: "Underline",
        unorderedList: "Unordered List",
        orderedList: "Ordered List",
        subscript: "Subscript",
        superscript: "Superscript",
        hyperlink: "Hyperlink",
        toggleFullscreen: "Toggle Fullscreen",
        quote: "Quote",
        left: "Left align",
        center: "Center align",
        right: "Right align",
        justify: "Justify align",
        print: "Print",
        outdent: "Decrease indentation",
        indent: "Increase indentation",
        removeFormat: "Remove formatting",
        formatting: "Formatting",
        fontSize: "Font Size",
        align: "Align",
        hr: "Insert Horizontal Rule",
        undo: "Undo",
        redo: "Redo",
        heading1: "Heading 1",
        heading2: "Heading 2",
        heading3: "Heading 3",
        heading4: "Heading 4",
        heading5: "Heading 5",
        heading6: "Heading 6",
        paragraph: "Paragraph",
        code: "Code",
        size1: "Very small",
        size2: "A bit small",
        size3: "Normal",
        size4: "Medium-large",
        size5: "Big",
        size6: "Very big",
        size7: "Maximum",
        defaultFont: "Default Font",
        viewSource: "View Source"
    },
    tree: {
        noNodes: "No nodes available",
        noResults: "No matching nodes found"
    }
};
function nc() {
    const e = Array.isArray(navigator.languages) === !0 && navigator.languages.length !== 0 ? navigator.languages[0] : navigator.language;
    if (typeof e == "string")
        return e.split(/[-_]/).map( (t, n) => n === 0 ? t.toLowerCase() : n > 1 || t.length < 4 ? t.toUpperCase() : t[0].toUpperCase() + t.slice(1).toLowerCase()).join("-")
}
const xn = gs({
    __qLang: {}
}, {
    getLocale: nc,
    set(e=tc, t) {
        const n = {
            ...e,
            rtl: e.rtl === !0,
            getLocale: nc
        };
        {
            if (n.set = xn.set,
            xn.__langConfig === void 0 || xn.__langConfig.noHtmlAttrs !== !0) {
                const r = document.documentElement;
                r.setAttribute("dir", n.rtl === !0 ? "rtl" : "ltr"),
                r.setAttribute("lang", n.isoName)
            }
            Object.assign(xn.__qLang, n)
        }
    },
    install({$q: e, lang: t, ssrContext: n}) {
        e.lang = xn.__qLang,
        xn.__langConfig = e.config.lang,
        this.__installed === !0 ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qLang,{
            get() {
                return Reflect.get(...arguments)
            },
            ownKeys(r) {
                return Reflect.ownKeys(r).filter(o => o !== "set" && o !== "getLocale")
            }
        }),
        this.set(t || tc))
    }
})
  , A_ = {
    name: "material-icons",
    type: {
        positive: "check_circle",
        negative: "warning",
        info: "info",
        warning: "priority_high"
    },
    arrow: {
        up: "arrow_upward",
        right: "arrow_forward",
        down: "arrow_downward",
        left: "arrow_back",
        dropdown: "arrow_drop_down"
    },
    chevron: {
        left: "chevron_left",
        right: "chevron_right"
    },
    colorPicker: {
        spectrum: "gradient",
        tune: "tune",
        palette: "style"
    },
    pullToRefresh: {
        icon: "refresh"
    },
    carousel: {
        left: "chevron_left",
        right: "chevron_right",
        up: "keyboard_arrow_up",
        down: "keyboard_arrow_down",
        navigationIcon: "lens"
    },
    chip: {
        remove: "cancel",
        selected: "check"
    },
    datetime: {
        arrowLeft: "chevron_left",
        arrowRight: "chevron_right",
        now: "access_time",
        today: "today"
    },
    editor: {
        bold: "format_bold",
        italic: "format_italic",
        strikethrough: "strikethrough_s",
        underline: "format_underlined",
        unorderedList: "format_list_bulleted",
        orderedList: "format_list_numbered",
        subscript: "vertical_align_bottom",
        superscript: "vertical_align_top",
        hyperlink: "link",
        toggleFullscreen: "fullscreen",
        quote: "format_quote",
        left: "format_align_left",
        center: "format_align_center",
        right: "format_align_right",
        justify: "format_align_justify",
        print: "print",
        outdent: "format_indent_decrease",
        indent: "format_indent_increase",
        removeFormat: "format_clear",
        formatting: "text_format",
        fontSize: "format_size",
        align: "format_align_left",
        hr: "remove",
        undo: "undo",
        redo: "redo",
        heading: "format_size",
        code: "code",
        size: "format_size",
        font: "font_download",
        viewSource: "code"
    },
    expansionItem: {
        icon: "keyboard_arrow_down",
        denseIcon: "arrow_drop_down"
    },
    fab: {
        icon: "add",
        activeIcon: "close"
    },
    field: {
        clear: "cancel",
        error: "error"
    },
    pagination: {
        first: "first_page",
        prev: "keyboard_arrow_left",
        next: "keyboard_arrow_right",
        last: "last_page"
    },
    rating: {
        icon: "grade"
    },
    stepper: {
        done: "check",
        active: "edit",
        error: "warning"
    },
    tabs: {
        left: "chevron_left",
        right: "chevron_right",
        up: "keyboard_arrow_up",
        down: "keyboard_arrow_down"
    },
    table: {
        arrowUp: "arrow_upward",
        warning: "warning",
        firstPage: "first_page",
        prevPage: "chevron_left",
        nextPage: "chevron_right",
        lastPage: "last_page"
    },
    tree: {
        icon: "play_arrow"
    },
    uploader: {
        done: "done",
        clear: "clear",
        add: "add_box",
        upload: "cloud_upload",
        removeQueue: "clear_all",
        removeUploaded: "done_all"
    }
}
  , Fi = gs({
    iconMapFn: null,
    __qIconSet: {}
}, {
    set(e, t) {
        const n = {
            ...e
        };
        n.set = Fi.set,
        Object.assign(Fi.__qIconSet, n)
    },
    install({$q: e, iconSet: t, ssrContext: n}) {
        e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn),
        e.iconSet = this.__qIconSet,
        Yr(e, "iconMapFn", () => this.iconMapFn, r => {
            this.iconMapFn = r
        }
        ),
        this.__installed === !0 ? t !== void 0 && this.set(t) : (this.props = new Proxy(this.__qIconSet,{
            get() {
                return Reflect.get(...arguments)
            },
            ownKeys(r) {
                return Reflect.ownKeys(r).filter(o => o !== "set")
            }
        }),
        this.set(t || A_))
    }
})
  , nh = "_q_"
  , rh = "_q_t_"
  , L_ = "_q_fo_";
function Qs() {}
const Di = {};
let oh = !1;
function O_() {
    oh = !0
}
function Pn(e) {
    return e !== null && typeof e == "object" && Array.isArray(e) !== !0
}
function ih(e) {
    return typeof e == "number" && isFinite(e)
}
const rc = [$i, C_, ut, b_, No, xn, Fi];
function P_(e, t) {
    const n = c_(e);
    n.config.globalProperties = t.config.globalProperties;
    const {reload: r, ...o} = t._context;
    return Object.assign(n._context, o),
    n
}
function oc(e, t) {
    t.forEach(n => {
        n.install(e),
        n.__installed = !0
    }
    )
}
function R_(e, t, n) {
    e.config.globalProperties.$q = n.$q,
    e.provide(nh, n.$q),
    oc(n, rc),
    t.components !== void 0 && Object.values(t.components).forEach(r => {
        Pn(r) === !0 && r.name !== void 0 && e.component(r.name, r)
    }
    ),
    t.directives !== void 0 && Object.values(t.directives).forEach(r => {
        Pn(r) === !0 && r.name !== void 0 && e.directive(r.name, r)
    }
    ),
    t.plugins !== void 0 && oc(n, Object.values(t.plugins).filter(r => typeof r.install == "function" && rc.includes(r) === !1)),
    Nn.value === !0 && (n.$q.onSSRHydrated = () => {
        n.onSSRHydrated.forEach(r => {
            r()
        }
        ),
        n.$q.onSSRHydrated = () => {}
    }
    )
}
const I_ = function(e, t={}) {
    const n = {
        version: "2.17.4"
    };
    oh === !1 ? (t.config !== void 0 && Object.assign(Di, t.config),
    n.config = {
        ...Di
    },
    O_()) : n.config = t.config || {},
    R_(e, t, {
        parentApp: e,
        $q: n,
        lang: t.lang,
        iconSet: t.iconSet,
        onSSRHydrated: []
    })
}
  , JA = {
    name: "Quasar",
    version: "2.17.4",
    install: I_,
    lang: xn,
    iconSet: Fi
}
  , Ma = {
    xs: 18,
    sm: 24,
    md: 32,
    lg: 38,
    xl: 46
}
  , zo = {
    size: String
};
function Ko(e, t=Ma) {
    return O( () => e.size !== void 0 ? {
        fontSize: e.size in t ? `${t[e.size]}px` : e.size
    } : null)
}
function ze(e, t) {
    return e !== void 0 && e() || t
}
function sh(e, t) {
    if (e !== void 0) {
        const n = e();
        if (n != null)
            return n.slice()
    }
    return t
}
function dn(e, t) {
    return e !== void 0 ? t.concat(e()) : t
}
function N_(e, t) {
    return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e()
}
function ah(e, t, n, r, o, i) {
    t.key = r + o;
    const s = M(e, t, n);
    return o === !0 ? Tl(s, i()) : s
}
const ic = "0 0 24 24"
  , sc = e => e
  , Js = e => `ionicons ${e}`
  , lh = {
    "mdi-": e => `mdi ${e}`,
    "icon-": sc,
    "bt-": e => `bt ${e}`,
    "eva-": e => `eva ${e}`,
    "ion-md": Js,
    "ion-ios": Js,
    "ion-logo": Js,
    "iconfont ": sc,
    "ti-": e => `themify-icon ${e}`,
    "bi-": e => `bootstrap-icons ${e}`
}
  , uh = {
    o_: "-outlined",
    r_: "-round",
    s_: "-sharp"
}
  , ch = {
    sym_o_: "-outlined",
    sym_r_: "-rounded",
    sym_s_: "-sharp"
}
  , M_ = new RegExp("^(" + Object.keys(lh).join("|") + ")")
  , $_ = new RegExp("^(" + Object.keys(uh).join("|") + ")")
  , ac = new RegExp("^(" + Object.keys(ch).join("|") + ")")
  , F_ = /^[Mm]\s?[-+]?\.?\d/
  , D_ = /^img:/
  , q_ = /^svguse:/
  , B_ = /^ion-/
  , j_ = /^(fa-(classic|sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /
  , Ht = Ne({
    name: "QIcon",
    props: {
        ...zo,
        tag: {
            type: String,
            default: "i"
        },
        name: String,
        color: String,
        left: Boolean,
        right: Boolean
    },
    setup(e, {slots: t}) {
        const {proxy: {$q: n}} = Te()
          , r = Ko(e)
          , o = O( () => "q-icon" + (e.left === !0 ? " on-left" : "") + (e.right === !0 ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : ""))
          , i = O( () => {
            let s, a = e.name;
            if (a === "none" || !a)
                return {
                    none: !0
                };
            if (n.iconMapFn !== null) {
                const c = n.iconMapFn(a);
                if (c !== void 0)
                    if (c.icon !== void 0) {
                        if (a = c.icon,
                        a === "none" || !a)
                            return {
                                none: !0
                            }
                    } else
                        return {
                            cls: c.cls,
                            content: c.content !== void 0 ? c.content : " "
                        }
            }
            if (F_.test(a) === !0) {
                const [c,d=ic] = a.split("|");
                return {
                    svg: !0,
                    viewBox: d,
                    nodes: c.split("&&").map(f => {
                        const [m,h,g] = f.split("@@");
                        return M("path", {
                            style: h,
                            d: m,
                            transform: g
                        })
                    }
                    )
                }
            }
            if (D_.test(a) === !0)
                return {
                    img: !0,
                    src: a.substring(4)
                };
            if (q_.test(a) === !0) {
                const [c,d=ic] = a.split("|");
                return {
                    svguse: !0,
                    src: c.substring(7),
                    viewBox: d
                }
            }
            let l = " ";
            const u = a.match(M_);
            if (u !== null)
                s = lh[u[1]](a);
            else if (j_.test(a) === !0)
                s = a;
            else if (B_.test(a) === !0)
                s = `ionicons ion-${n.platform.is.ios === !0 ? "ios" : "md"}${a.substring(3)}`;
            else if (ac.test(a) === !0) {
                s = "notranslate material-symbols";
                const c = a.match(ac);
                c !== null && (a = a.substring(6),
                s += ch[c[1]]),
                l = a
            } else {
                s = "notranslate material-icons";
                const c = a.match($_);
                c !== null && (a = a.substring(2),
                s += uh[c[1]]),
                l = a
            }
            return {
                cls: s,
                content: l
            }
        }
        );
        return () => {
            const s = {
                class: o.value,
                style: r.value,
                "aria-hidden": "true",
                role: "presentation"
            };
            return i.value.none === !0 ? M(e.tag, s, ze(t.default)) : i.value.img === !0 ? M(e.tag, s, dn(t.default, [M("img", {
                src: i.value.src
            })])) : i.value.svg === !0 ? M(e.tag, s, dn(t.default, [M("svg", {
                viewBox: i.value.viewBox || "0 0 24 24"
            }, i.value.nodes)])) : i.value.svguse === !0 ? M(e.tag, s, dn(t.default, [M("svg", {
                viewBox: i.value.viewBox
            }, [M("use", {
                "xlink:href": i.value.src
            })])])) : (i.value.cls !== void 0 && (s.class += " " + i.value.cls),
            M(e.tag, s, dn(t.default, [i.value.content])))
        }
    }
})
  , U_ = Ne({
    name: "QAvatar",
    props: {
        ...zo,
        fontSize: String,
        color: String,
        textColor: String,
        icon: String,
        square: Boolean,
        rounded: Boolean
    },
    setup(e, {slots: t}) {
        const n = Ko(e)
          , r = O( () => "q-avatar" + (e.color ? ` bg-${e.color}` : "") + (e.textColor ? ` text-${e.textColor} q-chip--colored` : "") + (e.square === !0 ? " q-avatar--square" : e.rounded === !0 ? " rounded-borders" : ""))
          , o = O( () => e.fontSize ? {
            fontSize: e.fontSize
        } : null);
        return () => {
            const i = e.icon !== void 0 ? [M(Ht, {
                name: e.icon
            })] : void 0;
            return M("div", {
                class: r.value,
                style: n.value
            }, [M("div", {
                class: "q-avatar__content row flex-center overflow-hidden",
                style: o.value
            }, N_(t.default, i))])
        }
    }
})
  , fh = {
    size: {
        type: [String, Number],
        default: "1em"
    },
    color: String
};
function dh(e) {
    return {
        cSize: O( () => e.size in Ma ? `${Ma[e.size]}px` : e.size),
        classes: O( () => "q-spinner" + (e.color ? ` text-${e.color}` : ""))
    }
}
const Il = Ne({
    name: "QSpinner",
    props: {
        ...fh,
        thickness: {
            type: Number,
            default: 5
        }
    },
    setup(e) {
        const {cSize: t, classes: n} = dh(e);
        return () => M("svg", {
            class: n.value + " q-spinner-mat",
            width: t.value,
            height: t.value,
            viewBox: "25 25 50 50"
        }, [M("circle", {
            class: "path",
            cx: "50",
            cy: "50",
            r: "20",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": e.thickness,
            "stroke-miterlimit": "10"
        })])
    }
});
function $a(e, t) {
    const n = e.style;
    for (const r in t)
        n[r] = t[r]
}
function V_(e) {
    if (e == null)
        return;
    if (typeof e == "string")
        try {
            return document.querySelector(e) || void 0
        } catch {
            return
        }
    const t = Ln(e);
    if (t)
        return t.$el || t
}
function mh(e, t) {
    if (e == null || e.contains(t) === !0)
        return !0;
    for (let n = e.nextElementSibling; n !== null; n = n.nextElementSibling)
        if (n.contains(t))
            return !0;
    return !1
}
function H_(e, t=250) {
    let n = !1, r;
    return function() {
        return n === !1 && (n = !0,
        setTimeout( () => {
            n = !1
        }
        , t),
        r = e.apply(this, arguments)),
        r
    }
}
function lc(e, t, n, r) {
    n.modifiers.stop === !0 && tr(e);
    const o = n.modifiers.color;
    let i = n.modifiers.center;
    i = i === !0 || r === !0;
    const s = document.createElement("span")
      , a = document.createElement("span")
      , l = Mn(e)
      , {left: u, top: c, width: d, height: f} = t.getBoundingClientRect()
      , m = Math.sqrt(d * d + f * f)
      , h = m / 2
      , g = `${(d - m) / 2}px`
      , b = i ? g : `${l.left - u - h}px`
      , T = `${(f - m) / 2}px`
      , E = i ? T : `${l.top - c - h}px`;
    a.className = "q-ripple__inner",
    $a(a, {
        height: `${m}px`,
        width: `${m}px`,
        transform: `translate3d(${b},${E},0) scale3d(.2,.2,1)`,
        opacity: 0
    }),
    s.className = `q-ripple${o ? " text-" + o : ""}`,
    s.setAttribute("dir", "ltr"),
    s.appendChild(a),
    t.appendChild(s);
    const v = () => {
        s.remove(),
        clearTimeout(p)
    }
    ;
    n.abort.push(v);
    let p = setTimeout( () => {
        a.classList.add("q-ripple__inner--enter"),
        a.style.transform = `translate3d(${g},${T},0) scale3d(1,1,1)`,
        a.style.opacity = .2,
        p = setTimeout( () => {
            a.classList.remove("q-ripple__inner--enter"),
            a.classList.add("q-ripple__inner--leave"),
            a.style.opacity = 0,
            p = setTimeout( () => {
                s.remove(),
                n.abort.splice(n.abort.indexOf(v), 1)
            }
            , 275)
        }
        , 250)
    }
    , 50)
}
function uc(e, {modifiers: t, value: n, arg: r}) {
    const o = Object.assign({}, e.cfg.ripple, t, n);
    e.modifiers = {
        early: o.early === !0,
        stop: o.stop === !0,
        center: o.center === !0,
        color: o.color || r,
        keyCodes: [].concat(o.keyCodes || 13)
    }
}
const W_ = hs({
    name: "ripple",
    beforeMount(e, t) {
        const n = t.instance.$.appContext.config.globalProperties.$q.config || {};
        if (n.ripple === !1)
            return;
        const r = {
            cfg: n,
            enabled: t.value !== !1,
            modifiers: {},
            abort: [],
            start(o) {
                r.enabled === !0 && o.qSkipRipple !== !0 && o.type === (r.modifiers.early === !0 ? "pointerdown" : "click") && lc(o, e, r, o.qKeyEvent === !0)
            },
            keystart: H_(o => {
                r.enabled === !0 && o.qSkipRipple !== !0 && cr(o, r.modifiers.keyCodes) === !0 && o.type === `key${r.modifiers.early === !0 ? "down" : "up"}` && lc(o, e, r, !0)
            }
            , 300)
        };
        uc(r, t),
        e.__qripple = r,
        qt(r, "main", [[e, "pointerdown", "start", "passive"], [e, "click", "start", "passive"], [e, "keydown", "keystart", "passive"], [e, "keyup", "keystart", "passive"]])
    },
    updated(e, t) {
        if (t.oldValue !== t.value) {
            const n = e.__qripple;
            n !== void 0 && (n.enabled = t.value !== !1,
            n.enabled === !0 && Object(t.value) === t.value && uc(n, t))
        }
    },
    beforeUnmount(e) {
        const t = e.__qripple;
        t !== void 0 && (t.abort.forEach(n => {
            n()
        }
        ),
        On(t, "main"),
        delete e._qripple)
    }
})
  , hh = {
    left: "start",
    center: "center",
    right: "end",
    between: "between",
    around: "around",
    evenly: "evenly",
    stretch: "stretch"
}
  , z_ = Object.keys(hh)
  , gh = {
    align: {
        type: String,
        validator: e => z_.includes(e)
    }
};
function ph(e) {
    return O( () => {
        const t = e.align === void 0 ? e.vertical === !0 ? "stretch" : "left" : e.align;
        return `${e.vertical === !0 ? "items" : "justify"}-${hh[t]}`
    }
    )
}
function pi(e) {
    if (Object(e.$parent) === e.$parent)
        return e.$parent;
    let {parent: t} = e.$;
    for (; Object(t) === t; ) {
        if (Object(t.proxy) === t.proxy)
            return t.proxy;
        t = t.parent
    }
}
function vh(e, t) {
    typeof t.type == "symbol" ? Array.isArray(t.children) === !0 && t.children.forEach(n => {
        vh(e, n)
    }
    ) : e.add(t)
}
function K_(e) {
    const t = new Set;
    return e.forEach(n => {
        vh(t, n)
    }
    ),
    Array.from(t)
}
function Nl(e) {
    return e.appContext.config.globalProperties.$router !== void 0
}
function bh(e) {
    return e.isUnmounted === !0 || e.isDeactivated === !0
}
function cc(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
function fc(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function G_(e, t) {
    for (const n in t) {
        const r = t[n]
          , o = e[n];
        if (typeof r == "string") {
            if (r !== o)
                return !1
        } else if (Array.isArray(o) === !1 || o.length !== r.length || r.some( (i, s) => i !== o[s]))
            return !1
    }
    return !0
}
function dc(e, t) {
    return Array.isArray(t) === !0 ? e.length === t.length && e.every( (n, r) => n === t[r]) : e.length === 1 && e[0] === t
}
function Y_(e, t) {
    return Array.isArray(e) === !0 ? dc(e, t) : Array.isArray(t) === !0 ? dc(t, e) : e === t
}
function X_(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (Y_(e[n], t[n]) === !1)
            return !1;
    return !0
}
const _h = {
    to: [String, Object],
    replace: Boolean,
    href: String,
    target: String,
    disable: Boolean
}
  , Ml = {
    ..._h,
    exact: Boolean,
    activeClass: {
        type: String,
        default: "q-router-link--active"
    },
    exactActiveClass: {
        type: String,
        default: "q-router-link--exact-active"
    }
};
function yh({fallbackTag: e, useDisableForRouterLinkProps: t=!0}={}) {
    const n = Te()
      , {props: r, proxy: o, emit: i} = n
      , s = Nl(n)
      , a = O( () => r.disable !== !0 && r.href !== void 0)
      , l = O(t === !0 ? () => s === !0 && r.disable !== !0 && a.value !== !0 && r.to !== void 0 && r.to !== null && r.to !== "" : () => s === !0 && a.value !== !0 && r.to !== void 0 && r.to !== null && r.to !== "")
      , u = O( () => l.value === !0 ? E(r.to) : null)
      , c = O( () => u.value !== null)
      , d = O( () => a.value === !0 || c.value === !0)
      , f = O( () => r.type === "a" || d.value === !0 ? "a" : r.tag || e || "div")
      , m = O( () => a.value === !0 ? {
        href: r.href,
        target: r.target
    } : c.value === !0 ? {
        href: u.value.href,
        target: r.target
    } : {})
      , h = O( () => {
        if (c.value === !1)
            return -1;
        const {matched: C} = u.value
          , {length: w} = C
          , k = C[w - 1];
        if (k === void 0)
            return -1;
        const P = o.$route.matched;
        if (P.length === 0)
            return -1;
        const A = P.findIndex(fc.bind(null, k));
        if (A !== -1)
            return A;
        const R = cc(C[w - 2]);
        return w > 1 && cc(k) === R && P[P.length - 1].path !== R ? P.findIndex(fc.bind(null, C[w - 2])) : A
    }
    )
      , g = O( () => c.value === !0 && h.value !== -1 && G_(o.$route.params, u.value.params))
      , b = O( () => g.value === !0 && h.value === o.$route.matched.length - 1 && X_(o.$route.params, u.value.params))
      , T = O( () => c.value === !0 ? b.value === !0 ? ` ${r.exactActiveClass} ${r.activeClass}` : r.exact === !0 ? "" : g.value === !0 ? ` ${r.activeClass}` : "" : "");
    function E(C) {
        try {
            return o.$router.resolve(C)
        } catch {}
        return null
    }
    function v(C, {returnRouterError: w, to: k=r.to, replace: P=r.replace}={}) {
        if (r.disable === !0)
            return C.preventDefault(),
            Promise.resolve(!1);
        if (C.metaKey || C.altKey || C.ctrlKey || C.shiftKey || C.button !== void 0 && C.button !== 0 || r.target === "_blank")
            return Promise.resolve(!1);
        C.preventDefault();
        const A = o.$router[P === !0 ? "replace" : "push"](k);
        return w === !0 ? A : A.then( () => {}
        ).catch( () => {}
        )
    }
    function p(C) {
        if (c.value === !0) {
            const w = k => v(C, k);
            i("click", C, w),
            C.defaultPrevented !== !0 && w()
        } else
            i("click", C)
    }
    return {
        hasRouterLink: c,
        hasHrefLink: a,
        hasLink: d,
        linkTag: f,
        resolvedLink: u,
        linkIsActive: g,
        linkIsExactActive: b,
        linkClass: T,
        linkAttrs: m,
        getLink: E,
        navigateToRouterLink: v,
        navigateOnClick: p
    }
}
const mc = {
    none: 0,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32
}
  , Q_ = {
    xs: 8,
    sm: 10,
    md: 14,
    lg: 20,
    xl: 24
}
  , J_ = ["button", "submit", "reset"]
  , Z_ = /[^\s]\/[^\s]/
  , ey = ["flat", "outline", "push", "unelevated"];
function wh(e, t) {
    return e.flat === !0 ? "flat" : e.outline === !0 ? "outline" : e.push === !0 ? "push" : e.unelevated === !0 ? "unelevated" : t
}
function ty(e) {
    const t = wh(e);
    return t !== void 0 ? {
        [t]: !0
    } : {}
}
const ny = {
    ...zo,
    ..._h,
    type: {
        type: String,
        default: "button"
    },
    label: [Number, String],
    icon: String,
    iconRight: String,
    ...ey.reduce( (e, t) => (e[t] = Boolean) && e, {}),
    square: Boolean,
    rounded: Boolean,
    glossy: Boolean,
    size: String,
    fab: Boolean,
    fabMini: Boolean,
    padding: String,
    color: String,
    textColor: String,
    noCaps: Boolean,
    noWrap: Boolean,
    dense: Boolean,
    tabindex: [Number, String],
    ripple: {
        type: [Boolean, Object],
        default: !0
    },
    align: {
        ...gh.align,
        default: "center"
    },
    stack: Boolean,
    stretch: Boolean,
    loading: {
        type: Boolean,
        default: null
    },
    disable: Boolean
}
  , ry = {
    ...ny,
    round: Boolean
};
function oy(e) {
    const t = Ko(e, Q_)
      , n = ph(e)
      , {hasRouterLink: r, hasLink: o, linkTag: i, linkAttrs: s, navigateOnClick: a} = yh({
        fallbackTag: "button"
    })
      , l = O( () => {
        const b = e.fab === !1 && e.fabMini === !1 ? t.value : {};
        return e.padding !== void 0 ? Object.assign({}, b, {
            padding: e.padding.split(/\s+/).map(T => T in mc ? mc[T] + "px" : T).join(" "),
            minWidth: "0",
            minHeight: "0"
        }) : b
    }
    )
      , u = O( () => e.rounded === !0 || e.fab === !0 || e.fabMini === !0)
      , c = O( () => e.disable !== !0 && e.loading !== !0)
      , d = O( () => c.value === !0 ? e.tabindex || 0 : -1)
      , f = O( () => wh(e, "standard"))
      , m = O( () => {
        const b = {
            tabindex: d.value
        };
        return o.value === !0 ? Object.assign(b, s.value) : J_.includes(e.type) === !0 && (b.type = e.type),
        i.value === "a" ? (e.disable === !0 ? b["aria-disabled"] = "true" : b.href === void 0 && (b.role = "button"),
        r.value !== !0 && Z_.test(e.type) === !0 && (b.type = e.type)) : e.disable === !0 && (b.disabled = "",
        b["aria-disabled"] = "true"),
        e.loading === !0 && e.percentage !== void 0 && Object.assign(b, {
            role: "progressbar",
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": e.percentage
        }),
        b
    }
    )
      , h = O( () => {
        let b;
        e.color !== void 0 ? e.flat === !0 || e.outline === !0 ? b = `text-${e.textColor || e.color}` : b = `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (b = `text-${e.textColor}`);
        const T = e.round === !0 ? "round" : `rectangle${u.value === !0 ? " q-btn--rounded" : e.square === !0 ? " q-btn--square" : ""}`;
        return `q-btn--${f.value} q-btn--${T}` + (b !== void 0 ? " " + b : "") + (c.value === !0 ? " q-btn--actionable q-focusable q-hoverable" : e.disable === !0 ? " disabled" : "") + (e.fab === !0 ? " q-btn--fab" : e.fabMini === !0 ? " q-btn--fab-mini" : "") + (e.noCaps === !0 ? " q-btn--no-uppercase" : "") + (e.dense === !0 ? " q-btn--dense" : "") + (e.stretch === !0 ? " no-border-radius self-stretch" : "") + (e.glossy === !0 ? " glossy" : "") + (e.square ? " q-btn--square" : "")
    }
    )
      , g = O( () => n.value + (e.stack === !0 ? " column" : " row") + (e.noWrap === !0 ? " no-wrap text-no-wrap" : "") + (e.loading === !0 ? " q-btn__content--hidden" : ""));
    return {
        classes: h,
        style: l,
        innerClasses: g,
        attributes: m,
        hasLink: o,
        linkTag: i,
        navigateOnClick: a,
        isActionable: c
    }
}
const {passiveCapture: Ot} = st;
let vr = null
  , br = null
  , _r = null;
const Co = Ne({
    name: "QBtn",
    props: {
        ...ry,
        percentage: Number,
        darkPercentage: Boolean,
        onTouchstart: [Function, Array]
    },
    emits: ["click", "keydown", "mousedown", "keyup"],
    setup(e, {slots: t, emit: n}) {
        const {proxy: r} = Te()
          , {classes: o, style: i, innerClasses: s, attributes: a, hasLink: l, linkTag: u, navigateOnClick: c, isActionable: d} = oy(e)
          , f = le(null)
          , m = le(null);
        let h = null, g, b = null;
        const T = O( () => e.label !== void 0 && e.label !== null && e.label !== "")
          , E = O( () => e.disable === !0 || e.ripple === !1 ? !1 : {
            keyCodes: l.value === !0 ? [13, 32] : [13],
            ...e.ripple === !0 ? {} : e.ripple
        })
          , v = O( () => ({
            center: e.round
        }))
          , p = O( () => {
            const F = Math.max(0, Math.min(100, e.percentage));
            return F > 0 ? {
                transition: "transform 0.6s",
                transform: `translateX(${F - 100}%)`
            } : {}
        }
        )
          , C = O( () => {
            if (e.loading === !0)
                return {
                    onMousedown: H,
                    onTouchstart: H,
                    onClick: H,
                    onKeydown: H,
                    onKeyup: H
                };
            if (d.value === !0) {
                const F = {
                    onClick: k,
                    onKeydown: P,
                    onMousedown: R
                };
                if (r.$q.platform.has.touch === !0) {
                    const ee = e.onTouchstart !== void 0 ? "" : "Passive";
                    F[`onTouchstart${ee}`] = A
                }
                return F
            }
            return {
                onClick: Xe
            }
        }
        )
          , w = O( () => ({
            ref: f,
            class: "q-btn q-btn-item non-selectable no-outline " + o.value,
            style: i.value,
            ...a.value,
            ...C.value
        }));
        function k(F) {
            if (f.value !== null) {
                if (F !== void 0) {
                    if (F.defaultPrevented === !0)
                        return;
                    const ee = document.activeElement;
                    if (e.type === "submit" && ee !== document.body && f.value.contains(ee) === !1 && ee.contains(f.value) === !1) {
                        f.value.focus();
                        const ne = () => {
                            document.removeEventListener("keydown", Xe, !0),
                            document.removeEventListener("keyup", ne, Ot),
                            f.value !== null && f.value.removeEventListener("blur", ne, Ot)
                        }
                        ;
                        document.addEventListener("keydown", Xe, !0),
                        document.addEventListener("keyup", ne, Ot),
                        f.value.addEventListener("blur", ne, Ot)
                    }
                }
                c(F)
            }
        }
        function P(F) {
            f.value !== null && (n("keydown", F),
            cr(F, [13, 32]) === !0 && br !== f.value && (br !== null && L(),
            F.defaultPrevented !== !0 && (f.value.focus(),
            br = f.value,
            f.value.classList.add("q-btn--active"),
            document.addEventListener("keyup", q, !0),
            f.value.addEventListener("blur", q, Ot)),
            Xe(F)))
        }
        function A(F) {
            f.value !== null && (n("touchstart", F),
            F.defaultPrevented !== !0 && (vr !== f.value && (vr !== null && L(),
            vr = f.value,
            h = F.target,
            h.addEventListener("touchcancel", q, Ot),
            h.addEventListener("touchend", q, Ot)),
            g = !0,
            b !== null && clearTimeout(b),
            b = setTimeout( () => {
                b = null,
                g = !1
            }
            , 200)))
        }
        function R(F) {
            f.value !== null && (F.qSkipRipple = g === !0,
            n("mousedown", F),
            F.defaultPrevented !== !0 && _r !== f.value && (_r !== null && L(),
            _r = f.value,
            f.value.classList.add("q-btn--active"),
            document.addEventListener("mouseup", q, Ot)))
        }
        function q(F) {
            if (f.value !== null && !(F !== void 0 && F.type === "blur" && document.activeElement === f.value)) {
                if (F !== void 0 && F.type === "keyup") {
                    if (br === f.value && cr(F, [13, 32]) === !0) {
                        const ee = new MouseEvent("click",F);
                        ee.qKeyEvent = !0,
                        F.defaultPrevented === !0 && It(ee),
                        F.cancelBubble === !0 && tr(ee),
                        f.value.dispatchEvent(ee),
                        Xe(F),
                        F.qKeyEvent = !0
                    }
                    n("keyup", F)
                }
                L()
            }
        }
        function L(F) {
            const ee = m.value;
            F !== !0 && (vr === f.value || _r === f.value) && ee !== null && ee !== document.activeElement && (ee.setAttribute("tabindex", -1),
            ee.focus()),
            vr === f.value && (h !== null && (h.removeEventListener("touchcancel", q, Ot),
            h.removeEventListener("touchend", q, Ot)),
            vr = h = null),
            _r === f.value && (document.removeEventListener("mouseup", q, Ot),
            _r = null),
            br === f.value && (document.removeEventListener("keyup", q, !0),
            f.value !== null && f.value.removeEventListener("blur", q, Ot),
            br = null),
            f.value !== null && f.value.classList.remove("q-btn--active")
        }
        function H(F) {
            Xe(F),
            F.qSkipRipple = !0
        }
        return Qe( () => {
            L(!0)
        }
        ),
        Object.assign(r, {
            click: F => {
                d.value === !0 && k(F)
            }
        }),
        () => {
            let F = [];
            e.icon !== void 0 && F.push(M(Ht, {
                name: e.icon,
                left: e.stack !== !0 && T.value === !0,
                role: "img"
            })),
            T.value === !0 && F.push(M("span", {
                class: "block"
            }, [e.label])),
            F = dn(t.default, F),
            e.iconRight !== void 0 && e.round === !1 && F.push(M(Ht, {
                name: e.iconRight,
                right: e.stack !== !0 && T.value === !0,
                role: "img"
            }));
            const ee = [M("span", {
                class: "q-focus-helper",
                ref: m
            })];
            return e.loading === !0 && e.percentage !== void 0 && ee.push(M("span", {
                class: "q-btn__progress absolute-full overflow-hidden" + (e.darkPercentage === !0 ? " q-btn__progress--dark" : "")
            }, [M("span", {
                class: "q-btn__progress-indicator fit block",
                style: p.value
            })])),
            ee.push(M("span", {
                class: "q-btn__content text-center col items-center q-anchor--skip " + s.value
            }, F)),
            e.loading !== null && ee.push(M(lr, {
                name: "q-transition--fade"
            }, () => e.loading === !0 ? [M("span", {
                key: "loading",
                class: "absolute-full flex flex-center"
            }, t.loading !== void 0 ? t.loading() : [M(Il)])] : null)),
            Tl(M(u.value, w.value, ee), [[W_, E.value, void 0, v.value]])
        }
    }
});
let iy = 1
  , sy = document.body;
function Eh(e, t) {
    const n = document.createElement("div");
    if (n.id = t !== void 0 ? `q-portal--${t}--${iy++}` : e,
    Di.globalNodes !== void 0) {
        const r = Di.globalNodes.class;
        r !== void 0 && (n.className = r)
    }
    return sy.appendChild(n),
    n
}
function ay(e) {
    e.remove()
}
let ly = 0;
const vi = {}
  , bi = {}
  , Dt = {}
  , Sh = {}
  , uy = /^\s*$/
  , Ch = []
  , cy = [void 0, null, !0, !1, ""]
  , $l = ["top-left", "top-right", "bottom-left", "bottom-right", "top", "bottom", "left", "right", "center"]
  , fy = ["top-left", "top-right", "bottom-left", "bottom-right"]
  , Er = {
    positive: {
        icon: e => e.iconSet.type.positive,
        color: "positive"
    },
    negative: {
        icon: e => e.iconSet.type.negative,
        color: "negative"
    },
    warning: {
        icon: e => e.iconSet.type.warning,
        color: "warning",
        textColor: "dark"
    },
    info: {
        icon: e => e.iconSet.type.info,
        color: "info"
    },
    ongoing: {
        group: !1,
        timeout: 0,
        spinner: !0,
        color: "grey-8"
    }
};
function Th(e, t, n) {
    if (!e)
        return so("parameter required");
    let r;
    const o = {
        textColor: "white"
    };
    if (e.ignoreDefaults !== !0 && Object.assign(o, vi),
    Pn(e) === !1 && (o.type && Object.assign(o, Er[o.type]),
    e = {
        message: e
    }),
    Object.assign(o, Er[e.type || o.type], e),
    typeof o.icon == "function" && (o.icon = o.icon(t)),
    o.spinner ? (o.spinner === !0 && (o.spinner = Il),
    o.spinner = os(o.spinner)) : o.spinner = !1,
    o.meta = {
        hasMedia: !!(o.spinner !== !1 || o.icon || o.avatar),
        hasText: hc(o.message) || hc(o.caption)
    },
    o.position) {
        if ($l.includes(o.position) === !1)
            return so("wrong position", e)
    } else
        o.position = "bottom";
    if (cy.includes(o.timeout) === !0)
        o.timeout = 5e3;
    else {
        const l = Number(o.timeout);
        if (isNaN(l) || l < 0)
            return so("wrong timeout", e);
        o.timeout = Number.isFinite(l) ? l : 0
    }
    o.timeout === 0 ? o.progress = !1 : o.progress === !0 && (o.meta.progressClass = "q-notification__progress" + (o.progressClass ? ` ${o.progressClass}` : ""),
    o.meta.progressStyle = {
        animationDuration: `${o.timeout + 1e3}ms`
    });
    const i = (Array.isArray(e.actions) === !0 ? e.actions : []).concat(e.ignoreDefaults !== !0 && Array.isArray(vi.actions) === !0 ? vi.actions : []).concat(Er[e.type] !== void 0 && Array.isArray(Er[e.type].actions) === !0 ? Er[e.type].actions : [])
      , {closeBtn: s} = o;
    if (s && i.push({
        label: typeof s == "string" ? s : t.lang.label.close
    }),
    o.actions = i.map( ({handler: l, noDismiss: u, ...c}) => ({
        flat: !0,
        ...c,
        onClick: typeof l == "function" ? () => {
            l(),
            u !== !0 && a()
        }
        : () => {
            a()
        }
    })),
    o.multiLine === void 0 && (o.multiLine = o.actions.length > 1),
    Object.assign(o.meta, {
        class: `q-notification row items-stretch q-notification--${o.multiLine === !0 ? "multi-line" : "standard"}` + (o.color !== void 0 ? ` bg-${o.color}` : "") + (o.textColor !== void 0 ? ` text-${o.textColor}` : "") + (o.classes !== void 0 ? ` ${o.classes}` : ""),
        wrapperClass: "q-notification__wrapper col relative-position border-radius-inherit " + (o.multiLine === !0 ? "column no-wrap justify-center" : "row items-center"),
        contentClass: "q-notification__content row items-center" + (o.multiLine === !0 ? "" : " col"),
        leftClass: o.meta.hasText === !0 ? "additional" : "single",
        attrs: {
            role: "alert",
            ...o.attrs
        }
    }),
    o.group === !1 ? (o.group = void 0,
    o.meta.group = void 0) : ((o.group === void 0 || o.group === !0) && (o.group = [o.message, o.caption, o.multiline].concat(o.actions.map(l => `${l.label}*${l.icon}`)).join("|")),
    o.meta.group = o.group + "|" + o.position),
    o.actions.length === 0 ? o.actions = void 0 : o.meta.actionsClass = "q-notification__actions row items-center " + (o.multiLine === !0 ? "justify-end" : "col-auto") + (o.meta.hasMedia === !0 ? " q-notification__actions--with-media" : ""),
    n !== void 0) {
        n.notif.meta.timer && (clearTimeout(n.notif.meta.timer),
        n.notif.meta.timer = void 0),
        o.meta.uid = n.notif.meta.uid;
        const l = Dt[o.position].value.indexOf(n.notif);
        Dt[o.position].value[l] = o
    } else {
        const l = bi[o.meta.group];
        if (l === void 0) {
            if (o.meta.uid = ly++,
            o.meta.badge = 1,
            ["left", "right", "center"].indexOf(o.position) !== -1)
                Dt[o.position].value.splice(Math.floor(Dt[o.position].value.length / 2), 0, o);
            else {
                const u = o.position.indexOf("top") !== -1 ? "unshift" : "push";
                Dt[o.position].value[u](o)
            }
            o.group !== void 0 && (bi[o.meta.group] = o)
        } else {
            if (l.meta.timer && (clearTimeout(l.meta.timer),
            l.meta.timer = void 0),
            o.badgePosition !== void 0) {
                if (fy.includes(o.badgePosition) === !1)
                    return so("wrong badgePosition", e)
            } else
                o.badgePosition = `top-${o.position.indexOf("left") !== -1 ? "right" : "left"}`;
            o.meta.uid = l.meta.uid,
            o.meta.badge = l.meta.badge + 1,
            o.meta.badgeClass = `q-notification__badge q-notification__badge--${o.badgePosition}` + (o.badgeColor !== void 0 ? ` bg-${o.badgeColor}` : "") + (o.badgeTextColor !== void 0 ? ` text-${o.badgeTextColor}` : "") + (o.badgeClass ? ` ${o.badgeClass}` : "");
            const u = Dt[o.position].value.indexOf(l);
            Dt[o.position].value[u] = bi[o.meta.group] = o
        }
    }
    const a = () => {
        dy(o),
        r = void 0
    }
    ;
    if (o.timeout > 0 && (o.meta.timer = setTimeout( () => {
        o.meta.timer = void 0,
        a()
    }
    , o.timeout + 1e3)),
    o.group !== void 0)
        return l => {
            l !== void 0 ? so("trying to update a grouped one which is forbidden", e) : a()
        }
        ;
    if (r = {
        dismiss: a,
        config: e,
        notif: o
    },
    n !== void 0) {
        Object.assign(n, r);
        return
    }
    return l => {
        if (r !== void 0)
            if (l === void 0)
                r.dismiss();
            else {
                const u = Object.assign({}, r.config, l, {
                    group: !1,
                    position: o.position
                });
                Th(u, t, r)
            }
    }
}
function dy(e) {
    e.meta.timer && (clearTimeout(e.meta.timer),
    e.meta.timer = void 0);
    const t = Dt[e.position].value.indexOf(e);
    if (t !== -1) {
        e.group !== void 0 && delete bi[e.meta.group];
        const n = Ch["" + e.meta.uid];
        if (n) {
            const {width: r, height: o} = getComputedStyle(n);
            n.style.left = `${n.offsetLeft}px`,
            n.style.width = r,
            n.style.height = o
        }
        Dt[e.position].value.splice(t, 1),
        typeof e.onDismiss == "function" && e.onDismiss()
    }
}
function hc(e) {
    return e != null && uy.test(e) !== !0
}
function so(e, t) {
    return console.error(`Notify: ${e}`, t),
    !1
}
function my() {
    return Ne({
        name: "QNotifications",
        devtools: {
            hide: !0
        },
        setup() {
            return () => M("div", {
                class: "q-notifications"
            }, $l.map(e => M(Yb, {
                key: e,
                class: Sh[e],
                tag: "div",
                name: `q-notification--${e}`
            }, () => Dt[e].value.map(t => {
                const n = t.meta
                  , r = [];
                if (n.hasMedia === !0 && (t.spinner !== !1 ? r.push(M(t.spinner, {
                    class: "q-notification__spinner q-notification__spinner--" + n.leftClass,
                    color: t.spinnerColor,
                    size: t.spinnerSize
                })) : t.icon ? r.push(M(Ht, {
                    class: "q-notification__icon q-notification__icon--" + n.leftClass,
                    name: t.icon,
                    color: t.iconColor,
                    size: t.iconSize,
                    role: "img"
                })) : t.avatar && r.push(M(U_, {
                    class: "q-notification__avatar q-notification__avatar--" + n.leftClass
                }, () => M("img", {
                    src: t.avatar,
                    "aria-hidden": "true"
                })))),
                n.hasText === !0) {
                    let i;
                    const s = {
                        class: "q-notification__message col"
                    };
                    if (t.html === !0)
                        s.innerHTML = t.caption ? `<div>${t.message}</div><div class="q-notification__caption">${t.caption}</div>` : t.message;
                    else {
                        const a = [t.message];
                        i = t.caption ? [M("div", a), M("div", {
                            class: "q-notification__caption"
                        }, [t.caption])] : a
                    }
                    r.push(M("div", s, i))
                }
                const o = [M("div", {
                    class: n.contentClass
                }, r)];
                return t.progress === !0 && o.push(M("div", {
                    key: `${n.uid}|p|${n.badge}`,
                    class: n.progressClass,
                    style: n.progressStyle
                })),
                t.actions !== void 0 && o.push(M("div", {
                    class: n.actionsClass
                }, t.actions.map(i => M(Co, i)))),
                n.badge > 1 && o.push(M("div", {
                    key: `${n.uid}|${n.badge}`,
                    class: t.meta.badgeClass,
                    style: t.badgeStyle
                }, [n.badge])),
                M("div", {
                    ref: i => {
                        Ch["" + n.uid] = i
                    }
                    ,
                    key: n.uid,
                    class: n.class,
                    ...n.attrs
                }, [M("div", {
                    class: n.wrapperClass
                }, o)])
            }
            ))))
        }
    })
}
const ZA = {
    setDefaults(e) {
        Pn(e) === !0 && Object.assign(vi, e)
    },
    registerType(e, t) {
        Pn(t) === !0 && (Er[e] = t)
    },
    install({$q: e, parentApp: t}) {
        if (e.notify = this.create = n => Th(n, e),
        e.notify.setDefaults = this.setDefaults,
        e.notify.registerType = this.registerType,
        e.config.notify !== void 0 && this.setDefaults(e.config.notify),
        this.__installed !== !0) {
            $l.forEach(r => {
                Dt[r] = le([]);
                const o = ["left", "center", "right"].includes(r) === !0 ? "center" : r.indexOf("top") !== -1 ? "top" : "bottom"
                  , i = r.indexOf("left") !== -1 ? "start" : r.indexOf("right") !== -1 ? "end" : "center"
                  , s = ["left", "right"].includes(r) ? `items-${r === "left" ? "start" : "end"} justify-center` : r === "center" ? "flex-center" : `items-${i}`;
                Sh[r] = `q-notifications__list q-notifications__list--${o} fixed column no-wrap ${s}`
            }
            );
            const n = Eh("q-notify");
            P_(my(), t).mount(n)
        }
    }
}
  , eL = {
    isoName: "zh-CN",
    nativeName: "中文(简体)",
    label: {
        clear: "清空",
        ok: "确定",
        cancel: "取消",
        close: "关闭",
        set: "设置",
        select: "选择",
        reset: "重置",
        remove: "移除",
        update: "更新",
        create: "创建",
        search: "搜索",
        filter: "过滤",
        refresh: "刷新",
        expand: e => e ? `展开"${e}"` : "扩张",
        collapse: e => e ? `折叠"${e}"` : "坍塌"
    },
    date: {
        days: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        daysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        headerTitle: e => new Intl.DateTimeFormat("zh-CN",{
            weekday: "short",
            month: "short",
            day: "numeric"
        }).format(e),
        firstDayOfWeek: 0,
        format24h: !1,
        pluralDay: "天"
    },
    table: {
        noData: "没有可用数据",
        noResults: "找不到匹配的数据",
        loading: "正在加载...",
        selectedRecords: e => "已选择" + e + "行",
        recordsPerPage: "每页的行数:",
        allRows: "全部",
        pagination: (e, t, n) => e + "-" + t + " / " + n,
        columns: "列"
    },
    editor: {
        url: "URL",
        bold: "粗体",
        italic: "斜体",
        strikethrough: "删除线",
        underline: "下划线",
        unorderedList: "无序列表",
        orderedList: "有序列表",
        subscript: "下标",
        superscript: "上标",
        hyperlink: "超链接",
        toggleFullscreen: "全屏切换",
        quote: "引号",
        left: "左对齐",
        center: "居中对齐",
        right: "右对齐",
        justify: "两端对齐",
        print: "打印",
        outdent: "减少缩进",
        indent: "增加缩进",
        removeFormat: "清除样式",
        formatting: "格式化",
        fontSize: "字体大小",
        align: "对齐",
        hr: "插入水平线",
        undo: "撤消",
        redo: "重做",
        heading1: "标题一",
        heading2: "标题二",
        heading3: "标题三",
        heading4: "标题四",
        heading5: "标题五",
        heading6: "标题六",
        paragraph: "段落",
        code: "代码",
        size1: "非常小",
        size2: "比较小",
        size3: "正常",
        size4: "中等偏大",
        size5: "大",
        size6: "非常大",
        size7: "超级大",
        defaultFont: "默认字体",
        viewSource: "查看资料"
    },
    tree: {
        noNodes: "没有可用节点",
        noResults: "找不到匹配的节点"
    }
};
/*!
  * shared v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const qi = typeof window < "u"
  , Bn = (e, t=!1) => t ? Symbol.for(e) : Symbol(e)
  , hy = (e, t, n) => gy({
    l: e,
    k: t,
    s: n
})
  , gy = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027")
  , Ze = e => typeof e == "number" && isFinite(e)
  , py = e => kh(e) === "[object Date]"
  , $n = e => kh(e) === "[object RegExp]"
  , ps = e => ye(e) && Object.keys(e).length === 0
  , lt = Object.assign;
let gc;
const fn = () => gc || (gc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function pc(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}
const vy = Object.prototype.hasOwnProperty;
function Bi(e, t) {
    return vy.call(e, t)
}
const Ue = Array.isArray
  , Be = e => typeof e == "function"
  , se = e => typeof e == "string"
  , Ce = e => typeof e == "boolean"
  , Le = e => e !== null && typeof e == "object"
  , by = e => Le(e) && Be(e.then) && Be(e.catch)
  , xh = Object.prototype.toString
  , kh = e => xh.call(e)
  , ye = e => {
    if (!Le(e))
        return !1;
    const t = Object.getPrototypeOf(e);
    return t === null || t.constructor === Object
}
  , _y = e => e == null ? "" : Ue(e) || ye(e) && e.toString === xh ? JSON.stringify(e, null, 2) : String(e);
function yy(e, t="") {
    return e.reduce( (n, r, o) => o === 0 ? n + r : n + t + r, "")
}
function vs(e) {
    let t = e;
    return () => ++t
}
function wy(e, t) {
    typeof console < "u" && (console.warn("[intlify] " + e),
    t && console.warn(t.stack))
}
const oi = e => !Le(e) || Ue(e);
function _i(e, t) {
    if (oi(e) || oi(t))
        throw new Error("Invalid value");
    const n = [{
        src: e,
        des: t
    }];
    for (; n.length; ) {
        const {src: r, des: o} = n.pop();
        Object.keys(r).forEach(i => {
            Le(r[i]) && !Le(o[i]) && (o[i] = Array.isArray(r[i]) ? [] : {}),
            oi(o[i]) || oi(r[i]) ? o[i] = r[i] : n.push({
                src: r[i],
                des: o[i]
            })
        }
        )
    }
}
/*!
  * message-compiler v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function Ey(e, t, n) {
    return {
        line: e,
        column: t,
        offset: n
    }
}
function ji(e, t, n) {
    return {
        start: e,
        end: t
    }
}
const Sy = /\{([0-9a-zA-Z]+)\}/g;
function Ah(e, ...t) {
    return t.length === 1 && Cy(t[0]) && (t = t[0]),
    (!t || !t.hasOwnProperty) && (t = {}),
    e.replace(Sy, (n, r) => t.hasOwnProperty(r) ? t[r] : "")
}
const Lh = Object.assign
  , vc = e => typeof e == "string"
  , Cy = e => e !== null && typeof e == "object";
function Oh(e, t="") {
    return e.reduce( (n, r, o) => o === 0 ? n + r : n + t + r, "")
}
const Fl = {
    USE_MODULO_SYNTAX: 1,
    __EXTEND_POINT__: 2
}
  , Ty = {
    [Fl.USE_MODULO_SYNTAX]: "Use modulo before '{{0}}'."
};
function xy(e, t, ...n) {
    const r = Ah(Ty[e], ...n || [])
      , o = {
        message: String(r),
        code: e
    };
    return t && (o.location = t),
    o
}
const he = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    UNHANDLED_CODEGEN_NODE_TYPE: 15,
    UNHANDLED_MINIFIER_NODE_TYPE: 16,
    __EXTEND_POINT__: 17
}
  , ky = {
    [he.EXPECTED_TOKEN]: "Expected token: '{0}'",
    [he.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
    [he.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
    [he.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
    [he.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
    [he.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
    [he.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
    [he.EMPTY_PLACEHOLDER]: "Empty placeholder",
    [he.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
    [he.INVALID_LINKED_FORMAT]: "Invalid linked format",
    [he.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
    [he.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
    [he.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
    [he.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'",
    [he.UNHANDLED_CODEGEN_NODE_TYPE]: "unhandled codegen node type: '{0}'",
    [he.UNHANDLED_MINIFIER_NODE_TYPE]: "unhandled mimifier node type: '{0}'"
};
function Xr(e, t, n={}) {
    const {domain: r, messages: o, args: i} = n
      , s = Ah((o || ky)[e] || "", ...i || [])
      , a = new SyntaxError(String(s));
    return a.code = e,
    t && (a.location = t),
    a.domain = r,
    a
}
function Ay(e) {
    throw e
}
const nn = " "
  , Ly = "\r"
  , vt = `
`
  , Oy = "\u2028"
  , Py = "\u2029";
function Ry(e) {
    const t = e;
    let n = 0
      , r = 1
      , o = 1
      , i = 0;
    const s = k => t[k] === Ly && t[k + 1] === vt
      , a = k => t[k] === vt
      , l = k => t[k] === Py
      , u = k => t[k] === Oy
      , c = k => s(k) || a(k) || l(k) || u(k)
      , d = () => n
      , f = () => r
      , m = () => o
      , h = () => i
      , g = k => s(k) || l(k) || u(k) ? vt : t[k]
      , b = () => g(n)
      , T = () => g(n + i);
    function E() {
        return i = 0,
        c(n) && (r++,
        o = 0),
        s(n) && n++,
        n++,
        o++,
        t[n]
    }
    function v() {
        return s(n + i) && i++,
        i++,
        t[n + i]
    }
    function p() {
        n = 0,
        r = 1,
        o = 1,
        i = 0
    }
    function C(k=0) {
        i = k
    }
    function w() {
        const k = n + i;
        for (; k !== n; )
            E();
        i = 0
    }
    return {
        index: d,
        line: f,
        column: m,
        peekOffset: h,
        charAt: g,
        currentChar: b,
        currentPeek: T,
        next: E,
        peek: v,
        reset: p,
        resetPeek: C,
        skipToPeek: w
    }
}
const _n = void 0
  , Iy = "."
  , bc = "'"
  , Ny = "tokenizer";
function My(e, t={}) {
    const n = t.location !== !1
      , r = Ry(e)
      , o = () => r.index()
      , i = () => Ey(r.line(), r.column(), r.index())
      , s = i()
      , a = o()
      , l = {
        currentType: 14,
        offset: a,
        startLoc: s,
        endLoc: s,
        lastType: 14,
        lastOffset: a,
        lastStartLoc: s,
        lastEndLoc: s,
        braceNest: 0,
        inLinked: !1,
        text: ""
    }
      , u = () => l
      , {onError: c} = t;
    function d(_, S, I, ...Q) {
        const te = u();
        if (S.column += I,
        S.offset += I,
        c) {
            const Z = n ? ji(te.startLoc, S) : null
              , $ = Xr(_, Z, {
                domain: Ny,
                args: Q
            });
            c($)
        }
    }
    function f(_, S, I) {
        _.endLoc = i(),
        _.currentType = S;
        const Q = {
            type: S
        };
        return n && (Q.loc = ji(_.startLoc, _.endLoc)),
        I != null && (Q.value = I),
        Q
    }
    const m = _ => f(_, 14);
    function h(_, S) {
        return _.currentChar() === S ? (_.next(),
        S) : (d(he.EXPECTED_TOKEN, i(), 0, S),
        "")
    }
    function g(_) {
        let S = "";
        for (; _.currentPeek() === nn || _.currentPeek() === vt; )
            S += _.currentPeek(),
            _.peek();
        return S
    }
    function b(_) {
        const S = g(_);
        return _.skipToPeek(),
        S
    }
    function T(_) {
        if (_ === _n)
            return !1;
        const S = _.charCodeAt(0);
        return S >= 97 && S <= 122 || S >= 65 && S <= 90 || S === 95
    }
    function E(_) {
        if (_ === _n)
            return !1;
        const S = _.charCodeAt(0);
        return S >= 48 && S <= 57
    }
    function v(_, S) {
        const {currentType: I} = S;
        if (I !== 2)
            return !1;
        g(_);
        const Q = T(_.currentPeek());
        return _.resetPeek(),
        Q
    }
    function p(_, S) {
        const {currentType: I} = S;
        if (I !== 2)
            return !1;
        g(_);
        const Q = _.currentPeek() === "-" ? _.peek() : _.currentPeek()
          , te = E(Q);
        return _.resetPeek(),
        te
    }
    function C(_, S) {
        const {currentType: I} = S;
        if (I !== 2)
            return !1;
        g(_);
        const Q = _.currentPeek() === bc;
        return _.resetPeek(),
        Q
    }
    function w(_, S) {
        const {currentType: I} = S;
        if (I !== 8)
            return !1;
        g(_);
        const Q = _.currentPeek() === ".";
        return _.resetPeek(),
        Q
    }
    function k(_, S) {
        const {currentType: I} = S;
        if (I !== 9)
            return !1;
        g(_);
        const Q = T(_.currentPeek());
        return _.resetPeek(),
        Q
    }
    function P(_, S) {
        const {currentType: I} = S;
        if (!(I === 8 || I === 12))
            return !1;
        g(_);
        const Q = _.currentPeek() === ":";
        return _.resetPeek(),
        Q
    }
    function A(_, S) {
        const {currentType: I} = S;
        if (I !== 10)
            return !1;
        const Q = () => {
            const Z = _.currentPeek();
            return Z === "{" ? T(_.peek()) : Z === "@" || Z === "%" || Z === "|" || Z === ":" || Z === "." || Z === nn || !Z ? !1 : Z === vt ? (_.peek(),
            Q()) : L(_, !1)
        }
          , te = Q();
        return _.resetPeek(),
        te
    }
    function R(_) {
        g(_);
        const S = _.currentPeek() === "|";
        return _.resetPeek(),
        S
    }
    function q(_) {
        const S = g(_)
          , I = _.currentPeek() === "%" && _.peek() === "{";
        return _.resetPeek(),
        {
            isModulo: I,
            hasSpace: S.length > 0
        }
    }
    function L(_, S=!0) {
        const I = (te=!1, Z="", $=!1) => {
            const U = _.currentPeek();
            return U === "{" ? Z === "%" ? !1 : te : U === "@" || !U ? Z === "%" ? !0 : te : U === "%" ? (_.peek(),
            I(te, "%", !0)) : U === "|" ? Z === "%" || $ ? !0 : !(Z === nn || Z === vt) : U === nn ? (_.peek(),
            I(!0, nn, $)) : U === vt ? (_.peek(),
            I(!0, vt, $)) : !0
        }
          , Q = I();
        return S && _.resetPeek(),
        Q
    }
    function H(_, S) {
        const I = _.currentChar();
        return I === _n ? _n : S(I) ? (_.next(),
        I) : null
    }
    function F(_) {
        const S = _.charCodeAt(0);
        return S >= 97 && S <= 122 || S >= 65 && S <= 90 || S >= 48 && S <= 57 || S === 95 || S === 36
    }
    function ee(_) {
        return H(_, F)
    }
    function ne(_) {
        const S = _.charCodeAt(0);
        return S >= 97 && S <= 122 || S >= 65 && S <= 90 || S >= 48 && S <= 57 || S === 95 || S === 36 || S === 45
    }
    function z(_) {
        return H(_, ne)
    }
    function K(_) {
        const S = _.charCodeAt(0);
        return S >= 48 && S <= 57
    }
    function ae(_) {
        return H(_, K)
    }
    function ue(_) {
        const S = _.charCodeAt(0);
        return S >= 48 && S <= 57 || S >= 65 && S <= 70 || S >= 97 && S <= 102
    }
    function ce(_) {
        return H(_, ue)
    }
    function X(_) {
        let S = ""
          , I = "";
        for (; S = ae(_); )
            I += S;
        return I
    }
    function be(_) {
        b(_);
        const S = _.currentChar();
        return S !== "%" && d(he.EXPECTED_TOKEN, i(), 0, S),
        _.next(),
        "%"
    }
    function ke(_) {
        let S = "";
        for (; ; ) {
            const I = _.currentChar();
            if (I === "{" || I === "}" || I === "@" || I === "|" || !I)
                break;
            if (I === "%")
                if (L(_))
                    S += I,
                    _.next();
                else
                    break;
            else if (I === nn || I === vt)
                if (L(_))
                    S += I,
                    _.next();
                else {
                    if (R(_))
                        break;
                    S += I,
                    _.next()
                }
            else
                S += I,
                _.next()
        }
        return S
    }
    function Ae(_) {
        b(_);
        let S = ""
          , I = "";
        for (; S = z(_); )
            I += S;
        return _.currentChar() === _n && d(he.UNTERMINATED_CLOSING_BRACE, i(), 0),
        I
    }
    function oe(_) {
        b(_);
        let S = "";
        return _.currentChar() === "-" ? (_.next(),
        S += `-${X(_)}`) : S += X(_),
        _.currentChar() === _n && d(he.UNTERMINATED_CLOSING_BRACE, i(), 0),
        S
    }
    function B(_) {
        return _ !== bc && _ !== vt
    }
    function re(_) {
        b(_),
        h(_, "'");
        let S = ""
          , I = "";
        for (; S = H(_, B); )
            S === "\\" ? I += W(_) : I += S;
        const Q = _.currentChar();
        return Q === vt || Q === _n ? (d(he.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, i(), 0),
        Q === vt && (_.next(),
        h(_, "'")),
        I) : (h(_, "'"),
        I)
    }
    function W(_) {
        const S = _.currentChar();
        switch (S) {
        case "\\":
        case "'":
            return _.next(),
            `\\${S}`;
        case "u":
            return ie(_, S, 4);
        case "U":
            return ie(_, S, 6);
        default:
            return d(he.UNKNOWN_ESCAPE_SEQUENCE, i(), 0, S),
            ""
        }
    }
    function ie(_, S, I) {
        h(_, S);
        let Q = "";
        for (let te = 0; te < I; te++) {
            const Z = ce(_);
            if (!Z) {
                d(he.INVALID_UNICODE_ESCAPE_SEQUENCE, i(), 0, `\\${S}${Q}${_.currentChar()}`);
                break
            }
            Q += Z
        }
        return `\\${S}${Q}`
    }
    function we(_) {
        return _ !== "{" && _ !== "}" && _ !== nn && _ !== vt
    }
    function ge(_) {
        b(_);
        let S = ""
          , I = "";
        for (; S = H(_, we); )
            I += S;
        return I
    }
    function x(_) {
        let S = ""
          , I = "";
        for (; S = ee(_); )
            I += S;
        return I
    }
    function y(_) {
        const S = I => {
            const Q = _.currentChar();
            return Q === "{" || Q === "%" || Q === "@" || Q === "|" || Q === "(" || Q === ")" || !Q || Q === nn ? I : (I += Q,
            _.next(),
            S(I))
        }
        ;
        return S("")
    }
    function N(_) {
        b(_);
        const S = h(_, "|");
        return b(_),
        S
    }
    function j(_, S) {
        let I = null;
        switch (_.currentChar()) {
        case "{":
            return S.braceNest >= 1 && d(he.NOT_ALLOW_NEST_PLACEHOLDER, i(), 0),
            _.next(),
            I = f(S, 2, "{"),
            b(_),
            S.braceNest++,
            I;
        case "}":
            return S.braceNest > 0 && S.currentType === 2 && d(he.EMPTY_PLACEHOLDER, i(), 0),
            _.next(),
            I = f(S, 3, "}"),
            S.braceNest--,
            S.braceNest > 0 && b(_),
            S.inLinked && S.braceNest === 0 && (S.inLinked = !1),
            I;
        case "@":
            return S.braceNest > 0 && d(he.UNTERMINATED_CLOSING_BRACE, i(), 0),
            I = D(_, S) || m(S),
            S.braceNest = 0,
            I;
        default:
            {
                let te = !0
                  , Z = !0
                  , $ = !0;
                if (R(_))
                    return S.braceNest > 0 && d(he.UNTERMINATED_CLOSING_BRACE, i(), 0),
                    I = f(S, 1, N(_)),
                    S.braceNest = 0,
                    S.inLinked = !1,
                    I;
                if (S.braceNest > 0 && (S.currentType === 5 || S.currentType === 6 || S.currentType === 7))
                    return d(he.UNTERMINATED_CLOSING_BRACE, i(), 0),
                    S.braceNest = 0,
                    Y(_, S);
                if (te = v(_, S))
                    return I = f(S, 5, Ae(_)),
                    b(_),
                    I;
                if (Z = p(_, S))
                    return I = f(S, 6, oe(_)),
                    b(_),
                    I;
                if ($ = C(_, S))
                    return I = f(S, 7, re(_)),
                    b(_),
                    I;
                if (!te && !Z && !$)
                    return I = f(S, 13, ge(_)),
                    d(he.INVALID_TOKEN_IN_PLACEHOLDER, i(), 0, I.value),
                    b(_),
                    I;
                break
            }
        }
        return I
    }
    function D(_, S) {
        const {currentType: I} = S;
        let Q = null;
        const te = _.currentChar();
        switch ((I === 8 || I === 9 || I === 12 || I === 10) && (te === vt || te === nn) && d(he.INVALID_LINKED_FORMAT, i(), 0),
        te) {
        case "@":
            return _.next(),
            Q = f(S, 8, "@"),
            S.inLinked = !0,
            Q;
        case ".":
            return b(_),
            _.next(),
            f(S, 9, ".");
        case ":":
            return b(_),
            _.next(),
            f(S, 10, ":");
        default:
            return R(_) ? (Q = f(S, 1, N(_)),
            S.braceNest = 0,
            S.inLinked = !1,
            Q) : w(_, S) || P(_, S) ? (b(_),
            D(_, S)) : k(_, S) ? (b(_),
            f(S, 12, x(_))) : A(_, S) ? (b(_),
            te === "{" ? j(_, S) || Q : f(S, 11, y(_))) : (I === 8 && d(he.INVALID_LINKED_FORMAT, i(), 0),
            S.braceNest = 0,
            S.inLinked = !1,
            Y(_, S))
        }
    }
    function Y(_, S) {
        let I = {
            type: 14
        };
        if (S.braceNest > 0)
            return j(_, S) || m(S);
        if (S.inLinked)
            return D(_, S) || m(S);
        switch (_.currentChar()) {
        case "{":
            return j(_, S) || m(S);
        case "}":
            return d(he.UNBALANCED_CLOSING_BRACE, i(), 0),
            _.next(),
            f(S, 3, "}");
        case "@":
            return D(_, S) || m(S);
        default:
            {
                if (R(_))
                    return I = f(S, 1, N(_)),
                    S.braceNest = 0,
                    S.inLinked = !1,
                    I;
                const {isModulo: te, hasSpace: Z} = q(_);
                if (te)
                    return Z ? f(S, 0, ke(_)) : f(S, 4, be(_));
                if (L(_))
                    return f(S, 0, ke(_));
                break
            }
        }
        return I
    }
    function G() {
        const {currentType: _, offset: S, startLoc: I, endLoc: Q} = l;
        return l.lastType = _,
        l.lastOffset = S,
        l.lastStartLoc = I,
        l.lastEndLoc = Q,
        l.offset = o(),
        l.startLoc = i(),
        r.currentChar() === _n ? f(l, 14) : Y(r, l)
    }
    return {
        nextToken: G,
        currentOffset: o,
        currentPosition: i,
        context: u
    }
}
const $y = "parser"
  , Fy = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Dy(e, t, n) {
    switch (e) {
    case "\\\\":
        return "\\";
    case "\\'":
        return "'";
    default:
        {
            const r = parseInt(t || n, 16);
            return r <= 55295 || r >= 57344 ? String.fromCodePoint(r) : "�"
        }
    }
}
function qy(e={}) {
    const t = e.location !== !1
      , {onError: n, onWarn: r} = e;
    function o(v, p, C, w, ...k) {
        const P = v.currentPosition();
        if (P.offset += w,
        P.column += w,
        n) {
            const A = t ? ji(C, P) : null
              , R = Xr(p, A, {
                domain: $y,
                args: k
            });
            n(R)
        }
    }
    function i(v, p, C, w, ...k) {
        const P = v.currentPosition();
        if (P.offset += w,
        P.column += w,
        r) {
            const A = t ? ji(C, P) : null;
            r(xy(p, A, k))
        }
    }
    function s(v, p, C) {
        const w = {
            type: v
        };
        return t && (w.start = p,
        w.end = p,
        w.loc = {
            start: C,
            end: C
        }),
        w
    }
    function a(v, p, C, w) {
        t && (v.end = p,
        v.loc && (v.loc.end = C))
    }
    function l(v, p) {
        const C = v.context()
          , w = s(3, C.offset, C.startLoc);
        return w.value = p,
        a(w, v.currentOffset(), v.currentPosition()),
        w
    }
    function u(v, p) {
        const C = v.context()
          , {lastOffset: w, lastStartLoc: k} = C
          , P = s(5, w, k);
        return P.index = parseInt(p, 10),
        v.nextToken(),
        a(P, v.currentOffset(), v.currentPosition()),
        P
    }
    function c(v, p, C) {
        const w = v.context()
          , {lastOffset: k, lastStartLoc: P} = w
          , A = s(4, k, P);
        return A.key = p,
        C === !0 && (A.modulo = !0),
        v.nextToken(),
        a(A, v.currentOffset(), v.currentPosition()),
        A
    }
    function d(v, p) {
        const C = v.context()
          , {lastOffset: w, lastStartLoc: k} = C
          , P = s(9, w, k);
        return P.value = p.replace(Fy, Dy),
        v.nextToken(),
        a(P, v.currentOffset(), v.currentPosition()),
        P
    }
    function f(v) {
        const p = v.nextToken()
          , C = v.context()
          , {lastOffset: w, lastStartLoc: k} = C
          , P = s(8, w, k);
        return p.type !== 12 ? (o(v, he.UNEXPECTED_EMPTY_LINKED_MODIFIER, C.lastStartLoc, 0),
        P.value = "",
        a(P, w, k),
        {
            nextConsumeToken: p,
            node: P
        }) : (p.value == null && o(v, he.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, Ft(p)),
        P.value = p.value || "",
        a(P, v.currentOffset(), v.currentPosition()),
        {
            node: P
        })
    }
    function m(v, p) {
        const C = v.context()
          , w = s(7, C.offset, C.startLoc);
        return w.value = p,
        a(w, v.currentOffset(), v.currentPosition()),
        w
    }
    function h(v) {
        const p = v.context()
          , C = s(6, p.offset, p.startLoc);
        let w = v.nextToken();
        if (w.type === 9) {
            const k = f(v);
            C.modifier = k.node,
            w = k.nextConsumeToken || v.nextToken()
        }
        switch (w.type !== 10 && o(v, he.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Ft(w)),
        w = v.nextToken(),
        w.type === 2 && (w = v.nextToken()),
        w.type) {
        case 11:
            w.value == null && o(v, he.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Ft(w)),
            C.key = m(v, w.value || "");
            break;
        case 5:
            w.value == null && o(v, he.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Ft(w)),
            C.key = c(v, w.value || "");
            break;
        case 6:
            w.value == null && o(v, he.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Ft(w)),
            C.key = u(v, w.value || "");
            break;
        case 7:
            w.value == null && o(v, he.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Ft(w)),
            C.key = d(v, w.value || "");
            break;
        default:
            {
                o(v, he.UNEXPECTED_EMPTY_LINKED_KEY, p.lastStartLoc, 0);
                const k = v.context()
                  , P = s(7, k.offset, k.startLoc);
                return P.value = "",
                a(P, k.offset, k.startLoc),
                C.key = P,
                a(C, k.offset, k.startLoc),
                {
                    nextConsumeToken: w,
                    node: C
                }
            }
        }
        return a(C, v.currentOffset(), v.currentPosition()),
        {
            node: C
        }
    }
    function g(v) {
        const p = v.context()
          , C = p.currentType === 1 ? v.currentOffset() : p.offset
          , w = p.currentType === 1 ? p.endLoc : p.startLoc
          , k = s(2, C, w);
        k.items = [];
        let P = null
          , A = null;
        do {
            const L = P || v.nextToken();
            switch (P = null,
            L.type) {
            case 0:
                L.value == null && o(v, he.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Ft(L)),
                k.items.push(l(v, L.value || ""));
                break;
            case 6:
                L.value == null && o(v, he.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Ft(L)),
                k.items.push(u(v, L.value || ""));
                break;
            case 4:
                A = !0;
                break;
            case 5:
                L.value == null && o(v, he.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Ft(L)),
                k.items.push(c(v, L.value || "", !!A)),
                A && (i(v, Fl.USE_MODULO_SYNTAX, p.lastStartLoc, 0, Ft(L)),
                A = null);
                break;
            case 7:
                L.value == null && o(v, he.UNEXPECTED_LEXICAL_ANALYSIS, p.lastStartLoc, 0, Ft(L)),
                k.items.push(d(v, L.value || ""));
                break;
            case 8:
                {
                    const H = h(v);
                    k.items.push(H.node),
                    P = H.nextConsumeToken || null;
                    break
                }
            }
        } while (p.currentType !== 14 && p.currentType !== 1);
        const R = p.currentType === 1 ? p.lastOffset : v.currentOffset()
          , q = p.currentType === 1 ? p.lastEndLoc : v.currentPosition();
        return a(k, R, q),
        k
    }
    function b(v, p, C, w) {
        const k = v.context();
        let P = w.items.length === 0;
        const A = s(1, p, C);
        A.cases = [],
        A.cases.push(w);
        do {
            const R = g(v);
            P || (P = R.items.length === 0),
            A.cases.push(R)
        } while (k.currentType !== 14);
        return P && o(v, he.MUST_HAVE_MESSAGES_IN_PLURAL, C, 0),
        a(A, v.currentOffset(), v.currentPosition()),
        A
    }
    function T(v) {
        const p = v.context()
          , {offset: C, startLoc: w} = p
          , k = g(v);
        return p.currentType === 14 ? k : b(v, C, w, k)
    }
    function E(v) {
        const p = My(v, Lh({}, e))
          , C = p.context()
          , w = s(0, C.offset, C.startLoc);
        return t && w.loc && (w.loc.source = v),
        w.body = T(p),
        e.onCacheKey && (w.cacheKey = e.onCacheKey(v)),
        C.currentType !== 14 && o(p, he.UNEXPECTED_LEXICAL_ANALYSIS, C.lastStartLoc, 0, v[C.offset] || ""),
        a(w, p.currentOffset(), p.currentPosition()),
        w
    }
    return {
        parse: E
    }
}
function Ft(e) {
    if (e.type === 14)
        return "EOF";
    const t = (e.value || "").replace(/\r?\n/gu, "\\n");
    return t.length > 10 ? t.slice(0, 9) + "…" : t
}
function By(e, t={}) {
    const n = {
        ast: e,
        helpers: new Set
    };
    return {
        context: () => n,
        helper: i => (n.helpers.add(i),
        i)
    }
}
function _c(e, t) {
    for (let n = 0; n < e.length; n++)
        Dl(e[n], t)
}
function Dl(e, t) {
    switch (e.type) {
    case 1:
        _c(e.cases, t),
        t.helper("plural");
        break;
    case 2:
        _c(e.items, t);
        break;
    case 6:
        {
            Dl(e.key, t),
            t.helper("linked"),
            t.helper("type");
            break
        }
    case 5:
        t.helper("interpolate"),
        t.helper("list");
        break;
    case 4:
        t.helper("interpolate"),
        t.helper("named");
        break
    }
}
function jy(e, t={}) {
    const n = By(e);
    n.helper("normalize"),
    e.body && Dl(e.body, n);
    const r = n.context();
    e.helpers = Array.from(r.helpers)
}
function Uy(e) {
    const t = e.body;
    return t.type === 2 ? yc(t) : t.cases.forEach(n => yc(n)),
    e
}
function yc(e) {
    if (e.items.length === 1) {
        const t = e.items[0];
        (t.type === 3 || t.type === 9) && (e.static = t.value,
        delete t.value)
    } else {
        const t = [];
        for (let n = 0; n < e.items.length; n++) {
            const r = e.items[n];
            if (!(r.type === 3 || r.type === 9) || r.value == null)
                break;
            t.push(r.value)
        }
        if (t.length === e.items.length) {
            e.static = Oh(t);
            for (let n = 0; n < e.items.length; n++) {
                const r = e.items[n];
                (r.type === 3 || r.type === 9) && delete r.value
            }
        }
    }
}
const Vy = "minifier";
function Sr(e) {
    switch (e.t = e.type,
    e.type) {
    case 0:
        {
            const t = e;
            Sr(t.body),
            t.b = t.body,
            delete t.body;
            break
        }
    case 1:
        {
            const t = e
              , n = t.cases;
            for (let r = 0; r < n.length; r++)
                Sr(n[r]);
            t.c = n,
            delete t.cases;
            break
        }
    case 2:
        {
            const t = e
              , n = t.items;
            for (let r = 0; r < n.length; r++)
                Sr(n[r]);
            t.i = n,
            delete t.items,
            t.static && (t.s = t.static,
            delete t.static);
            break
        }
    case 3:
    case 9:
    case 8:
    case 7:
        {
            const t = e;
            t.value && (t.v = t.value,
            delete t.value);
            break
        }
    case 6:
        {
            const t = e;
            Sr(t.key),
            t.k = t.key,
            delete t.key,
            t.modifier && (Sr(t.modifier),
            t.m = t.modifier,
            delete t.modifier);
            break
        }
    case 5:
        {
            const t = e;
            t.i = t.index,
            delete t.index;
            break
        }
    case 4:
        {
            const t = e;
            t.k = t.key,
            delete t.key;
            break
        }
    default:
        throw Xr(he.UNHANDLED_MINIFIER_NODE_TYPE, null, {
            domain: Vy,
            args: [e.type]
        })
    }
    delete e.type
}
const Hy = "parser";
function Wy(e, t) {
    const {sourceMap: n, filename: r, breakLineCode: o, needIndent: i} = t
      , s = t.location !== !1
      , a = {
        filename: r,
        code: "",
        column: 1,
        line: 1,
        offset: 0,
        map: void 0,
        breakLineCode: o,
        needIndent: i,
        indentLevel: 0
    };
    s && e.loc && (a.source = e.loc.source);
    const l = () => a;
    function u(b, T) {
        a.code += b
    }
    function c(b, T=!0) {
        const E = T ? o : "";
        u(i ? E + "  ".repeat(b) : E)
    }
    function d(b=!0) {
        const T = ++a.indentLevel;
        b && c(T)
    }
    function f(b=!0) {
        const T = --a.indentLevel;
        b && c(T)
    }
    function m() {
        c(a.indentLevel)
    }
    return {
        context: l,
        push: u,
        indent: d,
        deindent: f,
        newline: m,
        helper: b => `_${b}`,
        needIndent: () => a.needIndent
    }
}
function zy(e, t) {
    const {helper: n} = e;
    e.push(`${n("linked")}(`),
    Dr(e, t.key),
    t.modifier ? (e.push(", "),
    Dr(e, t.modifier),
    e.push(", _type")) : e.push(", undefined, _type"),
    e.push(")")
}
function Ky(e, t) {
    const {helper: n, needIndent: r} = e;
    e.push(`${n("normalize")}([`),
    e.indent(r());
    const o = t.items.length;
    for (let i = 0; i < o && (Dr(e, t.items[i]),
    i !== o - 1); i++)
        e.push(", ");
    e.deindent(r()),
    e.push("])")
}
function Gy(e, t) {
    const {helper: n, needIndent: r} = e;
    if (t.cases.length > 1) {
        e.push(`${n("plural")}([`),
        e.indent(r());
        const o = t.cases.length;
        for (let i = 0; i < o && (Dr(e, t.cases[i]),
        i !== o - 1); i++)
            e.push(", ");
        e.deindent(r()),
        e.push("])")
    }
}
function Yy(e, t) {
    t.body ? Dr(e, t.body) : e.push("null")
}
function Dr(e, t) {
    const {helper: n} = e;
    switch (t.type) {
    case 0:
        Yy(e, t);
        break;
    case 1:
        Gy(e, t);
        break;
    case 2:
        Ky(e, t);
        break;
    case 6:
        zy(e, t);
        break;
    case 8:
        e.push(JSON.stringify(t.value), t);
        break;
    case 7:
        e.push(JSON.stringify(t.value), t);
        break;
    case 5:
        e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
        break;
    case 4:
        e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
        break;
    case 9:
        e.push(JSON.stringify(t.value), t);
        break;
    case 3:
        e.push(JSON.stringify(t.value), t);
        break;
    default:
        throw Xr(he.UNHANDLED_CODEGEN_NODE_TYPE, null, {
            domain: Hy,
            args: [t.type]
        })
    }
}
const Xy = (e, t={}) => {
    const n = vc(t.mode) ? t.mode : "normal"
      , r = vc(t.filename) ? t.filename : "message.intl"
      , o = !!t.sourceMap
      , i = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`
      , s = t.needIndent ? t.needIndent : n !== "arrow"
      , a = e.helpers || []
      , l = Wy(e, {
        mode: n,
        filename: r,
        sourceMap: o,
        breakLineCode: i,
        needIndent: s
    });
    l.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"),
    l.indent(s),
    a.length > 0 && (l.push(`const { ${Oh(a.map(d => `${d}: _${d}`), ", ")} } = ctx`),
    l.newline()),
    l.push("return "),
    Dr(l, e),
    l.deindent(s),
    l.push("}"),
    delete e.helpers;
    const {code: u, map: c} = l.context();
    return {
        ast: e,
        code: u,
        map: c ? c.toJSON() : void 0
    }
}
;
function Qy(e, t={}) {
    const n = Lh({}, t)
      , r = !!n.jit
      , o = !!n.minify
      , i = n.optimize == null ? !0 : n.optimize
      , a = qy(n).parse(e);
    return r ? (i && Uy(a),
    o && Sr(a),
    {
        ast: a,
        code: ""
    }) : (jy(a, n),
    Xy(a, n))
}
/*!
  * core-base v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
function Jy() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (fn().__INTLIFY_PROD_DEVTOOLS__ = !1),
    typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (fn().__INTLIFY_JIT_COMPILATION__ = !1),
    typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (fn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1)
}
const jn = [];
jn[0] = {
    w: [0],
    i: [3, 0],
    "[": [4],
    o: [7]
};
jn[1] = {
    w: [1],
    ".": [2],
    "[": [4],
    o: [7]
};
jn[2] = {
    w: [2],
    i: [3, 0],
    0: [3, 0]
};
jn[3] = {
    i: [3, 0],
    0: [3, 0],
    w: [1, 1],
    ".": [2, 1],
    "[": [4, 1],
    o: [7, 1]
};
jn[4] = {
    "'": [5, 0],
    '"': [6, 0],
    "[": [4, 2],
    "]": [1, 3],
    o: 8,
    l: [4, 0]
};
jn[5] = {
    "'": [4, 0],
    o: 8,
    l: [5, 0]
};
jn[6] = {
    '"': [4, 0],
    o: 8,
    l: [6, 0]
};
const Zy = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function e0(e) {
    return Zy.test(e)
}
function t0(e) {
    const t = e.charCodeAt(0)
      , n = e.charCodeAt(e.length - 1);
    return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
}
function n0(e) {
    if (e == null)
        return "o";
    switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
        return e;
    case 95:
    case 36:
    case 45:
        return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
        return "w"
    }
    return "i"
}
function r0(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : e0(t) ? t0(t) : "*" + t
}
function o0(e) {
    const t = [];
    let n = -1, r = 0, o = 0, i, s, a, l, u, c, d;
    const f = [];
    f[0] = () => {
        s === void 0 ? s = a : s += a
    }
    ,
    f[1] = () => {
        s !== void 0 && (t.push(s),
        s = void 0)
    }
    ,
    f[2] = () => {
        f[0](),
        o++
    }
    ,
    f[3] = () => {
        if (o > 0)
            o--,
            r = 4,
            f[0]();
        else {
            if (o = 0,
            s === void 0 || (s = r0(s),
            s === !1))
                return !1;
            f[1]()
        }
    }
    ;
    function m() {
        const h = e[n + 1];
        if (r === 5 && h === "'" || r === 6 && h === '"')
            return n++,
            a = "\\" + h,
            f[0](),
            !0
    }
    for (; r !== null; )
        if (n++,
        i = e[n],
        !(i === "\\" && m())) {
            if (l = n0(i),
            d = jn[r],
            u = d[l] || d.l || 8,
            u === 8 || (r = u[0],
            u[1] !== void 0 && (c = f[u[1]],
            c && (a = i,
            c() === !1))))
                return;
            if (r === 7)
                return t
        }
}
const wc = new Map;
function i0(e, t) {
    return Le(e) ? e[t] : null
}
function s0(e, t) {
    if (!Le(e))
        return null;
    let n = wc.get(t);
    if (n || (n = o0(t),
    n && wc.set(t, n)),
    !n)
        return null;
    const r = n.length;
    let o = e
      , i = 0;
    for (; i < r; ) {
        const s = o[n[i]];
        if (s === void 0 || Be(o))
            return null;
        o = s,
        i++
    }
    return o
}
const a0 = e => e
  , l0 = e => ""
  , u0 = "text"
  , c0 = e => e.length === 0 ? "" : yy(e)
  , f0 = _y;
function Ec(e, t) {
    return e = Math.abs(e),
    t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}
function d0(e) {
    const t = Ze(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (Ze(e.named.count) || Ze(e.named.n)) ? Ze(e.named.count) ? e.named.count : Ze(e.named.n) ? e.named.n : t : t
}
function m0(e, t) {
    t.count || (t.count = e),
    t.n || (t.n = e)
}
function h0(e={}) {
    const t = e.locale
      , n = d0(e)
      , r = Le(e.pluralRules) && se(t) && Be(e.pluralRules[t]) ? e.pluralRules[t] : Ec
      , o = Le(e.pluralRules) && se(t) && Be(e.pluralRules[t]) ? Ec : void 0
      , i = T => T[r(n, T.length, o)]
      , s = e.list || []
      , a = T => s[T]
      , l = e.named || {};
    Ze(e.pluralIndex) && m0(n, l);
    const u = T => l[T];
    function c(T) {
        const E = Be(e.messages) ? e.messages(T) : Le(e.messages) ? e.messages[T] : !1;
        return E || (e.parent ? e.parent.message(T) : l0)
    }
    const d = T => e.modifiers ? e.modifiers[T] : a0
      , f = ye(e.processor) && Be(e.processor.normalize) ? e.processor.normalize : c0
      , m = ye(e.processor) && Be(e.processor.interpolate) ? e.processor.interpolate : f0
      , h = ye(e.processor) && se(e.processor.type) ? e.processor.type : u0
      , b = {
        list: a,
        named: u,
        plural: i,
        linked: (T, ...E) => {
            const [v,p] = E;
            let C = "text"
              , w = "";
            E.length === 1 ? Le(v) ? (w = v.modifier || w,
            C = v.type || C) : se(v) && (w = v || w) : E.length === 2 && (se(v) && (w = v || w),
            se(p) && (C = p || C));
            const k = c(T)(b)
              , P = C === "vnode" && Ue(k) && w ? k[0] : k;
            return w ? d(w)(P, C) : P
        }
        ,
        message: c,
        type: h,
        interpolate: m,
        normalize: f,
        values: lt({}, s, l)
    };
    return b
}
let Mo = null;
function g0(e) {
    Mo = e
}
function p0(e, t, n) {
    Mo && Mo.emit("i18n:init", {
        timestamp: Date.now(),
        i18n: e,
        version: t,
        meta: n
    })
}
const v0 = b0("function:translate");
function b0(e) {
    return t => Mo && Mo.emit(e, t)
}
const Ph = Fl.__EXTEND_POINT__
  , zn = vs(Ph)
  , _0 = {
    NOT_FOUND_KEY: Ph,
    FALLBACK_TO_TRANSLATE: zn(),
    CANNOT_FORMAT_NUMBER: zn(),
    FALLBACK_TO_NUMBER_FORMAT: zn(),
    CANNOT_FORMAT_DATE: zn(),
    FALLBACK_TO_DATE_FORMAT: zn(),
    EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: zn(),
    __EXTEND_POINT__: zn()
}
  , Rh = he.__EXTEND_POINT__
  , Kn = vs(Rh)
  , Bt = {
    INVALID_ARGUMENT: Rh,
    INVALID_DATE_ARGUMENT: Kn(),
    INVALID_ISO_DATE_ARGUMENT: Kn(),
    NOT_SUPPORT_NON_STRING_MESSAGE: Kn(),
    NOT_SUPPORT_LOCALE_PROMISE_VALUE: Kn(),
    NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: Kn(),
    NOT_SUPPORT_LOCALE_TYPE: Kn(),
    __EXTEND_POINT__: Kn()
};
function Jt(e) {
    return Xr(e, null, void 0)
}
function ql(e, t) {
    return t.locale != null ? Sc(t.locale) : Sc(e.locale)
}
let Zs;
function Sc(e) {
    if (se(e))
        return e;
    if (Be(e)) {
        if (e.resolvedOnce && Zs != null)
            return Zs;
        if (e.constructor.name === "Function") {
            const t = e();
            if (by(t))
                throw Jt(Bt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
            return Zs = t
        } else
            throw Jt(Bt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)
    } else
        throw Jt(Bt.NOT_SUPPORT_LOCALE_TYPE)
}
function y0(e, t, n) {
    return [...new Set([n, ...Ue(t) ? t : Le(t) ? Object.keys(t) : se(t) ? [t] : [n]])]
}
function Ih(e, t, n) {
    const r = se(n) ? n : qr
      , o = e;
    o.__localeChainCache || (o.__localeChainCache = new Map);
    let i = o.__localeChainCache.get(r);
    if (!i) {
        i = [];
        let s = [n];
        for (; Ue(s); )
            s = Cc(i, s, t);
        const a = Ue(t) || !ye(t) ? t : t.default ? t.default : null;
        s = se(a) ? [a] : a,
        Ue(s) && Cc(i, s, !1),
        o.__localeChainCache.set(r, i)
    }
    return i
}
function Cc(e, t, n) {
    let r = !0;
    for (let o = 0; o < t.length && Ce(r); o++) {
        const i = t[o];
        se(i) && (r = w0(e, t[o], n))
    }
    return r
}
function w0(e, t, n) {
    let r;
    const o = t.split("-");
    do {
        const i = o.join("-");
        r = E0(e, i, n),
        o.splice(-1, 1)
    } while (o.length && r === !0);
    return r
}
function E0(e, t, n) {
    let r = !1;
    if (!e.includes(t) && (r = !0,
    t)) {
        r = t[t.length - 1] !== "!";
        const o = t.replace(/!/g, "");
        e.push(o),
        (Ue(n) || ye(n)) && n[o] && (r = n[o])
    }
    return r
}
const S0 = "9.14.1"
  , bs = -1
  , qr = "en-US"
  , Tc = ""
  , xc = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function C0() {
    return {
        upper: (e, t) => t === "text" && se(e) ? e.toUpperCase() : t === "vnode" && Le(e) && "__v_isVNode"in e ? e.children.toUpperCase() : e,
        lower: (e, t) => t === "text" && se(e) ? e.toLowerCase() : t === "vnode" && Le(e) && "__v_isVNode"in e ? e.children.toLowerCase() : e,
        capitalize: (e, t) => t === "text" && se(e) ? xc(e) : t === "vnode" && Le(e) && "__v_isVNode"in e ? xc(e.children) : e
    }
}
let Nh;
function kc(e) {
    Nh = e
}
let Mh;
function T0(e) {
    Mh = e
}
let $h;
function x0(e) {
    $h = e
}
let Fh = null;
const k0 = e => {
    Fh = e
}
  , A0 = () => Fh;
let Dh = null;
const Ac = e => {
    Dh = e
}
  , L0 = () => Dh;
let Lc = 0;
function O0(e={}) {
    const t = Be(e.onWarn) ? e.onWarn : wy
      , n = se(e.version) ? e.version : S0
      , r = se(e.locale) || Be(e.locale) ? e.locale : qr
      , o = Be(r) ? qr : r
      , i = Ue(e.fallbackLocale) || ye(e.fallbackLocale) || se(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : o
      , s = ye(e.messages) ? e.messages : {
        [o]: {}
    }
      , a = ye(e.datetimeFormats) ? e.datetimeFormats : {
        [o]: {}
    }
      , l = ye(e.numberFormats) ? e.numberFormats : {
        [o]: {}
    }
      , u = lt({}, e.modifiers || {}, C0())
      , c = e.pluralRules || {}
      , d = Be(e.missing) ? e.missing : null
      , f = Ce(e.missingWarn) || $n(e.missingWarn) ? e.missingWarn : !0
      , m = Ce(e.fallbackWarn) || $n(e.fallbackWarn) ? e.fallbackWarn : !0
      , h = !!e.fallbackFormat
      , g = !!e.unresolving
      , b = Be(e.postTranslation) ? e.postTranslation : null
      , T = ye(e.processor) ? e.processor : null
      , E = Ce(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , v = !!e.escapeParameter
      , p = Be(e.messageCompiler) ? e.messageCompiler : Nh
      , C = Be(e.messageResolver) ? e.messageResolver : Mh || i0
      , w = Be(e.localeFallbacker) ? e.localeFallbacker : $h || y0
      , k = Le(e.fallbackContext) ? e.fallbackContext : void 0
      , P = e
      , A = Le(P.__datetimeFormatters) ? P.__datetimeFormatters : new Map
      , R = Le(P.__numberFormatters) ? P.__numberFormatters : new Map
      , q = Le(P.__meta) ? P.__meta : {};
    Lc++;
    const L = {
        version: n,
        cid: Lc,
        locale: r,
        fallbackLocale: i,
        messages: s,
        modifiers: u,
        pluralRules: c,
        missing: d,
        missingWarn: f,
        fallbackWarn: m,
        fallbackFormat: h,
        unresolving: g,
        postTranslation: b,
        processor: T,
        warnHtmlMessage: E,
        escapeParameter: v,
        messageCompiler: p,
        messageResolver: C,
        localeFallbacker: w,
        fallbackContext: k,
        onWarn: t,
        __meta: q
    };
    return L.datetimeFormats = a,
    L.numberFormats = l,
    L.__datetimeFormatters = A,
    L.__numberFormatters = R,
    __INTLIFY_PROD_DEVTOOLS__ && p0(L, n, q),
    L
}
function Bl(e, t, n, r, o) {
    const {missing: i, onWarn: s} = e;
    if (i !== null) {
        const a = i(e, n, t, o);
        return se(a) ? a : t
    } else
        return t
}
function ao(e, t, n) {
    const r = e;
    r.__localeChainCache = new Map,
    e.localeFallbacker(e, n, t)
}
function P0(e, t) {
    return e === t ? !1 : e.split("-")[0] === t.split("-")[0]
}
function R0(e, t) {
    const n = t.indexOf(e);
    if (n === -1)
        return !1;
    for (let r = n + 1; r < t.length; r++)
        if (P0(e, t[r]))
            return !0;
    return !1
}
function ea(e) {
    return n => I0(n, e)
}
function I0(e, t) {
    const n = t.b || t.body;
    if ((n.t || n.type) === 1) {
        const r = n
          , o = r.c || r.cases;
        return e.plural(o.reduce( (i, s) => [...i, Oc(e, s)], []))
    } else
        return Oc(e, n)
}
function Oc(e, t) {
    const n = t.s || t.static;
    if (n)
        return e.type === "text" ? n : e.normalize([n]);
    {
        const r = (t.i || t.items).reduce( (o, i) => [...o, Fa(e, i)], []);
        return e.normalize(r)
    }
}
function Fa(e, t) {
    const n = t.t || t.type;
    switch (n) {
    case 3:
        {
            const r = t;
            return r.v || r.value
        }
    case 9:
        {
            const r = t;
            return r.v || r.value
        }
    case 4:
        {
            const r = t;
            return e.interpolate(e.named(r.k || r.key))
        }
    case 5:
        {
            const r = t;
            return e.interpolate(e.list(r.i != null ? r.i : r.index))
        }
    case 6:
        {
            const r = t
              , o = r.m || r.modifier;
            return e.linked(Fa(e, r.k || r.key), o ? Fa(e, o) : void 0, e.type)
        }
    case 7:
        {
            const r = t;
            return r.v || r.value
        }
    case 8:
        {
            const r = t;
            return r.v || r.value
        }
    default:
        throw new Error(`unhandled node type on format message part: ${n}`)
    }
}
const qh = e => e;
let Tr = Object.create(null);
const Br = e => Le(e) && (e.t === 0 || e.type === 0) && ("b"in e || "body"in e);
function Bh(e, t={}) {
    let n = !1;
    const r = t.onError || Ay;
    return t.onError = o => {
        n = !0,
        r(o)
    }
    ,
    {
        ...Qy(e, t),
        detectError: n
    }
}
const N0 = (e, t) => {
    if (!se(e))
        throw Jt(Bt.NOT_SUPPORT_NON_STRING_MESSAGE);
    {
        Ce(t.warnHtmlMessage) && t.warnHtmlMessage;
        const r = (t.onCacheKey || qh)(e)
          , o = Tr[r];
        if (o)
            return o;
        const {code: i, detectError: s} = Bh(e, t)
          , a = new Function(`return ${i}`)();
        return s ? a : Tr[r] = a
    }
}
;
function M0(e, t) {
    if (__INTLIFY_JIT_COMPILATION__ && !__INTLIFY_DROP_MESSAGE_COMPILER__ && se(e)) {
        Ce(t.warnHtmlMessage) && t.warnHtmlMessage;
        const r = (t.onCacheKey || qh)(e)
          , o = Tr[r];
        if (o)
            return o;
        const {ast: i, detectError: s} = Bh(e, {
            ...t,
            location: !1,
            jit: !0
        })
          , a = ea(i);
        return s ? a : Tr[r] = a
    } else {
        const n = e.cacheKey;
        if (n) {
            const r = Tr[n];
            return r || (Tr[n] = ea(e))
        } else
            return ea(e)
    }
}
const Pc = () => ""
  , Rt = e => Be(e);
function Rc(e, ...t) {
    const {fallbackFormat: n, postTranslation: r, unresolving: o, messageCompiler: i, fallbackLocale: s, messages: a} = e
      , [l,u] = Da(...t)
      , c = Ce(u.missingWarn) ? u.missingWarn : e.missingWarn
      , d = Ce(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn
      , f = Ce(u.escapeParameter) ? u.escapeParameter : e.escapeParameter
      , m = !!u.resolvedMessage
      , h = se(u.default) || Ce(u.default) ? Ce(u.default) ? i ? l : () => l : u.default : n ? i ? l : () => l : ""
      , g = n || h !== ""
      , b = ql(e, u);
    f && $0(u);
    let[T,E,v] = m ? [l, b, a[b] || {}] : jh(e, l, b, s, d, c)
      , p = T
      , C = l;
    if (!m && !(se(p) || Br(p) || Rt(p)) && g && (p = h,
    C = p),
    !m && (!(se(p) || Br(p) || Rt(p)) || !se(E)))
        return o ? bs : l;
    let w = !1;
    const k = () => {
        w = !0
    }
      , P = Rt(p) ? p : Uh(e, l, E, p, C, k);
    if (w)
        return p;
    const A = q0(e, E, v, u)
      , R = h0(A)
      , q = F0(e, P, R)
      , L = r ? r(q, l) : q;
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const H = {
            timestamp: Date.now(),
            key: se(l) ? l : Rt(p) ? p.key : "",
            locale: E || (Rt(p) ? p.locale : ""),
            format: se(p) ? p : Rt(p) ? p.source : "",
            message: L
        };
        H.meta = lt({}, e.__meta, A0() || {}),
        v0(H)
    }
    return L
}
function $0(e) {
    Ue(e.list) ? e.list = e.list.map(t => se(t) ? pc(t) : t) : Le(e.named) && Object.keys(e.named).forEach(t => {
        se(e.named[t]) && (e.named[t] = pc(e.named[t]))
    }
    )
}
function jh(e, t, n, r, o, i) {
    const {messages: s, onWarn: a, messageResolver: l, localeFallbacker: u} = e
      , c = u(e, r, n);
    let d = {}, f, m = null;
    const h = "translate";
    for (let g = 0; g < c.length && (f = c[g],
    d = s[f] || {},
    (m = l(d, t)) === null && (m = d[t]),
    !(se(m) || Br(m) || Rt(m))); g++)
        if (!R0(f, c)) {
            const b = Bl(e, t, f, i, h);
            b !== t && (m = b)
        }
    return [m, f, d]
}
function Uh(e, t, n, r, o, i) {
    const {messageCompiler: s, warnHtmlMessage: a} = e;
    if (Rt(r)) {
        const u = r;
        return u.locale = u.locale || n,
        u.key = u.key || t,
        u
    }
    if (s == null) {
        const u = () => r;
        return u.locale = n,
        u.key = t,
        u
    }
    const l = s(r, D0(e, n, o, r, a, i));
    return l.locale = n,
    l.key = t,
    l.source = r,
    l
}
function F0(e, t, n) {
    return t(n)
}
function Da(...e) {
    const [t,n,r] = e
      , o = {};
    if (!se(t) && !Ze(t) && !Rt(t) && !Br(t))
        throw Jt(Bt.INVALID_ARGUMENT);
    const i = Ze(t) ? String(t) : (Rt(t),
    t);
    return Ze(n) ? o.plural = n : se(n) ? o.default = n : ye(n) && !ps(n) ? o.named = n : Ue(n) && (o.list = n),
    Ze(r) ? o.plural = r : se(r) ? o.default = r : ye(r) && lt(o, r),
    [i, o]
}
function D0(e, t, n, r, o, i) {
    return {
        locale: t,
        key: n,
        warnHtmlMessage: o,
        onError: s => {
            throw i && i(s),
            s
        }
        ,
        onCacheKey: s => hy(t, n, s)
    }
}
function q0(e, t, n, r) {
    const {modifiers: o, pluralRules: i, messageResolver: s, fallbackLocale: a, fallbackWarn: l, missingWarn: u, fallbackContext: c} = e
      , f = {
        locale: t,
        modifiers: o,
        pluralRules: i,
        messages: m => {
            let h = s(n, m);
            if (h == null && c) {
                const [,,g] = jh(c, m, t, a, l, u);
                h = s(g, m)
            }
            if (se(h) || Br(h)) {
                let g = !1;
                const T = Uh(e, m, t, h, m, () => {
                    g = !0
                }
                );
                return g ? Pc : T
            } else
                return Rt(h) ? h : Pc
        }
    };
    return e.processor && (f.processor = e.processor),
    r.list && (f.list = r.list),
    r.named && (f.named = r.named),
    Ze(r.plural) && (f.pluralIndex = r.plural),
    f
}
function Ic(e, ...t) {
    const {datetimeFormats: n, unresolving: r, fallbackLocale: o, onWarn: i, localeFallbacker: s} = e
      , {__datetimeFormatters: a} = e
      , [l,u,c,d] = qa(...t)
      , f = Ce(c.missingWarn) ? c.missingWarn : e.missingWarn;
    Ce(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
    const m = !!c.part
      , h = ql(e, c)
      , g = s(e, o, h);
    if (!se(l) || l === "")
        return new Intl.DateTimeFormat(h,d).format(u);
    let b = {}, T, E = null;
    const v = "datetime format";
    for (let w = 0; w < g.length && (T = g[w],
    b = n[T] || {},
    E = b[l],
    !ye(E)); w++)
        Bl(e, l, T, f, v);
    if (!ye(E) || !se(T))
        return r ? bs : l;
    let p = `${T}__${l}`;
    ps(d) || (p = `${p}__${JSON.stringify(d)}`);
    let C = a.get(p);
    return C || (C = new Intl.DateTimeFormat(T,lt({}, E, d)),
    a.set(p, C)),
    m ? C.formatToParts(u) : C.format(u)
}
const Vh = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];
function qa(...e) {
    const [t,n,r,o] = e
      , i = {};
    let s = {}, a;
    if (se(t)) {
        const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!l)
            throw Jt(Bt.INVALID_ISO_DATE_ARGUMENT);
        const u = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
        a = new Date(u);
        try {
            a.toISOString()
        } catch {
            throw Jt(Bt.INVALID_ISO_DATE_ARGUMENT)
        }
    } else if (py(t)) {
        if (isNaN(t.getTime()))
            throw Jt(Bt.INVALID_DATE_ARGUMENT);
        a = t
    } else if (Ze(t))
        a = t;
    else
        throw Jt(Bt.INVALID_ARGUMENT);
    return se(n) ? i.key = n : ye(n) && Object.keys(n).forEach(l => {
        Vh.includes(l) ? s[l] = n[l] : i[l] = n[l]
    }
    ),
    se(r) ? i.locale = r : ye(r) && (s = r),
    ye(o) && (s = o),
    [i.key || "", a, i, s]
}
function Nc(e, t, n) {
    const r = e;
    for (const o in n) {
        const i = `${t}__${o}`;
        r.__datetimeFormatters.has(i) && r.__datetimeFormatters.delete(i)
    }
}
function Mc(e, ...t) {
    const {numberFormats: n, unresolving: r, fallbackLocale: o, onWarn: i, localeFallbacker: s} = e
      , {__numberFormatters: a} = e
      , [l,u,c,d] = Ba(...t)
      , f = Ce(c.missingWarn) ? c.missingWarn : e.missingWarn;
    Ce(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn;
    const m = !!c.part
      , h = ql(e, c)
      , g = s(e, o, h);
    if (!se(l) || l === "")
        return new Intl.NumberFormat(h,d).format(u);
    let b = {}, T, E = null;
    const v = "number format";
    for (let w = 0; w < g.length && (T = g[w],
    b = n[T] || {},
    E = b[l],
    !ye(E)); w++)
        Bl(e, l, T, f, v);
    if (!ye(E) || !se(T))
        return r ? bs : l;
    let p = `${T}__${l}`;
    ps(d) || (p = `${p}__${JSON.stringify(d)}`);
    let C = a.get(p);
    return C || (C = new Intl.NumberFormat(T,lt({}, E, d)),
    a.set(p, C)),
    m ? C.formatToParts(u) : C.format(u)
}
const Hh = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];
function Ba(...e) {
    const [t,n,r,o] = e
      , i = {};
    let s = {};
    if (!Ze(t))
        throw Jt(Bt.INVALID_ARGUMENT);
    const a = t;
    return se(n) ? i.key = n : ye(n) && Object.keys(n).forEach(l => {
        Hh.includes(l) ? s[l] = n[l] : i[l] = n[l]
    }
    ),
    se(r) ? i.locale = r : ye(r) && (s = r),
    ye(o) && (s = o),
    [i.key || "", a, i, s]
}
function $c(e, t, n) {
    const r = e;
    for (const o in n) {
        const i = `${t}__${o}`;
        r.__numberFormatters.has(i) && r.__numberFormatters.delete(i)
    }
}
Jy();
/*!
  * vue-i18n v9.14.1
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */
const B0 = "9.14.1";
function j0() {
    typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (fn().__VUE_I18N_FULL_INSTALL__ = !0),
    typeof __VUE_I18N_LEGACY_API__ != "boolean" && (fn().__VUE_I18N_LEGACY_API__ = !0),
    typeof __INTLIFY_JIT_COMPILATION__ != "boolean" && (fn().__INTLIFY_JIT_COMPILATION__ = !1),
    typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (fn().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1),
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (fn().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
const Wh = _0.__EXTEND_POINT__
  , rn = vs(Wh);
rn(),
rn(),
rn(),
rn(),
rn(),
rn(),
rn(),
rn(),
rn();
const zh = Bt.__EXTEND_POINT__
  , wt = vs(zh)
  , tt = {
    UNEXPECTED_RETURN_TYPE: zh,
    INVALID_ARGUMENT: wt(),
    MUST_BE_CALL_SETUP_TOP: wt(),
    NOT_INSTALLED: wt(),
    NOT_AVAILABLE_IN_LEGACY_MODE: wt(),
    REQUIRED_VALUE: wt(),
    INVALID_VALUE: wt(),
    CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: wt(),
    NOT_INSTALLED_WITH_PROVIDE: wt(),
    UNEXPECTED_ERROR: wt(),
    NOT_COMPATIBLE_LEGACY_VUE_I18N: wt(),
    BRIDGE_SUPPORT_VUE_2_ONLY: wt(),
    MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: wt(),
    NOT_AVAILABLE_COMPOSITION_IN_LEGACY: wt(),
    __EXTEND_POINT__: wt()
};
function ot(e, ...t) {
    return Xr(e, null, void 0)
}
const ja = Bn("__translateVNode")
  , Ua = Bn("__datetimeParts")
  , Va = Bn("__numberParts")
  , Kh = Bn("__setPluralRules")
  , Gh = Bn("__injectWithOption")
  , Ha = Bn("__dispose");
function $o(e) {
    if (!Le(e))
        return e;
    for (const t in e)
        if (Bi(e, t))
            if (!t.includes("."))
                Le(e[t]) && $o(e[t]);
            else {
                const n = t.split(".")
                  , r = n.length - 1;
                let o = e
                  , i = !1;
                for (let s = 0; s < r; s++) {
                    if (n[s]in o || (o[n[s]] = {}),
                    !Le(o[n[s]])) {
                        i = !0;
                        break
                    }
                    o = o[n[s]]
                }
                i || (o[n[r]] = e[t],
                delete e[t]),
                Le(o[n[r]]) && $o(o[n[r]])
            }
    return e
}
function _s(e, t) {
    const {messages: n, __i18n: r, messageResolver: o, flatJson: i} = t
      , s = ye(n) ? n : Ue(r) ? {} : {
        [e]: {}
    };
    if (Ue(r) && r.forEach(a => {
        if ("locale"in a && "resource"in a) {
            const {locale: l, resource: u} = a;
            l ? (s[l] = s[l] || {},
            _i(u, s[l])) : _i(u, s)
        } else
            se(a) && _i(JSON.parse(a), s)
    }
    ),
    o == null && i)
        for (const a in s)
            Bi(s, a) && $o(s[a]);
    return s
}
function Yh(e) {
    return e.type
}
function Xh(e, t, n) {
    let r = Le(t.messages) ? t.messages : {};
    "__i18nGlobal"in n && (r = _s(e.locale.value, {
        messages: r,
        __i18n: n.__i18nGlobal
    }));
    const o = Object.keys(r);
    o.length && o.forEach(i => {
        e.mergeLocaleMessage(i, r[i])
    }
    );
    {
        if (Le(t.datetimeFormats)) {
            const i = Object.keys(t.datetimeFormats);
            i.length && i.forEach(s => {
                e.mergeDateTimeFormat(s, t.datetimeFormats[s])
            }
            )
        }
        if (Le(t.numberFormats)) {
            const i = Object.keys(t.numberFormats);
            i.length && i.forEach(s => {
                e.mergeNumberFormat(s, t.numberFormats[s])
            }
            )
        }
    }
}
function Fc(e) {
    return gt(Ho, null, e, 0)
}
const Dc = "__INTLIFY_META__"
  , qc = () => []
  , U0 = () => !1;
let Bc = 0;
function jc(e) {
    return (t, n, r, o) => e(n, r, Te() || void 0, o)
}
const V0 = () => {
    const e = Te();
    let t = null;
    return e && (t = Yh(e)[Dc]) ? {
        [Dc]: t
    } : null
}
;
function jl(e={}, t) {
    const {__root: n, __injectWithOption: r} = e
      , o = n === void 0
      , i = e.flatJson
      , s = qi ? le : is
      , a = !!e.translateExistCompatible;
    let l = Ce(e.inheritLocale) ? e.inheritLocale : !0;
    const u = s(n && l ? n.locale.value : se(e.locale) ? e.locale : qr)
      , c = s(n && l ? n.fallbackLocale.value : se(e.fallbackLocale) || Ue(e.fallbackLocale) || ye(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : u.value)
      , d = s(_s(u.value, e))
      , f = s(ye(e.datetimeFormats) ? e.datetimeFormats : {
        [u.value]: {}
    })
      , m = s(ye(e.numberFormats) ? e.numberFormats : {
        [u.value]: {}
    });
    let h = n ? n.missingWarn : Ce(e.missingWarn) || $n(e.missingWarn) ? e.missingWarn : !0
      , g = n ? n.fallbackWarn : Ce(e.fallbackWarn) || $n(e.fallbackWarn) ? e.fallbackWarn : !0
      , b = n ? n.fallbackRoot : Ce(e.fallbackRoot) ? e.fallbackRoot : !0
      , T = !!e.fallbackFormat
      , E = Be(e.missing) ? e.missing : null
      , v = Be(e.missing) ? jc(e.missing) : null
      , p = Be(e.postTranslation) ? e.postTranslation : null
      , C = n ? n.warnHtmlMessage : Ce(e.warnHtmlMessage) ? e.warnHtmlMessage : !0
      , w = !!e.escapeParameter;
    const k = n ? n.modifiers : ye(e.modifiers) ? e.modifiers : {};
    let P = e.pluralRules || n && n.pluralRules, A;
    A = ( () => {
        o && Ac(null);
        const $ = {
            version: B0,
            locale: u.value,
            fallbackLocale: c.value,
            messages: d.value,
            modifiers: k,
            pluralRules: P,
            missing: v === null ? void 0 : v,
            missingWarn: h,
            fallbackWarn: g,
            fallbackFormat: T,
            unresolving: !0,
            postTranslation: p === null ? void 0 : p,
            warnHtmlMessage: C,
            escapeParameter: w,
            messageResolver: e.messageResolver,
            messageCompiler: e.messageCompiler,
            __meta: {
                framework: "vue"
            }
        };
        $.datetimeFormats = f.value,
        $.numberFormats = m.value,
        $.__datetimeFormatters = ye(A) ? A.__datetimeFormatters : void 0,
        $.__numberFormatters = ye(A) ? A.__numberFormatters : void 0;
        const U = O0($);
        return o && Ac(U),
        U
    }
    )(),
    ao(A, u.value, c.value);
    function q() {
        return [u.value, c.value, d.value, f.value, m.value]
    }
    const L = O({
        get: () => u.value,
        set: $ => {
            u.value = $,
            A.locale = u.value
        }
    })
      , H = O({
        get: () => c.value,
        set: $ => {
            c.value = $,
            A.fallbackLocale = c.value,
            ao(A, u.value, $)
        }
    })
      , F = O( () => d.value)
      , ee = O( () => f.value)
      , ne = O( () => m.value);
    function z() {
        return Be(p) ? p : null
    }
    function K($) {
        p = $,
        A.postTranslation = $
    }
    function ae() {
        return E
    }
    function ue($) {
        $ !== null && (v = jc($)),
        E = $,
        A.missing = v
    }
    const ce = ($, U, fe, me, Ve, We) => {
        q();
        let Ge;
        try {
            __INTLIFY_PROD_DEVTOOLS__,
            o || (A.fallbackContext = n ? L0() : void 0),
            Ge = $(A)
        } finally {
            __INTLIFY_PROD_DEVTOOLS__,
            o || (A.fallbackContext = void 0)
        }
        if (fe !== "translate exists" && Ze(Ge) && Ge === bs || fe === "translate exists" && !Ge) {
            const [J,pe] = U();
            return n && b ? me(n) : Ve(J)
        } else {
            if (We(Ge))
                return Ge;
            throw ot(tt.UNEXPECTED_RETURN_TYPE)
        }
    }
    ;
    function X(...$) {
        return ce(U => Reflect.apply(Rc, null, [U, ...$]), () => Da(...$), "translate", U => Reflect.apply(U.t, U, [...$]), U => U, U => se(U))
    }
    function be(...$) {
        const [U,fe,me] = $;
        if (me && !Le(me))
            throw ot(tt.INVALID_ARGUMENT);
        return X(U, fe, lt({
            resolvedMessage: !0
        }, me || {}))
    }
    function ke(...$) {
        return ce(U => Reflect.apply(Ic, null, [U, ...$]), () => qa(...$), "datetime format", U => Reflect.apply(U.d, U, [...$]), () => Tc, U => se(U))
    }
    function Ae(...$) {
        return ce(U => Reflect.apply(Mc, null, [U, ...$]), () => Ba(...$), "number format", U => Reflect.apply(U.n, U, [...$]), () => Tc, U => se(U))
    }
    function oe($) {
        return $.map(U => se(U) || Ze(U) || Ce(U) ? Fc(String(U)) : U)
    }
    const re = {
        normalize: oe,
        interpolate: $ => $,
        type: "vnode"
    };
    function W(...$) {
        return ce(U => {
            let fe;
            const me = U;
            try {
                me.processor = re,
                fe = Reflect.apply(Rc, null, [me, ...$])
            } finally {
                me.processor = null
            }
            return fe
        }
        , () => Da(...$), "translate", U => U[ja](...$), U => [Fc(U)], U => Ue(U))
    }
    function ie(...$) {
        return ce(U => Reflect.apply(Mc, null, [U, ...$]), () => Ba(...$), "number format", U => U[Va](...$), qc, U => se(U) || Ue(U))
    }
    function we(...$) {
        return ce(U => Reflect.apply(Ic, null, [U, ...$]), () => qa(...$), "datetime format", U => U[Ua](...$), qc, U => se(U) || Ue(U))
    }
    function ge($) {
        P = $,
        A.pluralRules = P
    }
    function x($, U) {
        return ce( () => {
            if (!$)
                return !1;
            const fe = se(U) ? U : u.value
              , me = j(fe)
              , Ve = A.messageResolver(me, $);
            return a ? Ve != null : Br(Ve) || Rt(Ve) || se(Ve)
        }
        , () => [$], "translate exists", fe => Reflect.apply(fe.te, fe, [$, U]), U0, fe => Ce(fe))
    }
    function y($) {
        let U = null;
        const fe = Ih(A, c.value, u.value);
        for (let me = 0; me < fe.length; me++) {
            const Ve = d.value[fe[me]] || {}
              , We = A.messageResolver(Ve, $);
            if (We != null) {
                U = We;
                break
            }
        }
        return U
    }
    function N($) {
        const U = y($);
        return U ?? (n ? n.tm($) || {} : {})
    }
    function j($) {
        return d.value[$] || {}
    }
    function D($, U) {
        if (i) {
            const fe = {
                [$]: U
            };
            for (const me in fe)
                Bi(fe, me) && $o(fe[me]);
            U = fe[$]
        }
        d.value[$] = U,
        A.messages = d.value
    }
    function Y($, U) {
        d.value[$] = d.value[$] || {};
        const fe = {
            [$]: U
        };
        if (i)
            for (const me in fe)
                Bi(fe, me) && $o(fe[me]);
        U = fe[$],
        _i(U, d.value[$]),
        A.messages = d.value
    }
    function G($) {
        return f.value[$] || {}
    }
    function _($, U) {
        f.value[$] = U,
        A.datetimeFormats = f.value,
        Nc(A, $, U)
    }
    function S($, U) {
        f.value[$] = lt(f.value[$] || {}, U),
        A.datetimeFormats = f.value,
        Nc(A, $, U)
    }
    function I($) {
        return m.value[$] || {}
    }
    function Q($, U) {
        m.value[$] = U,
        A.numberFormats = m.value,
        $c(A, $, U)
    }
    function te($, U) {
        m.value[$] = lt(m.value[$] || {}, U),
        A.numberFormats = m.value,
        $c(A, $, U)
    }
    Bc++,
    n && qi && (ve(n.locale, $ => {
        l && (u.value = $,
        A.locale = $,
        ao(A, u.value, c.value))
    }
    ),
    ve(n.fallbackLocale, $ => {
        l && (c.value = $,
        A.fallbackLocale = $,
        ao(A, u.value, c.value))
    }
    ));
    const Z = {
        id: Bc,
        locale: L,
        fallbackLocale: H,
        get inheritLocale() {
            return l
        },
        set inheritLocale($) {
            l = $,
            $ && n && (u.value = n.locale.value,
            c.value = n.fallbackLocale.value,
            ao(A, u.value, c.value))
        },
        get availableLocales() {
            return Object.keys(d.value).sort()
        },
        messages: F,
        get modifiers() {
            return k
        },
        get pluralRules() {
            return P || {}
        },
        get isGlobal() {
            return o
        },
        get missingWarn() {
            return h
        },
        set missingWarn($) {
            h = $,
            A.missingWarn = h
        },
        get fallbackWarn() {
            return g
        },
        set fallbackWarn($) {
            g = $,
            A.fallbackWarn = g
        },
        get fallbackRoot() {
            return b
        },
        set fallbackRoot($) {
            b = $
        },
        get fallbackFormat() {
            return T
        },
        set fallbackFormat($) {
            T = $,
            A.fallbackFormat = T
        },
        get warnHtmlMessage() {
            return C
        },
        set warnHtmlMessage($) {
            C = $,
            A.warnHtmlMessage = $
        },
        get escapeParameter() {
            return w
        },
        set escapeParameter($) {
            w = $,
            A.escapeParameter = $
        },
        t: X,
        getLocaleMessage: j,
        setLocaleMessage: D,
        mergeLocaleMessage: Y,
        getPostTranslationHandler: z,
        setPostTranslationHandler: K,
        getMissingHandler: ae,
        setMissingHandler: ue,
        [Kh]: ge
    };
    return Z.datetimeFormats = ee,
    Z.numberFormats = ne,
    Z.rt = be,
    Z.te = x,
    Z.tm = N,
    Z.d = ke,
    Z.n = Ae,
    Z.getDateTimeFormat = G,
    Z.setDateTimeFormat = _,
    Z.mergeDateTimeFormat = S,
    Z.getNumberFormat = I,
    Z.setNumberFormat = Q,
    Z.mergeNumberFormat = te,
    Z[Gh] = r,
    Z[ja] = W,
    Z[Ua] = we,
    Z[Va] = ie,
    Z
}
function H0(e) {
    const t = se(e.locale) ? e.locale : qr
      , n = se(e.fallbackLocale) || Ue(e.fallbackLocale) || ye(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t
      , r = Be(e.missing) ? e.missing : void 0
      , o = Ce(e.silentTranslationWarn) || $n(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0
      , i = Ce(e.silentFallbackWarn) || $n(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0
      , s = Ce(e.fallbackRoot) ? e.fallbackRoot : !0
      , a = !!e.formatFallbackMessages
      , l = ye(e.modifiers) ? e.modifiers : {}
      , u = e.pluralizationRules
      , c = Be(e.postTranslation) ? e.postTranslation : void 0
      , d = se(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0
      , f = !!e.escapeParameterHtml
      , m = Ce(e.sync) ? e.sync : !0;
    let h = e.messages;
    if (ye(e.sharedMessages)) {
        const w = e.sharedMessages;
        h = Object.keys(w).reduce( (P, A) => {
            const R = P[A] || (P[A] = {});
            return lt(R, w[A]),
            P
        }
        , h || {})
    }
    const {__i18n: g, __root: b, __injectWithOption: T} = e
      , E = e.datetimeFormats
      , v = e.numberFormats
      , p = e.flatJson
      , C = e.translateExistCompatible;
    return {
        locale: t,
        fallbackLocale: n,
        messages: h,
        flatJson: p,
        datetimeFormats: E,
        numberFormats: v,
        missing: r,
        missingWarn: o,
        fallbackWarn: i,
        fallbackRoot: s,
        fallbackFormat: a,
        modifiers: l,
        pluralRules: u,
        postTranslation: c,
        warnHtmlMessage: d,
        escapeParameter: f,
        messageResolver: e.messageResolver,
        inheritLocale: m,
        translateExistCompatible: C,
        __i18n: g,
        __root: b,
        __injectWithOption: T
    }
}
function Wa(e={}, t) {
    {
        const n = jl(H0(e))
          , {__extender: r} = e
          , o = {
            id: n.id,
            get locale() {
                return n.locale.value
            },
            set locale(i) {
                n.locale.value = i
            },
            get fallbackLocale() {
                return n.fallbackLocale.value
            },
            set fallbackLocale(i) {
                n.fallbackLocale.value = i
            },
            get messages() {
                return n.messages.value
            },
            get datetimeFormats() {
                return n.datetimeFormats.value
            },
            get numberFormats() {
                return n.numberFormats.value
            },
            get availableLocales() {
                return n.availableLocales
            },
            get formatter() {
                return {
                    interpolate() {
                        return []
                    }
                }
            },
            set formatter(i) {},
            get missing() {
                return n.getMissingHandler()
            },
            set missing(i) {
                n.setMissingHandler(i)
            },
            get silentTranslationWarn() {
                return Ce(n.missingWarn) ? !n.missingWarn : n.missingWarn
            },
            set silentTranslationWarn(i) {
                n.missingWarn = Ce(i) ? !i : i
            },
            get silentFallbackWarn() {
                return Ce(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn
            },
            set silentFallbackWarn(i) {
                n.fallbackWarn = Ce(i) ? !i : i
            },
            get modifiers() {
                return n.modifiers
            },
            get formatFallbackMessages() {
                return n.fallbackFormat
            },
            set formatFallbackMessages(i) {
                n.fallbackFormat = i
            },
            get postTranslation() {
                return n.getPostTranslationHandler()
            },
            set postTranslation(i) {
                n.setPostTranslationHandler(i)
            },
            get sync() {
                return n.inheritLocale
            },
            set sync(i) {
                n.inheritLocale = i
            },
            get warnHtmlInMessage() {
                return n.warnHtmlMessage ? "warn" : "off"
            },
            set warnHtmlInMessage(i) {
                n.warnHtmlMessage = i !== "off"
            },
            get escapeParameterHtml() {
                return n.escapeParameter
            },
            set escapeParameterHtml(i) {
                n.escapeParameter = i
            },
            get preserveDirectiveContent() {
                return !0
            },
            set preserveDirectiveContent(i) {},
            get pluralizationRules() {
                return n.pluralRules || {}
            },
            __composer: n,
            t(...i) {
                const [s,a,l] = i
                  , u = {};
                let c = null
                  , d = null;
                if (!se(s))
                    throw ot(tt.INVALID_ARGUMENT);
                const f = s;
                return se(a) ? u.locale = a : Ue(a) ? c = a : ye(a) && (d = a),
                Ue(l) ? c = l : ye(l) && (d = l),
                Reflect.apply(n.t, n, [f, c || d || {}, u])
            },
            rt(...i) {
                return Reflect.apply(n.rt, n, [...i])
            },
            tc(...i) {
                const [s,a,l] = i
                  , u = {
                    plural: 1
                };
                let c = null
                  , d = null;
                if (!se(s))
                    throw ot(tt.INVALID_ARGUMENT);
                const f = s;
                return se(a) ? u.locale = a : Ze(a) ? u.plural = a : Ue(a) ? c = a : ye(a) && (d = a),
                se(l) ? u.locale = l : Ue(l) ? c = l : ye(l) && (d = l),
                Reflect.apply(n.t, n, [f, c || d || {}, u])
            },
            te(i, s) {
                return n.te(i, s)
            },
            tm(i) {
                return n.tm(i)
            },
            getLocaleMessage(i) {
                return n.getLocaleMessage(i)
            },
            setLocaleMessage(i, s) {
                n.setLocaleMessage(i, s)
            },
            mergeLocaleMessage(i, s) {
                n.mergeLocaleMessage(i, s)
            },
            d(...i) {
                return Reflect.apply(n.d, n, [...i])
            },
            getDateTimeFormat(i) {
                return n.getDateTimeFormat(i)
            },
            setDateTimeFormat(i, s) {
                n.setDateTimeFormat(i, s)
            },
            mergeDateTimeFormat(i, s) {
                n.mergeDateTimeFormat(i, s)
            },
            n(...i) {
                return Reflect.apply(n.n, n, [...i])
            },
            getNumberFormat(i) {
                return n.getNumberFormat(i)
            },
            setNumberFormat(i, s) {
                n.setNumberFormat(i, s)
            },
            mergeNumberFormat(i, s) {
                n.mergeNumberFormat(i, s)
            },
            getChoiceIndex(i, s) {
                return -1
            }
        };
        return o.__extender = r,
        o
    }
}
const Ul = {
    tag: {
        type: [String, Object]
    },
    locale: {
        type: String
    },
    scope: {
        type: String,
        validator: e => e === "parent" || e === "global",
        default: "parent"
    },
    i18n: {
        type: Object
    }
};
function W0({slots: e}, t) {
    return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce( (r, o) => [...r, ...o.type === dt ? o.children : [o]], []) : t.reduce( (n, r) => {
        const o = e[r];
        return o && (n[r] = o()),
        n
    }
    , {})
}
function Qh(e) {
    return dt
}
const z0 = Gr({
    name: "i18n-t",
    props: lt({
        keypath: {
            type: String,
            required: !0
        },
        plural: {
            type: [Number, String],
            validator: e => Ze(e) || !isNaN(e)
        }
    }, Ul),
    setup(e, t) {
        const {slots: n, attrs: r} = t
          , o = e.i18n || Vl({
            useScope: e.scope,
            __useComponent: !0
        });
        return () => {
            const i = Object.keys(n).filter(d => d !== "_")
              , s = {};
            e.locale && (s.locale = e.locale),
            e.plural !== void 0 && (s.plural = se(e.plural) ? +e.plural : e.plural);
            const a = W0(t, i)
              , l = o[ja](e.keypath, a, s)
              , u = lt({}, r)
              , c = se(e.tag) || Le(e.tag) ? e.tag : Qh();
            return M(c, u, l)
        }
    }
})
  , Uc = z0;
function K0(e) {
    return Ue(e) && !se(e[0])
}
function Jh(e, t, n, r) {
    const {slots: o, attrs: i} = t;
    return () => {
        const s = {
            part: !0
        };
        let a = {};
        e.locale && (s.locale = e.locale),
        se(e.format) ? s.key = e.format : Le(e.format) && (se(e.format.key) && (s.key = e.format.key),
        a = Object.keys(e.format).reduce( (f, m) => n.includes(m) ? lt({}, f, {
            [m]: e.format[m]
        }) : f, {}));
        const l = r(e.value, s, a);
        let u = [s.key];
        Ue(l) ? u = l.map( (f, m) => {
            const h = o[f.type]
              , g = h ? h({
                [f.type]: f.value,
                index: m,
                parts: l
            }) : [f.value];
            return K0(g) && (g[0].key = `${f.type}-${m}`),
            g
        }
        ) : se(l) && (u = [l]);
        const c = lt({}, i)
          , d = se(e.tag) || Le(e.tag) ? e.tag : Qh();
        return M(d, c, u)
    }
}
const G0 = Gr({
    name: "i18n-n",
    props: lt({
        value: {
            type: Number,
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, Ul),
    setup(e, t) {
        const n = e.i18n || Vl({
            useScope: e.scope,
            __useComponent: !0
        });
        return Jh(e, t, Hh, (...r) => n[Va](...r))
    }
})
  , Vc = G0
  , Y0 = Gr({
    name: "i18n-d",
    props: lt({
        value: {
            type: [Number, Date],
            required: !0
        },
        format: {
            type: [String, Object]
        }
    }, Ul),
    setup(e, t) {
        const n = e.i18n || Vl({
            useScope: e.scope,
            __useComponent: !0
        });
        return Jh(e, t, Vh, (...r) => n[Ua](...r))
    }
})
  , Hc = Y0;
function X0(e, t) {
    const n = e;
    if (e.mode === "composition")
        return n.__getInstance(t) || e.global;
    {
        const r = n.__getInstance(t);
        return r != null ? r.__composer : e.global.__composer
    }
}
function Q0(e) {
    const t = s => {
        const {instance: a, modifiers: l, value: u} = s;
        if (!a || !a.$)
            throw ot(tt.UNEXPECTED_ERROR);
        const c = X0(e, a.$)
          , d = Wc(u);
        return [Reflect.apply(c.t, c, [...zc(d)]), c]
    }
    ;
    return {
        created: (s, a) => {
            const [l,u] = t(a);
            qi && e.global === u && (s.__i18nWatcher = ve(u.locale, () => {
                a.instance && a.instance.$forceUpdate()
            }
            )),
            s.__composer = u,
            s.textContent = l
        }
        ,
        unmounted: s => {
            qi && s.__i18nWatcher && (s.__i18nWatcher(),
            s.__i18nWatcher = void 0,
            delete s.__i18nWatcher),
            s.__composer && (s.__composer = void 0,
            delete s.__composer)
        }
        ,
        beforeUpdate: (s, {value: a}) => {
            if (s.__composer) {
                const l = s.__composer
                  , u = Wc(a);
                s.textContent = Reflect.apply(l.t, l, [...zc(u)])
            }
        }
        ,
        getSSRProps: s => {
            const [a] = t(s);
            return {
                textContent: a
            }
        }
    }
}
function Wc(e) {
    if (se(e))
        return {
            path: e
        };
    if (ye(e)) {
        if (!("path"in e))
            throw ot(tt.REQUIRED_VALUE, "path");
        return e
    } else
        throw ot(tt.INVALID_VALUE)
}
function zc(e) {
    const {path: t, locale: n, args: r, choice: o, plural: i} = e
      , s = {}
      , a = r || {};
    return se(n) && (s.locale = n),
    Ze(o) && (s.plural = o),
    Ze(i) && (s.plural = i),
    [t, a, s]
}
function J0(e, t, ...n) {
    const r = ye(n[0]) ? n[0] : {}
      , o = !!r.useI18nComponentName;
    (Ce(r.globalInstall) ? r.globalInstall : !0) && ([o ? "i18n" : Uc.name, "I18nT"].forEach(s => e.component(s, Uc)),
    [Vc.name, "I18nN"].forEach(s => e.component(s, Vc)),
    [Hc.name, "I18nD"].forEach(s => e.component(s, Hc))),
    e.directive("t", Q0(t))
}
function Z0(e, t, n) {
    return {
        beforeCreate() {
            const r = Te();
            if (!r)
                throw ot(tt.UNEXPECTED_ERROR);
            const o = this.$options;
            if (o.i18n) {
                const i = o.i18n;
                if (o.__i18n && (i.__i18n = o.__i18n),
                i.__root = t,
                this === this.$root)
                    this.$i18n = Kc(e, i);
                else {
                    i.__injectWithOption = !0,
                    i.__extender = n.__vueI18nExtend,
                    this.$i18n = Wa(i);
                    const s = this.$i18n;
                    s.__extender && (s.__disposer = s.__extender(this.$i18n))
                }
            } else if (o.__i18n)
                if (this === this.$root)
                    this.$i18n = Kc(e, o);
                else {
                    this.$i18n = Wa({
                        __i18n: o.__i18n,
                        __injectWithOption: !0,
                        __extender: n.__vueI18nExtend,
                        __root: t
                    });
                    const i = this.$i18n;
                    i.__extender && (i.__disposer = i.__extender(this.$i18n))
                }
            else
                this.$i18n = e;
            o.__i18nGlobal && Xh(t, o, o),
            this.$t = (...i) => this.$i18n.t(...i),
            this.$rt = (...i) => this.$i18n.rt(...i),
            this.$tc = (...i) => this.$i18n.tc(...i),
            this.$te = (i, s) => this.$i18n.te(i, s),
            this.$d = (...i) => this.$i18n.d(...i),
            this.$n = (...i) => this.$i18n.n(...i),
            this.$tm = i => this.$i18n.tm(i),
            n.__setInstance(r, this.$i18n)
        },
        mounted() {},
        unmounted() {
            const r = Te();
            if (!r)
                throw ot(tt.UNEXPECTED_ERROR);
            const o = this.$i18n;
            delete this.$t,
            delete this.$rt,
            delete this.$tc,
            delete this.$te,
            delete this.$d,
            delete this.$n,
            delete this.$tm,
            o.__disposer && (o.__disposer(),
            delete o.__disposer,
            delete o.__extender),
            n.__deleteInstance(r),
            delete this.$i18n
        }
    }
}
function Kc(e, t) {
    e.locale = t.locale || e.locale,
    e.fallbackLocale = t.fallbackLocale || e.fallbackLocale,
    e.missing = t.missing || e.missing,
    e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn,
    e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn,
    e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages,
    e.postTranslation = t.postTranslation || e.postTranslation,
    e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage,
    e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml,
    e.sync = t.sync || e.sync,
    e.__composer[Kh](t.pluralizationRules || e.pluralizationRules);
    const n = _s(e.locale, {
        messages: t.messages,
        __i18n: t.__i18n
    });
    return Object.keys(n).forEach(r => e.mergeLocaleMessage(r, n[r])),
    t.datetimeFormats && Object.keys(t.datetimeFormats).forEach(r => e.mergeDateTimeFormat(r, t.datetimeFormats[r])),
    t.numberFormats && Object.keys(t.numberFormats).forEach(r => e.mergeNumberFormat(r, t.numberFormats[r])),
    e
}
const ew = Bn("global-vue-i18n");
function tL(e={}, t) {
    const n = __VUE_I18N_LEGACY_API__ && Ce(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__
      , r = Ce(e.globalInjection) ? e.globalInjection : !0
      , o = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0
      , i = new Map
      , [s,a] = tw(e, n)
      , l = Bn("");
    function u(f) {
        return i.get(f) || null
    }
    function c(f, m) {
        i.set(f, m)
    }
    function d(f) {
        i.delete(f)
    }
    {
        const f = {
            get mode() {
                return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition"
            },
            get allowComposition() {
                return o
            },
            async install(m, ...h) {
                if (m.__VUE_I18N_SYMBOL__ = l,
                m.provide(m.__VUE_I18N_SYMBOL__, f),
                ye(h[0])) {
                    const T = h[0];
                    f.__composerExtend = T.__composerExtend,
                    f.__vueI18nExtend = T.__vueI18nExtend
                }
                let g = null;
                !n && r && (g = cw(m, f.global)),
                __VUE_I18N_FULL_INSTALL__ && J0(m, f, ...h),
                __VUE_I18N_LEGACY_API__ && n && m.mixin(Z0(a, a.__composer, f));
                const b = m.unmount;
                m.unmount = () => {
                    g && g(),
                    f.dispose(),
                    b()
                }
            },
            get global() {
                return a
            },
            dispose() {
                s.stop()
            },
            __instances: i,
            __getInstance: u,
            __setInstance: c,
            __deleteInstance: d
        };
        return f
    }
}
function Vl(e={}) {
    const t = Te();
    if (t == null)
        throw ot(tt.MUST_BE_CALL_SETUP_TOP);
    if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
        throw ot(tt.NOT_INSTALLED);
    const n = nw(t)
      , r = ow(n)
      , o = Yh(t)
      , i = rw(e, o);
    if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
        if (!n.allowComposition)
            throw ot(tt.NOT_AVAILABLE_IN_LEGACY_MODE);
        return lw(t, i, r, e)
    }
    if (i === "global")
        return Xh(r, e, o),
        r;
    if (i === "parent") {
        let l = iw(n, t, e.__useComponent);
        return l == null && (l = r),
        l
    }
    const s = n;
    let a = s.__getInstance(t);
    if (a == null) {
        const l = lt({}, e);
        "__i18n"in o && (l.__i18n = o.__i18n),
        r && (l.__root = r),
        a = jl(l),
        s.__composerExtend && (a[Ha] = s.__composerExtend(a)),
        aw(s, t, a),
        s.__setInstance(t, a)
    }
    return a
}
function tw(e, t, n) {
    const r = Hp();
    {
        const o = __VUE_I18N_LEGACY_API__ && t ? r.run( () => Wa(e)) : r.run( () => jl(e));
        if (o == null)
            throw ot(tt.UNEXPECTED_ERROR);
        return [r, o]
    }
}
function nw(e) {
    {
        const t = yt(e.isCE ? ew : e.appContext.app.__VUE_I18N_SYMBOL__);
        if (!t)
            throw ot(e.isCE ? tt.NOT_INSTALLED_WITH_PROVIDE : tt.UNEXPECTED_ERROR);
        return t
    }
}
function rw(e, t) {
    return ps(e) ? "__i18n"in t ? "local" : "global" : e.useScope ? e.useScope : "local"
}
function ow(e) {
    return e.mode === "composition" ? e.global : e.global.__composer
}
function iw(e, t, n=!1) {
    let r = null;
    const o = t.root;
    let i = sw(t, n);
    for (; i != null; ) {
        const s = e;
        if (e.mode === "composition")
            r = s.__getInstance(i);
        else if (__VUE_I18N_LEGACY_API__) {
            const a = s.__getInstance(i);
            a != null && (r = a.__composer,
            n && r && !r[Gh] && (r = null))
        }
        if (r != null || o === i)
            break;
        i = i.parent
    }
    return r
}
function sw(e, t=!1) {
    return e == null ? null : t && e.vnode.ctx || e.parent
}
function aw(e, t, n) {
    Tt( () => {}
    , t),
    cs( () => {
        const r = n;
        e.__deleteInstance(t);
        const o = r[Ha];
        o && (o(),
        delete r[Ha])
    }
    , t)
}
function lw(e, t, n, r={}) {
    const o = t === "local"
      , i = is(null);
    if (o && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
        throw ot(tt.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
    const s = Ce(r.inheritLocale) ? r.inheritLocale : !se(r.locale)
      , a = le(!o || s ? n.locale.value : se(r.locale) ? r.locale : qr)
      , l = le(!o || s ? n.fallbackLocale.value : se(r.fallbackLocale) || Ue(r.fallbackLocale) || ye(r.fallbackLocale) || r.fallbackLocale === !1 ? r.fallbackLocale : a.value)
      , u = le(_s(a.value, r))
      , c = le(ye(r.datetimeFormats) ? r.datetimeFormats : {
        [a.value]: {}
    })
      , d = le(ye(r.numberFormats) ? r.numberFormats : {
        [a.value]: {}
    })
      , f = o ? n.missingWarn : Ce(r.missingWarn) || $n(r.missingWarn) ? r.missingWarn : !0
      , m = o ? n.fallbackWarn : Ce(r.fallbackWarn) || $n(r.fallbackWarn) ? r.fallbackWarn : !0
      , h = o ? n.fallbackRoot : Ce(r.fallbackRoot) ? r.fallbackRoot : !0
      , g = !!r.fallbackFormat
      , b = Be(r.missing) ? r.missing : null
      , T = Be(r.postTranslation) ? r.postTranslation : null
      , E = o ? n.warnHtmlMessage : Ce(r.warnHtmlMessage) ? r.warnHtmlMessage : !0
      , v = !!r.escapeParameter
      , p = o ? n.modifiers : ye(r.modifiers) ? r.modifiers : {}
      , C = r.pluralRules || o && n.pluralRules;
    function w() {
        return [a.value, l.value, u.value, c.value, d.value]
    }
    const k = O({
        get: () => i.value ? i.value.locale.value : a.value,
        set: y => {
            i.value && (i.value.locale.value = y),
            a.value = y
        }
    })
      , P = O({
        get: () => i.value ? i.value.fallbackLocale.value : l.value,
        set: y => {
            i.value && (i.value.fallbackLocale.value = y),
            l.value = y
        }
    })
      , A = O( () => i.value ? i.value.messages.value : u.value)
      , R = O( () => c.value)
      , q = O( () => d.value);
    function L() {
        return i.value ? i.value.getPostTranslationHandler() : T
    }
    function H(y) {
        i.value && i.value.setPostTranslationHandler(y)
    }
    function F() {
        return i.value ? i.value.getMissingHandler() : b
    }
    function ee(y) {
        i.value && i.value.setMissingHandler(y)
    }
    function ne(y) {
        return w(),
        y()
    }
    function z(...y) {
        return i.value ? ne( () => Reflect.apply(i.value.t, null, [...y])) : ne( () => "")
    }
    function K(...y) {
        return i.value ? Reflect.apply(i.value.rt, null, [...y]) : ""
    }
    function ae(...y) {
        return i.value ? ne( () => Reflect.apply(i.value.d, null, [...y])) : ne( () => "")
    }
    function ue(...y) {
        return i.value ? ne( () => Reflect.apply(i.value.n, null, [...y])) : ne( () => "")
    }
    function ce(y) {
        return i.value ? i.value.tm(y) : {}
    }
    function X(y, N) {
        return i.value ? i.value.te(y, N) : !1
    }
    function be(y) {
        return i.value ? i.value.getLocaleMessage(y) : {}
    }
    function ke(y, N) {
        i.value && (i.value.setLocaleMessage(y, N),
        u.value[y] = N)
    }
    function Ae(y, N) {
        i.value && i.value.mergeLocaleMessage(y, N)
    }
    function oe(y) {
        return i.value ? i.value.getDateTimeFormat(y) : {}
    }
    function B(y, N) {
        i.value && (i.value.setDateTimeFormat(y, N),
        c.value[y] = N)
    }
    function re(y, N) {
        i.value && i.value.mergeDateTimeFormat(y, N)
    }
    function W(y) {
        return i.value ? i.value.getNumberFormat(y) : {}
    }
    function ie(y, N) {
        i.value && (i.value.setNumberFormat(y, N),
        d.value[y] = N)
    }
    function we(y, N) {
        i.value && i.value.mergeNumberFormat(y, N)
    }
    const ge = {
        get id() {
            return i.value ? i.value.id : -1
        },
        locale: k,
        fallbackLocale: P,
        messages: A,
        datetimeFormats: R,
        numberFormats: q,
        get inheritLocale() {
            return i.value ? i.value.inheritLocale : s
        },
        set inheritLocale(y) {
            i.value && (i.value.inheritLocale = y)
        },
        get availableLocales() {
            return i.value ? i.value.availableLocales : Object.keys(u.value)
        },
        get modifiers() {
            return i.value ? i.value.modifiers : p
        },
        get pluralRules() {
            return i.value ? i.value.pluralRules : C
        },
        get isGlobal() {
            return i.value ? i.value.isGlobal : !1
        },
        get missingWarn() {
            return i.value ? i.value.missingWarn : f
        },
        set missingWarn(y) {
            i.value && (i.value.missingWarn = y)
        },
        get fallbackWarn() {
            return i.value ? i.value.fallbackWarn : m
        },
        set fallbackWarn(y) {
            i.value && (i.value.missingWarn = y)
        },
        get fallbackRoot() {
            return i.value ? i.value.fallbackRoot : h
        },
        set fallbackRoot(y) {
            i.value && (i.value.fallbackRoot = y)
        },
        get fallbackFormat() {
            return i.value ? i.value.fallbackFormat : g
        },
        set fallbackFormat(y) {
            i.value && (i.value.fallbackFormat = y)
        },
        get warnHtmlMessage() {
            return i.value ? i.value.warnHtmlMessage : E
        },
        set warnHtmlMessage(y) {
            i.value && (i.value.warnHtmlMessage = y)
        },
        get escapeParameter() {
            return i.value ? i.value.escapeParameter : v
        },
        set escapeParameter(y) {
            i.value && (i.value.escapeParameter = y)
        },
        t: z,
        getPostTranslationHandler: L,
        setPostTranslationHandler: H,
        getMissingHandler: F,
        setMissingHandler: ee,
        rt: K,
        d: ae,
        n: ue,
        tm: ce,
        te: X,
        getLocaleMessage: be,
        setLocaleMessage: ke,
        mergeLocaleMessage: Ae,
        getDateTimeFormat: oe,
        setDateTimeFormat: B,
        mergeDateTimeFormat: re,
        getNumberFormat: W,
        setNumberFormat: ie,
        mergeNumberFormat: we
    };
    function x(y) {
        y.locale.value = a.value,
        y.fallbackLocale.value = l.value,
        Object.keys(u.value).forEach(N => {
            y.mergeLocaleMessage(N, u.value[N])
        }
        ),
        Object.keys(c.value).forEach(N => {
            y.mergeDateTimeFormat(N, c.value[N])
        }
        ),
        Object.keys(d.value).forEach(N => {
            y.mergeNumberFormat(N, d.value[N])
        }
        ),
        y.escapeParameter = v,
        y.fallbackFormat = g,
        y.fallbackRoot = h,
        y.fallbackWarn = m,
        y.missingWarn = f,
        y.warnHtmlMessage = E
    }
    return kl( () => {
        if (e.proxy == null || e.proxy.$i18n == null)
            throw ot(tt.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
        const y = i.value = e.proxy.$i18n.__composer;
        t === "global" ? (a.value = y.locale.value,
        l.value = y.fallbackLocale.value,
        u.value = y.messages.value,
        c.value = y.datetimeFormats.value,
        d.value = y.numberFormats.value) : o && x(y)
    }
    ),
    ge
}
const uw = ["locale", "fallbackLocale", "availableLocales"]
  , Gc = ["t", "rt", "d", "n", "tm", "te"];
function cw(e, t) {
    const n = Object.create(null);
    return uw.forEach(o => {
        const i = Object.getOwnPropertyDescriptor(t, o);
        if (!i)
            throw ot(tt.UNEXPECTED_ERROR);
        const s = et(i.value) ? {
            get() {
                return i.value.value
            },
            set(a) {
                i.value.value = a
            }
        } : {
            get() {
                return i.get && i.get()
            }
        };
        Object.defineProperty(n, o, s)
    }
    ),
    e.config.globalProperties.$i18n = n,
    Gc.forEach(o => {
        const i = Object.getOwnPropertyDescriptor(t, o);
        if (!i || !i.value)
            throw ot(tt.UNEXPECTED_ERROR);
        Object.defineProperty(e.config.globalProperties, `$${o}`, i)
    }
    ),
    () => {
        delete e.config.globalProperties.$i18n,
        Gc.forEach(o => {
            delete e.config.globalProperties[`$${o}`]
        }
        )
    }
}
j0();
__INTLIFY_JIT_COMPILATION__ ? kc(M0) : kc(N0);
T0(s0);
x0(Ih);
if (__INTLIFY_PROD_DEVTOOLS__) {
    const e = fn();
    e.__INTLIFY__ = !0,
    g0(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}
const nL = Ne({
    name: "QSpace",
    setup() {
        const e = M("div", {
            class: "q-space"
        });
        return () => e
    }
})
  , rL = Ne({
    name: "QCardSection",
    props: {
        tag: {
            type: String,
            default: "div"
        },
        horizontal: Boolean
    },
    setup(e, {slots: t}) {
        const n = O( () => `q-card__section q-card__section--${e.horizontal === !0 ? "horiz row no-wrap" : "vert"}`);
        return () => M(e.tag, {
            class: n.value
        }, ze(t.default))
    }
})
  , zt = {
    dark: {
        type: Boolean,
        default: null
    }
};
function Kt(e, t) {
    return O( () => e.dark === null ? t.dark.isActive : e.dark)
}
const oL = Ne({
    name: "QCard",
    props: {
        ...zt,
        tag: {
            type: String,
            default: "div"
        },
        square: Boolean,
        flat: Boolean,
        bordered: Boolean
    },
    setup(e, {slots: t}) {
        const {proxy: {$q: n}} = Te()
          , r = Kt(e, n)
          , o = O( () => "q-card" + (r.value === !0 ? " q-card--dark q-dark" : "") + (e.bordered === !0 ? " q-card--bordered" : "") + (e.square === !0 ? " q-card--square no-border-radius" : "") + (e.flat === !0 ? " q-card--flat no-shadow" : ""));
        return () => M(e.tag, {
            class: o.value
        }, ze(t.default))
    }
});
function fw(e, t, n) {
    let r;
    function o() {
        r !== void 0 && (No.remove(r),
        r = void 0)
    }
    return Qe( () => {
        e.value === !0 && o()
    }
    ),
    {
        removeFromHistory: o,
        addToHistory() {
            r = {
                condition: () => n.value === !0,
                handler: t
            },
            No.add(r)
        }
    }
}
function Hl() {
    let e = null;
    const t = Te();
    function n() {
        e !== null && (clearTimeout(e),
        e = null)
    }
    return ls(n),
    Qe(n),
    {
        removeTimeout: n,
        registerTimeout(r, o) {
            n(),
            bh(t) === !1 && (e = setTimeout( () => {
                e = null,
                r()
            }
            , o))
        }
    }
}
function Zh() {
    let e;
    const t = Te();
    function n() {
        e = void 0
    }
    return ls(n),
    Qe(n),
    {
        removeTick: n,
        registerTick(r) {
            e = r,
            mt( () => {
                e === r && (bh(t) === !1 && e(),
                e = void 0)
            }
            )
        }
    }
}
const Wl = {
    modelValue: {
        type: Boolean,
        default: null
    },
    "onUpdate:modelValue": [Function, Array]
}
  , zl = ["beforeShow", "show", "beforeHide", "hide"];
function Kl({showing: e, canShow: t, hideOnRouteChange: n, handleShow: r, handleHide: o, processOnMount: i}) {
    const s = Te()
      , {props: a, emit: l, proxy: u} = s;
    let c;
    function d(E) {
        e.value === !0 ? h(E) : f(E)
    }
    function f(E) {
        if (a.disable === !0 || E !== void 0 && E.qAnchorHandled === !0 || t !== void 0 && t(E) !== !0)
            return;
        const v = a["onUpdate:modelValue"] !== void 0;
        v === !0 && (l("update:modelValue", !0),
        c = E,
        mt( () => {
            c === E && (c = void 0)
        }
        )),
        (a.modelValue === null || v === !1) && m(E)
    }
    function m(E) {
        e.value !== !0 && (e.value = !0,
        l("beforeShow", E),
        r !== void 0 ? r(E) : l("show", E))
    }
    function h(E) {
        if (a.disable === !0)
            return;
        const v = a["onUpdate:modelValue"] !== void 0;
        v === !0 && (l("update:modelValue", !1),
        c = E,
        mt( () => {
            c === E && (c = void 0)
        }
        )),
        (a.modelValue === null || v === !1) && g(E)
    }
    function g(E) {
        e.value !== !1 && (e.value = !1,
        l("beforeHide", E),
        o !== void 0 ? o(E) : l("hide", E))
    }
    function b(E) {
        a.disable === !0 && E === !0 ? a["onUpdate:modelValue"] !== void 0 && l("update:modelValue", !1) : E === !0 !== e.value && (E === !0 ? m : g)(c)
    }
    ve( () => a.modelValue, b),
    n !== void 0 && Nl(s) === !0 && ve( () => u.$route.fullPath, () => {
        n.value === !0 && e.value === !0 && h()
    }
    ),
    i === !0 && Tt( () => {
        b(a.modelValue)
    }
    );
    const T = {
        show: f,
        hide: h,
        toggle: d
    };
    return Object.assign(u, T),
    T
}
const eg = {
    transitionShow: {
        type: String,
        default: "fade"
    },
    transitionHide: {
        type: String,
        default: "fade"
    },
    transitionDuration: {
        type: [String, Number],
        default: 300
    }
};
function tg(e, t= () => {}
, n= () => {}
) {
    return {
        transitionProps: O( () => {
            const r = `q-transition--${e.transitionShow || t()}`
              , o = `q-transition--${e.transitionHide || n()}`;
            return {
                appear: !0,
                enterFromClass: `${r}-enter-from`,
                enterActiveClass: `${r}-enter-active`,
                enterToClass: `${r}-enter-to`,
                leaveFromClass: `${o}-leave-from`,
                leaveActiveClass: `${o}-leave-active`,
                leaveToClass: `${o}-leave-to`
            }
        }
        ),
        transitionStyle: O( () => `--q-transition-duration: ${e.transitionDuration}ms`)
    }
}
let Qn = []
  , Fo = [];
function ng(e) {
    Fo = Fo.filter(t => t !== e)
}
function dw(e) {
    ng(e),
    Fo.push(e)
}
function Yc(e) {
    ng(e),
    Fo.length === 0 && Qn.length !== 0 && (Qn[Qn.length - 1](),
    Qn = [])
}
function ys(e) {
    Fo.length === 0 ? e() : Qn.push(e)
}
function mw(e) {
    Qn = Qn.filter(t => t !== e)
}
const Nr = [];
function hw(e) {
    return Nr.find(t => t.contentEl !== null && t.contentEl.contains(e))
}
function rg(e, t) {
    do {
        if (e.$options.name === "QMenu") {
            if (e.hide(t),
            e.$props.separateClosePopup === !0)
                return pi(e)
        } else if (e.__qPortal === !0) {
            const n = pi(e);
            return n !== void 0 && n.$options.name === "QPopupProxy" ? (e.hide(t),
            n) : e
        }
        e = pi(e)
    } while (e != null)
}
function gw(e, t, n) {
    for (; n !== 0 && e !== void 0 && e !== null; ) {
        if (e.__qPortal === !0) {
            if (n--,
            e.$options.name === "QMenu") {
                e = rg(e, t);
                continue
            }
            e.hide(t)
        }
        e = pi(e)
    }
}
const pw = Ne({
    name: "QPortal",
    setup(e, {slots: t}) {
        return () => t.default()
    }
});
function vw(e) {
    for (e = e.parent; e != null; ) {
        if (e.type.name === "QGlobalDialog")
            return !0;
        if (e.type.name === "QDialog" || e.type.name === "QMenu")
            return !1;
        e = e.parent
    }
    return !1
}
function og(e, t, n, r) {
    const o = le(!1)
      , i = le(!1);
    let s = null;
    const a = {}
      , l = r === "dialog" && vw(e);
    function u(d) {
        if (d === !0) {
            Yc(a),
            i.value = !0;
            return
        }
        i.value = !1,
        o.value === !1 && (l === !1 && s === null && (s = Eh(!1, r)),
        o.value = !0,
        Nr.push(e.proxy),
        dw(a))
    }
    function c(d) {
        if (i.value = !1,
        d !== !0)
            return;
        Yc(a),
        o.value = !1;
        const f = Nr.indexOf(e.proxy);
        f !== -1 && Nr.splice(f, 1),
        s !== null && (ay(s),
        s = null)
    }
    return cs( () => {
        c(!0)
    }
    ),
    e.proxy.__qPortal = !0,
    Yr(e.proxy, "contentEl", () => t.value),
    {
        showPortal: u,
        hidePortal: c,
        portalIsActive: o,
        portalIsAccessible: i,
        renderPortal: () => l === !0 ? n() : o.value === !0 ? [M(kv, {
            to: s
        }, M(pw, n))] : void 0
    }
}
const bw = [Element, String]
  , _w = [null, document, document.body, document.scrollingElement, document.documentElement];
function yw(e, t) {
    let n = V_(t);
    if (n === void 0) {
        if (e == null)
            return window;
        n = e.closest(".scroll,.scroll-y,.overflow-auto")
    }
    return _w.includes(n) ? window : n
}
function ww(e) {
    return e === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : e.scrollTop
}
function Ew(e) {
    return e === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : e.scrollLeft
}
let ii;
function Sw() {
    if (ii !== void 0)
        return ii;
    const e = document.createElement("p")
      , t = document.createElement("div");
    $a(e, {
        width: "100%",
        height: "200px"
    }),
    $a(t, {
        position: "absolute",
        top: "0px",
        left: "0px",
        visibility: "hidden",
        width: "200px",
        height: "150px",
        overflow: "hidden"
    }),
    t.appendChild(e),
    document.body.appendChild(t);
    const n = e.offsetWidth;
    t.style.overflow = "scroll";
    let r = e.offsetWidth;
    return n === r && (r = t.clientWidth),
    t.remove(),
    ii = n - r,
    ii
}
function Cw(e, t=!0) {
    return !e || e.nodeType !== Node.ELEMENT_NODE ? !1 : t ? e.scrollHeight > e.clientHeight && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"])) : e.scrollWidth > e.clientWidth && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"]))
}
let lo = 0, ta, na, po, ra = !1, Xc, Qc, Jc, Gn = null;
function Tw(e) {
    xw(e) && Xe(e)
}
function xw(e) {
    if (e.target === document.body || e.target.classList.contains("q-layout__backdrop"))
        return !0;
    const t = v_(e)
      , n = e.shiftKey && !e.deltaX
      , r = !n && Math.abs(e.deltaX) <= Math.abs(e.deltaY)
      , o = n || r ? e.deltaY : e.deltaX;
    for (let i = 0; i < t.length; i++) {
        const s = t[i];
        if (Cw(s, r))
            return r ? o < 0 && s.scrollTop === 0 ? !0 : o > 0 && s.scrollTop + s.clientHeight === s.scrollHeight : o < 0 && s.scrollLeft === 0 ? !0 : o > 0 && s.scrollLeft + s.clientWidth === s.scrollWidth
    }
    return !0
}
function Zc(e) {
    e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop)
}
function si(e) {
    ra !== !0 && (ra = !0,
    requestAnimationFrame( () => {
        ra = !1;
        const {height: t} = e.target
          , {clientHeight: n, scrollTop: r} = document.scrollingElement;
        (po === void 0 || t !== window.innerHeight) && (po = n - t,
        document.scrollingElement.scrollTop = r),
        r > po && (document.scrollingElement.scrollTop -= Math.ceil((r - po) / 8))
    }
    ))
}
function ef(e) {
    const t = document.body
      , n = window.visualViewport !== void 0;
    if (e === "add") {
        const {overflowY: r, overflowX: o} = window.getComputedStyle(t);
        ta = Ew(window),
        na = ww(window),
        Xc = t.style.left,
        Qc = t.style.top,
        Jc = window.location.href,
        t.style.left = `-${ta}px`,
        t.style.top = `-${na}px`,
        o !== "hidden" && (o === "scroll" || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"),
        r !== "hidden" && (r === "scroll" || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"),
        t.classList.add("q-body--prevent-scroll"),
        document.qScrollPrevented = !0,
        Re.is.ios === !0 && (n === !0 ? (window.scrollTo(0, 0),
        window.visualViewport.addEventListener("resize", si, st.passiveCapture),
        window.visualViewport.addEventListener("scroll", si, st.passiveCapture),
        window.scrollTo(0, 0)) : window.addEventListener("scroll", Zc, st.passiveCapture))
    }
    Re.is.desktop === !0 && Re.is.mac === !0 && window[`${e}EventListener`]("wheel", Tw, st.notPassive),
    e === "remove" && (Re.is.ios === !0 && (n === !0 ? (window.visualViewport.removeEventListener("resize", si, st.passiveCapture),
    window.visualViewport.removeEventListener("scroll", si, st.passiveCapture)) : window.removeEventListener("scroll", Zc, st.passiveCapture)),
    t.classList.remove("q-body--prevent-scroll"),
    t.classList.remove("q-body--force-scrollbar-x"),
    t.classList.remove("q-body--force-scrollbar-y"),
    document.qScrollPrevented = !1,
    t.style.left = Xc,
    t.style.top = Qc,
    window.location.href === Jc && window.scrollTo(ta, na),
    po = void 0)
}
function kw(e) {
    let t = "add";
    if (e === !0) {
        if (lo++,
        Gn !== null) {
            clearTimeout(Gn),
            Gn = null;
            return
        }
        if (lo > 1)
            return
    } else {
        if (lo === 0 || (lo--,
        lo > 0))
            return;
        if (t = "remove",
        Re.is.ios === !0 && Re.is.nativeMobile === !0) {
            Gn !== null && clearTimeout(Gn),
            Gn = setTimeout( () => {
                ef(t),
                Gn = null
            }
            , 100);
            return
        }
    }
    ef(t)
}
function Aw() {
    let e;
    return {
        preventBodyScroll(t) {
            t !== e && (e !== void 0 || t === !0) && (e = t,
            kw(t))
        }
    }
}
const nr = [];
let jr;
function Lw(e) {
    jr = e.keyCode === 27
}
function Ow() {
    jr === !0 && (jr = !1)
}
function Pw(e) {
    jr === !0 && (jr = !1,
    cr(e, 27) === !0 && nr[nr.length - 1](e))
}
function ig(e) {
    window[e]("keydown", Lw),
    window[e]("blur", Ow),
    window[e]("keyup", Pw),
    jr = !1
}
function sg(e) {
    Re.is.desktop === !0 && (nr.push(e),
    nr.length === 1 && ig("addEventListener"))
}
function Ui(e) {
    const t = nr.indexOf(e);
    t !== -1 && (nr.splice(t, 1),
    nr.length === 0 && ig("removeEventListener"))
}
const rr = [];
function ag(e) {
    rr[rr.length - 1](e)
}
function lg(e) {
    Re.is.desktop === !0 && (rr.push(e),
    rr.length === 1 && document.body.addEventListener("focusin", ag))
}
function za(e) {
    const t = rr.indexOf(e);
    t !== -1 && (rr.splice(t, 1),
    rr.length === 0 && document.body.removeEventListener("focusin", ag))
}
let ai = 0;
const Rw = {
    standard: "fixed-full flex-center",
    top: "fixed-top justify-center",
    bottom: "fixed-bottom justify-center",
    right: "fixed-right items-center",
    left: "fixed-left items-center"
}
  , tf = {
    standard: ["scale", "scale"],
    top: ["slide-down", "slide-up"],
    bottom: ["slide-up", "slide-down"],
    right: ["slide-left", "slide-right"],
    left: ["slide-right", "slide-left"]
}
  , iL = Ne({
    name: "QDialog",
    inheritAttrs: !1,
    props: {
        ...Wl,
        ...eg,
        transitionShow: String,
        transitionHide: String,
        persistent: Boolean,
        autoClose: Boolean,
        allowFocusOutside: Boolean,
        noEscDismiss: Boolean,
        noBackdropDismiss: Boolean,
        noRouteDismiss: Boolean,
        noRefocus: Boolean,
        noFocus: Boolean,
        noShake: Boolean,
        seamless: Boolean,
        maximized: Boolean,
        fullWidth: Boolean,
        fullHeight: Boolean,
        square: Boolean,
        backdropFilter: String,
        position: {
            type: String,
            default: "standard",
            validator: e => ["standard", "top", "bottom", "left", "right"].includes(e)
        }
    },
    emits: [...zl, "shake", "click", "escapeKey"],
    setup(e, {slots: t, emit: n, attrs: r}) {
        const o = Te()
          , i = le(null)
          , s = le(!1)
          , a = le(!1);
        let l = null, u = null, c, d;
        const f = O( () => e.persistent !== !0 && e.noRouteDismiss !== !0 && e.seamless !== !0)
          , {preventBodyScroll: m} = Aw()
          , {registerTimeout: h} = Hl()
          , {registerTick: g, removeTick: b} = Zh()
          , {transitionProps: T, transitionStyle: E} = tg(e, () => tf[e.position][0], () => tf[e.position][1])
          , v = O( () => E.value + (e.backdropFilter !== void 0 ? `;backdrop-filter:${e.backdropFilter};-webkit-backdrop-filter:${e.backdropFilter}` : ""))
          , {showPortal: p, hidePortal: C, portalIsAccessible: w, renderPortal: k} = og(o, i, Ae, "dialog")
          , {hide: P} = Kl({
            showing: s,
            hideOnRouteChange: f,
            handleShow: ee,
            handleHide: ne,
            processOnMount: !0
        })
          , {addToHistory: A, removeFromHistory: R} = fw(s, P, f)
          , q = O( () => `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === !0 ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${Rw[e.position]}` + (a.value === !0 ? " q-dialog__inner--animating" : "") + (e.fullWidth === !0 ? " q-dialog__inner--fullwidth" : "") + (e.fullHeight === !0 ? " q-dialog__inner--fullheight" : "") + (e.square === !0 ? " q-dialog__inner--square" : ""))
          , L = O( () => s.value === !0 && e.seamless !== !0)
          , H = O( () => e.autoClose === !0 ? {
            onClick: X
        } : {})
          , F = O( () => [`q-dialog fullscreen no-pointer-events q-dialog--${L.value === !0 ? "modal" : "seamless"}`, r.class]);
        ve( () => e.maximized, oe => {
            s.value === !0 && ce(oe)
        }
        ),
        ve(L, oe => {
            m(oe),
            oe === !0 ? (lg(ke),
            sg(ae)) : (za(ke),
            Ui(ae))
        }
        );
        function ee(oe) {
            A(),
            u = e.noRefocus === !1 && document.activeElement !== null ? document.activeElement : null,
            ce(e.maximized),
            p(),
            a.value = !0,
            e.noFocus !== !0 ? (document.activeElement !== null && document.activeElement.blur(),
            g(z)) : b(),
            h( () => {
                if (o.proxy.$q.platform.is.ios === !0) {
                    if (e.seamless !== !0 && document.activeElement) {
                        const {top: B, bottom: re} = document.activeElement.getBoundingClientRect()
                          , {innerHeight: W} = window
                          , ie = window.visualViewport !== void 0 ? window.visualViewport.height : W;
                        B > 0 && re > ie / 2 && (document.scrollingElement.scrollTop = Math.min(document.scrollingElement.scrollHeight - ie, re >= W ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + re - ie / 2))),
                        document.activeElement.scrollIntoView()
                    }
                    d = !0,
                    i.value.click(),
                    d = !1
                }
                p(!0),
                a.value = !1,
                n("show", oe)
            }
            , e.transitionDuration)
        }
        function ne(oe) {
            b(),
            R(),
            ue(!0),
            a.value = !0,
            C(),
            u !== null && (((oe && oe.type.indexOf("key") === 0 ? u.closest('[tabindex]:not([tabindex^="-"])') : void 0) || u).focus(),
            u = null),
            h( () => {
                C(!0),
                a.value = !1,
                n("hide", oe)
            }
            , e.transitionDuration)
        }
        function z(oe) {
            ys( () => {
                let B = i.value;
                if (B !== null) {
                    if (oe !== void 0) {
                        const re = B.querySelector(oe);
                        if (re !== null) {
                            re.focus({
                                preventScroll: !0
                            });
                            return
                        }
                    }
                    B.contains(document.activeElement) !== !0 && (B = B.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || B.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || B.querySelector("[autofocus], [data-autofocus]") || B,
                    B.focus({
                        preventScroll: !0
                    }))
                }
            }
            )
        }
        function K(oe) {
            oe && typeof oe.focus == "function" ? oe.focus({
                preventScroll: !0
            }) : z(),
            n("shake");
            const B = i.value;
            B !== null && (B.classList.remove("q-animate--scale"),
            B.classList.add("q-animate--scale"),
            l !== null && clearTimeout(l),
            l = setTimeout( () => {
                l = null,
                i.value !== null && (B.classList.remove("q-animate--scale"),
                z())
            }
            , 170))
        }
        function ae() {
            e.seamless !== !0 && (e.persistent === !0 || e.noEscDismiss === !0 ? e.maximized !== !0 && e.noShake !== !0 && K() : (n("escapeKey"),
            P()))
        }
        function ue(oe) {
            l !== null && (clearTimeout(l),
            l = null),
            (oe === !0 || s.value === !0) && (ce(!1),
            e.seamless !== !0 && (m(!1),
            za(ke),
            Ui(ae))),
            oe !== !0 && (u = null)
        }
        function ce(oe) {
            oe === !0 ? c !== !0 && (ai < 1 && document.body.classList.add("q-body--dialog"),
            ai++,
            c = !0) : c === !0 && (ai < 2 && document.body.classList.remove("q-body--dialog"),
            ai--,
            c = !1)
        }
        function X(oe) {
            d !== !0 && (P(oe),
            n("click", oe))
        }
        function be(oe) {
            e.persistent !== !0 && e.noBackdropDismiss !== !0 ? P(oe) : e.noShake !== !0 && K()
        }
        function ke(oe) {
            e.allowFocusOutside !== !0 && w.value === !0 && mh(i.value, oe.target) !== !0 && z('[tabindex]:not([tabindex="-1"])')
        }
        Object.assign(o.proxy, {
            focus: z,
            shake: K,
            __updateRefocusTarget(oe) {
                u = oe || null
            }
        }),
        Qe(ue);
        function Ae() {
            return M("div", {
                role: "dialog",
                "aria-modal": L.value === !0 ? "true" : "false",
                ...r,
                class: F.value
            }, [M(lr, {
                name: "q-transition--fade",
                appear: !0
            }, () => L.value === !0 ? M("div", {
                class: "q-dialog__backdrop fixed-full",
                style: v.value,
                "aria-hidden": "true",
                tabindex: -1,
                onClick: be
            }) : null), M(lr, T.value, () => s.value === !0 ? M("div", {
                ref: i,
                class: q.value,
                style: E.value,
                tabindex: -1,
                ...H.value
            }, ze(t.default)) : null)])
        }
        return k
    }
});
function nf(e) {
    if (e === !1)
        return 0;
    if (e === !0 || e === void 0)
        return 1;
    const t = parseInt(e, 10);
    return isNaN(t) ? 0 : t
}
const sL = hs({
    name: "close-popup",
    beforeMount(e, {value: t}) {
        const n = {
            depth: nf(t),
            handler(r) {
                n.depth !== 0 && setTimeout( () => {
                    const o = hw(e);
                    o !== void 0 && gw(o, r, n.depth)
                }
                )
            },
            handlerKey(r) {
                cr(r, 13) === !0 && n.handler(r)
            }
        };
        e.__qclosepopup = n,
        e.addEventListener("click", n.handler),
        e.addEventListener("keyup", n.handlerKey)
    },
    updated(e, {value: t, oldValue: n}) {
        t !== n && (e.__qclosepopup.depth = nf(t))
    },
    beforeUnmount(e) {
        const t = e.__qclosepopup;
        e.removeEventListener("click", t.handler),
        e.removeEventListener("keyup", t.handlerKey),
        delete e.__qclosepopup
    }
})
  , aL = Ne({
    name: "QTimelineEntry",
    props: {
        heading: Boolean,
        tag: {
            type: String,
            default: "h3"
        },
        side: {
            type: String,
            default: "right",
            validator: e => ["left", "right"].includes(e)
        },
        icon: String,
        avatar: String,
        color: String,
        title: String,
        subtitle: String,
        body: String
    },
    setup(e, {slots: t}) {
        const n = yt(rh, Qs);
        if (n === Qs)
            return console.error("QTimelineEntry needs to be child of QTimeline"),
            Qs;
        const r = O( () => `q-timeline__entry q-timeline__entry--${e.side}` + (e.icon !== void 0 || e.avatar !== void 0 ? " q-timeline__entry--icon" : ""))
          , o = O( () => `q-timeline__dot text-${e.color || n.color}`)
          , i = O( () => n.layout === "comfortable" && n.side === "left");
        return () => {
            const s = sh(t.default, []);
            if (e.body !== void 0 && s.unshift(e.body),
            e.heading === !0) {
                const u = [M("div"), M("div"), M(e.tag, {
                    class: "q-timeline__heading-title"
                }, s)];
                return M("div", {
                    class: "q-timeline__heading"
                }, i.value === !0 ? u.reverse() : u)
            }
            let a;
            e.icon !== void 0 ? a = [M(Ht, {
                class: "row items-center justify-center",
                name: e.icon
            })] : e.avatar !== void 0 && (a = [M("img", {
                class: "q-timeline__dot-img",
                src: e.avatar
            })]);
            const l = [M("div", {
                class: "q-timeline__subtitle"
            }, [M("span", {}, ze(t.subtitle, [e.subtitle]))]), M("div", {
                class: o.value
            }, a), M("div", {
                class: "q-timeline__content"
            }, [M("h6", {
                class: "q-timeline__title"
            }, ze(t.title, [e.title]))].concat(s))];
            return M("li", {
                class: r.value
            }, i.value === !0 ? l.reverse() : l)
        }
    }
})
  , lL = Ne({
    name: "QTimeline",
    props: {
        ...zt,
        color: {
            type: String,
            default: "primary"
        },
        side: {
            type: String,
            default: "right",
            validator: e => ["left", "right"].includes(e)
        },
        layout: {
            type: String,
            default: "dense",
            validator: e => ["dense", "comfortable", "loose"].includes(e)
        }
    },
    setup(e, {slots: t}) {
        const n = Te()
          , r = Kt(e, n.proxy.$q);
        Eo(rh, e);
        const o = O( () => `q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}` + (r.value === !0 ? " q-timeline--dark" : ""));
        return () => M("ul", {
            class: o.value
        }, ze(t.default))
    }
})
  , oa = Ne({
    name: "QItemSection",
    props: {
        avatar: Boolean,
        thumbnail: Boolean,
        side: Boolean,
        top: Boolean,
        noWrap: Boolean
    },
    setup(e, {slots: t}) {
        const n = O( () => `q-item__section column q-item__section--${e.avatar === !0 || e.side === !0 || e.thumbnail === !0 ? "side" : "main"}` + (e.top === !0 ? " q-item__section--top justify-start" : " justify-center") + (e.avatar === !0 ? " q-item__section--avatar" : "") + (e.thumbnail === !0 ? " q-item__section--thumbnail" : "") + (e.noWrap === !0 ? " q-item__section--nowrap" : ""));
        return () => M("div", {
            class: n.value
        }, ze(t.default))
    }
})
  , Iw = Ne({
    name: "QItem",
    props: {
        ...zt,
        ...Ml,
        tag: {
            type: String,
            default: "div"
        },
        active: {
            type: Boolean,
            default: null
        },
        clickable: Boolean,
        dense: Boolean,
        insetLevel: Number,
        tabindex: [String, Number],
        focused: Boolean,
        manualFocus: Boolean
    },
    emits: ["click", "keyup"],
    setup(e, {slots: t, emit: n}) {
        const {proxy: {$q: r}} = Te()
          , o = Kt(e, r)
          , {hasLink: i, linkAttrs: s, linkClass: a, linkTag: l, navigateOnClick: u} = yh()
          , c = le(null)
          , d = le(null)
          , f = O( () => e.clickable === !0 || i.value === !0 || e.tag === "label")
          , m = O( () => e.disable !== !0 && f.value === !0)
          , h = O( () => "q-item q-item-type row no-wrap" + (e.dense === !0 ? " q-item--dense" : "") + (o.value === !0 ? " q-item--dark" : "") + (i.value === !0 && e.active === null ? a.value : e.active === !0 ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ""}` : "") + (e.disable === !0 ? " disabled" : "") + (m.value === !0 ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus === !0 ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused === !0 ? " q-manual-focusable--focused" : "") : ""))
          , g = O( () => e.insetLevel === void 0 ? null : {
            ["padding" + (r.lang.rtl === !0 ? "Right" : "Left")]: 16 + e.insetLevel * 56 + "px"
        });
        function b(v) {
            m.value === !0 && (d.value !== null && (v.qKeyEvent !== !0 && document.activeElement === c.value ? d.value.focus() : document.activeElement === d.value && c.value.focus()),
            u(v))
        }
        function T(v) {
            if (m.value === !0 && cr(v, [13, 32]) === !0) {
                Xe(v),
                v.qKeyEvent = !0;
                const p = new MouseEvent("click",v);
                p.qKeyEvent = !0,
                c.value.dispatchEvent(p)
            }
            n("keyup", v)
        }
        function E() {
            const v = sh(t.default, []);
            return m.value === !0 && v.unshift(M("div", {
                class: "q-focus-helper",
                tabindex: -1,
                ref: d
            })),
            v
        }
        return () => {
            const v = {
                ref: c,
                class: h.value,
                style: g.value,
                role: "listitem",
                onClick: b,
                onKeyup: T
            };
            return m.value === !0 ? (v.tabindex = e.tabindex || "0",
            Object.assign(v, s.value)) : f.value === !0 && (v["aria-disabled"] = "true"),
            M(l.value, v, E())
        }
    }
});
function Gl() {
    if (window.getSelection !== void 0) {
        const e = window.getSelection();
        e.empty !== void 0 ? e.empty() : e.removeAllRanges !== void 0 && (e.removeAllRanges(),
        $i.is.mobile !== !0 && e.addRange(document.createRange()))
    } else
        document.selection !== void 0 && document.selection.empty()
}
const Nw = {
    target: {
        type: [Boolean, String, Element],
        default: !0
    },
    noParentEvent: Boolean
}
  , Mw = {
    ...Nw,
    contextMenu: Boolean
};
function $w({showing: e, avoidEmit: t, configureAnchorEl: n}) {
    const {props: r, proxy: o, emit: i} = Te()
      , s = le(null);
    let a = null;
    function l(m) {
        return s.value === null ? !1 : m === void 0 || m.touches === void 0 || m.touches.length <= 1
    }
    const u = {};
    n === void 0 && (Object.assign(u, {
        hide(m) {
            o.hide(m)
        },
        toggle(m) {
            o.toggle(m),
            m.qAnchorHandled = !0
        },
        toggleKey(m) {
            cr(m, 13) === !0 && u.toggle(m)
        },
        contextClick(m) {
            o.hide(m),
            It(m),
            mt( () => {
                o.show(m),
                m.qAnchorHandled = !0
            }
            )
        },
        prevent: It,
        mobileTouch(m) {
            if (u.mobileCleanup(m),
            l(m) !== !0)
                return;
            o.hide(m),
            s.value.classList.add("non-selectable");
            const h = m.target;
            qt(u, "anchor", [[h, "touchmove", "mobileCleanup", "passive"], [h, "touchend", "mobileCleanup", "passive"], [h, "touchcancel", "mobileCleanup", "passive"], [s.value, "contextmenu", "prevent", "notPassive"]]),
            a = setTimeout( () => {
                a = null,
                o.show(m),
                m.qAnchorHandled = !0
            }
            , 300)
        },
        mobileCleanup(m) {
            s.value.classList.remove("non-selectable"),
            a !== null && (clearTimeout(a),
            a = null),
            e.value === !0 && m !== void 0 && Gl()
        }
    }),
    n = function(m=r.contextMenu) {
        if (r.noParentEvent === !0 || s.value === null)
            return;
        let h;
        m === !0 ? o.$q.platform.is.mobile === !0 ? h = [[s.value, "touchstart", "mobileTouch", "passive"]] : h = [[s.value, "mousedown", "hide", "passive"], [s.value, "contextmenu", "contextClick", "notPassive"]] : h = [[s.value, "click", "toggle", "passive"], [s.value, "keyup", "toggleKey", "passive"]],
        qt(u, "anchor", h)
    }
    );
    function c() {
        On(u, "anchor")
    }
    function d(m) {
        for (s.value = m; s.value.classList.contains("q-anchor--skip"); )
            s.value = s.value.parentNode;
        n()
    }
    function f() {
        if (r.target === !1 || r.target === "" || o.$el.parentNode === null)
            s.value = null;
        else if (r.target === !0)
            d(o.$el.parentNode);
        else {
            let m = r.target;
            if (typeof r.target == "string")
                try {
                    m = document.querySelector(r.target)
                } catch {
                    m = void 0
                }
            m != null ? (s.value = m.$el || m,
            n()) : (s.value = null,
            console.error(`Anchor: target "${r.target}" not found`))
        }
    }
    return ve( () => r.contextMenu, m => {
        s.value !== null && (c(),
        n(m))
    }
    ),
    ve( () => r.target, () => {
        s.value !== null && c(),
        f()
    }
    ),
    ve( () => r.noParentEvent, m => {
        s.value !== null && (m === !0 ? c() : n())
    }
    ),
    Tt( () => {
        f(),
        t !== !0 && r.modelValue === !0 && s.value === null && i("update:modelValue", !1)
    }
    ),
    Qe( () => {
        a !== null && clearTimeout(a),
        c()
    }
    ),
    {
        anchorEl: s,
        canShow: l,
        anchorEvents: u
    }
}
function Fw(e, t) {
    const n = le(null);
    let r;
    function o(a, l) {
        const u = `${l !== void 0 ? "add" : "remove"}EventListener`
          , c = l !== void 0 ? l : r;
        a !== window && a[u]("scroll", c, st.passive),
        window[u]("scroll", c, st.passive),
        r = l
    }
    function i() {
        n.value !== null && (o(n.value),
        n.value = null)
    }
    const s = ve( () => e.noParentEvent, () => {
        n.value !== null && (i(),
        t())
    }
    );
    return Qe(s),
    {
        localScrollTarget: n,
        unconfigureScrollTarget: i,
        changeScrollEvent: o
    }
}
const {notPassiveCapture: Vi} = st
  , or = [];
function Hi(e) {
    const t = e.target;
    if (t === void 0 || t.nodeType === 8 || t.classList.contains("no-pointer-events") === !0)
        return;
    let n = Nr.length - 1;
    for (; n >= 0; ) {
        const r = Nr[n].$;
        if (r.type.name === "QTooltip") {
            n--;
            continue
        }
        if (r.type.name !== "QDialog")
            break;
        if (r.props.seamless !== !0)
            return;
        n--
    }
    for (let r = or.length - 1; r >= 0; r--) {
        const o = or[r];
        if ((o.anchorEl.value === null || o.anchorEl.value.contains(t) === !1) && (t === document.body || o.innerRef.value !== null && o.innerRef.value.contains(t) === !1))
            e.qClickOutside = !0,
            o.onClickOutside(e);
        else
            return
    }
}
function Dw(e) {
    or.push(e),
    or.length === 1 && (document.addEventListener("mousedown", Hi, Vi),
    document.addEventListener("touchstart", Hi, Vi))
}
function rf(e) {
    const t = or.findIndex(n => n === e);
    t !== -1 && (or.splice(t, 1),
    or.length === 0 && (document.removeEventListener("mousedown", Hi, Vi),
    document.removeEventListener("touchstart", Hi, Vi)))
}
let of, sf;
function af(e) {
    const t = e.split(" ");
    return t.length !== 2 ? !1 : ["top", "center", "bottom"].includes(t[0]) !== !0 ? (console.error("Anchor/Self position must start with one of top/center/bottom"),
    !1) : ["left", "middle", "right", "start", "end"].includes(t[1]) !== !0 ? (console.error("Anchor/Self position must end with one of left/middle/right/start/end"),
    !1) : !0
}
function qw(e) {
    return e ? !(e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number") : !0
}
const Ka = {
    "start#ltr": "left",
    "start#rtl": "right",
    "end#ltr": "right",
    "end#rtl": "left"
};
["left", "middle", "right"].forEach(e => {
    Ka[`${e}#ltr`] = e,
    Ka[`${e}#rtl`] = e
}
);
function lf(e, t) {
    const n = e.split(" ");
    return {
        vertical: n[0],
        horizontal: Ka[`${n[1]}#${t === !0 ? "rtl" : "ltr"}`]
    }
}
function Bw(e, t) {
    let {top: n, left: r, right: o, bottom: i, width: s, height: a} = e.getBoundingClientRect();
    return t !== void 0 && (n -= t[1],
    r -= t[0],
    i += t[1],
    o += t[0],
    s += t[0],
    a += t[1]),
    {
        top: n,
        bottom: i,
        height: a,
        left: r,
        right: o,
        width: s,
        middle: r + (o - r) / 2,
        center: n + (i - n) / 2
    }
}
function jw(e, t, n) {
    let {top: r, left: o} = e.getBoundingClientRect();
    return r += t.top,
    o += t.left,
    n !== void 0 && (r += n[1],
    o += n[0]),
    {
        top: r,
        bottom: r + 1,
        height: 1,
        left: o,
        right: o + 1,
        width: 1,
        middle: o,
        center: r
    }
}
function Uw(e, t) {
    return {
        top: 0,
        center: t / 2,
        bottom: t,
        left: 0,
        middle: e / 2,
        right: e
    }
}
function uf(e, t, n, r) {
    return {
        top: e[n.vertical] - t[r.vertical],
        left: e[n.horizontal] - t[r.horizontal]
    }
}
function ug(e, t=0) {
    if (e.targetEl === null || e.anchorEl === null || t > 5)
        return;
    if (e.targetEl.offsetHeight === 0 || e.targetEl.offsetWidth === 0) {
        setTimeout( () => {
            ug(e, t + 1)
        }
        , 10);
        return
    }
    const {targetEl: n, offset: r, anchorEl: o, anchorOrigin: i, selfOrigin: s, absoluteOffset: a, fit: l, cover: u, maxHeight: c, maxWidth: d} = e;
    if (Re.is.ios === !0 && window.visualViewport !== void 0) {
        const w = document.body.style
          , {offsetLeft: k, offsetTop: P} = window.visualViewport;
        k !== of && (w.setProperty("--q-pe-left", k + "px"),
        of = k),
        P !== sf && (w.setProperty("--q-pe-top", P + "px"),
        sf = P)
    }
    const {scrollLeft: f, scrollTop: m} = n
      , h = a === void 0 ? Bw(o, u === !0 ? [0, 0] : r) : jw(o, a, r);
    Object.assign(n.style, {
        top: 0,
        left: 0,
        minWidth: null,
        minHeight: null,
        maxWidth: d,
        maxHeight: c,
        visibility: "visible"
    });
    const {offsetWidth: g, offsetHeight: b} = n
      , {elWidth: T, elHeight: E} = l === !0 || u === !0 ? {
        elWidth: Math.max(h.width, g),
        elHeight: u === !0 ? Math.max(h.height, b) : b
    } : {
        elWidth: g,
        elHeight: b
    };
    let v = {
        maxWidth: d,
        maxHeight: c
    };
    (l === !0 || u === !0) && (v.minWidth = h.width + "px",
    u === !0 && (v.minHeight = h.height + "px")),
    Object.assign(n.style, v);
    const p = Uw(T, E);
    let C = uf(h, p, i, s);
    if (a === void 0 || r === void 0)
        ia(C, h, p, i, s);
    else {
        const {top: w, left: k} = C;
        ia(C, h, p, i, s);
        let P = !1;
        if (C.top !== w) {
            P = !0;
            const A = 2 * r[1];
            h.center = h.top -= A,
            h.bottom -= A + 2
        }
        if (C.left !== k) {
            P = !0;
            const A = 2 * r[0];
            h.middle = h.left -= A,
            h.right -= A + 2
        }
        P === !0 && (C = uf(h, p, i, s),
        ia(C, h, p, i, s))
    }
    v = {
        top: C.top + "px",
        left: C.left + "px"
    },
    C.maxHeight !== void 0 && (v.maxHeight = C.maxHeight + "px",
    h.height > C.maxHeight && (v.minHeight = v.maxHeight)),
    C.maxWidth !== void 0 && (v.maxWidth = C.maxWidth + "px",
    h.width > C.maxWidth && (v.minWidth = v.maxWidth)),
    Object.assign(n.style, v),
    n.scrollTop !== m && (n.scrollTop = m),
    n.scrollLeft !== f && (n.scrollLeft = f)
}
function ia(e, t, n, r, o) {
    const i = n.bottom
      , s = n.right
      , a = Sw()
      , l = window.innerHeight - a
      , u = document.body.clientWidth;
    if (e.top < 0 || e.top + i > l)
        if (o.vertical === "center")
            e.top = t[r.vertical] > l / 2 ? Math.max(0, l - i) : 0,
            e.maxHeight = Math.min(i, l);
        else if (t[r.vertical] > l / 2) {
            const c = Math.min(l, r.vertical === "center" ? t.center : r.vertical === o.vertical ? t.bottom : t.top);
            e.maxHeight = Math.min(i, c),
            e.top = Math.max(0, c - i)
        } else
            e.top = Math.max(0, r.vertical === "center" ? t.center : r.vertical === o.vertical ? t.top : t.bottom),
            e.maxHeight = Math.min(i, l - e.top);
    if (e.left < 0 || e.left + s > u)
        if (e.maxWidth = Math.min(s, u),
        o.horizontal === "middle")
            e.left = t[r.horizontal] > u / 2 ? Math.max(0, u - s) : 0;
        else if (t[r.horizontal] > u / 2) {
            const c = Math.min(u, r.horizontal === "middle" ? t.middle : r.horizontal === o.horizontal ? t.right : t.left);
            e.maxWidth = Math.min(s, c),
            e.left = Math.max(0, c - e.maxWidth)
        } else
            e.left = Math.max(0, r.horizontal === "middle" ? t.middle : r.horizontal === o.horizontal ? t.left : t.right),
            e.maxWidth = Math.min(s, u - e.left)
}
const uL = Ne({
    name: "QMenu",
    inheritAttrs: !1,
    props: {
        ...Mw,
        ...Wl,
        ...zt,
        ...eg,
        persistent: Boolean,
        autoClose: Boolean,
        separateClosePopup: Boolean,
        noRouteDismiss: Boolean,
        noRefocus: Boolean,
        noFocus: Boolean,
        fit: Boolean,
        cover: Boolean,
        square: Boolean,
        anchor: {
            type: String,
            validator: af
        },
        self: {
            type: String,
            validator: af
        },
        offset: {
            type: Array,
            validator: qw
        },
        scrollTarget: bw,
        touchPosition: Boolean,
        maxHeight: {
            type: String,
            default: null
        },
        maxWidth: {
            type: String,
            default: null
        }
    },
    emits: [...zl, "click", "escapeKey"],
    setup(e, {slots: t, emit: n, attrs: r}) {
        let o = null, i, s, a;
        const l = Te()
          , {proxy: u} = l
          , {$q: c} = u
          , d = le(null)
          , f = le(!1)
          , m = O( () => e.persistent !== !0 && e.noRouteDismiss !== !0)
          , h = Kt(e, c)
          , {registerTick: g, removeTick: b} = Zh()
          , {registerTimeout: T} = Hl()
          , {transitionProps: E, transitionStyle: v} = tg(e)
          , {localScrollTarget: p, changeScrollEvent: C, unconfigureScrollTarget: w} = Fw(e, be)
          , {anchorEl: k, canShow: P} = $w({
            showing: f
        })
          , {hide: A} = Kl({
            showing: f,
            canShow: P,
            handleShow: ue,
            handleHide: ce,
            hideOnRouteChange: m,
            processOnMount: !0
        })
          , {showPortal: R, hidePortal: q, renderPortal: L} = og(l, d, re, "menu")
          , H = {
            anchorEl: k,
            innerRef: d,
            onClickOutside(W) {
                if (e.persistent !== !0 && f.value === !0)
                    return A(W),
                    (W.type === "touchstart" || W.target.classList.contains("q-dialog__backdrop")) && Xe(W),
                    !0
            }
        }
          , F = O( () => lf(e.anchor || (e.cover === !0 ? "center middle" : "bottom start"), c.lang.rtl))
          , ee = O( () => e.cover === !0 ? F.value : lf(e.self || "top start", c.lang.rtl))
          , ne = O( () => (e.square === !0 ? " q-menu--square" : "") + (h.value === !0 ? " q-menu--dark q-dark" : ""))
          , z = O( () => e.autoClose === !0 ? {
            onClick: ke
        } : {})
          , K = O( () => f.value === !0 && e.persistent !== !0);
        ve(K, W => {
            W === !0 ? (sg(oe),
            Dw(H)) : (Ui(oe),
            rf(H))
        }
        );
        function ae() {
            ys( () => {
                let W = d.value;
                W && W.contains(document.activeElement) !== !0 && (W = W.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || W.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || W.querySelector("[autofocus], [data-autofocus]") || W,
                W.focus({
                    preventScroll: !0
                }))
            }
            )
        }
        function ue(W) {
            if (o = e.noRefocus === !1 ? document.activeElement : null,
            lg(Ae),
            R(),
            be(),
            i = void 0,
            W !== void 0 && (e.touchPosition || e.contextMenu)) {
                const ie = Mn(W);
                if (ie.left !== void 0) {
                    const {top: we, left: ge} = k.value.getBoundingClientRect();
                    i = {
                        left: ie.left - ge,
                        top: ie.top - we
                    }
                }
            }
            s === void 0 && (s = ve( () => c.screen.width + "|" + c.screen.height + "|" + e.self + "|" + e.anchor + "|" + c.lang.rtl, B)),
            e.noFocus !== !0 && document.activeElement.blur(),
            g( () => {
                B(),
                e.noFocus !== !0 && ae()
            }
            ),
            T( () => {
                c.platform.is.ios === !0 && (a = e.autoClose,
                d.value.click()),
                B(),
                R(!0),
                n("show", W)
            }
            , e.transitionDuration)
        }
        function ce(W) {
            b(),
            q(),
            X(!0),
            o !== null && (W === void 0 || W.qClickOutside !== !0) && (((W && W.type.indexOf("key") === 0 ? o.closest('[tabindex]:not([tabindex^="-"])') : void 0) || o).focus(),
            o = null),
            T( () => {
                q(!0),
                n("hide", W)
            }
            , e.transitionDuration)
        }
        function X(W) {
            i = void 0,
            s !== void 0 && (s(),
            s = void 0),
            (W === !0 || f.value === !0) && (za(Ae),
            w(),
            rf(H),
            Ui(oe)),
            W !== !0 && (o = null)
        }
        function be() {
            (k.value !== null || e.scrollTarget !== void 0) && (p.value = yw(k.value, e.scrollTarget),
            C(p.value, B))
        }
        function ke(W) {
            a !== !0 ? (rg(u, W),
            n("click", W)) : a = !1
        }
        function Ae(W) {
            K.value === !0 && e.noFocus !== !0 && mh(d.value, W.target) !== !0 && ae()
        }
        function oe(W) {
            n("escapeKey"),
            A(W)
        }
        function B() {
            ug({
                targetEl: d.value,
                offset: e.offset,
                anchorEl: k.value,
                anchorOrigin: F.value,
                selfOrigin: ee.value,
                absoluteOffset: i,
                fit: e.fit,
                cover: e.cover,
                maxHeight: e.maxHeight,
                maxWidth: e.maxWidth
            })
        }
        function re() {
            return M(lr, E.value, () => f.value === !0 ? M("div", {
                role: "menu",
                ...r,
                ref: d,
                tabindex: -1,
                class: ["q-menu q-position-engine scroll" + ne.value, r.class],
                style: [r.style, v.value],
                ...z.value
            }, ze(t.default)) : null)
        }
        return Qe(X),
        Object.assign(u, {
            focus: ae,
            updatePosition: B
        }),
        L
    }
});
function cg(e) {
    return Nd() ? (Wp(e),
    !0) : !1
}
function ws(e) {
    return typeof e == "function" ? e() : Ln(e)
}
const Vw = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Hw = Object.prototype.toString
  , Ww = e => Hw.call(e) === "[object Object]"
  , fg = () => {}
;
function zw(e, t) {
    function n(...r) {
        return new Promise( (o, i) => {
            Promise.resolve(e( () => t.apply(this, r), {
                fn: t,
                thisArg: this,
                args: r
            })).then(o).catch(i)
        }
        )
    }
    return n
}
const dg = e => e();
function Kw(e=dg) {
    const t = le(!0);
    function n() {
        t.value = !1
    }
    function r() {
        t.value = !0
    }
    const o = (...i) => {
        t.value && e(...i)
    }
    ;
    return {
        isActive: rs(t),
        pause: n,
        resume: r,
        eventFilter: o
    }
}
function Gw(e) {
    return Te()
}
function Yw(...e) {
    if (e.length !== 1)
        return pv(...e);
    const t = e[0];
    return typeof t == "function" ? rs(Qd( () => ({
        get: t,
        set: fg
    }))) : le(t)
}
function Xw(e, t, n={}) {
    const {eventFilter: r=dg, ...o} = n;
    return ve(e, zw(r, t), o)
}
function Qw(e, t, n={}) {
    const {eventFilter: r, ...o} = n
      , {eventFilter: i, pause: s, resume: a, isActive: l} = Kw(r);
    return {
        stop: Xw(e, t, {
            ...o,
            eventFilter: i
        }),
        pause: s,
        resume: a,
        isActive: l
    }
}
function Yl(e, t=!0, n) {
    Gw() ? Tt(e, n) : t ? e() : mt(e)
}
function mg(e) {
    var t;
    const n = ws(e);
    return (t = n == null ? void 0 : n.$el) != null ? t : n
}
const fr = Vw ? window : void 0;
function Ga(...e) {
    let t, n, r, o;
    if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n,r,o] = e,
    t = fr) : [t,n,r,o] = e,
    !t)
        return fg;
    Array.isArray(n) || (n = [n]),
    Array.isArray(r) || (r = [r]);
    const i = []
      , s = () => {
        i.forEach(c => c()),
        i.length = 0
    }
      , a = (c, d, f, m) => (c.addEventListener(d, f, m),
    () => c.removeEventListener(d, f, m))
      , l = ve( () => [mg(t), ws(o)], ([c,d]) => {
        if (s(),
        !c)
            return;
        const f = Ww(d) ? {
            ...d
        } : d;
        i.push(...n.flatMap(m => r.map(h => a(c, m, h, f))))
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , u = () => {
        l(),
        s()
    }
    ;
    return cg(u),
    u
}
function Jw() {
    const e = le(!1)
      , t = Te();
    return t && Tt( () => {
        e.value = !0
    }
    , t),
    e
}
function Zw(e) {
    const t = Jw();
    return O( () => (t.value,
    !!e()))
}
function hg(e, t={}) {
    const {window: n=fr} = t
      , r = Zw( () => n && "matchMedia"in n && typeof n.matchMedia == "function");
    let o;
    const i = le(!1)
      , s = u => {
        i.value = u.matches
    }
      , a = () => {
        o && ("removeEventListener"in o ? o.removeEventListener("change", s) : o.removeListener(s))
    }
      , l = rb( () => {
        r.value && (a(),
        o = n.matchMedia(ws(e)),
        "addEventListener"in o ? o.addEventListener("change", s) : o.addListener(s),
        i.value = o.matches)
    }
    );
    return cg( () => {
        l(),
        a(),
        o = void 0
    }
    ),
    i
}
const li = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}
  , ui = "__vueuse_ssr_handlers__"
  , eE = tE();
function tE() {
    return ui in li || (li[ui] = li[ui] || {}),
    li[ui]
}
function gg(e, t) {
    return eE[e] || t
}
function nE(e) {
    return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number"
}
const rE = {
    boolean: {
        read: e => e === "true",
        write: e => String(e)
    },
    object: {
        read: e => JSON.parse(e),
        write: e => JSON.stringify(e)
    },
    number: {
        read: e => Number.parseFloat(e),
        write: e => String(e)
    },
    any: {
        read: e => e,
        write: e => String(e)
    },
    string: {
        read: e => e,
        write: e => String(e)
    },
    map: {
        read: e => new Map(JSON.parse(e)),
        write: e => JSON.stringify(Array.from(e.entries()))
    },
    set: {
        read: e => new Set(JSON.parse(e)),
        write: e => JSON.stringify(Array.from(e))
    },
    date: {
        read: e => new Date(e),
        write: e => e.toISOString()
    }
}
  , cf = "vueuse-storage";
function oE(e, t, n, r={}) {
    var o;
    const {flush: i="pre", deep: s=!0, listenToStorageChanges: a=!0, writeDefaults: l=!0, mergeDefaults: u=!1, shallow: c, window: d=fr, eventFilter: f, onError: m=R => {
        console.error(R)
    }
    , initOnMounted: h} = r
      , g = (c ? is : le)(typeof t == "function" ? t() : t);
    if (!n)
        try {
            n = gg("getDefaultStorage", () => {
                var R;
                return (R = fr) == null ? void 0 : R.localStorage
            }
            )()
        } catch (R) {
            m(R)
        }
    if (!n)
        return g;
    const b = ws(t)
      , T = nE(b)
      , E = (o = r.serializer) != null ? o : rE[T]
      , {pause: v, resume: p} = Qw(g, () => w(g.value), {
        flush: i,
        deep: s,
        eventFilter: f
    });
    d && a && Yl( () => {
        Ga(d, "storage", P),
        Ga(d, cf, A),
        h && P()
    }
    ),
    h || P();
    function C(R, q) {
        d && d.dispatchEvent(new CustomEvent(cf,{
            detail: {
                key: e,
                oldValue: R,
                newValue: q,
                storageArea: n
            }
        }))
    }
    function w(R) {
        try {
            const q = n.getItem(e);
            if (R == null)
                C(q, null),
                n.removeItem(e);
            else {
                const L = E.write(R);
                q !== L && (n.setItem(e, L),
                C(q, L))
            }
        } catch (q) {
            m(q)
        }
    }
    function k(R) {
        const q = R ? R.newValue : n.getItem(e);
        if (q == null)
            return l && b != null && n.setItem(e, E.write(b)),
            b;
        if (!R && u) {
            const L = E.read(q);
            return typeof u == "function" ? u(L, b) : T === "object" && !Array.isArray(L) ? {
                ...b,
                ...L
            } : L
        } else
            return typeof q != "string" ? q : E.read(q)
    }
    function P(R) {
        if (!(R && R.storageArea !== n)) {
            if (R && R.key == null) {
                g.value = b;
                return
            }
            if (!(R && R.key !== e)) {
                v();
                try {
                    (R == null ? void 0 : R.newValue) !== E.write(g.value) && (g.value = k(R))
                } catch (q) {
                    m(q)
                } finally {
                    R ? mt(p) : p()
                }
            }
        }
    }
    function A(R) {
        P(R.detail)
    }
    return g
}
function pg(e) {
    return hg("(prefers-color-scheme: dark)", e)
}
function iE(e={}) {
    const {selector: t="html", attribute: n="class", initialValue: r="auto", window: o=fr, storage: i, storageKey: s="vueuse-color-scheme", listenToStorageChanges: a=!0, storageRef: l, emitAuto: u, disableTransition: c=!0} = e
      , d = {
        auto: "",
        light: "light",
        dark: "dark",
        ...e.modes || {}
    }
      , f = pg({
        window: o
    })
      , m = O( () => f.value ? "dark" : "light")
      , h = l || (s == null ? Yw(r) : oE(s, r, i, {
        window: o,
        listenToStorageChanges: a
    }))
      , g = O( () => h.value === "auto" ? m.value : h.value)
      , b = gg("updateHTMLAttrs", (p, C, w) => {
        const k = typeof p == "string" ? o == null ? void 0 : o.document.querySelector(p) : mg(p);
        if (!k)
            return;
        let P;
        if (c && (P = o.document.createElement("style"),
        P.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),
        o.document.head.appendChild(P)),
        C === "class") {
            const A = w.split(/\s/g);
            Object.values(d).flatMap(R => (R || "").split(/\s/g)).filter(Boolean).forEach(R => {
                A.includes(R) ? k.classList.add(R) : k.classList.remove(R)
            }
            )
        } else
            k.setAttribute(C, w);
        c && (o.getComputedStyle(P).opacity,
        document.head.removeChild(P))
    }
    );
    function T(p) {
        var C;
        b(t, n, (C = d[p]) != null ? C : p)
    }
    function E(p) {
        e.onChanged ? e.onChanged(p, T) : T(p)
    }
    ve(g, E, {
        flush: "post",
        immediate: !0
    }),
    Yl( () => E(g.value));
    const v = O({
        get() {
            return u ? h.value : g.value
        },
        set(p) {
            h.value = p
        }
    });
    try {
        return Object.assign(v, {
            store: h,
            system: m,
            state: g
        })
    } catch {
        return v
    }
}
function cL(e={}) {
    const {valueDark: t="dark", valueLight: n="", window: r=fr} = e
      , o = iE({
        ...e,
        onChanged: (a, l) => {
            var u;
            e.onChanged ? (u = e.onChanged) == null || u.call(e, a === "dark", l, a) : l(a)
        }
        ,
        modes: {
            dark: t,
            light: n
        }
    })
      , i = O( () => o.system ? o.system.value : pg({
        window: r
    }).value ? "dark" : "light");
    return O({
        get() {
            return o.value === "dark"
        },
        set(a) {
            const l = a ? "dark" : "light";
            i.value === l ? o.value = "auto" : o.value = l
        }
    })
}
function fL(e={}) {
    const {window: t=fr, initialWidth: n=Number.POSITIVE_INFINITY, initialHeight: r=Number.POSITIVE_INFINITY, listenOrientation: o=!0, includeScrollbar: i=!0} = e
      , s = le(n)
      , a = le(r)
      , l = () => {
        t && (i ? (s.value = t.innerWidth,
        a.value = t.innerHeight) : (s.value = t.document.documentElement.clientWidth,
        a.value = t.document.documentElement.clientHeight))
    }
    ;
    if (l(),
    Yl(l),
    Ga("resize", l, {
        passive: !0
    }),
    o) {
        const u = hg("(orientation: portrait)");
        ve(u, () => l())
    }
    return {
        width: s,
        height: a
    }
}
/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const Cr = typeof document < "u";
function vg(e) {
    return typeof e == "object" || "displayName"in e || "props"in e || "__vccOpts"in e
}
function sE(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && vg(e.default)
}
const Ie = Object.assign;
function sa(e, t) {
    const n = {};
    for (const r in t) {
        const o = t[r];
        n[r] = Wt(o) ? o.map(e) : e(o)
    }
    return n
}
const To = () => {}
  , Wt = Array.isArray
  , bg = /#/g
  , aE = /&/g
  , lE = /\//g
  , uE = /=/g
  , cE = /\?/g
  , _g = /\+/g
  , fE = /%5B/g
  , dE = /%5D/g
  , yg = /%5E/g
  , mE = /%60/g
  , wg = /%7B/g
  , hE = /%7C/g
  , Eg = /%7D/g
  , gE = /%20/g;
function Xl(e) {
    return encodeURI("" + e).replace(hE, "|").replace(fE, "[").replace(dE, "]")
}
function pE(e) {
    return Xl(e).replace(wg, "{").replace(Eg, "}").replace(yg, "^")
}
function Ya(e) {
    return Xl(e).replace(_g, "%2B").replace(gE, "+").replace(bg, "%23").replace(aE, "%26").replace(mE, "`").replace(wg, "{").replace(Eg, "}").replace(yg, "^")
}
function vE(e) {
    return Ya(e).replace(uE, "%3D")
}
function bE(e) {
    return Xl(e).replace(bg, "%23").replace(cE, "%3F")
}
function _E(e) {
    return e == null ? "" : bE(e).replace(lE, "%2F")
}
function Do(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
const yE = /\/$/
  , wE = e => e.replace(yE, "");
function aa(e, t, n="/") {
    let r, o = {}, i = "", s = "";
    const a = t.indexOf("#");
    let l = t.indexOf("?");
    return a < l && a >= 0 && (l = -1),
    l > -1 && (r = t.slice(0, l),
    i = t.slice(l + 1, a > -1 ? a : t.length),
    o = e(i)),
    a > -1 && (r = r || t.slice(0, a),
    s = t.slice(a, t.length)),
    r = TE(r ?? t, n),
    {
        fullPath: r + (i && "?") + i + s,
        path: r,
        query: o,
        hash: Do(s)
    }
}
function EE(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}
function ff(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}
function SE(e, t, n) {
    const r = t.matched.length - 1
      , o = n.matched.length - 1;
    return r > -1 && r === o && Ur(t.matched[r], n.matched[o]) && Sg(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}
function Ur(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}
function Sg(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length)
        return !1;
    for (const n in e)
        if (!CE(e[n], t[n]))
            return !1;
    return !0
}
function CE(e, t) {
    return Wt(e) ? df(e, t) : Wt(t) ? df(t, e) : e === t
}
function df(e, t) {
    return Wt(t) ? e.length === t.length && e.every( (n, r) => n === t[r]) : e.length === 1 && e[0] === t
}
function TE(e, t) {
    if (e.startsWith("/"))
        return e;
    if (!e)
        return t;
    const n = t.split("/")
      , r = e.split("/")
      , o = r[r.length - 1];
    (o === ".." || o === ".") && r.push("");
    let i = n.length - 1, s, a;
    for (s = 0; s < r.length; s++)
        if (a = r[s],
        a !== ".")
            if (a === "..")
                i > 1 && i--;
            else
                break;
    return n.slice(0, i).join("/") + "/" + r.slice(s).join("/")
}
const yn = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
};
var qo;
(function(e) {
    e.pop = "pop",
    e.push = "push"
}
)(qo || (qo = {}));
var xo;
(function(e) {
    e.back = "back",
    e.forward = "forward",
    e.unknown = ""
}
)(xo || (xo = {}));
function xE(e) {
    if (!e)
        if (Cr) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/",
            e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else
            e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e),
    wE(e)
}
const kE = /^[^#]+#/;
function AE(e, t) {
    return e.replace(kE, "#") + t
}
function LE(e, t) {
    const n = document.documentElement.getBoundingClientRect()
      , r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    }
}
const Es = () => ({
    left: window.scrollX,
    top: window.scrollY
});
function OE(e) {
    let t;
    if ("el"in e) {
        const n = e.el
          , r = typeof n == "string" && n.startsWith("#")
          , o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!o)
            return;
        t = LE(o, e)
    } else
        t = e;
    "scrollBehavior"in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}
function mf(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const Xa = new Map;
function PE(e, t) {
    Xa.set(e, t)
}
function RE(e) {
    const t = Xa.get(e);
    return Xa.delete(e),
    t
}
let IE = () => location.protocol + "//" + location.host;
function Cg(e, t) {
    const {pathname: n, search: r, hash: o} = t
      , i = e.indexOf("#");
    if (i > -1) {
        let a = o.includes(e.slice(i)) ? e.slice(i).length : 1
          , l = o.slice(a);
        return l[0] !== "/" && (l = "/" + l),
        ff(l, "")
    }
    return ff(n, e) + r + o
}
function NE(e, t, n, r) {
    let o = []
      , i = []
      , s = null;
    const a = ({state: f}) => {
        const m = Cg(e, location)
          , h = n.value
          , g = t.value;
        let b = 0;
        if (f) {
            if (n.value = m,
            t.value = f,
            s && s === h) {
                s = null;
                return
            }
            b = g ? f.position - g.position : 0
        } else
            r(m);
        o.forEach(T => {
            T(n.value, h, {
                delta: b,
                type: qo.pop,
                direction: b ? b > 0 ? xo.forward : xo.back : xo.unknown
            })
        }
        )
    }
    ;
    function l() {
        s = n.value
    }
    function u(f) {
        o.push(f);
        const m = () => {
            const h = o.indexOf(f);
            h > -1 && o.splice(h, 1)
        }
        ;
        return i.push(m),
        m
    }
    function c() {
        const {history: f} = window;
        f.state && f.replaceState(Ie({}, f.state, {
            scroll: Es()
        }), "")
    }
    function d() {
        for (const f of i)
            f();
        i = [],
        window.removeEventListener("popstate", a),
        window.removeEventListener("beforeunload", c)
    }
    return window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", c, {
        passive: !0
    }),
    {
        pauseListeners: l,
        listen: u,
        destroy: d
    }
}
function hf(e, t, n, r=!1, o=!1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: o ? Es() : null
    }
}
function ME(e) {
    const {history: t, location: n} = window
      , r = {
        value: Cg(e, n)
    }
      , o = {
        value: t.state
    };
    o.value || i(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);
    function i(l, u, c) {
        const d = e.indexOf("#")
          , f = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + l : IE() + e + l;
        try {
            t[c ? "replaceState" : "pushState"](u, "", f),
            o.value = u
        } catch (m) {
            console.error(m),
            n[c ? "replace" : "assign"](f)
        }
    }
    function s(l, u) {
        const c = Ie({}, t.state, hf(o.value.back, l, o.value.forward, !0), u, {
            position: o.value.position
        });
        i(l, c, !0),
        r.value = l
    }
    function a(l, u) {
        const c = Ie({}, o.value, t.state, {
            forward: l,
            scroll: Es()
        });
        i(c.current, c, !0);
        const d = Ie({}, hf(r.value, l, null), {
            position: c.position + 1
        }, u);
        i(l, d, !1),
        r.value = l
    }
    return {
        location: r,
        state: o,
        push: a,
        replace: s
    }
}
function dL(e) {
    e = xE(e);
    const t = ME(e)
      , n = NE(e, t.state, t.location, t.replace);
    function r(i, s=!0) {
        s || n.pauseListeners(),
        history.go(i)
    }
    const o = Ie({
        location: "",
        base: e,
        go: r,
        createHref: AE.bind(null, e)
    }, t, n);
    return Object.defineProperty(o, "location", {
        enumerable: !0,
        get: () => t.location.value
    }),
    Object.defineProperty(o, "state", {
        enumerable: !0,
        get: () => t.state.value
    }),
    o
}
function $E(e) {
    return typeof e == "string" || e && typeof e == "object"
}
function Tg(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const xg = Symbol("");
var gf;
(function(e) {
    e[e.aborted = 4] = "aborted",
    e[e.cancelled = 8] = "cancelled",
    e[e.duplicated = 16] = "duplicated"
}
)(gf || (gf = {}));
function Vr(e, t) {
    return Ie(new Error, {
        type: e,
        [xg]: !0
    }, t)
}
function on(e, t) {
    return e instanceof Error && xg in e && (t == null || !!(e.type & t))
}
const pf = "[^/]+?"
  , FE = {
    sensitive: !1,
    strict: !1,
    start: !0,
    end: !0
}
  , DE = /[.+*?^${}()[\]/\\]/g;
function qE(e, t) {
    const n = Ie({}, FE, t)
      , r = [];
    let o = n.start ? "^" : "";
    const i = [];
    for (const u of e) {
        const c = u.length ? [] : [90];
        n.strict && !u.length && (o += "/");
        for (let d = 0; d < u.length; d++) {
            const f = u[d];
            let m = 40 + (n.sensitive ? .25 : 0);
            if (f.type === 0)
                d || (o += "/"),
                o += f.value.replace(DE, "\\$&"),
                m += 40;
            else if (f.type === 1) {
                const {value: h, repeatable: g, optional: b, regexp: T} = f;
                i.push({
                    name: h,
                    repeatable: g,
                    optional: b
                });
                const E = T || pf;
                if (E !== pf) {
                    m += 10;
                    try {
                        new RegExp(`(${E})`)
                    } catch (p) {
                        throw new Error(`Invalid custom RegExp for param "${h}" (${E}): ` + p.message)
                    }
                }
                let v = g ? `((?:${E})(?:/(?:${E}))*)` : `(${E})`;
                d || (v = b && u.length < 2 ? `(?:/${v})` : "/" + v),
                b && (v += "?"),
                o += v,
                m += 20,
                b && (m += -8),
                g && (m += -20),
                E === ".*" && (m += -50)
            }
            c.push(m)
        }
        r.push(c)
    }
    if (n.strict && n.end) {
        const u = r.length - 1;
        r[u][r[u].length - 1] += .7000000000000001
    }
    n.strict || (o += "/?"),
    n.end ? o += "$" : n.strict && (o += "(?:/|$)");
    const s = new RegExp(o,n.sensitive ? "" : "i");
    function a(u) {
        const c = u.match(s)
          , d = {};
        if (!c)
            return null;
        for (let f = 1; f < c.length; f++) {
            const m = c[f] || ""
              , h = i[f - 1];
            d[h.name] = m && h.repeatable ? m.split("/") : m
        }
        return d
    }
    function l(u) {
        let c = ""
          , d = !1;
        for (const f of e) {
            (!d || !c.endsWith("/")) && (c += "/"),
            d = !1;
            for (const m of f)
                if (m.type === 0)
                    c += m.value;
                else if (m.type === 1) {
                    const {value: h, repeatable: g, optional: b} = m
                      , T = h in u ? u[h] : "";
                    if (Wt(T) && !g)
                        throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);
                    const E = Wt(T) ? T.join("/") : T;
                    if (!E)
                        if (b)
                            f.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : d = !0);
                        else
                            throw new Error(`Missing required param "${h}"`);
                    c += E
                }
        }
        return c || "/"
    }
    return {
        re: s,
        score: r,
        keys: i,
        parse: a,
        stringify: l
    }
}
function BE(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
        const r = t[n] - e[n];
        if (r)
            return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}
function kg(e, t) {
    let n = 0;
    const r = e.score
      , o = t.score;
    for (; n < r.length && n < o.length; ) {
        const i = BE(r[n], o[n]);
        if (i)
            return i;
        n++
    }
    if (Math.abs(o.length - r.length) === 1) {
        if (vf(r))
            return 1;
        if (vf(o))
            return -1
    }
    return o.length - r.length
}
function vf(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const jE = {
    type: 0,
    value: ""
}
  , UE = /[a-zA-Z0-9_]/;
function VE(e) {
    if (!e)
        return [[]];
    if (e === "/")
        return [[jE]];
    if (!e.startsWith("/"))
        throw new Error(`Invalid path "${e}"`);
    function t(m) {
        throw new Error(`ERR (${n})/"${u}": ${m}`)
    }
    let n = 0
      , r = n;
    const o = [];
    let i;
    function s() {
        i && o.push(i),
        i = []
    }
    let a = 0, l, u = "", c = "";
    function d() {
        u && (n === 0 ? i.push({
            type: 0,
            value: u
        }) : n === 1 || n === 2 || n === 3 ? (i.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),
        i.push({
            type: 1,
            value: u,
            regexp: c,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?"
        })) : t("Invalid state to consume buffer"),
        u = "")
    }
    function f() {
        u += l
    }
    for (; a < e.length; ) {
        if (l = e[a++],
        l === "\\" && n !== 2) {
            r = n,
            n = 4;
            continue
        }
        switch (n) {
        case 0:
            l === "/" ? (u && d(),
            s()) : l === ":" ? (d(),
            n = 1) : f();
            break;
        case 4:
            f(),
            n = r;
            break;
        case 1:
            l === "(" ? n = 2 : UE.test(l) ? f() : (d(),
            n = 0,
            l !== "*" && l !== "?" && l !== "+" && a--);
            break;
        case 2:
            l === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + l : n = 3 : c += l;
            break;
        case 3:
            d(),
            n = 0,
            l !== "*" && l !== "?" && l !== "+" && a--,
            c = "";
            break;
        default:
            t("Unknown state");
            break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${u}"`),
    d(),
    s(),
    o
}
function HE(e, t, n) {
    const r = qE(VE(e.path), n)
      , o = Ie(r, {
        record: e,
        parent: t,
        children: [],
        alias: []
    });
    return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o),
    o
}
function WE(e, t) {
    const n = []
      , r = new Map;
    t = wf({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);
    function o(d) {
        return r.get(d)
    }
    function i(d, f, m) {
        const h = !m
          , g = _f(d);
        g.aliasOf = m && m.record;
        const b = wf(t, d)
          , T = [g];
        if ("alias"in d) {
            const p = typeof d.alias == "string" ? [d.alias] : d.alias;
            for (const C of p)
                T.push(_f(Ie({}, g, {
                    components: m ? m.record.components : g.components,
                    path: C,
                    aliasOf: m ? m.record : g
                })))
        }
        let E, v;
        for (const p of T) {
            const {path: C} = p;
            if (f && C[0] !== "/") {
                const w = f.record.path
                  , k = w[w.length - 1] === "/" ? "" : "/";
                p.path = f.record.path + (C && k + C)
            }
            if (E = HE(p, f, b),
            m ? m.alias.push(E) : (v = v || E,
            v !== E && v.alias.push(E),
            h && d.name && !yf(E) && s(d.name)),
            Ag(E) && l(E),
            g.children) {
                const w = g.children;
                for (let k = 0; k < w.length; k++)
                    i(w[k], E, m && m.children[k])
            }
            m = m || E
        }
        return v ? () => {
            s(v)
        }
        : To
    }
    function s(d) {
        if (Tg(d)) {
            const f = r.get(d);
            f && (r.delete(d),
            n.splice(n.indexOf(f), 1),
            f.children.forEach(s),
            f.alias.forEach(s))
        } else {
            const f = n.indexOf(d);
            f > -1 && (n.splice(f, 1),
            d.record.name && r.delete(d.record.name),
            d.children.forEach(s),
            d.alias.forEach(s))
        }
    }
    function a() {
        return n
    }
    function l(d) {
        const f = GE(d, n);
        n.splice(f, 0, d),
        d.record.name && !yf(d) && r.set(d.record.name, d)
    }
    function u(d, f) {
        let m, h = {}, g, b;
        if ("name"in d && d.name) {
            if (m = r.get(d.name),
            !m)
                throw Vr(1, {
                    location: d
                });
            b = m.record.name,
            h = Ie(bf(f.params, m.keys.filter(v => !v.optional).concat(m.parent ? m.parent.keys.filter(v => v.optional) : []).map(v => v.name)), d.params && bf(d.params, m.keys.map(v => v.name))),
            g = m.stringify(h)
        } else if (d.path != null)
            g = d.path,
            m = n.find(v => v.re.test(g)),
            m && (h = m.parse(g),
            b = m.record.name);
        else {
            if (m = f.name ? r.get(f.name) : n.find(v => v.re.test(f.path)),
            !m)
                throw Vr(1, {
                    location: d,
                    currentLocation: f
                });
            b = m.record.name,
            h = Ie({}, f.params, d.params),
            g = m.stringify(h)
        }
        const T = [];
        let E = m;
        for (; E; )
            T.unshift(E.record),
            E = E.parent;
        return {
            name: b,
            path: g,
            params: h,
            matched: T,
            meta: KE(T)
        }
    }
    e.forEach(d => i(d));
    function c() {
        n.length = 0,
        r.clear()
    }
    return {
        addRoute: i,
        resolve: u,
        removeRoute: s,
        clearRoutes: c,
        getRoutes: a,
        getRecordMatcher: o
    }
}
function bf(e, t) {
    const n = {};
    for (const r of t)
        r in e && (n[r] = e[r]);
    return n
}
function _f(e) {
    const t = {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: e.aliasOf,
        beforeEnter: e.beforeEnter,
        props: zE(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components"in e ? e.components || null : e.component && {
            default: e.component
        }
    };
    return Object.defineProperty(t, "mods", {
        value: {}
    }),
    t
}
function zE(e) {
    const t = {}
      , n = e.props || !1;
    if ("component"in e)
        t.default = n;
    else
        for (const r in e.components)
            t[r] = typeof n == "object" ? n[r] : n;
    return t
}
function yf(e) {
    for (; e; ) {
        if (e.record.aliasOf)
            return !0;
        e = e.parent
    }
    return !1
}
function KE(e) {
    return e.reduce( (t, n) => Ie(t, n.meta), {})
}
function wf(e, t) {
    const n = {};
    for (const r in e)
        n[r] = r in t ? t[r] : e[r];
    return n
}
function GE(e, t) {
    let n = 0
      , r = t.length;
    for (; n !== r; ) {
        const i = n + r >> 1;
        kg(e, t[i]) < 0 ? r = i : n = i + 1
    }
    const o = YE(e);
    return o && (r = t.lastIndexOf(o, r - 1)),
    r
}
function YE(e) {
    let t = e;
    for (; t = t.parent; )
        if (Ag(t) && kg(e, t) === 0)
            return t
}
function Ag({record: e}) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
}
function XE(e) {
    const t = {};
    if (e === "" || e === "?")
        return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let o = 0; o < r.length; ++o) {
        const i = r[o].replace(_g, " ")
          , s = i.indexOf("=")
          , a = Do(s < 0 ? i : i.slice(0, s))
          , l = s < 0 ? null : Do(i.slice(s + 1));
        if (a in t) {
            let u = t[a];
            Wt(u) || (u = t[a] = [u]),
            u.push(l)
        } else
            t[a] = l
    }
    return t
}
function Ef(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = vE(n),
        r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }
        (Wt(r) ? r.map(i => i && Ya(i)) : [r && Ya(r)]).forEach(i => {
            i !== void 0 && (t += (t.length ? "&" : "") + n,
            i != null && (t += "=" + i))
        }
        )
    }
    return t
}
function QE(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = Wt(r) ? r.map(o => o == null ? null : "" + o) : r == null ? r : "" + r)
    }
    return t
}
const JE = Symbol("")
  , Sf = Symbol("")
  , Ss = Symbol("")
  , Ql = Symbol("")
  , Qa = Symbol("");
function uo() {
    let e = [];
    function t(r) {
        return e.push(r),
        () => {
            const o = e.indexOf(r);
            o > -1 && e.splice(o, 1)
        }
    }
    function n() {
        e = []
    }
    return {
        add: t,
        list: () => e.slice(),
        reset: n
    }
}
function kn(e, t, n, r, o, i=s => s()) {
    const s = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
    return () => new Promise( (a, l) => {
        const u = f => {
            f === !1 ? l(Vr(4, {
                from: n,
                to: t
            })) : f instanceof Error ? l(f) : $E(f) ? l(Vr(2, {
                from: t,
                to: f
            })) : (s && r.enterCallbacks[o] === s && typeof f == "function" && s.push(f),
            a())
        }
          , c = i( () => e.call(r && r.instances[o], t, n, u));
        let d = Promise.resolve(c);
        e.length < 3 && (d = d.then(u)),
        d.catch(f => l(f))
    }
    )
}
function la(e, t, n, r, o=i => i()) {
    const i = [];
    for (const s of e)
        for (const a in s.components) {
            let l = s.components[a];
            if (!(t !== "beforeRouteEnter" && !s.instances[a]))
                if (vg(l)) {
                    const c = (l.__vccOpts || l)[t];
                    c && i.push(kn(c, n, r, s, a, o))
                } else {
                    let u = l();
                    i.push( () => u.then(c => {
                        if (!c)
                            throw new Error(`Couldn't resolve component "${a}" at "${s.path}"`);
                        const d = sE(c) ? c.default : c;
                        s.mods[a] = c,
                        s.components[a] = d;
                        const m = (d.__vccOpts || d)[t];
                        return m && kn(m, n, r, s, a, o)()
                    }
                    ))
                }
        }
    return i
}
function Cf(e) {
    const t = yt(Ss)
      , n = yt(Ql)
      , r = O( () => {
        const l = Ln(e.to);
        return t.resolve(l)
    }
    )
      , o = O( () => {
        const {matched: l} = r.value
          , {length: u} = l
          , c = l[u - 1]
          , d = n.matched;
        if (!c || !d.length)
            return -1;
        const f = d.findIndex(Ur.bind(null, c));
        if (f > -1)
            return f;
        const m = Tf(l[u - 2]);
        return u > 1 && Tf(c) === m && d[d.length - 1].path !== m ? d.findIndex(Ur.bind(null, l[u - 2])) : f
    }
    )
      , i = O( () => o.value > -1 && nS(n.params, r.value.params))
      , s = O( () => o.value > -1 && o.value === n.matched.length - 1 && Sg(n.params, r.value.params));
    function a(l={}) {
        return tS(l) ? t[Ln(e.replace) ? "replace" : "push"](Ln(e.to)).catch(To) : Promise.resolve()
    }
    return {
        route: r,
        href: O( () => r.value.href),
        isActive: i,
        isExactActive: s,
        navigate: a
    }
}
const ZE = Gr({
    name: "RouterLink",
    compatConfig: {
        MODE: 3
    },
    props: {
        to: {
            type: [String, Object],
            required: !0
        },
        replace: Boolean,
        activeClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: "page"
        }
    },
    useLink: Cf,
    setup(e, {slots: t}) {
        const n = Kr(Cf(e))
          , {options: r} = yt(Ss)
          , o = O( () => ({
            [xf(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
            [xf(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
        }));
        return () => {
            const i = t.default && t.default(n);
            return e.custom ? i : M("a", {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: o.value
            }, i)
        }
    }
})
  , eS = ZE;
function tS(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t))
                return
        }
        return e.preventDefault && e.preventDefault(),
        !0
    }
}
function nS(e, t) {
    for (const n in t) {
        const r = t[n]
          , o = e[n];
        if (typeof r == "string") {
            if (r !== o)
                return !1
        } else if (!Wt(o) || o.length !== r.length || r.some( (i, s) => i !== o[s]))
            return !1
    }
    return !0
}
function Tf(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const xf = (e, t, n) => e ?? t ?? n
  , rS = Gr({
    name: "RouterView",
    inheritAttrs: !1,
    props: {
        name: {
            type: String,
            default: "default"
        },
        route: Object
    },
    compatConfig: {
        MODE: 3
    },
    setup(e, {attrs: t, slots: n}) {
        const r = yt(Qa)
          , o = O( () => e.route || r.value)
          , i = yt(Sf, 0)
          , s = O( () => {
            let u = Ln(i);
            const {matched: c} = o.value;
            let d;
            for (; (d = c[u]) && !d.components; )
                u++;
            return u
        }
        )
          , a = O( () => o.value.matched[s.value]);
        Eo(Sf, O( () => s.value + 1)),
        Eo(JE, a),
        Eo(Qa, o);
        const l = le();
        return ve( () => [l.value, a.value, e.name], ([u,c,d], [f,m,h]) => {
            c && (c.instances[d] = u,
            m && m !== c && u && u === f && (c.leaveGuards.size || (c.leaveGuards = m.leaveGuards),
            c.updateGuards.size || (c.updateGuards = m.updateGuards))),
            u && c && (!m || !Ur(c, m) || !f) && (c.enterCallbacks[d] || []).forEach(g => g(u))
        }
        , {
            flush: "post"
        }),
        () => {
            const u = o.value
              , c = e.name
              , d = a.value
              , f = d && d.components[c];
            if (!f)
                return kf(n.default, {
                    Component: f,
                    route: u
                });
            const m = d.props[c]
              , h = m ? m === !0 ? u.params : typeof m == "function" ? m(u) : m : null
              , b = M(f, Ie({}, h, t, {
                onVnodeUnmounted: T => {
                    T.component.isUnmounted && (d.instances[c] = null)
                }
                ,
                ref: l
            }));
            return kf(n.default, {
                Component: b,
                route: u
            }) || b
        }
    }
});
function kf(e, t) {
    if (!e)
        return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const oS = rS;
function mL(e) {
    const t = WE(e.routes, e)
      , n = e.parseQuery || XE
      , r = e.stringifyQuery || Ef
      , o = e.history
      , i = uo()
      , s = uo()
      , a = uo()
      , l = is(yn);
    let u = yn;
    Cr && e.scrollBehavior && "scrollRestoration"in history && (history.scrollRestoration = "manual");
    const c = sa.bind(null, B => "" + B)
      , d = sa.bind(null, _E)
      , f = sa.bind(null, Do);
    function m(B, re) {
        let W, ie;
        return Tg(B) ? (W = t.getRecordMatcher(B),
        ie = re) : ie = B,
        t.addRoute(ie, W)
    }
    function h(B) {
        const re = t.getRecordMatcher(B);
        re && t.removeRoute(re)
    }
    function g() {
        return t.getRoutes().map(B => B.record)
    }
    function b(B) {
        return !!t.getRecordMatcher(B)
    }
    function T(B, re) {
        if (re = Ie({}, re || l.value),
        typeof B == "string") {
            const y = aa(n, B, re.path)
              , N = t.resolve({
                path: y.path
            }, re)
              , j = o.createHref(y.fullPath);
            return Ie(y, N, {
                params: f(N.params),
                hash: Do(y.hash),
                redirectedFrom: void 0,
                href: j
            })
        }
        let W;
        if (B.path != null)
            W = Ie({}, B, {
                path: aa(n, B.path, re.path).path
            });
        else {
            const y = Ie({}, B.params);
            for (const N in y)
                y[N] == null && delete y[N];
            W = Ie({}, B, {
                params: d(y)
            }),
            re.params = d(re.params)
        }
        const ie = t.resolve(W, re)
          , we = B.hash || "";
        ie.params = c(f(ie.params));
        const ge = EE(r, Ie({}, B, {
            hash: pE(we),
            path: ie.path
        }))
          , x = o.createHref(ge);
        return Ie({
            fullPath: ge,
            hash: we,
            query: r === Ef ? QE(B.query) : B.query || {}
        }, ie, {
            redirectedFrom: void 0,
            href: x
        })
    }
    function E(B) {
        return typeof B == "string" ? aa(n, B, l.value.path) : Ie({}, B)
    }
    function v(B, re) {
        if (u !== B)
            return Vr(8, {
                from: re,
                to: B
            })
    }
    function p(B) {
        return k(B)
    }
    function C(B) {
        return p(Ie(E(B), {
            replace: !0
        }))
    }
    function w(B) {
        const re = B.matched[B.matched.length - 1];
        if (re && re.redirect) {
            const {redirect: W} = re;
            let ie = typeof W == "function" ? W(B) : W;
            return typeof ie == "string" && (ie = ie.includes("?") || ie.includes("#") ? ie = E(ie) : {
                path: ie
            },
            ie.params = {}),
            Ie({
                query: B.query,
                hash: B.hash,
                params: ie.path != null ? {} : B.params
            }, ie)
        }
    }
    function k(B, re) {
        const W = u = T(B)
          , ie = l.value
          , we = B.state
          , ge = B.force
          , x = B.replace === !0
          , y = w(W);
        if (y)
            return k(Ie(E(y), {
                state: typeof y == "object" ? Ie({}, we, y.state) : we,
                force: ge,
                replace: x
            }), re || W);
        const N = W;
        N.redirectedFrom = re;
        let j;
        return !ge && SE(r, ie, W) && (j = Vr(16, {
            to: N,
            from: ie
        }),
        ce(ie, ie, !0, !1)),
        (j ? Promise.resolve(j) : R(N, ie)).catch(D => on(D) ? on(D, 2) ? D : ue(D) : K(D, N, ie)).then(D => {
            if (D) {
                if (on(D, 2))
                    return k(Ie({
                        replace: x
                    }, E(D.to), {
                        state: typeof D.to == "object" ? Ie({}, we, D.to.state) : we,
                        force: ge
                    }), re || N)
            } else
                D = L(N, ie, !0, x, we);
            return q(N, ie, D),
            D
        }
        )
    }
    function P(B, re) {
        const W = v(B, re);
        return W ? Promise.reject(W) : Promise.resolve()
    }
    function A(B) {
        const re = ke.values().next().value;
        return re && typeof re.runWithContext == "function" ? re.runWithContext(B) : B()
    }
    function R(B, re) {
        let W;
        const [ie,we,ge] = iS(B, re);
        W = la(ie.reverse(), "beforeRouteLeave", B, re);
        for (const y of ie)
            y.leaveGuards.forEach(N => {
                W.push(kn(N, B, re))
            }
            );
        const x = P.bind(null, B, re);
        return W.push(x),
        oe(W).then( () => {
            W = [];
            for (const y of i.list())
                W.push(kn(y, B, re));
            return W.push(x),
            oe(W)
        }
        ).then( () => {
            W = la(we, "beforeRouteUpdate", B, re);
            for (const y of we)
                y.updateGuards.forEach(N => {
                    W.push(kn(N, B, re))
                }
                );
            return W.push(x),
            oe(W)
        }
        ).then( () => {
            W = [];
            for (const y of ge)
                if (y.beforeEnter)
                    if (Wt(y.beforeEnter))
                        for (const N of y.beforeEnter)
                            W.push(kn(N, B, re));
                    else
                        W.push(kn(y.beforeEnter, B, re));
            return W.push(x),
            oe(W)
        }
        ).then( () => (B.matched.forEach(y => y.enterCallbacks = {}),
        W = la(ge, "beforeRouteEnter", B, re, A),
        W.push(x),
        oe(W))).then( () => {
            W = [];
            for (const y of s.list())
                W.push(kn(y, B, re));
            return W.push(x),
            oe(W)
        }
        ).catch(y => on(y, 8) ? y : Promise.reject(y))
    }
    function q(B, re, W) {
        a.list().forEach(ie => A( () => ie(B, re, W)))
    }
    function L(B, re, W, ie, we) {
        const ge = v(B, re);
        if (ge)
            return ge;
        const x = re === yn
          , y = Cr ? history.state : {};
        W && (ie || x ? o.replace(B.fullPath, Ie({
            scroll: x && y && y.scroll
        }, we)) : o.push(B.fullPath, we)),
        l.value = B,
        ce(B, re, W, x),
        ue()
    }
    let H;
    function F() {
        H || (H = o.listen( (B, re, W) => {
            if (!Ae.listening)
                return;
            const ie = T(B)
              , we = w(ie);
            if (we) {
                k(Ie(we, {
                    replace: !0
                }), ie).catch(To);
                return
            }
            u = ie;
            const ge = l.value;
            Cr && PE(mf(ge.fullPath, W.delta), Es()),
            R(ie, ge).catch(x => on(x, 12) ? x : on(x, 2) ? (k(x.to, ie).then(y => {
                on(y, 20) && !W.delta && W.type === qo.pop && o.go(-1, !1)
            }
            ).catch(To),
            Promise.reject()) : (W.delta && o.go(-W.delta, !1),
            K(x, ie, ge))).then(x => {
                x = x || L(ie, ge, !1),
                x && (W.delta && !on(x, 8) ? o.go(-W.delta, !1) : W.type === qo.pop && on(x, 20) && o.go(-1, !1)),
                q(ie, ge, x)
            }
            ).catch(To)
        }
        ))
    }
    let ee = uo(), ne = uo(), z;
    function K(B, re, W) {
        ue(B);
        const ie = ne.list();
        return ie.length ? ie.forEach(we => we(B, re, W)) : console.error(B),
        Promise.reject(B)
    }
    function ae() {
        return z && l.value !== yn ? Promise.resolve() : new Promise( (B, re) => {
            ee.add([B, re])
        }
        )
    }
    function ue(B) {
        return z || (z = !B,
        F(),
        ee.list().forEach( ([re,W]) => B ? W(B) : re()),
        ee.reset()),
        B
    }
    function ce(B, re, W, ie) {
        const {scrollBehavior: we} = e;
        if (!Cr || !we)
            return Promise.resolve();
        const ge = !W && RE(mf(B.fullPath, 0)) || (ie || !W) && history.state && history.state.scroll || null;
        return mt().then( () => we(B, re, ge)).then(x => x && OE(x)).catch(x => K(x, B, re))
    }
    const X = B => o.go(B);
    let be;
    const ke = new Set
      , Ae = {
        currentRoute: l,
        listening: !0,
        addRoute: m,
        removeRoute: h,
        clearRoutes: t.clearRoutes,
        hasRoute: b,
        getRoutes: g,
        resolve: T,
        options: e,
        push: p,
        replace: C,
        go: X,
        back: () => X(-1),
        forward: () => X(1),
        beforeEach: i.add,
        beforeResolve: s.add,
        afterEach: a.add,
        onError: ne.add,
        isReady: ae,
        install(B) {
            const re = this;
            B.component("RouterLink", eS),
            B.component("RouterView", oS),
            B.config.globalProperties.$router = re,
            Object.defineProperty(B.config.globalProperties, "$route", {
                enumerable: !0,
                get: () => Ln(l)
            }),
            Cr && !be && l.value === yn && (be = !0,
            p(o.location).catch(we => {}
            ));
            const W = {};
            for (const we in yn)
                Object.defineProperty(W, we, {
                    get: () => l.value[we],
                    enumerable: !0
                });
            B.provide(Ss, re),
            B.provide(Ql, wl(W)),
            B.provide(Qa, l);
            const ie = B.unmount;
            ke.add(B),
            B.unmount = function() {
                ke.delete(B),
                ke.size < 1 && (u = yn,
                H && H(),
                H = null,
                l.value = yn,
                be = !1,
                z = !1),
                ie()
            }
        }
    };
    function oe(B) {
        return B.reduce( (re, W) => re.then( () => A(W)), Promise.resolve())
    }
    return Ae
}
function iS(e, t) {
    const n = []
      , r = []
      , o = []
      , i = Math.max(t.matched.length, e.matched.length);
    for (let s = 0; s < i; s++) {
        const a = t.matched[s];
        a && (e.matched.find(u => Ur(u, a)) ? r.push(a) : n.push(a));
        const l = e.matched[s];
        l && (t.matched.find(u => Ur(u, l)) || o.push(l))
    }
    return [n, r, o]
}
function hL() {
    return yt(Ss)
}
function gL(e) {
    return yt(Ql)
}
const sS = '<g transform="translate(-20,-20)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="90 50 50" to="0 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g><g transform="translate(20,20) rotate(15 50 50)"><path d="M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z" fill="currentColor"><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="90 50 50" dur="1s" repeatCount="indefinite"></animateTransform></path></g>'
  , pL = Ne({
    name: "QSpinnerGears",
    props: fh,
    setup(e) {
        const {cSize: t, classes: n} = dh(e);
        return () => M("svg", {
            class: n.value,
            width: t.value,
            height: t.value,
            viewBox: "0 0 100 100",
            preserveAspectRatio: "xMidYMid",
            xmlns: "http://www.w3.org/2000/svg",
            innerHTML: sS
        })
    }
});
var Lg = typeof global == "object" && global && global.Object === Object && global
  , aS = typeof self == "object" && self && self.Object === Object && self
  , en = Lg || aS || Function("return this")()
  , Fn = en.Symbol
  , Og = Object.prototype
  , lS = Og.hasOwnProperty
  , uS = Og.toString
  , co = Fn ? Fn.toStringTag : void 0;
function cS(e) {
    var t = lS.call(e, co)
      , n = e[co];
    try {
        e[co] = void 0;
        var r = !0
    } catch {}
    var o = uS.call(e);
    return r && (t ? e[co] = n : delete e[co]),
    o
}
var fS = Object.prototype
  , dS = fS.toString;
function mS(e) {
    return dS.call(e)
}
var hS = "[object Null]"
  , gS = "[object Undefined]"
  , Af = Fn ? Fn.toStringTag : void 0;
function Qr(e) {
    return e == null ? e === void 0 ? gS : hS : Af && Af in Object(e) ? cS(e) : mS(e)
}
function Jr(e) {
    return e != null && typeof e == "object"
}
var pS = "[object Symbol]";
function Cs(e) {
    return typeof e == "symbol" || Jr(e) && Qr(e) == pS
}
function vS(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
        o[n] = t(e[n], n, e);
    return o
}
var Zr = Array.isArray
  , bS = 1 / 0
  , Lf = Fn ? Fn.prototype : void 0
  , Of = Lf ? Lf.toString : void 0;
function Pg(e) {
    if (typeof e == "string")
        return e;
    if (Zr(e))
        return vS(e, Pg) + "";
    if (Cs(e))
        return Of ? Of.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -bS ? "-0" : t
}
var _S = /\s/;
function yS(e) {
    for (var t = e.length; t-- && _S.test(e.charAt(t)); )
        ;
    return t
}
var wS = /^\s+/;
function ES(e) {
    return e && e.slice(0, yS(e) + 1).replace(wS, "")
}
function hn(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function")
}
var Pf = NaN
  , SS = /^[-+]0x[0-9a-f]+$/i
  , CS = /^0b[01]+$/i
  , TS = /^0o[0-7]+$/i
  , xS = parseInt;
function kS(e) {
    if (typeof e == "number")
        return e;
    if (Cs(e))
        return Pf;
    if (hn(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = hn(t) ? t + "" : t
    }
    if (typeof e != "string")
        return e === 0 ? e : +e;
    e = ES(e);
    var n = CS.test(e);
    return n || TS.test(e) ? xS(e.slice(2), n ? 2 : 8) : SS.test(e) ? Pf : +e
}
var Rf = 1 / 0
  , AS = 17976931348623157e292;
function LS(e) {
    if (!e)
        return e === 0 ? e : 0;
    if (e = kS(e),
    e === Rf || e === -Rf) {
        var t = e < 0 ? -1 : 1;
        return t * AS
    }
    return e === e ? e : 0
}
function OS(e) {
    var t = LS(e)
      , n = t % 1;
    return t === t ? n ? t - n : t : 0
}
var PS = "[object AsyncFunction]"
  , RS = "[object Function]"
  , IS = "[object GeneratorFunction]"
  , NS = "[object Proxy]";
function Rg(e) {
    if (!hn(e))
        return !1;
    var t = Qr(e);
    return t == RS || t == IS || t == PS || t == NS
}
var ua = en["__core-js_shared__"]
  , If = function() {
    var e = /[^.]+$/.exec(ua && ua.keys && ua.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : ""
}();
function MS(e) {
    return !!If && If in e
}
var $S = Function.prototype
  , FS = $S.toString;
function hr(e) {
    if (e != null) {
        try {
            return FS.call(e)
        } catch {}
        try {
            return e + ""
        } catch {}
    }
    return ""
}
var DS = /[\\^$.*+?()[\]{}|]/g
  , qS = /^\[object .+?Constructor\]$/
  , BS = Function.prototype
  , jS = Object.prototype
  , US = BS.toString
  , VS = jS.hasOwnProperty
  , HS = RegExp("^" + US.call(VS).replace(DS, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function WS(e) {
    if (!hn(e) || MS(e))
        return !1;
    var t = Rg(e) ? HS : qS;
    return t.test(hr(e))
}
function zS(e, t) {
    return e == null ? void 0 : e[t]
}
function gr(e, t) {
    var n = zS(e, t);
    return WS(n) ? n : void 0
}
var Ja = gr(en, "WeakMap")
  , Nf = Object.create
  , KS = function() {
    function e() {}
    return function(t) {
        if (!hn(t))
            return {};
        if (Nf)
            return Nf(t);
        e.prototype = t;
        var n = new e;
        return e.prototype = void 0,
        n
    }
}();
function GS(e, t) {
    var n = -1
      , r = e.length;
    for (t || (t = Array(r)); ++n < r; )
        t[n] = e[n];
    return t
}
var Mf = function() {
    try {
        var e = gr(Object, "defineProperty");
        return e({}, "", {}),
        e
    } catch {}
}();
function YS(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1; )
        ;
    return e
}
var XS = 9007199254740991
  , QS = /^(?:0|[1-9]\d*)$/;
function Ig(e, t) {
    var n = typeof e;
    return t = t ?? XS,
    !!t && (n == "number" || n != "symbol" && QS.test(e)) && e > -1 && e % 1 == 0 && e < t
}
function Ng(e, t, n) {
    t == "__proto__" && Mf ? Mf(e, t, {
        configurable: !0,
        enumerable: !0,
        value: n,
        writable: !0
    }) : e[t] = n
}
function Mg(e, t) {
    return e === t || e !== e && t !== t
}
var JS = Object.prototype
  , ZS = JS.hasOwnProperty;
function Jl(e, t, n) {
    var r = e[t];
    (!(ZS.call(e, t) && Mg(r, n)) || n === void 0 && !(t in e)) && Ng(e, t, n)
}
function Ts(e, t, n, r) {
    var o = !n;
    n || (n = {});
    for (var i = -1, s = t.length; ++i < s; ) {
        var a = t[i]
          , l = void 0;
        l === void 0 && (l = e[a]),
        o ? Ng(n, a, l) : Jl(n, a, l)
    }
    return n
}
var e1 = 9007199254740991;
function $g(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= e1
}
function Fg(e) {
    return e != null && $g(e.length) && !Rg(e)
}
var t1 = Object.prototype;
function Zl(e) {
    var t = e && e.constructor
      , n = typeof t == "function" && t.prototype || t1;
    return e === n
}
function n1(e, t) {
    for (var n = -1, r = Array(e); ++n < e; )
        r[n] = t(n);
    return r
}
var r1 = "[object Arguments]";
function $f(e) {
    return Jr(e) && Qr(e) == r1
}
var Dg = Object.prototype
  , o1 = Dg.hasOwnProperty
  , i1 = Dg.propertyIsEnumerable
  , s1 = $f(function() {
    return arguments
}()) ? $f : function(e) {
    return Jr(e) && o1.call(e, "callee") && !i1.call(e, "callee")
}
;
function a1() {
    return !1
}
var qg = typeof exports == "object" && exports && !exports.nodeType && exports
  , Ff = qg && typeof module == "object" && module && !module.nodeType && module
  , l1 = Ff && Ff.exports === qg
  , Df = l1 ? en.Buffer : void 0
  , u1 = Df ? Df.isBuffer : void 0
  , Bg = u1 || a1
  , c1 = "[object Arguments]"
  , f1 = "[object Array]"
  , d1 = "[object Boolean]"
  , m1 = "[object Date]"
  , h1 = "[object Error]"
  , g1 = "[object Function]"
  , p1 = "[object Map]"
  , v1 = "[object Number]"
  , b1 = "[object Object]"
  , _1 = "[object RegExp]"
  , y1 = "[object Set]"
  , w1 = "[object String]"
  , E1 = "[object WeakMap]"
  , S1 = "[object ArrayBuffer]"
  , C1 = "[object DataView]"
  , T1 = "[object Float32Array]"
  , x1 = "[object Float64Array]"
  , k1 = "[object Int8Array]"
  , A1 = "[object Int16Array]"
  , L1 = "[object Int32Array]"
  , O1 = "[object Uint8Array]"
  , P1 = "[object Uint8ClampedArray]"
  , R1 = "[object Uint16Array]"
  , I1 = "[object Uint32Array]"
  , je = {};
je[T1] = je[x1] = je[k1] = je[A1] = je[L1] = je[O1] = je[P1] = je[R1] = je[I1] = !0;
je[c1] = je[f1] = je[S1] = je[d1] = je[C1] = je[m1] = je[h1] = je[g1] = je[p1] = je[v1] = je[b1] = je[_1] = je[y1] = je[w1] = je[E1] = !1;
function N1(e) {
    return Jr(e) && $g(e.length) && !!je[Qr(e)]
}
function eu(e) {
    return function(t) {
        return e(t)
    }
}
var jg = typeof exports == "object" && exports && !exports.nodeType && exports
  , ko = jg && typeof module == "object" && module && !module.nodeType && module
  , M1 = ko && ko.exports === jg
  , ca = M1 && Lg.process
  , Hr = function() {
    try {
        var e = ko && ko.require && ko.require("util").types;
        return e || ca && ca.binding && ca.binding("util")
    } catch {}
}()
  , qf = Hr && Hr.isTypedArray
  , $1 = qf ? eu(qf) : N1
  , F1 = Object.prototype
  , D1 = F1.hasOwnProperty;
function Ug(e, t) {
    var n = Zr(e)
      , r = !n && s1(e)
      , o = !n && !r && Bg(e)
      , i = !n && !r && !o && $1(e)
      , s = n || r || o || i
      , a = s ? n1(e.length, String) : []
      , l = a.length;
    for (var u in e)
        (t || D1.call(e, u)) && !(s && (u == "length" || o && (u == "offset" || u == "parent") || i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || Ig(u, l))) && a.push(u);
    return a
}
function Vg(e, t) {
    return function(n) {
        return e(t(n))
    }
}
var q1 = Vg(Object.keys, Object)
  , B1 = Object.prototype
  , j1 = B1.hasOwnProperty;
function U1(e) {
    if (!Zl(e))
        return q1(e);
    var t = [];
    for (var n in Object(e))
        j1.call(e, n) && n != "constructor" && t.push(n);
    return t
}
function tu(e) {
    return Fg(e) ? Ug(e) : U1(e)
}
function V1(e) {
    var t = [];
    if (e != null)
        for (var n in Object(e))
            t.push(n);
    return t
}
var H1 = Object.prototype
  , W1 = H1.hasOwnProperty;
function z1(e) {
    if (!hn(e))
        return V1(e);
    var t = Zl(e)
      , n = [];
    for (var r in e)
        r == "constructor" && (t || !W1.call(e, r)) || n.push(r);
    return n
}
function nu(e) {
    return Fg(e) ? Ug(e, !0) : z1(e)
}
var K1 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
  , G1 = /^\w*$/;
function Y1(e, t) {
    if (Zr(e))
        return !1;
    var n = typeof e;
    return n == "number" || n == "symbol" || n == "boolean" || e == null || Cs(e) ? !0 : G1.test(e) || !K1.test(e) || t != null && e in Object(t)
}
var Bo = gr(Object, "create");
function X1() {
    this.__data__ = Bo ? Bo(null) : {},
    this.size = 0
}
function Q1(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0,
    t
}
var J1 = "__lodash_hash_undefined__"
  , Z1 = Object.prototype
  , eC = Z1.hasOwnProperty;
function tC(e) {
    var t = this.__data__;
    if (Bo) {
        var n = t[e];
        return n === J1 ? void 0 : n
    }
    return eC.call(t, e) ? t[e] : void 0
}
var nC = Object.prototype
  , rC = nC.hasOwnProperty;
function oC(e) {
    var t = this.__data__;
    return Bo ? t[e] !== void 0 : rC.call(t, e)
}
var iC = "__lodash_hash_undefined__";
function sC(e, t) {
    var n = this.__data__;
    return this.size += this.has(e) ? 0 : 1,
    n[e] = Bo && t === void 0 ? iC : t,
    this
}
function dr(e) {
    var t = -1
      , n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}
dr.prototype.clear = X1;
dr.prototype.delete = Q1;
dr.prototype.get = tC;
dr.prototype.has = oC;
dr.prototype.set = sC;
function aC() {
    this.__data__ = [],
    this.size = 0
}
function xs(e, t) {
    for (var n = e.length; n--; )
        if (Mg(e[n][0], t))
            return n;
    return -1
}
var lC = Array.prototype
  , uC = lC.splice;
function cC(e) {
    var t = this.__data__
      , n = xs(t, e);
    if (n < 0)
        return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : uC.call(t, n, 1),
    --this.size,
    !0
}
function fC(e) {
    var t = this.__data__
      , n = xs(t, e);
    return n < 0 ? void 0 : t[n][1]
}
function dC(e) {
    return xs(this.__data__, e) > -1
}
function mC(e, t) {
    var n = this.__data__
      , r = xs(n, e);
    return r < 0 ? (++this.size,
    n.push([e, t])) : n[r][1] = t,
    this
}
function vn(e) {
    var t = -1
      , n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}
vn.prototype.clear = aC;
vn.prototype.delete = cC;
vn.prototype.get = fC;
vn.prototype.has = dC;
vn.prototype.set = mC;
var jo = gr(en, "Map");
function hC() {
    this.size = 0,
    this.__data__ = {
        hash: new dr,
        map: new (jo || vn),
        string: new dr
    }
}
function gC(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
}
function ks(e, t) {
    var n = e.__data__;
    return gC(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map
}
function pC(e) {
    var t = ks(this, e).delete(e);
    return this.size -= t ? 1 : 0,
    t
}
function vC(e) {
    return ks(this, e).get(e)
}
function bC(e) {
    return ks(this, e).has(e)
}
function _C(e, t) {
    var n = ks(this, e)
      , r = n.size;
    return n.set(e, t),
    this.size += n.size == r ? 0 : 1,
    this
}
function Un(e) {
    var t = -1
      , n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
        var r = e[t];
        this.set(r[0], r[1])
    }
}
Un.prototype.clear = hC;
Un.prototype.delete = pC;
Un.prototype.get = vC;
Un.prototype.has = bC;
Un.prototype.set = _C;
var yC = "Expected a function";
function ru(e, t) {
    if (typeof e != "function" || t != null && typeof t != "function")
        throw new TypeError(yC);
    var n = function() {
        var r = arguments
          , o = t ? t.apply(this, r) : r[0]
          , i = n.cache;
        if (i.has(o))
            return i.get(o);
        var s = e.apply(this, r);
        return n.cache = i.set(o, s) || i,
        s
    };
    return n.cache = new (ru.Cache || Un),
    n
}
ru.Cache = Un;
var wC = 500;
function EC(e) {
    var t = ru(e, function(r) {
        return n.size === wC && n.clear(),
        r
    })
      , n = t.cache;
    return t
}
var SC = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
  , CC = /\\(\\)?/g
  , TC = EC(function(e) {
    var t = [];
    return e.charCodeAt(0) === 46 && t.push(""),
    e.replace(SC, function(n, r, o, i) {
        t.push(o ? i.replace(CC, "$1") : r || n)
    }),
    t
});
function xC(e) {
    return e == null ? "" : Pg(e)
}
function kC(e, t) {
    return Zr(e) ? e : Y1(e, t) ? [e] : TC(xC(e))
}
var AC = 1 / 0;
function LC(e) {
    if (typeof e == "string" || Cs(e))
        return e;
    var t = e + "";
    return t == "0" && 1 / e == -AC ? "-0" : t
}
function Hg(e, t) {
    for (var n = -1, r = t.length, o = e.length; ++n < r; )
        e[o + n] = t[n];
    return e
}
var Wg = Vg(Object.getPrototypeOf, Object);
function OC() {
    this.__data__ = new vn,
    this.size = 0
}
function PC(e) {
    var t = this.__data__
      , n = t.delete(e);
    return this.size = t.size,
    n
}
function RC(e) {
    return this.__data__.get(e)
}
function IC(e) {
    return this.__data__.has(e)
}
var NC = 200;
function MC(e, t) {
    var n = this.__data__;
    if (n instanceof vn) {
        var r = n.__data__;
        if (!jo || r.length < NC - 1)
            return r.push([e, t]),
            this.size = ++n.size,
            this;
        n = this.__data__ = new Un(r)
    }
    return n.set(e, t),
    this.size = n.size,
    this
}
function eo(e) {
    var t = this.__data__ = new vn(e);
    this.size = t.size
}
eo.prototype.clear = OC;
eo.prototype.delete = PC;
eo.prototype.get = RC;
eo.prototype.has = IC;
eo.prototype.set = MC;
function $C(e, t) {
    return e && Ts(t, tu(t), e)
}
function FC(e, t) {
    return e && Ts(t, nu(t), e)
}
var zg = typeof exports == "object" && exports && !exports.nodeType && exports
  , Bf = zg && typeof module == "object" && module && !module.nodeType && module
  , DC = Bf && Bf.exports === zg
  , jf = DC ? en.Buffer : void 0
  , Uf = jf ? jf.allocUnsafe : void 0;
function qC(e, t) {
    if (t)
        return e.slice();
    var n = e.length
      , r = Uf ? Uf(n) : new e.constructor(n);
    return e.copy(r),
    r
}
function BC(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r; ) {
        var s = e[n];
        t(s, n, e) && (i[o++] = s)
    }
    return i
}
function Kg() {
    return []
}
var jC = Object.prototype
  , UC = jC.propertyIsEnumerable
  , Vf = Object.getOwnPropertySymbols
  , ou = Vf ? function(e) {
    return e == null ? [] : (e = Object(e),
    BC(Vf(e), function(t) {
        return UC.call(e, t)
    }))
}
: Kg;
function VC(e, t) {
    return Ts(e, ou(e), t)
}
var HC = Object.getOwnPropertySymbols
  , Gg = HC ? function(e) {
    for (var t = []; e; )
        Hg(t, ou(e)),
        e = Wg(e);
    return t
}
: Kg;
function WC(e, t) {
    return Ts(e, Gg(e), t)
}
function Yg(e, t, n) {
    var r = t(e);
    return Zr(e) ? r : Hg(r, n(e))
}
function zC(e) {
    return Yg(e, tu, ou)
}
function KC(e) {
    return Yg(e, nu, Gg)
}
var Za = gr(en, "DataView")
  , el = gr(en, "Promise")
  , tl = gr(en, "Set")
  , Hf = "[object Map]"
  , GC = "[object Object]"
  , Wf = "[object Promise]"
  , zf = "[object Set]"
  , Kf = "[object WeakMap]"
  , Gf = "[object DataView]"
  , YC = hr(Za)
  , XC = hr(jo)
  , QC = hr(el)
  , JC = hr(tl)
  , ZC = hr(Ja)
  , an = Qr;
(Za && an(new Za(new ArrayBuffer(1))) != Gf || jo && an(new jo) != Hf || el && an(el.resolve()) != Wf || tl && an(new tl) != zf || Ja && an(new Ja) != Kf) && (an = function(e) {
    var t = Qr(e)
      , n = t == GC ? e.constructor : void 0
      , r = n ? hr(n) : "";
    if (r)
        switch (r) {
        case YC:
            return Gf;
        case XC:
            return Hf;
        case QC:
            return Wf;
        case JC:
            return zf;
        case ZC:
            return Kf
        }
    return t
}
);
var eT = Object.prototype
  , tT = eT.hasOwnProperty;
function nT(e) {
    var t = e.length
      , n = new e.constructor(t);
    return t && typeof e[0] == "string" && tT.call(e, "index") && (n.index = e.index,
    n.input = e.input),
    n
}
var Yf = en.Uint8Array;
function iu(e) {
    var t = new e.constructor(e.byteLength);
    return new Yf(t).set(new Yf(e)),
    t
}
function rT(e, t) {
    var n = t ? iu(e.buffer) : e.buffer;
    return new e.constructor(n,e.byteOffset,e.byteLength)
}
var oT = /\w*$/;
function iT(e) {
    var t = new e.constructor(e.source,oT.exec(e));
    return t.lastIndex = e.lastIndex,
    t
}
var Xf = Fn ? Fn.prototype : void 0
  , Qf = Xf ? Xf.valueOf : void 0;
function sT(e) {
    return Qf ? Object(Qf.call(e)) : {}
}
function aT(e, t) {
    var n = t ? iu(e.buffer) : e.buffer;
    return new e.constructor(n,e.byteOffset,e.length)
}
var lT = "[object Boolean]"
  , uT = "[object Date]"
  , cT = "[object Map]"
  , fT = "[object Number]"
  , dT = "[object RegExp]"
  , mT = "[object Set]"
  , hT = "[object String]"
  , gT = "[object Symbol]"
  , pT = "[object ArrayBuffer]"
  , vT = "[object DataView]"
  , bT = "[object Float32Array]"
  , _T = "[object Float64Array]"
  , yT = "[object Int8Array]"
  , wT = "[object Int16Array]"
  , ET = "[object Int32Array]"
  , ST = "[object Uint8Array]"
  , CT = "[object Uint8ClampedArray]"
  , TT = "[object Uint16Array]"
  , xT = "[object Uint32Array]";
function kT(e, t, n) {
    var r = e.constructor;
    switch (t) {
    case pT:
        return iu(e);
    case lT:
    case uT:
        return new r(+e);
    case vT:
        return rT(e, n);
    case bT:
    case _T:
    case yT:
    case wT:
    case ET:
    case ST:
    case CT:
    case TT:
    case xT:
        return aT(e, n);
    case cT:
        return new r;
    case fT:
    case hT:
        return new r(e);
    case dT:
        return iT(e);
    case mT:
        return new r;
    case gT:
        return sT(e)
    }
}
function AT(e) {
    return typeof e.constructor == "function" && !Zl(e) ? KS(Wg(e)) : {}
}
var LT = "[object Map]";
function OT(e) {
    return Jr(e) && an(e) == LT
}
var Jf = Hr && Hr.isMap
  , PT = Jf ? eu(Jf) : OT
  , RT = "[object Set]";
function IT(e) {
    return Jr(e) && an(e) == RT
}
var Zf = Hr && Hr.isSet
  , NT = Zf ? eu(Zf) : IT
  , MT = 1
  , $T = 2
  , FT = 4
  , Xg = "[object Arguments]"
  , DT = "[object Array]"
  , qT = "[object Boolean]"
  , BT = "[object Date]"
  , jT = "[object Error]"
  , Qg = "[object Function]"
  , UT = "[object GeneratorFunction]"
  , VT = "[object Map]"
  , HT = "[object Number]"
  , Jg = "[object Object]"
  , WT = "[object RegExp]"
  , zT = "[object Set]"
  , KT = "[object String]"
  , GT = "[object Symbol]"
  , YT = "[object WeakMap]"
  , XT = "[object ArrayBuffer]"
  , QT = "[object DataView]"
  , JT = "[object Float32Array]"
  , ZT = "[object Float64Array]"
  , ex = "[object Int8Array]"
  , tx = "[object Int16Array]"
  , nx = "[object Int32Array]"
  , rx = "[object Uint8Array]"
  , ox = "[object Uint8ClampedArray]"
  , ix = "[object Uint16Array]"
  , sx = "[object Uint32Array]"
  , De = {};
De[Xg] = De[DT] = De[XT] = De[QT] = De[qT] = De[BT] = De[JT] = De[ZT] = De[ex] = De[tx] = De[nx] = De[VT] = De[HT] = De[Jg] = De[WT] = De[zT] = De[KT] = De[GT] = De[rx] = De[ox] = De[ix] = De[sx] = !0;
De[jT] = De[Qg] = De[YT] = !1;
function yi(e, t, n, r, o, i) {
    var s, a = t & MT, l = t & $T, u = t & FT;
    if (s !== void 0)
        return s;
    if (!hn(e))
        return e;
    var c = Zr(e);
    if (c) {
        if (s = nT(e),
        !a)
            return GS(e, s)
    } else {
        var d = an(e)
          , f = d == Qg || d == UT;
        if (Bg(e))
            return qC(e, a);
        if (d == Jg || d == Xg || f && !o) {
            if (s = l || f ? {} : AT(e),
            !a)
                return l ? WC(e, FC(s, e)) : VC(e, $C(s, e))
        } else {
            if (!De[d])
                return o ? e : {};
            s = kT(e, d, a)
        }
    }
    i || (i = new eo);
    var m = i.get(e);
    if (m)
        return m;
    i.set(e, s),
    NT(e) ? e.forEach(function(b) {
        s.add(yi(b, t, n, b, e, i))
    }) : PT(e) && e.forEach(function(b, T) {
        s.set(T, yi(b, t, n, T, e, i))
    });
    var h = u ? l ? KC : zC : l ? nu : tu
      , g = c ? void 0 : h(e);
    return YS(g || e, function(b, T) {
        g && (T = b,
        b = e[T]),
        Jl(s, T, yi(b, t, n, T, e, i))
    }),
    s
}
var ax = 1
  , lx = 4;
function vL(e) {
    return yi(e, ax | lx)
}
function bL(e) {
    return typeof e == "number" && e == OS(e)
}
function ux(e, t, n, r) {
    if (!hn(e))
        return e;
    t = kC(t, e);
    for (var o = -1, i = t.length, s = i - 1, a = e; a != null && ++o < i; ) {
        var l = LC(t[o])
          , u = n;
        if (l === "__proto__" || l === "constructor" || l === "prototype")
            return e;
        if (o != s) {
            var c = a[l];
            u = void 0,
            u === void 0 && (u = hn(c) ? c : Ig(t[o + 1]) ? [] : {})
        }
        Jl(a, l, u),
        a = a[l]
    }
    return e
}
function _L(e, t, n) {
    return e == null ? e : ux(e, t, n)
}
function Zg(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {toString: cx} = Object.prototype
  , {getPrototypeOf: su} = Object
  , As = (e => t => {
    const n = cx.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , Gt = e => (e = e.toLowerCase(),
t => As(t) === e)
  , Ls = e => t => typeof t === e
  , {isArray: to} = Array
  , Uo = Ls("undefined");
function fx(e) {
    return e !== null && !Uo(e) && e.constructor !== null && !Uo(e.constructor) && kt(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const ep = Gt("ArrayBuffer");
function dx(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ep(e.buffer),
    t
}
const mx = Ls("string")
  , kt = Ls("function")
  , tp = Ls("number")
  , Os = e => e !== null && typeof e == "object"
  , hx = e => e === !0 || e === !1
  , wi = e => {
    if (As(e) !== "object")
        return !1;
    const t = su(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
}
  , gx = Gt("Date")
  , px = Gt("File")
  , vx = Gt("Blob")
  , bx = Gt("FileList")
  , _x = e => Os(e) && kt(e.pipe)
  , yx = e => {
    let t;
    return e && (typeof FormData == "function" && e instanceof FormData || kt(e.append) && ((t = As(e)) === "formdata" || t === "object" && kt(e.toString) && e.toString() === "[object FormData]"))
}
  , wx = Gt("URLSearchParams")
  , [Ex,Sx,Cx,Tx] = ["ReadableStream", "Request", "Response", "Headers"].map(Gt)
  , xx = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Go(e, t, {allOwnKeys: n=!1}={}) {
    if (e === null || typeof e > "u")
        return;
    let r, o;
    if (typeof e != "object" && (e = [e]),
    to(e))
        for (r = 0,
        o = e.length; r < o; r++)
            t.call(null, e[r], r, e);
    else {
        const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e)
          , s = i.length;
        let a;
        for (r = 0; r < s; r++)
            a = i[r],
            t.call(null, e[a], a, e)
    }
}
function np(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length, o;
    for (; r-- > 0; )
        if (o = n[r],
        t === o.toLowerCase())
            return o;
    return null
}
const Jn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , rp = e => !Uo(e) && e !== Jn;
function nl() {
    const {caseless: e} = rp(this) && this || {}
      , t = {}
      , n = (r, o) => {
        const i = e && np(t, o) || o;
        wi(t[i]) && wi(r) ? t[i] = nl(t[i], r) : wi(r) ? t[i] = nl({}, r) : to(r) ? t[i] = r.slice() : t[i] = r
    }
    ;
    for (let r = 0, o = arguments.length; r < o; r++)
        arguments[r] && Go(arguments[r], n);
    return t
}
const kx = (e, t, n, {allOwnKeys: r}={}) => (Go(t, (o, i) => {
    n && kt(o) ? e[i] = Zg(o, n) : e[i] = o
}
, {
    allOwnKeys: r
}),
e)
  , Ax = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)),
e)
  , Lx = (e, t, n, r) => {
    e.prototype = Object.create(t.prototype, r),
    e.prototype.constructor = e,
    Object.defineProperty(e, "super", {
        value: t.prototype
    }),
    n && Object.assign(e.prototype, n)
}
  , Ox = (e, t, n, r) => {
    let o, i, s;
    const a = {};
    if (t = t || {},
    e == null)
        return t;
    do {
        for (o = Object.getOwnPropertyNames(e),
        i = o.length; i-- > 0; )
            s = o[i],
            (!r || r(s, e, t)) && !a[s] && (t[s] = e[s],
            a[s] = !0);
        e = n !== !1 && su(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t
}
  , Px = (e, t, n) => {
    e = String(e),
    (n === void 0 || n > e.length) && (n = e.length),
    n -= t.length;
    const r = e.indexOf(t, n);
    return r !== -1 && r === n
}
  , Rx = e => {
    if (!e)
        return null;
    if (to(e))
        return e;
    let t = e.length;
    if (!tp(t))
        return null;
    const n = new Array(t);
    for (; t-- > 0; )
        n[t] = e[t];
    return n
}
  , Ix = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && su(Uint8Array))
  , Nx = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let o;
    for (; (o = r.next()) && !o.done; ) {
        const i = o.value;
        t.call(e, i[0], i[1])
    }
}
  , Mx = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; )
        r.push(n);
    return r
}
  , $x = Gt("HTMLFormElement")
  , Fx = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, o) {
    return r.toUpperCase() + o
})
  , ed = ( ({hasOwnProperty: e}) => (t, n) => e.call(t, n))(Object.prototype)
  , Dx = Gt("RegExp")
  , op = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e)
      , r = {};
    Go(n, (o, i) => {
        let s;
        (s = t(o, i, e)) !== !1 && (r[i] = s || o)
    }
    ),
    Object.defineProperties(e, r)
}
  , qx = e => {
    op(e, (t, n) => {
        if (kt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
            return !1;
        const r = e[n];
        if (kt(r)) {
            if (t.enumerable = !1,
            "writable"in t) {
                t.writable = !1;
                return
            }
            t.set || (t.set = () => {
                throw Error("Can not rewrite read-only method '" + n + "'")
            }
            )
        }
    }
    )
}
  , Bx = (e, t) => {
    const n = {}
      , r = o => {
        o.forEach(i => {
            n[i] = !0
        }
        )
    }
    ;
    return to(e) ? r(e) : r(String(e).split(t)),
    n
}
  , jx = () => {}
  , Ux = (e, t) => e != null && Number.isFinite(e = +e) ? e : t
  , fa = "abcdefghijklmnopqrstuvwxyz"
  , td = "0123456789"
  , ip = {
    DIGIT: td,
    ALPHA: fa,
    ALPHA_DIGIT: fa + fa.toUpperCase() + td
}
  , Vx = (e=16, t=ip.ALPHA_DIGIT) => {
    let n = "";
    const {length: r} = t;
    for (; e--; )
        n += t[Math.random() * r | 0];
    return n
}
;
function Hx(e) {
    return !!(e && kt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const Wx = e => {
    const t = new Array(10)
      , n = (r, o) => {
        if (Os(r)) {
            if (t.indexOf(r) >= 0)
                return;
            if (!("toJSON"in r)) {
                t[o] = r;
                const i = to(r) ? [] : {};
                return Go(r, (s, a) => {
                    const l = n(s, o + 1);
                    !Uo(l) && (i[a] = l)
                }
                ),
                t[o] = void 0,
                i
            }
        }
        return r
    }
    ;
    return n(e, 0)
}
  , zx = Gt("AsyncFunction")
  , Kx = e => e && (Os(e) || kt(e)) && kt(e.then) && kt(e.catch)
  , sp = ( (e, t) => e ? setImmediate : t ? ( (n, r) => (Jn.addEventListener("message", ({source: o, data: i}) => {
    o === Jn && i === n && r.length && r.shift()()
}
, !1),
o => {
    r.push(o),
    Jn.postMessage(n, "*")
}
))(`axios@${Math.random()}`, []) : n => setTimeout(n))(typeof setImmediate == "function", kt(Jn.postMessage))
  , Gx = typeof queueMicrotask < "u" ? queueMicrotask.bind(Jn) : typeof process < "u" && process.nextTick || sp
  , V = {
    isArray: to,
    isArrayBuffer: ep,
    isBuffer: fx,
    isFormData: yx,
    isArrayBufferView: dx,
    isString: mx,
    isNumber: tp,
    isBoolean: hx,
    isObject: Os,
    isPlainObject: wi,
    isReadableStream: Ex,
    isRequest: Sx,
    isResponse: Cx,
    isHeaders: Tx,
    isUndefined: Uo,
    isDate: gx,
    isFile: px,
    isBlob: vx,
    isRegExp: Dx,
    isFunction: kt,
    isStream: _x,
    isURLSearchParams: wx,
    isTypedArray: Ix,
    isFileList: bx,
    forEach: Go,
    merge: nl,
    extend: kx,
    trim: xx,
    stripBOM: Ax,
    inherits: Lx,
    toFlatObject: Ox,
    kindOf: As,
    kindOfTest: Gt,
    endsWith: Px,
    toArray: Rx,
    forEachEntry: Nx,
    matchAll: Mx,
    isHTMLForm: $x,
    hasOwnProperty: ed,
    hasOwnProp: ed,
    reduceDescriptors: op,
    freezeMethods: qx,
    toObjectSet: Bx,
    toCamelCase: Fx,
    noop: jx,
    toFiniteNumber: Ux,
    findKey: np,
    global: Jn,
    isContextDefined: rp,
    ALPHABET: ip,
    generateString: Vx,
    isSpecCompliantForm: Hx,
    toJSONObject: Wx,
    isAsyncFn: zx,
    isThenable: Kx,
    setImmediate: sp,
    asap: Gx
};
function Ee(e, t, n, r, o) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = e,
    this.name = "AxiosError",
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    o && (this.response = o,
    this.status = o.status ? o.status : null)
}
V.inherits(Ee, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: V.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const ap = Ee.prototype
  , lp = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    lp[e] = {
        value: e
    }
}
);
Object.defineProperties(Ee, lp);
Object.defineProperty(ap, "isAxiosError", {
    value: !0
});
Ee.from = (e, t, n, r, o, i) => {
    const s = Object.create(ap);
    return V.toFlatObject(e, s, function(l) {
        return l !== Error.prototype
    }, a => a !== "isAxiosError"),
    Ee.call(s, e.message, t, n, r, o),
    s.cause = e,
    s.name = e.name,
    i && Object.assign(s, i),
    s
}
;
const Yx = null;
function rl(e) {
    return V.isPlainObject(e) || V.isArray(e)
}
function up(e) {
    return V.endsWith(e, "[]") ? e.slice(0, -2) : e
}
function nd(e, t, n) {
    return e ? e.concat(t).map(function(o, i) {
        return o = up(o),
        !n && i ? "[" + o + "]" : o
    }).join(n ? "." : "") : t
}
function Xx(e) {
    return V.isArray(e) && !e.some(rl)
}
const Qx = V.toFlatObject(V, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});
function Ps(e, t, n) {
    if (!V.isObject(e))
        throw new TypeError("target must be an object");
    t = t || new FormData,
    n = V.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(g, b) {
        return !V.isUndefined(b[g])
    });
    const r = n.metaTokens
      , o = n.visitor || c
      , i = n.dots
      , s = n.indexes
      , l = (n.Blob || typeof Blob < "u" && Blob) && V.isSpecCompliantForm(t);
    if (!V.isFunction(o))
        throw new TypeError("visitor must be a function");
    function u(h) {
        if (h === null)
            return "";
        if (V.isDate(h))
            return h.toISOString();
        if (!l && V.isBlob(h))
            throw new Ee("Blob is not supported. Use a Buffer instead.");
        return V.isArrayBuffer(h) || V.isTypedArray(h) ? l && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h
    }
    function c(h, g, b) {
        let T = h;
        if (h && !b && typeof h == "object") {
            if (V.endsWith(g, "{}"))
                g = r ? g : g.slice(0, -2),
                h = JSON.stringify(h);
            else if (V.isArray(h) && Xx(h) || (V.isFileList(h) || V.endsWith(g, "[]")) && (T = V.toArray(h)))
                return g = up(g),
                T.forEach(function(v, p) {
                    !(V.isUndefined(v) || v === null) && t.append(s === !0 ? nd([g], p, i) : s === null ? g : g + "[]", u(v))
                }),
                !1
        }
        return rl(h) ? !0 : (t.append(nd(b, g, i), u(h)),
        !1)
    }
    const d = []
      , f = Object.assign(Qx, {
        defaultVisitor: c,
        convertValue: u,
        isVisitable: rl
    });
    function m(h, g) {
        if (!V.isUndefined(h)) {
            if (d.indexOf(h) !== -1)
                throw Error("Circular reference detected in " + g.join("."));
            d.push(h),
            V.forEach(h, function(T, E) {
                (!(V.isUndefined(T) || T === null) && o.call(t, T, V.isString(E) ? E.trim() : E, g, f)) === !0 && m(T, g ? g.concat(E) : [E])
            }),
            d.pop()
        }
    }
    if (!V.isObject(e))
        throw new TypeError("data must be an object");
    return m(e),
    t
}
function rd(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
        return t[r]
    })
}
function au(e, t) {
    this._pairs = [],
    e && Ps(e, this, t)
}
const cp = au.prototype;
cp.append = function(t, n) {
    this._pairs.push([t, n])
}
;
cp.toString = function(t) {
    const n = t ? function(r) {
        return t.call(this, r, rd)
    }
    : rd;
    return this._pairs.map(function(o) {
        return n(o[0]) + "=" + n(o[1])
    }, "").join("&")
}
;
function Jx(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
function fp(e, t, n) {
    if (!t)
        return e;
    const r = n && n.encode || Jx
      , o = n && n.serialize;
    let i;
    if (o ? i = o(t, n) : i = V.isURLSearchParams(t) ? t.toString() : new au(t,n).toString(r),
    i) {
        const s = e.indexOf("#");
        s !== -1 && (e = e.slice(0, s)),
        e += (e.indexOf("?") === -1 ? "?" : "&") + i
    }
    return e
}
class od {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        V.forEach(this.handlers, function(r) {
            r !== null && t(r)
        })
    }
}
const dp = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , Zx = typeof URLSearchParams < "u" ? URLSearchParams : au
  , ek = typeof FormData < "u" ? FormData : null
  , tk = typeof Blob < "u" ? Blob : null
  , nk = {
    isBrowser: !0,
    classes: {
        URLSearchParams: Zx,
        FormData: ek,
        Blob: tk
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , lu = typeof window < "u" && typeof document < "u"
  , ol = typeof navigator == "object" && navigator || void 0
  , rk = lu && (!ol || ["ReactNative", "NativeScript", "NS"].indexOf(ol.product) < 0)
  , ok = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , ik = lu && window.location.href || "http://localhost"
  , sk = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: lu,
    hasStandardBrowserEnv: rk,
    hasStandardBrowserWebWorkerEnv: ok,
    navigator: ol,
    origin: ik
}, Symbol.toStringTag, {
    value: "Module"
}))
  , St = {
    ...sk,
    ...nk
};
function ak(e, t) {
    return Ps(e, new St.classes.URLSearchParams, Object.assign({
        visitor: function(n, r, o, i) {
            return St.isNode && V.isBuffer(n) ? (this.append(r, n.toString("base64")),
            !1) : i.defaultVisitor.apply(this, arguments)
        }
    }, t))
}
function lk(e) {
    return V.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}
function uk(e) {
    const t = {}
      , n = Object.keys(e);
    let r;
    const o = n.length;
    let i;
    for (r = 0; r < o; r++)
        i = n[r],
        t[i] = e[i];
    return t
}
function mp(e) {
    function t(n, r, o, i) {
        let s = n[i++];
        if (s === "__proto__")
            return !0;
        const a = Number.isFinite(+s)
          , l = i >= n.length;
        return s = !s && V.isArray(o) ? o.length : s,
        l ? (V.hasOwnProp(o, s) ? o[s] = [o[s], r] : o[s] = r,
        !a) : ((!o[s] || !V.isObject(o[s])) && (o[s] = []),
        t(n, r, o[s], i) && V.isArray(o[s]) && (o[s] = uk(o[s])),
        !a)
    }
    if (V.isFormData(e) && V.isFunction(e.entries)) {
        const n = {};
        return V.forEachEntry(e, (r, o) => {
            t(lk(r), o, n, 0)
        }
        ),
        n
    }
    return null
}
function ck(e, t, n) {
    if (V.isString(e))
        try {
            return (t || JSON.parse)(e),
            V.trim(e)
        } catch (r) {
            if (r.name !== "SyntaxError")
                throw r
        }
    return (0,
    JSON.stringify)(e)
}
const Yo = {
    transitional: dp,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(t, n) {
        const r = n.getContentType() || ""
          , o = r.indexOf("application/json") > -1
          , i = V.isObject(t);
        if (i && V.isHTMLForm(t) && (t = new FormData(t)),
        V.isFormData(t))
            return o ? JSON.stringify(mp(t)) : t;
        if (V.isArrayBuffer(t) || V.isBuffer(t) || V.isStream(t) || V.isFile(t) || V.isBlob(t) || V.isReadableStream(t))
            return t;
        if (V.isArrayBufferView(t))
            return t.buffer;
        if (V.isURLSearchParams(t))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            t.toString();
        let a;
        if (i) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return ak(t, this.formSerializer).toString();
            if ((a = V.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const l = this.env && this.env.FormData;
                return Ps(a ? {
                    "files[]": t
                } : t, l && new l, this.formSerializer)
            }
        }
        return i || o ? (n.setContentType("application/json", !1),
        ck(t)) : t
    }
    ],
    transformResponse: [function(t) {
        const n = this.transitional || Yo.transitional
          , r = n && n.forcedJSONParsing
          , o = this.responseType === "json";
        if (V.isResponse(t) || V.isReadableStream(t))
            return t;
        if (t && V.isString(t) && (r && !this.responseType || o)) {
            const s = !(n && n.silentJSONParsing) && o;
            try {
                return JSON.parse(t)
            } catch (a) {
                if (s)
                    throw a.name === "SyntaxError" ? Ee.from(a, Ee.ERR_BAD_RESPONSE, this, null, this.response) : a
            }
        }
        return t
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: St.classes.FormData,
        Blob: St.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
V.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    Yo.headers[e] = {}
}
);
const fk = V.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , dk = e => {
    const t = {};
    let n, r, o;
    return e && e.split(`
`).forEach(function(s) {
        o = s.indexOf(":"),
        n = s.substring(0, o).trim().toLowerCase(),
        r = s.substring(o + 1).trim(),
        !(!n || t[n] && fk[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
    }),
    t
}
  , id = Symbol("internals");
function fo(e) {
    return e && String(e).trim().toLowerCase()
}
function Ei(e) {
    return e === !1 || e == null ? e : V.isArray(e) ? e.map(Ei) : String(e)
}
function mk(e) {
    const t = Object.create(null)
      , n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e); )
        t[r[1]] = r[2];
    return t
}
const hk = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function da(e, t, n, r, o) {
    if (V.isFunction(r))
        return r.call(this, t, n);
    if (o && (t = n),
    !!V.isString(t)) {
        if (V.isString(r))
            return t.indexOf(r) !== -1;
        if (V.isRegExp(r))
            return r.test(t)
    }
}
function gk(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}
function pk(e, t) {
    const n = V.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function(o, i, s) {
                return this[r].call(this, t, o, i, s)
            },
            configurable: !0
        })
    }
    )
}
class Ct {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const o = this;
        function i(a, l, u) {
            const c = fo(l);
            if (!c)
                throw new Error("header name must be a non-empty string");
            const d = V.findKey(o, c);
            (!d || o[d] === void 0 || u === !0 || u === void 0 && o[d] !== !1) && (o[d || l] = Ei(a))
        }
        const s = (a, l) => V.forEach(a, (u, c) => i(u, c, l));
        if (V.isPlainObject(t) || t instanceof this.constructor)
            s(t, n);
        else if (V.isString(t) && (t = t.trim()) && !hk(t))
            s(dk(t), n);
        else if (V.isHeaders(t))
            for (const [a,l] of t.entries())
                i(l, a, r);
        else
            t != null && i(n, t, r);
        return this
    }
    get(t, n) {
        if (t = fo(t),
        t) {
            const r = V.findKey(this, t);
            if (r) {
                const o = this[r];
                if (!n)
                    return o;
                if (n === !0)
                    return mk(o);
                if (V.isFunction(n))
                    return n.call(this, o, r);
                if (V.isRegExp(n))
                    return n.exec(o);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = fo(t),
        t) {
            const r = V.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || da(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let o = !1;
        function i(s) {
            if (s = fo(s),
            s) {
                const a = V.findKey(r, s);
                a && (!n || da(r, r[a], a, n)) && (delete r[a],
                o = !0)
            }
        }
        return V.isArray(t) ? t.forEach(i) : i(t),
        o
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length
          , o = !1;
        for (; r--; ) {
            const i = n[r];
            (!t || da(this, this[i], i, t, !0)) && (delete this[i],
            o = !0)
        }
        return o
    }
    normalize(t) {
        const n = this
          , r = {};
        return V.forEach(this, (o, i) => {
            const s = V.findKey(r, i);
            if (s) {
                n[s] = Ei(o),
                delete n[i];
                return
            }
            const a = t ? gk(i) : String(i).trim();
            a !== i && delete n[i],
            n[a] = Ei(o),
            r[a] = !0
        }
        ),
        this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return V.forEach(this, (r, o) => {
            r != null && r !== !1 && (n[o] = t && V.isArray(r) ? r.join(", ") : r)
        }
        ),
        n
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([t,n]) => t + ": " + n).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(o => r.set(o)),
        r
    }
    static accessor(t) {
        const r = (this[id] = this[id] = {
            accessors: {}
        }).accessors
          , o = this.prototype;
        function i(s) {
            const a = fo(s);
            r[a] || (pk(o, s),
            r[a] = !0)
        }
        return V.isArray(t) ? t.forEach(i) : i(t),
        this
    }
}
Ct.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
V.reduceDescriptors(Ct.prototype, ({value: e}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(r) {
            this[n] = r
        }
    }
}
);
V.freezeMethods(Ct);
function ma(e, t) {
    const n = this || Yo
      , r = t || n
      , o = Ct.from(r.headers);
    let i = r.data;
    return V.forEach(e, function(a) {
        i = a.call(n, i, o.normalize(), t ? t.status : void 0)
    }),
    o.normalize(),
    i
}
function hp(e) {
    return !!(e && e.__CANCEL__)
}
function no(e, t, n) {
    Ee.call(this, e ?? "canceled", Ee.ERR_CANCELED, t, n),
    this.name = "CanceledError"
}
V.inherits(no, Ee, {
    __CANCEL__: !0
});
function gp(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new Ee("Request failed with status code " + n.status,[Ee.ERR_BAD_REQUEST, Ee.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],n.config,n.request,n))
}
function vk(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}
function bk(e, t) {
    e = e || 10;
    const n = new Array(e)
      , r = new Array(e);
    let o = 0, i = 0, s;
    return t = t !== void 0 ? t : 1e3,
    function(l) {
        const u = Date.now()
          , c = r[i];
        s || (s = u),
        n[o] = l,
        r[o] = u;
        let d = i
          , f = 0;
        for (; d !== o; )
            f += n[d++],
            d = d % e;
        if (o = (o + 1) % e,
        o === i && (i = (i + 1) % e),
        u - s < t)
            return;
        const m = c && u - c;
        return m ? Math.round(f * 1e3 / m) : void 0
    }
}
function _k(e, t) {
    let n = 0, r = 1e3 / t, o, i;
    const s = (u, c=Date.now()) => {
        n = c,
        o = null,
        i && (clearTimeout(i),
        i = null),
        e.apply(null, u)
    }
    ;
    return [ (...u) => {
        const c = Date.now()
          , d = c - n;
        d >= r ? s(u, c) : (o = u,
        i || (i = setTimeout( () => {
            i = null,
            s(o)
        }
        , r - d)))
    }
    , () => o && s(o)]
}
const Wi = (e, t, n=3) => {
    let r = 0;
    const o = bk(50, 250);
    return _k(i => {
        const s = i.loaded
          , a = i.lengthComputable ? i.total : void 0
          , l = s - r
          , u = o(l)
          , c = s <= a;
        r = s;
        const d = {
            loaded: s,
            total: a,
            progress: a ? s / a : void 0,
            bytes: l,
            rate: u || void 0,
            estimated: u && a && c ? (a - s) / u : void 0,
            event: i,
            lengthComputable: a != null,
            [t ? "download" : "upload"]: !0
        };
        e(d)
    }
    , n)
}
  , sd = (e, t) => {
    const n = e != null;
    return [r => t[0]({
        lengthComputable: n,
        total: e,
        loaded: r
    }), t[1]]
}
  , ad = e => (...t) => V.asap( () => e(...t))
  , yk = St.hasStandardBrowserEnv ? function() {
    const t = St.navigator && /(msie|trident)/i.test(St.navigator.userAgent)
      , n = document.createElement("a");
    let r;
    function o(i) {
        let s = i;
        return t && (n.setAttribute("href", s),
        s = n.href),
        n.setAttribute("href", s),
        {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        }
    }
    return r = o(window.location.href),
    function(s) {
        const a = V.isString(s) ? o(s) : s;
        return a.protocol === r.protocol && a.host === r.host
    }
}() : function() {
    return function() {
        return !0
    }
}()
  , wk = St.hasStandardBrowserEnv ? {
    write(e, t, n, r, o, i) {
        const s = [e + "=" + encodeURIComponent(t)];
        V.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
        V.isString(r) && s.push("path=" + r),
        V.isString(o) && s.push("domain=" + o),
        i === !0 && s.push("secure"),
        document.cookie = s.join("; ")
    },
    read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    },
    remove(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function Ek(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function Sk(e, t) {
    return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e
}
function pp(e, t) {
    return e && !Ek(t) ? Sk(e, t) : t
}
const ld = e => e instanceof Ct ? {
    ...e
} : e;
function mr(e, t) {
    t = t || {};
    const n = {};
    function r(u, c, d) {
        return V.isPlainObject(u) && V.isPlainObject(c) ? V.merge.call({
            caseless: d
        }, u, c) : V.isPlainObject(c) ? V.merge({}, c) : V.isArray(c) ? c.slice() : c
    }
    function o(u, c, d) {
        if (V.isUndefined(c)) {
            if (!V.isUndefined(u))
                return r(void 0, u, d)
        } else
            return r(u, c, d)
    }
    function i(u, c) {
        if (!V.isUndefined(c))
            return r(void 0, c)
    }
    function s(u, c) {
        if (V.isUndefined(c)) {
            if (!V.isUndefined(u))
                return r(void 0, u)
        } else
            return r(void 0, c)
    }
    function a(u, c, d) {
        if (d in t)
            return r(u, c);
        if (d in e)
            return r(void 0, u)
    }
    const l = {
        url: i,
        method: i,
        data: i,
        baseURL: s,
        transformRequest: s,
        transformResponse: s,
        paramsSerializer: s,
        timeout: s,
        timeoutMessage: s,
        withCredentials: s,
        withXSRFToken: s,
        adapter: s,
        responseType: s,
        xsrfCookieName: s,
        xsrfHeaderName: s,
        onUploadProgress: s,
        onDownloadProgress: s,
        decompress: s,
        maxContentLength: s,
        maxBodyLength: s,
        beforeRedirect: s,
        transport: s,
        httpAgent: s,
        httpsAgent: s,
        cancelToken: s,
        socketPath: s,
        responseEncoding: s,
        validateStatus: a,
        headers: (u, c) => o(ld(u), ld(c), !0)
    };
    return V.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
        const d = l[c] || o
          , f = d(e[c], t[c], c);
        V.isUndefined(f) && d !== a || (n[c] = f)
    }),
    n
}
const vp = e => {
    const t = mr({}, e);
    let {data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: s, auth: a} = t;
    t.headers = s = Ct.from(s),
    t.url = fp(pp(t.baseURL, t.url), e.params, e.paramsSerializer),
    a && s.set("Authorization", "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : "")));
    let l;
    if (V.isFormData(n)) {
        if (St.hasStandardBrowserEnv || St.hasStandardBrowserWebWorkerEnv)
            s.setContentType(void 0);
        else if ((l = s.getContentType()) !== !1) {
            const [u,...c] = l ? l.split(";").map(d => d.trim()).filter(Boolean) : [];
            s.setContentType([u || "multipart/form-data", ...c].join("; "))
        }
    }
    if (St.hasStandardBrowserEnv && (r && V.isFunction(r) && (r = r(t)),
    r || r !== !1 && yk(t.url))) {
        const u = o && i && wk.read(i);
        u && s.set(o, u)
    }
    return t
}
  , Ck = typeof XMLHttpRequest < "u"
  , Tk = Ck && function(e) {
    return new Promise(function(n, r) {
        const o = vp(e);
        let i = o.data;
        const s = Ct.from(o.headers).normalize();
        let {responseType: a, onUploadProgress: l, onDownloadProgress: u} = o, c, d, f, m, h;
        function g() {
            m && m(),
            h && h(),
            o.cancelToken && o.cancelToken.unsubscribe(c),
            o.signal && o.signal.removeEventListener("abort", c)
        }
        let b = new XMLHttpRequest;
        b.open(o.method.toUpperCase(), o.url, !0),
        b.timeout = o.timeout;
        function T() {
            if (!b)
                return;
            const v = Ct.from("getAllResponseHeaders"in b && b.getAllResponseHeaders())
              , C = {
                data: !a || a === "text" || a === "json" ? b.responseText : b.response,
                status: b.status,
                statusText: b.statusText,
                headers: v,
                config: e,
                request: b
            };
            gp(function(k) {
                n(k),
                g()
            }, function(k) {
                r(k),
                g()
            }, C),
            b = null
        }
        "onloadend"in b ? b.onloadend = T : b.onreadystatechange = function() {
            !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(T)
        }
        ,
        b.onabort = function() {
            b && (r(new Ee("Request aborted",Ee.ECONNABORTED,e,b)),
            b = null)
        }
        ,
        b.onerror = function() {
            r(new Ee("Network Error",Ee.ERR_NETWORK,e,b)),
            b = null
        }
        ,
        b.ontimeout = function() {
            let p = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
            const C = o.transitional || dp;
            o.timeoutErrorMessage && (p = o.timeoutErrorMessage),
            r(new Ee(p,C.clarifyTimeoutError ? Ee.ETIMEDOUT : Ee.ECONNABORTED,e,b)),
            b = null
        }
        ,
        i === void 0 && s.setContentType(null),
        "setRequestHeader"in b && V.forEach(s.toJSON(), function(p, C) {
            b.setRequestHeader(C, p)
        }),
        V.isUndefined(o.withCredentials) || (b.withCredentials = !!o.withCredentials),
        a && a !== "json" && (b.responseType = o.responseType),
        u && ([f,h] = Wi(u, !0),
        b.addEventListener("progress", f)),
        l && b.upload && ([d,m] = Wi(l),
        b.upload.addEventListener("progress", d),
        b.upload.addEventListener("loadend", m)),
        (o.cancelToken || o.signal) && (c = v => {
            b && (r(!v || v.type ? new no(null,e,b) : v),
            b.abort(),
            b = null)
        }
        ,
        o.cancelToken && o.cancelToken.subscribe(c),
        o.signal && (o.signal.aborted ? c() : o.signal.addEventListener("abort", c)));
        const E = vk(o.url);
        if (E && St.protocols.indexOf(E) === -1) {
            r(new Ee("Unsupported protocol " + E + ":",Ee.ERR_BAD_REQUEST,e));
            return
        }
        b.send(i || null)
    }
    )
}
  , xk = (e, t) => {
    const {length: n} = e = e ? e.filter(Boolean) : [];
    if (t || n) {
        let r = new AbortController, o;
        const i = function(u) {
            if (!o) {
                o = !0,
                a();
                const c = u instanceof Error ? u : this.reason;
                r.abort(c instanceof Ee ? c : new no(c instanceof Error ? c.message : c))
            }
        };
        let s = t && setTimeout( () => {
            s = null,
            i(new Ee(`timeout ${t} of ms exceeded`,Ee.ETIMEDOUT))
        }
        , t);
        const a = () => {
            e && (s && clearTimeout(s),
            s = null,
            e.forEach(u => {
                u.unsubscribe ? u.unsubscribe(i) : u.removeEventListener("abort", i)
            }
            ),
            e = null)
        }
        ;
        e.forEach(u => u.addEventListener("abort", i));
        const {signal: l} = r;
        return l.unsubscribe = () => V.asap(a),
        l
    }
}
  , kk = function*(e, t) {
    let n = e.byteLength;
    if (n < t) {
        yield e;
        return
    }
    let r = 0, o;
    for (; r < n; )
        o = r + t,
        yield e.slice(r, o),
        r = o
}
  , Ak = async function*(e, t) {
    for await(const n of Lk(e))
        yield*kk(n, t)
}
  , Lk = async function*(e) {
    if (e[Symbol.asyncIterator]) {
        yield*e;
        return
    }
    const t = e.getReader();
    try {
        for (; ; ) {
            const {done: n, value: r} = await t.read();
            if (n)
                break;
            yield r
        }
    } finally {
        await t.cancel()
    }
}
  , ud = (e, t, n, r) => {
    const o = Ak(e, t);
    let i = 0, s, a = l => {
        s || (s = !0,
        r && r(l))
    }
    ;
    return new ReadableStream({
        async pull(l) {
            try {
                const {done: u, value: c} = await o.next();
                if (u) {
                    a(),
                    l.close();
                    return
                }
                let d = c.byteLength;
                if (n) {
                    let f = i += d;
                    n(f)
                }
                l.enqueue(new Uint8Array(c))
            } catch (u) {
                throw a(u),
                u
            }
        },
        cancel(l) {
            return a(l),
            o.return()
        }
    },{
        highWaterMark: 2
    })
}
  , Rs = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function"
  , bp = Rs && typeof ReadableStream == "function"
  , Ok = Rs && (typeof TextEncoder == "function" ? (e => t => e.encode(t))(new TextEncoder) : async e => new Uint8Array(await new Response(e).arrayBuffer()))
  , _p = (e, ...t) => {
    try {
        return !!e(...t)
    } catch {
        return !1
    }
}
  , Pk = bp && _p( () => {
    let e = !1;
    const t = new Request(St.origin,{
        body: new ReadableStream,
        method: "POST",
        get duplex() {
            return e = !0,
            "half"
        }
    }).headers.has("Content-Type");
    return e && !t
}
)
  , cd = 64 * 1024
  , il = bp && _p( () => V.isReadableStream(new Response("").body))
  , zi = {
    stream: il && (e => e.body)
};
Rs && (e => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(t => {
        !zi[t] && (zi[t] = V.isFunction(e[t]) ? n => n[t]() : (n, r) => {
            throw new Ee(`Response type '${t}' is not supported`,Ee.ERR_NOT_SUPPORT,r)
        }
        )
    }
    )
}
)(new Response);
const Rk = async e => {
    if (e == null)
        return 0;
    if (V.isBlob(e))
        return e.size;
    if (V.isSpecCompliantForm(e))
        return (await new Request(St.origin,{
            method: "POST",
            body: e
        }).arrayBuffer()).byteLength;
    if (V.isArrayBufferView(e) || V.isArrayBuffer(e))
        return e.byteLength;
    if (V.isURLSearchParams(e) && (e = e + ""),
    V.isString(e))
        return (await Ok(e)).byteLength
}
  , Ik = async (e, t) => {
    const n = V.toFiniteNumber(e.getContentLength());
    return n ?? Rk(t)
}
  , Nk = Rs && (async e => {
    let {url: t, method: n, data: r, signal: o, cancelToken: i, timeout: s, onDownloadProgress: a, onUploadProgress: l, responseType: u, headers: c, withCredentials: d="same-origin", fetchOptions: f} = vp(e);
    u = u ? (u + "").toLowerCase() : "text";
    let m = xk([o, i && i.toAbortSignal()], s), h;
    const g = m && m.unsubscribe && ( () => {
        m.unsubscribe()
    }
    );
    let b;
    try {
        if (l && Pk && n !== "get" && n !== "head" && (b = await Ik(c, r)) !== 0) {
            let C = new Request(t,{
                method: "POST",
                body: r,
                duplex: "half"
            }), w;
            if (V.isFormData(r) && (w = C.headers.get("content-type")) && c.setContentType(w),
            C.body) {
                const [k,P] = sd(b, Wi(ad(l)));
                r = ud(C.body, cd, k, P)
            }
        }
        V.isString(d) || (d = d ? "include" : "omit");
        const T = "credentials"in Request.prototype;
        h = new Request(t,{
            ...f,
            signal: m,
            method: n.toUpperCase(),
            headers: c.normalize().toJSON(),
            body: r,
            duplex: "half",
            credentials: T ? d : void 0
        });
        let E = await fetch(h);
        const v = il && (u === "stream" || u === "response");
        if (il && (a || v && g)) {
            const C = {};
            ["status", "statusText", "headers"].forEach(A => {
                C[A] = E[A]
            }
            );
            const w = V.toFiniteNumber(E.headers.get("content-length"))
              , [k,P] = a && sd(w, Wi(ad(a), !0)) || [];
            E = new Response(ud(E.body, cd, k, () => {
                P && P(),
                g && g()
            }
            ),C)
        }
        u = u || "text";
        let p = await zi[V.findKey(zi, u) || "text"](E, e);
        return !v && g && g(),
        await new Promise( (C, w) => {
            gp(C, w, {
                data: p,
                headers: Ct.from(E.headers),
                status: E.status,
                statusText: E.statusText,
                config: e,
                request: h
            })
        }
        )
    } catch (T) {
        throw g && g(),
        T && T.name === "TypeError" && /fetch/i.test(T.message) ? Object.assign(new Ee("Network Error",Ee.ERR_NETWORK,e,h), {
            cause: T.cause || T
        }) : Ee.from(T, T && T.code, e, h)
    }
}
)
  , sl = {
    http: Yx,
    xhr: Tk,
    fetch: Nk
};
V.forEach(sl, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
}
);
const fd = e => `- ${e}`
  , Mk = e => V.isFunction(e) || e === null || e === !1
  , yp = {
    getAdapter: e => {
        e = V.isArray(e) ? e : [e];
        const {length: t} = e;
        let n, r;
        const o = {};
        for (let i = 0; i < t; i++) {
            n = e[i];
            let s;
            if (r = n,
            !Mk(n) && (r = sl[(s = String(n)).toLowerCase()],
            r === void 0))
                throw new Ee(`Unknown adapter '${s}'`);
            if (r)
                break;
            o[s || "#" + i] = r
        }
        if (!r) {
            const i = Object.entries(o).map( ([a,l]) => `adapter ${a} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build"));
            let s = t ? i.length > 1 ? `since :
` + i.map(fd).join(`
`) : " " + fd(i[0]) : "as no adapter specified";
            throw new Ee("There is no suitable adapter to dispatch the request " + s,"ERR_NOT_SUPPORT")
        }
        return r
    }
    ,
    adapters: sl
};
function ha(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
        throw new no(null,e)
}
function dd(e) {
    return ha(e),
    e.headers = Ct.from(e.headers),
    e.data = ma.call(e, e.transformRequest),
    ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1),
    yp.getAdapter(e.adapter || Yo.adapter)(e).then(function(r) {
        return ha(e),
        r.data = ma.call(e, e.transformResponse, r),
        r.headers = Ct.from(r.headers),
        r
    }, function(r) {
        return hp(r) || (ha(e),
        r && r.response && (r.response.data = ma.call(e, e.transformResponse, r.response),
        r.response.headers = Ct.from(r.response.headers))),
        Promise.reject(r)
    })
}
const wp = "1.7.7"
  , uu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (e, t) => {
    uu[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
}
);
const md = {};
uu.transitional = function(t, n, r) {
    function o(i, s) {
        return "[Axios v" + wp + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "")
    }
    return (i, s, a) => {
        if (t === !1)
            throw new Ee(o(s, " has been removed" + (n ? " in " + n : "")),Ee.ERR_DEPRECATED);
        return n && !md[s] && (md[s] = !0,
        console.warn(o(s, " has been deprecated since v" + n + " and will be removed in the near future"))),
        t ? t(i, s, a) : !0
    }
}
;
function $k(e, t, n) {
    if (typeof e != "object")
        throw new Ee("options must be an object",Ee.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let o = r.length;
    for (; o-- > 0; ) {
        const i = r[o]
          , s = t[i];
        if (s) {
            const a = e[i]
              , l = a === void 0 || s(a, i, e);
            if (l !== !0)
                throw new Ee("option " + i + " must be " + l,Ee.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0)
            throw new Ee("Unknown option " + i,Ee.ERR_BAD_OPTION)
    }
}
const al = {
    assertOptions: $k,
    validators: uu
}
  , wn = al.validators;
class ir {
    constructor(t) {
        this.defaults = t,
        this.interceptors = {
            request: new od,
            response: new od
        }
    }
    async request(t, n) {
        try {
            return await this._request(t, n)
        } catch (r) {
            if (r instanceof Error) {
                let o;
                Error.captureStackTrace ? Error.captureStackTrace(o = {}) : o = new Error;
                const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
                try {
                    r.stack ? i && !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + i) : r.stack = i
                } catch {}
            }
            throw r
        }
    }
    _request(t, n) {
        typeof t == "string" ? (n = n || {},
        n.url = t) : n = t || {},
        n = mr(this.defaults, n);
        const {transitional: r, paramsSerializer: o, headers: i} = n;
        r !== void 0 && al.assertOptions(r, {
            silentJSONParsing: wn.transitional(wn.boolean),
            forcedJSONParsing: wn.transitional(wn.boolean),
            clarifyTimeoutError: wn.transitional(wn.boolean)
        }, !1),
        o != null && (V.isFunction(o) ? n.paramsSerializer = {
            serialize: o
        } : al.assertOptions(o, {
            encode: wn.function,
            serialize: wn.function
        }, !0)),
        n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let s = i && V.merge(i.common, i[n.method]);
        i && V.forEach(["delete", "get", "head", "post", "put", "patch", "common"], h => {
            delete i[h]
        }
        ),
        n.headers = Ct.concat(s, i);
        const a = [];
        let l = !0;
        this.interceptors.request.forEach(function(g) {
            typeof g.runWhen == "function" && g.runWhen(n) === !1 || (l = l && g.synchronous,
            a.unshift(g.fulfilled, g.rejected))
        });
        const u = [];
        this.interceptors.response.forEach(function(g) {
            u.push(g.fulfilled, g.rejected)
        });
        let c, d = 0, f;
        if (!l) {
            const h = [dd.bind(this), void 0];
            for (h.unshift.apply(h, a),
            h.push.apply(h, u),
            f = h.length,
            c = Promise.resolve(n); d < f; )
                c = c.then(h[d++], h[d++]);
            return c
        }
        f = a.length;
        let m = n;
        for (d = 0; d < f; ) {
            const h = a[d++]
              , g = a[d++];
            try {
                m = h(m)
            } catch (b) {
                g.call(this, b);
                break
            }
        }
        try {
            c = dd.call(this, m)
        } catch (h) {
            return Promise.reject(h)
        }
        for (d = 0,
        f = u.length; d < f; )
            c = c.then(u[d++], u[d++]);
        return c
    }
    getUri(t) {
        t = mr(this.defaults, t);
        const n = pp(t.baseURL, t.url);
        return fp(n, t.params, t.paramsSerializer)
    }
}
V.forEach(["delete", "get", "head", "options"], function(t) {
    ir.prototype[t] = function(n, r) {
        return this.request(mr(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
V.forEach(["post", "put", "patch"], function(t) {
    function n(r) {
        return function(i, s, a) {
            return this.request(mr(a || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: i,
                data: s
            }))
        }
    }
    ir.prototype[t] = n(),
    ir.prototype[t + "Form"] = n(!0)
});
class cu {
    constructor(t) {
        if (typeof t != "function")
            throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(i) {
            n = i
        }
        );
        const r = this;
        this.promise.then(o => {
            if (!r._listeners)
                return;
            let i = r._listeners.length;
            for (; i-- > 0; )
                r._listeners[i](o);
            r._listeners = null
        }
        ),
        this.promise.then = o => {
            let i;
            const s = new Promise(a => {
                r.subscribe(a),
                i = a
            }
            ).then(o);
            return s.cancel = function() {
                r.unsubscribe(i)
            }
            ,
            s
        }
        ,
        t(function(i, s, a) {
            r.reason || (r.reason = new no(i,s,a),
            n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners)
            return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    toAbortSignal() {
        const t = new AbortController
          , n = r => {
            t.abort(r)
        }
        ;
        return this.subscribe(n),
        t.signal.unsubscribe = () => this.unsubscribe(n),
        t.signal
    }
    static source() {
        let t;
        return {
            token: new cu(function(o) {
                t = o
            }
            ),
            cancel: t
        }
    }
}
function Fk(e) {
    return function(n) {
        return e.apply(null, n)
    }
}
function Dk(e) {
    return V.isObject(e) && e.isAxiosError === !0
}
const ll = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(ll).forEach( ([e,t]) => {
    ll[t] = e
}
);
function Ep(e) {
    const t = new ir(e)
      , n = Zg(ir.prototype.request, t);
    return V.extend(n, ir.prototype, t, {
        allOwnKeys: !0
    }),
    V.extend(n, t, null, {
        allOwnKeys: !0
    }),
    n.create = function(o) {
        return Ep(mr(e, o))
    }
    ,
    n
}
const nt = Ep(Yo);
nt.Axios = ir;
nt.CanceledError = no;
nt.CancelToken = cu;
nt.isCancel = hp;
nt.VERSION = wp;
nt.toFormData = Ps;
nt.AxiosError = Ee;
nt.Cancel = nt.CanceledError;
nt.all = function(t) {
    return Promise.all(t)
}
;
nt.spread = Fk;
nt.isAxiosError = Dk;
nt.mergeConfig = mr;
nt.AxiosHeaders = Ct;
nt.formToJSON = e => mp(V.isHTMLForm(e) ? new FormData(e) : e);
nt.getAdapter = yp.getAdapter;
nt.HttpStatusCode = ll;
nt.default = nt;
var yr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function qk(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Sp = {
    exports: {}
};
(function(e, t) {
    (function(n, r) {
        e.exports = r()
    }
    )(yr, function() {
        return function(n) {
            var r = {};
            function o(i) {
                if (r[i])
                    return r[i].exports;
                var s = r[i] = {
                    i,
                    l: !1,
                    exports: {}
                };
                return n[i].call(s.exports, s, s.exports, o),
                s.l = !0,
                s.exports
            }
            return o.m = n,
            o.c = r,
            o.d = function(i, s, a) {
                o.o(i, s) || Object.defineProperty(i, s, {
                    enumerable: !0,
                    get: a
                })
            }
            ,
            o.r = function(i) {
                typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(i, "__esModule", {
                    value: !0
                })
            }
            ,
            o.t = function(i, s) {
                if (1 & s && (i = o(i)),
                8 & s || 4 & s && typeof i == "object" && i && i.__esModule)
                    return i;
                var a = Object.create(null);
                if (o.r(a),
                Object.defineProperty(a, "default", {
                    enumerable: !0,
                    value: i
                }),
                2 & s && typeof i != "string")
                    for (var l in i)
                        o.d(a, l, (function(u) {
                            return i[u]
                        }
                        ).bind(null, l));
                return a
            }
            ,
            o.n = function(i) {
                var s = i && i.__esModule ? function() {
                    return i.default
                }
                : function() {
                    return i
                }
                ;
                return o.d(s, "a", s),
                s
            }
            ,
            o.o = function(i, s) {
                return Object.prototype.hasOwnProperty.call(i, s)
            }
            ,
            o.p = "",
            o(o.s = 0)
        }([function(n, r, o) {
            var i, s, a = o(1)(), l = o(3), u = o(4), c = o(6), d = function() {
                var f = new u;
                return i = f.getResult(),
                s = new c,
                this
            };
            d.prototype = {
                getSoftwareVersion: function() {
                    return "0.1.11"
                },
                getBrowserData: function() {
                    return i
                },
                getFingerprint: function() {
                    var f = "|"
                      , m = i.ua
                      , h = this.getScreenPrint()
                      , g = this.getPlugins()
                      , b = this.getFonts()
                      , T = this.isLocalStorage()
                      , E = this.isSessionStorage()
                      , v = this.getTimeZone()
                      , p = this.getLanguage()
                      , C = this.getSystemLanguage()
                      , w = this.isCookie()
                      , k = this.getCanvasPrint();
                    return l(m + f + h + f + g + f + b + f + T + f + E + f + v + f + p + f + C + f + w + f + k, 256)
                },
                getCustomFingerprint: function() {
                    for (var f = "|", m = "", h = 0; h < arguments.length; h++)
                        m += arguments[h] + f;
                    return l(m, 256)
                },
                getUserAgent: function() {
                    return i.ua
                },
                getUserAgentLowerCase: function() {
                    return i.ua.toLowerCase()
                },
                getBrowser: function() {
                    return i.browser.name
                },
                getBrowserVersion: function() {
                    return i.browser.version
                },
                getBrowserMajorVersion: function() {
                    return i.browser.major
                },
                isIE: function() {
                    return /IE/i.test(i.browser.name)
                },
                isChrome: function() {
                    return /Chrome/i.test(i.browser.name)
                },
                isFirefox: function() {
                    return /Firefox/i.test(i.browser.name)
                },
                isSafari: function() {
                    return /Safari/i.test(i.browser.name)
                },
                isMobileSafari: function() {
                    return /Mobile\sSafari/i.test(i.browser.name)
                },
                isOpera: function() {
                    return /Opera/i.test(i.browser.name)
                },
                getEngine: function() {
                    return i.engine.name
                },
                getEngineVersion: function() {
                    return i.engine.version
                },
                getOS: function() {
                    return i.os.name
                },
                getOSVersion: function() {
                    return i.os.version
                },
                isWindows: function() {
                    return /Windows/i.test(i.os.name)
                },
                isMac: function() {
                    return /Mac/i.test(i.os.name)
                },
                isLinux: function() {
                    return /Linux/i.test(i.os.name)
                },
                isUbuntu: function() {
                    return /Ubuntu/i.test(i.os.name)
                },
                isSolaris: function() {
                    return /Solaris/i.test(i.os.name)
                },
                getDevice: function() {
                    return i.device.model
                },
                getDeviceType: function() {
                    return i.device.type
                },
                getDeviceVendor: function() {
                    return i.device.vendor
                },
                getCPU: function() {
                    return i.cpu.architecture
                },
                isMobile: function() {
                    var f = i.ua || navigator.vendor || window.opera;
                    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(f) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(f.substr(0, 4))
                },
                isMobileMajor: function() {
                    return this.isMobileAndroid() || this.isMobileBlackBerry() || this.isMobileIOS() || this.isMobileOpera() || this.isMobileWindows()
                },
                isMobileAndroid: function() {
                    return !!i.ua.match(/Android/i)
                },
                isMobileOpera: function() {
                    return !!i.ua.match(/Opera Mini/i)
                },
                isMobileWindows: function() {
                    return !!i.ua.match(/IEMobile/i)
                },
                isMobileBlackBerry: function() {
                    return !!i.ua.match(/BlackBerry/i)
                },
                isMobileIOS: function() {
                    return !!i.ua.match(/iPhone|iPad|iPod/i)
                },
                isIphone: function() {
                    return !!i.ua.match(/iPhone/i)
                },
                isIpad: function() {
                    return !!i.ua.match(/iPad/i)
                },
                isIpod: function() {
                    return !!i.ua.match(/iPod/i)
                },
                getScreenPrint: function() {
                    return "Current Resolution: " + this.getCurrentResolution() + ", Available Resolution: " + this.getAvailableResolution() + ", Color Depth: " + this.getColorDepth() + ", Device XDPI: " + this.getDeviceXDPI() + ", Device YDPI: " + this.getDeviceYDPI()
                },
                getColorDepth: function() {
                    return screen.colorDepth
                },
                getCurrentResolution: function() {
                    return screen.width + "x" + screen.height
                },
                getAvailableResolution: function() {
                    return screen.availWidth + "x" + screen.availHeight
                },
                getDeviceXDPI: function() {
                    return screen.deviceXDPI
                },
                getDeviceYDPI: function() {
                    return screen.deviceYDPI
                },
                getPlugins: function() {
                    for (var f = "", m = 0; m < navigator.plugins.length; m++)
                        m == navigator.plugins.length - 1 ? f += navigator.plugins[m].name : f += navigator.plugins[m].name + ", ";
                    return f
                },
                isJava: function() {
                    return navigator.javaEnabled()
                },
                getJavaVersion: function() {
                    throw new Error("Please use client.java.js or client.js if you need this functionality!")
                },
                isFlash: function() {
                    return !!navigator.plugins["Shockwave Flash"]
                },
                getFlashVersion: function() {
                    throw new Error("Please use client.flash.js or client.js if you need this functionality!")
                },
                isSilverlight: function() {
                    return !!navigator.plugins["Silverlight Plug-In"]
                },
                getSilverlightVersion: function() {
                    return this.isSilverlight() ? navigator.plugins["Silverlight Plug-In"].description : ""
                },
                isMimeTypes: function() {
                    return !(!navigator.mimeTypes || !navigator.mimeTypes.length)
                },
                getMimeTypes: function() {
                    var f = "";
                    if (navigator.mimeTypes)
                        for (var m = 0; m < navigator.mimeTypes.length; m++)
                            m == navigator.mimeTypes.length - 1 ? f += navigator.mimeTypes[m].description : f += navigator.mimeTypes[m].description + ", ";
                    return f
                },
                isFont: function(f) {
                    return s.detect(f)
                },
                getFonts: function() {
                    for (var f = ["Abadi MT Condensed Light", "Adobe Fangsong Std", "Adobe Hebrew", "Adobe Ming Std", "Agency FB", "Aharoni", "Andalus", "Angsana New", "AngsanaUPC", "Aparajita", "Arab", "Arabic Transparent", "Arabic Typesetting", "Arial Baltic", "Arial Black", "Arial CE", "Arial CYR", "Arial Greek", "Arial TUR", "Arial", "Batang", "BatangChe", "Bauhaus 93", "Bell MT", "Bitstream Vera Serif", "Bodoni MT", "Bookman Old Style", "Braggadocio", "Broadway", "Browallia New", "BrowalliaUPC", "Calibri Light", "Calibri", "Californian FB", "Cambria Math", "Cambria", "Candara", "Castellar", "Casual", "Centaur", "Century Gothic", "Chalkduster", "Colonna MT", "Comic Sans MS", "Consolas", "Constantia", "Copperplate Gothic Light", "Corbel", "Cordia New", "CordiaUPC", "Courier New Baltic", "Courier New CE", "Courier New CYR", "Courier New Greek", "Courier New TUR", "Courier New", "DFKai-SB", "DaunPenh", "David", "DejaVu LGC Sans Mono", "Desdemona", "DilleniaUPC", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Engravers MT", "Eras Bold ITC", "Estrangelo Edessa", "EucrosiaUPC", "Euphemia", "Eurostile", "FangSong", "Forte", "FrankRuehl", "Franklin Gothic Heavy", "Franklin Gothic Medium", "FreesiaUPC", "French Script MT", "Gabriola", "Gautami", "Georgia", "Gigi", "Gisha", "Goudy Old Style", "Gulim", "GulimChe", "GungSeo", "Gungsuh", "GungsuhChe", "Haettenschweiler", "Harrington", "Hei S", "HeiT", "Heisei Kaku Gothic", "Hiragino Sans GB", "Impact", "Informal Roman", "IrisUPC", "Iskoola Pota", "JasmineUPC", "KacstOne", "KaiTi", "Kalinga", "Kartika", "Khmer UI", "Kino MT", "KodchiangUPC", "Kokila", "Kozuka Gothic Pr6N", "Lao UI", "Latha", "Leelawadee", "Levenim MT", "LilyUPC", "Lohit Gujarati", "Loma", "Lucida Bright", "Lucida Console", "Lucida Fax", "Lucida Sans Unicode", "MS Gothic", "MS Mincho", "MS PGothic", "MS PMincho", "MS Reference Sans Serif", "MS UI Gothic", "MV Boli", "Magneto", "Malgun Gothic", "Mangal", "Marlett", "Matura MT Script Capitals", "Meiryo UI", "Meiryo", "Menlo", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Sans Serif", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU-ExtB", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "Miriam Fixed", "Miriam", "Mongolian Baiti", "MoolBoran", "NSimSun", "Narkisim", "News Gothic MT", "Niagara Solid", "Nyala", "PMingLiU", "PMingLiU-ExtB", "Palace Script MT", "Palatino Linotype", "Papyrus", "Perpetua", "Plantagenet Cherokee", "Playbill", "Prelude Bold", "Prelude Condensed Bold", "Prelude Condensed Medium", "Prelude Medium", "PreludeCompressedWGL Black", "PreludeCompressedWGL Bold", "PreludeCompressedWGL Light", "PreludeCompressedWGL Medium", "PreludeCondensedWGL Black", "PreludeCondensedWGL Bold", "PreludeCondensedWGL Light", "PreludeCondensedWGL Medium", "PreludeWGL Black", "PreludeWGL Bold", "PreludeWGL Light", "PreludeWGL Medium", "Raavi", "Rachana", "Rockwell", "Rod", "Sakkal Majalla", "Sawasdee", "Script MT Bold", "Segoe Print", "Segoe Script", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Segoe UI", "Shonar Bangla", "Showcard Gothic", "Shruti", "SimHei", "SimSun", "SimSun-ExtB", "Simplified Arabic Fixed", "Simplified Arabic", "Snap ITC", "Sylfaen", "Symbol", "Tahoma", "Times New Roman Baltic", "Times New Roman CE", "Times New Roman CYR", "Times New Roman Greek", "Times New Roman TUR", "Times New Roman", "TlwgMono", "Traditional Arabic", "Trebuchet MS", "Tunga", "Tw Cen MT Condensed Extra Bold", "Ubuntu", "Umpush", "Univers", "Utopia", "Utsaah", "Vani", "Verdana", "Vijaya", "Vladimir Script", "Vrinda", "Webdings", "Wide Latin", "Wingdings"], m = "", h = 0; h < f.length; h++)
                        s.detect(f[h]) && (m += h == f.length - 1 ? f[h] : f[h] + ", ");
                    return m
                },
                isLocalStorage: function() {
                    try {
                        return !!a.localStorage
                    } catch {
                        return !0
                    }
                },
                isSessionStorage: function() {
                    try {
                        return !!a.sessionStorage
                    } catch {
                        return !0
                    }
                },
                isCookie: function() {
                    return navigator.cookieEnabled
                },
                getTimeZone: function() {
                    var f, m;
                    return f = new Date,
                    (m = String(-f.getTimezoneOffset() / 60)) < 0 ? "-" + ("0" + (m *= -1)).slice(-2) : "+" + ("0" + m).slice(-2)
                },
                getLanguage: function() {
                    return navigator.language
                },
                getSystemLanguage: function() {
                    return navigator.systemLanguage || window.navigator.language
                },
                isCanvas: function() {
                    var f = document.createElement("canvas");
                    try {
                        return !(!f.getContext || !f.getContext("2d"))
                    } catch {
                        return !1
                    }
                },
                getCanvasPrint: function() {
                    var f, m = document.createElement("canvas");
                    try {
                        f = m.getContext("2d")
                    } catch {
                        return ""
                    }
                    var h = "ClientJS,org <canvas> 1.0";
                    return f.textBaseline = "top",
                    f.font = "14px 'Arial'",
                    f.textBaseline = "alphabetic",
                    f.fillStyle = "#f60",
                    f.fillRect(125, 1, 62, 20),
                    f.fillStyle = "#069",
                    f.fillText(h, 2, 15),
                    f.fillStyle = "rgba(102, 204, 0, 0.7)",
                    f.fillText(h, 4, 17),
                    m.toDataURL()
                }
            },
            r.ClientJS = d
        }
        , function(n, r, o) {
            var i = o(2);
            n.exports = function() {
                return typeof yr == "object" && yr && yr.Math === Math && yr.Array === Array ? yr : i
            }
        }
        , function(n, r, o) {
            typeof self < "u" ? n.exports = self : typeof window < "u" ? n.exports = window : n.exports = Function("return this")()
        }
        , function(n, r, o) {
            n.exports = function(i, s) {
                var a, l, u, c, d, f, m, h;
                for (a = 3 & i.length,
                l = i.length - a,
                u = s,
                d = 3432918353,
                f = 461845907,
                h = 0; h < l; )
                    m = 255 & i.charCodeAt(h) | (255 & i.charCodeAt(++h)) << 8 | (255 & i.charCodeAt(++h)) << 16 | (255 & i.charCodeAt(++h)) << 24,
                    ++h,
                    u = 27492 + (65535 & (c = 5 * (65535 & (u = (u ^= m = (65535 & (m = (m = (65535 & m) * d + (((m >>> 16) * d & 65535) << 16) & 4294967295) << 15 | m >>> 17)) * f + (((m >>> 16) * f & 65535) << 16) & 4294967295) << 13 | u >>> 19)) + ((5 * (u >>> 16) & 65535) << 16) & 4294967295)) + ((58964 + (c >>> 16) & 65535) << 16);
                switch (m = 0,
                a) {
                case 3:
                    m ^= (255 & i.charCodeAt(h + 2)) << 16;
                case 2:
                    m ^= (255 & i.charCodeAt(h + 1)) << 8;
                case 1:
                    u ^= m = (65535 & (m = (m = (65535 & (m ^= 255 & i.charCodeAt(h))) * d + (((m >>> 16) * d & 65535) << 16) & 4294967295) << 15 | m >>> 17)) * f + (((m >>> 16) * f & 65535) << 16) & 4294967295
                }
                return u ^= i.length,
                u = 2246822507 * (65535 & (u ^= u >>> 16)) + ((2246822507 * (u >>> 16) & 65535) << 16) & 4294967295,
                u = 3266489909 * (65535 & (u ^= u >>> 13)) + ((3266489909 * (u >>> 16) & 65535) << 16) & 4294967295,
                (u ^= u >>> 16) >>> 0
            }
        }
        , function(n, r, o) {
            var i;
            (function(s, a) {
                var l = "function"
                  , u = "undefined"
                  , c = "object"
                  , d = "string"
                  , f = "model"
                  , m = "name"
                  , h = "type"
                  , g = "vendor"
                  , b = "version"
                  , T = "architecture"
                  , E = "console"
                  , v = "mobile"
                  , p = "tablet"
                  , C = "smarttv"
                  , w = "wearable"
                  , k = "embedded"
                  , P = "Amazon"
                  , A = "Apple"
                  , R = "ASUS"
                  , q = "BlackBerry"
                  , L = "Firefox"
                  , H = "Google"
                  , F = "Huawei"
                  , ee = "LG"
                  , ne = "Microsoft"
                  , z = "Motorola"
                  , K = "Opera"
                  , ae = "Samsung"
                  , ue = "Sony"
                  , ce = "Xiaomi"
                  , X = "Zebra"
                  , be = "Facebook"
                  , ke = function(N) {
                    var j = {};
                    for (var D in N)
                        j[N[D].toUpperCase()] = N[D];
                    return j
                }
                  , Ae = function(N, j) {
                    return typeof N === d && oe(j).indexOf(oe(N)) !== -1
                }
                  , oe = function(N) {
                    return N.toLowerCase()
                }
                  , B = function(N, j) {
                    if (typeof N === d)
                        return N = N.replace(/^\s\s*/, "").replace(/\s\s*$/, ""),
                        typeof j === u ? N : N.substring(0, 255)
                }
                  , re = function(N, j) {
                    for (var D, Y, G, _, S, I, Q = 0; Q < j.length && !S; ) {
                        var te = j[Q]
                          , Z = j[Q + 1];
                        for (D = Y = 0; D < te.length && !S; )
                            if (S = te[D++].exec(N))
                                for (G = 0; G < Z.length; G++)
                                    I = S[++Y],
                                    typeof (_ = Z[G]) === c && _.length > 0 ? _.length == 2 ? typeof _[1] == l ? this[_[0]] = _[1].call(this, I) : this[_[0]] = _[1] : _.length == 3 ? typeof _[1] !== l || _[1].exec && _[1].test ? this[_[0]] = I ? I.replace(_[1], _[2]) : a : this[_[0]] = I ? _[1].call(this, I, _[2]) : a : _.length == 4 && (this[_[0]] = I ? _[3].call(this, I.replace(_[1], _[2])) : a) : this[_] = I || a;
                        Q += 2
                    }
                }
                  , W = function(N, j) {
                    for (var D in j)
                        if (typeof j[D] === c && j[D].length > 0) {
                            for (var Y = 0; Y < j[D].length; Y++)
                                if (Ae(j[D][Y], N))
                                    return D === "?" ? a : D
                        } else if (Ae(j[D], N))
                            return D === "?" ? a : D;
                    return N
                }
                  , ie = {
                    ME: "4.90",
                    "NT 3.11": "NT3.51",
                    "NT 4.0": "NT4.0",
                    2e3: "NT 5.0",
                    XP: ["NT 5.1", "NT 5.2"],
                    Vista: "NT 6.0",
                    7: "NT 6.1",
                    8: "NT 6.2",
                    8.1: "NT 6.3",
                    10: ["NT 6.4", "NT 10.0"],
                    RT: "ARM"
                }
                  , we = {
                    browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [b, [m, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [b, [m, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [m, b], [/opios[\/ ]+([\w\.]+)/i], [b, [m, "Opera Mini"]], [/\bopr\/([\w\.]+)/i], [b, [m, K]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i], [m, b], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [b, [m, "UCBrowser"]], [/\bqbcore\/([\w\.]+)/i], [b, [m, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [b, [m, "WeChat"]], [/konqueror\/([\w\.]+)/i], [b, [m, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [b, [m, "IE"]], [/yabrowser\/([\w\.]+)/i], [b, [m, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[m, /(.+)/, "$1 Secure Browser"], b], [/\bfocus\/([\w\.]+)/i], [b, [m, "Firefox Focus"]], [/\bopt\/([\w\.]+)/i], [b, [m, "Opera Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [b, [m, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [b, [m, "Dolphin"]], [/coast\/([\w\.]+)/i], [b, [m, "Opera Coast"]], [/miuibrowser\/([\w\.]+)/i], [b, [m, "MIUI Browser"]], [/fxios\/([-\w\.]+)/i], [b, [m, L]], [/\bqihu|(qi?ho?o?|360)browser/i], [[m, "360 Browser"]], [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i], [[m, /(.+)/, "$1 Browser"], b], [/(comodo_dragon)\/([\w\.]+)/i], [[m, /_/g, " "], b], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [m, b], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i], [m], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[m, be], b], [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [m, b], [/\bgsa\/([\w\.]+) .*safari\//i], [b, [m, "GSA"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [b, [m, "Chrome Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[m, "Chrome WebView"], b], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [b, [m, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [m, b], [/version\/([\w\.]+) .*mobile\/\w+ (safari)/i], [b, [m, "Mobile Safari"]], [/version\/([\w\.]+) .*(mobile ?safari|safari)/i], [b, m], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [m, [b, W, {
                        "1.0": "/8",
                        1.2: "/1",
                        1.3: "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                    }]], [/(webkit|khtml)\/([\w\.]+)/i], [m, b], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[m, "Netscape"], b], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [b, [m, "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i], [m, b]],
                    cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[T, "amd64"]], [/(ia32(?=;))/i], [[T, oe]], [/((?:i[346]|x)86)[;\)]/i], [[T, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[T, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[T, "armhf"]], [/windows (ce|mobile); ppc;/i], [[T, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[T, /ower/, "", oe]], [/(sun4\w)[;\)]/i], [[T, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[T, oe]]],
                    device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [f, [g, ae], [h, p]], [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [f, [g, ae], [h, v]], [/\((ip(?:hone|od)[\w ]*);/i], [f, [g, A], [h, v]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [f, [g, A], [h, p]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [f, [g, F], [h, p]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i], [f, [g, F], [h, v]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[f, /_/g, " "], [g, ce], [h, v]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[f, /_/g, " "], [g, ce], [h, p]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i], [f, [g, "OPPO"], [h, v]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [f, [g, "Vivo"], [h, v]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [f, [g, "Realme"], [h, v]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [f, [g, z], [h, v]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [f, [g, z], [h, p]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [f, [g, ee], [h, p]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [f, [g, ee], [h, v]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [f, [g, "Lenovo"], [h, p]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[f, /_/g, " "], [g, "Nokia"], [h, v]], [/(pixel c)\b/i], [f, [g, H], [h, p]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [f, [g, H], [h, v]], [/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [f, [g, ue], [h, v]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[f, "Xperia Tablet"], [g, ue], [h, p]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [f, [g, "OnePlus"], [h, v]], [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [f, [g, P], [h, p]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[f, /(.+)/g, "Fire Phone $1"], [g, P], [h, v]], [/(playbook);[-\w\),; ]+(rim)/i], [f, g, [h, p]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [f, [g, q], [h, v]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [f, [g, R], [h, p]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [f, [g, R], [h, v]], [/(nexus 9)/i], [f, [g, "HTC"], [h, p]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i], [g, [f, /_/g, " "], [h, v]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [f, [g, "Acer"], [h, p]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [f, [g, "Meizu"], [h, v]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [f, [g, "Sharp"], [h, v]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [g, f, [h, v]], [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [g, f, [h, p]], [/(surface duo)/i], [f, [g, ne], [h, p]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [f, [g, "Fairphone"], [h, v]], [/(u304aa)/i], [f, [g, "AT&T"], [h, v]], [/\bsie-(\w*)/i], [f, [g, "Siemens"], [h, v]], [/\b(rct\w+) b/i], [f, [g, "RCA"], [h, p]], [/\b(venue[\d ]{2,7}) b/i], [f, [g, "Dell"], [h, p]], [/\b(q(?:mv|ta)\w+) b/i], [f, [g, "Verizon"], [h, p]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [f, [g, "Barnes & Noble"], [h, p]], [/\b(tm\d{3}\w+) b/i], [f, [g, "NuVision"], [h, p]], [/\b(k88) b/i], [f, [g, "ZTE"], [h, p]], [/\b(nx\d{3}j) b/i], [f, [g, "ZTE"], [h, v]], [/\b(gen\d{3}) b.+49h/i], [f, [g, "Swiss"], [h, v]], [/\b(zur\d{3}) b/i], [f, [g, "Swiss"], [h, p]], [/\b((zeki)?tb.*\b) b/i], [f, [g, "Zeki"], [h, p]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[g, "Dragon Touch"], f, [h, p]], [/\b(ns-?\w{0,9}) b/i], [f, [g, "Insignia"], [h, p]], [/\b((nxa|next)-?\w{0,9}) b/i], [f, [g, "NextBook"], [h, p]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[g, "Voice"], f, [h, v]], [/\b(lvtel\-)?(v1[12]) b/i], [[g, "LvTel"], f, [h, v]], [/\b(ph-1) /i], [f, [g, "Essential"], [h, v]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [f, [g, "Envizen"], [h, p]], [/\b(trio[-\w\. ]+) b/i], [f, [g, "MachSpeed"], [h, p]], [/\btu_(1491) b/i], [f, [g, "Rotor"], [h, p]], [/(shield[\w ]+) b/i], [f, [g, "Nvidia"], [h, p]], [/(sprint) (\w+)/i], [g, f, [h, v]], [/(kin\.[onetw]{3})/i], [[f, /\./g, " "], [g, ne], [h, v]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [f, [g, X], [h, p]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [f, [g, X], [h, v]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [g, f, [h, E]], [/droid.+; (shield) bui/i], [f, [g, "Nvidia"], [h, E]], [/(playstation [345portablevi]+)/i], [f, [g, ue], [h, E]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [f, [g, ne], [h, E]], [/smart-tv.+(samsung)/i], [g, [h, C]], [/hbbtv.+maple;(\d+)/i], [[f, /^/, "SmartTV"], [g, ae], [h, C]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[g, ee], [h, C]], [/(apple) ?tv/i], [g, [f, "Apple TV"], [h, C]], [/crkey/i], [[f, "Chromecast"], [g, H], [h, C]], [/droid.+aft(\w)( bui|\))/i], [f, [g, P], [h, C]], [/\(dtv[\);].+(aquos)/i], [f, [g, "Sharp"], [h, C]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i], [[g, B], [f, B], [h, C]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[h, C]], [/((pebble))app/i], [g, f, [h, w]], [/droid.+; (glass) \d/i], [f, [g, H], [h, w]], [/droid.+; (wt63?0{2,3})\)/i], [f, [g, X], [h, w]], [/(quest( 2)?)/i], [f, [g, be], [h, w]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [g, [h, k]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [f, [h, v]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [f, [h, p]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[h, p]], [/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i], [[h, v]], [/(android[-\w\. ]{0,9});.+buil/i], [f, [g, "Generic"]]],
                    engine: [[/windows.+ edge\/([\w\.]+)/i], [b, [m, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [b, [m, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i], [m, b], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [b, m]],
                    os: [[/microsoft (windows) (vista|xp)/i], [m, b], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [m, [b, W, ie]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[m, "Windows"], [b, W, ie]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i], [[b, /_/g, "."], [m, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[m, "Mac OS"], [b, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86)/i], [b, m], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [m, b], [/\(bb(10);/i], [b, [m, q]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [b, [m, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [b, [m, "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [b, [m, "webOS"]], [/crkey\/([\d\.]+)/i], [b, [m, "Chromecast"]], [/(cros) [\w]+ ([\w\.]+\w)/i], [[m, "Chromium OS"], b], [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [m, b], [/(sunos) ?([\w\.\d]*)/i], [[m, "Solaris"], b], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i], [m, b]]
                }
                  , ge = function(N, j) {
                    if (typeof N === c && (j = N,
                    N = a),
                    !(this instanceof ge))
                        return new ge(N,j).getResult();
                    var D = N || (typeof s !== u && s.navigator && s.navigator.userAgent ? s.navigator.userAgent : "")
                      , Y = j ? function(G, _) {
                        var S = {};
                        for (var I in G)
                            _[I] && _[I].length % 2 == 0 ? S[I] = _[I].concat(G[I]) : S[I] = G[I];
                        return S
                    }(we, j) : we;
                    return this.getBrowser = function() {
                        var G, _ = {};
                        return _.name = a,
                        _.version = a,
                        re.call(_, D, Y.browser),
                        _.major = typeof (G = _.version) === d ? G.replace(/[^\d\.]/g, "").split(".")[0] : a,
                        _
                    }
                    ,
                    this.getCPU = function() {
                        var G = {};
                        return G.architecture = a,
                        re.call(G, D, Y.cpu),
                        G
                    }
                    ,
                    this.getDevice = function() {
                        var G = {};
                        return G.vendor = a,
                        G.model = a,
                        G.type = a,
                        re.call(G, D, Y.device),
                        G
                    }
                    ,
                    this.getEngine = function() {
                        var G = {};
                        return G.name = a,
                        G.version = a,
                        re.call(G, D, Y.engine),
                        G
                    }
                    ,
                    this.getOS = function() {
                        var G = {};
                        return G.name = a,
                        G.version = a,
                        re.call(G, D, Y.os),
                        G
                    }
                    ,
                    this.getResult = function() {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        }
                    }
                    ,
                    this.getUA = function() {
                        return D
                    }
                    ,
                    this.setUA = function(G) {
                        return D = typeof G === d && G.length > 255 ? B(G, 255) : G,
                        this
                    }
                    ,
                    this.setUA(D),
                    this
                };
                ge.VERSION = "0.7.30",
                ge.BROWSER = ke([m, b, "major"]),
                ge.CPU = ke([T]),
                ge.DEVICE = ke([f, g, h, E, v, C, p, w, k]),
                ge.ENGINE = ge.OS = ke([m, b]),
                typeof r !== u ? (typeof n !== u && n.exports && (r = n.exports = ge),
                r.UAParser = ge) : o(5) ? (i = (function() {
                    return ge
                }
                ).call(r, o, r, n)) === a || (n.exports = i) : typeof s !== u && (s.UAParser = ge);
                var x = typeof s !== u && (s.jQuery || s.Zepto);
                if (x && !x.ua) {
                    var y = new ge;
                    x.ua = y.getResult(),
                    x.ua.get = function() {
                        return y.getUA()
                    }
                    ,
                    x.ua.set = function(N) {
                        y.setUA(N);
                        var j = y.getResult();
                        for (var D in j)
                            x.ua[D] = j[D]
                    }
                }
            }
            )(typeof window == "object" ? window : this)
        }
        , function(n, r) {
            (function(o) {
                n.exports = o
            }
            ).call(this, {})
        }
        , function(n, r) {
            n.exports = function() {
                var o = ["monospace", "sans-serif", "serif"]
                  , i = document.getElementsByTagName("body")[0]
                  , s = document.createElement("span");
                s.style.fontSize = "72px",
                s.innerHTML = "mmmmmmmmmmlli";
                var a = {}
                  , l = {};
                for (var u in o)
                    s.style.fontFamily = o[u],
                    i.appendChild(s),
                    a[o[u]] = s.offsetWidth,
                    l[o[u]] = s.offsetHeight,
                    i.removeChild(s);
                this.detect = function(c) {
                    var d = !1;
                    for (var f in o) {
                        s.style.fontFamily = c + "," + o[f],
                        i.appendChild(s);
                        var m = s.offsetWidth != a[o[f]] || s.offsetHeight != l[o[f]];
                        i.removeChild(s),
                        d = d || m
                    }
                    return d
                }
            }
        }
        ])
    })
}
)(Sp);
var yL = Sp.exports
  , fu = {
    exports: {}
};
fu.exports;
(function(e) {
    var t = function() {
        var n = String.fromCharCode
          , r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
          , o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$"
          , i = {};
        function s(l, u) {
            if (!i[l]) {
                i[l] = {};
                for (var c = 0; c < l.length; c++)
                    i[l][l.charAt(c)] = c
            }
            return i[l][u]
        }
        var a = {
            compressToBase64: function(l) {
                if (l == null)
                    return "";
                var u = a._compress(l, 6, function(c) {
                    return r.charAt(c)
                });
                switch (u.length % 4) {
                default:
                case 0:
                    return u;
                case 1:
                    return u + "===";
                case 2:
                    return u + "==";
                case 3:
                    return u + "="
                }
            },
            decompressFromBase64: function(l) {
                return l == null ? "" : l == "" ? null : a._decompress(l.length, 32, function(u) {
                    return s(r, l.charAt(u))
                })
            },
            compressToUTF16: function(l) {
                return l == null ? "" : a._compress(l, 15, function(u) {
                    return n(u + 32)
                }) + " "
            },
            decompressFromUTF16: function(l) {
                return l == null ? "" : l == "" ? null : a._decompress(l.length, 16384, function(u) {
                    return l.charCodeAt(u) - 32
                })
            },
            compressToUint8Array: function(l) {
                for (var u = a.compress(l), c = new Uint8Array(u.length * 2), d = 0, f = u.length; d < f; d++) {
                    var m = u.charCodeAt(d);
                    c[d * 2] = m >>> 8,
                    c[d * 2 + 1] = m % 256
                }
                return c
            },
            decompressFromUint8Array: function(l) {
                if (l == null)
                    return a.decompress(l);
                for (var u = new Array(l.length / 2), c = 0, d = u.length; c < d; c++)
                    u[c] = l[c * 2] * 256 + l[c * 2 + 1];
                var f = [];
                return u.forEach(function(m) {
                    f.push(n(m))
                }),
                a.decompress(f.join(""))
            },
            compressToEncodedURIComponent: function(l) {
                return l == null ? "" : a._compress(l, 6, function(u) {
                    return o.charAt(u)
                })
            },
            decompressFromEncodedURIComponent: function(l) {
                return l == null ? "" : l == "" ? null : (l = l.replace(/ /g, "+"),
                a._decompress(l.length, 32, function(u) {
                    return s(o, l.charAt(u))
                }))
            },
            compress: function(l) {
                return a._compress(l, 16, function(u) {
                    return n(u)
                })
            },
            _compress: function(l, u, c) {
                if (l == null)
                    return "";
                var d, f, m = {}, h = {}, g = "", b = "", T = "", E = 2, v = 3, p = 2, C = [], w = 0, k = 0, P;
                for (P = 0; P < l.length; P += 1)
                    if (g = l.charAt(P),
                    Object.prototype.hasOwnProperty.call(m, g) || (m[g] = v++,
                    h[g] = !0),
                    b = T + g,
                    Object.prototype.hasOwnProperty.call(m, b))
                        T = b;
                    else {
                        if (Object.prototype.hasOwnProperty.call(h, T)) {
                            if (T.charCodeAt(0) < 256) {
                                for (d = 0; d < p; d++)
                                    w = w << 1,
                                    k == u - 1 ? (k = 0,
                                    C.push(c(w)),
                                    w = 0) : k++;
                                for (f = T.charCodeAt(0),
                                d = 0; d < 8; d++)
                                    w = w << 1 | f & 1,
                                    k == u - 1 ? (k = 0,
                                    C.push(c(w)),
                                    w = 0) : k++,
                                    f = f >> 1
                            } else {
                                for (f = 1,
                                d = 0; d < p; d++)
                                    w = w << 1 | f,
                                    k == u - 1 ? (k = 0,
                                    C.push(c(w)),
                                    w = 0) : k++,
                                    f = 0;
                                for (f = T.charCodeAt(0),
                                d = 0; d < 16; d++)
                                    w = w << 1 | f & 1,
                                    k == u - 1 ? (k = 0,
                                    C.push(c(w)),
                                    w = 0) : k++,
                                    f = f >> 1
                            }
                            E--,
                            E == 0 && (E = Math.pow(2, p),
                            p++),
                            delete h[T]
                        } else
                            for (f = m[T],
                            d = 0; d < p; d++)
                                w = w << 1 | f & 1,
                                k == u - 1 ? (k = 0,
                                C.push(c(w)),
                                w = 0) : k++,
                                f = f >> 1;
                        E--,
                        E == 0 && (E = Math.pow(2, p),
                        p++),
                        m[b] = v++,
                        T = String(g)
                    }
                if (T !== "") {
                    if (Object.prototype.hasOwnProperty.call(h, T)) {
                        if (T.charCodeAt(0) < 256) {
                            for (d = 0; d < p; d++)
                                w = w << 1,
                                k == u - 1 ? (k = 0,
                                C.push(c(w)),
                                w = 0) : k++;
                            for (f = T.charCodeAt(0),
                            d = 0; d < 8; d++)
                                w = w << 1 | f & 1,
                                k == u - 1 ? (k = 0,
                                C.push(c(w)),
                                w = 0) : k++,
                                f = f >> 1
                        } else {
                            for (f = 1,
                            d = 0; d < p; d++)
                                w = w << 1 | f,
                                k == u - 1 ? (k = 0,
                                C.push(c(w)),
                                w = 0) : k++,
                                f = 0;
                            for (f = T.charCodeAt(0),
                            d = 0; d < 16; d++)
                                w = w << 1 | f & 1,
                                k == u - 1 ? (k = 0,
                                C.push(c(w)),
                                w = 0) : k++,
                                f = f >> 1
                        }
                        E--,
                        E == 0 && (E = Math.pow(2, p),
                        p++),
                        delete h[T]
                    } else
                        for (f = m[T],
                        d = 0; d < p; d++)
                            w = w << 1 | f & 1,
                            k == u - 1 ? (k = 0,
                            C.push(c(w)),
                            w = 0) : k++,
                            f = f >> 1;
                    E--,
                    E == 0 && (E = Math.pow(2, p),
                    p++)
                }
                for (f = 2,
                d = 0; d < p; d++)
                    w = w << 1 | f & 1,
                    k == u - 1 ? (k = 0,
                    C.push(c(w)),
                    w = 0) : k++,
                    f = f >> 1;
                for (; ; )
                    if (w = w << 1,
                    k == u - 1) {
                        C.push(c(w));
                        break
                    } else
                        k++;
                return C.join("")
            },
            decompress: function(l) {
                return l == null ? "" : l == "" ? null : a._decompress(l.length, 32768, function(u) {
                    return l.charCodeAt(u)
                })
            },
            _decompress: function(l, u, c) {
                var d = [], f = 4, m = 4, h = 3, g = "", b = [], T, E, v, p, C, w, k, P = {
                    val: c(0),
                    position: u,
                    index: 1
                };
                for (T = 0; T < 3; T += 1)
                    d[T] = T;
                for (v = 0,
                C = Math.pow(2, 2),
                w = 1; w != C; )
                    p = P.val & P.position,
                    P.position >>= 1,
                    P.position == 0 && (P.position = u,
                    P.val = c(P.index++)),
                    v |= (p > 0 ? 1 : 0) * w,
                    w <<= 1;
                switch (v) {
                case 0:
                    for (v = 0,
                    C = Math.pow(2, 8),
                    w = 1; w != C; )
                        p = P.val & P.position,
                        P.position >>= 1,
                        P.position == 0 && (P.position = u,
                        P.val = c(P.index++)),
                        v |= (p > 0 ? 1 : 0) * w,
                        w <<= 1;
                    k = n(v);
                    break;
                case 1:
                    for (v = 0,
                    C = Math.pow(2, 16),
                    w = 1; w != C; )
                        p = P.val & P.position,
                        P.position >>= 1,
                        P.position == 0 && (P.position = u,
                        P.val = c(P.index++)),
                        v |= (p > 0 ? 1 : 0) * w,
                        w <<= 1;
                    k = n(v);
                    break;
                case 2:
                    return ""
                }
                for (d[3] = k,
                E = k,
                b.push(k); ; ) {
                    if (P.index > l)
                        return "";
                    for (v = 0,
                    C = Math.pow(2, h),
                    w = 1; w != C; )
                        p = P.val & P.position,
                        P.position >>= 1,
                        P.position == 0 && (P.position = u,
                        P.val = c(P.index++)),
                        v |= (p > 0 ? 1 : 0) * w,
                        w <<= 1;
                    switch (k = v) {
                    case 0:
                        for (v = 0,
                        C = Math.pow(2, 8),
                        w = 1; w != C; )
                            p = P.val & P.position,
                            P.position >>= 1,
                            P.position == 0 && (P.position = u,
                            P.val = c(P.index++)),
                            v |= (p > 0 ? 1 : 0) * w,
                            w <<= 1;
                        d[m++] = n(v),
                        k = m - 1,
                        f--;
                        break;
                    case 1:
                        for (v = 0,
                        C = Math.pow(2, 16),
                        w = 1; w != C; )
                            p = P.val & P.position,
                            P.position >>= 1,
                            P.position == 0 && (P.position = u,
                            P.val = c(P.index++)),
                            v |= (p > 0 ? 1 : 0) * w,
                            w <<= 1;
                        d[m++] = n(v),
                        k = m - 1,
                        f--;
                        break;
                    case 2:
                        return b.join("")
                    }
                    if (f == 0 && (f = Math.pow(2, h),
                    h++),
                    d[k])
                        g = d[k];
                    else if (k === m)
                        g = E + E.charAt(0);
                    else
                        return null;
                    b.push(g),
                    d[m++] = E + g.charAt(0),
                    f--,
                    E = g,
                    f == 0 && (f = Math.pow(2, h),
                    h++)
                }
            }
        };
        return a
    }();
    e != null ? e.exports = t : typeof angular < "u" && angular != null && angular.module("LZString", []).factory("LZString", function() {
        return t
    })
}
)(fu);
var Bk = fu.exports;
const wL = qk(Bk)
  , Xo = {
    name: String
};
function jk(e) {
    return O( () => ({
        type: "hidden",
        name: e.name,
        value: e.modelValue
    }))
}
function Is(e={}) {
    return (t, n, r) => {
        t[n](M("input", {
            class: "hidden" + (r || ""),
            ...e.value
        }))
    }
}
function Uk(e) {
    return O( () => e.name || e.for)
}
const du = {
    left: !0,
    right: !0,
    up: !0,
    down: !0,
    horizontal: !0,
    vertical: !0
}
  , Vk = Object.keys(du);
du.all = !0;
function Ki(e) {
    const t = {};
    for (const n of Vk)
        e[n] === !0 && (t[n] = !0);
    return Object.keys(t).length === 0 ? du : (t.horizontal === !0 ? t.left = t.right = !0 : t.left === !0 && t.right === !0 && (t.horizontal = !0),
    t.vertical === !0 ? t.up = t.down = !0 : t.up === !0 && t.down === !0 && (t.vertical = !0),
    t.horizontal === !0 && t.vertical === !0 && (t.all = !0),
    t)
}
const Hk = ["INPUT", "TEXTAREA"];
function Gi(e, t) {
    return t.event === void 0 && e.target !== void 0 && e.target.draggable !== !0 && typeof t.handler == "function" && Hk.includes(e.target.nodeName.toUpperCase()) === !1 && (e.qClonedBy === void 0 || e.qClonedBy.indexOf(t.uid) === -1)
}
function ga(e, t, n) {
    const r = Mn(e);
    let o, i = r.left - t.event.x, s = r.top - t.event.y, a = Math.abs(i), l = Math.abs(s);
    const u = t.direction;
    u.horizontal === !0 && u.vertical !== !0 ? o = i < 0 ? "left" : "right" : u.horizontal !== !0 && u.vertical === !0 ? o = s < 0 ? "up" : "down" : u.up === !0 && s < 0 ? (o = "up",
    a > l && (u.left === !0 && i < 0 ? o = "left" : u.right === !0 && i > 0 && (o = "right"))) : u.down === !0 && s > 0 ? (o = "down",
    a > l && (u.left === !0 && i < 0 ? o = "left" : u.right === !0 && i > 0 && (o = "right"))) : u.left === !0 && i < 0 ? (o = "left",
    a < l && (u.up === !0 && s < 0 ? o = "up" : u.down === !0 && s > 0 && (o = "down"))) : u.right === !0 && i > 0 && (o = "right",
    a < l && (u.up === !0 && s < 0 ? o = "up" : u.down === !0 && s > 0 && (o = "down")));
    let c = !1;
    if (o === void 0 && n === !1) {
        if (t.event.isFirst === !0 || t.event.lastDir === void 0)
            return {};
        o = t.event.lastDir,
        c = !0,
        o === "left" || o === "right" ? (r.left -= i,
        a = 0,
        i = 0) : (r.top -= s,
        l = 0,
        s = 0)
    }
    return {
        synthetic: c,
        payload: {
            evt: e,
            touch: t.event.mouse !== !0,
            mouse: t.event.mouse === !0,
            position: r,
            direction: o,
            isFirst: t.event.isFirst,
            isFinal: n === !0,
            duration: Date.now() - t.event.time,
            distance: {
                x: a,
                y: l
            },
            offset: {
                x: i,
                y: s
            },
            delta: {
                x: r.left - t.event.lastX,
                y: r.top - t.event.lastY
            }
        }
    }
}
let Wk = 0;
const zk = hs({
    name: "touch-pan",
    beforeMount(e, {value: t, modifiers: n}) {
        if (n.mouse !== !0 && Re.has.touch !== !0)
            return;
        function r(i, s) {
            n.mouse === !0 && s === !0 ? Xe(i) : (n.stop === !0 && tr(i),
            n.prevent === !0 && It(i))
        }
        const o = {
            uid: "qvtp_" + Wk++,
            handler: t,
            modifiers: n,
            direction: Ki(n),
            noop: ur,
            mouseStart(i) {
                Gi(i, o) && Xm(i) && (qt(o, "temp", [[document, "mousemove", "move", "notPassiveCapture"], [document, "mouseup", "end", "passiveCapture"]]),
                o.start(i, !0))
            },
            touchStart(i) {
                if (Gi(i, o)) {
                    const s = i.target;
                    qt(o, "temp", [[s, "touchmove", "move", "notPassiveCapture"], [s, "touchcancel", "end", "passiveCapture"], [s, "touchend", "end", "passiveCapture"]]),
                    o.start(i)
                }
            },
            start(i, s) {
                if (Re.is.firefox === !0 && Ir(e, !0),
                o.lastEvt = i,
                s === !0 || n.stop === !0) {
                    if (o.direction.all !== !0 && (s !== !0 || o.modifiers.mouseAllDir !== !0 && o.modifiers.mousealldir !== !0)) {
                        const u = i.type.indexOf("mouse") !== -1 ? new MouseEvent(i.type,i) : new TouchEvent(i.type,i);
                        i.defaultPrevented === !0 && It(u),
                        i.cancelBubble === !0 && tr(u),
                        Object.assign(u, {
                            qKeyEvent: i.qKeyEvent,
                            qClickOutside: i.qClickOutside,
                            qAnchorHandled: i.qAnchorHandled,
                            qClonedBy: i.qClonedBy === void 0 ? [o.uid] : i.qClonedBy.concat(o.uid)
                        }),
                        o.initialEvent = {
                            target: i.target,
                            event: u
                        }
                    }
                    tr(i)
                }
                const {left: a, top: l} = Mn(i);
                o.event = {
                    x: a,
                    y: l,
                    time: Date.now(),
                    mouse: s === !0,
                    detected: !1,
                    isFirst: !0,
                    isFinal: !1,
                    lastX: a,
                    lastY: l
                }
            },
            move(i) {
                if (o.event === void 0)
                    return;
                const s = Mn(i)
                  , a = s.left - o.event.x
                  , l = s.top - o.event.y;
                if (a === 0 && l === 0)
                    return;
                o.lastEvt = i;
                const u = o.event.mouse === !0
                  , c = () => {
                    r(i, u);
                    let m;
                    n.preserveCursor !== !0 && n.preservecursor !== !0 && (m = document.documentElement.style.cursor || "",
                    document.documentElement.style.cursor = "grabbing"),
                    u === !0 && document.body.classList.add("no-pointer-events--children"),
                    document.body.classList.add("non-selectable"),
                    Gl(),
                    o.styleCleanup = h => {
                        if (o.styleCleanup = void 0,
                        m !== void 0 && (document.documentElement.style.cursor = m),
                        document.body.classList.remove("non-selectable"),
                        u === !0) {
                            const g = () => {
                                document.body.classList.remove("no-pointer-events--children")
                            }
                            ;
                            h !== void 0 ? setTimeout( () => {
                                g(),
                                h()
                            }
                            , 50) : g()
                        } else
                            h !== void 0 && h()
                    }
                }
                ;
                if (o.event.detected === !0) {
                    o.event.isFirst !== !0 && r(i, o.event.mouse);
                    const {payload: m, synthetic: h} = ga(i, o, !1);
                    m !== void 0 && (o.handler(m) === !1 ? o.end(i) : (o.styleCleanup === void 0 && o.event.isFirst === !0 && c(),
                    o.event.lastX = m.position.left,
                    o.event.lastY = m.position.top,
                    o.event.lastDir = h === !0 ? void 0 : m.direction,
                    o.event.isFirst = !1));
                    return
                }
                if (o.direction.all === !0 || u === !0 && (o.modifiers.mouseAllDir === !0 || o.modifiers.mousealldir === !0)) {
                    c(),
                    o.event.detected = !0,
                    o.move(i);
                    return
                }
                const d = Math.abs(a)
                  , f = Math.abs(l);
                d !== f && (o.direction.horizontal === !0 && d > f || o.direction.vertical === !0 && d < f || o.direction.up === !0 && d < f && l < 0 || o.direction.down === !0 && d < f && l > 0 || o.direction.left === !0 && d > f && a < 0 || o.direction.right === !0 && d > f && a > 0 ? (o.event.detected = !0,
                o.move(i)) : o.end(i, !0))
            },
            end(i, s) {
                if (o.event !== void 0) {
                    if (On(o, "temp"),
                    Re.is.firefox === !0 && Ir(e, !1),
                    s === !0)
                        o.styleCleanup !== void 0 && o.styleCleanup(),
                        o.event.detected !== !0 && o.initialEvent !== void 0 && o.initialEvent.target.dispatchEvent(o.initialEvent.event);
                    else if (o.event.detected === !0) {
                        o.event.isFirst === !0 && o.handler(ga(i === void 0 ? o.lastEvt : i, o).payload);
                        const {payload: a} = ga(i === void 0 ? o.lastEvt : i, o, !0)
                          , l = () => {
                            o.handler(a)
                        }
                        ;
                        o.styleCleanup !== void 0 ? o.styleCleanup(l) : l()
                    }
                    o.event = void 0,
                    o.initialEvent = void 0,
                    o.lastEvt = void 0
                }
            }
        };
        if (e.__qtouchpan = o,
        n.mouse === !0) {
            const i = n.mouseCapture === !0 || n.mousecapture === !0 ? "Capture" : "";
            qt(o, "main", [[e, "mousedown", "mouseStart", `passive${i}`]])
        }
        Re.has.touch === !0 && qt(o, "main", [[e, "touchstart", "touchStart", `passive${n.capture === !0 ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]])
    },
    updated(e, t) {
        const n = e.__qtouchpan;
        n !== void 0 && (t.oldValue !== t.value && (typeof value != "function" && n.end(),
        n.handler = t.value),
        n.direction = Ki(t.modifiers))
    },
    beforeUnmount(e) {
        const t = e.__qtouchpan;
        t !== void 0 && (t.event !== void 0 && t.end(),
        On(t, "main"),
        On(t, "temp"),
        Re.is.firefox === !0 && Ir(e, !1),
        t.styleCleanup !== void 0 && t.styleCleanup(),
        delete e.__qtouchpan)
    }
});
function xr(e, t, n) {
    return n <= t ? t : Math.min(n, Math.max(t, e))
}
const hd = "q-slider__marker-labels"
  , Kk = e => ({
    value: e
})
  , Gk = ({marker: e}) => M("div", {
    key: e.value,
    style: e.style,
    class: e.classes
}, e.label)
  , Cp = [34, 37, 40, 33, 39, 38]
  , Yk = {
    ...zt,
    ...Xo,
    min: {
        type: Number,
        default: 0
    },
    max: {
        type: Number,
        default: 100
    },
    innerMin: Number,
    innerMax: Number,
    step: {
        type: Number,
        default: 1,
        validator: e => e >= 0
    },
    snap: Boolean,
    vertical: Boolean,
    reverse: Boolean,
    color: String,
    markerLabelsClass: String,
    label: Boolean,
    labelColor: String,
    labelTextColor: String,
    labelAlways: Boolean,
    switchLabelSide: Boolean,
    markers: [Boolean, Number],
    markerLabels: [Boolean, Array, Object, Function],
    switchMarkerLabelsSide: Boolean,
    trackImg: String,
    trackColor: String,
    innerTrackImg: String,
    innerTrackColor: String,
    selectionColor: String,
    selectionImg: String,
    thumbSize: {
        type: String,
        default: "20px"
    },
    trackSize: {
        type: String,
        default: "4px"
    },
    disable: Boolean,
    readonly: Boolean,
    dense: Boolean,
    tabindex: [String, Number],
    thumbColor: String,
    thumbPath: {
        type: String,
        default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0"
    }
}
  , Xk = ["pan", "update:modelValue", "change"];
function Qk({updateValue: e, updatePosition: t, getDragging: n, formAttrs: r}) {
    const {props: o, emit: i, slots: s, proxy: {$q: a}} = Te()
      , l = Kt(o, a)
      , u = Is(r)
      , c = le(!1)
      , d = le(!1)
      , f = le(!1)
      , m = le(!1)
      , h = O( () => o.vertical === !0 ? "--v" : "--h")
      , g = O( () => "-" + (o.switchLabelSide === !0 ? "switched" : "standard"))
      , b = O( () => o.vertical === !0 ? o.reverse === !0 : o.reverse !== (a.lang.rtl === !0))
      , T = O( () => isNaN(o.innerMin) === !0 || o.innerMin < o.min ? o.min : o.innerMin)
      , E = O( () => isNaN(o.innerMax) === !0 || o.innerMax > o.max ? o.max : o.innerMax)
      , v = O( () => o.disable !== !0 && o.readonly !== !0 && T.value < E.value)
      , p = O( () => {
        if (o.step === 0)
            return pe => pe;
        const J = (String(o.step).trim().split(".")[1] || "").length;
        return pe => parseFloat(pe.toFixed(J))
    }
    )
      , C = O( () => o.step === 0 ? 1 : o.step)
      , w = O( () => v.value === !0 ? o.tabindex || 0 : -1)
      , k = O( () => o.max - o.min)
      , P = O( () => E.value - T.value)
      , A = O( () => we(T.value))
      , R = O( () => we(E.value))
      , q = O( () => o.vertical === !0 ? b.value === !0 ? "bottom" : "top" : b.value === !0 ? "right" : "left")
      , L = O( () => o.vertical === !0 ? "height" : "width")
      , H = O( () => o.vertical === !0 ? "width" : "height")
      , F = O( () => o.vertical === !0 ? "vertical" : "horizontal")
      , ee = O( () => {
        const J = {
            role: "slider",
            "aria-valuemin": T.value,
            "aria-valuemax": E.value,
            "aria-orientation": F.value,
            "data-step": o.step
        };
        return o.disable === !0 ? J["aria-disabled"] = "true" : o.readonly === !0 && (J["aria-readonly"] = "true"),
        J
    }
    )
      , ne = O( () => `q-slider q-slider${h.value} q-slider--${c.value === !0 ? "" : "in"}active inline no-wrap ` + (o.vertical === !0 ? "row" : "column") + (o.disable === !0 ? " disabled" : " q-slider--enabled" + (v.value === !0 ? " q-slider--editable" : "")) + (f.value === "both" ? " q-slider--focus" : "") + (o.label || o.labelAlways === !0 ? " q-slider--label" : "") + (o.labelAlways === !0 ? " q-slider--label-always" : "") + (l.value === !0 ? " q-slider--dark" : "") + (o.dense === !0 ? " q-slider--dense q-slider--dense" + h.value : ""));
    function z(J) {
        const pe = "q-slider__" + J;
        return `${pe} ${pe}${h.value} ${pe}${h.value}${g.value}`
    }
    function K(J) {
        const pe = "q-slider__" + J;
        return `${pe} ${pe}${h.value}`
    }
    const ae = O( () => {
        const J = o.selectionColor || o.color;
        return "q-slider__selection absolute" + (J !== void 0 ? ` text-${J}` : "")
    }
    )
      , ue = O( () => K("markers") + " absolute overflow-hidden")
      , ce = O( () => K("track-container"))
      , X = O( () => z("pin"))
      , be = O( () => z("label"))
      , ke = O( () => z("text-container"))
      , Ae = O( () => z("marker-labels-container") + (o.markerLabelsClass !== void 0 ? ` ${o.markerLabelsClass}` : ""))
      , oe = O( () => "q-slider__track relative-position no-outline" + (o.trackColor !== void 0 ? ` bg-${o.trackColor}` : ""))
      , B = O( () => {
        const J = {
            [H.value]: o.trackSize
        };
        return o.trackImg !== void 0 && (J.backgroundImage = `url(${o.trackImg}) !important`),
        J
    }
    )
      , re = O( () => "q-slider__inner absolute" + (o.innerTrackColor !== void 0 ? ` bg-${o.innerTrackColor}` : ""))
      , W = O( () => {
        const J = R.value - A.value
          , pe = {
            [q.value]: `${100 * A.value}%`,
            [L.value]: J === 0 ? "2px" : `${100 * J}%`
        };
        return o.innerTrackImg !== void 0 && (pe.backgroundImage = `url(${o.innerTrackImg}) !important`),
        pe
    }
    );
    function ie(J) {
        const {min: pe, max: Me, step: xe} = o;
        let Fe = pe + J * (Me - pe);
        if (xe > 0) {
            const $t = (Fe - T.value) % xe;
            Fe += (Math.abs($t) >= xe / 2 ? ($t < 0 ? -1 : 1) * xe : 0) - $t
        }
        return Fe = p.value(Fe),
        xr(Fe, T.value, E.value)
    }
    function we(J) {
        return k.value === 0 ? 0 : (J - o.min) / k.value
    }
    function ge(J, pe) {
        const Me = Mn(J)
          , xe = o.vertical === !0 ? xr((Me.top - pe.top) / pe.height, 0, 1) : xr((Me.left - pe.left) / pe.width, 0, 1);
        return xr(b.value === !0 ? 1 - xe : xe, A.value, R.value)
    }
    const x = O( () => ih(o.markers) === !0 ? o.markers : C.value)
      , y = O( () => {
        const J = []
          , pe = x.value
          , Me = o.max;
        let xe = o.min;
        do
            J.push(xe),
            xe += pe;
        while (xe < Me);
        return J.push(Me),
        J
    }
    )
      , N = O( () => {
        const J = ` ${hd}${h.value}-`;
        return hd + `${J}${o.switchMarkerLabelsSide === !0 ? "switched" : "standard"}${J}${b.value === !0 ? "rtl" : "ltr"}`
    }
    )
      , j = O( () => o.markerLabels === !1 ? null : G(o.markerLabels).map( (J, pe) => ({
        index: pe,
        value: J.value,
        label: J.label || J.value,
        classes: N.value + (J.classes !== void 0 ? " " + J.classes : ""),
        style: {
            ..._(J.value),
            ...J.style || {}
        }
    })))
      , D = O( () => ({
        markerList: j.value,
        markerMap: S.value,
        classes: N.value,
        getStyle: _
    }))
      , Y = O( () => {
        const J = P.value === 0 ? "2px" : 100 * x.value / P.value;
        return {
            ...W.value,
            backgroundSize: o.vertical === !0 ? `2px ${J}%` : `${J}% 2px`
        }
    }
    );
    function G(J) {
        if (J === !1)
            return null;
        if (J === !0)
            return y.value.map(Kk);
        if (typeof J == "function")
            return y.value.map(Me => {
                const xe = J(Me);
                return Pn(xe) === !0 ? {
                    ...xe,
                    value: Me
                } : {
                    value: Me,
                    label: xe
                }
            }
            );
        const pe = ({value: Me}) => Me >= o.min && Me <= o.max;
        return Array.isArray(J) === !0 ? J.map(Me => Pn(Me) === !0 ? Me : {
            value: Me
        }).filter(pe) : Object.keys(J).map(Me => {
            const xe = J[Me]
              , Fe = Number(Me);
            return Pn(xe) === !0 ? {
                ...xe,
                value: Fe
            } : {
                value: Fe,
                label: xe
            }
        }
        ).filter(pe)
    }
    function _(J) {
        return {
            [q.value]: `${100 * (J - o.min) / k.value}%`
        }
    }
    const S = O( () => {
        if (o.markerLabels === !1)
            return null;
        const J = {};
        return j.value.forEach(pe => {
            J[pe.value] = pe
        }
        ),
        J
    }
    );
    function I() {
        if (s["marker-label-group"] !== void 0)
            return s["marker-label-group"](D.value);
        const J = s["marker-label"] || Gk;
        return j.value.map(pe => J({
            marker: pe,
            ...D.value
        }))
    }
    const Q = O( () => [[zk, te, void 0, {
        [F.value]: !0,
        prevent: !0,
        stop: !0,
        mouse: !0,
        mouseAllDir: !0
    }]]);
    function te(J) {
        J.isFinal === !0 ? (m.value !== void 0 && (t(J.evt),
        J.touch === !0 && e(!0),
        m.value = void 0,
        i("pan", "end")),
        c.value = !1,
        f.value = !1) : J.isFirst === !0 ? (m.value = n(J.evt),
        t(J.evt),
        e(),
        c.value = !0,
        i("pan", "start")) : (t(J.evt),
        e())
    }
    function Z() {
        f.value = !1
    }
    function $(J) {
        t(J, n(J)),
        e(),
        d.value = !0,
        c.value = !0,
        document.addEventListener("mouseup", U, !0)
    }
    function U() {
        d.value = !1,
        c.value = !1,
        e(!0),
        Z(),
        document.removeEventListener("mouseup", U, !0)
    }
    function fe(J) {
        t(J, n(J)),
        e(!0)
    }
    function me(J) {
        Cp.includes(J.keyCode) && e(!0)
    }
    function Ve(J) {
        if (o.vertical === !0)
            return null;
        const pe = a.lang.rtl !== o.reverse ? 1 - J : J;
        return {
            transform: `translateX(calc(${2 * pe - 1} * ${o.thumbSize} / 2 + ${50 - 100 * pe}%))`
        }
    }
    function We(J) {
        const pe = O( () => d.value === !1 && (f.value === J.focusValue || f.value === "both") ? " q-slider--focus" : "")
          , Me = O( () => `q-slider__thumb q-slider__thumb${h.value} q-slider__thumb${h.value}-${b.value === !0 ? "rtl" : "ltr"} absolute non-selectable` + pe.value + (J.thumbColor.value !== void 0 ? ` text-${J.thumbColor.value}` : ""))
          , xe = O( () => ({
            width: o.thumbSize,
            height: o.thumbSize,
            [q.value]: `${100 * J.ratio.value}%`,
            zIndex: f.value === J.focusValue ? 2 : void 0
        }))
          , Fe = O( () => J.labelColor.value !== void 0 ? ` text-${J.labelColor.value}` : "")
          , $t = O( () => Ve(J.ratio.value))
          , Ns = O( () => "q-slider__text" + (J.labelTextColor.value !== void 0 ? ` text-${J.labelTextColor.value}` : ""));
        return () => {
            const Ms = [M("svg", {
                class: "q-slider__thumb-shape absolute-full",
                viewBox: "0 0 20 20",
                "aria-hidden": "true"
            }, [M("path", {
                d: o.thumbPath
            })]), M("div", {
                class: "q-slider__focus-ring fit"
            })];
            return (o.label === !0 || o.labelAlways === !0) && (Ms.push(M("div", {
                class: X.value + " absolute fit no-pointer-events" + Fe.value
            }, [M("div", {
                class: be.value,
                style: {
                    minWidth: o.thumbSize
                }
            }, [M("div", {
                class: ke.value,
                style: $t.value
            }, [M("span", {
                class: Ns.value
            }, J.label.value)])])])),
            o.name !== void 0 && o.disable !== !0 && u(Ms, "push")),
            M("div", {
                class: Me.value,
                style: xe.value,
                ...J.getNodeData()
            }, Ms)
        }
    }
    function Ge(J, pe, Me, xe) {
        const Fe = [];
        o.innerTrackColor !== "transparent" && Fe.push(M("div", {
            key: "inner",
            class: re.value,
            style: W.value
        })),
        o.selectionColor !== "transparent" && Fe.push(M("div", {
            key: "selection",
            class: ae.value,
            style: J.value
        })),
        o.markers !== !1 && Fe.push(M("div", {
            key: "marker",
            class: ue.value,
            style: Y.value
        })),
        xe(Fe);
        const $t = [ah("div", {
            key: "trackC",
            class: ce.value,
            tabindex: pe.value,
            ...Me.value
        }, [M("div", {
            class: oe.value,
            style: B.value
        }, Fe)], "slide", v.value, () => Q.value)];
        if (o.markerLabels !== !1) {
            const Ns = o.switchMarkerLabelsSide === !0 ? "unshift" : "push";
            $t[Ns](M("div", {
                key: "markerL",
                class: Ae.value
            }, I()))
        }
        return $t
    }
    return Qe( () => {
        document.removeEventListener("mouseup", U, !0)
    }
    ),
    {
        state: {
            active: c,
            focus: f,
            preventFocus: d,
            dragging: m,
            editable: v,
            classes: ne,
            tabindex: w,
            attributes: ee,
            roundValueFn: p,
            keyStep: C,
            trackLen: k,
            innerMin: T,
            innerMinRatio: A,
            innerMax: E,
            innerMaxRatio: R,
            positionProp: q,
            sizeProp: L,
            isReversed: b
        },
        methods: {
            onActivate: $,
            onMobileClick: fe,
            onBlur: Z,
            onKeyup: me,
            getContent: Ge,
            getThumbRenderFn: We,
            convertRatioToModel: ie,
            convertModelToRatio: we,
            getDraggingRatio: ge
        }
    }
}
const Jk = () => ({})
  , EL = Ne({
    name: "QSlider",
    props: {
        ...Yk,
        modelValue: {
            required: !0,
            default: null,
            validator: e => typeof e == "number" || e === null
        },
        labelValue: [String, Number]
    },
    emits: Xk,
    setup(e, {emit: t}) {
        const {proxy: {$q: n}} = Te()
          , {state: r, methods: o} = Qk({
            updateValue: h,
            updatePosition: b,
            getDragging: g,
            formAttrs: jk(e)
        })
          , i = le(null)
          , s = le(0)
          , a = le(0);
        function l() {
            a.value = e.modelValue === null ? r.innerMin.value : xr(e.modelValue, r.innerMin.value, r.innerMax.value)
        }
        ve( () => `${e.modelValue}|${r.innerMin.value}|${r.innerMax.value}`, l),
        l();
        const u = O( () => o.convertModelToRatio(a.value))
          , c = O( () => r.active.value === !0 ? s.value : u.value)
          , d = O( () => {
            const v = {
                [r.positionProp.value]: `${100 * r.innerMinRatio.value}%`,
                [r.sizeProp.value]: `${100 * (c.value - r.innerMinRatio.value)}%`
            };
            return e.selectionImg !== void 0 && (v.backgroundImage = `url(${e.selectionImg}) !important`),
            v
        }
        )
          , f = o.getThumbRenderFn({
            focusValue: !0,
            getNodeData: Jk,
            ratio: c,
            label: O( () => e.labelValue !== void 0 ? e.labelValue : a.value),
            thumbColor: O( () => e.thumbColor || e.color),
            labelColor: O( () => e.labelColor),
            labelTextColor: O( () => e.labelTextColor)
        })
          , m = O( () => r.editable.value !== !0 ? {} : n.platform.is.mobile === !0 ? {
            onClick: o.onMobileClick
        } : {
            onMousedown: o.onActivate,
            onFocus: T,
            onBlur: o.onBlur,
            onKeydown: E,
            onKeyup: o.onKeyup
        });
        function h(v) {
            a.value !== e.modelValue && t("update:modelValue", a.value),
            v === !0 && t("change", a.value)
        }
        function g() {
            return i.value.getBoundingClientRect()
        }
        function b(v, p=r.dragging.value) {
            const C = o.getDraggingRatio(v, p);
            a.value = o.convertRatioToModel(C),
            s.value = e.snap !== !0 || e.step === 0 ? C : o.convertModelToRatio(a.value)
        }
        function T() {
            r.focus.value = !0
        }
        function E(v) {
            if (!Cp.includes(v.keyCode))
                return;
            Xe(v);
            const p = ([34, 33].includes(v.keyCode) ? 10 : 1) * r.keyStep.value
              , C = ([34, 37, 40].includes(v.keyCode) ? -1 : 1) * (r.isReversed.value === !0 ? -1 : 1) * (e.vertical === !0 ? -1 : 1) * p;
            a.value = xr(r.roundValueFn.value(a.value + C), r.innerMin.value, r.innerMax.value),
            h()
        }
        return () => {
            const v = o.getContent(d, r.tabindex, m, p => {
                p.push(f())
            }
            );
            return M("div", {
                ref: i,
                class: r.classes.value + (e.modelValue === null ? " q-slider--no-value" : ""),
                ...r.attributes.value,
                "aria-valuenow": e.modelValue
            }, v)
        }
    }
});
let pa, ci = 0;
const it = new Array(256);
for (let e = 0; e < 256; e++)
    it[e] = (e + 256).toString(16).substring(1);
const Zk = ( () => {
    const e = typeof crypto < "u" ? crypto : typeof window < "u" ? window.crypto || window.msCrypto : void 0;
    if (e !== void 0) {
        if (e.randomBytes !== void 0)
            return e.randomBytes;
        if (e.getRandomValues !== void 0)
            return t => {
                const n = new Uint8Array(t);
                return e.getRandomValues(n),
                n
            }
    }
    return t => {
        const n = [];
        for (let r = t; r > 0; r--)
            n.push(Math.floor(Math.random() * 256));
        return n
    }
}
)()
  , gd = 4096;
function Yi() {
    (pa === void 0 || ci + 16 > gd) && (ci = 0,
    pa = Zk(gd));
    const e = Array.prototype.slice.call(pa, ci, ci += 16);
    return e[6] = e[6] & 15 | 64,
    e[8] = e[8] & 63 | 128,
    it[e[0]] + it[e[1]] + it[e[2]] + it[e[3]] + "-" + it[e[4]] + it[e[5]] + "-" + it[e[6]] + it[e[7]] + "-" + it[e[8]] + it[e[9]] + "-" + it[e[10]] + it[e[11]] + it[e[12]] + it[e[13]] + it[e[14]] + it[e[15]]
}
function eA(e) {
    return e ?? null
}
function pd(e, t) {
    return e ?? (t === !0 ? `f_${Yi()}` : null)
}
function Tp({getValue: e, required: t=!0}={}) {
    if (Nn.value === !0) {
        const n = le(e !== void 0 ? eA(e()) : null);
        return t === !0 && n.value === null && Tt( () => {
            n.value = `f_${Yi()}`
        }
        ),
        e !== void 0 && ve(e, r => {
            n.value = pd(r, t)
        }
        ),
        n
    }
    return e !== void 0 ? O( () => pd(e(), t)) : le(`f_${Yi()}`)
}
const vd = /^on[A-Z]/;
function tA() {
    const {attrs: e, vnode: t} = Te()
      , n = {
        listeners: le({}),
        attributes: le({})
    };
    function r() {
        const o = {}
          , i = {};
        for (const s in e)
            s !== "class" && s !== "style" && vd.test(s) === !1 && (o[s] = e[s]);
        for (const s in t.props)
            vd.test(s) === !0 && (i[s] = t.props[s]);
        n.attributes.value = o,
        n.listeners.value = i
    }
    return gm(r),
    r(),
    n
}
function nA({validate: e, resetValidation: t, requiresQForm: n}) {
    const r = yt(L_, !1);
    if (r !== !1) {
        const {props: o, proxy: i} = Te();
        Object.assign(i, {
            validate: e,
            resetValidation: t
        }),
        ve( () => o.disable, s => {
            s === !0 ? (typeof t == "function" && t(),
            r.unbindComponent(i)) : r.bindComponent(i)
        }
        ),
        Tt( () => {
            o.disable !== !0 && r.bindComponent(i)
        }
        ),
        Qe( () => {
            o.disable !== !0 && r.unbindComponent(i)
        }
        )
    } else
        n === !0 && console.error("Parent QForm not found on useFormChild()!")
}
const bd = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/
  , _d = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/
  , yd = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/
  , fi = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/
  , di = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/
  , va = {
    date: e => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),
    time: e => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),
    fulltime: e => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),
    timeOrFulltime: e => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),
    email: e => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),
    hexColor: e => bd.test(e),
    hexaColor: e => _d.test(e),
    hexOrHexaColor: e => yd.test(e),
    rgbColor: e => fi.test(e),
    rgbaColor: e => di.test(e),
    rgbOrRgbaColor: e => fi.test(e) || di.test(e),
    hexOrRgbColor: e => bd.test(e) || fi.test(e),
    hexaOrRgbaColor: e => _d.test(e) || di.test(e),
    anyColor: e => yd.test(e) || fi.test(e) || di.test(e)
}
  , rA = [!0, !1, "ondemand"]
  , oA = {
    modelValue: {},
    error: {
        type: Boolean,
        default: null
    },
    errorMessage: String,
    noErrorIcon: Boolean,
    rules: Array,
    reactiveRules: Boolean,
    lazyRules: {
        type: [Boolean, String],
        default: !1,
        validator: e => rA.includes(e)
    }
};
function iA(e, t) {
    const {props: n, proxy: r} = Te()
      , o = le(!1)
      , i = le(null)
      , s = le(!1);
    nA({
        validate: g,
        resetValidation: h
    });
    let a = 0, l;
    const u = O( () => n.rules !== void 0 && n.rules !== null && n.rules.length !== 0)
      , c = O( () => n.disable !== !0 && u.value === !0 && t.value === !1)
      , d = O( () => n.error === !0 || o.value === !0)
      , f = O( () => typeof n.errorMessage == "string" && n.errorMessage.length !== 0 ? n.errorMessage : i.value);
    ve( () => n.modelValue, () => {
        s.value = !0,
        c.value === !0 && n.lazyRules === !1 && b()
    }
    );
    function m() {
        n.lazyRules !== "ondemand" && c.value === !0 && s.value === !0 && b()
    }
    ve( () => n.reactiveRules, T => {
        T === !0 ? l === void 0 && (l = ve( () => n.rules, m, {
            immediate: !0,
            deep: !0
        })) : l !== void 0 && (l(),
        l = void 0)
    }
    , {
        immediate: !0
    }),
    ve( () => n.lazyRules, m),
    ve(e, T => {
        T === !0 ? s.value = !0 : c.value === !0 && n.lazyRules !== "ondemand" && b()
    }
    );
    function h() {
        a++,
        t.value = !1,
        s.value = !1,
        o.value = !1,
        i.value = null,
        b.cancel()
    }
    function g(T=n.modelValue) {
        if (n.disable === !0 || u.value === !1)
            return !0;
        const E = ++a
          , v = t.value !== !0 ? () => {
            s.value = !0
        }
        : () => {}
          , p = (w, k) => {
            w === !0 && v(),
            o.value = w,
            i.value = k || null,
            t.value = !1
        }
          , C = [];
        for (let w = 0; w < n.rules.length; w++) {
            const k = n.rules[w];
            let P;
            if (typeof k == "function" ? P = k(T, va) : typeof k == "string" && va[k] !== void 0 && (P = va[k](T)),
            P === !1 || typeof P == "string")
                return p(!0, P),
                !1;
            P !== !0 && P !== void 0 && C.push(P)
        }
        return C.length === 0 ? (p(!1),
        !0) : (t.value = !0,
        Promise.all(C).then(w => {
            if (w === void 0 || Array.isArray(w) === !1 || w.length === 0)
                return E === a && p(!1),
                !0;
            const k = w.find(P => P === !1 || typeof P == "string");
            return E === a && p(k !== void 0, k),
            k === void 0
        }
        , w => (E === a && (console.error(w),
        p(!0)),
        !1)))
    }
    const b = Qm(g, 0);
    return Qe( () => {
        l !== void 0 && l(),
        b.cancel()
    }
    ),
    Object.assign(r, {
        resetValidation: h,
        validate: g
    }),
    Yr(r, "hasError", () => d.value),
    {
        isDirtyModel: s,
        hasRules: u,
        hasError: d,
        errorMessage: f,
        validate: g,
        resetValidation: h
    }
}
function ul(e) {
    return e != null && ("" + e).length !== 0
}
const sA = {
    ...zt,
    ...oA,
    label: String,
    stackLabel: Boolean,
    hint: String,
    hideHint: Boolean,
    prefix: String,
    suffix: String,
    labelColor: String,
    color: String,
    bgColor: String,
    filled: Boolean,
    outlined: Boolean,
    borderless: Boolean,
    standout: [Boolean, String],
    square: Boolean,
    loading: Boolean,
    labelSlot: Boolean,
    bottomSlots: Boolean,
    hideBottomSpace: Boolean,
    rounded: Boolean,
    dense: Boolean,
    itemAligned: Boolean,
    counter: Boolean,
    clearable: Boolean,
    clearIcon: String,
    disable: Boolean,
    readonly: Boolean,
    autofocus: Boolean,
    for: String
}
  , aA = {
    ...sA,
    maxlength: [Number, String]
}
  , lA = ["update:modelValue", "clear", "focus", "blur"];
function uA({requiredForAttr: e=!0, tagProp: t, changeEvent: n=!1}={}) {
    const {props: r, proxy: o} = Te()
      , i = Kt(r, o.$q)
      , s = Tp({
        required: e,
        getValue: () => r.for
    });
    return {
        requiredForAttr: e,
        changeEvent: n,
        tag: t === !0 ? O( () => r.tag) : {
            value: "label"
        },
        isDark: i,
        editable: O( () => r.disable !== !0 && r.readonly !== !0),
        innerLoading: le(!1),
        focused: le(!1),
        hasPopupOpen: !1,
        splitAttrs: tA(),
        targetUid: s,
        rootRef: le(null),
        targetRef: le(null),
        controlRef: le(null)
    }
}
function cA(e) {
    const {props: t, emit: n, slots: r, attrs: o, proxy: i} = Te()
      , {$q: s} = i;
    let a = null;
    e.hasValue === void 0 && (e.hasValue = O( () => ul(t.modelValue))),
    e.emitValue === void 0 && (e.emitValue = K => {
        n("update:modelValue", K)
    }
    ),
    e.controlEvents === void 0 && (e.controlEvents = {
        onFocusin: A,
        onFocusout: R
    }),
    Object.assign(e, {
        clearValue: q,
        onControlFocusin: A,
        onControlFocusout: R,
        focus: k
    }),
    e.computedCounter === void 0 && (e.computedCounter = O( () => {
        if (t.counter !== !1) {
            const K = typeof t.modelValue == "string" || typeof t.modelValue == "number" ? ("" + t.modelValue).length : Array.isArray(t.modelValue) === !0 ? t.modelValue.length : 0
              , ae = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
            return K + (ae !== void 0 ? " / " + ae : "")
        }
    }
    ));
    const {isDirtyModel: l, hasRules: u, hasError: c, errorMessage: d, resetValidation: f} = iA(e.focused, e.innerLoading)
      , m = e.floatingLabel !== void 0 ? O( () => t.stackLabel === !0 || e.focused.value === !0 || e.floatingLabel.value === !0) : O( () => t.stackLabel === !0 || e.focused.value === !0 || e.hasValue.value === !0)
      , h = O( () => t.bottomSlots === !0 || t.hint !== void 0 || u.value === !0 || t.counter === !0 || t.error !== null)
      , g = O( () => t.filled === !0 ? "filled" : t.outlined === !0 ? "outlined" : t.borderless === !0 ? "borderless" : t.standout ? "standout" : "standard")
      , b = O( () => `q-field row no-wrap items-start q-field--${g.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === !0 ? " q-field--rounded" : "") + (t.square === !0 ? " q-field--square" : "") + (m.value === !0 ? " q-field--float" : "") + (E.value === !0 ? " q-field--labeled" : "") + (t.dense === !0 ? " q-field--dense" : "") + (t.itemAligned === !0 ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === !0 ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === !0 ? " q-field--focused" : "") + (c.value === !0 ? " q-field--error" : "") + (c.value === !0 || e.focused.value === !0 ? " q-field--highlighted" : "") + (t.hideBottomSpace !== !0 && h.value === !0 ? " q-field--with-bottom" : "") + (t.disable === !0 ? " q-field--disabled" : t.readonly === !0 ? " q-field--readonly" : ""))
      , T = O( () => "q-field__control relative-position row no-wrap" + (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") + (c.value === !0 ? " text-negative" : typeof t.standout == "string" && t.standout.length !== 0 && e.focused.value === !0 ? ` ${t.standout}` : t.color !== void 0 ? ` text-${t.color}` : ""))
      , E = O( () => t.labelSlot === !0 || t.label !== void 0)
      , v = O( () => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && c.value !== !0 ? ` text-${t.labelColor}` : ""))
      , p = O( () => ({
        id: e.targetUid.value,
        editable: e.editable.value,
        focused: e.focused.value,
        floatingLabel: m.value,
        modelValue: t.modelValue,
        emitValue: e.emitValue
    }))
      , C = O( () => {
        const K = {};
        return e.targetUid.value && (K.for = e.targetUid.value),
        t.disable === !0 && (K["aria-disabled"] = "true"),
        K
    }
    );
    function w() {
        const K = document.activeElement;
        let ae = e.targetRef !== void 0 && e.targetRef.value;
        ae && (K === null || K.id !== e.targetUid.value) && (ae.hasAttribute("tabindex") === !0 || (ae = ae.querySelector("[tabindex]")),
        ae && ae !== K && ae.focus({
            preventScroll: !0
        }))
    }
    function k() {
        ys(w)
    }
    function P() {
        mw(w);
        const K = document.activeElement;
        K !== null && e.rootRef.value.contains(K) && K.blur()
    }
    function A(K) {
        a !== null && (clearTimeout(a),
        a = null),
        e.editable.value === !0 && e.focused.value === !1 && (e.focused.value = !0,
        n("focus", K))
    }
    function R(K, ae) {
        a !== null && clearTimeout(a),
        a = setTimeout( () => {
            a = null,
            !(document.hasFocus() === !0 && (e.hasPopupOpen === !0 || e.controlRef === void 0 || e.controlRef.value === null || e.controlRef.value.contains(document.activeElement) !== !1)) && (e.focused.value === !0 && (e.focused.value = !1,
            n("blur", K)),
            ae !== void 0 && ae())
        }
        )
    }
    function q(K) {
        Xe(K),
        s.platform.is.mobile !== !0 ? (e.targetRef !== void 0 && e.targetRef.value || e.rootRef.value).focus() : e.rootRef.value.contains(document.activeElement) === !0 && document.activeElement.blur(),
        t.type === "file" && (e.inputRef.value.value = null),
        n("update:modelValue", null),
        e.changeEvent === !0 && n("change", null),
        n("clear", t.modelValue),
        mt( () => {
            const ae = l.value;
            f(),
            l.value = ae
        }
        )
    }
    function L(K) {
        [13, 32].includes(K.keyCode) && q(K)
    }
    function H() {
        const K = [];
        return r.prepend !== void 0 && K.push(M("div", {
            class: "q-field__prepend q-field__marginal row no-wrap items-center",
            key: "prepend",
            onClick: It
        }, r.prepend())),
        K.push(M("div", {
            class: "q-field__control-container col relative-position row no-wrap q-anchor--skip"
        }, F())),
        c.value === !0 && t.noErrorIcon === !1 && K.push(ne("error", [M(Ht, {
            name: s.iconSet.field.error,
            color: "negative"
        })])),
        t.loading === !0 || e.innerLoading.value === !0 ? K.push(ne("inner-loading-append", r.loading !== void 0 ? r.loading() : [M(Il, {
            color: t.color
        })])) : t.clearable === !0 && e.hasValue.value === !0 && e.editable.value === !0 && K.push(ne("inner-clearable-append", [M(Ht, {
            class: "q-field__focusable-action",
            name: t.clearIcon || s.iconSet.field.clear,
            tabindex: 0,
            role: "button",
            "aria-hidden": "false",
            "aria-label": s.lang.label.clear,
            onKeyup: L,
            onClick: q
        })])),
        r.append !== void 0 && K.push(M("div", {
            class: "q-field__append q-field__marginal row no-wrap items-center",
            key: "append",
            onClick: It
        }, r.append())),
        e.getInnerAppend !== void 0 && K.push(ne("inner-append", e.getInnerAppend())),
        e.getControlChild !== void 0 && K.push(e.getControlChild()),
        K
    }
    function F() {
        const K = [];
        return t.prefix !== void 0 && t.prefix !== null && K.push(M("div", {
            class: "q-field__prefix no-pointer-events row items-center"
        }, t.prefix)),
        e.getShadowControl !== void 0 && e.hasShadow.value === !0 && K.push(e.getShadowControl()),
        e.getControl !== void 0 ? K.push(e.getControl()) : r.rawControl !== void 0 ? K.push(r.rawControl()) : r.control !== void 0 && K.push(M("div", {
            ref: e.targetRef,
            class: "q-field__native row",
            tabindex: -1,
            ...e.splitAttrs.attributes.value,
            "data-autofocus": t.autofocus === !0 || void 0
        }, r.control(p.value))),
        E.value === !0 && K.push(M("div", {
            class: v.value
        }, ze(r.label, t.label))),
        t.suffix !== void 0 && t.suffix !== null && K.push(M("div", {
            class: "q-field__suffix no-pointer-events row items-center"
        }, t.suffix)),
        K.concat(ze(r.default))
    }
    function ee() {
        let K, ae;
        c.value === !0 ? d.value !== null ? (K = [M("div", {
            role: "alert"
        }, d.value)],
        ae = `q--slot-error-${d.value}`) : (K = ze(r.error),
        ae = "q--slot-error") : (t.hideHint !== !0 || e.focused.value === !0) && (t.hint !== void 0 ? (K = [M("div", t.hint)],
        ae = `q--slot-hint-${t.hint}`) : (K = ze(r.hint),
        ae = "q--slot-hint"));
        const ue = t.counter === !0 || r.counter !== void 0;
        if (t.hideBottomSpace === !0 && ue === !1 && K === void 0)
            return;
        const ce = M("div", {
            key: ae,
            class: "q-field__messages col"
        }, K);
        return M("div", {
            class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== !0 ? "animated" : "stale"),
            onClick: It
        }, [t.hideBottomSpace === !0 ? ce : M(lr, {
            name: "q-transition--field-message"
        }, () => ce), ue === !0 ? M("div", {
            class: "q-field__counter"
        }, r.counter !== void 0 ? r.counter() : e.computedCounter.value) : null])
    }
    function ne(K, ae) {
        return ae === null ? null : M("div", {
            key: K,
            class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"
        }, ae)
    }
    let z = !1;
    return ls( () => {
        z = !0
    }
    ),
    mm( () => {
        z === !0 && t.autofocus === !0 && i.focus()
    }
    ),
    t.autofocus === !0 && Tt( () => {
        i.focus()
    }
    ),
    Qe( () => {
        a !== null && clearTimeout(a)
    }
    ),
    Object.assign(i, {
        focus: k,
        blur: P
    }),
    function() {
        const ae = e.getControl === void 0 && r.control === void 0 ? {
            ...e.splitAttrs.attributes.value,
            "data-autofocus": t.autofocus === !0 || void 0,
            ...C.value
        } : C.value;
        return M(e.tag.value, {
            ref: e.rootRef,
            class: [b.value, o.class],
            style: o.style,
            ...ae
        }, [r.before !== void 0 ? M("div", {
            class: "q-field__before q-field__marginal row no-wrap items-center",
            onClick: It
        }, r.before()) : null, M("div", {
            class: "q-field__inner relative-position col self-stretch"
        }, [M("div", {
            ref: e.controlRef,
            class: T.value,
            tabindex: -1,
            ...e.controlEvents
        }, H()), h.value === !0 ? ee() : null]), r.after !== void 0 ? M("div", {
            class: "q-field__after q-field__marginal row no-wrap items-center",
            onClick: It
        }, r.after()) : null])
    }
}
const wd = {
    date: "####/##/##",
    datetime: "####/##/## ##:##",
    time: "##:##",
    fulltime: "##:##:##",
    phone: "(###) ### - ####",
    card: "#### #### #### ####"
}
  , Xi = {
    "#": {
        pattern: "[\\d]",
        negate: "[^\\d]"
    },
    S: {
        pattern: "[a-zA-Z]",
        negate: "[^a-zA-Z]"
    },
    N: {
        pattern: "[0-9a-zA-Z]",
        negate: "[^0-9a-zA-Z]"
    },
    A: {
        pattern: "[a-zA-Z]",
        negate: "[^a-zA-Z]",
        transform: e => e.toLocaleUpperCase()
    },
    a: {
        pattern: "[a-zA-Z]",
        negate: "[^a-zA-Z]",
        transform: e => e.toLocaleLowerCase()
    },
    X: {
        pattern: "[0-9a-zA-Z]",
        negate: "[^0-9a-zA-Z]",
        transform: e => e.toLocaleUpperCase()
    },
    x: {
        pattern: "[0-9a-zA-Z]",
        negate: "[^0-9a-zA-Z]",
        transform: e => e.toLocaleLowerCase()
    }
}
  , xp = Object.keys(Xi);
xp.forEach(e => {
    Xi[e].regex = new RegExp(Xi[e].pattern)
}
);
const fA = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + xp.join("") + "])|(.)","g")
  , Ed = /[.*+?^${}()|[\]\\]/g
  , Ye = ""
  , dA = {
    mask: String,
    reverseFillMask: Boolean,
    fillMask: [Boolean, String],
    unmaskedValue: Boolean
};
function mA(e, t, n, r) {
    let o, i, s, a, l, u;
    const c = le(null)
      , d = le(m());
    function f() {
        return e.autogrow === !0 || ["textarea", "text", "search", "url", "tel", "password"].includes(e.type)
    }
    ve( () => e.type + e.autogrow, g),
    ve( () => e.mask, A => {
        if (A !== void 0)
            b(d.value, !0);
        else {
            const R = k(d.value);
            g(),
            e.modelValue !== R && t("update:modelValue", R)
        }
    }
    ),
    ve( () => e.fillMask + e.reverseFillMask, () => {
        c.value === !0 && b(d.value, !0)
    }
    ),
    ve( () => e.unmaskedValue, () => {
        c.value === !0 && b(d.value)
    }
    );
    function m() {
        if (g(),
        c.value === !0) {
            const A = C(k(e.modelValue));
            return e.fillMask !== !1 ? P(A) : A
        }
        return e.modelValue
    }
    function h(A) {
        if (A < o.length)
            return o.slice(-A);
        let R = ""
          , q = o;
        const L = q.indexOf(Ye);
        if (L !== -1) {
            for (let H = A - q.length; H > 0; H--)
                R += Ye;
            q = q.slice(0, L) + R + q.slice(L)
        }
        return q
    }
    function g() {
        if (c.value = e.mask !== void 0 && e.mask.length !== 0 && f(),
        c.value === !1) {
            a = void 0,
            o = "",
            i = "";
            return
        }
        const A = wd[e.mask] === void 0 ? e.mask : wd[e.mask]
          , R = typeof e.fillMask == "string" && e.fillMask.length !== 0 ? e.fillMask.slice(0, 1) : "_"
          , q = R.replace(Ed, "\\$&")
          , L = []
          , H = []
          , F = [];
        let ee = e.reverseFillMask === !0
          , ne = ""
          , z = "";
        A.replace(fA, (ce, X, be, ke, Ae) => {
            if (ke !== void 0) {
                const oe = Xi[ke];
                F.push(oe),
                z = oe.negate,
                ee === !0 && (H.push("(?:" + z + "+)?(" + oe.pattern + "+)?(?:" + z + "+)?(" + oe.pattern + "+)?"),
                ee = !1),
                H.push("(?:" + z + "+)?(" + oe.pattern + ")?")
            } else if (be !== void 0)
                ne = "\\" + (be === "\\" ? "" : be),
                F.push(be),
                L.push("([^" + ne + "]+)?" + ne + "?");
            else {
                const oe = X !== void 0 ? X : Ae;
                ne = oe === "\\" ? "\\\\\\\\" : oe.replace(Ed, "\\\\$&"),
                F.push(oe),
                L.push("([^" + ne + "]+)?" + ne + "?")
            }
        }
        );
        const K = new RegExp("^" + L.join("") + "(" + (ne === "" ? "." : "[^" + ne + "]") + "+)?" + (ne === "" ? "" : "[" + ne + "]*") + "$")
          , ae = H.length - 1
          , ue = H.map( (ce, X) => X === 0 && e.reverseFillMask === !0 ? new RegExp("^" + q + "*" + ce) : X === ae ? new RegExp("^" + ce + "(" + (z === "" ? "." : z) + "+)?" + (e.reverseFillMask === !0 ? "$" : q + "*")) : new RegExp("^" + ce));
        s = F,
        a = ce => {
            const X = K.exec(e.reverseFillMask === !0 ? ce : ce.slice(0, F.length + 1));
            X !== null && (ce = X.slice(1).join(""));
            const be = []
              , ke = ue.length;
            for (let Ae = 0, oe = ce; Ae < ke; Ae++) {
                const B = ue[Ae].exec(oe);
                if (B === null)
                    break;
                oe = oe.slice(B.shift().length),
                be.push(...B)
            }
            return be.length !== 0 ? be.join("") : ce
        }
        ,
        o = F.map(ce => typeof ce == "string" ? ce : Ye).join(""),
        i = o.split(Ye).join(R)
    }
    function b(A, R, q) {
        const L = r.value
          , H = L.selectionEnd
          , F = L.value.length - H
          , ee = k(A);
        R === !0 && g();
        const ne = C(ee)
          , z = e.fillMask !== !1 ? P(ne) : ne
          , K = d.value !== z;
        L.value !== z && (L.value = z),
        K === !0 && (d.value = z),
        document.activeElement === L && mt( () => {
            if (z === i) {
                const ue = e.reverseFillMask === !0 ? i.length : 0;
                L.setSelectionRange(ue, ue, "forward");
                return
            }
            if (q === "insertFromPaste" && e.reverseFillMask !== !0) {
                const ue = L.selectionEnd;
                let ce = H - 1;
                for (let X = l; X <= ce && X < ue; X++)
                    o[X] !== Ye && ce++;
                E.right(L, ce);
                return
            }
            if (["deleteContentBackward", "deleteContentForward"].indexOf(q) !== -1) {
                const ue = e.reverseFillMask === !0 ? H === 0 ? z.length > ne.length ? 1 : 0 : Math.max(0, z.length - (z === i ? 0 : Math.min(ne.length, F) + 1)) + 1 : H;
                L.setSelectionRange(ue, ue, "forward");
                return
            }
            if (e.reverseFillMask === !0)
                if (K === !0) {
                    const ue = Math.max(0, z.length - (z === i ? 0 : Math.min(ne.length, F + 1)));
                    ue === 1 && H === 1 ? L.setSelectionRange(ue, ue, "forward") : E.rightReverse(L, ue)
                } else {
                    const ue = z.length - F;
                    L.setSelectionRange(ue, ue, "backward")
                }
            else if (K === !0) {
                const ue = Math.max(0, o.indexOf(Ye), Math.min(ne.length, H) - 1);
                E.right(L, ue)
            } else {
                const ue = H - 1;
                E.right(L, ue)
            }
        }
        );
        const ae = e.unmaskedValue === !0 ? k(z) : z;
        String(e.modelValue) !== ae && (e.modelValue !== null || ae !== "") && n(ae, !0)
    }
    function T(A, R, q) {
        const L = C(k(A.value));
        R = Math.max(0, o.indexOf(Ye), Math.min(L.length, R)),
        l = R,
        A.setSelectionRange(R, q, "forward")
    }
    const E = {
        left(A, R) {
            const q = o.slice(R - 1).indexOf(Ye) === -1;
            let L = Math.max(0, R - 1);
            for (; L >= 0; L--)
                if (o[L] === Ye) {
                    R = L,
                    q === !0 && R++;
                    break
                }
            if (L < 0 && o[R] !== void 0 && o[R] !== Ye)
                return E.right(A, 0);
            R >= 0 && A.setSelectionRange(R, R, "backward")
        },
        right(A, R) {
            const q = A.value.length;
            let L = Math.min(q, R + 1);
            for (; L <= q; L++)
                if (o[L] === Ye) {
                    R = L;
                    break
                } else
                    o[L - 1] === Ye && (R = L);
            if (L > q && o[R - 1] !== void 0 && o[R - 1] !== Ye)
                return E.left(A, q);
            A.setSelectionRange(R, R, "forward")
        },
        leftReverse(A, R) {
            const q = h(A.value.length);
            let L = Math.max(0, R - 1);
            for (; L >= 0; L--)
                if (q[L - 1] === Ye) {
                    R = L;
                    break
                } else if (q[L] === Ye && (R = L,
                L === 0))
                    break;
            if (L < 0 && q[R] !== void 0 && q[R] !== Ye)
                return E.rightReverse(A, 0);
            R >= 0 && A.setSelectionRange(R, R, "backward")
        },
        rightReverse(A, R) {
            const q = A.value.length
              , L = h(q)
              , H = L.slice(0, R + 1).indexOf(Ye) === -1;
            let F = Math.min(q, R + 1);
            for (; F <= q; F++)
                if (L[F - 1] === Ye) {
                    R = F,
                    R > 0 && H === !0 && R--;
                    break
                }
            if (F > q && L[R - 1] !== void 0 && L[R - 1] !== Ye)
                return E.leftReverse(A, q);
            A.setSelectionRange(R, R, "forward")
        }
    };
    function v(A) {
        t("click", A),
        u = void 0
    }
    function p(A) {
        if (t("keydown", A),
        Zm(A) === !0 || A.altKey === !0)
            return;
        const R = r.value
          , q = R.selectionStart
          , L = R.selectionEnd;
        if (A.shiftKey || (u = void 0),
        A.keyCode === 37 || A.keyCode === 39) {
            A.shiftKey && u === void 0 && (u = R.selectionDirection === "forward" ? q : L);
            const H = E[(A.keyCode === 39 ? "right" : "left") + (e.reverseFillMask === !0 ? "Reverse" : "")];
            if (A.preventDefault(),
            H(R, u === q ? L : q),
            A.shiftKey) {
                const F = R.selectionStart;
                R.setSelectionRange(Math.min(u, F), Math.max(u, F), "forward")
            }
        } else
            A.keyCode === 8 && e.reverseFillMask !== !0 && q === L ? (E.left(R, q),
            R.setSelectionRange(R.selectionStart, L, "backward")) : A.keyCode === 46 && e.reverseFillMask === !0 && q === L && (E.rightReverse(R, L),
            R.setSelectionRange(q, R.selectionEnd, "forward"))
    }
    function C(A) {
        if (A == null || A === "")
            return "";
        if (e.reverseFillMask === !0)
            return w(A);
        const R = s;
        let q = 0
          , L = "";
        for (let H = 0; H < R.length; H++) {
            const F = A[q]
              , ee = R[H];
            if (typeof ee == "string")
                L += ee,
                F === ee && q++;
            else if (F !== void 0 && ee.regex.test(F))
                L += ee.transform !== void 0 ? ee.transform(F) : F,
                q++;
            else
                return L
        }
        return L
    }
    function w(A) {
        const R = s
          , q = o.indexOf(Ye);
        let L = A.length - 1
          , H = "";
        for (let F = R.length - 1; F >= 0 && L !== -1; F--) {
            const ee = R[F];
            let ne = A[L];
            if (typeof ee == "string")
                H = ee + H,
                ne === ee && L--;
            else if (ne !== void 0 && ee.regex.test(ne))
                do
                    H = (ee.transform !== void 0 ? ee.transform(ne) : ne) + H,
                    L--,
                    ne = A[L];
                while (q === F && ne !== void 0 && ee.regex.test(ne));
            else
                return H
        }
        return H
    }
    function k(A) {
        return typeof A != "string" || a === void 0 ? typeof A == "number" ? a("" + A) : A : a(A)
    }
    function P(A) {
        return i.length - A.length <= 0 ? A : e.reverseFillMask === !0 && A.length !== 0 ? i.slice(0, -A.length) + A : A + i.slice(A.length)
    }
    return {
        innerValue: d,
        hasMask: c,
        moveCursorForPaste: T,
        updateMaskValue: b,
        onMaskedKeydown: p,
        onMaskedClick: v
    }
}
function hA(e, t) {
    function n() {
        const r = e.modelValue;
        try {
            const o = "DataTransfer"in window ? new DataTransfer : "ClipboardEvent"in window ? new ClipboardEvent("").clipboardData : void 0;
            return Object(r) === r && ("length"in r ? Array.from(r) : [r]).forEach(i => {
                o.items.add(i)
            }
            ),
            {
                files: o.files
            }
        } catch {
            return {
                files: void 0
            }
        }
    }
    return O( () => {
        if (e.type === "file")
            return n()
    }
    )
}
const gA = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/
  , pA = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u
  , vA = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/
  , bA = /[a-z0-9_ -]$/i;
function _A(e) {
    return function(n) {
        if (n.type === "compositionend" || n.type === "change") {
            if (n.target.qComposing !== !0)
                return;
            n.target.qComposing = !1,
            e(n)
        } else
            n.type === "compositionupdate" && n.target.qComposing !== !0 && typeof n.data == "string" && (Re.is.firefox === !0 ? bA.test(n.data) === !1 : gA.test(n.data) === !0 || pA.test(n.data) === !0 || vA.test(n.data) === !0) === !0 && (n.target.qComposing = !0)
    }
}
const SL = Ne({
    name: "QInput",
    inheritAttrs: !1,
    props: {
        ...aA,
        ...dA,
        ...Xo,
        modelValue: [String, Number, FileList],
        shadowText: String,
        type: {
            type: String,
            default: "text"
        },
        debounce: [String, Number],
        autogrow: Boolean,
        inputClass: [Array, String, Object],
        inputStyle: [Array, String, Object]
    },
    emits: [...lA, "paste", "change", "keydown", "click", "animationend"],
    setup(e, {emit: t, attrs: n}) {
        const {proxy: r} = Te()
          , {$q: o} = r
          , i = {};
        let s = NaN, a, l, u = null, c;
        const d = le(null)
          , f = Uk(e)
          , {innerValue: m, hasMask: h, moveCursorForPaste: g, updateMaskValue: b, onMaskedKeydown: T, onMaskedClick: E} = mA(e, t, ne, d)
          , v = hA(e)
          , p = O( () => ul(m.value))
          , C = _A(F)
          , w = uA({
            changeEvent: !0
        })
          , k = O( () => e.type === "textarea" || e.autogrow === !0)
          , P = O( () => k.value === !0 || ["text", "search", "url", "tel", "password"].includes(e.type))
          , A = O( () => {
            const X = {
                ...w.splitAttrs.listeners.value,
                onInput: F,
                onPaste: H,
                onChange: K,
                onBlur: ae,
                onFocus: tr
            };
            return X.onCompositionstart = X.onCompositionupdate = X.onCompositionend = C,
            h.value === !0 && (X.onKeydown = T,
            X.onClick = E),
            e.autogrow === !0 && (X.onAnimationend = ee),
            X
        }
        )
          , R = O( () => {
            const X = {
                tabindex: 0,
                "data-autofocus": e.autofocus === !0 || void 0,
                rows: e.type === "textarea" ? 6 : void 0,
                "aria-label": e.label,
                name: f.value,
                ...w.splitAttrs.attributes.value,
                id: w.targetUid.value,
                maxlength: e.maxlength,
                disabled: e.disable === !0,
                readonly: e.readonly === !0
            };
            return k.value === !1 && (X.type = e.type),
            e.autogrow === !0 && (X.rows = 1),
            X
        }
        );
        ve( () => e.type, () => {
            d.value && (d.value.value = e.modelValue)
        }
        ),
        ve( () => e.modelValue, X => {
            if (h.value === !0) {
                if (l === !0 && (l = !1,
                String(X) === s))
                    return;
                b(X)
            } else
                m.value !== X && (m.value = X,
                e.type === "number" && i.hasOwnProperty("value") === !0 && (a === !0 ? a = !1 : delete i.value));
            e.autogrow === !0 && mt(z)
        }
        ),
        ve( () => e.autogrow, X => {
            X === !0 ? mt(z) : d.value !== null && n.rows > 0 && (d.value.style.height = "auto")
        }
        ),
        ve( () => e.dense, () => {
            e.autogrow === !0 && mt(z)
        }
        );
        function q() {
            ys( () => {
                const X = document.activeElement;
                d.value !== null && d.value !== X && (X === null || X.id !== w.targetUid.value) && d.value.focus({
                    preventScroll: !0
                })
            }
            )
        }
        function L() {
            d.value !== null && d.value.select()
        }
        function H(X) {
            if (h.value === !0 && e.reverseFillMask !== !0) {
                const be = X.target;
                g(be, be.selectionStart, be.selectionEnd)
            }
            t("paste", X)
        }
        function F(X) {
            if (!X || !X.target)
                return;
            if (e.type === "file") {
                t("update:modelValue", X.target.files);
                return
            }
            const be = X.target.value;
            if (X.target.qComposing === !0) {
                i.value = be;
                return
            }
            if (h.value === !0)
                b(be, !1, X.inputType);
            else if (ne(be),
            P.value === !0 && X.target === document.activeElement) {
                const {selectionStart: ke, selectionEnd: Ae} = X.target;
                ke !== void 0 && Ae !== void 0 && mt( () => {
                    X.target === document.activeElement && be.indexOf(X.target.value) === 0 && X.target.setSelectionRange(ke, Ae)
                }
                )
            }
            e.autogrow === !0 && z()
        }
        function ee(X) {
            t("animationend", X),
            z()
        }
        function ne(X, be) {
            c = () => {
                u = null,
                e.type !== "number" && i.hasOwnProperty("value") === !0 && delete i.value,
                e.modelValue !== X && s !== X && (s = X,
                be === !0 && (l = !0),
                t("update:modelValue", X),
                mt( () => {
                    s === X && (s = NaN)
                }
                )),
                c = void 0
            }
            ,
            e.type === "number" && (a = !0,
            i.value = X),
            e.debounce !== void 0 ? (u !== null && clearTimeout(u),
            i.value = X,
            u = setTimeout(c, e.debounce)) : c()
        }
        function z() {
            requestAnimationFrame( () => {
                const X = d.value;
                if (X !== null) {
                    const be = X.parentNode.style
                      , {scrollTop: ke} = X
                      , {overflowY: Ae, maxHeight: oe} = o.platform.is.firefox === !0 ? {} : window.getComputedStyle(X)
                      , B = Ae !== void 0 && Ae !== "scroll";
                    B === !0 && (X.style.overflowY = "hidden"),
                    be.marginBottom = X.scrollHeight - 1 + "px",
                    X.style.height = "1px",
                    X.style.height = X.scrollHeight + "px",
                    B === !0 && (X.style.overflowY = parseInt(oe, 10) < X.scrollHeight ? "auto" : "hidden"),
                    be.marginBottom = "",
                    X.scrollTop = ke
                }
            }
            )
        }
        function K(X) {
            C(X),
            u !== null && (clearTimeout(u),
            u = null),
            c !== void 0 && c(),
            t("change", X.target.value)
        }
        function ae(X) {
            X !== void 0 && tr(X),
            u !== null && (clearTimeout(u),
            u = null),
            c !== void 0 && c(),
            a = !1,
            l = !1,
            delete i.value,
            e.type !== "file" && setTimeout( () => {
                d.value !== null && (d.value.value = m.value !== void 0 ? m.value : "")
            }
            )
        }
        function ue() {
            return i.hasOwnProperty("value") === !0 ? i.value : m.value !== void 0 ? m.value : ""
        }
        Qe( () => {
            ae()
        }
        ),
        Tt( () => {
            e.autogrow === !0 && z()
        }
        ),
        Object.assign(w, {
            innerValue: m,
            fieldClass: O( () => `q-${k.value === !0 ? "textarea" : "input"}` + (e.autogrow === !0 ? " q-textarea--autogrow" : "")),
            hasShadow: O( () => e.type !== "file" && typeof e.shadowText == "string" && e.shadowText.length !== 0),
            inputRef: d,
            emitValue: ne,
            hasValue: p,
            floatingLabel: O( () => p.value === !0 && (e.type !== "number" || isNaN(m.value) === !1) || ul(e.displayValue)),
            getControl: () => M(k.value === !0 ? "textarea" : "input", {
                ref: d,
                class: ["q-field__native q-placeholder", e.inputClass],
                style: e.inputStyle,
                ...R.value,
                ...A.value,
                ...e.type !== "file" ? {
                    value: ue()
                } : v.value
            }),
            getShadowControl: () => M("div", {
                class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + (k.value === !0 ? "" : " text-no-wrap")
            }, [M("span", {
                class: "invisible"
            }, ue()), M("span", e.shadowText)])
        });
        const ce = cA(w);
        return Object.assign(r, {
            focus: q,
            select: L,
            getNativeElement: () => d.value
        }),
        Yr(r, "nativeEl", () => d.value),
        ce
    }
})
  , yA = Ne({
    name: "QBtnGroup",
    props: {
        unelevated: Boolean,
        outline: Boolean,
        flat: Boolean,
        rounded: Boolean,
        square: Boolean,
        push: Boolean,
        stretch: Boolean,
        glossy: Boolean,
        spread: Boolean
    },
    setup(e, {slots: t}) {
        const n = O( () => {
            const r = ["unelevated", "outline", "flat", "rounded", "square", "push", "stretch", "glossy"].filter(o => e[o] === !0).map(o => `q-btn-group--${o}`).join(" ");
            return `q-btn-group row no-wrap${r.length !== 0 ? " " + r : ""}` + (e.spread === !0 ? " q-btn-group--spread" : " inline")
        }
        );
        return () => M("div", {
            class: n.value
        }, ze(t.default))
    }
});
function kp(e, t) {
    const n = le(null)
      , r = O( () => e.disable === !0 ? null : M("span", {
        ref: n,
        class: "no-outline",
        tabindex: -1
    }));
    function o(i) {
        const s = t.value;
        i !== void 0 && i.type.indexOf("key") === 0 ? s !== null && document.activeElement !== s && s.contains(document.activeElement) === !0 && s.focus() : n.value !== null && (i === void 0 || s !== null && s.contains(i.target) === !0) && n.value.focus()
    }
    return {
        refocusTargetEl: r,
        refocusTarget: o
    }
}
const Ap = {
    xs: 30,
    sm: 35,
    md: 40,
    lg: 50,
    xl: 60
}
  , wA = () => M("svg", {
    key: "svg",
    class: "q-radio__bg absolute non-selectable",
    viewBox: "0 0 24 24"
}, [M("path", {
    d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"
}), M("path", {
    class: "q-radio__check",
    d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"
})])
  , CL = Ne({
    name: "QRadio",
    props: {
        ...zt,
        ...zo,
        ...Xo,
        modelValue: {
            required: !0
        },
        val: {
            required: !0
        },
        label: String,
        leftLabel: Boolean,
        checkedIcon: String,
        uncheckedIcon: String,
        color: String,
        keepColor: Boolean,
        dense: Boolean,
        disable: Boolean,
        tabindex: [String, Number]
    },
    emits: ["update:modelValue"],
    setup(e, {slots: t, emit: n}) {
        const {proxy: r} = Te()
          , o = Kt(e, r.$q)
          , i = Ko(e, Ap)
          , s = le(null)
          , {refocusTargetEl: a, refocusTarget: l} = kp(e, s)
          , u = O( () => Se(e.modelValue) === Se(e.val))
          , c = O( () => "q-radio cursor-pointer no-outline row inline no-wrap items-center" + (e.disable === !0 ? " disabled" : "") + (o.value === !0 ? " q-radio--dark" : "") + (e.dense === !0 ? " q-radio--dense" : "") + (e.leftLabel === !0 ? " reverse" : ""))
          , d = O( () => {
            const p = e.color !== void 0 && (e.keepColor === !0 || u.value === !0) ? ` text-${e.color}` : "";
            return `q-radio__inner relative-position q-radio__inner--${u.value === !0 ? "truthy" : "falsy"}${p}`
        }
        )
          , f = O( () => (u.value === !0 ? e.checkedIcon : e.uncheckedIcon) || null)
          , m = O( () => e.disable === !0 ? -1 : e.tabindex || 0)
          , h = O( () => {
            const p = {
                type: "radio"
            };
            return e.name !== void 0 && Object.assign(p, {
                ".checked": u.value === !0,
                "^checked": u.value === !0 ? "checked" : void 0,
                name: e.name,
                value: e.val
            }),
            p
        }
        )
          , g = Is(h);
        function b(p) {
            p !== void 0 && (Xe(p),
            l(p)),
            e.disable !== !0 && u.value !== !0 && n("update:modelValue", e.val, p)
        }
        function T(p) {
            (p.keyCode === 13 || p.keyCode === 32) && Xe(p)
        }
        function E(p) {
            (p.keyCode === 13 || p.keyCode === 32) && b(p)
        }
        Object.assign(r, {
            set: b
        });
        const v = wA();
        return () => {
            const p = f.value !== null ? [M("div", {
                key: "icon",
                class: "q-radio__icon-container absolute-full flex flex-center no-wrap"
            }, [M(Ht, {
                class: "q-radio__icon",
                name: f.value
            })])] : [v];
            e.disable !== !0 && g(p, "unshift", " q-radio__native q-ma-none q-pa-none");
            const C = [M("div", {
                class: d.value,
                style: i.value,
                "aria-hidden": "true"
            }, p)];
            a.value !== null && C.push(a.value);
            const w = e.label !== void 0 ? dn(t.default, [e.label]) : ze(t.default);
            return w !== void 0 && C.push(M("div", {
                class: "q-radio__label q-anchor--skip"
            }, w)),
            M("div", {
                ref: s,
                class: c.value,
                tabindex: m.value,
                role: "radio",
                "aria-label": e.label,
                "aria-checked": u.value === !0 ? "true" : "false",
                "aria-disabled": e.disable === !0 ? "true" : void 0,
                onClick: b,
                onKeydown: T,
                onKeyup: E
            }, C)
        }
    }
})
  , EA = {
    ...zt,
    ...zo,
    ...Xo,
    modelValue: {
        required: !0,
        default: null
    },
    val: {},
    trueValue: {
        default: !0
    },
    falseValue: {
        default: !1
    },
    indeterminateValue: {
        default: null
    },
    checkedIcon: String,
    uncheckedIcon: String,
    indeterminateIcon: String,
    toggleOrder: {
        type: String,
        validator: e => e === "tf" || e === "ft"
    },
    toggleIndeterminate: Boolean,
    label: String,
    leftLabel: Boolean,
    color: String,
    keepColor: Boolean,
    dense: Boolean,
    disable: Boolean,
    tabindex: [String, Number]
}
  , SA = ["update:modelValue"];
function CA(e, t) {
    const {props: n, slots: r, emit: o, proxy: i} = Te()
      , {$q: s} = i
      , a = Kt(n, s)
      , l = le(null)
      , {refocusTargetEl: u, refocusTarget: c} = kp(n, l)
      , d = Ko(n, Ap)
      , f = O( () => n.val !== void 0 && Array.isArray(n.modelValue))
      , m = O( () => {
        const L = Se(n.val);
        return f.value === !0 ? n.modelValue.findIndex(H => Se(H) === L) : -1
    }
    )
      , h = O( () => f.value === !0 ? m.value !== -1 : Se(n.modelValue) === Se(n.trueValue))
      , g = O( () => f.value === !0 ? m.value === -1 : Se(n.modelValue) === Se(n.falseValue))
      , b = O( () => h.value === !1 && g.value === !1)
      , T = O( () => n.disable === !0 ? -1 : n.tabindex || 0)
      , E = O( () => `q-${e} cursor-pointer no-outline row inline no-wrap items-center` + (n.disable === !0 ? " disabled" : "") + (a.value === !0 ? ` q-${e}--dark` : "") + (n.dense === !0 ? ` q-${e}--dense` : "") + (n.leftLabel === !0 ? " reverse" : ""))
      , v = O( () => {
        const L = h.value === !0 ? "truthy" : g.value === !0 ? "falsy" : "indet"
          , H = n.color !== void 0 && (n.keepColor === !0 || g.value !== !0) ? ` text-${n.color}` : "";
        return `q-${e}__inner relative-position non-selectable q-${e}__inner--${L}${H}`
    }
    )
      , p = O( () => {
        const L = {
            type: "checkbox"
        };
        return n.name !== void 0 && Object.assign(L, {
            ".checked": h.value,
            "^checked": h.value === !0 ? "checked" : void 0,
            name: n.name,
            value: f.value === !0 ? n.val : n.trueValue
        }),
        L
    }
    )
      , C = Is(p)
      , w = O( () => {
        const L = {
            tabindex: T.value,
            role: "checkbox",
            "aria-label": n.label,
            "aria-checked": b.value === !0 ? "mixed" : h.value === !0 ? "true" : "false"
        };
        return n.disable === !0 && (L["aria-disabled"] = "true"),
        L
    }
    );
    function k(L) {
        L !== void 0 && (Xe(L),
        c(L)),
        n.disable !== !0 && o("update:modelValue", P(), L)
    }
    function P() {
        if (f.value === !0) {
            if (h.value === !0) {
                const L = n.modelValue.slice();
                return L.splice(m.value, 1),
                L
            }
            return n.modelValue.concat([n.val])
        }
        if (h.value === !0) {
            if (n.toggleOrder !== "ft" || n.toggleIndeterminate === !1)
                return n.falseValue
        } else if (g.value === !0) {
            if (n.toggleOrder === "ft" || n.toggleIndeterminate === !1)
                return n.trueValue
        } else
            return n.toggleOrder !== "ft" ? n.trueValue : n.falseValue;
        return n.indeterminateValue
    }
    function A(L) {
        (L.keyCode === 13 || L.keyCode === 32) && Xe(L)
    }
    function R(L) {
        (L.keyCode === 13 || L.keyCode === 32) && k(L)
    }
    const q = t(h, b);
    return Object.assign(i, {
        toggle: k
    }),
    () => {
        const L = q();
        n.disable !== !0 && C(L, "unshift", ` q-${e}__native absolute q-ma-none q-pa-none`);
        const H = [M("div", {
            class: v.value,
            style: d.value,
            "aria-hidden": "true"
        }, L)];
        u.value !== null && H.push(u.value);
        const F = n.label !== void 0 ? dn(r.default, [n.label]) : ze(r.default);
        return F !== void 0 && H.push(M("div", {
            class: `q-${e}__label q-anchor--skip`
        }, F)),
        M("div", {
            ref: l,
            class: E.value,
            ...w.value,
            onClick: k,
            onKeydown: A,
            onKeyup: R
        }, H)
    }
}
const TA = () => M("div", {
    key: "svg",
    class: "q-checkbox__bg absolute"
}, [M("svg", {
    class: "q-checkbox__svg fit absolute-full",
    viewBox: "0 0 24 24"
}, [M("path", {
    class: "q-checkbox__truthy",
    fill: "none",
    d: "M1.73,12.91 8.1,19.28 22.79,4.59"
}), M("path", {
    class: "q-checkbox__indet",
    d: "M4,14H20V10H4"
})])])
  , TL = Ne({
    name: "QCheckbox",
    props: EA,
    emits: SA,
    setup(e) {
        const t = TA();
        function n(r, o) {
            const i = O( () => (r.value === !0 ? e.checkedIcon : o.value === !0 ? e.indeterminateIcon : e.uncheckedIcon) || null);
            return () => i.value !== null ? [M("div", {
                key: "icon",
                class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap"
            }, [M(Ht, {
                class: "q-checkbox__icon",
                name: i.value
            })])] : [t]
        }
        return CA("checkbox", n)
    }
});
function xA(e) {
    const t = [.06, 6, 50];
    return typeof e == "string" && e.length && e.split(":").forEach( (n, r) => {
        const o = parseFloat(n);
        o && (t[r] = o)
    }
    ),
    t
}
const kA = hs({
    name: "touch-swipe",
    beforeMount(e, {value: t, arg: n, modifiers: r}) {
        if (r.mouse !== !0 && Re.has.touch !== !0)
            return;
        const o = r.mouseCapture === !0 ? "Capture" : ""
          , i = {
            handler: t,
            sensitivity: xA(n),
            direction: Ki(r),
            noop: ur,
            mouseStart(s) {
                Gi(s, i) && Xm(s) && (qt(i, "temp", [[document, "mousemove", "move", `notPassive${o}`], [document, "mouseup", "end", "notPassiveCapture"]]),
                i.start(s, !0))
            },
            touchStart(s) {
                if (Gi(s, i)) {
                    const a = s.target;
                    qt(i, "temp", [[a, "touchmove", "move", "notPassiveCapture"], [a, "touchcancel", "end", "notPassiveCapture"], [a, "touchend", "end", "notPassiveCapture"]]),
                    i.start(s)
                }
            },
            start(s, a) {
                Re.is.firefox === !0 && Ir(e, !0);
                const l = Mn(s);
                i.event = {
                    x: l.left,
                    y: l.top,
                    time: Date.now(),
                    mouse: a === !0,
                    dir: !1
                }
            },
            move(s) {
                if (i.event === void 0)
                    return;
                if (i.event.dir !== !1) {
                    Xe(s);
                    return
                }
                const a = Date.now() - i.event.time;
                if (a === 0)
                    return;
                const l = Mn(s)
                  , u = l.left - i.event.x
                  , c = Math.abs(u)
                  , d = l.top - i.event.y
                  , f = Math.abs(d);
                if (i.event.mouse !== !0) {
                    if (c < i.sensitivity[1] && f < i.sensitivity[1]) {
                        i.end(s);
                        return
                    }
                } else if (window.getSelection().toString() !== "") {
                    i.end(s);
                    return
                } else if (c < i.sensitivity[2] && f < i.sensitivity[2])
                    return;
                const m = c / a
                  , h = f / a;
                i.direction.vertical === !0 && c < f && c < 100 && h > i.sensitivity[0] && (i.event.dir = d < 0 ? "up" : "down"),
                i.direction.horizontal === !0 && c > f && f < 100 && m > i.sensitivity[0] && (i.event.dir = u < 0 ? "left" : "right"),
                i.direction.up === !0 && c < f && d < 0 && c < 100 && h > i.sensitivity[0] && (i.event.dir = "up"),
                i.direction.down === !0 && c < f && d > 0 && c < 100 && h > i.sensitivity[0] && (i.event.dir = "down"),
                i.direction.left === !0 && c > f && u < 0 && f < 100 && m > i.sensitivity[0] && (i.event.dir = "left"),
                i.direction.right === !0 && c > f && u > 0 && f < 100 && m > i.sensitivity[0] && (i.event.dir = "right"),
                i.event.dir !== !1 ? (Xe(s),
                i.event.mouse === !0 && (document.body.classList.add("no-pointer-events--children"),
                document.body.classList.add("non-selectable"),
                Gl(),
                i.styleCleanup = g => {
                    i.styleCleanup = void 0,
                    document.body.classList.remove("non-selectable");
                    const b = () => {
                        document.body.classList.remove("no-pointer-events--children")
                    }
                    ;
                    g === !0 ? setTimeout(b, 50) : b()
                }
                ),
                i.handler({
                    evt: s,
                    touch: i.event.mouse !== !0,
                    mouse: i.event.mouse,
                    direction: i.event.dir,
                    duration: a,
                    distance: {
                        x: c,
                        y: f
                    }
                })) : i.end(s)
            },
            end(s) {
                i.event !== void 0 && (On(i, "temp"),
                Re.is.firefox === !0 && Ir(e, !1),
                i.styleCleanup !== void 0 && i.styleCleanup(!0),
                s !== void 0 && i.event.dir !== !1 && Xe(s),
                i.event = void 0)
            }
        };
        if (e.__qtouchswipe = i,
        r.mouse === !0) {
            const s = r.mouseCapture === !0 || r.mousecapture === !0 ? "Capture" : "";
            qt(i, "main", [[e, "mousedown", "mouseStart", `passive${s}`]])
        }
        Re.has.touch === !0 && qt(i, "main", [[e, "touchstart", "touchStart", `passive${r.capture === !0 ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]])
    },
    updated(e, t) {
        const n = e.__qtouchswipe;
        n !== void 0 && (t.oldValue !== t.value && (typeof t.value != "function" && n.end(),
        n.handler = t.value),
        n.direction = Ki(t.modifiers))
    },
    beforeUnmount(e) {
        const t = e.__qtouchswipe;
        t !== void 0 && (On(t, "main"),
        On(t, "temp"),
        Re.is.firefox === !0 && Ir(e, !1),
        t.styleCleanup !== void 0 && t.styleCleanup(),
        delete e.__qtouchswipe)
    }
});
function AA() {
    let e = Object.create(null);
    return {
        getCache: (t, n) => e[t] === void 0 ? e[t] = typeof n == "function" ? n() : n : e[t],
        setCache(t, n) {
            e[t] = n
        },
        hasCache(t) {
            return Object.hasOwnProperty.call(e, t)
        },
        clearCache(t) {
            t !== void 0 ? delete e[t] : e = Object.create(null)
        }
    }
}
const LA = {
    name: {
        required: !0
    },
    disable: Boolean
}
  , Sd = {
    setup(e, {slots: t}) {
        return () => M("div", {
            class: "q-panel scroll",
            role: "tabpanel"
        }, ze(t.default))
    }
}
  , OA = {
    modelValue: {
        required: !0
    },
    animated: Boolean,
    infinite: Boolean,
    swipeable: Boolean,
    vertical: Boolean,
    transitionPrev: String,
    transitionNext: String,
    transitionDuration: {
        type: [String, Number],
        default: 300
    },
    keepAlive: Boolean,
    keepAliveInclude: [String, Array, RegExp],
    keepAliveExclude: [String, Array, RegExp],
    keepAliveMax: Number
}
  , PA = ["update:modelValue", "beforeTransition", "transition"];
function RA() {
    const {props: e, emit: t, proxy: n} = Te()
      , {getCache: r} = AA()
      , {registerTimeout: o} = Hl();
    let i, s;
    const a = le(null)
      , l = le(null);
    function u(F) {
        const ee = e.vertical === !0 ? "up" : "left";
        P((n.$q.lang.rtl === !0 ? -1 : 1) * (F.direction === ee ? 1 : -1))
    }
    const c = O( () => [[kA, u, void 0, {
        horizontal: e.vertical !== !0,
        vertical: e.vertical,
        mouse: !0
    }]])
      , d = O( () => e.transitionPrev || `slide-${e.vertical === !0 ? "down" : "right"}`)
      , f = O( () => e.transitionNext || `slide-${e.vertical === !0 ? "up" : "left"}`)
      , m = O( () => `--q-transition-duration: ${e.transitionDuration}ms`)
      , h = O( () => typeof e.modelValue == "string" || typeof e.modelValue == "number" ? e.modelValue : String(e.modelValue))
      , g = O( () => ({
        include: e.keepAliveInclude,
        exclude: e.keepAliveExclude,
        max: e.keepAliveMax
    }))
      , b = O( () => e.keepAliveInclude !== void 0 || e.keepAliveExclude !== void 0);
    ve( () => e.modelValue, (F, ee) => {
        const ne = p(F) === !0 ? C(F) : -1;
        s !== !0 && k(ne === -1 ? 0 : ne < C(ee) ? -1 : 1),
        a.value !== ne && (a.value = ne,
        t("beforeTransition", F, ee),
        o( () => {
            t("transition", F, ee)
        }
        , e.transitionDuration))
    }
    );
    function T() {
        P(1)
    }
    function E() {
        P(-1)
    }
    function v(F) {
        t("update:modelValue", F)
    }
    function p(F) {
        return F != null && F !== ""
    }
    function C(F) {
        return i.findIndex(ee => ee.props.name === F && ee.props.disable !== "" && ee.props.disable !== !0)
    }
    function w() {
        return i.filter(F => F.props.disable !== "" && F.props.disable !== !0)
    }
    function k(F) {
        const ee = F !== 0 && e.animated === !0 && a.value !== -1 ? "q-transition--" + (F === -1 ? d.value : f.value) : null;
        l.value !== ee && (l.value = ee)
    }
    function P(F, ee=a.value) {
        let ne = ee + F;
        for (; ne !== -1 && ne < i.length; ) {
            const z = i[ne];
            if (z !== void 0 && z.props.disable !== "" && z.props.disable !== !0) {
                k(F),
                s = !0,
                t("update:modelValue", z.props.name),
                setTimeout( () => {
                    s = !1
                }
                );
                return
            }
            ne += F
        }
        e.infinite === !0 && i.length !== 0 && ee !== -1 && ee !== i.length && P(F, F === -1 ? i.length : -1)
    }
    function A() {
        const F = C(e.modelValue);
        return a.value !== F && (a.value = F),
        !0
    }
    function R() {
        const F = p(e.modelValue) === !0 && A() && i[a.value];
        return e.keepAlive === !0 ? [M(Pv, g.value, [M(b.value === !0 ? r(h.value, () => ({
            ...Sd,
            name: h.value
        })) : Sd, {
            key: h.value,
            style: m.value
        }, () => F)])] : [M("div", {
            class: "q-panel scroll",
            style: m.value,
            key: h.value,
            role: "tabpanel"
        }, [F])]
    }
    function q() {
        if (i.length !== 0)
            return e.animated === !0 ? [M(lr, {
                name: l.value
            }, R)] : R()
    }
    function L(F) {
        return i = K_(ze(F.default, [])).filter(ee => ee.props !== null && ee.props.slot === void 0 && p(ee.props.name) === !0),
        i.length
    }
    function H() {
        return i
    }
    return Object.assign(n, {
        next: T,
        previous: E,
        goTo: v
    }),
    {
        panelIndex: a,
        panelDirectives: c,
        updatePanelsList: L,
        updatePanelIndex: A,
        getPanelContent: q,
        getEnabledPanels: w,
        getPanels: H,
        isValidPanelName: p,
        keepAliveProps: g,
        needsUniqueKeepAliveWrapper: b,
        goToPanelByOffset: P,
        goToPanel: v,
        nextPanel: T,
        previousPanel: E
    }
}
const xL = Ne({
    name: "QCarouselSlide",
    props: {
        ...LA,
        imgSrc: String
    },
    setup(e, {slots: t}) {
        const n = O( () => e.imgSrc ? {
            backgroundImage: `url("${e.imgSrc}")`
        } : {});
        return () => M("div", {
            class: "q-carousel__slide",
            style: n.value
        }, ze(t.default))
    }
});
let mo = 0;
const IA = {
    fullscreen: Boolean,
    noRouteFullscreenExit: Boolean
}
  , NA = ["update:fullscreen", "fullscreen"];
function MA() {
    const e = Te()
      , {props: t, emit: n, proxy: r} = e;
    let o, i, s;
    const a = le(!1);
    Nl(e) === !0 && ve( () => r.$route.fullPath, () => {
        t.noRouteFullscreenExit !== !0 && c()
    }
    ),
    ve( () => t.fullscreen, d => {
        a.value !== d && l()
    }
    ),
    ve(a, d => {
        n("update:fullscreen", d),
        n("fullscreen", d)
    }
    );
    function l() {
        a.value === !0 ? c() : u()
    }
    function u() {
        a.value !== !0 && (a.value = !0,
        s = r.$el.parentNode,
        s.replaceChild(i, r.$el),
        document.body.appendChild(r.$el),
        mo++,
        mo === 1 && document.body.classList.add("q-body--fullscreen-mixin"),
        o = {
            handler: c
        },
        No.add(o))
    }
    function c() {
        a.value === !0 && (o !== void 0 && (No.remove(o),
        o = void 0),
        s.replaceChild(r.$el, i),
        a.value = !1,
        mo = Math.max(0, mo - 1),
        mo === 0 && (document.body.classList.remove("q-body--fullscreen-mixin"),
        r.$el.scrollIntoView !== void 0 && setTimeout( () => {
            r.$el.scrollIntoView()
        }
        )))
    }
    return kl( () => {
        i = document.createElement("span")
    }
    ),
    Tt( () => {
        t.fullscreen === !0 && u()
    }
    ),
    Qe(c),
    Object.assign(r, {
        toggleFullscreen: l,
        setFullscreen: u,
        exitFullscreen: c
    }),
    {
        inFullscreen: a,
        toggleFullscreen: l
    }
}
const $A = ["top", "right", "bottom", "left"]
  , FA = ["regular", "flat", "outline", "push", "unelevated"]
  , kL = Ne({
    name: "QCarousel",
    props: {
        ...zt,
        ...OA,
        ...IA,
        transitionPrev: {
            type: String,
            default: "fade"
        },
        transitionNext: {
            type: String,
            default: "fade"
        },
        height: String,
        padding: Boolean,
        controlColor: String,
        controlTextColor: String,
        controlType: {
            type: String,
            validator: e => FA.includes(e),
            default: "flat"
        },
        autoplay: [Number, Boolean],
        arrows: Boolean,
        prevIcon: String,
        nextIcon: String,
        navigation: Boolean,
        navigationPosition: {
            type: String,
            validator: e => $A.includes(e)
        },
        navigationIcon: String,
        navigationActiveIcon: String,
        thumbnails: Boolean
    },
    emits: [...NA, ...PA],
    setup(e, {slots: t}) {
        const {proxy: {$q: n}} = Te()
          , r = Kt(e, n);
        let o = null, i;
        const {updatePanelsList: s, getPanelContent: a, panelDirectives: l, goToPanel: u, previousPanel: c, nextPanel: d, getEnabledPanels: f, panelIndex: m} = RA()
          , {inFullscreen: h} = MA()
          , g = O( () => h.value !== !0 && e.height !== void 0 ? {
            height: e.height
        } : {})
          , b = O( () => e.vertical === !0 ? "vertical" : "horizontal")
          , T = O( () => e.navigationPosition || (e.vertical === !0 ? "right" : "bottom"))
          , E = O( () => `q-carousel q-panel-parent q-carousel--with${e.padding === !0 ? "" : "out"}-padding` + (h.value === !0 ? " fullscreen" : "") + (r.value === !0 ? " q-carousel--dark q-dark" : "") + (e.arrows === !0 ? ` q-carousel--arrows-${b.value}` : "") + (e.navigation === !0 ? ` q-carousel--navigation-${T.value}` : ""))
          , v = O( () => {
            const R = [e.prevIcon || n.iconSet.carousel[e.vertical === !0 ? "up" : "left"], e.nextIcon || n.iconSet.carousel[e.vertical === !0 ? "down" : "right"]];
            return e.vertical === !1 && n.lang.rtl === !0 ? R.reverse() : R
        }
        )
          , p = O( () => e.navigationIcon || n.iconSet.carousel.navigationIcon)
          , C = O( () => e.navigationActiveIcon || p.value)
          , w = O( () => ({
            color: e.controlColor,
            textColor: e.controlTextColor,
            round: !0,
            [e.controlType]: !0,
            dense: !0
        }));
        ve( () => e.modelValue, () => {
            e.autoplay && k()
        }
        ),
        ve( () => e.autoplay, R => {
            R ? k() : o !== null && (clearTimeout(o),
            o = null)
        }
        );
        function k() {
            const R = ih(e.autoplay) === !0 ? Math.abs(e.autoplay) : 5e3;
            o !== null && clearTimeout(o),
            o = setTimeout( () => {
                o = null,
                R >= 0 ? d() : c()
            }
            , R)
        }
        Tt( () => {
            e.autoplay && k()
        }
        ),
        Qe( () => {
            o !== null && clearTimeout(o)
        }
        );
        function P(R, q) {
            return M("div", {
                class: `q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${R} q-carousel__navigation--${T.value}` + (e.controlColor !== void 0 ? ` text-${e.controlColor}` : "")
            }, [M("div", {
                class: "q-carousel__navigation-inner flex flex-center no-wrap"
            }, f().map(q))])
        }
        function A() {
            const R = [];
            if (e.navigation === !0) {
                const q = t["navigation-icon"] !== void 0 ? t["navigation-icon"] : H => M(Co, {
                    key: "nav" + H.name,
                    class: `q-carousel__navigation-icon q-carousel__navigation-icon--${H.active === !0 ? "" : "in"}active`,
                    ...H.btnProps,
                    onClick: H.onClick
                })
                  , L = i - 1;
                R.push(P("buttons", (H, F) => {
                    const ee = H.props.name
                      , ne = m.value === F;
                    return q({
                        index: F,
                        maxIndex: L,
                        name: ee,
                        active: ne,
                        btnProps: {
                            icon: ne === !0 ? C.value : p.value,
                            size: "sm",
                            ...w.value
                        },
                        onClick: () => {
                            u(ee)
                        }
                    })
                }
                ))
            } else if (e.thumbnails === !0) {
                const q = e.controlColor !== void 0 ? ` text-${e.controlColor}` : "";
                R.push(P("thumbnails", L => {
                    const H = L.props;
                    return M("img", {
                        key: "tmb#" + H.name,
                        class: `q-carousel__thumbnail q-carousel__thumbnail--${H.name === e.modelValue ? "" : "in"}active` + q,
                        src: H.imgSrc || H["img-src"],
                        onClick: () => {
                            u(H.name)
                        }
                    })
                }
                ))
            }
            return e.arrows === !0 && m.value >= 0 && ((e.infinite === !0 || m.value > 0) && R.push(M("div", {
                key: "prev",
                class: `q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${b.value} absolute flex flex-center`
            }, [M(Co, {
                icon: v.value[0],
                ...w.value,
                onClick: c
            })])),
            (e.infinite === !0 || m.value < i - 1) && R.push(M("div", {
                key: "next",
                class: `q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${b.value} absolute flex flex-center`
            }, [M(Co, {
                icon: v.value[1],
                ...w.value,
                onClick: d
            })]))),
            dn(t.control, R)
        }
        return () => (i = s(t),
        M("div", {
            class: E.value,
            style: g.value
        }, [ah("div", {
            class: "q-carousel__slides-container"
        }, a(), "sl-cont", e.swipeable, () => l.value)].concat(A())))
    }
});
function AL() {
    return yt(nh)
}
const LL = Ne({
    name: "QBtnToggle",
    props: {
        ...Xo,
        modelValue: {
            required: !0
        },
        options: {
            type: Array,
            required: !0,
            validator: e => e.every(t => ("label"in t || "icon"in t || "slot"in t) && "value"in t)
        },
        color: String,
        textColor: String,
        toggleColor: {
            type: String,
            default: "primary"
        },
        toggleTextColor: String,
        outline: Boolean,
        flat: Boolean,
        unelevated: Boolean,
        rounded: Boolean,
        push: Boolean,
        glossy: Boolean,
        size: String,
        padding: String,
        noCaps: Boolean,
        noWrap: Boolean,
        dense: Boolean,
        readonly: Boolean,
        disable: Boolean,
        stack: Boolean,
        stretch: Boolean,
        spread: Boolean,
        clearable: Boolean,
        ripple: {
            type: [Boolean, Object],
            default: !0
        }
    },
    emits: ["update:modelValue", "clear", "click"],
    setup(e, {slots: t, emit: n}) {
        const r = O( () => e.options.find(f => f.value === e.modelValue) !== void 0)
          , o = O( () => ({
            type: "hidden",
            name: e.name,
            value: e.modelValue
        }))
          , i = Is(o)
          , s = O( () => ty(e))
          , a = O( () => ({
            rounded: e.rounded,
            dense: e.dense,
            ...s.value
        }))
          , l = O( () => e.options.map( (f, m) => {
            const {attrs: h, value: g, slot: b, ...T} = f;
            return {
                slot: b,
                props: {
                    key: m,
                    "aria-pressed": g === e.modelValue ? "true" : "false",
                    ...h,
                    ...T,
                    ...a.value,
                    disable: e.disable === !0 || T.disable === !0,
                    color: g === e.modelValue ? c(T, "toggleColor") : c(T, "color"),
                    textColor: g === e.modelValue ? c(T, "toggleTextColor") : c(T, "textColor"),
                    noCaps: c(T, "noCaps") === !0,
                    noWrap: c(T, "noWrap") === !0,
                    size: c(T, "size"),
                    padding: c(T, "padding"),
                    ripple: c(T, "ripple"),
                    stack: c(T, "stack") === !0,
                    stretch: c(T, "stretch") === !0,
                    onClick(E) {
                        u(g, f, E)
                    }
                }
            }
        }
        ));
        function u(f, m, h) {
            e.readonly !== !0 && (e.modelValue === f ? e.clearable === !0 && (n("update:modelValue", null, null),
            n("clear")) : n("update:modelValue", f, m),
            n("click", h))
        }
        function c(f, m) {
            return f[m] === void 0 ? e[m] : f[m]
        }
        function d() {
            const f = l.value.map(m => M(Co, m.props, m.slot !== void 0 ? t[m.slot] : void 0));
            return e.name !== void 0 && e.disable !== !0 && r.value === !0 && i(f, "push"),
            dn(t.default, f)
        }
        return () => M(yA, {
            class: "q-btn-toggle",
            ...s.value,
            rounded: e.rounded,
            stretch: e.stretch,
            glossy: e.glossy,
            spread: e.spread
        }, d)
    }
})
  , OL = Ne({
    name: "QCardActions",
    props: {
        ...gh,
        vertical: Boolean
    },
    setup(e, {slots: t}) {
        const n = ph(e)
          , r = O( () => `q-card__actions ${n.value} q-card__actions--${e.vertical === !0 ? "vert column" : "horiz row"}`);
        return () => M("div", {
            class: r.value
        }, ze(t.default))
    }
})
  , Cd = Ne({
    name: "QItemLabel",
    props: {
        overline: Boolean,
        caption: Boolean,
        header: Boolean,
        lines: [Number, String]
    },
    setup(e, {slots: t}) {
        const n = O( () => parseInt(e.lines, 10))
          , r = O( () => "q-item__label" + (e.overline === !0 ? " q-item__label--overline text-overline" : "") + (e.caption === !0 ? " q-item__label--caption text-caption" : "") + (e.header === !0 ? " q-item__label--header" : "") + (n.value === 1 ? " ellipsis" : ""))
          , o = O( () => e.lines !== void 0 && n.value > 1 ? {
            overflow: "hidden",
            display: "-webkit-box",
            "-webkit-box-orient": "vertical",
            "-webkit-line-clamp": n.value
        } : null);
        return () => M("div", {
            style: o.value,
            class: r.value
        }, ze(t.default))
    }
})
  , DA = Ne({
    name: "QSlideTransition",
    props: {
        appear: Boolean,
        duration: {
            type: Number,
            default: 300
        }
    },
    emits: ["show", "hide"],
    setup(e, {slots: t, emit: n}) {
        let r = !1, o, i, s = null, a = null, l, u;
        function c() {
            o && o(),
            o = null,
            r = !1,
            s !== null && (clearTimeout(s),
            s = null),
            a !== null && (clearTimeout(a),
            a = null),
            i !== void 0 && i.removeEventListener("transitionend", l),
            l = null
        }
        function d(g, b, T) {
            b !== void 0 && (g.style.height = `${b}px`),
            g.style.transition = `height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,
            r = !0,
            o = T
        }
        function f(g, b) {
            g.style.overflowY = null,
            g.style.height = null,
            g.style.transition = null,
            c(),
            b !== u && n(b)
        }
        function m(g, b) {
            let T = 0;
            i = g,
            r === !0 ? (c(),
            T = g.offsetHeight === g.scrollHeight ? 0 : void 0) : (u = "hide",
            g.style.overflowY = "hidden"),
            d(g, T, b),
            s = setTimeout( () => {
                s = null,
                g.style.height = `${g.scrollHeight}px`,
                l = E => {
                    a = null,
                    (Object(E) !== E || E.target === g) && f(g, "show")
                }
                ,
                g.addEventListener("transitionend", l),
                a = setTimeout(l, e.duration * 1.1)
            }
            , 100)
        }
        function h(g, b) {
            let T;
            i = g,
            r === !0 ? c() : (u = "show",
            g.style.overflowY = "hidden",
            T = g.scrollHeight),
            d(g, T, b),
            s = setTimeout( () => {
                s = null,
                g.style.height = 0,
                l = E => {
                    a = null,
                    (Object(E) !== E || E.target === g) && f(g, "hide")
                }
                ,
                g.addEventListener("transitionend", l),
                a = setTimeout(l, e.duration * 1.1)
            }
            , 100)
        }
        return Qe( () => {
            r === !0 && c()
        }
        ),
        () => M(lr, {
            css: !1,
            appear: e.appear,
            onEnter: m,
            onLeave: h
        }, t.default)
    }
})
  , qA = {
    true: "inset",
    item: "item-inset",
    "item-thumbnail": "item-thumbnail-inset"
}
  , ba = {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24
}
  , Td = Ne({
    name: "QSeparator",
    props: {
        ...zt,
        spaced: [Boolean, String],
        inset: [Boolean, String],
        vertical: Boolean,
        color: String,
        size: String
    },
    setup(e) {
        const t = Te()
          , n = Kt(e, t.proxy.$q)
          , r = O( () => e.vertical === !0 ? "vertical" : "horizontal")
          , o = O( () => ` q-separator--${r.value}`)
          , i = O( () => e.inset !== !1 ? `${o.value}-${qA[e.inset]}` : "")
          , s = O( () => `q-separator${o.value}${i.value}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (n.value === !0 ? " q-separator--dark" : ""))
          , a = O( () => {
            const l = {};
            if (e.size !== void 0 && (l[e.vertical === !0 ? "width" : "height"] = e.size),
            e.spaced !== !1) {
                const u = e.spaced === !0 ? `${ba.md}px` : e.spaced in ba ? `${ba[e.spaced]}px` : e.spaced
                  , c = e.vertical === !0 ? ["Left", "Right"] : ["Top", "Bottom"];
                l[`margin${c[0]}`] = l[`margin${c[1]}`] = u
            }
            return l
        }
        );
        return () => M("hr", {
            class: s.value,
            style: a.value,
            "aria-orientation": r.value
        })
    }
})
  , Yn = wl({})
  , BA = Object.keys(Ml)
  , PL = Ne({
    name: "QExpansionItem",
    props: {
        ...Ml,
        ...Wl,
        ...zt,
        icon: String,
        label: String,
        labelLines: [Number, String],
        caption: String,
        captionLines: [Number, String],
        dense: Boolean,
        toggleAriaLabel: String,
        expandIcon: String,
        expandedIcon: String,
        expandIconClass: [Array, String, Object],
        duration: {},
        headerInsetLevel: Number,
        contentInsetLevel: Number,
        expandSeparator: Boolean,
        defaultOpened: Boolean,
        hideExpandIcon: Boolean,
        expandIconToggle: Boolean,
        switchToggleSide: Boolean,
        denseToggle: Boolean,
        group: String,
        popup: Boolean,
        headerStyle: [Array, String, Object],
        headerClass: [Array, String, Object]
    },
    emits: [...zl, "click", "afterShow", "afterHide"],
    setup(e, {slots: t, emit: n}) {
        const {proxy: {$q: r}} = Te()
          , o = Kt(e, r)
          , i = le(e.modelValue !== null ? e.modelValue : e.defaultOpened)
          , s = le(null)
          , a = Tp()
          , {show: l, hide: u, toggle: c} = Kl({
            showing: i
        });
        let d, f;
        const m = O( () => `q-expansion-item q-item-type q-expansion-item--${i.value === !0 ? "expanded" : "collapsed"} q-expansion-item--${e.popup === !0 ? "popup" : "standard"}`)
          , h = O( () => e.contentInsetLevel === void 0 ? null : {
            ["padding" + (r.lang.rtl === !0 ? "Right" : "Left")]: e.contentInsetLevel * 56 + "px"
        })
          , g = O( () => e.disable !== !0 && (e.href !== void 0 || e.to !== void 0 && e.to !== null && e.to !== ""))
          , b = O( () => {
            const z = {};
            return BA.forEach(K => {
                z[K] = e[K]
            }
            ),
            z
        }
        )
          , T = O( () => g.value === !0 || e.expandIconToggle !== !0)
          , E = O( () => e.expandedIcon !== void 0 && i.value === !0 ? e.expandedIcon : e.expandIcon || r.iconSet.expansionItem[e.denseToggle === !0 ? "denseIcon" : "icon"])
          , v = O( () => e.disable !== !0 && (g.value === !0 || e.expandIconToggle === !0))
          , p = O( () => ({
            expanded: i.value === !0,
            detailsId: a.value,
            toggle: c,
            show: l,
            hide: u
        }))
          , C = O( () => {
            const z = e.toggleAriaLabel !== void 0 ? e.toggleAriaLabel : r.lang.label[i.value === !0 ? "collapse" : "expand"](e.label);
            return {
                role: "button",
                "aria-expanded": i.value === !0 ? "true" : "false",
                "aria-controls": a.value,
                "aria-label": z
            }
        }
        );
        ve( () => e.group, z => {
            f !== void 0 && f(),
            z !== void 0 && q()
        }
        );
        function w(z) {
            g.value !== !0 && c(z),
            n("click", z)
        }
        function k(z) {
            z.keyCode === 13 && P(z, !0)
        }
        function P(z, K) {
            K !== !0 && s.value !== null && s.value.focus(),
            c(z),
            Xe(z)
        }
        function A() {
            n("afterShow")
        }
        function R() {
            n("afterHide")
        }
        function q() {
            d === void 0 && (d = Yi()),
            i.value === !0 && (Yn[e.group] = d);
            const z = ve(i, ae => {
                ae === !0 ? Yn[e.group] = d : Yn[e.group] === d && delete Yn[e.group]
            }
            )
              , K = ve( () => Yn[e.group], (ae, ue) => {
                ue === d && ae !== void 0 && ae !== d && u()
            }
            );
            f = () => {
                z(),
                K(),
                Yn[e.group] === d && delete Yn[e.group],
                f = void 0
            }
        }
        function L() {
            const z = {
                class: [`q-focusable relative-position cursor-pointer${e.denseToggle === !0 && e.switchToggleSide === !0 ? " items-end" : ""}`, e.expandIconClass],
                side: e.switchToggleSide !== !0,
                avatar: e.switchToggleSide
            }
              , K = [M(Ht, {
                class: "q-expansion-item__toggle-icon" + (e.expandedIcon === void 0 && i.value === !0 ? " q-expansion-item__toggle-icon--rotated" : ""),
                name: E.value
            })];
            return v.value === !0 && (Object.assign(z, {
                tabindex: 0,
                ...C.value,
                onClick: P,
                onKeyup: k
            }),
            K.unshift(M("div", {
                ref: s,
                class: "q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",
                tabindex: -1
            }))),
            M(oa, z, () => K)
        }
        function H() {
            let z;
            return t.header !== void 0 ? z = [].concat(t.header(p.value)) : (z = [M(oa, () => [M(Cd, {
                lines: e.labelLines
            }, () => e.label || ""), e.caption ? M(Cd, {
                lines: e.captionLines,
                caption: !0
            }, () => e.caption) : null])],
            e.icon && z[e.switchToggleSide === !0 ? "push" : "unshift"](M(oa, {
                side: e.switchToggleSide === !0,
                avatar: e.switchToggleSide !== !0
            }, () => M(Ht, {
                name: e.icon
            })))),
            e.disable !== !0 && e.hideExpandIcon !== !0 && z[e.switchToggleSide === !0 ? "unshift" : "push"](L()),
            z
        }
        function F() {
            const z = {
                ref: "item",
                style: e.headerStyle,
                class: e.headerClass,
                dark: o.value,
                disable: e.disable,
                dense: e.dense,
                insetLevel: e.headerInsetLevel
            };
            return T.value === !0 && (z.clickable = !0,
            z.onClick = w,
            Object.assign(z, g.value === !0 ? b.value : C.value)),
            M(Iw, z, H)
        }
        function ee() {
            return Tl(M("div", {
                key: "e-content",
                class: "q-expansion-item__content relative-position",
                style: h.value,
                id: a.value
            }, ze(t.default)), [[Ib, i.value]])
        }
        function ne() {
            const z = [F(), M(DA, {
                duration: e.duration,
                onShow: A,
                onHide: R
            }, ee)];
            return e.expandSeparator === !0 && z.push(M(Td, {
                class: "q-expansion-item__border q-expansion-item__border--top absolute-top",
                dark: o.value
            }), M(Td, {
                class: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",
                dark: o.value
            })),
            z
        }
        return e.group !== void 0 && q(),
        Qe( () => {
            f !== void 0 && f()
        }
        ),
        () => M("div", {
            class: m.value
        }, [M("div", {
            class: "q-expansion-item__container relative-position"
        }, ne())])
    }
});
export {fL as $, uL as A, Iw as B, sL as C, oa as D, et as E, vL as F, Kr as G, ve as H, Se as I, Tt as J, cs as K, yL as L, nt as M, Eo as N, gl as O, pL as P, oL as Q, EL as R, WA as S, rb as T, dt as U, VA as V, hl as W, SL as X, yA as Y, bL as Z, wL as _, gt as a, CL as a0, TL as a1, _L as a2, AL as a3, kL as a4, xL as a5, LL as a6, Ib as a7, n_ as a8, Zr as a9, Yu as aa, QA as ab, OL as ac, mt as ad, Il as ae, PL as af, c_ as ag, ZA as ah, eL as ai, JA as aj, tL as ak, jA as al, UA as am, YA as an, XA as ao, mL as ap, dL as aq, rL as b, La as c, nL as d, Tl as e, Co as f, GA as g, gb as h, Fm as i, iL as j, lL as k, aL as l, KA as m, cL as n, Aa as o, le as p, Vl as q, HA as r, gL as s, Vp as t, zA as u, O as v, Tv as w, hL as x, yt as y, Ln as z};
