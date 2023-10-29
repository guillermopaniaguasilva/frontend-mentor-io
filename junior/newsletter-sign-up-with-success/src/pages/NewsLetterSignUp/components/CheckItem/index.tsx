import { Wrapper, Text, StyledCheckIcon } from './styles';

type CheckItemProps = {
  text: string;
};

export default function CheckItem({ text }: CheckItemProps) {
  return (
    <Wrapper>
      <StyledCheckIcon />
      <Text>{text}</Text>
    </Wrapper>
  );
}
