# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

demo = User.create(
  username: "Demo",
  password: "password",
  bio: "Hello, World!",
  img_url: "profile/default.jpg"
)

butterpup = User.create(
  username: "butterpup",
  password: "poopy",
  bio: "🐶",
  img_url: "profile/happy_butter.png"
)

lifeatappacademy = User.create(
  username: "lifeatappacademy",
  password: "getbacktowork",
  bio: "Get back to work!",
  img_url: "profile/corgi.jpg"
)

photo1 = Photo.create(
  img_url: "Shuttr/DSCF5429.jpg",
  title: "Chilling in the backyard",
  description: "I need a haircut."
)

photo2 = Photo.create(
  img_url: "Shuttr/DSCF6714.jpg",
  title: "Chainsmokers",
  description: "Chris and Thai",
  owner_id: lifeatappacademy.id
)

photo3 = Photo.create(
  img_url: "Shuttr/DSCF6700.jpg",
  title: "Carmen",
  owner_id: lifeatappacademy.id
)

photo4 = Photo.create(
  img_url: "Shuttr/DSCF6849.jpg",
  title: "Boys of North Beach",
  owner_id: lifeatappacademy.id
)

photo5 = Photo.create(
  img_url: "Shuttr/DSCF6788.jpg",
  title: "Smoke Break",
  owner_id: lifeatappacademy.id
)
