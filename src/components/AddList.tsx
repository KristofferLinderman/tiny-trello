import { v4 as uuidv4 } from "uuid";
import { useBoardContext } from "../context/BoardContext";
import { List } from "../types";

const AddList = () => {
  const { lists, addList } = useBoardContext();

  const handleAddList = () => {
    const listTitle = prompt("Please enter list title");

    const newList: List = {
      title: listTitle || `List #${lists.length + 1}`,
      id: uuidv4(),
      items: [],
    };

    addList(newList);
  };
  return (
    <div>
      <button onClick={handleAddList}>Add list</button>
    </div>
  );
};

export default AddList;
