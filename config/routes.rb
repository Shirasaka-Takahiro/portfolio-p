Rails.application.routes.draw do

  get 'contacts/index'
  get 'contacts/show'
  get 'works/index'
  get 'about/index'
  get 'about/show'
  root to: 'home#index'
  get 'home/index'

  resources :homes

end
