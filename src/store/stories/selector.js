// import { createSelector } from 'reselect';

export const storiesIdsSelector = state => state.stories.ids;
export const storiesDataSelector = state => state.stories.data;
export const storiesTypeSelector = state => state.stories.type;
// export const getStoriesSelector = createSelector([
//   storiesIdsSelector,
//   storiesDataSelector,
//   storiesTypeSelector,
// ], (ids, data, type) => ({
//   ids,
//   data,
//   type
// }));