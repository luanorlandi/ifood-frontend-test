import React, { useState, useEffect } from 'react';

import Filters from '../Filters/Filters';
import getFilters from '../../api/getFilters';

const Navbar = () => {
  const [filters, setFilters] = useState(null);

  useEffect(() => {
    getFilters()
      .then((newFilters) => setFilters(newFilters));
  }, []);

  const isLoadingFilters = filters === null;
  if (isLoadingFilters) {
    return <span>loading...</span>;
  }

  return (
    <Filters filters={filters} />
  );
};

export default Navbar;
