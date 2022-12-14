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

import type { ViewerEventCallback } from './interfaces/ViewerEventCallback';
import type { ViewerEventWithoutData } from './types/ViewerEventWithoutData';
import type { ViewerEventWithData } from './types/ViewerEventWithData';
import type { ViewerEvent } from './types/ViewerEvent';

import mitt, { Emitter } from 'mitt';

declare global {
  interface Window {
    emitter: Emitter<ViewerEvent>;
  }
}

export class EmitterViewerHandler {
  private target: Window = window;
  private name: string = '';
  #loging = false;
  #started = false;

  public get loging(): boolean {
    return this.#loging;
  }
  public set loging(v: boolean) {
    this.#loging = v;
    if (v) {
      this.target?.emitter?.on('*', this.logAll);
    } else {
      this.target?.emitter?.off('*', this.logAll);
    }
  }

  private logAll(): void {
    console.log('EV=>', ...arguments);
  }

  // singleton
  static #instance: EmitterViewerHandler = new EmitterViewerHandler();
  private constructor() {}
  public static getInstance(): EmitterViewerHandler {
    return EmitterViewerHandler.#instance;
  }

  public setTarget(target: Window, name?: string): void {
    this.name = name ? name : '';
    this.target = target;
    if (typeof this.target.emitter === 'undefined') {
      const emitter = mitt<any>();
      this.target.emitter = emitter;
    }

    if (this.#started === false && this.loging) {
      this.target.emitter.on('*', this.logAll);
    }
    this.#started = true;
  }

  emit<Key extends keyof ViewerEventWithData>(
    event: Key,
    data: ViewerEventWithData[Key]
  ): void;
  emit<Key extends keyof ViewerEventWithoutData>(event: Key): void;
  emit<Key extends keyof ViewerEvent>(
    event: Key,
    data?: ViewerEvent[Key]
  ): void {
    if (this.loging) console.log(`[${this.name}] emit '${event}'`, data);
    this.target?.emitter?.emit(event, data);
  }

  on<Key extends keyof ViewerEventWithData>(
    event: Key,
    callback: ViewerEventCallback<ViewerEventWithData[Key]>
  ): void;
  on<Key extends keyof ViewerEventWithoutData>(
    event: Key,
    callback: () => void
  ): void;
  on<Key extends keyof ViewerEvent>(
    event: Key,
    callback?: ViewerEventCallback<ViewerEvent[Key]>
  ): void {
    if (this.loging) console.log(`[${this.name}] start listen '${event}'`);
    this.target?.emitter?.on(event, callback);
  }

  once<Key extends keyof ViewerEventWithData>(
    event: Key,
    callback: ViewerEventCallback<ViewerEventWithData[Key]>
  ): void;
  once<Key extends keyof ViewerEventWithoutData>(
    event: Key,
    callback: () => void
  ): void;
  once<Key extends keyof ViewerEvent>(
    event: Key,
    callback?: ViewerEventCallback<ViewerEvent[Key]>
  ): void {
    if (this.loging) console.log(`[${this.name}] start listen once '${event}'`);

    const cb = (data: any) => {
      this.target?.emitter?.off(event, cb);
      callback(data);
    };
    this.target?.emitter?.on(event, cb);
  }

  off<Key extends keyof ViewerEventWithData>(
    event: Key,
    handler: ViewerEventCallback<ViewerEventWithData[Key]>
  ): void;
  off<Key extends keyof ViewerEventWithoutData>(
    event: Key,
    handler: () => void
  ): void;
  off<Key extends keyof ViewerEvent>(
    event: Key,
    handler?: ViewerEventCallback<ViewerEvent[Key]>
  ): void {
    if (this.loging) console.log(`[${this.name}] stop listen '${event}'`);
    this.target?.emitter?.off(event, handler);
  }
}
