
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroWrapper = styled.section`
  display: flex;
  flex-direction: ${({ $layout }) => $layout === 'vertical' ? 'column' : 'row'};
  align-items: center;
  justify-content: center;
  min-height: ${({ $layout }) => $layout === 'vertical' ? '420px' : '650px'};
  max-height: ${({ $layout }) => $layout === 'vertical' ? '600px' : '800px'};
  height: ${({ $layout }) => $layout === 'vertical' ? 'auto' : '70vh'};
  max-width: 1280px;
  margin: 0 auto 2.5rem auto;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px 0 rgba(60,60,60,0.10);
  overflow: hidden;
  padding: ${({ $layout }) => $layout === 'vertical' ? '32px 16px' : '0 48px'};
  @media (max-width: 1100px) {
    max-width: 100vw;
    padding: ${({ $layout }) => $layout === 'vertical' ? '24px 8px' : '0 24px'};
  }
  @media (max-width: 800px) {
    flex-direction: column;
    min-height: 380px;
    max-height: 500px;
    height: auto;
    padding: 24px 8px;
  }
`;

const HeroImage = styled.img`
  width: ${({ $layout }) => $layout === 'vertical' ? '100%' : '48%'};
  max-width: ${({ $layout }) => $layout === 'vertical' ? '900px' : '600px'};
  min-width: 260px;
  height: ${({ $layout }) => $layout === 'vertical' ? 'auto' : '100%'};
  max-height: ${({ $layout }) => $layout === 'vertical' ? '320px' : 'none'};
  object-fit: cover;
  border-radius: 12px;
  margin-left: ${({ $layout }) => $layout === 'vertical' ? '0' : '2.5rem'};
  margin-bottom: ${({ $layout }) => $layout === 'vertical' ? '2rem' : '0'};
  box-shadow: 0 2px 12px 0 rgba(60,60,60,0.10);
  @media (max-width: 1100px) {
    margin-left: ${({ $layout }) => $layout === 'vertical' ? '0' : '1.5rem'};
  }
  @media (max-width: 800px) {
    width: 100%;
    max-width: 340px;
    margin: 0 0 1.5rem 0;
    height: 220px;
    max-height: 220px;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 24px;
  @media (max-width: 800px) {
    align-items: center;
    text-align: center;
    padding: 0;
  }
`;

const HeroTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  font-weight: 700;
  color: #b76e79;
  margin-bottom: 1.2rem;
  line-height: 1.1;
  @media (max-width: 800px) {
    font-size: 2rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.25rem;
  color: #232323;
  margin-bottom: 2.2rem;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  max-width: 600px;
  @media (max-width: 800px) {
    font-size: 1.08rem;
    margin-bottom: 1.5rem;
  }
`;

const HeroCTA = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #b76e79;
  color: #fff;
  font-family: 'Playfair Display', serif;
  font-size: 1.25rem;
  font-weight: 700;
  padding: 0.95em 2.5em;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 2px 8px 0 rgba(60,60,60,0.10);
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  min-height: 56px;
  line-height: 1.2;
  margin-top: 0.5rem;
  &:hover, &:focus {
    background: #a05562;
    color: #fff;
    box-shadow: 0 4px 16px 0 rgba(60,60,60,0.14);
    outline: none;
  }
`;


const Hero = React.memo(({ image, text, ctaText, ctaLink, title, imageAlt, layout = 'split' }) => {
  return (
    <HeroWrapper $layout={layout}>
      {layout === 'vertical' ? (
        <>
          <HeroImage src={image} alt={imageAlt || 'Hero'} $layout={layout} />
          <HeroContent>
            {title && <HeroTitle>{title}</HeroTitle>}
            <HeroText>{text}</HeroText>
            <HeroCTA to={ctaLink}>{ctaText}</HeroCTA>
          </HeroContent>
        </>
      ) : (
        <>
          <HeroContent>
            {title && <HeroTitle>{title}</HeroTitle>}
            <HeroText>{text}</HeroText>
            <HeroCTA to={ctaLink}>{ctaText}</HeroCTA>
          </HeroContent>
          <HeroImage src={image} alt={imageAlt || 'Hero'} $layout={layout} />
        </>
      )}
    </HeroWrapper>
  );
});


Hero.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  title: PropTypes.node,
  text: PropTypes.node.isRequired,
  ctaText: PropTypes.string.isRequired,
  ctaLink: PropTypes.string.isRequired,
  layout: PropTypes.oneOf(['split', 'vertical']),
};

export default Hero;
