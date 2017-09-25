@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :title
    json.owner_username album.owner.username
    json.owner_img_url album.owner.img_url
    json.photo_count album.calculate_photos
    json.cover_photo_url album.cover_photo_url
  end
end
