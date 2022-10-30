import { addItemAction, removeItemAction } from './StateContext';

export type TAction = ReturnType<typeof removeItemAction> | ReturnType<typeof addItemAction>;
