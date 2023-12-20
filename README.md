# spinal-viewer-event-manager

Event manager used in the spinal-env-pam-apps-portail to manage the viewer.

## table of events

| event                              | data type              |
| ---------------------------------- | ---------------------- |
| VIEWER_INITIALIZED                 |                        |
| VIEWER_RESET_COLORS                |                        |
| VIEWER_REM_ALL_SPRITE              |                        |
| VIEWER_REM_ALL_DRAWINGS            |                        |
| VIEWER_AGGREGATE_SELECTION_CHANGED | IDbIdModelAggregate[]  |
| VIEWER_START_LOAD_MODEL            | IStartLoadModel        |
| VIEWER_SET_CAMERA                  | EViewerSetCamera       |
| VIEWER_OBJ_ISOLATE                 | IDbIdModelAggregate[]  |
| VIEWER_OBJ_SELECT                  | IDbIdModelAggregate[]  |
| VIEWER_OBJ_FIT_TO_VIEW             | IDbIdModelAggregate[]  |
| VIEWER_SET_CONTEXT_MENU            | IContextMenuGroup[]    |
| VIEWER_CONTEXT_MENU_CLICK          | IContextMenuEventClick |
| VIEWER_OBJ_COLOR                   | IViewerColorObject[]   |
| VIEWER_ADD_SPRITE                  | IViewerSpriteObject[]  |
| VIEWER_REM_SPRITE                  | IViewerSpriteObject[]  |
| VIEWER_MOV_SPRITE                  | IViewerSpriteObject[]  |
| VIEWER_SPRITE_MOUSEOVER            | IViewerSpriteObject    |
| VIEWER_SPRITE_CLICK                | IViewerSpriteObject    |
| VIEWER_SPRITE_SELECT               | IViewerSpriteObject    |
| VIEWER_ADD_LINE                    | IViewerLineObject[]    |
| VIEWER_REM_LINE                    | IViewerLineObject[]    |
| VIEWER_MOV_LINE                    | IViewerLineObject[]    |
| VIEWER_LINE_CLICK                  | IViewerLineObject      |
| VIEWER_LINE_MOUSEOVER              | IViewerLineObject      |
| VIEWER_ADD_SPHERE                  | IViewerSphereObject[]  |
| VIEWER_REM_SPHERE                  | IViewerSphereObject[]  |
| VIEWER_MOV_SPHERE                  | IViewerSphereObject[]  |
| VIEWER_SPHERE_CLICK                | IViewerSphereObject    |
| VIEWER_SPHERE_MOUSEOVER            | IViewerSphereObject    |

## usage

```ts
import {
  VIEWER_OBJ_SELECT,
  VIEWER_INITIALIZED,
  EmitterViewerHandler,
  IDbIdModelAggregate,
} from 'spinal-viewer-event-manager';

// get singleton instance
const emitterHandler = EmitterViewerHandler.getInstance();

// enable loging
emitterHandler.loging = true;

// set target window (either window or window.parent if iframe)
emitterHandler.setTarget(window, 'a name for the loging');

// create callback functions
function callbackObjectSelect(data: IDbIdModelAggregate[]) {
  // do something
}

// listen to events
emitterHandler.once(VIEWER_INITIALIZED, () => {
  // callback will be called only once
});
emitterHandler.on(VIEWER_OBJ_SELECT, callbackObjectSelect);

// stop listen to events
emitterHandler.off(VIEWER_OBJ_SELECT, callbackObjectSelect);
```
