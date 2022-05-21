import { ReactNode } from "react";
import {
  Button,
  ButtonContainer,
  ModalContainer,
  ModalWrapper,
} from "./Modal.style";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onCancel: () => void;
  onSubmit: () => void;
  submitLabel: string;
  cancelLabel?: string;
  title: string;
};

const Modal = ({
  children,
  isOpen,
  onCancel,
  onSubmit,
  submitLabel,
  cancelLabel = "Cancel",
  title,
}: ModalProps) => {
  const handleOnCancel = () => {
    onCancel();
  };
  const handleOnSubmit = () => {
    onSubmit();
  };

  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <ModalContainer>
        <h1>{title}</h1>
        {children}
        <ButtonContainer>
          <Button onClick={handleOnCancel}>{cancelLabel}</Button>
          <Button onClick={handleOnSubmit}>{submitLabel}</Button>
        </ButtonContainer>
      </ModalContainer>
    </ModalWrapper>
  );
};

export { Modal };
