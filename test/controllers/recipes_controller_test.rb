require 'test_helper'

class RecipesControllerTest < ActionDispatch::IntegrationTest
  test "the index view" do
    get "/recipes/"
    assert_response :success
    assert_select 'p', 'Recipe Album'
    assert true
  end

  test "the show view" do
    get "/recipes/id1"
    assert_response :success
    assert_select 'p', 'Recipe View'
    assert true
  end
end
