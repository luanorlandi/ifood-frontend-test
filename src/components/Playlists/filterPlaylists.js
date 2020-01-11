const filterPlaylists = (playlists, filter) => {
  const lowerCaseFilter = filter.toLowerCase();

  return playlists.filter((playlist) => {
    const playlistName = playlist.name.toLowerCase();
    return playlistName.includes(lowerCaseFilter);
  });
};

export default filterPlaylists;
