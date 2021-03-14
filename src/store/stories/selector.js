import { createSelector } from 'reselect';
const getId = (_, id) => id;

export const storiesIdsSelector = state => state.stories.ids;
export const storiesDataSelector = state => state.stories.data;
export const storiesTypeSelector = state => state.stories.type;

export const getStoryByIDSelector = createSelector(
  storiesDataSelector,
  getId,
  (data, id) => data[id]
)