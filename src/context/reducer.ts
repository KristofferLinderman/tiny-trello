import { BoardState } from "../types";
import { ActionType, BoardActions } from "./actions";

const boardReducer = (state: BoardState, action: BoardActions) => {
  switch (action.type) {
    case ActionType.ADD_LIST:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case ActionType.UPDATE_LIST:
      return;
    case ActionType.REMOVE_LIST:
      return;
    case ActionType.ADD_ITEM:
      return;
    case ActionType.UPDATE_ITEM:
      return;
    case ActionType.REMOVE_ITEM:
      return;

    default:
      return state;
  }
};

export { boardReducer };
