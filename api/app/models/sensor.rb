class Sensor < ActiveRecord::Base
  belongs_to :location
  def viktor
    "#{tagname} - (#{id})"
  end
end
