import styled from "styled-components";

type Props = {
  label: string;
  onChange: (value: string) => void;
  value: string;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  height: 6rem;

  label {
    margin-bottom: 0.5rem;
  }
`;

const Input = styled.input`
  border: 1px solid #333;
  border-radius: 5px;
  height: 2rem;
  font-size: 1.3rem;
  padding: 0.5rem;
`;

const TextInput = ({ label, onChange, value }: Props) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <Input
        id={label}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </Container>
  );
};

export { TextInput };
