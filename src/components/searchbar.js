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
      <div>
        // input tells state to change
        <input onChange={event => this.setState({ term: event.target.value})} />
        Value of the input: {this.state.term}
      </div>
    )
  };

  // when we do 'this' always has an event handler
}

export default SearchBar;

