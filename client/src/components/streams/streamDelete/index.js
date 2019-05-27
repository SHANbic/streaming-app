import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStream, deleteStream } from "../../../actions";
import Modal from "../../Modal";
import history from "../../../history";

class StreamDelete extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.id);
    this.props.fetchStream(this.props.match.params.id);
  }

  renderTitle() {
    if (!this.props.stream) return "";
    else return this.props.stream.title;
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui negative button"
        >
          DELETE
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }
  render() {
    return (
      <Modal
        title="Delete Stream"
        content={`Are you sure you want to delete ${this.renderTitle()} ? This cannot be undone !`}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
