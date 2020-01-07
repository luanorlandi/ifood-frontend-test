import React, { useContext } from 'react';

import SearchContext from '../../contexts/SearchContext';

const Playlist = () => {
  const { search } = useContext(SearchContext);

  return (
    <div>
      <pre>{JSON.stringify(search, null, 2)}</pre>
    </div>
  );
};

export default Playlist;
