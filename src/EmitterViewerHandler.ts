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

import type { startLoadModelType } from './interfaces/startLoadModelType';
import type { IDbIdModelAggregate } from './interfaces/IDbIdModelAggregate';
import type { IContextMenuGroup } from './interfaces/IContextMenuGroup';
import type { IViewerColorObject } from './interfaces/IViewerColorObject';
import type { IViewerSpriteObject } from './interfaces/IViewerSpriteObject';
import type { IViewerLineObject } from './interfaces/IViewerLineObject';
import type { IViewerSphereObject } from './interfaces/IViewerSphereObject';
import type { ViewerEventCallback } from './interfaces/ViewerEventCallback';
import type { IContextMenuEventClick } from './interfaces/IContextMenuEventClick';
import type {
  AGGREGATE_SELECTION_CHANGED_EVENT,
  START_LOAD_MODEL,
  VIEWER_INITIALIZED,
  VIEWER_OBJ_ISOLATE,
  VIEWER_OBJ_SELECT,
  VIEWER_OBJ_FIT_TO_VIEW,
  VIEWER_SET_CONTEXT_MENU,
  VIEWER_OBJ_COLOR,
  VIEWER_RESET_COLORS,
  VIEWER_ADD_SPRITE,
  VIEWER_REM_SPRITE,
  VIEWER_MOV_SPRITE,
  VIEWER_REM_ALL_SPRITE,
  VIEWER_SPRITE_MOUSEOVER,
  VIEWER_SPRITE_CLICK,
  VIEWER_ADD_LINE,
  VIEWER_REM_LINE,
  VIEWER_MOV_LINE,
  VIEWER_LINE_CLICK,
  VIEWER_LINE_MOUSEOVER,
  VIEWER_ADD_SPHERE,
  VIEWER_REM_SPHERE,
  VIEWER_MOV_SPHERE,
  VIEWER_SPHERE_CLICK,
  VIEWER_SPHERE_MOUSEOVER,
  VIEWER_REM_ALL_DRAWINGS,
  VIEWER_CONTEXT_MENU_CLICK,
} from './ViewerEventConstants';

import mitt, { Emitter } from 'mitt';

declare global {
  interface Window {
    emitter: Emitter<any>;
  }
}
export class EmitterViewerHandler {
  private target: Window = window;

  // singleton
  static #instance: EmitterViewerHandler = new EmitterViewerHandler();
  private constructor() {}
  public static getInstance(): EmitterViewerHandler {
    return EmitterViewerHandler.#instance;
  }
  name: string = '';

  public setTarget(target: Window, name?: string): void {
    this.name = name ? name : '';
    this.target = target;
    if (typeof this.target.emitter === 'undefined') {
      const emitter = mitt<any>();
      this.target.emitter = emitter;
    }
  }

  emit(event: typeof VIEWER_ADD_LINE, data: IViewerLineObject[]): void;
  emit(event: typeof VIEWER_REM_LINE, data: IViewerLineObject[]): void;
  emit(event: typeof VIEWER_MOV_LINE, data: IViewerLineObject): void;
  emit(event: typeof VIEWER_LINE_CLICK, data: IViewerLineObject): void;
  emit(event: typeof VIEWER_LINE_MOUSEOVER, data: IViewerLineObject): void;
  emit(event: typeof VIEWER_ADD_SPHERE, data: IViewerSphereObject[]): void;
  emit(event: typeof VIEWER_REM_SPHERE, data: IViewerSphereObject[]): void;
  emit(event: typeof VIEWER_MOV_SPHERE, data: IViewerSphereObject): void;
  emit(event: typeof VIEWER_SPHERE_CLICK, data: IViewerSphereObject): void;
  emit(event: typeof VIEWER_SPHERE_MOUSEOVER, data: IViewerSphereObject): void;
  emit(event: typeof VIEWER_REM_ALL_DRAWINGS): void;
  emit(event: typeof VIEWER_ADD_SPRITE, data: IViewerSpriteObject[]): void;
  emit(event: typeof VIEWER_REM_SPRITE, data: IViewerSpriteObject[]): void;
  emit(event: typeof VIEWER_MOV_SPRITE, data: IViewerSpriteObject): void;
  emit(event: typeof VIEWER_REM_ALL_SPRITE): void;
  emit(event: typeof VIEWER_SPRITE_MOUSEOVER, data: IViewerSpriteObject): void;
  emit(event: typeof VIEWER_SPRITE_CLICK, data: IViewerSpriteObject): void;
  emit(event: typeof VIEWER_OBJ_COLOR, data: IViewerColorObject[]): void;
  emit(event: typeof VIEWER_RESET_COLORS): void;
  emit(event: typeof VIEWER_SET_CONTEXT_MENU, data: IContextMenuGroup[]): void;
  emit(
    event: typeof VIEWER_CONTEXT_MENU_CLICK,
    data: IContextMenuEventClick
  ): void;
  emit(event: typeof VIEWER_OBJ_ISOLATE, data: IDbIdModelAggregate[]): void;
  emit(event: typeof VIEWER_OBJ_SELECT, data: IDbIdModelAggregate[]): void;
  emit(event: typeof VIEWER_OBJ_FIT_TO_VIEW, data: IDbIdModelAggregate[]): void;
  emit(event: typeof START_LOAD_MODEL, data: startLoadModelType): void;
  emit(event: typeof VIEWER_INITIALIZED): void;
  emit(
    event: typeof AGGREGATE_SELECTION_CHANGED_EVENT,
    data: IDbIdModelAggregate[]
  ): void;
  emit(event: string, data?: any): void {
    this.target?.emitter?.emit(event, data);
  }

