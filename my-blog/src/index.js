import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
	apiKey: "AIzaSyBB5ArQ6PzAnvSNk6Sg_H-8d_3DV3xIhKk",
	authDomain: "my-react-blog-e126f.firebaseapp.com",
	projectId: "my-react-blog-e126f",
	storageBucket: "my-react-blog-e126f.appspot.com",
	messagingSenderId: "907410295744",
	appId: "1:907410295744:web:852eea8729613f21ff9625",
	measurementId: "G-9Z62FB2WWZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
