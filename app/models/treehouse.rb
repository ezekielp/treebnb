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
        search_result = Treehouse.where("name ILIKE ?", matcher).or(Treehouse.where("address ILIKE ?", matcher).or(Treehouse.where("description ILIKE ?", matcher)))
        search_result
    end
    
end
