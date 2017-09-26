export const getUserAlbums = (userId) => (
  $.ajax({
    url: `api/users/${userId}/albums`
  })
);

export const getAlbum = (albumId) => (
  $.ajax({
    url: `api/albums/${albumId}`
  })
);

export const postAlbum = (album) => (
  $.ajax({
    url: 'api/albums',
    method: 'POST',
    data: { album }
  })
);

export const patchAlbum = (album) => (
  $.ajax({
    url: `api/albums/${album.id}`,
    method: 'PATCH',
    data: { album }
  })
);

export const deleteAlbum = (albumId) => (
  $.ajax({
    url: `api/albums/${albumId}`,
    method: 'DELETE'
  })
);
