import { combinedReducers } from 'redux';
import UserReducer from './reducer-users';


// this is how we trun the big users obj into one obj/ reduce it so we can pass it thro the store as a single obj vs the multiple objects it was before;
// Whatever we save the obj in(in our case 'users' it has to remain like that throughout our application. What we choose to name the obj is abitrary)

// we save our obj in a main obj const allReducers which we pass in the store as a single/ reduced obj.

const allReducers = combinedReducers({
  users: UserReducer
});

export default allReducers;