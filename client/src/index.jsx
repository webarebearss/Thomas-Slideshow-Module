import React from 'react';
import ReactDOM from 'react-dom';
import PhotoGrid from './components/PhotoGrid.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null
    };
  }

// the current listID would normally be passed in where '1000' is
  componentDidMount() { 
    this.setSizeByScreen();
    fetch ('http://localhost:3000/rooms/1000/images')
      .then(res => res.json())
      .then(images => {
        this.setState({
          images: images
        });
       }
      );
  };

  setSizeByScreen() {
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
      return (<PhotoGrid images={this.state.images}/>)
    }
  };

  render() {
    return (
      <div>
        {this.renderImgGrid()}
      </div>
    )
  };
}

ReactDOM.render(<App />, document.querySelector('#photogrid'));

export default App;