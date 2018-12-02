import * as actions from '../home-actions';
import * as constants from '../constants';

describe('home-actions', () => {
  it('getItems action', () => {
    const items = [1, 2];
    const expectedAction = {
      type: constants.GET_ITEMS,
      payload: items,
    };
    expect(actions.getItems(items)).toEqual(expectedAction);
  });
  it('toggleItem action', () => {
    const item = 1;
    const expectedAction = {
      type: constants.TOGGLE_ITEM,
      payload: item,
    };
    expect(actions.toggleItem(item)).toEqual(expectedAction);
  });
});
