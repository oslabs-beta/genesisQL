/**
 * ***********************************
 *
 * @module Search
 * @author Tom Herrmann and Adam Goren
 * @date 10/29/2019
 * @description Search bar to perform GET requests on various data collections
 *
 * ***********************************
 */

import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form
        id="search"
      //   action="javascript:() => {
      //   console.log('INSIDE SEARCH ONCLICK FUNC');
      //   this.props.dataPOSTRequest(document.getElementById('searchInput').value);
      // }"
      >
        <label>
          <input id="searchInput" type="text" placeholder="Paste here, motherfucker" />
        </label>
        <button
          id="searchButton"
          onClick={() => {
            console.log('INSIDE SEARCH ONCLICK FUNC');
            this.props.dataPOSTRequest(document.getElementById('searchInput').value);
          }}
          type="submit"
        >
          Search
        </button>
      </form>
    );
  }
}

export default Search;
