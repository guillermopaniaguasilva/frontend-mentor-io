import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.darkSlateGrey};
  font-family: ${(props) => props.theme.fontFamilies.main};
  font-size: 12px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: 18px;
`;

export const Input = styled.input`
  margin-bottom: 24px;
  padding: 16px 24px;

  &::placeholder {
    color: ${(props) => props.theme.colors.darkSlateGrey};
    font-family: Roboto;
    font-size: ${(props) => props.theme.fontSizes.paragraph};
    font-weight: ${(props) => props.theme.fontWeights.light};
    line-height: 24px;
    opacity: 0.5;
  }
`;

export const Submit = styled.button`
  background-color: ${(props) => props.theme.colors.darkSlateGrey};
  border-radius: 8px;
  padding: 18px;
  border: none;
  outline: inherit;
  cursor: pointer;

  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fontFamilies.main};
  font-size: ${(props) => props.theme.fontSizes.paragraph};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: 24px;
`;
