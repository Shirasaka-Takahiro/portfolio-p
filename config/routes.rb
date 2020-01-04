Rails.application.routes.draw do

  get 'works/index'
  get 'about/index'
  get 'about/show'
  root to: 'home#index'

  resources :homes

end
