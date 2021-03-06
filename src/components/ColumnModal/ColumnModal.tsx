import { useEffect, useState } from "react";
import { Column } from "../../types";
import { v4 as uuidv4 } from "uuid";
import { TextInput } from "../common/Input";
import { Modal } from "../common/Modal";
import { Container } from "./ColumnModal.style";

type ColumnModalProps = {
  column: Column | null;
  isOpen: boolean;
  onCancel: () => void;
  onSubmit: (column: Column) => void;
};

const ColumnModal = ({
  column,
  isOpen,
  onCancel,
  onSubmit,
}: ColumnModalProps) => {
  const [title, setTitle] = useState("");
  const isEditMode = column !== null;

  const reset = () => {
    setTitle("");
  };

  useEffect(() => {
    if (column) {
      setTitle(column.title);
    }
  }, [column]);

  const handleSubmit = () => {
    if (title === "") {
      alert("Columns require a name");
      return;
    }
    const newColumn: Column = {
      title,
      id: column?.id || uuidv4(),
      tasks: column?.tasks || [],
    };

    reset();
    onSubmit(newColumn);
  };

  const handleCancel = () => {
    reset();
    onCancel();
  };

  return (
    <Container>
      <Modal
        isOpen={isOpen}
        submitLabel={isEditMode ? "Edit Column" : "Add Column"}
        onCancel={() => handleCancel()}
        onSubmit={() => handleSubmit()}
        title={isEditMode ? "Edit Column" : "Add Column"}
      >
        <TextInput
          label="Column title"
          onChange={(value) => setTitle(value)}
          value={title}
        />
      </Modal>
    </Container>
  );
};

export { ColumnModal };
