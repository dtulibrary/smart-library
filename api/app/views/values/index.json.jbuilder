json.array!(@values) do |values|
  json.extract! values, :id, :temp, :sound, :light, :sensor_id
  json.url values_url(values, format: :json)
end
