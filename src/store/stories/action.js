import { getStories } from '../../api';

import {
  FETCH_STORIES_START,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_ERROR,
  SET_STORIES_TYPE,
} from './types';

const fetchStoriesStart = () => ({ type: FETCH_STORIES_START });
const fetchStoriesSuccess = data => ({ type: FETCH_STORIES_SUCCESS, data });
const fetchStoriesError = () => ({ type: FETCH_STORIES_ERROR });

export const fetchStories = (type) => async (dispatch, getState) => {
  const timestamp = getState().stories.timestamp;
  const newTimestamp = new Date().getTime();
  if((newTimestamp - timestamp) < 60000) return false;
  try {
    dispatch(fetchStoriesStart());
    const data = await getStories(type);
    return dispatch(fetchStoriesSuccess(data));
  } catch(error) {
    return dispatch(fetchStoriesError(error));
  }
}

export const setStoriesType = data => ({ type: SET_STORIES_TYPE, data });