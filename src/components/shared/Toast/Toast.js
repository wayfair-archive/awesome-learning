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
function typeValidation(type){
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
export default function Toast(props){
  const {message, type} = props;
  typeValidation(type)

  const [opened, setOpened] = useState(true);
  const [animationClass, setAnimationClass] = useState('opening-animation')

  function closeToast() {
    setTimeout(() => setOpened(false), 500);
    setAnimationClass('closing-animation')
  }

  function typeIcon(type){
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
      <div role="dialog" className={`${animationClass} toast-container toast-${type}`}>
        <div className="left-corner">
          <Icon
            icon={getIcon(typeIcon(type))}
            className={`toast-icon-${type}`}
          />
          <span className={`toast-text toast-text-${type}`}>
            {type.charAt(0).toUpperCase() + type.slice(1)}: {message}
          </span>
        </div>
        <div className="right-corner">
          <button className="close-toast" aria-label="Close Dialog" onClick={closeToast}>
            <Icon icon={getIcon('close')} />
          </button>
        </div>
      </div>
    }
    </>
  );
}

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error'])
};
