# LOCATION APP IDENTIFIER

This project was developed as a Master's project under the guidance of Professors Jacob Biehl and Andrew Xu.

The goal was to implement a website to assist students in finding rooms on campus. The rooms are filtered based on two primary criteria: the building location and the room amenities. Each room is tagged with details such as location, occupancy, surrounding sensing restrictions, etc.


# README

1) Install Node.js on the workstation.
2) Clone the code from the repository shared. 
3) Navigate to the folder and run the following commands::
    a) npm install (downloads out all needed dependencies)
    b) npm start (starts a web server on localhost 3000)

# DESIGN PROTOTYPING

Before the development stage, I explored paper prototyping (low fidelity prototyping) to understand the functional view of the project. Additionally, I developed three different website layout prototypes using Figma, each with a unique design approach:

1) The first layout provided an option to search for rooms by their locations. Once a specific location or building was selected, all available rooms were listed.

2) The second layout included filters for both amenities and locations. The list of rooms would update according to the options selected.

3)The third layout combined elements of the first two. It initially offered an option to choose a specific location, followed by filters for the amenities available in the rooms.

# CODE EXPLAINATION.
1)App.js serves as the home page of the website. Any changes to the sidebar, filters, or headers should be made here.

2)Index.js hosts the React server and can be ignored.

3)There are three major CSS files: two for index styling (card.css and index.css) and one for styling the pages that display rooms (RoomPage.css).

4)The code for each room is developed in individual JavaScript files. These can be replicated as needed.

5)Comments are added where there is a need to include or edit data, such as charts, images, descriptions, etc.









Author
Atharva Vichare
MS Computer Science
aav38@pitt.edu