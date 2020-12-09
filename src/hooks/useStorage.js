import {useState} from 'react';

const getStore = (storageType, key) => {
  const lessonStorage = JSON.parse(storageType.getItem(key)) || {};
  return lessonStorage[key];
};

const setStore = (storageType, value, key) =>
  storageType.setItem(key, JSON.stringify(value));

const useStorage = (storageType, key, initialValue) => {
  const [state, setState] = useState(() => {
    if (storageType) {
      try {
        const item = getStore(storageType, key);
        return item || initialValue;
      } catch (error) {
        console.error(error);
        return initialValue;
      }
    }
    return null;
  });

  const setValue = (value) => {
    try {
      const valueToState = value instanceof Function ? value(state) : value;

      setStore(storageType, value, key);
      setState(valueToState);
    } catch (error) {
      console.error(error);
    }
  };

  return [state, setValue];
};

export default useStorage;
