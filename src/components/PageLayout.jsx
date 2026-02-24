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

export function PageLayout({ title, subtitle, children, narrow }) {
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
  children: PropTypes.node.isRequired,
  narrow: PropTypes.bool,
};

export const PageSection = Section;
