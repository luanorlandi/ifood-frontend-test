import filterPlaylists from './filterPlaylists';

const playlists = [
  { name: 'New Music Friday' },
  { name: 'Most Streamed Songs of the Decade' },
  { name: 'Dance Party' },
  { name: 'Are & Be' },
  { name: 'Girls\' Night' },
  { name: 'All The Feels' },
  { name: 'Sing-Along Indie Hits' },
  { name: 'Get Turnt' },
  { name: 'House is a Feeling' },
  { name: 'Ambient Relaxation' },
  { name: 'Hanging Out and Relaxing' },
];

test('filter playlists by name', () => {
  const filter = 'the';
  const filteredPlaylists = JSON.stringify(filterPlaylists(playlists, filter));
  const expectedPlaylists = JSON.stringify([
    { name: 'Most Streamed Songs of the Decade' },
    { name: 'All The Feels' },
  ]);

  expect(filteredPlaylists).toBe(expectedPlaylists);
});
