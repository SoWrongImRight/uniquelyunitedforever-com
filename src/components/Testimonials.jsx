import PropTypes from "prop-types";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.figure`
  margin: 0;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 4px 18px rgba(60, 60, 60, 0.10);
  padding: 1.25rem;
`;

const Quote = styled.blockquote`
  margin: 0 0 0.75rem 0;
  color: #222;
  line-height: 1.6;
`;

const Footer = styled.figcaption`
  color: #555;
  font-weight: 600;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
`;

const Location = styled.span`
  color: #777;
  font-weight: 500;
`;

export default function Testimonials({ items }) {
  return (
    <Grid>
      {items.map((t) => (
        <Card key={`${t.name}-${t.location}`}>
          <Quote>“{t.quote}”</Quote>
          <Footer>
            <span>{t.name}</span>
            {t.location ? <Location>• {t.location}</Location> : null}
          </Footer>
        </Card>
      ))}
    </Grid>
  );
}

Testimonials.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      location: PropTypes.string,
    })
  ).isRequired,
};
