import { ReactNode } from "react";
import { StyledButton, StyledTinyButton } from "./Button.style";

type BaseButtonProps = {
  children: ReactNode;
  onClick: () => void;
};

const Button = ({ onClick, children }: BaseButtonProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const TinyButton = ({ onClick, children }: BaseButtonProps) => {
  return <StyledTinyButton onClick={onClick}>{children}</StyledTinyButton>;
};

export { Button, TinyButton };
