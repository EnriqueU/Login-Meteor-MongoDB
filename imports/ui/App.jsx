import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';

// App component - represents the whole app
class App extends Component {

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text1 = ReactDOM.findDOMNode(this.refs.textInput1).value.trim();
    const text2 = ReactDOM.findDOMNode(this.refs.textInput2).value.trim();

    Meteor.call('tasks.insert', text1, text2);

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput1).value = '';
    ReactDOM.findDOMNode(this.refs.textInput2).value = '';
  }
  render() {
    return (
      <div className="container">
        <form class="dark-matter" onSubmit={this.handleSubmit.bind(this)} >
          <h1>Registrese</h1>
          <span>Please fill all the texts in the fields.</span>
          <p>
          <label>
            <span>Nombres: </span>
            <input
              type="text"
              ref="textInput1"
              placeholder="Ingrese sus Nombres"
            />
          </label>
          <label>
            <span>Apellidos: </span>
            <input
              type="text"
              ref="textInput2"
              placeholder="Ingrese sus Apellidos"
            />
          </label>
          </p>
        </form>
      </div>
    );
  }
}

App.propTypes = {
};

export default createContainer(() => {
  return {};
}, App);
