import { TaskCard } from "../TaskCard/TaskCard";
import styled from "styled-components";
import TaskModal from "../TaskModal/TaskModal";
import { Task, Column } from "../../types";
import { useBoardContext } from "../../context/BoardContext";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eee;
  border-radius: 6px;
  width: 20vw;
  padding: 1rem;
  height: 80vh;
`;

const Title = styled.h2`
  font-size: 2rem;
`;

const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    margin-bottom: 1rem;
  }
`;

type ColumnProps = {
  column: Column;
};

const ColumnContainer = ({ column }: ColumnProps) => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const { addTask, removeTask, updateTask, removeColumn, updateColumn } =
    useBoardContext();

  const { title, id, tasks } = column;
  const isEditingTask = selectedTask !== null;

  const onRemoveColumn = () => {
    removeColumn(column.id);
  };

  const onUpdateColumn = () => {
    const newColumn = column;
    newColumn.title = "Panda column";
    updateColumn(newColumn);
  };

  const onTaskRemove = (taskId: string) => {
    console.log("🐼 - onTaskRemove ", taskId);
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

  return (
    <Container>
      <Title>{title}</Title>
      <button onClick={onRemoveColumn}>🗑</button>
      <button onClick={onUpdateColumn}>✏️</button>
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
      <button onClick={() => setShowTaskModal(true)}>+ Add Task</button>
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
