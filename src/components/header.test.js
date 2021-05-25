// __tests__/hidden-message.js
// these imports are something you'd normally configure Jest to import for you
// automatically. Learn more in the setup docs: https://testing-library.com/docs/react-testing-library/setup#cleanup
import '@testing-library/jest-dom';
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import MockContext from '../tests/MockContext';

test('shows title', () => {
  const testMessage = 'Test Message';
  render(
    <MockContext>
      <Header text={testMessage} />
    </MockContext>
  );

  expect(screen.getByText(testMessage)).toBeInTheDocument();
});
