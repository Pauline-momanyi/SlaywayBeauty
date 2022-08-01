class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.string :service
      t.string :date
      t.string :time
      t.string :user_id

      t.timestamps
    end
  end
end
