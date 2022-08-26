import { IPos } from './IPos';
import { IViewerDrawableObject } from './IViewerDrawableObject';
export interface IViewerLineObject extends IViewerDrawableObject {
    pos1?: IPos;
    pos2?: IPos;
    color: string;
}
