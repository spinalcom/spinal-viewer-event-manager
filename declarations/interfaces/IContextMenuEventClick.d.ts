import { IDbIdModelAggregate } from './IDbIdModelAggregate';
import { IContextMenuButton } from './IContextMenuButton';
export interface IContextMenuEventClick {
    button: IContextMenuButton;
    selection: IDbIdModelAggregate[];
}
