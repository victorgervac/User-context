import React from "react";
import { Form, Input } from "semantic-ui-react";

class UserForm extends React.Component {
  state: {
    firstname: "",
    lastname: "",
    useremail: "",
  };
  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    const { firstname, lastname, useremail } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field
          control={Input}
          name="firstname"
          label="First name"
          value={this.state.username}
          placeholder="Firstname"
          onChange={this.handleChange}
        />
        <Form.Field
          control={Input}
          name="laststname"
          label="last name"
          value={this.state.username}
          placeholder="lastname"
          onChange={this.handleChange}
        />
        <Form.Field
          name="useremail"
          control={Input}
          value={this.state.useremail}
          label="E-Mail"
          placeholder="E-mail"
          onChange={this.handleChange}
        />
        <Form.Button>Update: {this.props.passMePlease}</Form.Button>
      </Form>
    );
  }
}
export default UserForm;
