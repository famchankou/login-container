import { useCallback } from 'react';
import { unauthorize } from '../store/auth';
import { useDispatch } from 'react-redux';

export const useLocalStorageChange = () => {
  const dispatch = useDispatch();
  const onLocalStorageChange = useCallback((event) => {
    try {
      const newUserData = JSON.parse(event?.newValue);
      if (!newUserData || (newUserData && newUserData.loggedInUntil < Date.now())) {
        dispatch(unauthorize());
      }
    } catch {}
  }, [dispatch]);

  return [onLocalStorageChange];
}
