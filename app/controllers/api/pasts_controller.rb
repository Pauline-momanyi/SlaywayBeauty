class Api::PastsController < ApplicationController

    def index
        user = User.find_by(id: session[:user_id])
        bookings = user.bookings.where(status: false)
        # render json: {mess: "hey"}
        # byebug
        render json: bookings    
    end 
    
end
