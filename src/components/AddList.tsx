import React from "react";
import { useBoardContext } from "../context/BoardContext";
import { List } from "../types";

const AddList = () => {
  const { lists, addList } = useBoardContext();

  const handleAddList = () => {
    const listTitle = prompt("Please enter list title");

    const newList: List = {
      title: listTitle || `List #${lists.length + 1}`,
      id: Math.random() * Math.random() * Math.random() * Math.random() * 100,
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
