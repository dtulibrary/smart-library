class CreateValues < ActiveRecord::Migration
  def change
    create_table :values do |t|
      t.integer :temp
      t.integer :sound
      t.integer :light
      t.references :sensor, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
