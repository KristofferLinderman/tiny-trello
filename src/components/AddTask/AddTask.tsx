import { useEffect } from "react";
import { useBoardContext } from "../../context/BoardContext";
import { useToggle } from "../../hooks/useToggle";
import { Task } from "../../types";
import { Button } from "../common/Button";
import { TaskModal } from "../TaskModal";

type AddTaskProps = {
  taskToEdit: Task | null;
  setTaskToEdit: (task: Task | null) => void;
  listId: string;
};

const AddTask = ({ taskToEdit, setTaskToEdit, listId }: AddTaskProps) => {
  const { addTask, updateTask } = useBoardContext();
  const [showModal, toggleModal] = useToggle();

  const isEditingTask = taskToEdit !== null;

  useEffect(() => {
    if (isEditingTask && !showModal) {
      toggleModal();
    }
  }, [isEditingTask, showModal, toggleModal]);

  const handleOnCancel = () => {
    toggleModal();
    setTaskToEdit(null);
  };

  const handleTaskSubmit = (task: Task) => {
    toggleModal();
    setTaskToEdit(null);

    if (isEditingTask) {
      updateTask(task, listId);
    } else {
      addTask(task, listId);
    }
  };
  return (
    <div>
      <Button onClick={toggleModal}>+ Add Task</Button>
      <TaskModal
        task={taskToEdit}
        isOpen={showModal}
        onCancel={handleOnCancel}
        onSubmit={handleTaskSubmit}
      />
    </div>
  );
};

export { AddTask };
