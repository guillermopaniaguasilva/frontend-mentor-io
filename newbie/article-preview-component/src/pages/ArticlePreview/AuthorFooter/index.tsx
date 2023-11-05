import ShareButton from '../ShareButton';
import { Avatar, Container, Date, DetailsContainer, Name } from './styles';
type AuthorFooterProps = {
  author: string;
  date: string;
  onShareClick: () => void;
};

const AuthorFooter = ({ author, date, onShareClick }: AuthorFooterProps) => {
  return (
    <Container>
      <Avatar />
      <DetailsContainer>
        <Name>{author}</Name>
        <Date>{date}</Date>
      </DetailsContainer>
      <ShareButton onClick={onShareClick} $dark={false} />
    </Container>
  );
};

export default AuthorFooter;
