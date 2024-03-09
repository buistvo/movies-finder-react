import { SortControlContainer, Select, Option } from './SortControl.styled';

interface SortControlProps {
  sortList: string[];
  onSortChange?: (sortBy: string) => void;
}
export function SortControl({ sortList, onSortChange }: SortControlProps) {
  function handleSortChange(newValue: string) {
    if (onSortChange) onSortChange(newValue);
  }

  return (
    <SortControlContainer>
      SORT BY
      <Select
        data-testid="sort-select"
        onChange={(e) => handleSortChange(e.target.value)}
      >
        {sortList.map((sort, index) => (
          <Option value={sort} key={index}>
            {sort.toUpperCase()}
          </Option>
        ))}
      </Select>
    </SortControlContainer>
  );
}
