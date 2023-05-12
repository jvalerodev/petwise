import axiosClient from '@/config/axios';
import type { CreatePetFormValues, Pet } from '@/types/types';
import { API_ENDPOINTS } from '@/utils/consts';

const PetService = {
  create: async (data: CreatePetFormValues) => {
    const res = await axiosClient.post(API_ENDPOINTS.CREATE_PET, data);
    const pet: Pet = res.data.pet;
    return pet;
  },

  getAll: async () => {
    const res = await axiosClient.get(API_ENDPOINTS.GET_PETS);
    const pets: Pet[] = res.data.pets;
    return pets;
  }
};

export default PetService;
