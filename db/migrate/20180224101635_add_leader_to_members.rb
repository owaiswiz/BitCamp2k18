class AddLeaderToMembers < ActiveRecord::Migration[5.0]
  def change
    add_column :members, :leader, :boolean
  end
end
