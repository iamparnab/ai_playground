import { EachChatType } from '../chatarea/models';

export type _Props = {};

type PropsFromConnect = {
  chats: EachChatType[];
  chatInput: string;
  isProcessingQuery: boolean;
};

type ActionsFromConnect = {
  runQuery: (query: string) => void;
  updateChatInput: (chatInput: string) => void;
};

export type Props = _Props & PropsFromConnect & ActionsFromConnect;
