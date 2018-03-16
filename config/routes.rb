Rails.application.routes.draw do
  devise_for :admins
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  get 'view_travel_reimbursement/:file_name' => 'admin#view_travel_reimbursement', file_name: /.*/
  namespace :teams do
    get 'dashboard/index'
    post 'dashboard/add_member'
    get 'dashboard/travel_reimbursement'
    patch 'dashboard/travel_reimbursement' => 'dashboard#apply_travel_reimbursement'
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
