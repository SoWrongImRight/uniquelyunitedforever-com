import { PageLayout, PageSection } from "../components/PageLayout";
import styled from "styled-components";
import Testimonials from "../components/Testimonials";
import testimonies from "../content/testimonies.json";

const IntroImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 18px;
  box-shadow: 0 14px 34px rgba(60, 60, 60, 0.12);
  object-fit: cover;
  height: 160px;

  @media (min-width: 800px) {
    border-radius: 20px;
    height: 200px;
  }
`;

function WeddingsPage() {
  return (
    <PageLayout
      title="Weddings"
      subtitle="Any location. Any style. Competence, care, and a ceremony that feels like you."
      metaDescription="Rev. Randal Miller performs wedding ceremonies in Orlando and across Florida — botanical gardens, country clubs, Disney World, private residences, and more. Traditional, Non-Denominational, and Civil ceremonies available."
      canonicalPath="/weddings"
      narrow
    >
      <PageSection>
        <IntroImage
          src="/table_set.jpg"
          alt="Wedding table setting"
          width="1280"
          height="776"
          loading="eager"
          fetchPriority="high"
        />
      </PageSection>

      <PageSection>
        <p>
          You may choose to exchange vows in the midst of a fragrant botanical
          garden or an elegant country club. Perhaps a private residence is your
          wish. Maybe it’s a public park or that lovely little chapel / gazebo.
        </p>
        <p>
          Regardless of the ceremony location, style or size, my promise to you
          is this: I will handle your special day with competence &amp; care —
          for both you and your attending guests.
        </p>
      </PageSection>

      <PageSection>
        <h2 style={{ marginTop: 0, textAlign: 'left' }}>Kind words from couples and families</h2>
        <Testimonials items={testimonies} />
      </PageSection>
    </PageLayout>
  );
}

export default WeddingsPage;
