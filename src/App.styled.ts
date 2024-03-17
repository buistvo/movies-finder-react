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

export const MovieImage = styled.img`
  width: 250px;
  height: 350px;
`;
