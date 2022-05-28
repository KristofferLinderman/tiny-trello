import { DragEvent } from "react";
import { Task } from "../../types";
import { TinyButton } from "../common/Button";
import { ButtonContainer, Container, Title } from "./TaskCard.style";

type TaskCardProps = {
  task: Task;
  columnId: string;
  onRemove: (taskId: string) => void;
  onUpdate: (task: Task) => void;
};

const TaskCard = ({ task, columnId, onRemove, onUpdate }: TaskCardProps) => {
  const handleEditClick = () => {
    onUpdate(task);
  };

  const handleRemoveClick = () => {
    onRemove(task.id);
  };

  const dragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("taskId", task.id);
    e.dataTransfer.setData("orgColumnId", columnId);
  };

  const dragOver = (e: DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <Container draggable onDragStart={dragStart} onDragOver={dragOver}>
      <Title>{task.title}</Title>
      <ButtonContainer>
        <TinyButton onClick={handleEditClick}>✏️</TinyButton>
        <TinyButton onClick={handleRemoveClick}>🗑</TinyButton>
      </ButtonContainer>
    </Container>
  );
};

export { TaskCard };
