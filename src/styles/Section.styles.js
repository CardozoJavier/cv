import styled from 'styled-components';
import palette  from './palette';
const { dark, light } = palette;

export const SectionContainer = styled.div`
  display: flex;
`;

export const SideSection = styled.div`
  width: 40%;
`;

export const MainSection = styled.div`
  width: 60%;
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
