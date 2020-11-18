import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';

import { Header } from '../header';
import InteractiveArea from '../interactive_area';
import { Props, State } from './models';

import './styles.css';

class Container extends React.Component<Props, State> {
  render() {
    return (
      <main className="ap-main-w">
        <Provider store={store}>
          <Header title="AI Playground" />
          <InteractiveArea />
        </Provider>
      </main>
    );
  }
}

export default Container;
