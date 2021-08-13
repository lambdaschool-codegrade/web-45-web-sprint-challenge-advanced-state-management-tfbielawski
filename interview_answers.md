/**
 * Tom Bielawski
 * Lambda School WEB 45
 * 3.2.5 Advanced State Management Sprint Challenge 
 * 8/13/2021
 */

# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
Provides a way to share values between components without explicity sharing a prop

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions: Action is represented by an object and contains the properties of an event from the app
Reducers: Accept the previous state and action, and it returns the next state
Store: Redux store is a procedure for connecting an app to Redux library


3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
Redux thunk permits a function to return another function

4. What is your favorite state management system you've learned and this sprint? Please explain why!
Context-api because no prop-drilling