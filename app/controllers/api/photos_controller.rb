class Api::PhotosController < ApplicationController
  def index
    @photos = if params[:user_id]
                Photo.where(owner_id: params[:user_id]).includes(:owner)
              elsif params[:tag_id]
                Tag.photos.where(id: params[:tag_id])
              else
                Photo.all.includes(:owner)
              end

    render :index
  end

  def show
    @photo = Photo.includes(:owner, :albums, :comments, :tags).where(id: params[:id]).first
    if @photo
      render :show
    else
      render json: ['Photo does not exist'], status: 404
    end
  end

  def create
    @photo = current_user.photos.new(photo_params)

    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @photo = current_user.photos.find_by(id: params[:id])

    if @photo && @photo.update_attributes(photo_params)
      render :show
    else
      render json: @photo.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @photo = current_user.photos.find_by(id: params[:id])
    @photo.destroy
    render :show
  end

  def edit_album_membership
    @photo = current_user.photos.find_by(id: params[:id])
    @photo.album_ids = params[:albums]
    render :show
  end

  def add_tag
    @photo = current_user.photos.find_by(id: params[:id])

    if @photo.tags.create(tag_params)
      render :show
    else
      render json: ['Photo does not exist'], status: 404
    end
  end

  def remove_tag
    @photo = current_user.photos.find_by(id: params[:id])

    if @photo.tags.delete(Tag.find(params[:tag][:id]))
      render :show
    else
      render json: ['Photo does not exist'], status: 404
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:img_url, :title, :description)
  end

  def tag_params
    params.require(:tag).permit(:name)
  end
end
