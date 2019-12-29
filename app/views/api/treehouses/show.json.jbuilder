json.extract! @treehouse, :id, :name, :description, :owner_id, :address, :lat, :lng, :price
json.rating @treehouse.average_overall_rating
json.cleanliness_rating @treehouse.average_cleanliness_rating
json.check_in_rating @treehouse.average_check_in_rating
json.accuracy_rating @treehouse.average_accuracy_rating
json.location_rating @treehouse.average_location_rating
json.communication_rating @treehouse.average_communication_rating
json.value_rating @treehouse.average_value_rating
json.bookingIds @treehouse.bookings.map { |booking| booking.id }
json.reviewIds @treehouse.reviews.map { |review| review.id }
json.photoUrls @treehouse.photos.map { |photo| url_for(photo) }