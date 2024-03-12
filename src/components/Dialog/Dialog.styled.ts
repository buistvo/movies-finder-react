import styled from 'styled-components';
import { Colors } from '../../Colors';

export const DialogContainer = styled.div`
  position: fixed;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  background-color: ${Colors.Workspace};
  opacity: 0.95;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const Header = styled.h2`
  font-weight: 100;
  margin-top: 0;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
`;

export const CloseDialogButton = styled.button`
  padding: 0;
  align-self: end;
  background-color: transparent;
  color: white;
  right: 0;
  justify-self: end;
  width: 30px;
  height: 30px;
`;
