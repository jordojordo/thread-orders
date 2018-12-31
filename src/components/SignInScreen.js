import React from 'react';
import * as firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import config from '../config/FirebaseConfig';

firebase.initializeApp(config);

const uiConfig = {
	signInFlow: 'popup',
	signInSuccessUrl: 'signedIn',
	signInOptions: [
	  firebase.auth.EmailAuthProvider.PROVIDER_ID
	]
}

class SignInScreen extends React.Component {
	render() {
		return (
			<div>
				<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
			</div>
		);
	}
}

export default SignInScreen;
