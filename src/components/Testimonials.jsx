import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Section = styled.section`
  position: relative;
`;

const Shell = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 28px;
  background:
    radial-gradient(circle at top left, rgba(247, 234, 236, 0.95), rgba(247, 234, 236, 0) 35%),
    linear-gradient(135deg, #fff8f8 0%, #ffffff 45%, #fcf6f7 100%);
  box-shadow: 0 24px 60px rgba(77, 47, 54, 0.14);
  border: 1px solid rgba(183, 110, 121, 0.12);
`;

const Track = styled.div`
  display: flex;
  transition: transform 0.45s ease;
  transform: translateX(${({ $activeIndex }) => `-${$activeIndex * 100}%`});
`;

const Slide = styled.div`
  flex: 0 0 100%;
  min-width: 0;
`;

const Card = styled.figure`
  margin: 0;
  display: grid;
  min-width: 0;

  @media (min-width: 900px) {
    grid-template-columns: minmax(280px, 0.95fr) minmax(0, 1.25fr);
    min-height: 460px;
  }
`;

const Media = styled.div`
  position: relative;
  min-height: 280px;
  background: #efe5e7;

  @media (min-width: 900px) {
    min-height: 100%;
  }
`;

const MediaImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const MediaOverlay = styled.div`
  position: absolute;
  inset: auto 0 0 0;
  padding: 1rem 1rem 1.1rem;
  background: linear-gradient(180deg, rgba(27, 17, 19, 0) 0%, rgba(27, 17, 19, 0.72) 100%);
  color: #fff;
`;

const MediaLabel = styled.span`
  display: inline-block;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.88;
`;

const MediaName = styled.div`
  margin-top: 0.35rem;
  font-family: var(--font-serif);
  font-size: 1.35rem;
  font-weight: 700;
  line-height: 1.2;
`;

const Content = styled.figcaption`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.5rem;

  @media (min-width: 900px) {
    padding: 2rem 2.1rem;
  }
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const Counter = styled.div`
  color: #8d6d74;
  font-size: 0.92rem;
  font-weight: 700;
`;

const Quote = styled.blockquote`
  margin: 0;
  color: #2a2526;
  line-height: 1.8;
  font-size: 1.05rem;

  @media (min-width: 900px) {
    font-size: 1.12rem;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  align-items: center;
  color: #5d4f53;
  font-weight: 600;
`;

const Name = styled.cite`
  font-style: normal;
  font-weight: 700;
`;

const Location = styled.span`
  color: #8b7a7e;
  font-weight: 500;
`;

const NavigationRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.1rem 1.2rem 1.25rem;
  border-top: 1px solid rgba(183, 110, 121, 0.1);

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Controls = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const ControlButton = styled.button`
  min-width: 48px;
  min-height: 48px;
  padding: 0.75rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(183, 110, 121, 0.22);
  background: rgba(255, 255, 255, 0.86);
  color: #5a4a4f;
  box-shadow: 0 10px 24px rgba(77, 47, 54, 0.08);
  font-weight: 700;

  &:hover {
    background: #fff;
    border-color: rgba(183, 110, 121, 0.38);
  }
`;

const Thumbnails = styled.div`
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
  padding-bottom: 0.1rem;
`;

const ThumbButton = styled.button`
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr);
  gap: 0.7rem;
  align-items: center;
  min-width: 220px;
  padding: 0.45rem;
  border-radius: 18px;
  border: 1px solid ${({ $active }) =>
    $active ? "rgba(183, 110, 121, 0.42)" : "rgba(183, 110, 121, 0.12)"};
  background: ${({ $active }) => ($active ? "#fff" : "rgba(255, 255, 255, 0.65)")};
  box-shadow: ${({ $active }) =>
    $active ? "0 12px 26px rgba(77, 47, 54, 0.12)" : "none"};
  text-align: left;
`;

const ThumbImage = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 12px;
  object-fit: cover;
  display: block;
`;

const ThumbText = styled.div`
  min-width: 0;
`;

const ThumbName = styled.div`
  color: #4d3c40;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ThumbLocation = styled.div`
  color: #8d7c80;
  font-size: 0.88rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function Testimonials({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const normalizedItems = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        imageSrc: item.image ? `/${item.image}` : null,
        quoteText: item.text ?? item.quote ?? "",
      })),
    [items]
  );

  const activeItem = normalizedItems[activeIndex];

  const previousItem = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? normalizedItems.length - 1 : currentIndex - 1
    );
  };

  const nextItem = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === normalizedItems.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <Section aria-label="Customer testimonials">
      <Shell>
        <Track $activeIndex={activeIndex}>
          {normalizedItems.map((item) => (
            <Slide key={`${item.name}-${item.location}`}>
              <Card>
                <Media>
                  {item.imageSrc ? (
                    <MediaImage
                      src={item.imageSrc}
                      alt={`${item.name} testimonial`}
                      loading="lazy"
                    />
                  ) : null}
                  <MediaOverlay>
                    <MediaLabel>Featured Couple</MediaLabel>
                    <MediaName>{item.name}</MediaName>
                  </MediaOverlay>
                </Media>

                <Content>
                  <div>
                    <TopRow>
                      <Counter>
                        {String(activeIndex + 1).padStart(2, "0")} / {String(normalizedItems.length).padStart(2, "0")}
                      </Counter>
                    </TopRow>
                    <Quote>“{item.quoteText}”</Quote>
                  </div>

                  <Footer>
                    <Name>{item.name}</Name>
                    {item.location ? <Location>• {item.location}</Location> : null}
                  </Footer>
                </Content>
              </Card>
            </Slide>
          ))}
        </Track>

        <NavigationRow>
          <Controls>
            <ControlButton
              type="button"
              onClick={previousItem}
              aria-label="Show previous testimonial"
            >
              ←
            </ControlButton>
            <ControlButton
              type="button"
              onClick={nextItem}
              aria-label="Show next testimonial"
            >
              →
            </ControlButton>
          </Controls>

          <Thumbnails aria-label="Choose a testimonial">
            {normalizedItems.map((item, index) => (
              <ThumbButton
                key={`${item.name}-${index}`}
                type="button"
                $active={index === activeIndex}
                aria-label={`Show testimonial from ${item.name}`}
                aria-pressed={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              >
                {item.imageSrc ? (
                  <ThumbImage src={item.imageSrc} alt="" loading="lazy" />
                ) : (
                  <ThumbImage
                    src={activeItem?.imageSrc ?? "/og-image.jpg"}
                    alt=""
                    loading="lazy"
                  />
                )}
                <ThumbText>
                  <ThumbName>{item.name}</ThumbName>
                  <ThumbLocation>{item.location || "Featured testimonial"}</ThumbLocation>
                </ThumbText>
              </ThumbButton>
            ))}
          </Thumbnails>
        </NavigationRow>
      </Shell>
    </Section>
  );
}

Testimonials.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      text: PropTypes.string,
      name: PropTypes.string.isRequired,
      location: PropTypes.string,
      image: PropTypes.string,
    })
  ).isRequired,
};
