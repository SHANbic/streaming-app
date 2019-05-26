import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../../actions";

class StreamCreate extends React.Component {
  renderInput = ({ input, label, meta }) => {
    const classError = `${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={`field ${classError}`}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  renderError({ error, touched }) {
    if (error && touched) {
      return <div className="ui error message">{error}</div>;
    }
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter a title for your stream"
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) errors.title = "Please enter a title";
  if (!formValues.description)
    errors.description = "Please enter a description";
  return errors;
};
export default reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate);
