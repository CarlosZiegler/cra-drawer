import { api } from '../infra';
import { Company } from '../models';

async function getCompanies() {
  try {
    const { data: response } = await api.get('/companies');

    return response.data.map(Company.fromJson);
  } catch (error) {
    console.log(error);
  }
}

export const companyService = { getCompanies };
