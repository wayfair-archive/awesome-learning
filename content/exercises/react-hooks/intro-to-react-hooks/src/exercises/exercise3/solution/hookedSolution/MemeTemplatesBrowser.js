import React, {
  useEffect,
  useState
} from 'react';
import { getMemeTemplates } from './../../utilities';
import MemeTemplatesDropdown from '../../components/MemeTemplatesDropdown';

const MemeTemplatesBrowser = (props) => {
  const [
    memeTemplates,
    setMemeTemplates
  ] = useState({});
  // Classes versus hooks
  // This effect does not depend on any external
  // variable, other than getMemeTemplates
  // (which, as an import, is not expected to change)
  // We specify an empty dependency array to instruct
  // the hook to run once when the component mounts,
  // then never again for the life of this component
  useEffect(() => {
    let isMounted = true;
    getMemeTemplates().then((response) => {
      if (isMounted) {
        setMemeTemplates(response);
      }
    });
    return function() {
      isMounted = false;
    };
  }, []);
  return (
    <MemeTemplatesDropdown
      memes={memeTemplates}
      onChange={props.onSelectChange}
    />
  );
};

export default MemeTemplatesBrowser;
