class Teams::DashboardController < ApplicationController
  before_action :authenticate_team!
  def index
  end
end
