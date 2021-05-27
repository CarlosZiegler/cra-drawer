import React from 'react';
import { Image } from 'antd';

export default function CompanyHeader({ imageUrl }) {
  return <Image width={400} src={imageUrl} />;
}
