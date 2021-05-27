import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HomePage from '../HomePage/HomePage';
import { CompanyBuilder, MockContext } from '../../tests';

describe(HomePage, () => {
  it('Show Company from context', async () => {
    const { findByText } = await renderPage();
    const homeTitle = await findByText(mockCompany.name);
    expect(homeTitle).toBeInTheDocument();
  });
  it('Show drawer if clicked in edit button', async () => {
    const { findByText, getByTitle } = await renderPage();
    const editBtn = await findByText(/edit company/i);
    userEvent.click(editBtn);

    expect(await findByText(/Edit Customer/i)).toBeInTheDocument();

    expect(getByTitle(/Name/i)).toBeInTheDocument();
    expect(getByTitle(/Image Url/i)).toBeInTheDocument();
    expect(getByTitle(/Phone/i)).toBeInTheDocument();
    expect(getByTitle(/Country/i)).toBeInTheDocument();
  });
  it('Show drawer form filled with company data', async () => {
    const { findByText, getByTestId } = await renderPage();
    const editBtn = await findByText(/edit company/i);
    userEvent.click(editBtn);

    expect(await findByText(/Edit Customer/i)).toBeInTheDocument();

    expect(getByTestId(/name/i).value).toBe(mockCompany.name);
    expect(getByTestId(/imageUrl/i).value).toBe(mockCompany.imageUrl);
    expect(getByTestId(/phone/i).value).toBe(mockCompany.phone);
    expect(getByTestId(/country/i).value).toBe(mockCompany.country);
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
