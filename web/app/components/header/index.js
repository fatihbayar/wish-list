import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import WishListContainer from '../../containers/wish-list';
import style from './index.less';

class Header extends Component {
  constructor(props) {
    super(props);

    props.fetchWishList();
  }

  render() {
    return (
      <nav className={style.header}>
        <ul className={style.list}>
          <li className={style.item}>
            <Link to="/" className={style.link}>Home</Link>
          </li>
          <li className={style.item}>
            <Link to="/wish-list" className={style.link}>Wish List ({this.props.wishList.length})</Link>
          </li>
        </ul>
      </nav>
    );
  }
}


export default connect(...WishListContainer)(Header);