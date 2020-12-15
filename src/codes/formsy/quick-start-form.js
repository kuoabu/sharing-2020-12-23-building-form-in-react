import Formsy from 'formsy-react';
import React from 'react';
import MyInput from './MyInput';

export default class App extends React.Component {
  disableButton = () => {
    this.setState({ canSubmit: false });
  }

  enableButton = () => {
    this.setState({ canSubmit: true });
  }

  submit = (model) => {
    fetch('http://example.com/', {
      method: 'post',
      body: JSON.stringify(model),
    });
  }

  render() {
    return (
      <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
        <MyInput name="email" validations="isEmail" validationError="This is not a valid email" required />
        <button type="submit" disabled={!this.state.canSubmit}>
          Submit
        </button>
      </Formsy>
    );
  }
}
