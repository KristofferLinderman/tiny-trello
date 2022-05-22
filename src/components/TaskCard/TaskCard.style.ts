import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 2px 3px -1px, rgba(0, 0, 0, 0.14) 0 3px 5px 0,
    rgba(0, 0, 0, 0.12) 0 1px 9px 0;
  min-height: 5rem;
`;

export const Title = styled.h3``;

export const ButtonContainer = styled.div`
  > button {
    margin-left: 0.5rem;
  }
`;
