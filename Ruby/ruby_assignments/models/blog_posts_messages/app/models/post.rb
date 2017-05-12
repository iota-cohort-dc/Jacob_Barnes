class Post < ApplicationRecord
  has_many :messages, dependent: :destroy
  belongs_to :blog
  validates :content, :title, presence: true
  validates :title, length: { minimum: 7 }
end
