import React, { Component } from 'react';

class InputText extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      inputText: ""
    }

    this.submit = this.submit.bind(this);
    this.keyPressed = this.keyPressed.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
  }
  submit() {
    var reg = new RegExp(/^[A-Za-z]*$/, 'gi');
    if (this.state.inputText.match(reg)) {
      this.props.returnFunction(this.state.inputText);
    }
    else {
      alert("Only a-z");
    }
  }

  keyPressed(event) {
    console.log("keyPressed", event.key);
    if (event.key === "Enter") {
      this.submit();
    }
  }

  inputChanged(event) {
    console.log("inputChanged", event.target.value);
    this.setState({ inputText: event.target.value });
  }

  render() {
    return (
      <div>
        <input onKeyPress={this.keyPressed} type="text" value={this.state.inputText} onChange={this.inputChanged} />
        <button onClick={this.submit} >Submit</button>
      </div>
    );
  }
}

export default InputText;
