import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';

import Container from './components/container';

import './index.css';

import { WindowExtended } from './models.ts';
import { TRANSLATE_API_URL, TRANSLATION_FAILURE_MESSAGE } from './constants';
import { ErrorBoundary } from './utils/error_boundary';

declare const window: WindowExtended;

/**
 * Implement Editor translate method
 */
if (typeof window.Editor === 'undefined') {
  window.Editor = {
    init: () => {},
    respond: () => {},
    translate: () => Promise.resolve(''),
  };
}

window.Editor.translate = function (
  text: string,
  source: string,
  target: string
) {
  return new Promise((resolve) => {
    function handleFailure() {
      resolve(TRANSLATION_FAILURE_MESSAGE);
    }
    /**
     * Lazy load it.
     */
    import('../src/constants/language_codes')
      .then(({ LANGUAGE_CODES }) => {
        type keyType = keyof typeof LANGUAGE_CODES;

        fetch(
          TRANSLATE_API_URL +
            '?' +
            new URLSearchParams({
              text,
              source: LANGUAGE_CODES[source as keyType],
              target: LANGUAGE_CODES[target as keyType],
            })
        )
          .then((response) => {
            if (response.ok) {
              response.json().then((data) => resolve(data.TranslatedText));
            } else {
              handleFailure();
            }
          })
          .catch(() => {
            handleFailure();
          });
      })
      .catch(() => {
        handleFailure();
      });
  });
};

ReactDOM.render(
  <ErrorBoundary>
    <React.StrictMode>
      <Container />
    </React.StrictMode>
  </ErrorBoundary>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
