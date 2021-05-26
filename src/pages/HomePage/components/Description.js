import React from 'react';
import { Descriptions } from 'antd';

export default function Description({ company }) {
  return (
    <Descriptions title="Company Info">
      <Descriptions.Item label="Company Name">{company.name}</Descriptions.Item>
      <Descriptions.Item label="Telephone">{company.phone}</Descriptions.Item>
      <Descriptions.Item label="Country">{company.country}</Descriptions.Item>
      <Descriptions.Item label="Email">{company.email}</Descriptions.Item>
    </Descriptions>
  );
}
