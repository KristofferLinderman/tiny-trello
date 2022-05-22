import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eee;
  border-radius: 12px;
  width: 20vw;
  height: 80vh;
`;

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  > div {
    margin-bottom: 1rem;
  }
`;
