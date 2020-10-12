module CdnServices
  class ContentfulService

    def initialize(content_type)
      @content_type = content_type || "recipe"
      @client ||= Contentful::Client.new(
        space: space_id,
        access_token: access_token,
        dynamic_entries: :auto,
        raise_errors: true,
        raise_for_empty_fields: false
      )
    end

    def get(id)
      @client.entry(id, include: 2)
    end

    def all
      @client.entries(content_type: @content_type)
    end

    private

    def space_id
      ENV['SPACE_ID']
    end

    def access_token
      ENV['ACCESS_TOKEN']
    end
  end
end
