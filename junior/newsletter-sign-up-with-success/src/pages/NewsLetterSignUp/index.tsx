import { useIsDesktopQuery } from '@commons/helpers/mediaQuery';
import { Hero, Container, Heading, Description } from './styles';
import Items from './components/Items';
import SignUpForm from './components/SignUpForm';

export default function NewsLetterSignUp() {
  const isDesktop = useIsDesktopQuery();

  const mobileLayout = (
    <>
      <Hero />
      <Container>
        <Heading>Stay updated!</Heading>
        <Description>
          Join 60,000+ product managers receiving monthly updates on:
        </Description>
        <Items />
        <SignUpForm />
      </Container>
    </>
  );

  return isDesktop ? <h1>Desktop</h1> : mobileLayout;
}
