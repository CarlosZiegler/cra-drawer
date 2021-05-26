import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { CompanyContext } from '../../context';
import { useContext } from 'react';
import { Skeleton } from 'antd';

export default function HomePage() {
  const { company } = useContext(CompanyContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [company]);

  return (
    <S.Container>
      {isLoading ? <Skeleton active paragraph={{ rows: 8 }} /> : company?.name}
    </S.Container>
  );
}
