import { screen } from '@testing-library/react';

test('uses jest-dom', async () => {
  document.body.innerHTML = `
    <span data-testid="not-empty"><span data-testid="empty"></span></span>
    <div data-testid="visible">Visible Example</div>
  `;

  expect(screen.queryByTestId('not-empty')).not.toBeEmptyDOMElement();
  await expect(screen.getByText('Visible Example')).toBeVisible();
});
