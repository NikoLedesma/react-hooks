import {
  FETCHING_USERS,
  FETCHING_USERS_FAILED,
  FETCHING_USERS_SUCCESS,
  ADD_USER
} from "../actions/types";

const initialState = {
  isUsersFetching: false,
  usersFetchedError: false,
  usersFetched: false,
  users: []
};

export default function polizasReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_USERS:
      return { ...state, isUsersFetching: true };

    case FETCHING_USERS_FAILED:
      return {
        ...state,
        isUsersFetching: false,
        usersFetched: true,
        usersFetchedError: true
      };

    case FETCHING_USERS_SUCCESS:
      return {
        ...state,
        isUsersFetching: false,
        usersFetched: true,
        usersFetchedError: false,
        users: action.users
      };

    case ADD_USER:
      return { ...state, users: [...state.users, action.user] };
    default:
      return state;
  }
}
