class BookingsController < ApplicationController
    before_action :authorize
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
       bookings = @current_user.bookings.all
       render json: bookings
    
    end 

    def create        
        booking = @current_user.bookings.create!(booking_params)
        # booking = User.first.bookings.create!(booking_params)
        # booking = Booking.create!(booking_params)
        # byebug
        render json: booking, status: :created

    end 

    private
    def booking_params 
        params.permit(:service, :date, :time)
    end


    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end
