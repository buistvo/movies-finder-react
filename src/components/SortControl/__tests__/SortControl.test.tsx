import { render, fireEvent } from '@testing-library/react';
import { SortControl } from '../SortControl';
import '@testing-library/jest-dom';

const mockSortList = ['name', 'rating', 'year'];

describe('SortControl component', () => {
  it('renders sort options correctly', () => {
    const { getByText } = render(<SortControl sortList={mockSortList} />);

    expect(getByText('SORT BY')).toBeInTheDocument();
    expect(getByText('NAME')).toBeInTheDocument();
    expect(getByText('RATING')).toBeInTheDocument();
    expect(getByText('YEAR')).toBeInTheDocument();
  });

  it('calls onSortChange handler when sort option is changed', () => {
    const onSortChangeMock = jest.fn();

    const { getByTestId } = render(
      <SortControl sortList={mockSortList} onSortChange={onSortChangeMock} />
    );

    fireEvent.change(getByTestId('sort-select'), {
      target: { value: 'rating' },
    });

    expect(onSortChangeMock).toHaveBeenCalled();
    expect(onSortChangeMock).toHaveBeenCalledWith('rating'); // Ensure that onSortChange function is called with correct sort value
  });
});
