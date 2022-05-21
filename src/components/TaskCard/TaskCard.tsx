import { Task } from "../../types";
import {
  ButtonContainer,
  Container,
  TinyButton,
  Title,
} from "./TaskCard.style";

type TaskCardProps = {
  task: Task;
  onRemove: (taskId: string) => void;
  onUpdate: (task: Task) => void;
};

const TaskCard = ({ task, onRemove, onUpdate }: TaskCardProps) => {
  const handleEditClick = () => {
    console.log("🐼 - Clicked Edit");
    onUpdate(task);
  };

  const handleRemoveClick = () => {
    console.log("🐼 - Clicked");
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
