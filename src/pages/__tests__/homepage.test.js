import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage/HomePage';
import MockContext from '../../tests/MockContext';
import { CompanyBuilder } from '../../tests';
import userEvent from '@testing-library/user-event';

describe(HomePage, () => {
  it('Show Company from context', async () => {
    const { findByText } = await renderPage();
    const homeTitle = await findByText(mockCompany.name);
    expect(homeTitle).toBeInTheDocument();
  });
  it('Show drawer if clicked in edit button', async () => {
    const { findByText } = await renderPage();
    const editBtn = await findByText(/edit company/i);
    userEvent.click(editBtn);

    expect(await findByText(/create a new account/i)).toBeInTheDocument();
  });
});

async function renderPage() {
  const renderResult = render(
    <MockContext company={mockCompany}>
      <HomePage />
    </MockContext>
  );
  return renderResult;
}

const mockCompany = CompanyBuilder.aCompany().build();
