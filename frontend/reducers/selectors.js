import values from 'lodash/values';

export const selectAllPhotos = state => {
  let photos = values(state.entities.photos);
  return photos.sort((a, b) => (
    new Date(b.post_date) - new Date(a.post_date)
  ));
};

export const selectAllUserAlbums = (state, userId) => {
  let albums = values(state.entities.albums);
  let userAlbums = albums.filter(album => album.owner_id === userId);
  return userAlbums.sort((a, b) => (
    new Date(b.created_at) - new Date(a.created_at)
  ));
};

export const selectPhotoComments = (state, photoId) => {
  return values(state.entities.comments);
  // const comments = values(state.entities.comments);
  // let photoComments = comments.filter(comment => comment.photo_id === photoId);
  // return photoComments.sort((a, b) => (
  //   new Date(a.created_at) - new Date(b.created_at)
  // ));
};
