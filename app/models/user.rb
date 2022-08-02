class User < ApplicationRecord
    has_secure_password

    has_many :bookings

    has_many :reviews

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true
    validates :phone, presence: true
    validates :password, presence: true

end
