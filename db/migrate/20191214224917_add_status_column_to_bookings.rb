class AddStatusColumnToBookings < ActiveRecord::Migration[5.2]
  def change
    add_column :bookings, :status, :string, null: false, default: "PENDING"
  end
end
