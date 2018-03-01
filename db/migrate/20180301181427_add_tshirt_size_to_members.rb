class AddTshirtSizeToMembers < ActiveRecord::Migration[5.0]
  def change
    add_column :members, :tshirt_size, :string
  end
end
