import React from 'react';
import ReactDOM from 'react-dom';
import Slideshow from './components/Slideshow.jsx';

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

  renderImgGrid() {
    if (this.state.images) {
      return (<Slideshow images={this.state.images}/>)
    }
  }

  render() {
    return (
      <div>
        {this.renderImgGrid()}
      </div>
    )
  }
}

ReactDOM.render(<Carousel />, document.querySelector('#carousel'));

export default Carousel;