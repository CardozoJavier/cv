import styled from 'styled-components';
import palette from './palette';

const { red46, black08, link } = palette;

export const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 5vh 0;

  a {
    font-size: 14px;
    color: ${link};
    &:hover {
      color: #4444e6;
    }
  }
`;

export const Label = styled.p`
  text-transform: uppercase;
  color: ${red46};
  margin-bottom: 8px;
  font-size: 18px;
  margin-top: ${({ marginTop }) => marginTop};
`;

export const Line = styled.div`
  height: 1px;
  background-color: ${black08};
  margin: 40px 0;
  font-weight: 900;
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
  &:hover {
    color: #4444e6;
  }
`;

export const ListItem = styled.li`
  line-height: ${({ lineHeight }) => lineHeight || '1.25'};
  width: ${({ width }) => width};
  font-size: ${({ fontSize }) => fontSize};
`;

export const BulletContainer = styled.div`
  margin-top: 10px;
`;

export const BulletTitle = styled.p`
  font-size: 14px;
  margin: 0;
`;
