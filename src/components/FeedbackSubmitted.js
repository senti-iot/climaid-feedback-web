import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router';
import { Typography, Grid } from '@material-ui/core';
import { useHistory } from 'react-router';

import Header from 'components/Header';
import mainStyles from 'styles/mainStyles';

const FeedbackSubmitted = () => {
	const classes = mainStyles();
	const history = useHistory();
	const location = useLocation();
	const [count, setCount] = useState(5);

	const uuid = location.state.uuid;
	const room = location.state.room;

	const updateCountdown = useCallback(() => {
		let newCount = count - 1;
		setCount(newCount);

		if (newCount === 0) {
			history.push('/feedback/measurements/', { uuid: uuid, room: room });

		}
	}, [count, history, uuid, room]);

	useEffect(() => {
		let timer = setInterval(() => updateCountdown(), 1000);
		return () => clearInterval(timer);
	}, [updateCountdown]);

	return (
		<div className={classes.background}>
			<Header roomName={room.name} />
			<div className={classes.submittedIconWrapper}>
				<Grid container direction="column" alignItems="center" justify="center">
					<Grid item xs={12}>
						<div className={classes.submittedIconBg}>
							<img src={require(`assets/buttons/cold_large.svg`).default} alt="" />
						</div>
					</Grid>
					<Grid item xs={12} style={{ marginTop: 20 }}>
						<Typography variant="h3">Du oplever at her er det for koldt</Typography>
					</Grid>
					<Grid item xs={12} style={{ marginTop: 80 }}>
						<Typography variant="h4">Tak for din besvarelse!</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant="body2">Du omstilles om {count} sekunder</Typography>
					</Grid>
				</Grid>
			</div>
		</div>
	)
}

export default FeedbackSubmitted;