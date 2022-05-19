import { createContext, useContext, useState } from "react";
import { BoardContextType, Item, List } from "../types";

const defaultValue: BoardContextType = {
  lists: [],
  addList: (list: List) => {},
  updateList: (list: List) => {},
  removeList: (listId: number) => {},
  addItem: (item: Item, listId: number) => {},
  updateItem: (item: Item, listId: number) => {},
  removeItem: (itemId: number, listId: number) => {},
};

const BoardContext = createContext<BoardContextType>(defaultValue);

type ProviderProps = {
  children?: React.ReactNode;
};

const BoardProvider = ({ children }: ProviderProps) => {
  const [lists, setLists] = useState<List[]>([]);

  const addList = (list: List) => {
    setLists([...lists, list]);
  };

  const updateList = (list: List) => {};

  const removeList = (listId: number) => {};

  const addItem = (item: Item, listId: number) => {
    const newLists = lists.map((list) => {
      if (list.id === listId) {
        const newList = list;
        newList.items = [...newList.items, item];
        return newList;
      }

      return list;
    });

    setLists(newLists);
  };

  const updateItem = (item: Item) => {};

  const removeItem = (itemId: number, listId: number) => {};

  return (
    <BoardContext.Provider
      value={{
        lists: lists,
        addList: addList,
        updateList,
        removeList,
        addItem,
        updateItem,
        removeItem,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

const useBoardContext = () => {
  return useContext(BoardContext);
};

export { BoardContext, BoardProvider, useBoardContext };
