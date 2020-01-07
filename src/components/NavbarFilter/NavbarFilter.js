import React, { useState, useEffect } from 'react';

import Filters from '../Filters/Filters';
import getFilters from '../../api/getFilters';
import './NavbarFilter.scss';

const NavbarFilter = () => {
  const [filters, setFilters] = useState(null);

  useEffect(() => {
    getFilters()
      .then((newFilters) => setFilters(newFilters));
  }, []);

  const isLoadingFilters = filters === null;
  if (isLoadingFilters) {
    return (
      <nav className="navbar-filter">
        <span>loading...</span>
      </nav>
    );
  }

  return (
    <nav className="navbar-filter">
      <Filters filters={filters} />
    </nav>
  );
};

export default NavbarFilter;
