import React from "react";
import Modal from "../../Modal";
import history from "../../../history";

const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <button className="ui negative button">DELETE</button>
      <button className="ui button">Cancel</button>
    </React.Fragment>
  );

  return (
    <div>
      Stream Delete
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream? ( this can't be undone )"
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </div>
  );
};

export default StreamDelete;
