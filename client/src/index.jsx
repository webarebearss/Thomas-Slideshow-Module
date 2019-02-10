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
      .then(this.setSizeByScreen());
  }

  setSizeByScreen() {
    console.log(screen.height)
    document.styleSheets[2].insertRule(
      `.img-grid {
        height: ${screen.height * 0.4}px;
      }`
    );
    document.styleSheets[2].insertRule(
      `@media screen and (min-width: 960px) {
        .img-grid {
          height: ${screen.height * 0.5}px;
        }
      }`, 1
    );
    document.styleSheets[2].insertRule(
      `.view-photo-btn {
        @include position-btn();
        top: ${screen.height * 0.4 - 60}px;
        right: 30px;
      }`, 2
    );
    document.styleSheets[2].insertRule(
      `@media screen and (min-width: 960px) {
        .view-photo-btn {
          top: ${screen.height * 0.5 - 60}px;
        }
      }`, 3
    );
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