import { useCompanies } from '../../hooks';
import Sider from './Sider';
import { useState } from 'react';

export default function SideBar() {
  const [collapsed, setCollapsed] = useState(false);
  const companiesQuery = useCompanies();

  return (
    <Sider
      {...companiesQuery}
      collapsed={collapsed}
      setCollapsed={setCollapsed}
    />
  );
}
