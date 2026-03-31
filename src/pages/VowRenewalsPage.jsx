import styled from "styled-components";
import { PageLayout, PageSection } from "../components/PageLayout";
import { vowRenewalLetter } from "../content/siteContent";

const IntroImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 20px;
  box-shadow: 0 14px 34px rgba(60, 60, 60, 0.12);
  object-fit: cover;
  height: 180px;

  @media (min-width: 800px) {
    height: 200px;
  }
`;

const Letter = styled.div`
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 4px 18px rgba(60, 60, 60, 0.10);
  padding: 1.25rem;
  display: grid;
  gap: 1.25rem;

  @media (min-width: 800px) {
    grid-template-columns: minmax(240px, 0.7fr) minmax(0, 1fr);
    align-items: start;
  }

  p {
    line-height: 1.7;
    margin: 0 0 0.9rem 0;
    white-space: pre-line;
  }
`;

const LetterImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 14px;
  object-fit: cover;
  box-shadow: 0 8px 22px rgba(60, 60, 60, 0.12);
`;

const LetterContent = styled.div``;

const Signature = styled.div`
  margin-top: 0.75rem;
  font-weight: 700;
`;

const Footer = styled.div`
  margin-top: 0.25rem;
  color: #666;
  font-weight: 600;
`;

function VowRenewalsPage() {
  return (
    <PageLayout
      title="Vow Renewals"
      subtitle='Say "I Love You FOREVER" once more with a personal, intimate ceremony.'
      metaDescription="Renew your vows in Orlando, Florida with Rev. Randal Miller. Intimate ceremonies for two or a full celebration — personally crafted and deeply meaningful."
      canonicalPath="/vow-renewals"
      narrow
    >
      <PageSection>
        <IntroImage
          src="/rings_overlapped_with_bible.jpg"
          alt="Wedding rings overlapped on a Bible"
          width="1280"
          height="776"
          loading="eager"
          fetchPriority="high"
        />
      </PageSection>

      <PageSection>
        <p>
          Assure one another again of your certainty of choice in a life partner.
          Say “I Love You FOREVER” once more with re-affirming vows thoughtfully
          woven together in a personal and intimate ceremony of love.
        </p>
        <p>
          Through the years she has dealt with disappointments, set backs and
          altered dreams with unwavering support and loyal commitment. Let her
          know she continues to challenge, to inspire and to complete you… and
          if given the chance to marry her again… you would!
        </p>
        <p>
          Your occasion may be private… just the two of you. Maybe you’ll be
          accompanied by a select shortlist of your closest friends and family.
          Perhaps a gala celebration is in order. Express to her a second time
          that she will forever be your #1.
        </p>
      </PageSection>

      <PageSection>
        <h2 style={{ marginTop: 0, textAlign: 'left' }}>A note from a couple</h2>
        <Letter>
          <LetterImage
            src="/bengyel.png"
            alt="Rita and Zsolt Bengyel vow renewal"
            width="700"
            height="700"
            loading="lazy"
          />
          <LetterContent>
            <p>{vowRenewalLetter.salutation}</p>
            <p>{vowRenewalLetter.body}</p>
            <Signature>{vowRenewalLetter.signature}</Signature>
            <Footer>{vowRenewalLetter.footer}</Footer>
          </LetterContent>
        </Letter>
      </PageSection>
    </PageLayout>
  );
}

export default VowRenewalsPage;
