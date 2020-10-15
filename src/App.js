import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Feedback from 'components/Feedback';
import FeedbackResult from 'components/FeedbackResult';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/feedback">
					<FeedbackResult />
				</Route>
				<Route path="/">
					<Feedback />
				</Route>
			</Switch>
		</Router>
	)
}

export default App;
