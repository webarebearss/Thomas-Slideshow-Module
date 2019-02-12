import React from 'react';

const SlideshowImg = ({image, setLength}) => (
  <div className="carousel-item">
    <img className="d-block w-100" src={image.imgUrl} alt={image.description}/>
    <div class="carousel-caption d-none d-md-block">
      <p>{image.imgOrder}/{setLength}: {image.description}</p>
    </div>
  </div>
)

export default SlideshowImg;