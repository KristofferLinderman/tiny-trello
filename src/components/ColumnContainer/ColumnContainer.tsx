import { TaskCard } from "../TaskCard/TaskCard";
import { Task, Column } from "../../types";
import { useBoardContext } from "../../context/BoardContext";
import { useState } from "react";
import { TaskModal } from "../TaskModal";
import { Container, TaskContainer } from "./ColumnContainer.style";
import { Button } from "../common/Button";
import { Header } from "./Header";

type ColumnProps = {
  column: Column;
  onUpdateColumn: (column: Column) => void;
};

const ColumnContainer = ({ column, onUpdateColumn }: ColumnProps) => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const { addTask, removeTask, updateTask, removeColumn } = useBoardContext();

  const { title, id, tasks } = column;
  const isEditingTask = selectedTask !== null;

  const onTaskRemove = (taskId: string) => {
    removeTask(taskId, id);
  };

  const onTaskUpdate = (task: Task) => {
    setShowTaskModal(true);
    setSelectedTask(task);
  };

  const handleTaskSubmit = (task: Task) => {
    setShowTaskModal(false);
    setSelectedTask(null);

    if (isEditingTask) {
      updateTask(task, id);
    } else {
      addTask(task, id);
    }
  };

  const handleOnCancel = () => {
    setShowTaskModal(false);
    setSelectedTask(null);
  };

  const handleUpdateColumn = () => {
    onUpdateColumn(column);
  };

  const handleRemoveColumn = () => {
    removeColumn(column.id);
  };

  return (
    <Container>
      <Header
        title={title}
        onUpdateColumn={handleUpdateColumn}
        onRemoveColumn={handleRemoveColumn}
      />
      <TaskContainer>
        {tasks.map((task) => {
          return (
            <TaskCard
              key={task.id}
              task={task}
              onRemove={onTaskRemove}
              onUpdate={onTaskUpdate}
            />
          );
        })}
      </TaskContainer>
      <Button onClick={() => setShowTaskModal(true)}>+ Add Task</Button>
      <TaskModal
        task={selectedTask}
        isOpen={showTaskModal}
        onCancel={handleOnCancel}
        onSubmit={handleTaskSubmit}
        isEditMode={isEditingTask}
      />
    </Container>
  );
};

export { ColumnContainer };
