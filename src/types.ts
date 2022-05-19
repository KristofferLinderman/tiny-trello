export type Item = {
  title: string;
  description: string;
  date: Date;
  id: number;
};

export type List = {
  title: string;
  items: Item[];
  id: number;
};

export type BoardContextType = {
  lists: List[];

  addList: (list: List) => void;
  updateList: (list: List) => void;
  removeList: (listId: number) => void;

  addItem: (item: Item, listId: number) => void;
  updateItem: (item: Item, listId: number) => void;
  removeItem: (itemId: number, listId: number) => void;
};
