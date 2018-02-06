class AddTeamIdToTeams < ActiveRecord::Migration[5.0]
  def change
    add_column :teams, :team_id, :string
  end
end
