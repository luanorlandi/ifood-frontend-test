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
      <navbar className="navbar-filter">
        <span>loading...</span>
      </navbar>
    );
  }

  return (
    <navbar className="navbar-filter">
      <Filters filters={filters} />
    </navbar>
  );
};

export default NavbarFilter;
