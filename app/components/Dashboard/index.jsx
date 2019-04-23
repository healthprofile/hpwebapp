import React from 'react';
import Login from '../Login/index.jsx';

<script type="text/javascript" src="app.js"></script>




export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
<nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
  <a className="navbar-brand" href="#">Health Profile</a>

<div id="displayName"></div> 

    <script type="text/javascript">
    var clientContext = new SP.ClientContext(_spPageContextInfo.webServerRelativeUrl);
    var user = clientContext.get_web().get_currentUser();
    clientContext.load(user);

    clientContext.executeQueryAsync(onUserNameSuccess, onUserNameFail);
    function onUserNameSuccess() {
        document.getElementById("displayName").innerText = "Welcome, " + user.get_title();
        //To display last name first and for cases where full name consists of only two words.
        //var userToken = user.get_title().split(' ');
        //document.getElementById("displayName").innerText = "Welcome, " + userToken[1] + " " + userToken[0];

    }

    function onUserNameFail(args) {
        document.getElementById("displayName").innerText = 'Error:' + args.get_message();
    }
    //recommended to use ExecuteOrDelayUntilScriptLoaded on sp.js
    </script>


  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" href="/">Logout</a>
    </li>
{/*    <li className="nav-item">
      <a className="nav-link" href="/login">Log In</a>
    </li>*/}
  </ul>
</nav>
<div className = "container-fluid">
        {/* Page content */}
        <div>
          {/* About Section */}
          <div>
            <div>
              <h1>About Health Profile</h1><br />
              <p>This Health Profile app was created to allow users to document their appointments....</p>
             
            </div>
          </div>
          <hr />
          <hr />
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

            <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </div>
          </div>
          {/* End page content */}
        </div>
  </div>
      </div>
    )
  }
} 