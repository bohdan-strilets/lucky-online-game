import api from 'api';
import { API_URL } from 'api';

const getAllUsers = async (page: number) => {
  try {
    const { data } = await api.get(
      `${API_URL}/api/v1/user/get-all-users/?page=${page}`,
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getAllUsers;
