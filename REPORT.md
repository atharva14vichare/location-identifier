# LOCATION APP IDENTIFIER

This project was developed for Master's project, guided by Prof. Jacob Biehl and Andrew Xu. 

I was trying to impement a website which will help students find a room on campus. The Rooms are filtered based on two major criteria that are location(building) and amenities of the room. All rooms will be tagged with data such as location, occupancy, surround sensing restrictions etc.


# README

1) Install Node.js on the workstation.
2) Clone the code from the repository shared. 
3) Direct to the folder and run following command:
    a) npm install (downloads out all needed dependencies)
    b) npm start (starts a web server on localhost 3000)

# DESIGN PROTOTYPING

Before the development stage, I tried out paper protoyping (low fidelity prototyping) to understand the functional view. Further I also developed three different website layouts prototypes on Figma. A description about each design layout.

1) First layout gave optionn to search rooms by their locations. And all the rooms were just listed once you select out a particular location/building.

2) Second layout gave a filter for all the amenties and location to select from. And the list of rooms get updated with respect to the options you choose.

3) Third layout is a merged version of the first two layouts. It first ives out an option to choose a particular location, and then gives out filter for the amenties available in the rooms.


# CODE EXPLAINATION.

1) App.js work as the home page of the website any changes such as sidebar, filter, hearders are to be made over here.
2) Idex.js is just user host React server, hence can be ignored. 
3) There are three major CSS Files present two for index styling( card.css and index.css) and one for styling the pages consisting rooms(RoomPage.css).
4)Code for each room has been developed in individual javascript file. This can be replicated as per need. 
5)All the commented where there is need to add and edit data. Eg Charts , Images, Descriptions etc.









For Doubts you can contact
Atharva Vichare
MS Computer Science
aav38@pitt.edu