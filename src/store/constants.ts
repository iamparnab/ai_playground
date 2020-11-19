import { StoreType } from './model';

export const STORE_INIT: StoreType = {
  tabs: [{ tabId: 1, tabName: 'Untitled 1.js' }],
  selectedTabId: 1,
  code: '',
  codeToEvalute: '',
  chats: [{ id: 1, sender: 'bot', text: 'Hi! How can I help you?' }],
  chatInput: '',
  hasContentChanged: true,
  toasterConfig: {
    isVisible: false,
    text: '',
  },
};
