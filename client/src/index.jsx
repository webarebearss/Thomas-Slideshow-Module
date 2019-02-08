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
        <div className='jumbotron'>
          <div className='row'>
            <div className='imgdiv col-s-8'><img className='image-responsive' src={this.state.images[0].imgUrl}/></div> 
            <div className='imgdiv col-s-4'><img className='image-responsive' src={this.state.images[1].imgUrl}/></div>
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
