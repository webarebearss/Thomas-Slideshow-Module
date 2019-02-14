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

// Seed currently contains listingIds from 1000-1099 - make sure to use valid endpoint.
  componentDidMount() { 
    let listingId = window.location.pathname.split('/')[2];
    this.setSizeByScreen();
    fetch (`http://localhost:3000/rooms/${listingId}/images`)
      .then(res => res.json())
      .then(images => this.setState({images}));
  };

  setSizeByScreen() {
    document.styleSheets[2].insertRule(
      `.img-grid {
        height: ${ screen.height * 0.4 }px;
      }`
    );
    document.styleSheets[2].insertRule(
      `@media screen and (min-width: 960px) {
        .img-grid {
          height: ${ screen.height * 0.5 }px;
        }
      }`, 1
    );
    document.styleSheets[2].insertRule(
      `.view-photo-btn {
        top: ${ screen.height * 0.4 - 60 }px;
        right: 20px;
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

  selectActivePhoto() {
    let photos = document.querySelectorAll('.carousel-item');
    photos.forEach(photo => photo.classList.remove('active'));
    const gridMap = {
      image1: 0,
      image2: 1,
      image3: 2,
      image4: 3,
      image5: 4
    }
    photos[gridMap[event.path[0].id]].classList.add('active');
    document.querySelector('.view-photo-btn').click();
  }

  scrollToActive() {
    let activeThumb = document.querySelectorAll('.active')[1];
    activeThumb.scrollIntoView({behavior: "smooth", inline: "center"});
  }
 
  renderImgGrid() {
    if (this.state.images) {
      return (<PhotoGrid images={this.state.images} selectActivePhoto={this.selectActivePhoto} scrollToActive={this.scrollToActive}/>)
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