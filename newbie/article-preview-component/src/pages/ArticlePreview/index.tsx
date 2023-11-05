import { useIsDesktopQuery } from '@helpers/mediaQuery';
import { useState } from 'react';
import AuthorFooter from './AuthorFooter';
import SharePane from './SharePane';
import { Container, Content, DrawersImage, Summary, Title } from './styles';

type Article = {
  title: string;
  summary: string;
  author: string;
  date: string;
};

type ArticleCardProps = {
  article: Article;
};

export default function ArticlePreview({
  article: { title, summary, author, date },
}: ArticleCardProps) {
  const isDesktop = useIsDesktopQuery();

  const [showSharePane, setShowSharePane] = useState(false);
  const [showShareTooltip, setShowShareTooltip] = useState(false);

  const onShareClick = () => setShowSharePane(!showSharePane);
  const onDisplayTooltip = () => setShowShareTooltip(!showShareTooltip);

  return (
    <Container>
      <DrawersImage />
      <Content>
        <Title>{title}</Title>
        <Summary>{summary}</Summary>

        {!isDesktop &&
          (showSharePane ? (
            <SharePane onShareClick={onShareClick} withShareButton />
          ) : (
            <AuthorFooter
              author={author}
              date={date}
              onShareClick={onShareClick}
            />
          ))}
        {isDesktop && (
          <AuthorFooter
            author={author}
            date={date}
            onShareClick={onDisplayTooltip}
          />
        )}
        {isDesktop &&
          (showShareTooltip ? <SharePane onShareClick={onShareClick} /> : null)}
      </Content>
    </Container>
  );
}
