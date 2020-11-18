import React from 'react';
import { connect } from 'react-redux';
import { runQuery, updateChatInput } from '../../actions';
import { StoreType } from '../../store/model';
import { Props } from './models';

import './styles.css';

class Chatbot extends React.Component<Props> {
  inputRef: React.RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleKeyUp = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === 'Enter') {
      this.props.runQuery(this.inputRef.current?.value || '');
      this.props.updateChatInput('');
    }
  };

  handleOnChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    this.props.updateChatInput(this.inputRef.current?.value || '');
  };

  render() {
    return (
      <section className="ap-cb-w">
        <div>
          <section className="main-chat-area">
            {this.props.chats.map((eachChat) => {
              return (
                <div
                  key={eachChat.id}
                  className={`each-chat ${eachChat.sender}`}
                >
                  <div>{eachChat.text}</div>
                </div>
              );
            })}
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
  (store: StoreType) => ({ chats: store.chats, chatInput: store.chatInput }),
  {
    runQuery,
    updateChatInput,
  }
)(Chatbot);
