class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :treehouse_id, null: false
      t.integer :guest_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false

      t.timestamps
    end

    add_index :bookings, :treehouse_id
    add_index :bookings, :guest_id
  end
end
