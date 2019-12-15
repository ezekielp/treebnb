@bookings.each do |booking|
    json.set! booking.id do
        json.extract! booking, :id, :treehouse_id, :guest_id, :start_date, :end_date, :status
    end
end
