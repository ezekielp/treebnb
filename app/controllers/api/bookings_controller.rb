class Api::BookingsController < ApplicationController

    def index
        @bookings = current_user.bookings
        render :index
    end

    def show
        @booking = Booking.find(params[:id])
        render :show
    end
    
    def create
        @booking = Booking.new(booking_params)
        # debugger
        if @booking.save
            @booking.approve!
            @success = "Reservation successful!"
            render :show
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end
    
    def update
        @booking = Booking.update(booking_params)
        if @booking
            render :show
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @booking = Booking.find(params[:id])
        @success = "Reservation successfully canceled"

        if @booking.destroy
            render :show
        end
    end

    private
    def booking_params
        params.require(:booking).permit(:treehouse_id, :guest_id, :start_date, :end_date)
    end

end