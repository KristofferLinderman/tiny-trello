import { TaskCard } from "../TaskCard/TaskCard";
import { Task, Column } from "../../types";
import { useBoardContext } from "../../context/BoardContext";
import { DragEvent, useState } from "react";
import { Container, TaskContainer } from "./ColumnContainer.style";
import { Header } from "./Header";
import { AddTask } from "../AddTask";

type ColumnProps = {
  column: Column;
  onUpdateColumn: (column: Column) => void;
};

const ColumnContainer = ({ column, onUpdateColumn }: ColumnProps) => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const { removeTask, removeColumn, moveTask } = useBoardContext();

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

  const drop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const taskId = e.dataTransfer.getData("taskId");
    const orgColumnId = e.dataTransfer.getData("orgColumnId");

    moveTask(taskId, orgColumnId, id);
  };

  const dragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <Container onDrop={drop} onDragOver={dragOver}>
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
                columnId={id}
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
