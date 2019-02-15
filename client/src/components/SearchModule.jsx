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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand">Bearbnb</div>
      </nav>
    )
  };
}

export default SearchModule;