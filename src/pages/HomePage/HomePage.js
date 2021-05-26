import React from 'react';
import * as S from './styles';
import { CompanyContext } from '../../context';
import { useContext } from 'react';

export default function HomePage() {
  const { company } = useContext(CompanyContext);
  return <S.Container>{company?.name}</S.Container>;
}
