class Value < ActiveRecord::Base
  belongs_to :sensor

  def self.find_last(minutes)
    where(:created_at => minutes.minutes.ago..1.minutes.from_now)
  end

end
