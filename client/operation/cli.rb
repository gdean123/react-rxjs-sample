require 'thor'
require_relative './subcommands/test'
require_relative './support/system'

class Cli < Thor
  desc 'watch [--output_path <path>]', 'Continuously transcompile the source'
  option :output_path
  def watch
    output_path = options[:output_path] ? File.expand_path(options[:output_path]) : 'build'
    System.execute "./node_modules/.bin/webpack -d --watch --output-filename index.js --output-path #{output_path}"
  end

  desc 'build', 'Transcompile the source once'
  def build
    System.execute './node_modules/.bin/webpack -p'
  end

  desc 'test', 'Run the jasmine tests'
  subcommand 'test', Test
end