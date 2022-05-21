import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ComlumnWrapper = styled.div`
  display: flex;
  > div {
    margin-right: 2rem;
  }
`;
