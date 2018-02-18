class AddGithubAndLinkedinAndProjectsToMembers < ActiveRecord::Migration[5.0]
  def change
    add_column :members, :github, :string
    add_column :members, :linkedin, :string
    add_column :members, :projects, :text
  end
end
