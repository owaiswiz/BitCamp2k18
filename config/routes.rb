Rails.application.routes.draw do
  devise_for :teams, controllers: {
    sessions: 'teams/sessions',
    registrations: 'teams/registrations'
  }
  get 'teams/register'

  get 'teams/update'

  get 'teams/submit_abstract'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/' => 'home#index'
  root to: 'home#index'
end
