class Genre < ApplicationRecord
    validates :name, uniqueness: true 
    has_many :games, dependent: :destroy
end
