# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Todo.destroy_all
Event.destroy_all
User.destroy_all


@admin = User.create!(username: 'John', email: 'John1@gmail.com', password: '123456')

puts "#{User.count} users created"


  Todo.create!(title: "Groceries", content: "lorem ipsum", user: @admin)
  Todo.create!(title: "Chores", content: "lorem ipsum", user: @admin)
  Todo.create!(title: "Homework", content: "lorem ipsum", user: @admin)
  Todo.create!(title: "Goals", content: "lorem ipsum", user: @admin)
  Todo.create!(title: "Workouts", content: "lorem ipsum", user: @admin)
  


puts "#{Todo.count} todos created"

Event.create!(title: 'Wedding', content: "lorem ipsum", user: @admin)
Event.create!(title: 'Interview', content: "lorem ipsum", user: @admin)
Event.create!(title: 'Meeting', content: "lorem ipsum", user: @admin)
Event.create!(title: 'Gathering', content: "lorem ipsum", user: @admin)
Event.create!(title: 'Picnic', content: "lorem ipsum", user: @admin)

puts "#{Event.count} events created"


