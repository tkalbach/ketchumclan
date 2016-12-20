Rails.application.routes.draw do
  get 'pages/home'

  get 'pages/about'

  get 'pages/news'

  get 'pages/calendar'

  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'

  resources :sessions, only: [:create, :destroy]
  resource :home, only: [:show]

  root to: "pages#home"
end

