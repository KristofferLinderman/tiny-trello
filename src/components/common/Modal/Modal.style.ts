import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: auto;
`;

export const ModalContainer = styled.div`
  width: 50vw;
  max-width: 800px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 5px solid #000;
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const Button = styled.button`
  height: 3rem;
  width: 6rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 1rem;
`;

export const ButtonContainer = styled.div`
  align-self: flex-end;
`;
