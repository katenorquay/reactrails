module V1
  class UsersController < ApplicationController
    include ReactOnRails::Controller
    skip_before_action :authenticate_user_from_token!, only: [:index, :create]

    def index
    end

    # POST /v1/users
    # Creates an user
    def create
      @user = User.new user_params

      if @user.save
        redux_store("UserApp", props: @user, prerender: false)
        render_html
      end
    end

    def update
      @user = User.find_by_email(user_params[:username])

      if @user.update_attributes(user_params)
        render :json=> @user.as_json(:email=> @user.email), :status=>201
        return
      else
        warden.custom_failure!
        render :json=> @user.errors, :status=>422
      end
    end

    def destroy
      @user = User.find_by_email(user_params[:email])
      if @user.destroy
        render :json=> {success: 'user was successfully deleted'}, :status=>201
      else
        render :json=>{error: 'user could not be deleted'}, :status=>422
      end
    end

    private

    def user_params
      params.require(:user).permit(:email, :username, :password, :password_confirmation, :current_password)
    end

    def render_html
      respond_with do |format|
        format.html
      end
    end
  end
end
