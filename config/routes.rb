Rails.application.routes.draw do
  root "pages#index"
  get 'hello_world', to: 'hello_world#index'
  devise_for :users
  resource :sessions, only: [:create, :destroy], controller: :sessions
  resource :registrations, only: [:create, :destroy], controller: :registrations
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
