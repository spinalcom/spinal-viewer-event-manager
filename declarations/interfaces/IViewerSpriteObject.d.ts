import { IPos } from './IPos';
import { IViewerDrawableObject } from './IViewerDrawableObject';
export interface IViewerSpriteObject extends IViewerDrawableObject {
    img?: string;
    pos?: IPos;
    style?: any;
}
