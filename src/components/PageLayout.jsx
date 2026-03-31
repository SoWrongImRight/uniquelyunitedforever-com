import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../content/siteContent';

const Container = styled.div`
  max-width: ${({ $narrow }) => ($narrow ? '720px' : '900px')};
  margin: 0 auto;
  padding: 2rem 1rem 3rem;
`;

const Header = styled.header`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: var(--color-rose);
  letter-spacing: 2px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.6rem;
  margin: 0;

  @media (min-width: 800px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  margin: 0.75rem 0 0;
  color: #444;
  line-height: 1.55;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

export function PageLayout({
  title,
  subtitle,
  metaDescription,
  canonicalPath,
  children,
  narrow,
}) {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const canonical = `${siteConfig.baseUrl}${canonicalPath || ''}`;

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        {metaDescription ? <meta name="description" content={metaDescription} /> : null}
        {metaDescription ? <meta property="og:description" content={metaDescription} /> : null}
        <meta property="og:title" content={fullTitle} />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <Container $narrow={narrow}>
        <Header>
          <Title>{title}</Title>
          {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
        </Header>
        {children}
      </Container>
    </>
  );
}

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  metaDescription: PropTypes.string,
  canonicalPath: PropTypes.string,
  children: PropTypes.node.isRequired,
  narrow: PropTypes.bool,
};

export const PageSection = Section;
