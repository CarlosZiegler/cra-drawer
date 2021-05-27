import { useContext } from 'react';
import { Drawer, Button } from 'antd';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import Form from '../Form';
import { CompanyContext } from '../../../../context';
import { Company } from '../../../../models';

const MessageRequired = '*Field is required!';

const schemaCompany = yup.object().shape({
  email: yup.string().required(MessageRequired),
  phone: yup.string().required(MessageRequired),
  name: yup.string().required(MessageRequired),
  country: yup.string().required(MessageRequired),
  imageUrl: yup.string().required(MessageRequired),
});

export default function DrawerForm({ visible, onClose, company }) {
  const { setCompany } = useContext(CompanyContext);

  const methods = useForm({
    resolver: yupResolver(schemaCompany),
    defaultValues: company,
    mode: 'onChange',
  });

  const { handleSubmit, formState } = methods;

  const onSubmit = async (data) => {
    const updatedCompany = new Company({ ...company, ...data });
    setCompany(updatedCompany);
  };

  const { isValid, isDirty } = formState;

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
            disabled={!isValid || !isDirty}
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
