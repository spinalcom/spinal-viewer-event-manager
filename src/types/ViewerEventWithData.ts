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

import type { IStartLoadModel } from '../interfaces/IStartLoadModel';
import type { IDbIdModelAggregate } from '../interfaces/IDbIdModelAggregate';
import type { IContextMenuGroup } from '../interfaces/IContextMenuGroup';
import type { IViewerColorObject } from '../interfaces/IViewerColorObject';
import type { IViewerSpriteObject } from '../interfaces/IViewerSpriteObject';
import type { IViewerLineObject } from '../interfaces/IViewerLineObject';
import type { IViewerSphereObject } from '../interfaces/IViewerSphereObject';
import type { IContextMenuEventClick } from '../interfaces/IContextMenuEventClick';
import type {
  VIEWER_AGGREGATE_SELECTION_CHANGED,
  VIEWER_START_LOAD_MODEL,
  VIEWER_OBJ_ISOLATE,
  VIEWER_OBJ_SELECT,
  VIEWER_OBJ_FIT_TO_VIEW,
  VIEWER_SET_CONTEXT_MENU,
  VIEWER_OBJ_COLOR,
  VIEWER_ADD_SPRITE,
  VIEWER_REM_SPRITE,
  VIEWER_MOV_SPRITE,
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
  VIEWER_CONTEXT_MENU_CLICK,
} from '../ViewerEventConstants';

export type ViewerEventWithData = {
  [VIEWER_AGGREGATE_SELECTION_CHANGED]: IDbIdModelAggregate[];
  [VIEWER_START_LOAD_MODEL]: IStartLoadModel;
  [VIEWER_OBJ_ISOLATE]: IDbIdModelAggregate[];
  [VIEWER_OBJ_SELECT]: IDbIdModelAggregate[];
  [VIEWER_OBJ_FIT_TO_VIEW]: IDbIdModelAggregate[];
  [VIEWER_SET_CONTEXT_MENU]: IContextMenuGroup[];
  [VIEWER_CONTEXT_MENU_CLICK]: IContextMenuEventClick;
  [VIEWER_OBJ_COLOR]: IViewerColorObject[];
  [VIEWER_ADD_SPRITE]: IViewerSpriteObject[];
  [VIEWER_REM_SPRITE]: IViewerSpriteObject[];
  [VIEWER_MOV_SPRITE]: IViewerSpriteObject[];
  [VIEWER_SPRITE_MOUSEOVER]: IViewerSpriteObject;
  [VIEWER_SPRITE_CLICK]: IViewerSpriteObject;
  [VIEWER_ADD_LINE]: IViewerLineObject[];
  [VIEWER_REM_LINE]: IViewerLineObject[];
  [VIEWER_MOV_LINE]: IViewerLineObject[];
  [VIEWER_LINE_CLICK]: IViewerLineObject;
  [VIEWER_LINE_MOUSEOVER]: IViewerLineObject;
  [VIEWER_ADD_SPHERE]: IViewerSphereObject[];
  [VIEWER_REM_SPHERE]: IViewerSphereObject[];
  [VIEWER_MOV_SPHERE]: IViewerSphereObject[];
  [VIEWER_SPHERE_CLICK]: IViewerSphereObject;
  [VIEWER_SPHERE_MOUSEOVER]: IViewerSphereObject;
};
