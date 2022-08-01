class UsersController < ApplicationController
    # skip_before_action :authorize, only: :create
    def create 
        user = User.create(user_params)
        if user.valid? 
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end 

    def show 
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :created
        else
            render json: "Not authorised", status: :unauthorized
        end
        # render json: @current_user
        
    end

    # def create
    #     user = user.find_by(id: session[:user_id])
    #     booking = user.bookings.create!(booking_params)
    #     render json: booking, status: :created
    # end

    private 
    def user_params
        params.permit(:username, :email, :phone, :password, :password_confirmation)
    end
end
