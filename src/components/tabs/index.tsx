import React from 'react';
import Button from '../button';
import { Props, EachTabType } from './models';

import './styles.css';

export default class Tabs extends React.Component<Props> {
  componentDidUpdate(prevProps: Props) {
    if (this.props.availiableTabs.length > prevProps.availiableTabs.length) {
      /**
       * Scroll to the newly added Tab
       */
      const lastTab = document.querySelector(
        '.ap-tabs-w>section>div:last-of-type'
      );
      if (lastTab) {
        lastTab.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }
    }
  }

  handleTabRemove = (e: React.MouseEvent, tabId: number) => {
    e.stopPropagation();
    this.props.onRemove(tabId);
  };

  render() {
    return (
      <div className="ap-tabs-w">
        <section>
          {this.props.availiableTabs.map(
            (eachTab: EachTabType, index: number) => {
              return (
                <div
                  className={`clickable ${
                    this.props.selectedTabId === eachTab.tabId
                      ? 'selected'
                      : null
                  }`}
                  key={eachTab.tabId}
                  onClick={() => this.props.onSelect(eachTab.tabId)}
                >
                  {eachTab.tabName}
                  {index > 0 ? (
                    <span
                      className="clickable cross-mark"
                      onClick={(e) => this.handleTabRemove(e, eachTab.tabId)}
                    >
                      x
                    </span>
                  ) : null}
                </div>
              );
            }
          )}
        </section>
        <Button
          title="+"
          onClick={() => this.props.onCreate('Untitled')}
          themeType={1}
          disabled={false}
        />
      </div>
    );
  }
}
