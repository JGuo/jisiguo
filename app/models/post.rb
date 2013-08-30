# == Schema Information
#
# Table name: posts
#
#  id                 :integer          not null, primary key
#  title              :string(255)
#  body               :text
#  date               :datetime
#  tag                :string(255)
#  published          :boolean
#  created_at         :datetime
#  updated_at         :datetime
#  slug               :string(255)
#  photo_file_name    :string(255)
#  photo_content_type :string(255)
#  photo_file_size    :integer
#  photo_updated_at   :datetime
#  photo              :string(255)
#

class Post < ActiveRecord::Base
	extend FriendlyId
	friendly_id :title, use: [:slugged, :finders, :history]

	def should_generate_new_friendly_id?
		new_record? || title_changed?
	end

	def post_example
    	return "Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb."
 	end
end
