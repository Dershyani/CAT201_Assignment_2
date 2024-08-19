import React, { useState } from "react";
import Video from "../../videos/timelapse.mp4";
import { Button } from "../ButtonElements"; // Import the Button component

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ReviewSection,
  ReviewSlider,
  ReviewCard,
} from "./TimelapseElements";

const HeroSection = () => {
  const [showReviews, setShowReviews] = useState(false);

  const toggleReviews = () => {
    setShowReviews(!showReviews);
  };

  return (
    <HeroContainer id="reviews">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Timelapse Videos Made Easy</HeroH1>
        <HeroP>
          Explore customer plant growth videos and <br></br>
          click the button for reviews
        </HeroP>
        <HeroBtnWrapper>
          <Button primary onClick={toggleReviews}>
            Reviews
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
      <ReviewSection showReviews={showReviews}>
        <ReviewSlider>
          {reviews.map((review, index) => (
            <ReviewCard key={index}>
              <h3>{review.name}</h3>
              {Array.from({ length: review.rating }, (_, i) => (
                <span key={i}>&#9733;</span>
              ))}
              <p>{review.review}</p>
            </ReviewCard>
          ))}
        </ReviewSlider>
      </ReviewSection>
    </HeroContainer>
  );
};

const reviews = [
  {
    name: "Sarah",
    rating: 5,
    review: "Excellent service!",
  },
  {
    name: "Anusha",
    rating: 4,
    review: "Great experience overall.",
  },
  {
    name: "Liang Teck Meng",
    rating: 4,
    review: "I love the plant selection, very satisfied.",
  },
  {
    name: "Vivien Yeoh",
    rating: 4,
    review: "Beautiful plants and excellent packaging.",
  },
];

const App = () => {
  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default App;
