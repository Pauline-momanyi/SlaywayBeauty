class BookingSerializer < ActiveModel::Serializer
  attributes :service, :date, :time
end
