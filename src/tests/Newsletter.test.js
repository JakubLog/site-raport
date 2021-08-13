import { render, screen, fireEvent } from 'test-utils';
import Newsletter from 'components/molecules/Newsletter/Newsletter';

describe('Newsletter component tests', () => {
  it('Renders component', async () => {
    render(<Newsletter />);
    await screen.findAllByText(/zapisz się/i);
  });
  it('Validates form in component', async () => {
    render(<Newsletter />);
    const btn = await screen.findByLabelText(/zapisz się/i);
    expect(await screen.findByPlaceholderText(/example/i)).toHaveAttribute('placeholder', 'example@email.com');
    fireEvent.click(btn);
    expect(await screen.findByPlaceholderText(/example/i)).toHaveAttribute('placeholder', 'Podaj poprawny email!');
  });
  it('Allows to add email to database', async () => {
    render(<Newsletter />);
    const btn = await screen.findByLabelText(/zapisz się/i);
    expect(await screen.findByPlaceholderText(/example/i)).toHaveAttribute('placeholder', 'example@email.com');
    fireEvent.change(await screen.findByPlaceholderText(/example/i), { target: { value: 'example@email.com' } });
    fireEvent.click(btn);
    expect(await screen.findByLabelText(/zapisz się/i)).toBeDisabled();
  });
});
