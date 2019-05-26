import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../../actions";
import StreamForm from "../streamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    console.log(formValues);
  };
  render() {
    if (!this.props.streams) return <div>loading...</div>;
    else
      return (
        <div>
          <h3>Edit a stream</h3>
          <StreamForm
            initialValues={_.pick(this.props.streams, "title", "description")}
            onSubmit={this.onSubmit}
          />
        </div>
      );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { streams: state.streams[ownProps.match.params.id] };
};
export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit);
