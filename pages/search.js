import React, { useState } from 'react'
import { useEffect } from 'react';

const SearchBar = ({execute, setSort}) => {
    return (
        <div>
            <div class="bar">
                <input class="in" placeholder="search for anything..." onChange={(evt) => execute(evt.srcElement.value)}></input>
            </div>
            <label for="sortby">Sort Posts:</label>
            <select name="sortby" onChange={(e) => setSort(e.target.value)}>
                <option value="date">Date</option>
                <option value="score">Score</option>
            </select>
        </div>
    )
}

const SearchModule = ({query, setSort}) => {

    return (
      <div class="search">
          <SearchBar execute={query} setSort={setSort}/>
      </div>
    )
 }
  
export default SearchModule;