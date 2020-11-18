import { Actions, ActionType } from './model';
import { DispatchType, store } from '../store';

export function addNewTab(tabName: string): ActionType {
  return {
    type: Actions.ADD_NEW_TAB,
    payload: {
      tabName,
    },
  };
}

export function selectTab(tabId: number): ActionType {
  return {
    type: Actions.SELECT_TAB,
    payload: {
      tabId,
    },
  };
}

export function setCode(code: string): ActionType {
  return {
    type: Actions.SET_CODE,
    payload: {
      code,
    },
  };
}

export function applyChanges(): ActionType {
  return {
    type: Actions.APPLY_CHANGES,
  };
}

export function updateChatInput(chatInput: string): ActionType {
  return {
    type: Actions.UPDATE_CHAT_INPUT,
    payload: {
      chatInput,
    },
  };
}

export function runQuery(query: string): Function {
  return async function (dispatch: DispatchType) {
    dispatch({
      type: Actions.RUN_QUERY,
      payload: {
        query,
      },
    });

    const { codeToEvalute } = store.getState();

    const response = await eval(`${codeToEvalute};init();respond('${query}')`);

    dispatch({
      type: Actions.ADD_BOT_RESPONSE,
      payload: {
        response,
      },
    });
  };
}

export function removeTab(tabId: number): Function {
  return function (dispatch: DispatchType) {
    localStorage.removeItem(`tabId_${tabId}`);

    dispatch({
      type: Actions.REMOVE_TAB,
      payload: {
        tabId,
      },
    });
  };
}
