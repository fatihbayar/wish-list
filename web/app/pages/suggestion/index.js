import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/header';
import ProductList from '../../components/product/list';
import SuggestionContainer from '../../containers/suggestion';

class Suggestion extends Component {
  constructor(props) {
    super(props);

    const searchValue = this.props.location.pathname.replace('/', '');

    props.fetchSuggestions(searchValue);
  }

  render() {
    return (
      <div>
        <Header />
        <ProductList products={this.props.list} />
      </div>
    );
  }
}

export default connect(...SuggestionContainer)(Suggestion);