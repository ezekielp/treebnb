class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :body, null: false
      t.integer :treehouse_id, null: false
      t.integer :reviewer_id, null: false
      t.integer :cleanliness_rating, null: false
      t.integer :check_in_rating, null: false
      t.integer :accuracy_rating, null: false
      t.integer :location_rating, null: false
      t.integer :communication_rating, null: false
      t.integer :value_rating, null: false
      
      t.timestamps
    end

    add_index :reviews, :treehouse_id
    add_index :reviews, :reviewer_id
  end
end
