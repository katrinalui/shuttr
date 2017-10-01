# ![Shuttr](http://res.cloudinary.com/shuttr/image/upload/v1506723405/shuttr_logo_grey_sywlf7.png)

[Shuttr](http://shuttr.katrinalui.com) is a web application inspired by Flickr that allows users to view and share photos. Shuttr allows users to upload their own photos, create albums, and explore photos by other users.

## Technologies Used

+ Ruby on Rails
+ PostgreSQL
+ React.js
+ Redux
+ jQuery
+ SCSS
+ Cloudinary

## Features

+ User accounts with authentication
+ Drag-and-drop uploading for images
+ Organize photos into an unlimited number of albums
+ User commenting on photos
+ Add tags to photos and view photos by tag

#### Uploading Photos

Users can either drag and drop or click to upload a photo. Once a valid image has been uploaded, a submit form is rendered so that users can add a title and description to their photo.

![UploadExample](http://res.cloudinary.com/shuttr/image/upload/v1506724367/uploadscreencast-min_foujja.gif)

#### Adding to albums and tags

When viewing their own photo, users will see an "Add to album" button that will open a modal with a dropdown menu populated with albums they've created. Users will also see an "Add tags" button that will render a text input that allows them to create and add tags to their photo.

![PhotoEditing](http://res.cloudinary.com/shuttr/image/upload/v1506726163/photo-update-min_ufmccf.gif)


## Future Improvements

#### Infinite Scroll
An infinite scroll will be implemented on the homepage to allow users to view the photos index more efficiently.

#### Search
A search bar will be added so that users can search for photos by tags.
