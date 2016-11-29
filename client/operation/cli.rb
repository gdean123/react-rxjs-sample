class Cli < Thor
  desc 'watch', 'continuously transcompile the source'
  def watch
    system './node_modules/.bin/webpack -d --watch'
  end

  desc 'build', 'transcompile the source once'
  def build
    system './node_modules/.bin/webpack -p'
  end
end