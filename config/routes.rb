Rails.application.routes.draw do
  root "pages#index"
  devise_for :users, controllers: { registrations: 'registrations', sessions: 'sessions' }
end
