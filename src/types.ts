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

export type BoardContextType = {
  lists: List[];

  addList: (list: List) => void;
  updateList: (list: List) => void;
  removeList: (listId: string) => void;

  addItem: (item: Item, listId: string) => void;
  updateItem: (item: Item, listId: string) => void;
  removeItem: (itemId: string, listId: string) => void;
};
