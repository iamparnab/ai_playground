import { EachTabType } from '../components/tabs/models';
import { EachChatType } from '../components/chatarea/models';

export type StoreType = {
  tabs: EachTabType[];
  selectedTabId: number;
  code: string;
  codeToEvalute: string;
  chats: EachChatType[];
  chatInput: string;
};
