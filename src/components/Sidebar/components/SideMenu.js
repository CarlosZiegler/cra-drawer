import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import { TeamOutlined } from '@ant-design/icons';
import { CompanyContext } from '../../../context';
import Route from '../../../routes';

export default function SideMenu({ companies }) {
  const { SubMenu } = Menu;
  const { setCompany } = useContext(CompanyContext);

  const history = useHistory();

  const handleOnclick = (company) => {
    setCompany(company);
    history.push(Route.Company);
  };

  return (
    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" width={'100%'}>
      <SubMenu key="sub2" icon={<TeamOutlined />} title="Companies">
        {companies.map((company) => (
          <Menu.Item key={company.name} onClick={() => handleOnclick(company)}>
            {company.name}
          </Menu.Item>
        ))}
      </SubMenu>
    </Menu>
  );
}
