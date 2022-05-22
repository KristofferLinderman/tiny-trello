import { Task } from "../../types";
import { TinyButton } from "../common/Button";
import { ButtonContainer, Container, Title } from "./TaskCard.style";

type TaskCardProps = {
  task: Task;
  onRemove: (taskId: string) => void;
  onUpdate: (task: Task) => void;
};

const TaskCard = ({ task, onRemove, onUpdate }: TaskCardProps) => {
  const handleEditClick = () => {
    onUpdate(task);
  };

  const handleRemoveClick = () => {
    onRemove(task.id);
  };

  return (
    <Container>
      <Title>{task.title}</Title>
      <ButtonContainer>
        <TinyButton onClick={handleEditClick}>✏️</TinyButton>
        <TinyButton onClick={handleRemoveClick}>🗑</TinyButton>
      </ButtonContainer>
    </Container>
  );
};

export { TaskCard };
