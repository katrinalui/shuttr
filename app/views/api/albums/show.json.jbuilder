json.album do
  json.extract! @album, :id, :title, :description
  json.owner_username @album.owner.username
  json.owner_img_url @album.owner.img_url
  json.photo_count @album.calculate_photos
  json.cover_photo_url @album.cover_photo_url
end

json.photos do
  json.array! @album.photos do |photo|
    json.extract! photo, :id, :img_url
  end
end
