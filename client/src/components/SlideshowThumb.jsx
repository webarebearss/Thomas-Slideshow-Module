import React from 'react';

const SlideshowThumb = ({key}) => (
  <li data-target="#carouselExampleIndicators" data-slide-to={key}></li>
)

export default SlideshowThumb;