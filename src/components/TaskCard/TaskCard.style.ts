import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.2) 0 2px 3px -1px, rgba(0, 0, 0, 0.14) 0 3px 5px 0,
    rgba(0, 0, 0, 0.12) 0 1px 9px 0;
  min-height: 5rem;
`;

export const Title = styled.h3`
  width: 100%;
  margin-left: 2rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1rem;

  > button {
    width: 40%;
  }
`;
