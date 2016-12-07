require 'thor'
require_relative './support/system'

class Cli < Thor
  desc 'launch', 'Run the server'
  def launch
    System.execute './operation/bin/gradlew -x test build bootRun'
  end

  desc 'test', 'Run the tests'
  def test
    System.execute './operation/bin/gradlew cleanTest test'
  end
end