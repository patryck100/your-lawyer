import React from 'react';

//Reusing styled component
import { SearchContainer } from './search-box.styles';

//by exporting, it allows this component to be called from another components
export const SearchBox = ({ placeholder, handleChange}) => (
    <SearchContainer
    as="input"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
)