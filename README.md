Welcome to MusicMD, a great app to prepare for any of your upcoming concerts!

## [MusicMD](https://musicmd.herokuapp.com/#/)

## Overview

Music MD is a great way to find and prepare for your next concert. For frequent concert goers, casual concert attendees and music fans in general. Lets you enjoy all of the song your favorite artist is currently playing!

### How it works? 

This application will allow you to generate upcoming events/concerts based on a specific location search! This will populate a list of the upcoming events and allow you to 'follow' any of the events. Once a user 'follows' an event, a playlist (from the most recent posted setlist from the given artist) will be generated and added to their users profile. This will allow the user to listen to the playlist at any time and prepare for the concert. There is also a master library for each individual user that will be customizable based on the users preferences. A user will be able to add and remove songs from this library as they wish as well as play any song from this list. 

## Features

### Search Function

Our search function will allow the user to either click on our map or use our text bar to search locations for events. On a search we call the Ticketmaster API to compile a list of concerts and events. This allows users to see the specific details for any upcoming events. Using API calls to setlist.fm and deezer, we are able to populate the event setlist and playable songs for the user to listen to. 

![Search Page](https://github.com/mkochalko/musicMD/blob/master/frontend/public/SearchFeature.png)

## Group Members
#### Backend Lead - [Jon Lai](https://github.com/jonjonlai) (Backend Team)
#### Flex - [Kit Patel](https://github.com/ankitspatel1145) (Backend Team)
#### Frontend Lead - [Barrett Helzel](https://github.com/bhelzel) (Frontend Team)
#### Team Lead - [Matt Kochalko](https://github.com/mkochalko) (Frontend Team)

## Technologies Used

### MERN Stack
This project is build using the MERN stack(MongoDB, Express.js, React and Node.js). MERN stack allows us to use mainly JavaScript to create a well designed interactive website with great UX/UI. 

### Multiple API Implementation
* #### Google Maps API
  * Display search results on the page for events in a specific location with markers on each location
* #### Ticketmaster API
  * Gather upcoming concert information to list all upcoming events
* #### SetList API
  * Populate the most recent set list for a specific artist to then generate a playlist for the user to listen to
* #### Deezer API
  * Once a setlist is populated, Deezer will allow for music to be shown and played directly from the site for great user experience.


### Git Workflow
* As new software developers, this is our first experience working with a team. We all see the importance of being very meticulous with our workflow to make sure there are no issues. Our individual roles on the team mean the git workflow is a huge part of this project. Using a proper git workflow and checking in with each over whenever a question arises, has lead to a successful workflow throughout the project.
