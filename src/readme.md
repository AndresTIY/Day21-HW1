## Day 21 Homework
#### Explorer Mode
- Create an online chat app that can host multiple users that have unique usernames

DN: html input, take input value and plug into a var in js. make sure it's not already taken.

- All users can submit new chat messages which should update chat area in about 2 seconds. Users cannot edit any chat messages. Older messages can be deleted but only by the user that created messages

DN: input form, text area, some type of input that takes text and pushes it to the server, when server gets it, it get's sent to chat

- Messages should display the name of user who sent them and a timestamp. Should be displayed so that the newest chats are closest to the input area for writing new messages

DN: need to look up how to include timestamps

- App should include 2 pages, but 1 html file. First page should prompt user to "login" by providing a username. Second should display previously sent messages and an input area to write new messages to the list. The user should only be able to see the chat messages after they have loggin in by providing a user name

DN: Hide page 1 after user name is input and POST/PUT to server. Display page 2 with older messages

- Code should be modular. Should have the following 'views' and 'models' each in its own file:
  MODELS: Constructors
  - Session, for keeping track of info about the app's user. Should have a username property
  - Message, for keeping track of individual messages. Should have timestamp, sender, and body properties. It should have a save and delete method on its prototypes
  VIEWS: write a render function for each
  - Login, rendering login page and handling any user events that occur on login page
  - Chat, for rendering chat room page and handling any user events that occur on the chat page
  - Message, for rendering a single message to the chat area, and handling any user events that can occur for a single message

DN: what?

- Use tiny pizza server
- setInterval() enables you to run a function repeatedly after a specified amount of time has passed, like refreshing messages on the page.
- moment.js library for displaying dates/timestamps


WHEN: enter user name and click enter
WHAT: og card is no longer displayed, new card displayed
- user name get's saved

WHEN: user types in message and clicks submit
WHAT: name: timestamp: message is displayed in chat box
- this info needs to get sent to the server


#### just typing out my thoughts
- whenever we type in a new message and click submit, the message has to be added to the chat screen with
USER (TIMESTAMP): BODY syntax
  - could create a function that appends a <p> tag with 3 spans within
  - 
