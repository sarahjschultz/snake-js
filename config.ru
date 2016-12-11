use Rack::Static,
  :urls => ["/stylesheets", "/images", "/js", "/about.html"],
  :root => "public"

run Rack::Directory.new("public")

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}
