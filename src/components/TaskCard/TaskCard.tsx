import styled from "styled-components";
import { Task } from "../../types";

const Container = styled.div`
  width: 100%;
  cursor: pointer;
  background-color: #aaa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const Title = styled.h3``;

const ButtonContainer = styled.div`
  > button {
    margin-left: 0.5rem;
  }
`;

const TinyButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 5px;
  cursor: pointer;
`;

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
