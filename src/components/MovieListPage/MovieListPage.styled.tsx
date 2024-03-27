import styled from 'styled-components';
import { Colors } from '../../Colors';

export const MoviesContainer = styled.div`
  background-color: ${Colors.Workspace};
  padding: 2rem;
`;

export const DetailsContainer = styled.div`
  background-color: ${Colors.Workspace};
  position: relative;
  min-height: 400px;
  padding: 1rem;
  margin-bottom: 1rem;
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
export const SearchMovieContainer = styled.div`
  position: relative;
  background: no-repeat center center;
  background-image: url('images/literally-me.jpg');
  background-repeat: repeat;
  background-position: top;
  background-repeat: repeat;
  background-size: cover;
  padding: 1rem;
  margin-bottom: 1rem;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    pointer-events: none;
    top: 0;
    left: 0;
  }
`;

export const SearchMovieContent = styled.div`
  position: relative;
  z-index: 1;
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

export const Logo = styled.div`
  color: ${Colors.PrimaryRed};
  font-size: 1.1em;
  :first-child {
    font-weight: 1000;
  }
`;

export const AddMovieButton = styled.button`
  background-color: ${Colors.Background}AA;
  color: ${Colors.PrimaryRed};
  &:hover {
    background-color: ${Colors.Workspace}BB;
  }
`;

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

export const SearchSwitcherButton = styled.button`
  background-color: ${Colors.Workspace};
  color: ${Colors.PrimaryRed};
  &:hover {
    background-color: ${Colors.Workspace};
  }
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
`;
