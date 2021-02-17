import { getStories, getStory } from '../../api';

import {
  FETCH_STORIES_START,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_ERROR,
  FETCH_STORY_START,
  FETCH_STORY_SUCCESS,
  FETCH_STORY_ERROR,
  SET_STORIES_TYPE,
} from './types';

const fetchStoriesStart = () => ({ type: FETCH_STORIES_START });
const fetchStoriesSuccess = data => ({ type: FETCH_STORIES_SUCCESS, data });
const fetchStoriesError = () => ({ type: FETCH_STORIES_ERROR });

export const fetchStories = (type, force) => async (dispatch, getState) => {
  const timestamp = getState().stories.timestamp;
  const newTimestamp = new Date().getTime();
  if(!force && (newTimestamp - timestamp) < 60000) return false;
  try {
    dispatch(fetchStoriesStart());
    const data = await getStories(type);
    return dispatch(fetchStoriesSuccess(data));
  } catch(error) {
    return dispatch(fetchStoriesError(error));
  }
}

const fetchStoryStart = (id) => ({ type: FETCH_STORY_START, id });
const fetchStorySuccess = (id, data) => ({ type: FETCH_STORY_SUCCESS, data, id });
const fetchStoryError = (id) => ({ type: FETCH_STORY_ERROR, id });

export const fetchStory = (id) => async (dispatch) => {
  try {
    dispatch(fetchStoryStart(id));
    const data = await getStory(id);
    return dispatch(fetchStorySuccess(id, data));
  } catch(error) {
    return dispatch(fetchStoryError(id, error));
  }
}

export const setStoriesType = data => ({ type: SET_STORIES_TYPE, data });