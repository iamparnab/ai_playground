import React from 'react';
import { Props } from './models';

import './styles.css';

function Button(props: Props) {
  return (
    <button
      className={`ap-button type-${props.themeType} clickable`}
      onClick={() => props.onClick()}
    >
      {props.title}
    </button>
  );
}
export default Button;
