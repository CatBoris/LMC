# Dependences:
require "compass"
require "autoprefixer-rails"

# Project configs:
http_path = "."
css_dir = "app/css"
sass_dir = "app/src/scss"
fonts_dir = "app/fonts"
images_dir = "app/images"
javascripts_dir = "app/js"
cache_dir = "app/src/.sass-cache"
sass_options = {:sourcemap => true}
# :expanded or :nested or :compact or :compressed
output_style = :nested
relative_assets = true
line_comments = false

# Autoprefixer configs:
on_stylesheet_saved do |file|
  css = File.read(file)
  File.open(file, 'w') do |io|
    io << AutoprefixerRails.process(css, browsers: ['last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 2'])
  end
end
