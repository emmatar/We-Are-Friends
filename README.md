

  # We-Are-Friends  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/blog/license/mit-0)

  A backend social network API

  ## Description

  We Are Friends is a social network API that will run backend logic to create, edit, and delete users, thoughts, and reactions to simulate a real life social networking application. Utilizing Mongodb and Mongoose for our schema and the manipulation of our data, we are able to have data communicate without uitilizing any relations between the data. 

  ## Table of Contents
  - [Description](#description)
  - [License](#license)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Questions](#questions)

  ## License 

  This application is under MIT Licensing.<br />
  Click the license badge above for more information regarding this license.
  
  ## Installation

  Required items to run application: Node Package Manager, express, mongodb, mongoose and an API testing platform (Insomnia or Postman will work).<br/>
  To install the application, before running enter this code block text in the integrated terminal after installing.


  ## Usage

Once We Are Friends is initiated, open your choice of API testing platform, and enter the URL for the localhost and api as the parameter for the data: http://localhost:3001/api/

From here, there will be 4 sections the user can pull and manipulate data from:
1. User       http://localhost:3001/api/users
2. Thoughts   http://localhost:3001/api/thoughts
3. Reactions  http://localhost:3001/api/thoughts/reactions
4. Friends    http://localhost:3001/api/users/friends

In each one of these sections, HTTP requests such as GET, POST, PUT, and DELETE will provide the user to receive, create, and delete data from the database that houses the sections. 

GET Requests: 
In order to execute GET requests, the user just needs to enter one of the four urls provided above and send the request to retreive the data information.

POST Requests: 
In order to execute POST requests, the user just needs to enter one of the four urls provided above, and then enter a body (in json format) to include the new information before sending the request.

PUT Requests: 
In order to execute PUT requests, the user just needs to enter one of the four urls provided above, AS WELL AS, where the user wants the change (PUT) to exist. To delcare where, the user must specifiy the last parameter in the URL to match the id of the data they want to change. <br />
Example URL for PUT request: <br />
http://localhost:3001/api/users/3<br />
The last parameter of '3' is the identity of the data the user is wanting to change. <br />
After identifying what the PUT request will alter, we can follow the exact same steps in POST, where we enter the correct json format for that selected section. 

DELETE Requests: 
In order to execute DELETE requests, the user just needs to enter one of the four urls provided above, AS WELL AS, where the user wants the delete to exist. To delcare where, the user must specifiy the last parameter in the URL to match the id of the data they want to change. <br />
Example URL for DELETE request: <br />
http://localhost:3001/api/friends/3<br />
The last parameter of '3' is the identity of the data the friend is wanting to delete.


[Here's a link to the Walkthrough Video!](...)

![Screenshot1]()
![Screenshot2]()


Woah, a Congratulations are in order. "CONGRATULATIONS", on using the best "whelming" piece of software that was ever made for the UNIVERSE! "Yahoooo!"



  ## Questions
  Application questions? 
  
  GitHub Account: [Emmatar](https://github.com/emmatar)

  Have More Questions?!

  Email me here: m.matar515@gmail.com
  

  