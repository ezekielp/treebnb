# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.create(email: "annie_smith@magictreehouse.com", first_name: "Annie", last_name: "Smith", password: "Merlin")

Treehouse.destroy_all

treehouse_1 = Treehouse.create(name: "Treehouse", description: "An amazing treehouse", owner_id: "1", address: "Narnia", lat: "31.24", lng: "-62.8", price: "13")

file = open('https://treebnb-seeds.s3.amazonaws.com/treehouse-big-1.jpg')

treehouse_1.photos.attach(io: file, filename: 'treehouse-big-1.jpg')


Treehouse.create(name: "Treehouse 2", description: "An amazing treehouse", owner_id: "2", address: "Middle Earth", lat: "25.52", lng: "-77.3", price: "950")
Treehouse.create(name: "Treehouse 3", description: "An amazing treehouse", owner_id: "3", address: "Chicago", lat: "20", lng: "-82", price: "443")
Treehouse.create(name: "Yggdrasil", description: "An amazing treehouse", owner_id: "1", address: "Nine Worlds", lat: "62.7", lng: "7.9", price: "6")
Treehouse.create(name: "The Magic Tree House", description: "An amazing treehouse", owner_id: "2", address: "Fog Creek, PA", lat: "22", lng: "-84", price: "717")
Treehouse.create(name: "What a Treehouse I mean", description: "An amazing treehouse", owner_id: "3", address: "Narnia", lat: "23", lng: "-85", price: "1300")
Treehouse.create(name: "Incredible Treehouse", description: "An amazing treehouse", owner_id: "1", address: "Narnia", lat: "24", lng: "-86", price: "30")
Treehouse.create(name: "The best evr Treehouse", description: "An amazing treehouse", owner_id: "2", address: "Narnia", lat: "25", lng: "-87", price: "1")
