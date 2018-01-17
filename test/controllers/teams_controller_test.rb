require 'test_helper'

class TeamsControllerTest < ActionDispatch::IntegrationTest
  test "should get register" do
    get teams_register_url
    assert_response :success
  end

  test "should get update" do
    get teams_update_url
    assert_response :success
  end

  test "should get submit_abstract" do
    get teams_submit_abstract_url
    assert_response :success
  end

end
