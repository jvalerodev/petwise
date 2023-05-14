import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { type UseFormReset } from 'react-hook-form';
import { getAllOwners, updateOwner } from '@/redux/reducer/owners';
import OwnerService from '@/serivces/owners';
import type { Owner, EditOwnerFormValues, SelectOwners } from '@/types/types';
import { removeMessage } from '@/utils/functions';
import { isAxiosError } from 'axios';

interface Props {
  reset?: UseFormReset<EditOwnerFormValues>;
}

const useOwners = (props: Props = {}) => {
  const { reset } = props;
  const { owners } = useSelector((state: SelectOwners) => state.owners);

  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const getOwners = async () => {
    setLoading(true);

    try {
      const owners = await OwnerService.getAll();
      dispatch(getAllOwners({ owners }));
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const handleUpdateOwner = async (
    ownerToUpdate: Owner | null,
    data: EditOwnerFormValues
  ) => {
    setLoading(true);

    try {
      const owner = await OwnerService.update(ownerToUpdate, data);
      dispatch(updateOwner({ owner }));
      setResult('Propietario actualizado exitosamente');

      reset?.(() => ({
        name: '',
        lastName: '',
        dni: '',
        email: '',
        phone: ''
      }));

      removeMessage(setResult);
    } catch (error) {
      if (isAxiosError(error)) {
        setError(error.response?.data.error);
        removeMessage(setError);
      }
    }

    setLoading(false);
  };

  return { owners, loading, result, error, getOwners, handleUpdateOwner };
};

export default useOwners;
