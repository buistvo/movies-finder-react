import { render, fireEvent } from '@testing-library/react';
import { Counter } from '../Counter';

describe('Counter', () => {
  const initialCount = 10;

  it('renders initial value provided in props', () => {
    const { getByText } = render(<Counter initialCount={initialCount} />);
    const countElement = getByText(`Count: ${initialCount}`);
    expect(countElement).toBeInTheDocument();
  });

  it('clicking on "decrement" button decrements the displayed value', () => {
    const { getByText } = render(<Counter initialCount={initialCount} />);
    const decrementButton = getByText('-');
    fireEvent.click(decrementButton);
    const countElement = getByText(`Count: ${initialCount - 1}`);
    expect(countElement).toBeInTheDocument();
  });

  it('clicking on "increment" button increments the displayed value', () => {
    const { getByText } = render(<Counter initialCount={initialCount} />);
    const decrementButton = getByText('+');
    fireEvent.click(decrementButton);
    const countElement = getByText(`Count: ${initialCount + 1}`);
    expect(countElement).toBeInTheDocument();
  });
});
