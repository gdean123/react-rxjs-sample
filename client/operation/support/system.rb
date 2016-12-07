module System
  def self.execute(command)
    client_directory = File.expand_path(File.dirname(__FILE__) + '/../..')

    Dir.chdir(client_directory) do
      system command
    end
  end
end