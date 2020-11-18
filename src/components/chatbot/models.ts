export type _Props = {};

type PropsFromConnect = {
  chats: EachChatType[];
  chatInput: string;
};

type ActionsFromConnect = {
  runQuery: (query: string) => void;
  updateChatInput: (chatInput: string) => void;
};

export type EachChatType = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
};

export type Props = _Props & PropsFromConnect & ActionsFromConnect;
