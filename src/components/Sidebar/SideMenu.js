import { Menu } from 'antd';
import { TeamOutlined } from '@ant-design/icons';
import { CompanyContext } from '../../context';
import { useContext } from 'react';

export default function SideMenu({ companies }) {
  const { SubMenu } = Menu;
  const { setCompany } = useContext(CompanyContext);

  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" width={'100%'}>
      <SubMenu key="sub2" icon={<TeamOutlined />} title="Companies">
        {companies.map((company) => (
          <Menu.Item key={company.name} onClick={() => setCompany(company)}>
            {company.name}
          </Menu.Item>
        ))}
      </SubMenu>
    </Menu>
  );
}
