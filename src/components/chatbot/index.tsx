import React from 'react';
import { connect } from 'react-redux';
import { runQuery, updateChatInput } from '../../actions';
import { StoreType } from '../../store/model';
import { ChatArea } from '../chatarea';
import { Props } from './models';

import './styles.css';

class Chatbot extends React.Component<Props> {
  inputRef: React.RefObject<HTMLInputElement>;
  chatWrapperRef: React.RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.inputRef = React.createRef();
    this.chatWrapperRef = React.createRef();
  }

  handleKeyUp = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === 'Enter') {
      this.props.runQuery(this.inputRef.current?.value || '');
      this.props.updateChatInput('');
    }
  };

  handleOnChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    this.props.updateChatInput(ev.target.value);
  };

  render() {
    return (
      <section className="ap-cb-w">
        <div>
          <section className="chatarea-wrapper">
            <ChatArea
              chats={this.props.chats}
              isProcessingQuery={this.props.isProcessingQuery}
            />
          </section>
          <section className="chat-input">
            <input
              placeholder="Type message here…"
              ref={this.inputRef}
              onKeyUp={this.handleKeyUp}
              onChange={this.handleOnChange}
              value={this.props.chatInput}
            />
          </section>
        </div>
      </section>
    );
  }
}

export default connect(
  (store: StoreType) => ({
    chats: store.chats,
    chatInput: store.chatInput,
    isProcessingQuery: store.isProcessingQuery,
  }),
  {
    runQuery,
    updateChatInput,
  }
)(Chatbot);
