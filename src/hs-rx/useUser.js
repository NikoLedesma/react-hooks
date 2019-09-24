import { useSelector, useDispatch, shallowEqual } from "react-redux";
import {
  FETCHING_USERS,
  FETCHING_USERS_FAILED,
  FETCHING_USERS_SUCCESS,
  ADD_USER
} from "../actions/types";
import UserApi from "../api/UserApi";
const MSG_EXITO = "OK";

const useUser = () => {
  /*SELECTORS*/
  const users = useSelector(({ userStore }) => {
    return userStore.users;
  }, shallowEqual);

  const isUsersFetching = useSelector(({ userStore }) => {
    return userStore.isUsersFetching;
  }, shallowEqual);

  const usersFetchedError = useSelector(({ userStore }) => {
    return userStore.usersFetchedError;
  }, shallowEqual);

  const usersFetched = useSelector(({ userStore }) => {
    return userStore.usersFetched;
  }, shallowEqual);

  /*DISPATCHERS*/
  const dispatch = useDispatch();

  const searchUsers = e => {
    dispatch({ type: FETCHING_USERS });
    UserApi.searchUsers()
      .then(success => {
        if (success.data.P_MSGE === MSG_EXITO) {
          dispatch({ type: FETCHING_USERS_SUCCESS, users: success.data.USERS });
        } else {
          dispatch({ type: FETCHING_USERS_FAILED });
        }
      })
      .catch(e => dispatch({ type: FETCHING_USERS_FAILED }));
  };

  const addUser = userName => {
    dispatch({ type: ADD_USER, user: userName });
  };

  return { users, isUsersFetching, usersFetchedError, usersFetched, searchUsers, addUser };
};

export default useUser;
