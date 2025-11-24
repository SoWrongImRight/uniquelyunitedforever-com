

import styled from 'styled-components';

const Container = styled.div`
  max-width: 750px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Header = styled.header`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  color: #b76e79;
  letter-spacing: 2px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.3rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

function WeddingsPage() {
  return (
    <Container>
      <Header>
        <Title>Weddings</Title>
      </Header>
      <Section>
        <p>You may choose to exchange vows in the midst of a fragrant botanical garden or an elegant country club. Perhaps a private residence is your wish. Maybe it’s a public park or that lovely little chapel/gazebo. Regardless of the ceremony location, style or size, my promise to you is this... I will handle your special day with competence & care… for both you and your attending guests.</p>
      </Section>
    </Container>
  );
}

export default WeddingsPage;
