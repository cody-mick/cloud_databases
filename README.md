# Overview

The purpose of this software is to keep a log of all the growers and farmers that we work with at the company that I currently work for. It is designed to be a simple index of the growers, ID numbers, cellars, yields, crop variety and so on. Currently the software has a few test growers contained in the database, and there is the ability to add, update, remove, and query the database from the application.

My purpose for writing this software was to learn more about Google Firebase/Firestore, and to be able to provide a helpful tool at work. Even though we have databases and such currently, it is nice to be able to log a simple index of the crucial information.

Code walkthrough and demo video :point_down:

[Software Demo Video](https://youtu.be/QhUhl8JSG0w)

# Cloud Database

I am using Google Firebase along side Google Firestore.

The structure of my databse revolves around a central collection of 'growers' and then within the growers there are unique documents. Each one of these documents is associated with a grower and the different pieces of information about them, such as: grower_id, grower_name, grower_variety, grower_yield, etc.

# Development Environment

This project is developed in VSCode while using the Firebase tools to locally host the database in order to test functionality.

I used HTML and CSS for the form and its appearance, and then JavaScript for all of the databse interaction.

# Useful Websites

* [Google Firebase Docs](https://firebase.google.com/docs)
* [W3 Schools JavaScript](https://www.w3schools.com/js/)
* [YouTube Fireship.io](https://www.youtube.com/c/Fireship)

# Future Work

The project is in a minimally functional state. The 4 basic components of adding, editing, deleting, and simple queries are in place. Future work includes these items:

* Multiple tables for more complex queries
* User authentication to increase security
* Putting the JS in its own file. As it currently stands, the only way I got things working was using script tags on the HTML page. Which I know is not best practices.
* Mastering security rules within the Firebase console.