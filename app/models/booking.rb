# == Schema Information
#
# Table name: bookings
#
#  id           :bigint           not null, primary key
#  treehouse_id :integer          not null
#  guest_id     :integer          not null
#  start_date   :date             not null
#  end_date     :date             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  status       :string           default("PENDING"), not null
#

class Booking < ApplicationRecord
    validates :treehouse_id, :guest_id, :start_date, :end_date, :status, presence: true
    validates :status, inclusion: { in: ["PENDING", "APPROVED", "DENIED"] }
    validate :does_not_overlap_approved_request

    belongs_to :treehouse
    belongs_to :guest,
        class_name: :User,
        foreign_key: :guest_id


    def overlapping_requests
        Booking
            .select("*")
            .where("treehouse_id = #{self.treehouse_id} AND
                (start_date BETWEEN '#{self.start_date}' AND '#{self.end_date}'
                OR end_date BETWEEN '#{self.start_date}' AND '#{self.end_date}')")
    end

    def overlapping_approved_requests
        self.overlapping_requests.where(status: "APPROVED")
    end

    def overlapping_pending_requests
        self.overlapping_requests.where(status: "PENDING")
    end

    def does_not_overlap_approved_request
        !self.overlapping_approved_requests.exists?
    end

    def approve!
        transaction do
            self.update(status: "APPROVED")
            self.overlapping_pending_requests.each do |request|
                request.deny!
            end
        end
    end

    def deny!
        self.update(status: "DENIED")
    end

    def pending?
        self.status == "PENDING"
    end

end
