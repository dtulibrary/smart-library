ActiveAdmin.register Value do

# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params :temp, :sound, :light, :sensor_id
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end
index do
  selectable_column
  column :id
  column :temp
  column :sound
  column :light
  column :created_at
  column :updated_at
  column "Sensor" do |x|
    link_to x.sensor_id, admin_sensor_path(x.sensor_id)
  end
  
end

end
