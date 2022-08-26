import type { IContextMenuButton } from './IContextMenuButton';
export interface IContextMenuGroup {
    children: IContextMenuButton[];
    icon: string;
    label?: string;
    opened?: boolean;
    style?: any;
}
