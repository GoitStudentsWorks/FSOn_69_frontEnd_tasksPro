import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const user = useSelector(authSelectors.selectUser);
  const isFetchingCurrent = useSelector(authSelectors.selectIsFetchingCurrent);

  const dispatch = useDispatch();

  const fetchUser = useCallback(
    () => dispatch(authOperations.fetchCurrentUser()),
    [dispatch]
  );

  const signUp = (name, email, password) =>
    dispatch(authOperations.register(name, email, password));

  const signIn = (email, password) =>
    dispatch(authOperations.logIn(email, password));

  const signOut = () => dispatch(authOperations.logOut());

  return {
    isLoggedIn,
    user,
    isFetchingCurrent,
    fetchUser,
    signUp,
    signIn,
    signOut,
  };
};

export default useAuth;
