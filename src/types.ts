import { Dispatch } from "react";
import { BoardActions } from "./context/actions";

export type Item = {
  title: string;
  description: string;
  date: Date;
  id: string;
};

export type List = {
  title: string;
  items: Item[];
  id: string;
};

export type _BoardContextType = {
  lists: List[];

  addList: (list: List) => void;
  updateList: (list: List) => void;
  removeList: (listId: string) => void;

  addItem: (item: Item, listId: string) => void;
  updateItem: (item: Item, listId: string) => void;
  removeItem: (itemId: string, listId: string) => void;
};

export type BoardState = {
  [key: string]: List;
};

export type BoardContextType = {
  state: BoardState;
  dispatch: Dispatch<BoardActions>;
};
