# == Schema Information
#
# Table name: treehouses
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :string           not null
#  owner_id    :integer          not null
#  address     :string           not null
#  lat         :float            not null
#  lng         :float            not null
#  price       :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Treehouse < ApplicationRecord
    validates :name, :description, :owner_id, :address, :lat, :lng, :price, presence: true

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User

    has_many :bookings

    has_many_attached :photos

    def self.search_by_keyword(keyword)
        matcher = "%#{keyword}%"
        name_results = Treehouse.where("name ILIKE ?", matcher)
        address_results = Treehouse.where("address ILIKE ?", matcher)
        description_results = Treehouse.where("description ILIKE ?", matcher)
        search_result = name_results.concat(address_results).concat(description_results)
        search_result
    end
    
end
