import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ActionType } from '../actions/model';
import { rootReducer } from '../reducer';

export type DispatchType = (action: ActionType) => void;

export const store = createStore(rootReducer, applyMiddleware(thunk));
