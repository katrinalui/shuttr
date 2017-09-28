# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  photo_id   :integer          not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to :photo,
             primary_key: :id,
             foreign_key: :photo_id,
             class_name: :Photo

  belongs_to :author,
             primary_key: :id,
             foreign_key: :author_id,
             class_name: :User
end
