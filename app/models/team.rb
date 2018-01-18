class Team < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  attr_accessor :team_name, :leader_name, :leader_phone, :member_1_name, :member_1_phone, :member_2_name, :member_2_phone, :member_3_name, :member_3_phone

end
