import { useEffect } from "react";
import { useBoardContext } from "../../context/BoardContext";
import { useToggle } from "../../hooks/useToggle";
import { Column } from "../../types";
import { ColumnModal } from "../ColumnModal";

type AddColumnProps = {
  selectedColumn: Column | null; // TODO change name to columnToEdit? 🤔
  setSelectedColumn: (column: Column | null) => void;
};

const AddColumn = ({ selectedColumn, setSelectedColumn }: AddColumnProps) => {
  const { addColumn, updateColumn } = useBoardContext();
  const [showModal, toggleModal] = useToggle();

  const isEditingColumn = selectedColumn !== null;

  useEffect(() => {
    if (selectedColumn && !showModal) {
      toggleModal();
    }
  }, [selectedColumn, showModal, toggleModal]);

  const handleColumnSubmit = (column: Column) => {
    toggleModal();
    setSelectedColumn(null);

    if (isEditingColumn) {
      updateColumn(column);
    } else {
      addColumn(column);
    }
  };

  const handleOnCancel = () => {
    toggleModal();
    setSelectedColumn(null);
  };

  return (
    <div>
      <button onClick={toggleModal}>Add column</button>
      <ColumnModal
        column={selectedColumn}
        isOpen={showModal}
        onCancel={handleOnCancel}
        onSubmit={handleColumnSubmit}
        isEditMode={isEditingColumn}
      />
    </div>
  );
};

export { AddColumn };
