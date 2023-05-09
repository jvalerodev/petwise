import { useState } from 'react';
import { useRouter } from 'next/router';
import { isAxiosError } from 'axios';
import { useDispatch } from 'react-redux';
import { login, logout } from '@/redux/reducer/user';
import AuthService from '@/serivces/auth';
import { removeMessage } from '@/utils/functions';
import { type UseFormReset } from 'react-hook-form';
import type { LoginFormValues } from '@/types/types';

interface Props {
  reset?: UseFormReset<LoginFormValues>;
}

const useAuth = (props: Props = {}) => {
  const { reset } = props;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = async (data: LoginFormValues) => {
    setLoading(true);
    setError('');

    try {
      const user = await AuthService.login(data);
      dispatch(login(user));
      reset?.();
      router.push('/');
    } catch (error) {
      if (isAxiosError(error)) {
        setError(error.response?.data.error);
        removeMessage(setError);
      }
    }

    setLoading(false);
  };

  const handleLogout = async () => {
    try {
      await AuthService.logout();
      dispatch(logout());
      router.push('/login');
    } catch (error) {
      if (isAxiosError(error)) {
        console.log(error.message);
      }
    }
  };

  const handleAuth = async () => {
    try {
      const user = await AuthService.getUser();
      dispatch(login(user));
    } catch (error) {
      dispatch(logout());
    }
  };

  return { loading, error, handleLogin, handleLogout, handleAuth };
};

export default useAuth;
