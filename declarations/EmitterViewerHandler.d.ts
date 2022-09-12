import type { ViewerEventCallback } from './interfaces/ViewerEventCallback';
import type { ViewerEventWithoutData } from './types/ViewerEventWithoutData';
import type { ViewerEventWithData } from './types/ViewerEventWithData';
import type { ViewerEvent } from './types/ViewerEvent';
import { Emitter } from 'mitt';
declare global {
    interface Window {
        emitter: Emitter<ViewerEvent>;
    }
}
export declare class EmitterViewerHandler {
    #private;
    private target;
    private name;
    get loging(): boolean;
    set loging(v: boolean);
    private logAll;
    private constructor();
    static getInstance(): EmitterViewerHandler;
    setTarget(target: Window, name?: string): void;
    emit<Key extends keyof ViewerEventWithData>(event: Key, data: ViewerEventWithData[Key]): void;
    emit<Key extends keyof ViewerEventWithoutData>(event: Key): void;
    on<Key extends keyof ViewerEventWithData>(event: Key, callback: ViewerEventCallback<ViewerEventWithData[Key]>): void;
    on<Key extends keyof ViewerEventWithoutData>(event: Key, callback: () => void): void;
    once<Key extends keyof ViewerEventWithData>(event: Key, callback: ViewerEventCallback<ViewerEventWithData[Key]>): void;
    once<Key extends keyof ViewerEventWithoutData>(event: Key, callback: () => void): void;
    off<Key extends keyof ViewerEventWithData>(event: Key, handler: ViewerEventCallback<ViewerEventWithData[Key]>): void;
    off<Key extends keyof ViewerEventWithoutData>(event: Key, handler: () => void): void;
}
