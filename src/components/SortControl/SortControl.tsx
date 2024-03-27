import { SortOption } from '../../constants/sort-options';
import { MoviesResponse } from '../../types/movies-response';
import { SortControlContainer, Select, Option } from './SortControl.styled';

interface SortControlProps {
  sortList: SortOption[];
  onSortChange?: (sortBy: keyof MoviesResponse) => void;
  initialValue: string;
}
export function SortControl({
  sortList,
  onSortChange,
  initialValue,
}: SortControlProps) {
  function handleSortChange(newValue: keyof MoviesResponse) {
    if (onSortChange) onSortChange(newValue);
  }

  return (
    <SortControlContainer>
      SORT BY
      <Select
        data-testid="sort-select"
        onChange={(e) =>
          handleSortChange(e.target.value as keyof MoviesResponse)
        }
        defaultValue={initialValue}
      >
        {sortList.map(({ label, field }) => (
          <Option label={label} value={field} key={field}>
            {label.toUpperCase()}
          </Option>
        ))}
      </Select>
    </SortControlContainer>
  );
}
