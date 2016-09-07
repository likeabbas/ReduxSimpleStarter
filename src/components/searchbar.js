/**
 * Created by abbas on 9/6/16.
 */
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor (props) {
    super(props);

    this.state = { term: ''};
  }

  render () {
    // always use setState instead of changing by this.state = blah
    return (
      <div className="search-bar">

        <input

          // value changes when the state changes. not
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
        {/*Value of the input: {this.state.term}*/}
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  // when we do 'this' always has an event handler
}

export default SearchBar;

