import { Wrapper, Label, Input, Submit } from './styles';

export default function SignUpForm() {
  return (
    <Wrapper>
      <Label>Email address</Label>
      <Input type="text" placeholder="email@company.com" autoCapitalize="off" />
      <Submit type="submit">Subscribe to monthly newsletter</Submit>
    </Wrapper>
  );
}
