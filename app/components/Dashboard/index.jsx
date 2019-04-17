import React             from 'react';
import axios            from 'axios';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount(event) {
    axios.get('/appts/all')
    .then((appointments) => {
      this.setState({
        appointments: appointments.data
      });
    })
  }

  render() {
    return (
      <div>
          {/* Show latest appts to prove it's workring */}
          <title>W3.CSS Template</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
          <style dangerouslySetInnerHTML={{__html: "\nbody {font-family: \"Times New Roman\", Georgia, Serif;}\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Playfair Display\";\n  letter-spacing: 5px;\n}\n" }} />
          {/* Navbar (sit on top) */}
          <div className="w3-top">
          <div className="w3-bar w3-white w3-padding w3-card" style={{letterSpacing: '4px'}}>
            <a href="#home" className="w3-bar-item w3-button">Health Profile</a>
            {/* Right-sided navbar links. Hide them on small screens */}
            <div className="w3-right w3-hide-small">
              <a href="#login" className="w3-bar-item w3-button">Login</a>
              <a href="#signup" className="w3-bar-item w3-button">Sign Up</a>
              {/*<a href="#contact" className="w3-bar-item w3-button">Contact</a>*/}
            </div>
          </div>
        </div>
        {/* Header */}
        <header className="w3-display-container w3-content w3-wide" style={{maxWidth: '1600px', minWidth: '500px'}} id="home">
          <img className="w3-image" src="/w3images/hamburger.jpg" alt="Hamburger Catering" width={1600} height={800} />
          <div className="w3-display-bottomleft w3-padding-large w3-opacity">
            <h1 className="w3-xxlarge">Le Catering</h1>
          </div>
        </header>
        {/* Page content */}
        <div className="w3-content" style={{maxWidth: '1100px'}}>
          {/* About Section */}
          <div className="w3-row w3-padding-64" id="about">
            <div className="w3-col m6 w3-padding-large w3-hide-small">
              <img src="/w3images/tablesetting2.jpg" className="w3-round w3-image w3-opacity-min" alt="Table Setting" width={600} height={750} />
            </div>
            <div className="w3-col m6 w3-padding-large">
              <h1 className="w3-center">About Health Profile</h1><br />
              <p className="w3-large">This Health Profile app was created to allow users to document their appointments....</p>
             
            </div>
          </div>
          <hr />
          <hr />
          Appointments: {JSON.stringify(this.state.appointments)}
          {/* Contact Section */}
          <div className="w3-container w3-padding-64" id="contact">
            <h1>Contact</h1><br />
            <p>Let the developers know how they can improve!</p>
            <form action="/action_page.php" target="_blank">
              <p><input className="w3-input w3-padding-16" type="text" placeholder="Name" required name="Name" /></p>
              {/*<p><input className="w3-input w3-padding-16" type="number" placeholder="How many people" required name="People" /></p>*/}
              {/*<p><input className="w3-input w3-padding-16" type="datetime-local" placeholder="Date and time" required name="date" defaultValue="2017-11-16T20:00" /></p>*/}
              <p><input className="w3-input w3-padding-16" type="text" placeholder="Message" required name="Message" /></p>
              <p><button className="w3-button w3-light-grey w3-section" type="submit">SEND MESSAGE</button></p>
            </form>
          </div>
          {/* End page content */}
        </div>
        {/* Footer */}
        <footer className="w3-center w3-light-grey w3-padding-32">
          <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" className="w3-hover-text-green">w3.css</a></p>
        </footer>
        <p />
      </div>
    )
  }
} 