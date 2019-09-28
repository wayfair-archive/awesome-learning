export const memegenUrl = 'https://memegen.link/';

export function getMemeInformation(
  memeTemplateLink
) {
  return fetch(memeTemplateLink).then(
    (response) => response.json()
  );
}

export function getExampleMemeUrl(meme) {
  if (meme) {
    const imageUrlSplit = meme.example.split('/');
    // The indices at which
    // the important parts of the image URL
    // live in will always be the same (5, 6, 7)
    const templateName = imageUrlSplit[5];
    const textPart1 = imageUrlSplit[6];
    const textPart2 = imageUrlSplit[7];
    const baseImageUrl = `${memegenUrl}/${templateName}`;
    // Need to add .jpg at the end
    const exampleImageUrl = `${baseImageUrl}/${textPart1}/${textPart2}.jpg`;
    return { baseImageUrl, exampleImageUrl };
  } else {
    return {};
  }
}

const blacklist = [
  'butthurt',
  'murder',
  'facepalm',
  'forever alone',
  'fuck',
  'crazy',
  'kill',
  'bull',
  'scumbag',
  'nazi',
  'insanity',
  'condescending',
  'cry',
  'shut up'
];

export function getMemeTemplates() {
  return fetch(
    'https://memegen.link/api/templates'
  )
    .then((response) => response.json())
    .then((response) => {
      const filteredKeys = Object.keys(
        response
      ).filter((keyToCheck) => {
        return blacklist.every(
          (blacklistedWord) =>
            !keyToCheck
              .toLowerCase()
              .includes(
                blacklistedWord.toLowerCase()
              )
        );
      });
      return filteredKeys.reduce(
        (accumulatorObj, key) => {
          accumulatorObj[key] = response[key];
          return accumulatorObj;
        },
        {}
      );
    });
}
