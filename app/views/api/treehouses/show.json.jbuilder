json.extract! @treehouse, :id, :name, :description, :owner_id, :address, :lat, :lng, :price
json.booking_ids @treehouse.bookings.map { |booking| booking.id }
json.photoUrls @treehouse.photos.map { |photo| url_for(photo) }