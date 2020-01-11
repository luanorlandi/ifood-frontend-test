import React, { useContext, useState, useEffect } from 'react';
import { useFormik } from 'formik';

import PlaylistsContext from '../../contexts/PlaylistsContext';
import Input from '../Form/Input/Input';
import PlaylistCard from './PlaylistCard';
import filterPlaylists from './filterPlaylists';
import './Playlists.scss';

const Playlists = () => {
  const { playlists } = useContext(PlaylistsContext);
  const [filteredPlaylists, setFilteredPlaylists] = useState([]);
  const formik = useFormik({
    initialValues: {
      name: '',
    },
  });

  useEffect(() => {
    const hasfilter = !!formik.values.name;
    if (playlists && hasfilter) {
      const newFilteredPlaylists = filterPlaylists(playlists, formik.values.name);
      setFilteredPlaylists(newFilteredPlaylists);
    } else {
      setFilteredPlaylists(playlists);
    }
  }, [playlists, formik.values.name]);

  return (
    <div className="playlists">
      <Input
        formik={formik}
        field={{ id: 'name' }}
        placeholder="Filtrar pelo nome da playlist"
        styleType="white"
      />
      <div className="playlists__cards">
        {filteredPlaylists && filteredPlaylists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </div>
  );
};

export default Playlists;
