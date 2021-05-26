import { render } from '@testing-library/react';
import Sidebar from '../Sidebar';
import MockContext from '../../tests/MockContext';
import userEvent from '@testing-library/user-event';

describe(Sidebar, () => {
  it('Show Sidebar Options', async () => {
    const { getByText } = await renderPage();

    expect(getByText('Users')).toBeInTheDocument();
    expect(getByText('Companies')).toBeInTheDocument();
  });
  it('Show sub-options of users if clicked in users options of sidebar', async () => {
    const { getByText } = await renderPage();
    const usersBtn = getByText('Users');
    userEvent.click(usersBtn);

    expect(getByText('Tom')).toBeInTheDocument();
    expect(getByText('Bill')).toBeInTheDocument();
    expect(getByText('Alex')).toBeInTheDocument();
  });
  it('Show sub-options of Companies if clicked in Companies options of sidebar', async () => {
    const { getByText } = await renderPage();
    const companiesBtn = getByText('Companies');
    userEvent.click(companiesBtn);

    expect(getByText('Company 1')).toBeInTheDocument();
    expect(getByText('Company 2')).toBeInTheDocument();
  });
});

async function renderPage() {
  const renderResult = render(
    <MockContext>
      <Sidebar />
    </MockContext>
  );
  return renderResult;
}
