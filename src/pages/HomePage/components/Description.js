import { Descriptions } from 'antd';
import styled from 'styled-components';

export default function Description({ company }) {
  return (
    <DescriptionContainer title="Company Info" bordered>
      <Descriptions.Item label="Company Name">{company.name}</Descriptions.Item>
      <Descriptions.Item label="Telephone">{company.phone}</Descriptions.Item>
      <Descriptions.Item label="Country">{company.country}</Descriptions.Item>
      <Descriptions.Item label="Email">{company.email}</Descriptions.Item>
    </DescriptionContainer>
  );
}

const DescriptionContainer = styled(Descriptions)`
  margin: 30px;
  max-width: 100vw;
`;
