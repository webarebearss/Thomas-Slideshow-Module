import React from 'react';

const SlideshowThumb = ({image, setLength}) => (
  <li data-target="#carousel-custom" data-slide-to={image.imgOrder}>
    <img src={image.imgUrl} alt="image.description" class="img-responsive" onClick={() => event.path[0].scrollIntoView({behavior: "smooth", inline: "center"})}/>
    <p className="invisible-caption">{image.imgOrder + 1}/{setLength}: {image.description}</p>
  </li>
)

export default SlideshowThumb;