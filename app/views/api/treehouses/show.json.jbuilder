json.extract! @treehouse, :name, :description, :owner_id, :address, :lat, :lng, :price
json.photoUrls @treehouse.photos.map { |photo| url_for(photo) }