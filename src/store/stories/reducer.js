import {
  FETCH_STORIES_START,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_ERROR,
  FETCH_STORY_START,
  FETCH_STORY_SUCCESS,
  FETCH_STORY_ERROR,
  SET_STORIES_TYPE,
} from './types';

import { STORY } from './model';

const INITIAL_STATE = {
  type: 'topstories',
  status: 'INITIAL', // ['INITIAL', 'LOADING', 'LOADED', 'ERROR']
  ids: [],
  data: {},
  timestamp: null,
}

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_STORIES_START:
      return {...state, status: 'LOADING'};
    case FETCH_STORIES_SUCCESS:
      return {...state, ids: action.data, status: 'LOADED', timestamp: new Date().getTime()};
    case FETCH_STORIES_ERROR:
      return {...state, status: 'ERROR'};
    case FETCH_STORY_START:
      return {...state, data: {...state.data, [action.id]: {...STORY, status: 'LOADING'}}};
    case FETCH_STORY_SUCCESS:
      return {...state, data: {...state.data, [action.id]: {data: action.data, status: "LOADED"}}};
    case FETCH_STORY_ERROR:
      return {...state, data: {...state.data, [action.id]: {...STORY, status: 'ERROR'}}};
    case SET_STORIES_TYPE:
      return {...state, type: action.data};
    default: return state;
  }
}

export default reducer;