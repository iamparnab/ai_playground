import React from 'react';

import { Props } from './models';

import './styles.css';

export function ChatArea(props: Props) {
  const chatWrapperRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (chatWrapperRef.current) {
      const elem = chatWrapperRef.current;
      elem.scrollTop = elem.scrollHeight;
    }
  }, [props.chats.length]);

  return (
    <section className="ap-ca-w" ref={chatWrapperRef}>
      {props.chats.map((eachChat) => {
        return (
          <div key={eachChat.id} className={`each-chat ${eachChat.sender}`}>
            <span>{eachChat.sender === 'bot' ? '🤖' : '🤓'}</span>
            <div>{eachChat.text}</div>
          </div>
        );
      })}
      {props.isProcessingQuery ? (
        <div className={`each-chat bot processing`}>
          <span>🤖</span> <div>💬</div>
        </div>
      ) : null}
    </section>
  );
}
