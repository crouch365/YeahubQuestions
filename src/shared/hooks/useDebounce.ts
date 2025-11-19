import { useEffect, useState } from "react";

export const useDebounce = <T>(text: T, delay: number) => {
  const [value, setValue] = useState<T>(text);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(text);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [text, delay]);
  return value;
};
