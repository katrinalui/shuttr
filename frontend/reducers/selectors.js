import values from 'lodash/values';

export const selectAllPhotos = state => {
  let photos = values(state.entities.photos);
  return photos.sort((a, b) => (
    new Date(b.post_date) - new Date(a.post_date)
  ));
};

export const selectAllUserAlbums = (state, userId) => {
  let albums = values(state.entities.albums);
  return albums.filter(album => album.owner_id === userId);
};
