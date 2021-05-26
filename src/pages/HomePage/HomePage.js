import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { CompanyContext } from '../../context';
import { useContext } from 'react';
import { Skeleton } from 'antd';
import Description from './components/Description';

export default function HomePage() {
  const { company } = useContext(CompanyContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [company]);

  if (isLoading) {
    return (
      <PageWrapper>
        <Skeleton active paragraph={{ rows: 8 }} />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>{company && <Description company={company} />}</PageWrapper>
  );
}

function PageWrapper({ children }) {
  return <S.Container>{children}</S.Container>;
}
