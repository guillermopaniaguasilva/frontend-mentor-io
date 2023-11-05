import Share from '@assets/icons/Share';
import { Background } from './styles';

type ShareButtonProps = {
  $dark: boolean;
  onClick: () => void;
};

const ShareButton = ({ onClick, $dark }: ShareButtonProps) => {
  return (
    <Background onClick={onClick} $dark={$dark}>
      <Share accessibilityTitle="" titleId="" />
    </Background>
  );
};

export default ShareButton;
