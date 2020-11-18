import React from 'react';
import Editor from '@monaco-editor/react';
import { connect } from 'react-redux';

import './styles.css';
import { Props } from './models';
import { StoreType } from '../../store/model';

class MonacoWrapper extends React.Component<Props> {
  componentDidUpdate(prevProps: Props) {
    if (this.props.selectedTabId !== prevProps.selectedTabId) {
      console.log('Current selected tabid ', this.props.selectedTabId);
    }
  }
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

export default connect(
  (store: StoreType) => ({
    selectedTabId: store.selectedTabid,
  }),
  {}
)(MonacoWrapper);
