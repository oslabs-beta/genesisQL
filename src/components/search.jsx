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
import Button from '@material-ui/core/Button';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="searchContainer">
        <form
          id="search"
        //   action="javascript:() => {
        //   console.log('INSIDE SEARCH ONCLICK FUNC');
        //   this.props.dataPOSTRequest(document.getElementById('searchInput').value);
        // }"
        >
          <label>
            <input
              id="searchInput"
              type="text"
              placeholder="Enter data-source here"
              onSubmit={() => {
                { /* console.log('INSIDE SEARCH ONCLICK FUNC'); */ }
                this.props.dataPOSTRequest(document.getElementById('searchInput').value);
              }}
            />
          </label>
        </form>
        <div id="searchButtonContainer">
          {/* <Button className={classes.button}> */}

          <Button
            id="searchButton"
            variant="contained"
            size="small"
            onClick={() => {
              this.props.dataPOSTRequest(document.getElementById('searchInput').value);
            }}
            type="submit"
          >
            Search
          </Button>
        </div>
      </div>
    );
  }
}

export default Search;
