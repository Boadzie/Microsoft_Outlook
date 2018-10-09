import React, {Component} from 'react';

class Profile extends Component {

  render(){
  return (
    <div className="col-md-12">
      <div className="profile-form">      
        <div className="form-group row">
          <label className="col-form-label col-md-2">Full Name: </label>
          <div className="col-md-8">
            <input 
            type="text" 
            name="fullName"
            className="form-control" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-form-label col-md-2">Company: </label>
          <div className="col-md-8">
            <input 
            type="text" 
            name="company"
            className="form-control" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-form-label col-md-2">Job title: </label>
          <div className="col-md-8">
            <input 
            type="text" 
            name="jobTitle"
            className="form-control" />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-form-label col-md-2">File as: </label>
          <div className="col-md-8">
            <input 
            type="file" 
            name="fileAS"
            className="form-control" />
          </div>
        </div>
      </div>
      <img src={require("../images/profile.jpeg")} className="profile-img" alt="placeholder user" />
      <div className="clearfix"></div>
    </div>
  )
  }
}

export default Profile;