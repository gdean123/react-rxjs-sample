require 'thor'
require_relative './support/system'

class Cli < Thor
  desc 'build [--output_path <path>]', 'Create WAR file'
  option :output_path
  def build
    output_path = options[:output_path] ? File.expand_path(options[:output_path]) : 'build/libs'
    System.execute "./operation/bin/gradlew clean assemble -P warOutputDirectory=#{output_path}"
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