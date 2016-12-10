require 'thor'
require_relative './subcommands/test'
require_relative './support/system'

class Cli < Thor
  desc 'build [--output_path <path>]', 'Transcompile the source once'
  option :output_path
  def build
    output_path = options[:output_path] ? File.expand_path(options[:output_path]) : 'build'
    System.execute "./node_modules/.bin/webpack --debug --output-filename index.js --output-path #{output_path}"
  end

  desc 'watch [--output_path <path>]', 'Continuously transcompile the source'
  option :output_path
  def watch
    output_path = options[:output_path] ? File.expand_path(options[:output_path]) : 'build'
    System.execute "./node_modules/.bin/webpack --debug --watch --output-filename index.js --output-path #{output_path}"
  end

  desc 'test', 'Run the jasmine tests'
  subcommand 'test', Test
end