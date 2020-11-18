import {
  Actions,
  ActionType,
  NewTabType,
  SelectTabType,
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
      break;
    }
    case Actions.SELECT_TAB: {
      return {
        ...store,
        selectedTabid: (action.payload as SelectTabType).tabId,
      };
      break;
    }
  }
  return store;
}
