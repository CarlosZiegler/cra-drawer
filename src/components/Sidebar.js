import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { TeamOutlined } from '@ant-design/icons';
import { useCompanies } from '../hooks';

export default function SideBar() {
  const [collapsed, setCollapsed] = useState(false);

  const { data, error, isLoading } = useCompanies();

  const { Sider } = Layout;
  const { SubMenu } = Menu;

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
      {data && (
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
          width={'100%'}
        >
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Companies">
            {data.map((company) => (
              <Menu.Item key={company.name}>{company.name}</Menu.Item>
            ))}
          </SubMenu>
        </Menu>
      )}
    </Sider>
  );
}
