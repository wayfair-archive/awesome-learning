import React from 'react';
import {render} from '@testing-library/react';
import LastLessonProvider from './LastLessonProvider';
import useStorage from '../hooks/useStorage';

jest.mock('../hooks/useStorage', () =>
  jest.fn().mockImplementation(value => [value, () => {}])
);

beforeEach(() => {
  useStorage.mockClear();
});

const provider = props =>
  render(<LastLessonProvider {...props}>hello</LastLessonProvider>);

describe('LastLessonProvider', () => {
  it('should be defined', () => {
    expect(LastLessonProvider).toBeDefined();
  });

  describe('.useStorage', () => {
    it('should be called with the lessonData', () => {
      provider({lastLessonVisited: 'lesson'});

      expect(useStorage.mock.calls[0]).toEqual([
        localStorage,
        'lastLessonVisited',
        ''
      ]);
    });
  });
});
