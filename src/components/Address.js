import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Status from './Status'; 


class Address extends Component {
  render() {
    return (
      <div>
       <label> Address Component::</label><span style={{'color':'green'}}>{this.props.address}</span><br/><br/>
       <Status/>
       
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    address:state.loginReducer.address
  };
}

export default connect(mapStateToProps)(Address);
