import { SceneAlignMethod } from './SceneAlignMethod';
export interface IStartLoadModel {
    loadingType?: SceneAlignMethod;
    buildingId?: string;
    models: {
        name: string;
        id: string;
        path: string;
        dbids?: number[];
        aecPath?: string;
    }[];
}
