Rails.application.routes.draw do
  root to: 'root#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update] do
      resources :photos, only: [:index]
      resources :albums, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :photos, only: [:index, :create, :show, :update, :destroy] do
      resources :comments, only: [:create]
      member do
        post 'edit_album_membership'
      end
    end
    resources :albums, only: [:create, :show, :update, :destroy]
    resources :comments, only: [:show, :update, :destroy]
  end
end
