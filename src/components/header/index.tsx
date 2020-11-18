import React from 'react';
import { Props } from './model';

import './styles.css';

export function Header(props: Props) {
  return <section className="ap-header-w">{props.title}</section>;
}
