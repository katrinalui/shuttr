# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

demo = User.create(
  username: "Demo",
  password: "password",
  bio: "Hello, World!",
  img_url: "http://res.cloudinary.com/shuttr/image/upload/v1505847469/default_profile_ig2uvi.jpg"
)
