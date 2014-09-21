# Dependences:
require "compass"
require "autoprefixer-rails"

# Project configs:
http_path = "."
css_dir = "css"
sass_dir = "src/scss"
fonts_dir = "fonts"
images_dir = "images"
javascripts_dir = "js"
cache_dir = "src/.sass-cache"
sass_options = {:sourcemap => true}
# :expanded or :nested or :compact or :compressed
output_style = :nested
relative_assets = true
line_comments = false

# Autoprefixer configs:
on_stylesheet_saved do |file|
  css = File.read(file)
  File.open(file, 'w') do |io|
    io << AutoprefixerRails.process(css, browsers: ['> 1%', 'last 3 versions', 'Firefox ESR', 'Opera 12.1'])
  end
end
