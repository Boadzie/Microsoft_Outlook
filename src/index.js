import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// COMPONENTS
import Profile from './components/profile';
import Internet from './components/internet';
import Contact from './components/contact';
import Address from './components/address';
import Note from './components/notes';
import Footer from './components/footer'; // importing the footer

class  App  extends Component {

  render(){
  return (
    <div>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>Microsoft Outlook Contact Form</h2>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <form>
                <Profile />
                <Internet />
                <Contact />
                <Address /> 
                <button className="btn btn-success">Submit</button>
              </form>
            </div>

            <div className="col-md-5">
              <Note />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Footer />
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));