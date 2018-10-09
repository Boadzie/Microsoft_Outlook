import React from 'react';

const Internet = () => {
  return (
    <div className="internet">
      <p className="text-success">Internet</p>
      
          <div className="form-group row">
            <label className="col-form-label col-md-2">Email: </label>
            <div className="col-md-10">
              <input type="email" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-md-2">Display as: </label>
            <div className="col-md-10">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-md-2">Web page address: </label>
            <div className="col-md-10">
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-md-2">IM address: </label>
            <div className="col-md-10">
              <input type="text" className="form-control" />
            </div>
          </div>
        
      </div>
  );
}

export default Internet;