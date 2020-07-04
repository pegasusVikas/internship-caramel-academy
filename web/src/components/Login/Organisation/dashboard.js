import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
class Dashboard extends Component{
    constructor(props)
    {
        super(props);
    }
render() {
    const user=this.props.location.state;
    // console.log('state',this.props.location.state);
    return (
      <div>  
          {user?<Content user={user} />:<Redirect to="/lms/organisation/organisation_login" /> }             
      </div>

    )
  
};
}

class Content extends Component{
  constructor(props)
  {
      super(props);
  }
render() {
  const user=this.props.user;
  return (
    <div>    
        <h2> Welcome {user.organisation_name} ! </h2>
    </div>

  )

};
}

export default Dashboard;