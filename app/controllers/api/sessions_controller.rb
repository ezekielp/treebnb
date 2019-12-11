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
            render json: ["Invalid email and/or password"], status: 422
        end
    end

    def destroy
        current_user.reset_session_token!
        session[:session_token] = nil
        render json: {}
    end

end
