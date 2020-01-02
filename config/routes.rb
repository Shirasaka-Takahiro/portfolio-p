Rails.application.routes.draw do

  get 'about/index'
  get 'about/show'
  root to: 'home#index'

  resources :homes

end
