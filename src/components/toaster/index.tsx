import React from 'react';
import { connect } from 'react-redux';
import { hideToaster } from '../../actions';
import { StoreType } from '../../store/model';
import { Props } from './models';

import './styles.css';

function Toaster(props: Props) {
  React.useEffect(() => {
    let timer: NodeJS.Timeout;

    if (props.isVisible) {
      timer = setTimeout(() => {
        props.hideToaster();
      }, 3000);
    }

    return () => clearTimeout(timer);
  }, [props]);

  return (
    <div className="ap-toaster-w">
      <div className={`toaster-body ${props.isVisible ? 'visible' : null}`}>
        {props.text}
      </div>
    </div>
  );
}

export default connect(
  (store: StoreType) => ({
    text: store.toasterConfig.text,
    isVisible: store.toasterConfig.isVisible,
  }),
  { hideToaster }
)(Toaster);
