import { Menu } from 'antd';
import { TeamOutlined } from '@ant-design/icons';

export default function SideMenu({ companies }) {
  const { SubMenu } = Menu;

  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" width={'100%'}>
      <SubMenu key="sub2" icon={<TeamOutlined />} title="Companies">
        {companies.map((company) => (
          <Menu.Item key={company.name}>{company.name}</Menu.Item>
        ))}
      </SubMenu>
    </Menu>
  );
}
