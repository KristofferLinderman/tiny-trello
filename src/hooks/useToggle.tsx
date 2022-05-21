import { useState } from "react";

const useToggle = (): [boolean, () => void] => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggle = () => {
    setIsEnabled(!isEnabled);
  };

  return [isEnabled, toggle];
};

export { useToggle };
