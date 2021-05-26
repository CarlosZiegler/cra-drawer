import React from 'react';
import * as S from './styles';
import { Result, Button } from 'antd';
import { useHistory } from 'react-router-dom';

export default function NotFoundPage() {
  const history = useHistory();
  const handleOnclick = () => history.push('/');
  return (
    <S.Container>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, page not found."
        extra={
          <Button type="primary" onClick={handleOnclick}>
            Back Home
          </Button>
        }
      />
    </S.Container>
  );
}
