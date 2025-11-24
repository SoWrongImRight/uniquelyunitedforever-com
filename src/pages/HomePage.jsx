

import Hero from '../components/Hero';
import homeHero from '../assets/uuf-home-hero.jpg';
import styled from 'styled-components';

const HomeContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Section = styled.section`
  margin-bottom: 1.5rem;
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

function HomePage() {
  return (
    <HomeContainer>
      <Hero
        image={homeHero}
        text="This is placeholder dialogue text for the hero section. You can update this with your own welcome or introduction."
        ctaText="Plan your special day now"
        ctaLink="/contact"
        layout="vertical"
        imageAlt="Wedding couple at ceremony - Uniquely United Forever"
      />
      <Header>
        <Title>Bride & Groom To Be</Title>
      </Header>
      <Section>
        <p>Many questions and decisions await your attention concerning your wedding day. My intent is to assist you in making your wedding journey a total success. Please allow me a moment to introduce myself and UniquelyUnitedforever. I am Rev. Randal Miller, a licensed ordained minister with decades of experience as a wedding officiant/religious public speaker.</p>
      </Section>
      <Section>
        <p><strong>UniquelyUnitedforever</strong> is a wedding & vow-renewal officiant service located in beautiful Orlando, FL. I script and perform your wedding day or vow-renewal ceremony to near perfection. UniquelyUnitedforever offers a variety of ceremony choices, such as: <strong>Traditional (religious)</strong>, <strong>Non-Denominational (religious)</strong> and <strong>Civil</strong>.</p>
      </Section>
      <Section>
        <p><strong>Why the name UniquelyUnitedforever?</strong> Because every ceremony is <em>Uniquely</em> created and I desire that you remain <em>United</em> for a lifetime… forever!</p>
      </Section>
      <Section style={{ marginBottom: '2rem' }}>
        <p>It will be my sincere pleasure to serve you on your special day. Continue to be kind to each other...</p>
        <p style={{ fontWeight: 600, marginTop: '1.5rem' }}>Rev. Miller</p>
      </Section>
    </HomeContainer>
  );
}

export default HomePage;
