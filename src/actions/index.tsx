import { Actions, ActionType } from './model';
import { DispatchType, store } from '../store';
import { APPLY_FAILURE_MESSAGE, APPLY_SUCCESS_MESSAGE } from '../constants';

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

export function applyChanges(): Function {
  return async function (dispatch: DispatchType) {
    const { code } = store.getState();
    try {
      /**
       * Check for erros before applying.
       */
      await eval(code);

      dispatch({
        type: Actions.APPLY_CHANGES,
      });
      dispatch({
        type: Actions.SHOW_TOASTER,
        payload: {
          text: APPLY_SUCCESS_MESSAGE,
        },
      });
    } catch (_) {
      dispatch({
        type: Actions.SHOW_TOASTER,
        payload: {
          text: APPLY_FAILURE_MESSAGE,
        },
      });
    }
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

    const response = await eval(
      `${codeToEvalute};init();respond('${query.replaceAll("'", "\\'")}')`
    );

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

export function showToaster(text: string): ActionType {
  return {
    type: Actions.SHOW_TOASTER,
    payload: {
      text,
    },
  };
}

export function hideToaster(): ActionType {
  return {
    type: Actions.HIDE_TOASTER,
  };
}
