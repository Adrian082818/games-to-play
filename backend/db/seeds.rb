# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

genres = Genre.create([
    { name: "Thriller" },
    { name: "Mystery" },
    { name: "Horror" },
    { name: "RPG" }
])

games = Game.create([
    {title: "The Witcher", length: 100, has_played: true, genre_id: 1},
    {title: "Bloodborne", length: 50, has_played: true, genre_id: 2},
    {title: "God Of War", length: 100, has_played: true, genre_id: 3},
    {title: "Sekiro", length: 100, has_played: true, genre_id: 4}
])

