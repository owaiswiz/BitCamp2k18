Rails.application.routes.draw do
  namespace :teams do
    get 'dashboard/index'
    post 'dashboard/add_member'
  end

  devise_for :teams, controllers: {
    sessions: 'teams/sessions',
    registrations: 'teams/registrations'
  }
  get 'teams/register'

  get 'teams/update'

  get 'teams/submit_abstract'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/' => 'home#index'
  get '/schedule' => 'home#schedule'
  root to: 'home#index'
end
