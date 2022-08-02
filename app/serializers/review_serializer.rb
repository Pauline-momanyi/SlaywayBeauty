class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :service, :review, :created_at
  belongs_to :user
end
