import * as selectors from '../home-selectors';

describe('home selectors', () => {
  it('handle getAllItems: none selected', () => {
    const items = [{ id: 1, selected: false }, { id: 2, selected: false }];
    const selectedIds = [];
    const expectedItems = [
      { id: 1, selected: false },
      { id: 2, selected: false },
    ];
    expect(
      selectors.getAllItems({
        home: {
          items,
          selectedIds,
        },
      }),
    ).toEqual(expectedItems);
  });
  it('handle getAllItems: 1 selected', () => {
    const items = [{ id: 1, selected: false }, { id: 2, selected: false }];
    const selectedIds = [1];
    const expectedItems = [
      { id: 1, selected: true },
      { id: 2, selected: false },
    ];
    expect(
      selectors.getAllItems({
        home: {
          items,
          selectedIds,
        },
      }),
    ).toEqual(expectedItems);
  });
});
