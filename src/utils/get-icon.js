import { ICONS } from '../constants';

const getIcon = (name) => {
  let icon;

  switch (name) {
    case 'twitter':
      icon = ICONS.TWITTER;
      break;
    case 'github':
      icon = ICONS.GITHUB;
      break;
    case 'vkontakte':
      icon = ICONS.VKONTAKTE;
      break;
    case 'telegram':
      icon = ICONS.TELEGRAM;
      break;
    case 'email':
      icon = ICONS.EMAIL;
      break;
    case 'rss':
      icon = ICONS.RSS;
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
    default:
      icon = {};
      break;
  }

  return icon;
};

export default getIcon;
