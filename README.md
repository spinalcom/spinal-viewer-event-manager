# spinal-viewer-event-manager

# table of events

| event                             | data type              |
| --------------------------------- | ---------------------- |
| AGGREGATE_SELECTION_CHANGED_EVENT | IDbIdModelAggregate[]  |
| VIEWER_INITIALIZED                |                        |
| START_LOAD_MODEL                  | startLoadModelType     |
| VIEWER_OBJ_ISOLATE                | IDbIdModelAggregate[]  |
| VIEWER_OBJ_SELECT                 | IDbIdModelAggregate[]  |
| VIEWER_OBJ_FIT_TO_VIEW            | IDbIdModelAggregate[]  |
| VIEWER_SET_CONTEXT_MENU           | IContextMenuGroup[]    |
| VIEWER_CONTEXT_MENU_CLICK         | IContextMenuEventClick |
| VIEWER_OBJ_COLOR                  | IViewerColorObject[]   |
| VIEWER_RESET_COLORS               |                        |
| VIEWER_ADD_SPRITE                 | IViewerSpriteObject[]  |
| VIEWER_REM_SPRITE                 | IViewerSpriteObject[]  |
| VIEWER_MOV_SPRITE                 | IViewerSpriteObject    |
| VIEWER_REM_ALL_SPRITE             |                        |
| VIEWER_SPRITE_CLICK               | IViewerSpriteObject    |
| VIEWER_SPRITE_MOUSEOVER           | IViewerSpriteObject    |
| VIEWER_ADD_LINE                   | IViewerLineObject[]    |
| VIEWER_REM_LINE                   | IViewerLineObject[]    |
| VIEWER_MOV_LINE                   | IViewerLineObject      |
| VIEWER_LINE_CLICK                 | IViewerLineObject      |
| VIEWER_LINE_MOUSEOVER             | IViewerLineObject      |
| VIEWER_ADD_SPHERE                 | IViewerSphereObject[]  |
| VIEWER_REM_SPHERE                 | IViewerSphereObject[]  |
| VIEWER_MOV_SPHERE                 | IViewerSphereObject    |
| VIEWER_SPHERE_CLICK               | IViewerSphereObject    |
| VIEWER_SPHERE_MOUSEOVER           | IViewerSphereObject    |
| VIEWER_REM_ALL_DRAWINGS           |                        |

## debugging

add to the ENV DEBUG_VIEWER_EMITTER=true
