# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tag < ApplicationRecord
  validates :name, presence: true, uniqueness: { case_sensitive: false }

  has_many :taggings,
           primary_key: :id,
           foreign_key: :tag_id,
           class_name: :Tagging,
           dependent: :destroy

  has_many :tagged_photos,
           through: :taggings,
           source: :photo
end
