import { useState } from 'react';
import { useCompanies } from '../../hooks';
import Sider from './components/Sider';

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
