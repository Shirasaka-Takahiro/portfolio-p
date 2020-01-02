class AddImageToHomes < ActiveRecord::Migration[6.0]
  def change
    add_column :homes, :image, :string
  end
end
