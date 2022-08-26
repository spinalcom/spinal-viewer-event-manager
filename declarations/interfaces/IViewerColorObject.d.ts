import { IDbIdModelAggregate } from './IDbIdModelAggregate';
export interface IViewerColorObject extends IDbIdModelAggregate {
    id: string | number;
    color: string;
}
