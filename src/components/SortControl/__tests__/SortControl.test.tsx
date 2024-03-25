import { render, fireEvent } from '@testing-library/react';
import { SortControl } from '../SortControl';
import '@testing-library/jest-dom';
import { SORT_OPTIONS } from '../../../constants/sort-options';

const mockSortList = SORT_OPTIONS;

describe('SortControl component', () => {
  it('renders sort options correctly', () => {
    const { getByText } = render(
      <SortControl
        sortList={mockSortList}
        initialValue={mockSortList[0].field}
      />
    );

    for (const option of mockSortList) {
      expect(getByText(option.label)).toBeInTheDocument();
    }
  });

  it('calls onSortChange handler when sort option is changed', () => {
    const onSortChangeMock = jest.fn();
    const selectedOption = mockSortList[1].field;
    const { getByTestId } = render(
      <SortControl
        initialValue={mockSortList[0].field}
        sortList={mockSortList}
        onSortChange={onSortChangeMock}
      />
    );

    fireEvent.change(getByTestId('sort-select'), {
      target: { value: selectedOption },
    });

    expect(onSortChangeMock).toHaveBeenCalled();
    expect(onSortChangeMock).toHaveBeenCalledWith(selectedOption); // Ensure that onSortChange function is called with correct sort value
  });
});
