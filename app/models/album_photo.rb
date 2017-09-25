class AlbumPhoto < ApplicationRecord
  belongs_to :album,
             primary_key: :id,
             foreign_key: :album_id,
             class_name: :Album

  belongs_to :photo,
             primary_key: :id,
             foreign_key: :photo_id,
             class_name: :Photo
end
