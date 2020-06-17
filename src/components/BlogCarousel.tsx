import React, { CSSProperties } from 'react';
import Slider, { Settings } from 'react-slick';

interface BlogCarouselProps {
    settings?: Settings;
    style?: CSSProperties;
}

const BlogCarousel = (props) => {
  const settings: Settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    ...(props.settings ? props.settings : {})
  };
  return (
  // @ts-ignore
    <Slider {...settings} style={props.style}>
      {props.children}
    </Slider>
  );
};
export default BlogCarousel;