  on(
    event: typeof VIEWER_ADD_LINE,
    callback: ViewerEventCallback<IViewerLineObject[]>
  ): void;
  on(
    event: typeof VIEWER_REM_LINE,
    callback: ViewerEventCallback<IViewerLineObject[]>
  ): void;
  on(
    event: typeof VIEWER_MOV_LINE,
    callback: ViewerEventCallback<IViewerLineObject>
  ): void;
  on(
    event: typeof VIEWER_LINE_CLICK,
    callback: ViewerEventCallback<IViewerLineObject>
  ): void;
  on(
    event: typeof VIEWER_LINE_MOUSEOVER,
    callback: ViewerEventCallback<IViewerLineObject>
  ): void;
  on(
    event: typeof VIEWER_ADD_SPHERE,
    callback: ViewerEventCallback<IViewerSphereObject[]>
  ): void;
  on(
    event: typeof VIEWER_REM_SPHERE,
    callback: ViewerEventCallback<IViewerSphereObject[]>
  ): void;
  on(
    event: typeof VIEWER_MOV_SPHERE,
    callback: ViewerEventCallback<IViewerSphereObject>
  ): void;
  on(
    event: typeof VIEWER_SPHERE_CLICK,
    callback: ViewerEventCallback<IViewerSphereObject>
  ): void;
  on(
    event: typeof VIEWER_SPHERE_MOUSEOVER,
    callback: ViewerEventCallback<IViewerSphereObject>
  ): void;
  on(event: typeof VIEWER_REM_ALL_DRAWINGS, callback: () => void): void;
  on(
    event: typeof VIEWER_ADD_SPRITE,
    callback: ViewerEventCallback<IViewerSpriteObject[]>
  ): void;
  on(
    event: typeof VIEWER_REM_SPRITE,
    callback: ViewerEventCallback<IViewerSpriteObject[]>
  ): void;
  on(
    event: typeof VIEWER_MOV_SPRITE,
    callback: ViewerEventCallback<IViewerSpriteObject>
  ): void;
  on(event: typeof VIEWER_REM_ALL_SPRITE, callback: () => void): void;
  on(
    event: typeof VIEWER_OBJ_COLOR,
    callback: ViewerEventCallback<IViewerColorObject[]>
  ): void;
  on(
    event: typeof VIEWER_SET_CONTEXT_MENU,
    callback: ViewerEventCallback<IContextMenuGroup[]>
  ): void;
  on(
    event: typeof VIEWER_CONTEXT_MENU_CLICK,
    callback: ViewerEventCallback<IContextMenuEventClick>
  ): void;

  on(
    event: typeof VIEWER_OBJ_ISOLATE,
    callback: ViewerEventCallback<IDbIdModelAggregate[]>
  ): void;
  on(
    event: typeof VIEWER_OBJ_SELECT,
    callback: ViewerEventCallback<IDbIdModelAggregate[]>
  ): void;
  on(
    event: typeof VIEWER_OBJ_FIT_TO_VIEW,
    callback: ViewerEventCallback<IDbIdModelAggregate[]>
  ): void;
  on(
    event: typeof START_LOAD_MODEL,
    callback: ViewerEventCallback<startLoadModelType>
  ): void;
  on(event: typeof VIEWER_INITIALIZED, callback: () => void): void;
  on(
    event: typeof AGGREGATE_SELECTION_CHANGED_EVENT,
    callback: ViewerEventCallback<IDbIdModelAggregate[]>
  ): void;
  on(event: string, callback: (data?: any) => any) {
    this.target?.emitter?.on(event, callback);
  }

  off(
    event:
      | typeof VIEWER_SET_CONTEXT_MENU
      | typeof VIEWER_CONTEXT_MENU_CLICK
      | typeof VIEWER_OBJ_ISOLATE
      | typeof VIEWER_OBJ_SELECT
      | typeof VIEWER_OBJ_FIT_TO_VIEW
      | typeof AGGREGATE_SELECTION_CHANGED_EVENT
      | typeof VIEWER_INITIALIZED
      | typeof START_LOAD_MODEL
      | typeof VIEWER_OBJ_COLOR
      | typeof VIEWER_RESET_COLORS
      | typeof VIEWER_ADD_SPRITE
      | typeof VIEWER_REM_SPRITE
      | typeof VIEWER_MOV_SPRITE
      | typeof VIEWER_REM_ALL_SPRITE
      | typeof VIEWER_SPRITE_CLICK
      | typeof VIEWER_SPRITE_MOUSEOVER
      | typeof VIEWER_ADD_LINE
      | typeof VIEWER_REM_LINE
      | typeof VIEWER_MOV_LINE
      | typeof VIEWER_LINE_CLICK
      | typeof VIEWER_LINE_MOUSEOVER
      | typeof VIEWER_ADD_SPHERE
      | typeof VIEWER_REM_SPHERE
      | typeof VIEWER_MOV_SPHERE
      | typeof VIEWER_SPHERE_CLICK
      | typeof VIEWER_SPHERE_MOUSEOVER
      | typeof VIEWER_REM_ALL_DRAWINGS,
    handler: (data?: any) => any
  ): void {
    this.target?.emitter?.off(event, handler);
  }
}
