import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { type UseFormReset } from 'react-hook-form';
import { isAxiosError } from 'axios';
import PetService from '@/serivces/pets';
import { addPet, getAllPets } from '@/redux/reducer/pets';
import { removeMessage } from '@/utils/functions';
import type { CreatePetFormValues, SelectPets } from '@/types/types';

interface Props {
  reset?: UseFormReset<CreatePetFormValues>;
}

const usePets = (props: Props = {}) => {
  const { reset } = props;

  const { pets } = useSelector((state: SelectPets) => state.pets);

  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleCreatePet = async (data: CreatePetFormValues) => {
    setLoading(true);

    try {
      const pet = await PetService.create(data);
      dispatch(addPet({ pet }));

      setResult('Mascota creada exitosamente');
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

  const getPets = async () => {
    setLoading(true);

    try {
      const pets = await PetService.getAll();
      dispatch(getAllPets({ pets }));
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return { pets, result, error, loading, handleCreatePet, getPets };
};

export default usePets;
