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
      console.log(this.state.images[0].imgUrl);
      return(<img src={this.state.images[0].imgUrl}/>)
    }
  }

  render() {
    return (
      <div>HI!
        {this.renderImg()}
      </div>
    )
  }
}

ReactDOM.render(<Carousel />, document.querySelector('#carousel'));
