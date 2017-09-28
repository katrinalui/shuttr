import values from 'lodash/values';
import pickBy from 'lodash/pickby';

export const selectAllPhotos = state => {
  let photos = values(state.entities.photos);
  return photos.sort((a, b) => (
    new Date(b.post_date) - new Date(a.post_date)
  ));
};

export const selectAllUserAlbums = (state, userId) => {
  return pickBy(state.entities.albums, (value, key) => (
    value.owner_id === userId
  ));
  // let albums = values(state.entities.albums);
  // let userAlbums = albums.filter(album => album.owner_id === userId);
  // return userAlbums.sort((a, b) => (
  //   new Date(b.created_at) - new Date(a.created_at)
  // ));
};
