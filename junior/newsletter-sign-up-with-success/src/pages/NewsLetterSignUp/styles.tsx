import headerImage from '@assets/images/illustration-sign-up-mobile.svg';
import styled from 'styled-components';

export const Hero = styled.div`
  background-image: url(${headerImage});
  background-repeat: no-repeat;
  height: 284px;
  width: 100vw;
`;

export const Container = styled.div`
  margin: 0 24px;
`;

export const Heading = styled.h1`
  font-family: ${(props) => props.theme.fontFamilies.Roboto};
  font-size: ${(props) => props.theme.fontSizes.heading};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: 40px;
  color: ${(props) => props.theme.colors.darkSlateGrey};
  margin-top: 40px;
`;

export const Description = styled.h4`
  font-family: ${(props) => props.theme.fontFamilies.Roboto};
  font-size: ${(props) => props.theme.fontSizes.paragraph};
  font-weight: ${(props) => props.theme.fontWeights.light};
  line-height: 24px;
  color: ${(props) => props.theme.colors.darkSlateGrey};
  margin-top: 24px;
`;
