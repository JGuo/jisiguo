Jisiguo::Application.routes.draw do
  resources :posts, :path => "blog"

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'posts#about'

  match '/about', to: 'posts#about', via: 'get', as: 'about'
  match '/work', to: 'posts#work', via: 'get', as: 'work'
  match '/contact', to: 'posts#contact', via: 'get', as: 'contact'
  match '/blog', to: 'posts#index', via: 'get', as: 'blog'

  match 'work/boosted', to: 'posts#boosted', via: 'get', as: 'boosted'
  match 'work/rpmwest', to: 'posts#rpmwest', via: 'get', as: 'rpmwest'
  match 'work/ribbon', to: 'posts#ribbon', via: 'get', as: 'ribbon'
  match 'work/exec', to: 'posts#exec', via: 'get', as: 'exec'
  match 'work/chicagofounders', to: 'posts#chicagofounders', via: 'get', as: 'chicagofounders'
  match 'work/googlecafes', to: 'posts#googlecafes', via: 'get', as: 'googlecafes'
  match 'work/accenture', to: 'posts#accenture', via: 'get', as: 'accenture'
  match 'work/ferrari', to: 'posts#ferrari', via: 'get', as: 'ferrari'
  match 'work/snocom', to: 'posts#snocom', via: 'get', as: 'snocom'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
