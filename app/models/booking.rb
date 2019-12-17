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
            .where.not(id: self.id)
            .where(treehouse_id: self.treehouse_id)
            .where('start_date BETWEEN :start_date AND :end_date
                OR end_date BETWEEN :start_date AND :end_date',start_date: start_date, end_date: end_date)
    end

    def overlapping_approved_requests
        self.overlapping_requests.where('status = \'APPROVED\'')
    end

    def overlapping_pending_requests
        self.overlapping_requests.where('status = \'PENDING\'')
    end

    def does_not_overlap_approved_request
        if !overlapping_approved_requests.empty?
            errors[:status] << "Booking conflicts with existing reservation"
            self.update(status: 'DENIED')
        end

        # !self.overlapping_approved_requests.exists?
    end

    def approve!
        transaction do
            self.update(status: 'APPROVED')
            self.overlapping_pending_requests.each do |request|
                request.update(status: 'DENIED')
            end
        end
    end

    def deny!
        self.update(status: "DENIED")
    end

    def pending?
        self.status == "PENDING"
    end

    def dates
        (self.start_date..self.end_date).to_a
    end

end
