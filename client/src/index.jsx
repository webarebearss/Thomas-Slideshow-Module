import React from 'react';
import ReactDom from 'react-dom';

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: null
    }
  }

// the current listID would normally be passed in to 'static'
  componentDidMount() { 
    fetch ('http://localhost:3000/rooms/static/images')
      .then(images => this.setState({
          images: images
        })
      )
  }

  render() {
    return (
      <div></div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('carousel'));
