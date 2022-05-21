import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eee;
  border-radius: 6px;
  width: 20vw;
  padding: 1rem;
  height: 80vh;
`;

export const Title = styled.h2`
  font-size: 2rem;
`;

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    margin-bottom: 1rem;
  }
`;
