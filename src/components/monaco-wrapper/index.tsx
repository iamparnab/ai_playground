import React from 'react';
import Editor from '@monaco-editor/react';

import './styles.css';

export default class MonacoWrapper extends React.Component {
  render() {
    return (
      <div className="ap-mw-w">
        <Editor
          height="90vh"
          language="javascript"
          theme="vs-dark"
          value="function hello() {}"
        />
      </div>
    );
  }
}
