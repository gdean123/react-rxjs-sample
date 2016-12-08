module Build
  def self.execute(output_path)
    System.execute "./operation/bin/gradlew clean assemble #{self.parameters(output_path)}"
  end

  private

  def self.parameters(output_path)
    if output_path
      return "-P warOutputDirectory=#{File.expand_path(output_path)}"
    else
      return ''
    end
  end
end