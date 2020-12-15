// MyInput.js
import { withFormsy } from 'formsy-react';
import React from 'react';

class MyInput extends React.Component {
  changeValue = (event) => {
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    const errorMessage = this.props.errorMessage;

    return (
      <div>
        <input onChange={this.changeValue} type="text" value={this.props.value || ''} />
        <span>{errorMessage}</span>
      </div>
    );
  }
}

export default withFormsy(MyInput);
