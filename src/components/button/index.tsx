import React from 'react';
import { Props } from './models';

import './styles.css';

function Button(props: Props) {
  return (
    <button
      className={`ap-button type-${props.themeType} clickable ${
        props.disabled ? 'disabled' : ''
      }`}
      onClick={() => !props.disabled && props.onClick()}
    >
      {props.title}
    </button>
  );
}
export default Button;
