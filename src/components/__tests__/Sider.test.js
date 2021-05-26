import { render } from '@testing-library/react';
import Sider from '../Sidebar/Sider';
import MockContext from '../../tests/MockContext';
import userEvent from '@testing-library/user-event';
import { CompanyBuilder } from '../../tests';

describe(Sider, () => {
  it('Show Sidebar Options', async () => {
    const { getByText } = await renderPage();

    expect(getByText('Companies')).toBeInTheDocument();
  });

  it('Show sub-options of Companies if clicked in Companies options of sidebar', async () => {
    const { getByText } = await renderPage();
    const companiesBtn = getByText('Companies');
    userEvent.click(companiesBtn);

    expect(getByText(mockCompanies[0].name)).toBeInTheDocument();
    expect(getByText(mockCompanies[1].name)).toBeInTheDocument();
  });
});

async function renderPage() {
  const renderResult = render(
    <MockContext>
      <Sider data={mockCompanies} />
    </MockContext>
  );
  return renderResult;
}

const mockCompanies = [
  CompanyBuilder.aCompany().build(),
  CompanyBuilder.aCompany({ name: 'Mueller, Ondricka and Lynch' }).build(),
];
