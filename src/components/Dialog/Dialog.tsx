import { ReactNode } from 'react';
import { Portal } from 'react-portal';
import FocusTrap from 'focus-trap-react';
import {
  DialogContainer,
  CloseDialogButton,
  Header,
  Content,
} from './Dialog.styled';

export interface DialogProps {
  title: ReactNode;
  children?: ReactNode;
  onClose?: () => void;
}

export function Dialog({ title, children, onClose }: DialogProps) {
  return (
    <Portal>
      <FocusTrap>
        <DialogContainer>
          <CloseDialogButton data-testid="close-button" onClick={onClose}>
            {'\u2715'}
          </CloseDialogButton>
          <Header> {title} </Header>
          <Content>{children}</Content>
        </DialogContainer>
      </FocusTrap>
    </Portal>
  );
}
