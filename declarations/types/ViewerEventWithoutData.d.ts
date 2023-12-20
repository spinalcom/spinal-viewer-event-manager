import type { VIEWER_INITIALIZED, VIEWER_RESET_COLORS, VIEWER_REM_ALL_SPRITE, VIEWER_REM_ALL_DRAWINGS } from '../ViewerEventConstants';
export type ViewerEventWithoutData = {
    [VIEWER_INITIALIZED]: undefined;
    [VIEWER_RESET_COLORS]: undefined;
    [VIEWER_REM_ALL_SPRITE]: undefined;
    [VIEWER_REM_ALL_DRAWINGS]: undefined;
};
