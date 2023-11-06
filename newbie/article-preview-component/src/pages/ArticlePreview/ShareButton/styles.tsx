import Share from '@assets/icons/Share';
import { styled } from 'styled-components';

export const Background = styled.div<{
  $dark: boolean;
}>`
  width: 32px;
  height: 32px;
  background: ${(props) =>
    props.$dark
      ? props.theme.colors.desaturatedDarkBlue
      : props.theme.colors.lightGrayishBlue};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.colors.desaturatedDarkBlue};

      & svg {
        filter: brightness(0) invert(1);
      }
    }
  }
`;

export const StyledShareIcon = styled(Share)<{
  $dark: boolean;
}>`
  width: 15px;
  height: 13px;
  ${(props) => props.$dark && 'filter: brightness(0) invert(1);'}
`;
