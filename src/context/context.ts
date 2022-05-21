import { createContext, useContext, useReducer } from "react";
import { BoardContextType, BoardState } from "../types";
import { BoardActions } from "./actions";
import { boardReducer } from "./reducer";

const initialState: BoardState = {
  "1": { title: "Default List", id: "1", items: [] },
};

const defaultValue: BoardContextType = {
  state: initialState,
  dispatch: () => undefined,
};

const BoardContext = createContext<BoardContextType>(defaultValue);

const useBoardContext = () => useContext(BoardContext);

type ProviderProps = {
  children?: React.ReactNode;
};

const ttt = {};

const BoardProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(boardReducer, initialState);

  return (
    <BoardContext.Provider value={state}>{children}</BoardContext.Provider>
  );
};

export { useBoardContext, BoardProvider };
