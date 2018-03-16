class AdminController < ApplicationController
  def view_travel_reimbursement
    # It's like this because i haz no time
    if current_admin
      send_file(Rails.root.join('tickets').join(params[:file_name]))
    end
  rescue Exception => e
    flash[:alert] = 'File not found'
    redirect_to root_path
  end
end
