require 'thor'

class Cli < Thor
  desc 'launch', 'Run the server'
  def launch
    system './gradlew -x test build bootRun'
  end

  desc 'test', 'Run the tests'
  def test
      system './gradlew cleanTest test'
  end
end