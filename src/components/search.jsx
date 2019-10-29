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
