import React from 'react';

class SearchModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null
    }
  }
 
  componentDidMount() { 
    console.log('mounted!')
  };

  
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-orange bg-white .d-inline w-100">
        <img src="https://i.imgur.com/sD4oWuf.png"/>
        <div className="search-form">
          <i className="fas fa-search align-middle"></i>
          <input className="search-area align-middle" type="search" placeholder="Search" aria-label="Search"/>
        </div>
      </nav>
    )
  };
}

export default SearchModule;