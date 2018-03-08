class AddWidthHeightToPhotos < ActiveRecord::Migration[5.1]
  def change
    add_column :photos, :width, :integer
    add_column :photos, :height, :integer
  end
end
