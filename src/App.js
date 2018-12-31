import React, { Component } from 'react';
import * as firebase from 'firebase';

import SignInScreen from './components/SignInScreen';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp(config);
  }

  render() {
    return (
      <div>
        <SignInScreen />
      </div>
    );
  }
}

export default App;
