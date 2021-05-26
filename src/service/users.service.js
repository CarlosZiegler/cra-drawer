import { api } from '../infra';
import { User } from '../models';

async function getUsers() {
  try {
    const { data: response } = await api.get('/users');

    return response.data.map(User.fromJson);
  } catch (error) {
    console.log(error);
  }
}

export const userService = { getUsers };
