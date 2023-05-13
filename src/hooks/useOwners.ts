import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllOwners } from '@/redux/reducer/owners';
import OwnerService from '@/serivces/owners';
import { type SelectOwners } from '@/types/types';

const useOwners = () => {
  const { owners } = useSelector((state: SelectOwners) => state.owners);

  // const [result, setResult] = useState('');
  // const [error, setError] = useState('');
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

  return { owners, loading, getOwners };
};

export default useOwners;
