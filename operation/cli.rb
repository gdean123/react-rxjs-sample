require 'thor'
require_relative './support/system'
require_relative './support/sample_directory'

class Cli < Thor
  desc 'launch', 'Run the server and watch Javascript changes'
  def launch
    System.execute "foreman start --procfile=./operation/Procfile --root=#{SampleDirectory.path}"
  end
end