export const getPhotos = () => (
  $.ajax({
    url: 'api/photos'
  })
);

export const getUserPhotos = (userId) => (
  $.ajax({
    url: `api/users/${userId}/photos`
  })
);

export const getTagPhotos = (tagName) => (
  $.ajax({
    url: `api/tags/${tagName}/photos`
  })
);

export const getPhoto = (photoId) => (
  $.ajax({
    url: `api/photos/${photoId}`
  })
);

export const postPhoto = (photo) => (
  $.ajax({
    url: 'api/photos',
    method: 'POST',
    data: { photo }
  })
);

export const patchPhoto = (photo) => (
  $.ajax({
    url: `api/photos/${photo.id}`,
    method: 'PATCH',
    data: { photo }
  })
);

export const deletePhoto = (photoId) => (
  $.ajax({
    url: `api/photos/${photoId}`,
    method: 'DELETE'
  })
);

export const postAlbumMembership = (photoId, albums) => (
  $.ajax({
    url: `api/photos/${photoId}/edit_album_membership`,
    method: 'POST',
    data: { albums }
  })
);

export const postAddTag = (photoId, tag) => {
  return $.ajax({
    url: `api/photos/${photoId}/add_tag`,
    method: 'POST',
    data: { tag }
  });
};

export const postRemoveTag = (photoId, tag) => (
  $.ajax({
    url: `api/photos/${photoId}/remove_tag`,
    method: 'POST',
    data: { tag }
  })
);
