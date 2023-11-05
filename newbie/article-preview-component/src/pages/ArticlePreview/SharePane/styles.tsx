import Facebook from '@assets/icons/Facebook';
import Pinterest from '@assets/icons/Pinterest';
import Twitter from '@assets/icons/Twitter';
import { styled } from 'styled-components';

export const Container = styled.div`
  width: 327px;
  height: 64px;
  margin-top: 40px;
  margin-left: -32px;
  padding-right: 32px;
  background-color: ${(props) => props.theme.colors.veryDarkGrayishBlue};
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  display: flex;
  align-items: center;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 248px;
    height: 67px;
    position: absolute;
    bottom: 40%;
    left: 79.5%;
    border-radius: 10px;
    box-shadow: 1px 1px 10px 1px var(--box-shadow);

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      bottom: -10px;
      left: 50%;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid
        ${(props) => props.theme.colors.veryDarkGrayishBlue};
    }
  }
`;

export const Heading = styled.p`
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.grayishBlue};
  margin-left: 32px;
  margin-right: 20px;
`;

export const StyledFacebookIcon = styled(Facebook)`
  width: 20px;
  height: 20px;
  margin-right: 16px;
`;

export const StyledPinterestIcon = styled(Pinterest)`
  width: 20px;
  height: 20px;
  margin-right: 16px;
`;

export const StyledTwitterIcon = styled(Twitter)`
  width: 20px;
  height: 20px;
  margin-right: 16px;
`;
