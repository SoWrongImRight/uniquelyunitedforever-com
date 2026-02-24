import { PageLayout, PageSection } from "../components/PageLayout";
import Testimonials from "../components/Testimonials";
import { testimonials } from "../content/siteContent";

function WeddingsPage() {
  return (
    <PageLayout
      title="Weddings"
      subtitle="Any location. Any style. Competence, care, and a ceremony that feels like you."
      metaDescription="Wedding officiant services for any location or style. Personalized ceremonies with competence, care, and warmth."
      narrow
    >
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
        <h3 style={{ marginTop: 0 }}>Kind words from couples and families</h3>
        <Testimonials items={testimonials} />
      </PageSection>
    </PageLayout>
  );
}

export default WeddingsPage;
