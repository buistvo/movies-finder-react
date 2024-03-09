import styled from 'styled-components';
import { Colors } from '../../Colors';
interface SortControlProps {
  sortList: string[];
  onSortChange?: (sortBy: string) => void;
}

const SortControlContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
  max-width: 200px;
  color: ${Colors.SecondaryText};
`;

const Select = styled.select`
  color: #fff;
  background-color: transparent;
  border: 0;
  &:focus {
    outline: none;
  }
`;

const Option = styled.option`
  background-color: ${Colors.Workspace};
`;

export function SortControl({ sortList, onSortChange }: SortControlProps) {
  function handleSortChange(newValue: string) {
    if (onSortChange) onSortChange(newValue);
  }

  return (
    <SortControlContainer>
      SORT BY
      <Select onChange={(e) => handleSortChange(e.target.value)}>
        {sortList.map((sort, index) => (
          <Option value={sort} key={index}>
            {sort.toUpperCase()}
          </Option>
        ))}
      </Select>
    </SortControlContainer>
  );
}
