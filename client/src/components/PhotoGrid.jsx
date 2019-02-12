import React from 'react';
import SlideshowImg from './SlideshowImg.jsx';
import SlideshowThumb from './SlideshowThumb.jsx';

const PhotoGrid = ({images}) => (
  <div className="img-grid container-fluid">
    {/* {--BUTTONS--} */}
    <button type="button" className="share-btn btn btn-light d-none d-sm-block" data-toggle="modal" data-target="#share-modal"><i className="far fa-share-square"></i>&emsp;Share</button>
    <button type="button" className="save-btn btn btn-light d-none d-sm-block" data-toggle="modal" data-target="#save-modal"><i className="far fa-heart"></i>&emsp;Save</button>
    <button type="button" className="share-btn-xs btn btn-link d-block d-sm-none" data-toggle="modal" data-target="#share-modal"><i className="far fa-share-square"></i></button>
    <button type="button" className="save-btn-xs btn btn-link d-block d-sm-none" data-toggle="modal" data-target="#save-modal"><i className="far fa-heart"></i></button>
    <button type="button" className="view-photo-btn btn btn-light" data-toggle="modal" data-target="#slideshow-modal">View Photos</button>

    {/* {--PHOTOS--} */}
    <div className="main row h-100">

      {/* {Main image} */}
      <div className="col"><img className="main-img" src={images[0].imgUrl} height="600" width="800"/></div> 
      
      {/* {Subimages for sizes sm and up} */}
      <div className="col-sm-4 col-lg-3 border-left-0 d-none d-sm-block">
        <div className="row h-50 border-top-0 border-bottom-0 border-left-0">
          <img src={images[1].imgUrl}/>
        </div>
        <div className="row h-50 border-bottom-0 border-left-0">
          <img src={images[2].imgUrl}/>
        </div>
      </div>
      {/* {Subimages for sizes lg and up} */}
      <div className="col-lg-3 border-0 d-none d-lg-block">
        <div className="row h-50 border-bottom-0">
          <img src={images[3].imgUrl}/>
        </div>
        <div className="row h-50">
          <img src={images[4].imgUrl}/>
        </div>
      </div>
    </div>

    {/* {--MODALS--} */}

    {/* {Share modal} */}
    <div className="modal fade" id="share-modal" tabIndex="-1" role="dialog" aria-labelledby="share-modal" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="share-modal-label">Share</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="border-bottom">
              Check out this awesome listing on Bearbnb: [listing name] 
              <br/> <br/>
            </div>
              <br/>
            [Copy Link]
          </div>
        </div>
      </div>
    </div>

    {/* {Save modal} */}
    <div className="modal fade" id="save-modal" tabIndex="-1" role="dialog" aria-labelledby="save-modal" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="save-modal-label">Save to list</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Sign up be email <br/>
            Already have an Airbnb account? Log in
          </div>
          <div className="modal-footer">
          </div>
        </div>
      </div>
    </div>
    
    {/* {Slideshow modal} */}
    <div className="slideshow-modal modal fade" id="slideshow-modal" tabIndex="-1" role="dialog" aria-labelledby="slideshow-modal" aria-hidden="true">
      <div className="modal-dialog modal-full" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="save-modal-label">Slideshow goes here</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">

            {/* {Slideshow carousel} */}
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                {images.slice(1).map(image => <SlideshowThumb key={image.imgOrder}/>)}
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src={images[0].imgUrl} alt={images[0].description}/>
                  <div class="carousel-caption d-none d-md-block">
                    <p>{images[0].imgOrder}/{images.length}: {images[0].description}</p>
                  </div>
                </div>
                 {images.slice(1).map((image, i) => <SlideshowImg image={image} key={i} setLength={images.length}/>)}
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>


          </div>
          <div className="modal-footer">
          </div>
        </div>
      </div>
    </div>

  </div>
)

export default PhotoGrid;