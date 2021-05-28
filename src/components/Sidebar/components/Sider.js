import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SideMenu from './SideMenu';
import Alert from '../../../components/Alert';
import Router from '../../../routes';

export default function Side({ data, error, collapsed, setCollapsed }) {
  const { Sider } = Layout;

  const onCollapse = (collapsed) => setCollapsed(collapsed);

  if (error) return <Alert message={error.message} />;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      width={'max-content'}
      breakpoint="lg"
    >
      <div
        className="logo"
        style={{ padding: 30, color: '#fff', alignSelf: 'center' }}
      >
        <StyledLink to={Router.Home}>APP</StyledLink>
      </div>

      {data && <SideMenu companies={data} />}
    </Sider>
  );
}

export const StyledLink = styled(Link)`
  font-size: 1rem;
  overflow: 'auto';
  max-height: '100vh';
  position: 'fixed';
  left: 0;
  z-index: 99;
  text-align: center;
`;
