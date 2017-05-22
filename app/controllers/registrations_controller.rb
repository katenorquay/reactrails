class RegistrationsController < Devise::RegistrationsController
  
  def create
    @user = User.new(params[:user])
    if @user.save
      format.json { render :show, status: :created, location: @user }
      return
    else
      warden.custom_failure!
      format.json { render json: @user.errors, status: :unprocessable_entity }
    end
  end
end
