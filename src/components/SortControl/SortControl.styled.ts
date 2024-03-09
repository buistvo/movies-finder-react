import styled from 'styled-components';
import { Colors } from '../../Colors';

export const SortControlContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
  max-width: 200px;
  color: ${Colors.SecondaryText};
`;

export const Select = styled.select`
  color: #fff;
  background-color: transparent;
  border: 0;
  &:focus {
    outline: none;
  }
`;

export const Option = styled.option`
  background-color: ${Colors.Workspace};
`;
