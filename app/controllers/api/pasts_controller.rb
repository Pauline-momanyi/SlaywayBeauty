class Api::PastsController < ApplicationController

    def index
        # bookings = @current_user.bookings.where(status: false)
        byebug
        render json: bookings    
    end 
    
end
