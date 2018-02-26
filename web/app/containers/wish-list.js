import {
  fetchWishList,
  addToWishList,
  removeFromWishList,
} from '../actions/wish-list'

const mapStateToProps = state => {
  return {
    wishList: state.wishList.list,
    error: state.wishList.error
  };
};

const mapDispatchToProps = ({
  fetchWishList,
  addToWishList,
  removeFromWishList
});

export default [
  mapStateToProps,
  mapDispatchToProps
];
