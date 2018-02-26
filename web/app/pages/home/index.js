import React, { Component } from 'react';

import Header from '../../components/header';
import SearchForm from '../../components/search-form';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchForm history={this.props.history} />
      </div>
    );
  }
}

export default Home;