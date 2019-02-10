import React from 'react';

const Slideshow = ({images}) => (
  <div className='img-grid container-fluid'>
    {/* {BUTTONS} */}
    <button type="button" className="share-btn btn btn-light d-none d-sm-block" data-toggle="modal" data-target="#exampleModal"><i className="far fa-share-square"></i>   Share</button>
    <button type="button" className="save-btn btn btn-light d-none d-sm-block"><i className="far fa-heart"></i>   Save</button>
    <button type="button" className="share-btn-xs btn btn-link d-block d-sm-none"><i className="far fa-share-square"></i></button>
    <button type="button" className="save-btn-xs btn btn-link d-block d-sm-none"><i className="far fa-heart"></i></button>
    <button type="button" className="view-photo-btn btn btn-light">View Photos</button>

    {/* {PHOTOS} */}
    <div className='main row h-100'>

      {/* {Main image} */}
      <div className='col'><img className='main-img' src={images[0].imgUrl} height="600" width="800"/></div> 
      {/* {Subimages for sizes sm and up} */}
      <div className='col-sm-4 col-lg-3 border-left-0 d-none d-sm-block'>
        <div className='row h-50 border-top-0 border-bottom-0 border-left-0'>
          <img src={images[1].imgUrl}/>
        </div>
        <div className='row h-50 border-bottom-0 border-left-0'>
          <img src={images[2].imgUrl}/>
        </div>
      </div>
      {/* {Subimages for sizes lg and up} */}
      <div className='col-lg-3 border-0 d-none d-lg-block'>
        <div className='row h-50 border-bottom-0'>
          <img src={images[3].imgUrl}/>
        </div>
        <div className='row h-50'>
          <img src={images[4].imgUrl}/>
        </div>
      </div>
    </div>

    {/* {MODALS} */}
  </div>
)

export default Slideshow;