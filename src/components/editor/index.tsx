import React from 'react';
import { connect } from 'react-redux';
import { addNewTab, selectTab, applyChanges, removeTab } from '../../actions';
import { StoreType } from '../../store/model';
import Button from '../button';
import Tabs from '../tabs';
import { Props } from './models';

import './styles.css';

const MonacoWrapper = React.lazy(() => import('../monaco-wrapper'));

class Editor extends React.Component<Props> {
  render() {
    return (
      <section className="ap-editor-w">
        <div className="header">
          <Tabs
            selectedTabId={this.props.selectedTabId}
            availiableTabs={this.props.tabs}
            onSelect={(tabId) => this.props.selectTab(tabId)}
            onCreate={(tabName) => this.props.addNewTab(tabName)}
            onRemove={(tabId) => this.props.removeTab(tabId)}
          />
          <div className="btn-wrapper">
            <Button
              onClick={() => this.props.applyChanges()}
              title="Save changes"
              themeType={2}
              disabled={this.props.code === this.props.codeToEvaluate}
            />
          </div>
        </div>
        <React.Suspense fallback="Loading editor...">
          <MonacoWrapper />
        </React.Suspense>
      </section>
    );
  }
}

export default connect(
  (store: StoreType) => ({
    tabs: store.tabs,
    selectedTabId: store.selectedTabId,
    code: store.code,
    codeToEvaluate: store.codeToEvalute,
  }),
  {
    addNewTab,
    selectTab,
    applyChanges,
    removeTab,
  }
)(Editor);
