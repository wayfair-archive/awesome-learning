import PropTypes from 'prop-types';

const getContactHrefPropTypes = {
  name: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
};

const getContactHref = (name, contact) => {
  // Manually check the propTypes passed to this function
  const propsObject = {name, contact};
  PropTypes.checkPropTypes(
    getContactHrefPropTypes,
    propsObject,
    'prop',
    'getContactHref'
  );

  let href;

  switch (name) {
    case 'twitter':
      href = `https://www.twitter.com/${contact}`;
      break;
    case 'github':
      href = `https://github.com/${contact}`;
      break;
    case 'vkontakte':
      href = `https://vk.com/${contact}`;
      break;
    case 'telegram':
      href = `telegram:${contact}`;
      break;
    case 'email':
      href = `mailto:${contact}`;
      break;
    default:
      href = contact;
      break;
  }

  return href;
};

export default getContactHref;
