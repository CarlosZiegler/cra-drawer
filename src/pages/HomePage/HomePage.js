import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { CompanyContext } from '../../context';
import { useContext } from 'react';
import { Skeleton } from 'antd';
import Description from './components/Description';
import CompanyHeader from './components/CompanyHeader';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
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
      <PageWrapper>
        <Skeleton active paragraph={{ rows: 8 }} />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
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
    </PageWrapper>
  );
}

function PageWrapper({ children }) {
  return <S.Container>{children}</S.Container>;
}
