import { styled } from 'styled-components';

export const Container = styled.div`
  width: 327px;
  height: 360px;
  background: linear-gradient(to bottom, #232a34, #181e27);
  margin: auto;
  border-radius: 15px;
`;

export const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.darkBlue};
  margin-left: 24px;
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img``;
