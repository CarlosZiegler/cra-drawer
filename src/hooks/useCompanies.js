import { useQuery } from 'react-query';
import { companyService } from '../service';

export default function useCompanies() {
  return useQuery(['companies'], () => companyService.getCompanies());
}
