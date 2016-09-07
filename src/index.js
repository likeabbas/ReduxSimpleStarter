/**
 * Created by abbas on 9/6/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchbar';

const API_KEY = "AIzaSyCnVUUfHZayoNuz8qagRPeEPY5UGMtWfIw";

const App = () => {
  return (
    <div>
      <SearchBar></SearchBar>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
