class GameSerializer < ActiveModel::Serializer
    attributes :id, :title, :length, :has_played
    belongs_to :genre
  end