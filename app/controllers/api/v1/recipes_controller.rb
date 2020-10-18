class Api::V1::RecipesController < ApiController

  before_action :initialize_contentful_service

  def index
    items = @recipe_service.all.map{|t| {id: t.id, title: t.title, url: t.photo.url}}
    render json: items
  end

  def show
    item = @recipe_service.get(params[:id])
    output = {title: item.title, description: item.description, url: item.photo.
              url, tags: item.tags&.map(&:name)&.join(','), chef: item.chef&.name}
    render json: output
  end

  private

  def initialize_contentful_service
    @recipe_service ||= CdnServices::ContentfulService.new('recipe')
  end
end
