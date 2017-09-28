# == Schema Information
#
# Table name: albums
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text
#  owner_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Album < ApplicationRecord
  validates :title, presence: true
  default_scope { order('created_at DESC') }

  belongs_to :owner,
             primary_key: :id,
             foreign_key: :owner_id,
             class_name: :User

  has_many :album_photos,
           primary_key: :id,
           foreign_key: :album_id,
           class_name: :AlbumPhoto,
           dependent: :destroy

  has_many :photos,
           through: :album_photos,
           source: :photo

  def cover_photo_url
    first_photo = self.photos[0]
    first_photo ? first_photo.img_url : nil
  end

  def calculate_photos
    self.photos.count
  end
end
