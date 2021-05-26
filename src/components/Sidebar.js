import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { TeamOutlined, UserOutlined } from '@ant-design/icons';
import { useUsers } from '../hooks';

export default function SideBar() {
  const [collapsed, setCollapsed] = useState(false);

  const { status, data, error, isLoading } = useUsers();

  const { Sider } = Layout;
  const { SubMenu } = Menu;

  const onCollapse = (collapsed) => setCollapsed(collapsed);

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" style={{ padding: 30 }} />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <SubMenu key="sub1" icon={<UserOutlined />} title="Users">
          {data.map((user) => (
            <Menu.Item
              key={user.id}
            >{`${user.firstname} ${user.lastname}`}</Menu.Item>
          ))}
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Companies">
          <Menu.Item key="6">Company 1</Menu.Item>
          <Menu.Item key="8">Company 2</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}
