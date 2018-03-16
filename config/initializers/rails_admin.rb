RailsAdmin.config do |config|

  config.main_app_name = ["BitCamp 2018", "Admin"]
  config.excluded_models << "Admin"

  config.model 'Member' do
    list do
      field :id
      field :name
      field :phone
      field :tshirt_size
    end
    configure :college_id do
      pretty_value do # used in list view columns and show views, defaults to formatted_value for non-association fields
        "<img src='#{value}' width=300 />".html_safe
      end
    end
    configure :ticket do
      pretty_value do # used in list view columns and show views, defaults to formatted_value for non-association fields
        "<a href='/view_travel_reimbursement/#{value}'>Download Ticket</a>".html_safe if value.present?
      end
    end
  end

  config.model 'Team' do
    list do
      field :team_id
      field :name
      field :email
      field :college_name
      field :members
      field :ticket_file do
        pretty_value do # used in list view columns and show views, defaults to formatted_value for non-association fields
          "<a href='/view_travel_reimbursement/#{value}'>Download Ticket</a>".html_safe if value.present?
        end
      end
    end
  end

  ### Popular gems integration

  ## == Devise ==
  config.authenticate_with do
    warden.authenticate! scope: :admin
  end
  config.current_user_method(&:current_admin)

  ## == Cancan ==
  # config.authorize_with :cancan

  ## == Pundit ==
  # config.authorize_with :pundit

  ## == PaperTrail ==
  # config.audit_with :paper_trail, 'User', 'PaperTrail::Version' # PaperTrail >= 3.0.0

  ### More at https://github.com/sferik/rails_admin/wiki/Base-configuration

  ## == Gravatar integration ==
  ## To disable Gravatar integration in Navigation Bar set to false
  # config.show_gravatar = true

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end
end
