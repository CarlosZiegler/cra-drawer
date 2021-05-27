import React from 'react';
import { Alert } from 'antd';

export default function index({ message }) {
  return (
    <Alert
      message="Error"
      description={message ?? 'Sorry, something went wrong '}
      type="error"
      closable
      showIcon
    />
  );
}
