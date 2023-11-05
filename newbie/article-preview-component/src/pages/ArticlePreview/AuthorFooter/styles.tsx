import avatar from '@assets/icons/avatar.svg';
import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 32px 0 20px 0;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    margin-top: 45px;
  }
`;

export const Avatar = styled.img`
  background: url(${avatar}), lightgray 50% / cover no-repeat;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 40px;
`;

export const DetailsContainer = styled.div`
  margin-left: 16px;
`;

export const Name = styled.p`
  color: ${(props) => props.theme.colors.veryDarkGrayishBlue};
  font-size: 13px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.12px;
`;

export const Date = styled.p`
  color: ${(props) => props.theme.colors.grayishBlue};
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.12px;
`;
