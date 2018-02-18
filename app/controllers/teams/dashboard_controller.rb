class Teams::DashboardController < ApplicationController
  before_action :authenticate_team!
  def index
    @member = current_team.members.new
  end

  def add_member
    member = params[:member]

    if !member[:name].blank? and current_team.members.length < 4
      member[:college_id], member[:ticket] = helpers.get_encoded_files(member[:college_id], member[:ticket])
      current_team.members.create(name: member[:name], phone: member[:phone], github: member[:github], linkedin: member[:linkedin], hackerearth: member[:hackerearth], projects: member[:projects], college_id: member[:college_id], ticket: member[:ticket])
    end

    redirect_to teams_dashboard_index_path
  end
end
