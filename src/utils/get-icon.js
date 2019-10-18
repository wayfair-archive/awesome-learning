import PropTypes from 'prop-types';
import { ICONS } from '../constants';

const getIconPropTypes = {
  name: PropTypes.string.isRequired
};

const getIcon = (name) => {
  // Manually check the propTypes passed to this function
  const propsObject = { name };
  PropTypes.checkPropTypes(getIconPropTypes, propsObject, 'prop', 'getIcon');

  let icon;

  switch (name) {
    case 'twitter':
      icon = ICONS.TWITTER;
      break;
    case 'github':
      icon = ICONS.GITHUB;
      break;
    case 'email':
      icon = ICONS.EMAIL;
      break;
    case 'logo':
      icon = ICONS.LOGO;
      break;
    case 'menu':
      icon = ICONS.MENU;
      break;
    case 'functions':
      icon = ICONS.FUNCTIONS;
      break;
    case 'array':
      icon = ICONS.ARRAY;
      break;
    case 'async':
      icon = ICONS.ASYNC;
      break;
    case 'data':
      icon = ICONS.DATA;
      break;
    case 'testing':
      icon = ICONS.TESTING;
      break;
    case 'function':
      icon = ICONS.FUNCTION;
      break;
    case 'hook':
      icon = ICONS.HOOK;
      break;
    case 'leftChevron':
      icon = ICONS.LEFT_CHEVRON;
      break;
    case 'rightChevron':
      icon = ICONS.RIGHT_CHEVRON;
      break;
    case 'check':
      icon = ICONS.CHECK;
      break;
    case 'info':
      icon = ICONS.INFO;
      break;
    case 'warning':
      icon = ICONS.WARNING;
      break;
    case 'forbidden':
      icon = ICONS.FORBIDDEN;
      break;
    case 'close':
      icon = ICONS.CLOSE;
      break;
    default:
      icon = {};
      break;
  }

  return icon;
};

export default getIcon;
