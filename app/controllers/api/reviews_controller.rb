class Api::ReviewsController < ApplicationController

    def index
        @reviews = Review.where(treehouse_id: params[:treehouse_id])
        render :index
    end

    def show
        @review = Booking.find(params[:id])
        render :show
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            @sucess = "Review posted!"
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update

    end

    def destroy
        @review = Review.find(params[:id])
        @success = "Review deleted"

        if @review.destroy
            render :show
        end
    end

    private
    def review_params
        params.require(:review).permit(:treehouse_id, :reviewer_id, :cleanliness_rating, :check_in_rating, :accuracy_rating, :location_rating, :communication_rating, :value_rating)
    end

end