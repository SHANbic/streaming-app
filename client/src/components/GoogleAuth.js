import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  state = {
    isSignedIn: null
  };

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
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {this.props.signIn()}
    else {this.props.signOut()}
  };

  signOutClick = () => {
    this.auth.signOut();
  };

  signInClick = () => {
    this.auth.signIn();
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn)
      return (
        <button onClick={this.signOutClick} className="ui red google button">
          Sign out
        </button>
      );
    else
      return (
        <button onClick={this.signInClick} className="ui blue google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default connect(
  null,
  { signIn, signOut }
)(GoogleAuth);
