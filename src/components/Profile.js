import React, { Component } from 'react';
import Address from './Address';
import {connect} from 'react-redux';
 


class Profile extends Component {
  render() {

      console.log("props Data:",this.props);
    return (

      <div>
      <label>User Name::</label><span style={{'color':'green'}}>{this.props.credentials.username}</span><br/><br/>
      <label>Password::</label><span style={{'color':'green'}}>{this.props.credentials.secret}</span><br/><br/>
       <Address /> 
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    credentials:state.loginReducer
  };
}

export default connect(mapStateToProps)(Profile);
