class Api::AdminsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    def index
        allbookings = Booking.all 
        render json: allbookings
    end 

    def update 
        booking = Booking.find_by(id: params[:id])
        booking.update(status: false)
        render json: booking
    end

    private 
    def render_not_found
        render json: { error: "Booking not found" }, status: :not_found
    end
end
