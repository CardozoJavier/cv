import styled from 'styled-components';
import palette from './palette';
const { red46, black08 } = palette;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
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

export const TitleContainer = styled.div``;

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 44px;
  margin-bottom: 10px;
`;

export const SubTitle = styled.h2`
  text-transform: uppercase;
  color: ${red46};
  font-size: 22px;
`;

export const Description = styled.p`
  line-height: ${({ lineHeight }) => lineHeight || '1.25'};
  width: ${({ width }) => width};
  font-size: ${({ fontSize }) => fontSize};
`;
