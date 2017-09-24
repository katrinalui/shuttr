const CLOUDINARY_UPLOAD_PRESET = "user_uploads";
const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/shuttr/image/upload";
const CLOUDINARY_CLOUD_NAME = "shuttr";

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
