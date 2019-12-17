json.extract! @booking, :id, :treehouse_id, :guest_id, :start_date, :end_date, :status
json.startDateMonth @booking.start_date.strftime("%B")
json.startDateYear @booking.start_date.strftime("%Y")
json.dates @booking.dates
json.location @booking.treehouse.address
json.photos @booking.treehouse.photos.map { |photo| url_for(photo) }