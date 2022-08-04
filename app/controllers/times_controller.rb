class TimesController < ApplicationController
    def index 
        # byebug
        times = Booking.where service: params[:service], date: params[:date], status: true
        # times = Booking.where(service: 'Hair')

        render json: times.to_json(only: [:time])
    end
end
