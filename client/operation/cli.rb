class Cli < Thor
  desc 'watch', 'Continuously transcompile the source'
  def watch
    system './node_modules/.bin/webpack -d --watch'
  end

  desc 'build', 'Transcompile the source once'
  def build
    system './node_modules/.bin/webpack -p'
  end

  desc 'test', 'Run the jasmine tests on localhost:8888'
  def test
    system './node_modules/gulp/bin/gulp.js test'
  end
end