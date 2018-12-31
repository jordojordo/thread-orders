import React, { Component } from 'react';
import * as firebase from 'firebase';
import FirebaseAuth from 'react-firebaseui';

import config from './config/FirebaseConfig';

class SignInScreen extends Component {
	render() {
		return (
			<div>
				<firebaseui />
			</div>
		);
	}
}

export default SignInScreen;