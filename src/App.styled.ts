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
  min-width: 250px;
  min-height: 350px;
  width: 250px;
  height: 350px;
`;
export const Logo = styled.div`
  color: ${Colors.PrimaryRed};
  font-size: 1.1em;
  :first-child {
    font-weight: 1000;
  }
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
`;
