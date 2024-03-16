import styled from 'styled-components';
import { Colors } from '../../Colors';
import { ButtonRed } from '../../App.styled';

export const FormContainer = styled.form`
  display: grid;
  grid-template-columns: 2fr 1fr;
  width: 100%;
  gap: 1rem;
`;

export const LabeledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LabeledInputFullSizeContainer = styled(LabeledInputContainer)`
  display: flex;
  flex-direction: column;
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const Label = styled.label`
  color: ${Colors.PrimaryRed};
`;

export const Input = styled.input`
  background-color: ${Colors.Background};
  height: 2rem;
  border: 0;
`;

export const DescriptionInput = styled.textarea`
  background-color: ${Colors.Background};
  color: ${Colors.White};
  border: 0;
  height: 5rem;
  text-align: left;
  vertical-align: top;
  resize: none;
`;

export const Footer = styled.div`
  display: flex;
  grid-column-start: 2;
  justify-self: end;
`;

export const MovieFormButton = styled(ButtonRed)`
  margin-left: 1rem;
`;
