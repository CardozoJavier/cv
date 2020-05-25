import styled from 'styled-components';
import palette from './palette';

const { red46, black08, link, dark, light, purple90 } = palette;

export const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 5vh 0;

  a {
    font-size: 14px;
    color: ${link};
    &:hover {
      color: #aaaaf9;
    }
    background-color: transparent;
    transition: color .5s, background-color .5s;
    &.dark-mode {
      color: ${dark.font};
    }
    &.light-mode {
      color: ${light.font};
    }
  }
`;

export const Label = styled.p`
  text-transform: uppercase;
  margin-bottom: 8px;
  font-size: 18px;
  margin-top: ${({ marginTop }) => marginTop};
  margin: ${({ margin }) => margin};
  background-color: transparent;
  transition: color .5s, background-color .5s;
  &.dark-mode {
    color: ${dark.secondary};
    &.widget {
      color: ${purple90};
    }
  }
  &.light-mode {
    color: ${red46};
  }
`;

export const Line = styled.div`
  height: 1px;
  background-color: ${black08};
  margin: 40px 0;
  font-weight: 900;
  background-color: transparent;
  transition: color .5s, background-color .5s;
  &.dark-mode {
    background-color: ${dark.tertiary};
  }
  &.light-mode {
    background-color: ${light.font};
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 5px;
  width: 50%;
`;

export const Link = styled.a`
  font-size: 14px;
  color: ${link};
  background-color: transparent;
  transition: color .5s, background-color .5s;
  &:hover {
    color: #aaaaf9;
  }
`;

export const ListItem = styled.li`
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

export const BulletContainer = styled.div`
  margin-top: 10px;
`;

export const BulletTitle = styled.p`
  font-size: 14px;
  margin: 0;
  background-color: transparent;
  transition: color .5s, background-color .5s;
  &.dark-mode {
    color: ${dark.tertiary};
  }
  &.light-mode {
    color: ${light.font};
  }
`;

export const DarkModeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
`;