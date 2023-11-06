import { Background, StyledShareIcon } from './styles';

type ShareButtonProps = {
  $dark: boolean;
  onClick: () => void;
};

const ShareButton = ({ onClick, $dark }: ShareButtonProps) => {
  return (
    <Background onClick={onClick} $dark={$dark}>
      <StyledShareIcon accessibilityTitle="" titleId="" $dark={$dark} />
    </Background>
  );
};

export default ShareButton;
