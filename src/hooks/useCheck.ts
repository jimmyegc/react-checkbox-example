import { useState } from "react";

export const useCheck = () => {
  const [isChecked, setChecked] = useState(false);

  const toggle = () => {
    setChecked((isChecked) => !isChecked);
  };

  return {
    isChecked,
    toggle,
  };
};
