json.array!(@sensors) do |sensor|
  json.extract! sensor, :id, :tagname, :active, :install_date, :location_id
  json.url sensor_url(sensor, format: :json)
end
