class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.string :title, null: false
      t.text :description
      t.integer :owner_id, null: false
      t.timestamps
    end
  end
end
