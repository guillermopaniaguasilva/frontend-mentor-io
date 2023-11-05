import drawers from '@assets/icons/drawers.svg';
import { styled } from 'styled-components';

export const Container = styled.div`
  width: 327px;
  height: 504px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  box-shadow: 0px 40px 40px -10px ${(props) => props.theme.colors.veryDarkGrayishBlue};

  @media only screen and (min-width: 600px) {
    width: 730px;
    height: 280px;
    display: flex;
    margin-right: 40px;
    position: relative;
  }
`;

export const Content = styled.div`
  margin: 0 32px;
`;

export const DrawersImage = styled.div`
  background: url(${drawers}) lightgray 0px 0px / 100% 100% no-repeat;
  width: 327px;
  height: 200px;
  flex-shrink: 0;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 285px;
    height: 280px;
    border-radius: 0;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    object-fit: cover;
  }
`;

export const Title = styled.h1`
  margin-top: 38px;
  color: ${(props) => props.theme.colors.veryDarkGrayishBlue};
  font-family: ${(props) => props.theme.fontFamilies.Manrope};
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.2px;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    margin-top: 32px;
  }
`;

export const Summary = styled.p`
  margin-top: 10px;
  color: ${(props) => props.theme.colors.grayishBlue};
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.12px;

  @media only screen and (min-width: 600px) {
    margin-top: 12px;
  }
`;
