import { TaskCard } from "../TaskCard/TaskCard";
import { Task, Column } from "../../types";
import { useBoardContext } from "../../context/BoardContext";
import { useState } from "react";
import { Container, TaskContainer } from "./ColumnContainer.style";
import { Header } from "./Header";
import { AddTask } from "../AddTask";

type ColumnProps = {
  column: Column;
  onUpdateColumn: (column: Column) => void;
};

const ColumnContainer = ({ column, onUpdateColumn }: ColumnProps) => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const { removeTask, removeColumn } = useBoardContext();

  const { title, id, tasks } = column;

  const onTaskRemove = (taskId: string) => {
    removeTask(taskId, id);
  };

  const onTaskUpdate = (task: Task) => {
    setSelectedTask(task);
  };

  const handleUpdateColumn = () => {
    onUpdateColumn(column);
  };

  const handleRemoveColumn = () => {
    removeColumn(column.id);
  };

  return (
    <Container>
      <div>
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
      </div>
      <AddTask
        taskToEdit={selectedTask}
        setTaskToEdit={setSelectedTask}
        listId={id}
      />
    </Container>
  );
};

export { ColumnContainer };
