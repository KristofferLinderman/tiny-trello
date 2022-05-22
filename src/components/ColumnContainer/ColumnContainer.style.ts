import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #eee;
  border-radius: 12px;
  width: 20vw;
  min-width: 250px;
  max-width: 300px;
  height: 80vh;
  box-sizing: border-box;
  box-shadow: rgb(0 0 0 / 20%) 0 0 10px 0px;
  margin: 1rem;
`;

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  > div {
    margin-bottom: 1rem;
  }
`;
