require 'test_helper'

class SendmailsControllerTest < ActionDispatch::IntegrationTest
  test "should get mailing" do
    get sendmails_mailing_url
    assert_response :success
  end

end
