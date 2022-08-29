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
var _a, _EmitterViewerHandler_instance;
import mitt from 'mitt';
export class EmitterViewerHandler {
    constructor() {
        this.target = window;
        this.name = '';
    }
    static getInstance() {
        return __classPrivateFieldGet(EmitterViewerHandler, _a, "f", _EmitterViewerHandler_instance);
    }
    setTarget(target, name) {
        this.name = name ? name : '';
        this.target = target;
        if (typeof this.target.emitter === 'undefined') {
            const emitter = mitt();
            this.target.emitter = emitter;
        }
    }
    emit(event, data) {
        var _b, _c;
        (_c = (_b = this.target) === null || _b === void 0 ? void 0 : _b.emitter) === null || _c === void 0 ? void 0 : _c.emit(event, data);
    }
    on(event, callback) {
        var _b, _c;
        (_c = (_b = this.target) === null || _b === void 0 ? void 0 : _b.emitter) === null || _c === void 0 ? void 0 : _c.on(event, callback);
    }
    off(event, handler) {
        var _b, _c;
        (_c = (_b = this.target) === null || _b === void 0 ? void 0 : _b.emitter) === null || _c === void 0 ? void 0 : _c.off(event, handler);
    }
}
_a = EmitterViewerHandler;
// singleton
_EmitterViewerHandler_instance = { value: new EmitterViewerHandler() };
