class ApplicationController < ActionController::Base

    skip_before_action :verify_authenticity_token
    helper_method :logged_in?, :current_user

    def logged_in?
        !!current_user
    end

    def current_user
        # debugger
        @current_user ||= User.find_by(session_token: session[:session_token])
        @current_user
    end

    def login_user(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

end
