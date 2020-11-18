import React from 'react';
import { connect } from 'react-redux';
import { addNewTab } from '../../actions';
import { StoreType } from '../../store/model';
import Button from '../button';
import MonacoWrapper from '../monaco-wrapper';
import Tabs from '../tabs';
import { Props, State } from './models';

import './styles.css';

class Editor extends React.Component<Props, State> {
  render() {
    return (
      <section className="ap-editor-w">
        <div className="header">
          <Tabs
            availiableTabs={this.props.tabs}
            onCreate={(tabName) => this.props.addNewTab(tabName)}
          />
          <div className="btn-wrapper">
            <Button onClick={() => {}} title="Apply changes" themeType={2} />
          </div>
        </div>
        <MonacoWrapper />
      </section>
    );
  }
}

export default connect((store: StoreType) => ({ tabs: store.tabs }), {
  addNewTab,
})(Editor);
