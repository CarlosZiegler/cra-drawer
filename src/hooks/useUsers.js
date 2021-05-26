import { useQuery } from 'react-query';
import { userService } from '../service';

export default function useUsers() {
  return useQuery(['users'], () => userService.getUsers());
}
