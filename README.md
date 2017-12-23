# Readme

### Installation and Running

* Make sure you have installed Ruby (2.4.0 or greater) - [Install using rvm](https://rvm.io/rvm/install)
* Make sure you have a function postgres installation

### Only for the first time
1) Clone the repo && cd into it
2) Run `bundle install` 
3) Run `rake db:create`
4) Run `rake db:migrate`

### Running
* Run `rails s` from the root project directory to run.

### Development
* Templating engine used is erb ( similar to ejs )
* Stylesheets use SASS ( backwards compatible with css )


* Main Application layout is in app/views/layouts/application.html.erb
* Partials (navbar,footer) are location in app/views/shared

* Views are located in app/views 
	* Home Page - Index => app/views/home/index.html.erb
	* Home Page - About => app/views/home/about.html.erb
	* Home Page - Contact => app/views/home/contact.html.erb 
	* and so on.

* Javascripts are located in app/assets/javascripts
	* Everything related to home page (index,contact,about) => app/assets/stylesheets/home.js

* Stylsheets are situated in app/assets/stylesheets
	* Everything related to home page (index, contact, about) => app/assets/stylesheets/home.scss
