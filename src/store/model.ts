import { EachTabType } from '../components/tabs/models';
import { EachChatType } from '../components/chatarea/models';
import { ActionType } from '../actions/model';

export type StoreType = {
  tabs: EachTabType[];
  selectedTabId: number;
  code: string;
  codeToEvalute: string;
  chats: EachChatType[];
  chatInput: string;
  hasContentChanged: boolean;
  toasterConfig: {
    text: string;
    isVisible: boolean;
  };
  isProcessingQuery: boolean;
};

export type DispatchType = (action: ActionType) => void;
