import React from "react";
import bulmaCarousel from "bulma-carousel/dist/js/bulma-carousel.min.js";
import { withPrefix } from "gatsby";

interface VideoCarouselProps {
  videoPaths: string[];
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videoPaths }) => {
  React.useEffect(() => {
    const options = {
      slidesToScroll: 1,
      slidesToShow: 3,
      autoplay: false,
      autoplaySpeed: 3000,
    };

    const carousels = bulmaCarousel.attach(".carousel", options);
    carousels.forEach((carousel: any) => {
      carousel.on("before:show", (state: any) => {
        console.log(state);
      });
    });
  }, []);

  return (
    <div className="hero is-light is-small">
      <div className="hero-body">
        <div className="container">
          <div id="results-carousel" className="carousel results-carousel">
            {videoPaths.map((path, index) => (
              <div className={`item item-short-${index + 1}`} key={index}>
                <video
                  id={`short-${index + 1}`}
                  autoPlay
                  controls
                  muted
                  loop
                  playsInline
                  height="100%"
                >
                  <source src={withPrefix(path)} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;
