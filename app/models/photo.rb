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

  belongs_to :owner,
             primary_key: :id,
             foreign_key: :owner_id,
             class_name: :User
end
