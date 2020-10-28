import React from 'react';
import { useLocation } from 'react-router';
import { Typography } from '@material-ui/core';

import Header from 'components/Header';
import mainStyles from 'styles/mainStyles';

const FeedbackStart = () => {
	const classes = mainStyles();
	const location = useLocation();
	console.log(location.state);
	return (
		<div className={classes.background}>
			<Header />
			<Typography variant="h2">Scan en QR kode for at komme videre</Typography>
		</div>
	)
}

export default FeedbackStart;