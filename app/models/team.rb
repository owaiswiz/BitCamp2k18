class Team < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :members, inverse_of: :team
  accepts_nested_attributes_for :members

  validates :name, :college_name, presence: true
end
