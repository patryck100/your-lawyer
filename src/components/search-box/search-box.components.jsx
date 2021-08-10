import React from 'react';

import { SearchContainer } from './search-box.styles';

export const SearchBox = ({ placeholder, handleChange}) => (
    <SearchContainer
    as="input"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
)