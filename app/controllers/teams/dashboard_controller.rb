class Teams::DashboardController < ApplicationController
  before_action :authenticate_team!
  def index
    @member = current_team.members.new
  end

  def travel_reimbursement

  end

  def apply_travel_reimbursement
    ticket_file = params[:member][:ticket]
    new_ticket_file = nil
    if ticket_file and ticket_file.instance_of? ActionDispatch::Http::UploadedFile
      encoded_ticket_file = Base64.strict_encode64 ticket_file.read
      new_ticket_file = 'data:' + ticket_file.content_type + ';base64,' + encoded_ticket_file
    end
    current_team.leader.update_attributes(ticket: new_ticket_file)
    flash[:notice] = "You've successfully applied for travel reimbursement."
    redirect_to teams_dashboard_index_path
  rescue 
    flash[:error] = 'An error occurred while uploading your image. Please contact us'.
    redirect_to teams_dashboard_travel_reimbursement_path
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
