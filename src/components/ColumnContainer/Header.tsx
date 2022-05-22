import { useToggle } from "../../hooks/useToggle";
import { TinyButton } from "../common/Button";
import { ButtonContainer, Container, Title } from "./Header.style";

type HeaderProps = {
  title: string;
  onUpdateColumn: () => void;
  onRemoveColumn: () => void;
};

const Header = ({ title, onUpdateColumn, onRemoveColumn }: HeaderProps) => {
  const [showButtons, toggle] = useToggle(false);

  const handleHoverEnter = () => {
    toggle();
  };

  const handleHoverLeave = () => {
    toggle();
  };

  return (
    <Container onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>
      <Title>{title}</Title>
      <ButtonContainer show={showButtons}>
        <TinyButton onClick={onUpdateColumn}>✏️</TinyButton>
        <TinyButton onClick={onRemoveColumn}>🗑</TinyButton>
      </ButtonContainer>
    </Container>
  );
};

export { Header };
