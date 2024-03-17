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
