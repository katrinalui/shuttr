import values from 'lodash/values';

export const selectAllPhotos = state => {
  let photos = values(state.entities.photos);
  return photos.sort((a, b) => (
    new Date(b.post_date) - new Date(a.post_date)
  ));
};

export const selectAllUserAlbums = (state) => {
  let albums = values(state.entities.albums);
  return albums.sort((a, b) => (
    new Date(b.created_at) - new Date(a.created_at)
  ));
};
