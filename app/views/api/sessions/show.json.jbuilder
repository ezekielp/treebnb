json.extract! @user, :id, :email, :first_name, :last_name
json.bookingIds @user.bookings.map { |booking| booking.id }