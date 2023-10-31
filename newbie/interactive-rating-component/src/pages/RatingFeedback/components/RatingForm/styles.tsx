import { styled } from 'styled-components';

type ScoreType = {
  selected: boolean;
};

export const Form = styled.form`
  margin-left: 24px;
  margin-right: 24px;
`;

export const Heading = styled.h1`
  margin-top: 16px;
  margin-bottom: 16px;
  color: ${(props) => props.theme.colors.white};
  font-size: 24px;
  font-weight: 700;
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme.colors.lightGray};
  line-height: 22px;
  padding-bottom: 24px;
`;

export const ScoresContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Score = styled.div<ScoreType>`
  width: 42px;
  line-height: 42px;
  border-radius: 50%;
  text-align: center;
  background: ${(props) => props.theme.colors.darkBlue};
  color: ${(props) => props.theme.colors.mediumGray};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  ${(props) =>
    props.selected &&
    `
  background-color: ${props.theme.colors.orange};
  color: ${props.theme.colors.white};
  `}
`;

export const Button = styled.button`
  margin-top: 24px;
  width: 100%;
  border: none;
  padding-top: 12px;
  padding-bottom: 12px;
  border-radius: 30px;
  text-transform: uppercase;
  letter-spacing: 1.8px;
  color: ${(props) => props.theme.colors.white};
  font-size: 14px;
  font-weight: 700;
  background-color: ${(props) => props.theme.colors.orange};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.orange};
  }
`;
