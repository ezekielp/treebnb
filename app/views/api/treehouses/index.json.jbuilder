@treehouses.each do |treehouse|
    json.set! treehouse.id do
        json.extract! treehouse, :id, :name, :description, :owner_id, :address, :lat, :lng, :price
        json.bookingIds treehouse.bookings.map { |booking| booking.id }
        json.photoUrls treehouse.photos.map { |photo| url_for(photo) }
    end
end