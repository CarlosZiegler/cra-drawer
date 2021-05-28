import { Button, Skeleton } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React, { useEffect, useState, useContext } from 'react';
import { CompanyContext } from '../../context';
import { ContentContainer } from '../../components';
import Description from './components/Description';
import CompanyHeader from './components/CompanyHeader';
import Drawer from './components/Drawer';

export default function HomePage() {
  const { company } = useContext(CompanyContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const showDrawer = () => setIsDrawerVisible(true);
  const onCloseDrawer = () => setIsDrawerVisible(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <ContentContainer>
        <Skeleton.Image
          active
          style={{ width: '300px', height: '300px', marginBottom: '50px' }}
        />
        <Skeleton active paragraph={{ rows: 3 }} />
      </ContentContainer>
    );
  }

  return (
    <ContentContainer>
      {company && (
        <>
          <Drawer
            visible={isDrawerVisible}
            onClose={onCloseDrawer}
            company={company}
          />
          <CompanyHeader imageUrl={company.imageUrl} />
          <Description company={company} />
          <Button type="primary" onClick={showDrawer}>
            <PlusOutlined /> Edit Company
          </Button>
        </>
      )}
    </ContentContainer>
  );
}
