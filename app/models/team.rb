class Team < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :members, inverse_of: :team
  accepts_nested_attributes_for :members, reject_if: :all_blank

  validates :name, :college_name, presence: true

  after_create do
    # I didn't want this
    team_id = "BT18" + ( "%04d" % self.id)
    self.update_column(:team_id, team_id)
  end

  def leader
    self.members.where(leader: true)[0] || self.members.first
  end

  def ticket_file
    self.leader.ticket || ''
  end
end
