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
    first_photo_join = self.album_photos.order(:created_at)[0]
    first_photo_id = first_photo_join ? first_photo_join.photo_id : nil
    first_photo_id ? Photo.find_by(id: first_photo_id).img_url : nil
  end

  def calculate_photos
    self.photos.count
  end
end
