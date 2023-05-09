import { useState } from 'react';
import { useSelector } from 'react-redux';
import { type UseFormReset } from 'react-hook-form';
import UserService from '@/serivces/users';
import { removeMessage } from '@/utils/functions';
import { isAxiosError } from 'axios';
import { type SelectUser, type RegisterFormValues } from '@/types/types';

interface Props {
  reset?: UseFormReset<RegisterFormValues>;
}

const useUser = (props: Props = {}) => {
  const { reset } = props;

  const { user } = useSelector((state: SelectUser) => state.user);

  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async (data: RegisterFormValues) => {
    setLoading(true);

    try {
      const message = await UserService.register(data);
      setResult(message);
      reset?.();
      removeMessage(setResult);
    } catch (error) {
      if (isAxiosError(error)) {
        setError(error.response?.data.error);
        removeMessage(setError);
      }
    }

    setLoading(false);
  };

  return { user, result, error, loading, handleRegister };
};

export default useUser;
