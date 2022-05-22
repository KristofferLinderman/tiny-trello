import { useEffect } from "react";
import { useBoardContext } from "../../context/BoardContext";
import { useToggle } from "../../hooks/useToggle";
import { Column } from "../../types";
import { ColumnModal } from "../ColumnModal";
import { Button, Container } from "./AddColumn.style";

type AddColumnProps = {
  columnToEdit: Column | null;
  setColumnToEdit: (column: Column | null) => void;
};

const AddColumn = ({ columnToEdit, setColumnToEdit }: AddColumnProps) => {
  const { addColumn, updateColumn } = useBoardContext();
  const [showModal, toggleModal] = useToggle();

  const isEditingColumn = columnToEdit !== null;

  useEffect(() => {
    if (columnToEdit && !showModal) {
      toggleModal();
    }
  }, [columnToEdit, showModal, toggleModal]);

  const handleColumnSubmit = (column: Column) => {
    toggleModal();
    setColumnToEdit(null);

    if (isEditingColumn) {
      updateColumn(column);
    } else {
      addColumn(column);
    }
  };

  const handleOnCancel = () => {
    toggleModal();
    setColumnToEdit(null);
  };

  return (
    <Container>
      <Button onClick={toggleModal}>+ Add Column</Button>
      <ColumnModal
        column={columnToEdit}
        isOpen={showModal}
        onCancel={handleOnCancel}
        onSubmit={handleColumnSubmit}
      />
    </Container>
  );
};

export { AddColumn };
