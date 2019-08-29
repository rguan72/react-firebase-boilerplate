import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';
import firebase from './Firebase';

export default class App extends Component {
  state = { username: null, status: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
    firebase.database()
      .ref('status')
      .on('value', (snapshot) => {
        this.setState({ status: snapshot.val() })
    })
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        {this.state.status ? <p> {`You are ${this.state.status}`} </p>: <p>Loading... please wait!</p>}
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}
