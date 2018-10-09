import React from 'react';

const Note = () => {
  return (
    <div className="col-md-12">
      <div className="form-group">
        <p>Notes:</p>
        <textarea className="form-control" rows="7" col="60"></textarea>
      </div>
    </div>
  );
}

export default Note;