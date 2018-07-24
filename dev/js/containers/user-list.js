import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 

// select user is the action generator that gets imported here to tell us when a user carries out an action(e.g clicks a button or fills an input field..etc)
import { selectUser } from '../actions/index';


class UserList extends Component {

  createListeItems() {
    return this.props.users.map((user) => {
      return (
        <li key={user.id}
        // this is how we create the user event / its a function
        onClick={() => this.props.selectUser(user)}
        >{user.first} {user.last}</li>
      )
    })
  }


  render() {
    return (
    <ul>
      {this.createListeItems()}
    </ul>
    );
  }
}


// This function takes a pice of your application store - the app state/ the main data & passes it into the component - as a property (it can pass any piece of the store it wants to)
// in our case we pass our users

// mapStateToProps takes a piece of state, which is part of our store and sends it into our component as props
function mapStateToProps(state) {
  return {
    users: state.users
  }
};
 
function matchDispatchToProps(dispatch) {
  return bindActionCreators({selectUser: selectUser}, dispatch)
}

// instead of only default exporting the UserList(our default stateless component), we use connect, a function to make it aware of our app's store or user data; thus making a smart component or a container
export default connect(mapStateToProps, matchDispatchToProps)(UserList);
