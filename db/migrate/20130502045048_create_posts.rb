class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.text :body
      t.datetime :date
      t.string :tag
      t.boolean :published

      t.timestamps
    end
  end
end
