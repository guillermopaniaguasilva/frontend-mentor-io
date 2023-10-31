import { useIsDesktopQuery } from '@helpers/mediaQuery';
import Items from './components/Items';
import SignUpForm from './components/SignUpForm';
import { Container, Description, Heading, Hero } from './styles';

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
