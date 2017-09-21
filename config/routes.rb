Rails.application.routes.draw do
  root to: 'root#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update] do
      resources :photos, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :photos, only: [:index, :create, :show, :update, :destroy]
  end
end
