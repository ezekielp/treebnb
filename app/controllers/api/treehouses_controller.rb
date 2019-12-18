class Api::TreehousesController < ApplicationController

    def index
        @treehouses = Treehouse.all
        render :index
    end

    def search
        # @treehouses = Treehouse.where # etc.
        # search_term = "Middle"
    end

    def show
        @treehouse = Treehouse.find(params[:id])
        render :show
    end

    private
    def treehouse_params
        params.require(:treehouse).permit(:name, :description, :owner_id, :address, :lat, :lng, :price, photos: [])
    end

end