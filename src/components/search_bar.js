import React , { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props); // Calling the parent method

    this.state = { term: ' '};
    this.onInputChange = this.onInputChange.bind(this);
  }
  render() {
    return (
      <div className="search-bar">
        <input
          onChange={(event) => this.onInputChange(event.target.value)}
          value={this.state.term}
        />
      </div>
    );
  }
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
