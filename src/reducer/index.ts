import {
  Actions,
  ActionType,
  NewTabType,
  SelectTabType,
  SetCodeType,
  ChatInputType,
  RunQueryType,
  BotResponseType,
} from '../actions/model';

import { STORE_INIT } from '../store/constants';
import { StoreType } from '../store/model';

export function rootReducer(
  store: StoreType = STORE_INIT,
  action: ActionType
): StoreType {
  switch (action.type) {
    case Actions.ADD_NEW_TAB: {
      return {
        ...store,
        tabs: [
          ...store.tabs,
          {
            tabId: store.tabs.length + 1,
            tabName:
              (action.payload as NewTabType).tabName +
              ' ' +
              (store.tabs.length + 1) +
              '.js',
          },
        ],
      };
    }

    case Actions.SELECT_TAB: {
      return {
        ...store,
        selectedTabid: (action.payload as SelectTabType).tabId,
      };
    }

    case Actions.SET_CODE: {
      return {
        ...store,
        code: (action.payload as SetCodeType).code,
      };
    }

    case Actions.APPLY_CHANGES: {
      return { ...store, codeToEvalute: store.code };
    }

    case Actions.UPDATE_CHAT_INPUT: {
      return {
        ...store,
        chatInput: (action.payload as ChatInputType).chatInput,
      };
    }

    case Actions.RUN_QUERY: {
      return {
        ...store,
        chats: [
          ...store.chats,
          {
            id: store.chats.length + 1,
            text: (action.payload as RunQueryType).query,
            sender: 'user',
          },
        ],
      };
    }

    case Actions.ADD_BOT_RESPONSE: {
      return {
        ...store,
        chats: [
          ...store.chats,
          {
            id: store.chats.length + 1,
            text: (action.payload as BotResponseType).response,
            sender: 'bot',
          },
        ],
      };
    }
  }
  return store;
}
