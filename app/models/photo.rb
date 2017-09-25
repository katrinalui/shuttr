# == Schema Information
#
# Table name: photos
#
#  id          :integer          not null, primary key
#  img_url     :string           not null
#  title       :string
#  description :text
#  owner_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Photo < ApplicationRecord
  validates :img_url, presence: true

  include ActionView::Helpers::DateHelper

  belongs_to :owner,
             primary_key: :id,
             foreign_key: :owner_id,
             class_name: :User

  has_many :album_photos,
           primary_key: :id,
           foreign_key: :photo_id,
           class_name: :AlbumPhoto

  has_many :albums,
           through: :album_photos,
           source: :album

  def posted_time_ago
    time_ago_in_words(self.created_at) + " ago"
  end

  def formatted_date
    self.created_at.strftime("%B %-d, %Y")
  end
end
