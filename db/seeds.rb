# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

# Users
demo = User.create(
  username: "guest",
  password: "password",
  bio: "Hello, World!",
  img_url: "profile/photographer.jpg"
)

butterpup = User.create(
  username: "butterpup",
  password: "happypup",
  bio: "🐶",
  img_url: "profile/happy_butter.png"
)

lifeatappacademy = User.create(
  username: "lifeatappacademy",
  password: "getbacktowork",
  bio: "Get back to work!",
  img_url: "profile/corgi.jpg"
)

chrisy = User.create(
  username: "chrisy",
  password: "howpeculiar",
  bio: "How peculiar! Very interesting!",
  img_url: "profile/chrisy.jpg"
)

# Photos
photo1 = Photo.create(
  img_url: "Shuttr/8642455812.jpg",
  title: "Stranger in Oakland",
  owner_id: demo.id
)

photo2 = Photo.create(
  img_url: "Shuttr/aurora.jpg",
  title: "Aurora",
  description: "Thank you for the warm welcome, Iceland.",
  owner_id: chrisy.id
)

photo3 = Photo.create(
  img_url: "Shuttr/35236694256.jpg",
  title: "Stranger in Taipei",
  owner_id: demo.id
)

photo4 = Photo.create(
  img_url: "Shuttr/15036232670.jpg",
  title: "Who's there?",
  owner_id: chrisy.id
)

photo5 = Photo.create(
  img_url: "Shuttr/butter_sunset.jpg",
  title: "Such wow",
  owner_id: butterpup.id
)

photo6 = Photo.create(
  img_url: "Shuttr/15366293662.jpg",
  title: "Stranger in Seoul",
  owner_id: demo.id
)

photo7 = Photo.create(
  img_url: "Shuttr/15036104159.jpg",
  title: "Women in hanbok at Unhyeongung",
  description: "Happened upon this little scene while exploring Seoul.",
  owner_id: chrisy.id
)

photo8 = Photo.create(
  img_url: "Shuttr/32181898600.jpg",
  title: "Stranger in Hong Kong",
  owner_id: demo.id
)

photo9 = Photo.create(
  img_url: "Shuttr/DSCF6849.jpg",
  title: "Boys of North Beach",
  owner_id: lifeatappacademy.id
)

photo10 = Photo.create(
  img_url: "Shuttr/34046762616.jpg",
  title: "Stranger in Angkor Wat",
  owner_id: demo.id
)

photo11 = Photo.create(
  img_url: "Shuttr/DSCF5974.jpg",
  title: "Kenta",
  description: "Reassessing life.",
  owner_id: lifeatappacademy.id
)

photo12 = Photo.create(
  img_url: "Shuttr/DSCF6788.jpg",
  title: "Smoke Break",
  owner_id: lifeatappacademy.id
)

photo13 = Photo.create(
  img_url: "Shuttr/DSCF6368.jpg",
  title: "Andres",
  description: "Cool dude.",
  owner_id: lifeatappacademy.id
)

photo14 = Photo.create(
  img_url: "Shuttr/93f68e1970.jpg",
  title: "Stranger in San Francisco",
  owner_id: demo.id
)

photo15 = Photo.create(
  img_url: "Shuttr/jokulsarlon.jpg",
  title: "Jökulsárlón",
  description: "Ice ice baby",
  owner_id: chrisy.id
)

photo16 = Photo.create(
  img_url: "Shuttr/DSCF6714.jpg",
  title: "Chainsmokers",
  description: "Chris and Thai",
  owner_id: lifeatappacademy.id
)

photo17 = Photo.create(
  img_url: "Shuttr/DSCF6700.jpg",
  title: "Carmen",
  owner_id: lifeatappacademy.id
)

photo18 = Photo.create(
  img_url: "Shuttr/DSCF6961.jpg",
  title: "Tommy and Rebekah",
  owner_id: lifeatappacademy.id
)

photo19 = Photo.create(
  img_url: "Shuttr/DSCF5429.jpg",
  title: "Chilling in the backyard",
  description: "I need a haircut",
  owner_id: butterpup.id
)

photo20 = Photo.create(
  img_url: "Shuttr/DSCF6992.jpg",
  title: "Alison",
  description: "Taking a break from coding.",
  owner_id: lifeatappacademy.id
)

photo21 = Photo.create(
  img_url: "Shuttr/37022078140.jpg",
  title: "AJ",
  owner_id: lifeatappacademy.id
)

photo22 = Photo.create(
  img_url: "Shuttr/37248654632.jpg",
  title: "Michael",
  description: "Chilling on Tehama.",
  owner_id: lifeatappacademy.id
)

photo23 = Photo.create(
  img_url: "Shuttr/36592700274.jpg",
  title: "Jesse",
  description: "Kill them with kindness.",
  owner_id: lifeatappacademy.id
)

# Albums
album1 = Album.create(
  title: "They're pretty cool, I guess",
  owner_id: lifeatappacademy.id
)

album2 = Album.create(
  title: "Traveling Strangers",
  description: "Strangers from my travels.",
  owner_id: demo.id
)

album3 = Album.create(
  title: "C'est Moi",
  description: "It's me.",
  owner_id: butterpup.id
)

album4 = Album.create(
  title: "Seoul",
  description: "The homeland.",
  owner_id: chrisy.id
)

album5 = Album.create(
  title: "Iceland",
  owner_id: chrisy.id
)

# Add photos to albums
AlbumPhoto.create(
  album_id: album1.id,
  photo_id: photo9.id
)

AlbumPhoto.create(
  album_id: album1.id,
  photo_id: photo11.id
)

AlbumPhoto.create(
  album_id: album1.id,
  photo_id: photo12.id
)

AlbumPhoto.create(
  album_id: album1.id,
  photo_id: photo13.id
)

AlbumPhoto.create(
  album_id: album1.id,
  photo_id: photo16.id
)

AlbumPhoto.create(
  album_id: album1.id,
  photo_id: photo17.id
)

AlbumPhoto.create(
  album_id: album1.id,
  photo_id: photo18.id
)

AlbumPhoto.create(
  album_id: album1.id,
  photo_id: photo20.id
)

AlbumPhoto.create(
  album_id: album1.id,
  photo_id: photo21.id
)

AlbumPhoto.create(
  album_id: album1.id,
  photo_id: photo22.id
)

AlbumPhoto.create(
  album_id: album1.id,
  photo_id: photo23.id
)

AlbumPhoto.create(
  album_id: album2.id,
  photo_id: photo10.id
)

# Set creation date to random date
Photo.all.each do |photo|
  photo.created_at = Date.today - rand(10).days
  photo.save
end
