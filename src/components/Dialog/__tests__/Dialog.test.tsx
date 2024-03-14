import { render, fireEvent } from '@testing-library/react';
import { Dialog, DialogProps } from '../Dialog';

const onCloseMock = jest.fn();

const testProps: DialogProps = {
  title: 'Test Dialog',
  children: <div>This is a test dialog content.</div>,
  onClose: onCloseMock,
};

describe('Dialog component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('renders with correct title and content', () => {
    const { getByText } = render(<Dialog {...testProps} />);

    expect(getByText('Test Dialog')).toBeInTheDocument();
    expect(getByText('This is a test dialog content.')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const { getByTestId } = render(<Dialog {...testProps} />);
    const closeButton = getByTestId('close-button');

    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
