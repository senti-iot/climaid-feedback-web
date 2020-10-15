import React from 'react';
import { useLocation } from 'react-router';

import Header from 'components/Header';
import mainStyles from 'styles/mainStyles';

const FeedbackResult = () => {
	const classes = mainStyles();
	const location = useLocation();
	console.log(location.state);
	return (
		<div className={classes.background}>
			<Header />
		</div>
	)
}

export default FeedbackResult;