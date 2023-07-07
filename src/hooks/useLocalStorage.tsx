import { useState, useEffect } from 'react';

interface ILocalStorageProps<T> {
  key: string;
  initialValue: T;
}

const useLocalStorage = <T,>({ key, initialValue }: ILocalStorageProps<T>) => {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) return JSON.parse(storedValue);

    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [T, typeof setValue];
};

export default useLocalStorage;
