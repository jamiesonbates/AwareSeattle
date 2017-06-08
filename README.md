# Aware Seattle

## Introduction
The project aims to make Seattle police incident report data discoverable via an interactive map as well as provide an alert system so people can get notified when a crime occurs nearby.

This project was built as a Capstone during Galvanize's 6 month web dev immersive course, which I attended from October 2016 - April 2017. The project was built in two weeks. 

## Problem
As someone living in Seattle, I have a vague sense of the crime that occurs nearby where I live and work, however, my impression is not fueled by facts. Additionally, I don't have a go to source for local news, and go unaware when something serious happens nearby. This app enables people living in Seattle to explore crime in the areas where they spend time and discover for themselves what is going on around them. To give users continued awareness, the app provides an alert system where a user can set a radius and crime type to recieve emails when a crime matches those settings.
 
## Primary Use Case
Have you moved to Seattle recently or moved to a different neighborhood. Maybe you worry about crime nearby and want to explore what is happening nearby. When you hear about Aware Seattle you go onto the site via your computer and begin exploring the interactive map and end up signing up to receive alerts when a crime occurs nearby your home and work.

## Context
This app provides a service in multiple context. It offers discovery in the browser, ideally on a computer (however mobile works and is responsive). The app also offers continued interaction via the alert system, as you can receive emails when something occurs, which includes a link back to the app where you can explore a given alert further.

## Technologies
* HTML/CSS
* JavaScript
* React
* Redux
* Node
* Express
* Knex
* PostgreSQL
* PostGIS

## Future Development
* Streamline unity between interactive map and alert system.
* Provide stronger visuals to demonstrate change over time.
* Build a forum system so users can communicate with one another about what they are discovering.

## Features Explained
#### Interactive Map
The interactive map is usable for both non-registered and registered users. Powered by the Google API, the map can be interacted with via tools such as, "Add a Location," "Filter by Incident," and "Filter by Date." You can also select a given location to navigate around the map itself. Utilizing the tools causes different sets of "incidents" to appear or disappear on the map. 

#### Alert System and Data Sync
Within the database, data is only 6 months old. Each day the external API is called, new data is parsed and added to the database, and old data is deleted. As soon as a fresh database is created, the new data is compared to existing alerts and emails are generated and sent if there are matches. This is done using the Heroku Scheduler (cronjob esque).

#### Location Based
To determine whether a given incident falls within a certain radius (specified by the user for the alert system), the app uses the power of the postGIS extension. Specifically, utilizing this tool allows tables to be indexed by geographic location and the postGIS function used, provides the means to query for all incidents within a given radius of a point. 
