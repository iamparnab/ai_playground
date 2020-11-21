import React from 'react';
import { ERROR_BOUNDARY_MESSAGE } from '../constants';

export class ErrorBoundary extends React.Component<{}, { error: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      error: false,
    };
  }

  static getDerivedStateFromError() {
    return { error: true };
  }

  handleClick = () => {
    window.location.reload();
  };
  render() {
    return this.state.error ? (
      <div
        style={{
          textDecoration: 'underline',
          textAlign: 'center',
          marginTop: '100px',
          cursor: 'pointer',
        }}
        onClick={this.handleClick}
      >
        {ERROR_BOUNDARY_MESSAGE}
      </div>
    ) : (
      this.props.children
    );
  }
}
