"use strict";
/*
 * Copyright 2022 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Free Software license Agreement ("Agreement")
 * carefully.
 *
 * This Agreement is a legally binding contract between
 * the Licensee (as defined below) and SpinalCom that
 * sets forth the terms and conditions that govern your
 * use of the Program. By installing and/or using the
 * Program, you agree to abide by all the terms and
 * conditions stated or referenced herein.
 *
 * If you do not agree to abide by these terms and
 * conditions, do not demonstrate your acceptance and do
 * not install or use the Program.
 * You should have received a copy of the license along
 * with this file. If not, see
 * <http://resources.spinalcom.com/licenses.pdf>.
 */
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _EmitterViewerHandler_loging, _EmitterViewerHandler_started, _EmitterViewerHandler_instance;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmitterViewerHandler = void 0;
const mitt_1 = require("mitt");
class EmitterViewerHandler {
    get loging() {
        return __classPrivateFieldGet(this, _EmitterViewerHandler_loging, "f");
    }
    set loging(v) {
        var _b, _c, _d, _e;
        __classPrivateFieldSet(this, _EmitterViewerHandler_loging, v, "f");
        if (v) {
            (_c = (_b = this.target) === null || _b === void 0 ? void 0 : _b.emitter) === null || _c === void 0 ? void 0 : _c.on('*', this.logAll);
        }
        else {
            (_e = (_d = this.target) === null || _d === void 0 ? void 0 : _d.emitter) === null || _e === void 0 ? void 0 : _e.off('*', this.logAll);
        }
    }
    logAll() {
        console.log('EV=>', ...arguments);
    }
    constructor() {
        this.target = window;
        this.name = '';
        _EmitterViewerHandler_loging.set(this, false);
        _EmitterViewerHandler_started.set(this, false);
    }
    static getInstance() {
        return __classPrivateFieldGet(EmitterViewerHandler, _a, "f", _EmitterViewerHandler_instance);
    }
    setTarget(target, name) {
        this.name = name ? name : '';
        this.target = target;
        if (typeof this.target.emitter === 'undefined') {
            const emitter = (0, mitt_1.default)();
            this.target.emitter = emitter;
        }
        if (__classPrivateFieldGet(this, _EmitterViewerHandler_started, "f") === false && this.loging) {
            this.target.emitter.on('*', this.logAll);
        }
        __classPrivateFieldSet(this, _EmitterViewerHandler_started, true, "f");
    }
    emit(event, data) {
        var _b, _c;
        if (this.loging)
            console.log(`[${this.name}] emit '${event}'`, data);
        (_c = (_b = this.target) === null || _b === void 0 ? void 0 : _b.emitter) === null || _c === void 0 ? void 0 : _c.emit(event, data);
    }
    on(event, callback) {
        var _b, _c;
        if (this.loging)
            console.log(`[${this.name}] start listen '${event}'`);
        (_c = (_b = this.target) === null || _b === void 0 ? void 0 : _b.emitter) === null || _c === void 0 ? void 0 : _c.on(event, callback);
    }
    once(event, callback) {
        var _b, _c;
        if (this.loging)
            console.log(`[${this.name}] start listen once '${event}'`);
        const cb = (data) => {
            var _b, _c;
            (_c = (_b = this.target) === null || _b === void 0 ? void 0 : _b.emitter) === null || _c === void 0 ? void 0 : _c.off(event, cb);
            callback(data);
        };
        (_c = (_b = this.target) === null || _b === void 0 ? void 0 : _b.emitter) === null || _c === void 0 ? void 0 : _c.on(event, cb);
    }
    off(event, handler) {
        var _b, _c;
        if (this.loging)
            console.log(`[${this.name}] stop listen '${event}'`);
        (_c = (_b = this.target) === null || _b === void 0 ? void 0 : _b.emitter) === null || _c === void 0 ? void 0 : _c.off(event, handler);
    }
}
exports.EmitterViewerHandler = EmitterViewerHandler;
_a = EmitterViewerHandler, _EmitterViewerHandler_loging = new WeakMap(), _EmitterViewerHandler_started = new WeakMap();
// singleton
_EmitterViewerHandler_instance = { value: new EmitterViewerHandler() };
