require_relative 'boot'

require 'rails/all'
require "sprockets/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Hifocusgate
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
     config.assets.paths << "#{Rails.root}/app/assets/templates"
     config.assets.paths << "#{Rails.root}/app/assets/fonts"
     config.assets.paths << Rails.root.join("app", "assets", "images")
    # config.serve_static_files = true
    # config.public_file_server.enabled =true
    #config.serve_static_assets = true
  end
end
