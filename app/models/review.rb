# == Schema Information
#
# Table name: reviews
#
#  id                   :bigint           not null, primary key
#  body                 :text             not null
#  treehouse_id         :integer          not null
#  reviewer_id          :integer          not null
#  cleanliness_rating   :integer          not null
#  check_in_rating      :integer          not null
#  accuracy_rating      :integer          not null
#  location_rating      :integer          not null
#  communication_rating :integer          not null
#  value_rating         :integer          not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#

class Review < ApplicationRecord
    validates :treehouse_id, :reviewer_id, presence: true
    validates :cleanliness_rating, :check_in_rating, :accuracy_rating, :location_rating, :communication_rating, :value_rating, presence: true, inclusion: { in: [1, 2, 3, 4, 5] }

    belongs_to :treehouse
    belongs_to :user,
        class_name: :User,
        foreign_key: :reviewer_id

end
