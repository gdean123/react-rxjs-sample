require 'thor'

class Test < Thor
  desc 'headless', 'Run the jasmine tests headlessly'
  def headless
    system './node_modules/gulp/bin/gulp.js test-headless'
  end

  desc 'browser', 'Run the jasmine tests on localhost:8888'
  def browser
    system './node_modules/gulp/bin/gulp.js test-browser'
  end
end