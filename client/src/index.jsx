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
        console.log(images);
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
          <div className='main row h-100'>
            <div className='fill col-8'>
              <img className='main-img image-responsive' src={this.state.images[0].imgUrl}/></div> 
            <div className='col-4'>
              <div className='fill row h-50'>
                <img className='image-responsive' src={this.state.images[1].imgUrl}/>
              </div>
              <div className='fill row h-50'>
                <img className='image-responsive' src={this.state.images[2].imgUrl}/>
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