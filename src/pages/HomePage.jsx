import Hero from "../components/Hero";
import styled from "styled-components";
import homeHero from "../assets/uuf-home-hero.webp";
import revPhoto from "../assets/uuf-rm.webp";
import { PageLayout, PageSection } from "../components/PageLayout";
import { serviceAreas } from "../content/siteContent";

const Split = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 1.25rem;
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const Portrait = styled.img`
  width: 100%;
  border-radius: 14px;
  box-shadow: 0 4px 18px rgba(60, 60, 60, 0.10);
`;

const List = styled.ul`
  margin: 0.75rem 0 0;
  padding-left: 1.25rem;
  line-height: 1.6;
`;

function HomePage() {
  return (
    <PageLayout
      title="Wedding and Vow Renewal Officiant in Orlando, FL"
      subtitle="Wedding and vow renewal officiant service in Orlando, Florida"
      metaDescription="Wedding and vow renewal officiant in Orlando, Florida. Custom ceremonies created with care and decades of experience."
      canonicalPath="/"
      narrow
    >
      <Hero
        image={homeHero}
        text="Every ceremony is uniquely created — with the hope that you remain united for a lifetime… forever."
        ctaText="Plan Your Ceremony"
        ctaLink="/contact"
        layout="vertical"
        imageAlt="Wedding couple - Uniquely United Forever"
        imageLoading="eager"
        imageFetchPriority="high"
        imageWidth={900}
        imageHeight={500}
      />

      <Split>
        <div>
          <PageSection>
            <h2 style={{ marginTop: 0, textAlign: 'left' }}>Bride & Groom To Be</h2>
            <p>
              Many questions and decisions await your attention concerning your
              wedding day. My purpose is to assist you in making your wedding
              journey a total success.
            </p>
            <p>
              Please allow me a moment to introduce myself and{" "}
              <strong>UniquelyUnitedforever</strong>. I am{" "}
              <strong>Rev. Randal Miller</strong>, a licensed and ordained
              minister with forty plus years of experience as a wedding ceremony
              officiant / religious public speaker.
            </p>
          </PageSection>

          <PageSection>
            <p>
              <strong>UniquelyUnitedforever</strong> is a wedding / vow-renewal
              officiant service located in beautiful Orlando, FL. I script and
              perform your wedding day or vow-renewal ceremony to near
              perfection. You may choose from:
            </p>
            <List>
              <li>
                <strong>Traditional (religious)</strong>
              </li>
              <li>
                <strong>Non-Denominational (religious)</strong>
              </li>
              <li>
                <strong>Civil</strong>
              </li>
            </List>
          </PageSection>

          <PageSection>
            <p>
              <strong>Why the name UniquelyUnitedforever?</strong> Because every
              ceremony is <em>Uniquely</em> created and I desire that you remain{" "}
              <em>United</em> for a lifetime… forever!
            </p>
            <p style={{ fontWeight: 600, marginTop: "1rem" }}>Rev. Miller</p>
          </PageSection>
        </div>

        <div>
          <Portrait
            src={revPhoto}
            alt="Reverend Randal Miller - Uniquely United Forever"
            loading="lazy"
            width="340"
            height="460"
          />
        </div>
      </Split>

      <PageSection>
        <p style={{ textAlign: 'center', color: '#555', fontSize: '0.95rem' }}>
          Serving {serviceAreas.slice(0, 3).join(", ")}, Walt Disney World, and all of Central Florida
        </p>
      </PageSection>
    </PageLayout>
  );
}

export default HomePage;
