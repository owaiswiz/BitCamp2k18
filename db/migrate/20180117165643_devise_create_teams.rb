# frozen_string_literal: true

class DeviseCreateTeams < ActiveRecord::Migration[5.0]
  def change
    create_table :teams do |t|
      ## Database authenticatable
      t.string :email,              null: false, default: ""
      t.string :encrypted_password, null: false, default: ""

      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at

      ## Rememberable
      t.datetime :remember_created_at

      ## Confirmable
      # t.string   :confirmation_token
      # t.datetime :confirmed_at
      # t.datetime :confirmation_sent_at
      # t.string   :unconfirmed_email # Only if using reconfirmable

      ## Lockable
      # t.integer  :failed_attempts, default: 0, null: false # Only if lock strategy is :failed_attempts
      # t.string   :unlock_token # Only if unlock strategy is :email or :both
      # t.datetime :locked_at

      t.string :name
      t.string :college_name
      t.text :abstract

      t.timestamps null: false
    end

    add_index :teams, :email,                unique: true
    add_index :teams, :reset_password_token, unique: true
    # add_index :teams, :confirmation_token,   unique: true
    # add_index :teams, :unlock_token,         unique: true
  end
end
