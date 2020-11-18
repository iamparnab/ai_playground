import React from 'react';
import { ControlledEditor } from '@monaco-editor/react';
import { connect } from 'react-redux';

import './styles.css';
import { Props } from './models';
import { StoreType } from '../../store/model';
import { DEFAULT_CODE } from '../../constants';
import { setCode } from '../../actions';

class MonacoWrapper extends React.Component<Props> {
  componentDidUpdate(prevProps: Props) {
    if (this.props.selectedTabId !== prevProps.selectedTabId) {
      localStorage.setItem(`tabId_${prevProps.selectedTabId}`, this.props.code);

      let currentCode = localStorage.getItem(
        `tabId_${this.props.selectedTabId}`
      );
      if (currentCode === null) {
        currentCode = DEFAULT_CODE;
      }

      this.props.setCode(currentCode);
    }
  }
  componentDidMount() {
    this.props.setCode(DEFAULT_CODE);
  }

  handleEditorChange = (_: any, value: string | undefined) => {
    this.props.setCode(value || '');
  };

  render() {
    return (
      <div className="ap-mw-w">
        <ControlledEditor
          height="90vh"
          language="javascript"
          theme="vs-dark"
          value={this.props.code}
          onChange={this.handleEditorChange}
          options={{
            fontSize: 'inherit',
            letterSpacing: '1px',
            fontWeight: 'bold',
          }}
        />
      </div>
    );
  }
}

export default connect(
  (store: StoreType) => ({
    selectedTabId: store.selectedTabId,
    code: store.code,
  }),
  { setCode }
)(MonacoWrapper);
