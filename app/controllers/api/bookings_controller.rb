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
        if @booking.save
            @booking.approve!
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
        Booking.destroy(params[:id])
        render :index
    end

    private
    def booking_params
        params.require(:booking).permit(:treehouse_id, :guest_id, :start_date, :end_date)
    end

end