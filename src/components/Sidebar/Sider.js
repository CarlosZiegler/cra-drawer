import { Layout } from 'antd';
import SideMenu from './SideMenu';
import Alert from '../../components/Alert';

export default function Side({
  data,
  error,
  isLoading,
  collapsed,
  setCollapsed,
}) {
  const { Sider } = Layout;

  const onCollapse = (collapsed) => setCollapsed(collapsed);

  if (error) return <Alert message={error.message} />;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      width={'max-content'}
    >
      <div className="logo" style={{ padding: 30 }} />
      {data && <SideMenu companies={data} />}
    </Sider>
  );
}
