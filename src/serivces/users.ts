import axiosClient from '@/config/axios';
import { type RegisterFormValues } from '@/types/users';
import { API_ENDPOINTS } from '@/utils/consts';

const UserService = {
  register: async (data: RegisterFormValues) => {
    const res = await axiosClient.post(API_ENDPOINTS.REGISTER, data);
    const message: string = res.data.message;
    return message;
  }
};

export default UserService;
