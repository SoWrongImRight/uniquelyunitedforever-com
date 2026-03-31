import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../content/siteContent';

const Container = styled.div`
  width: 100%;
  max-width: ${({ $narrow }) => ($narrow ? '720px' : '900px')};
  min-width: 0;
  margin: 0 auto;
  padding: 1rem 0 2.4rem;

  @media (min-width: 800px) {
    max-width: ${({ $narrow }) => ($narrow ? '880px' : '900px')};
    padding: 2rem 0 3rem;
  }
`;

const Header = styled.header`
  margin-bottom: 1.5rem;
  text-align: center;

  @media (min-width: 800px) {
    margin-bottom: 2.4rem;
  }
`;

const Kicker = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  margin-bottom: 0.7rem;
  color: #8a7378;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;

  &::before,
  &::after {
    content: '';
    width: 28px;
    height: 1px;
    background: linear-gradient(90deg, rgba(183, 110, 121, 0.12) 0%, rgba(183, 110, 121, 0.48) 100%);
  }

  &::after {
    background: linear-gradient(90deg, rgba(183, 110, 121, 0.48) 0%, rgba(183, 110, 121, 0.12) 100%);
  }
`;

const Title = styled.h1`
  color: var(--color-rose);
  letter-spacing: 0.04em;
  font-weight: 700;
  text-transform: uppercase;
  font-size: clamp(1.55rem, 1.15rem + 1.8vw, 3rem);
  margin: 0;
  line-height: 1.1;
  text-wrap: balance;

  @media (min-width: 800px) {
    max-width: 14ch;
    margin: 0 auto;
  }
`;

const Subtitle = styled.p`
  margin: 0.7rem auto 0;
  color: #51484a;
  line-height: 1.55;
  max-width: 42rem;
  font-size: 0.98rem;
  text-wrap: balance;

  @media (min-width: 800px) {
    margin: 1rem auto 0;
    line-height: 1.7;
    font-size: 1.06rem;
  }
`;

const Divider = styled.div`
  width: min(132px, 34vw);
  height: 1px;
  margin: 0.9rem auto 0;
  background: linear-gradient(
    90deg,
    rgba(183, 110, 121, 0) 0%,
    rgba(183, 110, 121, 0.35) 20%,
    rgba(183, 110, 121, 0.6) 50%,
    rgba(183, 110, 121, 0.35) 80%,
    rgba(183, 110, 121, 0) 100%
  );

  @media (min-width: 800px) {
    width: min(180px, 38vw);
    margin: 1.35rem auto 0;
  }
`;

const Section = styled.section`
  width: 100%;
  min-width: 0;
  margin-bottom: 2rem;
`;

export function PageLayout({
  title,
  subtitle,
  metaDescription,
  canonicalPath,
  children,
  narrow,
  compactHeader,
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
        <Header style={compactHeader ? { marginBottom: '1.6rem' } : undefined}>
          <Kicker>{siteConfig.name}</Kicker>
          <Title style={compactHeader ? { fontSize: 'clamp(1.75rem, 1.15rem + 1.55vw, 2.45rem)', maxWidth: '24ch' } : undefined}>
            {title}
          </Title>
          {subtitle ? (
            <Subtitle style={compactHeader ? { marginTop: '0.75rem', maxWidth: '36rem' } : undefined}>
              {subtitle}
            </Subtitle>
          ) : null}
          <Divider aria-hidden="true" style={compactHeader ? { marginTop: '1rem' } : undefined} />
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
  compactHeader: PropTypes.bool,
};

export const PageSection = Section;
