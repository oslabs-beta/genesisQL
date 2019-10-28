import React from 'react';
import { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form /*action="/test" method="GET"*/>
        <label>
          <input type="text" placeholder="Paste here, motherfucker" />
        </label>
      </form>
    );
  }
}

export default Search;
