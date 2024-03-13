import { ReactNode } from 'react';
import { Portal } from 'react-portal';
import FocusTrap from 'focus-trap-react';
import {
  DialogContainer,
  CloseDialogButton,
  Header,
  Content,
  ConfirmButton,
  DialogContent,
} from './Dialog.styled';
export interface DialogProps {
  title: ReactNode | string;
  children?: ReactNode | string;
  onClose?: () => void;
  onConfirm?: () => void;
}

export function Dialog({ title, children, onClose, onConfirm }: DialogProps) {
  return (
    <Portal>
      <FocusTrap>
        <DialogContainer>
          <CloseDialogButton data-testid="close-button" onClick={onClose}>
            {'\u2715'}
          </CloseDialogButton>
          <Header> {title} </Header>
          <Content>
            {typeof children === 'string' ? (
              <DialogContent>
                <span>{children}</span>
                <ConfirmButton onClick={() => onConfirm && onConfirm()}>
                  CONFIRM
                </ConfirmButton>
              </DialogContent>
            ) : (
              children
            )}
          </Content>
        </DialogContainer>
      </FocusTrap>
    </Portal>
  );
}
