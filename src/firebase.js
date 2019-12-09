import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const config = {
	apiKey: "AIzaSyBUGQEb0qPWhfg2K656aosICs92lBvps90",
	authDomain: "dashboard-2bcf8.firebaseapp.com",
	databaseURL: "https://dashboard-2bcf8.firebaseio.com",
	projectId: "dashboard-2bcf8",
	storageBucket: "dashboard-2bcf8.appspot.com",
	messagingSenderId: "144264300633",
	appId: "1:144264300633:web:2623669ab714f7b745c948",
	measurementId: "G-RZRD723ZDD"
};

class Firebase {
	constructor() {
		app.initializeApp(config);
		this.auth = app.auth();
		this.db = app.firestore();
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password);
	}

	logout() {
		return this.auth.signOut();
	}

	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password);
		return this.auth.currentUser.updateProfile({
			displayName: name
		});
	}

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve);
		});
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName;
	}
}

export default new Firebase();
