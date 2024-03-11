import styled from 'styled-components';
import { Colors } from './Colors';

export const MoviesContainer = styled.div`
  background-color: ${Colors.Workspace};
  padding: 2rem;
`;

export const DetailsContainer = styled.div`
  background-color: ${Colors.Workspace};
  padding: 2rem;
`;

export const DetailsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: grey;
  }
`;
