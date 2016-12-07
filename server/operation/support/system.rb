module System
  def self.execute(command)
    server_directory = File.expand_path(File.dirname(__FILE__) + '/../..')

    Dir.chdir(server_directory) do
      system command
    end
  end
end