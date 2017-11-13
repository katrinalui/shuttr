import values from 'lodash/values';

export const selectAllPhotos = state => {
  let photos = values(state.entities.photos);
  return photos.sort((a, b) => (
    new Date(b.post_date) - new Date(a.post_date)
  ));
};

export const selectAllUserAlbums = (state, userId) => {
  let albums = values(state.entities.albums);
  let userAlbums = albums.filter(album => album.owner_id === parseInt(userId));
  return userAlbums.sort((a, b) => (
    new Date(b.created_at) - new Date(a.created_at)
  ));
};

export const selectPhotoAlbums = (state, photoId) => {
  let albums = values(state.entities.albums);
  let photoAlbums = albums.filter(album => album.photo_id === parseInt(photoId));

  return photoAlbums.reduce((acc, album) => {
    acc[album.id] = album;
    return acc;
  }, {});
};

export const selectPhotoComments = (state, photoId) => {
  const comments = values(state.entities.comments);
  let photoComments = comments.filter(comment => comment.photo_id === parseInt(photoId));
  return photoComments.sort((a, b) => (
    new Date(a.created_at) - new Date(b.created_at)
  ));
};

export const selectPhotoTags = (state, photoId) => {
  if (!state.entities.photos[parseInt(photoId)] || !state.entities.photos[parseInt(photoId)].tags) {
    return [];
  }
  const tags = state.entities.photos[parseInt(photoId)].tags;
  return tags.map(name => state.entities.tags[name]);
};
