import React, { useState } from 'react'
import { useEffect } from 'react';

const SearchBar = ({execute, setSort}) => {
    return (
        <div>
            <div class="bar">
                <input class="in" placeholder="search for anything..." onChange={(evt) => execute(evt.srcElement.value)}></input>
            </div>
            <div class="sort">
            <label for="sortby">Sort By:</label>
            <select name="sortby" onChange={(e) => setSort(e.target.value)}>
                <option value="date">Most Recent</option>
                <option value="score">Score, High to Low</option>
            </select>
            </div>
        </div>
    )
}

const SearchModule = ({query, setSort}) => {

    return (
      <div class="search">
          <h2>Search</h2><br/>
          <SearchBar execute={query} setSort={setSort}/>
      </div>
    )
 }
  
export default SearchModule;