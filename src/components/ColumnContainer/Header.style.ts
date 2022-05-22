import styled from "styled-components";

export const Title = styled.h2`
  font-size: 2rem;
  width: 100%;
  padding-left: 1rem;
`;

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  border-bottom: 1px solid #333;
`;

export const ButtonContainer = styled.div<{ show?: boolean }>`
  position: absolute;
  height: 100%;
  align-items: center;
  border-radius: 12px 12px 0 0;
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 85%
  );
  justify-content: flex-end;
  display: flex;
  transition: opacity 250ms ease-in-out;
  opacity: ${(props) => (props.show ? 100 : 0)};

  button {
    margin-right: 1rem;
  }
`;
