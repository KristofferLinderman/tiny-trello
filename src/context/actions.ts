import { Item, List } from "../types";

export enum ActionType {
  ADD_LIST,
  UPDATE_LIST,
  REMOVE_LIST,
  ADD_ITEM,
  UPDATE_ITEM,
  REMOVE_ITEM,
}

export type AddList = {
  type: ActionType.ADD_LIST;
  payload: List;
};

export type UpdateList = {
  type: ActionType.UPDATE_LIST;
  payload: List;
};

export type RemoveList = {
  type: ActionType.REMOVE_LIST;
  payload: { listId: string };
};

export type AddItem = {
  type: ActionType.ADD_ITEM;
  payload: { item: Item; listId: string };
};

export type UpdateItem = {
  type: ActionType.UPDATE_ITEM;
  payload: { item: Item; listId: string };
};

export type RemoveItem = {
  type: ActionType.REMOVE_ITEM;
  payload: { itemId: string; listId: string };
};

export type BoardActions = AddList;
// | UpdateList
// | RemoveList
// | AddItem
// | UpdateItem
// | RemoveItem;
