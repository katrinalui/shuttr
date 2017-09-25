# == Schema Information
#
# Table name: album_photos
#
#  id         :integer          not null, primary key
#  album_id   :integer          not null
#  photo_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

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
