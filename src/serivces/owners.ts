import axiosClient from '@/config/axios';
import type { EditOwnerFormValues, Owner } from '@/types/types';
import { API_ENDPOINTS } from '@/utils/consts';

const OwnerService = {
  getAll: async () => {
    const res = await axiosClient.get(API_ENDPOINTS.GET_OWNERS);
    const owners: Owner[] = res.data.owners;
    return owners;
  },

  update: async (ownerToUpdate: Owner | null, data: EditOwnerFormValues) => {
    const res = await axiosClient.put(
      `${API_ENDPOINTS.UPDATE_OWNER}/${ownerToUpdate?.id}`,
      data
    );
    const owner: Owner = res.data.owner;
    return owner;
  }
};

export default OwnerService;
