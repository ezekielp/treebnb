class RemoveBirthdayFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :birthday
  end
end
