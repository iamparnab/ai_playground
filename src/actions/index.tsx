import { Actions, ActionType } from './model';

export function addNewTab(tabName: string): ActionType {
  return {
    type: Actions.ADD_NEW_TAB,
    payload: {
      tabName,
    },
  };
}
