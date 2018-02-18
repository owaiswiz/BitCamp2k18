class AddHackerearthToMembers < ActiveRecord::Migration[5.0]
  def change
    add_column :members, :hackerearth, :string
  end
end
