import axiosClient from '@/config/axios';
import type { CreatePetFormValues, Pet } from '@/types/types';
import { API_ENDPOINTS } from '@/utils/consts';

const PetService = {
  create: async (data: CreatePetFormValues) => {
    const res = await axiosClient.post(API_ENDPOINTS.CREATE_PET, data);
    const pet: Pet = res.data;
    return pet;
  }
};

export default PetService;
