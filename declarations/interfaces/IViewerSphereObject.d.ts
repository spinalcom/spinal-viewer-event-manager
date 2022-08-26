import { IPos } from './IPos';
import { IViewerDrawableObject } from './IViewerDrawableObject';
export interface IViewerSphereObject extends IViewerDrawableObject {
    pos?: IPos;
    radius?: number;
    /**
     * number of horizontal segments. Minimum value is 3, and the default is 32.
     * @type {number}
     * @memberof IViewerSphereObject
     */
    widthSegments?: number;
    /**
     * number of vertical segments. Minimum value is 2, and the default is 16.
     * @type {number}
     * @memberof IViewerSphereObject
     */
    heightSegments?: number;
    color?: string;
}
