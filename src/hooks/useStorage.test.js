import {useState} from 'react';
import useStorage from './useStorage';

jest.mock('react');
useState.mockImplementation(func => [func(), useState]);

const localStorageMock = {
  getItem: str => JSON.stringify({[str]: 'value'}),
  setItem: (str, json) => ({[str]: JSON.parse(json)})
};

describe('.useStorage', () => {
  it('should set the value', () => {
    const [state, setValue] = useStorage(localStorageMock, 'key', 'value');

    expect(state).toBe('value');
    expect(typeof setValue).toBe('function');
  });
});
