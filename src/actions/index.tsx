import { Actions, ActionType } from './model';

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
