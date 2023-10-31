import IllustrationThankYou from '@assets/IllustrationThankYou.js';
import styled from 'styled-components';

export const Container = styled.div`
  width: 327px;
  height: 360px;
  background: linear-gradient(to bottom, #232a34, #181e27);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled(IllustrationThankYou)`
  width: 144px;
  height: 96px;
`;

export const Result = styled.p`
  color: ${(props) => props.theme.colors.orange};
  background-color: ${(props) => props.theme.colors.darkBlue};
  padding: 6px 12px;
  border-radius: 30px;
  margin-top: 24px;
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: 400;
`;

export const Heading = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  padding-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: ${(props) => props.theme.colors.lightGray};
  margin-left: 24px;
  margin-right: 24px;
  text-align: center;
`;
