import {
  Actions,
  ActionType,
  NewTabType,
  SelectTabType,
  SetCodeType,
  ChatInputType,
  RunQueryType,
  BotResponseType,
  RemoveTabType,
  ShowToasterType,
} from '../actions/model';

import { STORE_INIT } from '../store/constants';
import { StoreType } from '../store/model';

export function rootReducer(
  store: StoreType = STORE_INIT,
  action: ActionType
): StoreType {
  switch (action.type) {
    case Actions.ADD_NEW_TAB: {
      const tabId = store.tabs[store.tabs.length - 1].tabId + 1;
      return {
        ...store,
        tabs: [
          ...store.tabs,
          {
            tabId,
            tabName: (action.payload as NewTabType).tabName + tabId + '.js',
          },
        ],
      };
    }

    case Actions.SELECT_TAB: {
      return {
        ...store,
        selectedTabId: (action.payload as SelectTabType).tabId,
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

    case Actions.REMOVE_TAB: {
      const tabIdToDelete = (action.payload as RemoveTabType).tabId;
      return {
        ...store,
        tabs: store.tabs.filter((t) => t.tabId !== tabIdToDelete),
      };
    }

    case Actions.SHOW_TOASTER: {
      return {
        ...store,
        toasterConfig: {
          text: (action.payload as ShowToasterType).text,
          isVisible: true,
        },
      };
    }

    case Actions.HIDE_TOASTER: {
      return {
        ...store,
        toasterConfig: {
          text: '',
          isVisible: false,
        },
      };
    }

    case Actions.TOGGLE_QUERY_PROCESSING: {
      return {
        ...store,
        isProcessingQuery: !store.isProcessingQuery,
      };
    }
  }
  return store;
}
