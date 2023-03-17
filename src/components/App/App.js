import React, { useState } from 'react';
import './App.css';

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

import Yelp from '../../util/Yelp';

function App() {
  const [businesses, setBusinesses] = useState([]);

  function update(newbus) {
    setBusinesses(newbus)
  }
  
  const searchYelp = (term, location, sortBy) => {
    console.log(searchYelp.term)
    Yelp.search(term, location, sortBy).then(businesses => {
      update(businesses)
    });
  };

  return (
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar searchYelp={searchYelp} />
      
      <BusinessList businesses={businesses} />
 
    </div>
  );
}

export default App;
