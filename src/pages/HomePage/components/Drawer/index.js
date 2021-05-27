import { Drawer, Button } from 'antd';
import Form from '../Form';
import styled from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { CompanyContext } from '../../../../context';
import { useContext } from 'react';
import { Company } from '../../../../models';

const schemaCompany = yup.object().shape({
  email: yup.string().required('*Field is required!'),
  phone: yup.string().required('*Field is required!'),
  name: yup.string().required('*Field is required!'),
  country: yup.string().required('*Field is required!'),
  imageUrl: yup.string().required('*Field is required!'),
});

export default function DrawerForm({ visible, onClose, company }) {
  const methods = useForm({
    resolver: yupResolver(schemaCompany),
    defaultValues: company,
    mode: 'onChange',
  });
  const { handleSubmit, formState } = methods;
  const { setCompany } = useContext(CompanyContext);
  const onSubmit = async (data) => {
    const updatedCompany = new Company({ ...company, ...data });

    setCompany(updatedCompany);
  };

  const { isValid } = formState;

  return (
    <Drawer
      title="Edit Customer"
      width={720}
      onClose={onClose}
      visible={visible ?? false}
      bodyStyle={{ paddingBottom: 80 }}
      footer={
        <ButtonsContainer>
          <Button onClick={onClose} style={{ marginRight: 8 }}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit(onSubmit)}
            type="primary"
            disabled={!isValid}
          >
            Submit
          </Button>
        </ButtonsContainer>
      }
    >
      <FormProvider {...methods}>
        <Form />
      </FormProvider>
    </Drawer>
  );
}

const ButtonsContainer = styled.div`
  text-align: right;
`;
