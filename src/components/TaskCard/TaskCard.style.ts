import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  cursor: pointer;
  background-color: #aaa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
`;

export const Title = styled.h3``;

export const ButtonContainer = styled.div`
  > button {
    margin-left: 0.5rem;
  }
`;

export const TinyButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 5px;
  cursor: pointer;
`;
