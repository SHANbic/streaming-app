import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../../actions";
import Modal from "../../Modal";
import history from "../../../history";

class StreamDelete extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    return (
      <React.Fragment>
        <button className="ui negative button">DELETE</button>
        <button className="ui button">Cancel</button>
      </React.Fragment>
    );
  }
  render() {
    return (
      <div>
        Stream Delete
        <Modal
          title="Delete Stream"
          content="Are you sure you want to delete this stream? ( this can't be undone )"
          actions={this.renderActions()}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

/* const mapStateToProps = state => {
  return null;
}; */
export default connect(
  null,
  { fetchStream }
)(StreamDelete);
