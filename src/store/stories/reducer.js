import {
  FETCH_STORIES_START,
  FETCH_STORIES_SUCCESS,
  FETCH_STORIES_ERROR,
  SET_STORIES_TYPE,
} from './types';

const INITIAL_STATE = {
  type: 'topstories',
  status: 'INITIAL', // ['INITIAL', 'LOADING', 'LOADED', 'ERROR']
  ids: [],
  data: [],
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
    case SET_STORIES_TYPE:
      return {...state, type: action.data};
    default: return state;
  }
}

export default reducer;