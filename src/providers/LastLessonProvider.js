import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import useStorage from '../hooks/useStorage';

export const LastLessonContext = React.createContext();
export const useLastLessonContext = () => useContext(LastLessonContext);

const LastLessonProvider = ({children}) => {
  const localStorage =
    typeof window !== 'undefined' ? window.localStorage : null;
  const [lastLessonVisited, setLastLessonVisited] = useStorage(
    localStorage,
    'lastLessonVisited',
    ''
  );

  return (
    <LastLessonContext.Provider
      value={{lastLessonVisited, setLastLessonVisited}}
    >
      {children}
    </LastLessonContext.Provider>
  );
};

LastLessonProvider.propTypes = {
  children: PropTypes.node,
};

export default LastLessonProvider;
