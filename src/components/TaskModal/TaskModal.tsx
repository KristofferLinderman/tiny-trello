import { useEffect, useState } from "react";
import styled from "styled-components";
import { Task } from "../../types";
import { v4 as uuidv4 } from "uuid";
import Modal from "../common/Modal/Modal";
import TextInput from "../common/Input/TextInput";

type TaskModalProps = {
  task: Task | null;
  isOpen: boolean;
  onCancel: () => void;
  onSubmit: (task: Task) => void;
  isEditMode: boolean;
};

const Container = styled.div`
  display: flex;
  border: 1px solid #333;
  border-radius: 4px;
  cursor: pointer;
`;

const TaskModal = ({
  task,
  isOpen,
  onCancel,
  onSubmit,
  isEditMode,
}: TaskModalProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const reset = () => {
    setTitle("");
    setDescription("");
  };

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  //Todo add validation 😅
  const handleSubmit = () => {
    const newtask: Task = {
      title,
      description,
      date: new Date(),
      id: task?.id || uuidv4(),
    };

    reset();
    onSubmit(newtask);
  };

  const handleCancel = () => {
    reset();
    onCancel();
  };

  return (
    <Container>
      <Modal
        isOpen={isOpen}
        submitLabel={isEditMode ? "Edit task" : "Add task"}
        onCancel={() => handleCancel()}
        onSubmit={() => handleSubmit()}
        title={isEditMode ? "Edit task" : "Add Task"}
      >
        <TextInput
          label="Task title"
          onChange={(value) => setTitle(value)}
          value={title}
        />
        <TextInput
          label="Task description"
          onChange={(value) => setDescription(value)}
          value={description}
        />
      </Modal>
    </Container>
  );
};

export default TaskModal;
