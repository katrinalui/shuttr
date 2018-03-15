json.extract! photo, :id, :img_url, :title, :description, :width, :height, :owner_id
json.posted_time_ago photo.posted_time_ago
json.post_date photo.formatted_date
json.owner photo.owner.username
json.owner_avatar photo.owner.img_url
