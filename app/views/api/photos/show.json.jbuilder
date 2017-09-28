json.photo do
  json.partial! 'api/photos/photo', photo: @photo
end

json.albums do
  json.array! @photo.albums do |album|
    json.extract! album, :id, :title, :owner_id
    json.photo_count album.calculate_photos
    json.cover_photo_url album.cover_photo_url
  end
end
