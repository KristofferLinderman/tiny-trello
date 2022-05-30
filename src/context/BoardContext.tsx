// import { createContext, useContext, useState } from "react";
// import { BoardContextType, Item, List } from "../types";

// const defaultValue: BoardContextType = {
//   lists: [],
//   addList: (list: List) => {},
//   updateList: (list: List) => {},
//   removeList: (listId: string) => {},
//   addItem: (item: Item, listId: string) => {},
//   updateItem: (item: Item, listId: string) => {},
//   removeItem: (itemId: string, listId: string) => {},
// };

// const BoardContext = createContext<BoardContextType>(defaultValue);

// type ProviderProps = {
//   children?: React.ReactNode;
// };

// const BoardProvider = ({ children }: ProviderProps) => {
//   const [lists, setLists] = useState<List[]>([]);

//   const addList = (list: List) => {
//     setLists([...lists, list]);
//   };

//   const updateList = (list: List) => {
//     const newLists = lists.map((_list) => {
//       if (_list.id === list.id) {
//         return list;
//       }

//       return _list;
//     });

//     setLists(newLists);
//   };

//   const removeList = (listId: string) => {
//     const newLists = lists.filter((list) => list.id !== listId);

//     setLists(newLists);
//   };

//   const addItem = (item: Item, listId: string) => {
//     const newLists = lists.map((list) => {
//       if (list.id === listId) {
//         const newList = list;
//         newList.items = [...newList.items, item];
//         return newList;
//       }

//       return list;
//     });

//     setLists(newLists);
//   };

//   const updateItem = (item: Item, listId: string) => {
//     const newLists = lists.map((list) => {
//       if (list.id === listId) {
//         const newList = list;

//         newList.items = list.items.map((_item) => {
//           if (_item.id === item.id) {
//             return item;
//           }
//           return _item;
//         });

//         return newList;
//       }

//       return list;
//     });

//     setLists(newLists);
//   };

//   const removeItem = (itemId: string, listId: string) => {
//     const newLists = lists.map((list) => {
//       if (list.id === listId) {
//         const newList = list;
//         newList.items = list.items.filter((item) => item.id !== itemId);

//         return newList;
//       }

//       return list;
//     });

//     setLists(newLists);
//   };

//   return (
//     <BoardContext.Provider
//       value={{
//         lists,
//         addList,
//         updateList,
//         removeList,
//         addItem,
//         updateItem,
//         removeItem,
//       }}
//     >
//       {children}
//     </BoardContext.Provider>
//   );
// };

// const useBoardContext = () => {
//   return useContext(BoardContext);
// };

// export { BoardContext, BoardProvider, useBoardContext };

export {};
