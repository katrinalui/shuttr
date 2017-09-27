json.photo do
  json.partial! 'api/photos/photo', photo: @photo
end

json.albums do
  json.array! @photo.albums do |album|
    json.extract! album, :id, :title
    json.photo_count album.calculate_photos
  end
end
