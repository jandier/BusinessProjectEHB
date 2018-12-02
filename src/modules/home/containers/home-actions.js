import { createAction } from 'redux-actions';
import { GET_ITEMS, TOGGLE_ITEM } from './constants';

export const getItems = createAction(GET_ITEMS);
export const toggleItem = createAction(TOGGLE_ITEM);
