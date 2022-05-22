import { useState } from "react";

const useToggle = (initialState = false): [boolean, () => void] => {
  const [isEnabled, setIsEnabled] = useState(initialState);

  const toggle = () => {
    setIsEnabled(!isEnabled);
  };

  return [isEnabled, toggle];
};

export { useToggle };
