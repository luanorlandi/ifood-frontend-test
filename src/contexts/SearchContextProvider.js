import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SearchContext from './SearchContext';

const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState(null);

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

SearchContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchContextProvider;
