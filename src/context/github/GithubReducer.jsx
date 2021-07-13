import { SERACH_USERS, SET_LOADING, CLEAR_USERS, GET_REPOS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SERACH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
