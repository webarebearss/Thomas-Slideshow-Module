import React from 'react';
import ReactDOM from 'react-dom';

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: null
    }
  }

// the current listID would normally be passed in to '1000'
  componentDidMount() { 
    fetch ('http://localhost:3000/rooms/1000/images')
      .then(res => res.json())
      .then(images => {
        this.setState({
          images: images
        });
       }
      )
  }

  renderImg() {
    if (this.state.images) {
      return(
        <div className='img-grid container-fluid'>
          <button type="button" className="share-btn btn btn-light"><i className="far fa-share-square"></i>   Share</button>
          <button type="button" className="save-btn btn btn-light"><i className="far fa-heart"></i>   Save</button>
          <button type="button" className="view-photo-btn btn btn-light">View Photos</button>
          <div className='main row h-100'>
            <div className='fill col'>
              <img className='main-img image-responsive' src={this.state.images[0].imgUrl}/></div> 
            <div className='col-sm-4 col-lg-3 border-0 d-none d-sm-block'>
              <div className='fill row h-50 border-left-0 border-bottom-0'>
                <img src={this.state.images[1].imgUrl}/>
              </div>
              <div className='fill row h-50 border-left-0'>
                <img src={this.state.images[2].imgUrl}/>
              </div>
            </div>
            <div className='col-lg-3 border-0 d-none d-lg-block'>
              <div className='fill row h-50 border-left-0 border-bottom-0'>
                <img src={this.state.images[3].imgUrl}/>
              </div>
              <div className='fill row h-50 border-left-0'>
                <img src={this.state.images[4].imgUrl}/>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.renderImg()}
      </div>
    )
  }
}

ReactDOM.render(<Carousel />, document.querySelector('#carousel'));

export default Carousel;