require 'securerandom'

module Jekyll
  class GitHub < Liquid::Tag
    def initialize(tag_name, opts, tokens)
      super
      options = opts.split('/')
      @username = options[0].strip
      @reponame = options[1].strip
    end
    def render(context)
      %(<b id="#{get_id}" class="#{get_class}" data-githubuser="#{@username}" data-githubrepo="#{@reponame}"></b>)
    end
  end
  class GitHubStars < GitHub
    def get_class
      "github-stars"
    end
    def get_id
      "githubstars" + SecureRandom.hex
    end
  end
end

Liquid::Template.register_tag('github_stars', Jekyll::GitHubStars)