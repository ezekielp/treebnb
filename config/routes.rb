Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create] do 
      resources :bookings, only: [:index, :show, :update, :destroy]
    end
    resource :session, only: [:create, :destroy]
    resources :treehouses, only: [:index, :show] do
      resources :bookings, only: [:create]
    end
  end

end
