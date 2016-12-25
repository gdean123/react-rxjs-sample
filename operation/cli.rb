require 'thor'
require_relative './support/system'
require_relative './support/sample_directory'

class Cli < Thor
  desc 'build', 'Create a WAR file to distribute'
  def build
    System.execute './client/operation/bin/client build --output-path ./server/src/main/resources/static'
    System.execute './server/operation/bin/server build --output-path ./build'
  end

  desc 'launch', 'Build the Javascript and then run the server'
  def launch
    spawn './client/operation/bin/client launch'
    spawn './server/operation/bin/server launch'
    Process.waitall
  end
end