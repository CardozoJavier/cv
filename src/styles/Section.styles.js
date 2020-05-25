import styled from 'styled-components';
import palette  from './palette';
const { dark, light } = palette;

export const SectionContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const SideSection = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    margin-top: 25px;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    &.dark-mode {
      background-color: ${({ backgroundColor }) => backgroundColor || '#222233'};
    }
    &.light-mode {
      background-color: ${({ backgroundColor }) => backgroundColor || '#f9f9f9'};
    }
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    div + div {
      margin-top: 25px;
    }
    &.dark-mode {
      background-color: ${({ backgroundColor }) => backgroundColor || '#222233'};
    }
    &.light-mode {
      background-color: ${({ backgroundColor }) => backgroundColor || '#f9f9f9'};
    }
  }
  
`;

export const MainSection = styled.div`
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SectionTitle = styled.p`
  font-weight: 900;
  margin-bottom: 10px;
  background-color: transparent;
  transition: color .5s, background-color .5s;
  &.dark-mode {
    color: ${dark.primary};
  }
  &.light-mode {
    color: ${light.font};
  }
`;

export const SectionSubTitle = styled.p`
  margin-bottom: 8px;
  background-color: transparent;
  transition: color .5s, background-color .5s;
  &.dark-mode {
    color: ${dark.tertiary};
  }
  &.light-mode {
    color: ${light.font};
  }
`;

export const SectionDescription = styled.p`
  background-color: transparent;
  transition: color .5s, background-color .5s;
  &.dark-mode {
    color: ${dark.tertiary};
  }
  &.light-mode {
    color: ${light.font};
  }
`;

