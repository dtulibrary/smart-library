# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Location.delete_all
Location.create(name:'East');
Location.create(name:'West');
Location.create(name:'North');
Location.create(name:'South');

Sensor.delete_all
8.times do |s|
  Sensor.create!(
    tagname:"Sensor#{s}", 
    active: rand(0..1),
    location: Location.offset(rand(Location.count)).first,
    install_date: rand(3.years).seconds.ago
  )
end

Value.delete_all
35.times do |v|
  Value.create!(created_at: rand(1..160).minutes.ago, temp:rand(18..25), sound:rand(25..85), light:rand(400..800), sensor: Sensor.offset(rand(Sensor.count)).first);
end



