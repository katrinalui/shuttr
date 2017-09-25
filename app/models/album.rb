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

  belongs_to :owner,
             primary_key: :id,
             foreign_key: :owner_id,
             class_name: :User

  has_many :album_photos,
           primary_key: :id,
           foreign_key: :album_id,
           class_name: :AlbumPhoto

  has_many :photos,
           through: :album_photos,
           source: :photo

  def cover_photo_url
    self.photos[0].img_url
  end

  def calculate_photos
    self.photos.count
  end
end
