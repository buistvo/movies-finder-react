import styled from 'styled-components';
import { Colors } from '../../Colors';

export const MovieDetailsContainer = styled.div`
  display: flex;
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: flex-start;
  width: 100%;
  min-width: 500px;
`;
export const InfoHeader = styled.h2`
  font-weight: 100;
`;

export const Rating = styled.span`
  font-weight: 100;
  font-size: 0.8em;
  padding: 0.5rem;
  margin-left: 1rem;
  border: 1px solid ${Colors.SecondaryText};
  border-radius: 50px;
  display: inline-block;
  width: 30px;
`;

export const Genre = styled.span`
  color: ${Colors.SecondaryText};
  font-size: 0.9rem;
  font-weight: 500;
`;

export const AdditionalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  color: ${Colors.PrimaryRed};
  font-size: 1.2em;
  font-weight: 100;
`;

export const Description = styled.span`
  color: ${Colors.SecondaryText};
  text-align: start;
  margin-top: 1rem;
`;
