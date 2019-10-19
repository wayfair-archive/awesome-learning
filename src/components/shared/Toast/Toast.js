import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { getIcon } from '../../../utils';
import './Toast.scss';

// Used by typeValidation to throw an error during development in case of an unacceptable type prop being passed to Toast component
function ToastTypePropError(message) {
  this.name = "Toast type Prop Validation Failure";
  this.message = message;
}

// Strongly validates passed type prop to Toast component
function typeValidation(type) {
  const acceptableProps = ['info', 'success', 'warning', 'error'];
  if (acceptableProps.indexOf(type) === -1) {
    const message = `Value '${type}' passed to Toast component in type prop is not valid. Should be 'info', 'success', 'warning' or 'error'`
    console.error(message);
    throw new ToastTypePropError(message);
  }
}

/* Reusable Toast component
  @prop type: string that can be of value 'info', 'success', 'warning' or 'error'
  @prop message: string used to inform the user of some event
  Usage example:
                  <Toast type="success" message="Updated member status" />
*/
export default function Toast(props) {
  const { message, type } = props;
  typeValidation(type)

  const [opened, setOpened] = useState(true);
  const [animationClass, setAnimationClass] = useState('Toast-openingAnimation')

  function closeToast() {
    setTimeout(() => setOpened(false), 500);
    setAnimationClass('Toast-closingAnimation')
  }

  function typeIcon(type) {
    const iconsNames = {
      error: 'forbidden',
      info: 'info',
      success: 'check',
      warning: 'warning'
    }
    const iconName = iconsNames[type]
    return iconName
  }

  return (
    <>
      {opened &&
        <div role="dialog" className={`Toast-container ${animationClass} Toast-${type}`}>
          <div className="Toast-leftCorner">
            <Icon
              icon={getIcon(typeIcon(type))}
            />
            <p className={`Toast-text Toast-text--${type}`}>
              {type.charAt(0).toUpperCase() + type.slice(1)}: {message}
            </p>
          </div>
          <button aria-label="Close Dialog" onClick={closeToast}>
            <Icon cssClasses="Toast-closeButton" icon={getIcon('close')} />
          </button>
        </div>
      }
    </>
  );
}

Toast.propTypes = {
  /** This is what the component renders, can take a string */
  message: PropTypes.string.isRequired,
  /** This is the warning level of the toast */
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']).isRequired
};
