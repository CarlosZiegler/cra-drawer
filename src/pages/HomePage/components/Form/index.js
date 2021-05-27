import { Form, Col, Row } from 'antd';
import { useFormContext } from 'react-hook-form';
import { Input } from '../../../../components';
import styled from 'styled-components';

export default function EditForm() {
  const { register, formState } = useFormContext();
  const { errors } = formState;
  return (
    <Form layout="vertical">
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item name="name" label="Name">
            <>
              <Input
                {...register('name')}
                placeholder="Please enter user name"
                data-testid={'name'}
              />
              {errors.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )}
            </>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="imageUrl" label="Image Url">
            <>
              <Input
                {...register('imageUrl')}
                placeholder="Please enter url image here"
                data-testid={'imageUrl'}
              />
              {errors.imageUrl && (
                <ErrorMessage>{errors.imageUrl.message}</ErrorMessage>
              )}
            </>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item name="email" label="Email">
            <>
              <Input
                placeholder="Please enter url image here"
                {...register('email')}
                data-testid={'email'}
              />
              {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
            </>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item name="phone" label="Phone">
            <>
              <Input
                placeholder="Please enter url image here"
                {...register('phone')}
                data-testid={'phone'}
              />
              {errors.phone && (
                <ErrorMessage>{errors.phone.message}</ErrorMessage>
              )}
            </>
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item name="country" label="Country">
            <>
              <Input
                placeholder="Please enter url image here"
                {...register('country')}
                data-testid={'country'}
              />
              {errors.country && (
                <ErrorMessage>{errors.country.message}</ErrorMessage>
              )}
            </>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.8rem;
`;
