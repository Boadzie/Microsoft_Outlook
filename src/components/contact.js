import React, { Component} from 'react';

class Contact extends Component {

  render(){
  return (
    <div className="contact">
      <p className="text-success">Phone numbers</p>
      
          <div className="form-group row">
            <label className="col-form-label col-md-2">Business: </label>
            <div className="col-md-10">
              <input 
              type="text" 
              name="business"
              className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-md-2">Home: </label>
            <div className="col-md-10">
              <input 
              type="text" 
              name="home"
              className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-md-2">Business fax: </label>
            <div className="col-md-10">
              <input 
              type="text" 
              name="businessFax"
              className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-md-2">Mobile: </label>
            <div className="col-md-10">
              <input 
              type="text" 
              name="mobile"
              className="form-control" />
            </div>
          </div>
        
      </div>
  );
  }
}

export default Contact;