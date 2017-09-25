class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.where(owner_id: params[:user_id]).includes(:owner)
  end

  def show
    @album = Album.includes(:owner, :photos).where(id: params[:id]).first
  end

  def create
    @album = current_user.albums.new(album_params)

    if @album.save
      render :show
    else
      render json: @album.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @album = current_user.albums.find_by(id: params[:id])

    if @album && @album.update_attributes(album_params)
      render :show
    else
      render json: @album.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @album = current_user.albums.find_by(id: params[:id])
    @album.destroy
    render :show
  end

  private

  def album_params
    params.require(:album).permit(:title, :description)
  end
end
