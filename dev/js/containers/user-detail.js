import React, { Component } from 'react';
import { connect } from 'react-redux';


class UserDetail extends Component {
  render() {
      if (!this.props.user) {
        return (<h4>Select a user...</h4>);
      }
    return (
      <div>
        <img src={this.props.user.thumnail} />
        <h2>{this.props.user.first} {this.props.user.last}</h2>
        <h3>Age: {this.props.age}</h3>
        <h3>Description: {this.props.description}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser
  }
};

export default connect(mapStateToProps)(UserDetail);