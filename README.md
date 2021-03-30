# stickyNotes
Sticky Notes

To run the server
npm run dev

File structure

UI:

src/

- components/
    Header.js : It should have 2 features to be covered
      1. adding email option
      2. searching the notes
    Note.js : DONE
      1. Adding a Note
      2. Deleting a Note
      
      Remaining part : update the same to the backend using axios
- Screens/

  Home.js : DONE
    Contains3 buttons
      Generate UUID : Done
      Check : Not Done
      Create : Done
      
     Remaining task: Check button should have an action which should validate the uuid with the backend. If check gives a response true then Create Button should be visible else it should be hidden.
          If there is any change made in the uuid then again make the Create button invisible. 
  NoteScreen.js
    Note UI : Done
    It should contain 2 component where Note component is done(Note.js) and Header.js is remaining.
    
 - App.js
    Please dont make any changes here
    
 Backend:
 
  - Config : DONE
    For DB connection
  
  - Contoller : Inproces
    Presently there are only 3 methods
    
    get all products
    get product by id
    create new uuid
    
    All the other post and update methods have to updated here
    
  - Data - DONE
    Dummy Data for testing purpose. This data can be filled through seederScript.js.
    
  - Models - Inprocess
    Database model is maintained here. Presently the UI structure does not contain an object array for notes. Since the design would be easier if we keep an array of string. This model has to be modified.
    
  - Routes
    noteRoutes.js
      This is where we have to keep all the routes to be used like post,get, patch etc.
      
    Kindly dont make any changes in any other files which are not included above.
      
