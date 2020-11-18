import React from 'react';
import Chatbot from '../chatbot';
import Editor from '../editor';
import { Props } from './models';

import './styles.css';

export default class InteractiveArea extends React.Component<Props> {
  render() {
    return (
      <div className="ap-ia-w">
        <Editor />
        <Chatbot />
      </div>
    );
  }
}
