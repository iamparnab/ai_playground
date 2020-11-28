import { Actions, ActionType } from './model';
import { store } from '../store';
import {
  APPLY_FAILURE_MESSAGE,
  APPLY_SUCCESS_MESSAGE,
  ERROR_BOUNDARY_MESSAGE,
} from '../constants';
import { WindowExtended } from '../models.ts';
import { BrowserStorage } from '../utils';
import { DispatchType } from '../store/model';

declare const window: WindowExtended;

export function addNewTab(tabName: string): Function {
  return function (dispach: DispatchType) {
    const { tabs } = store.getState();
    /**
     * Add new tab
     */
    dispach({
      type: Actions.ADD_NEW_TAB,
      payload: {
        tabName,
      },
    });

    /**
     * Select the last tab
     */
    dispach({
      type: Actions.SELECT_TAB,
      payload: {
        tabId: tabs[tabs.length - 1].tabId + 1,
      },
    });
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

export function applyChanges(noShow?: boolean): Function {
  return function (dispatch: DispatchType) {
    const { code } = store.getState();
    let toasterMessage = APPLY_SUCCESS_MESSAGE;
    /**
     * Check for erros before applying.
     */
    try {
      /**
       * Create a function using Function constructor
       */
      const fn = new Function(`
        ${code};
        window.Editor.init = init;
        window.Editor.respond = respond;
      `);

      /**
       * Execute the function
       */
      fn.call(null);

      // Run init once;
      window.Editor.init();

      dispatch({
        type: Actions.APPLY_CHANGES,
      });
    } catch (_) {
      toasterMessage = APPLY_FAILURE_MESSAGE;
    }

    if (Boolean(noShow) === false) {
      dispatch({
        type: Actions.SHOW_TOASTER,
        payload: {
          text: toasterMessage,
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
    /**
     * Toggle loader to show it.
     */
    dispatch({
      type: Actions.TOGGLE_QUERY_PROCESSING,
    });

    dispatch({
      type: Actions.RUN_QUERY,
      payload: {
        query,
      },
    });

    let response = '';
    /**
     * Handling runtime errors in the code
     */
    try {
      response = await window.Editor.respond(query);
    } catch (err) {
      response = ERROR_BOUNDARY_MESSAGE;
      console.table({ Message: err.message });
    }

    /**
     * Toggle loader again to hide it.
     */
    dispatch({
      type: Actions.TOGGLE_QUERY_PROCESSING,
    });

    dispatch({
      type: Actions.ADD_BOT_RESPONSE,
      payload: {
        response: String(response),
      },
    });
  };
}

export function removeTab(tabId: number): Function {
  return function (dispatch: DispatchType) {
    BrowserStorage.remove(`tabId_${tabId}`);

    const { tabs, selectedTabId } = store.getState();

    let needsReselection = selectedTabId === tabId,
      tabIndex = -1,
      nextSelectedTabId = -1;

    if (needsReselection) {
      tabIndex = tabs.findIndex((t) => t.tabId === tabId);

      nextSelectedTabId =
        tabIndex === tabs.length - 1 ? tabIndex - 1 : tabIndex + 1;
    }

    dispatch({
      type: Actions.REMOVE_TAB,
      payload: {
        tabId,
      },
    });

    /**
     * After removal select the next tab
     * if the deleted tab was the selected one.
     * But select the previous tab, if the deleted tab
     * was the last one.
     */
    if (needsReselection) {
      dispatch({
        type: Actions.SELECT_TAB,
        payload: {
          tabId: tabs[nextSelectedTabId].tabId,
        },
      });
    }
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
