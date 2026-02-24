import { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  max-width: ${({ $narrow }) => ($narrow ? "720px" : "900px")};
  margin: 0 auto;
  padding: 2rem 1rem 3rem;
`;

const Header = styled.header`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: #b76e79;
  letter-spacing: 2px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.3rem;
  margin: 0;
`;

const Subtitle = styled.p`
  margin: 0.75rem 0 0;
  color: #444;
  line-height: 1.55;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

function ensureMetaTag(name) {
  let tag = document.head.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  return tag;
}

function ensurePropertyTag(property) {
  let tag = document.head.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  return tag;
}

function ensureCanonicalLink() {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  return link;
}

export function PageLayout({ title, subtitle, metaDescription, children, narrow }) {
  useEffect(() => {
    if (title) {
      const fullTitle = `${title} | Uniquely United Forever`;
      document.title = fullTitle;
      ensurePropertyTag("og:title").setAttribute("content", fullTitle);
    }

    if (metaDescription) {
      ensureMetaTag("description").setAttribute("content", metaDescription);
      ensurePropertyTag("og:description").setAttribute(
        "content",
        metaDescription
      );
    }

    const canonical = ensureCanonicalLink();
    canonical.setAttribute(
      "href",
      `${window.location.origin}${window.location.pathname}`
    );
  }, [title, metaDescription]);
  return (
    <Container $narrow={narrow}>
      <Header>
        <Title>{title}</Title>
        {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
      </Header>
      {children}
    </Container>
  );
}

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  metaDescription: PropTypes.string,
  children: PropTypes.node.isRequired,
  narrow: PropTypes.bool,
};

export const PageSection = Section;
