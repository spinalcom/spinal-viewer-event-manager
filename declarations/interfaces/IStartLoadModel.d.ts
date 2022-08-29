import { SceneAlignMethod } from './SceneAlignMethod';
export interface IStartLoadModel {
    loadingType?: SceneAlignMethod;
    models: {
        name: string;
        id: string;
        path: string;
        dbids?: number[];
        aecPath?: string;
    }[];
}
