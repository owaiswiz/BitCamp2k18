require 'test_helper'

class Teams::DashboardControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get teams_dashboard_index_url
    assert_response :success
  end

end
