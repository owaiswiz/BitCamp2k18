class CreateMembers < ActiveRecord::Migration[5.0]
  def change
    create_table :members do |t|
      t.string :name
      t.string :phone
      t.text :college_id
      t.text :ticket
      t.references :team, foreign_key: true

      t.timestamps
    end
  end
end
