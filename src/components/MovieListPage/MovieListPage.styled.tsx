import styled from 'styled-components';
import { Colors } from '../../Colors';

export const MoviesContainer = styled.div`
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

export const MovieListPageContainer = styled.div``;

export const MoviesTotal = styled.div`
  padding-top: 2rem;
  padding-left: 2rem;
  text-align: start;
`;

export const MovieListPageFooter = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;

  background-color: ${Colors.Workspace}80;
`;

export const TopContainer = styled.div`
  display: grid;
  min-height: 460px;
`;

export const MoviesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const TopContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  padding-top: 1rem;
  padding-right: 2rem;
  padding-left: 2rem;
`;
