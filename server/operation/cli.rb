require 'thor'
require_relative './support/system'
require_relative './support/build'

class Cli < Thor
  desc 'build [--output_path <path>]', 'Create WAR file'
  option :output_path
  def build
    Build.execute(options[:output_path])
  end

  desc 'launch', 'Run the server'
  def launch
    System.execute './operation/bin/gradlew -x test build bootRun'
  end

  desc 'test', 'Run the tests'
  def test
    System.execute './operation/bin/gradlew cleanTest test'
  end
end