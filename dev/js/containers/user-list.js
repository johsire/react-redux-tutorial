import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; 


class UserList extends Component {
  render() {
    return (
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
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

// instead of only default exporting the UserList(our default stateless component), we use connect, a function to make it aware of our app's store or user data; thus making a smart component or a container
export default connect(mapStateToProps)(UserList);
