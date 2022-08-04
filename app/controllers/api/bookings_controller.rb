class Api::BookingsController < ApplicationController
    before_action :authorize
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index
       bookings = @current_user.bookings.where(status: true)
       render json: bookings    
    end 

    def create        
        booking = @current_user.bookings.create!(booking_params)
        # booking = User.first.bookings.create!(booking_params)
        # booking = Booking.create!(booking_params)
        # byebug
        render json: booking, status: :created
    end 

    def update 
        booking = Booking.find_by(id: params[:id])
        booking.update(status: false)
        render json: booking
    end 

    def destroy 
        booking = Booking.find_by(id: params[:id])
        booking.destroy
        head :no_content
    end

    private
    def booking_params 
        params.permit(:service, :date, :time)
    end


    def render_unprocessable_entity_response(exception)
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found 
        render json: {errors: "not found"}, status: :not_found
    end
end
