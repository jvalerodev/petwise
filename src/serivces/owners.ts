import axiosClient from '@/config/axios';
import type { Owner } from '@/types/types';
import { API_ENDPOINTS } from '@/utils/consts';

const OwnerService = {
  getAll: async () => {
    const res = await axiosClient.get(API_ENDPOINTS.GET_OWNERS);
    const owners: Owner[] = res.data.owners;
    return owners;
  }
};

export default OwnerService;
