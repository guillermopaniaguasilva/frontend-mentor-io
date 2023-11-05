import ShareButton from '../ShareButton';
import {
  Container,
  Heading,
  StyledFacebookIcon,
  StyledPinterestIcon,
  StyledTwitterIcon,
} from './styles';

type SharePaneProps = {
  onShareClick: () => void;
  withShareButton?: boolean;
};

const SharePane = ({ onShareClick, withShareButton }: SharePaneProps) => {
  return (
    <Container>
      <Heading>Share</Heading>
      <StyledFacebookIcon accessibilityTitle="" titleId="" />
      <StyledPinterestIcon accessibilityTitle="" titleId="" />
      <StyledTwitterIcon accessibilityTitle="" titleId="" />
      {withShareButton && <ShareButton onClick={onShareClick} $dark />}
    </Container>
  );
};

export default SharePane;
