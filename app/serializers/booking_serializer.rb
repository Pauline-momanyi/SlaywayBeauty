class BookingSerializer < ActiveModel::Serializer
  attributes :id, :service, :date, :time, :status

  belongs_to :user
end
