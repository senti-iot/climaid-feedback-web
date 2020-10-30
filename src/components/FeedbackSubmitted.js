import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router';
import { Typography, Grid } from '@material-ui/core';
import { useHistory } from 'react-router';
import moment from 'moment';

import Header from 'components/Header';
import mainStyles from 'styles/mainStyles';
import { postFeedback } from 'data/api';

const FeedbackSubmitted = () => {
	const classes = mainStyles();
	const history = useHistory();
	const location = useLocation();
	const [count, setCount] = useState(5);
	const [loading, setLoading] = useState(true);
	console.log(location.state);
	const uuid = location.state.uuid;
	const room = location.state.room;
	const feedback = location.state.feedback;

	const updateCountdown = useCallback(() => {
		if (!loading) {
			let newCount = count - 1;
			setCount(newCount);
			if (newCount === 0) {
				history.push('/feedback/measurements/', { uuid: uuid, room: room });
			}
		}
	}, [count, history, uuid, room, loading]);

	useEffect(() => {
		let timer = setInterval(() => updateCountdown(), 1000);
		return () => clearInterval(timer);
	}, [updateCountdown]);

	useEffect(() => {
		async function sendData() {
			let postData = {};
			postData["uuid"] = room.device.qualitativeDeviceUuid;
			postData["time"] = moment().format('YYYY-MM-DD HH:mm:ss');
			postData["warm"] = feedback.includes('warm') ? 1 : 0;
			postData["cold"] = feedback.includes('cold') ? 1 : 0;
			postData["windy"] = feedback.includes('windy') ? 1 : 0;
			postData["heavyair"] = feedback.includes('heavyair') ? 1 : 0;
			postData["concentration"] = feedback.includes('concentration') ? 1 : 0;
			postData["tired"] = feedback.includes('tired') ? 1 : 0;
			postData["itchyeyes"] = feedback.includes('itchyeyes') ? 1 : 0;
			postData["lighting"] = feedback.includes('lighting') ? 1 : 0;
			postData["blinded"] = feedback.includes('blinded') ? 1 : 0;
			postData["noisy"] = feedback.includes('noisy') ? 1 : 0;

			let data = await postFeedback(postData);
			console.log(data);
			if (data) {
				// 	setLoading(false);
			}
		}

		if (room) {
			sendData();
		}

	}, []);

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