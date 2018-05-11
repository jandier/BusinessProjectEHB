import * as reducers from '../home-reducers';
import * as constants from '../constants';

describe('home-reducers', () => {
  it('handles get items', () => {
    const items = [1, 2];
    const action = {
      type: constants.GET_ITEMS,
      payload: items,
    };
    expect(reducers.items([], action)).toEqual(items);
  });
  it('handles toggle item: new', () => {
    const item = 1;
    const action = {
      type: constants.TOGGLE_ITEM,
      payload: item,
    };
    expect(reducers.selectedIds([], action)).toEqual([item]);
  });
  it('handles toggle item: existing item', () => {
    const item = 1;
    const action = {
      type: constants.TOGGLE_ITEM,
      payload: item,
    };
    expect(reducers.selectedIds([1, 2], action)).toEqual([2]);
  });
});
