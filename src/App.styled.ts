import styled from 'styled-components';
import { Colors } from './Colors';

export const ButtonRed = styled.button`
  background-color: ${Colors.PrimaryRed};
  color: white;
  font-weight: 400;

  &:hover {
    background-color: ${Colors.HoverRed};
  }
`;

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

export const DeleteForm = styled.form`
  width: 100%;
  flex-direction: column;
  display: flex;
`;

export const ConfirmButton = styled(ButtonRed)`
  align-self: end;
`;
