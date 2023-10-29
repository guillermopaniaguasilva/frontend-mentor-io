import styled from 'styled-components';
import { Check } from '../../../../assets/icons/Check';

export const Wrapper = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Text = styled.p`
  font-family: ${(props) => props.theme.fontFamilies.main};
  font-size: ${(props) => props.theme.fontSizes.paragraph};
  font-weight: ${(props) => props.theme.fontWeights.light};
  line-height: 24px;
  margin-left: 16px;
`;

export const StyledCheckIcon = styled(Check)`
  width: 21px;
  height: 21px;
`;
