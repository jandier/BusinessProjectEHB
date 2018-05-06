import { createSelector } from 'reselect';

// eslint-disable-next-line
export const getAllItems = createSelector(
  [state => state.home.items, state => state.home.selectedIds],
  (items, selectedIds) =>
    items.map(item => {
      if (selectedIds.includes(item.id)) {
        return { ...item, selected: true };
      }
      return { ...item, selected: false };
    }),
);
