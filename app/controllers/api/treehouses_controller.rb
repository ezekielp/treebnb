class Api::TreehousesController < ApplicationController

    def index
        @treehouses = Treehouse.all
        render :index
    end

    def search
        keyword_result = Treehouse.search_by_keyword(params[:search_term])
        # debugger
        if (params[:start_date] != "") && (params[:end_date] != "")
            start_date = params[:start_date]
            end_date = params[:end_date]
            @treehouses = Treehouse.search_by_dates(keyword_result, start_date, end_date)
        else
            @treehouses = keyword_result
        end
        # debugger;
        render :index
    end

    def show
        @treehouse = Treehouse.find(params[:id])
        render :show
    end

    private
    def treehouse_params
        params.require(:treehouse).permit(:name, :description, :owner_id, :address, :lat, :lng, :price, :search_term, :start_date, :end_date, photos: [])
    end

end