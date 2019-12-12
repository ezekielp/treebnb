# json.array! @treehouses do |treehouse|
#     json.extract! treehouse, :name, :description, :owner_id, :address, :lat, :lng, :price
#     json.photoUrls treehouse.photos.map { |photo| url_for(photo) }
# end

@treehouses.each do |treehouse|
    json.set! treehouse.id do
        json.extract! treehouse, :name, :description, :owner_id, :address, :lat, :lng, :price
        json.photoUrls treehouse.photos.map { |photo| url_for(photo) }
    end
end