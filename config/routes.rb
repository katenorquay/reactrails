Rails.application.routes.draw do
  root "pages#index"
  get 'hello_world', to: 'hello_world#index'
  devise_for :users, controllers: { registrations: 'registrations', sessions: 'sessions' } 
end
