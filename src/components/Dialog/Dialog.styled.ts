import styled from 'styled-components';
import { Colors } from '../../Colors';
import { ButtonRed } from '../../App.styled';

export const DialogContainer = styled.div`
  position: fixed;
  top: 25%;
  left: 25%;
  width: 50%;
  height: fit-content;
  min-height: 100px;
  background-color: ${Colors.Workspace};
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-shadow: 0px 0px 5px 5px ${Colors.HoverRed};
  z-index: 1;
`;

export const Header = styled.h2`
  font-weight: 100;
  margin-top: 0;
`;

export const Content = styled.div`
  display: flex;
  min-width: 200px;
  min-height: 50px;
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

export const DialogContent = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
`;

export const ConfirmButton = styled(ButtonRed)`
  align-self: end;
`;
