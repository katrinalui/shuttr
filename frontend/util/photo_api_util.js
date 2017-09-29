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

export const postTagging = (photoId, tags) => (
  $.ajax({
    url: `api/photos/${photoId}/edit_taggings`,
    method: 'POST',
    data: { tags }
  })
);
