class RecipesController < ApplicationController

  before_action :initialize_contentful_service

  def index
    @items = @recipe_service.all
  end

  def show
    @item = @recipe_service.get(params[:id])
  end

  private

  def initialize_contentful_service
    @recipe_service ||= CdnServices::ContentfulService.new('recipe')
  end
end
