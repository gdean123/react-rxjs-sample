require_relative './sample_directory'

module System
  def self.execute(command)
    Dir.chdir(SampleDirectory.path) do
      system command
    end
  end
end