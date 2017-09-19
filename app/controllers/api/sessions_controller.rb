class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username], params[:user][:password]
    )

    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: ['Invalid username and/or password'], status: :unprocessable_entity
    end
  end

  def destroy
    if !current_user
      render json: ["No one to log out!"], status: 404
    else
      logout!
      render json: { message: 'You have been logged out.' }
    end
  end
end
