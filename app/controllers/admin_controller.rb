class AdminController < ApplicationController
  def view_travel_reimbursement
    # It's like this because i haz no time
    if current_admin
      encoded_data = Team.find(params[:team_id]).leader.ticket
      file_type = /.*?:.*?\/(.*?);/.match(encoded_data).captures.first
      content_type = /.*?:(.*?\/.*?);/.match(encoded_data)
      raw_data = Base64.decode64(encoded_data.split(';base64,').last).html_safe
      send_data raw_data, type: content_type, filename: "ticket_#{params[:team_id]}.#{file_type}"
    end
  rescue Exception => e
    flash[:alert] = 'File not found'
    redirect_to root_path
  end
end
