class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :title
      t.integer :length
      t.boolean :has_played, default: false 
      t.references :genre, foreign_key: true

      t.timestamps
    end
  end
end
