import { Result, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { ContentContainer } from '../../components';

export default function NotFoundPage() {
  const history = useHistory();
  const handleOnclick = () => history.push('/');

  return (
    <ContentContainer>
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
    </ContentContainer>
  );
}
