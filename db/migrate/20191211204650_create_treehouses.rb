class CreateTreehouses < ActiveRecord::Migration[5.2]
  def change
    create_table :treehouses do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.integer :owner_id, null: false
      t.string :address, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.float :price, null: false

      t.timestamps
    end

    add_index :treehouses, :address, unique: true
    add_index :treehouses, :name, unique: true
    add_index :treehouses, :owner_id
  end
end
