import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { setUser as setUserAction } from '../store';

type UseUser = {
  user: string;
  setUser: (user: string) => void;
};
export const useUser = (): UseUser => {
  const user = useSelector((state: RootState) => state.user.userName);
  const dispatch = useDispatch();
  const setUser = (user: string) => dispatch(setUserAction(user));
  return { user, setUser };
};
