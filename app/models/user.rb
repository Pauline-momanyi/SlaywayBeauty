class User < ApplicationRecord
    has_secure_password

    has_many :bookings

    has_many :reviews

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true
    validates :phone, presence: true,  length: { maximum: 10 }, numericality: { only_integer: true }
    validates :password, presence: true

end
