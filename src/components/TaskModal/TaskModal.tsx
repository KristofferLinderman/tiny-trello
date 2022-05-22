import { useEffect, useState } from "react";
import { Task } from "../../types";
import { v4 as uuidv4 } from "uuid";
import { TextInput } from "../common/Input";
import { Modal } from "../common/Modal";
import { Container } from "./TaskModal.style";

type TaskModalProps = {
  task: Task | null;
  isOpen: boolean;
  onCancel: () => void;
  onSubmit: (task: Task) => void;
};

const TaskModal = ({ task, isOpen, onCancel, onSubmit }: TaskModalProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const isEditMode = task !== null;

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

  const handleSubmit = () => {
    if (title === "") {
      alert("Tasks require a title");
      return;
    }
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

export { TaskModal };
