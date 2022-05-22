import { Container, Input } from "./TextInput.style";

type Props = {
  label: string;
  onChange: (value: string) => void;
  value: string;
};

const TextInput = ({ label, onChange, value }: Props) => {
  return (
    <Container>
      <label htmlFor={label}>{label}</label>
      <Input
        id={label}
        data-testid={`${label} input`}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        autoComplete={"off"}
      />
    </Container>
  );
};

export { TextInput };
