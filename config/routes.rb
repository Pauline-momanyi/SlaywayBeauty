Rails.application.routes.draw do
  namespace :api do
    post '/signup', to: 'users#create'
    get '/me', to: 'users#show'

    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'


  # post './bookings', to: 'users#create'
    resources :bookings, only: [:index, :create, :destroy, :update]
    resources :admins, only: [:index, :update]
    resources :pasts, only: [:index]
    resources :reviews, only: [:index, :create]
  end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
