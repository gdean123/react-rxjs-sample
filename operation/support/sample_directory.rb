module SampleDirectory
  def self.path
    File.expand_path(File.dirname(__FILE__) + '/../..')
  end
end