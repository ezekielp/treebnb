json.extract! @user, :id, :email, :first_name, :last_name
json.booking_ids @user.bookings.map { |booking| booking.id }