import React, {
  useEffect,
  useState
} from 'react';
import { getMemeInformation } from './../../utilities';
import MemeTemplatesBrowser from './MemeTemplatesBrowser';
import MemeTemplateInformation from './MemeTemplateInformation';

const MemeGenerator = () => {
  const [
    selectedMemeLink,
    updateSelectedMemeLink
  ] = useState();
  const [
    selectedMemeDetails,
    updateSelectedMemeDetails
  ] = useState();
  const handleSelectChange = (event) => {
    updateSelectedMemeLink(event.target.value);
  };
  // Classes versus hooks
  // This effect runs on the initial render, but
  // within the effect, we check that there is
  // actually a meme link to use. Since there
  // isn't, the effect's contents don't run.
  // On subsequent renders, this effect only
  // runs when selectedMemeLink has changed
  // (and it is no longer undefined, so the contents
  // of the effect execute.)
  useEffect(() => {
    let isMounted = true;
    if (selectedMemeLink) {
      getMemeInformation(selectedMemeLink).then(
        (response) => {
          if (isMounted) {
            updateSelectedMemeDetails(response);
          }
        }
      );
    }
    return function() {
      isMounted = false;
    };
  }, [selectedMemeLink]);
  return (
    <section>
      <MemeTemplatesBrowser
        onSelectChange={handleSelectChange}
      />
      {selectedMemeDetails && (
        <MemeTemplateInformation
          selectedMemeDetails={
            selectedMemeDetails
          }
        />
      )}
    </section>
  );
};

export default MemeGenerator;
