# smart-library
Prototype for DTU's smart library.


This project has a rails api and ionic frontend


Start the API from the api directory with
`rails s`

Start the mobile frontend with 
`ionic serve`


In the *api/config/application.rb* is a setting 

'Access control allow origin' 

that needs to be set for the IP address of the machine running ionic.
