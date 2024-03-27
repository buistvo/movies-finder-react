import styled from 'styled-components';
import { Colors } from '../../Colors';
export const DetailsContainer = styled.div`
  background-color: ${Colors.Workspace};
  position: relative;
  min-height: 400px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const SearchSwitcherButton = styled.button`
  background-color: ${Colors.Workspace};
  color: ${Colors.PrimaryRed};
  &:hover {
    background-color: ${Colors.Workspace};
  }
`;
