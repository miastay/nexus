import React, { useState } from 'react'
import { useEffect } from 'react';

const SearchBar = ({execute}) => {
    return (
        <div class="bar">
            <input class="in" placeholder="search for anything..." onChange={(evt) => execute(evt)}></input>
        </div>
    )
}

const SearchModule = ({query}) => {

    return (
      <div class="search">
          <SearchBar execute={query} />
      </div>
    )
 }
  
export default SearchModule;