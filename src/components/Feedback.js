import React, { useEffect, useState } from 'react';
import { Grid, Typography, Button, CircularProgress } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useParams } from "react-router-dom";

//import { api } from 'data/api';
import Header from 'components/Header';
import FeedbackButton from 'components/FeedbackButton';
import mainStyles from 'styles/mainStyles';
import Alert from 'components/Alert';
import { getRoom } from 'data/api';

const Feedback = () => {
	const classes = mainStyles();
	const history = useHistory();
	const { uuid } = useParams();

	const [feedback, setFeedback] = useState([]);
	const [alertShown, setAlertShown] = useState(false);
	const [loading, setLoading] = useState(true);
	const [room, setRoom] = useState(null);

	useEffect(() => {
		async function fetchData() {
			setLoading(true);

			let data = await getRoom(uuid);

			if (data) {
				setRoom(data);
				setLoading(false);
			}
		}

		if (uuid) {
			fetchData();
		}
	}, [uuid]);

	const handleClick = type => {
		let newFeedback = [...feedback];
		var index = newFeedback.indexOf(type);
		if (index !== -1) {
			newFeedback.splice(index, 1);
		} else {
			newFeedback.push(type);
		}
		setFeedback(newFeedback);
	}

	const handleSend = () => {
		if (!feedback.length) {
			setAlertShown(true);
		} else {
			history.push('/feedback/submitted', { feedback: feedback, uuid: uuid, room: room });
		}
	}

	const handleAlertClose = () => {
		setAlertShown(false);
	}

	return (
		<div className={classes.background}>
			{!loading ?
				<>
					<Header roomName={room.name} />
					<Grid container spacing={0}>
						<Grid item xs={4} align="center">
							<FeedbackButton key={1} type="cold" label="For koldt" feedback={feedback} onClick={() => handleClick("cold")} />
						</Grid>
						<Grid item xs={4} align="center">
							<FeedbackButton key={2} type="tired" label="Søvnig" feedback={feedback} onClick={() => handleClick("tired")} />
						</Grid>
						<Grid item xs={4} align="center">
							<FeedbackButton key={3} type="heavyair" label="Tungluft" feedback={feedback} onClick={() => handleClick("heavyair")} />
						</Grid>

						<Grid item xs={6} align="center">
							<FeedbackButton key={4} type="noisy" label="Larm" feedback={feedback} onClick={() => handleClick("noisy")} />
						</Grid>
						<Grid item xs={6} align="center">
							<FeedbackButton key={5} type="blinded" label="Blændet" feedback={feedback} onClick={() => handleClick("blinded")} />
						</Grid>

						<Grid item xs={12} align="center">
							<Typography variant="h1" style={{ marginTop: 20 }}>Hvordan har du det?</Typography>
							<Typography variant="h3" style={{ marginBottom: 20 }}>Tryk og vælg hvad du oplever</Typography>
						</Grid>

						<Grid item xs={4} align="center">
							<FeedbackButton key={6} type="itchyeyes" label="Tørre øjne" feedback={feedback} onClick={() => handleClick("itchyeyes")} />
						</Grid>
						<Grid item xs={4} align="center">
							<FeedbackButton key={7} type="good" label="Godt" feedback={feedback} onClick={() => handleClick("good")} />
						</Grid>
						<Grid item xs={4} align="center">
							<FeedbackButton key={8} type="warm" label="For varmt" feedback={feedback} onClick={() => handleClick("warm")} />
						</Grid>

						<Grid item xs={6} align="center">
							<FeedbackButton key={9} type="lighting" label="Skarpt lys" feedback={feedback} onClick={() => handleClick("lighting")} />
						</Grid>
						<Grid item xs={6} align="center">
							<FeedbackButton key={10} type="windy" label="Træk" feedback={feedback} onClick={() => handleClick("windy")} />
						</Grid>

						<Grid item xs={12} align="center" style={{ marginTop: 20, marginBottom: 20 }}>
							<Button variant="contained" color="primary" classes={{ label: classes.sendButtonLabel }} className={classes.sendButton} onClick={() => handleSend()}>SEND</Button>
						</Grid>
					</Grid>

					<Alert open={alertShown} handleClose={handleAlertClose} text="Du skal vælge minimum en ting du oplever." />
				</>
				: <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CircularProgress /></div>}
		</div>
	)
}

export default Feedback;