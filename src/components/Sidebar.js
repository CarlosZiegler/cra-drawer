import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { FileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

export default function SideBar() {
  const [collapsed, setCollapsed] = useState(false);

  const { Sider } = Layout;
  const { SubMenu } = Menu;

  const onCollapse = (collapsed) => setCollapsed(collapsed);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" style={{ padding: 30 }} />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <SubMenu key="sub1" icon={<UserOutlined />} title="Users">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Companies">
          <Menu.Item key="6">Company 1</Menu.Item>
          <Menu.Item key="8">Company 2</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}
