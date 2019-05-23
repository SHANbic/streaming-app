import React from "react";

class GoogleAuth extends React.Component {

  state = {
    isSignedIn : null
  }

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "992071234658-re7hqd97kellcsuudl1lsqnj7ajtci1o.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({
            isSignedIn: this.auth.isSignedIn.get()
          });
        });
    });
  }

renderAuthButton(){
if (this.state.isSignedIn === null) {
  return <div></div>
} else if (this.state.isSignedIn) return <div>Logged in</div>
else return <div>Log in</div>
}

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
