class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )

        if @user
            login_user(@user)
            render :show
        else
            if User.find_by(email: params[:user][:email])
                render json: ["Password invalid"], status: 422
            elsif
                render json: ["Email can't be found"], status: 422
            end
        end
    end

    def destroy
        current_user.reset_session_token!
        session[:session_token] = nil
        render json: {}
    end

end




