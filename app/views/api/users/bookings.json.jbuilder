@bookings.each do |booking|
    json.set! booking.id do
        json.extract! booking, :id, :treehouse_id, :guest_id, :start_date, :end_date, :status
        json.startDateMonth @booking.start_date.strftime("%B")
        json.startDateDay @booking.start_date.strftime("%e")
        json.endDateMonth @booking.end_date.strftime("%B")
        json.endDateDay @booking.end_date.strftime("%e")
        json.endDateYear @booking.end_date.strftime("%Y")
        json.dates @booking.dates
        json.photos booking.treehouse.photos.map { |photo| url_for(photo) }
        if @success
            json.success @success
        end
    end
end