import { Colors } from '../../Colors';
import styled from 'styled-components';

export const AddMovieButton = styled.button`
  background-color: ${Colors.Background}AA;
  color: ${Colors.PrimaryRed};
  &:hover {
    background-color: ${Colors.Workspace}BB;
  }
`;
export const ContainerWithBackground = styled.div`
  position: relative;
  background: no-repeat center center;
  background-image: URL('../images/literally-me.jpg');
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
