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
        search_result = Treehouse.where("name ILIKE ?", matcher).or(Treehouse.where("address ILIKE ?", matcher).or(Treehouse.where("description ILIKE ?", matcher))).includes(:bookings)
        search_result
    end

    def self.search_by_dates(keyword_search_result, start_date, end_date)
        ruby_start_date = Date.parse(start_date)
        ruby_end_date = Date.parse(end_date)
        searched_dates = (ruby_start_date..ruby_end_date).to_a

        result = []
        
        keyword_search_result.each do |treehouse|
            all_booked_dates = []
            treehouse.bookings.each do |booking|
                all_booked_dates += booking.dates
            end

            inclusion_flag = true
            searched_dates.each do |date|
                if all_booked_dates.include?(date)
                    inclusion_flag = false
                end
            end
            if inclusion_flag
                result << treehouse
            end
        end
        # result = keyword_search_result.select do |treehouse|
        #     all_booked_dates = []
        #     treehouse.bookings.each do |booking|
        #         all_booked_dates += booking.dates
        #     end

        #     inclusion_flag = true
        #     searched_dates.each do |date|
        #         if all_booked_dates.include?(date)
        #             inclusion_flag = false
        #         end
        #     end
        #     inclusion_flag
        #     debugger
        # end

        result
    end
    
end