// this entire function is called action creator; we call it from the application; it's job is to return an object called an action;

export const selectUser = (user) => {
  console.log('You clicked on user:', user.first)
  return {
    // this is the action/object: made up of two parts: the type & payload.
    // this is the action generator that a user initiates(click, input etc.); 
    // we send it to the userlist(export it);
    type: "USER_SELECTED",
    payload: user
  }

};