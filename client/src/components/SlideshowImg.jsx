import React from 'react';

const SlideshowImg = ({image, setLength}) => (
  <div className="carousel-item">
    <img className="d-block" src={image.imgUrl} alt={image.description}/>
    <div class="carousel-caption">
      <p>{image.imgOrder + 1}/{setLength}: {image.description}</p>
    </div>
  </div>
)

export default SlideshowImg;