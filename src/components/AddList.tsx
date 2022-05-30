import { v4 as uuidv4 } from "uuid";
import { ActionType } from "../context/actions";
import { useBoardContext } from "../context/context";
import { List } from "../types";

const AddList = () => {
  // const { lists, addList } = useBoardContext();
  const { state, dispatch } = useBoardContext();

  // const handleAddList = () => {
  //   const listTitle = prompt("Please enter list title");

  //   const newList: List = {
  //     title: listTitle || `List #${lists.length + 1}`,
  //     id: uuidv4(),
  //     items: [],
  //   };

  //   addList(newList);
  // };

  const handleAddList = () => {
    const listTitle = prompt("Please enter list title");
    if (listTitle === null) return;
    console.log(
      "🚀 ~ file: AddList.tsx ~ line 22 ~ handleAddList ~ listTitle",
      listTitle
    );

    const newList: List = {
      title: listTitle,
      id: uuidv4(),
      items: [],
    };

    dispatch({ type: ActionType.ADD_LIST, payload: newList });
  };

  return (
    <div>
      <button onClick={handleAddList}>Add list</button>
    </div>
  );
};

export default AddList;
