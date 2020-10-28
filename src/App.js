import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Feedback from 'components/Feedback';
import FeedbackSubmitted from 'components/FeedbackSubmitted';
import FeedbackMeasurements from 'components/FeedbackMeasurements';
import FeedbackStart from 'components/FeedbackStart';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/feedback/measurements">
					<FeedbackMeasurements />
				</Route>
				<Route path="/feedback/submitted">
					<FeedbackSubmitted />
				</Route>
				<Route path="/feedback/:uuid">
					<Feedback />
				</Route>
				<Route path="/">
					<FeedbackStart />
				</Route>
			</Switch>
		</Router>
	)
}

export default App;
