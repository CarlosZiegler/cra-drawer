import { Layout } from 'antd';
import SideMenu from './SideMenu';

export default function Side({
  data,
  error,
  isLoading,
  collapsed,
  setCollapsed,
}) {
  const { Sider } = Layout;

  const onCollapse = (collapsed) => setCollapsed(collapsed);

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

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
