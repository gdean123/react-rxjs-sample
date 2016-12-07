require 'thor'
require_relative '../support/system'

class Test < Thor
  desc 'headless', 'Run the jasmine tests headlessly'
  def headless
    System.execute './node_modules/gulp/bin/gulp.js test-headless'
  end

  desc 'browser', 'Run the jasmine tests on localhost:8888'
  def browser
    System.execute './node_modules/gulp/bin/gulp.js test-browser'
  end
end