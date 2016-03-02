class Value < ActiveRecord::Base
  belongs_to :sensor

  def self.find_last(d)
    where(:created_at => 100.minutes.ago..1.minutes.from_now)
  end

end
