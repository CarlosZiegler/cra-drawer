import { render } from '@testing-library/react';
import HomePage from '../HomePage/HomePage';
import MockContext from '../../tests/MockContext';
import { CompanyBuilder } from '../../tests';

describe(HomePage, () => {
  it('Show Company from context', async () => {
    const { findByText } = await renderPage();
    const homeTitle = await findByText(mockCompany.name);
    expect(homeTitle).toBeInTheDocument();
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
