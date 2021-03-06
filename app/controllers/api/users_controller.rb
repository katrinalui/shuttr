class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @user = User.find_by(id: params[:id])

    if @user == current_user && @user.update_attributes(user_params)
      render :show
    elsif !@user
      render json: ['User not found'], status: 400
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
