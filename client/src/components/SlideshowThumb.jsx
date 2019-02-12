import React from 'react';

const SlideshowThumb = ({image}) => (
  <li data-target="#carousel-custom" data-slide-to={image.imgOrder - 1}>
    <img src={image.imgUrl} alt="image.description" class="img-responsive"/>
  </li>
)

export default SlideshowThumb;