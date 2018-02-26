import {
  fetchSuggestions
} from '../actions/suggestion'

const mapStateToProps = state => {
  return {
    list: state.suggestion.list,
    fetching: state.suggestion.fetching,
    error: state.suggestion.error
  };
};

const mapDispatchToProps = ({
  fetchSuggestions
});

export default [
  mapStateToProps,
  mapDispatchToProps
];
