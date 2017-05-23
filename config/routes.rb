Rails.application.routes.draw do
  get 'sendmails/mailing'

  root'welcome#index'
  post 'sendmails/enrollment'
  # get '*path', to: "welcome#index", format: :html
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
