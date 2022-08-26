import { SceneAlignMethod } from './SceneAlignMethod';
export declare type startLoadModelType = {
    loadingType?: SceneAlignMethod;
    models: {
        name: string;
        id: string;
        path: string;
        dbids?: number[];
        aecPath?: string;
    }[];
};
