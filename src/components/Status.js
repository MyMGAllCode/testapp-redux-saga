import React, { Component } from 'react';
import {connect} from 'react-redux';

class Address extends Component {
  render() {
    return (
      <div>
       <label>Login Status::</label><span style={{'color':'green'}}>{this.props.loginStatus}</span>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    loginStatus:state.loginReducer.loginStatus
  };
}

export default connect(mapStateToProps)(Address);
