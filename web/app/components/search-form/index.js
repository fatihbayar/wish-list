import React, { Component } from 'react';

import style from './index.less';

class SearchForm extends Component {
  constructor() {
    super();

    this.state = {
      searchValue: ''
    };
  }

  onSubmit(event) {
    event.preventDefault();

    const searchValue = encodeURIComponent(this.state.searchValue);

    this.props.history.push(`/${searchValue}`);
  }

  onChange(event) {
    this.setState({
      searchValue: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text"
                 className={style.input}
                 placeholder="Search products..."
                 value={this.state.searchValue}
                 onChange={this.onChange.bind(this)}
          />
          <button type="submit" className={style.button}>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;