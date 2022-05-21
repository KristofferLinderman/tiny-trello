import { v4 as uuidv4 } from "uuid";
import { useBoardContext } from "../../context/BoardContext";
import { Column } from "../../types";

const AddColumn = () => {
  const { columns, addColumn } = useBoardContext();

  const handleAddColumn = () => {
    const columnTitle = prompt("Please enter column title");

    const newColumn: Column = {
      title: columnTitle || `Column #${columns.length + 1}`,
      id: uuidv4(),
      tasks: [],
    };

    addColumn(newColumn);
  };
  return (
    <div>
      <button onClick={handleAddColumn}>Add column</button>
    </div>
  );
};

export { AddColumn };
