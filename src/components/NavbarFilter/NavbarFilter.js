import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import Filters from '../Filters/Filters';
import getFilters from '../../api/getFilters';
import { ReactComponent as SearchSolid } from '../../assets/search-solid.svg';
import './NavbarFilter.scss';

const NavbarFilter = () => {
  const [filters, setFilters] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getFilters()
      .then((newFilters) => setFilters(newFilters));
  }, []);

  const isLoadingFilters = filters === null;
  if (isLoadingFilters) {
    return (
      <nav className="navbar-filter" />
    );
  }

  return (
    <>
      <nav className={classNames('navbar-filter', {
        'navbar-filter--is-open': isOpen,
      })}
      >
        <Filters filters={filters} closeNavbar={() => setIsOpen(false)} />
      </nav>
      <button
        className="navbar-filter__button"
        type="button"
        aria-label="Abrir menu para buscar playlists"
        onClick={() => setIsOpen(true)}
      >
        <SearchSolid className="navbar-filter__button-icon" />
      </button>
      {isOpen && (
        // eslint-disable-next-line
        <div className="navbar-filter__overlay" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default NavbarFilter;
