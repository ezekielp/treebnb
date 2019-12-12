class RemoveAddressIndexFromTreehouses < ActiveRecord::Migration[5.2]
  def change
    remove_index "address", name: "index_treehouses_on_address"
  end
end
