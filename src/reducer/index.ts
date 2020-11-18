import { Actions, ActionType } from '../actions/model';
import { STORE_INIT } from '../store/constants';
import { StoreType } from '../store/model';

export function rootReducer(
  store: StoreType = STORE_INIT,
  action: ActionType
): StoreType {
  switch (action.type) {
    case Actions.ADD_NEW_TAB: {
      return {
        tabs: [
          ...store.tabs,
          {
            tabId: store.tabs.length + 1,
            tabName:
              action.payload.tabName + ' ' + (store.tabs.length + 1) + '.js',
          },
        ],
      };
      break;
    }
  }
  return store;
}
