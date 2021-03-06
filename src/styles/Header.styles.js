import styled, { css } from 'styled-components';
import palette from './palette';
const { red46, black08, dark, light, beiged4 } = palette;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  width: 175px;
  height: 175px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 175px;
  margin: -30px 0 0 0;
`;

export const TitleContainer = styled.div`
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 44px;
  margin-bottom: 10px;
  background-color: transparent;
  transition: color .5s, background-color .5s;
  &.dark-mode {
    color: ${dark.secondary};
  }
  &.light-mode {
    color: ${red46};
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const SubTitle = styled.h2`
  text-transform: uppercase;
  color: ${red46};
  font-size: 22px;
  background-color: transparent;
  transition: color .5s, background-color .5s;
  &.dark-mode {
    color: ${dark.primary};
  }
  &.light-mode {
    color: ${light.primary};
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Description = styled.p`
  line-height: ${({ lineHeight }) => lineHeight || '1.25'};
  width: ${({ width }) => width};
  font-size: ${({ fontSize }) => fontSize};
  background-color: transparent;
  transition: color .5s, background-color .5s;
  &.dark-mode {
    color: ${dark.tertiary};
  }
  &.light-mode {
    color: ${light.font};
  }
`;
