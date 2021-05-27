import { Drawer, Button } from 'antd';
import Form from '../Form';
import styled from 'styled-components';

export default function DrawerForm({ visible, onClose }) {
  return (
    <Drawer
      title="Create a new account"
      width={720}
      onClose={onClose}
      visible={visible ?? false}
      bodyStyle={{ paddingBottom: 80 }}
      footer={
        <ButtonsContainer>
          <Button onClick={onClose} style={{ marginRight: 8 }}>
            Cancel
          </Button>
          <Button onClick={onClose} type="primary">
            Submit
          </Button>
        </ButtonsContainer>
      }
    >
      <Form />
    </Drawer>
  );
}

const ButtonsContainer = styled.div`
  text-align: right;
`;
