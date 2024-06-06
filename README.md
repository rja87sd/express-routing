# Objectives

Set up a new Express server.
Use Express Router to organize routes.
Handle route parameters.
Create a basic nested route structure.

# Instructions
## Project Initialization

Create a new directory named express-routing.

Navigate into the directory.

Initialize a new Node.js project.
  ![alt text](./documentation/image.png)

Install Express.
  ![alt text](./documentation/image-1.png)

Create a file named data.json and add the following sample data:

[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "role": "admin",
    "profile": {
      "age": 30,
      "location": "New York",
      "interests": ["coding", "hiking", "reading"]
    }
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "role": "user",
    "profile": {
      "age": 25,
      "location": "San Francisco",
      "interests": ["traveling", "music", "sports"]
    }
  },
  {
    "id": 3,
    "name": "Sam Johnson",
    "email": "sam.johnson@example.com",
    "role": "moderator",
    "profile": {
      "age": 28,
      "location": "Chicago",
      "interests": ["gaming", "movies", "technology"]
    }
  },
  {
    "id": 4,
    "name": "Alice Brown",
    "email": "alice.brown@example.com",
    "role": "user",
    "profile": {
      "age": 22,
      "location": "Austin",
      "interests": ["art", "photography", "yoga"]
    }
  },
  {
    "id": 5,
    "name": "Michael Green",
    "email": "michael.green@example.com",
    "role": "user",
    "profile": {
      "age": 35,
      "location": "Seattle",
      "interests": ["cooking", "gardening", "cycling"]
    }
  }
]
  ![alt text](./documentation/image-2.png)

## Create the Server

Create a file named index.js.
  ![alt text](./documentation/image-3.png)

Set up a basic Express server that listens on port 3000.
  ![alt text](./documentation/image-4.png)

Create a basic route that responds with "Hello, World!" at the root URL.
  ![alt text](./documentation/image-5.png)

## Organize Routes Using Express Router

Create a directory named routes.
  ![alt text](./documentation/image-6.png)

Inside the routes directory, create a file named index.js.
  ![alt text](./documentation/image-7.png)

In index.js, set up a router that handles:

A GET request at the root URL (/) that responds with "Hello from the main router!".
A GET request at /about that responds with "About Us".
  ![alt text](./documentation/image-8.png)

Import and use the router in the main index.js file.
  ![alt text](./documentation/image-9.png)

## Handle Route Parameters

Modify the router to handle a GET request at /user/:id that responds with the user ID.
  ![alt text](./documentation/image-10.png)

Test this route by navigating to URLs like http://localhost:3000/user/123.
  ![alt text](./documentation/image-11.png)

## Create Nested Routes

Inside the routes directory, create a file named users.js.
  ![alt text](./documentation/image-12.png)

Set up the users.js router to handle:

A GET request at the root URL (/users) that responds with "List of all users".
A GET request at /:id that responds with the user ID.
  ![alt text](./documentation/image-13.png)

Modify the main router (index.js) to use the users.js router for routes starting with /users.
  ![alt text](./documentation/image-14.png)

## Test the Routes

Start the server using Nodemon.
  ![alt text](./documentation/image-15.png)

Test the following routes:
http://localhost:3001/ - Should display "Hello from the main router!".
  ![alt text](./documentation/image-16.png)

http://localhost:3001/about - Should display "About Us".
  ![alt text](./documentation/image-17.png)

http://localhost:3001/user/123 - Should display "User ID: 123".
  ![alt text](./documentation/image-18.png)

http://localhost:3001/users - Should display "List of all users".
![alt text](./documentation/image-19.png)

http://localhost:3001/users/123 - Should display "User ID: 123".
![alt text](./documentation/image-20.png)

# Submission Guidelines
Create a new GitHub repository named express-routing.
Push your project to the repository.
Submit the link to your GitHub repository.

# Credits
Credit to ChatGPT for assistance and code comments.