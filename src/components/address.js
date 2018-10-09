import React from 'react';

const Address = () => {
  return (
    <div className="address">
      <p className="text-success">Addresses</p>
      
          <div className="form-group row">
            <label className="col-form-label col-md-2">Business: </label>
            <div className="col-md-8">
              <textarea className="form-control"></textarea>
              
            </div>
          </div>
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">This is the mailing address</label>
            <button className="btn btn-sm btn-primary ml-4">Map it</button>
          </div>
        
      </div>
  );
}

export default Address;